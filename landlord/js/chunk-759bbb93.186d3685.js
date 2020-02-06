(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-759bbb93"],{4737:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Form",{attrs:{"label-width":120}},[a("Row",[a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"地址："}},[t._v(t._s(t.data.roomAddress))])],1),a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"租金："}},[t._v(t._s(t.data.baseRent)+"元")])],1)],1),a("Row",[a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"上个月水表数："}},[t._v(t._s(t.data.watermeterLastmonth))])],1),a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"上个月电表数："}},[t._v(t._s(t.data.elecmeterLastmonth))])],1)],1),a("Row",[a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"当月水表数："}},[t._v(t._s(t.data.watermeterThismonth))])],1),a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"当月电表数："}},[t._v(t._s(t.data.elecmeterThismonth))])],1)],1),a("Row",[a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"水表总数："}},[t._v(t._s(t.data.practicalWatermeter))])],1),a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"电表总数："}},[t._v(t._s(t.data.practicalElecmeter))])],1)],1),a("Row",[a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"水费单价："}},[t._v(t._s(t.data.waterFee)+"元/方")])],1),a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"电费单价："}},[t._v(t._s(t.data.elecFee)+"元度")])],1)],1),a("Row",[a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"管理费："}},[t._v(t._s(t.data.manageFee)+"元")])],1),a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"网费："}},[t._v(t._s(t.data.netFee)+"元")])],1)],1),a("Row",[a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"燃气费："}},[t._v(t._s(t.data.gasFee)+"元")])],1),a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"热水费："}},[t._v(t._s(t.data.hotWaterFee)+"元")])],1)],1),a("Row",[a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"每月交租日："}},[t._v(t._s(t.data.rentDay)+"天")])],1),a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"需缴纳："}},[t._v(t._s(t.data.rentFee)+"元（"+t._s(t.status)+"）")])],1)],1)],1)},i=[],r=(a("7514"),a("cadf"),a("551c"),a("097d"),a("4260"),a("04c6")),s={props:["data"],name:"",computed:{status:function(){var t=this.data.status;return void 0!=t?r["b"].find(function(e){return e.key==t}).value:""}}},o=s,l=(a("51a2"),a("2877")),c=Object(l["a"])(o,n,i,!1,null,"ba1b1050",null);c.options.__file="billDetail.vue";e["a"]=c.exports},"51a2":function(t,e,a){"use strict";var n=a("b6b3"),i=a.n(n);i.a},6907:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-table",{ref:"table",staticClass:"bill-list",attrs:{table:{data:t.data,loading:t.loading,border:t.disableOperating}}},[a("div",{key:"roomNo",attrs:{minWidth:t.commonMinWidth,title:"房号"}}),a("div",{attrs:{title:"总费用",minWidth:80},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[t.isFirst?a("InputNumber",{attrs:{min:0},on:{"on-change":function(a){t.rentFeeChange(e)}},model:{value:e.rentFee,callback:function(a){t.$set(e,"rentFee",a)},expression:"scope.rentFee"}}):a("span",[t._v(t._s(e.rentFee))])],1)}}])}),a("div",{key:"baseRent",attrs:{minWidth:t.commonMinWidth,title:"租金"}}),a("div",{key:"elecmeterLastmonth",attrs:{minWidth:t.commonMinWidth,title:"上月电"}}),a("div",{attrs:{minWidth:t.commonMinWidth,title:"本月电"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[a("InputNumber",{attrs:{disabled:t.readonly&&!e.isEdit,min:0},on:{"on-change":function(a){t.calculateElectricity(e)}},model:{value:e.elecmeterThismonth,callback:function(a){t.$set(e,"elecmeterThismonth",a)},expression:"scope.elecmeterThismonth"}})],1)}}])}),a("div",{attrs:{minWidth:t.commonMinWidth,title:"实用电"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[a("InputNumber",{class:{"bg-warning":e.electricityWarning},attrs:{min:0,disabled:t.readonly&&!e.isEdit},on:{"on-change":function(a){t.verificationElectricity(e)}},model:{value:e.practicalElecmeter,callback:function(a){t.$set(e,"practicalElecmeter",a)},expression:"scope.practicalElecmeter"}})],1)}}])}),a("div",{key:"elecFee",attrs:{minWidth:t.commonMinWidth,title:"电单价"}}),a("div",{attrs:{minWidth:t.commonMinWidth,title:"总电费"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[t._v(t._s(e.practicalElecmeter*e.elecFee))])}}])}),a("div",{key:"watermeterLastmonth",attrs:{minWidth:t.commonMinWidth,title:"上月水"}}),a("div",{attrs:{minWidth:t.commonMinWidth,title:"本月水"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[a("InputNumber",{attrs:{disabled:t.readonly&&!e.isEdit,min:0},on:{"on-change":function(a){t.calculateWaterFee(e)}},model:{value:e.watermeterThismonth,callback:function(a){t.$set(e,"watermeterThismonth",a)},expression:"scope.watermeterThismonth"}})],1)}}])}),a("div",{attrs:{minWidth:t.commonMinWidth,title:"实用水"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[a("InputNumber",{class:{"bg-warning":e.waterFeeWarming},attrs:{min:0,disabled:t.readonly&&!e.isEdit},on:{"on-change":function(a){t.verificationWaterFee(e)}},model:{value:e.practicalWatermeter,callback:function(a){t.$set(e,"practicalWatermeter",a)},expression:"scope.practicalWatermeter"}})],1)}}])}),a("div",{key:"waterFee",attrs:{minWidth:t.commonMinWidth,title:"水单价"}}),a("div",{attrs:{minWidth:t.commonMinWidth,title:"总水费"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[t._v(t._s(e.practicalWatermeter*e.waterFee))])}}])}),t.readonly?a("div",{attrs:{minWidth:t.commonMinWidth+10,title:"出租状态"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[t._v(t._s(t.getStatus(e.status)))])}}])}):t._e(),a("div",{attrs:{minWidth:90,title:"其他费用"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("Tooltip",{attrs:{transfer:"",content:e.netFee+"(网费)+"+e.manageFee+"(管理费)+"+e.hotWaterFee+"(热水费)+"+e.gasFee+"(燃气费)","max-width":300}},[t._v("\n          "+t._s(e.gasFee+e.hotWaterFee+e.manageFee+e.netFee)+" "),a("Icon",{attrs:{type:"ios-help-circle-outline",size:"14"}})],1)]}}])}),t.disableOperating?t._e():a("div",{attrs:{title:"操作",width:t.readonly?130:90},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[t.isFirst||t.readonly?t._e():a("Button",{attrs:{type:"info",size:"small"},on:{click:function(a){t.change(e)}}},[t._v("首月入住")]),t.isFirst?a("Button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.change(e)}}},[t._v("取消")]):t._e(),t.readonly&&!e.isEdit?a("Button",{attrs:{type:"warning",size:"small"},on:{click:function(a){t.edit(e)}}},[t._v("修改")]):t._e(),t.readonly&&e.isEdit?a("Button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.save(e)}}},[t._v("保存")]):t._e(),t.readonly?a("Button",{attrs:{type:"info",size:"small"},on:{click:function(a){t.detail(e)}}},[t._v("详情")]):t._e()],1)}}])})]),a("Modal",{attrs:{title:"账单详情",width:660},model:{value:t.modal.visible,callback:function(e){t.$set(t.modal,"visible",e)},expression:"modal.visible"}},[a("bill-detail",{attrs:{data:t.modal.data}}),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text",size:"large"},on:{click:function(e){t.modal.visible=!1}}},[t._v("取消")]),a("Button",{attrs:{type:"primary"},on:{click:t.print}},[t._v("打印")])],1)],1)],1)},i=[],r=(a("7514"),a("4737")),s=a("b6ba"),o=a("4260"),l=a("04c6"),c={components:{vTable:s["a"],billDetail:r["a"]},name:"",props:{data:{},loading:{default:!1},isFirst:{default:!1},readonly:{default:!1},disableOperating:{default:!1},commonMinWidth:{default:75}},data:function(){return{modal:{visible:!1,data:{}}}},methods:{getRentFee:o["a"].getRentFee,getStatus:function(t){return l["b"].find(function(e){return e.key==t}).value},calculateElectricity:function(t){var e=t.elecmeterLastmonth,a=t.elecmeterThismonth;o["a"].isEmpty(a)||o["a"].isEmpty(e)||(t.practicalElecmeter=a-e,t.electricityWarning=!1,t.rentFee=o["a"].getRentFee(t),this.update(t))},verificationElectricity:function(t){var e=t.practicalElecmeter,a=t.elecmeterThismonth,n=t.elecmeterLastmonth;t.electricityWarning=e!=a-n,t.rentFee=o["a"].getRentFee(t),this.update(t)},calculateWaterFee:function(t){var e=t.watermeterLastmonth,a=t.watermeterThismonth;o["a"].isEmpty(a)||o["a"].isEmpty(a)||(t.practicalWatermeter=a-e,t.waterFeeWarming=!1,t.rentFee=o["a"].getRentFee(t),this.update(t))},verificationWaterFee:function(t){var e=t.practicalWatermeter,a=t.watermeterThismonth,n=t.watermeterLastmonth;t.waterFeeWarming=e!=a-n,t.rentFee=o["a"].getRentFee(t),this.update(t)},rowClassName:function(t,e){return t.firstStay?"first-stay":"nothing"},change:function(t){this.$emit("change",t._index)},update:function(t){this.$emit("update",t)},edit:function(t){this.$emit("edit",t)},save:function(t){this.$emit("save",t)},detail:function(t){this.modal.data=t,this.modal.visible=!0},print:function(){sessionStorage[this.modal.data.id]=JSON.stringify(this.modal.data),window.open("#/bill/print/"+this.modal.data.id)},rentFeeChange:function(t){this.update(t)}}},d=c,m=(a("b2d7"),a("2877")),u=Object(m["a"])(d,n,i,!1,null,null,null);u.options.__file="billTable.vue";e["a"]=u.exports},"8e9a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("search-card",[a("Form",{staticClass:"block",attrs:{"label-width":150},nativeOn:{submit:function(t){t.preventDefault()}}},[a("FormItem",{attrs:{label:"地址："}},[a("address-select",{on:{change:t.addressChange},model:{value:t.searchData.buildingId,callback:function(e){t.$set(t.searchData,"buildingId",e)},expression:"searchData.buildingId"}})],1),a("FormItem",{attrs:{label:"日期："}},[a("DatePicker",{attrs:{type:"month",clearable:!1},on:{"on-change":t.getData},model:{value:t.searchData.date,callback:function(e){t.$set(t.searchData,"date",e)},expression:"searchData.date"}})],1)],1)],1),a("Divider"),a("Card",{attrs:{shadow:""}},[a("h4",{attrs:{slot:"title"},slot:"title"},[t._v("账单列表")]),a("div",{staticClass:"m-button"},[a("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:t.saveAll}},[t._v("全部保存")])],1),a("bill-table",{attrs:{data:t.data},on:{change:t.change,update:t.dataUpdata}})],1),a("Divider"),a("Card",{attrs:{shadow:""}},[a("div",{staticClass:"m-button"},[a("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:t.saveAllFirstData}},[t._v("全部保存")])],1),a("h4",{attrs:{slot:"title"},slot:"title"},[t._v("首月入住")]),a("bill-table",{attrs:{data:t.dataFirst,isFirst:!0},on:{change:t.cannal,update:t.dataFirstUpdate}})],1)],1)},i=[],r=a("be94"),s=(a("5df3"),a("1c4c"),a("6d91")),o=a("23ec"),l=a("6907"),c=a("4260"),d={components:{billTable:l["a"],addressSelect:o["a"],searchCard:s["a"]},name:"",data:function(){return{searchData:{buildingId:"",date:new Date},data:[],dataFirst:[]}},computed:{months:function(){return Array.from({length:12},function(t,e){return e+1})}},methods:{checkBuildingId:function(){return!!this.searchData.buildingId||(this.$Message.warning("请先选择地址"),!1)},addressChange:function(t){t&&this.getData()},getData:function(){var t=this,e=this.searchData,a=(e.buildingId,e.date);c["a"].ajax.post("admin/room/rentNoFilled/list",{buildingId:this.searchData.buildingId,year:a.getFullYear(),month:a.getMonth()+1}).then(function(e){var a=e.code,n=e.data;0==a&&(0==n.length&&t.$Message.warning({content:"该房源此月份暂无需要添加的账单",duration:3}),t.data=n.map(function(t){return t.elecmeterThismonth=t.elecmeterLastmonth,t.watermeterThismonth=t.watermeterLastmonth,t.practicalElecmeter=0,t.practicalWatermeter=0,t.rentFee=c["a"].getRentFee(t),t}),t.dataFirst=[])})},change:function(t){var e=this.data.splice(t,1)[0];e.rentFee=c["a"].getRentFee(e),this.dataFirst.push(e)},cannal:function(t){var e=this.dataFirst.splice(t,1)[0];this.data.push(e)},dataUpdata:function(t){var e=t._index;this.data[e]=Object(r["a"])({},t,{isSave:!1})},dataFirstUpdate:function(t){var e=t._index;this.dataFirst[e]=Object(r["a"])({},t,{isSave:!1})},save:function(t,e,a){var n=this;this.checkBuildingId()&&(0!=t.length?(t=t.map(function(t){var a=c["a"].getRentInfo(t);return e&&(a.rentFee=c["a"].getRentFee(t)),a.rentDate=c["a"].formatTime(n.searchData.date,"YYYY-MM-01"),a}),this.$Modal.confirm({title:"提示",content:"是否保存所有数据?",onOk:function(){c["a"].ajax.post("admin/rentinfo/batch",t).then(function(t){var e=t.code;0==e&&(n.$Message.success("保存成功"),a&&a())})}})):this.$Message.warning("暂无可保存的数据"))},saveAll:function(){var t=this;this.save(this.data,!0,function(){t.data=[]})},saveAllFirstData:function(){var t=this;this.save(this.dataFirst,!1,function(){t.dataFirst=[]})}}},m=d,u=(a("f782"),a("2877")),h=Object(u["a"])(m,n,i,!1,null,null,null);h.options.__file="add.vue";e["default"]=h.exports},a665:function(t,e,a){},b2d7:function(t,e,a){"use strict";var n=a("c8b5"),i=a.n(n);i.a},b6b3:function(t,e,a){},c8b5:function(t,e,a){},f782:function(t,e,a){"use strict";var n=a("a665"),i=a.n(n);i.a}}]);