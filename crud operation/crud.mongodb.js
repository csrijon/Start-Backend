use("cruddb")

console.log(db);

db.createCollection("king")

// db.king.insertMany([
//     {
//       "name": "srijon1",
//       "price": 20000
//     },
//     {
//       "name": "srijon2",
//       "price": 20000
//     },
//     {
//       "name": "srijon3",
//       "price": 20000
//     },
//     {
//       "name": "srijon4",
//       "price": 20000
//     },
//     {
//       "name": "srijon5",
//       "price": 20000
//     },
//     {
//       "name": "srijon6",
//       "price": 20000
//     },
//     {
//       "name": "srijon7",
//       "price": 20000
//     },
//     {
//       "name": "srijon8",
//       "price": 20000
//     },
//     {
//       "name": "srijon9",
//       "price": 20000
//     },
//     {
//       "name": "srijon10",
//       "price": 2
//     }
//   ]
//   )

//  let a = db.king.find({
//     price: 2
//   })
//   console.log(a.toArray());

//update

// db.king.updateMany({price:20000},{$set:{price:100}})
db.king.deleteOne({name:"srijon1"})