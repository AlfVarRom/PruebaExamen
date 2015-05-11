/**
 * Created by Administrador on 08/05/2015.
 */


var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var schema = new Schema({
        titulo: {type: String},
        autor: {type: String},
        lengua:{type:String},
        tematica:[{type:String, enum:['Fantasia','Aventura','Cientifico','Comics','Infantiles']}],
        editorial:{type:String},
        descripcion:{type:String}
    },
    {versionKey: false});

module.exports = mongoose.model('Libro', schema);