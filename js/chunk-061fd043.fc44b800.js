(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-061fd043"],{"2c00":function(t,e,a){"use strict";var n=a("ad46"),i=a.n(n);i.a},"365c":function(t,e,a){"use strict";a.d(e,"g",(function(){return h})),a.d(e,"l",(function(){return v})),a.d(e,"c",(function(){return b})),a.d(e,"q",(function(){return w})),a.d(e,"j",(function(){return k})),a.d(e,"a",(function(){return N})),a.d(e,"s",(function(){return y})),a.d(e,"p",(function(){return C})),a.d(e,"k",(function(){return I})),a.d(e,"h",(function(){return x})),a.d(e,"d",(function(){return _})),a.d(e,"r",(function(){return D})),a.d(e,"t",(function(){return T})),a.d(e,"m",(function(){return M})),a.d(e,"n",(function(){return j})),a.d(e,"o",(function(){return L})),a.d(e,"f",(function(){return E})),a.d(e,"b",(function(){return S})),a.d(e,"i",(function(){return A})),a.d(e,"e",(function(){return F}));a("b0c0"),a("d3b7");var n=a("bc3a"),i=a.n(n),r=a("f825"),s=a("a18c"),o=a("4360"),u=0;function c(){0===u&&o["a"].commit("setLoading",!0),u++}function l(){u--,u<=0&&(u=0,o["a"].commit("setLoading",!1))}var d=a("ed08"),p=i.a.create({baseURL:localStorage.getItem("YUDAO_URL"),timeout:6e4,headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t,e){var a="";for(var n in t)""!==t[n]&&(""!==a&&(a+="&"),a+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return a}]});p.interceptors.request.use((function(t){return c(),localStorage.getItem("token")&&(t.headers.Authentication=localStorage.getItem("token")),t}),(function(t){return Promise.reject(t)})),p.interceptors.response.use((function(t){l();var e=t.data;return-403===e.status?(r["Message"].error({content:e.message+",请重新登录"}),Object(d["b"])(),s["b"].push("login"),Promise.reject()):e}),(function(t){return l(),"Error"==t.name?r["Message"].error({content:t}):r["Message"].error({content:t.response.data.data||t.message}),Promise.reject(t)}));var f=p,g=i.a.create({baseURL:localStorage.getItem("YUDAO_URL"),timeout:6e4,headers:{"Content-Type":"application/x-www-form-urlencoded"}});g.interceptors.request.use((function(t){return c(),localStorage.getItem("token")&&(t.headers.Authentication=localStorage.getItem("token")),t}),(function(t){return Promise.reject(t)})),g.interceptors.response.use((function(t){l();var e=t.data;return-403===e.status?(r["Message"].error({content:e.message+",请重新登录"}),Object(d["b"])(),s["b"].push("login"),Promise.reject()):e}),(function(t){return l(),"Error"==t.name?r["Message"].error({content:t}):r["Message"].error({content:t.response.data.data||t.message}),Promise.reject(t)}));var m=g;function h(t){return f({url:"/api/v2/permission/auth",method:"post",data:t})}function v(t){return f({url:"/api/v2/groups?page="+t.page+"&size="+t.rows,method:"get"})}function b(t){return f({url:"/api/v2/groups",method:"post",data:t})}function w(t){return f({url:"/api/v2/groups/"+t.groupId,method:"post",data:t})}function k(t){return f({url:"/api/v2/groups",method:"delete",data:t})}function N(t){return f({url:"/api/v2/devices/to_group",method:"post",data:t})}function y(t){return f({url:"/api/v2/devices?"+(t.groupName?"groupName="+t.groupName+"&":"")+(t.identifiers?"identifiers="+t.identifiers+"&":"")+"page="+t.page+"&size="+t.rows,method:"get"})}function C(t){return f({url:"/api/v3/tasks/template?"+(t.name?"name="+t.name+"&":"")+"page="+t.page+"&size="+t.rows,method:"get"})}function I(t){return f({url:"/api/v2/taskTemplates/"+t,method:"delete"})}function x(t){return f({url:"/api/v2/tasks",method:"post",data:t})}function _(t){return f({url:"/api/v3/tasks/template/injury",method:"post",data:t})}function D(t,e){return f({url:"/api/v3/tasks/template/"+t,method:"post",data:e})}function T(t){return f({url:"/api/v2/tasks?withoutFeature="+t.withoutFeature+"&"+(t.groupName?"groupName="+t.groupName+"&":"")+(t.identifiers?"identifiers="+t.identifiers+"&":"")+(t.taskName?"taskName="+t.taskName+"&":"")+"page="+t.page+"&size="+t.rows,method:"get"})}function M(t){return f({url:"/api/v2/tasks/group?"+(t.groupName?"groupName="+t.groupName+"&":"")+(t.identifiers?"identifiers="+t.identifiers+"&":"")+(t.taskName?"taskName="+t.taskName+"&":"")+"page="+t.page+"&size="+t.rows,method:"get"})}function j(t){return f({url:"/api/v2/tasks/group_by?tid="+t.tid+"&iid="+t.iid,method:"get"})}function L(t){return f({url:"/api/v2/tasks/group_by_failure?tid="+t.tid+"&iid="+t.iid,method:"get"})}function E(t){return f({url:"/api/v2/attachments?page="+t.page+"&size="+t.rows,method:"get"})}function S(t,e){return m({url:"/api/v2/attachments"+(t?"/"+t:""),method:"post",data:e})}function A(t){return f({url:"/api/v2/attachments/"+t,method:"delete"})}function F(t){return f({url:"/api/v2/attachments/"+t,method:"get"})}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),i=a("5899"),r="["+i+"]",s=RegExp("^"+r+r+"*"),o=RegExp(r+r+"*$"),u=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(s,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(t,e,a){var n=a("861d"),i=a("d2bb");t.exports=function(t,e,a){var r,s;return i&&"function"==typeof(r=e.constructor)&&r!==a&&n(s=r.prototype)&&s!==a.prototype&&i(t,s),t}},a294:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"devGroupManage"},[a("div",{staticClass:"nav"},[a("div"),a("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:t.addModule}},[t._v("新增附件")])],1),a("div",{staticClass:"content"},[a("div",{staticClass:"box"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{align:"center",data:t.tableData,"tooltip-effect":"dark",height:"100%"}},[a("el-table-column",{attrs:{align:"center",type:"selection",width:"50"}}),a("el-table-column",{attrs:{prop:"displayName",sortable:"",label:"名称",width:"200"}}),a("el-table-column",{attrs:{prop:"id",sortable:"",label:"id",width:"150"}}),a("el-table-column",{attrs:{prop:"hash",sortable:"",label:"hash",width:"300"}}),a("el-table-column",{attrs:{prop:"ossName",sortable:"",label:"ossName","min-width":"250"}}),a("el-table-column",{attrs:{align:"center",label:"操作",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"space-around"}},[a("Button",{directives:[{name:"show",rawName:"v-show",value:!t.tableData[e.$index].address,expression:"!tableData[scope.$index].address"}],staticClass:"address",attrs:{type:"primary"},on:{click:function(a){return t.address(e.row,e.$index)}}},[t._v("下载地址")]),a("Button",{directives:[{name:"show",rawName:"v-show",value:t.tableData[e.$index].address,expression:"tableData[scope.$index].address"}],staticClass:"addresstext",attrs:{"data-clipboard-text":t.addressText,type:"primary"},on:{click:t.copy}},[t._v("复制地址")]),a("Button",{attrs:{type:"warning"},on:{click:function(a){return t.upDataClick(e.row)}}},[t._v("修改")]),a("Button",{attrs:{type:"error"},on:{click:function(a){return t.delClick(e.row.id,e.row.displayName)}}},[t._v("删除")])],1)]}}])})],1)],1),a("div",{staticClass:"page-box"},[a("el-pagination",{attrs:{"current-page":t.sendData.page+1,"page-sizes":[100,500],"page-size":t.sendData.rows,layout:"total, sizes, prev, pager, next, jumper",total:t.totalRows},on:{"size-change":t.rowsChange,"current-change":t.pageChange}})],1)]),a("el-dialog",{attrs:{title:"修改分组",visible:t.dialogVisible,width:"40%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"item"},[a("span",{staticClass:"title"},[t._v("文件名称")]),a("Input",{attrs:{placeholder:"请输入文件名称"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("div",{staticClass:"item"},[a("span",{staticClass:"title"},[t._v("文件")]),a("el-upload",{staticClass:"upload-demo",attrs:{"show-file-list":!0,drag:"",action:"","auto-upload":!1,"on-change":t.changeFile,"on-remove":t.removeFile,"file-list":t.fileList,limit:1,multiple:""}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),a("em",[t._v("点击上传")])])])],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.addClick}},[t._v("确 定")])],1)])],1)},i=[],r=(a("b0c0"),a("a9e3"),a("365c")),s={name:"devGroupManage",data:function(){return{fileList:[],taskName:"",dialogVisible:!1,addressText:"",tableData:[],totalRows:0,nowId:"",file:"",name:"",sendData:{page:0,rows:100,name:""}}},watch:{name:function(){""==this.name&&this.gettaskTemplates()}},created:function(){this.gettaskTemplates()},methods:{address:function(t,e){var a=this;this.addressText="",Object(r["e"])(t.id).then((function(t){a.tableData[e].address=t.content,a.addressText=t.content}))},copy:function(){var t=this,e=new this.Clipboard(".addresstext");e.on("success",(function(a){t.$message.success("复制成功"),e.destroy()}))},removeFile:function(t,e){this.fileList=[],this.file="",this.fileList=Object.assign(this.fileList,e)},changeFile:function(t,e){this.fileList=[],this.fileList=Object.assign(this.fileList,e),this.file=t.raw},delClick:function(t,e){var a=this;this.$confirm("此操作将删除："+e+", 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["i"])(t).then((function(t){a.$message.success("请求已发送"),a.gettaskTemplates()}))})).catch((function(){a.$message({type:"info",message:"已取消"})}))},upDataClick:function(t){this.nowId=t.id,this.name=t.displayName,this.file="",this.fileList=[],this.dialogVisible=!0},addClick:function(){var t=this,e=new FormData;e.append("name",this.name),this.file&&e.append("file",this.file),Object(r["b"])(this.nowId,e).then((function(e){t.$message.success("请求已发送"),t.dialogVisible=!1,t.gettaskTemplates()}))},addModule:function(){this.name="",this.file="",this.nowId="",this.fileList=[],this.dialogVisible=!0},pageChange:function(t){this.sendData.page=t-1,this.gettaskTemplates()},rowsChange:function(t){this.sendData.rows=t,this.gettaskTemplates()},gettaskTemplates:function(){var t=this;Object(r["f"])(this.sendData).then((function(e){t.tableData=e.content.content,t.totalRows=e.content.totalElements}))}},filters:{timeHendel:function(t){if(null===t)return"";t=Number(t+"");var e=new Date(t),a=e.getFullYear()+"-",n=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",i=(e.getDate()<10?"0"+e.getDate():e.getDate())+" ",r=(e.getHours()<10?"0"+e.getHours():e.getHours())+":",s=(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":",o=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return a+n+i+r+s+o}}},o=s,u=(a("2c00"),a("2877")),c=Object(u["a"])(o,n,i,!1,null,"1ce5f44a",null);e["default"]=c.exports},a9e3:function(t,e,a){"use strict";var n=a("83ab"),i=a("da84"),r=a("94ca"),s=a("6eeb"),o=a("5135"),u=a("c6b6"),c=a("7156"),l=a("c04e"),d=a("d039"),p=a("7c73"),f=a("241c").f,g=a("06cf").f,m=a("9bf2").f,h=a("58a8").trim,v="Number",b=i[v],w=b.prototype,k=u(p(w))==v,N=function(t){var e,a,n,i,r,s,o,u,c=l(t,!1);if("string"==typeof c&&c.length>2)if(c=h(c),e=c.charCodeAt(0),43===e||45===e){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+c}for(r=c.slice(2),s=r.length,o=0;o<s;o++)if(u=r.charCodeAt(o),u<48||u>i)return NaN;return parseInt(r,n)}return+c};if(r(v,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var y,C=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof C&&(k?d((function(){w.valueOf.call(a)})):u(a)!=v)?c(new b(N(e)),a,C):N(e)},I=n?f(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;I.length>x;x++)o(b,y=I[x])&&!o(C,y)&&m(C,y,g(b,y));C.prototype=w,w.constructor=C,s(i,v,C)}},ad46:function(t,e,a){}}]);
//# sourceMappingURL=chunk-061fd043.fc44b800.js.map