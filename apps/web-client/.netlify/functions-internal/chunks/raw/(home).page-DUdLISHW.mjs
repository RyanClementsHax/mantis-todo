// ROLLUP_NO_REPLACE 
 const _home__pageDUdLISHW = "import{j as J,S as j,T as St,U as xt,J as Ft,E as Ot,I as v,W as X,g as m,C as c,X as F,Y as V,Z as a,_ as Z,$ as tt,a0 as Nt,a1 as et,a2 as k,u as Pt,a3 as nt,a4 as ot,a5 as g,a6 as O,a7 as H,a8 as je,a9 as It,aa as Gt,K as Bt,ac as Ut,m as Lt,ɵ as w,o as jt,q as Ht,r as $t,c as D,ad as s,ae as rt,af as l,ag as _,ah as it,ai as st,aj as Rt,ak as N,al as h,am as u,an as p,ao as P,ap as I,d as E,aq as $,n as S,ar as Wt,as as qt,at,au as lt,av as dt,aw as ut,v as ct,x as ht,y as Kt,ax as Qt,ay as zt,az as Yt}from\"./vendor-BQIRO7H9.js\";let Jt=(()=>{var e;class t{getBackendBaseUrl(){return\"/api/v1\"}}return e=t,e.ɵfac=function(o){return new(o||e)},e.ɵprov=J({token:e,factory:e.ɵfac,providedIn:\"root\"}),t})(),Xt=(()=>{var e;class t{constructor(o,r){this.http=o,this.config=r}getAllTodos(){return this.http.get(`${this.config.getBackendBaseUrl()}/todos`).pipe(xt(3),Ft(()=>Ot([])))}addTodo(o){return this.http.post(`${this.config.getBackendBaseUrl()}/todos`,o)}updateTodo(o){return this.http.patch(`${this.config.getBackendBaseUrl()}/todos/${o._id}`,o)}removeTodo(o){return this.http.delete(`${this.config.getBackendBaseUrl()}/todos/${o._id}`)}}return e=t,e.ɵfac=function(o){return new(o||e)(j(St),j(Jt))},e.ɵprov=J({token:e,factory:e.ɵfac,providedIn:\"root\"}),t})();let pt=(()=>{var e;class t{constructor(o,r){this._renderer=o,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(o,r){this._renderer.setProperty(this._elementRef.nativeElement,o,r)}registerOnTouched(o){this.onTouched=o}registerOnChange(o){this.onChange=o}setDisabledState(o){this.setProperty(\"disabled\",o)}}return e=t,e.ɵfac=function(o){return new(o||e)(a(Z),a(tt))},e.ɵdir=m({type:e}),t})(),_t=(()=>{var e;class t extends pt{}return e=t,e.ɵfac=(()=>{let n;return function(r){return(n||(n=X(e)))(r||e)}})(),e.ɵdir=m({type:e,features:[V]}),t})();const G=new v(\"\"),Zt={provide:G,useExisting:O(()=>ft),multi:!0};let ft=(()=>{var e;class t extends _t{writeValue(o){this.setProperty(\"checked\",o)}}return e=t,e.ɵfac=(()=>{let n;return function(r){return(n||(n=X(e)))(r||e)}})(),e.ɵdir=m({type:e,selectors:[[\"input\",\"type\",\"checkbox\",\"formControlName\",\"\"],[\"input\",\"type\",\"checkbox\",\"formControl\",\"\"],[\"input\",\"type\",\"checkbox\",\"ngModel\",\"\"]],hostBindings:function(o,r){o&1&&c(\"change\",function(d){return r.onChange(d.target.checked)})(\"blur\",function(){return r.onTouched()})},features:[F([Zt]),V]}),t})();const te={provide:G,useExisting:O(()=>M),multi:!0};function ee(){const e=H()?H().getUserAgent():\"\";return/android (\\d+)/.test(e.toLowerCase())}const ne=new v(\"\");let M=(()=>{var e;class t extends pt{constructor(o,r,i){super(o,r),this._compositionMode=i,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!ee())}writeValue(o){const r=o??\"\";this.setProperty(\"value\",r)}_handleInput(o){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(o)}_compositionStart(){this._composing=!0}_compositionEnd(o){this._composing=!1,this._compositionMode&&this.onChange(o)}}return e=t,e.ɵfac=function(o){return new(o||e)(a(Z),a(tt),a(ne,8))},e.ɵdir=m({type:e,selectors:[[\"input\",\"formControlName\",\"\",3,\"type\",\"checkbox\"],[\"textarea\",\"formControlName\",\"\"],[\"input\",\"formControl\",\"\",3,\"type\",\"checkbox\"],[\"textarea\",\"formControl\",\"\"],[\"input\",\"ngModel\",\"\",3,\"type\",\"checkbox\"],[\"textarea\",\"ngModel\",\"\"],[\"\",\"ngDefaultControl\",\"\"]],hostBindings:function(o,r){o&1&&c(\"input\",function(d){return r._handleInput(d.target.value)})(\"blur\",function(){return r.onTouched()})(\"compositionstart\",function(){return r._compositionStart()})(\"compositionend\",function(d){return r._compositionEnd(d.target.value)})},features:[F([te]),V]}),t})();const oe=new v(\"\"),re=new v(\"\");function gt(e){return e!=null}function mt(e){return Gt(e)?Bt(e):e}function yt(e){let t={};return e.forEach(n=>{t=n!=null?{...t,...n}:t}),Object.keys(t).length===0?null:t}function Ct(e,t){return t.map(n=>n(e))}function ie(e){return!e.validate}function vt(e){return e.map(t=>ie(t)?t:n=>t.validate(n))}function se(e){if(!e)return null;const t=e.filter(gt);return t.length==0?null:function(n){return yt(Ct(n,t))}}function Vt(e){return e!=null?se(vt(e)):null}function ae(e){if(!e)return null;const t=e.filter(gt);return t.length==0?null:function(n){const o=Ct(n,t).map(mt);return Ut(o).pipe(Lt(yt))}}function At(e){return e!=null?ae(vt(e)):null}function R(e,t){return e===null?[t]:Array.isArray(e)?[...e,t]:[e,t]}function le(e){return e._rawValidators}function de(e){return e._rawAsyncValidators}function x(e){return e?Array.isArray(e)?e:[e]:[]}function b(e,t){return Array.isArray(e)?e.includes(t):e===t}function W(e,t){const n=x(t);return x(e).forEach(r=>{b(n,r)||n.push(r)}),n}function q(e,t){return x(t).filter(n=>!b(e,n))}class bt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Vt(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=At(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,n){return this.control?this.control.hasError(t,n):!1}getError(t,n){return this.control?this.control.getError(t,n):null}}class ue extends bt{get formDirective(){return null}get path(){return null}}class B extends bt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class ce{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let wt=(()=>{var e;class t extends ce{constructor(o){super(o)}}return e=t,e.ɵfac=function(o){return new(o||e)(a(B,2))},e.ɵdir=m({type:e,selectors:[[\"\",\"formControlName\",\"\"],[\"\",\"ngModel\",\"\"],[\"\",\"formControl\",\"\"]],hostVars:14,hostBindings:function(o,r){o&2&&Nt(\"ng-untouched\",r.isUntouched)(\"ng-touched\",r.isTouched)(\"ng-pristine\",r.isPristine)(\"ng-dirty\",r.isDirty)(\"ng-valid\",r.isValid)(\"ng-invalid\",r.isInvalid)(\"ng-pending\",r.isPending)},features:[V]}),t})();const y=\"VALID\",A=\"INVALID\",f=\"PENDING\",C=\"DISABLED\";function he(e){return(T(e)?e.validators:e)||null}function pe(e){return Array.isArray(e)?Vt(e):e||null}function _e(e,t){return(T(t)?t.asyncValidators:e)||null}function fe(e){return Array.isArray(e)?At(e):e||null}function T(e){return e!=null&&!Array.isArray(e)&&typeof e==\"object\"}class ge{constructor(t,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===y}get invalid(){return this.status===A}get pending(){return this.status==f}get disabled(){return this.status===C}get enabled(){return this.status!==C}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:\"change\"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(W(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(W(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(q(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(q(t,this._rawAsyncValidators))}hasValidator(t){return b(this._rawValidators,t)}hasAsyncValidator(t){return b(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=f,t.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const n=this._parentMarkedDirty(t.onlySelf);this.status=C,this.errors=null,this._forEachChild(o=>{o.disable({...t,onlySelf:!0})}),this._updateValue(),t.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:n}),this._onDisabledChange.forEach(o=>o(!0))}enable(t={}){const n=this._parentMarkedDirty(t.onlySelf);this.status=y,this._forEachChild(o=>{o.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:n}),this._onDisabledChange.forEach(o=>o(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===y||this.status===f)&&this._runAsyncValidator(t.emitEvent)),t.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?C:y}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=f,this._hasOwnPendingAsyncValidator=!0;const n=mt(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(o=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(o,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,n={}){this.errors=t,this._updateControlsErrors(n.emitEvent!==!1)}get(t){let n=t;return n==null||(Array.isArray(n)||(n=n.split(\".\")),n.length===0)?null:n.reduce((o,r)=>o&&o._find(r),this)}getError(t,n){const o=n?this.get(n):this;return o&&o.errors?o.errors[t]:null}hasError(t,n){return!!this.getError(t,n)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new g,this.statusChanges=new g}_calculateStatus(){return this._allControlsDisabled()?C:this.errors?A:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(f)?f:this._anyControlsHaveStatus(A)?A:y}_anyControlsHaveStatus(t){return this._anyControls(n=>n.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){T(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){const n=this._parent&&this._parent.dirty;return!t&&!!n&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=pe(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=fe(this._rawAsyncValidators)}}const Dt=new v(\"CallSetDisabledState\",{providedIn:\"root\",factory:()=>U}),U=\"always\";function me(e,t){return[...t.path,e]}function ye(e,t,n=U){ve(e,t),t.valueAccessor.writeValue(e.value),(e.disabled||n===\"always\")&&t.valueAccessor.setDisabledState?.(e.disabled),Ve(e,t),be(e,t),Ae(e,t),Ce(e,t)}function K(e,t){e.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(t)})}function Ce(e,t){if(t.valueAccessor.setDisabledState){const n=o=>{t.valueAccessor.setDisabledState(o)};e.registerOnDisabledChange(n),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(n)})}}function ve(e,t){const n=le(e);t.validator!==null?e.setValidators(R(n,t.validator)):typeof n==\"function\"&&e.setValidators([n]);const o=de(e);t.asyncValidator!==null?e.setAsyncValidators(R(o,t.asyncValidator)):typeof o==\"function\"&&e.setAsyncValidators([o]);const r=()=>e.updateValueAndValidity();K(t._rawValidators,r),K(t._rawAsyncValidators,r)}function Ve(e,t){t.valueAccessor.registerOnChange(n=>{e._pendingValue=n,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn===\"change\"&&Et(e,t)})}function Ae(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn===\"blur\"&&e._pendingChange&&Et(e,t),e.updateOn!==\"submit\"&&e.markAsTouched()})}function Et(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function be(e,t){const n=(o,r)=>{t.valueAccessor.writeValue(o),r&&t.viewToModelUpdate(o)};e.registerOnChange(n),t._registerOnDestroy(()=>{e._unregisterOnChange(n)})}function we(e,t){if(!e.hasOwnProperty(\"model\"))return!1;const n=e.model;return n.isFirstChange()?!0:!Object.is(t,n.currentValue)}function De(e){return Object.getPrototypeOf(e.constructor)===_t}function Ee(e,t){if(!t)return null;Array.isArray(t);let n,o,r;return t.forEach(i=>{i.constructor===M?n=i:De(i)?o=i:r=i}),r||o||n||null}function Q(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}function z(e){return typeof e==\"object\"&&e!==null&&Object.keys(e).length===2&&\"value\"in e&&\"disabled\"in e}const Me=class extends ge{constructor(t=null,n,o){super(he(n),_e(o,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),T(n)&&(n.nonNullable||n.initialValueIsDefault)&&(z(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,n={}){this.value=this._pendingValue=t,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(o=>o(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(t,n={}){this.setValue(t,n)}reset(t=this.defaultValue,n={}){this._applyFormState(t),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Q(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Q(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn===\"submit\"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){z(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};const Te={provide:B,useExisting:O(()=>L)},Y=Promise.resolve();let L=(()=>{var e;class t extends B{constructor(o,r,i,d,Tt,kt){super(),this._changeDetectorRef=Tt,this.callSetDisabledState=kt,this.control=new Me,this._registered=!1,this.name=\"\",this.update=new g,this._parent=o,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=Ee(this,d)}ngOnChanges(o){if(this._checkForErrors(),!this._registered||\"name\"in o){if(this._registered&&(this._checkName(),this.formDirective)){const r=o.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}\"isDisabled\"in o&&this._updateDisabled(o),we(o,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(o){this.viewModel=o,this.update.emit(o)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ye(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(o){Y.then(()=>{this.control.setValue(o,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(o){const r=o.isDisabled.currentValue,i=r!==0&&It(r);Y.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(o){return this._parent?me(o,this._parent):[o]}}return e=t,e.ɵfac=function(o){return new(o||e)(a(ue,9),a(oe,10),a(re,10),a(G,10),a(et,8),a(Dt,8))},e.ɵdir=m({type:e,selectors:[[\"\",\"ngModel\",\"\",3,\"formControlName\",\"\",3,\"formControl\",\"\"]],inputs:{name:\"name\",isDisabled:[k.None,\"disabled\",\"isDisabled\"],model:[k.None,\"ngModel\",\"model\"],options:[k.None,\"ngModelOptions\",\"options\"]},outputs:{update:\"ngModelChange\"},exportAs:[\"ngModel\"],features:[F([Te]),V,Pt]}),t})(),ke=(()=>{var e;class t{}return e=t,e.ɵfac=function(o){return new(o||e)},e.ɵmod=nt({type:e}),e.ɵinj=ot({}),t})(),Mt=(()=>{var e;class t{static withConfig(o){return{ngModule:t,providers:[{provide:Dt,useValue:o.callSetDisabledState??U}]}}}return e=t,e.ɵfac=function(o){return new(o||e)},e.ɵmod=nt({type:e}),e.ɵinj=ot({imports:[ke]}),t})();const Se=[\"todoInputRef\"],xe=e=>[\"mx-4 cursor-text text-sm\",e];function Fe(e,t){if(e&1){const n=N();s(0,\"div\",2)(1,\"input\",3,0),at(\"ngModelChange\",function(r){h(n);const i=u();return lt(i.title,r)||(i.title=r),p(r)}),c(\"focus\",function(){h(n);const r=u();return p(r.handleFocus())})(\"blur\",function(){h(n);const r=u();return p(r.handleBlur())})(\"keyup.enter\",function(){h(n);const r=u();return p(r.updateTodo())}),l(),s(3,\"label\",4),P(4,\" Edit todo title \"),l()()}if(e&2){const n=u();_(),dt(\"ngModel\",n.title)}}function Oe(e,t){if(e&1){const n=N();s(0,\"label\",5)(1,\"input\",6),c(\"change\",function(){h(n);const r=u();return p(r.toggleTodo())}),l(),s(2,\"span\",7),c(\"click\",function(){h(n);const r=u();return p(r.startEdit())}),P(3),l()(),s(4,\"button\",8),c(\"click\",function(){h(n);const r=u();return p(r.removeTodo())}),I(),s(5,\"svg\",9),E(6,\"path\",10),l()()}if(e&2){const n=u();$(\"for\",\"task_\"+n.todo._id),_(),$(\"id\",\"task_\"+n.todo._id),S(\"ngModel\",n.todo.completed),_(),S(\"ngClass\",Wt(5,xe,n.todo.completed?\"text-gray-400 line-through\":\"text-gray-600\")),_(),qt(\" \",n.todo.title,\" \")}}let Ne=(()=>{var e;class t{constructor(){this.remove=new g,this.update=new g,this.title=\"\",this.isEditing=!1}toggleTodo(){this.update.emit({...this.todo,completed:!this.todo.completed})}removeTodo(){this.remove.emit(this.todo)}startEdit(){this.isEditing=!0}handleBlur(){this.isEditing=!1,this.updateTodo()}handleFocus(){setTimeout(()=>this.title=this.todo.title)}updateTodo(){this.title?this.update.emit({...this.todo,title:this.title}):this.remove.emit(this.todo),this.isEditing=!1}ngAfterViewChecked(){this.isEditing&&this.inputRef?.nativeElement.focus()}}return e=t,e.ɵfac=function(o){return new(o||e)},e.ɵcmp=w({type:e,selectors:[[\"app-todo-item\"]],viewQuery:function(o,r){if(o&1&&jt(Se,5),o&2){let i;Ht(i=$t())&&(r.inputRef=i.first)}},inputs:{todo:\"todo\"},outputs:{remove:\"remove\",update:\"update\"},standalone:!0,features:[D],decls:3,vars:1,consts:[[\"todoInputRef\",\"\"],[1,\"group\",\"flex\",\"min-h-10\",\"w-full\",\"items-center\",\"rounded\",\"px-2\",\"hover:bg-gray-100\"],[1,\"flex\",\"w-full\"],[\"id\",\"edit-todo-title-input\",1,\"ml-7\",\"w-full\",\"px-2\",\"text-sm\",3,\"ngModelChange\",\"focus\",\"blur\",\"keyup.enter\",\"ngModel\"],[\"htmlFor\",\"edit-todo-title-input\",1,\"sr-only\"],[1,\"flex\",\"items-center\",3,\"for\"],[\"type\",\"checkbox\",1,\"checked:text-white',\",\"h-5\",\"w-5\",\"appearance-none\",\"rounded-full\",\"border-2\",\"border-gray-300\",\"text-transparent\",\"checked:border-green-400\",\"checked:bg-green-400\",3,\"change\",\"id\",\"ngModel\"],[3,\"click\",\"ngClass\"],[1,\"ml-auto\",\"hidden\",\"group-hover:block\",3,\"click\"],[\"xmlns\",\"http://www.w3.org/2000/svg\",\"fill\",\"none\",\"viewBox\",\"0 0 24 24\",\"strokeWidth\",\"{1.5}\",\"stroke\",\"currentColor\",1,\"h-5\",\"w-5\",\"text-gray-400\"],[\"strokeLinecap\",\"round\",\"strokeLinejoin\",\"round\",\"d\",\"M6 18 18 6M6 6l12 12\"]],template:function(o,r){o&1&&(s(0,\"div\",1),rt(1,Fe,5,1,\"div\",2)(2,Oe,7,7),l()),o&2&&(_(),it(1,r.isEditing?1:2))},dependencies:[Mt,M,ft,wt,L,st,Rt],encapsulation:2}),t})(),Pe=(()=>{var e;class t{constructor(){this.add=new g,this.title=\"\"}addTodo(){this.title&&(this.add.emit({title:this.title,completed:!1}),this.title=\"\")}}return e=t,e.ɵfac=function(o){return new(o||e)},e.ɵcmp=w({type:e,selectors:[[\"app-add-todo\"]],outputs:{add:\"add\"},standalone:!0,features:[D],decls:5,vars:1,consts:[[1,\"flex\",\"h-8\",\"w-full\",\"items-center\",\"rounded\",\"px-2\",\"text-sm\"],[3,\"click\"],[\"xmlns\",\"http://www.w3.org/2000/svg\",\"viewBox\",\"0 0 24 24\",\"strokeWidth\",\"{1.5}\",\"stroke\",\"currentColor\",1,\"h-5\",\"w-5\",\"fill-current\",\"text-gray-400\"],[\"strokeLinecap\",\"round\",\"strokeLinejoin\",\"round\",\"d\",\"M12 4.5v15m7.5-7.5h-15\"],[\"type\",\"text\",\"placeholder\",\"What needs to get done?\",1,\"ml-4\",\"h-8\",\"flex-grow\",\"bg-transparent\",\"text-gray-600\",\"focus:outline-none\",3,\"ngModelChange\",\"keyup.enter\",\"ngModel\"]],template:function(o,r){o&1&&(s(0,\"div\",0)(1,\"button\",1),c(\"click\",function(){return r.addTodo()}),I(),s(2,\"svg\",2),E(3,\"path\",3),l()(),ut(),s(4,\"input\",4),at(\"ngModelChange\",function(d){return lt(r.title,d)||(r.title=d),d}),c(\"keyup.enter\",function(){return r.addTodo()}),l()()),o&2&&(_(4),dt(\"ngModel\",r.title))},dependencies:[Mt,M,wt,L],encapsulation:2}),t})();const Ie=(e,t)=>t._id;function Ge(e,t){if(e&1){const n=N();s(0,\"li\")(1,\"app-todo-item\",8),c(\"remove\",function(r){h(n);const i=u(2);return p(i.removeTodo(r))})(\"update\",function(r){h(n);const i=u(2);return p(i.updateTodo(r))}),l()()}if(e&2){const n=t.$implicit;_(),S(\"todo\",n)}}function Be(e,t){if(e&1&&(s(0,\"ul\",5),zt(1,Ge,2,1,\"li\",null,Ie),ct(3,\"async\"),l()),e&2){const n=u();_(),Yt(ht(3,0,n.todos$))}}let Ue=(()=>{var e;class t{constructor(o,r){this.todosService=o,this.cdf=r,this.todos$=new Qt([])}ngOnInit(){this.loadTodos()}loadTodos(){this.todosService.getAllTodos().subscribe(o=>{this.todos$.next(o),this.cdf.detectChanges()})}removeTodo(o){this.todosService.removeTodo(o).subscribe(()=>this.loadTodos())}updateTodo(o){this.todosService.updateTodo(o).subscribe(()=>this.loadTodos())}addTodo(o){this.todosService.addTodo(o).subscribe(()=>this.loadTodos())}}return e=t,e.ɵfac=function(o){return new(o||e)(a(Xt),a(et))},e.ɵcmp=w({type:e,selectors:[[\"app-todo-list\"]],standalone:!0,features:[D],decls:10,vars:3,consts:[[1,\"mx-auto\",\"mt-20\",\"flex\",\"max-w-96\",\"flex-col\",\"rounded-lg\",\"bg-white\",\"p-8\",\"shadow-lg\"],[1,\"flex\",\"items-center\"],[\"xmlns\",\"http://www.w3.org/2000/svg\",\"fill\",\"none\",\"viewBox\",\"0 0 24 24\",\"stroke-width\",\"1.5\",\"stroke\",\"currentColor\",1,\"h-8\",\"w-8\",\"text-indigo-500\"],[\"stroke-linecap\",\"round\",\"stroke-linejoin\",\"round\",\"d\",\"M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z\"],[1,\"ml-3\",\"text-lg\",\"font-semibold\",\"text-gray-600\"],[1,\"mt-5\",\"flex\",\"flex-col\",\"gap-2\"],[1,\"mt-4\"],[3,\"add\"],[3,\"remove\",\"update\",\"todo\"]],template:function(o,r){if(o&1&&(s(0,\"section\",0)(1,\"div\",1),I(),s(2,\"svg\",2),E(3,\"path\",3),l(),ut(),s(4,\"h1\",4),P(5,\"Todos\"),l()(),rt(6,Be,4,2,\"ul\",5),ct(7,\"async\"),s(8,\"div\",6)(9,\"app-add-todo\",7),c(\"add\",function(d){return r.addTodo(d)}),l()()()),o&2){let i;_(6),it(6,(i=ht(7,1,r.todos$))!=null&&i.length?6:-1)}},dependencies:[Ne,Pe,st,Kt],styles:[`[_nghost-%COMP%] {\n      width: 100%;\n    }`]}),t})(),Re=(()=>{var e;class t{}return e=t,e.ɵfac=function(o){return new(o||e)},e.ɵcmp=w({type:e,selectors:[[\"app-home-page\"]],standalone:!0,features:[D],decls:2,vars:0,consts:[[1,\"flex\",\"min-h-screen\",\"bg-gray-100\",\"p-5\",\"text-gray-600\"]],template:function(o,r){o&1&&(s(0,\"main\",0),E(1,\"app-todo-list\"),l())},dependencies:[Ue],encapsulation:2}),t})();export{Re as default};\n";

export { _home__pageDUdLISHW as default };
//# sourceMappingURL=(home).page-DUdLISHW.mjs.map
