"use strict";(self.webpackChunk_openremote_workshop=self.webpackChunk_openremote_workshop||[]).push([[49],{"../../component/or-attribute-picker/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>OrAttributePickerPickedEvent,y:()=>OrAttributePicker});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/lit/decorators.js"),_openremote_or_translate__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("../../component/or-asset-tree/lib/index.js"),__webpack_require__("../../component/or-translate/lib/index.js")),_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-input.js"),_openremote_or_mwc_components_or_mwc_list__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-list.js"),_openremote_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../component/core/lib/index.js"),_openremote_or_mwc_components_or_mwc_dialog__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-dialog.js"),__decorate=function(t,e,s,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n},__awaiter=function(t,e,s,i){return new(s||(s=Promise))((function(r,o){function n(t){try{l(i.next(t))}catch(t){o(t)}}function a(t){try{l(i.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(n,a)}l((i=i.apply(t,e||[])).next())}))};class OrAttributePickerPickedEvent extends CustomEvent{constructor(t){super(OrAttributePickerPickedEvent.NAME,{bubbles:!0,composed:!0,detail:t})}}OrAttributePickerPickedEvent.NAME="or-attribute-picker-picked";let OrAttributePicker=class extends _openremote_or_mwc_components_or_mwc_dialog__WEBPACK_IMPORTED_MODULE_7__.X${constructor(){super(),this.showOnlyDatapointAttrs=!1,this.showOnlyRuleStateAttrs=!1,this.multiSelect=!1,this.selectedAttributes=[],this.selectedAssets=[],this.heading=_openremote_or_translate__WEBPACK_IMPORTED_MODULE_3__.MR.t("selectAttributes"),this.setDialogContent(),this.setDialogActions(),this.dismissAction=null,this.styles=`\n            .attributes-header {\n                line-height: 48px;\n                padding: 0 15px;\n                background-color: ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_6__.PR)};\n                font-weight: bold;\n                border-bottom: 1px solid ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_6__.PR)};\n            }\n            footer.mdc-dialog__actions {\n                border-top: 1px solid ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_6__.Id)};\n            }\n            #header {\n                background-color: ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_6__.BB)} !important;\n            }\n            #dialog-content {\n                padding: 0;\n            }\n        `}setShowOnlyDatapointAttrs(t){return this.showOnlyDatapointAttrs=t,this}setShowOnlyRuleStateAttrs(t){return this.showOnlyRuleStateAttrs=t,this}setAttributeFilter(t){return this.attributeFilter=t,this}setMultiSelect(t){return this.multiSelect=t,this}setSelectedAttributes(t){return this.selectedAttributes=t,this}setSelectedAssets(t){return this.selectedAssets=t,this.setDialogContent(),this}setOpen(t){return super.setOpen(t),this}setHeading(t){return super.setHeading(t),this}setContent(t){throw new Error("Cannot modify attribute picker content")}setActions(t){throw new Error("Cannot modify attribute picker actions")}setDismissAction(t){throw new Error("Cannot modify attribute picker dismiss action")}setStyles(t){throw new Error("Cannot modify attribute picker styles")}setAvatar(t){throw new Error("Cannot modify attribute picker avatar setting")}setDialogActions(){this.actions=[{actionName:"cancel",content:"cancel"},{actionName:"add",content:lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-mwc-input id="add-btn" class="button" label="add"
                                            .type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_4__.NZ.BUTTON}" ?disabled="${!this.selectedAttributes.length}"
                                            @or-mwc-input-changed="${t=>{if(!this.selectedAttributes.length)return t.stopPropagation(),!1}}"></or-mwc-input>`,action:()=>{this.selectedAttributes.length&&this.dispatchEvent(new OrAttributePickerPickedEvent(this.selectedAttributes))}}]}setDialogContent(){const t=()=>this.assetAttributes?this.assetAttributes.map((t=>({text:_openremote_core__WEBPACK_IMPORTED_MODULE_6__.J0.getAttributeLabel(void 0,t,void 0,!0),value:t.name}))):[];let e;!this.multiSelect&&1===this.selectedAttributes.length&&this.selectedAttributes[0].name&&(e={text:_openremote_core__WEBPACK_IMPORTED_MODULE_6__.J0.getAttributeLabel(void 0,this.selectedAttributes[0],void 0,!0),value:this.selectedAttributes[0].name}),this.content=()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
            <div class="row" style="display: flex;height: 600px;width: 800px;border-top: 1px solid ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_6__.Id)};">
                <div class="col" style="width: 260px;overflow: auto;border-right: 1px solid ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_6__.Id)};">
                    <or-asset-tree id="chart-asset-tree" readonly
                                   .selectedIds="${this.selectedAssets.length>0?this.selectedAssets:null}"
                                   @or-asset-tree-selection="${t=>this._onAssetSelectionChanged(t)}">
                    </or-asset-tree>
                </div>
                <div class="col" style="flex: 1 1 auto;width: 260px;overflow: auto;">
                ${this.assetAttributes&&this.assetAttributes.length>0?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                    <div class="attributes-header">
                        <or-translate value="attribute_plural"></or-translate>
                    </div>
                    ${this.multiSelect?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="display: grid">
                                            <or-mwc-list
                                                    id="attribute-selector" .type="${_openremote_or_mwc_components_or_mwc_list__WEBPACK_IMPORTED_MODULE_5__.pc.MULTI_CHECKBOX}" .listItems="${t()}"
                                                    .values="${this.selectedAttributes.filter((t=>t.id===this.asset.id)).map((t=>t.name))}"
                                                    @or-mwc-list-changed="${t=>this._onAttributeSelectionChanged([...this.selectedAttributes.filter((t=>t.id!==this.asset.id)),...t.detail.map((t=>({id:this.asset.id,name:t.value})))])}"></or-mwc-list>
                                        </div>`:lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-mwc-input id="attribute-selector"
                                                style="display:flex;"
                                                .label="${_openremote_or_translate__WEBPACK_IMPORTED_MODULE_3__.MR.t("attribute")}"
                                                .type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_4__.NZ.LIST}"
                                                .options="${t().map((t=>[t,t.text]))}"
                                                @or-mwc-input-changed="${t=>{this._onAttributeSelectionChanged([{id:this.asset.id,name:t.detail.value.value}])}}"></or-mwc-input>`}
                `:lit__WEBPACK_IMPORTED_MODULE_0__.qy`<div style="display: flex;align-items: center;text-align: center;height: 100%;padding: 0 20px;"><span style="width:100%">
                            <or-translate value="${this.assetAttributes&&0===this.assetAttributes.length?this.showOnlyDatapointAttrs&&this.showOnlyRuleStateAttrs?"noDatapointsOrRuleStateAttributes":this.showOnlyDatapointAttrs?"noDatapointsAttributes":this.showOnlyRuleStateAttrs?"noRuleStateAttributes":"noAttributesToShow":"selectAssetOnTheLeft"}">
                            </or-translate></span></div>`}
                </div>
        `}_onAssetSelectionChanged(t){return __awaiter(this,void 0,void 0,(function*(){this.assetAttributes=void 0,this.multiSelect||(this.selectedAttributes=[]),this.addBtn.disabled=0===this.selectedAttributes.length;const e=t.target;e.disabled=!0;let s=0===t.detail.newNodes.length?void 0:t.detail.newNodes[0].asset;if(this.asset=s,s){const t=yield _openremote_core__WEBPACK_IMPORTED_MODULE_6__.Ay.rest.api.AssetResource.get(s.id);s=t.data,s&&(this.assetAttributes=Object.values(s.attributes).map((t=>Object.assign(Object.assign({},t),{id:s.id}))).sort(_openremote_core__WEBPACK_IMPORTED_MODULE_6__.J0.sortByString((t=>t.name))),this.attributeFilter&&(this.assetAttributes=this.assetAttributes.filter((t=>this.attributeFilter(t)))),this.showOnlyDatapointAttrs&&this.showOnlyRuleStateAttrs?this.assetAttributes=this.assetAttributes.filter((t=>t.meta&&(t.meta.storeDataPoints||t.meta.ruleState||t.meta.agentLink))):this.showOnlyDatapointAttrs?this.assetAttributes=this.assetAttributes.filter((t=>t.meta&&(t.meta.storeDataPoints||t.meta.agentLink))):this.showOnlyRuleStateAttrs&&(this.assetAttributes=this.assetAttributes.filter((t=>t.meta&&(t.meta.ruleState||t.meta.agentLink)))))}e.disabled=!1}))}_onAttributeSelectionChanged(t){this.selectedAttributes=t,this.addBtn.disabled=0===this.selectedAttributes.length}};__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrAttributePicker.prototype,"showOnlyDatapointAttrs",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrAttributePicker.prototype,"showOnlyRuleStateAttrs",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrAttributePicker.prototype,"attributeFilter",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrAttributePicker.prototype,"multiSelect",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.wk)()],OrAttributePicker.prototype,"assetAttributes",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#add-btn")],OrAttributePicker.prototype,"addBtn",void 0),OrAttributePicker=__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.EM)("or-attribute-picker")],OrAttributePicker)},"../../component/or-chart/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>OrChart,a:()=>OrChartEvent});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/lit/decorators.js"),i18next__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/i18next/dist/esm/i18next.js"),_openremote_or_translate__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../component/or-translate/lib/index.js"),_openremote_model__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../component/model/lib/index.js"),_openremote_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../component/core/lib/index.js"),_openremote_or_asset_tree__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../component/or-asset-tree/lib/index.js"),_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-input.js"),chart_js__WEBPACK_IMPORTED_MODULE_9__=(__webpack_require__("../../component/or-components/lib/or-panel.js"),__webpack_require__("../../../node_modules/chart.js/dist/chart.mjs")),moment__WEBPACK_IMPORTED_MODULE_11__=(__webpack_require__("../../component/or-components/lib/or-loading-indicator.js"),__webpack_require__("../../../node_modules/moment/moment.js")),moment__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__),_openremote_or_icon__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../component/or-icon/lib/index.js"),chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../../node_modules/chartjs-plugin-annotation/dist/chartjs-plugin-annotation.esm.js"),_openremote_or_attribute_picker__WEBPACK_IMPORTED_MODULE_15__=(__webpack_require__("../../../node_modules/chartjs-adapter-moment/dist/chartjs-adapter-moment.esm.js"),__webpack_require__("../../component/or-attribute-picker/lib/index.js")),_openremote_or_mwc_components_or_mwc_dialog__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-dialog.js"),lit_directives_cache_js__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../../node_modules/lit/directives/cache.js"),lodash__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../../node_modules/lodash/lodash.js"),_openremote_or_mwc_components_or_mwc_menu__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-menu.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("../../../node_modules/lit-html/directives/when.js"),lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../../../node_modules/lit/directives/ref.js"),__decorate=function(t,e,i,r){var o,a=arguments.length,s=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,i,s):o(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s},__awaiter=function(t,e,i,r){return new(i||(i=Promise))((function(o,a){function s(t){try{l(r.next(t))}catch(t){a(t)}}function n(t){try{l(r.throw(t))}catch(t){a(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,n)}l((r=r.apply(t,e||[])).next())}))};chart_js__WEBPACK_IMPORTED_MODULE_9__.t1.register(chart_js__WEBPACK_IMPORTED_MODULE_9__.ZT,chart_js__WEBPACK_IMPORTED_MODULE_9__.Pz,chart_js__WEBPACK_IMPORTED_MODULE_9__.No,chart_js__WEBPACK_IMPORTED_MODULE_9__.FN,chart_js__WEBPACK_IMPORTED_MODULE_9__.kc,chart_js__WEBPACK_IMPORTED_MODULE_9__.UA,chart_js__WEBPACK_IMPORTED_MODULE_9__.hE,chart_js__WEBPACK_IMPORTED_MODULE_9__.dN,chart_js__WEBPACK_IMPORTED_MODULE_9__.s$,chart_js__WEBPACK_IMPORTED_MODULE_9__.m_,chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_13__.A);class OrChartEvent extends CustomEvent{constructor(t,e){super(OrChartEvent.NAME,{detail:{value:t,previousValue:e},bubbles:!0,composed:!0})}}OrChartEvent.NAME="or-chart-event";const dialogStyle=__webpack_require__("../../../node_modules/@material/dialog/dist/mdc.dialog.css"),tableStyle=__webpack_require__("../../../node_modules/@material/data-table/dist/mdc.data-table.css"),style=lit__WEBPACK_IMPORTED_MODULE_0__.AH`
    :host {
        
        --internal-or-chart-background-color: var(--or-chart-background-color, var(--or-app-color2, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_5__.PR)}));
        --internal-or-chart-text-color: var(--or-chart-text-color, var(--or-app-color3, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_5__.Iy)}));
        --internal-or-chart-controls-margin: var(--or-chart-controls-margin, 0 0 20px 0);       
        --internal-or-chart-controls-margin-children: var(--or-chart-controls-margin-children, 0 auto 20px auto);            
        --internal-or-chart-graph-fill-color: var(--or-chart-graph-fill-color, var(--or-app-color4, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_5__.BB)}));       
        --internal-or-chart-graph-fill-opacity: var(--or-chart-graph-fill-opacity, 1);       
        --internal-or-chart-graph-line-color: var(--or-chart-graph-line-color, var(--or-app-color4, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_5__.BB)}));       
        --internal-or-chart-graph-point-color: var(--or-chart-graph-point-color, var(--or-app-color3, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_5__.Iy)}));
        --internal-or-chart-graph-point-border-color: var(--or-chart-graph-point-border-color, var(--or-app-color5, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_5__.Id)}));
        --internal-or-chart-graph-point-radius: var(--or-chart-graph-point-radius, 4);
        --internal-or-chart-graph-point-hit-radius: var(--or-chart-graph-point-hit-radius, 20);       
        --internal-or-chart-graph-point-border-width: var(--or-chart-graph-point-border-width, 2);
        --internal-or-chart-graph-point-hover-color: var(--or-chart-graph-point-hover-color, var(--or-app-color5, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_5__.Id)}));       
        --internal-or-chart-graph-point-hover-border-color: var(--or-chart-graph-point-hover-border-color, var(--or-app-color3, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_5__.Iy)}));
        --internal-or-chart-graph-point-hover-radius: var(--or-chart-graph-point-hover-radius, 4);      
        --internal-or-chart-graph-point-hover-border-width: var(--or-chart-graph-point-hover-border-width, 2);
        
        width: 100%;
        display: block; 
    }

    .line-label {
        border-width: 1px;
        border-color: var(--or-app-color3);
        margin-right: 5px;
    }

    .line-label.solid {
        border-style: solid;
    }

    .line-label.dashed {
        background-image: linear-gradient(to bottom, var(--or-app-color3) 50%, white 50%);
        width: 2px;
        border: none;
        background-size: 10px 16px;
        background-repeat: repeat-y;
    }
    
    .button-icon {
        align-self: center;
        padding: 10px;
        cursor: pointer;
    }

    a {
        display: flex;
        cursor: pointer;
        text-decoration: underline;
        font-weight: bold;
        color: var(--or-app-color1);
        --or-icon-width: 12px;
    }

    .mdc-dialog .mdc-dialog__surface {
        min-width: 600px;
        height: calc(100vh - 50%);
    }
    
    :host([hidden]) {
        display: none;
    }
    
    #container {
        display: flex;
        min-width: 0;
        flex-direction: row;
        height: 100%;
    }
       
    #msg {
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    
    #msg:not([hidden]) {
        display: flex;    
    }
    .period-controls {
        display: flex;
        min-width: 180px;
        align-items: center;
    }

    #controls {
        display: flex;
        flex-wrap: wrap;
        margin: var(--internal-or-chart-controls-margin);
        width: 100%;
        flex-direction: column;
        margin: 0;
    }

    #attribute-list {
        overflow: hidden auto;
        min-height: 50px;
        flex: 1 1 0;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .attribute-list-dense {
        flex-wrap: wrap;
    }
    
    .attribute-list-item {
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0;
        min-height: 50px;
    }
    .attribute-list-item-dense {
        min-height: 28px;
    }

    .button-clear {
        background: none;
        visibility: hidden;
        color: ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_5__.Id)};
        --or-icon-fill: ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_5__.Id)};
        display: inline-block;
        border: none;
        padding: 0;
        cursor: pointer;
    }

    .attribute-list-item:hover .button-clear {
        visibility: visible;
    }

    .button-clear:hover {
        --or-icon-fill: var(--or-app-color4);
    }
    
    .attribute-list-item-label {
        display: flex;
        flex: 1 1 0;
        line-height: 16px;
        flex-direction: column;
    }

    .attribute-list-item-bullet {
        width: 12px;
        height: 12px;
        border-radius: 7px;
        margin-right: 10px;
    }

    .attribute-list-item .button.delete {
        display: none;
    }

    .attribute-list-item:hover .button.delete {
        display: block;
    }

    #controls > * {
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .dialog-container {
        display: flex;
        flex-direction: row;
        flex: 1 1 0;
    }

    .dialog-container > * {
        flex: 1 1 0;
    }
    
    .dialog-container > or-mwc-input {
        background-color: var(--or-app-color2);
        border-left: 3px solid var(--or-app-color4);
    }

    #chart-container {
        flex: 1 1 0;
        position: relative;
        overflow: hidden;
        /*min-height: 400px;
        max-height: 550px;*/
    }
    #chart-controls {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    canvas {
        width: 100% !important;
        height: 100%; !important;
    }

    @media screen and (max-width: 1280px) {
        #chart-container {
            max-height: 330px;
        }
    }

    @media screen and (max-width: 769px) {
        .mdc-dialog .mdc-dialog__surface {
            min-width: auto;

            max-width: calc(100vw - 32px);
            max-height: calc(100% - 32px);
        }

        #container {
            flex-direction: column;
        }

        #controls {
            min-width: 100%;
            padding-left: 0;
        }
        .interval-controls,
        .period-controls {
            flex-direction: row;
            justify-content: left;
            align-items: center;
            gap: 8px;
        }
    }
