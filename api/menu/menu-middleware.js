const Menu = require('./menu-model')

const checkMenuId = (req, res, next) =>{
    const {menu_id} = req.params
    Menu.findByMenuId(menu_id)
        .then(menuId=>{
            if(!menuId){
                res.status(400).json({message: "There is not menu item with this id"})
            } else {
                req.menuId = menuId
                next()
            }
        })
}
const checkMenuBody = (req, res, next) =>{
    const {menu_name, menu_description, menu_price, truck_id} = req.body
    if (!menu_name || !menu_description || !menu_price || !truck_id){
        res.status(400).json({message: 'Please include all menu details'})
    } else {
        next()
    }
}

module.exports = {
    checkMenuId,
    checkMenuBody
}