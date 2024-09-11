"use strict";(self["webpackChunkarch_main"]=self["webpackChunkarch_main"]||[]).push([[4058],{5293:function(t,e,a){a.r(e),a.d(e,{default:function(){return y}});var i=a(375),s=a(1526),r=a(7405),o=a(8230),l=a(9456),n=a(8412),d=a(3406),c=function(){var t=this,e=t._self._c;return e("div",[e(n.A,[e(s.A,{attrs:{md:"12",cols:"12"}},[e("BlockItem",[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("دسته بندی پروژه ها")]),e("template",{slot:"icon"},[t._v("mdi-format-list-bulleted-type")]),e(o.A,{ref:"form"},[t.renderComponent?e(n.A,[e(s.A,{attrs:{cols:"12",md:"3"}},[e(d.A,{attrs:{outlined:"",rules:[t.$store.state.rules.required(t.title,"عنوان")],label:"عنوان",dense:"",color:"txtf"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),e(s.A,{attrs:{cols:"12",md:"3"}},[e(d.A,{attrs:{outlined:"",rules:[t.$store.state.rules.required(t.desc,"توضیحات")],label:"توضیحات",color:"txtf",dense:""},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}})],1),e(s.A,{attrs:{cols:"12",md:"2"}},[!t.id&&t.$store.state.permissions&&t.$store.state.permissions["create-product-category"]?e(i.A,{staticClass:"dash-btns dash-btns--blue",attrs:{dark:"",disabled:t.loading},on:{click:function(e){return t.addCategory()}}},[t._v(" + افزودن ")]):t._e(),t.id?e(i.A,{attrs:{text:"",dark:"",color:"#17a2b8"},on:{click:function(e){return t.editCategory()}}},[e(l.A,{attrs:{color:"#17a2b8",disabled:t.loading}},[t._v("mdi-check")]),t._v(" ویرایش ")],1):t._e(),t.id?e(i.A,{attrs:{small:"",text:"",dark:"",color:"red"},on:{click:function(e){return t.cleanEdit()}}},[e(l.A,{attrs:{color:"error",disabled:t.loading}},[t._v("mdi-close")])],1):t._e()],1)],1):t._e()],1),e(r.A,{attrs:{"hide-default-footer":"",headers:t.headers,loading:t.loading,items:t.data,"item-key":"id","disable-sort":""},scopedSlots:t._u([{key:"item.func",fn:function({item:a}){return[e("div",{staticClass:"d-flex justify-center"},[t.$store.state.permissions&&t.$store.state.permissions["change-product-category"]?e("a-sbtn",{attrs:{color:"#17a2b8",icon:"mdi-pencil",alt:"ویرایش کردن"},on:{clickBtn:function(e){return t.toEdit(a)}}}):t._e(),t.$store.state.permissions&&t.$store.state.permissions["delete-product-category"]?e("a-sbtn",{attrs:{color:"#DC3545",icon:"mdi-delete",alt:"حذف کردن"},on:{clickBtn:function(e){return t.toDelete(a.id,"/projects/api/v1/state/delete-category/")}}}):t._e()],1)]}}],null,!0)})],2)],1)],1),e("DeleteDialog",{attrs:{ddata:t.deleteData},on:{deleteFn:function(e){return t.fetchCategories()}}})],1)},h=[],u=a(2505),p=a.n(u),f=a(7427),g=a(9094),m=a(7791),v=a(4687),b={name:"DashBlogCategory",mixins:[m.l],components:{ASbtn:v.A,DeleteDialog:g.A,BlockItem:f.A},created(){this.fetchCategories()},data(){return{id:null,desc:null,title:null,options:{},loading:!1,data:[],deleteData:{api:"",dialog:!1,loading:!1,idSelected:null}}},computed:{headers(){return[{text:"شماره",align:"start",class:"header-table-gray",sortable:!1,value:"id"},{text:"عنوان",align:"start",class:"header-table-gray",sortable:!1,value:"title"},{text:"توضیحات",class:"header-table-gray",align:"center",value:"desc"},{text:"پروژه ها",class:"header-table-gray",align:"center",value:"category_product_count"},{text:"عملیات",class:"header-table-gray",align:"center",value:"func"}]}},methods:{addCategory(){if(this.$refs.form.validate(),this.$refs.form.validate()){const t={desc:this.desc,title:this.title};this.id=null,this.desc=null,this.title=null,this.loading=!0,this.forceRerender(),p().post(this.$store.state.host+"/projects/api/v1/category/create-category",t,{headers:{Accept:"application/json",Authorization:`Bearer ${this.$store.state.userId}`}}).then((()=>{this.notify("دسته بندی افزوده شد","info"),this.fetchCategories()})).catch((t=>{this.errorHandle(t.response)}))}},editCategory(){if(this.$refs.form.validate(),this.$refs.form.validate()){const t={id:this.id,desc:this.desc,title:this.title};this.id=null,this.desc=null,this.title=null,this.loading=!0,this.forceRerender(),p().patch(this.$store.state.host+"/projects/api/v1/state/change-category/"+t.id,t,{headers:{Accept:"application/json",Authorization:`Bearer ${this.$store.state.userId}`}}).then((()=>{this.notify("دسته بندی ویرایش شد","warning"),this.fetchCategories()})).catch((t=>{this.errorHandle(t.response)}))}},toEdit(t){this.id=t.id,this.desc=t.desc,this.title=t.title},cleanEdit(){this.id=null,this.title=null,this.parent=null,this.enabled=!0,this.name=null,this.title=null,this.forceRerender()},toDelete(t,e){this.deleteData.idSelected=t,this.deleteData.api=e,this.deleteData.dialog=!0},fetchCategories(){this.loading=!0,p().get(this.$store.state.host+"/projects/api/v1/category/categories",{params:this.options}).then((t=>{this.data=t.data.data,this.loading=!1})).catch((t=>{this.errorHandle(t.response)}))}}},_=b,A=a(1656),$=(0,A.A)(_,c,h,!1,null,"29ba6775",null),y=$.exports},9094:function(t,e,a){a.d(e,{A:function(){return m}});var i=a(375),s=a(1689),r=a(8834),o=a(4155),l=a(7410),n=function(){var t=this,e=t._self._c;return e(o.A,{attrs:{persistent:t.data.loading,"max-width":"290"},model:{value:t.data.dialog,callback:function(e){t.$set(t.data,"dialog",e)},expression:"data.dialog"}},[e(s.A,{staticClass:"pt-2 pr-3"},[e("h3",[t._v(" از حذف آیتم مورد نظر مطمئن هستید؟ ")]),e(r.OQ,[t._v("در صورت موافقت حذف می شود")]),e(r.SL,[e(l.A),e(i.A,{attrs:{color:"primary",text:"",disabled:t.data.loading},on:{click:function(e){t.data.dialog=!1}}},[t._v(" بستن ")]),e(i.A,{staticStyle:{"background-color":"darkred"},attrs:{color:"white",text:"",disabled:t.data.loading,loading:t.data.loading},on:{click:function(e){return t.deleteItem()}}},[t._v(" حذف کن ")])],1)],1)],1)},d=[],c=a(2505),h=a.n(c),u={name:"DeleteDialog",props:["ddata"],data(){return{data:this.ddata}},methods:{deleteItem(){this.data.loading=!0,h()["delete"](this.$store.state.host+this.data.api+this.data.idSelected,{headers:{Accept:"application/json",Authorization:`Bearer ${this.$store.state.userId}`}}).then((()=>{this.$store.state.notify.color="orange",this.$store.state.notify.is=!0,this.$store.state.notify.text="آیتم حذف شد",this.$emit("deleteFn")})).catch((t=>{this.errorHandle(t.response)})).finally((()=>{this.$emit("deleteFn"),this.data.loading=!1,this.data.dialog=!1}))}}},p=u,f=a(1656),g=(0,f.A)(p,n,d,!1,null,"3a544dbf",null),m=g.exports},8230:function(t,e,a){a(8743);var i=a(3507),s=a(4765),r=a(8652);e.A=(0,i.A)(s.A,(0,r.G)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))})):a.valid=e(t),a},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const a=this.watchers.find((t=>t._uid===e._uid));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},7791:function(t,e,a){a.d(e,{l:function(){return i}});var i={data(){return{renderComponent:!0}},methods:{forceRerender(){this.renderComponent=!1,this.$nextTick((()=>{this.renderComponent=!0}))}}}}}]);
//# sourceMappingURL=4058.b34eee0f.js.map