`;let OrChart=class extends((0,_openremote_or_translate__WEBPACK_IMPORTED_MODULE_3__.Tl)(i18next__WEBPACK_IMPORTED_MODULE_2__.Ay)(lit__WEBPACK_IMPORTED_MODULE_0__.WF)){static get styles(){return[lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(tableStyle)}`,lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(dialogStyle)}`,style]}constructor(){super(),this.assets=[],this.assetAttributes=[],this.rightAxisAttributes=[],this.colors=["#3869B1","#DA7E30","#3F9852","#CC2428","#6B4C9A","#922427","#958C3D","#535055"],this.attributeControls=!0,this.timestampControls=!0,this.showLegend=!0,this.denseLegend=!1,this._loading=!1,this._data=void 0,this._updateTimestampTimer=null,this.addEventListener(_openremote_or_asset_tree__WEBPACK_IMPORTED_MODULE_6__.Ym.NAME,this._onTreeSelectionChanged)}connectedCallback(){super.connectedCallback(),this._style=window.getComputedStyle(this)}disconnectedCallback(){super.disconnectedCallback(),this._cleanup()}firstUpdated(){this.loadSettings(!1)}updated(t){if(console.log(t),super.updated(t),t.has("realm")&&null!=t.get("realm")&&(this.assets=[],this.loadSettings(!0)),(t.has("datapointQuery")||t.has("timePresetKey")||t.has("timeframe")||t.has("rightAxisAttributes")||t.has("assetAttributes")||t.has("realm")||t.has("dataProvider"))&&(this._data=void 0,this._chart&&(this._chart.destroy(),this._chart=void 0),this._loadData()),!this._data)return;const e=moment__WEBPACK_IMPORTED_MODULE_11___default()().toDate().getTime();if(this._chart)t.has("_data")&&(this._chart.options.scales.x.min=this._startOfPeriod,this._chart.options.scales.x.max=this._endOfPeriod,this._chart.options.scales.x.time.unit=this._timeUnits,this._chart.options.scales.x.time.stepSize=this._stepSize,this._chart.options.plugins.annotation.annotations[0].xMin=e,this._chart.options.plugins.annotation.annotations[0].xMax=e,this._chart.data.datasets=this._data,this._chart.update());else{const t={type:"line",data:{datasets:this._data},options:{responsive:!0,maintainAspectRatio:!1,onResize:(0,lodash__WEBPACK_IMPORTED_MODULE_18__.throttle)((()=>{this.dispatchEvent(new OrChartEvent("resize")),this.applyChartResponsiveness()}),200),showLines:!0,plugins:{legend:{display:!1},tooltip:{mode:"x",intersect:!1,xPadding:10,yPadding:10,titleMarginBottom:10,callbacks:{label:t=>t.dataset.label+": "+t.formattedValue+t.dataset.unit}},annotation:{annotations:[{type:"line",xMin:e,xMax:e,borderColor:"#275582",borderWidth:2}]}},hover:{mode:"x",intersect:!1},scales:{y:{ticks:{beginAtZero:!0},grid:{color:"#cccccc"}},y1:{display:this.rightAxisAttributes.length>0,position:"right",ticks:{beginAtZero:!0},grid:{drawOnChartArea:!1}},x:{type:"time",min:this._startOfPeriod,max:this._endOfPeriod,time:{tooltipFormat:"MMM D, YYYY, HH:mm:ss",displayFormats:{millisecond:"HH:mm:ss.SSS",second:"HH:mm:ss",minute:"HH:mm",hour:this._endOfPeriod&&this._startOfPeriod&&this._endOfPeriod-this._startOfPeriod>864e5?"MMM DD, HH:mm":"HH:mm",day:"MMM DD",week:"w"},unit:this._timeUnits,stepSize:this._stepSize},ticks:{autoSkip:!0,color:"#000",font:{family:"'Open Sans', Helvetica, Arial, Lucida, sans-serif",size:9,style:"normal"}},gridLines:{color:"#cccccc"}}}}},i=_openremote_core__WEBPACK_IMPORTED_MODULE_5__.J0.mergeObjects(t,this.chartOptions,!1);console.log("Creating a new chart!"),this._chart=new chart_js__WEBPACK_IMPORTED_MODULE_9__.t1(this._chartElem.getContext("2d"),i)}this.onCompleted().then((()=>{this.dispatchEvent(new OrChartEvent("rendered"))}))}applyChartResponsiveness(){if(this.shadowRoot){const t=this.shadowRoot.getElementById("container");if(t){const e=t.clientWidth<600;t.style.flexDirection=e?"column":"row";const i=this.shadowRoot.querySelector(".period-controls");i&&(i.style.justifyContent=e?"center":"space-between",i.style.paddingLeft=e?"":"18px");const r=this.shadowRoot.getElementById("attribute-list");r&&(r.style.gap=e?"4px 12px":"",r.style.maxHeight=e?"90px":"",r.style.flexFlow=e?"row wrap":"column nowrap",r.style.padding=e?"0":"12px 0"),this.shadowRoot.querySelectorAll(".attribute-list-item").forEach((t=>{t.style.minHeight=e?"0px":"44px",t.style.paddingLeft=e?"":"16px",t.children[1].style.flexDirection=e?"row":"column",t.children[1].style.gap=e?"4px":""}))}}}render(){const t=this._loading;return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
            <div id="container">
                <div id="chart-container">
                    ${t?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                        <div style="position: absolute; height: 100%; width: 100%;">
                            <or-loading-indicator ?overlay="false"></or-loading-indicator>
                        </div>
                    `:void 0}
                    <canvas id="chart" style="visibility: ${t?"hidden":"visible"}"></canvas>
                </div>
                
                ${this.timestampControls||this.attributeControls||this.showLegend?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                    <div id="chart-controls">
                        <div id="controls">
                            <div class="period-controls">
                                ${this.timePresetOptions&&this.timePresetKey?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                                    ${this.timestampControls?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                                        ${(0,_openremote_or_mwc_components_or_mwc_menu__WEBPACK_IMPORTED_MODULE_19__.Xj)(lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-mwc-input .type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_7__.NZ.BUTTON}" label="${this.timeframe?"dashboard.customTimeSpan":this.timePresetKey}"></or-mwc-input>`,Array.from(this.timePresetOptions.keys()).map((t=>({value:t}))),this.timePresetKey,(t=>{this.timeframe=void 0,this.timePresetKey=t.toString()}),void 0,void 0,void 0,!0)}
                                        <!-- Button that opens custom time selection -->
                                        <or-mwc-input .type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_7__.NZ.BUTTON}" icon="calendar-clock" @or-mwc-input-changed="${()=>this._openTimeDialog(this._startOfPeriod,this._endOfPeriod)}"></or-mwc-input>
                                    `:lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                                        <or-mwc-input .type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_7__.NZ.BUTTON}" label="${this.timePresetKey}" disabled="true"></or-mwc-input>
                                    `}
                                `:void 0}
                            </div>
                            ${this.timeframe?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                                <div style="margin-left: 18px; font-size: 12px;">
                                    <table style="width: 100%;">
                                        <thead>
                                        <tr>
                                            <th style="font-weight: normal; text-align: left;">${i18next__WEBPACK_IMPORTED_MODULE_2__.Ay.t("from")}:</th>
                                            <th style="font-weight: normal; text-align: left;">${moment__WEBPACK_IMPORTED_MODULE_11___default()(this.timeframe[0]).format("L HH:mm")}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>${i18next__WEBPACK_IMPORTED_MODULE_2__.Ay.t("to")}:</td>
                                            <td>${moment__WEBPACK_IMPORTED_MODULE_11___default()(this.timeframe[1]).format("L HH:mm")}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            `:void 0}
                            ${this.attributeControls?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                                <or-mwc-input class="button" .type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_7__.NZ.BUTTON}" ?disabled="${t}" label="selectAttributes" icon="plus" @or-mwc-input-changed="${()=>this._openDialog()}"></or-mwc-input>
                            `:void 0}
                        </div>
                        ${(0,lit_directives_cache_js__WEBPACK_IMPORTED_MODULE_17__.P)(this.showLegend?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                            <div id="attribute-list" class="${this.denseLegend?"attribute-list-dense":void 0}">
                                ${null==this.assetAttributes||0==this.assetAttributes.length?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                                    <div>
                                        <span>${i18next__WEBPACK_IMPORTED_MODULE_2__.Ay.t("noAttributesConnected")}</span>
                                    </div>
                                `:void 0}
                                ${this.assetAttributes&&this.assetAttributes.map((([t,e],i)=>{const r=this.assets[t],o=i%this.colors.length,a=_openremote_model__WEBPACK_IMPORTED_MODULE_4__.u0.getAttributeAndValueDescriptors(r.type,e.name,e),s=_openremote_core__WEBPACK_IMPORTED_MODULE_5__.J0.getAttributeLabel(e,a[0],r.type,!0),n=this.rightAxisAttributes.find((t=>r.id===t.id&&e.name===t.name))?i18next__WEBPACK_IMPORTED_MODULE_2__.Ay.t("right"):void 0,l=this.colors[o]||"";return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                                        <div class="attribute-list-item ${this.denseLegend?"attribute-list-item-dense":void 0}" @mouseover="${()=>this.addDatasetHighlight(this.assets[t].id,e.name)}" @mouseout="${()=>this.removeDatasetHighlight(l)}">
                                            <span style="margin-right: 10px; --or-icon-width: 20px;">${(0,_openremote_or_icon__WEBPACK_IMPORTED_MODULE_12__.xl)(_openremote_model__WEBPACK_IMPORTED_MODULE_4__.u0.getAssetDescriptor(this.assets[t].type),void 0,void 0,l.split("#")[1])}</span>
                                            <div class="attribute-list-item-label ${this.denseLegend?"attribute-list-item-label-dense":void 0}">
                                                <div style="display: flex; justify-content: space-between;">
                                                    <span style="font-size:12px; ${this.denseLegend?"margin-right: 8px":void 0}">${this.assets[t].name}</span>
                                                    ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_21__.z)(n,(()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`<span style="font-size:12px; color:grey">(${n})</span>`))}
                                                </div>
                                                <span style="font-size:12px; color:grey;">${s}</span>
                                            </div>
                                        </div>
                                    `}))}
                            </div>
                        `:void 0)}
                    </div>
                `:void 0}
            </div>
        `}_onTreeSelectionChanged(t){return __awaiter(this,void 0,void 0,(function*(){if(!_openremote_core__WEBPACK_IMPORTED_MODULE_5__.Ay.events)return;const e=t.detail&&t.detail.newNodes.length>0?t.detail.newNodes[0]:void 0;if(e){const t=yield _openremote_core__WEBPACK_IMPORTED_MODULE_5__.Ay.events.sendEventWithReply({event:{eventType:"read-asset",assetId:e.asset.id}});this.activeAsset=t.asset}else this.activeAsset=void 0}))}removeDatasetHighlight(t){this._chart&&this._chart.data&&this._chart.data.datasets&&(this._chart.data.datasets.map(((t,e)=>{t.borderColor&&"string"==typeof t.borderColor&&9===t.borderColor.length&&(t.borderColor=t.borderColor.slice(0,-2),t.backgroundColor=t.borderColor)})),this._chart.update())}addDatasetHighlight(t,e){t&&e&&this._chart&&this._chart.data&&this._chart.data.datasets&&(this._chart.data.datasets.map(((i,r)=>{i.assetId===t&&i.attrName===e||(i.borderColor=i.borderColor+"36",i.backgroundColor=i.borderColor)})),this._chart.update())}loadSettings(t){return __awaiter(this,void 0,void 0,(function*(){if((null==this.assetAttributes||t)&&(this.assetAttributes=[]),this.realm||(this.realm=_openremote_core__WEBPACK_IMPORTED_MODULE_5__.Ay.getRealm()),this.timePresetOptions||(this.timePresetOptions=this._getDefaultTimestampOptions()),this.timePresetKey||(this.timePresetKey=this.timePresetOptions.keys().next().value.toString()),!this.panelName)return;const e=window.location.hash,i=(yield _openremote_core__WEBPACK_IMPORTED_MODULE_5__.Ay.console.retrieveData("OrChartConfig"))||[];Array.isArray(i)||_openremote_core__WEBPACK_IMPORTED_MODULE_5__.Ay.console.storeData("OrChartConfig",[i]);let r=i.find((t=>t.realm===this.realm));if(!r)return;const o=r.views&&r.views[e]?r.views[e][this.panelName]:void 0;if(!o)return;if(!o.attributeRefs){delete r.views[e][this.panelName];const t=[...i.filter((t=>t.realm!==this.realm)),r];return void _openremote_core__WEBPACK_IMPORTED_MODULE_5__.Ay.console.storeData("OrChartConfig",t)}const a=o.attributeRefs.map((t=>t.id));if(0!==a.length&&(this._loading=!0,!a.every((t=>!!this.assets.find((e=>e.id===t)))))){const t={ids:a};try{const e=(yield _openremote_core__WEBPACK_IMPORTED_MODULE_5__.Ay.rest.api.AssetResource.queryAssets(t)).data||[];o.attributeRefs=o.attributeRefs.filter((t=>!!e.find((e=>e.id===t.id&&e.attributes&&e.attributes.hasOwnProperty(t.name))))),_openremote_core__WEBPACK_IMPORTED_MODULE_5__.Ay.console.storeData("OrChartConfig",[...i.filter((t=>t.realm!==this.realm)),r]),this.assets=e.filter((t=>o.attributeRefs.find((e=>e.id===t.id))))}catch(t){console.error("Failed to get assets requested in settings",t)}this._loading=!1,this.assets&&this.assets.length>0&&(this.assetAttributes=o.attributeRefs.map((t=>{const e=this.assets.findIndex((e=>e.id===t.id)),i=e>=0?this.assets[e]:void 0;return i&&i.attributes?[e,i.attributes[t.name]]:void 0})).filter((t=>!!t)))}}))}saveSettings(){return __awaiter(this,void 0,void 0,(function*(){if(!this.panelName)return;const t=window.location.hash,e=(yield _openremote_core__WEBPACK_IMPORTED_MODULE_5__.Ay.console.retrieveData("OrChartConfig"))||[];let i=e.find((t=>t.realm===this.realm));i||(i={realm:this.realm,views:{}}),i.views[t]||(i.views[t]={}),this.assets&&this.assetAttributes&&0!==this.assets.length&&0!==this.assetAttributes.length?(i.realm=this.realm,i.views[t][this.panelName]={attributeRefs:this.assetAttributes.map((([t,e])=>{const i=this.assets[t];return i?{id:i.id,name:e.name}:void 0})).filter((t=>!!t))}):delete i.views[t][this.panelName],_openremote_core__WEBPACK_IMPORTED_MODULE_5__.Ay.console.storeData("OrChartConfig",[...e.filter((t=>t.realm!==this.realm)),i])}))}_openDialog(){(0,_openremote_or_mwc_components_or_mwc_dialog__WEBPACK_IMPORTED_MODULE_16__.ui)((new _openremote_or_attribute_picker__WEBPACK_IMPORTED_MODULE_15__.y).setShowOnlyDatapointAttrs(!0).setMultiSelect(!0).setSelectedAttributes(this._getSelectedAttributes())).addEventListener(_openremote_or_attribute_picker__WEBPACK_IMPORTED_MODULE_15__._.NAME,(t=>this._addAttribute(t.detail)))}_openTimeDialog(t,e){const i=(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_20__._)(),r=(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_20__._)();(0,_openremote_or_mwc_components_or_mwc_dialog__WEBPACK_IMPORTED_MODULE_16__.ui)((new _openremote_or_mwc_components_or_mwc_dialog__WEBPACK_IMPORTED_MODULE_16__.X$).setHeading(i18next__WEBPACK_IMPORTED_MODULE_2__.Ay.t("timeframe")).setContent((()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                <div>
                    <or-mwc-input ${(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_20__.K)(i)} type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_7__.NZ.DATETIME}" required label="${i18next__WEBPACK_IMPORTED_MODULE_2__.Ay.t("start")}" .value="${t}"></or-mwc-input>
                    <or-mwc-input ${(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_20__.K)(r)} type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_7__.NZ.DATETIME}" required label="${i18next__WEBPACK_IMPORTED_MODULE_2__.Ay.t("ending")}" .value="${e}"></or-mwc-input>
                </div>
            `)).setActions([{actionName:"cancel",content:"cancel"},{actionName:"ok",content:"ok",action:()=>{var t,e;this.timePresetOptions&&(null===(t=i.value)||void 0===t?void 0:t.value)&&(null===(e=r.value)||void 0===e?void 0:e.value)&&(this.timeframe=[new Date(i.value.value),new Date(r.value.value)])}}]))}_addAttribute(t){return __awaiter(this,void 0,void 0,(function*(){if(t){this.assetAttributes=[];for(const e of t){const t=yield _openremote_core__WEBPACK_IMPORTED_MODULE_5__.Ay.rest.api.AssetResource.get(e.id);if(this.activeAsset=t.data,this.activeAsset){let t=this.assets.findIndex((t=>t.id===e.id));t<0&&(t=this.assets.length,this.assets=[...this.assets,this.activeAsset]),this.assetAttributes.push([t,e])}}this.assetAttributes=[...this.assetAttributes],this.saveSettings()}}))}_getSelectedAttributes(){return this.assetAttributes.map((([t,e])=>({id:this.assets[t].id,name:e.name})))}onCompleted(){return __awaiter(this,void 0,void 0,(function*(){yield this.updateComplete}))}_cleanup(){this._chart&&(this._chart.destroy(),this._chart=void 0,this.requestUpdate())}_deleteAttribute(t){const e=this.assetAttributes.splice(t,1)[0][0];this.assetAttributes=[...this.assetAttributes],this.assetAttributes.some((([t,i])=>t===e))||(this.assets.splice(t,1),this.assetAttributes.forEach((t=>{t[0]>=e&&(t[0]-=1)}))),this.saveSettings()}_getAttributeOptionsOld(){if(!this.activeAsset||!this.activeAsset.attributes)return;this.shadowRoot&&this.shadowRoot.getElementById("chart-attribute-picker")&&(this.shadowRoot.getElementById("chart-attribute-picker").value="");const t=Object.values(this.activeAsset.attributes);return t&&t.length>0?t.filter((t=>t.meta&&(t.meta.hasOwnProperty("storeDataPoints")?t.meta.storeDataPoints:t.meta.hasOwnProperty("agentLink")))).filter((t=>this.assetAttributes&&!this.assetAttributes.some((([e,i])=>i.name===t.name&&this.assets[e].id===this.activeAsset.id)))).map((t=>{const e=_openremote_model__WEBPACK_IMPORTED_MODULE_4__.u0.getAttributeAndValueDescriptors(this.activeAsset.type,t.name,t),i=_openremote_core__WEBPACK_IMPORTED_MODULE_5__.J0.getAttributeLabel(t,e[0],this.activeAsset.type,!1);return[t.name,i]})):void 0}_getAttributeOptions(){if(!this.activeAsset||!this.activeAsset.attributes)return;this.shadowRoot&&this.shadowRoot.getElementById("chart-attribute-picker")&&(this.shadowRoot.getElementById("chart-attribute-picker").value="");const t=Object.values(this.activeAsset.attributes);return t&&t.length>0?t.filter((t=>t.meta&&(t.meta.hasOwnProperty("storeDataPoints")?t.meta.storeDataPoints:t.meta.hasOwnProperty("agentLink")))).filter((t=>this.assetAttributes&&!this.assetAttributes.some((([e,i])=>i.name===t.name&&this.assets[e].id===this.activeAsset.id)))).map((t=>{const e=_openremote_model__WEBPACK_IMPORTED_MODULE_4__.u0.getAttributeAndValueDescriptors(this.activeAsset.type,t.name,t),i=_openremote_core__WEBPACK_IMPORTED_MODULE_5__.J0.getAttributeLabel(t,e[0],this.activeAsset.type,!1);return[t.name,i]})):void 0}_getDefaultTimestampOptions(){return new Map([["lastHour",t=>[moment__WEBPACK_IMPORTED_MODULE_11___default()(t).subtract(1,"hour").toDate(),t]],["last24Hours",t=>[moment__WEBPACK_IMPORTED_MODULE_11___default()(t).subtract(24,"hours").toDate(),t]],["last7Days",t=>[moment__WEBPACK_IMPORTED_MODULE_11___default()(t).subtract(7,"days").toDate(),t]],["last30Days",t=>[moment__WEBPACK_IMPORTED_MODULE_11___default()(t).subtract(30,"days").toDate(),t]],["last90Days",t=>[moment__WEBPACK_IMPORTED_MODULE_11___default()(t).subtract(90,"days").toDate(),t]],["last6Months",t=>[moment__WEBPACK_IMPORTED_MODULE_11___default()(t).subtract(6,"months").toDate(),t]],["lastYear",t=>[moment__WEBPACK_IMPORTED_MODULE_11___default()(t).subtract(1,"year").toDate(),t]]])}_getInterval(t){return t<=1?[5,"MINUTE"]:t<=3?[10,"MINUTE"]:t<=6?[30,"MINUTE"]:t<=24?[1,"HOUR"]:t<=48?[3,"HOUR"]:t<=96?[12,"HOUR"]:t<=744?[1,"DAY"]:[1,"MONTH"]}_loadData(){return __awaiter(this,void 0,void 0,(function*(){if(this._loading||this._data||!this.assetAttributes||!this.assets||0===this.assets.length&&!this.dataProvider||0===this.assetAttributes.length&&!this.dataProvider||!this.datapointQuery&&!this.dataProvider)return void console.warn("Cannot load chart data.");this._loading=!0;const t=this.timePresetOptions.get(this.timePresetKey)(new Date);this._startOfPeriod=this.timeframe?this.timeframe[0].getTime():t[0].getTime(),this._endOfPeriod=this.timeframe?this.timeframe[1].getTime():t[1].getTime();const e=(this._endOfPeriod-this._startOfPeriod)/1e3/60/60,i=this._getInterval(e),r=i[0],o=i[1],a=o.toLowerCase();this._timeUnits=a,this._stepSize=r;const s=moment__WEBPACK_IMPORTED_MODULE_11___default()().toDate().getTime();let n=s<this._startOfPeriod?this._startOfPeriod:s;const l=[];let d;this.dataProvider?yield this.dataProvider(this._startOfPeriod,this._endOfPeriod,o.toString(),r).then((t=>{t.forEach((t=>{l.push(t)}))})):(console.log(this.assetAttributes),d=this.assetAttributes.map((([t,e],i)=>__awaiter(this,void 0,void 0,(function*(){const r=this.assets[t],o=!!this.rightAxisAttributes.find((t=>t.id===r.id&&t.name===e.name)),a=_openremote_model__WEBPACK_IMPORTED_MODULE_4__.u0.getAttributeAndValueDescriptors(r.type,e.name,e),s=_openremote_core__WEBPACK_IMPORTED_MODULE_5__.J0.getAttributeLabel(e,a[0],r.type,!1),d=_openremote_core__WEBPACK_IMPORTED_MODULE_5__.J0.resolveUnits(_openremote_core__WEBPACK_IMPORTED_MODULE_5__.J0.getAttributeUnits(e,a[0],r.type)),h=i%this.colors.length;let c=yield this._loadAttributeData(r,e,this.colors[h],this._startOfPeriod,this._endOfPeriod,!1,r.name+" "+s);c.assetId=r.id,c.attrName=e.name,c.unit=d,c.yAxisID=o?"y1":"y",l.push(c),c=yield this._loadAttributeData(this.assets[t],e,this.colors[h],n,this._endOfPeriod,!0,r.name+" "+s+" "+i18next__WEBPACK_IMPORTED_MODULE_2__.Ay.t("predicted")),l.push(c)}))))),d&&(yield Promise.all(d)),this._loading=!1,this._data=l}))}_loadAttributeData(t,e,i,r,o,a,s){var n,l,d;return __awaiter(this,void 0,void 0,(function*(){const r={borderColor:i,backgroundColor:i,label:s,pointRadius:2,fill:!1,data:[],borderDash:a?[2,4]:void 0};if(t.id&&e.name&&this.datapointQuery){let i;const o=JSON.parse(JSON.stringify(this.datapointQuery));if(o.fromTimestamp=this._startOfPeriod,o.toTimestamp=this._endOfPeriod,"lttb"==o.type)o.amountOfPoints?(null===(n=this._chartElem)||void 0===n?void 0:n.clientWidth)>0&&(o.amountOfPoints=Math.min(o.amountOfPoints,null===(l=this._chartElem)||void 0===l?void 0:l.clientWidth)):(null===(d=this._chartElem)||void 0===d?void 0:d.clientWidth)>0?o.amountOfPoints=Math.round(this._chartElem.clientWidth/5):(console.warn("Could not grab width of the Chart for estimating amount of data points. Using 100 points instead."),o.amountOfPoints=100);else if("interval"===o.type&&!o.interval){const t=(this.datapointQuery.toTimestamp-this.datapointQuery.fromTimestamp)/1e3/60/60,e=this._getInterval(t);o.interval=e[0].toString()+" "+e[1].toString()}i=a?yield _openremote_core__WEBPACK_IMPORTED_MODULE_5__.Ay.rest.api.AssetPredictedDatapointResource.getPredictedDatapoints(t.id,e.name,o):yield _openremote_core__WEBPACK_IMPORTED_MODULE_5__.Ay.rest.api.AssetDatapointResource.getDatapoints(t.id,e.name,o),200===i.status&&(r.data=i.data.filter((t=>null!==t.y&&void 0!==t.y)))}return r}))}};OrChart.DEFAULT_TIMESTAMP_FORMAT="L HH:mm:ss",__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Object})],OrChart.prototype,"assets",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Object})],OrChart.prototype,"activeAsset",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Object})],OrChart.prototype,"assetAttributes",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Array})],OrChart.prototype,"rightAxisAttributes",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrChart.prototype,"dataProvider",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Array})],OrChart.prototype,"colors",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Object})],OrChart.prototype,"datapointQuery",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Object})],OrChart.prototype,"config",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Object})],OrChart.prototype,"chartOptions",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:String})],OrChart.prototype,"realm",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrChart.prototype,"panelName",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrChart.prototype,"attributeControls",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrChart.prototype,"timeframe",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrChart.prototype,"timestampControls",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrChart.prototype,"timePresetOptions",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrChart.prototype,"timePresetKey",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrChart.prototype,"showLegend",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrChart.prototype,"denseLegend",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrChart.prototype,"_loading",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrChart.prototype,"_data",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrChart.prototype,"_tableTemplate",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#chart")],OrChart.prototype,"_chartElem",void 0),OrChart=__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.EM)("or-chart")],OrChart)},"../../component/or-components/lib/or-loading-indicator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/lit/decorators.js"),__decorate=function(t,e,r,o){var i,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(n=(a<3?i(n):a>3?i(e,r,n):i(e,r))||n);return a>3&&n&&Object.defineProperty(e,r,n),n};let OrLoadingIndicator=class extends lit__WEBPACK_IMPORTED_MODULE_0__.WF{constructor(){super(...arguments),this.overlay=!1}static get styles(){return lit__WEBPACK_IMPORTED_MODULE_0__.AH`
      .loader-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .2);
        z-index: 1000;
      }

      .loader {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
        z-index: 1010;
      }

      .loader svg {
        height: 60px;
        width: 60px;
      }

      @-webkit-keyframes rotate-right {
        from {
          -webkit-transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(360deg);
        }
      }
      @-webkit-keyframes rotate-left {
        from {
          -webkit-transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(-360deg);
        }
      }

      .loader #circle1 {
        -webkit-transform: translate3d(0, 0, 0);
        -webkit-transform-origin: 54.1px 53.6px;
        -webkit-animation: rotate-right 7s linear 0s infinite;
      }

      .loader #circle2 {
        -webkit-transform: translate3d(0, 0, 0);
        -webkit-transform-origin: 54.1px 53.6px;
        -webkit-animation: rotate-left 6s linear 0s infinite;
      }

      .loader #circle3 {
        -webkit-transform: translate3d(0, 0, 0);
        -webkit-transform-origin: 54.1px 53.6px;
        -webkit-animation: rotate-right 5s linear 0s infinite;
      }
    `}render(){const t=lit__WEBPACK_IMPORTED_MODULE_0__.qy`
      <div class="loader">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 110 110"
             xml:space="preserve">
                    <path fill="#d2d2d2" id="circle1"
                          d="M53.648,107.296C24.068,107.296,0,83.236,0,53.646h11.234c0,23.391,19.025,42.42,42.414,42.42   c23.385,0,42.416-19.029,42.416-42.42c0-23.382-19.031-42.408-42.416-42.408V0c29.582,0,53.65,24.068,53.65,53.646   C107.299,83.236,83.23,107.296,53.648,107.296L53.648,107.296z" />
          <path fill="#a5a5a5" id="circle2"
                d="M45.525,92.57c-10.395-2.166-19.324-8.262-25.145-17.137c-5.814-8.884-7.826-19.511-5.654-29.906   c2.174-10.399,8.258-19.325,17.141-25.145c8.889-5.815,19.506-7.825,29.906-5.655c21.463,4.479,35.281,25.582,30.803,47.041   L81.58,59.478c3.207-15.397-6.703-30.539-22.105-33.751c-7.461-1.56-15.078-0.119-21.455,4.06   c-6.369,4.169-10.736,10.58-12.299,18.039c-1.555,7.458-0.113,15.075,4.064,21.453c4.17,6.37,10.576,10.744,18.041,12.297   L45.525,92.57L45.525,92.57z" />
          <path fill="#878787" id="circle3"
                d="M53.682,79.428c-0.432,0-0.871-0.012-1.309-0.032c-6.869-0.342-13.205-3.344-17.83-8.439   c-4.621-5.108-6.982-11.705-6.639-18.582l11.215,0.553c-0.188,3.879,1.141,7.609,3.75,10.488c2.604,2.879,6.186,4.568,10.059,4.761   c3.869,0.179,7.607-1.142,10.48-3.748c2.887-2.603,4.576-6.179,4.773-10.057c0.391-8.012-5.803-14.854-13.816-15.248l0.559-11.222   c14.201,0.71,25.178,12.823,24.475,27.021c-0.344,6.883-3.336,13.212-8.441,17.831C66.174,77.086,60.084,79.428,53.682,79.428   L53.682,79.428z" />
                  </svg>
      </div>`;return this.overlay?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
        <div class="loader-container">
          ${t}
        </div>`:t}};__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({attribute:!0})],OrLoadingIndicator.prototype,"overlay",void 0),OrLoadingIndicator=__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.EM)("or-loading-indicator")],OrLoadingIndicator)},"../../component/or-components/lib/or-panel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/lit/decorators.js"),_openremote_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../component/core/lib/index.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/lit-html/directives/when.js"),__decorate=function(e,r,n,a){var o,t=arguments.length,i=t<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,r,n,a);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(t<3?o(i):t>3?o(r,n,i):o(r,n))||i);return t>3&&i&&Object.defineProperty(r,n,i),i};const simpleBarStyle=__webpack_require__("../../../node_modules/simplebar/dist/simplebar.css"),elevationStyle=__webpack_require__("../../../node_modules/@material/elevation/dist/mdc.elevation.css"),style=lit__WEBPACK_IMPORTED_MODULE_0__.AH`
    
    :host {
        --internal-or-panel-background-color: var(--or-panel-background-color, var(--or-app-color2, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_2__.PR)}));
        --internal-or-panel-padding: var(--or-panel-padding, 10px);
        --internal-or-panel-border: var(--or-panel-border, 1px solid #e5e5e5);
        --internal-or-panel-border-radius: var(--or-panel-border-radius, 5px);
        --internal-or-panel-heading-margin: var(--or-panel-heading-margin, 0 0 10px 7px);
        --internal-or-panel-heading-min-height: var(--or-panel-heading-min-height, 36px);
        --internal-or-panel-heading-color: var(--or-panel-heading-color, var(--or-app-color3, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_2__.Iy)}));
        --internal-or-panel-heading-font-size: var(--or-panel-heading-font-size, larger);
        --internal-or-panel-heading-font-weight: var(--or-panel-heading-font-weight, bolder);
        
        display: block;
    }

    :host([hidden]) {
        display: none;
    }
        
    #wrapper {
        height: 100%;
        flex: 1;
    }
    
    #panel {
        padding: var(--internal-or-panel-padding);
        background-color: var(--internal-or-panel-background-color);
        border: var(--internal-or-panel-border);
        border-radius: var(--internal-or-panel-border-radius);
    }
    
    #heading {
        display: flex;
        align-items: center;
        margin: var(--internal-or-panel-heading-margin);
        min-height: var(--internal-or-panel-heading-min-height);
        font-size: var(--internal-or-panel-heading-font-size);
        font-weight: var(--internal-or-panel-heading-font-weight);
        color: var(--internal-or-panel-heading-color);
    }
`;let OrPanel=class extends lit__WEBPACK_IMPORTED_MODULE_0__.WF{static get styles(){return[lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(elevationStyle)}`,lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(simpleBarStyle)}`,style]}render(){return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
            <div id="wrapper">
                <div id="panel">
                    ${this.heading?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                        ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_3__.z)(!("string"==typeof this.heading),(()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                            ${this.heading}
                        `),(()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                            <div id="heading">
                                <span>${this.heading}</span>
                            </div>
                        `))}
                    `:""}
                    <slot></slot>
                </div>
            </div>
        `}};__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Number})],OrPanel.prototype,"zLevel",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:String})],OrPanel.prototype,"heading",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#panel")],OrPanel.prototype,"_panel",void 0),OrPanel=__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.EM)("or-panel")],OrPanel)}}]);
//# sourceMappingURL=49.033750d7.iframe.bundle.js.map