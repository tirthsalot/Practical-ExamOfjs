# 🛒 ShopNova - E-Commerce Product Management

ShopNova is a simple and responsive **E-Commerce Product Management System** developed as a practical exam project using **HTML, CSS, JavaScript, Bootstrap, and Local Storage**.

The project allows users to view products, add products to the shopping cart, manage cart quantities, checkout, and perform product management operations like **Add, Edit, and Remove**.

## 🚀 Live Features

* 🛍️ Display multiple products
* ➕ Add products to cart
* 🛒 View cart in Bootstrap modal
* 🔢 Increase product quantity
* ➖ Decrease product quantity
* ❌ Remove products from cart
* 💰 Calculate total cart amount
* 💾 Store cart data using Local Storage
* ✅ Checkout functionality
* ➕ Add new products
* ✏️ Edit existing products
* 🗑️ Delete existing products
* 🖼️ Add product image using image URL
* 📱 Responsive design using Bootstrap

## 🛠️ Technologies Used

* **HTML5** - Website structure
* **CSS3** - Basic styling
* **JavaScript** - Dynamic functionality and CRUD operations
* **Bootstrap 5** - Responsive UI and modals
* **Local Storage** - Store cart data in the browser

## 📂 Project Structure

```text
ShopNova/
│
├── index.html
├── script.js
├── style.css
└── README.md
```

## 📌 Main Functionalities

### 1. Product Display

Products are displayed dynamically using JavaScript. Each product contains:

* Product ID
* Product Name
* Product Price
* Product Image
* Add to Cart button
* Edit button
* Remove button

### 2. Add to Cart

Users can add products to the shopping cart.

If the product already exists in the cart, its quantity is increased instead of adding a duplicate product.

### 3. Cart Management

The cart displays:

* Product ID
* Product Image
* Product Name
* Product Price
* Product Quantity
* Remove Action

Users can increase or decrease the quantity of products.

### 4. Local Storage

Cart data is stored in the browser using JavaScript Local Storage.

```javascript
localStorage.setItem("cartData", JSON.stringify(localCartItem));
```

The saved cart data is retrieved using:

```javascript
JSON.parse(localStorage.getItem("cartData")) || [];
```

This allows cart data to remain available after refreshing the webpage.

### 5. Total Price

The total cart amount is calculated using the JavaScript `reduce()` method.

```javascript
const totalAmount = localCartItem.reduce((a, c) => {
    return a += c.price * c.qty;
}, 0);
```

### 6. Checkout

When the user clicks the checkout button:

* The system checks whether the cart is empty.
* If the cart contains products, an order success message is displayed.
* The cart is cleared after checkout.

### 7. Add New Product

Users can add a new product by entering:

* Product Name
* Product Price
* Product Image URL

The new product is dynamically added to the product list.

### 8. Edit Product

Users can edit an existing product's:

* Name
* Price
* Image

The updated product information is immediately displayed on the product list.

### 9. Delete Product

Users can remove an existing product from the product list using the **Remove** button.

## 💡 JavaScript Concepts Used

This project demonstrates the following JavaScript concepts:

* Variables
* Arrays
* Objects
* Functions
* Arrow Functions
* `forEach()`
* `find()`
* `findIndex()`
* `filter()`
* `reduce()`
* Template Literals
* DOM Manipulation
* Event Listeners
* JSON
* Local Storage
* Bootstrap Modal
* CRUD Operations

## 🔄 CRUD Operations

| Operation | Function         |
| --------- | ---------------- |
| Create    | Add New Product  |
| Read      | Display Products |
| Update    | Edit Product     |
| Delete    | Remove Product   |

## 🛒 Cart Operations

| Action      | Description                        |
| ----------- | ---------------------------------- |
| Add to Cart | Adds a product to the cart         |
| Increase    | Increases product quantity         |
| Decrease    | Decreases product quantity         |
| Remove      | Removes product from cart          |
| Checkout    | Clears cart after successful order |

## 📸 Project UI

The project contains:

* Navigation Bar
* Product Listing Section
* Product Cards
* Cart Modal
* Add Product Modal
* Edit Product Modal
* Checkout Functionality

## 🎯 Project Objective

The main objective of this project is to demonstrate practical knowledge of **JavaScript DOM manipulation, arrays, objects, CRUD operations, Local Storage, Bootstrap components, and dynamic product management** by developing a basic E-Commerce application.

## 👨‍💻 Developed By

**Tirth Salot**



This project was created for educational and practical examination purposes.
