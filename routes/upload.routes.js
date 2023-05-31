const express = require("express");
const router = express.Router(); // Thay đổi từ 'express()' thành 'express.Router()'

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../public/images`);
  },
  filename: function (req, file, cb) {
    let ext = file.originalname.split(".")[1];
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + `.${ext}`;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

// Upload 1 ảnh
// router.post("/", (req, res) => {
//   upload.single("avatar")(req, res, function (err) {
//     if (err instanceof multer.MulterError) {
//       console.log(err);
//     } else if (err) {
//       console.log(err, "--------");
//     } else {
//       console.log(req.file);
//       res.json({ mess: "okkkkkk" });
//     }
//   });
// });

// upload nhiều ảnh
router.post("/", (req, res) => {
  upload.array("avatar", 10)(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log(err);
    } else if (err) {
      console.log(err);
    } else {
      console.log(req.files);
      res.json({ mess: "okkkkkk" });
    }
  });
});

module.exports = router;
