"use strict";(self.webpackChunk_openremote_workshop=self.webpackChunk_openremote_workshop||[]).push([[7686],{"../../component/or-gauge/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/lit/decorators.js"),_openremote_model__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../component/model/lib/index.js"),gaugeJS__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/gaugeJS/dist/gauge.js"),_openremote_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../component/core/lib/index.js"),_openremote_or_translate__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../component/or-translate/lib/index.js"),lodash__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../../node_modules/lodash/lodash.js"),_openremote_or_icon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../component/or-icon/lib/index.js"),__decorate=function(t,e,i,s){var a,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},__awaiter=function(t,e,i,s){return new(i||(i=Promise))((function(a,o){function r(t){try{l(s.next(t))}catch(t){o(t)}}function n(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,n)}l((s=s.apply(t,e||[])).next())}))};const styling=lit__WEBPACK_IMPORTED_MODULE_0__.AH`
    :host {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    #chart-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #chart-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #chart {
        width: 100%;
    }

    .chart-description {
        margin: 0 20px;
        font-size: 16px;
        z-index: 3;
    }
    .mainvalue-wrapper {
        width: 100%;
        display: flex;
        flex: 0 0 60px;
        align-items: center;
        justify-content: center;
    }
    .main-number {
        color: var(--internal-or-asset-viewer-title-text-color);
        font-size: 42px;
    }

    .main-number-icon {
        font-size: 24px;
        margin-right: 10px;
        display: flex;
    }

    .main-number-unit {
        font-size: 42px;
        color: var(--internal-or-asset-viewer-title-text-color);
        font-weight: 200;
        margin-left: 5px;
    }

    .main-number.xs, .main-number-unit.xs {
        font-size: 18px;
    }
    .main-number.s, .main-number-unit.s {
        font-size: 24px;
    }
    .main-number.m, .main-number-unit.m {
        font-size: 30px;
    }
    .main-number.l, .main-number-unit.l {
        font-size: 36px;
    }
    .main-number.xl, .main-number-unit.xl {
        font-size: 42px;
    }
    .main-number.unknown, .main-number-unit.unknown {
        font-size: unset;
    }
`;let OrGauge=class extends lit__WEBPACK_IMPORTED_MODULE_0__.WF{static get styles(){return[styling]}constructor(){super(),this.decimals=0,this.loading=!1,this.config||(this.config=this.getDefaultConfig()),this.updateComplete.then((()=>{this.resizeObserver=new ResizeObserver((0,lodash__WEBPACK_IMPORTED_MODULE_6__.debounce)((t=>{const e=t[0].contentRect;this.gaugeSize={width:e.width,height:e.height},this.updateComplete.then((()=>{this.setupGauge()}))}),200)),this.resizeObserver.observe(this._wrapperElem)}))}willUpdate(t){if(t.has("assetAttribute")&&this.assetAttribute){const t=this.assetAttribute[1],e=_openremote_model__WEBPACK_IMPORTED_MODULE_2__.u0.getAttributeDescriptor(t.name,this.asset.type);this.unit=_openremote_core__WEBPACK_IMPORTED_MODULE_4__.J0.resolveUnits(_openremote_core__WEBPACK_IMPORTED_MODULE_4__.J0.getAttributeUnits(t,e,this.asset.type)),this.value=null!=t.value?t.value:NaN}}updated(t){var e,i,s,a;t.has("value")&&(null===(e=this.gauge)||void 0===e||e.set(null!=this.value?this.value:NaN)),t.has("attrRef")&&(this.attrRef?this.loadData(this.attrRef):t.get("attrRef")&&(this.assetAttribute=void 0,this.value=void 0)),t.has("min")&&this.gauge&&(console.log("Setting min value"),this.gauge.setMinValue(this.min||0),this.gauge.set(null!=this.value?this.value:NaN)),t.has("max")&&this.gauge&&(this.gauge.maxValue=this.max||0,this.gauge.set(null!=this.value?this.value:NaN)),t.has("thresholds")&&this.thresholds&&(this.config.options.staticZones=[],console.log(typeof this.thresholds),this.thresholds.sort(((t,e)=>t[0]<e[0]?-1:1)).forEach(((t,e)=>{var i,s,a;const o=t[0],r=this.thresholds[e+1]?this.thresholds[e+1][0]:this.max,n={strokeStyle:t[1],min:this.min&&o&&this.min>o?this.min:this.max&&o&&this.max<o?this.max:o,max:this.max&&r&&this.max<r?this.max:this.min&&r&&this.min>r?this.min:r};null===(a=null===(s=null===(i=this.config)||void 0===i?void 0:i.options)||void 0===s?void 0:s.staticZones)||void 0===a||a.push(n)})),this.min&&(null===(s=null===(i=this.config)||void 0===i?void 0:i.options)||void 0===s?void 0:s.staticZones)&&(this.config.options.staticZones[0].min=this.min),this.gauge&&this.gauge.setOptions(null===(a=this.config)||void 0===a?void 0:a.options))}setupGauge(){var t;console.log("setupGauge()",this.config,this.value),this.gauge=new gaugeJS__WEBPACK_IMPORTED_MODULE_3__.Gauge(this._gaugeElem),this.gauge.setOptions(null===(t=this.config)||void 0===t?void 0:t.options),this.gauge.maxValue=this.max?this.max:100,this.gauge.setMinValue(this.min?this.min:0),this.gauge.animationSpeed=1,this.gauge.set(null!=this.value?this.value:NaN),null==this.value&&this.attrRef&&this.loadData(this.attrRef)}getGaugeWidth(t,e=!0){if(!t)return"unset";const i=t.width,s=1.5*(e?t.height-this._detailsElem.clientHeight:t.height);return Math.min(i,s)+"px"}shouldShowLabel(t){return t.width>70&&t.height>100}getLabelSize(t){return t<120?"s":t<240?"m":t<320?"l":"xl"}render(){const t=!this.gaugeSize||this.shouldShowLabel(this.gaugeSize),e=t&&this.gaugeSize?this.getLabelSize(this.gaugeSize.width):"unknown",i=this.getGaugeWidth(this.gaugeSize,t);return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
            <div style="position: relative; height: 100%; width: 100%;">
                <div id="chart-wrapper" style="display: ${this.loading?"none":"flex"};">
                    <div id="chart-container" style="flex: 0 0 0; width: ${i};">
                        <canvas id="chart"></canvas>
                    </div>
                    <div id="details-container">
                        ${t?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                            <div class="mainvalue-wrapper">
                                <span class="main-number-icon">${this.asset?(0,_openremote_or_icon__WEBPACK_IMPORTED_MODULE_7__.xl)(_openremote_model__WEBPACK_IMPORTED_MODULE_2__.u0.getAssetDescriptor(this.asset.type)):""}</span>
                                <span class="main-number ${e}">${this.value}</span>
                                <span class="main-number-unit ${e}">${this.unit?this.unit:""}</span>
                            </div>
                        `:void 0}
                    </div>
                </div>
            </div>
            ${this.loading?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                <span>${_openremote_or_translate__WEBPACK_IMPORTED_MODULE_5__.MR.t("loading")}</span>
            `:void 0}
        `}loadData(t){return __awaiter(this,void 0,void 0,(function*(){const e=(yield _openremote_core__WEBPACK_IMPORTED_MODULE_4__.Ay.rest.api.AssetResource.queryAssets({ids:[t.id]})).data,i=[t].map((t=>{const i=e.findIndex((e=>e.id===t.id)),s=i>=0?e[i]:void 0;return s&&s.attributes?[i,s.attributes[t.name]]:void 0})).filter((t=>!!t));this.asset=e[0],this.assetAttribute=i[0]}))}getDefaultConfig(){return{attributeRef:void 0,options:{angle:0,lineWidth:.4,radiusScale:1,pointer:{length:.5,strokeWidth:.035,color:"#000000"},staticZones:[],limitMax:!0,limitMin:!0,colorStart:"#000000",colorStop:"#707070",strokeColor:"#ABCDEF",generateGradient:!1,highDpiSupport:!0}}}};__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Object})],OrGauge.prototype,"attrRef",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Object})],OrGauge.prototype,"asset",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Object})],OrGauge.prototype,"assetAttribute",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Number})],OrGauge.prototype,"value",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrGauge.prototype,"decimals",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrGauge.prototype,"unit",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrGauge.prototype,"min",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrGauge.prototype,"max",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Array})],OrGauge.prototype,"thresholds",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrGauge.prototype,"config",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:String})],OrGauge.prototype,"realm",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.wk)()],OrGauge.prototype,"loading",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#chart")],OrGauge.prototype,"_gaugeElem",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#chart-wrapper")],OrGauge.prototype,"_wrapperElem",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#details-container")],OrGauge.prototype,"_detailsElem",void 0),OrGauge=__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.EM)("or-gauge")],OrGauge)},"./stories/or-gauge.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var wc_storybook_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/wc-storybook-helpers/index.js"),_getWcStorybookHelper=(__webpack_require__("../../component/or-gauge/lib/index.js"),(0,wc_storybook_helpers__WEBPACK_IMPORTED_MODULE_0__.M)("or-gauge")),events=_getWcStorybookHelper.events,args=_getWcStorybookHelper.args,argTypes=_getWcStorybookHelper.argTypes,template=_getWcStorybookHelper.template,meta={title:"Components/or-gauge",component:"or-gauge",args,argTypes,parameters:{actions:{handles:events}}},Primary={args:{min:0,max:10,value:6,thresholds:JSON.stringify([[0,"#4caf50"],[5,"#ff9800"],[8,"#ef5350"]])},parameters:{docs:{source:{code:'\nimport "@openremote/or-gauge";\n\n// (OPTIONAL) set the thresholds;\nconst thresholds = [[0, "#4caf50"], [5, "#ff9800"], [8, "#ef5350"]];\n// const thresholdsStr = JSON.stringify(thresholds);\n\n// in your HTML code use this, and inject them;\n<or-gauge min="0" value="6" max="10" thresholds="thresholdsStr"></or-gauge>\n'},story:{height:"200px"}}},render:function render(args){return template(args)}};const __WEBPACK_DEFAULT_EXPORT__=meta;Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    min: 0,\n    max: 10,\n    value: 6,\n    thresholds: (JSON.stringify([[0, "#4caf50"], [5, "#ff9800"], [8, "#ef5350"]]) as any)\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: getExampleCode()\n      },\n      story: {\n        height: \'200px\'\n      }\n    }\n  },\n  render: args => template(args)\n}',...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]}}]);
//# sourceMappingURL=or-gauge-stories.0b7a955b.iframe.bundle.js.map