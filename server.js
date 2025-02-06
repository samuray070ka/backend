const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // JSON ma'lumotlarini o'qish uchun
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
      console.log(`Server ${PORT}-portda ishlayapti...`);
    });
  })
  .catch((err) => console.log(err));

// Asosiy route
app.get("/", (req, res) => {
  res.send("Backend ishlayapti!");
});

// Admin route'ini ulash
const adminRoutes = require("./routes/admin");
app.use("/admin", adminRoutes); // Admin uchun ma'lumotlar saqlash

// Boshqa route'lar
const homeRoutes = require("./routes/home");
app.use("/texnikum-turizm/home", homeRoutes);
// const yonalishRoutes = require("./routes/yonalish");
// app.use("/texnikum-turizm/yonalishlar", yonalishRoutes);
// const yangilikRoutes = require("./routes/yangilik");
// app.use("/texnikum-turizm/yangiliklar", yangilikRoutes);
// const tadbirRoutes = require("./routes/tadbir");
// app.use("/texnikum-turizm/tadbirlar", tadbirRoutes);
// const teacherRoutes = require("./routes/teacher");
// app.use("/texnikum-turizm/oqituvchilar", teacherRoutes);
// const contactRouter = require('./routes/contact');
// app.post('/texnikum-turizm/contact', contactRouter); // POST o'rniga USE
const loginRoutes = require("./routes/login");
app.post("/login", loginRoutes);
