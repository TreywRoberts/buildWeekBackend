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
    if(!truck){
        return truck
    } else {
        return {
            ...truck,
            menu: menuItem
        }
    }
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
    const [id] = await db('trucks')
    .insert(truck, ['truck_id', 'truck_name', 'cuisine_type', 'user_id'])
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

  const createFavorite = async (favorite) =>{
      const [id] = await db('favorites')
      .insert(favorite, ['favorite_id', 'user_id', 'truck_id'])
      console.log(favorite)
      return findById(favorite.truck_id)
  }

  const removeFavorite = async (favorite_id, truck_id)=>{
    const toBeRemoved = findByFavoriteId(favorite_id)
    await db('favorites').where({favorite_id}).del()
    return findById(truck_id)
  }
  const findByFavoriteId = (favorite_id)=>{
      return db('favorites').where({favorite_id}).first()
  }

module.exports = {
    findAllTrucks,
    findById,
    create,
    update,
    remove,
    findByFavoriteId,
    createFavorite,
    removeFavorite
}



