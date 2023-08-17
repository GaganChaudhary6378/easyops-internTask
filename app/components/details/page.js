"use client"
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation'; // Import the useRouter hook (note the corrected import)
import CustomerForm from '../Form/page';

const CustomerDetails = () => {
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const [customer, setCustomer] = useState({});
  const router = useRouter();

  const fetchCustomerDetails = async () => {
    try {
      const cacheBuster = new Date().getTime();
      const response = await fetch(`/api/modifyCustomer/${id}?cacheBuster=${cacheBuster}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCustomer(data);
      } else {
        console.error('Failed to fetch customer details');
      }
    } catch (error) {
      console.error('Error fetching customer details:', error.message);
    }
  };

  useEffect(() => {
    if (id) {
      fetchCustomerDetails();
    }
  }, [id]);

  const handleUpdate = async (data) => {
    try {
      const response = await fetch(`/api/modifyCustomer/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        fetchCustomerDetails();
        router.push('/');
      } else {
        console.error('Failed to update customer');
      }
    } catch (error) {
      console.error('Error updating customer:', error.message);
    }
  };

  const handleDelete = async () => {
    const shouldDelete = window.confirm('Are you sure you want to delete this customer?');
    if (shouldDelete) {
      try {
        const response = await fetch(`/api/modifyCustomer/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          router.push('/');
        } else {
          console.error('Failed to delete customer');
        }
      } catch (error) {
        console.error('Error deleting customer:', error.message);
      }
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto mt-6 p-4">
        <h2 className="text-2xl text-black font-serif text-center pb-4">{customer.name}</h2>
        <h2 className="text-xl text-black font-serif text-center pb-4">{customer.email}</h2>
        <h2 className="text-xl text-black font-serif text-center pb-4">{customer.phone}</h2>
        <CustomerForm onSubmit={handleUpdate} initialData={customer} />
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-6 md:ml-0"
        >
          Delete Customer
        </button>
      </main>
    </div>
  );
};

export default CustomerDetails;
