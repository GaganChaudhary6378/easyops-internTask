"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
export const revalidate = 0
const Home = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const response = await fetch('/api/getCustomers', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },{ cache: 'no-store' });

        if (response.ok) {
          const data = await response.json();
          setCustomers(data);
        } else {
          console.error('Failed to fetch customer data');
        }
      } catch (error) {
        console.error('Error fetching customer data:', error.message);
      }
    }

    fetchCustomers();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 py-4">
        <h1 className="text-white text-2xl text-center">Customer List</h1>
      </header>
      <main className="container mx-auto mt-6 p-4">
        {customers.length > 0 ? (
          <ul>
            {customers.map((customer) => (
              <li key={customer._id} className="mb-2">
                <Link href={`/components/customers/${customer._id}`} className="text-black">
                  <div className="bg-white rounded-md p-3 shadow-md hover:shadow-lg">
                    <h3 className="text-lg font-medium">{customer.name}</h3>
                    <p className="text-gray-600">{customer.email}</p>
                    <p className="text-gray-600">{customer.phone}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No customers available.</p>
        )}
        <div className="text-center mt-4">
          <a href="/components/add" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Add Customer
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
