const express = require("express");
const router = express.Router();

const tadbirData = {
    tadbir: [
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
        },
    ],
}

router.get("/", (req, res) => {
    res.json(tadbirData);
});

module.exports = router;