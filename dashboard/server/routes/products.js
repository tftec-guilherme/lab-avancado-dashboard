const express = require('express');
const { query, execute } = require('../db');

const router = express.Router();
// Map SQL PascalCase columns to frontend camelCase
function toCamelCase(row) {
  return {
    id: row.Id,
    name: row.Name,
    description: row.Description,
    price: row.Price,
    category: row.Category,
    stock: row.Stock,
    imageUrl: row.ImageUrl,
    createdAt: row.CreatedAt,
  };
}


// GET /api/products — list all products
router.get('/', async (req, res) => {
  try {
    const products = await query('SELECT * FROM Products ORDER BY Category, Name');
    res.json(products.map(toCamelCase));
  } catch (err) {
    console.error('Error fetching products:', err.message);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// GET /api/products/:id — get one product by Id
router.get('/:id', async (req, res) => {
  try {
    const products = await query('SELECT * FROM Products WHERE Id = @id', {
      id: parseInt(req.params.id, 10),
    });

    if (products.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(toCamelCase(products[0]));
  } catch (err) {
    console.error('Error fetching product:', err.message);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// PATCH /api/products/:id/stock — update stock level
// Accepts { stock: N } for absolute value OR { quantity: N } for delta (negative to decrement)
router.patch('/:id/stock', async (req, res) => {
  try {
    const { stock, quantity } = req.body;
    const productId = parseInt(req.params.id, 10);

    if (stock === undefined && quantity === undefined) {
      return res.status(400).json({ error: 'stock or quantity is required' });
    }

    let result;
    if (quantity !== undefined) {
      // Delta mode: add quantity to current stock (use negative to decrement)
      result = await execute(
        'UPDATE Products SET Stock = Stock + @quantity WHERE Id = @id',
        { quantity: parseInt(quantity, 10), id: productId }
      );
    } else {
      // Absolute mode: set stock to exact value
      result = await execute(
        'UPDATE Products SET Stock = @stock WHERE Id = @id',
        { stock: parseInt(stock, 10), id: productId }
      );
    }

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const updated = await query('SELECT * FROM Products WHERE Id = @id', { id: productId });
    res.json(toCamelCase(updated[0]));
  } catch (err) {
    console.error('Error updating stock:', err.message);
    res.status(500).json({ error: 'Failed to update stock' });
  }
});

module.exports = router;
