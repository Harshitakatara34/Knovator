// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../Models/Product.model');

const products = [
    new Product(1, 'Laptop', 'https://th.bing.com/th/id/OIP.PHCx9sLQq9rHhujWxDtG7gHaFS?rs=1&pid=ImgDetMain','High-performance laptop with the latest specifications.', 50000),
    new Product(2, 'Smartphone', 'https://th.bing.com/th?id=OIP.3lafCjiAzLLGVP___DuFTgHaLl&w=199&h=312&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', 'Feature-packed smartphone with a stunning display.', 15000),
    new Product(3, 'Headphones', 'https://www.bhphotovideo.com/images/images2500x2500/sony_mdr_rf995rk_rf995rk_wireless_home_theater_1317729.jpg', 'Wireless headphones with high-quality sound.', 2000),
    new Product(4, 'Fitness Tracker', 'https://wearablefitnesstracker.com/wp-content/uploads/2020/03/how-to-reset-morepro-fitness-tracker.jpg',  'Track your fitness activities with this fitness tracker.', 5000),
    new Product(5, 'Digital Camera', 'https://www.bhphotovideo.com/images/images2500x2500/Fujifilm_16123737_Finepix_S3200_Digital_Camera_749766.jpg', 'Capture memories in high resolution with this powerful digital camera.', 60000),
    new Product(6, 'Gaming Console', 'https://th.bing.com/th/id/R.dfebe3b3816b25a0401dff950d8d1d3f?rik=OZJjASEX7go5Sg&riu=http%3a%2f%2fs3.amazonaws.com%2fdigitaltrends-uploads-prod%2f2016%2f07%2fSony-PS4-Controller-TV-0001.jpg&ehk=nKpmLSnG1iR%2fC6DnR4ohmEqPY%2flMUwq84N5MunxDRnA%3d&risl=&pid=ImgRaw&r=0', 'Enjoy the latest games with this state-of-the-art gaming console.', 40,000),
    new Product(7, 'Coffee Maker', 'https://th.bing.com/th/id/OIP.s_mgmwIO-_DM0HCqEfkmIgHaJQ?rs=1&pid=ImgDetMain', 'Brew your favorite coffee at home with this efficient coffee maker.', 5000),
    new Product(8, 'Smart TV', 'https://media.4rgos.it/i/Argos/6254520_R_Z001A', 'Experience entertainment like never before with this smart TV.', 90000),
    new Product(9, 'Bluetooth Speaker', 'https://www.techtoyreviews.com/wp-content/uploads/2017/07/Jam-Audio-Bluetooth-Speaker.jpg', 'Compact and portable Bluetooth speaker for on-the-go music.', 4000),
    new Product(10, 'Wireless Earbuds', 'https://images-na.ssl-images-amazon.com/images/I/71xvfA4ozZL._SL1500_.jpg', 'Enjoy wireless freedom with these comfortable and stylish earbuds.', 1000),
    new Product(11, 'Tablet', 'https://i5.walmartimages.com/asr/70b6357e-4c4a-49d5-89e6-98afb7864ac5.011e97d0826acd0c6a6f0d099b532105.jpeg', 'Versatile tablet for work, entertainment, and creativity.', 30000),
    new Product(12, 'Desktop Computer', 'https://th.bing.com/th/id/OIP.3-XDUARkabxqavW9uEj82QHaHa?w=191&h=191&c=7&r=0&o=5&pid=1.7', 'Powerful desktop computer for intensive computing tasks.', 12000),
    new Product(13, 'Robot Vacuum', 'https://th.bing.com/th/id/OIP.FtBs-mZQLIdFt7ukOvgwpAHaD0?rs=1&pid=ImgDetMain', 'Effortlessly keep your home clean with this smart robot vacuum.', 25000),
    new Product(14, 'Electric Toothbrush', 'https://i5.walmartimages.com/asr/1d313fbf-424d-45bf-8c1f-aea214777f73_1.1aec827d1bba93c00229126469aedc1d.jpeg', 'Achieve a bright smile with this advanced electric toothbrush.', 800),
    new Product(15, 'Wireless Router', 'https://th.bing.com/th/id/OIP.9LKkpSqGuq4MN9xziSacZQHaFg?rs=1&pid=ImgDetMain', 'High-speed wireless router for seamless internet connectivity.', 7000),
    new Product(16, 'External Hard Drive', 'https://th.bing.com/th/id/OIP.4rzauIC45XSCWmPHN99KpwHaHa?w=192&h=192&c=7&r=0&o=5&pid=1.7', 'Expand your storage with this reliable external hard drive.', 1200),
    new Product(17, 'Security Camera', 'https://www.bhphotovideo.com/images/images2000x2000/flir_c237vd_mpx_surveillance_camera_1168266.jpg', 'Keep an eye on your home with this intelligent security camera.', 1800),
    new Product(18, 'Portable Charger', 'https://i5.walmartimages.com/asr/b8cb4339-f8c5-46ab-b7b2-c4dadc3a0749.8ed629f7d038e57f92bf0b18d29f0b1d.jpeg', 'Charge your devices on the go with this compact portable charger.', 3000),
    new Product(19, 'Wireless Mouse', 'https://static1.industrybuying.com/products/it-electronics/computer-accessories/mouse/ITE.MOU.49658662_1685528405022.webp', 'Enhance your productivity with this comfortable wireless mouse.', 2500),
    new Product(20, 'Printer', 'https://th.bing.com/th/id/OIP.-mzgb7uHi7EqTui2xurNvAAAAA?rs=1&pid=ImgDetMain', 'Print documents and photos with this efficient and reliable printer.', 100),
     ];
  

router.get('/products', (req, res) => {
  res.json(products);
});

router.post('/place-order', (req, res) => {
  const { firstName, lastName, address, cart } = req.body;
  if (!firstName || !lastName || !address || !cart || cart.length === 0) {
    return res.status(400).json({ message: 'Incomplete order details' });
  }
  console.log('Order placed:', { firstName, lastName, address, cart });
  res.json({ message: 'Order placed successfully' });
});

module.exports = router;
