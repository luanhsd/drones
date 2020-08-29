import * as path from 'path';
import { randomBytes } from 'crypto';
import { diskStorage } from 'multer';

export default {
  storage: diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: (request, file, callback) => {
      const hash = randomBytes(10).toString('hex');
      const fileName = `${hash}-${file.originalname}`;
      callback(null, fileName);
    },
  }),

  fileFilter: (request, file, callback) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      callback(null, true);
    } else {
      callback(null, false);
      return callback(null, false);
    }
  },
};
