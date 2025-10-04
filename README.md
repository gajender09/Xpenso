# Xpenso - Expense Management

Xpenso is a modern expense management web application built with Next.js and TypeScript. It provides role-based dashboards and features for Admins, Managers, and Employees to manage expenses, approvals, users, and settings efficiently.

### Video Walkthrough - https://youtu.be/UQmNoFBIV9s

## Features

- **Role-based Dashboards:**
  - Admin: Manage users, view all expenses, configure approval flows, and settings.
  - Manager: Approve expenses, manage team, view team expenses, and settings.
  - Employee: Submit expenses, view personal expenses, and settings.
- **Authentication:** Secure login and signup flows.
- **Expense Submission & Approval:** Employees can submit expenses; managers can approve or reject them.
- **User Management:** Admins can add, edit, or remove users.
- **Approval Flows:** Customizable approval flows for expense processing.
- **Responsive UI:** Built with reusable UI components for a seamless experience on all devices.

## Project Structure

```
Xpenso/
├── app/                # Next.js app directory (routing, pages by role)
├── components/         # Reusable and role-specific React components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and libraries
├── public/             # Static assets (images, logos, etc.)
├── styles/             # Global and component styles
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript configuration
└── ...
```

## Getting Started

### Prerequisites
- Node.js (v18 or above recommended)
- pnpm

### Installation

1. **Clone the repository:**
   ```powershell
   git clone https://github.com/gajender09/Xpenso.git
   cd Xpenso
   ```
2. **Install dependencies:**
   ```powershell
   pnpm install
   ```
3. **Run the development server:**
   ```powershell
   pnpm dev
   # or
   pnpm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `pnpm dev` / `pnpm run dev` — Start the development server
- `pnpm build` / `pnpm run build` — Build for production
- `pnpm start` — Start the production server

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS / PostCSS](https://tailwindcss.com/)
- [pnpm](https://pnpm.io/)

## Folder Overview

- `app/` — Contains all route segments and pages for different user roles
- `components/` — UI components, organized by role and shared UI
- `hooks/` — Custom React hooks
- `lib/` — Utility functions (e.g., country list, helpers)
- `public/` — Static files and images
- `styles/` — Global styles

## 👨‍💻 Team Members

| Name | GitHub Profile |
|------|----------------|
| **GAJENDER** | [github.com/gajender09](https://github.com/gajender09) |
| **Sameer Gautam** | [github.com/shribreeze](https://github.com/shribreeze) |
| **Atharv Virmani** | [github.com/Atharv-15](https://github.com/Atharv-15) |


`` Thanks to odooxamalthea - Odoo Hackathon 2025 ``
