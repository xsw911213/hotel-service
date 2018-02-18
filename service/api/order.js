let db = require('../db');
let dbPth = require('../../config').dbPth;
let schemaOptions = require("../db/schemaOptions");

function addOrder(userinfoRromClient, res){
  let collection = 'orders';

  db.insert(dbPth, schemaOptions.order, collection,userinfoRromClient,error,insertSucc);
  function insertSucc(result){
    console.log(result);
    res.json({type:'success',text:'下单成功'});
  }
  function error(result){
    console.log(result);
  }
}

function getOrder(userinfoRromClient, res){
  let collection = 'orders';

  let condidtion = {userid: {$in: [userinfoRromClient.userid]},deal:{$in:[false]}};

  let fields = {
    _id: false,
    userid: true,
    deal: true,
    room: true,
    orderNum: true,
    orderContent:true
  }

  db.find(dbPth, schemaOptions.user, collection, condidtion,fields, null, error, succ);
  function succ(result){
    console.log(result)
    res.json(result)
  }
  function error(result){
    console.log(result)
  }
}

let orderService = function (req, res) {
  console.log(req.url)
  console.log(req.method)
  console.log(req.params)
  console.log(req.query)
  console.log(req.body)
  if (req.method === 'GET') {
    getOrder(req.query, res)
  } else if (req.method === 'POST') {
    addOrder(req.body, res)
  }

}

module.exports = orderService;