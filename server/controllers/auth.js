import User from '../models/user.js'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { error } from '../utils/error.js'

export const register = async (req, res, next) => {
    try {

        const { username, email, password } = req.body

        if (!username || !email || !password) return next(error(400, 'Make sure to provide all the fields'))

        const isEmailExist = await User.findOne({ email })
        if (Boolean(isEmailExist)) return next(error(400, 'Email already registered'))

        const isValidEmail = validator.isEmail(email)
        if (!isValidEmail) return next(error(400, 'Invalid email'))

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await User.create({ username, email, password: hashedPassword })
        res.status(200).json({ result, success: true, message: 'Registered successfully' })

    } catch (err) {
        next(error(500, `${err.message} - register `))
    }
}



export const login = async (req, res, next) => {
    try {

        const { email, password: input_password } = req.body

        if (!email || !input_password) return next(error(400, 'Make sure to provide all the fields'))

        const isValidEmail = validator.isEmail(email)
        if (!isValidEmail) return next(error(400, 'Invalid email'))

        const user = await User.findOne({ email })
        if (!user) return next(error(400, 'wrong email'))

        const isPasswordCorrect = bcrypt.compare(input_password, user.password)
        if (!isPasswordCorrect) return next(error(400, 'Invalid password'))

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })

        const { password, ...result } = user._doc
        res.status(200).json({ result: { ...result }, token, success: true, message: 'Logged In successfully' })

    } catch (err) {
        next(error(500, `${err.message} - login`))
    }
}
