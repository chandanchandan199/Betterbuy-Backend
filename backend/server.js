// import path from "path";
// import express from "express";
// import dotenv from "dotenv";
// dotenv.config();
// import cookieParser from "cookie-parser";
// import connectDb from "./config/db.js";
// const port = process.env.PORT || 8000;
// import productRoutes from "./routes/productRoutes.js";
// import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
// import userRoutes from "./routes/userRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";
// import uploadRoutes from "./routes/uploadRoutes.js";
// import cors from "cors";

// connectDb();

// const app = express();

// //Body parser middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// //Cookie parser middleware

// app.use(cookieParser());
// app.use(cors());

// app.use("/api/products", productRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/upload", uploadRoutes);

// app.get("/api/config/paypal", (req, res) =>
//   res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
// );

// // Below is the code written to make the uploads folder as a static folder
// const __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// if (process.env.NODE_ENV === "production") {
//   // Set Folder to static
//   app.use(express.static(path.join(__dirname, "/frontend/dist")));

//   // If any route appears without api like above given code then use * and redirect them all to index.html

//   app.use("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running");
//   });
// }

// app.use(notFound);
// app.use(errorHandler);

// app.listen(port, () => {
//   console.log(`Server running on ${port}`);
// });

"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => res.send("Express on Vercel"));
app.listen(3000, () => console.log("Server ready on port 3000."));
exports.default = app;
