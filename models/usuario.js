const { Schema, model } = require('mongoose');

const UsuaurioSchema = Schema({
    nombre:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        require:true
    },
    online:{
        type: String,
        require: false
    }
});

UsuaurioSchema.method('toJSON', function(){
    const {__v, _id, password, ...object} = this.toObject();
    object.uid= _id;
    return object;
});

module.exports = model('Usuario', UsuaurioSchema);