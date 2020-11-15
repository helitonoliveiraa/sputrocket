import multer from 'multer';
import path from 'path';

// Configuring the path where all the image has to be saved, in this case will be in the disk storage
// The '..' is set like this because on windows, the / it's \
export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`;

      cb(null, fileName);
    },
  })
};
