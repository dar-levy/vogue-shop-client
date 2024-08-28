# Vogue Shop Client

## Concise Description

Vogue Shop Client is a modern e-commerce front-end built using React and TypeScript. It features a responsive design, easy navigation through React Router DOM, and global state management via React Store context. The project integrates toast notifications for enhanced user feedback and communicates with a backend API through a centralized configuration file.

## Installation

Follow the steps below to set up the project locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/dar-levy/vogue-shop-client.git
    cd vogue-shop-client
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm dev
    ```

## Expanded Description

### Tabs Overview

1. **Catalog**:
    - Displays a collection of products available for purchase. Each product is clickable, leading to a detailed view. The catalog is dynamic, allowing users to filter and sort products based on various criteria.

2. **Contact**:
    - A form allowing users to send inquiries or feedback. The form captures user details and messages, providing a user-friendly way to reach out to the store's support team.

3. **About**:
    - Contains information about the store, its history, mission, and values. This section helps build trust and transparency with potential customers.

4. **Reviews**:
    - Showcases customer feedback and ratings. Reviews are loaded dynamically and presented in a visually appealing format using Material-UI. Users can browse through testimonials to gain insights into the store's reputation.

5. **New Arrivals**:
    - Features the latest products added to the store. This section is regularly updated, ensuring that customers can always find the newest items quickly and easily.

### Basket and Pay Screen

- **Basket**:
    - Users can add items to their basket from the catalog. The basket maintains a list of selected products, their quantities, and the total price. It uses the global state management to ensure the basket persists across different pages.

- **Pay Screen**:
    - After reviewing their basket, users can proceed to the pay screen. This screen handles payment processing, allowing users to complete their purchase. Toastify notifications provide feedback on payment success or failure.

## Technologies Used

- **React**: For building the user interface.
- **React Store Context**: For global state management.
- **React Router DOM**: For handling routing within the application.
- **Toastify**: For displaying notifications to the user.
- **TypeScript**: Provides type safety and ensures robust code.


## Configuration

Ensure that the `config.json` file in the root of the project is correctly set up with the API URL:

```json
{
  "apiUrl": "http://localhost:5000/api"
}
```

This configuration allows the client to communicate with the backend API for data retrieval and other operations.
