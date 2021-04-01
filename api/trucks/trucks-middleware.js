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
module.exports = {
    checkTruckId,
    checkTruckBody
}