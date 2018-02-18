// 服务入口文件

let loginService = require('./api/login');
let menuService = require('./api/menu');
// 账户设置（查询用户、新增用户、修改用户信息）
let accountlSetting = require('./api/accountSetting');

// 用户基本信息设置（查询基本信息、修改基本信息）
let baseInfoSetting = require('./api/baseInfoSetting');

// 订单
let order = require('./api/order.js');
// let personalSetting = require('./api/personalSetting');

// let hotelSetting = require('./api/hotelSetting');
// let beginAdSetting = require('./api/beginAdSetting');
// let topAdSetting = require('./api/topAdSetting');
// let getAd = require('./api/getAdRequestFromClient')


// 上传图片服务
let uploadimg = require('./api/uploadimg');


let services = [
  {
    path: '/uploadimg',
    fun: uploadimg
  },
  {
    path: '/login',
    fun: loginService
  },
  {
    path: '/menu',
    fun: menuService
  },
  {
    path: '/accountsetting',
    fun: accountlSetting
  },
  {
    path: '/baseinfosetting',
    fun: baseInfoSetting
  },
  {
    path: '/order',
    fun: order
  }

]


module.exports = services;