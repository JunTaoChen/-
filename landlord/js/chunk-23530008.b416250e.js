(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23530008"],{"1a23":function(t,e,a){var n,i;!function(r,o){n=o,i="function"===typeof n?n.call(e,a,e,t):n,void 0===i||(t.exports=i)}(0,(function(t,e,a){var n=function(t,e,a,n,i,r){function o(t){var e,a,n,i,r,o,s=t<0;if(t=Math.abs(t).toFixed(l.decimals),t+="",e=t.split("."),a=e[0],n=e.length>1?l.options.decimal+e[1]:"",l.options.useGrouping){for(i="",r=0,o=a.length;r<o;++r)0!==r&&r%3===0&&(i=l.options.separator+i),i=a[o-r-1]+i;a=i}return l.options.numerals.length&&(a=a.replace(/[0-9]/g,(function(t){return l.options.numerals[+t]})),n=n.replace(/[0-9]/g,(function(t){return l.options.numerals[+t]}))),(s?"-":"")+l.options.prefix+a+n+l.options.suffix}function s(t,e,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+e}function u(t){return"number"==typeof t&&!isNaN(t)}var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:s,formattingFn:o,prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var d in l.options)r.hasOwnProperty(d)&&null!==r[d]&&(l.options[d]=r[d]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var c=0,m=["webkit","moz","ms","o"],f=0;f<m.length&&!window.requestAnimationFrame;++f)window.requestAnimationFrame=window[m[f]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[m[f]+"CancelAnimationFrame"]||window[m[f]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var a=(new Date).getTime(),n=Math.max(0,16-(a-c)),i=window.setTimeout((function(){t(a+n)}),n);return c=a+n,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)}),l.initialize=function(){return!!l.initialized||(l.error="",l.d="string"==typeof t?document.getElementById(t):t,l.d?(l.startVal=Number(e),l.endVal=Number(a),u(l.startVal)&&u(l.endVal)?(l.decimals=Math.max(0,n||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(i)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,!0):(l.error="[CountUp] startVal ("+e+") or endVal ("+a+") is not a number",!1)):(l.error="[CountUp] target is null or undefined",!1))},l.printValue=function(t){var e=l.options.formattingFn(t);"INPUT"===l.d.tagName?this.d.value=e:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=e:this.d.innerHTML=e},l.count=function(t){l.startTime||(l.startTime=t),l.timestamp=t;var e=t-l.startTime;l.remaining=l.duration-e,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(e,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(e,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(e/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(e/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),e<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(t){l.initialize()&&(l.callback=t,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(t){if(l.initialize()){if(t=Number(t),!u(t))return void(l.error="[CountUp] update() - new endVal is not a number: "+t);l.error="",t!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=t,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))}},l.initialize()&&l.printValue(l.startVal)};return n}))},"29cc":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Row",{staticClass:"info-card",attrs:{gutter:20}},[a("Col",{attrs:{span:12}},[a("Card",{attrs:{padding:0,shadow:""}},[a("div",{staticClass:"left",staticStyle:{background:"#ff9900"}},[a("Icon",{attrs:{type:"ios-log-in"}})],1),a("div",{staticClass:"right"},[a("ICountUp",{attrs:{startVal:0,endVal:t.rentedNum}}),a("p",[t._v("已出租")])],1)])],1),a("Col",{attrs:{span:12}},[a("Card",{attrs:{padding:0,shadow:""}},[a("div",{staticClass:"left",staticStyle:{background:"#2d8cf0"}},[a("Icon",{attrs:{type:"ios-log-out"}})],1),a("div",{staticClass:"right"},[a("ICountUp",{attrs:{startVal:0,endVal:t.unRentedNum}}),a("p",[t._v("未出租")])],1)])],1)],1)},i=[],r=a("4260"),o=a("4685"),s=a.n(o),u={components:{ICountUp:s.a},name:"",props:["id"],data:function(){return{rentedNum:0,unRentedNum:0}},methods:{getData:function(){var t=this,e=this.id,a={};if(void 0==e)return this.rentedNum=0,void(this.unRentedNum=0);a.buildingId=e,r["a"].ajax("admin/building/summary",{params:a}).then((function(e){var a=e.code,n=e.data;0==a&&(t.rentedNum=n.rentedNum,t.unRentedNum=n.unRentedNum)}))}},mounted:function(){this.getData()},watch:{id:function(t){this.getData()}}},l=u,d=a("2877"),c=Object(d["a"])(l,n,i,!1,null,null,null);e["a"]=c.exports},4685:function(t,e,a){!function(e,n){t.exports=n(a("1a23"))}("undefined"!=typeof self&&self,(function(t){return function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1),i=a.n(n),r=a(4),o=a.n(r),s={__countup__:o.a,name:"ICountUp",props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!0},decimals:{type:Number,required:!1,default:0},duration:{type:Number,required:!1,default:2},options:{type:Object,required:!1}},data:function(){return{instance:null}},watch:{endVal:{handler:function(t){var e=this;e.instance&&i()(e.instance.update)&&e.instance.update(t)},deep:!1}},methods:{init:function(){var t=this;if(!t.instance){var e=t.$el,a=new o.a(e,t.startVal,t.endVal,t.decimals,t.duration,t.options);a.error||(a.start((function(){return t.$emit("ready",a,o.a)})),t.instance=a)}},uninit:function(){this.instance=null},start:function(t){var e=this;if(e.instance&&i()(e.instance.start)&&i()(t))return e.instance.start(t)},pauseResume:function(){var t=this;if(t.instance&&i()(t.instance.pauseResume))return t.instance.pauseResume()},reset:function(){var t=this;if(t.instance&&i()(t.instance.reset))return t.instance.reset()},update:function(t){var e=this;if(e.instance&&i()(e.instance.update))return e.instance.update(t)}},mounted:function(){this.init()},beforeDestroy:function(){this.uninit()},render:function(t){return t("span",{})}};e.default=s},function(t,e,a){function n(t){if(!r(t))return!1;var e=i(t);return e==s||e==u||e==o||e==l}var i=a(2),r=a(3),o="[object AsyncFunction]",s="[object Function]",u="[object GeneratorFunction]",l="[object Proxy]";t.exports=n},function(t,e){function a(t){return i.call(t)}var n=Object.prototype,i=n.toString;t.exports=a},function(t,e){function a(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=a},function(e,a){e.exports=t}])}))},"5e19":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("rental-statistics",{attrs:{id:t.searchData.buildingId}}),a("Divider"),a("search-card",[a("Form",{staticClass:"block",attrs:{"label-width":100},nativeOn:{submit:function(t){t.preventDefault()}}},[a("FormItem",{attrs:{label:"楼名："}},[a("address-select",{on:{change:t.search},model:{value:t.searchData.buildingId,callback:function(e){t.$set(t.searchData,"buildingId",e)},expression:"searchData.buildingId"}})],1),a("FormItem",{attrs:{label:"状态："}},[a("RadioGroup",{on:{"on-change":t.search},model:{value:t.searchData.status,callback:function(e){t.$set(t.searchData,"status",e)},expression:"searchData.status"}},[a("Radio",{attrs:{label:2}},[t._v("已出租")]),a("Radio",{attrs:{label:1}},[t._v("未出租")])],1)],1)],1)],1),a("Divider"),a("Card",{attrs:{shadow:""}},[a("h4",{attrs:{slot:"title"},slot:"title"},[t._v("\n      房屋列表\n      ")]),a("v-table",{attrs:{table:{data:t.data,loading:t.tableLoaing},total:t.total,current:t.curPage,pageSize:t.pageSize,showPage:!0},on:{"change-page":t.changePage,"update:current":function(e){t.curPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e}}},[a("div",{key:"name",attrs:{title:"门牌号"}}),a("div",{key:"houseType",attrs:{title:"户型"}}),a("div",{key:"tenantName",attrs:{title:"租客姓名"}}),a("div",{attrs:{title:"手机号码"},scopedSlots:t._u([{key:"default",fn:function(t){return a("div",{},[a("phone-tip",{attrs:{phone:t.mobile}})],1)}}])}),a("div",{attrs:{title:"身份证号码"},scopedSlots:t._u([{key:"default",fn:function(t){return a("div",{},[a("id-tip",{attrs:{id:t.idCardNo}})],1)}}])}),a("div",{key:"dueDate",attrs:{title:"租约日期"}}),a("div",{attrs:{title:"操作",width:200},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[a("Button",{attrs:{type:"warning",size:"small"},on:{click:function(a){return t.edit(e)}}},[t._v("编辑房间名")]),2==t.searchData.status?a("Button",{attrs:{type:"info",size:"small"},on:{click:function(a){return t.toBill(e)}}},[t._v("查看账单")]):t._e()],1)}}])})])],1),a("Modal",{attrs:{title:"修改房屋名称",width:"320"},model:{value:t.modal.visible,callback:function(e){t.$set(t.modal,"visible",e)},expression:"modal.visible"}},[a("Form",{ref:"form",attrs:{model:t.modal.data,rules:t.modal.rules,"label-width":100}},[a("Row",[a("FormItem",{attrs:{prop:"name",label:"房屋名称："}},[a("Input",{attrs:{placeholder:"请输入房屋名称"},model:{value:t.modal.data.name,callback:function(e){t.$set(t.modal.data,"name",e)},expression:"modal.data.name"}})],1)],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text",size:"large"},on:{click:function(e){t.modal.visible=!1}}},[t._v("取消")]),a("Button",{attrs:{type:"primary"},on:{click:t.comfirmRoom}},[t._v("确定")])],1)],1)],1)},i=[],r=(a("386d"),a("7f7f"),a("4260")),o=a("338a"),s=a("29cc"),u=a("23ec"),l={mixins:[o["a"]],components:{rentalStatistics:s["a"],addressSelect:u["a"]},data:function(){return{url:"admin/room/list",searchData:{status:2,buildingId:null},modal:{visible:!1,data:{id:"",name:""},rules:{name:r["a"].getRequiredRule("房间名称不能为空")}},address:""}},methods:{toBill:function(t){},edit:function(t){this.modal.data.id=t.id,this.modal.data.name=t.name,this.modal.visible=!0},comfirmRoom:function(){var t=this;this.$refs.form.validate((function(e){e&&r["a"].ajax.put("admin/room",t.modal.data).then((function(e){var a=e.code;0==a&&(t.$Message.success("修改成功"),t.modal.visible=!1,t.changePage(t.curPage))}))}))}},activated:function(){var t=this.$route.query,e=t.id;t.address;e?(this.searchData.buildingId=parseInt(e),this.search()):(this.searchData.buildingId=null,this.data=[]),this.searchData.status=2}},d=l,c=a("2877"),m=Object(c["a"])(d,n,i,!1,null,null,null);e["default"]=m.exports}}]);