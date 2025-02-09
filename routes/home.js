const express = require("express");
const router = express.Router();
const Home = require("../models/homeSchema");

// Ma'lumotlarni olish
router.get("/", async (req, res) => {
  try {
    const homeData = await Home.findOne();
    res.json(homeData);
  } catch (error) {
    res.status(500).json({ error: "Server xatosi", details: error.message });
  }
});

// Ma'lumotni o‘chirish
router.delete('/texnikum-turizm/home/:id', async (req, res) => {
  const id = req.params.id;
  if (!id) { 
      return res.status(400).json({ success: false, message: 'ID required' });
  }

  try {
      const result = await Home.findByIdAndDelete(id);
      if (result) {
          res.json({ success: true, message: 'Ma\'lumot muvaffaqiyatli o\'chirildi' });
      } else {
          res.status(404).json({ success: false, message: 'Ma\'lumot topilmadi' });
      }
  } catch (error) {
      console.error('Xatolik:', error);
      res.status(500).json({ success: false, message: 'Server xatoligi' });
  }
});



module.exports = router;