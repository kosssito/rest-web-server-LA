const { Router } = require('express');
const Ingredientes = require('../models/ingredientes');


const router = Router();

router.get('/',async(req, res)=> {
  const data = await Ingredientes.find();
  res.status(200).json( data )
  });

const apiNombreIngredintes = async()=>{
  try {
    const data = await Ingredientes.find();
    const newARR = data.map(e=>{ return e.nombre})
    newARR.forEach(e =>{
     
        const separar = e.split(' ');
        if (separar.length>1){
           unir = separar.join('-');
           router.get(`/${unir}`,async(req, res)=> {
            const data = await Ingredientes.find({nombre: e});
            res.status(200).json( data )
            });
  
        }else{
  
        router.get(`/${e}`,async(req, res)=> {
          const data = await Ingredientes.find({nombre: e});
          res.status(200).json( data )
          });
        }
    }) 
  } catch (error) {
    console.log(error);
    
  }
}
apiNombreIngredintes()



const tipo = ['frutas','vejetales','fish']
tipo.forEach(e =>{
  router.get(`/${e}`,async(req, res)=> {

    const data = await Ingredientes.find({tipo: e});
    res.status(200).json( data )
    });
})
 

module.exports = router;