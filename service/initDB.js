let db = require('./db/index')
let schemaOptions = require('./db/schemaOptions')
let dbPth = require('../config').dbPth;

// let mongoose = require('mongoose');
// console.log(mongoose.model)

// mongoose.model.remove('users',function(err){
//   console.log(err)
// });
// mongoose.model.remove('menus',function(err){
//   console.log(err)
// });

let initUsers = function () {

  let collection = 'users'

  let users = [
    {
      "userid": 1,
      "username": "master",
      "password": "zhang123456",
      "role": "master",
      "name": "远宇诚科技",
      "tel":'010-11122233',
      "remark":''
      // "avatar": "https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png"
    }
  ]
  db.insert(dbPth, schemaOptions.user, collection, users);
}
initUsers();

let initMenu = function () {

  let collection = 'menus'

  let menu = [
    {
      "role": "master",
      "menu": [
        {
          "path": "/",
          "leaf": true,
          "name": "",
          "children": [
            {
              "path": "/main",
              "name": "首页（法律声明）"
            }
          ]
        },
        {
          "path": "/",
          "leaf": true,
          "name": "",
          "children": [
            {
              "path": "/addHotel",
              "name": "新增酒店商户"
            }
          ]
        }, 
        {
          "path": "/",
          "leaf": true,
          "name": "",
          "children": [
            {
              "path": "/hotelList",
              "name": "酒店商户列表"
            }
          ]
        }, 
      ]
    },
    {
      "role": "admin",
      "menu": [
        {
          "path": "/",
          "leaf": true,
          "name": "",
          "children": [
            {
              "path": "/main",
              "name": "首页（法律声明）"
            }
          ]
        },
        {
          "path": "/basicInfo",
          "name": "基本信息",
          "children": [
            {
              "path": "/pageInfoConfig",
              "name": "页面信息设置"
            },
            {
              "path": "/commoditySetting",
              "name": "商品设置"
            },
            {
              "path": "/roomList",
              "name": "房间列表"
            },
            {
              "path": "/printerSetting",
              "name": "打印机设置"
            }
          ]
        },
        {
          "path": "/",
          "leaf": true,
          "name": "",
          "children": [
            {
              "path": "/currentOrder",
              "name": "实时订单"
            }
          ]
        },
      ]
    }
  ]

  db.insert(dbPth, schemaOptions.menu, collection, menu);

}

initMenu();
