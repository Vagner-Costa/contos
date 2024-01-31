import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    //Caminho do arquivo
    destination: function (req, file, cb) {
        let folder = null
        if(req.originalUrl === '/uploadPhotoProfile'){
            folder = 'profile'
        }else if(req.originalUrl === '/uploadTales'){
            folder = 'tales'
        }
        cb(null, `./public/${folder}/`)
    },

    //Novo nome do arquivo
    filename: function (req, file, cb) {
      const new_name = `${Date.now()}-${Math.round(Math.random() * 9999)}${path.extname(file.originalname)}`
      cb(null, file.fieldname + '-' + new_name)
    }
  })
  
  const upload = multer({ storage: storage })

  export default upload