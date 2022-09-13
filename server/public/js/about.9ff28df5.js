"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[443],{8304:function(t,e,n){n.d(e,{Z:function(){return k}});var s=n(6252),r=n(3577),a=n(9963),o=n.p+"img/male_avatar.5d761acc.png";const i=t=>((0,s.dD)("data-v-0ec09caa"),t=t(),(0,s.Cn)(),t),l={id:"dentistCard"},m={class:"card",style:{width:"18rem","background-color":"transparent"}},d=i((()=>(0,s._)("img",{src:o,class:"rounded-circle centered",style:{width:"150px"},alt:"Avatar"},null,-1))),c={class:"card-body"},u={class:"card-title"},p={class:"card-text"},g={class:"list-group list-group-flush"},h={class:"list-group-item"},f={class:"list-group-item"},_={key:0,class:"list-group-item"},w={key:0,class:"card-body"};function v(t,e,n,o,i,v){return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",m,[d,(0,s._)("div",c,[(0,s._)("h5",u,"Name: "+(0,r.zw)(n.name),1),(0,s._)("p",p,"Years: "+(0,r.zw)(n.years),1)]),(0,s._)("ul",g,[(0,s._)("li",h,"Description: "+(0,r.zw)(n.description),1),(0,s._)("li",f,"Location: "+(0,r.zw)(n.location),1),n.viewNumOfComments?((0,s.wg)(),(0,s.iD)("li",_,"Comments: "+(0,r.zw)(n.numOfComments),1)):(0,s.kq)("",!0)]),n.viewDetail?((0,s.wg)(),(0,s.iD)("div",w,[(0,s._)("button",{class:"btn btn-primary btn-lg",onClick:e[0]||(e[0]=(0,a.iM)((t=>v.viewDetails()),["prevent"]))},"View details")])):(0,s.kq)("",!0)])])}var x=n(9628),y=n(2419),b={name:"DentistCard",props:{id:String,name:String,description:String,years:String,location:String,externalLink:String,sex:String,rating:Number,comments:Array,viewDetail:Boolean,viewNumOfComments:Boolean,numOfComments:String},data(){return{}},created(){},setup(){},methods:{viewDetails(){y.Z.dentistName=this.name,y.Z.dentistYears=this.years,y.Z.dentistDescription=this.description,y.Z.dentistLocation=this.location,y.Z.dentistExternalLink=this.externalLink,y.Z.dentistSex=this.sex,y.Z.dentistComments=this.comments,y.Z.denitstCommentsNumber=this.numOfComments,y.Z.dentistId=this.id,x.Z.push("/dentistDetails")}}},D=n(3744);const C=(0,D.Z)(b,[["render",v],["__scopeId","data-v-0ec09caa"]]);var k=C},7961:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var s=n(6252),r=n(3577);const a={class:"about"},o=(0,s._)("h1",null,"This is an about page",-1);function i(t,e,n,i,l,m){return(0,s.wg)(),(0,s.iD)("div",a,[o,(0,s._)("button",{onClick:e[0]||(e[0]=t=>m.testBaza())},"test button"),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.items,(t=>((0,s.wg)(),(0,s.iD)("div",{id:"items",key:t._id},[(0,s._)("p",null,(0,r.zw)(t._id),1)])))),128))])}var l=n(9411),m={name:"AboutView",components:{},data(){return{items:[]}},async created(){this.items=await l.db.getAllItemsFromCollectionMDb("dentist")},methods:{async testBaza(){return await l.db.getAllItemsFromCollectionMDb("dentist")}}},d=n(3744);const c=(0,d.Z)(m,[["render",i]]);var u=c},2229:function(t,e,n){n.r(e),n.d(e,{default:function(){return M}});var s=n(6252),r=n(9963);const a={class:"about"},o=(0,s._)("h1",{style:{"margin-top":"30px"}},"Add dentist",-1),i={class:"container"},l={class:"row"},m={class:"col"},d={class:"form-group",style:{"margin-top":"20px"}},c=(0,s._)("label",{for:"formGroupExampleInput1"},"Dentist name",-1),u={class:"form-group"},p=(0,s._)("label",{for:"formGroupExampleInput2"},"Years",-1),g={class:"form-group"},h=(0,s._)("label",{for:"formGroupExampleInput3"},"Description",-1),f={class:"form-group"},_=(0,s._)("label",{for:"formGroupExampleInput4"},"Location",-1),w={class:"form-group"},v=(0,s._)("label",{for:"formGroupExampleInput4"},"External link",-1),x={class:"form-group"},y=(0,s._)("label",{for:"inputState"},"Sex",-1),b=(0,s._)("option",{value:"Male"},"Male",-1),D=(0,s._)("option",{value:"Female"},"Female",-1),C=[b,D],k={class:"col"};function I(t,e,n,b,D,I){const S=(0,s.up)("DentistCard");return(0,s.wg)(),(0,s.iD)("div",a,[o,(0,s._)("div",i,[(0,s._)("div",l,[(0,s._)("div",m,[(0,s._)("form",null,[(0,s._)("div",d,[c,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>D.dentistName=t),id:"formGroupExampleInput",placeholder:"Dentist name"},null,512),[[r.nr,D.dentistName]])]),(0,s._)("div",u,[p,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>D.dentistYears=t),id:"formGroupExampleInput2",placeholder:"Years"},null,512),[[r.nr,D.dentistYears]])]),(0,s._)("div",g,[h,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=t=>D.dentistDescription=t),id:"formGroupExampleInput2",placeholder:"Description"},null,512),[[r.nr,D.dentistDescription]])]),(0,s._)("div",f,[_,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=t=>D.dentistLocation=t),id:"formGroupExampleInput",placeholder:"Location"},null,512),[[r.nr,D.dentistLocation]])]),(0,s._)("div",w,[v,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[4]||(e[4]=t=>D.dentistExternalLink=t),id:"formGroupExampleInput",placeholder:"External link"},null,512),[[r.nr,D.dentistExternalLink]])]),(0,s._)("div",x,[y,(0,s.wy)((0,s._)("select",{class:"form-control","onUpdate:modelValue":e[5]||(e[5]=t=>D.dentistSex=t)},C,512),[[r.bM,D.dentistSex]])])]),(0,s._)("button",{class:"btn btn-primary btn-lg",onClick:e[6]||(e[6]=(0,r.iM)((t=>I.addDentist()),["prevent"]))},"Add dentist")]),(0,s._)("div",k,[(0,s.Wm)(S,{name:this.dentistName,description:this.dentistDescription,location:this.dentistLocation,years:this.dentistYears},null,8,["name","description","location","years"])])])])])}var S=n(9628),L=n(9411),E=n(8304),Z={name:"AddDentist",components:{DentistCard:E.Z},data(){return{dentistName:"",dentistYears:"",dentistDescription:"",dentistLocation:"",dentistSex:"Male",dentistExternalLink:""}},async created(){},methods:{async addDentist(){console.log("Adding dentist into db");let t={name:this.dentistName,years:this.dentistYears,description:this.dentistDescription,location:this.dentistLocation,sex:this.dentistSex,externalLink:this.dentistExternalLink},e=await L.db.addItemInCollectionMDb("dentist",t);console.log(e),201===e.status?alert("Dentist added"):alert("Something went wrong"),S.Z.push("/findDentist")}}},U=n(3744);const G=(0,U.Z)(Z,[["render",I]]);var M=G},3145:function(t,e,n){n.r(e),n.d(e,{default:function(){return G}});var s=n(6252),r=n(9963);const a=t=>((0,s.dD)("data-v-59729e10"),t=t(),(0,s.Cn)(),t),o={class:"home"},i={class:"container"},l={class:"row"},m={class:"col"},d={class:"col"},c={class:"form-group",style:{"margin-top":"10px"}},u=a((()=>(0,s._)("label",{for:"exampleFormControlTextarea1"},"Enter comment",-1))),p=a((()=>(0,s._)("hr",{class:"solid"},null,-1)));function g(t,e,n,a,g,h){const f=(0,s.up)("DentistCard"),_=(0,s.up)("CommentSection");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",i,[(0,s._)("div",l,[(0,s._)("div",m,[(0,s.Wm)(f,{name:g.InternalStorage.dentistName,description:g.InternalStorage.dentistDescription,sex:g.InternalStorage.dentistSex,location:g.InternalStorage.dentistLocation,years:g.InternalStorage.dentistYears,externalLink:g.InternalStorage.dentistExternalLink,numOfComments:g.InternalStorage.denitstCommentsNumber,viewNumOfComments:!0},null,8,["name","description","sex","location","years","externalLink","numOfComments"]),(0,s._)("button",{class:"btn btn-primary btn-lg",onClick:e[0]||(e[0]=(0,r.iM)((t=>h.goToExternalLink()),["prevent"]))},"Make appointment")]),(0,s._)("div",d,[(0,s._)("div",c,[u,(0,s.wy)((0,s._)("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3","onUpdate:modelValue":e[1]||(e[1]=t=>g.comment=t)},null,512),[[r.nr,g.comment]]),(0,s._)("button",{class:"btn btn-primary btn-lg",onClick:e[2]||(e[2]=(0,r.iM)((t=>h.rateComment()),["prevent"])),style:{"margin-top":"10px"}},"Rate"),p,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(g.InternalStorage.dentistComments,(t=>((0,s.wg)(),(0,s.iD)("div",{id:"items",key:t._id},[(0,s.Wm)(_,{comment:t},null,8,["comment"])])))),128))])])])])])}var h=n(8304),f=n(2419),_=n(3577);const w=t=>((0,s.dD)("data-v-1ee13bf4"),t=t(),(0,s.Cn)(),t),v={id:"commentSection"},x={class:"blockquote text-center"},y={class:"mb-0"},b=w((()=>(0,s._)("hr",{class:"solid"},null,-1)));function D(t,e,n,r,a,o){return(0,s.wg)(),(0,s.iD)("div",v,[(0,s._)("blockquote",x,[(0,s._)("p",y,(0,_.zw)(n.comment),1),b])])}var C={name:"CommentSection",props:{comment:String},data(){return{}},setup(){},methods:{}},k=n(3744);const I=(0,k.Z)(C,[["render",D],["__scopeId","data-v-1ee13bf4"]]);var S=I,L=n(9411),E=n(9628),Z={name:"UserLogin",setup(){},data(){return console.log(f.Z.dentistComments),{InternalStorage:f.Z,comment:"",rate:5,comments:[]}},created(){this.comments=this.InternalStorage.dentistComments},methods:{goToExternalLink(){console.log("Redirecting on: "+this.InternalStorage.dentistExternalLink),window.open(this.InternalStorage.dentistExternalLink)},async rateComment(){let t={_id:f.Z.dentistId,comment:this.comment};await L.db.rateCommentDentist("/rateComment",t),f.Z.dentistComments.push(this.comment),E.Z.push("/dentistDetails")}},components:{DentistCard:h.Z,CommentSection:S}};const U=(0,k.Z)(Z,[["render",g],["__scopeId","data-v-59729e10"]]);var G=U},2518:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var s=n(6252),r=n(9963);const a={class:"dentist"},o={class:"container"},i=(0,s._)("h1",{style:{"margin-top":"30px","margin-bottom":"10px"}},"Find dentist",-1),l={class:"row",style:{"margin-top":"20px"}},m={class:"col"},d=(0,s._)("hr",{class:"solid"},null,-1),c=(0,s._)("h3",{style:{"margin-top":"30px"}},"All dentist",-1),u=(0,s._)("br",null,null,-1);function p(t,e,n,p,g,h){const f=(0,s.up)("DentistCard");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",o,[i,(0,s.wy)((0,s._)("input",{class:"form-control mr-sm-2","onUpdate:modelValue":e[0]||(e[0]=t=>g.search=t),type:"search",placeholder:"Search by name","aria-label":"Search"},null,512),[[r.nr,g.search]]),(0,s._)("button",{type:"button",class:"btn btn-secondary",onClick:e[1]||(e[1]=(0,r.iM)((t=>h.filteredDentist()),["prevent"])),style:{"margin-top":"10px"}},"Search by name, location, years"),(0,s._)("div",l,[(0,s._)("div",m,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(g.searchResult,(t=>((0,s.wg)(),(0,s.j4)(f,{key:t._id,viewDetail:!0,id:t._id,name:t.name,description:t.description,sex:t.sex,location:t.location,years:t.years,externalLink:null!=t.externalLink?t.externalLink:"https://www.index.hr/",comments:t.comments,numOfComments:null!=t.comments?t.comments.length:0,viewNumOfComments:!0},null,8,["id","name","description","sex","location","years","externalLink","comments","numOfComments"])))),128))])])]),d,c,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(g.items,(t=>((0,s.wg)(),(0,s.iD)("div",{id:"items",key:t._id},[(0,s.Wm)(f,{viewDetail:!0,id:t._id,name:t.name,description:t.description,sex:t.sex,location:t.location,years:t.years,externalLink:null!=t.externalLink?t.externalLink:"https://www.index.hr/",comments:t.comments,numOfComments:null!=t.comments?t.comments.length:0,viewNumOfComments:!0},null,8,["id","name","description","sex","location","years","externalLink","comments","numOfComments"])])))),128)),u])}var g=n(9411),h=n(8304),f={name:"FindDentist",components:{DentistCard:h.Z},data(){return{search:"",items:[],searchResult:[]}},async created(){this.items=await g.db.getAllItemsFromCollectionMDb("dentist"),console.log(this.items)},computed:{},methods:{filteredDentist(){""!=this.search?(this.searchResult=this.items.filter((t=>t.name.includes(this.search)||t.location.includes(this.search)||t.years.includes(this.search))),0===this.searchResult.length&&alert("Dentist not found!")):alert("Enter search parameters!")},sortTopCommented(){this.items.sort((function(t,e){return parseInt(e.comments.length)-parseInt(t.comments.length)}))},sortLeastCommented(){this.items.sort((function(t,e){return parseInt(t.comments.length)-parseInt(e.comments.length)}))}}},_=n(3744);const w=(0,_.Z)(f,[["render",p]]);var v=w},5758:function(t,e,n){n.r(e),n.d(e,{default:function(){return C}});var s=n(6252),r=n(9963);const a={class:"container",style:{"margin-top":"30px"}},o=(0,s._)("h1",null,"Login",-1),i={class:"row",style:{"margin-top":"30px"}},l=(0,s._)("div",{class:"col"},null,-1),m={class:"col-8"},d={class:"form-group"},c=(0,s._)("label",{for:"formGroupExampleInput"},"Username",-1),u={class:"form-group"},p=(0,s._)("label",{for:"formGroupExampleInput2"},"Password",-1),g=(0,s._)("br",null,null,-1),h=(0,s._)("p",null,"or register if you dont have account already",-1),f=(0,s._)("div",{class:"col"},null,-1);function _(t,e,n,_,w,v){return(0,s.wg)(),(0,s.iD)("div",a,[o,(0,s._)("div",i,[l,(0,s._)("div",m,[(0,s._)("form",null,[(0,s._)("div",d,[c,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>w.username=t),id:"formGroupExampleInput",placeholder:"Username"},null,512),[[r.nr,w.username]])]),(0,s._)("div",u,[p,(0,s.wy)((0,s._)("input",{type:"password",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>w.password=t),id:"formGroupExampleInput2",placeholder:"Password"},null,512),[[r.nr,w.password]])])]),(0,s._)("button",{class:"btn btn-primary btn-lg",onClick:e[2]||(e[2]=(0,r.iM)((t=>v.login()),["prevent"]))},"Login"),g,h,(0,s._)("button",{class:"btn btn-primary btn-lg",onClick:e[3]||(e[3]=(0,r.iM)((t=>v.navigateToRegister()),["prevent"]))},"Register")]),f])])}var w=n(2419),v=n(9628),x=n(9411),y={name:"UserLogin",setup(){},data(){let t,e;return{username:t,password:e,InternalStorage:w.Z}},methods:{async login(){let t={username:this.username,password:this.password},e=await x.db.loginUser("auth",t);e&&(this.InternalStorage.userAuth=!0,this.InternalStorage.currentUser=e.data,v.Z.push("/"))},navigateToRegister(){v.Z.push("/register")}}},b=n(3744);const D=(0,b.Z)(y,[["render",_]]);var C=D},873:function(t,e,n){n.r(e),n.d(e,{default:function(){return D}});var s=n(6252),r=n(9963);const a={class:"container",style:{"margin-top":"30px"}},o=(0,s._)("h1",null,"Register",-1),i={class:"row",style:{"margin-top":"30px"}},l=(0,s._)("div",{class:"col"},null,-1),m={class:"col-8"},d={class:"form-group"},c=(0,s._)("label",{for:"formGroupExampleInput"},"Username",-1),u={class:"form-group"},p=(0,s._)("label",{for:"formGroupExampleInput2"},"Password",-1),g={class:"form-group"},h=(0,s._)("label",{for:"formGroupExampleInput2"},"Repeat password",-1),f=(0,s._)("div",{class:"col"},null,-1);function _(t,e,n,_,w,v){return(0,s.wg)(),(0,s.iD)("div",a,[o,(0,s._)("div",i,[l,(0,s._)("div",m,[(0,s._)("form",null,[(0,s._)("div",d,[c,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>w.username=t),id:"formGroupExampleInput",placeholder:"Username"},null,512),[[r.nr,w.username]])]),(0,s._)("div",u,[p,(0,s.wy)((0,s._)("input",{type:"password",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>w.password=t),id:"formGroupExampleInput2",placeholder:"Password"},null,512),[[r.nr,w.password]])]),(0,s._)("div",g,[h,(0,s.wy)((0,s._)("input",{type:"password",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=t=>w.repeatedPassword=t),id:"formGroupExampleInput2",placeholder:"Repeated password"},null,512),[[r.nr,w.repeatedPassword]])])]),(0,s._)("button",{class:"btn btn-primary btn-lg",onClick:e[3]||(e[3]=(0,r.iM)((t=>v.register()),["prevent"]))},"Register")]),f])])}var w=n(9628),v=n(9411),x={name:"UserRegister",setup(){},data(){let t,e,n;return{username:t,password:e,repeatedPassword:n}},methods:{async register(){let t;if(this.password==this.repeatedPassword){let e={username:this.username,password:this.password};if(t=await v.db.registerUser("users",e),!t||201!==t.status)return;w.Z.push("/login")}else alert("Password not match!")}}},y=n(3744);const b=(0,y.Z)(x,[["render",_]]);var D=b}}]);
//# sourceMappingURL=about.9ff28df5.js.map