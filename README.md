This project is a Student Registration and Login System built using React.
It stores student details locally inside the browser using localStorage, without any backend.
# Users can:
Register with Name, Email, Phone Number, USN, and Password
Login with Email & Password
View a simple Welcome Page after successful login
Receive success/error messages for authentication results

# Technologies used
React.js is used for building the frontend user interface.
JavaScript (ES6+) handles form logic and application functionality.
HTML5 and CSS3 are used for page structure, styling, and layout.
LocalStorage is used to store and retrieve student data on the client side.
React Router is used for navigation between Signup, Login, and Welcome pages.

# How It Works
Signup Page
User enters: Name, Email, Phone, USN, Password
Validations applied:
All fields required
Email format validation
Password validation

# Login Page
User enters email & password
Login checks against stored data:
  localStorage.getItem("studentsList");
Shows success message if matching credentials
Shows error message if not matched
Redirects user to Welcome Page on successful login
