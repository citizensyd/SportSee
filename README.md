<div>
<h1 align="center">
<img src="./src/Images/logo.png" width="300" />
<h3>◦ Developed with the software and tools below.</h3>

<p>
<img src="https://img.shields.io/badge/SVG-FFB13B.svg?style&logo=SVG&logoColor=black" alt="SVG" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/styledcomponents-DB7093.svg?style&logo=styled-components&logoColor=white" alt="styledcomponents" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style&logo=Markdown&logoColor=white" alt="Markdown" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/citizensyd/SportSee" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/citizensyd/SportSee" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/citizensyd/SportSee" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/citizensyd/SportSee" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running SportSee](#-running-SportSee)
- [🛣 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

*SportSee*, a fitness coaching startup, is launching a new version of its user profile page to allow users to track their sessions and calories burned. 

**Me**: As a developer, I'm responsible for developing the new user profile page using React. This entails visualizing the user's data in the form of charts, managing data from a backend, and CSS integration for the desktop version.

**Charles, the Product Owner**: He provides initial guidelines, User Stories, and mockups for the new user profile page.

**Léo, the Designer**: He designed the mockup for the new user profile page.

**Antoine, the Lead Developer**: He provides technical guidelines and details about the development of the profile page.

**Main Website Feature**: The user profile page allows tracking the number of sessions completed and the number of calories burned.
  
---

## 📦 Features

- Develop the profile page using **React**.
- Implement advanced graphical components of the user's sports activity using **D3** or **Recharts**.
- Focus on desktop design for screens at least 1024x780 pixels, with mobile versions planned for future sprints.
- Retrieve data from a **NodeJS backend** via **Fetch** or **Axios**, making sure to standardize API data before use.
- Separate logic into reusable components, keep HTTP calls outside React components, and consider documentation using *Readme*, *JSDoc*, or *propTypes*.

---

## 📂 Repository Structure

```sh
└── SportSee/
    ├── .gitignore
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── public/
    └── src/
        ├── App.jsx
        ├── app.styles.js
        ├── index.js
        ├── Components/
        ├── Images/
        ├── Service/
        ├── pages/
```

## 🚀 Getting Started

### ***Dependencies***

Please ensure you have the following dependencies installed on your system:

- Node.js and npm (to run the backend server and frontend app)
- Git (for cloning the repository)

### ***Setting Up and Running the Backend***

1. First, clone the backend repository from [here](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard).
   
   ```bash
   git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git
   ```

2. Navigate to the directory:

   ```bash
   cd P9-front-end-dashboard
   ```

3. Install the required packages:

   ```bash
   npm install
   ```

4. Before starting the server, ensure that you change the port to 4000 in the backend configuration to make it compatible with the frontend. Locate the server or configuration file and modify the port value.

5. Start the backend server:

   ```bash
   npm start
   ```

Your backend server should now be running on `http://localhost:4000/`.

---

Please modify it as per your project's needs.

### 🔧 Installation

1. Clone the SportSee repository:
```sh
git clone https://github.com/citizensyd/SportSee
```

2. Change to the project directory:
```sh
cd SportSee
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Running SportSee

```sh
npm run start
```

---


## 🛣 Roadmap

The roadmap outlines the future enhancements, features, and milestones planned for the SportSee application. As the project evolves, this roadmap may be subject to change, so stay tuned for updates.

1. **Mobile Optimization**: Enhancing the user experience for mobile users by creating responsive designs tailored for various devices.
   
2. **User Personalization**: Implementation of features that allow users to customize their dashboard, set goals, and track personal achievements.
   
3. **Social Integration**: Enabling users to connect with their friends, challenge them, and share their progress on social media platforms.
   
4. **Advanced Analytics**: Introduce machine learning algorithms to give users predictive analytics about their performance and potential areas of improvement.
   
5. **Gamification**: Incorporate gaming elements like levels, badges, and rewards to motivate users to achieve their fitness goals.
   
6. **Virtual Coaching**: Implementation of a virtual coach that provides real-time feedback and suggestions based on the user's performance.
   
7. **Health Integration**: Connect with other health apps and devices to get a comprehensive view of the user's health metrics.
   
8. **API Extensions**: Expansion of the backend API to support more features, data points, and third-party integrations.
   
9. **Enhanced Data Visualization**: Upgrade of the existing charts and graphs with interactive elements and detailed breakdowns for a more in-depth understanding.
   
10. **Feedback and Community Forum**: A platform for users to share feedback, suggestions, and engage in community-driven content and challenges.

---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the <img src="https://img.shields.io/github/license/citizensyd/SportSee" alt="GitHub license" /> . See the [LICENSE-MIT](LICENSE) file for additional info.


---

## 👏 Acknowledgments

I would like to express my deepest gratitude to my mentor, Adrien. His support, guidance, and patience have been invaluable throughout my journey. His mentorship has been a constant source of inspiration and has pushed me to exceed my own expectations.

[↑ Return](#Top)

---