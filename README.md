Medical Image Classification - Frontend

This is the React frontend of the Medical Image Classification project. It enables users to register, log in, and upload medical images (such as brain MRI and lung X-rays) to receive predictions powered by AI models.
-----------------------------

Features

•	📤 Upload medical images (brain/lung)
•	🔐 Secure user registration and login
•	🧠 Real-time disease prediction display
•	🎨 Beautiful and responsive UI with Tailwind CSS
•	🔄 Communicates with backend API for predictions

--------------------------------

Tech Stack

Frontend: React JS
Styling: Tailwind CSS
HTTP Client: Axios
Routing: React Router DOM
State Handling: React Hooks (useState, useEffect)

-------------------------

Project Structure

medical-image-classification/
└── frontend/
    ├── public/
    ├── src/
    │   ├── api/              # Axios config and API calls
    │   ├── assets/           # Static assets and icons
    │   ├── components/       # Reusable UI components
    │   ├── pages/            # Home, Login, Signup
    │   └── App.js
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── package.json
    └── README.md
------------------------------------------

Setup Instructions

Step 1: Clone the Repository
git clone https://github.com/nKeerthi7777/medical-image-classification.git
cd medical-image-classification/frontend

Step 2: Install Dependencies
npm install

Step 3: Start the Development Server
npm start

-----------------------------------------------------

Sample Screenshots

(1)Home page
<img width="959" height="492" alt="Screenshot 2025-07-27 105735" src="https://github.com/user-attachments/assets/d1314cb7-8fa4-45f5-81dc-7a795442a9dc" />

(2)Login Page
<img width="949" height="782" alt="Screenshot 2025-07-27 105744" src="https://github.com/user-attachments/assets/e1d716ac-1eaa-43e7-ac2d-3b6be1775cde" />

(3)Signup page
<img width="937" height="814" alt="Screenshot 2025-07-27 105752" src="https://github.com/user-attachments/assets/c359e6ab-3d51-45bc-b938-78ee8bbcd4d1" />

(4)Dashboard
<img width="932" height="776" alt="Screenshot 2025-07-27 105802" src="https://github.com/user-attachments/assets/e344a26a-9219-473b-8d6a-c1a02b8ab958" />



---------------------------------------

Deployment (Future Scope)

•	Deploy frontend using Netlify or Vercel
•	Connect backend prediction APIs
•	Add user session persistence (JWT tokens)
•	Improve error handling and loading states

----------------------------------------------

Useful Commands
•	npm install    # Install all dependencies
•	npm start      # Start development server
