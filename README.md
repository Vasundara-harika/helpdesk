<div align="center">

# Helpdesk — Ticket Management System

**A Role-Based, Multi-Dashboard Helpdesk Application for Streamlined Issue Resolution**

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.3.2-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.1.0-000000?style=for-the-badge&logo=express&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Deployment](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)

<br/>

[Live Demo](https://vasundara-harika.github.io/helpdesk/) · [Report Bug](https://github.com/vasundara-harika/helpdesk/issues) · [Request Feature](https://github.com/vasundara-harika/helpdesk/issues)

</div>

---

## Screenshots

<div align="center">

| Screenshot | Description |
|:---:|:---:|
| <img src="./src/assets/Screenshot1.png" width="700"/> | **Auth Page** — Sign In / Sign Up with flip animation & credentials card |
| <img src="./src/assets/Screenshot2.png" width="700"/> | **User Dashboard** — Animated stat counters & ticket overview |
| <img src="./src/assets/Screenshot3.png" width="700"/> | **My Tickets Table** — Searchable, paginated ticket list with modal detail view |
| <img src="./src/assets/Screenshot4.png" width="700"/> | **Operations / Technical Dashboard** — Team performance cards & ticket management |
| <img src="./src/assets/Screenshot5.png" width="700"/> | **Admin Control Panel** — Global stats, database viewer, settings & user log history |

</div>

---

## About & Problem Statement

In organizations where users face software, hardware, or operational issues, **there is no centralized, role-aware system** for raising, triaging, assigning, and resolving tickets across multiple internal teams.

**Helpdesk** bridges this gap by providing:

- A **single platform** where end-users raise tickets and track progress.
- **Dedicated dashboards** for Technical, Operations, and Admin teams — each with their own sidebar, pages, and permissions.
- **Role-Based Access Control (RBAC)** ensuring that every user only sees and interacts with what their role permits.
- A clear **ticket lifecycle**: `Raised → In Progress → On Hold → Closed`, with operations handling approval/assignment and technical teams handling resolution.

---

## Features & Role-Based UI

The application renders **four completely distinct dashboard experiences** based on the authenticated role. Each role has its own layout, sidebar navigation, and page set.

### User (End User)

- [x] **Dashboard** — Animated stat cards (Total Tickets, Solved, In Progress, Awaiting Approval) with `react-countup`
- [x] **New Ticket** — Full ticket creation form with Ticket No, Department, Subject, Category, Type, Priority, Description, Link attachment & CAPTCHA checkbox
- [x] **My Tickets** — Searchable & paginated table with status badges (Closed/In Progress/On Hold), star ratings, and a click-to-open detail modal
- [x] **Profile** — User info card with avatar, editable feedback section & 5-star rating system
- [x] **Settings** — Edit real name, username, password, access level & project access

### Technical Team

- [x] **Dashboard** — Stat cards (Total, Solved, Pending, In Progress) with contextual icons & animated spinner, team member listing with contact details
- [x] **My Tickets** — Enhanced ticket table with Category, Priority, Person In Charge columns; modal supports **Update** action and **Create Team** workflow (team name, members, remark)
- [x] **Performance** — KPI overview (Total, Solved, Pending, In Progress, Avg. Rating) + team member cards with auto-generated avatars
- [x] **Profile & Settings** — Same structure, scoped to `/technical-team/` routes

### Operations Team

- [x] **Dashboard** — `framer-motion` animated cards (Pending Approvals, Resolved Tickets, Performance Score) with operations banner
- [x] **Ticket Approval** — Dedicated approval queue with priority color-coding, inline **Category** & **Assign To** dropdowns per row, and Approve/Reject action icons
- [x] **My Tickets** — Ticket table with modal detail view; supports **Update** and a **Close Ticket** confirmation flow
- [x] **Performance** — Team performance stats + member cards (same structure as Technical)
- [x] **Profile & Settings** — Same structure, scoped to `/operation-team/` routes

### Admin

- [x] **Dashboard** — Admin Control Panel with global stats (Total Users, Team Members, System Logs, Pending Approvals) via `react-countup`
- [x] **Database** — Searchable global ticket database table (ID, Title, Status, Priority, Assignee, Type)
- [x] **Settings** — Multi-panel settings interface (General, Connect To, Email, Authorization, Notifications) with icon-mapped sidebar navigation
- [x] **User Log History** — Staff activity audit log with department filtering, pagination, and columns for Sign In/Out, Staff ID, Department & Activity
- [x] **Profile & Settings** — Same structure, scoped to `/admin/` routes

### Cross-Cutting Features

- [x] **Authentication** — Sign In / Sign Up flip-card animation with pre-loaded demo credentials
- [x] **Forgot Password** — Reset link request page
- [x] **Protected Routes** — `ProtectedRoute` component checks `localStorage` role against `allowedRoles`
- [x] **Unauthorized Page** — Logs unauthorized access attempts to the Express backend via `POST /api/logs/unauthorized`
- [x] **404 Page** — Catch-all route for undefined paths
- [x] **Responsive Layouts** — Sticky sidebars, fixed navbars, and mobile-responsive layouts per role
- [x] **Role-Aware Navbar** — Displays current role label, BM/BI mode toggle, notifications, profile link & logout
- [x] **Custom Animations** — CSS flip cards, fade-in, fade-in-up, slide-up transitions

---

## Tech Stack

| Layer | Technology | Version | Purpose |
|:---:|:---:|:---:|:---|
| **Frontend** | React | `19.1.0` | Component-based UI with hooks |
| **Routing** | React Router DOM | `7.6.3` | Client-side routing with nested layouts |
| **Styling** | Tailwind CSS | `3.3.2` | Utility-first styling with custom `customMint` color |
| **Animations** | Framer Motion | `12.23.0` | Motion components for Operations dashboard |
| **Animations** | CSS Keyframes | — | Flip cards, fade-in, fade-in-up transitions |
| **Icons** | React Icons | `5.5.0` | `Fa`, `Md`, `Io`, `Fi` icon families |
| **Counters** | React CountUp | `6.5.3` | Animated stat counters on dashboards |
| **HTTP Client** | Axios | `1.10.0` | API communication |
| **Build Tool** | Vite | `7.0.0` | Lightning-fast dev server & bundler |
| **Backend** | Express | `5.1.0` | Lightweight REST API for unauthorized access logging |
| **Middleware** | CORS + Body Parser | — | Cross-origin requests & JSON body parsing |
| **Deployment** | Vercel / GitHub Pages | — | Production hosting with SPA rewrites |

---

## Technical Implementation

### Role-Based Access Control (RBAC)

The RBAC system operates on three layers:

**1. Authentication & Role Assignment**
```
Auth Page → credentials match → localStorage.setItem("role", matchedRole)
         → navigate to role-specific dashboard
```

Four pre-configured roles with demo credentials:
| Role | Email | Password | Dashboard Route |
|:---|:---|:---|:---|
| **Admin** | `admin@helpdesk.com` | `admin123` | `/admin/dashboard` |
| **Operations Team** | `ops@helpdesk.com` | `ops123` | `/operation-team/dashboard` |
| **Technical Team** | `tech@helpdesk.com` | `tech123` | `/technical-team/dashboard` |
| **User** | `user@helpdesk.com` | `user123` | `/user/dashboard` |

**2. Route Protection**
```jsx
<ProtectedRoute allowedRoles={["Admin"]}>
  <AdminLayout />    // Only Admin sees this layout
</ProtectedRoute>
```
`ProtectedRoute` reads `role` from `localStorage` and redirects to `/` if the role is not in `allowedRoles`.

**3. Layout Isolation**
Each role loads a completely different layout with its own sidebar, navbar context, and nested `<Outlet />` pages:

```
Admin       → AdminLayout       → AdminSidebar       → 4 pages
Operations  → OperationsLayout  → OperationsSidebar   → 5 pages
Technical   → TechnicalLayout   → TechnicalSidebar    → 4 pages
User        → UserLayout        → Sidebar (User mode)  → 4 pages
```

### Ticket Lifecycle & Routing Between Teams

```
User raises ticket (NewTicket form)
        │
        ▼
Operations Team receives ticket in "Ticket Approval" queue
        │
        ├── Assign Category (dropdown: Access Issue, Bug Report, etc.)
        ├── Assign To (dropdown: team member selection)
        ├── Approve (✓) or Reject (✗)
        │
        ▼
Technical Team receives approved ticket in "My Tickets"
        │
        ├── View ticket details (modal)
        ├── Update ticket status
        ├── Create Team (assign team name, members, remark)
        │
        ▼
Operations Team can "Close" resolved tickets via confirmation flow
        │
        ▼
User sees updated status in "My Tickets" table
```

### Unauthorized Access Logging (Backend)

The Express backend at `localhost:5000` captures unauthorized access attempts:

```
POST /api/logs/unauthorized  →  Stores { email, role, timestamp, attemptedPath }
GET  /api/logs/unauthorized  →  Returns all unauthorized access logs
```

---

## Project Structure

```
helpdesk/
├── index.html                          # Entry HTML with custom favicon
├── package.json                        # Frontend dependencies
├── vite.config.js                      # Vite config (Vercel-ready)
├── tailwind.config.js                  # Tailwind + customMint color
├── vercel.json                         # SPA rewrite rules
│
├── helpdesk-backend/
│   ├── index.js                        # Express server (unauthorized logging API)
│   └── package.json                    # Backend dependencies
│
└── src/
    ├── main.jsx                        # React entry point + BrowserRouter
    ├── App.jsx                         # Master route definitions (all 4 roles)
    ├── index.css                       # Tailwind directives + custom animations
    │
    ├── routes/
    │   └── ProtectedRoute.jsx          # RBAC route guard
    │
    ├── layouts/
    │   ├── AdminLayout.jsx             # Admin shell (sidebar + navbar + footer)
    │   ├── OperationsLayout.jsx        # Operations shell
    │   ├── TechnicalLayout.jsx         # Technical shell (responsive)
    │   ├── UserLayout.jsx              # User shell
    │   └── UserProfileLayout.jsx       # Shared profile layout
    │
    ├── components/
    │   ├── Navbar.jsx                  # Role-aware navbar (profile, logout, mode toggle)
    │   ├── Footer.jsx                  # Global footer
    │   ├── Sidebar.jsx                 # Dynamic sidebar (User / Operations)
    │   ├── AdminSidebar.jsx            # Admin-specific sidebar
    │   ├── TechnicalSidebar.jsx        # Technical team sidebar
    │   ├── OperationsSidebar.jsx       # Operations team sidebar
    │   ├── UserProfile.jsx             # Shared profile component
    │   └── UserSettings.jsx            # Shared settings component
    │
    ├── pages/
    │   ├── Auth.jsx                    # Sign In / Sign Up flip card
    │   ├── Login.jsx                   # Alternate login page
    │   ├── Signup.jsx                  # Standalone signup page
    │   ├── ForgotPassword.jsx          # Password reset request
    │   ├── Unauthorized.jsx            # Access denied + backend logging
    │   ├── NotFound.jsx                # 404 catch-all
    │   │
    │   ├── User/
    │   │   ├── Dashboard.jsx           # Stat counters + illustration
    │   │   ├── NewTicket.jsx           # Ticket creation form
    │   │   ├── MyTickets.jsx           # Ticket table + detail modal
    │   │   ├── UserProfilePage.jsx     # Profile + feedback + rating
    │   │   └── UserSettingsPage.jsx    # Edit profile settings
    │   │
    │   ├── Technical/
    │   │   ├── TechnicalDashboard.jsx  # Stats + team member list
    │   │   ├── MyTicketTechnical.jsx   # Tickets + Create Team modal
    │   │   ├── PerformanceTech.jsx     # KPIs + team cards
    │   │   ├── UserProfilePage.jsx     # Technical profile
    │   │   └── UserSettingsPage.jsx    # Technical settings
    │   │
    │   ├── operations/
    │   │   ├── OperationsDashboard.jsx # Framer Motion animated cards
    │   │   ├── MyTicketsOp.jsx         # Tickets + Close flow modal
    │   │   ├── TicketApproval.jsx      # Approval queue with assign/approve
    │   │   ├── PerformancePage.jsx     # KPIs + team cards
    │   │   ├── UserProfilePage.jsx     # Operations profile
    │   │   └── UserSettingsPage.jsx    # Operations settings
    │   │
    │   └── Admin/
    │       ├── AdminDashboard.jsx      # Global stats + control panel
    │       ├── Database.jsx            # Searchable ticket database
    │       ├── Settings.jsx            # Multi-panel settings (5 categories)
    │       ├── UserLogins.jsx          # Staff audit log with filters
    │       ├── UserProfilePage.jsx     # Admin profile
    │       └── UserSettingsPage.jsx    # Admin settings
    │
    ├── data/
    │   └── tickets.js                  # Mock ticket data (10 entries)
    │
    ├── assets/
    │   ├── Screenshot1.png             # Auth page screenshot
    │   ├── Screenshot2.png             # User dashboard screenshot
    │   ├── Screenshot3.png             # Tickets table screenshot
    │   ├── Screenshot4.png             # Ops/Tech dashboard screenshot
    │   └── Screenshot5.png             # Admin panel screenshot
    │
    └── styles/
        └── Signup.css                  # Additional signup styling
```

---

## Getting Started

### Prerequisites

- **Node.js** `>=18.x`
- **npm** `>=9.x`

### Installation

```bash
# Clone the repository
git clone https://github.com/vasundara-harika/helpdesk.git
cd helpdesk

# Install frontend dependencies
npm install

# Install backend dependencies
cd helpdesk-backend
npm install
cd ..
```

### Running Locally

```bash
# Terminal 1 — Start the backend (unauthorized logging API)
cd helpdesk-backend
node index.js
# Server running at http://localhost:5000

# Terminal 2 — Start the frontend
npm run dev
# App running at http://localhost:5173
```

### Demo Credentials

| Role | Email | Password |
|:---|:---|:---|
| **Admin** | `admin@helpdesk.com` | `admin123` |
| **Operations** | `ops@helpdesk.com` | `ops123` |
| **Technical** | `tech@helpdesk.com` | `tech123` |
| **User** | `user@helpdesk.com` | `user123` |

### Build for Production

```bash
npm run build    # Outputs to /dist
npm run preview  # Preview production build locally
```

---

## Deployment

The app is configured for both **Vercel** and **GitHub Pages**:

- **Vercel** — `vercel.json` provides SPA rewrite rules for client-side routing
- **GitHub Pages** — `gh-pages` package configured with `predeploy` and `deploy` scripts

---

<div align="center">

**Built with precision by [Vasundara Harika](https://github.com/vasundara-harika)**

&copy; 2025 Helpdesk System. All rights reserved.

</div>
