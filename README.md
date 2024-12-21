<h1>Doctor Appointment System</h1>
A Doctor Appointment System is a full-stack web application built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). This project aims to streamline the process of booking and managing doctor appointments, providing a user-friendly platform for patients and healthcare providers.
<!-- <h1>Features</h1>  -->
<h2>1.Patient Features:</h2>

1.1 User registration and secure login.<br>
1.2 Browse and search for doctors by specialty, <br/>
1.3 location, or availability.<br>
1.4 Book, reschedule, and cancel appointments.<br/>
1.5 View appointment history.<br/>
1.6 Doctor Features:

<h2>2 Doctor registration and profile management:</h2>
2.1 Manage availability and schedules.<br>
2.2 Approve or reject appointment requests.<br>
2.3 View patient details and appointment history.<br>

<h2>3 Admin Features:</h2>

3.1 Manage users (patients and doctors). <br>
3.2 Manage appointments and system data.<br>
3.3 Generate analytics and reports for system performance.<br>

<h2>4 Additional Features:</h2>

4.1 Real-time notifications for appointment updates.<br>
4.2 Responsive and mobile-friendly design.<br>
4.3 JWT-based authentication for secure access.<br>
4.4 Role-based access control (Admin, Doctor, Patient).<br>
## **Installation**
### **Prerequisites**
- Node.js and npm (Node Package Manager) 
MongoDB (Local or Cloud)
Git (optional but recommended)<br>
### **Steps**
1. Clone the repository:
  ```bash
git clone https://github.com/purva94/doctor-appointment-system.git
   ```
2.Navigate to the project directory:
 ```bash
cd doctor-appointment-system
```
3.Set up the Backend:
```bash
cd ../frontend
```
Navigate to the backend folder:
```bash
cd backend
```
Install the required backend dependencies:
```bash
npm install
```
Start the backend server:
```bash
npm start
```
4. Set up the Frontend:<br>
   Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
Install the required frontend dependencies:
```bash
npm install
```
Start the React development server:
```bash
npm start
```
Open the application:
```bash
Visit http://localhost:3000 in your web browser.
```
## **Acknowledgments** 
- **MongoDB:**
- **Express.js:**
- **React.js:**
- **Node.js:**
  ## **Folder Structure**
     ```bash
  doctor-appointment-system/
   ├── backend/
   ├── config/         # Configuration files (e.g., database setup)
   ├── controllers/    # Logic for handling requests
   ├── models/         # Mongoose schemas for MongoDB
   ├── routes/         # API endpoints
   └── server.js       # Main server file

   ├── frontend/
   ├── public/         # Static files
   ├── src/
   │   ├── components/ # React components
   │   ├── pages/      # React pages
   │   ├── redux/      # State management
   │   └── App.js      # Main React application file
   └── package.json    # Frontend dependencies

   └── README.md           # Documentation file
   ```

