webpackJsonp([5],{534:function(e,t,o){o(561);var r=o(67)(o(542),o(570),null,null);e.exports=r.exports},542:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{hotels:[],search:{condition:"name",val:""},totalrooms:0,detailsShow:!1,ruleForm:{username:"",password:"",name:"",tel:"",remark:""},rules:{username:[{required:!0,message:"必填，请输入活动名称",trigger:"blur"},{min:3,message:"长度不能少于 3 个字符",trigger:"blur"}],password:[{required:!0,message:"必填，请输入密码",trigger:"blur"}],name:[{required:!0,message:"必填，请输入酒店名称",trigger:"blur"}]}}},methods:{handleClick:function(e){console.log(e),this.ruleForm=e,this.detailsShow=!0},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var o=function(e){console.log(e),l.$message({message:"修改成功",type:"success"})},r=function(e){console.log(e)};console.log(t.ruleForm),delete t.ruleForm.value,t.ajax.http("put",t.host.baseUrl+"/accountsetting",t.ruleForm,o,r);var l=t})},changeSearchCondition:function(){var e=this;this.hotels.forEach(function(t,o){t.value=t[e.search.condition]})},querySearch:function(e,t){var o=this.hotels;t(e?o.filter(this.createFilter(e)):o)},createFilter:function(e){var t=this;return function(o){return o[t.search.condition].toLowerCase().indexOf(e.toLowerCase())>=0}},handleSelect:function(e){console.log(e),this.ruleForm=e,this.detailsShow=!0},getHotels:function(){function e(e){var t=e.data,r=t.length-1;t.forEach(function(e,l){function a(e){t[l].rooms=e.data.roomList.length,o.totalrooms+=t[l].rooms,l===r&&(o.hotels=t)}function s(e){console.log(e)}o.ajax.http("get",o.host.baseUrl+"/baseinfosetting",{userid:e._id},a,s)}),console.log(t),o.changeSearchCondition()}function t(e){console.log(222)}var o=this;o.ajax.http("get",this.host.baseUrl+"/accountsetting",{role:"master"},e,t)}},mounted:function(){this.getHotels()}}},553:function(e,t,o){t=e.exports=o(530)(),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"hotelList.vue",sourceRoot:""}])},561:function(e,t,o){var r=o(553);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);o(531)("388574f4",r,!0)},570:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("div",{staticStyle:{width:"850px"}},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.hotels,height:"350",border:""}},[o("el-table-column",{attrs:{prop:"username",label:"用户名",width:"120"}}),e._v(" "),o("el-table-column",{attrs:{prop:"name",label:"酒店名称"}}),e._v(" "),o("el-table-column",{attrs:{prop:"rooms",label:"房间数",width:"100"}}),e._v(" "),o("el-table-column",{attrs:{prop:"tel",label:"联系方式",width:"150"}}),e._v(" "),o("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){e.handleClick(t.row)}}},[e._v("查看/修改")])]}}])})],1)],1),e._v(" "),o("p",{staticStyle:{color:"#606266","font-size":"18px"}},[e._v("小计：总酒店数："+e._s(e.hotels.length)+"        总房间数："+e._s(e.totalrooms))]),e._v(" "),o("div",{staticClass:"sreach",staticStyle:{margin:"30px auto auto 100px"}},[o("el-autocomplete",{staticClass:"inline-input",staticStyle:{width:"500px"},attrs:{"fetch-suggestions":e.querySearch,placeholder:"输入查找条件"},on:{select:e.handleSelect},model:{value:e.search.val,callback:function(t){e.$set(e.search,"val",t)},expression:"search.val"}},[o("el-select",{staticStyle:{width:"150px"},attrs:{slot:"prepend",placeholder:"请选择"},on:{change:e.changeSearchCondition},slot:"prepend",model:{value:e.search.condition,callback:function(t){e.$set(e.search,"condition",t)},expression:"search.condition"}},[o("el-option",{attrs:{label:"按照酒店名查找",value:"name"}}),e._v(" "),o("el-option",{attrs:{label:"按照用户名查找",value:"username"}})],1)],1)],1),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.detailsShow,expression:"detailsShow"}],staticStyle:{width:"600px","margin-top":"30px"}},[o("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"用户名：",prop:"username"}},[o("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"密码：",prop:"password"}},[o("el-input",{model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"酒店名称：",prop:"name"}},[o("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"联系方式："}},[o("el-input",{model:{value:e.ruleForm.tel,callback:function(t){e.$set(e.ruleForm,"tel",t)},expression:"ruleForm.tel"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"备注："}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:4},placeholder:"请输入备注"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("确认修改")])],1)],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=5.f46567d0da167545c3fc.js.map