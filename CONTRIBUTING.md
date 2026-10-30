# 🤝 Contributing to SafeRoute PH

Thank you for your interest in contributing to **SafeRoute PH**!

Contributions, bug fixes, suggestions, documentation updates, and feature improvements are welcome.

SafeRoute PH is an independent disaster preparedness and information platform initially focused on Cagayan de Oro City, Philippines.

This guide explains how to contribute while keeping the project organized, reliable, accessible, and maintainable.

---

## How to Contribute

### 1. Fork the Repository

Open the SafeRoute PH repository on GitHub and click **Fork** to create your own copy.

### 2. Clone Your Fork

Replace `your-username` with your GitHub username.

```bash
git clone https://github.com/your-username/SafeRoutePH.git
cd SafeRoutePH
```

### 3. Create a Branch

Create a separate branch for your changes.

For new features:

```bash
git checkout -b feature/your-feature-name
```

For bug fixes:

```bash
git checkout -b fix/your-bug-name
```

For documentation updates:

```bash
git checkout -b docs/your-documentation-update
```

For interface improvements:

```bash
git checkout -b ui/your-interface-improvement
```

### 4. Set Up the Development Environment

SafeRoute PH uses HTML, CSS, and JavaScript.

You will need:

- Visual Studio Code or another code editor.
- A modern web browser.
- Git.
- An internet connection for external map resources.
- Live Server or another local static web server.

Open the project folder in Visual Studio Code.

Install the **Live Server** extension if necessary.

Open `index.html`, right-click inside the editor, and select **Open with Live Server**.

The application will usually open at:

```text
http://127.0.0.1:5500/
```

No npm installation or build process is required for the current implementation.

### 5. Make Your Changes

You may contribute by:

- Improving the dashboard interface.
- Enhancing responsive layouts.
- Improving interactive map functionality.
- Improving browser geolocation handling.
- Adding verified official disaster information sources.
- Improving the Disaster Monitoring Center.
- Integrating accessible official weather information.
- Improving earthquake information access.
- Adding verified local emergency announcements.
- Improving emergency contact information.
- Enhancing household evacuation planning.
- Improving go-bag checklist functionality.
- Expanding disaster preparedness guides.
- Improving local storage handling.
- Improving accessibility and usability.
- Updating project documentation.
- Fixing bugs and optimizing application performance.

Keep your changes focused and consistent with the existing project structure.

---

## Testing Your Changes

Before submitting your work, run the application locally and check the affected features.

Make sure that:

- The application opens successfully.
- The dashboard displays correctly.
- Sidebar navigation works.
- The map loads correctly when internet access is available.
- The geolocation feature handles permission requests correctly.
- Emergency contact information is displayed correctly.
- The evacuation planner saves and retrieves information.
- The delete-plan function works as expected.
- Go-bag checklist items can be selected and reset.
- Checklist progress updates correctly.
- Official resource links open the intended websites.
- Monitoring information is not presented as live unless it is actually retrieved and verified.
- The application remains usable on desktop and mobile screens.
- Existing functionality has not been unintentionally broken.

Test your changes in more than one browser or screen size when practical.

The current project does not include a dedicated automated testing framework. If you introduce one, document its setup and commands.

---

## Commit Your Changes

Use clear commit messages that describe your modifications.

```bash
git add .
git commit -m "Improve disaster monitoring interface"
```

Other examples:

```bash
git commit -m "Improve interactive city map"
git commit -m "Add official disaster information source"
git commit -m "Fix evacuation planner storage"
git commit -m "Improve go-bag checklist"
git commit -m "Update project documentation"
```

---

## Push Your Branch

```bash
git push origin feature/your-feature-name
```

Replace the branch name with the one you created.

---

## Submit a Pull Request

Open your fork on GitHub and create a Pull Request against the original SafeRoute PH repository.

Include:

- A clear summary of your changes.
- The reason for the modification.
- Relevant testing results.
- Screenshots for interface modifications, if applicable.
- Official references for newly added disaster-related information.
- Any known limitations or issues.

