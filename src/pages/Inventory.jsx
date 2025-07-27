import React, { useState } from 'react';

export default function AddInventory() {
  const [form, setForm] = useState({
    productName: '',
    sku: '',
    category: '',
    quantity: '',
    reorderLevel: '',
    price: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/inventory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Product added successfully!');
        setForm({
          productName: '',
          sku: '',
          category: '',
          quantity: '',
          reorderLevel: '',
          price: '',
        });
      } else {
        setMessage(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setMessage('Error adding product');
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Add Inventory Item</h1>
      {message && <p className="mb-4 text-green-600">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {['productName', 'sku', 'category', 'quantity', 'reorderLevel', 'price'].map(field => (
          <div key={field}>
            <label className="block font-medium capitalize mb-1">{field.replace(/([A-Z])/g, ' $1')}</label>
            <input
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="border px-3 py-2 rounded w-full"
              required
            />
          </div>
        ))}

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
}