const express = require('express'); // CommonJS
const router = express.Router();

router.post('/foodData', (req, res) => {
  try {
   
   const data = {
  food_items: global.food_items,
  foodCategory: global.foodCategory
  }
   res.send(Object.values(data))
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router; 
// CommonJS export
