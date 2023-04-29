const {Service: ServiceModel} = require("../models/Service");

const serviceController = {

    create: async(req, res) => {
        try{
            const service = {
                name: req.body.name, 
                description:req.body.description, 
                price:req.body.price, 
                image:req.body.image
            }

            const response = await ServiceModel.create(service);

            res.status(201).json({response, msg: "Servico criado com sucesso!"})

        } catch(err){
            console.log("***Erro" + err)
        }
    },
    getAll: async(req,res) => {
        try{
            const services = await ServiceModel.find()

            res.json(services);
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = serviceController;

