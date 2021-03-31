const express = require('express')
const { checkTruckId, checkTruckBody } = require('./trucks-middleware')
const router = express.Router()
const Trucks = require('./trucks-model')
const {findById, findAllTrucks} = require('./trucks-model')

router.get('/', (req, res, next) => {
    findAllTrucks()
        .then(trucks => {
            res.status(200).json(trucks)
        })
        .catch(next)
})
router.get('/:truck_id', checkTruckId, (req, res, next) => {
    // const {truck_id} = req.params

    // findById(!truck_id)
    //     .then(truck => {
    //         res.status(200).json(truck)
    //     })
    //     .catch(next)
    console.log(req.truckId)
    res.status(200).json(req.truckId)
})
router.post('/', checkTruckBody, (req, res, next)=>{
    Trucks.create(req.body)
        .then(truck=>{
            res.status(201).json(truck)
        })
        .catch(next)
})
router.put('/:truck_id', checkTruckBody, checkTruckId, (req, res, next)=>{
    const {truck_id} =req.params
    const updatedTruck = req.body
    Trucks.update(truck_id, updatedTruck)
     .then(truck=>{
         res.status(200).json(truck)
     })
     .catch(next)
})
router.delete('/:truck_id', checkTruckId, (req, res, next)=>{
    const {truck_id} = req.params
    Trucks.remove(truck_id)
     .then(()=>{
         res.status(200).json({message: 'This Truck is removed'})
     })
     .catch(next)
})

module.exports = router