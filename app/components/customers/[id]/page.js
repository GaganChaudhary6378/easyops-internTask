"use client"
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import CustomerDetails from '../../details/page';

const CustomerPage = () => {
  const pathName = usePathname();
  const id = pathName.replace('/components/customers', '');

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 py-4">
        <h1 className="text-white text-2xl text-center">Customer Details</h1>
      </header>
      <main className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 mt-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <CustomerDetails customerId={id} />
        </div>
      </main>
    </div>
  );
};

export default CustomerPage;
