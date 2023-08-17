"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CustomerForm from '../Form/page';

const AddCustomer = () => {
  const router = useRouter();

  const handleFormSubmit = async (data) => {
    // Send the data to the server to add the customer
    try {
      const response = await fetch('/api/addCustomer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push('/');
      } else {
        console.error('Failed to add customer');
      }
    } catch (error) {
      console.error('Error adding customer:', error.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 py-4">
        <h1 className="text-white text-2xl text-center">Add Customer</h1>
      </header>
      <main className="container mx-auto mt-6 p-4">
        <CustomerForm onSubmit={handleFormSubmit} />
      </main>
    </div>
  );
};

export default AddCustomer;
