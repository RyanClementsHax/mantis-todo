import { b as __defineComponent, d as __StandaloneFeature, w as __elementStart, e as __element, x as __elementEnd, y as __directiveInject, z as __namespaceSVG, B as __namespaceHTML, C as __text, E as __template, m as __pipe, p as __listener, F as __advance, G as __conditional, n as __pipeBind1, H as CommonModule, o as AsyncPipe, h as __viewQuery, j as __queryRefresh, k as __loadQuery, J as NgClass, K as __twoWayListener, M as __twoWayProperty, O as ChangeDetectorRef, Q as __inject, S as HttpClient, a as __defineInjectable, T as __getInheritedFactory, ɵ as __defineDirective, U as __ProvidersFeature, W as __InheritDefinitionFeature, X as Renderer2, Y as ElementRef, Z as __classProp, _ as InputFlags, l as __NgOnChangesFeature, $ as __defineNgModule, a0 as __defineInjector, a1 as __getCurrentView, a2 as __restoreView, a3 as __nextContext, a4 as __resetView, a5 as __propertyInterpolate, g as __property, a6 as __pureFunction1, a7 as __textInterpolate1, a8 as EventEmitter, a9 as __twoWayBindingSet, I as InjectionToken, aa as __repeaterCreate, ab as __repeater, ac as forwardRef, ad as getDOM, ae as RuntimeError, af as booleanAttribute, ag as isPromise } from './renderer.mjs';
import { BehaviorSubject, retry, catchError, of, from, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import 'zone.js/node';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '../raw/index.mjs';

let ConfigService = /* @__PURE__ */ (() => {
  var _ConfigService;
  class ConfigService2 {
    getBackendBaseUrl() {
      return "/api/v1";
    }
  }
  _ConfigService = ConfigService2;
  _ConfigService.\u0275fac = function ConfigService_Factory(t) {
    return new (t || _ConfigService)();
  };
  _ConfigService.\u0275prov = /* @__PURE__ */ __defineInjectable({
    token: _ConfigService,
    factory: _ConfigService.\u0275fac,
    providedIn: "root"
  });
  return ConfigService2;
})();
let TodosService = /* @__PURE__ */ (() => {
  var _TodosService;
  class TodosService2 {
    constructor(http, config) {
      this.http = http;
      this.config = config;
    }
    getAllTodos() {
      return this.http.get(`${this.config.getBackendBaseUrl()}/todos`).pipe(retry(3), catchError(() => of([])));
    }
    addTodo(todo) {
      return this.http.post(`${this.config.getBackendBaseUrl()}/todos`, todo);
    }
    updateTodo(todo) {
      return this.http.patch(`${this.config.getBackendBaseUrl()}/todos/${todo._id}`, todo);
    }
    removeTodo(todo) {
      return this.http.delete(`${this.config.getBackendBaseUrl()}/todos/${todo._id}`);
    }
  }
  _TodosService = TodosService2;
  _TodosService.\u0275fac = function TodosService_Factory(t) {
    return new (t || _TodosService)(__inject(HttpClient), __inject(ConfigService));
  };
  _TodosService.\u0275prov = /* @__PURE__ */ __defineInjectable({
    token: _TodosService,
    factory: _TodosService.\u0275fac,
    providedIn: "root"
  });
  return TodosService2;
})();
let BaseControlValueAccessor = /* @__PURE__ */ (() => {
  var _BaseControlValueAccessor;
  class BaseControlValueAccessor2 {
    constructor(_renderer, _elementRef) {
      this._renderer = _renderer;
      this._elementRef = _elementRef;
      this.onChange = (_) => {
      };
      this.onTouched = () => {
      };
    }
    /**
     * Helper method that sets a property on a target element using the current Renderer
     * implementation.
     * @nodoc
     */
    setProperty(key, value) {
      this._renderer.setProperty(this._elementRef.nativeElement, key, value);
    }
    /**
     * Registers a function called when the control is touched.
     * @nodoc
     */
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */
    registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * Sets the "disabled" property on the range input element.
     * @nodoc
     */
    setDisabledState(isDisabled) {
      this.setProperty("disabled", isDisabled);
    }
  }
  _BaseControlValueAccessor = BaseControlValueAccessor2;
  _BaseControlValueAccessor.\u0275fac = function _BaseControlValueAccessor_Factory(t) {
    return new (t || _BaseControlValueAccessor)(__directiveInject(Renderer2), __directiveInject(ElementRef));
  };
  _BaseControlValueAccessor.\u0275dir = /* @__PURE__ */ __defineDirective({
    type: _BaseControlValueAccessor
  });
  return BaseControlValueAccessor2;
})();
let BuiltInControlValueAccessor = /* @__PURE__ */ (() => {
  var _BuiltInControlValueAccessor;
  class BuiltInControlValueAccessor2 extends BaseControlValueAccessor {
  }
  _BuiltInControlValueAccessor = BuiltInControlValueAccessor2;
  _BuiltInControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
    let \u0275_BuiltInControlValueAccessor_BaseFactory;
    return function _BuiltInControlValueAccessor_Factory(t) {
      return (\u0275_BuiltInControlValueAccessor_BaseFactory || (\u0275_BuiltInControlValueAccessor_BaseFactory = __getInheritedFactory(_BuiltInControlValueAccessor)))(t || _BuiltInControlValueAccessor);
    };
  })();
  _BuiltInControlValueAccessor.\u0275dir = /* @__PURE__ */ __defineDirective({
    type: _BuiltInControlValueAccessor,
    features: [__InheritDefinitionFeature]
  });
  return BuiltInControlValueAccessor2;
})();
const NG_VALUE_ACCESSOR = /* @__PURE__ */ new InjectionToken("");
const CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: /* @__PURE__ */ forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
let CheckboxControlValueAccessor = /* @__PURE__ */ (() => {
  var _CheckboxControlValueAccessor;
  class CheckboxControlValueAccessor2 extends BuiltInControlValueAccessor {
    /**
     * Sets the "checked" property on the input element.
     * @nodoc
     */
    writeValue(value) {
      this.setProperty("checked", value);
    }
  }
  _CheckboxControlValueAccessor = CheckboxControlValueAccessor2;
  _CheckboxControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
    let \u0275_CheckboxControlValueAccessor_BaseFactory;
    return function _CheckboxControlValueAccessor_Factory(t) {
      return (\u0275_CheckboxControlValueAccessor_BaseFactory || (\u0275_CheckboxControlValueAccessor_BaseFactory = __getInheritedFactory(_CheckboxControlValueAccessor)))(t || _CheckboxControlValueAccessor);
    };
  })();
  _CheckboxControlValueAccessor.\u0275dir = /* @__PURE__ */ __defineDirective({
    type: _CheckboxControlValueAccessor,
    selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
    hostBindings: function _CheckboxControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        __listener("change", function _CheckboxControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.checked);
        })("blur", function _CheckboxControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    features: [__ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), __InheritDefinitionFeature]
  });
  return CheckboxControlValueAccessor2;
})();
const DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: /* @__PURE__ */ forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
const COMPOSITION_BUFFER_MODE = /* @__PURE__ */ new InjectionToken("");
let DefaultValueAccessor = /* @__PURE__ */ (() => {
  var _DefaultValueAccessor;
  class DefaultValueAccessor2 extends BaseControlValueAccessor {
    constructor(renderer, elementRef, _compositionMode) {
      super(renderer, elementRef);
      this._compositionMode = _compositionMode;
      this._composing = false;
      if (this._compositionMode == null) {
        this._compositionMode = !_isAndroid();
      }
    }
    /**
     * Sets the "value" property on the input element.
     * @nodoc
     */
    writeValue(value) {
      const normalizedValue = value == null ? "" : value;
      this.setProperty("value", normalizedValue);
    }
    /** @internal */
    _handleInput(value) {
      if (!this._compositionMode || this._compositionMode && !this._composing) {
        this.onChange(value);
      }
    }
    /** @internal */
    _compositionStart() {
      this._composing = true;
    }
    /** @internal */
    _compositionEnd(value) {
      this._composing = false;
      this._compositionMode && this.onChange(value);
    }
  }
  _DefaultValueAccessor = DefaultValueAccessor2;
  _DefaultValueAccessor.\u0275fac = function _DefaultValueAccessor_Factory(t) {
    return new (t || _DefaultValueAccessor)(__directiveInject(Renderer2), __directiveInject(ElementRef), __directiveInject(COMPOSITION_BUFFER_MODE, 8));
  };
  _DefaultValueAccessor.\u0275dir = /* @__PURE__ */ __defineDirective({
    type: _DefaultValueAccessor,
    selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
    hostBindings: function _DefaultValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        __listener("input", function _DefaultValueAccessor_input_HostBindingHandler($event) {
          return ctx._handleInput($event.target.value);
        })("blur", function _DefaultValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        })("compositionstart", function _DefaultValueAccessor_compositionstart_HostBindingHandler() {
          return ctx._compositionStart();
        })("compositionend", function _DefaultValueAccessor_compositionend_HostBindingHandler($event) {
          return ctx._compositionEnd($event.target.value);
        });
      }
    },
    features: [__ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), __InheritDefinitionFeature]
  });
  return DefaultValueAccessor2;
})();
const NG_VALIDATORS = /* @__PURE__ */ new InjectionToken("");
const NG_ASYNC_VALIDATORS = /* @__PURE__ */ new InjectionToken("");
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? {
      ...res,
      ...errors
    } : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null)
    return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators)
    return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
