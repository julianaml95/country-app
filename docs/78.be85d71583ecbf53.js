"use strict";(self.webpackChunk_04_country_app=self.webpackChunk_04_country_app||[]).push([[78],{78:(ne,f,s)=>{s.r(f),s.d(f,{CountriesModule:()=>ee});var c=s(808),p=s(735),e=s(223),v=s(262),C=s(646),A=s(4),u=s(505),S=s(520);let g=(()=>{class n{constructor(t){this.http=t,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){!localStorage.getItem("cacheStore")||(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(t){return this.http.get(t).pipe((0,v.K)(()=>(0,C.of)([])))}searchCountryByAlphaCode(t){return this.http.get(`${this.apiUrl}/alpha/${t}`).pipe((0,A.U)(r=>r.length>0?r[0]:null),(0,v.K)(()=>(0,C.of)(null)))}searchCapital(t){return this.getCountriesRequest(`${this.apiUrl}/capital/${t}`).pipe((0,u.b)(r=>this.cacheStore.byCapital={term:t,countries:r}),(0,u.b)(()=>this.saveToLocalStorage()))}searchCountry(t){return this.getCountriesRequest(`${this.apiUrl}/name/${t}`).pipe((0,u.b)(r=>this.cacheStore.byCountries={term:t,countries:r}),(0,u.b)(()=>this.saveToLocalStorage()))}searchRegion(t){return this.getCountriesRequest(`${this.apiUrl}/region/${t}`).pipe((0,u.b)(r=>this.cacheStore.byRegion={region:t,countries:r}),(0,u.b)(()=>this.saveToLocalStorage()))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(S.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var U=s(579),q=s(727);class w extends q.w0{constructor(o,t){super()}schedule(o,t=0){return this}}const m={setInterval(n,o,...t){const{delegate:i}=m;return(null==i?void 0:i.setInterval)?i.setInterval(n,o,...t):setInterval(n,o,...t)},clearInterval(n){const{delegate:o}=m;return((null==o?void 0:o.clearInterval)||clearInterval)(n)},delegate:void 0};var B=s(737);const Z={now:()=>(Z.delegate||Date).now(),delegate:void 0};class h{constructor(o,t=h.now){this.schedulerActionCtor=o,this.now=t}schedule(o,t=0,i){return new this.schedulerActionCtor(this,o).schedule(i,t)}}h.now=Z.now;const O=new class P extends h{constructor(o,t=h.now){super(o,t),this.actions=[],this._active=!1}flush(o){const{actions:t}=this;if(this._active)return void t.push(o);let i;this._active=!0;do{if(i=o.execute(o.state,o.delay))break}while(o=t.shift());if(this._active=!1,i){for(;o=t.shift();)o.unsubscribe();throw i}}}(class I extends w{constructor(o,t){super(o,t),this.scheduler=o,this.work=t,this.pending=!1}schedule(o,t=0){var i;if(this.closed)return this;this.state=o;const r=this.id,a=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(a,r,t)),this.pending=!0,this.delay=t,this.id=null!==(i=this.id)&&void 0!==i?i:this.requestAsyncId(a,this.id,t),this}requestAsyncId(o,t,i=0){return m.setInterval(o.flush.bind(o,this),i)}recycleAsyncId(o,t,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return t;null!=t&&m.clearInterval(t)}execute(o,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(o,t);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,t){let r,i=!1;try{this.work(o)}catch(a){i=!0,r=a||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:o,scheduler:t}=this,{actions:i}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,B.P)(i,this),null!=o&&(this.id=this.recycleAsyncId(t,o,null)),this.delay=null,super.unsubscribe()}}});var J=s(482),R=s(403);let b=(()=>{class n{constructor(){this.debouncer=new U.x,this.placeholder="",this.initialValue="",this.onValue=new e.vpe,this.onDebounce=new e.vpe}ngOnInit(){this.debouncerSuscription=this.debouncer.pipe(function F(n,o=O){return(0,J.e)((t,i)=>{let r=null,a=null,d=null;const x=()=>{if(r){r.unsubscribe(),r=null;const l=a;a=null,i.next(l)}};function te(){const l=d+n,T=o.now();if(T<l)return r=this.schedule(void 0,l-T),void i.add(r);x()}t.subscribe((0,R.x)(i,l=>{a=l,d=o.now(),r||(r=o.schedule(te,n),i.add(r))},()=>{x(),i.complete()},void 0,()=>{a=r=null}))})}(300)).subscribe(t=>{this.onDebounce.emit(t)})}ngOnDestroy(){var t;null===(t=this.debouncerSuscription)||void 0===t||t.unsubscribe()}emitValue(t){this.onValue.emit(t)}onKeyPress(t){this.debouncer.next(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["shared-search-box"]],inputs:{placeholder:"placeholder",initialValue:"initialValue"},outputs:{onValue:"onValue",onDebounce:"onDebounce"},decls:2,vars:2,consts:[["type","text",1,"form-control",3,"value","placeholder","keyup"],["txtInput",""]],template:function(t,i){if(1&t){const r=e.EpF();e.TgZ(0,"input",0,1),e.NdJ("keyup",function(){e.CHM(r);const d=e.MAs(1);return i.onKeyPress(d.value)}),e.qZA()}2&t&&e.Q6J("value",i.initialValue)("placeholder",i.placeholder)},encapsulation:2}),n})(),_=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["shared-loading-spinner"]],decls:15,vars:0,consts:[[1,"spinner-container","bg-dark"],["width","30","height","30","viewBox","0 0 45 45","xmlns","http://www.w3.org/2000/svg","stroke","#fff"],["fill","none","fill-rule","evenodd","transform","translate(1 1)","stroke-width","2"],["cx","22","cy","22","r","6","stroke-opacity","0"],["attributeName","r","begin","1.5s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","1.5s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","1.5s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["attributeName","r","begin","3s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","3s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","3s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["cx","22","cy","22","r","8"],["attributeName","r","begin","0s","dur","1.5s","values","6;1;2;3;4;5;6","calcMode","linear","repeatCount","indefinite"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"span"),e._uU(2,"Buscando"),e.qZA(),e.O4$(),e.TgZ(3,"svg",1)(4,"g",2)(5,"circle",3),e._UZ(6,"animate",4)(7,"animate",5)(8,"animate",6),e.qZA(),e.TgZ(9,"circle",3),e._UZ(10,"animate",7)(11,"animate",8)(12,"animate",9),e.qZA(),e.TgZ(13,"circle",10),e._UZ(14,"animate",11),e.qZA()()()())},styles:[".spinner-container[_ngcontent-%COMP%]{align-items:center;background-color:#000;border-radius:20px;bottom:15px;color:#fff;display:flex;padding:5px 10px;position:fixed;right:15px;box-shadow:0 3px 5px #0003}span[_ngcontent-%COMP%]{margin-left:5px}"]}),n})();function L(n,o){1&n&&(e.TgZ(0,"div",2),e._uU(1," No hay pa\xedses que mostrar\n"),e.qZA())}const N=function(n){return["/countries/by",n]};function M(n,o){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._UZ(6,"img",5),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.ALo(13,"number"),e.qZA(),e.TgZ(14,"td")(15,"a",6),e._uU(16,"Info"),e.qZA()()()),2&n){const t=o.$implicit,i=o.index;e.xp6(2),e.Oqu(i+1),e.xp6(2),e.hij(" ",t.flag," "),e.xp6(2),e.Q6J("src",t.flags.svg,e.LSH)("alt",t.name.common),e.xp6(2),e.Oqu(t.name.common),e.xp6(2),e.Oqu(t.capital),e.xp6(2),e.Oqu(e.lcZ(13,8,t.population)),e.xp6(3),e.Q6J("routerLink",e.VKq(10,N,t.cca3))}}function V(n,o){if(1&n&&(e.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th"),e._uU(4,"#"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Icon"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Bandera"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Nombre"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Capital"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Poblaci\xf3n"),e.qZA(),e._UZ(15,"th"),e.qZA()(),e.TgZ(16,"tbody"),e.YNc(17,M,17,12,"tr",4),e.qZA()()),2&n){const t=e.oxw();e.xp6(17),e.Q6J("ngForOf",t.countries)}}let y=(()=>{class n{constructor(){this.countries=[]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(t,i){if(1&t&&(e.YNc(0,L,2,0,"div",0),e.YNc(1,V,18,1,"ng-template",null,1,e.W1O)),2&t){const r=e.MAs(2);e.Q6J("ngIf",0===i.countries.length)("ngIfElse",r)}},directives:[c.O5,c.sg,p.yS],pipes:[c.JJ],styles:["img[_ngcontent-%COMP%]{width:25px}"]}),n})();function D(n,o){1&n&&e._UZ(0,"shared-loading-spinner")}let Q=(()=>{class n{constructor(t){this.countriesService=t,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.term}searchByCapital(t){this.isLoading=!0,this.countriesService.searchCapital(t).subscribe(i=>{this.countries=i,this.isLoading=!1})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(t,i){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Capital"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),e.NdJ("onDebounce",function(a){return i.searchByCapital(a)}),e.qZA()()(),e.TgZ(6,"div",0)(7,"div",1),e._UZ(8,"hr"),e.YNc(9,D,1,0,"shared-loading-spinner",3),e._UZ(10,"countries-table",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("initialValue",i.initialValue),e.xp6(4),e.Q6J("ngIf",i.isLoading),e.xp6(1),e.Q6J("countries",i.countries))},directives:[b,c.O5,_,y],encapsulation:2}),n})();function E(n,o){1&n&&e._UZ(0,"shared-loading-spinner")}let Y=(()=>{class n{constructor(t){this.countriesService=t,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountries.countries,this.initialValue=this.countriesService.cacheStore.byCountries.term}searchByCountry(t){this.isLoading=!0,this.countriesService.searchCountry(t).subscribe(i=>{this.countries=i,this.isLoading=!1})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-by-country-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pa\xeds",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(t,i){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Pa\xeds"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),e.NdJ("onDebounce",function(a){return i.searchByCountry(a)}),e.qZA()()(),e.TgZ(6,"div",0)(7,"div",1),e._UZ(8,"hr"),e.YNc(9,E,1,0,"shared-loading-spinner",3),e._UZ(10,"countries-table",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("initialValue",i.initialValue),e.xp6(4),e.Q6J("ngIf",i.isLoading),e.xp6(1),e.Q6J("countries",i.countries))},directives:[b,c.O5,_,y],encapsulation:2}),n})();const k=function(n){return{"btn-outline-primary":n}};function $(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",5),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw().searchByRegion(a)}),e._uU(1),e.qZA()}if(2&n){const t=o.$implicit,i=e.oxw();e.Q6J("ngClass",e.VKq(2,k,i.selectedRegion===t)),e.xp6(1),e.hij(" ",t," ")}}let j=(()=>{class n{constructor(t){this.countriesService=t,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"]}ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.selectedRegion=this.countriesService.cacheStore.byRegion.region}searchByRegion(t){this.selectedRegion=t,this.countriesService.searchRegion(t).subscribe(i=>{this.countries=i})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-by-region-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[3,"countries"],[1,"btn","mx-2",3,"ngClass","click"]],template:function(t,i){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Regi\xf3n"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1),e.YNc(5,$,2,4,"button",2),e.qZA()(),e.TgZ(6,"div",0)(7,"div",3),e._UZ(8,"hr")(9,"countries-table",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("ngForOf",i.regions),e.xp6(4),e.Q6J("countries",i.countries))},directives:[c.sg,c.mk,y],encapsulation:2}),n})();var X=s(900);function K(n,o){1&n&&(e.TgZ(0,"div",2),e._uU(1," Espere por favor "),e.qZA())}function z(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),e._uU(4,"Pa\xeds: "),e.TgZ(5,"strong"),e._uU(6),e.qZA()(),e._UZ(7,"hr"),e.qZA()(),e.TgZ(8,"div",3)(9,"div",5)(10,"h3"),e._uU(11,"Bandera"),e.qZA(),e._UZ(12,"img",6),e.qZA(),e.TgZ(13,"div",7)(14,"h3"),e._uU(15,"Informaci\xf3n"),e.qZA(),e.TgZ(16,"ul",8)(17,"li",9)(18,"strong"),e._uU(19,"Poblaci\xf3n:"),e.qZA(),e._uU(20),e.ALo(21,"number"),e.qZA(),e.TgZ(22,"li",9)(23,"strong"),e._uU(24,"C\xf3digo:"),e.qZA(),e._uU(25),e.qZA()()()(),e.TgZ(26,"div",10)(27,"div",7)(28,"h3"),e._uU(29,"Traducciones"),e.qZA(),e.TgZ(30,"div",11)(31,"span",12),e._uU(32),e.qZA(),e.TgZ(33,"span",12),e._uU(34),e.qZA(),e.TgZ(35,"span",12),e._uU(36),e.qZA(),e.TgZ(37,"span",12),e._uU(38),e.qZA(),e.TgZ(39,"span",12),e._uU(40),e.qZA(),e.TgZ(41,"span",12),e._uU(42),e.qZA(),e.TgZ(43,"span",12),e._uU(44),e.qZA(),e.TgZ(45,"span",12),e._uU(46),e.qZA(),e.TgZ(47,"span",12),e._uU(48),e.qZA(),e.TgZ(49,"span",12),e._uU(50),e.qZA()()()()()),2&n){const t=e.oxw();e.xp6(6),e.Oqu(t.country.name.common),e.xp6(6),e.Q6J("src",t.country.flags.svg,e.LSH)("alt",t.country.name.common),e.xp6(8),e.hij(" ",e.lcZ(21,15,t.country.population)," "),e.xp6(5),e.hij(" ",t.country.cca3," "),e.xp6(7),e.Oqu(t.country.translations.ara.common),e.xp6(2),e.Oqu(t.country.translations.bre.common),e.xp6(2),e.Oqu(t.country.translations.ces.common),e.xp6(2),e.Oqu(t.country.translations.cym.common),e.xp6(2),e.Oqu(t.country.translations.deu.common),e.xp6(2),e.Oqu(t.country.translations.est.common),e.xp6(2),e.Oqu(t.country.translations.fin.common),e.xp6(2),e.Oqu(t.country.translations.ita.common),e.xp6(2),e.Oqu(t.country.translations.kor.common),e.xp6(2),e.Oqu(t.country.translations.per.common)}}const H=[{path:"by-capital",component:Q},{path:"by-country",component:Y},{path:"by-region",component:j},{path:"by/:id",component:(()=>{class n{constructor(t,i,r){this.activatedRoute=t,this.router=i,this.countriesService=r}ngOnInit(){this.activatedRoute.params.pipe((0,X.w)(({id:t})=>this.countriesService.searchCountryByAlphaCode(t))).subscribe(t=>t?this.country=t:this.router.navigateByUrl(""))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.gz),e.Y36(p.F0),e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(t,i){if(1&t&&(e.YNc(0,K,2,0,"ng-template",null,0,e.W1O),e.YNc(2,z,51,17,"div",1)),2&t){const r=e.MAs(1);e.xp6(2),e.Q6J("ngIf",i.country)("ngIfElse",r)}},directives:[c.O5],pipes:[c.JJ],encapsulation:2}),n})()},{path:"**",redirectTo:"by-capital"}];let W=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[p.Bz.forChild(H)],p.Bz]}),n})();var G=s(466);let ee=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[c.ez,W,G.m]]}),n})()}}]);