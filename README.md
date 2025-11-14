# Babylon Login
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Live Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://babylon-login.vercel.app/login)


## Overview
This is a simple **Next.js app** with **Firebase Authentication** built as part of the Babylon Radio Web Developer assessment.  
It demonstrates a functional login/register flow and a home page greeting users by their full name.


## Features
- **Login / Registration Page**
  - Fields: Full Name, Email, Password
  - Inline validation with error messages
  - Firebase authentication for registering and logging in users

- **Home Page**
  - Greets the user by their full name
  - Logout button redirects back to login

- **Routing / Redirects**
  - `/` → redirects to `/login`
  - `/login` → navigates to `/home` on successful login/register
  - `/home` → redirects to `/login` after logout


## Tech Stack
- **Frontend:** Next.js (App Router) + React  
- **Authentication:** Firebase Authentication  
- **State Management:** React `useState` & `useEffect`


## Installation & Setup
1. Clone the repository:
   ```bash
   git clone <your-repo-link>
   cd <repo-folder>
   ```

2. Install dependencies:
    ```bash
    npm install
   ```
3. Configure Firebase:

    - Create a Firebase project

    - Copy Firebase config to firebaseConfig.ts

    - Ensure Email/Password Authentication is enabled

4. Run the development server 
    ```bash
    npm run dev
    ```

## Notes / Approach

- Registration stores the user’s displayName in Firebase for consistent greeting

- Login retrieves displayName from Firebase

- Focused on functionality and flow, with minimal styling

- Inline validation provides a user-friendly experience

## Future Improvements

- Password strength indicator

- Better mobile responsiveness

- Persistent sessions and route guards

- More polished UI with TailwindCSS components


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

