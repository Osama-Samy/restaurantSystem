# Restaurant Management System

The **Restaurant Management System** is a backend application built using **Express.js (Node.js)** and **Mongoose** for managing orders, inventory, reservations, and menu items. This system enables restaurant staff to handle day-to-day operations such as order processing, table management, inventory tracking, and reporting.

## Features

- **Order Management:** Create and manage customer orders.
- **Reservation Management:** Add and manage table reservations.
- **Inventory Management:** Track inventory and update stock levels.
- **Menu Management:** Add and manage menu items.
- **Comprehensive Validation:** Ensures all incoming data is validated using **Joi**.
- **CRUD Operations:** Full support for Create, Read, Update, and Delete operations for all entities.

## Technologies Used

- **Node.js & Express.js** - Backend Framework.
- **Mongoose** - ODM for MongoDB.
- **Joi** - Data validation.
- **MongoDB** - NoSQL Database.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** and **npm** installed.
- **MongoDB** instance running locally or using a cloud-based service such as **MongoDB Atlas**.

## API Endpoints

### **Order Routes**

- **POST** `/api/orders` - Create a new order.
- **GET** `/api/orders` - Get all orders.

### **Reservation Routes**

- **POST** `/api/reservations` - Create a new reservation.
- **GET** `/api/reservations` - Get all reservations.

### **Inventory Routes**

- **POST** `/api/inventory` - Add an item to inventory.
- **GET** `/api/inventory` - Get all inventory items.

### **Menu Routes**

- **POST** `/api/menu` - Add a new menu item.
- **GET** `/api/menu` - Get all menu items.

## Data Validation

- **Joi** is used for validating the incoming data for each route. If any data doesn't meet the validation criteria, an error message is returned to the client with a **400** status code.

## Example Data Structure

### **Order**

```json
{
  "tableNumber": 5,
  "items": [
    {
      "menuItem": "burger",
      "quantity": 2
    }
  ],
  "totalAmount": 30
}
```

### **Reservation**

```json
{
  "customerName": "John Doe",
  "date": "2024-10-25",
  "time": "18:00",
  "numberOfPeople": 4,
  "tableNumber": 3
}
```

### **Inventory Item**

```json
{
  "itemName": "Tomatoes",
  "quantity": 50,
  "unit": "kg"
}
```

### **Menu Item**

```json
{
  "name": "Pasta",
  "price": 15,
  "description": "Delicious Italian pasta",
  "available": true
}
```

## Contributing

Contributions are always welcome! If you have any ideas or find any issues, feel free to create an issue or a pull request.

## By: Osama Samy
