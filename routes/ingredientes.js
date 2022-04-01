const { Router } = require('express');
const Ingredientes = require('../models/ingredientes');


const router = Router();

router.get('/',async(req, res)=> {

  const data = await Ingredientes.find();
  res.status(200).json( data )
  });

const tipo = ['frutas','vejetales','fish']
tipo.forEach(e =>{
  router.get(`/${e}`,async(req, res)=> {

    const data = await Ingredientes.find({tipo: e});
    res.status(200).json( data )
    });
})
 

module.exports = router;