import multer, { diskStorage } from 'multer';

export const storage = diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    const unamefile = `${Date.now()}`
    cb(null, unamefile)
}
});
