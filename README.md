
Short Description.
    TaskTrek is a web app that can be a user can be add their task and see their progress also update their task if need and when user can complete the task they can be delete their task.Also authenticate user can be added their task use
    simple firebase login system that can be smooth user login for firebase
Live links 
  -->  https://tasktrek-eb4c9.web.app


🛠  

📌 Dependencies 

Frontend (React.js)
- React.js (UI library)  
- React Router (Navigation)  
- Tailwind CSS / DaisyUI (Styling)  
- Axios (API requests)  
- React Query (Data fetching & caching)  
- Lucide-react (Icons)  
- SweetAlert2 (Alerts & modals)  
- Firebase (Authentication & hosting)  

Backend (Node.js & Express.js)
- Express.js (Backend framework)  
- Mongoose (MongoDB ORM)  
- CORS (Cross-origin resource sharing)  
- Dotenv (Environment variables)  
- Firebase Admin SDK (For authentication verification)  

Database
MongoDB (NoSQL database)  

📥 Installation Steps 

1️⃣ Clone the Repository
```bash
git clone your-repo-url
cd your-project

2️⃣ Frontend Setup (React.js)
```bash
cd client  
npm install
npm start 
```
📌 Frontend Dependencies
```bash
npm install react-router-dom axios @tanstack/react-query lucide-react sweetalert2 firebase tailwindcss daisyui
```

3️⃣ Backend Setup (Node.js & Express.js)
```bash
cd server 
npm install
npm start  
```
📌 **Backend Dependencies**
```bash
npm install express mongoose cors dotenv firebase-admin
```
4️⃣ Setup Environment Variables (`.env` file)
📌 Frontend (`client/.env`)
```env
VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_AUTH_DOMAIN=your-auth-domain
```

📌 Backend (`server/.env`)
```env
PORT=5000
MONGO_URI=your-mongodb-connection-string
FIREBASE_PRIVATE_KEY=your-firebase-private-key

---

🚀 Technologies Used
- **Frontend: React.js, Tailwind CSS, Firebase  
- **Backend: Node.js, Express.js  
- **Database: MongoDB  
- **State Management: React Query  
- **Authentication: Firebase  

