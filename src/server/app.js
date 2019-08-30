import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import chalk from 'chalk';
import jwt from 'jsonwebtoken';
import morgan from 'morgan';
import mongoose from 'mongoose';
import {
  getAllTools,
  getToolById,
  deleteTool,
  addTool,
  updateTool,
} from './Tools/tools.controller';
import {
  addOrder,
  getAllOrders,
  deleteOrder,
  getOrderById,
} from './Orders/order.controller';

const hostname = 'localhost';
const port = 4000;

const app = express();
mongoose
  .connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/Masters_thesis_DB',
    { useNewUrlParser: true },
  )
  .then(() => {
    console.log('====================================');
    console.log('CONNECTED TO MONGODB!!!');
    console.log('====================================');
  });

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use(morgan('combined'));
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());
app.options('*', cors());

app.post('/auth', async (req, res) => {
  if (req.body) {
    const token = jwt.sign(
      {
        data: req.body.username,
      },
      'secret',
      { expiresIn: '3h' },
    );
    res.send(token);
  } else {
    req.flash('error', 'Username and password are incorrect');
    res.redirect('/login');
  }
});

app.get('/tools', async (req, res) => {
  const tools = await getAllTools();
  res.send(tools);
});

app.get('/tool/:toolId', async (req, res) => {
  const { toolId } = req.params;
  const tools = await getToolById(toolId);
  res.send(tools);
});

app.post('/addTool', async (req, res) => {
  try {
    const data = await addTool(req.body);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

app.delete('/deleteTool/:toolId', async (req, res) => {
  try {
    const { toolId } = req.params;
    const data = await deleteTool(toolId);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});
app.patch('/updateTool/:toolId', async (req, res) => {
  try {
    const { toolId } = req.params;
    const data = await updateTool({ id: toolId, params: req.body });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

app.post('/addOrder', async (req, res) => {
  try {
    const data = await addOrder(req.body);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

app.get('/orders', async (req, res) => {
  const orders = await getAllOrders();
  res.send(orders);
});

app.delete('/deleteOrder/:orderId', async (req, res) => {
  try {
    const { orderId } = req.params;
    const data = await deleteOrder(orderId);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});
app.get('/orders/:orderId', async (req, res) => {
  const { orderId } = req.params;
  const order = await getOrderById(orderId);
  res.send(order);
});
//==========================================
app.listen(process.env.PORT || port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
