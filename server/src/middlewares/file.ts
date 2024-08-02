// import multer from "multer";
// import fs from "fs";
// import path from "path";

// // Ensure the uploads directory exists (creating one if it does not)
// const uploadDir = path.join(__dirname, "../../uploads");
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // cb(null, "uploads/");
//     cb(null, uploadDir);
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// export { upload };
