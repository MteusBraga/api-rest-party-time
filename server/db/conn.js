const mongoose = require("mongoose")

async function main(){
    try{

        mongoose.set("strictQuery", true)

        await mongoose.connect("mongodb+srv://mateusbrga:Deathrider123@cluster0.rtoppqm.mongodb.net/test")

        console.log("Conectado ao banco!")
        
    } catch(err){
        console.log("*****Erro: "+err)
    }
}

module.exports = main