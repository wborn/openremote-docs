"use strict";(self.webpackChunk_openremote_workshop=self.webpackChunk_openremote_workshop||[]).push([[83],{"../../component/or-mwc-components/lib/or-mwc-input.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NZ:()=>InputType,Zo:()=>getValueHolderInputTemplateProvider,n_:()=>OrMwcInput});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/lit/decorators.js"),lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/lit/directives/ref.js"),lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/lit/directives/class-map.js"),lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/lit/directives/if-defined.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../../node_modules/lit-html/directives/when.js"),lit_directives_until_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/lit/directives/until.js"),_material_textfield__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../../../node_modules/@material/textfield/component.js"),_material_ripple__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../../node_modules/@material/ripple/component.js"),_material_checkbox__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../../node_modules/@material/checkbox/component.js"),_material_switch__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../../node_modules/@material/switch/component.js"),_material_slider__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("../../../node_modules/@material/slider/component.js"),_material_select__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../../node_modules/@material/select/component.js"),_material_list__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../../node_modules/@material/list/component.js"),_material_form_field__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../../node_modules/@material/form-field/component.js"),_material_icon_button__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../../node_modules/@material/icon-button/component.js"),_openremote_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../component/core/lib/index.js"),_or_mwc_list__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__("../../component/or-icon/lib/index.js"),__webpack_require__("../../component/or-mwc-components/lib/or-mwc-list.js")),_openremote_or_translate__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../component/or-translate/lib/index.js"),lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../../node_modules/lit/directives/style-map.js"),__decorate=function(e,t,i,n){var s,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(a<3?s(o):a>3?s(t,i,o):s(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o},__awaiter=function(e,t,i,n){return new(i||(i=Promise))((function(s,a){function o(e){try{r(n.next(e))}catch(e){a(e)}}function l(e){try{r(n.throw(e))}catch(e){a(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,l)}r((n=n.apply(e,t||[])).next())}))};const buttonStyle=__webpack_require__("../../../node_modules/@material/button/dist/mdc.button.css"),buttonFabStyle=__webpack_require__("../../../node_modules/@material/fab/dist/mdc.fab.css"),iconButtonStyle=__webpack_require__("../../../node_modules/@material/icon-button/dist/mdc.icon-button.css"),textfieldStyle=__webpack_require__("../../../node_modules/@material/textfield/dist/mdc.textfield.css"),rippleStyle=__webpack_require__("../../../node_modules/@material/ripple/dist/mdc.ripple.css"),lineRippleStyle=__webpack_require__("../../../node_modules/@material/line-ripple/dist/mdc.line-ripple.css"),floatingLabelStyle=__webpack_require__("../../../node_modules/@material/floating-label/dist/mdc.floating-label.css"),formFieldStyle=__webpack_require__("../../../node_modules/@material/form-field/dist/mdc.form-field.css"),checkboxStyle=__webpack_require__("../../../node_modules/@material/checkbox/dist/mdc.checkbox.css"),radioStyle=__webpack_require__("../../../node_modules/@material/radio/dist/mdc.radio.css"),switchStyle=__webpack_require__("../../../node_modules/@material/switch/dist/mdc.switch.css"),selectStyle=__webpack_require__("../../../node_modules/@material/select/dist/mdc.select.css"),listStyle=__webpack_require__("../../../node_modules/@material/list/dist/mdc.list.css"),menuSurfaceStyle=__webpack_require__("../../../node_modules/@material/menu-surface/dist/mdc.menu-surface.css"),menuStyle=__webpack_require__("../../../node_modules/@material/menu/dist/mdc.menu.css"),sliderStyle=__webpack_require__("../../../node_modules/@material/slider/dist/mdc.slider.css");class OrInputChangedEvent extends CustomEvent{constructor(e,t,i){super(OrInputChangedEvent.NAME,{detail:{value:e,previousValue:t,enterPressed:i},bubbles:!0,composed:!0})}}var InputType,e;function inputTypeSupportsButton(e){return e===InputType.NUMBER||e===InputType.BIG_INT||e===InputType.TELEPHONE||e===InputType.TEXT||e===InputType.PASSWORD||e===InputType.DATE||e===InputType.DATETIME||e===InputType.EMAIL||e===InputType.JSON||e===InputType.JSON_OBJECT||e===InputType.MONTH||e===InputType.TEXTAREA||e===InputType.TIME||e===InputType.URL||e===InputType.WEEK}function inputTypeSupportsHelperText(e){return inputTypeSupportsButton(e)||e===InputType.SELECT}OrInputChangedEvent.NAME="or-mwc-input-changed",(e=InputType||(InputType={})).BUTTON="button",e.BUTTON_TOGGLE="button-toggle",e.BUTTON_MOMENTARY="button-momentary",e.CHECKBOX="checkbox",e.CHECKBOX_LIST="checkbox-list",e.COLOUR="color",e.DATE="date",e.DATETIME="datetime-local",e.EMAIL="email",e.JSON="json",e.JSON_OBJECT="json-object",e.MONTH="month",e.NUMBER="number",e.BIG_INT="big-int",e.PASSWORD="password",e.RADIO="radio",e.SWITCH="switch",e.RANGE="range",e.TELEPHONE="tel",e.TEXT="text",e.TEXTAREA="textarea",e.TIME="time",e.URL="url",e.WEEK="week",e.SELECT="select",e.LIST="list",e.CRON="cron",e.DURATION="duration",e.DURATION_TIME="duration-time",e.DURATION_PERIOD="duration-period";const getValueHolderInputTemplateProvider=(e,t,i,n,s,a)=>{let o,l,r,d,c,p,u,m,h=a.inputType;const y={},v="string"==typeof e?e:e.name,f=(t&&t.meta||n&&n.meta?_openremote_core__WEBPACK_IMPORTED_MODULE_6__.J0.getAttributeValueConstraints(t,i,v):_openremote_core__WEBPACK_IMPORTED_MODULE_6__.J0.getMetaValueConstraints(t,i,v))||[],_=t&&t.meta||n&&n.meta?_openremote_core__WEBPACK_IMPORTED_MODULE_6__.J0.getAttributeValueFormat(t,i,v):_openremote_core__WEBPACK_IMPORTED_MODULE_6__.J0.getMetaValueFormat(t,i,v);if(!h){switch(n.name){case"text":case"email":case"UUID":case"assetID":case"hostOrIPAddress":case"IPAddress":h=!0===_openremote_core__WEBPACK_IMPORTED_MODULE_6__.J0.getMetaValue("multiline",t,i)?InputType.TEXTAREA:InputType.TEXT;break;case"boolean":if(_&&_.asNumber){h=InputType.NUMBER,o=1,r=0,d=1,m=e=>!!e;break}h=_&&(_.asOnOff||_.asOpenClosed)?InputType.SWITCH:InputType.CHECKBOX,_&&_.asMomentary&&(h=InputType.BUTTON_MOMENTARY);break;case"bigNumber":case"number":case"positiveInteger":case"positiveNumber":case"long":case"integer":case"byte":case"integerByte":case"direction":case"TCP_IPPortNumber":"byte"===n.name||"integerByte"===n.name?(r=0,d=255,o=1):"integer"!==n.name&&"long"!==n.name||(o=1),_&&_.asDate?h=InputType.DATETIME:_&&_.asBoolean?(h=InputType.CHECKBOX,m=e=>e?1:0):h=_&&_.asSlider?InputType.RANGE:InputType.NUMBER;break;case"bigInteger":h=InputType.BIG_INT,o=1;break;case"colourRGB":h=InputType.COLOUR;break;case"dateAndTime":case"timestamp":case"timestampISO8601":h=InputType.DATETIME;break;case"CRONExpression":h=InputType.CRON;break;case"timeDurationISO8601":h=InputType.DURATION_TIME;break;case"periodDurationISO8601":h=InputType.DURATION_PERIOD;break;case"timeAndPeriodDurationISO8601":h=InputType.DURATION;break;case"JSONObject":h=InputType.JSON_OBJECT}n.arrayDimensions&&n.arrayDimensions>0&&(h=InputType.JSON)}if(!h)switch(n.jsonType){case"number":case"bigint":h=InputType.NUMBER;break;case"boolean":h=InputType.CHECKBOX;break;case"string":h=InputType.TEXT;break;case"date":h=InputType.DATETIME}h||(h=InputType.JSON);const b=f&&f.find((e=>"size"===e.type)),T=f&&f.find((e=>"pattern"===e.type)),I=f&&f.find((e=>"min"===e.type)),g=f&&f.find((e=>"max"===e.type)),x=f&&f.find((e=>"allowedValues"===e.type)),C=f&&f.find((e=>"past"===e.type)),O=f&&f.find((e=>"pastOrPresent"===e.type)),w=f&&f.find((e=>"future"===e.type)),E=f&&f.find((e=>"futureOrPresent"===e.type)),$=f&&f.find((e=>"notEmpty"===e.type)),S=f&&f.find((e=>"notBlank"===e.type)),M=f&&f.find((e=>"notNull"===e.type));if(b&&(r=b.min,d=b.max),b&&(r=b.min,d=b.max),I&&(r=I.min),g&&(d=g.max),T&&(l=T.regexp),M&&(p=!0),S&&!l?l="\\S+":$&&!l&&(l=".+"),x&&x.allowedValues){const e=x.allowedValueNames&&x.allowedValueNames.length===x.allowedValues.length?x.allowedValueNames:void 0;u=x.allowedValues.map(((t,i)=>{let n=e?e[i]:""+t;return n=_openremote_core__WEBPACK_IMPORTED_MODULE_6__.J0.getAllowedValueLabel(n),[t,n||""+t]})),h=InputType.SELECT,n.arrayDimensions&&n.arrayDimensions>0&&(c=!0)}h===InputType.DATETIME&&(C||O?(r=void 0,d=new Date):(w||E)&&(r=new Date,d=void 0),_&&(_.timeStyle&&!_.dateStyle?h=InputType.TIME:_.dateStyle&&!_.timeStyle&&(h=InputType.DATE))),h===InputType.NUMBER&&_&&_.resolution&&(o=_.resolution),h===InputType.COLOUR&&(y.marginLeft="24px");const k=inputTypeSupportsHelperText(h),N=function inputTypeSupportsLabel(e){return inputTypeSupportsHelperText(e)||e===InputType.CHECKBOX}(h),D=inputTypeSupportsButton(h),A=a.readonly;p=p||a.required;const B=a.comfortable,V=a.resizeVertical,R=(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_2__._)();return{templateFunction:(e,t,i,n,v,f)=>{const b=a.disabled||i||n,T=N?a.label:void 0;return lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-mwc-input ${(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_2__.K)(R)} id="input" style="${(0,lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_10__.W)(y)}" .type="${h}" .label="${T}" .value="${e}" .pattern="${l}"
            .min="${r}" .max="${d}" .format="${_}" .focused="${t}" .required="${p}" .multiple="${c}"
            .options="${u}" .comfortable="${B}" .readonly="${A}" .disabled="${b}" .step="${o}"
            .helperText="${f}" .helperPersistent="${!0}" .resizeVertical="${V}"
            .rounded="${a.rounded}"
            .outlined="${a.outlined}"
            @or-mwc-input-changed="${e=>{e.stopPropagation(),e.detail.value=m?m(e.detail.value):e.detail.value,s(e.detail)}}"></or-mwc-input>`},supportsHelperText:k,supportsSendButton:D,supportsLabel:N,validator:()=>!!R.value&&R.value.checkValidity()}},style=lit__WEBPACK_IMPORTED_MODULE_0__.AH`
    
    :host {
        display: inline-block;
        --internal-or-mwc-input-color: var(--or-mwc-input-color, var(--or-app-color4, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_6__.BB)}));    
        --internal-or-mwc-input-text-color: var(--or-mwc-input-text-color, var(--or-app-color8, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_6__.BH)}));    
        
        --mdc-theme-primary: var(--internal-or-mwc-input-color);
        --mdc-theme-on-primary: var(--internal-or-mwc-input-text-color);
        --mdc-theme-secondary: var(--internal-or-mwc-input-color);
    }
    
    :host([hidden]) {
        display: none;
    }    

    :host([type=select]) {
        height: 56px;
    }
     
    #wrapper {
        display: flex;
        align-items: center;
        min-height: 48px;
        height: 100%;
    }   
    
    #wrapper > label {
        white-space: nowrap;
        margin-right: 20px;
    }
    
    #component {
        max-width: 100%;
    }

    .mdc-text-field {
        flex: 1 1 0;
    }

    .mdc-list {
        flex: 1;
        overflow: auto;
    }

    .mdc-select__anchor {
        max-width: 100%;
        width: 100%;
    }
    
    .mdc-checkbox-list input {
        display: none;
    }
    
    .mdc-checkbox-list label {
        display: block;
        border-radius: 50%;
        text-align: center;
        width: 32px;
        line-height: 32px;
        height: 32px;
        cursor: pointer;
        background-color: var(--or-app-color2);
        font-size: 13px;
    }
    
    input::-webkit-calendar-picker-indicator {
        margin: 0;
    }
    
    .mdc-checkbox-list .mdc-checkbox {
        padding: 0;
        height: 32px;
        width: 32px;
    }
    .mdc-radio-container {
        display: flex;
        flex-direction: column;
    }
    .mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) + .mdc-text-field-helper-line .mdc-text-field-helper-text {
        color: var(--mdc-theme-error, #b00020)
    }
    
    .mdc-checkbox-list input:checked + label {
        color: var(--or-app-color2);
        background-color: var(--mdc-theme-primary);
    }
    
    .mdc-button--rounded,
    .or-mwc-input--rounded {
      border-radius: 24px !important;
      --mdc-shape-small: 32px;
    }

    #select-searchable {
        background-color: transparent; 
        border: 1px solid var(--or-app-color5, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_6__.Id)});
        margin: 8px;
        width: calc(100% - 16px); 
        border-radius: 4px;
        padding: 4px 16px;
        flex: 0 0 auto;
        align-items: center;
        height: auto;
    }

    .mdc-text-field__input::-webkit-calendar-picker-indicator {
        display: block;
    }

    ::-webkit-clear-button {display: none;}
    ::-webkit-inner-spin-button { display: none; }
    ::-webkit-datetime-edit { padding: 0em; }
    ::-webkit-datetime-edit-text { padding: 0; }

    .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {
        color: var(--mdc-theme-primary);
    }
    .mdc-text-field--focused .mdc-text-field__input:required ~ .mdc-floating-label::after,
    .mdc-text-field--focused .mdc-text-field__input:required ~ .mdc-notched-outline .mdc-floating-label::after {
        color: var(--mdc-theme-primary);
    }

    .mdc-text-field__input.resize-vertical {
        resize: vertical;
    }

    .mdc-text-field, .mdc-text-field-helper-line {
        width: 100%;
    }
    
    .mdc-text-field.dense-comfortable, .mdc-select.dense-comfortable {
        height: 48px;
    }
    
    .mdc-text-field.dense-compact {
        height: 36px;
    }
    
    .mdc-select:not(.mdc-list) {
        white-space: nowrap;
        display: flex;
        flex-direction: column;
    }

    .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label {
        color: var(--mdc-theme-primary);
    }

    .mdc-select-helper-text {
        white-space: normal;
        color: rgba(0, 0, 0, 0.6);
    }

    .mdc-icon-button {
        padding: 0;
        color: var(--internal-or-mwc-input-color);
    }
    
    /* Give slider min width like select etc. */
    .mdc-slider {
        min-width: 200px;
        flex: 1;
    }
    
    .mdc-switch {
        margin: 0 24px;
    }

    .mdc-switch--full-width {
        margin-left: auto;
    }
    .mdc-button--fullwidth {
      width: 100%;
    }
    #field {
        height: 100%;
    }

    .mdc-select__menu .mdc-list .mdc-list-item.mdc-list-item--selected or-icon {
        --or-icon-fill: var(--or-app-color4);
    }

    .mdc-menu__searchable {
        overflow: hidden;
    }
    .mdc-menu__searchable.mdc-menu-surface--open {
        display: flex;
        flex-direction: column-reverse;
    }
    .mdc-menu__searchable.mdc-menu-surface--is-open-below {
        flex-direction: column;
    }
    
    /* Prevent mouse events being fired from inside the or-icon shadowDOM */
    .mdc-list-item__graphic > or-icon {
        pointer-events: none;
    }