---

# Development Guidelines

To keep SafeRoute PH maintainable and reliable, please follow these practices:

- Write clean and readable HTML, CSS, and JavaScript.
- Use meaningful variable, function, and class names.
- Keep functions focused on specific responsibilities.
- Follow the existing project structure.
- Avoid unnecessary external dependencies.
- Handle errors gracefully and provide useful feedback.
- Use semantic HTML elements where appropriate.
- Maintain responsive layouts for different screen sizes.
- Consider accessibility and keyboard navigation.
- Keep browser storage operations organized.
- Update documentation when features or setup instructions change.
- Avoid modifying unrelated parts of the project.

---

# Disaster Information and Data Accuracy Guidelines

Because SafeRoute PH deals with disaster preparedness, information accuracy is especially important.

Contributors must follow these guidelines when adding or modifying disaster-related information.

### 1. Use Reliable Sources

Prioritize official sources, including:

- PAGASA
- PHIVOLCS
- Cagayan de Oro City Disaster Risk Reduction and Management Department (CDRRMD)
- Official barangay and local government announcements.
- Other recognized Philippine government disaster-related agencies.

### 2. Verify Information Before Publishing

When adding disaster information, provide:

- The original information source.
- The official source link.
- The publication or observation date, when available.
- The relevant geographic coverage.
- The last verification date, where applicable.

Do not present outdated information as current.

### 3. Do Not Fabricate Emergency Alerts

Contributors must not create fictional:

- Weather warnings.
- Flood-level measurements.
- Earthquake reports.
- Emergency announcements.
- Road closures.
- Evacuation orders.
- Disaster response updates.

If a source is unavailable, clearly indicate that the information cannot currently be verified.

### 4. Evacuation Center Verification

Do not add an evacuation center merely because a location appears suitable.

Before listing a location as an official evacuation center, verify its designation with the appropriate local authority.

Where available, document:

- Official designation.
- Exact location and coordinates.
- Responsible authority.
- Operational status.
- Accessibility.
- Capacity, if officially provided.
- Applicable hazard information.
- Last verification date.

Do not describe an unverified location as a safe zone.

### 5. Distinguish Live Data From External Links

A link to an official monitoring website does not mean SafeRoute PH is receiving live data.

When integrating external information, distinguish between:

- Official source publication time.
- Observation or event time.
- Data retrieval time.
- Last successful update time.

Do not display a green monitoring indicator as proof that an area is safe.

### 6. Emergency Instructions

Preparedness information should be based on recognized official guidance.

Avoid publishing unsupported medical, rescue, evacuation, or emergency-response instructions.

When appropriate, direct users to authorized emergency responders.

---

# Mapping and Geographic Data Guidelines

SafeRoute PH uses Leaflet.js and OpenStreetMap for interactive mapping.

When modifying map functionality:

- Preserve proper OpenStreetMap attribution.
- Follow the applicable OpenStreetMap tile usage policy.
- Use accurate geographic coordinates.
- Avoid inventing geographic locations.
- Clearly distinguish reference markers from verified facilities.
- Do not label locations as safe without official verification.
- Request permission before accessing browser geolocation.
- Do not unnecessarily collect or transmit users' location information.

The current city-center marker is an approximate orientation reference only.

---

# Interface and User Experience Guidelines

When improving the user interface:

- Maintain consistency with the existing SafeRoute PH visual identity.
- Use the established navy, teal, blue, and complementary accent colors.
- Keep navigation labels understandable.
- Ensure buttons and interactive controls perform their advertised functions.
- Provide useful feedback when operations succeed or fail.
- Maintain responsive layouts.
- Use readable typography and appropriate contrast.
- Consider users accessing the platform during stressful situations.
- Keep essential emergency information easy to find.
- Avoid unnecessary animations that could interfere with usability.
- Include screenshots in Pull Requests when significant visual changes are introduced.

Prioritize clarity and accessibility over decorative design.

---

# JavaScript and Local Storage Guidelines

SafeRoute PH currently uses vanilla JavaScript and browser localStorage.

