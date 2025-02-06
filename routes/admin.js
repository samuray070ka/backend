const express = require('express');
const multer = require('multer');
const router = express.Router();
const Home = require('../models/homeSchema');
const { Event, Direction, News, Leadership } = require('../models/otherSchema');

// Fayllarni yuklash uchun multer
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // Maksimal fayl hajmi: 50 MB
});

// Admin uchun ma'lumotlarni saqlash
router.post('/', upload.single('img'), async (req, res) => {
  try {
    const { section, title_uz, title_ru, title_en, desc_uz, desc_ru, desc_en, number, name, direction } = req.body;
    const img = req.file ? req.file.buffer : null; // Faylni olish

    if (!section || !img || (section !== 'results' && (!title_uz || !title_ru || !title_en || !desc_uz || !desc_ru || !desc_en))) {
      return res.status(400).json({ message: 'Iltimos, barcha maydonlarni to\'ldiring!' });
    }

    let homeData = await Home.findOne();
    if (!homeData) {
      homeData = new Home({
        banner: [],
        about: [],
        our_history: [],
        results: [],
      });
    }

    const newSection = {
      img: img.toString('base64'), // Faylni base64 formatida saqlash
    };

    if (section === 'results') {
      newSection.number = number;
    } else {
      newSection.title = { uz: title_uz, ru: title_ru, en: title_en };
      newSection.description = { uz: desc_uz, ru: desc_ru, en: desc_en };
    }

    if (homeData[section]) {
      homeData[section].push(newSection);
    } else {
      let model;
      switch (section) {
        case 'events':
          model = Event;
          break;
        case 'directions':
          model = Direction;
          break;
        case 'news':
          model = News;
          break;
        case 'leadership':
          newSection.name = name;
          newSection.direction = direction;
          model = Leadership;
          break;
        default:
          return res.status(400).json({ message: `Noto'g'ri section: ${section}` });
      }
      const newItem = new model(newSection);
      await newItem.save();
    }

    if (homeData[section]) {
      const savedData = await homeData.save();
      return res.json({ message: 'Ma’lumotlar saqlandi', data: savedData });
    } else {
      return res.json({ message: 'Ma’lumotlar saqlandi' });
    }
  } catch (error) {
    res.status(500).json({
      error: 'Server xatosi',
      details: error.message
    });
  }
});

module.exports = router;