class AbstractControlDirective {
  constructor() {
    this._rawValidators = [];
    this._rawAsyncValidators = [];
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Reports the value of the control if it is present, otherwise null.
   */
  get value() {
    return this.control ? this.control.value : null;
  }
  /**
   * @description
   * Reports whether the control is valid. A control is considered valid if no
   * validation errors exist with the current value.
   * If the control is not present, null is returned.
   */
  get valid() {
    return this.control ? this.control.valid : null;
  }
  /**
   * @description
   * Reports whether the control is invalid, meaning that an error exists in the input value.
   * If the control is not present, null is returned.
   */
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  /**
   * @description
   * Reports whether a control is pending, meaning that async validation is occurring and
   * errors are not yet available for the input value. If the control is not present, null is
   * returned.
   */
  get pending() {
    return this.control ? this.control.pending : null;
  }
  /**
   * @description
   * Reports whether the control is disabled, meaning that the control is disabled
   * in the UI and is exempt from validation checks and excluded from aggregate
   * values of ancestor controls. If the control is not present, null is returned.
   */
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  /**
   * @description
   * Reports whether the control is enabled, meaning that the control is included in ancestor
   * calculations of validity or value. If the control is not present, null is returned.
   */
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  /**
   * @description
   * Reports the control's validation errors. If the control is not present, null is returned.
   */
  get errors() {
    return this.control ? this.control.errors : null;
  }
  /**
   * @description
   * Reports whether the control is pristine, meaning that the user has not yet changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  /**
   * @description
   * Reports whether the control is dirty, meaning that the user has changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  /**
   * @description
   * Reports whether the control is touched, meaning that the user has triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get touched() {
    return this.control ? this.control.touched : null;
  }
  /**
   * @description
   * Reports the validation status of the control. Possible values include:
   * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
   * If the control is not present, null is returned.
   */
  get status() {
    return this.control ? this.control.status : null;
  }
  /**
   * @description
   * Reports whether the control is untouched, meaning that the user has not yet triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  /**
   * @description
   * Returns a multicasting observable that emits a validation status whenever it is
   * calculated for the control. If the control is not present, null is returned.
   */
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  /**
   * @description
   * Returns a multicasting observable of value changes for the control that emits every time the
   * value of the control changes in the UI or programmatically.
   * If the control is not present, null is returned.
   */
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return null;
  }
  /**
   * Sets synchronous validators for this directive.
   * @internal
   */
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  /**
   * Sets asynchronous validators for this directive.
   * @internal
   */
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  /**
   * @description
   * Synchronous validator function composed of all the synchronous validators registered with this
   * directive.
   */
  get validator() {
    return this._composedValidatorFn || null;
  }
  /**
   * @description
   * Asynchronous validator function composed of all the asynchronous validators registered with
   * this directive.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  /**
   * Internal function to register callbacks that should be invoked
   * when directive instance is being destroyed.
   * @internal
   */
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  /**
   * Internal function to invoke all registered "on destroy" callbacks.
   * Note: calling this function also clears the list of callbacks.
   * @internal
   */
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Resets the control with the provided value if the control is present.
   */
  reset(value = void 0) {
    if (this.control)
      this.control.reset(value);
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
}
class ControlContainer extends AbstractControlDirective {
  /**
   * @description
   * The top-level form directive for the control.
   */
  get formDirective() {
    return null;
  }
  /**
   * @description
   * The path to this group.
   */
  get path() {
    return null;
  }
}
class NgControl extends AbstractControlDirective {
  constructor() {
    super(...arguments);
    this._parent = null;
    this.name = null;
    this.valueAccessor = null;
  }
}
class AbstractControlStatus {
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    var _a, _b;
    return !!((_b = (_a = this._cd) == null ? void 0 : _a.control) == null ? void 0 : _b.touched);
  }
  get isUntouched() {
    var _a, _b;
    return !!((_b = (_a = this._cd) == null ? void 0 : _a.control) == null ? void 0 : _b.untouched);
  }
  get isPristine() {
    var _a, _b;
    return !!((_b = (_a = this._cd) == null ? void 0 : _a.control) == null ? void 0 : _b.pristine);
  }
  get isDirty() {
    var _a, _b;
    return !!((_b = (_a = this._cd) == null ? void 0 : _a.control) == null ? void 0 : _b.dirty);
  }
  get isValid() {
    var _a, _b;
    return !!((_b = (_a = this._cd) == null ? void 0 : _a.control) == null ? void 0 : _b.valid);
  }
  get isInvalid() {
    var _a, _b;
    return !!((_b = (_a = this._cd) == null ? void 0 : _a.control) == null ? void 0 : _b.invalid);
  }
  get isPending() {
    var _a, _b;
    return !!((_b = (_a = this._cd) == null ? void 0 : _a.control) == null ? void 0 : _b.pending);
  }
  get isSubmitted() {
    var _a;
    return !!((_a = this._cd) == null ? void 0 : _a.submitted);
  }
}
let NgControlStatus = /* @__PURE__ */ (() => {
  var _NgControlStatus;
  class NgControlStatus2 extends AbstractControlStatus {
    constructor(cd) {
      super(cd);
    }
  }
  _NgControlStatus = NgControlStatus2;
  _NgControlStatus.\u0275fac = function _NgControlStatus_Factory(t) {
    return new (t || _NgControlStatus)(__directiveInject(NgControl, 2));
  };
  _NgControlStatus.\u0275dir = /* @__PURE__ */ __defineDirective({
    type: _NgControlStatus,
    selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
    hostVars: 14,
    hostBindings: function _NgControlStatus_HostBindings(rf, ctx) {
      if (rf & 2) {
        __classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
      }
    },
    features: [__InheritDefinitionFeature]
  });
  return NgControlStatus2;
})();
const VALID = "VALID";
const INVALID = "INVALID";
const PENDING = "PENDING";
const DISABLED = "DISABLED";
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
class AbstractControl {
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  constructor(validators, asyncValidators) {
    this._pendingDirty = false;
    this._hasOwnPendingAsyncValidator = false;
    this._pendingTouched = false;
    this._onCollectionChange = () => {
    };
    this._parent = null;
    this.pristine = true;
    this.touched = false;
    this._onDisabledChange = [];
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  /**
   * Returns the function that is used to determine the validity of this control synchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  /**
   * Returns the function that is used to determine the validity of this control asynchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  /**
   * The parent control.
   */
  get parent() {
    return this._parent;
  }
  /**
   * A control is `valid` when its `status` is `VALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control has passed all of its validation tests,
   * false otherwise.
   */
  get valid() {
    return this.status === VALID;
  }
  /**
   * A control is `invalid` when its `status` is `INVALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control has failed one or more of its validation checks,
   * false otherwise.
   */
  get invalid() {
    return this.status === INVALID;
  }
  /**
   * A control is `pending` when its `status` is `PENDING`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control is in the process of conducting a validation check,
   * false otherwise.
   */
  get pending() {
    return this.status == PENDING;
  }
  /**
   * A control is `disabled` when its `status` is `DISABLED`.
   *
   * Disabled controls are exempt from validation checks and
   * are not included in the aggregate value of their ancestor
   * controls.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control is disabled, false otherwise.
   */
  get disabled() {
    return this.status === DISABLED;
  }
  /**
   * A control is `enabled` as long as its `status` is not `DISABLED`.
   *
   * @returns True if the control has any status other than 'DISABLED',
   * false if the status is 'DISABLED'.
   *
   * @see {@link AbstractControl.status}
   *
   */
  get enabled() {
    return this.status !== DISABLED;
  }
  /**
   * A control is `dirty` if the user has changed the value
   * in the UI.
   *
   * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get dirty() {
    return !this.pristine;
  }
  /**
   * True if the control has not been marked as touched
   *
   * A control is `untouched` if the user has not yet triggered
   * a `blur` event on it.
   */
  get untouched() {
    return !this.touched;
  }
  /**
   * Reports the update strategy of the `AbstractControl` (meaning
   * the event on which the control updates itself).
   * Possible values: `'change'` | `'blur'` | `'submit'`
   * Default value: `'change'`
   */
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  /**
   * Sets the synchronous validators that are active on this control.  Calling
   * this overwrites any existing synchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addValidators()` method instead.
   */
  setValidators(validators) {
    this._assignValidators(validators);
  }
  /**
   * Sets the asynchronous validators that are active on this control. Calling this
   * overwrites any existing asynchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addAsyncValidators()` method instead.
   */
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  /**
   * Add a synchronous validator or validators to this control, without affecting other validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect. If duplicate validator functions
   * are present in the `validators` array, only the first instance would be added to a form
   * control.
   *
   * @param validators The new validator function or functions to add to this control.
   */
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  /**
   * Add an asynchronous validator or validators to this control, without affecting other
   * validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect.
   *
   * @param validators The new asynchronous validator function or functions to add to this control.
   */
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Remove a synchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found,
   * it is ignored.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<string | null>('', Validators.required);
   * ctrl.removeValidators(Validators.required);
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<string | null>('', minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   *
   * ctrl.removeValidators(minValidator);
   * ```
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The validator or validators to remove.
   */
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  /**
   * Remove an asynchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found, it
   * is ignored.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The asynchronous validator or validators to remove.
   */
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Check whether a synchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<number | null>(0, Validators.required);
   * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<number | null>(0, minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   * ```
   *
   * @param validator The validator to check for presence. Compared by function reference.
   * @returns Whether the provided validator was found on this control.
   */
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  /**
   * Check whether an asynchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @param validator The asynchronous validator to check for presence. Compared by function
   *     reference.
   * @returns Whether the provided asynchronous validator was found on this control.
   */
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  /**
   * Empties out the synchronous validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearValidators() {
    this.validator = null;
  }
  /**
   * Empties out the async validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  /**
   * Marks the control as `touched`. A control is touched by focus and
   * blur events that do not change the value.
   *
   * @see {@link markAsUntouched()}
   * @see {@link markAsDirty()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsTouched(opts = {}) {
    this.touched = true;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsTouched(opts);
    }
  }
  /**
   * Marks the control and all its descendant controls as `touched`.
   * @see {@link markAsTouched()}
   */
  markAllAsTouched() {
    this.markAsTouched({
      onlySelf: true
    });
    this._forEachChild((control) => control.markAllAsTouched());
  }
  /**
   * Marks the control as `untouched`.
   *
   * If the control has any children, also marks all children as `untouched`
   * and recalculates the `touched` status of all parent controls.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsDirty()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after the marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsUntouched(opts = {}) {
    this.touched = false;
    this._pendingTouched = false;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts);
    }
  }
  /**
   * Marks the control as `dirty`. A control becomes dirty when
   * the control's value is changed through the UI; compare `markAsTouched`.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsUntouched()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsDirty(opts = {}) {
    this.pristine = false;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsDirty(opts);
    }
  }
  /**
   * Marks the control as `pristine`.
   *
   * If the control has any children, marks all children as `pristine`,
   * and recalculates the `pristine` status of all parent
   * controls.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsUntouched()}
   * @see {@link markAsDirty()}
   *
   * @param opts Configuration options that determine how the control emits events after
   * marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsPristine(opts = {}) {
    this.pristine = true;
    this._pendingDirty = false;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts);
    }
  }
  /**
   * Marks the control as `pending`.
   *
   * A control is pending while the control performs async validation.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates changes and
   * emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
   * observable emits an event with the latest status the control is marked pending.
   * When false, no events are emitted.
   *
   */
  markAsPending(opts = {}) {
    this.status = PENDING;
    if (opts.emitEvent !== false) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsPending(opts);
    }
  }
  /**
   * Disables the control. This means the control is exempt from validation checks and
   * excluded from the aggregate value of any parent. Its status is `DISABLED`.
   *
   * If the control has children, all children are also disabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control is disabled.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is disabled.
   * When false, no events are emitted.
   */
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable({
        ...opts,
        onlySelf: true
      });
    });
    this._updateValue();
    if (opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors({
      ...opts,
      skipPristineCheck
    });
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  /**
   * Enables the control. This means the control is included in validation checks and
   * the aggregate value of its parent. Its status recalculates based on its value and
   * its validators.
   *
   * By default, if the control has children, all children are enabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configure options that control how the control propagates changes and
   * emits events when marked as untouched
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is enabled.
   * When false, no events are emitted.
   */
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable({
        ...opts,
        onlySelf: true
      });
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors({
      ...opts,
      skipPristineCheck
    });
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts) {
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent._updatePristine();
      }
      this._parent._updateTouched();
    }
  }
  /**
   * Sets the parent of the control
   *
   * @param parent The new parent.
   */
  setParent(parent) {
    this._parent = parent;
  }
  /**
   * The raw value of this control. For most control implementations, the raw value will include
   * disabled children.
   */
  getRawValue() {
    return this.value;
  }
  /**
   * Recalculates the value and validation status of the control.
   *
   * By default, it also updates the value and validity of its ancestors.
   *
   * @param opts Configuration options determine how the control propagates changes and emits events
   * after updates and validity checks are applied.
   * * `onlySelf`: When true, only update this control. When false or not supplied,
   * update all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is updated.
   * When false, no events are emitted.
   */
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(opts.emitEvent);
      }
    }
    if (opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
    }
  }
  /** @internal */
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = true;
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = false;
        this.setErrors(errors, {
          emitEvent
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      this._hasOwnPendingAsyncValidator = false;
    }
  }
  /**
   * Sets errors on a form control when running validations manually, rather than automatically.
   *
   * Calling `setErrors` also updates the validity of the parent control.
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control errors are set.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
   * observable emits an event after the errors are set.
   *
   * @usageNotes
   *
   * ### Manually set the errors for a control
   *
   * ```
   * const login = new FormControl('someLogin');
   * login.setErrors({
   *   notUnique: true
   * });
   *
   * expect(login.valid).toEqual(false);
   * expect(login.errors).toEqual({ notUnique: true });
   *
   * login.setValue('someOtherLogin');
   *
   * expect(login.valid).toEqual(true);
   * ```
   */
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false);
  }
  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control. If a string is provided, passing it as a string literal will result in improved type
   * information. Likewise, if an array is provided, passing it `as const` will cause improved type
   * information to be available.
   *
   * @usageNotes
   * ### Retrieve a nested control
   *
   * For example, to get a `name` control nested within a `person` sub-group:
   *
   * * `this.form.get('person.name');`
   *
   * -OR-
   *
   * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
   *
   * ### Retrieve a control in a FormArray
   *
   * When accessing an element inside a FormArray, you can use an element index.
   * For example, to get a `price` control from the first element in an `items` array you can use:
   *
   * * `this.form.get('items.0.price');`
   *
   * -OR-
   *
   * * `this.form.get(['items', 0, 'price']);`
   */
  get(path) {
    let currPath = path;
    if (currPath == null)
      return null;
    if (!Array.isArray(currPath))
      currPath = currPath.split(".");
    if (currPath.length === 0)
      return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control && control.errors ? control.errors[errorCode] : null;
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  /**
   * Retrieves the top-level ancestor of this control.
   */
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  /** @internal */
  _updateControlsErrors(emitEvent) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent);
    }
  }
  /** @internal */
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled())
      return DISABLED;
    if (this.errors)
      return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING))
      return PENDING;
    if (this._anyControlsHaveStatus(INVALID))
      return INVALID;
    return VALID;
  }
  /** @internal */
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  /** @internal */
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  /** @internal */
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  /** @internal */
  _updatePristine(opts = {}) {
    this.pristine = !this._anyControlsDirty();
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts);
    }
  }
  /** @internal */
  _updateTouched(opts = {}) {
    this.touched = this._anyControlsTouched();
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts);
    }
  }
  /** @internal */
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  /** @internal */
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  /**
   * Check to see if parent has been marked artificially dirty.
   *
   * @internal
   */
  _parentMarkedDirty(onlySelf) {
    const parentDirty = this._parent && this._parent.dirty;
    return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
  }
  /** @internal */
  _find(name) {
    return null;
  }
  /**
   * Internal implementation of the `setValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  /**
   * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
}
const CALL_SET_DISABLED_STATE = /* @__PURE__ */ new InjectionToken("CallSetDisabledState", {
  providedIn: "root",
  factory: () => setDisabledStateDefault
});
const setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  var _a, _b;
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    (_b = (_a = dir.valueAccessor).setDisabledState) == null ? void 0 : _b.call(_a, control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange)
      validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change")
      updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange)
      updateControl(control, dir);
    if (control.updateOn !== "submit")
      control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty)
    control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent)
      dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1)
    return `path: '${path.join(" -> ")}'`;
  if (path == null ? void 0 : path[0])
    return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model"))
    return false;
  const change = changes["model"];
  if (change.isFirstChange())
    return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors)
    return null;
  if (!Array.isArray(valueAccessors) && false)
    _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && false)
        _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && false)
        _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor)
    return customAccessor;
  if (builtinAccessor)
    return builtinAccessor;
  if (defaultAccessor)
    return defaultAccessor;
  return null;
}
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
const FormControl = class FormControl2 extends AbstractControl {
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.defaultValue = null;
    this._onChange = [];
    this._pendingChange = false;
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set
      // `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    this._pendingChange = false;
  }
  /**  @internal */
  _updateValue() {
  }
  /**  @internal */
  _anyControls(condition) {
    return false;
  }
  /**  @internal */
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  /** @internal */
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  /** @internal */
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  /** @internal */
  _forEachChild(cb) {
  }
  /** @internal */
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty)
        this.markAsDirty();
      if (this._pendingTouched)
        this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