`;let OrMwcInput=class extends lit__WEBPACK_IMPORTED_MODULE_0__.WF{constructor(){super(...arguments),this.readonly=!1,this.required=!1,this.checked=!1,this.indeterminate=!1,this.multiple=!1,this.compact=!1,this.comfortable=!1,this.raised=!1,this.action=!1,this.unElevated=!1,this.outlined=!1,this.rounded=!1,this.disableSliderNumberInput=!1,this.fullWidth=!1,this.helperPersistent=!1,this.autoValidate=!1,this.charCounter=!1,this.disabled=!1,this.continuous=!1,this.resizeVertical=!1,this._selectedIndex=-1,this.isUiValid=!0}static get styles(){return[lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(iconButtonStyle)}`,lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(buttonStyle)}`,lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(buttonFabStyle)}`,lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(textfieldStyle)}`,lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(rippleStyle)}`,lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(lineRippleStyle)}`,lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(floatingLabelStyle)}`,lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(formFieldStyle)}`,lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(checkboxStyle)}`,lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(radioStyle)}`,lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(switchStyle)}`,lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(selectStyle)}`,lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(listStyle)}`,lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(menuStyle)}`,lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(menuSurfaceStyle)}`,lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(sliderStyle)}`,style]}get nativeValue(){if(this._mdcComponent)return this._mdcComponent.value}disconnectedCallback(){var e,t;super.disconnectedCallback(),this._mdcComponent&&(this._mdcComponent.destroy(),this._mdcComponent=void 0,null===(e=this._menuObserver)||void 0===e||e.disconnect()),this._mdcComponent2&&(this._mdcComponent2.destroy(),this._mdcComponent2=void 0,null===(t=this._menuObserver)||void 0===t||t.disconnect())}shouldUpdate(e){return e.has("indeterminate")&&this._mdcComponent&&this.type===InputType.CHECKBOX&&(this._mdcComponent.indeterminate=this.indeterminate),e.has("disabled")&&(this._mdcComponent&&(this._mdcComponent.disabled=this.disabled),this.type===InputType.RANGE&&this._mdcComponent2&&(this._mdcComponent2.disabled=this.disabled)),e.has("readonly")&&(this._mdcComponent&&(this._mdcComponent.readonly=this.readonly),this.type===InputType.RANGE&&this._mdcComponent2&&(this._mdcComponent2.readonly=this.readonly)),!this.type&&this.value&&(this.value instanceof Date?this.type=InputType.DATETIME:"boolean"==typeof this.value?this.type=InputType.CHECKBOX:"number"==typeof this.value?this.type=InputType.NUMBER:"string"==typeof this.value?this.type=InputType.TEXT:this.type=InputType.JSON),!0}focus(){this.type===InputType.RANGE&&this._mdcComponent2?this._mdcComponent2.focus():this._mdcComponent&&"function"==typeof this._mdcComponent.focus&&this._mdcComponent.focus()}render(){if(this.type){const e=!this.fullWidth&&this.label;let t=!this.fullWidth&&this.outlined,i=!!this.helperText;const n=!(this.isUiValid||!this.errorMessage&&!this.validationMessage),s={"mdc-text-field-helper-text--persistent":!n&&this.helperPersistent,"mdc-text-field-helper-text--validation-msg":n},a=null!==this.value&&void 0!==this.value||!1===this.value;let o=e?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<span class="mdc-floating-label ${a?"mdc-floating-label--float-above":""}" id="label">${this.label}</span>`:void 0;switch(this.type){case InputType.RADIO:const e=this.resolveOptions(this.options);return this._selectedIndex=-1,lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                            <div class="mdc-radio-container">
                                ${e?e.map((([e,t],i)=>(this.value===e&&(this._selectedIndex=i),lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                                    <div id="field" class="mdc-form-field">
                                        <div class="mdc-radio">
                                            <input type="radio" 
                                                id="elem-${e}"
                                                name="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_4__.J)(this.name)}"
                                                value="${e}"
                                                ?checked="${this.value&&this.value.includes(e)}"
                                                ?required="${this.required}"
                                                ?disabled="${this.disabled||this.readonly}"                            
                                                @change="${t=>this.onValueChange(t.target,e)}"
                                                class="mdc-radio__native-control"/>
                                            <div class="mdc-radio__background">
                                            <div class="mdc-radio__outer-circle"></div>
                                            <div class="mdc-radio__inner-circle"></div>
                                            </div>
                                            <div class="mdc-radio__ripple"></div>
                                        </div>
                                        <label for="elem-${e}"><or-translate value="${t}"></or-translate></label>
                                    </div>

                                    `))):""}
                            </div>
                    `;case InputType.SWITCH:const l={"mdc-switch--disabled":this.disabled||this.readonly,"mdc-switch--full-width":this.fullWidth,"mdc-switch--checked":this.value};return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                        <span id="wrapper">
                            ${this.label?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<label for="elem" class="${this.disabled?"mdc-switch--disabled":""}">${this.label}</label>`:""}
                            <div id="component" class="mdc-switch ${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_3__.H)(l)}">
                                <div class="mdc-switch__track"></div>
                                <div class="mdc-switch__thumb-underlay">
                                    <div class="mdc-switch__thumb">
                                        <input type="checkbox" id="elem" class="mdc-switch__native-control" 
                                        ?checked="${this.value}"
                                        ?required="${this.required}"
                                        ?disabled="${this.disabled||this.readonly}"
                                        @change="${e=>this.onValueChange(e.target,e.target.checked)}"
                                        role="switch">
                                    </div>
                                </div>
                            </div>
                        </span>
                    `;case InputType.LIST:const r={"mdc-select--outlined":t,"mdc-select--disabled":this.disabled,"mdc-select--required":this.required,"mdc-select--dense":!1,"mdc-select--no-label":!this.label,"mdc-select--with-leading-icon":!!this.icon},d=this.resolveOptions(this.options);return this._selectedIndex=-1,lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                            <div id="component" class="mdc-list mdc-select ${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_3__.H)(r)}" @MDCList:action="${e=>this.onValueChange(void 0,-1===e.detail.index?void 0:Array.isArray(this.options[e.detail.index])?this.options[e.detail.index][0]:this.options[e.detail.index])}">
                                <ul class="mdc-list">
                                    ${d?d.map((([e,t],i)=>(this.value===e&&(this._selectedIndex=i),lit__WEBPACK_IMPORTED_MODULE_0__.qy`<li class="${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_3__.H)({"mdc-list-item":!0,"mdc-list-item--selected":this.value===e})}" role="option" data-value="${e}"><or-translate value="${t}"></or-translate></li>`))):""}
                                </ul>
                            </div>
                        `;case InputType.SELECT:const c={"mdc-select--outlined":t,"mdc-select--filled":!t,"mdc-select--disabled":this.disabled||this.readonly,"mdc-select--required":this.required,"mdc-select--dense":!1,"dense-comfortable":this.comfortable,"mdc-select--no-label":!this.label,"mdc-select--with-leading-icon":!!this.icon,"or-mwc-input--rounded":this.rounded};let p;p=null!=this.searchProvider?this.searchProvider(this.searchableValue):this.resolveOptions(this.options);const u=(e,t)=>{var i;const n=t.value;if(this.multiple){e.stopPropagation();const t=null!==(i=this._tempValue)&&void 0!==i?i:Array.isArray(this.value)?[...this.value]:void 0!==this.value?[this.value]:[],s=t.findIndex((e=>e===n));s>=0?t.splice(s,1):t.push(n);const a=e.composedPath()[0].closest("li"),o=a.getElementsByTagName("or-icon")[0];a&&(s>=0?a.classList.remove("mdc-list-item--selected"):a.classList.add("mdc-list-item--selected")),o&&(o.icon=s>=0?"checkbox-blank-outline":"checkbox-marked"),this._tempValue=t}else null==this.searchProvider&&Array.isArray(p)||this.onValueChange(void 0,t.value)},m=()=>{var e;const t=null!==(e=this._tempValue)&&void 0!==e?e:this.value;if(window.setTimeout((()=>{this._mdcComponent&&this._mdcComponent.foundation.adapter.floatLabel(t&&(!Array.isArray(t)||t.length>0))})),!this._tempValue)return;const i=[...this._tempValue];this._tempValue=void 0,this.onValueChange(void 0,i)},h=e=>null==this.searchProvider||e&&0!=e.length?(0,_or_mwc_list__WEBPACK_IMPORTED_MODULE_8__.bb)(this.multiple?_or_mwc_list__WEBPACK_IMPORTED_MODULE_8__.pc.MULTI_TICK:_or_mwc_list__WEBPACK_IMPORTED_MODULE_8__.pc.SELECT,lit__WEBPACK_IMPORTED_MODULE_0__.qy`${null==e?void 0:e.map((([e,t],i)=>(0,_or_mwc_list__WEBPACK_IMPORTED_MODULE_8__.K3)({text:t,value:e},i,Array.isArray(this.value)?this.value:this.value?[this.value]:[],this.multiple?_or_mwc_list__WEBPACK_IMPORTED_MODULE_8__.pc.MULTI_TICK:_or_mwc_list__WEBPACK_IMPORTED_MODULE_8__.pc.SELECT,!1,u)))}`,!1,void 0):lit__WEBPACK_IMPORTED_MODULE_0__.qy`<span class="mdc-text-field-helper-line" style="margin: 8px 8px 8px 0;">${_openremote_or_translate__WEBPACK_IMPORTED_MODULE_9__.MR.t("noResults")}</span>`;return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                        <div id="component"
                            class="mdc-select ${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_3__.H)(c)}"
                            @MDCSelect:change="${e=>__awaiter(this,void 0,void 0,(function*(){const t=Array.isArray(p)?p:yield p;this.onValueChange(void 0,-1===e.detail.index?void 0:Array.isArray(t[e.detail.index])?t[e.detail.index][0]:t[e.detail.index])}))}">
                                <div class="mdc-select__anchor" role="button"
                                     aria-haspopup="listbox"
                                     aria-expanded="false"
                                     aria-disabled="${""+(this.disabled||this.readonly)}"
                                     aria-labelledby="label selected-text">
                                    ${t?void 0:lit__WEBPACK_IMPORTED_MODULE_0__.qy`<span class="mdc-select__ripple"></span>`}
                                    ${t?this.renderOutlined(o):o}
                                    <span class="mdc-select__selected-text-container">
                                      <span id="selected-text" class="mdc-select__selected-text"></span>
                                    </span>
                                    <span class="mdc-select__dropdown-icon">
                                        <svg
                                          class="mdc-select__dropdown-icon-graphic"
                                          viewBox="7 10 10 5">
                                        <polygon
                                            class="mdc-select__dropdown-icon-inactive"
                                            stroke="none"
                                            fill-rule="evenodd"
                                            points="7 10 12 15 17 10">
                                        </polygon>
                                        <polygon
                                            class="mdc-select__dropdown-icon-active"
                                            stroke="none"
                                            fill-rule="evenodd"
                                            points="7 15 12 10 17 15">
                                        </polygon>
                                      </svg>
                                    </span>
                                    ${t?"":lit__WEBPACK_IMPORTED_MODULE_0__.qy`<div class="mdc-line-ripple"></div>`}
                                </div>
                                <div id="mdc-select-menu" class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fixed ${null!=this.searchProvider?"mdc-menu__searchable":void 0}" @MDCMenuSurface:closed="${m}">
                                    ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_11__.z)(null!=this.searchProvider,(()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                                        <label id="select-searchable" class="mdc-text-field mdc-text-field--filled">
                                            <span class="mdc-floating-label" style="color: rgba(0, 0, 0, 0.6); text-transform: capitalize; visibility: ${this.searchableValue?"hidden":"visible"}" id="my-label-id">${_openremote_or_translate__WEBPACK_IMPORTED_MODULE_9__.MR.t("search")}</span>
                                            <input class="mdc-text-field__input" type="text"
                                                   @keyup="${e=>this.searchableValue=e.target.value}"
                                            />
                                        </label>
                                    `))}
                                    ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_11__.z)(Array.isArray(p),(()=>h(p)),(()=>(0,lit_directives_until_js__WEBPACK_IMPORTED_MODULE_5__.T)(new Promise((e=>__awaiter(this,void 0,void 0,(function*(){e(h(yield p))})))),lit__WEBPACK_IMPORTED_MODULE_0__.qy`<span class="mdc-text-field-helper-line" style="margin: 8px 8px 8px 0;">${_openremote_or_translate__WEBPACK_IMPORTED_MODULE_9__.MR.t("loading")}</span>`)))}
                                </div>
                                ${i||n?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                                    <p id="component-helper-text" class="mdc-select-helper-text ${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_3__.H)(s)}" aria-hidden="true">
                                        ${n?this.errorMessage||this.validationMessage:this.helperText}
                                    </p>`:""}
                        </div>
                    `;case InputType.BUTTON_TOGGLE:return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                        <button id="component" class="mdc-icon-button ${this.value?"mdc-icon-button--on":""}"
                            ?readonly="${this.readonly}"
                            ?disabled="${this.disabled}"
                            @MDCIconButtonToggle:change="${e=>this.onValueChange(void 0,e.detail.isOn)}">
                            ${this.icon?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-icon class="mdc-icon-button__icon" aria-hidden="true" icon="${this.icon}"></or-icon>`:""}
                            ${this.iconOn?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-icon class="mdc-icon-button__icon mdc-icon-button__icon--on" aria-hidden="true" icon="${this.iconOn}"></or-icon>`:""}
                        </button>
                    `;case InputType.BUTTON:case InputType.BUTTON_MOMENTARY:{const e=e=>{this.disabled&&e.stopPropagation(),n&&this.dispatchEvent(new OrInputChangedEvent(!0,null))},t=e=>{this.disabled&&e.stopPropagation(),n?this.dispatchEvent(new OrInputChangedEvent(!1,!0)):this.dispatchEvent(new OrInputChangedEvent(!0,null))},i=e=>{this.disabled&&e.stopPropagation()},n=this.type===InputType.BUTTON_MOMENTARY,s=!this.action&&!this.label;let a={"mdc-icon-button":s,"mdc-fab":!s&&this.action,"mdc-fab--extended":!s&&this.action&&!!this.label,"mdc-fab--mini":!s&&this.action&&(this.compact||this.comfortable),"mdc-button":!s&&!this.action,"mdc-button--raised":!s&&!this.action&&this.raised,"mdc-button--unelevated":!s&&!this.action&&this.unElevated,"mdc-button--outlined":!s&&!this.action&&this.outlined,"mdc-button--rounded":!s&&!this.action&&this.rounded,"mdc-button--fullwidth":this.fullWidth};return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                        <button id="component" class="${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_3__.H)(a)}"
                            ?readonly="${this.readonly}"
                            ?disabled="${this.disabled}"
                            @click="${e=>i(e)}"
                            @mousedown="${t=>e(t)}" @mouseup="${e=>t(e)}">
                            ${s?"":lit__WEBPACK_IMPORTED_MODULE_0__.qy`<div class="mdc-button__ripple"></div>`}
                            ${this.icon?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-icon class="${s?"":this.action?"mdc-fab__icon":"mdc-button__icon"}" aria-hidden="true" icon="${this.icon}"></or-icon>`:""}
                            ${this.label?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<span class="${this.action?"mdc-fab__label":"mdc-button__label"}"><or-translate .value="${this.label}"></or-translate></span>`:""}
                            ${!s&&this.iconTrailing?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-icon class="${this.action?"mdc-fab__icon":"mdc-button__icon"}" aria-hidden="true" icon="${this.iconTrailing}"></or-icon>`:""}
                        </button>
                    `}case InputType.CHECKBOX_LIST:Array.isArray(this.value)||(null===this.value||void 0===this.value?this.value=[]:this.value=[this.value]);const y=this.resolveOptions(this.options);return this._selectedIndex=-1,lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                            <div class="mdc-checkbox-list">
                                ${y?y.map((([e,t],i)=>(this.value===e&&(this._selectedIndex=i),lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                                    <div id="field" class="mdc-form-field">
                                        <div id="component" class="mdc-checkbox">
                                            <input type="checkbox"
                                                ?checked="${this.value&&this.value.includes(e)}"
                                                ?required="${this.required}"
                                                name="${e}"
                                                ?disabled="${this.disabled||this.readonly}"
                                                @change="${t=>{let i=this.value;t.target.checked?i.includes(e)||(i=[e,...i]):i=i.filter((t=>t!==e)),this.onValueChange(t.target,i)}}"
                                                class="mdc-checkbox__native-control" id="elem-${e}"/>

                                            <label for="elem-${e}"><or-translate value="${t}"></or-translate></label>
                                              
                                        </div>
                                    </div>

                                    `))):""}
                            </div>
                    `;case InputType.CHECKBOX:let v={"mdc-checkbox":!0,"mdc-checkbox--disabled":this.disabled||this.readonly};return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                        <div id="field" class="mdc-form-field">
                            <div id="component" class="${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_3__.H)(v)}">
                                <input type="checkbox" 
                                    id="elem" 
                                    data-indeterminate="${this.indeterminate}"
                                    ?checked="${this.value}"
                                    ?required="${this.required}"
                                    ?disabled="${this.disabled||this.readonly}"
                                    @change="${e=>this.onValueChange(e.target,e.target.checked)}"
                                    class="mdc-checkbox__native-control" />
                                <div class="mdc-checkbox__background">
                                    <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                                        <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
                                    </svg>
                                    <div class="mdc-checkbox__mixedmark"></div>
                                </div>
                                <div class="mdc-checkbox__ripple"></div>
                            </div>
                            <label class="mdc-checkbox-circle" for="elem">${this.label}</label>
                        </div>
                    `;case InputType.COLOUR:return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                        <div id="component" style="width: 100%; display: inline-flex; align-items: center; padding: 8px 0;">
                            <input type="color" id="elem" style="border: none; height: 31px; width: 31px; padding: 1px 3px; min-height: 22px; min-width: 30px;cursor: pointer" value="${this.value}"
                                   ?disabled="${this.disabled||this.readonly}"
                                   ?required="${this.required}"
                                   @change="${e=>this.onValueChange(e.target,e.target.value)}"
                            />
                            <label style="margin-left: 10px; cursor: pointer" for="elem">${this.label}</label>
                        </div>
                    `;case InputType.NUMBER:case InputType.RANGE:case InputType.DATE:case InputType.DATETIME:case InputType.TIME:case InputType.MONTH:case InputType.WEEK:case InputType.EMAIL:case InputType.PASSWORD:case InputType.TELEPHONE:case InputType.URL:case InputType.TEXT:case InputType.TEXTAREA:case InputType.JSON:case InputType.JSON_OBJECT:{let e,l=[void 0===this.value||null===this.value?void 0:this.value,this.min,this.max];if(l.some((e=>"string"!=typeof e)))if(this.type===InputType.JSON||this.type===InputType.JSON_OBJECT)if(void 0!==l[0]){if("string"!=typeof l[0]||null===l[0])try{l[0]=JSON.stringify(l[0],null,2)}catch(e){console.warn("Failed to parse JSON expression for input control"),l[0]=""}}else l[0]="";else{const e=this.format?Object.assign({},this.format):{};switch(this.type){case InputType.TIME:e.asDate=!0,e.hour12=!1,e.timeStyle=this.step&&this.step<60?"medium":"short";break;case InputType.DATE:e.asDate=!0,e.momentJsFormat="YYYY-MM-DD";break;case InputType.WEEK:e.asDate=!0,e.momentJsFormat="YYYY-[W]WW";break;case InputType.MONTH:e.asDate=!0,e.momentJsFormat="YYYY-MM";break;case InputType.DATETIME:e.asDate=!0,e.momentJsFormat="YYYY-MM-DDTHH:mm";break;case InputType.NUMBER:e.maximumFractionDigits=20}e.useGrouping=!1,l=l.map((t=>void 0!==t?_openremote_core__WEBPACK_IMPORTED_MODULE_6__.J0.getValueAsString(t,(()=>e),"en-GB"):void 0))}let r=this.label,d=this.type,c="component";if(this.type===InputType.RANGE&&(r=void 0,t=!1,i=!1,d=InputType.NUMBER,c="number"),this.type!==InputType.RANGE||!this.disableSliderNumberInput){const p={"mdc-text-field":!0,"mdc-text-field--invalid":!this.valid,"mdc-text-field--filled":!t,"mdc-text-field--outlined":t,"mdc-text-field--textarea":d===InputType.TEXTAREA||d===InputType.JSON||d===InputType.JSON_OBJECT,"mdc-text-field--disabled":this.disabled,"mdc-text-field--fullwidth":this.fullWidth&&!t,"dense-comfortable":this.comfortable&&!(d===InputType.TEXTAREA||d===InputType.JSON||d===InputType.JSON_OBJECT),"dense-compact":!this.comfortable&&this.compact,"mdc-text-field--label-floating":a,"mdc-text-field--no-label":!this.label,"mdc-text-field--with-leading-icon":!!this.icon,"mdc-text-field--with-trailing-icon":!!this.iconTrailing,"or-mwc-input--rounded":this.rounded};e=d===InputType.TEXTAREA||d===InputType.JSON||d===InputType.JSON_OBJECT?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                                <textarea id="elem" class="mdc-text-field__input ${this.resizeVertical?"resize-vertical":""}" ?required="${this.required}"
                                ?readonly="${this.readonly}" ?disabled="${this.disabled}" minlength="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_4__.J)(this.minLength)}"
                                maxlength="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_4__.J)(this.maxLength)}" rows="${this.rows?this.rows:5}"
                                cols="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_4__.J)(this.cols)}" aria-label="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_4__.J)(r)}"
                                aria-labelledby="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_4__.J)(r?"label":void 0)}"
                                @change="${e=>this.onValueChange(e.target,e.target.value)}">${l[0]?l[0]:""}</textarea>`:lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                            <input type="${d}" id="elem" aria-labelledby="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_4__.J)(r?"label":void 0)}"
                            class="mdc-text-field__input" ?required="${this.required}" ?readonly="${this.readonly}"
                            ?disabled="${this.disabled}" min="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_4__.J)(l[1])}" max="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_4__.J)(l[2])}"
                            step="${this.step?this.step:"any"}" minlength="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_4__.J)(this.minLength)}" pattern="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_4__.J)(this.pattern)}"
                            maxlength="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_4__.J)(this.maxLength)}" placeholder="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_4__.J)(this.placeHolder)}"
                            .value="${null!==l[0]&&void 0!==l[0]?l[0]:""}"
                            @keydown="${e=>{"Enter"!==e.code&&"NumpadEnter"!==e.code||this.onValueChange(e.target,e.target.value,!0)}}"
                            @blur="${e=>{""===e.target.value&&this.reportValidity()}}"
                            @change="${e=>this.onValueChange(e.target,e.target.value)}" />`,e=lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                            <label id="${c}" class="${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_3__.H)(p)}">
                                ${this.icon?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-icon class="mdc-text-field__icon mdc-text-field__icon--leading" style="color: ${this.iconColor?"#"+this.iconColor:"unset"}" aria-hidden="true" icon="${this.icon}"></or-icon>`:""}
                                ${t?"":lit__WEBPACK_IMPORTED_MODULE_0__.qy`<span class="mdc-text-field__ripple"></span>`}
                                ${e}
                                ${t?this.renderOutlined(o):o}
                                ${t?"":lit__WEBPACK_IMPORTED_MODULE_0__.qy`<span class="mdc-line-ripple"></span>`}
                                ${this.iconTrailing?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-icon class="mdc-text-field__icon mdc-text-field__icon--trailing" aria-hidden="true" icon="${this.iconTrailing}"></or-icon>`:""}
                            </label>
                            ${i||n?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                                <div class="mdc-text-field-helper-line">
                                    <div class="mdc-text-field-helper-text ${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_3__.H)(s)}">${n?this.errorMessage||this.validationMessage:this.helperText}</div>
                                    ${this.charCounter&&!this.readonly?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<div class="mdc-text-field-character-counter"></div>`:""}
                                </div>
                            `:""}
                        `}if(this.type===InputType.RANGE){const t={"mdc-slider":!0,"mdc-slider--range":this.continuous,"mdc-slider--discreet":!this.continuous,"mdc-slider--disabled":this.disabled};e=lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                            <span id="wrapper">
                                ${this.label?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<label for="component" class="${this.disabled?"mdc-switch--disabled":""}">${this.label}</label>`:""}
                                <div id="component" class="${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_3__.H)(t)}" @MDCSlider:change="${e=>this.onValueChange(void 0,e.detail.value)}">
                                    <input id="elem" class="mdc-slider__input" type="range" min="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_4__.J)(l[1])}" max="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_4__.J)(l[2])}" value="${l[0]||l[1]||0}" name="slider" step="${this.step||1}" ?readonly="${this.readonly}" ?disabled="${this.disabled}" aria-label="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_4__.J)(this.label)}" />
                                    <div class="mdc-slider__track">
                                        <div class="mdc-slider__track--inactive"></div>
                                        <div class="mdc-slider__track--active">
                                            <div class="mdc-slider__track--active_fill"></div>
                                        </div>
                                    </div>
                                    <div class="mdc-slider__thumb">
                                        ${this.continuous?"":lit__WEBPACK_IMPORTED_MODULE_0__.qy`<div class="mdc-slider__value-indicator-container" aria-hidden="true">
                                            <div class="mdc-slider__value-indicator">
                                                <span class="mdc-slider__value-indicator-text">
                                                  50
                                                </span>
                                            </div>
                                        </div>`}
                                        <div class="mdc-slider__thumb-knob"></div>
                                    </div>
                                </div>
                                ${e?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="min-width: 70px; width: 70px;">${e}</div>`:""}
                            </span>
                        `}return e}}}return lit__WEBPACK_IMPORTED_MODULE_0__.qy`<span>INPUT TYPE NOT IMPLEMENTED</span>`}_getFormat(){if(this.format)return this.format}update(e){if(e.has("autoValidate")&&this._mdcComponent){const e=this._mdcComponent;e.foundation&&e.foundation.setValidateOnValueChange&&e.foundation.setValidateOnValueChange(this.autoValidate)}super.update(e)}firstUpdated(e){super.firstUpdated(e),this.autoValidate&&this.reportValidity()}updated(e){var t,i;if(super.updated(e),e.has("type")){const e=this.shadowRoot.getElementById("component");if(this._mdcComponent&&(this._mdcComponent.destroy(),this._mdcComponent=void 0),this._mdcComponent2&&(this._mdcComponent2.destroy(),this._mdcComponent2=void 0),e&&this.type){switch(this.type){case InputType.LIST:const t=new _material_list__WEBPACK_IMPORTED_MODULE_12__.f(e);this._mdcComponent=t,t.selectedIndex=this._selectedIndex;break;case InputType.SELECT:const i=new _material_select__WEBPACK_IMPORTED_MODULE_13__.R(e);this._mdcComponent=i,null!==this.value&&void 0!==this.value||(i.selectedIndex=-1),this.multiple&&(this._mdcComponent.foundation.adapter.getSelectedIndex=()=>{if(!Array.isArray(this.value)||0===this.value.length)return-1;const e=this.value[0];return this._mdcComponent.foundation.adapter.getMenuItemValues().indexOf(e)}),i.useDefaultValidation=!this.multiple,i.valid=!this.required||!this.multiple&&i.valid||this.multiple&&Array.isArray(this.value)&&this.value.length>0;const n=this.getSelectedTextValue();this._mdcComponent.foundation.adapter.setSelectedText(n),this._mdcComponent.foundation.adapter.floatLabel(!!n),this._menuObserver||(this._menuObserver=new IntersectionObserver(((e,t)=>{var i,n;e[0].target.style.minWidth!=(null===(i=e[0].target.parentElement)||void 0===i?void 0:i.clientWidth)+"px"&&(e[0].target.style.minWidth=(null===(n=e[0].target.parentElement)||void 0===n?void 0:n.clientWidth)+"px")})),this._menuObserver.observe(this.shadowRoot.getElementById("mdc-select-menu")));const s=void 0!==this.searchProvider,a=this.multiple;i.menu.menuSurface_.foundation.handleBodyClick=function(e){const t=e.composedPath()[0];if(this.adapter.isElementInContainer(t)){if(!s)return;if(t instanceof Element&&!t.className.includes("mdc-list-item"))return;if(a)return}i.menu.menuSurface_.close()};break;case InputType.RADIO:case InputType.CHECKBOX_LIST:case InputType.COLOUR:break;case InputType.BUTTON:case InputType.BUTTON_MOMENTARY:const o=!this.action&&!this.label,l=new _material_ripple__WEBPACK_IMPORTED_MODULE_14__.N(e);o&&(l.unbounded=!0),this._mdcComponent=l;break;case InputType.BUTTON_TOGGLE:this._mdcComponent=new _material_icon_button__WEBPACK_IMPORTED_MODULE_15__.i(e);break;case InputType.CHECKBOX:this._mdcComponent=new _material_checkbox__WEBPACK_IMPORTED_MODULE_16__._(e);const r=this.shadowRoot.getElementById("field");if(r){const e=new _material_form_field__WEBPACK_IMPORTED_MODULE_17__.$(r);e.input=this._mdcComponent,this._mdcComponent2=e}break;case InputType.SWITCH:this._mdcComponent=new _material_switch__WEBPACK_IMPORTED_MODULE_18__.P(e);break;case InputType.RANGE:this._mdcComponent=new _material_slider__WEBPACK_IMPORTED_MODULE_19__.m(e);const d=this.shadowRoot.getElementById("number");if(d){const e=new _material_textfield__WEBPACK_IMPORTED_MODULE_20__.g(d);e.useNativeValidation=!1,this._mdcComponent2=e}break;default:const c=new _material_textfield__WEBPACK_IMPORTED_MODULE_20__.g(e);c.useNativeValidation=!1,this._mdcComponent=c}this._mdcComponent&&this.focused&&"function"==typeof this._mdcComponent.focus&&this._mdcComponent.focus()}}else{if(this.type===InputType.SELECT&&this._mdcComponent){e.has("options")&&this._mdcComponent.layoutOptions(),this._mdcComponent.disabled=!(!this.disabled&&!this.readonly),this._mdcComponent.useDefaultValidation=!this.multiple,this._mdcComponent.valid=!this.required||!this.multiple&&this._mdcComponent.valid||this.multiple&&Array.isArray(this.value)&&this.value.length>0;const t=this.getSelectedTextValue();this._mdcComponent.foundation.adapter.setSelectedText(t),this._mdcComponent.foundation.adapter.floatLabel(!!t)}else if(this.type===InputType.RANGE&&this._mdcComponent){const e=this._mdcComponent;e.setDisabled(this.disabled||this.readonly),e.setValue(this.value)}else if(this.type===InputType.SWITCH&&this._mdcComponent)this._mdcComponent.checked=this.value;else if(this.type===InputType.CHECKBOX&&this._mdcComponent){const e=this._mdcComponent;e.checked=!!this.value,e.disabled=!(!this.disabled&&!this.readonly)}this._mdcComponent&&(this._mdcComponent.required=!!this.required)}e.has("label")&&(null===(i=null===(t=this._mdcComponent)||void 0===t?void 0:t.layout)||void 0===i||i.call(t)),this.autoValidate&&this.reportValidity()}renderOutlined(e){return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
            <span class="mdc-notched-outline">
                <span class="mdc-notched-outline__leading"></span>
                ${e?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                <span class="mdc-notched-outline__notch">
                    ${e}
                </span>
                `:""}
                <span class="mdc-notched-outline__trailing"></span>
            </span>
        `}setCustomValidity(e){this.errorMessage=e;const t=this.shadowRoot.getElementById("elem");t&&t.setCustomValidity&&t.setCustomValidity(null!=e?e:""),this.reportValidity()}checkValidity(){const e=this.shadowRoot.getElementById("elem");let t=!0;return e&&e.validity&&(t=e.validity.valid),!t||this.type!==InputType.JSON&&this.type!==InputType.JSON_OBJECT||void 0!==this.value&&null!==this.value&&""===this._mdcComponent.value&&(t=!1),t}reportValidity(){const e=this.checkValidity();return this.isUiValid=e,this._mdcComponent&&(this._mdcComponent.valid=e),e}onValueChange(e,t,i){var n,s;let a,o=this.value;if("undefined"===t&&(o=null,t=void 0),"null"===t&&(o=void 0,t=null),"string"==typeof t)switch(this.type){case InputType.CHECKBOX:case InputType.SWITCH:t="on"===t;break;case InputType.JSON:case InputType.JSON_OBJECT:case InputType.NUMBER:case InputType.RANGE:if(""===t)t=null;else try{t=JSON.parse(t),this.type!==InputType.JSON_OBJECT||"object"==typeof t&&!Array.isArray(t)||(t=this.value,a=_openremote_or_translate__WEBPACK_IMPORTED_MODULE_9__.MR.t("validation.invalidJSON"))}catch(e){t=this.value,a=this.type===InputType.JSON||this.type==InputType.JSON_OBJECT?_openremote_or_translate__WEBPACK_IMPORTED_MODULE_9__.MR.t("validation.invalidJSON"):_openremote_or_translate__WEBPACK_IMPORTED_MODULE_9__.MR.t("validation.invalidNumber")}break;case InputType.DATETIME:if(""===t)t=null;else try{t=Date.parse(t)}catch(e){t=this.value,a=_openremote_or_translate__WEBPACK_IMPORTED_MODULE_9__.MR.t("validation.invalidDate")}}if(this.value=t,this.setCustomValidity(a),this.reportValidity(),this.type!==InputType.CHECKBOX_LIST&&t!==o&&(this.type===InputType.RANGE&&(this._mdcComponent.setValue(t),this._mdcComponent2&&(this._mdcComponent2.value=t)),this.dispatchEvent(new OrInputChangedEvent(this.value,o,i))),null!=this.searchProvider&&this.type===InputType.SELECT){const e=null===(s=null===(n=this.shadowRoot)||void 0===n?void 0:n.getElementById("select-searchable"))||void 0===s?void 0:s.children[1];e&&(this.searchableValue=void 0,e.value="")}this.type!==InputType.CHECKBOX_LIST||_openremote_core__WEBPACK_IMPORTED_MODULE_6__.J0.objectsEqual(t,o,!0)||this.dispatchEvent(new OrInputChangedEvent(t,o,i))}get valid(){const e=this.shadowRoot.getElementById("elem");return!e||!e.checkValidity||e.checkValidity()}get currentValue(){const e=this.shadowRoot.getElementById("elem");if(e&&e.value)return e.value}resolveOptions(e){let t;return e&&e.length>0&&(t=e.map((e=>{if(Array.isArray(e))return e;{const t=""+e;return[e,_openremote_or_translate__WEBPACK_IMPORTED_MODULE_9__.MR.t(t,{defaultValue:_openremote_core__WEBPACK_IMPORTED_MODULE_6__.J0.camelCaseToSentenceCase(t)})]}}))),t}getSelectedTextValue(e){const t=this.value,i=Array.isArray(t)?t:null!=t?[t]:void 0;if(!i)return"";const n=e||this.resolveOptions(this.options);return n&&i?i.map((e=>n.find((([t,i],n)=>e===t)))).map((e=>e?e[1]:"")).join(", "):""}};__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcInput.prototype,"focused",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrMwcInput.prototype,"value",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:String})],OrMwcInput.prototype,"type",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:String})],OrMwcInput.prototype,"name",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcInput.prototype,"readonly",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcInput.prototype,"required",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrMwcInput.prototype,"max",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrMwcInput.prototype,"min",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Number})],OrMwcInput.prototype,"step",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcInput.prototype,"checked",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcInput.prototype,"indeterminate",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Number})],OrMwcInput.prototype,"maxLength",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Number})],OrMwcInput.prototype,"minLength",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Number})],OrMwcInput.prototype,"rows",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Number})],OrMwcInput.prototype,"cols",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcInput.prototype,"multiple",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:String,attribute:!0,reflect:!1})],OrMwcInput.prototype,"pattern",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:String})],OrMwcInput.prototype,"placeHolder",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Array})],OrMwcInput.prototype,"options",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcInput.prototype,"autoSelect",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Object})],OrMwcInput.prototype,"searchProvider",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:String})],OrMwcInput.prototype,"icon",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:String})],OrMwcInput.prototype,"iconColor",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:String})],OrMwcInput.prototype,"iconOn",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:String})],OrMwcInput.prototype,"iconTrailing",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcInput.prototype,"compact",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcInput.prototype,"comfortable",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcInput.prototype,"raised",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcInput.prototype,"action",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcInput.prototype,"unElevated",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcInput.prototype,"outlined",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcInput.prototype,"rounded",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Object})],OrMwcInput.prototype,"format",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcInput.prototype,"disableSliderNumberInput",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcInput.prototype,"fullWidth",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:String})],OrMwcInput.prototype,"helperText",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcInput.prototype,"helperPersistent",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:String,attribute:!0})],OrMwcInput.prototype,"validationMessage",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcInput.prototype,"autoValidate",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcInput.prototype,"charCounter",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:String})],OrMwcInput.prototype,"label",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcInput.prototype,"disabled",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcInput.prototype,"continuous",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcInput.prototype,"resizeVertical",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.wk)()],OrMwcInput.prototype,"isUiValid",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.wk)()],OrMwcInput.prototype,"searchableValue",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.wk)()],OrMwcInput.prototype,"errorMessage",void 0),OrMwcInput=__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.EM)("or-mwc-input")],OrMwcInput)},"../../component/or-mwc-components/lib/or-mwc-list.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K3:()=>getItemTemplate,bb:()=>getListTemplate,pc:()=>ListType,uI:()=>createListGroup});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/lit/decorators.js"),lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/lit/directives/style-map.js"),lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/lit/directives/if-defined.js"),_material_list__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../../node_modules/@material/list/component.js"),_openremote_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../component/core/lib/index.js"),_openremote_or_translate__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../component/or-translate/lib/index.js"),__decorate=function(t,e,s,i){var r,l=arguments.length,a=l<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,i);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(a=(l<3?r(a):l>3?r(e,s,a):r(e,s))||a);return l>3&&a&&Object.defineProperty(e,s,a),a};const listStyle=__webpack_require__("../../../node_modules/@material/list/dist/mdc.list.css"),checkboxStyle=__webpack_require__("../../../node_modules/@material/checkbox/dist/mdc.checkbox.css");class OrMwcListChangedEvent extends CustomEvent{constructor(t){super(OrMwcListChangedEvent.NAME,{detail:t,bubbles:!0,composed:!0})}}var ListType,t;function createListGroup(t){return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
        <div class="mdc-list-group">
            ${t.map((t=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                    <h3 class="mdc-list-group__subheader">${t.heading}</h3>
                    ${t.list}
                `))}
        </div>    
    `}function getListTemplate(t,e,s,i,r){switch(i=i||"listbox",t){case ListType.RADIO:i="radiogroup";break;case ListType.MULTI_CHECKBOX:i="group"}return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
        <ul id="list" class="mdc-list${s?" mdc-list--two-line":""}" role="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_3__.J)(i)}" @MDCList:action="${t=>r&&r(t)}" aria-hidden="true" aria-orientation="vertical" tabindex="-1">
            ${e}
        </ul>
    `}function getItemTemplate(t,e,s,i,r,l){if(null===t)return lit__WEBPACK_IMPORTED_MODULE_0__.qy`<li role="separator" class="mdc-list-divider"></li>`;const a=t,o=i===ListType.MULTI_CHECKBOX||i===ListType.MULTI_TICK,c=a.value,n=i!==ListType.PLAIN&&s.length>0&&s.some((t=>t===c)),m=void 0!==a.text?a.text:a.value,d=a.secondaryText;let p,h,u,_="menuitem",v="",y="",f="",L=a.icon,C="mdc-list-item--selected";switch(r=r||t.translate,o&&i===ListType.MULTI_TICK&&(L=n?"checkbox-marked":"checkbox-blank-outline"),(i===ListType.MULTI_TICK||L)&&(y=lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                <span class="mdc-list-item__graphic">
                    <or-icon icon="${L}"></or-icon>
                </span>
            `),a.trailingIcon&&(f=lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                <span class="mdc-list-item__meta" aria-hidden="true">
                    <or-icon icon="${a.trailingIcon}"></or-icon>
                </span>
            `),i){case ListType.SELECT:p=n?"true":"false",u=n||(!s||0===s.length)&&0===e?"0":void 0,_="option";break;case ListType.RADIO:h=n?"true":"false",_="radio",y=lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                    <span class="mdc-list-item__graphic">
                        <div class="mdc-radio">
                            <input class="mdc-radio__native-control" id="radio-item-${e+1}" type="radio" value="${c}" />
                            <div class="mdc-radio__background">
                                <div class="mdc-radio__outer-circle"></div>
                                <div class="mdc-radio__inner-circle"></div>
                            </div>
                        </div>
                    </span>
                `;break;case ListType.MULTI_CHECKBOX:h=n?"true":"false",_="checkbox",y=lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                    <div class="mdc-checkbox">
                        <input type="checkbox" class="mdc-checkbox__native-control" />
                        <div class="mdc-checkbox__background">
                            <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                                <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                            </svg>
                            <div class="mdc-checkbox__mixedmark"></div>
                        </div>
                    </div>
                `;break;case ListType.MULTI_TICK:h=n?"true":"false",C="mdc-list-item--selected"}return m&&(v=void 0!==d?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                    <span class="mdc-list-item__text">
                        <span class="mdc-list-item__primary-text">${r&&m?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-translate value="${m}"></or-translate>`:m}</span>
                        <span class="mdc-list-item__secondary-text">${r&&d?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-translate value="${d}"></or-translate>`:d}</span>
                    </span>
                `:i===ListType.RADIO?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<label class="mdc-list-item__text" for="radio-item-${e+1}">${r&&m?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-translate value="${m}"></or-translate>`:m}</label>`:lit__WEBPACK_IMPORTED_MODULE_0__.qy`<span class="mdc-list-item__text" title="${r&&m?_openremote_or_translate__WEBPACK_IMPORTED_MODULE_5__.MR.t(m):m}">${r&&m?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-translate value="${m}"></or-translate>`:m}</span>`),lit__WEBPACK_IMPORTED_MODULE_0__.qy`
        <li @click="${e=>{l&&l(e,t)}}" style="${a.styleMap?(0,lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_2__.W)(a.styleMap):""}" class="mdc-list-item ${n?C:""}" role="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_3__.J)(_)}" tabindex="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_3__.J)(u)}" aria-checked="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_3__.J)(h)}" aria-selected="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_3__.J)(p)}" data-value="${c}">
            <span class="mdc-list-item__ripple"></span>
            ${y}
            ${v}
            ${f}
        </li>
    `}OrMwcListChangedEvent.NAME="or-mwc-list-changed",(t=ListType||(ListType={})).PLAIN="PLAIN",t.SELECT="SELECT",t.RADIO="RADIO",t.MULTI_CHECKBOX="MULTI_CHECKBOX",t.MULTI_TICK="MULTI_TICK";const style=lit__WEBPACK_IMPORTED_MODULE_0__.AH`
    :host {
        white-space: nowrap;
        --internal-or-mwc-input-color: var(--or-mwc-input-color, var(--or-app-color4, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_4__.BB)}));    
        --internal-or-mwc-input-text-color: var(--or-mwc-input-text-color, var(--or-app-color8, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_4__.BH)}));
        
        --mdc-theme-primary: var(--internal-or-mwc-input-color);
        --mdc-theme-on-primary: var(--internal-or-mwc-input-text-color);
        --mdc-theme-secondary: var(--internal-or-mwc-input-color);
    }
    
    .mdc-list-item__graphic {
        margin-right: 16px;
    }

    a {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.87);
    }     
`;let OrMwcList=class extends lit__WEBPACK_IMPORTED_MODULE_0__.WF{static get styles(){return[lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(listStyle)}`,lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(checkboxStyle)}`,style]}constructor(){super(),this.type=ListType.SELECT}disconnectedCallback(){super.disconnectedCallback(),this._mdcComponent&&(this._mdcComponent.destroy(),this._mdcComponent=void 0)}shouldUpdate(t){if(this._mdcComponent&&t.has("values")&&!_openremote_core__WEBPACK_IMPORTED_MODULE_4__.J0.objectsEqual(this.values,t.get("values"))){const t=this.values?Array.isArray(this.values)?this.values:[this.values]:[];this.setSelectedItems(this.values&&this.listItems?this.listItems.filter((e=>e&&(null==t?void 0:t.includes(e.value)))):void 0)}return!0}render(){const t=this.listItems?lit__WEBPACK_IMPORTED_MODULE_0__.qy`${this.listItems.map(((t,e)=>getItemTemplate(t,e,Array.isArray(this.values)?this.values:this.values?[this.values]:[],this.type)))}`:lit__WEBPACK_IMPORTED_MODULE_0__.qy``,e=this.listItems&&this.listItems.some((t=>t&&!!t.secondaryText));return getListTemplate(this.type,t,e,void 0,(t=>this._onSelected(t)))}firstUpdated(t){super.firstUpdated(t),this._mdcElem&&(this._mdcComponent=new _material_list__WEBPACK_IMPORTED_MODULE_6__.f(this._mdcElem),this.type!==ListType.SELECT&&this.type!==ListType.RADIO||(this._mdcComponent.singleSelection=!0))}get selectedItems(){if(!this._mdcComponent)return[];const t=Array.isArray(this._mdcComponent.selectedIndex)?this._mdcComponent.selectedIndex:[this._mdcComponent.selectedIndex],e=this.listItems?this.listItems.filter((t=>null!==t)):[];return t.map((t=>e[t]))}setSelectedItems(t){if(!this._mdcComponent||!this.listItems)return;if(!t)return void(this._mdcComponent.selectedIndex=-1);const e=(Array.isArray(t)?t:[t]).map((t=>"string"==typeof t?t:t.value)),s=this.listItems.filter((t=>null!==t)).reduce(((t,s,i)=>(s&&e.includes(s.value)&&t.push(i),t)),[]);this._mdcComponent.selectedIndex=this.type===ListType.MULTI_CHECKBOX?s:s.length>=1?s[0]:-1}_onSelected(t){this.values=this.selectedItems.map((t=>t.value)),t.stopPropagation(),this.dispatchEvent(new OrMwcListChangedEvent(this.selectedItems))}};__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Array})],OrMwcList.prototype,"listItems",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Array})],OrMwcList.prototype,"values",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:String,attribute:!0})],OrMwcList.prototype,"type",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#wrapper")],OrMwcList.prototype,"_wrapperElem",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#list")],OrMwcList.prototype,"_mdcElem",void 0),OrMwcList=__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.EM)("or-mwc-list")],OrMwcList)}}]);
//# sourceMappingURL=83.c767ee7d.iframe.bundle.js.map