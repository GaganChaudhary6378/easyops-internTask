# Customer Management App

Welcome to the Customer Management App! This application allows you to manage customer records, including adding new customers, viewing their details, and updating or deleting existing records.

## Routes

### Home Page - `/`

The home page displays a list of all customers. It fetches customer data from the server using the `/api/getCustomers` route and displays the list of customers. You can click on a customer's name to view more details.

### Customer Details - `/components/customers/[id]`

This page displays detailed information about a specific customer. It fetches customer details from the server using the `/api/modifyCustomer/[id]` route. You can update customer information using the provided form or delete the customer record.

### Add Customer Page - `/components/add`

This page allows you to add a new customer to the database. Fill out the form with the customer's details and click "Add Customer."

### Get Customers - `/api/getCustomers`

This API route is used to retrieve a list of all customers from the database.

- **GET**: Retrieves a list of all customers.
  - Response: Returns a JSON array containing objects with customer details, such as name, email, and phone number.

### Modify Customer - `/api/modifyCustomer/[id]`

This API route is used to perform operations on individual customer records.

- **GET**: Retrieves detailed information about a specific customer.
  - Parameters:
    - `id`: The unique identifier of the customer.
  - Response: Returns a JSON object containing the customer's details.

- **PUT**: Updates an existing customer's information.
  - Parameters:
    - `id`: The unique identifier of the customer to update.
  - Request Body: JSON object containing the updated customer data.
  - Response: Returns a JSON object indicating the success of the update.

- **DELETE**: Deletes a customer record.
  - Parameters:
    - `id`: The unique identifier of the customer to delete.
  - Response: Returns a JSON object indicating the success of the delete operation.

### Usage Example:

To retrieve the list of all customers, follow these steps:

1. Open the home page by navigating to `/`.
2. The list of customers will be displayed, including their names and basic information.
3. Click on a customer's name to view detailed information on the `Customer Details` page.

Additionally, you can use the "Modify Customer" API to update or delete specific customer records as described in the previous section.

## Getting Started

1. Clone this repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Configure your MongoDB URI by setting the `MONGO_URI` environment variable.
4. Run the development server using `npm run dev`.
5. Access the application in your web browser at `http://localhost:3000`.

## Technologies Used

- Next.js
- MongoDB
- React
- Tailwind CSS

## Author

Gagan Chaudhary

