const express = require('express');
const router = express.Router();

router.post('/texnikum-turizm/contact', (req, res) => {
    const { first_name, last_name, email, phone, detail } = req.body;

    // Ma'lumotlar mavjudligini tekshirish
    if (!first_name || !last_name || !email || !phone || !detail) {
        return res.status(400).json({ error: "Iltimos, barcha maydonlarni to'ldiring." });
    }

    // Success response
    res.status(200).json({
        message: 'Form ma\'lumotlari muvaffaqiyatli yuborildi!',
        data: req.body
    });
});

module.exports = router;
