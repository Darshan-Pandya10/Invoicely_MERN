import express from "express";
import dotenv from "dotenv";
import connectDB from "./Db/connection.js";
const PORT = process.env.PORT;
import InvoiceRoutes from "./Routes/InvoiceRoutes.js";
import cors from "cors";

const app = express();

// middleware

app.use(
  cors({
    origin: ["http://localhost:5173", "https://invoicely-mern-fm.vercel.app/"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config({
  path: "./env",
});

// routes middleware
// i will have to add signup and login routes for here , so when user first visit the site it will redirect them to signup or either login route.
// these are the secure routes
app.use("/api/invoices", InvoiceRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
