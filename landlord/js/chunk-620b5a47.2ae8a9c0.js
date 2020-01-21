(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-620b5a47"],{"01ea":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Button",{directives:[{name:"show",rawName:"v-show",value:t.isShowPrint,expression:"isShowPrint"}],on:{click:t.print}},[t._v("打印")])},i=[],r={name:"",data:function(){return{isShowPrint:!0}},methods:{print:function(){this.isShowPrint=!1,this.$nextTick((function(){window.print()}))}}},s=r,l=a("2877"),o=Object(l["a"])(s,n,i,!1,null,"6be54756",null);e["a"]=o.exports},"3e9c":function(t,e,a){"use strict";var n=a("4810"),i=a.n(n);i.a},4737:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Form",{attrs:{"label-width":120}},[a("Row",[a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"地址："}},[t._v(t._s(t.data.roomAddress))])],1),a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"租金："}},[t._v(t._s(t.data.baseRent)+"元")])],1)],1),a("Row",[a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"上个月水表数："}},[t._v(t._s(t.data.watermeterLastmonth))])],1),a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"上个月电表数："}},[t._v(t._s(t.data.elecmeterLastmonth))])],1)],1),a("Row",[a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"当月水表数："}},[t._v(t._s(t.data.watermeterThismonth))])],1),a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"当月电表数："}},[t._v(t._s(t.data.elecmeterThismonth))])],1)],1),a("Row",[a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"水表总数："}},[t._v(t._s(t.data.practicalWatermeter))])],1),a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"电表总数："}},[t._v(t._s(t.data.practicalElecmeter))])],1)],1),a("Row",[a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"水费单价："}},[t._v(t._s(t.data.waterFee)+"元/方")])],1),a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"电费单价："}},[t._v(t._s(t.data.elecFee)+"元度")])],1)],1),a("Row",[a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"管理费："}},[t._v(t._s(t.data.manageFee)+"元")])],1),a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"网费："}},[t._v(t._s(t.data.netFee)+"元")])],1)],1),a("Row",[a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"燃气费："}},[t._v(t._s(t.data.gasFee)+"元")])],1),a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"热水费："}},[t._v(t._s(t.data.hotWaterFee)+"元")])],1)],1),a("Row",[a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"每月交租日："}},[t._v(t._s(t.data.rentDay)+"天")])],1),a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:"需缴纳："}},[t._v(t._s(t.data.rentFee)+"元（"+t._s(t.status)+"）")])],1)],1)],1)},i=[],r=(a("7514"),a("4260"),[{key:0,value:"未交租"},{key:1,value:"已交租"},{key:2,value:"未交租"},{key:3,value:"账单未填写"},{key:4,value:"待确认"}]),s={props:["data"],name:"",computed:{status:function(){var t=this;return this.data.status?r.find((function(e){return e.key==t.data.status})).value:""}}},l=s,o=a("2877"),c=Object(o["a"])(l,n,i,!1,null,"228f69af",null);e["a"]=c.exports},4810:function(t,e,a){},6907:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-table",{ref:"table",staticClass:"bill-list",attrs:{table:{data:t.data,loading:t.loading,border:t.disableOperating}}},[a("div",{key:"roomNo",attrs:{minWidth:t.commonMinWidth,title:"房号"}}),a("div",{attrs:{title:"总费用",minWidth:80},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[t.isFirst?a("InputNumber",{attrs:{min:0},model:{value:e.rentFee,callback:function(a){t.$set(e,"rentFee",a)},expression:"scope.rentFee"}}):a("span",[t._v(t._s(e.baseRent+e.practicalElecmeter*e.elecFee+e.practicalWatermeter*e.waterFee+e.gasFee+e.hotWaterFee+e.manageFee+e.netFee))])],1)}}])}),a("div",{key:"baseRent",attrs:{minWidth:t.commonMinWidth,title:"租金"}}),a("div",{key:"elecmeterLastmonth",attrs:{minWidth:t.commonMinWidth,title:"上月电"}}),a("div",{attrs:{minWidth:t.commonMinWidth,title:"本月电"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[a("InputNumber",{attrs:{disabled:t.readonly&&!e.isEdit,min:0},on:{"on-change":function(a){return t.calculateElectricity(e)}},model:{value:e.elecmeterThismonth,callback:function(a){t.$set(e,"elecmeterThismonth",a)},expression:"scope.elecmeterThismonth"}})],1)}}])}),a("div",{attrs:{minWidth:t.commonMinWidth,title:"实用电"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[a("InputNumber",{class:{"bg-warning":e.electricityWarning},attrs:{min:0,disabled:t.readonly&&!e.isEdit},on:{"on-change":function(a){return t.verificationElectricity(e)}},model:{value:e.practicalElecmeter,callback:function(a){t.$set(e,"practicalElecmeter",a)},expression:"scope.practicalElecmeter"}})],1)}}])}),a("div",{key:"elecFee",attrs:{minWidth:t.commonMinWidth,title:"电单价"}}),a("div",{attrs:{minWidth:t.commonMinWidth,title:"总电费"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[t._v(t._s(e.practicalElecmeter*e.elecFee))])}}])}),a("div",{key:"watermeterLastmonth",attrs:{minWidth:t.commonMinWidth,title:"上月水"}}),a("div",{attrs:{minWidth:t.commonMinWidth,title:"本月水"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[a("InputNumber",{attrs:{disabled:t.readonly&&!e.isEdit,min:0},on:{"on-change":function(a){return t.calculateWaterFee(e)}},model:{value:e.watermeterThismonth,callback:function(a){t.$set(e,"watermeterThismonth",a)},expression:"scope.watermeterThismonth"}})],1)}}])}),a("div",{attrs:{minWidth:t.commonMinWidth,title:"实用水"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[a("InputNumber",{class:{"bg-warning":e.waterFeeWarming},attrs:{min:0,disabled:t.readonly&&!e.isEdit},on:{"on-change":function(a){return t.verificationWaterFee(e)}},model:{value:e.practicalWatermeter,callback:function(a){t.$set(e,"practicalWatermeter",a)},expression:"scope.practicalWatermeter"}})],1)}}])}),a("div",{key:"waterFee",attrs:{minWidth:t.commonMinWidth,title:"水单价"}}),a("div",{attrs:{minWidth:t.commonMinWidth,title:"总水费"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[t._v(t._s(e.practicalWatermeter*e.waterFee))])}}])}),a("div",{attrs:{minWidth:90,title:"其他费用"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("Tooltip",{attrs:{content:e.netFee+"(网费)+"+e.manageFee+"(管理费)+"+e.hotWaterFee+"(热水费)+"+e.gasFee+"(燃气费)"}},[t._v("\n          "+t._s(e.gasFee+e.hotWaterFee+e.manageFee+e.netFee)+" "),a("Icon",{attrs:{type:"ios-help-circle-outline",size:"14"}})],1)]}}])}),t.disableOperating?t._e():a("div",{attrs:{title:"操作",width:t.readonly?140:90},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[t.isFirst||t.readonly?t._e():a("Button",{attrs:{type:"info",size:"small"},on:{click:function(a){return t.change(e)}}},[t._v("首月入住")]),t.isFirst?a("Button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.change(e)}}},[t._v("取消")]):t._e(),t.readonly&&!e.isEdit?a("Button",{attrs:{type:"warning",size:"small"},on:{click:function(a){return t.edit(e)}}},[t._v("修改")]):t._e(),t.readonly&&e.isEdit?a("Button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.save(e)}}},[t._v("保存")]):t._e(),t._v(" \n        "),t.readonly?a("Button",{attrs:{type:"info",size:"small"},on:{click:function(a){return t.detail(e)}}},[t._v("详情")]):t._e()],1)}}],null,!1,3103518248)})]),a("Modal",{attrs:{title:"账单详情",width:660},model:{value:t.modal.visible,callback:function(e){t.$set(t.modal,"visible",e)},expression:"modal.visible"}},[a("bill-detail",{attrs:{data:t.modal.data}}),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text",size:"large"},on:{click:function(e){t.modal.visible=!1}}},[t._v("取消")]),a("Button",{attrs:{type:"primary"},on:{click:t.print}},[t._v("打印")])],1)],1)],1)},i=[],r=a("4737"),s=a("b6ba"),l=a("4260"),o={components:{vTable:s["a"],billDetail:r["a"]},name:"",props:{data:{},loading:{default:!1},isFirst:{default:!1},readonly:{default:!1},disableOperating:{default:!1},commonMinWidth:{default:75}},data:function(){return{modal:{visible:!1,data:{}}}},methods:{calculateElectricity:function(t){var e=t.elecmeterLastmonth,a=t.elecmeterThismonth;l["a"].isEmpty(a)||l["a"].isEmpty(e)||(t.practicalElecmeter=a-e,t.electricityWarning=!1,this.update(t))},verificationElectricity:function(t){var e=t.practicalElecmeter,a=t.elecmeterThismonth,n=t.elecmeterLastmonth;t.electricityWarning=e!=a-n,this.update(t)},calculateWaterFee:function(t){var e=t.watermeterLastmonth,a=t.watermeterThismonth;l["a"].isEmpty(a)||l["a"].isEmpty(a)||(t.practicalWatermeter=a-e,t.waterFeeWarming=!1,this.update(t))},verificationWaterFee:function(t){var e=t.practicalWatermeter,a=t.watermeterThismonth,n=t.watermeterLastmonth;t.waterFeeWarming=e!=a-n,this.update(t)},rowClassName:function(t,e){return t.firstStay?"first-stay":"nothing"},change:function(t){this.$emit("change",t._index)},update:function(t){this.$emit("update",t)},edit:function(t){this.$emit("edit",t)},save:function(t){this.$emit("save",t)},detail:function(t){this.modal.data=t,this.modal.visible=!0},print:function(){sessionStorage[this.modal.data.id]=JSON.stringify(this.modal.data),window.open("#/bill/print/"+this.modal.data.id)}}},c=o,d=(a("b2d7"),a("2877")),m=Object(d["a"])(c,n,i,!1,null,null,null);e["a"]=m.exports},b2d7:function(t,e,a){"use strict";var n=a("c8b5"),i=a.n(n);i.a},c8b5:function(t,e,a){},cd2c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bill_print"},[a("div",{staticClass:"v_print"},[a("bill-table",{attrs:{data:t.data,readonly:!0,disableOperating:!0,loading:t.loading,"common-min-width":65}})],1),a("print-button",{staticClass:"bill_print_button"})],1)},i=[],r=a("6907"),s=a("01ea"),l=a("4260"),o={components:{billTable:r["a"],printButton:s["a"]},name:"",data:function(){return{data:[],loading:!0}},mounted:function(){var t=this,e=this.$route.params,a=e.id,n=e.month,i=e.year;l["a"].ajax("/admin/rentinfo/list",{params:{buildingId:a,year:i,month:n}}).then((function(e){var a=e.code,n=e.data;t.$nextTick((function(){t.loading=!1})),0==a&&(0==n.length&&t.$Message.warning("该房源地址暂无账单"),t.data=n)}))}},c=o,d=(a("3e9c"),a("2877")),m=Object(d["a"])(c,n,i,!1,null,null,null);e["default"]=m.exports}}]);