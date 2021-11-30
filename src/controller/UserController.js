const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const express = require('express')
const { hashPassword } = require('./AuthController')
const Router = express.Router()

Router.post(`/store`, async (req, res) => {
    const hashedPassword = await hashPassword(req.body.password)
    if (!hashedPassword) return res.status(400).send()
    try {
        const newUser = await prisma.user.create({
            data: { ...req.body, password: hashedPassword }
        })
        delete newUser.password
        res.json(newUser)
    } catch (error) {
        res.status(500).send(error)
    }
})

Router.get(`/find`, async (req, res) => {
    try {
        const allUser = await prisma.user.findMany({
            rejectOnNotFound: true
        })
        res.json(allUser)
    } catch (error) { res.status(500).send(error) }
})

Router.get(`/find/:id`, async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(req.params.id)
            },
            rejectOnNotFound: true
        })
        res.json(user)
    } catch (error) { res.status(500).send(error) }
})

Router.patch(`/update/:id`, async (req, res) => {
    try {
        const updatedUser = await prisma.user.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: { ...req.body },
        })
        res.json(updatedUser)
    } catch (error) { res.status(500).send(error) }
})


Router.delete(`/delete/:id`, async (req, res) => {
    try {
        const deletedUser = await prisma.user.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.json(deletedUser)
    } catch (error) { res.status(500).send(error) }
})



module.exports = Router
