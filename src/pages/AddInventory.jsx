import React, { useState } from 'react';

const categories = ['Medicines', 'Personal Protective', 'Respiratory', 'Equipment', 'Vascular Access', 'Surgical'];

const suppliers = ['HealthPlus Supplies', 'MediEquip Co.', 'CareSource Distributors'];

export default function AddInventory() {
  const [formData, setFormData] = useState({
    productName: '',
    sku: '',
    category: '',
    quantity: '',
    reorderLevel: '',
    price: '',
    supplier: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // For quantity, reorderLevel, price convert to numbers if possible
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.productName.trim()) newErrors.productName = 'Product Name is required';
    if (!formData.sku.trim()) newErrors.sku = 'SKU is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.quantity || isNaN(formData.quantity) || formData.quantity < 0) newErrors.quantity = 'Valid quantity is required';
    if (!formData.reorderLevel || isNaN(formData.reorderLevel) || formData.reorderLevel < 0) newErrors.reorderLevel = 'Valid reorder level is required';
    if (!formData.price || isNaN(formData.price) || formData.price < 0) newErrors.price = 'Valid price is required';
    if (!formData.supplier) newErrors.supplier = 'Supplier is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // For now just log the data (later replace with API or state update)
    console.log('Inventory item added:', formData);

    // Clear form
    setFormData({
      productName: '',
      sku: '',
      category: '',
      quantity: '',
      reorderLevel: '',
      price: '',
      supplier: '',
    });

    alert('Inventory item added successfully!');
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-[#204671]">Add Inventory</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1" htmlFor="productName">Product Name</label>
          <input
            type="text"
            name="productName"
            id="productName"
            value={formData.productName}
            onChange={handleChange}
            className={`w-full border px-3 py-2 rounded ${errors.productName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.productName && <p className="text-red-500 text-sm mt-1">{errors.productName}</p>}
        </div>

        <div>
          <label className="block font-semibold mb-1" htmlFor="sku">SKU</label>
          <input
            type="text"
            name="sku"
            id="sku"
            value={formData.sku}
            onChange={handleChange}
            className={`w-full border px-3 py-2 rounded ${errors.sku ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.sku && <p className="text-red-500 text-sm mt-1">{errors.sku}</p>}
        </div>

        <div>
          <label className="block font-semibold mb-1" htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            className={`w-full border px-3 py-2 rounded ${errors.category ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
        </div>

        <div>
          <label className="block font-semibold mb-1" htmlFor="quantity">Quantity</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            min="0"
            value={formData.quantity}
            onChange={handleChange}
            className={`w-full border px-3 py-2 rounded ${errors.quantity ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
        </div>

        <div>
          <label className="block font-semibold mb-1" htmlFor="reorderLevel">Reorder Level</label>
          <input
            type="number"
            name="reorderLevel"
            id="reorderLevel"
            min="0"
            value={formData.reorderLevel}
            onChange={handleChange}
            className={`w-full border px-3 py-2 rounded ${errors.reorderLevel ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.reorderLevel && <p className="text-red-500 text-sm mt-1">{errors.reorderLevel}</p>}
        </div>

        <div>
          <label className="block font-semibold mb-1" htmlFor="price">Price ($)</label>
          <input
            type="number"
            name="price"
            id="price"
            min="0"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
            className={`w-full border px-3 py-2 rounded ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
        </div>

        <div>
          <label className="block font-semibold mb-1" htmlFor="supplier">Supplier</label>
          <select
            name="supplier"
            id="supplier"
            value={formData.supplier}
            onChange={handleChange}
            className={`w-full border px-3 py-2 rounded ${errors.supplier ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Select supplier</option>
            {suppliers.map((sup) => (
              <option key={sup} value={sup}>{sup}</option>
            ))}
          </select>
          {errors.supplier && <p className="text-red-500 text-sm mt-1">{errors.supplier}</p>}
        </div>

        <button
          type="submit"
          className="bg-[#204671] text-white px-5 py-2 rounded hover:bg-[#1b385a] transition"
        >
          Add Inventory
        </button>
      </form>
    </div>
  );
}
