"use strict";(self["webpackChunkarch_main"]=self["webpackChunkarch_main"]||[]).push([[2122],{4757:function(t,e,s){s.d(e,{A:function(){return c}});var a=s(8834),i=function(){var t=this,e=t._self._c;return e(a.ri,{staticStyle:{"font-family":"'Shabnam FD' !important",color:"white","background-color":"#222e3c","font-size":"20px"}},[t._t("default")],2)},r=[],o={name:"a-card-title"},l=o,n=s(1656),d=(0,n.A)(l,i,r,!1,null,"84d88086",null),c=d.exports},3342:function(t,e,s){s.r(e),s.d(e,{default:function(){return O}});var a=s(375),i=s(1689),r=s(8834),o=s(3882),l=s(4287),n=s(8767),d=s(3507),c=(0,d.A)(l.Ql,n.A).extend({name:"v-chip-group",provide(){return{chipGroup:this}},props:{column:Boolean},computed:{classes(){return{...l.Ql.options.computed.classes.call(this),"v-chip-group":!0,"v-chip-group--column":this.column}}},watch:{column(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData(){return this.setTextColor(this.color,{...l.Ql.options.methods.genData.call(this)})}}}),u=s(1526),p=s(7405),h=s(4155),m=s(1770),f=s(8230),g=s(9456),_=s(8412),y=s(9555),k=s(7410),v=s(3406),b=function(){var t=this,e=t._self._c;return e(i.A,{staticStyle:{"background-color":"transparent"},attrs:{elevation:"0",disabled:t.loading}},[e(_.A,[e(u.A,{staticClass:"py-0",attrs:{cols:"12"}},[e(a.A,{staticClass:"dash-btns dash-btns--blue mb-2 mx-2",attrs:{height:"32",dark:""},on:{click:function(e){t.userAddDialog=!0}}},[e(g.A,{staticClass:"ml-1",attrs:{small:""}},[t._v("mdi-plus")]),t._v(" کاربر جدید ")],1)],1),e(u.A,{attrs:{md:"8",cols:"12"}},[e("BlockItem",[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("تیم")]),e("template",{slot:"icon"},[t._v("mdi-account-multiple")]),e(p.A,{attrs:{"hide-default-footer":"",headers:t.teamHeaders,loading:t.usersLoading,items:t.teamUsers.data,"item-key":"id","disable-sort":""},scopedSlots:t._u([{key:"item.user.username",fn:function({item:s}){return[e("a",{staticClass:"secondary--text",on:{click:function(e){return t.toSeeProfile(s.user.id)}}},[t._v(t._s(s.user.username))])]}},{key:"item.id",fn:function({item:s}){return[e("a-sbtn",{attrs:{color:"error",icon:"mdi-close",alt:"حذف از تیم"},on:{clickBtn:function(e){return t.DeleteTeamUser(s.id)}}})]}}],null,!0)})],2),e("BlockItem",[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("کاربران")]),e("template",{slot:"icon"},[t._v("mdi-account-multiple")]),e(p.A,{attrs:{"hide-default-footer":"",headers:t.headers,loading:t.usersLoading,items:t.users.data,"item-key":"id","disable-sort":""},scopedSlots:t._u([{key:"item.username",fn:function({item:s}){return[e("a",{staticClass:"secondary--text",on:{click:function(e){return t.toSeeProfile(s.id)}}},[t._v(t._s(s.username))])]}},{key:"item.name",fn:function({item:s}){return[t._v(" "+t._s(s.name)+" "),s.last_name?e("span",[t._v(" "+t._s(s.last_name)+" ")]):t._e()]}},{key:"item.role",fn:function({item:s}){return[s&&s.role&&s.role.title?e("span",[t._v(t._s(s.role.title))]):e("span",[t._v("کاربر عادی")])]}},{key:"item.id",fn:function({item:s}){return[e("div",{staticClass:"d-flex justify-center"},[e("a-sbtn",{attrs:{color:"#17a2b8",icon:"mdi-account-multiple-outline",alt:"افزودن به تیم"},on:{clickBtn:function(e){return t.AddTeamUser(s.id)}}}),t.$store.state.permissions&&t.$store.state.permissions["change-users"]?e("a-sbtn",{attrs:{color:"#1cbb8c",icon:"mdi-key-change",alt:"تغییر رمز"},on:{clickBtn:function(e){return t.toChangePass(s)}}}):t._e(),t.$store.state.permissions&&t.$store.state.permissions["change-users"]?e("a-sbtn",{attrs:{color:"#17a2b8",icon:"mdi-card-account-details",alt:"مشخصات کاربر"},on:{clickBtn:function(e){return t.toUpdateUser(s)}}}):t._e(),t.$store.state.permissions&&t.$store.state.permissions["delete-users"]?e("a-sbtn",{attrs:{color:"#DC3545",icon:"mdi-delete",alt:"حذف کردن"},on:{clickBtn:function(e){return t.toDelete(s.id,"/accounts/api/v1/user-remove/")}}}):t._e()],1)]}}],null,!0)})],2)],1),e(u.A,{attrs:{md:"4",cols:"12"}},[e("BlockItem",[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("نقش ها")]),e("template",{slot:"icon"},[t._v("mdi-account-key")]),t.$store.state.permissions&&t.$store.state.permissions["create-role"]?e("div",{staticClass:"d-flex align-center"},[e(f.A,{ref:"role",staticStyle:{width:"100%"}},[t.renderComponent?e(v.A,{staticClass:"px-2",attrs:{outlined:"",dense:"",color:"txtf","hide-details":"",rules:[t.$store.state.rules.required(t.roleTitle,"نقش")],loading:t.roleTitleLoading,disabled:t.roleTitleLoading},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.addRole.apply(null,arguments))}},model:{value:t.roleTitle,callback:function(e){t.roleTitle=e},expression:"roleTitle"}}):t._e()],1),e(a.A,{staticClass:"dash-btns dash-btns--sec",attrs:{dark:"",height:"40",loading:t.roleTitleLoading,disabled:t.roleTitleLoading},on:{click:function(e){return t.addRole()}}},[e(g.A,[t._v("mdi-plus")])],1)],1):t._e(),e(p.A,{attrs:{"hide-default-footer":"","items-per-page":100,headers:t.rolesHeaders,loading:t.rolesLoading,items:t.rolesData,"item-key":"id","disable-sort":""},scopedSlots:t._u([{key:"item.id",fn:function({item:s}){return[t.$store.state.permissions&&t.$store.state.permissions["change-permission"]?e("a-sbtn",{attrs:{color:"#1cbb8c",icon:"mdi-key-variant",alt:"تغییر دسترسی"},on:{clickBtn:function(e){return t.permsToRole(s)}}}):t._e(),t.$store.state.permissions&&t.$store.state.permissions["delete-role"]?e("a-sbtn",{attrs:{color:"#DC3545",icon:"mdi-delete",alt:"حذف کردن"},on:{clickBtn:function(e){return t.toRoleDelete(s.id,"/accounts/api/v1/remove-role/")}}}):t._e()]}}],null,!0)})],2)],1)],1),e(h.A,{attrs:{scrollable:"","max-width":"700px"},model:{value:t.permsToRoleDialog,callback:function(e){t.permsToRoleDialog=e},expression:"permsToRoleDialog"}},[t.permsToRoleDialog?e(i.A,[e("a-card-title",[t._v("دسترسی "+t._s(t.permsToRoleTitle))]),e(m.A),e(r.OQ,{staticStyle:{height:"300px"}},[e(c,{attrs:{column:"",multiple:"","active-class":"info--text"},model:{value:t.permsToRoleSelected,callback:function(e){t.permsToRoleSelected=e},expression:"permsToRoleSelected"}},[e(_.A,{staticClass:"px-4 py-6"},[e(u.A,{staticClass:"pb-0",attrs:{cols:"12"}},[e(v.A,{attrs:{dense:"",color:"txtf",label:"عنوان نقش",outlined:""},model:{value:t.permsToRoleTitle,callback:function(e){t.permsToRoleTitle=e},expression:"permsToRoleTitle"}})],1),t._l(t.permissions,(function(s,a){return e(u.A,{key:a+"perms",staticClass:"pa-1 pt-0",attrs:{md:"4",cols:"12"}},[e(o.A,{staticStyle:{width:"100%"},attrs:{small:"",filter:"",color:"grey",value:s.id,outlined:""}},[t._v(" "+t._s(s.title)+" ")])],1)}))],2)],1)],1),e(m.A),e(r.SL,[e(k.A),e(a.A,{attrs:{dark:"",color:"#222e3c"},on:{click:function(e){return t.updateRole()}}},[t._v(" تایید ")])],1)],1):t._e()],1),e(h.A,{attrs:{width:"500",persistent:t.userEditLoading},model:{value:t.userAddDialog,callback:function(e){t.userAddDialog=e},expression:"userAddDialog"}},[t.userAddDialog?e(i.A,[e("a-card-title",[t._v("ایجاد کاربر")]),e(r.OQ,{staticClass:"pt-6"},[e(f.A,{ref:"form"},[e(_.A,{staticClass:"pa-0 py-6"},[e(u.A,{staticClass:"py-0",attrs:{cols:"12",md:"6"}},[e(v.A,{attrs:{type:"text",outlined:"",color:"txtf",dense:"",disabled:t.userEditLoading,"error-messages":t.emailErrors,loading:t.userEditLoading,label:"ایمیل",placeholder:"مثال : fatika@gmail.com","background-color":"rgba(0,0,0,.05)"},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signup()},input:function(e){return t.$v.email.$touch()},blur:function(e){return t.$v.email.$touch()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),e(u.A,{staticClass:"py-0",attrs:{cols:"12",md:"6"}},[e(v.A,{attrs:{type:"text",outlined:"",color:"txtf",dense:"",disabled:t.userEditLoading,loading:t.userEditLoading,rules:[t.usernameRules.pattern],"error-messages":t.usernameErrors,label:"نام کاربری","background-color":"rgba(0,0,0,.05)"},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signup()},input:function(e){return t.$v.username.$touch()},blur:function(e){return t.$v.username.$touch()}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),e(u.A,{staticClass:"py-0",attrs:{cols:"12",md:"6"}},[e(v.A,{attrs:{outlined:"",color:"txtf",dense:"",disabled:t.userEditLoading,loading:t.userEditLoading,"error-messages":t.passErrors,type:t.passshow?"text":"password",label:"کلمه عبور","background-color":"rgba(0,0,0,.05)"},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signup()},input:function(e){return t.$v.password.$touch()},blur:function(e){return t.$v.password.$touch()}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),e(u.A,{staticClass:"py-0",attrs:{cols:"12",md:"6"}},[e(v.A,{attrs:{outlined:"",color:"txtf",dense:"",disabled:t.userEditLoading,loading:t.userEditLoading,"error-messages":t.samepassErrors,type:t.passshow2?"text":"password",label:"تکرار کلمه عبور","background-color":"rgba(0,0,0,.05)"},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signup()},input:function(e){return t.$v.repeatPassword.$touch()},blur:function(e){return t.$v.repeatPassword.$touch()}},model:{value:t.repeatPassword,callback:function(e){t.repeatPassword=e},expression:"repeatPassword"}})],1)],1)],1)],1),e(m.A),e(r.SL,[e(k.A),e(a.A,{attrs:{color:"#222e3c",dark:"",disabled:t.userEditLoading,loading:t.userEditLoading},on:{click:function(e){return t.signup()}}},[t._v(" ایجاد کردن ")])],1)],1):t._e()],1),e(h.A,{attrs:{width:"500",persistent:t.userEditLoading},model:{value:t.userUpdateDialog,callback:function(e){t.userUpdateDialog=e},expression:"userUpdateDialog"}},[t.userUpdateDialog?e(i.A,[e("a-card-title",[t._v("ویرایش کاربر")]),e(r.OQ,{staticClass:"pt-6"},[e(f.A,{ref:"form"},[e(_.A,{staticClass:"pa-0 py-6"},[e(u.A,{staticClass:"py-0",attrs:{cols:"12",md:"6"}},[e(v.A,{attrs:{type:"text",outlined:"","item-color":"txtf",dense:"",color:"txtf",disabled:t.userEditLoading,"error-messages":t.emailErrors,loading:t.userEditLoading,label:"ایمیل",placeholder:"مثال : fatika@gmail.com","background-color":"rgba(0,0,0,.05)"},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateUser()},input:function(e){return t.$v.email.$touch()},blur:function(e){return t.$v.email.$touch()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),e(u.A,{staticClass:"py-0",attrs:{cols:"12",md:"6"}},[e(v.A,{attrs:{type:"text",outlined:"","item-color":"txtf",dense:"",color:"txtf",disabled:t.userEditLoading,loading:t.userEditLoading,rules:[t.usernameRules.pattern],"error-messages":t.usernameErrors,label:"نام کاربری","background-color":"rgba(0,0,0,.05)"},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateUser()},input:function(e){return t.$v.username.$touch()},blur:function(e){return t.$v.username.$touch()}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),e(u.A,{staticClass:"py-0",attrs:{cols:"12",md:"6"}},[e(v.A,{attrs:{type:"text",outlined:"","item-color":"txtf",dense:"",color:"txtf",disabled:t.userEditLoading,loading:t.userEditLoading,label:"نام","background-color":"rgba(0,0,0,.05)"},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateUser()}},model:{value:t.first_name,callback:function(e){t.first_name=e},expression:"first_name"}})],1),e(u.A,{staticClass:"py-0",attrs:{cols:"12",md:"6"}},[e(v.A,{attrs:{type:"text",outlined:"","item-color":"txtf",dense:"",color:"txtf",disabled:t.userEditLoading,loading:t.userEditLoading,label:"نام خانوادگی","background-color":"rgba(0,0,0,.05)"},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateUser()}},model:{value:t.last_name,callback:function(e){t.last_name=e},expression:"last_name"}})],1),e(u.A,{staticClass:"py-0",attrs:{cols:"12",md:"6"}},[e(y.A,{attrs:{type:"text",outlined:"","item-color":"txtf",dense:"",color:"txtf",items:t.rolesData,"item-text":"title","item-value":"id",disabled:t.userEditLoading,loading:t.userEditLoading,label:"نقش کاربر","background-color":"rgba(0,0,0,.05)"},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateUser()}},model:{value:t.role,callback:function(e){t.role=e},expression:"role"}})],1)],1)],1)],1),e(m.A),e(r.SL,[e(k.A),e(a.A,{staticClass:"dash-btns",attrs:{height:"32",dark:"",color:"#222e3c",disabled:t.userEditLoading,loading:t.userEditLoading},on:{click:function(e){return t.updateUser()}}},[t._v(" ویرایش کردن ")])],1)],1):t._e()],1),e("DeleteDialog",{attrs:{ddata:t.deleteData},on:{deleteFn:function(e){return t.fetchTable()}}}),e("DeleteDialog",{attrs:{ddata:t.roleDeleteData},on:{deleteFn:function(e){return t.fetchRoles()}}}),e(h.A,{attrs:{width:"500",persistent:t.userEditLoading},model:{value:t.changepassDialog,callback:function(e){t.changepassDialog=e},expression:"changepassDialog"}},[t.changepassDialog?e(i.A,{staticClass:"pass-form"},[e("a-card-title",[t._v(" تغییر رمز عبور "+t._s(t.changepassTitle))]),e(r.OQ,{staticClass:"pt-6"},[e(f.A,{ref:"form"},[e(_.A,{staticClass:"pa-0 py-6"},[e(u.A,{staticClass:"py-0",attrs:{cols:"12",md:"12"}},[e(v.A,{attrs:{"background-color":"white",label:"کلمه عبور قبلی",disabled:t.userEditLoading,loading:t.userEditLoading,type:"password",outlined:"",color:"txtf",dense:""},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updatePass()}},model:{value:t.old_password,callback:function(e){t.old_password=e},expression:"old_password"}})],1),e(u.A,{staticClass:"py-0",attrs:{cols:"12",md:"12"}},[e(v.A,{attrs:{"background-color":"white",label:"کلمه عبور جدید",disabled:t.userEditLoading,loading:t.userEditLoading,"error-messages":t.passErrors,type:t.passshow?"text":"password",outlined:"",color:"txtf",dense:""},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updatePass()},input:function(e){return t.$v.password.$touch()},blur:function(e){return t.$v.password.$touch()}},scopedSlots:t._u([{key:"append",fn:function(){return[t.passshow?e(a.A,{attrs:{icon:""},on:{click:function(e){t.passshow=!t.passshow}}},[e(g.A,[t._v("mdi-eye-off-outline")])],1):e(a.A,{attrs:{icon:""},on:{click:function(e){t.passshow=!t.passshow}}},[e(g.A,[t._v("mdi-eye-outline")])],1)]},proxy:!0}],null,!1,631226382),model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),e(u.A,{staticClass:"py-0",attrs:{cols:"12",md:"12"}},[e(v.A,{attrs:{"background-color":"white",label:"تکرار کلمه عبور جدید","error-messages":t.samepassErrors,type:t.passshow2?"text":"password",disabled:t.userEditLoading,loading:t.userEditLoading,outlined:"",color:"txtf",dense:""},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updatePass()},input:function(e){return t.$v.repeatPassword.$touch()},blur:function(e){return t.$v.repeatPassword.$touch()}},scopedSlots:t._u([{key:"append",fn:function(){return[t.passshow2?e(a.A,{attrs:{icon:""},on:{click:function(e){t.passshow2=!t.passshow2}}},[e(g.A,[t._v("mdi-eye-off-outline")])],1):e(a.A,{attrs:{icon:""},on:{click:function(e){t.passshow2=!t.passshow2}}},[e(g.A,[t._v("mdi-eye-outline")])],1)]},proxy:!0}],null,!1,1243594748),model:{value:t.repeatPassword,callback:function(e){t.repeatPassword=e},expression:"repeatPassword"}})],1)],1)],1)],1),e(m.A),e(r.SL,[e(k.A),e(a.A,{staticClass:"dash-btns",attrs:{color:"#222e3c",dark:"",loading:t.userEditLoading},on:{click:function(e){return t.updatePass()}}},[t._v(" تغییر رمز ")])],1)],1):t._e()],1),e(h.A,{attrs:{width:"500",persistent:t.userEditLoading},model:{value:t.teamDataDialog,callback:function(e){t.teamDataDialog=e},expression:"teamDataDialog"}},[t.teamDataDialog?e(i.A,{staticClass:"pass-form"},[e("a-card-title",[t._v("افزودن به تیم")]),e(r.OQ,{staticClass:"pt-6"},[e(f.A,{ref:"form"},[e(_.A,{staticClass:"pa-0 py-6"},[e(u.A,{staticClass:"py-0",attrs:{cols:"12",md:"12"}},[e(v.A,{attrs:{"background-color":"white",label:"سمت",disabled:t.userEditLoading,loading:t.userEditLoading,outlined:"",color:"txtf",dense:""},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addToTeam()}},model:{value:t.addTeamData.post,callback:function(e){t.$set(t.addTeamData,"post",e)},expression:"addTeamData.post"}})],1),e(u.A,{staticClass:"py-0",attrs:{cols:"12",md:"12"}},[e(v.A,{attrs:{"background-color":"white",label:"توضیحات",disabled:t.userEditLoading,loading:t.userEditLoading,outlined:"",color:"txtf",dense:""},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addToTeam()}},model:{value:t.addTeamData.desc,callback:function(e){t.$set(t.addTeamData,"desc",e)},expression:"addTeamData.desc"}})],1)],1)],1)],1),e(m.A),e(r.SL,[e(k.A),e(a.A,{staticClass:"dash-btns",attrs:{color:"#222e3c",dark:"",loading:t.userEditLoading},on:{click:function(e){return t.addToTeam()}}},[t._v(" افزودن به تیم ")])],1)],1):t._e()],1),e("ProfileDialog",{attrs:{ddata:t.profileData}})],1)},A=[],$=(s(8743),s(7427)),x=s(2505),w=s.n(x),D=s(1380),C=s(3278),T=s(9094),L=s(7791),E=s(4687),S=s(4757),R=s(472),P={created(){this.usersLoading=!0,this.rolesLoading=!0,this.fetchTable(),this.fetchTeamTable(),this.fetchRoles(),this.fetchPermissions()},mixins:[D.Hy,L.l],name:"UsersApp",data(){return{profileData:{dialog:!1,idSelected:null},changepassDialog:!1,changepassTitle:null,changepassId:null,old_password:null,roleTitleLoading:!1,roleTitle:null,usersLoading:!1,rolesLoading:!1,permsToRoleDialog:!1,permtoroleLoading:!1,permsToRoleSelected:[],permsToRoleId:null,permsToRoleTitle:null,permissions:[],permissionsModel:null,userAddDialog:!1,userEditLoading:!1,username:null,password:null,email:null,repeatPassword:null,loading:!1,data:null,usernameRules:{pattern:t=>{const e=/^(?=.{6,20}$)(?![_.0-9])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;return e.test(t)||"نام کاربری باید حاوی حروف مجاز و حداقل 6 کاراکتر باشد"}},passshow:!1,passshow2:!1,role:null,userUpdateDialog:!1,first_name:null,last_name:null,userItem:null,deleteData:{api:"",dialog:!1,loading:!1,idSelected:null},roleDeleteData:{api:"",dialog:!1,loading:!1,idSelected:null},users:{data:[]},teamUsers:{data:[]},teamDataDialog:!1,addTeamData:{post:null,desc:null,id:null},rolesData:[]}},components:{ProfileDialog:R.A,ACardTitle:S.A,ASbtn:E.A,DeleteDialog:T.A,BlockItem:$.A},validations:{password:{required:C.mw,minLength:(0,C.Bp)(6)},repeatPassword:{sameAsPassword:(0,C.f4)("password")},username:{required:C.mw},role:{required:C.mw},email:{required:C.mw,email:C.Rp}},watch:{userAddDialog(t){t||(this.username=null,this.password=null,this.email=null,this.repeatPassword=null,this.first_name=null,this.last_name=null,this.role=null)},userUpdateDialog(t){t||(this.username=null,this.password=null,this.email=null,this.repeatPassword=null,this.first_name=null,this.last_name=null,this.role=null)}},methods:{toSeeProfile(t){this.profileData.idSelected=t,this.profileData.dialog=!0},addToTeam(){this.usersLoading=!0,this.loading=!0,this.teamDataDialog=!1,w().post(this.$store.state.host+"/accounts/api/v1/add-my-team/"+this.addTeamData.id,{post:this.addTeamData.post,desc:this.addTeamData.desc},{headers:{Accept:"application/json",Authorization:`Bearer ${this.$store.state.userId}`}}).then((()=>{this.notify("اضافه شد","info"),this.addTeamData.post=null,this.addTeamData.desc=null,this.fetchTeamTable()})).catch((t=>{this.errorHandle(t.response)})).finally((()=>{this.usersLoading=!1,this.loading=!1}))},DeleteTeamUser(t){this.usersLoading=!0,this.loading=!0,w()["delete"](this.$store.state.host+"/accounts/api/v1/remove-my-team/"+t,{headers:{Accept:"application/json",Authorization:`Bearer ${this.$store.state.userId}`}}).then((()=>{this.notify("حذف شد","info"),this.fetchTeamTable()})).catch((t=>{this.errorHandle(t.response)})).finally((()=>{this.usersLoading=!1,this.loading=!1}))},AddTeamUser(t){this.addTeamData.id=t,this.teamDataDialog=!0},toChangePass(t){this.changepassId=t.id,this.changepassTitle=t.username,this.changepassDialog=!0},updatePass(){this.$v.$touch(),this.$v.password.minLength&&this.$v.password.required&&this.$v.repeatPassword.sameAsPassword&&(this.userEditLoading=!0,w().patch(this.$store.state.api+"user-change-password/"+this.changepassId,{old_password:this.old_password,new_password:this.password},{headers:{Accept:"application/json",Authorization:`Bearer ${this.$store.state.userId}`}}).then((()=>{this.$store.state.notify.color="orange",this.$store.state.notify.is=!0,this.$store.state.notify.text="رمز تغییر یافت",this.password=null,this.old_password=null,this.repeatPassword=null})).catch((t=>{this.errorHandle(t.response)})).finally((()=>{this.changepassDialog=!1,this.userEditLoading=!1})))},addRole(){if(this.$refs.role.validate(),this.$refs.role.validate()){this.roleTitleLoading=!0;const t=this.roleTitle;this.roleTitle=null,w().post(this.$store.state.api+"add-role/",{title:t,permissions:[]},{headers:{Accept:"application/json",Authorization:`Bearer ${this.$store.state.userId}`}}).then((()=>{this.forceRerender(),this.fetchRoles()})).finally((()=>{this.roleTitleLoading=!1})).catch((t=>{this.errorHandle(t.response)}))}},updateUser(){this.$v.$touch(),this.$v.username.required&&this.$v.email.required&&this.$v.email.email&&this.usernameValidate&&(this.userEditLoading=!0,w().patch(this.$store.state.api+"user-update/"+this.userItem,{role:this.role,username:this.username,email:this.email,first_name:this.first_name,last_name:this.last_name},{headers:{Accept:"application/json",Authorization:`Bearer ${this.$store.state.userId}`}}).then((()=>{this.$store.state.notify.color="orange",this.$store.state.notify.is=!0,this.$store.state.notify.text="ویرایش انجام شد.",this.userUpdateDialog=!1,this.fetchTable()})).finally((()=>{this.userEditLoading=!1})).catch((t=>{this.errorHandle(t.response)})))},signup(){this.$v.$touch(),this.$v.username.required&&this.$v.email.required&&this.$v.email.email&&this.usernameValidate&&this.$v.password.minLength&&this.$v.password.required&&this.$v.repeatPassword.sameAsPassword&&(this.userEditLoading=!0,w().post(this.$store.state.api+"register/",{username:this.username,email:this.email,password:this.password}).then((()=>{this.$store.state.notify.color="success",this.$store.state.notify.is=!0,this.$store.state.notify.text="ثبت نام انجام شد.",this.userAddDialog=!1,this.fetchTable()})).finally((()=>{this.userEditLoading=!1})).catch((t=>{this.errorHandle(t.response)})))},toUpdateUser(t){this.userItem=t.id,this.email=t.email,this.username=t.username,t.role&&(this.role=t.role.id),this.first_name=t.first_name,this.last_name=t.last_name,this.userUpdateDialog=!0},toDelete(t,e){this.deleteData.idSelected=t,this.deleteData.api=e,this.deleteData.dialog=!0},toRoleDelete(t,e){this.roleDeleteData.idSelected=t,this.roleDeleteData.api=e,this.roleDeleteData.dialog=!0},updateRole(){this.permtoroleLoading=!0,w().put(this.$store.state.api+"update-role/"+this.permsToRoleId,{title:this.permsToRoleTitle,permissions:this.permsToRoleSelected},{headers:{Accept:"application/json",Authorization:`Bearer ${this.$store.state.userId}`}}).then((()=>{this.fetchRoles()})).finally((()=>{this.permtoroleLoading=!1,this.permsToRoleDialog=!1})).catch((t=>{this.errorHandle(t.response)}))},permsToRole(t){this.permsToRoleId=t.id,this.permsToRoleTitle=t.title,this.permsToRoleDialog=!0,this.permsToRoleSelected=[];for(let e in t.permissions)this.permsToRoleSelected[e]=t.permissions[e].toString()},fetchPermissions(){this.permtoroleLoading=!0,w().get(this.$store.state.api+"permissions/",{headers:{Accept:"application/json",Authorization:`Bearer ${this.$store.state.userId}`}}).then((t=>{this.permissions=t.data.data})).finally((()=>{this.permtoroleLoading=!1})).catch((t=>{this.errorHandle(t.response)}))},fetchTable(){this.usersLoading=!0,this.loading=!0,w().get(this.$store.state.api+"users/",{headers:{Accept:"application/json",Authorization:`Bearer ${this.$store.state.userId}`}}).then((t=>{this.users=t.data})).catch((t=>{this.errorHandle(t.response)})).finally((()=>{this.usersLoading=!1,this.loading=!1}))},fetchTeamTable(){this.usersLoading=!0,this.loading=!0,w().get(this.$store.state.host+"/accounts/api/v1/my-team/",{headers:{Accept:"application/json",Authorization:`Bearer ${this.$store.state.userId}`}}).then((t=>{this.teamUsers=t.data})).catch((t=>{this.errorHandle(t.response)})).finally((()=>{this.usersLoading=!1,this.loading=!1}))},fetchRoles(){this.rolesLoading=!0,w().get(this.$store.state.api+"roles/",{headers:{Accept:"application/json",Authorization:`Bearer ${this.$store.state.userId}`}}).then((t=>{this.rolesData=t.data.data})).catch((t=>{this.errorHandle(t.response)})).finally((()=>{this.rolesLoading=!1}))}},computed:{usernameValidate(){return!0===this.usernameRules.pattern(this.username)},passErrors(){const t=[];return this.$v.password.$dirty?(!this.$v.password.minLength&&t.push("پسورد باید دارای حداقل 6 کاراکتر باشد"),!this.$v.password.required&&t.push("پسورد را وارد کنید"),t):t},samepassErrors(){const t=[];return this.$v.repeatPassword.$dirty?(!this.$v.repeatPassword.sameAsPassword&&t.push("تکرار پسورد همخوانی ندارد"),t):t},usernameErrors(){const t=[];return this.$v.username.$dirty?(!this.$v.username.required&&t.push("نام کاربری را وارد کنید"),t):t},emailErrors(){const t=[];return this.$v.email.$dirty?(!this.$v.email.email&&t.push("ایمیل را به شکل صحیح وارد کنید"),!this.$v.email.required&&t.push("ایمیل را وارد کنید"),t):t},teamHeaders(){return[{text:"نام کاربری",align:"start",class:"header-table-gray",sortable:!1,value:"user.username"},{text:"مسئولیت",class:"header-table-gray",align:"center",value:"post"},{text:"توضیحات",class:"header-table-gray",align:"center",value:"desc"},{text:"عملیات",class:"header-table-gray",align:"center",value:"id"}]},headers(){return[{text:"نام کاربری",align:"start",class:"header-table-gray",sortable:!1,value:"username"},{text:"نقش",class:"header-table-gray",align:"center",value:"role"},{text:"ایمیل",class:"header-table-gray",align:"center",value:"email"},{text:"عملیات",class:"header-table-gray",align:"center",value:"id"}]},rolesHeaders(){return[{text:"نام نقش",align:"start",class:"header-table-gray",sortable:!1,value:"title"},{text:"عملیات",class:"header-table-gray",align:"center",value:"id"}]}}},I=P,B=s(1656),U=(0,B.A)(I,b,A,!1,null,null,null),O=U.exports},9094:function(t,e,s){s.d(e,{A:function(){return g}});var a=s(375),i=s(1689),r=s(8834),o=s(4155),l=s(7410),n=function(){var t=this,e=t._self._c;return e(o.A,{attrs:{persistent:t.data.loading,"max-width":"290"},model:{value:t.data.dialog,callback:function(e){t.$set(t.data,"dialog",e)},expression:"data.dialog"}},[e(i.A,{staticClass:"pt-2 pr-3"},[e("h3",[t._v(" از حذف آیتم مورد نظر مطمئن هستید؟ ")]),e(r.OQ,[t._v("در صورت موافقت حذف می شود")]),e(r.SL,[e(l.A),e(a.A,{attrs:{color:"primary",text:"",disabled:t.data.loading},on:{click:function(e){t.data.dialog=!1}}},[t._v(" بستن ")]),e(a.A,{staticStyle:{"background-color":"darkred"},attrs:{color:"white",text:"",disabled:t.data.loading,loading:t.data.loading},on:{click:function(e){return t.deleteItem()}}},[t._v(" حذف کن ")])],1)],1)],1)},d=[],c=s(2505),u=s.n(c),p={name:"DeleteDialog",props:["ddata"],data(){return{data:this.ddata}},methods:{deleteItem(){this.data.loading=!0,u()["delete"](this.$store.state.host+this.data.api+this.data.idSelected,{headers:{Accept:"application/json",Authorization:`Bearer ${this.$store.state.userId}`}}).then((()=>{this.$store.state.notify.color="orange",this.$store.state.notify.is=!0,this.$store.state.notify.text="آیتم حذف شد",this.$emit("deleteFn")})).catch((t=>{this.errorHandle(t.response)})).finally((()=>{this.$emit("deleteFn"),this.data.loading=!1,this.data.dialog=!1}))}}},h=p,m=s(1656),f=(0,m.A)(h,n,d,!1,null,"3a544dbf",null),g=f.exports},472:function(t,e,s){s.d(e,{A:function(){return C}});var a=s(6074),i=s(1689),r=s(8834),o=s(1526),l=s(4155),n=s(9456),d=s(6016),c=s(8412),u=s(488),p=s(5443),h=s(4624),m=s(5502),f=s(2540),g=s(4794),_=function(){var t=this,e=t._self._c;return e(l.A,{attrs:{persistent:t.data.loading,"max-width":"760px"},model:{value:t.data.dialog,callback:function(e){t.$set(t.data,"dialog",e)},expression:"data.dialog"}},[e(i.A,{attrs:{elevation:"0",disabled:t.loading,loading:t.loading},scopedSlots:t._u([{key:"progress",fn:function(){return[e("GDLoading")]},proxy:!0}])},[e(r.OQ,[e(c.A,{staticClass:"py-3"},[e(o.A,{attrs:{cols:"12",md:"3"}},[e(a.A,{staticClass:"mb-2 mt-3 d-block mx-auto",attrs:{color:t.color,size:"128"}},[t.item.avatar?e("img",{attrs:{alt:"Avatar",src:t.item.avatar}}):t.item.avatar||t.loading?e(u.A,{attrs:{width:"100%",type:"card"}}):e("img",{staticStyle:{"object-fit":"cover"},attrs:{alt:"Avatar",src:s(8984)}})],1),t.item.first_name&&t.item.last_name?e("p",{staticClass:"profile-card-title mb-0 pa-0 text-center"},[t._v(t._s(t.item.first_name)+" "+t._s(t.item.last_name))]):t.item.username?e("p",{staticClass:"profile-card-title mb-0 pa-0 text-center"},[t._v(t._s(t.item.username))]):t._e(),t.item.nick_name?e("p",{staticClass:"mb-0 text-center"},[e("strong",[t._v("("+t._s(t.item.nick_name)+")")])]):t._e(),t.item.role&&t.item.role.title?e("p",{staticClass:"text-muted mb-2 text-center"},[t._v(t._s(t.item.role.title))]):t._e(),e("div",{staticClass:"d-flex justify-center align-center mb-3"},[t.item.email?e(g.A,{attrs:{bottom:"",color:"black"},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e("a",t._g(t._b({staticClass:"mx-1",attrs:{href:"mailto: "+t.item.email,target:"_blank"}},"a",a,!1),s),[e(n.A,{attrs:{color:t.color}},[t._v("mdi-email")])],1)]}}],null,!1,3773755384)},[t._v(" ایمیل ")]):t._e(),t.item.website_link?e(g.A,{attrs:{bottom:"",color:"black"},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e("a",t._g(t._b({staticClass:"mx-1",attrs:{href:"https://"+t.item.website_link,target:"_blank"}},"a",a,!1),s),[e(n.A,{attrs:{color:t.color}},[t._v("mdi-web")])],1)]}}],null,!1,2388715989)},[t._v(" وب سایت ")]):t._e(),t.item.linkedin_link?e(g.A,{attrs:{bottom:"",color:"black"},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e("a",t._g(t._b({staticClass:"mx-1",attrs:{href:"https://instagram.com/"+t.item.linkedin_link,target:"_blank"}},"a",a,!1),s),[e(n.A,{attrs:{color:t.color}},[t._v("mdi-instagram")])],1)]}}],null,!1,3546935896)},[t._v(" اینستاگرام ")]):t._e(),t.item.tel_link?e(g.A,{attrs:{bottom:"",color:"black"},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e("a",t._g(t._b({staticClass:"mx-1",attrs:{href:"https://t.me/"+t.item.tel_link,target:"_blank"}},"a",a,!1),s),[e(n.A,{staticStyle:{transform:"rotate(-45deg)"},attrs:{color:t.color}},[t._v("mdi-send-circle")])],1)]}}],null,!1,1983325734)},[t._v(" تلگرام ")]):t._e()],1),t.item.bio?e("p",{staticClass:"my-3"},[t._v(t._s(t.item.bio))]):t._e()],1),e(o.A,{staticClass:"py-3",attrs:{cols:"12",md:"9"}},[e(m.A,{attrs:{"slider-color":t.color,"icons-and-text":"","show-arrows":"","background-color":"transparent",color:t.color,grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(s,a){return e(p.A,{key:a+"pItmesg"},[t._v(" "+t._s(s.text)+" "),e(n.A,[t._v(t._s(s.icon))])],1)})),1),e(f.A,{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(s,a){return e(h.A,{key:a+"titemsss"},[e(i.A,{attrs:{flat:"",elevation:"0"}},[e("div",{staticStyle:{padding:"16px 4px"}},[0===a?e("div",[e("div",{staticClass:"profile-case-item"},t._l(t.skills,(function(s,a){return e("p",{key:a+"sskills",staticClass:"secondary--text"},[e(n.A,{staticClass:"ml-1",attrs:{color:t.color,small:""}},[t._v("mdi-school-outline")]),t._v(" "+t._s(s.title))],1)})),0)]):t._e(),1===a?e("div",[e("div",{staticClass:"profile-case-item"},t._l(t.honors,(function(s,a){return e("p",{key:a+"hhonors",staticClass:"secondary--text"},[e(n.A,{staticClass:"ml-1",attrs:{color:t.color,small:""}},[t._v("mdi-star-outline")]),t._v(" "+t._s(s.title))],1)})),0)]):t._e(),2===a?e("div",[t._l(t.certificates.data,(function(s,a){return e("div",{key:a+"scertsifist",staticClass:"certifi-group mb-6 mt-2"},[e("p",{staticClass:"my-3"},[e(n.A,{attrs:{small:""}},[t._v("mdi-certificate")]),t._v(" گواهی "),e("strong",[t._v(t._s(a+1)+" :")])],1),e(c.A,{staticClass:"py-3"},[s.title?e(o.A,{staticClass:"py-1",attrs:{cols:"12",md:"4"}},[e("div",{staticClass:"certifi-item"},[t._v(" عنوان : "),e("strong",[t._v(t._s(s.title))])])]):t._e(),s.reference?e(o.A,{staticClass:"py-1",attrs:{cols:"12",md:"4"}},[e("div",{staticClass:"certifi-item"},[t._v(" مرجع : "),e("strong",[t._v(t._s(s.reference))])])]):t._e(),s.state?e(o.A,{staticClass:"py-1",attrs:{cols:"12",md:"4"}},[e("div",{staticClass:"certifi-item"},[t._v(" وضعیت : "),e("strong",[t._v(t._s(s.state))])])]):t._e(),s.grade?e(o.A,{staticClass:"py-1",attrs:{cols:"12",md:"4"}},[e("div",{staticClass:"certifi-item"},[t._v(" سطح : "),e("strong",[t._v(t._s(s.grade))])])]):t._e(),s.lic_number?e(o.A,{staticClass:"py-1",attrs:{cols:"12",md:"4"}},[e("div",{staticClass:"certifi-item"},[t._v(" شماره گواهی : "),e("strong",[t._v(t._s(s.lic_number))])])]):t._e(),s.lic_file?e(o.A,{staticClass:"py-1",attrs:{cols:"12",md:"4"}},[e("div",{staticClass:"certifi-item"},[t._v(" فایل گواهی : "),e("strong",[e("a",{staticClass:"txtf--text",attrs:{href:t.$store.state.host+s.lic_file,target:"_blank"}},[t._v(t._s(s.lic_file.substring(s.lic_file.lastIndexOf("/")+1)))])])])]):t._e()],1)],1)})),t.certificates.total_objects?e(d.A,{staticClass:"mt-6",attrs:{value:t.options.page,color:"info",length:parseInt(t.certificates.total_pages)},model:{value:t.options.page,callback:function(e){t.$set(t.options,"page",e)},expression:"options.page"}}):t._e(),t.certificates.total_objects?e("p",{staticClass:"text-center mb-2 mt-2 info--text",staticStyle:{"font-size":"14px"}},[t._v(" "+t._s(t.certificates.total_objects)+" گواهی")]):t._e()],2):t._e()])])],1)})),1)],1)],1)],1)],1)],1)},y=[],k=s(620),v=s(2505),b=s.n(v),A=s(6570),$={name:"ProfileDialog",components:{GDLoading:A.A},props:{ddata:null,color:{default:"info"}},mixins:[k.O],data(){return{certificates:[],options:{page:1},skills:[],honors:[],tab:null,items:[{text:"مهارت ها",icon:"mdi-school"},{text:"افتخارات",icon:"mdi-medal"},{text:"گواهی ها",icon:"mdi-certificate"}],item:{avatar:null},data:this.ddata,loading:!1}},watch:{"options.page"(){this.fetchCertificates()},"data.dialog"(t){t?(this.fetchProfile(),this.fetchSkillData(),this.fetchHonorData(),this.fetchCertificates()):(this.item={avatar:null},this.skills=[],this.honors=[],this.certificates=[])}},methods:{fetchProfile(){this.loading=!0,b().get(this.$store.state.host+"/accounts/api/v1/another-user/"+this.data.idSelected,{headers:{Accept:"application/json",Authorization:`Bearer ${this.$store.state.userId}`}}).then((t=>{this.item=t.data.data,console.log(this.item)})).catch((t=>{this.errorHandle(t.response)})).finally((()=>{this.loading=!1}))},fetchSkillData(){this.loading=!0,b().get(this.$store.state.host+"/accounts/api/v1/skills/another-user-skills/"+this.data.idSelected,{headers:{Authorization:`Bearer ${this.$store.state.userId}`}}).then((t=>{this.skills=t.data.data})).catch((t=>{this.errorHandle(t.response)})).finally((()=>{this.loading=!1}))},fetchHonorData(){this.loading=!0,b().get(this.$store.state.host+"/accounts/api/v1/skills/another-user-honors/"+this.data.idSelected,{headers:{Authorization:`Bearer ${this.$store.state.userId}`}}).then((t=>{this.honors=t.data.data})).catch((t=>{this.errorHandle(t.response)})).finally((()=>{this.loading=!1}))},fetchCertificates(){this.loading=!0,b().get(this.$store.state.host+"/accounts/api/v1/another-user-certificates/"+this.data.idSelected,{params:this.options,headers:{Authorization:`Bearer ${this.$store.state.userId}`}}).then((t=>{this.certificates=t.data})).catch((t=>{this.errorHandle(t.response)})).finally((()=>{this.loading=!1}))}}},x=$,w=s(1656),D=(0,w.A)(x,_,y,!1,null,"4393296a",null),C=D.exports}}]);
//# sourceMappingURL=2122.10e806c0.js.map