const formControlBinding$1 = {
  provide: NgControl,
  useExisting: /* @__PURE__ */ forwardRef(() => NgModel)
};
const resolvedPromise = /* @__PURE__ */ (() => Promise.resolve())();
let NgModel = /* @__PURE__ */ (() => {
  var _NgModel;
  class NgModel2 extends NgControl {
    constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
      super();
      this._changeDetectorRef = _changeDetectorRef;
      this.callSetDisabledState = callSetDisabledState;
      this.control = new FormControl();
      this._registered = false;
      this.name = "";
      this.update = new EventEmitter();
      this._parent = parent;
      this._setValidators(validators);
      this._setAsyncValidators(asyncValidators);
      this.valueAccessor = selectValueAccessor(this, valueAccessors);
    }
    /** @nodoc */
    ngOnChanges(changes) {
      this._checkForErrors();
      if (!this._registered || "name" in changes) {
        if (this._registered) {
          this._checkName();
          if (this.formDirective) {
            const oldName = changes["name"].previousValue;
            this.formDirective.removeControl({
              name: oldName,
              path: this._getPath(oldName)
            });
          }
        }
        this._setUpControl();
      }
      if ("isDisabled" in changes) {
        this._updateDisabled(changes);
      }
      if (isPropertyUpdated(changes, this.viewModel)) {
        this._updateValue(this.model);
        this.viewModel = this.model;
      }
    }
    /** @nodoc */
    ngOnDestroy() {
      this.formDirective && this.formDirective.removeControl(this);
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */
    get path() {
      return this._getPath(this.name);
    }
    /**
     * @description
     * The top-level directive for this control if present, otherwise null.
     */
    get formDirective() {
      return this._parent ? this._parent.formDirective : null;
    }
    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value emitted by `ngModelChange`.
     */
    viewToModelUpdate(newValue) {
      this.viewModel = newValue;
      this.update.emit(newValue);
    }
    _setUpControl() {
      this._setUpdateStrategy();
      this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
      this._registered = true;
    }
    _setUpdateStrategy() {
      if (this.options && this.options.updateOn != null) {
        this.control._updateOn = this.options.updateOn;
      }
    }
    _isStandalone() {
      return !this._parent || !!(this.options && this.options.standalone);
    }
    _setUpStandalone() {
      setUpControl(this.control, this, this.callSetDisabledState);
      this.control.updateValueAndValidity({
        emitEvent: false
      });
    }
    _checkForErrors() {
      if (!this._isStandalone()) {
        this._checkParentType();
      }
      this._checkName();
    }
    _checkParentType() {
    }
    _checkName() {
      if (this.options && this.options.name)
        this.name = this.options.name;
      if (!this._isStandalone() && !this.name && false) {
        throw missingNameException();
      }
    }
    _updateValue(value) {
      resolvedPromise.then(() => {
        var _a;
        this.control.setValue(value, {
          emitViewToModelChange: false
        });
        (_a = this._changeDetectorRef) == null ? void 0 : _a.markForCheck();
      });
    }
    _updateDisabled(changes) {
      const disabledValue = changes["isDisabled"].currentValue;
      const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
      resolvedPromise.then(() => {
        var _a;
        if (isDisabled && !this.control.disabled) {
          this.control.disable();
        } else if (!isDisabled && this.control.disabled) {
          this.control.enable();
        }
        (_a = this._changeDetectorRef) == null ? void 0 : _a.markForCheck();
      });
    }
    _getPath(controlName) {
      return this._parent ? controlPath(controlName, this._parent) : [controlName];
    }
  }
  _NgModel = NgModel2;
  _NgModel.\u0275fac = function _NgModel_Factory(t) {
    return new (t || _NgModel)(__directiveInject(ControlContainer, 9), __directiveInject(NG_VALIDATORS, 10), __directiveInject(NG_ASYNC_VALIDATORS, 10), __directiveInject(NG_VALUE_ACCESSOR, 10), __directiveInject(ChangeDetectorRef, 8), __directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  _NgModel.\u0275dir = /* @__PURE__ */ __defineDirective({
    type: _NgModel,
    selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
    inputs: {
      name: "name",
      isDisabled: [InputFlags.None, "disabled", "isDisabled"],
      model: [InputFlags.None, "ngModel", "model"],
      options: [InputFlags.None, "ngModelOptions", "options"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngModel"],
    features: [__ProvidersFeature([formControlBinding$1]), __InheritDefinitionFeature, __NgOnChangesFeature]
  });
  return NgModel2;
})();
let \u0275InternalFormsSharedModule = /* @__PURE__ */ (() => {
  var _\u0275InternalFormsSharedModule;
  class \u0275InternalFormsSharedModule2 {
  }
  _\u0275InternalFormsSharedModule = \u0275InternalFormsSharedModule2;
  _\u0275InternalFormsSharedModule.\u0275fac = function _\u0275InternalFormsSharedModule_Factory(t) {
    return new (t || _\u0275InternalFormsSharedModule)();
  };
  _\u0275InternalFormsSharedModule.\u0275mod = /* @__PURE__ */ __defineNgModule({
    type: _\u0275InternalFormsSharedModule
  });
  _\u0275InternalFormsSharedModule.\u0275inj = /* @__PURE__ */ __defineInjector({});
  return \u0275InternalFormsSharedModule2;
})();
let FormsModule = /* @__PURE__ */ (() => {
  var _FormsModule;
  class FormsModule2 {
    /**
     * @description
     * Provides options for configuring the forms module.
     *
     * @param opts An object of configuration options
     * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
     * correct, or to only call it `whenDisabled`, which is the legacy behavior.
     */
    static withConfig(opts) {
      var _a;
      return {
        ngModule: FormsModule2,
        providers: [{
          provide: CALL_SET_DISABLED_STATE,
          useValue: (_a = opts.callSetDisabledState) != null ? _a : setDisabledStateDefault
        }]
      };
    }
  }
  _FormsModule = FormsModule2;
  _FormsModule.\u0275fac = function _FormsModule_Factory(t) {
    return new (t || _FormsModule)();
  };
  _FormsModule.\u0275mod = /* @__PURE__ */ __defineNgModule({
    type: _FormsModule
  });
  _FormsModule.\u0275inj = /* @__PURE__ */ __defineInjector({
    imports: [\u0275InternalFormsSharedModule]
  });
  return FormsModule2;
})();
const _c0 = ["todoInputRef"];
const _c1 = (a0) => ["mx-4 cursor-text text-sm", a0];
function TodoItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = __getCurrentView();
    __elementStart(0, "div", 2)(1, "input", 3, 0);
    __twoWayListener("ngModelChange", function TodoItemComponent_Conditional_1_Template_input_ngModelChange_1_listener($event) {
      __restoreView(_r1);
      const ctx_r1 = __nextContext();
      __twoWayBindingSet(ctx_r1.title, $event) || (ctx_r1.title = $event);
      return __resetView($event);
    });
    __listener("focus", function TodoItemComponent_Conditional_1_Template_input_focus_1_listener() {
      __restoreView(_r1);
      const ctx_r1 = __nextContext();
      return __resetView(ctx_r1.handleFocus());
    })("blur", function TodoItemComponent_Conditional_1_Template_input_blur_1_listener() {
      __restoreView(_r1);
      const ctx_r1 = __nextContext();
      return __resetView(ctx_r1.handleBlur());
    })("keyup.enter", function TodoItemComponent_Conditional_1_Template_input_keyup_enter_1_listener() {
      __restoreView(_r1);
      const ctx_r1 = __nextContext();
      return __resetView(ctx_r1.updateTodo());
    });
    __elementEnd();
    __elementStart(3, "label", 4);
    __text(4, " Edit todo title ");
    __elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = __nextContext();
    __advance();
    __twoWayProperty("ngModel", ctx_r1.title);
  }
}
function TodoItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = __getCurrentView();
    __elementStart(0, "label", 5)(1, "input", 6);
    __listener("change", function TodoItemComponent_Conditional_2_Template_input_change_1_listener() {
      __restoreView(_r3);
      const ctx_r1 = __nextContext();
      return __resetView(ctx_r1.toggleTodo());
    });
    __elementEnd();
    __elementStart(2, "span", 7);
    __listener("click", function TodoItemComponent_Conditional_2_Template_span_click_2_listener() {
      __restoreView(_r3);
      const ctx_r1 = __nextContext();
      return __resetView(ctx_r1.startEdit());
    });
    __text(3);
    __elementEnd()();
    __elementStart(4, "button", 8);
    __listener("click", function TodoItemComponent_Conditional_2_Template_button_click_4_listener() {
      __restoreView(_r3);
      const ctx_r1 = __nextContext();
      return __resetView(ctx_r1.removeTodo());
    });
    __namespaceSVG();
    __elementStart(5, "svg", 9);
    __element(6, "path", 10);
    __elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = __nextContext();
    __propertyInterpolate("for", "task_" + ctx_r1.todo._id);
    __advance();
    __propertyInterpolate("id", "task_" + ctx_r1.todo._id);
    __property("ngModel", ctx_r1.todo.completed);
    __advance();
    __property("ngClass", __pureFunction1(5, _c1, ctx_r1.todo.completed ? "text-gray-400 line-through" : "text-gray-600"));
    __advance();
    __textInterpolate1(" ", ctx_r1.todo.title, " ");
  }
}
let TodoItemComponent = /* @__PURE__ */ (() => {
  var _TodoItemComponent;
  class TodoItemComponent2 {
    constructor() {
      this.remove = new EventEmitter();
      this.update = new EventEmitter();
      this.title = "";
      this.isEditing = false;
    }
    toggleTodo() {
      this.update.emit({
        ...this.todo,
        completed: !this.todo.completed
      });
    }
    removeTodo() {
      this.remove.emit(this.todo);
    }
    startEdit() {
      this.isEditing = true;
    }
    handleBlur() {
      this.isEditing = false;
      this.updateTodo();
    }
    handleFocus() {
      setTimeout(() => this.title = this.todo.title);
    }
    updateTodo() {
      if (!this.title) {
        this.remove.emit(this.todo);
      } else {
        this.update.emit({
          ...this.todo,
          title: this.title
        });
      }
      this.isEditing = false;
    }
    ngAfterViewChecked() {
      var _a;
      if (this.isEditing) {
        (_a = this.inputRef) == null ? void 0 : _a.nativeElement.focus();
      }
    }
  }
  _TodoItemComponent = TodoItemComponent2;
  _TodoItemComponent.\u0275fac = function TodoItemComponent_Factory(t) {
    return new (t || _TodoItemComponent)();
  };
  _TodoItemComponent.\u0275cmp = /* @__PURE__ */ __defineComponent({
    type: _TodoItemComponent,
    selectors: [["app-todo-item"]],
    viewQuery: function TodoItemComponent_Query(rf, ctx) {
      if (rf & 1) {
        __viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        __queryRefresh(_t = __loadQuery()) && (ctx.inputRef = _t.first);
      }
    },
    inputs: {
      todo: "todo"
    },
    outputs: {
      remove: "remove",
      update: "update"
    },
    standalone: true,
    features: [__StandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["todoInputRef", ""], [1, "group", "flex", "min-h-10", "w-full", "items-center", "rounded", "px-2", "hover:bg-gray-100"], [1, "flex", "w-full"], ["id", "edit-todo-title-input", 1, "ml-7", "w-full", "px-2", "text-sm", 3, "ngModelChange", "focus", "blur", "keyup.enter", "ngModel"], ["htmlFor", "edit-todo-title-input", 1, "sr-only"], [1, "flex", "items-center", 3, "for"], ["type", "checkbox", 1, "checked:text-white',", "h-5", "w-5", "appearance-none", "rounded-full", "border-2", "border-gray-300", "text-transparent", "checked:border-green-400", "checked:bg-green-400", 3, "change", "id", "ngModel"], [3, "click", "ngClass"], [1, "ml-auto", "hidden", "group-hover:block", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "strokeWidth", "{1.5}", "stroke", "currentColor", 1, "h-5", "w-5", "text-gray-400"], ["strokeLinecap", "round", "strokeLinejoin", "round", "d", "M6 18 18 6M6 6l12 12"]],
    template: function TodoItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        __elementStart(0, "div", 1);
        __template(1, TodoItemComponent_Conditional_1_Template, 5, 1, "div", 2)(2, TodoItemComponent_Conditional_2_Template, 7, 7);
        __elementEnd();
      }
      if (rf & 2) {
        __advance();
        __conditional(1, ctx.isEditing ? 1 : 2);
      }
    },
    dependencies: [FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, CommonModule, NgClass],
    encapsulation: 2
  });
  return TodoItemComponent2;
})();
let AddTodoComponent = /* @__PURE__ */ (() => {
  var _AddTodoComponent;
  class AddTodoComponent2 {
    constructor() {
      this.add = new EventEmitter();
      this.title = "";
    }
    addTodo() {
      if (this.title) {
        this.add.emit({
          title: this.title,
          completed: false
        });
        this.title = "";
      }
    }
  }
  _AddTodoComponent = AddTodoComponent2;
  _AddTodoComponent.\u0275fac = function AddTodoComponent_Factory(t) {
    return new (t || _AddTodoComponent)();
  };
  _AddTodoComponent.\u0275cmp = /* @__PURE__ */ __defineComponent({
    type: _AddTodoComponent,
    selectors: [["app-add-todo"]],
    outputs: {
      add: "add"
    },
    standalone: true,
    features: [__StandaloneFeature],
    decls: 5,
    vars: 1,
    consts: [[1, "flex", "h-8", "w-full", "items-center", "rounded", "px-2", "text-sm"], [3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "strokeWidth", "{1.5}", "stroke", "currentColor", 1, "h-5", "w-5", "fill-current", "text-gray-400"], ["strokeLinecap", "round", "strokeLinejoin", "round", "d", "M12 4.5v15m7.5-7.5h-15"], ["type", "text", "placeholder", "What needs to get done?", 1, "ml-4", "h-8", "flex-grow", "bg-transparent", "text-gray-600", "focus:outline-none", 3, "ngModelChange", "keyup.enter", "ngModel"]],
    template: function AddTodoComponent_Template(rf, ctx) {
      if (rf & 1) {
        __elementStart(0, "div", 0)(1, "button", 1);
        __listener("click", function AddTodoComponent_Template_button_click_1_listener() {
          return ctx.addTodo();
        });
        __namespaceSVG();
        __elementStart(2, "svg", 2);
        __element(3, "path", 3);
        __elementEnd()();
        __namespaceHTML();
        __elementStart(4, "input", 4);
        __twoWayListener("ngModelChange", function AddTodoComponent_Template_input_ngModelChange_4_listener($event) {
          __twoWayBindingSet(ctx.title, $event) || (ctx.title = $event);
          return $event;
        });
        __listener("keyup.enter", function AddTodoComponent_Template_input_keyup_enter_4_listener() {
          return ctx.addTodo();
        });
        __elementEnd()();
      }
      if (rf & 2) {
        __advance(4);
        __twoWayProperty("ngModel", ctx.title);
      }
    },
    dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel],
    encapsulation: 2
  });
  return AddTodoComponent2;
})();
const _forTrack0 = ($index, $item) => $item._id;
function TodoListComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = __getCurrentView();
    __elementStart(0, "li")(1, "app-todo-item", 8);
    __listener("remove", function TodoListComponent_Conditional_6_For_2_Template_app_todo_item_remove_1_listener($event) {
      __restoreView(_r1);
      const ctx_r1 = __nextContext(2);
      return __resetView(ctx_r1.removeTodo($event));
    })("update", function TodoListComponent_Conditional_6_For_2_Template_app_todo_item_update_1_listener($event) {
      __restoreView(_r1);
      const ctx_r1 = __nextContext(2);
      return __resetView(ctx_r1.updateTodo($event));
    });
    __elementEnd()();
  }
  if (rf & 2) {
    const todo_r3 = ctx.$implicit;
    __advance();
    __property("todo", todo_r3);
  }
}
function TodoListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    __elementStart(0, "ul", 5);
    __repeaterCreate(1, TodoListComponent_Conditional_6_For_2_Template, 2, 1, "li", null, _forTrack0);
    __pipe(3, "async");
    __elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = __nextContext();
    __advance();
    __repeater(__pipeBind1(3, 0, ctx_r1.todos$));
  }
}
let TodoListComponent = /* @__PURE__ */ (() => {
  var _TodoListComponent;
  class TodoListComponent2 {
    constructor(todosService, cdf) {
      this.todosService = todosService;
      this.cdf = cdf;
      this.todos$ = new BehaviorSubject([]);
    }
    ngOnInit() {
      this.loadTodos();
    }
    loadTodos() {
      this.todosService.getAllTodos().subscribe((todos) => {
        this.todos$.next(todos);
        this.cdf.detectChanges();
      });
    }
    removeTodo(todo) {
      this.todosService.removeTodo(todo).subscribe(() => this.loadTodos());
    }
    updateTodo(todo) {
      this.todosService.updateTodo(todo).subscribe(() => this.loadTodos());
    }
    addTodo(todo) {
      this.todosService.addTodo(todo).subscribe(() => this.loadTodos());
    }
  }
  _TodoListComponent = TodoListComponent2;
  _TodoListComponent.\u0275fac = function TodoListComponent_Factory(t) {
    return new (t || _TodoListComponent)(__directiveInject(TodosService), __directiveInject(ChangeDetectorRef));
  };
  _TodoListComponent.\u0275cmp = /* @__PURE__ */ __defineComponent({
    type: _TodoListComponent,
    selectors: [["app-todo-list"]],
    standalone: true,
    features: [__StandaloneFeature],
    decls: 10,
    vars: 3,
    consts: [[1, "mx-auto", "mt-20", "flex", "max-w-96", "flex-col", "rounded-lg", "bg-white", "p-8", "shadow-lg"], [1, "flex", "items-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "h-8", "w-8", "text-indigo-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"], [1, "ml-3", "text-lg", "font-semibold", "text-gray-600"], [1, "mt-5", "flex", "flex-col", "gap-2"], [1, "mt-4"], [3, "add"], [3, "remove", "update", "todo"]],
    template: function TodoListComponent_Template(rf, ctx) {
      if (rf & 1) {
        __elementStart(0, "section", 0)(1, "div", 1);
        __namespaceSVG();
        __elementStart(2, "svg", 2);
        __element(3, "path", 3);
        __elementEnd();
        __namespaceHTML();
        __elementStart(4, "h1", 4);
        __text(5, "Todos");
        __elementEnd()();
        __template(6, TodoListComponent_Conditional_6_Template, 4, 2, "ul", 5);
        __pipe(7, "async");
        __elementStart(8, "div", 6)(9, "app-add-todo", 7);
        __listener("add", function TodoListComponent_Template_app_add_todo_add_9_listener($event) {
          return ctx.addTodo($event);
        });
        __elementEnd()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        __advance(6);
        __conditional(6, ((tmp_0_0 = __pipeBind1(7, 1, ctx.todos$)) == null ? null : tmp_0_0.length) ? 6 : -1);
      }
    },
    dependencies: [TodoItemComponent, AddTodoComponent, CommonModule, AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n      width: 100%;\n    }"]
  });
  return TodoListComponent2;
})();
let HomeComponent = /* @__PURE__ */ (() => {
  var _HomeComponent;
  class HomeComponent2 {
  }
  _HomeComponent = HomeComponent2;
  _HomeComponent.\u0275fac = function HomeComponent_Factory(t) {
    return new (t || _HomeComponent)();
  };
  _HomeComponent.\u0275cmp = /* @__PURE__ */ __defineComponent({
    type: _HomeComponent,
    selectors: [["app-home-page"]],
    standalone: true,
    features: [__StandaloneFeature],
    decls: 2,
    vars: 0,
    consts: [[1, "flex", "min-h-screen", "bg-gray-100", "p-5", "text-gray-600"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        __elementStart(0, "main", 0);
        __element(1, "app-todo-list");
        __elementEnd();
      }
    },
    dependencies: [TodoListComponent],
    encapsulation: 2
  });
  return HomeComponent2;
})();

export { HomeComponent as default };
//# sourceMappingURL=(home).page-jlyFnB0O.mjs.map
