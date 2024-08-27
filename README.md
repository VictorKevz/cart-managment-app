# Cart Management App
![alt text](public/design/preview.jpg)
This is a solution to the [Product List with Cart challenge](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d) on Frontend Mentor. This project is designed to help you practice updating the UI dynamically based on user actions and managing state across multiple components.

## Live Demo

Check out the live site [here](https://victorkevz.github.io/cart-managment-app).

## Overview

The **Cart Management App** allows users to interact with a product list and manage their shopping cart with the following features:

- **Add items** to the cart and **remove** them.
- **Increase/decrease** the quantity of items in the cart.
- **View an order confirmation modal** when clicking "Confirm Order".
- **Reset selections** by clicking "Start New Order".
- Full **keyboard navigation** support for accessibility.
- **Responsive design** to provide an optimal layout on various screen sizes.
- **Hover and focus states** for all interactive elements for enhanced user experience.

## Features

- **Dynamic Product List:** The UI is populated dynamically using data from a local `data.json` file.
- **Cart Functionality:** Users can add, remove, increase, or decrease items in the cart.
- **Order Confirmation:** A modal displays the order details and allows users to start a new order.
- **Keyboard Accessibility:** All actions can be performed using only the keyboard, enhancing accessibility.
- **Responsive Design:** Adapts to different screen sizes for an optimal user experience.

## Technologies Used

- **HTML5**: Markup for structuring the web page.
- **CSS**: Styling the application, including responsive layouts and hover states.
- **React.js**: Building the interactive UI components and managing the application state.
- **Vite**: A fast development environment and build tool for modern web projects.

## Getting Started

To run this project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/VictorKevz/cart-managment-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd cart-managment-app
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser and navigate to:**

   ```
   http://localhost:3000
   ```

## Usage

- **Add to Cart:** Click the "Add to cart" button on a product to add it to the cart.
- **Modify Quantity:** Use the increment and decrement buttons to adjust the quantity of an item in the cart.
- **Remove from Cart:** Click the delete button to remove an item from the cart.
- **Confirm Order:** Click the "Confirm Order" button to view the order summary in a modal.
- **Start New Order:** Click "Start New Order" in the modal to clear the cart and reset the selection.

## Project Structure

The project structure follows a typical React application pattern with components and assets organized for maintainability and scalability.

- **`/src/components`**: Contains all React components (e.g., `Products`, `Cart`, `Modal`).
- **`/src/assets`**: Contains images and icons used in the project.
- **`/src/css`**: Contains CSS files for styling components.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

