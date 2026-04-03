<div align="center">

# Helpdesk: Ticket Management System

**A professional, role-based platform that replaces messy email chains with a clear, automated workflow for company issues.**

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.3.2-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.1.0-000000?style=for-the-badge&logo=express&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-FF0055?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)

<br/>

[Live Demo](https://helpdesk-ruddy-five.vercel.app/) · [GitHub](https://github.com/vasundara-harika/helpdesk) · [LinkedIn](https://www.linkedin.com/in/vasundara-harika)

</div>

---

## Screenshots

| View | Screenshot |
|:---:|:---:|
| **Login Page** | <img src="./src/assets/Screenshot1.png" width="600"/> |
| **Admin Page** | <img src="./src/assets/Screenshot2.png" width="600"/> |
| **Operations Page** | <img src="./src/assets/Screenshot3.png" width="600"/> |
| **Technical Page** | <img src="./src/assets/Screenshot4.png" width="600"/> |
| **User Page** | <img src="./src/assets/Screenshot5.png" width="600"/> |

---

## About

**Helpdesk** is a centralized system designed to organize organizational problems into a clear lifecycle. Instead of lost emails, every issue becomes a trackable ticket.

- **The Workflow:** Users raise issues &rarr; Operations filters & assigns them &rarr; Technical teams resolve them.
- **The Security:** Built with **Role-Based Access Control (RBAC)**, ensuring each user sees a unique UI tailored to their specific job permissions.
- **The Power:** Admins have total oversight, including a dedicated **Database View** to monitor every ticket and system log in the infrastructure.

---

## Features & Role-Based UI

### User (End-User)

- [x] **Raise Tickets** — Submit new Technical or Operational requests.
- [x] **Track Progress** — Real-time view of ticket status (Raised, In Progress, Closed).

### Operations Team

- [x] **Approval** — Approve or Reject incoming tickets to keep the queue clean.
- [x] **Assignment** — Categorize issues and assign them to specific technical experts.

### Technical Team

- [x] **Resolution** — Access a focused list of approved technical bugs.
- [x] **Team Lead** — Create sub-teams and assign a "Person In Charge" (PIC) for complex fixes.

### Admin

- [x] **Full Data Oversight** — Access the Global Database of all tickets.
- [x] **Audit Logs** — View staff sign-in/out history and unauthorized access attempts.

---

## Tech Stack

- **Frontend:** React 19 (Vite), Tailwind CSS, Framer Motion.
- **Backend:** Express.js (Dedicated API for security logging).
- **Routing:** React Router v7 (RBAC Guards).

---

## Project Structure

```
helpdesk/
├── helpdesk-backend/     # Express API for activity & security logging
├── public/               # Static assets & icons
├── src/
│   ├── assets/           # Screenshot1 to Screenshot5
│   ├── components/       # Reusable UI elements
│   ├── data/             # Local mock database
│   ├── layouts/          # UI shells (Admin, Ops, Tech, User)
│   ├── pages/            # Role-specific dashboard logic
│   ├── routes/           # RBAC ProtectedRoute logic
│   └── styles/           # Global and component CSS
├── tailwind.config.js    # Styling configuration
└── vite.config.js        # Build tool settings
```

---

## How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/vasundara-harika/helpdesk.git
cd helpdesk
```

### 2. Set Up the Backend

Open a terminal and run:

```bash
cd helpdesk-backend
npm install
node index.js
```

The server will start on `http://localhost:5000`.

### 3. Set Up the Frontend

Open a **new terminal window** and run:

```bash
# Go back to the root folder
npm install
npm run dev
```

The app will start on `http://localhost:5173`.

### 4. Login Credentials

Use the following demo accounts to test the RBAC features:

| Role | Email | Password |
|:---|:---|:---|
| **Admin** | `admin@helpdesk.com` | `admin123` |
| **Operations** | `ops@helpdesk.com` | `ops123` |
| **Technical** | `tech@helpdesk.com` | `tech123` |
| **User** | `user@helpdesk.com` | `user123` |

---

<div align="center">

### Developer: [Vasundara Harika](https://github.com/vasundara-harika)

**Final Year B.Tech Student | IIIT**

If you found this useful, please star the repo!

&copy; 2025 Helpdesk System. All rights reserved.

</div>
