// Multer is a Node.js middleware module that helps with file uploads
import multer from "multer";
const storage=multer.diskStorage({
    filename:function(req,file,callback){
        callback(null,file.originalname);
    }
})
const upload=multer({storage});//instance of the multer storage using disk storage
export default upload;