When modifying application functionality:

- Use consistent naming conventions.
- Avoid unnecessary global variables.
- Handle missing HTML elements safely.
- Validate user input before saving.
- Handle localStorage errors.
- Preserve existing saved information when updating features.
- Avoid storing unnecessary sensitive personal information.
- Never assume browser storage is encrypted or synchronized.
- Keep external service failures from breaking unrelated dashboard features.

If a future feature requires a backend, document its setup and security requirements.

---

# Security Guidelines

SafeRoute PH currently operates as a client-side web application and does not require API keys for its implemented features.

Contributors should still follow responsible development practices:

- Never commit passwords, API keys, tokens, or confidential information.
- Do not expose private credentials in JavaScript files.
- Avoid collecting unnecessary personal information.
- Request permission before using browser geolocation.
- Validate user-controlled input.
- Escape user-provided content before displaying it as HTML.
- Use HTTPS for external services whenever available.
- Review third-party libraries before introducing them.
- Do not execute arbitrary user-provided code.
- Avoid transmitting household or location information without a clear purpose and appropriate safeguards.

Report potentially serious security vulnerabilities privately to the project maintainer instead of publishing sensitive exploit details in a public issue.

---

# Reporting Bugs

If you discover a bug, open a GitHub Issue and include:

- A clear description of the problem.
- Steps to reproduce the issue.
- Expected behavior.
- Actual behavior.
- Relevant browser-console error messages.
- Operating system and browser.
- The affected feature or component.
- Screenshots, if applicable.

Remove private information from screenshots and logs before sharing them.

---

# Suggesting Features

Feature suggestions are welcome.

When proposing an improvement, explain:

- What the feature should do.
- What problem it solves.
- How it would benefit users.
- Whether it requires an external service or API.
- Its potential security or privacy considerations.
- Any implementation ideas or examples.

Possible areas for future development include:

- Automatic PAGASA information integration.
- PHIVOLCS earthquake information integration.
- Flood monitoring data integration.
- Verified evacuation center directory.
- Interactive hazard map layers.
- Local emergency announcement integration.
- Alert history and timestamps.
- Printable household evacuation plans.
- Additional preparedness guides.
- Expanded geographic coverage.
- Multilingual support.
- Automated testing.

These are proposed improvements and are not necessarily implemented in the current version.

---

# Dependencies and Project Configuration

SafeRoute PH currently uses:

- HTML5 for page structure.
- CSS3 for visual styling.
- Vanilla JavaScript for application functionality.
- Leaflet.js for interactive mapping.
- OpenStreetMap for map data.
- Browser Geolocation API for optional location detection.
- Web Storage API for local data persistence.

Contributors should:

- Avoid unnecessary dependencies.
- Document new external libraries.
- Review third-party licenses and usage policies.
- Avoid committing generated or unnecessary files.
- Keep the project compatible with its static hosting setup.
- Test the application after changing external dependencies or configurations.

---

# Pull Request Checklist

Before submitting a Pull Request, confirm the following:

- [ ] The application opens successfully.
- [ ] The changes work as intended.
- [ ] Existing functionality has not been unintentionally broken.
- [ ] Desktop and mobile layouts have been checked.
- [ ] Map functionality has been tested when relevant.
- [ ] Browser storage functionality has been tested when relevant.
- [ ] New disaster information has reliable official sources.
- [ ] No fictional emergency alerts or unverified safe locations have been introduced.
- [ ] Documentation has been updated when necessary.
- [ ] No unnecessary dependencies or generated folders are included.
- [ ] Screenshots are provided for significant interface changes.
- [ ] No confidential information or credentials are included.

---

# License

SafeRoute PH is licensed under the **MIT License**.

By contributing to this project, you agree that your contributions will be distributed under the same license, subject to its terms.

Please review the repository's `LICENSE` file for complete details.

---

Thank you for helping improve **SafeRoute PH** and making disaster preparedness information more accessible to individuals and communities.

**SafeRoute PH — Prepare Today. Respond Better Tomorrow.**