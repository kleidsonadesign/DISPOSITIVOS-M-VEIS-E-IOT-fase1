import userModel from '../models/user/userModel.js'
import passwordService from 'bcrypt'
import tokenService from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const controller = {
    findAll : async (req, res) => {
        try {
            const result = await userModel.find({})
            res.status(200).json({message: "Usuários encontrados com sucesso", data: result})
        } catch (err) {
            res.status(500).json({message: "Não foi possível completar sua requisição"})
        }
    },
    findOne: async (req, res) => {
        try {
            const result = await userModel.findOne({idUser: req.params.idUser})
            const {__v, _id, ...json} = result.toObject()
    
            res.status(200).json({message: "USuário encontrado com sucesso", result: json})

        } catch(err) {
            res.status(500).json({message: err.message})
        }
    },

    insertOne: async (req, res) => {
        try {
            const {password, ...json} = req.body
            const hashPassword = await passwordService.hash(password, Number(process.env.SALT_ROUNDS))
            json.password = hashPassword;
            const result = await userModel.create(json)
            if(!result) {
                throw new Exception("Usuário não encontrado")
            }
            delete json.password;
            res.status(201).json({message: "Usuário criado com sucesso!", data: json})
        } catch (err) {
            res.status(500).json({message: err.message})
        }
    },
    deleteOne: (req, res) => {

    },
    updateOne: (req, res) => {

    },
    login: async (req, res) => {
        try {
            const hash = await passwordService.hash(req.body.password, Number(process.env.SALT_ROUNDS))
            const user = await userModel.findOne({email: req.body.email})
            const isMatch = await bcrypt.compare(user.password, hash)
            if (isMatch) {
                const {__v, _id, ...json} = user.toObject()
                const token = await tokenService.sign(json, process.env.SECRET)
                res.status(200).json({message: "Usuário encontrado com sucesso", token: token})
            } 
            throw new Exception("Credenciais inválidas");
        } catch(err) {
            res.status(401).json({message: err.message})
        }
    }
}

export default controller;