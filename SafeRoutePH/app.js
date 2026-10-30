
"use strict";

// SafeRoute PH - Cagayan de Oro Pilot
// This is a preparedness prototype, not an official emergency service.

document.addEventListener("DOMContentLoaded", () => {
  initializeMap();
  initializeNavigation();
  initializeLocationButton();
  initializeEvacuationPlanner();
  initializeGoBagChecklist();
});

let cityMap = null;
let userLocationMarker = null;

function initializeMap() {
  const mapElement = document.getElementById("map");

  if (!mapElement || typeof L === "undefined") {
    if (mapElement) {
      mapElement.innerHTML =
        '<p style="padding:20px;color:#263b4c">Map unavailable. Check your internet connection and reload.</p>';
    }
    return;
  }

  // Approximate Cagayan de Oro city-center orientation point.
  // This is NOT an evacuation center or a safe-zone marker.
  cityMap = L.map("map").setView([8.481, 124.647], 12);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(cityMap);

  L.marker([8.481, 124.647])
    .addTo(cityMap)
    .bindPopup(
      "<strong>Cagayan de Oro City</strong><br>Approximate city-center reference point. Not an evacuation site."
    );

  setTimeout(() => cityMap.invalidateSize(), 200);
}

function initializeLocationButton() {
  const button = document.getElementById("locate-button");

  if (!button) return;

  button.addEventListener("click", () => {
    if (!navigator.geolocation) {
      alert("Your browser does not support location services.");
      return;
    }

    button.disabled = true;
    button.textContent = "Locating...";

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        if (cityMap) {
          cityMap.setView([latitude, longitude], 15);

          if (userLocationMarker) {
            cityMap.removeLayer(userLocationMarker);
          }

          userLocationMarker = L.marker([latitude, longitude])
            .addTo(cityMap)
            .bindPopup("<strong>Your current location</strong><br>Detected by your browser.")
            .openPopup();
        }

        button.disabled = false;
        button.textContent = "⌖ Find my location";
      },
      (error) => {
        let message = "Unable to get your location.";

        if (error.code === error.PERMISSION_DENIED) {
          message = "Location permission was denied. You can enable it in your browser settings.";
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          message = "Your current location is unavailable.";
        } else if (error.code === error.TIMEOUT) {
          message = "Location request timed out. Please try again.";
        }

        alert(message);
        button.disabled = false;
        button.textContent = "⌖ Find my location";
      },
      {
        enableHighAccuracy: true,
        timeout: 12000,
        maximumAge: 60000
      }
    );
  });
}

function initializeNavigation() {
  const sidebar = document.getElementById("sidebar");
  const menuButton = document.getElementById("menu-toggle");
  const navLinks = document.querySelectorAll(".nav-link");

  if (menuButton && sidebar) {
    menuButton.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");

      if (sidebar) sidebar.classList.remove("open");
    });
  });
}

