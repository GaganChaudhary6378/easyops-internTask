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

   ##The .env.local file looks like :-
   
   <img width="962" alt="Screenshot 2023-08-17 at 5 57 03 PM" src="https://github.com/GaganChaudhary6378/easyops-internTask/assets/100700883/c0778e20-4634-47c6-8f77-9c40eec14007">


## Technologies Used

- Next.js
- MongoDB
- React
- Tailwind CSS
- Formik

## Author

Gagan Chaudhary

## Project ScreenShots

# Home Page : -
<img width="1470" alt="Screenshot 2023-08-17 at 6 04 13 PM" src="https://github.com/GaganChaudhary6378/easyops-internTask/assets/100700883/1dec67e8-3874-4339-97ed-6b756cb22b4d">

# Input Validation and add customer page: -
<img width="1470" alt="Screenshot 2023-08-17 at 6 06 08 PM" src="https://github.com/GaganChaudhary6378/easyops-internTask/assets/100700883/2dddf769-499b-47e3-9f9e-9371a7018262">

# Customer successfully added :- 
<img width="1467" alt="Screenshot 2023-08-17 at 6 07 34 PM" src="https://github.com/GaganChaudhary6378/easyops-internTask/assets/100700883/65844b4e-e2cf-4318-a369-e0b2a6d6c4fc">

# Modify details of customer :-
<img width="1469" alt="Screenshot 2023-08-17 at 6 09 10 PM" src="https://github.com/GaganChaudhary6378/easyops-internTask/assets/100700883/e3ea882b-94c3-49f4-96d6-2681a2693f29">

# Details have been modified successfully : -
<img width="1470" alt="Screenshot 2023-08-17 at 6 10 02 PM" src="https://github.com/GaganChaudhary6378/easyops-internTask/assets/100700883/fb4463b1-8069-477b-92a3-90c8cc6cde44">

# Delete a customer : -
<img width="1346" alt="Screenshot 2023-08-17 at 6 15 09 PM" src="https://github.com/GaganChaudhary6378/easyops-internTask/assets/100700883/7fe8d3ed-c369-43f2-b946-5f852c5af1c1">


# Customer deleted successfuly : -
<img width="1342" alt="Screenshot 2023-08-17 at 6 16 48 PM" src="https://github.com/GaganChaudhary6378/easyops-internTask/assets/100700883/bca3f58d-b918-4d7f-b73a-9097bfa61e9c">




