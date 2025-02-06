const express = require('express');
const router = express.Router();

const teacherData = {
    teacher: [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRELmN1lkpEUYRTmci-9rbSB_nEFvMhfu7ESg&s",
            name: {
                uz: "Sizning kelajagingiz bu yerda boshlanadi",
                ru: "Ваше будущее начинается здесь",
                en: "Your future starts here",
            },
            direction: {  // O‘zgartirilgan: description o‘rniga direction qo‘shildi
                uz: "Informatika va dasturlash",
                ru: "Информатика и программирование",
                en: "Informatics and Programming",
            },
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRELmN1lkpEUYRTmci-9rbSB_nEFvMhfu7ESg&s",
            name: {
                uz: "Sizning kelajagingiz bu yerda boshlanadi",
                ru: "Ваше будущее начинается здесь",
                en: "Your future starts here",
            },
            direction: {  // O‘zgartirilgan: description o‘rniga direction qo‘shildi
                uz: "Matematika",
                ru: "Математика",
                en: "Mathematics",
            },
        },
    ],
}

router.get("/", (req, res) => {
    res.json(teacherData);
});
  
module.exports = router;