# 🛍️ Product Management System

A full-stack web application built using **Node.js**, **Express.js**, **MongoDB**, and **EJS**, designed to manage products efficiently through a clean and responsive UI using **Bootstrap**.

---

## 📌 Features

- 🚀 User Registration & Login (with password hashing)
- 🧾 Add, Edit, Delete, and View Products
- 🔍 Search Products (Case-insensitive)
- ⚠️ Alerts when no products are found
- 🖼️ Dashboard-style interface
- ⏪ Navigation support (Go back to previous page)
- 📦 Product details page

---

## 💻 Technologies Used

- **Backend:** Node.js, Express.js
- **Frontend:** EJS, Bootstrap 5
- **Database:** MongoDB (with Mongoose ODM)
- **Templating Engine:** EJS
- **Authentication:** Simple session-based or bcrypt (password hash)

---

## 📂 Project Structure

product_mgmt/
│
├── controller/
│ └── userController.js
├── models/
│ └── productModel.js
├── public/
│ └── styles.css (if any)
├── routes/
│ └── userRoutes.js
├── views/
│ ├── register.ejs
│ ├── login.ejs
│ ├── add_product.ejs
│ ├── update_product.ejs
│ ├── search_product.ejs
│ └── dashboard.ejs
├── .env
├── app.js
└── README.md


---

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/product_mgmt.git
   cd product_mgmt
2. **Install dependencies**
  ```bash
  npm install
3. **Run the app**
   ```bash
   node app.js


