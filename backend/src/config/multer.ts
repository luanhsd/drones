import * as path from 'path';
import { randomBytes } from 'crypto';
import { diskStorage } from 'multer';
import * as aws from 'aws-sdk';
import * as multerS3 from 'multer-s3';

const MAX_SIZE_TWO_MEGABYTES = 2 * 1024 * 1024;

const storageTypes = {
  local: diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: (request, file, callback) => {
      const hash = randomBytes(10).toString('hex');
      const fileName = `${hash}-${file.originalname}`;
      callback(null, fileName);
    },
  }),
  s3: multerS3({
    s3: new aws.S3(),
    bucket: process.env.BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (request, file, callback) => {
      const hash = randomBytes(10).toString('hex');
      const fileName = `${hash}-${file.originalname}`;
      callback(null, fileName);
    },
  }),
};

export default {
  dest: path.resolve(__dirname, '..', '..', 'uploads'),
  storage: storageTypes[process.env.STORAGE_TYPE],
  limits: {
    fileSize: MAX_SIZE_TWO_MEGABYTES,
  },

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
