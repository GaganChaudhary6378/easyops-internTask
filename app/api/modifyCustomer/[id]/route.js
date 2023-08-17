import connectDB from '@/lib/db';
import Customer from '@/server/model/customer.model';

export const GET = async (request) => {
  // console.log(request)
  try {
    const url = new URL(request.url); // Create a URL object from the request URL
    const pathnameParts = url.pathname.split('/'); // Split the pathname by '/'
    const id = pathnameParts[pathnameParts.length - 1];
     // Get the last part of the pathname as the id
    await connectDB();
    const customer = await Customer.findById(id);
    if (!customer) {
      return new Response(JSON.stringify({ error: 'Customer not found' }), { status: 404 });
    }
    return new Response(JSON.stringify(customer), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch customer details' }), { status: 500 });
  }
};

export const PUT = async (request) => {
  const url = new URL(request.url);
  const pathnameParts = url.pathname.split('/');
  const id = pathnameParts[pathnameParts.length - 1];
  const { name, email, phone } = await request.json();

  try {
    await connectDB();
    const customer = await Customer.findByIdAndUpdate(
      id,
      { name, email, phone },
      { new: true }
    );
    if (!customer) {
      return new Response(JSON.stringify({ error: 'Customer not found' }), { status: 404 });
    }
    return new Response(JSON.stringify({ message: 'Customer updated successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update customer' }), { status: 500 });
  }
};

export const DELETE = async (request) => {
  const url = new URL(request.url);
  const pathnameParts = url.pathname.split('/');
  const id = pathnameParts[pathnameParts.length - 1];

  try {
    await connectDB();
    const customer = await Customer.findByIdAndRemove(id);
    if (!customer) {
      return new Response(JSON.stringify({ error: 'Customer not found' }), { status: 404 });
    }
    return new Response(JSON.stringify({ message: 'Customer deleted successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to delete customer' }), { status: 500 });
  }
};

export const handleRequest = async (request) => {
  if (request.method === 'GET') {
    return GET(request);
  }
  if (request.method === 'PUT') {
    return PUT(request);
  }
  if (request.method === 'DELETE') {
    return DELETE(request);
  }
  return new Response(JSON.stringify({ error: 'Invalid request method' }), { status: 400 });
};
