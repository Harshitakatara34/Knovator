// server.js
const express = require('express');
const router = require('./Routes/product.route');
const cors=require('cors');
const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
