const Trucks = require('./trucks-model')

const checkTruckId = (req, res, next) =>{
    const {truck_id} = req.params
    Trucks.findById(truck_id)
        .then(truckId=>{
            if(!truckId){
                res.status(400).json({message: 'There is not exsiting truck with this ID'})
            } else {
                req.truckId = truckId
                next()
            }
        })
        .catch(err=>{
            next(err)
        })
}
const checkTruckBody = (req, res, next) =>{
    const {truck_name, cuisine_type, user_id} = req.body
    if(!truck_name || !cuisine_type || !user_id){
        res.status(400).json({
            message: 'You must include truck name, cusinie type, and user Id'
        })
    } else {
        next()
    }
}
const checkFavoriteId = (req, res, next) =>{
    const {favorite_id} = req.params
    Trucks.findByFavoriteId(favorite_id)
        .then(favoriteId=>{
            if(!favoriteId){
                res.status(400).json({message: 'There is not exsiting favorite with this ID'})
            } else {
                req.favoriteId = favoriteId
                next()
            }
        })
        .catch(err=>{
            next(err)
        })
}
module.exports = {
    checkTruckId,
    checkTruckBody,
    checkFavoriteId
}