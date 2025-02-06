const express = require('express');
const router = express.Router();

const yangilikData = {
    yangilik: [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRELmN1lkpEUYRTmci-9rbSB_nEFvMhfu7ESg&s",
            title: {
                uz: "Sizning kelajagingiz bu yerda boshlanadi",
                ru: "Ваше будущее начинается здесь",
                en: "Your future starts here",
            },
            description: {
                uz: "Bizning kurslarimiz orqali yangi bilimlarni o‘rganing.",
                ru: "Учитесь новым знаниям через наши курсы.",
                en: "Learn new skills through our courses.",
            },
            created_at: new Date().toISOString() // Hozirgi sana va vaqt
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRELmN1lkpEUYRTmci-9rbSB_nEFvMhfu7ESg&s",
            title: {
                uz: "Sizning kelajagingiz bu yerda boshlanadi",
                ru: "Ваше будущее начинается здесь",
                en: "Your future starts here",
            },
            description: {
                uz: "Bizning kurslarimiz orqali yangi bilimlarni o‘rganing.",
                ru: "Учитесь новым знаниям через наши курсы.",
                en: "Learn new skills through our courses.",
            },
            created_at: new Date().toISOString() // Hozirgi sana va vaqt
        },
    ],
}

// API endpoint
router.get("/", (req, res) => {
    res.json(yangilikData);
});

module.exports = router;