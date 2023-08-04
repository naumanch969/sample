import express from 'express'
import { getUsers, getUser, updateUser, deleteUser } from '../controllers/user.js'
import { verifyToken, verifyUser } from '../middleware/auth.js'

const router = express.Router()

router.get('/all', getUsers)
router.get('/get/:userId', getUser)
router.put('/update/:userId', verifyToken, verifyUser, updateUser)
router.delete('/delete/:userId', verifyToken, verifyUser, deleteUser)


export default router