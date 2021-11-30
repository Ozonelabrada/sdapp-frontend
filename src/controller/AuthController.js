
const { PrismaClient } = require('.prisma/client')
const prisma = new PrismaClient({ errorFormat: 'pretty' })
const bcrypt = require('bcrypt')
const express = require('express')
const jwt = require('jsonwebtoken')
const Router = express.Router()

const hashPassword = async (password) => {
    try {
        return await bcrypt.hash(password, 10)
    } catch (error) {
        return null
    }
}

const comparePassword = async (password, hashedPassword) => {
    try {
        return await bcrypt.compare(password, hashedPassword)
    } catch (error) { return null }
}

Router.post(`/register`, async (req, res) => {
    const hashedPassword = await hashPassword(req.body.password)
    if (!hashedPassword) return res.status(400).send()

    try {
        const user = await prisma.user.create({
            data: { ...req.body, password: hashedPassword }
        })
        delete user.password
        res.json(user)
    } catch (error) {
        res.status(500).send(error)
    }

})
Router.post(`/login`, async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { username: req.body.username },
            rejectOnNotFound: true
        })
        const match = await comparePassword(req.body.password, user.password)
        if (!match) {
            return res.status(400).json({ message: "Invalid Username or Password" })
        }
        delete user.password
        const token = jwt.sign(user, env('JWT_SECRET'))
        return res.json({ ...user, token })
    } catch (error) {
        res.status(500).send(error)
    }
})



module.exports = {
    AuthController: Router,
    hashPassword,
    comparePassword
}