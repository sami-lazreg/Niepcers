const express = require("express");
const router = express.Router();
const authMiddleWare = require("../config/authMiddleware");
const Photos = require("../models/Photos");

//post a Photo

router.post("/photos", authMiddleWare, (req, res) => {
  let newPhoto = new Photos({ ...req.body, Niepcer: req.userId });
  newPhoto
    .save()
    .then((Photo) => res.status(200).send(Photo))

    .catch((err) => {
      console.error(err.message);
      res.status(500).send({ msg: "Server Error" });
    });
});

//get all photos
router.get('/allPhotos',(req,res)=> {
    Photos.find()
    .then(data => res.send(data))
    .catch((err) =>{
console.error(err.message)
res.status(500).send({msg:"Server Error!"})
    })
})
//get user photos
router.get('/myPhotos',authMiddleWare,(req,res)=> {
    Photos.find({Niepcer :req.userId})
    .then(data => res.send(data))
    .catch((err) =>{
console.error(err.message)
res.status(500).send({msg:"Server Error!"})
    })
})

module.exports = router;
