// 主账户设置管理员账户服务
// 包含GET、POST、DELETE三种方法


let db = require('../db');
let dbPth = require('../../config').dbPth;
let schemaOptions = require("../db/schemaOptions");

function addUser(userinfoRromClient, res){
  // console.log(userinfoRromClient)
  let collection = 'users';
  let newUserName = userinfoRromClient.username;
  let fields = {
    _id: false,
    username: true,
    password: true,
    role: true,
    name: true,
    tel:true,
    remark:true,
    userid: true
  }
  let condidtion = {username: {$in: [newUserName]}};
  // 查询是否有重复的用户名
  db.find(dbPth, schemaOptions.user, collection, condidtion,fields, null, error, succ);

  function succ (result){
    // let returnText = '';
    // console.log(result);
    // 如果有重复的用户名
    if(result.length === 0){
      // console.log('无重复用户名');
      console.log(userinfoRromClient)
      userinfoRromClient.role = 'admin';
      db.insert(dbPth, schemaOptions.user, collection,userinfoRromClient,error,insertSucc);
      function insertSucc(result){
        console.log(result)
        res.json({type:'success',text:'创建成功'});

        // 在其他表中创建一条空数据
        let collections = ['baseInfo'];
        collections.forEach((item,index)=>{
          let obj = {
            userid: result._id,
          }
          db.insert(dbPth, schemaOptions[item], item, obj);
        })
      }
    }else{
      // console.log('有重复用户名'); 
      res.json({type:'error',text:'用户名重复，请使用一个新的用户名'});
    }
    
  }

  function error(err) {
    console.log(err)
  }
  // console.log(res);
}

function getUserInfo(userinfoRromClient, res) {

  let collection = 'users';

  let condidtion = { role: { $ne: userinfoRromClient.role } }

  let fields = {
    _id: true,
    username: true,
    password: true,
    role: true,
    name: true,
    tel:true,
    remark:true,
    userid: true
  }

  let resData = {}

  function error(err) {
    console.log(err)
  }
  // 数据库查询成功
  function succ(result) {
    console.log(result)

    let userinfoRromDB = result[0];

    let userList = [];
    // console.log("aaaaa",Array.isArray(userinfoRromDB))
    result.forEach(function (item, index) {
      let obj = {
        username: item.username,
        name: item.name,
        // userid: item.userid,
      }
      userList.push(obj);
    });
    console.log('userList', userList)

    resData = {
      status: "success",
      // data: {
      //   userList,
      //   username: userinfoRromDB.username,
      //   password: userinfoRromDB.password,
      //   name: userinfoRromDB.name,
      //   avatar: userinfoRromDB.avatar,
      //   userid: userinfoRromDB.userid
      // }
      data: result
    }

    res.json(resData)

  }

  db.find(dbPth, schemaOptions.user, collection, condidtion, fields, null, error, succ);

}

function putUserInfo(userinfoRromClient, res) {
  let collection = 'users';
  console.log(userinfoRromClient);

  let oldValue = { _id: userinfoRromClient._id };

  let newValue = {
    username: userinfoRromClient.username,
    password: userinfoRromClient.password,
    name: userinfoRromClient.name,
    tel: userinfoRromClient.tel,
    remark: userinfoRromClient.remark
  }
  let resData = {};

  function error(err) {
    console.log(err)
  }
  // 数据库查询成功
  function succ(result) {
    console.log(result)

    resData = {
      status: "success"
    }

    res.json(resData)
  }

  db.update(dbPth, schemaOptions.user, collection, oldValue, newValue, error, succ);
}

let accountSetting = function (req, res) {
  console.log(req.url)
  console.log(req.method)
  console.log(req.params)
  console.log(req.query)
  console.log(req.body)
  if (req.method === 'GET') {
    getUserInfo(req.query, res)
  } else if (req.method === 'PUT') {
    putUserInfo(req.body, res)
  }else if(req.method === 'POST'){
    addUser(req.body, res)
  }

}

module.exports = accountSetting;