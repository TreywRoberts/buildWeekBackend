const db = require('../data/db-config');


function getAll(){
    return db('users')
}

async function findById(user_id) {
    const user = await db("users")
    .select(
        'user_id',
        'user_username',
        'user_email'
    )
    .where({ user_id })
    .first();
    const favTruck = await getFavoriteTruck(user_id)
    const ownedTrucks = await getTrucksOwned(user_id)
    if(!user){
        user
    } else {
        return {
            ...user,
            favorite_trucks: favTruck,
            Trucks_owned: ownedTrucks
        }
    }
}

function findBy(filter) {
    return db('users')
    .where(filter)
    .first()
}

async function add(user) {
    const [id] = await db('users').insert(user, ['user_username', 'user_password', 'user_email'])
    return findById(id)
  } 

  function getFavoriteTruck(user_id){
      return db('users as u')
      .leftJoin("favorites as f", "f.user_id", "u.user_id")
      .leftJoin("trucks as t", "t.truck_id", "f.truck_id")
        .select(
            "t.truck_id",
            "t.truck_name",
            "t.cuisine_type"
        )
        .where('u.user_id', user_id)
  }

  function getTrucksOwned(user_id){
      return db('users as u')
      .leftJoin('trucks as t', 't.user_id', 'u.user_id')
      .select(
          't.truck_name'
      )
      .where('u.user_id', user_id)
  }


// function add()




module.exports = {
    getAll,
    findById,
    findBy,
    add
}