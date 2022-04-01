const {model, Schema} = require('mongoose');

const IngredintesSchema = new Schema({
    nombre: String,
    descripcion: String,
    tipo: String,
},{
      versionKey: false
})

module.exports = model('Ingrediente',IngredintesSchema )