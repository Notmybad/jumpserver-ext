(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t){},1:function(e,t,a){e.exports=a("56d7")},"19d2":function(e,t,a){},2:function(e,t){},"24ab":function(e,t,a){e.exports={theme:"#1890ff"}},3:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),r=(a("f5df"),a("5c96")),s=a.n(r),l=(a("24ab"),a("b2d6")),o=a.n(l),i=(a("b20f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("upload-excel-component",{attrs:{"on-success":e.handleSuccess,"before-upload":e.beforeUpload}}),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:"","highlight-current-row":""}},e._l(e.tableHeader,(function(e){return a("el-table-column",{key:e,attrs:{prop:e,label:e}})})),1)],1)}),u=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("input",{ref:"excel-upload-input",staticClass:"excel-upload-input",attrs:{type:"file",accept:".xlsx, .xls"},on:{change:e.handleClick}}),a("div",{staticClass:"drop",on:{drop:e.handleDrop,dragover:e.handleDragover,dragenter:e.handleDragover}},[e._v(" Drop excel file here or "),a("el-button",{staticStyle:{"margin-left":"16px"},attrs:{loading:e.loading,size:"mini",type:"primary"},on:{click:e.handleUpload}},[e._v(" Browse ")])],1)])},d=[],p=a("1146"),f=a.n(p),h={props:{beforeUpload:Function,onSuccess:Function},data(){return{loading:!1,excelData:{header:null,results:null}}},methods:{generateData({header:e,results:t}){this.excelData.header=e,this.excelData.results=t,this.onSuccess&&this.onSuccess(this.excelData)},handleDrop(e){if(e.stopPropagation(),e.preventDefault(),this.loading)return;const t=e.dataTransfer.files;if(1!==t.length)return void this.$message.error("Only support uploading one file!");const a=t[0];if(!this.isExcel(a))return this.$message.error("Only supports upload .xlsx, .xls, .csv suffix files"),!1;this.upload(a),e.stopPropagation(),e.preventDefault()},handleDragover(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},handleUpload(){this.$refs["excel-upload-input"].click()},handleClick(e){const t=e.target.files,a=t[0];a&&this.upload(a)},upload(e){if(this.$refs["excel-upload-input"].value=null,!this.beforeUpload)return void this.readerData(e);const t=this.beforeUpload(e);t&&this.readerData(e)},readerData(e){return this.loading=!0,new Promise((t,a)=>{const n=new FileReader;n.onload=e=>{const a=e.target.result,n=f.a.read(a,{type:"array"}),r=n.SheetNames[0],s=n.Sheets[r],l=this.getHeaderRow(s),o=f.a.utils.sheet_to_json(s);this.generateData({header:l,results:o}),this.loading=!1,t()},n.readAsArrayBuffer(e)})},getHeaderRow(e){const t=[],a=f.a.utils.decode_range(e["!ref"]);let n;const r=a.s.r;for(n=a.s.c;n<=a.e.c;++n){const a=e[f.a.utils.encode_cell({c:n,r:r})];let s="UNKNOWN "+n;a&&a.t&&(s=f.a.utils.format_cell(a)),t.push(s)}return t},isExcel(e){return/\.(xlsx|xls|csv)$/.test(e.name)}}},g=h,x=(a("f241"),a("2877")),b=Object(x["a"])(g,c,d,!1,null,"9823aafe",null),m=b.exports,v={name:"UploadExcel",components:{UploadExcelComponent:m},data(){return{tableData:[],tableHeader:[]}},methods:{beforeUpload(e){const t=e.size/1024/1024<1;return!!t||(this.$message({message:"Please do not upload files larger than 1m in size.",type:"warning"}),!1)},handleSuccess({results:e,header:t}){this.tableData=e,this.tableHeader=t}}},D=v,w=Object(x["a"])(D,i,u,!1,null,null,null),y=w.exports;n["default"].use(s.a,{size:"medium",locale:o.a}),n["default"].config.productionTip=!1,new n["default"]({el:"#app",render:e=>e(y)})},b20f:function(e,t,a){e.exports={menuText:"#bfcbd9",menuActiveText:"#409eff",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px"}},f241:function(e,t,a){"use strict";a("19d2")}},[[1,"runtime","chunk-elementUI","chunk-libs"]]]);