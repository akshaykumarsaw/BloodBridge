# BloodBridge

> A modern, web-based Blood Bank Management System (BBMS) connecting donors, hospitals, and blood labs for streamlined donation management, real-time inventory tracking, and emergency requests.

---

## 📌 Features

- **🩸 Donor Portal:** Profile management, donation history, and search for upcoming blood donation camps.
- **🏥 Hospital Services:** Emergency blood requests creation, real-time request tracking, and local donor search.
- **🔬 Blood Lab & Bank:** Blood stock tracking across blood groups, request fulfillment, and donation camp organization.
- **🛡️ Admin Dashboard:** Verification and approval of healthcare facilities, user management, and system overview.
- **🔐 Secure Authentication:** Role-based access control using JWT tokens and bcrypt password encryption.
- **📖 Interactive API Docs:** Built-in Swagger documentation for exploring backend endpoints.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS, Lucide Icons, React Router
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT
- **Documentation:** Swagger UI / OpenAPI

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally on port 27017 or a MongoDB Atlas URI)
- [npm](https://www.npmjs.com/)

---

### Installation & Setup

#### 1. Clone the repository
```bash
git clone https://github.com/akshaykumarsaw/BloodBridge.git
cd BloodBridge
```

#### 2. Backend Setup
Navigate to the `backend` folder and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/bloodbridge
JWT_SECRET=your_jwt_secret_key
```

Seed the default admin account:
```bash
node seedAdmin.js
```

Start the backend server:
```bash
npm start
```
*The backend API will run on **http://localhost:5000**.*  
*Interactive Swagger docs will be available at **http://localhost:5000/api/doc/**.*

#### 3. Frontend Setup
In a new terminal window, navigate to the `frontend` folder and install dependencies:
```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```
*The web app will open at **http://localhost:5173**.*

---

### 🐳 Alternative: Run with Docker

If you have Docker Desktop installed, you can launch the complete stack with one command from the project root:

```bash
docker compose up --build
```

- **Frontend:** http://localhost:80
- **Backend:** http://localhost:3000

---

## 🔑 Default Admin Credentials

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@bloodbridge.org` | `bbms@admin` |

---

## 📁 Project Structure

```text
BloodBridge/
├── backend/
│   ├── controllers/      # Request handlers for admin, donor, facility, hospital, lab
│   ├── middlewares/      # Authentication & role protection middlewares
│   ├── models/           # Mongoose schemas (admin, donor, facility, blood, camp)
│   ├── openapi/          # Swagger documentation config
│   ├── routes/           # Express API route definitions
│   ├── seedAdmin.js      # Script to seed initial administrator
│   └── server.js         # Backend server entry point
├── frontend/
│   ├── src/
│   │   ├── components/   # Header, Footer, ProtectedRoute, shared layouts
│   │   ├── pages/        # Role-based dashboard and authentication pages
│   │   └── App.jsx       # Client-side router and routes
│   └── vite.config.js    # Vite configuration & backend proxy
└── docker-compose.yml    # Multi-container Docker configuration
```

