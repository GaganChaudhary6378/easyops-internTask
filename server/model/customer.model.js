// lib/models/customer.js
import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

// Check if the model has already been compiled
const Customer = mongoose.models.Customer || mongoose.model('Customer', customerSchema);

export default Customer;
