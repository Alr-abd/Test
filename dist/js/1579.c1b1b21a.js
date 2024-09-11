"use strict";(self["webpackChunkarch_main"]=self["webpackChunkarch_main"]||[]).push([[1579],{9200:function(t,e,i){i.r(e),i.d(e,{default:function(){return x}});var a=i(375),s=i(1526),r=i(7405),l=i(8),n=i(8230),o=i(9456),d=i(8412),h=i(3406),u=function(){var t=this,e=t._self._c;return e("div",[e(d.A,[e(s.A,{attrs:{md:"12",cols:"12"}},[e("BlockItem",[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("نوع محاسبه قیمت")]),e("template",{slot:"icon"},[t._v("mdi-google-pages")]),e(n.A,{ref:"form"},[t.renderComponent?e(d.A,[e(s.A,{attrs:{cols:"12",md:"3"}},[e(h.A,{attrs:{outlined:"",rules:[t.$store.state.rules.required(t.title,"عنوان")],label:"عنوان",dense:"",color:"txtf"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),e(s.A,{attrs:{cols:"12",md:"3"}},[e(l.A,{attrs:{outlined:"",rules:[t.$store.state.rules.required(t.image,"تصویر")],label:"تصویر",dense:"",color:"txtf"},model:{value:t.image,callback:function(e){t.image=e},expression:"image"}})],1),e(s.A,{attrs:{cols:"12",md:"2"}},[t.id?t._e():e(a.A,{staticClass:"dash-btns dash-btns--blue",attrs:{dark:"",disabled:t.loading},on:{click:function(e){return t.addCategory()}}},[t._v(" + افزودن ")]),t.id?e(a.A,{attrs:{text:"",dark:"",color:"#17a2b8"},on:{click:function(e){return t.editCategory()}}},[e(o.A,{attrs:{color:"#17a2b8",disabled:t.loading}},[t._v("mdi-check")]),t._v(" ویرایش ")],1):t._e(),t.id?e(a.A,{attrs:{small:"",height:"36",text:"",dark:"",color:"red"},on:{click:function(e){return t.cleanEdit()}}},[e(o.A,{attrs:{color:"error",disabled:t.loading}},[t._v("mdi-close")])],1):t._e()],1)],1):t._e()],1),e(r.A,{attrs:{"hide-default-footer":"",headers:t.headers,loading:t.loading,items:t.data,"item-key":"id","disable-sort":""},scopedSlots:t._u([{key:"item.enabled",fn:function({item:i}){return[i.enabled?e("span",{staticClass:"table-flag-enabled table-flag-enabled--green"},[t._v("فعال")]):e("span",{staticClass:"table-flag-enabled table-flag-enabled--red"},[t._v("غیر فعال")])]}},{key:"item.func",fn:function({item:i}){return[e("div",{staticClass:"d-flex justify-center"},[e("a-sbtn",{attrs:{color:"#17a2b8",icon:"mdi-pencil",alt:"ویرایش کردن"},on:{clickBtn:function(e){return t.toEdit(i)}}}),e("a-sbtn",{attrs:{color:"#DC3545",icon:"mdi-delete",alt:"حذف کردن"},on:{clickBtn:function(e){return t.toDelete(i.id,"/pricing/api/v1/delete-pricing-type/")}}})],1)]}}],null,!0)})],2)],1),e(s.A,{attrs:{md:"12",cols:"12"}},[e("BlockItem",[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("اطلاعات مشتریان محاسبه")]),e("template",{slot:"icon"},[t._v("mdi-account-search")]),e(r.A,{attrs:{"hide-default-footer":"",headers:t.PricingHeaders,loading:t.loading,items:t.pricingData,"item-key":"id","disable-sort":""},scopedSlots:t._u([{key:"item.action",fn:function({item:i}){return[e("div",{staticClass:"d-flex justify-center"},[e("a-sbtn",{attrs:{color:"#DC3545",icon:"mdi-delete",alt:"حذف کردن"},on:{clickBtn:function(e){return t.toDelete(i.id,"/pricing/api/v1/delete-pricing/")}}})],1)]}}],null,!0)})],2)],1)],1),e("DeleteDialog",{attrs:{ddata:t.deleteData},on:{deleteFn:function(e){return t.fetchData()}}})],1)},c=[],p=i(2505),g=i.n(p),f=i(7427),m=i(9094),y=i(7791),b=i(4687),v={name:"DashPricing",mixins:[y.l],components:{ASbtn:b.A,DeleteDialog:m.A,BlockItem:f.A},created(){this.fetchData()},data(){return{pricingData:[],id:null,enabled:!0,name:null,image:null,title:null,options:{},loading:!1,data:[],deleteData:{api:"",dialog:!1,loading:!1,idSelected:null},commentData:{dialog:!1,loading:!1,idSelected:null}}},computed:{headers(){return[{text:"شماره",align:"start",class:"header-table-gray",sortable:!1,value:"id"},{text:"عنوان",align:"start",class:"header-table-gray",sortable:!1,value:"title"},{text:"عملیات",class:"header-table-gray",align:"center",value:"func"}]},PricingHeaders(){return[{text:"شماره",align:"start",class:"header-table-gray",sortable:!1,value:"id"},{text:"نام شخص",align:"start",class:"header-table-gray",sortable:!1,value:"full_name"},{text:"همراه",align:"start",class:"header-table-gray",sortable:!1,value:"phone_number"},{text:"زیر بنا",align:"start",class:"header-table-gray",sortable:!1,value:"total_infrastructure"},{text:"تعداد تیپ پلان",align:"start",class:"header-table-gray",sortable:!1,value:"brigade_plans_num"},{text:"واحد در هر تیپ",align:"start",class:"header-table-gray",sortable:!1,value:"units_brigade"},{text:"تعداد وجه نما",align:"start",class:"header-table-gray",sortable:!1,value:"facades_num"},{text:"محوطه و روف گاردن",align:"start",class:"header-table-gray",sortable:!1,value:"yard_and_roof_garden_meterage"},{text:"تعداد رندر",align:"start",class:"header-table-gray",sortable:!1,value:"render_num"},{text:"مساحت طراحی داخلی",align:"start",class:"header-table-gray",sortable:!1,value:"interior_design_area"},{text:"رندر طراحی داخلی",align:"start",class:"header-table-gray",sortable:!1,value:"interior_design_area"},{text:"مدت روز",align:"start",class:"header-table-gray",sortable:!1,value:"project_duration"},{text:"نتیجه",align:"end",class:"header-table-gray",sortable:!1,value:"final_result"},{text:"عملیات",align:"end",class:"header-table-gray",sortable:!1,value:"action"}]}},methods:{fetchData(){this.fetchCategories(),this.fetchPircing()},addCategory(){if(this.$refs.form.validate(),this.$refs.form.validate()){if(this.image.size>2097152)return void this.notify("حجم عکس بیشتر از 2 م.گ","error");if("image/jpeg"!==this.image.type&&"image/jpg"!==this.image.type&&"image/png"!==this.image.type)return void this.notify("فرمت غیر قابل پشتیبانی","error");let t=new FormData;t.append("title",this.title),this.image&&"object"===typeof this.image&&t.append("image",this.image),this.id=null,this.title=null,this.image=null,this.loading=!0,this.forceRerender(),g().post(this.$store.state.host+"/pricing/api/v1/create-pricing-type",t,{headers:{"Content-Type":"multipart/form-data",Accept:"*/*",Authorization:`Bearer ${this.$store.state.userId}`}}).then((()=>{this.notify("نوع محاسبه افزوده شد","info"),this.fetchCategories()})).catch((t=>{this.errorHandle(t.response)}))}},editCategory(){if(this.$refs.form.validate(),this.$refs.form.validate()){if(this.image.size>2097152)return void this.notify("حجم عکس بیشتر از 2 م.گ","error");if("image/jpeg"!==this.image.type&&"image/jpg"!==this.image.type&&"image/png"!==this.image.type)return void this.notify("فرمت غیر قابل پشتیبانی","error");let t=new FormData;t.append("title",this.title),this.image&&"object"===typeof this.image&&t.append("image",this.image);const e=this.id;this.id=null,this.title=null,this.image=null,this.loading=!0,this.forceRerender(),g().patch(this.$store.state.host+"/pricing/api/v1/update-pricing-type/"+e,t,{headers:{"Content-Type":"multipart/form-data",Accept:"*/*",Authorization:`Bearer ${this.$store.state.userId}`}}).then((()=>{this.notify("نوع محاسبه ویرایش شد","warning"),this.fetchCategories()})).catch((t=>{this.errorHandle(t.response)}))}},toEdit(t){this.id=t.id,this.title=t.title},cleanEdit(){this.id=null,this.image=null,this.title=null,this.forceRerender()},toDelete(t,e){this.deleteData.idSelected=t,this.deleteData.api=e,this.deleteData.dialog=!0},fetchCategories(){this.loading=!0,g().get(this.$store.state.host+"/pricing/api/v1/pricing-types",{params:this.options}).then((t=>{this.data=t.data.data,this.loading=!1})).catch((t=>{this.errorHandle(t.response)}))},fetchPircing(){g().get(this.$store.state.host+"/pricing/api/v1/pricings",{headers:{Authorization:`Bearer ${this.$store.state.userId}`}}).then((t=>{this.pricingData=t.data.data,this.loading=!1})).catch((t=>{this.errorHandle(t.response)}))}}},_=v,$=i(1656),A=(0,$.A)(_,u,c,!1,null,"78841fec",null),x=A.exports},9094:function(t,e,i){i.d(e,{A:function(){return m}});var a=i(375),s=i(1689),r=i(8834),l=i(4155),n=i(7410),o=function(){var t=this,e=t._self._c;return e(l.A,{attrs:{persistent:t.data.loading,"max-width":"290"},model:{value:t.data.dialog,callback:function(e){t.$set(t.data,"dialog",e)},expression:"data.dialog"}},[e(s.A,{staticClass:"pt-2 pr-3"},[e("h3",[t._v(" از حذف آیتم مورد نظر مطمئن هستید؟ ")]),e(r.OQ,[t._v("در صورت موافقت حذف می شود")]),e(r.SL,[e(n.A),e(a.A,{attrs:{color:"primary",text:"",disabled:t.data.loading},on:{click:function(e){t.data.dialog=!1}}},[t._v(" بستن ")]),e(a.A,{staticStyle:{"background-color":"darkred"},attrs:{color:"white",text:"",disabled:t.data.loading,loading:t.data.loading},on:{click:function(e){return t.deleteItem()}}},[t._v(" حذف کن ")])],1)],1)],1)},d=[],h=i(2505),u=i.n(h),c={name:"DeleteDialog",props:["ddata"],data(){return{data:this.ddata}},methods:{deleteItem(){this.data.loading=!0,u()["delete"](this.$store.state.host+this.data.api+this.data.idSelected,{headers:{Accept:"application/json",Authorization:`Bearer ${this.$store.state.userId}`}}).then((()=>{this.$store.state.notify.color="orange",this.$store.state.notify.is=!0,this.$store.state.notify.text="آیتم حذف شد",this.$emit("deleteFn")})).catch((t=>{this.errorHandle(t.response)})).finally((()=>{this.$emit("deleteFn"),this.data.loading=!1,this.data.dialog=!1}))}}},p=c,g=i(1656),f=(0,g.A)(p,o,d,!1,null,"3a544dbf",null),m=f.exports},8:function(t,e,i){i.d(e,{A:function(){return d}});i(8743);var a=i(3406),s=a.A,r=i(3882),l=i(6960),n=i(5604),o=i(4961),d=s.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:t=>"boolean"===typeof t||[1e3,1024].includes(t)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:t=>(0,l.BN)(t).every((t=>null!=t&&"object"===typeof t))}},computed:{classes(){return{...s.options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce(((t,{size:e=0})=>t+e),0);return this.$vuetify.lang.t(this.counterSizeString,t,(0,l.hA)(e,1024===this.base))},internalArrayValue(){return(0,l.BN)(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((t=>{const{name:e="",size:i=0}=t,a=this.truncateText(e);return this.showSize?`${a} (${(0,l.hA)(i,1024===this.base)})`:a})):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(t){!0===t&&(0,n.yA)("readonly is not supported on <v-file-input>",this)},immediate:!0},value(t){const e=this.multiple?t:t?[t]:[];(0,l.bD)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map(((t,e)=>this.$createElement(r.A,{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t]))):[]},genControl(){const t=s.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=(0,o.Zq)(t.data.style,{display:"none"})),t},genInput(){const t=s.options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",(()=>{this.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach(((e,i)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[i],file:e,index:i}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot(){const t=s.options.methods.genTextFieldSlot.call(this);return t.data.on={...t.data.on||{},click:t=>{t.target&&"LABEL"===t.target.nodeName||this.$refs.input.click()}},t},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){if(t.length<Number(this.truncateLength))return t;const e=Math.floor((Number(this.truncateLength)-1)/2);return`${t.slice(0,e)}…${t.slice(t.length-e)}`}}})},8230:function(t,e,i){i(8743);var a=i(3507),s=i(4765),r=i(8652);e.A=(0,a.A)(s.A,(0,r.G)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(a=>{a&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))})):i.valid=e(t),i},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const i=this.watchers.find((t=>t._uid===e._uid));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},7791:function(t,e,i){i.d(e,{l:function(){return a}});var a={data(){return{renderComponent:!0}},methods:{forceRerender(){this.renderComponent=!1,this.$nextTick((()=>{this.renderComponent=!0}))}}}}}]);
//# sourceMappingURL=1579.c1b1b21a.js.map