import Customer from '@/server/model/customer.model';
import connectDB from '@/lib/db';

export const GET = async (request) => {
  try {
    await connectDB();
    console.log("refetching")
    const customers = await Customer.find();
    return new Response(JSON.stringify(customers), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch customer data' }), { status: 500 });
  }
};
