import express from 'express'
import userController from '../../controllers/userController.js'
const router = express.Router();
router.route('/')
.get(userController.findAll)
.post(userController.insertOne)
.delete((req, res) => {

})
.put((req, res) => {

})

router.route('/login')
.post(userController.login)

router.route('/:id')
.get((req, res) => {
    const result = req.params.code;
    res.send("Voce pediu que eu lhe enviasse o usuário cujo codigo é " + result)
})

export default router;