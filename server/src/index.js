
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');



const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors());


connectDB();

//Routes
const menuRoutes = require('./routes/menu.routes');
app.use('/api/menus', menuRoutes);


app.get('/', (req,res) => {
  res.send('Express  Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});