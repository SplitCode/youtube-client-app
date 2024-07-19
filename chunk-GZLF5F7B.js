import{f as he}from"./chunk-XKLE3RKG.js";import{Bb as K,Ca as o,Ga as z,Ma as h,P as F,Q as g,R as L,Ra as ue,S as I,Ta as Z,U as f,X as $,Ya as X,a as l,aa as S,b as c,ba as u,ha as O,hb as v,j as re,la as W,m as se,n as oe,pa as q,qb as ce,r as ae,ra as m,x as le,xb as de,zb as Y}from"./chunk-ZDXIMVFO.js";var bt=(()=>{let e=class e{constructor(){this.token="youtube_auth_token",this.router=$(he)}login(t,r){return t&&r&&localStorage.setItem(this.token,"fake-token"),oe(!0)}logout(){this.router.navigate(["/login"]),localStorage.removeItem(this.token)}isAuthenticated(){return!!localStorage.getItem(this.token)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=L({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var Ve=(()=>{let e=class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(r){return new(r||e)(o(z),o(q))},e.\u0275dir=u({type:e});let i=e;return i})(),Ue=(()=>{let e=class e extends Ve{};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=W(e)))(s||e)}})(),e.\u0275dir=u({type:e,features:[h]});let i=e;return i})(),Q=new f("");var Re={provide:Q,useExisting:g(()=>De),multi:!0};function He(){let i=K()?K().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Le=new f(""),De=(()=>{let e=class e extends Ve{constructor(t,r,s){super(t,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!He())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(r){return new(r||e)(o(z),o(q),o(Le,8))},e.\u0275dir=u({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&X("input",function(d){return s._handleInput(d.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(d){return s._compositionEnd(d.target.value)})},features:[v([Re]),h]});let i=e;return i})();function $e(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}var U=new f(""),ee=new f("");function We(i){return $e(i.value)?{required:!0}:null}function fe(i){return null}function be(i){return i!=null}function Ae(i){return ce(i)?se(i):i}function Me(i){let e={};return i.forEach(n=>{e=n!=null?l(l({},e),n):e}),Object.keys(e).length===0?null:e}function Ee(i,e){return e.map(n=>n(i))}function qe(i){return!i.validate}function we(i){return i.map(e=>qe(e)?e:n=>e.validate(n))}function ze(i){if(!i)return null;let e=i.filter(be);return e.length==0?null:function(n){return Me(Ee(n,e))}}function te(i){return i!=null?ze(we(i)):null}function Ze(i){if(!i)return null;let e=i.filter(be);return e.length==0?null:function(n){let t=Ee(n,e).map(Ae);return le(t).pipe(ae(Me))}}function ie(i){return i!=null?Ze(we(i)):null}function pe(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Fe(i){return i._rawValidators}function Ie(i){return i._rawAsyncValidators}function J(i){return i?Array.isArray(i)?i:[i]:[]}function N(i,e){return Array.isArray(i)?i.includes(e):i===e}function ge(i,e){let n=J(e);return J(i).forEach(r=>{N(n,r)||n.push(r)}),n}function me(i,e){return J(e).filter(n=>!N(i,n))}var P=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=te(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ie(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},C=class extends P{get formDirective(){return null}get path(){return null}},p=class extends P{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},k=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Xe={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Ht=c(l({},Xe),{"[class.ng-submitted]":"isSubmitted"}),Lt=(()=>{let e=class e extends k{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(o(p,2))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&Z("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[h]});let i=e;return i})(),$t=(()=>{let e=class e extends k{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(o(C,10))},e.\u0275dir=u({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&Z("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[h]});let i=e;return i})();var D="VALID",x="INVALID",y="PENDING",b="DISABLED",V=class{},G=class extends V{constructor(e,n){super(),this.value=e,this.source=n}},M=class extends V{constructor(e,n){super(),this.pristine=e,this.source=n}},E=class extends V{constructor(e,n){super(),this.touched=e,this.source=n}},_=class extends V{constructor(e,n){super(),this.status=e,this.source=n}};function Se(i){return(R(i)?i.validators:i)||null}function Ye(i){return Array.isArray(i)?te(i):i||null}function Oe(i,e){return(R(e)?e.asyncValidators:i)||null}function Ke(i){return Array.isArray(i)?ie(i):i||null}function R(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Je(i,e,n){let t=i.controls;if(!(e?Object.keys(t):t).length)throw new F(1e3,"");if(!t[n])throw new F(1001,"")}function Qe(i,e,n){i._forEachChild((t,r)=>{if(n[r]===void 0)throw new F(1002,"")})}var j=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._events=new re,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===D}get invalid(){return this.status===x}get pending(){return this.status==y}get disabled(){return this.status===b}get enabled(){return this.status!==b}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ge(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ge(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(me(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(me(e,this._rawAsyncValidators))}hasValidator(e){return N(this._rawValidators,e)}hasAsyncValidator(e){return N(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let n=this.touched===!1;this.touched=!0;let t=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(c(l({},e),{sourceControl:t})),n&&e.emitEvent!==!1&&this._events.next(new E(!0,t))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(e))}markAsUntouched(e={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:t})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t),n&&e.emitEvent!==!1&&this._events.next(new E(!1,t))}markAsDirty(e={}){let n=this.pristine===!0;this.pristine=!1;let t=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(c(l({},e),{sourceControl:t})),n&&e.emitEvent!==!1&&this._events.next(new M(!1,t))}markAsPristine(e={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),n&&e.emitEvent!==!1&&this._events.next(new M(!0,t))}markAsPending(e={}){this.status=y;let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new _(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(c(l({},e),{sourceControl:n}))}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=b,this.errors=null,this._forEachChild(r=>{r.disable(c(l({},e),{onlySelf:!0}))}),this._updateValue();let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new G(this.value,t)),this._events.next(new _(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(c(l({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=D,this._forEachChild(t=>{t.enable(c(l({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(c(l({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e,n){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D||this.status===y)&&this._runAsyncValidator(t,e.emitEvent)}let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new G(this.value,n)),this._events.next(new _(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(c(l({},e),{sourceControl:n}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?b:D}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,n){if(this.asyncValidator){this.status=y,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1};let t=Ae(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((t,r)=>t&&t._find(r),this)}getError(e,n){let t=n?this.get(n):this;return t&&t.errors?t.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,n,t){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||t)&&this._events.next(new _(this.status,n)),this._parent&&this._parent._updateControlsErrors(e,n,t)}_initObservables(){this.valueChanges=new m,this.statusChanges=new m}_calculateStatus(){return this._allControlsDisabled()?b:this.errors?x:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(y)?y:this._anyControlsHaveStatus(x)?x:D}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,n){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),r&&this._events.next(new M(this.pristine,n))}_updateTouched(e={},n){this.touched=this._anyControlsTouched(),this._events.next(new E(this.touched,n)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){R(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Ye(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Ke(this._rawAsyncValidators)}},T=class extends j{constructor(e,n,t){super(Se(n),Oe(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,t={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Qe(this,!0,e),Object.keys(e).forEach(t=>{Je(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(t=>{let r=this.controls[t];r&&r.patchValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((t,r)=>{t.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n,this),this._updateTouched(n,this),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,t)=>(e[t]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,t)=>t._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let t=this.controls[n];t&&e(t,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,t]of Object.entries(this.controls))if(this.contains(n)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,t,r)=>((t.enabled||this.disabled)&&(n[r]=t.value),n))}_reduceChildren(e,n){let t=e;return this._forEachChild((r,s)=>{t=n(t,r,s)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var w=new f("CallSetDisabledState",{providedIn:"root",factory:()=>H}),H="always";function et(i,e){return[...e.path,i]}function ne(i,e,n=H){xe(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),nt(i,e),st(i,e),rt(i,e),tt(i,e)}function ve(i,e,n=!0){let t=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(t),e.valueAccessor.registerOnTouched(t)),it(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function B(i,e){i.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function tt(i,e){if(e.valueAccessor.setDisabledState){let n=t=>{e.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(n),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(n)})}}function xe(i,e){let n=Fe(i);e.validator!==null?i.setValidators(pe(n,e.validator)):typeof n=="function"&&i.setValidators([n]);let t=Ie(i);e.asyncValidator!==null?i.setAsyncValidators(pe(t,e.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let r=()=>i.updateValueAndValidity();B(e._rawValidators,r),B(e._rawAsyncValidators,r)}function it(i,e){let n=!1;if(i!==null){if(e.validator!==null){let r=Fe(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.validator);s.length!==r.length&&(n=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let r=Ie(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.asyncValidator);s.length!==r.length&&(n=!0,i.setAsyncValidators(s))}}}let t=()=>{};return B(e._rawValidators,t),B(e._rawAsyncValidators,t),n}function nt(i,e){e.valueAccessor.registerOnChange(n=>{i._pendingValue=n,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Ne(i,e)})}function rt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Ne(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Ne(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function st(i,e){let n=(t,r)=>{e.valueAccessor.writeValue(t),r&&e.viewToModelUpdate(t)};i.registerOnChange(n),e._registerOnDestroy(()=>{i._unregisterOnChange(n)})}function ot(i,e){i==null,xe(i,e)}function Pe(i,e){if(!i.hasOwnProperty("model"))return!1;let n=i.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function at(i){return Object.getPrototypeOf(i.constructor)===Ue}function lt(i,e){i._syncPendingControls(),e.forEach(n=>{let t=n.control;t.updateOn==="submit"&&t._pendingChange&&(n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function ke(i,e){if(!e)return null;Array.isArray(e);let n,t,r;return e.forEach(s=>{s.constructor===De?n=s:at(s)?t=s:r=s}),r||t||n||null}var ut={provide:C,useExisting:g(()=>ct)},A=Promise.resolve(),ct=(()=>{let e=class e extends C{constructor(t,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._directives=new Set,this.ngSubmit=new m,this.form=new T({},te(t),ie(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){A.then(()=>{let r=this._findContainer(t.path);t.control=r.registerControl(t.name,t.control),ne(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){A.then(()=>{let r=this._findContainer(t.path);r&&r.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){A.then(()=>{let r=this._findContainer(t.path),s=new T({});ot(s,t),r.registerControl(t.name,s),s.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){A.then(()=>{let r=this._findContainer(t.path);r&&r.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){A.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,lt(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}};e.\u0275fac=function(r){return new(r||e)(o(U,10),o(ee,10),o(w,8))},e.\u0275dir=u({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,s){r&1&&X("submit",function(d){return s.onSubmit(d)})("reset",function(){return s.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[v([ut]),h]});let i=e;return i})();function ye(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}function _e(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var dt=class extends j{constructor(e=null,n,t){super(Se(n),Oe(t,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),R(n)&&(n.nonNullable||n.initialValueIsDefault)&&(_e(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ye(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ye(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){_e(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ht={provide:p,useExisting:g(()=>ft)},Ce=Promise.resolve(),ft=(()=>{let e=class e extends p{constructor(t,r,s,a,d,Te){super(),this._changeDetectorRef=d,this.callSetDisabledState=Te,this.control=new dt,this._registered=!1,this.name="",this.update=new m,this._parent=t,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=ke(this,a)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Pe(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ne(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Ce.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let r=t.isDisabled.currentValue,s=r!==0&&Y(r);Ce.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?et(t,this._parent):[t]}};e.\u0275fac=function(r){return new(r||e)(o(C,9),o(U,10),o(ee,10),o(Q,10),o(de,8),o(w,8))},e.\u0275dir=u({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[v([ht]),h,O]});let i=e;return i})(),qt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=u({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let i=e;return i})();var Ge=new f(""),pt={provide:p,useExisting:g(()=>gt)},gt=(()=>{let e=class e extends p{set isDisabled(t){}constructor(t,r,s,a,d){super(),this._ngModelWarningConfig=a,this.callSetDisabledState=d,this.update=new m,this._ngModelWarningSent=!1,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=ke(this,s)}ngOnChanges(t){if(this._isControlChanged(t)){let r=t.form.previousValue;r&&ve(r,this,!1),ne(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Pe(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&ve(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(o(U,10),o(ee,10),o(Q,10),o(Ge,8),o(w,8))},e.\u0275dir=u({type:e,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[v([pt]),h,O]});let i=e;return i})();var mt=(()=>{let e=class e{constructor(){this._validator=fe}ngOnChanges(t){if(this.inputName in t){let r=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):fe,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=u({type:e,features:[O]});let i=e;return i})();var vt={provide:U,useExisting:g(()=>yt),multi:!0};var yt=(()=>{let e=class e extends mt{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=Y,this.createValidator=t=>We}enabled(t){return t}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=W(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,s){r&2&&ue("required",s._enabled?"":null)},inputs:{required:"required"},features:[v([vt]),h]});let i=e;return i})();var je=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=S({type:e}),e.\u0275inj=I({});let i=e;return i})();var zt=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:w,useValue:t.callSetDisabledState??H}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=S({type:e}),e.\u0275inj=I({imports:[je]});let i=e;return i})(),Zt=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:Ge,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:w,useValue:t.callSetDisabledState??H}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=S({type:e}),e.\u0275inj=I({imports:[je]});let i=e;return i})();export{bt as a,De as b,Lt as c,$t as d,ct as e,dt as f,ft as g,qt as h,gt as i,yt as j,zt as k,Zt as l};
