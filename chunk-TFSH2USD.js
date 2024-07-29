import{a as k}from"./chunk-6FSU2UED.js";import{a as F,b as L,c as u,d as E,e as I,f as N,h,j as T,l as q,n as V,o as j,r as G}from"./chunk-KF7YFY64.js";import{j as P,m as C,n as O}from"./chunk-GNBJRYWW.js";import{m as S,q as s}from"./chunk-64OOHNVT.js";import{Ca as l,Sa as p,T as g,Ua as a,Wa as i,Xa as r,Y as v,Ya as w,aa as b,ba as c,cb as y,db as f,ib as m,jb as M,pb as x}from"./chunk-L5TMY7ZW.js";function B(o,e){o&1&&(i(0,"div"),m(1,"Please enter a login email."),r())}function Y(o,e){o&1&&(i(0,"div"),m(1,"The login email is invalid."),r())}function A(o,e){if(o&1&&(i(0,"div",11),p(1,B,2,0,"div",12)(2,Y,2,0,"div",12),r()),o&2){let n=f();l(),a("ngIf",n.login==null||n.login.errors==null?null:n.login.errors.required),l(),a("ngIf",n.login==null||n.login.errors==null?null:n.login.errors.email)}}function H(o,e){o&1&&(i(0,"div"),m(1,"Please enter a password."),r())}function J(o,e){o&1&&(i(0,"div"),m(1,"Your password must be at least 8 characters long."),r())}function K(o,e){if(o&1&&(i(0,"div"),m(1),r()),o&2){let n=f(2);l(),M(n.password==null||n.password.errors==null?null:n.password.errors.passwordValidator.message)}}function Q(o,e){if(o&1&&(i(0,"div",11),p(1,H,2,0,"div",12)(2,J,2,0,"div",12)(3,K,2,1,"div",12),r()),o&2){let n=f();l(),a("ngIf",n.password==null||n.password.errors==null?null:n.password.errors.required),l(),a("ngIf",n.password==null||n.password.errors==null?null:n.password.errors.minlength),l(),a("ngIf",n.password==null||n.password.errors==null?null:n.password.errors.passwordValidator)}}var R=(()=>{let e=class e{constructor(){this.loginForm=new N({login:new h("",[u.required,u.email]),password:new h("",[u.required,u.minLength(8),k])}),this.authService=v(F),this.router=v(P)}onLogin(){this.loginForm.valid&&this.authService.login()}get login(){return this.loginForm.get("login")}get password(){return this.loginForm.get("password")}};e.\u0275fac=function(d){return new(d||e)},e.\u0275cmp=b({type:e,selectors:[["app-login"]],standalone:!0,features:[x],decls:17,vars:5,consts:[[1,"login-page__form"],[1,"login-page__form-title"],[1,"form",3,"ngSubmit","formGroup"],[1,"form__group"],["for","login",1,"required"],["type","text","id","login","formControlName","login","name","login","required",""],["class","form__error",4,"ngIf"],["for","password",1,"required"],["type","password","id","password","formControlName","password","name","password","required",""],[1,"form__button"],["btnAppearance","large",3,"btnType","disabled"],[1,"form__error"],[4,"ngIf"]],template:function(d,t){d&1&&(i(0,"div",0)(1,"h2",1),m(2,"Login"),r(),i(3,"form",2),y("ngSubmit",function(){return t.onLogin()}),i(4,"div",3)(5,"label",4),m(6,"login"),r(),w(7,"input",5),p(8,A,3,2,"div",6),r(),i(9,"div",3)(10,"label",7),m(11,"password"),r(),w(12,"input",8),p(13,Q,4,3,"div",6),r(),i(14,"div",9)(15,"app-button",10),m(16,"Login"),r()()()()),d&2&&(l(3),a("formGroup",t.loginForm),l(5),a("ngIf",(t.login==null?null:t.login.invalid)&&((t.login==null?null:t.login.dirty)||(t.login==null?null:t.login.touched))),l(5),a("ngIf",(t.password==null?null:t.password.invalid)&&((t.password==null?null:t.password.dirty)||(t.password==null?null:t.password.touched))),l(2),a("btnType","submit")("disabled",t.loginForm.invalid))},dependencies:[O,G,T,L,E,I,j,q,V,s,S],styles:['.login-page__form[_ngcontent-%COMP%]{max-width:34.5rem;margin:4rem auto;padding:2.8rem 2rem;border-radius:.5rem;background-color:var(--form-color)}.login-page__form-title[_ngcontent-%COMP%]{font-weight:700;font-size:1.8rem;margin-bottom:1.1rem}.form__group[_ngcontent-%COMP%]{margin-bottom:.5rem}.form__group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:.4rem;color:var(--light-text-color)}.form__group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:1.3rem .9rem;border:none;background-color:var(--dark-input-bg)}.form__group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline-color:var(--accent-color)}.form__group[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:.1rem solid var(--error-text-color);border-radius:.5rem}.form__group[_ngcontent-%COMP%]   label.required[_ngcontent-%COMP%]:after{content:" *"}.form__button[_ngcontent-%COMP%]{display:flex;justify-content:end;margin-top:2.2rem}.form__error[_ngcontent-%COMP%]{color:var(--error-text-color);margin:.5rem}']});let o=e;return o})();var U=[{path:"",component:R}],z=(()=>{let e=class e{};e.\u0275fac=function(d){return new(d||e)},e.\u0275mod=c({type:e}),e.\u0275inj=g({imports:[s,C.forChild(U),C]});let o=e;return o})();var ce=(()=>{let e=class e{};e.\u0275fac=function(d){return new(d||e)},e.\u0275mod=c({type:e}),e.\u0275inj=g({imports:[s,z]});let o=e;return o})();export{ce as AuthModule};