function initializeEvacuationPlanner() {
  const form = document.getElementById("evacuation-form");
  const savedPlan = document.getElementById("saved-plan");

  if (!form || !savedPlan) return;

  const storageKey = "saferoute_cdo_evacuation_plan";

  function renderPlan(plan) {
    savedPlan.classList.add("has-plan");

    savedPlan.innerHTML = `
      <div class="empty-state-icon">✓</div>
      <div class="plan-details">
        <strong>${escapeHTML(plan.household || "Household evacuation plan")}</strong>
        <p><b>Barangay:</b> ${escapeHTML(plan.barangay || "Not provided")}</p>
        <p><b>Meeting point:</b> ${escapeHTML(plan.meetingPoint || "Not provided")}</p>
        <p><b>Emergency contact:</b> ${escapeHTML(plan.contact || "Not provided")}</p>
        <p><b>Last saved:</b> ${escapeHTML(plan.updatedAt)}</p>
        <p>Confirm your actual evacuation destination with local authorities.</p>
      </div>
      <button type="button" class="text-button" id="delete-plan">Delete</button>
    `;

    const deleteButton = document.getElementById("delete-plan");

    deleteButton.addEventListener("click", () => {
      if (confirm("Delete your saved evacuation plan from this browser?")) {
        localStorage.removeItem(storageKey);
        showEmptyPlan();
      }
    });
  }

  function showEmptyPlan() {
    savedPlan.classList.remove("has-plan");
    savedPlan.innerHTML = `
      <div class="empty-state-icon">▤</div>
      <div>
        <strong>No saved plan yet</strong>
        <p>Complete the form to create your household plan on this device.</p>
      </div>
    `;
  }

  const existingPlan = readLocalData(storageKey);

  if (existingPlan) {
    renderPlan(existingPlan);

    document.getElementById("household").value = existingPlan.household || "";
    document.getElementById("barangay").value = existingPlan.barangay || "";
    document.getElementById("meeting-point").value = existingPlan.meetingPoint || "";
    document.getElementById("family-contact").value = existingPlan.contact || "";
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const plan = {
      household: document.getElementById("household").value.trim(),
      barangay: document.getElementById("barangay").value.trim(),
      meetingPoint: document.getElementById("meeting-point").value.trim(),
      contact: document.getElementById("family-contact").value.trim(),
      updatedAt: new Date().toLocaleString()
    };

    if (!plan.household && !plan.barangay && !plan.meetingPoint && !plan.contact) {
      alert("Please enter at least one detail before saving.");
      return;
    }

    if (!saveLocalData(storageKey, plan)) {
      alert("Unable to save your plan. Check your browser storage settings.");
      return;
    }

    renderPlan(plan);
    alert("Your evacuation plan has been saved on this device.");
  });
}

function initializeGoBagChecklist() {
  const checklist = document.getElementById("checklist");
  const resetButton = document.getElementById("reset-checklist");

  if (!checklist) return;

  const storageKey = "saferoute_cdo_gobag";

  let savedItems = readLocalData(storageKey);

  if (!Array.isArray(savedItems)) {
    savedItems = [];
  }

  const checkboxes = checklist.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = savedItems.includes(checkbox.value);

    checkbox.addEventListener("change", updateChecklist);
  });

  function updateChecklist() {
    const completed = [];

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) completed.push(checkbox.value);
    });

    saveLocalData(storageKey, completed);

    const total = checkboxes.length;
    const count = completed.length;
    const percentage = total ? Math.round((count / total) * 100) : 0;

    document.getElementById("bag-progress").textContent = `${percentage}%`;
    document.getElementById("checklist-count").textContent =
      `${count} of ${total} items`;

    document.getElementById("progress-fill").style.width =
      `${percentage}%`;

    document.getElementById("checklist-message").textContent =
      percentage === 100
        ? "Great! Review and replenish your emergency kit regularly."
        : count === 0
          ? "Start preparing your emergency kit."
          : "Keep going. Every prepared item helps.";
  }

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      if (!confirm("Reset all go-bag checklist items?")) return;

      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });

      updateChecklist();
    });
  }

  updateChecklist();
}

function readLocalData(key) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.warn("Could not read browser storage:", error);
    return null;
  }
}

function saveLocalData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn("Could not save browser storage:", error);
    return false;
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const replacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };

    return replacements[character];
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(
    "#dashboard, #map-section, #planner, #go-bag, #hazards, #emergency"
  );

  const links = document.querySelectorAll(".nav-link");

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      links.forEach((link) => {
        const isActive =
          link.getAttribute("href") === `#${entry.target.id}`;

        link.classList.toggle("active", isActive);
      });
    });
  }, {
    rootMargin: "-20% 0px -65% 0px",
    threshold: 0
  });

  sections.forEach((section) => observer.observe(section));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.getElementById("sidebar")?.classList.remove("open");
  }
});
