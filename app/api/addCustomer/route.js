
import Customer from '@/server/model/customer.model';
import connectDB from '@/lib/db';
export const POST = async (request) => {
  const { name, email, phone } = await request.json();
  console.log(name, email, phone);

  try {
    await connectDB();

    const customer = new Customer({ name, email, phone });
    await customer.save();

    return new Response(JSON.stringify({ message: 'Customer added successfully' }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to add customer' }), { status: 500 });
  }
};
