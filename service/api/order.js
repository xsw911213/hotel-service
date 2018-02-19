let db = require('../db');
let dbPth = require('../../config').dbPth;
let schemaOptions = require("../db/schemaOptions");

let request = require('request');

function printOrder(printers,content,orderNum,room){
  let mainContent = '^H2远宇诚科技为您服务\n';
  mainContent+= `房间号：${room}\n`;
  mainContent+= `订单编号：${orderNum}\n`;
  mainContent+= '\n';
  mainContent+= '订单内容：\n';
  mainContent+= '--------------------------------\n';

  let allNum = 0;
  content.list.forEach((item,index)=>{
    // console.log(item);
    allNum += (item.num - 0);
    mainContent += `${item.name}  ${item.num}${item.unit}  ${item.price}元 \n`;
  })
  mainContent += '--------------------------------\n';
  mainContent += `^H2合计：共 ${allNum} 件商品  ${content.totalPrice} 元\n`;
  mainContent += `^H2备注：${content.remark}\n`;
  mainContent += `^H2下单时间：${orderNum.substring(0,4)}-${orderNum.substring(4,6)}-${orderNum.substring(6,8)} ${orderNum.substring(8,10)}:${orderNum.substring(10,12)}`

  printers.forEach((item,index) => {
    let head = '';
    let foot = '\n';
        foot+= '技术支持：\n';
        foot+= '河北远宇诚科技有限公司\n';
        foot+= '联系电话：\n';
        foot+= '13899991111 13311112222';
    // 365
    if(item.brand === '365'){
      let deviceNo = item.deviceNo;
      let key = item.key;
      head += `^N${item.times}^F1\n`;

      let printContent = head + mainContent + foot;
      console.log(item.urls.addOrder)
      request.post({url:item.urls.addOrder, form:{deviceNo:item.deviceNo,key:item.key,printContent:printContent,times:1}}, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(body)
        }
      })

    }
  });
  
}

function addOrder(userinfoRromClient, res){
  let collection = 'orders';

  db.insert(dbPth, schemaOptions.order, collection,userinfoRromClient,error,insertSucc);
  function insertSucc(result){
    console.log(result);
    res.json({type:'success',text:'下单成功'});
    printOrder(userinfoRromClient.printers,userinfoRromClient.orderContent,userinfoRromClient.orderNum,userinfoRromClient.room)
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

  db.find(dbPth, schemaOptions.order, collection, condidtion,fields, null, error, succ);
  function succ(result){
    console.log(result)
    res.json(result)
  }
  function error(result){
    console.log(result)
  }
}

function putOrder(userinfoRromClient, res){
  let collection = 'orders';

  let oldVal = userinfoRromClient;
  
  let newVal = {deal:true};

  let resData = {};

  function error(err) {
    console.log(err)
  }
  // 数据库查询成功
  function succ(result) {
    console.log(result)

    resData = {
      status: "success",
      text: '处理成功'
    }

    res.json(resData);
  }

  db.update(dbPth, schemaOptions.order, collection, oldVal, newVal, error, succ);
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
  } else if (req.method === 'PUT'){
    putOrder(req.body, res)
  }

}

module.exports = orderService;