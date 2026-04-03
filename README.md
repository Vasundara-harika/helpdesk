<div align="center">

# 🎫 Helpdesk: Ticket Management System

### A role-based platform that replaces messy email chains with a clear, structured workflow for handling issues

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.3.2-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.1.0-000000?style=for-the-badge&logo=express&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-FF0055?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)

[🌐 Live Demo](https://helpdesk-ruddy-five.vercel.app/) · [👩‍💻 GitHub](https://github.com/vasundara-harika/helpdesk) · [💼 LinkedIn](https://www.linkedin.com/in/vasundara-harika)

</div>

---

## 📸 Screenshots

<div align="center">
<table>
  <tr>
    <td><img src="https://raw.githubusercontent.com/Vasundara-harika/helpdesk/main/src/assets/Screenshot1.png" width="280"/><br/><sub>Login Page</sub></td>
    <td><img src="https://raw.githubusercontent.com/Vasundara-harika/helpdesk/main/src/assets/Screenshot2.png" width="280"/><br/><sub>Admin Dashboard</sub></td>
    <td><img src="https://raw.githubusercontent.com/Vasundara-harika/helpdesk/main/src/assets/Screenshot3.png" width="280"/><br/><sub>Operations Panel</sub></td>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/Vasundara-harika/helpdesk/main/src/assets/Screenshot4.png" width="280"/><br/><sub>Technical Dashboard</sub></td>
    <td><img src="https://raw.githubusercontent.com/Vasundara-harika/helpdesk/main/src/assets/Screenshot5.png" width="280"/><br/><sub>User Dashboard</sub></td>
  </tr>
</table>
</div>

---

## 📖 About

**Helpdesk** is a centralized ticket management system designed to bring clarity to organizational workflows.  
Instead of scattered emails and confusion, every issue becomes a structured and trackable process.

- 🔄 **Clear Workflow:** User → Operations → Technical → Resolution  
- 🔐 **Role-Based Access (RBAC):** Each role sees a personalized UI  
- 📊 **Full Visibility:** Admin monitors all tickets and system activity  

---

## ✨ How the System Works

This system works like a real office where every role has a clear responsibility.

- 👤 **User** raises issues and tracks progress  
- ⚙️ **Operations Team** verifies and assigns requests  
- 🛠️ **Technical Team** focuses on solving problems  
- 🔑 **Admin** oversees everything and ensures smooth operation  

---

## 🚀 Features & Role-Based UI

### 👤 User (End-User)
- Raise tickets for technical or operational issues  
- Track status in real-time (Raised → In Progress → Closed)

### ⚙️ Operations Team
- Approve or reject incoming requests  
- Categorize and assign tickets to the right team  

### 🛠️ Technical Team
- Work on approved technical issues  
- Form teams and assign a lead 

### 🔑 Admin
- Access all tickets across the system  
- Monitor activity through audit logs  

---

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | React 19 (Vite), Tailwind CSS, Framer Motion |
| **Backend** | Express.js |
| **Routing** | React Router v7 (RBAC Protected Routes) |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```text
helpdesk/
├── helpdesk-backend/     # Express API (activity & security logging)
├── public/               # Static assets
├── src/
│   ├── assets/           # Screenshots & images
│   ├── components/       # Reusable UI components
│   ├── data/             # Mock database
│   ├── layouts/          # Role-based UI layouts
│   ├── pages/            # Dashboard pages
│   ├── routes/           # RBAC logic
│   └── styles/           # Global styles
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/vasundara-harika/helpdesk.git
cd helpdesk
```

#### 2. Start Backend

```bash
cd helpdesk-backend
npm install
node index.js
```

Backend runs on: `http://localhost:5000`

#### 3. Start Frontend

```bash
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`

---

## 🔐 Demo Credentials

| Role | Email | Password |
|:---|:---|:---|
| **Admin** | `admin@helpdesk.com` | `admin123` |
| **Operations** | `ops@helpdesk.com` | `ops123` |
| **Technical** | `tech@helpdesk.com` | `tech123` |
| **User** | `user@helpdesk.com` | `user123` |

---

## 📝 Note

> This project was developed as part of a technical screening assignment to demonstrate frontend and system design skills.

---

## 👩‍💻 Developer

**Vasundara Harika**  
Final Year B.Tech Student | IIIT

<div align="center">

Made with ❤️ to simplify real-world workflows

⭐ Star this repo if you find it useful!

</div>
