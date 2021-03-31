const express = require('express')
const { checkMenuId, checkMenuBody } = require('./menu-middleware')
const Menu = require('./menu-model')
const router = express.Router()


router.post('/', checkMenuBody, (req, res, next)=>{
    Menu.createMenu(req.body)
        .then(menu=>{
            res.status(201).json(menu)
        })
        .catch(next)
})

router.put('/:menu_id', checkMenuId, checkMenuBody, (req, res, next)=>{
    const {menu_id} = req.params
    const updatedMenu = req.body
    Menu.updateMenu(menu_id, updatedMenu)
     .then(menu=>{
        res.status(200).json(menu)
     })
     .catch(next)
})
router.delete('/:menu_id', checkMenuId, (req, res, next)=>{
    const {menu_id} = req.params
    Menu.removeMenu(menu_id)
        .then(()=>{
            res.status(200).json({message: 'This is no longer served'})
        })
        .catch(next)
})


module.exports = router