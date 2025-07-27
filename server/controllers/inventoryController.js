import db from '../db.js';

export const addProduct = (req, res) => {
  const { productName, sku, category, quantity, reorderLevel, price } = req.body;

  const query = `
    INSERT INTO products (productName, sku, category, quantity, reorderLevel, price)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [productName, sku, category, quantity, reorderLevel, price], (err, result) => {
    if (err) {
      console.error('Error adding product:', err);
      return res.status(500).json({ message: 'Database error' });
    }
    res.status(201).json({ message: 'Product added successfully' });
  });
};
