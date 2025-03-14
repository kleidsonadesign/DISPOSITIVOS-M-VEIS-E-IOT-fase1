import mongoose from 'mongoose'
const Schema = mongoose.Schema({
    idUser: {type: String, unique: true, required: true},
    name: {type: String, required: true, length: 200},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

export default mongoose.model("User", Schema)
