# User Authentication and Quote Management Application

This is a full-stack application that allows users to register, login, and manage their quotes(dashboard). It uses Node.js and Express for the backend, MongoDB for the database, and React for the frontend, Bccrypt JS for encryption.

## Project Structure

- **Backend**
  - `index.js`: The main server file for handling API requests.
  - `models/user.model.js`: Mongoose schema and model for user data.
  
- **Frontend**
  - `src/App.js`: The main React component for the login page.
  - `src/Pages/quotes.js`: React component for the dashboard where users can view and update their quotes.
  - `src/Pages/register.js`: React component for the creating new user.
  - `src/Pages/login.js`: React component for the login where users can login .
  - `src/styles/App.css`: Styles for the React components.
  - 

## Key Components

- **Backend**
  - **User Registration** (`/api/register`): Allows users to register with a name, email, and password. Passwords are hashed for security.
  - **User Login** (`/api/login`): Authenticates users and provides a JWT token upon successful login.
  - **Get Quote** (`/api/quote` - GET): Retrieves the user's quote using the provided JWT token.
  - **Update Quote** (`/api/quote` - POST): Allows users to update their quote using the provided JWT token.

- **Frontend**
  - **Login Page**: Allows users to log in and navigate to the dashboard.
  - **Dashboard**: Displays user information and allows them to view and update their quote.

## Setup and Running the Project

in the `server/index.js ` add your mongodb url

##instruction

1. **Clone the repository**:

   ```bash
   git clone [https://github.com/your-repo-url.git](https://github.com/Abhigyan126/User-Authentication-System.git
   cd User-Authentication-System
   ```
2. **Starting Nodejs server**
   ``` npm run dev ```
3. **starting React server** 
``` npm start```


### `Usage`

```markdown
# Usage Instructions

## Register a New User

1. Navigate to `http://localhost:3000/register`.
2. Fill out the registration form with your name, email, and password.
3. Upon successful registration, you will be redirected to the login page.

## Log In

1. Navigate to `http://localhost:3000/login`.
2. Enter your registered email and password.
3. Upon successful login, you will be redirected to the dashboard.

## Access the Dashboard

1. In the dashboard, you can view your current quote and update it.
2. The dashboard also displays your username and email.

## Logout

1. Use the logout button on the dashboard to log out of your account.
2. You will be redirected to the login page.
```

###Screenshots

<p align='center'>
  <img width="882" alt="Screenshot 2024-08-13 at 3 01 48 PM" src="https://github.com/user-attachments/assets/8cad6fd3-d6b7-4c5d-8ce7-9472073940d3">
<img width="882" alt="Screenshot 2024-08-13 at 3 01 40 PM" src="https://github.com/user-attachments/assets/b7482e2d-9977-4434-97c3-86e4e602cde0">
<img width="882" alt="Screenshot 2024-08-13 at 3 06 15 PM" src="https://github.com/user-attachments/assets/18d7a4fe-1beb-4730-9e05-b0632be17a04">

</p>
