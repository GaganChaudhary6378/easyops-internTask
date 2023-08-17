import Link from 'next/link';

const CustomerList = ({ customers }) => {
  // Check if the customers array is empty or undefined
  console.log(customers)
  if (!customers || customers.length === 0) {
    return <p>No customers available.</p>;
  }

  return (
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
  );
};

export default CustomerList;
