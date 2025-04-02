# 🏡 Ardell Estate – Real Estate MERN Web App

**Ardell Estate** is a full-featured real estate platform where users can list, browse, search, and contact landlords for property rentals or sales. Built with the MERN stack and Firebase, the platform includes authentication, listing management, and Google OAuth.

![Preview](public/real-estate-preview.png)

---

## 🚀 Features

- 🔐 **Authentication**: Email/password login & Google OAuth
- 🏘️ **Listings**: Create, edit, and view property listings
- 🔍 **Search**: Dynamic search bar with live filters
- 📩 **Contact Landlords**: In-app messaging system
- 📤 **Image Upload**: Upload up to 6 images per listing via Firebase
- 👤 **User Profile**: View and manage your listings
- 🛡️ **Private Routes**: Only signed-in users can access certain pages
- 🌐 **Responsive Design**: Fully responsive for mobile & desktop

---

## 🧱 Tech Stack

**Frontend:**
- React + Vite
- React Router DOM
- Tailwind CSS
- Firebase Storage
- Redux Toolkit

**Backend:**
- Node.js + Express.js
- MongoDB + Mongoose
- Firebase Authentication
- RESTful API (JWT-based auth)


---

## ✨ Pages & Components

| Page/Component     | Description |
|--------------------|-------------|
| `Home`             | Browse latest listings |
| `About`            | Info about Ardell Estate |
| `SignIn/SignUp`    | Authentication (email & Google) |
| `Profile`          | View user listings & manage profile |
| `CreateListing`    | Post a new property (upload images, price, details) |
| `ListingItem`      | Card view of each listing |
| `Contact`          | Message a landlord directly |
| `Search`           | Search results filtered by name |
| `PrivateRoute`     | Protects routes for authenticated users |
| `OAuth`            | Google sign-in with Firebase |

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Christopheryu29/mern-realEstate-web.git
cd mern-realEstate-web
```

### 2. Set up the backend
```
cd server
npm install
```

Create a .env file in server/
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

Start the server
```
npm run server
```

### 3. Set up the Frontend
```
cd client
npm install

```

Create a /.env file in client
```
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

```
Start the Client
```
npm run dev

```







