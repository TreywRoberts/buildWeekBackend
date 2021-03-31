const db = require('../data/db-config')


const findByMenuId = (menu_id)=>{
    return db('menu').where({menu_id}).first()
}

const createMenu = async (menu) => {
    const [id] = await db('menu').insert(menu, ['menu_id', 'menu_name', 'menu_description', 'menu_price', 'truck_id'])
    return findByMenuId(id)
  } 
  
  const updateMenu = async (menu_id, menu) =>{
    await db('menu').where({menu_id}).update(menu)
    return findByMenuId(menu_id)
  }
  
  const removeMenu = async (menu_id)=>{
    const toBeRemoved = findByMenuId(menu_id)
    await db('menu').where({menu_id}).del()
    return toBeRemoved
  }

  module.exports = {
      createMenu,
      updateMenu,
      removeMenu,
      findByMenuId
  }