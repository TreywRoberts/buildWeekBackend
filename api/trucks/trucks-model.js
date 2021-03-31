const db = require('../data/db-config')


function findAllTrucks() {
    return db('trucks')
}
async function findById(truck_id) {
    const truck = await db('trucks')
    .select(
        'truck_name',
        'truck_id',
        'cuisine_type'
    )
    .where({ truck_id })
    .first()

    const menuItem = await trucksMenu(truck_id)
        console.log(truck)
    if(!truck){
        return truck
    } else {
        return {
            ...truck,
            menu: menuItem
        }
    }
    // return {
    //     ...truck,
    //     menu: menuItem
    // }
}

function trucksMenu(truck_id){
    return db('trucks as t')
        .join('menu as m', 'm.truck_id', 't.truck_id')
        .select(
            'm.menu_name',
            'm.menu_description',
            'm.menu_price'
        )
        .where('t.truck_id', truck_id)
}
const create = async (truck) => {
    const [id] = await db('trucks').insert(truck, ['truck_id', 'truck_name', 'cuisine_type', 'user_id'])
    return findById(id)
  } 
  
  const update = async (truck_id, truck) =>{
    await db('trucks').where({truck_id}).update(truck)
    return findById(truck_id)
  }
  
  const remove = async (truck_id)=>{
    const toBeRemoved = findById(truck_id)
    await db('trucks').where({truck_id}).del()
    return toBeRemoved
  }

module.exports = {
    findAllTrucks,
    findById,
    create,
    update,
    remove
}



