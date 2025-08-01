import express from 'express';
import cors from 'cors';
import inventoryRouter from './routes/inventory.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/inventory', inventoryRouter);

app.listen(5000, () => console.log('Server running on port 5000'));
