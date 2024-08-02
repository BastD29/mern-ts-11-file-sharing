import multer from "multer";
import multerS3 from "multer-s3";
import { s3bucketName, s3Client } from "../config/aws";

const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: s3bucketName,
    acl: "public-read",
    key: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

export { upload };
