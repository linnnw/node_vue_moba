module.exports = app => {

    const express = require('express')

    const router = express.Router();
    const Category = require('../../models/Category')


    //添加分类
    router.post('/categories', async (req, res) => {
        const model = await Category.create(req.body)
        res.send(model)
    })

    router.get('/categories/:id', async (req, res) => {
        const model = await Category.findById(req.params.id)
        res.send(model)
    })


    //查询分类
    router.get('/categories', async (req, res) => {
        const items = await Category.find().limit(10)
        res.send(items)
    })


    app.use('/admin/api',router)
}
