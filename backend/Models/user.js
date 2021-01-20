const { uniqueId } = require("lodash");
const mongoose = require("mongoose");
const { NIL } = require("uuid");

    const userSchmea = new mongoose.Schema({
        name:{
            type:String,
            required: true,
            maxlength: 32,
            trim:true
        },
        lastname:{
            type: String,
            maxlength: 32,
            trim:true
        },
        email:{
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        password:{
            type: String,
            trim: true 

        },
        salt: String,
        role:{
            type: Number,
            default:0
        },
        purchases:{
            type: Array,
            default: [],

        },
        userinfo:{
            type:String,
            default:NIL,
            trim:true
        }


        
    })
    module.exports=Mongoose.module("user",userSchmea);