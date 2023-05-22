import multer from "multer";

const imageFilter = (req, file, cb) => {
    if(file.mimetype.startswith("image")) {
        cb(null, true);
    } else {
        cb("SVP ne chargez que des images", false);
    }
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/assets/uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-quai-antique-${file.originalname}`);
    }
});

const uploadFile = multer({storage: storage, fileFilter: imageFilter});

export default uploadFile; 