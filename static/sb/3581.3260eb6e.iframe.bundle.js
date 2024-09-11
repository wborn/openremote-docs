"use strict";(self.webpackChunk_openremote_workshop=self.webpackChunk_openremote_workshop||[]).push([[3581],{"../../component/or-asset-viewer/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Qu:()=>OrAssetViewer,K9:()=>OrAssetViewerChangeParentEvent,go:()=>OrAssetViewerEditToggleEvent,FN:()=>OrAssetViewerLoadUserEvent,rh:()=>OrAssetViewerRequestEditToggleEvent,RS:()=>OrAssetViewerSaveEvent,VI:()=>getField,ld:()=>getPanel,ii:()=>getPropertyTemplate,We:()=>saveAsset});var OrAttributeHistory_1,lit=__webpack_require__("../../../node_modules/lit/index.js"),decorators=__webpack_require__("../../../node_modules/lit/decorators.js"),or_mwc_input=(__webpack_require__("../../component/or-icon/lib/index.js"),__webpack_require__("../../component/or-mwc-components/lib/or-mwc-input.js")),or_attribute_input_lib=__webpack_require__("../../component/or-attribute-input/lib/index.js"),i18next=__webpack_require__("../../../node_modules/i18next/dist/esm/i18next.js"),or_translate_lib=__webpack_require__("../../component/or-translate/lib/index.js"),model_lib=__webpack_require__("../../component/model/lib/index.js"),core_lib=__webpack_require__("../../component/core/lib/index.js"),chart=(__webpack_require__("../../component/or-components/lib/or-panel.js"),__webpack_require__("../../component/or-chart/lib/index.js"),__webpack_require__("../../../node_modules/chart.js/dist/chart.mjs")),index_browser_esm=(__webpack_require__("../../../node_modules/chartjs-adapter-moment/dist/chartjs-adapter-moment.esm.js"),__webpack_require__("../../../node_modules/jsonpath-plus/dist/index-browser-esm.js")),moment=__webpack_require__("../../../node_modules/moment/moment.js"),moment_default=__webpack_require__.n(moment),style_map=__webpack_require__("../../../node_modules/lit/directives/style-map.js"),__decorate=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s},__awaiter=function(t,e,r,i){return new(r||(r=Promise))((function(o,a){function s(t){try{l(i.next(t))}catch(t){a(t)}}function n(t){try{l(i.throw(t))}catch(t){a(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,n)}l((i=i.apply(t,e||[])).next())}))};class OrAttributeHistoryEvent extends CustomEvent{constructor(t,e){super(OrAttributeHistoryEvent.NAME,{detail:{value:t,previousValue:e},bubbles:!0,composed:!0})}}OrAttributeHistoryEvent.NAME="or-attribute-history-event";const tableStyle=__webpack_require__("../../../node_modules/@material/data-table/dist/mdc.data-table.css"),style=lit.AH`
    :host {
        --internal-or-attribute-history-background-color: var(--or-attribute-history-background-color, var(--or-app-color2, ${(0,lit.iz)(core_lib.PR)}));
        --internal-or-attribute-history-text-color: var(--or-attribute-history-text-color, var(--or-app-color3, ${(0,lit.iz)(core_lib.Iy)}));
        --internal-or-attribute-history-controls-margin: var(--or-attribute-history-controls-margin, 10px 0);
        --internal-or-attribute-history-controls-justify-content: var(--or-attribute-history-controls-justify-content, flex-end);
        --internal-or-attribute-history-graph-fill-color: var(--or-attribute-history-graph-fill-color, var(--or-app-color4, ${(0,lit.iz)(core_lib.BB)}));       
        --internal-or-attribute-history-graph-fill-opacity: var(--or-attribute-history-graph-fill-opacity, 1);       
        --internal-or-attribute-history-graph-line-color: var(--or-attribute-history-graph-line-color, var(--or-app-color4, ${(0,lit.iz)(core_lib.BB)}));       
        --internal-or-attribute-history-graph-point-color: var(--or-attribute-history-graph-point-color, var(--or-app-color4, ${(0,lit.iz)(core_lib.BB)}));
        --internal-or-attribute-history-graph-point-border-color: var(--or-attribute-history-graph-point-border-color, var(--or-app-color4, ${(0,lit.iz)(core_lib.BB)}));
        --internal-or-attribute-history-graph-point-radius: var(--or-attribute-history-graph-point-radius, 2);
        --internal-or-attribute-history-graph-point-hit-radius: var(--or-attribute-history-graph-point-hit-radius, 20);       
        --internal-or-attribute-history-graph-point-border-width: var(--or-attribute-history-graph-point-border-width, 2);
        --internal-or-attribute-history-graph-point-hover-color: var(--or-attribute-history-graph-point-hover-color, var(--or-app-color4, ${(0,lit.iz)(core_lib.BB)}));
        --internal-or-attribute-history-graph-point-hover-border-color: var(--or-attribute-history-graph-point-hover-border-color, var(--or-app-color4, ${(0,lit.iz)(core_lib.BB)}));
        --internal-or-attribute-history-graph-point-hover-radius: var(--or-attribute-history-graph-point-hover-radius, 4);      
        --internal-or-attribute-history-graph-point-hover-border-width: var(--or-attribute-history-graph-point-hover-border-width, 2);
        display: block;                
    }
    
    :host([hidden]) {
        display: none;
    }
    
    #container {
        display: flex;
        min-width: 0;
        width: 100%;
        height: 100%;
        flex-direction: column;
    }
       
    .button-icon {
        align-self: center;
        padding: 10px;
        cursor: pointer;
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
    
    #controls {
        display: flex;
        flex-wrap: wrap;
        justify-content: var(--internal-or-attribute-history-controls-justify-content);
        margin: var(--internal-or-attribute-history-controls-margin);        
        flex-direction: row;
    }
    
    #time-picker {
        width: 150px;
        padding: 0 5px;
    }

    #ending-controls {
        max-width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    
    #ending-controls > * {
        padding: 0 3px;
    }
    
    #ending-date {
        width: 200px;
        padding-left: 5px;
    }
    
    #chart-container {
        position: relative;
        min-height: 250px;
    }
        
    #table-container {
        height: 100%;
    }
    
    #table {
        width: 100%;
        margin-bottom: 10px;
    }
    
    #table > table {
        width: 100%;
        table-layout: fixed;
    }
    
    #table th, #table td {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`;let OrAttributeHistory=OrAttributeHistory_1=class extends((0,or_translate_lib.Tl)(i18next.Ay)(lit.WF)){constructor(){super(...arguments),this.period="day",this._loading=!1,this._dataFirstLoaded=!1}static get styles(){return[lit.AH`${(0,lit.iz)(tableStyle)}`,style]}connectedCallback(){super.connectedCallback(),this._style=window.getComputedStyle(this)}disconnectedCallback(){super.disconnectedCallback(),this._cleanup()}shouldUpdate(t){let e=t.has("period")||t.has("toTimestamp")||t.has("attribute");return!(this._dataFirstLoaded&&!t.get("_loading")&&!e)&&(this.toTimestamp?(!this._type&&this.attribute&&(this._type=model_lib.u0.getValueDescriptor(this.attribute.type)||{}),e&&(this._type=void 0,this._data=void 0,this._loadData()),super.shouldUpdate(t)):(this.toTimestamp=new Date,!1))}render(){const t=this._type&&("number"===this._type.jsonType||"boolean"===this._type.jsonType),e=this._loading||!this._type;return lit.qy`
            <div id="container">
                <div id="controls">
                    <or-mwc-input id="time-picker" .type="${or_mwc_input.NZ.SELECT}" ?disabled="${e}" .label="${i18next.Ay.t("timeframe")}" @or-mwc-input-changed="${t=>this.period=t.detail.value}" .value="${this.period}" .options="${this._getPeriodOptions()}"></or-mwc-input>
                    <div id="ending-controls">
                        <or-mwc-input id="ending-date" .type="${or_mwc_input.NZ.DATETIME}" ?disabled="${e}" label="${i18next.Ay.t("ending")}" .value="${this.toTimestamp}" @or-mwc-input-changed="${t=>this._updateTimestamp(moment_default()(t.detail.value).toDate())}"></or-mwc-input>
                        <or-icon class="button button-icon" ?disabled="${e}" icon="chevron-left" @click="${()=>this._updateTimestamp(this.toTimestamp,!1,0)}"></or-icon>
                        <or-icon class="button button-icon" ?disabled="${e}" icon="chevron-right" @click="${()=>this._updateTimestamp(this.toTimestamp,!0,0)}"></or-icon>
                        <or-icon class="button button-icon" ?disabled="${e}" icon="chevron-double-right" @click="${()=>this._updateTimestamp(new Date)}"></or-icon>
                    </div>
                </div>
                
                ${this._type?t?lit.qy`
                        <div id="chart-container">
                            <canvas id="chart"></canvas>
                        </div>
                    `:lit.qy`
                        <div id="table-container">
                            ${this._tableTemplate||""}
                        </div>
                    `:lit.qy`
                    <div id="msg">
                        <or-translate value="invalidAttribute"></or-translate>
                    </div>
                `}                
            </div>
        `}willUpdate(t){if(super.willUpdate(t),this._type&&this._data){if(!this._type||"number"!==this._type.jsonType&&"boolean"!==this._type.jsonType)this._tableTemplate&&!t.has("_data")||(this._tableTemplate=this._getTableTemplate());else{const e=this._data;if(this._chart)t.has("_data")&&(this._chart.options.scales.x.min=this._startOfPeriod,this._chart.options.scales.x.max=this._endOfPeriod,this._chart.options.scales.x.time.unit=this._timeUnits,this._chart.options.scales.x.time.stepSize=this._stepSize,this._chart.data.datasets[0].data=e,this._chart.update());else{let t=this._style.getPropertyValue("--internal-or-attribute-history-graph-fill-color").trim();const r=Number(this._style.getPropertyValue("--internal-or-attribute-history-graph-fill-opacity").trim());isNaN(r)||(!t.startsWith("#")||4!==t.length&&7!==t.length?t.startsWith("rgb(")&&(t=t.substring(0,t.length-1)+r):t+=4===t.length?Math.round(255*r).toString(16).substr(0,1):Math.round(255*r).toString(16));const i={type:"line",data:{datasets:[{data:e,backgroundColor:t,borderColor:this._style.getPropertyValue("--internal-or-attribute-history-graph-line-color"),pointBorderColor:this._style.getPropertyValue("--internal-or-attribute-history-graph-point-border-color"),pointBackgroundColor:this._style.getPropertyValue("--internal-or-attribute-history-graph-point-color"),pointRadius:Number(this._style.getPropertyValue("--internal-or-attribute-history-graph-point-radius")),pointBorderWidth:Number(this._style.getPropertyValue("--internal-or-attribute-history-graph-point-border-width")),pointHoverBackgroundColor:this._style.getPropertyValue("--internal-or-attribute-history-graph-point-hover-color"),pointHoverBorderColor:this._style.getPropertyValue("--internal-or-attribute-history-graph-point-hover-border-color"),pointHoverRadius:Number(this._style.getPropertyValue("--internal-or-attribute-history-graph-point-hover-radius")),pointHoverBorderWidth:Number(this._style.getPropertyValue("--internal-or-attribute-history-graph-point-hover-border-width")),pointHitRadius:Number(this._style.getPropertyValue("--internal-or-attribute-history-graph-point-hit-radius")),fill:!1}]},options:{responsive:!0,maintainAspectRatio:!1,onResize:()=>this.dispatchEvent(new OrAttributeHistoryEvent("resize")),plugins:{legend:{display:!1},tooltip:{displayColors:!1,xPadding:10,yPadding:10,titleMarginBottom:10}},scales:{y:{beginAtZero:!0,grid:{color:"#cccccc"}},x:{type:"time",min:this._startOfPeriod,max:this._endOfPeriod,time:{tooltipFormat:"MMM D, YYYY, HH:mm:ss",displayFormats:{millisecond:"HH:mm:ss.SSS",second:"HH:mm:ss",minute:"HH:mm",hour:"HH:mm",week:"w"},unit:this._timeUnits,stepSize:this._stepSize},ticks:{color:"#000",font:{family:"'Open Sans', Helvetica, Arial, Lucida, sans-serif",size:9,style:"normal"}},gridLines:{color:"#cccccc"}}}}};this._chart=new chart.t1(this._chartElem.getContext("2d"),i)}}this.onCompleted().then((()=>{this.dispatchEvent(new OrAttributeHistoryEvent("rendered"))}))}}onCompleted(){return __awaiter(this,void 0,void 0,(function*(){yield this.updateComplete}))}_cleanup(){this._tableTemplate=void 0,this._chart&&(this._chart.destroy(),this._chart=void 0),this._table&&(this._table.destroy(),this._table=void 0)}_getTableTemplate(){const t=this.assetType,e=this.attribute?this.attribute.name:this.attributeRef?this.attributeRef.name:void 0,r=this.attribute?this.attribute.type:void 0;if(!(this._data&&t&&e&&r))return lit.qy``;let i={autoColumns:!0};if(this.config&&this.config.table&&(this.config.table.assetTypes&&this.config.table.assetTypes[t]&&(this.config.table.assetTypes[t].attributeNames&&this.config.table.assetTypes[t].attributeNames[e]||r&&this.config.table.assetTypes[t].attributeValueTypes&&this.config.table.assetTypes[t].attributeValueTypes[r])?i=this.config.table.assetTypes[t].attributeNames&&this.config.table.assetTypes[t].attributeNames[e]||this.config.table.assetTypes[t].attributeValueTypes[r]:this.config.table.attributeNames&&this.config.table.attributeNames[e]?i=this.config.table.attributeNames[e]:r&&this.config.table.attributeValueTypes&&this.config.table.attributeValueTypes[r]?i=this.config.table.attributeValueTypes[r]:this.config.table.default&&(i=this.config.table.default),i||(i={autoColumns:!0})),i.autoColumns){i=Object.assign({},i),i.columns=[];const t=this._data.find((t=>void 0!==t.y));t&&("object"!=typeof t.y||Array.isArray(t.y)?i.columns.push({type:"prop",header:"value",stringify:"object"==typeof t.y,numeric:"number"==typeof t.y}):i.columns=Object.entries(t.y).map((([t,e])=>({type:"prop",header:t,path:"$.['"+t+"']",stringify:"object"==typeof e,numeric:!isNaN(Number(e))})))),i.columns.length>0&&i.columns.push({header:"timestamp",type:"timestamp"})}return i.columns&&i.columns.length>0?lit.qy`
            <div id="table" class="mdc-data-table">
                <table style="${i.styles?(0,style_map.W)(i.styles):""}" class="mdc-data-table__table" aria-label="${e+" history"}">
                    <thead>
                        <tr class="mdc-data-table__header-row">
                            ${i.columns.map((t=>lit.qy`<th style="${t.headerStyles?(0,style_map.W)(t.headerStyles):""}" class="mdc-data-table__header-cell ${t.numeric?"mdc-data-table__header-cell--numeric":""}" role="columnheader" scope="col"><or-translate value="${t.header}"></or-translate></th>`))}
                        </tr>
                    </thead>
                    <tbody class="mdc-data-table__content">
                        ${this._data.map((t=>lit.qy`
                                <tr class="mdc-data-table__row">
                                    ${i.columns.map((e=>{const r=this._getCellValue(t,e,i.timestampFormat);return lit.qy`<td style="${e.styles?(0,style_map.W)(e.styles):""}" class="mdc-data-table__cell ${e.numeric?"mdc-data-table__cell--numeric":""}" title="${r}">${r}</td>`}))}
                                </tr>
                            `))}
                    </tbody>
                </table>
            </div>
            `:(console.warn("OrAttributeHistory: No columns configured so nothing to show"),lit.qy``)}_getCellValue(t,e,r){switch(e.type){case"timestamp":const i=moment_default()(t.x).format(r||OrAttributeHistory_1.DEFAULT_TIMESTAMP_FORMAT);if(e&&e.contentProvider){const r=e.contentProvider(t,i,e);if(r)return r}return i;case"prop":let o=t.y;if(e.path&&(o=(0,index_browser_esm.E)({path:e.path,json:t.y,wrap:!1}),Array.isArray(o)&&1===o.length&&(o=o[0])),e&&e.contentProvider){const r=e.contentProvider(t,o,e);if(r)return r}return e.stringify?JSON.stringify(o):o}}_getIntervalOptions(){return["HOUR","DAY","WEEK","MONTH","YEAR"].map((t=>[t,i18next.Ay.t(t.toLowerCase())]))}_getPeriodOptions(){return["HOUR".toLowerCase(),"DAY".toLowerCase(),"WEEK".toLowerCase(),"MONTH".toLowerCase(),"YEAR".toLowerCase()]}_loadData(){return __awaiter(this,void 0,void 0,(function*(){if(this._loading||this._data||!this.assetType||!this.assetId||!this.attribute&&!this.attributeRef||!this.period||!this.toTimestamp)return;this._loading=!0;const t=this.assetId,e=this.attribute?this.attribute.name:this.attributeRef.name;if(!this._type){let r=this.attribute;if(!r){const i=yield core_lib.Ay.rest.api.AssetResource.queryAssets({ids:[t],select:{attributes:[e]}});200===i.status&&i.data.length>0&&(r=i.data[0].attributes?i.data[0].attributes[e]:void 0)}r&&(this._type=model_lib.u0.getValueDescriptor(r.type)||{})}if(!this._type||!this._type.name)return void(this._loading=!1);let r="HOUR",i=1;switch(this.period){case"hour":r="MINUTE",i=5;break;case"day":r="HOUR",i=1;break;case"week":r="HOUR",i=6;break;case"month":r="DAY",i=1;break;case"year":r="MONTH",i=1}const o=r.toLowerCase();let a;this._startOfPeriod=moment_default()(this.toTimestamp).subtract(1,this.period).startOf(o).add(1,o).toDate().getTime(),this._endOfPeriod=moment_default()(this.toTimestamp).startOf(o).add(1,o).toDate().getTime(),this._timeUnits=o,this._stepSize=i,a=!this._type||"number"!==this._type.jsonType&&"boolean"!==this._type.jsonType?yield core_lib.Ay.rest.api.AssetDatapointResource.getDatapoints(t,e,{type:"all",fromTimestamp:this._startOfPeriod,toTimestamp:this._endOfPeriod}):yield core_lib.Ay.rest.api.AssetDatapointResource.getDatapoints(t,e,{type:"lttb",fromTimestamp:this._startOfPeriod,toTimestamp:this._endOfPeriod,amountOfPoints:100}),this._loading=!1,200===a.status&&(this._data=a.data.filter((t=>null!==t.y&&void 0!==t.y)),this._dataFirstLoaded=!0)}))}_updateTimestamp(t,e,r=300){this._updateTimestampTimer&&(window.clearTimeout(this._updateTimestampTimer),this._updateTimestampTimer=void 0),this._updateTimestampTimer=window.setTimeout((()=>{const r=moment_default()(t);void 0!==e&&r.add(e?1:-1,this.period),this.toTimestamp=r.toDate()}),r)}};OrAttributeHistory.DEFAULT_TIMESTAMP_FORMAT="L HH:mm:ss",__decorate([(0,decorators.MZ)({type:String})],OrAttributeHistory.prototype,"assetType",void 0),__decorate([(0,decorators.MZ)({type:String})],OrAttributeHistory.prototype,"assetId",void 0),__decorate([(0,decorators.MZ)({type:Object})],OrAttributeHistory.prototype,"attribute",void 0),__decorate([(0,decorators.MZ)({type:Object})],OrAttributeHistory.prototype,"attributeRef",void 0),__decorate([(0,decorators.MZ)({type:String})],OrAttributeHistory.prototype,"period",void 0),__decorate([(0,decorators.MZ)({type:Number})],OrAttributeHistory.prototype,"toTimestamp",void 0),__decorate([(0,decorators.MZ)({type:Object})],OrAttributeHistory.prototype,"config",void 0),__decorate([(0,decorators.MZ)()],OrAttributeHistory.prototype,"_loading",void 0),__decorate([(0,decorators.MZ)()],OrAttributeHistory.prototype,"_data",void 0),__decorate([(0,decorators.MZ)()],OrAttributeHistory.prototype,"_tableTemplate",void 0),__decorate([(0,decorators.P)("#chart")],OrAttributeHistory.prototype,"_chartElem",void 0),__decorate([(0,decorators.P)("#table")],OrAttributeHistory.prototype,"_tableElem",void 0),OrAttributeHistory=OrAttributeHistory_1=__decorate([(0,decorators.EM)("or-attribute-history")],OrAttributeHistory);__webpack_require__("../../component/or-mwc-components/lib/or-mwc-table.js");var or_mwc_dialog=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-dialog.js"),or_mwc_list=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-list.js");const panelStyles=lit.AH`
    .panelContainer {
        flex: 1 1 50%;
        box-sizing: border-box;
        min-width: 400px;
        padding: 0 5px;
    }
    
    .panel {
        background-color: var(--internal-or-asset-viewer-panel-color);
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        position: relative;
        margin: 0 0 10px 0;
    }

    .panel-content-wrapper {
        padding: var(--internal-or-asset-viewer-panel-padding);
    }

    .panel-content > :first-child {
        margin-top: 0;
    }
    .panel-content > :last-child {
        margin-bottom: 0;
    }

    .panel-content {
        display: flex;
        flex-wrap: wrap;
    }

    .panel-title {
        text-transform: uppercase;
        font-weight: bolder;
        line-height: 1em;
        color: var(--internal-or-asset-viewer-title-text-color);
        margin-bottom: 20px;
        flex: 0 0 auto;
        letter-spacing: 0.025em;
    }

    .field {
        margin: 10px 0;
        width: 100%;
        flex: 0 0 auto;
    }

    .field > * {
        width: 100%;
        box-sizing: border-box;
    }

    @media screen and (max-width: 767px) {
        .panel {
            border-radius: 0;
            border-right: none;
            border-left: none;
            flex-basis: 100%;
            min-width: 360px;
        }
    }
    
    #linkedUsers-panel {
        min-height: 200px;
    }
`,style_style=lit.AH`

    :host {
        --internal-or-asset-viewer-background-color: var(--or-asset-viewer-background-color, var(--or-app-color2, ${(0,lit.iz)(core_lib.PR)}));
        --internal-or-asset-viewer-panel-margin: var(--or-asset-viewer-panel-margin, 20px);
        --internal-or-asset-viewer-panel-padding: var(--or-asset-viewer-panel-padding, 24px);
        --internal-or-asset-viewer-text-color: var(--or-asset-viewer-text-color, var(--or-app-color3, ${(0,lit.iz)(core_lib.Iy)}));
        --internal-or-asset-viewer-title-text-color: var(--or-asset-viewer-title-text-color, var(--or-app-color3, ${(0,lit.iz)(core_lib.Iy)}));       
        --internal-or-asset-viewer-panel-color: var(--or-asset-viewer-panel-color, var(--or-app-color1, ${(0,lit.iz)(core_lib.WO)}));
        --internal-or-asset-viewer-line-color: var(--or-asset-viewer-line-color, var(--or-app-color5, ${(0,lit.iz)(core_lib.Id)}));
        --internal-or-asset-viewer-button-color: var(--or-asset-viewer-button-color, var(--or-app-color4, ${(0,lit.iz)(core_lib.BB)}));
        --internal-or-asset-viewer-error-color: var(--or-asset-viewer-error-color, var(--or-app-color6, ${(0,lit.iz)(core_lib.PX)}));
        --internal-or-header-height: var(--or-header-height, ${(0,lit.iz)(core_lib.Kk)});
                
        height: 100%;
        width: 100%;
        background-color: var(--internal-or-asset-viewer-background-color);
    }
   
    *[hidden] {
        display: none;
    }
    
    #wrapper {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    
    #wrapper.saving {
        opacity: 0.5;
        pointer-events: none;
    }

    #view-container, #edit-container {
        flex: 0 1 auto;
        overflow: auto;
    }
    
    #view-container {
        flex: 1;
        margin-top: 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        padding: 0 15px 15px;

        -webkit-animation: fadein 0.3s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 0.3s; /* Firefox < 16 */
        -ms-animation: fadein 0.3s; /* Internet Explorer */
        -o-animation: fadein 0.3s; /* Opera < 12.1 */
        animation: fadein 0.3s;
    }

    #edit-container {
        padding: 10px 20px 0;
    }
    
    #name-input {
        width: 300px;
    }

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Opera < 12.1 */
    @-o-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    #asset-header {
        padding: 20px 30px 15px;
        display: flex;
        flex: 0 0 auto;
        align-items: center;
        justify-content: space-between;
        z-index: 1;
        transition: box-shadow 0.2s;
        box-shadow: none;
    }

    #asset-header.editmode {
        padding: 14px 30px;
        background-color: var(--internal-or-asset-viewer-panel-color);
        border-bottom: solid 1px #e5e5e5;
    }
    #asset-header.scrolled {
        box-shadow: rgb(0 0 0 / 15%) 0 0 5px 0;
    }

    #title {
        flex: 1 1 auto;
        font-size: 18px;
        font-weight: bold;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: var(--internal-or-asset-viewer-title-text-color);
    }

    #title > or-icon {
        margin-right: 10px;
    }

    #error-wrapper {
        color: var(--internal-or-asset-viewer-error-color);
    }

    #error-wrapper > * {
        vertical-align: middle;
    }

    #error-wrapper or-translate {
        margin-left: 5px;
    }
   
    #created-time {
        font-size: 12px;
    }
    
    #right-wrapper {
        flex: 1 1 auto;
        text-align: right;
    }
    
    #edit-wrapper {
        flex: 0 0 auto;
    }

    #edit-wrapper > or-translate {
        margin-right: 10px;
    }

    #save-btn {
        margin-left: 20px;
    }

    #edit-btn {
        margin-left: 15px;
    }
    
    #location-panel .panel-content {
        height: 100%;
    }
    
    #history-panel .panel-content {
        position: relative;
    }
    
    .msg {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100%;
    }
    
    .back-navigation {
        display: none;
        cursor: pointer;
    }
    
    #fileupload {
        display: flex;
        align-items: center;
        width: 100%;
    }
    
    .hidden {
        display: none;
    }
    
    .multipleAssetsView {
        display: flex;
        flex-direction: column;
    }

    .multipleAssetsView > *:first-child {
        margin: 30px;
    }

    @media screen and (max-width: 767px) {
        #wrapper {
            position: absolute;
            left: 0;
            right: 0;
        }

        .back-navigation {
            display: block;
        }
        
        .mobileHidden {
            display: none;
        }
        
        #asset-header {
            padding: 15px 15px 15px;
        }

        #name-input {
            width: auto;
        }

        #view-container {
            padding: 0;
        }

        #edit-container {
            padding: 10px 0;
        }

        .panelContainer {
            min-width: 360px;
            padding: 0;
        }
    }
    
    @media screen and (max-width: 1130px) {
        #name-input {
            width: 150px;
        }

        .tabletHidden {
            display: none;
        }

        #view-container {
            flex-direction: column;
            flex-wrap: nowrap;
        }

        .panelContainer {
            flex: 0 1 auto;
        }
    }

`;var class_map=__webpack_require__("../../../node_modules/lit/directives/class-map.js"),until=__webpack_require__("../../../node_modules/lit/directives/until.js"),or_add_attribute_panel_decorate=function(t,e,i,r){var a,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,i,o):a(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};class OrAddAttributePanelAttributeChangedEvent extends CustomEvent{constructor(t){super(OrAddAttributePanelAttributeChangedEvent.NAME,{bubbles:!0,composed:!1,detail:t})}}OrAddAttributePanelAttributeChangedEvent.NAME="or-add-attribute-panel-attribute-changed";let OrAddAttributePanel=class extends lit.WF{constructor(){super(...arguments),this.attribute={},this.isCustom=!1,this.isArray=!1,this.arrayDimensions=1,this.customAttribute=!0,this.arrayRegex=/\[\]/g}static get styles(){return lit.AH`                        
            or-mwc-input {
                width: 300px;
                display: block;
                padding: 10px 20px;
            }`}shouldUpdate(t){var e,i;return t.has("asset")&&(this.attributeTypes=void 0,this.attributeValueTypes=void 0,this.attributeTypes=((null===(e=model_lib.u0.getAssetTypeInfo(this.asset.type))||void 0===e?void 0:e.attributeDescriptors)||[]).filter((t=>!this.asset.attributes[t.name])).sort(core_lib.J0.sortByString((t=>t.name))).map((t=>[t.name,core_lib.J0.getAttributeLabel(void 0,t,this.asset.type,!1)])),this.attributeTypes=[["@custom",i18next.Ay.t("custom")],...this.attributeTypes],this.attributeValueTypes=((null===(i=model_lib.u0.getAssetTypeInfo(this.asset.type))||void 0===i?void 0:i.valueDescriptors)||[]).sort(core_lib.J0.sortByString((t=>t[0]))).filter((t=>{const e=model_lib.u0.getValueDescriptor(t);return!e||!e.metaUseOnly})).map((t=>[t,core_lib.J0.getValueDescriptorLabel(t)]))),super.shouldUpdate(t)}render(){if(this.attributeTypes&&this.attributeValueTypes)return lit.qy`
            <div id="attribute-creator">
                <or-mwc-input .type="${or_mwc_input.NZ.SELECT}" .options="${this.attributeTypes}" .label="${i18next.Ay.t("type")}" .value="${"@custom"}" @or-mwc-input-changed="${t=>this.onTypeChanged(t.detail.value)}"></or-mwc-input>
                <or-mwc-input id="name-input" .type="${or_mwc_input.NZ.TEXT}" ?disabled="${!this.customAttribute}" .value="${this.attribute&&this.attribute.name?this.attribute.name:void 0}" .label="${i18next.Ay.t("name")}" pattern="\\w+" required @keyup="${t=>this.onNameChanged(t.target.currentValue)}" @or-mwc-input-changed="${t=>this.onNameChanged(t.detail.value)}"></or-mwc-input>
                <or-mwc-input id="type-input" .type="${or_mwc_input.NZ.SELECT}" ?disabled="${!this.customAttribute}" .value="${this.attribute&&this.attribute.type?this.attribute.type.replace(this.arrayRegex,""):void 0}" .options="${this.attributeValueTypes}" .label="${i18next.Ay.t("valueType")}" @or-mwc-input-changed="${t=>this.onValueTypeChanged(t.detail.value)}"></or-mwc-input>
                <or-mwc-input id="array-checkbox" .type="${or_mwc_input.NZ.CHECKBOX}" ?disabled="${!this.customAttribute}" .value="${this.isArray}" .label="${i18next.Ay.t("array")}" @or-mwc-input-changed="${t=>this.onArrayChanged(t.detail.value,1)}"></or-mwc-input>
                <or-mwc-input id="array-input" .type="${or_mwc_input.NZ.NUMBER}" ?disabled="${!this.isArray||!this.customAttribute}" .value="${this.arrayDimensions}" min="1" max="2" .label="${i18next.Ay.t("arrayDimensions")}" @or-mwc-input-changed="${t=>this.onArrayChanged(!0,t.detail.value)}"></or-mwc-input>
            </div>
        `}onTypeChanged(t){if("@custom"===t)this.customAttribute=!0,this.attribute={meta:{}};else{this.customAttribute=!1;const e=model_lib.u0.getAttributeDescriptor(t,this.asset.type);this.attribute={},this.attribute.name=e.name,this.attribute.type=e.type,e.meta?this.attribute.meta=JSON.parse(JSON.stringify(e.meta)):this.attribute.meta={}}this.dispatchEvent(new OrAddAttributePanelAttributeChangedEvent(this.attribute))}onNameChanged(t){this.attribute.name=t,this.dispatchEvent(new OrAddAttributePanelAttributeChangedEvent(this.attribute))}onValueTypeChanged(t){this.attribute.type=t,this.updateAttributeType()}onArrayChanged(t,e){this.isArray=t,this.arrayDimensions=e,this.updateAttributeType()}updateAttributeType(){if(!this.attribute||!this.attribute.type)return;let t=this.attribute.type.replace(this.arrayRegex,"");if(this.isArray)for(let e=1;e<=this.arrayDimensions;e++)t+="[]";this.attribute.type=t,this.dispatchEvent(new OrAddAttributePanelAttributeChangedEvent(this.attribute))}};or_add_attribute_panel_decorate([(0,decorators.MZ)({attribute:!1})],OrAddAttributePanel.prototype,"asset",void 0),or_add_attribute_panel_decorate([(0,decorators.MZ)({attribute:!1})],OrAddAttributePanel.prototype,"attribute",void 0),or_add_attribute_panel_decorate([(0,decorators.MZ)()],OrAddAttributePanel.prototype,"isCustom",void 0),or_add_attribute_panel_decorate([(0,decorators.MZ)()],OrAddAttributePanel.prototype,"isArray",void 0),or_add_attribute_panel_decorate([(0,decorators.MZ)()],OrAddAttributePanel.prototype,"arrayDimensions",void 0),or_add_attribute_panel_decorate([(0,decorators.P)("#array-input")],OrAddAttributePanel.prototype,"arrayInput",void 0),OrAddAttributePanel=or_add_attribute_panel_decorate([(0,decorators.EM)("or-add-attribute-panel")],OrAddAttributePanel);var ref=__webpack_require__("../../../node_modules/lit/directives/ref.js"),or_edit_asset_panel_decorate=function(t,e,a,i){var o,s=arguments.length,l=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,a,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(l=(s<3?o(l):s>3?o(e,a,l):o(e,a))||l);return s>3&&l&&Object.defineProperty(e,a,l),l};const or_edit_asset_panel_tableStyle=__webpack_require__("../../../node_modules/@material/data-table/dist/mdc.data-table.css"),or_edit_asset_panel_style=lit.AH`
    .panel {
        margin: 10px auto;
        max-width: 1200px;
    }

    #parent-edit-wrapper {
        display: flex;
        align-items: center;
    }
    
    #parent-edit-wrapper > #property-parentId {
        width: 100%;
    }
    
    #change-parent-btn {
        margin-left: 20px;
    }

    .mdc-data-table__row:hover {
        background-color: inherit !important;
    }

    .mdc-data-table__row {
        border-top-color: #D3D3D3;
    }

    #attribute-table {
        width: 100%;
    }

    .mdc-data-table__table {
        width: 100%;
    }
    .mdc-data-table__header-cell {
        font-weight: 500;
        color: ${(0,lit.iz)(core_lib.Iy)};
    }

    .mdc-data-table__header-cell:first-child {
        padding-left: 36px;
    }
    .expander-cell {
        --or-icon-width: 20px;
        --or-icon-height: 20px;
        cursor: pointer;
    }
    .expander-cell > * {
        pointer-events: none;
    }
    .expander-cell > or-icon {
        vertical-align: middle;
        margin-right: 6px;
        margin-left: -5px;
    }
    .padded-cell {
        padding: 10px 16px;
    }
    .padded-cell > or-attribute-input {
        width: 100%;
    }
    .actions-cell {
        text-align: right;
        width: 40px;
        padding-right: 4px;
    }
    .meta-item-container {
        padding: 0 4px 0 24px;
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.25s ease-out;
    }
    .attribute-meta-row.expanded  .meta-item-container {
        transition: max-height 1s ease-in;
    }
    .meta-item-container or-mwc-input {
        width: 100%;
    }
    .meta-item-wrapper {
        display: flex;
        margin: 10px 0;
    }
    .meta-item-wrapper:first-child {
        margin-top: 0;
    }
    .meta-item-wrapper:hover .button-clear {
        visibility: visible;                    
    }
    .item-add {
        margin-bottom: 10px;                
    }
    .item-add-attribute {
        margin: 10px 0px 10px 4px;
    }
    .button-clear {
        background: none;
        color: ${(0,lit.iz)(core_lib.Id)};
        --or-icon-fill: ${(0,lit.iz)(core_lib.Id)};
        visibility: hidden;
        display: inline-block;
        border: none;
        padding: 0 0 0 4px;
        cursor: pointer;
    }                
    .button-clear:hover {
        --or-icon-fill: var(--internal-or-asset-viewer-button-color);
    }                
    .button-clear:focus {
        outline: 0;
    }                
    .button-clear.hidden {
        visibility: hidden;
    }
    .overflow-visible {
        overflow: visible;
    }
`;class OrEditAssetModifiedEvent extends CustomEvent{constructor(t){super(OrEditAssetModifiedEvent.NAME,{bubbles:!0,composed:!0,detail:t})}}OrEditAssetModifiedEvent.NAME="or-edit-asset-modified";const AssetNameRegex=/^\w+$/;let OrEditAssetPanel=class extends lit.WF{constructor(){super(...arguments),this.attributeTemplatesAndValidators=[],this.changedAttributes=[]}static get styles(){return[(0,lit.iz)(or_edit_asset_panel_tableStyle),panelStyles,or_edit_asset_panel_style]}attributeUpdated(t){this.asset&&(this.changedAttributes.push(t),this.requestUpdate())}shouldUpdate(t){return t.has("asset")&&(this.changedAttributes=[]),super.shouldUpdate(t)}render(){const t=t=>{this.asset.accessPublicRead=t,this._onModified()},e=[getField("type",void 0,getPropertyTemplate(this.asset,"type",this,void 0,void 0,{readonly:!0,label:i18next.Ay.t("assetType")})),getField("parent",void 0,this._getParentTemplate()),lit.qy`<div @or-mwc-input-changed="${e=>t(e.detail.value)}">
                    ${getField("accessPublicRead",void 0,getPropertyTemplate(this.asset,"accessPublicRead",this,void 0,void 0,{readonly:!1,label:i18next.Ay.t("accessPublicRead")}))}
                </div>`];this.attributeTemplatesAndValidators=this.asset.attributes?Object.entries(this.asset.attributes).sort(core_lib.J0.sortByString((([t,e])=>t.toUpperCase()))).map((([t,e])=>(e.name=t,this._getAttributeTemplate(this.asset.type,e)))):[];const a=lit.qy`
            <div id="attribute-table" class="mdc-data-table">
                <table class="mdc-data-table__table" aria-label="attribute list" @click="${t=>{const e=t.target;if(e.className.indexOf("expander-cell")<0||e.className.indexOf("expanding")>=0)return;const a=e.getElementsByTagName("or-icon")[0],i=e.parentElement,o=i.parentElement.rows[i.rowIndex],s=o.firstElementChild.firstElementChild,l=Math.max(500,s.firstElementChild.getBoundingClientRect().height);"chevron-right"===a.icon?(a.icon="chevron-down",o.classList.add("expanded"),s.style.maxHeight=l+"px",e.classList.add("expanding"),window.setTimeout((()=>{e.classList.remove("expanding"),s.style.maxHeight="unset"}),1100)):(a.icon="chevron-right",o.classList.remove("expanded"),s.style.transition="none",s.style.maxHeight=Math.max(500,s.firstElementChild.getBoundingClientRect().height)+"px",window.setTimeout((()=>{s.style.transition="",s.style.maxHeight=""})))}}">
                    <colgroup>
                        <col span="1" style="width: 25%;">
                        <col span="1" style="width: 25%;">
                        <col span="1" style="width: 35%;">
                        <col span="1" style="width: 15%;">
                    </colgroup>
                    <thead>
                        <tr class="mdc-data-table__header-row">
                            <th class="mdc-data-table__header-cell" role="columnheader" scope="col"><or-translate value="name"></or-translate></th>
                            <th class="mdc-data-table__header-cell" role="columnheader" scope="col"><or-translate value="type"></or-translate></th>
                            <th class="mdc-data-table__header-cell" role="columnheader" scope="col"><or-translate value="value"></or-translate></th>
                            <th class="mdc-data-table__header-cell" role="columnheader" scope="col"></or-translate></th>
                        </tr>
                    </thead>
                    <tbody class="mdc-data-table__content">
                        ${this.attributeTemplatesAndValidators.map((t=>t.template))}
                        <tr class="mdc-data-table__row">
                            <td colspan="4">
                                <div class="item-add-attribute">
                                    <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" label="addAttribute" icon="plus" @or-mwc-input-changed="${()=>this._addAttribute()}"></or-mwc-input>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;return lit.qy`
            <div id="edit-wrapper">
                ${getPanel("0",{type:"info",title:"properties"},lit.qy`${e}`)||""}
                ${getPanel("1",{type:"info",title:"attribute_plural"},lit.qy`${a}`)||""}
            </div>
        `}_getAttributeTemplate(t,e){const a=model_lib.u0.getAttributeDescriptor(e.name,t),i=!a||a.optional,o=(0,ref._)(),s=e.meta?Object.entries(e.meta).sort(core_lib.J0.sortByString((([t,e])=>t))).map((([t,a])=>this._getMetaItemTemplate(e,core_lib.J0.getMetaItemNameValueHolder(t,a)))):[];return{template:lit.qy`
            <tr class="mdc-data-table__row">
                <td class="padded-cell mdc-data-table__cell expander-cell"><or-icon icon="chevron-right"></or-icon><span>${e.name}</span></td>
                <td class="padded-cell mdc-data-table__cell">${core_lib.J0.getValueDescriptorLabel(e.type)}</td>
                <td class="padded-cell overflow-visible mdc-data-table__cell">
                    <or-attribute-input ${(0,ref.K)(o)} 
                                        .comfortable="${!0}" .assetType="${t}" .label=${null} 
                                        .readonly="${!1}" .attribute="${e}" .assetId="${this.asset.id}" 
                                        disableWrite disableSubscribe disableButton compact 
                                        @or-attribute-input-changed="${t=>this._onAttributeModified(e,t.detail.value)}"></or-attribute-input>
                </td>
                <td class="padded-cell mdc-data-table__cell actions-cell">${i?lit.qy`<or-mwc-input type="${or_mwc_input.NZ.BUTTON}" icon="delete" @click="${()=>{delete this.asset.attributes[e.name],this._onModified()}}">`:""}</td>
            </tr>
            <tr class="attribute-meta-row">
                <td colspan="4">
                    <div class="meta-item-container">
                        <div>
                            <div>
                                ${s.map((t=>t.template))}
                            </div>
                            <div class="item-add">
                                <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" label="addMetaItems" icon="plus" @or-mwc-input-changed="${()=>this._addMetaItems(e)}"></or-mwc-input>
                            </div>
                        </div>
                    </div>                     
                </td>
            </tr>
        `,validator:()=>{let t=!1;return o.value&&(t=o.value.checkValidity()),{name:e.name,valid:t,metaResults:s.map((t=>t.validator()))}}}}_onModified(){this.dispatchEvent(new OrEditAssetModifiedEvent(this.validate())),this.requestUpdate()}validate(){return this.attributeTemplatesAndValidators.map((t=>t.validator()))}_onAttributeModified(t,e){const a=this.changedAttributes.indexOf(t.name);a>-1?this.changedAttributes.splice(a,1):(t.value=e,t.timestamp=void 0,this._onModified())}_onMetaItemModified(t,e,a){e.value=a?a.value:void 0,t.meta[e.name]=e.value,this._onModified()}_getMetaItemTemplate(t,e){const a=model_lib.u0.getMetaItemDescriptor(e.name),i=a?model_lib.u0.getValueDescriptor(a.type):void 0;let o=lit.qy``,s=()=>({name:e.name,valid:!0});if(i){const l={label:core_lib.J0.getMetaLabel(e,a,this.asset.type,!0),resizeVertical:!0},r=(0,or_mwc_input.Zo)(this.asset.type,e,a,i,(a=>this._onMetaItemModified(t,e,a)),l);let n=(0,or_attribute_input_lib.Lr)(r)(this.asset.type,e,a,i,(a=>this._onMetaItemModified(t,e,a)),l);n||(n=r),n&&n.templateFunction&&(o=lit.qy`${(0,until.T)(n.templateFunction(e.value,!1,!1,!1,!1,void 0),"")}`),n.validator&&(s=()=>({name:e.name,valid:n.validator()}))}else console.log("Couldn't find value descriptor for meta item so falling back to simple JSON input: "+e.name),o=lit.qy`<or-mwc-input @or-mwc-input-changed="${a=>this._onMetaItemModified(t,e,a.detail)}" .type="${or_mwc_input.NZ.JSON}" .value="${e.value}"></or-mwc-input>`;return{template:lit.qy`
            <div class="meta-item-wrapper">
                ${o}
                <button class="button-clear" @click="${()=>{delete t.meta[e.name],this._onModified()}}">
                    <or-icon icon="close-circle"></or-icon>
                    </input>
            </div>
        `,validator:s}}_addAttribute(){const t=this.asset;let e;const a=e=>!(e&&e.name&&!t.attributes[e.name]&&AssetNameRegex.test(e.name)&&e.type),i=(0,or_mwc_dialog.ui)((new or_mwc_dialog.X$).setContent(lit.qy`
                <or-add-attribute-panel .asset="${t}" @or-add-attribute-panel-attribute-changed="${t=>(t=>{const o=a(t);i.shadowRoot.getElementById("add-btn").disabled=o,e=t})(t.detail)}"></or-add-attribute-panel>
            `).setStyles(lit.qy`
                <style>
                    .mdc-dialog__surface {
                        overflow-x: visible !important;
                        overflow-y: visible !important;
                    }
                    #dialog-content {
                        padding: 0;
                        overflow: visible;
                    }
                </style>
            `).setHeading(i18next.Ay.t("addAttribute")).setActions([{actionName:"cancel",content:"cancel"},{default:!0,actionName:"add",action:()=>{e&&(this.asset.attributes[e.name]=e,this._onModified())},content:lit.qy`<or-mwc-input id="add-btn" .type="${or_mwc_input.NZ.BUTTON}" disabled label="add"
                                    @or-mwc-input-changed="${t=>{if(a(e))return t.stopPropagation(),!1}}"></or-mwc-input>`}]).setDismissAction(null))}_addMetaItems(t){const e=model_lib.u0.getAssetTypeInfo(this.asset.type);if(!e||!e.metaItemDescriptors)return;const a=t.meta||{},i=e.metaItemDescriptors.map((t=>model_lib.u0.getMetaItemDescriptor(t))).filter((t=>!a.hasOwnProperty(t.name))).map((t=>({text:core_lib.J0.getMetaLabel(void 0,t,this.asset.type,!0),value:t.name,translate:!1}))).sort(core_lib.J0.sortByString((t=>t.text))),o=(0,or_mwc_dialog.ui)((new or_mwc_dialog.X$).setContent(lit.qy`
                <div id="meta-creator">
                    <or-mwc-list id="meta-creator-list" .type="${or_mwc_list.pc.MULTI_CHECKBOX}" .listItems="${i}"></or-mwc-list>
                </div>
            `).setStyles(lit.qy`
                <style>
                    #meta-creator {
                        height: 600px;
                        max-height: 100%;
                    }
                    
                    #meta-creator > or-mwc-list {
                        height: 100%;
                    }

                    .mdc-dialog .mdc-dialog__content {
                        padding: 0 !important;
                    }
                </style>
            `).setHeading(i18next.Ay.t("addMetaItems")).setActions([{actionName:"cancel",content:"cancel"},{default:!0,actionName:"add",action:()=>{const e=o.shadowRoot.getElementById("meta-creator-list"),a=e?e.selectedItems:void 0;a&&(t.meta||(t.meta={}),a.forEach((e=>{const a=model_lib.u0.getMetaItemDescriptors().find((t=>t.name===e.value));a&&(t.meta[a.name]="boolean"===a.type||null,this._onModified())})))},content:"add"}]).setDismissAction(null))}_getParentTemplate(){let t;const e=t=>{t.stopPropagation()},a=lit.qy`<or-asset-tree id="parent-asset-tree" disableSubscribe readonly .selectedIds="${this.asset.parentId?[this.asset.parentId]:[]}" @or-asset-tree-request-select="${e}" @or-asset-tree-selection-changed="${e}" .selector="${t=>t.asset.id!==this.asset.id}"></or-asset-tree>`,i=[{actionName:"clear",content:"none",action:()=>{this.asset.parentId=void 0,this.asset.path=[this.asset.id],this._onModified()}},{actionName:"ok",content:"ok",action:()=>{const e=t.shadowRoot.getElementById("parent-asset-tree");this.asset.parentId=1===e.selectedIds.length?e.selectedIds[0]:void 0;const a=[this.asset.id];let i=e.selectedNodes[0];for(;void 0!==i;)a.unshift(i.asset.id),i=i.parent;this.asset.path=a,this._onModified()}},{default:!0,actionName:"cancel",content:"cancel"}];return lit.qy`
            <div id="parent-edit-wrapper">
                ${getPropertyTemplate(this.asset,"parentId",this,void 0,void 0,{readonly:!0,label:i18next.Ay.t("parent")})}
                <or-mwc-input id="change-parent-btn" type="${or_mwc_input.NZ.BUTTON}" outlined label="edit" @or-mwc-input-changed="${()=>{t=(0,or_mwc_dialog.ui)((new or_mwc_dialog.X$).setContent(a).setActions(i).setStyles(lit.qy`
                        <style>
                            .mdc-dialog__surface {
                                width: 400px;
                                height: 800px;
                                display: flex;
                                overflow: visible;
                                overflow-x: visible !important;
                                overflow-y: visible !important;
                            }
                            #dialog-content {
                                flex: 1;    
                                overflow: visible;
                                min-height: 0;
                                padding: 0;
                            }
                            footer.mdc-dialog__actions {
                                border-top: 1px solid ${(0,lit.iz)(core_lib.Id)};
                            }
                            or-asset-tree {
                                height: 100%;
                            }
                        </style>
                    `).setHeading(i18next.Ay.t("setParent")).setDismissAction(null))}}"></or-mwc-input>
            </div>
        `}};or_edit_asset_panel_decorate([(0,decorators.MZ)({attribute:!1})],OrEditAssetPanel.prototype,"asset",void 0),OrEditAssetPanel=or_edit_asset_panel_decorate([(0,decorators.EM)("or-edit-asset-panel")],OrEditAssetPanel);var or_mwc_snackbar=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-snackbar.js"),lib_style=__webpack_require__("../../component/or-mwc-components/lib/style.js"),lib_decorate=function(e,t,s,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,s,n):o(t,s))||n);return r>3&&n&&Object.defineProperty(t,s,n),n},lib_awaiter=function(e,t,s,i){return new(s||(s=Promise))((function(o,r){function n(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,a)}l((i=i.apply(e,t||[])).next())}))};class OrAssetViewerComputeGridEvent extends CustomEvent{constructor(){super(OrAssetViewerComputeGridEvent.NAME,{bubbles:!0,composed:!0})}}OrAssetViewerComputeGridEvent.NAME="or-asset-viewer-compute-grid-event";class OrAssetViewerRequestSaveEvent extends CustomEvent{constructor(e){super(OrAssetViewerRequestSaveEvent.NAME,{bubbles:!0,composed:!0,detail:{allow:!0,detail:e}})}}OrAssetViewerRequestSaveEvent.NAME="or-asset-viewer-request-save";class OrAssetViewerSaveEvent extends CustomEvent{constructor(e){super(OrAssetViewerSaveEvent.NAME,{bubbles:!0,composed:!0,detail:e})}}OrAssetViewerSaveEvent.NAME="or-asset-viewer-save";class OrAssetViewerChangeParentEvent extends CustomEvent{constructor(e,t){super(OrAssetViewerChangeParentEvent.NAME,{bubbles:!0,composed:!0,detail:{parentId:e,assetsIds:t}})}}OrAssetViewerChangeParentEvent.NAME="or-asset-viewer-change-parent";class OrAssetViewerRequestEditToggleEvent extends CustomEvent{constructor(e){super(OrAssetViewerRequestEditToggleEvent.NAME,{bubbles:!0,composed:!0,detail:{allow:!0,detail:e}})}}OrAssetViewerRequestEditToggleEvent.NAME="or-asset-viewer-request-edit-toggle";class OrAssetViewerEditToggleEvent extends CustomEvent{constructor(e){super(OrAssetViewerEditToggleEvent.NAME,{bubbles:!0,composed:!0,detail:e})}}OrAssetViewerEditToggleEvent.NAME="or-asset-viewer-edit-toggle";class OrAssetViewerLoadUserEvent extends CustomEvent{constructor(e){super(OrAssetViewerLoadUserEvent.NAME,{bubbles:!0,composed:!0,detail:e})}}function getPanel(e,t,s){if(s)return lit.qy`
        <div class=${(0,class_map.H)({panel:!0,mobileHidden:!0===t.hideOnMobile})} style="${t&&t.panelStyles?(0,style_map.W)(t.panelStyles):""}" id="${e}-panel">
            <div class="panel-content-wrapper">
                <div class="panel-title">
                    <or-translate value="${t.title||t.type}"></or-translate>
                </div>
                <div class="panel-content">
                    ${s}
                </div>
            </div>
        </div>
    `}function getPanelContent(e,t,s,i,o){var r;const n=t.asset;if(i.panelViewProvider){const t=i.panelViewProvider(n,n.attributes,e,s,i,o);if(t)return t}if(o){if("info"===o.type){const e=o,r=function getIncludedProperties(e){const t=e&&e.properties&&e.properties.include?e.properties.include:DEFAULT_ASSET_PROPERTIES,s=e&&e.properties&&e.properties.exclude?e.properties.exclude:[];return t.filter((e=>!s||s.indexOf(e)<0))}(e),a=function getIncludedAttributes(e,t){const s=t&&t.attributes&&t.attributes.include?t.attributes.include:void 0,i=t&&t.attributes&&t.attributes.exclude?t.attributes.exclude:void 0;return s||i?Object.values(e).filter((e=>(!s||s.some((t=>core_lib.J0.stringMatch(t,e.name))))&&(!i||!i.some((t=>core_lib.J0.stringMatch(t,e.name)))))):Object.values(e)}(n.attributes,e);if(0===r.length&&0===a.length)return;const l=[];r.forEach((t=>{const s=e.properties&&e.properties.itemConfig?e.properties.itemConfig[t]:{};void 0===s.label&&(s.label=i18next.Ay.t(t)),s.priority=s.priority||0,l.push({item:t,itemConfig:s})})),a.forEach((t=>{const s=e.attributes&&e.attributes.itemConfig&&e.attributes.itemConfig[t.name]?e.attributes.itemConfig[t.name]:{};if(void 0===s.label){const e=model_lib.u0.getAttributeAndValueDescriptors(n.type,t.name,t);s.label=core_lib.J0.getAttributeLabel(t,e[0],n.type,!0)}s.priority=s.priority||0,l.push({item:t,itemConfig:s})}));const d=core_lib.J0.sortByString((e=>e.itemConfig.label.toUpperCase()));return l.sort(((e,t)=>{const s=e.itemConfig.priority,i=t.itemConfig.priority;return s<i?1:s>i?-1:d(e,t)})),lit.qy`
            ${l.map((e=>{if("string"==typeof e.item)return getField(e.item,e.itemConfig,getPropertyTemplate(n,e.item,s,i,o,e.itemConfig));{if(t.attributeTemplateMap[e.item.name])return getField(e.item.name,e.itemConfig,t.attributeTemplateMap[e.item.name]);const r=function getAttributeTemplate(e,t,s,i,o,r){if(i.attributeViewProvider){const r=i.attributeViewProvider(e,t,s,i,o);if(r)return r}let n,a,l,d,c,p;return r&&(n=r.label,a=r.disabled,l=r.readonly,d=r.disableButton,p=r.disableHelperText,c=r.inputTypeOverride),lit.qy`
        <or-attribute-input class="force-btn-padding" disablesubscribe .assetType="${e.type}" .attribute="${t}" .assetId="${e.id}" .disabled="${a}" .label="${n}" .readonly="${l}" resizeVertical .disableButton="${d}" .inputType="${c}" .hasHelperText="${!p}" .fullWidth="${"location"===t.name}"></or-attribute-input>
    `}(n,e.item,s,i,o,e.itemConfig);return t.attributeTemplateMap[e.item.name]=r,getField(e.item.name,e.itemConfig,r)}}))}`}if("setup"===o.type){const e=model_lib.u0.getAssetDescriptor(n.type);if(!e||!n.id||"agent"!==e.descriptorType||!e.assetDiscovery&&!e.assetImport)return;const t=()=>{const e=s.shadowRoot.getElementById("fileupload-elem"),t=s.shadowRoot.getElementById("filename-elem"),i=s.shadowRoot.getElementById("fileupload-btn"),o=e.value;if(!o)return;let r;i.disabled=!1,o.lastIndexOf("\\")?r=o.lastIndexOf("\\")+1:o.lastIndexOf("/")&&(r=o.lastIndexOf("/")+1),t.value=o.slice(r,o.length)},i=()=>{const e=s.shadowRoot.getElementById("discover-btn"),t=s.shadowRoot.getElementById("cancel-discover-btn");if(!e||!t)return!1;t.hidden=!1,e.disabled=!0,e.label=i18next.Ay.t("discovering")+"...",core_lib.Ay.rest.api.AgentResource.doProtocolAssetDiscovery(n.id).then((e=>{200!==e.status?(0,or_mwc_snackbar.td)(void 0,"somethingWentWrong","dismiss"):((0,or_mwc_snackbar.td)(void 0,"Import successful! Added "+e.data.length+" assets!","dismiss"),console.info(e.data,e))})).catch((e=>{(0,or_mwc_snackbar.td)(void 0,"somethingWentWrong","dismiss"),console.error(e)})).finally((()=>{t.hidden=!0,e.disabled=!1,e.label=i18next.Ay.t("discoverAssets")}))},o=()=>{const e=s.shadowRoot.getElementById("discover-btn"),t=s.shadowRoot.getElementById("cancel-discover-btn");e.disabled=!1,e.label=i18next.Ay.t("discoverAssets"),t.hidden=!0},r=()=>{const e=s.shadowRoot.getElementById("filename-elem"),t=s.shadowRoot.getElementById("fileupload-btn"),i=s.shadowRoot.getElementById("progress-circular");if(!t||!i)return!1;t.disabled=!0,t.classList.add("hidden"),i.classList.remove("hidden");const o=s.shadowRoot.getElementById("fileupload-elem");if(o){const s=new FileReader;o.files&&o.files.length&&s.readAsDataURL(o.files[0]),s.onload=()=>{if(s.result){let o=s.result.toString().replace(/^data:(.*,)?/,"");o.length%4>0&&(o+="=".repeat(4-o.length%4));const r={name:"filename",contents:o,binary:!0};core_lib.Ay.rest.api.AgentResource.doProtocolAssetImport(n.id,r,void 0,{timeout:3e4}).then((e=>{200!==e.status?(0,or_mwc_snackbar.td)(void 0,"somethingWentWrong","dismiss"):((0,or_mwc_snackbar.td)(void 0,"Import successful! Added "+e.data.length+" assets!","dismiss"),console.info(e.data,e))})).catch((e=>{(0,or_mwc_snackbar.td)(void 0,"somethingWentWrong","dismiss"),console.error(e)})).finally((()=>{e.value="",t.disabled=!0,t.classList.remove("hidden"),i.classList.add("hidden")}))}else(0,or_mwc_snackbar.td)(void 0,"somethingWentWrong","dismiss"),console.error(s)}}};let a=lit.qy``;return e.assetImport?a=lit.qy`
                <div id="fileupload">
                    <or-mwc-input style="flex: 0 1 auto;" outlined label="selectFile" .type="${or_mwc_input.NZ.BUTTON}" @or-mwc-input-changed="${()=>s.shadowRoot.getElementById("fileupload-elem").click()}">
                        <input id="fileupload-elem" name="configfile" type="file" accept=".*" @change="${()=>t()}"/>
                    </or-mwc-input>
                    <or-mwc-input style="flex: 1 1 auto; margin: 0 4px 0 10px;" id="filename-elem" .label="${i18next.Ay.t("file")}" .type="${or_mwc_input.NZ.TEXT}" disabled></or-mwc-input>
                    <or-mwc-input style="flex: 0 1 auto;" id="fileupload-btn" icon="upload" .type="${or_mwc_input.NZ.BUTTON}" @or-mwc-input-changed="${()=>r()}" disabled></or-mwc-input>
                    <progress id="progress-circular" class="hidden pure-material-progress-circular"></progress>
                </div>
            `:e.assetDiscovery?a=lit.qy`
                <or-mwc-input outlined id="discover-btn" .type="${or_mwc_input.NZ.BUTTON}" label="discoverAssets" @or-mwc-input-changed="${()=>i()}"></or-mwc-input>
                <or-mwc-input id="cancel-discover-btn" .type="${or_mwc_input.NZ.BUTTON}" label="cancel" @or-mwc-input-changed="${()=>o()}" hidden style="margin-left:20px"></or-mwc-input>
            `:(0,or_mwc_snackbar.td)(void 0,"agent type doesn't support a known protocol to add assets","dismiss"),lit.qy`
            <style>
                [hidden] {
                    display: none;
                }
            </style>
            ${a}
        `}if("history"===o.type){const e=o,a=e.include?e.include:void 0,l=e.exclude?e.exclude:[],d=Object.values(null===(r=null==t?void 0:t.asset)||void 0===r?void 0:r.attributes).filter((e=>(!a||a.indexOf(e.name)>=0)&&(!l||l.indexOf(e.name)<0)&&e.meta&&(e.meta.hasOwnProperty("storeDataPoints")?e.meta.storeDataPoints:e.meta.hasOwnProperty("agentLink"))));if(0===d.length)return;let c;const p=e=>{if(s.shadowRoot){const t=s.shadowRoot.getElementById("attribute-history");if(e&&t){let s=n.attributes&&n.attributes[e];const i=model_lib.u0.getAttributeAndValueDescriptors(n.type,s.name,s);core_lib.J0.getAttributeLabel(s,i[0],n.type,!0),t.attribute=s,c=s}}},u=d.map((e=>{const t=model_lib.u0.getAttributeAndValueDescriptors(n.type,e.name,e),s=core_lib.J0.getAttributeLabel(e,t[0],n.type,!0);return[e.name,s]})).sort(core_lib.J0.sortByString((e=>void 0===e[1]?e[0]:e[1])));let m=lit.qy`
                <div id="attribute-picker">
                    <or-mwc-input .checkAssetWrite="${!1}" .label="${i18next.Ay.t("attribute")}" @or-mwc-input-changed="${e=>p(e.detail.value)}" .type="${or_mwc_input.NZ.SELECT}" .options="${u}"></or-mwc-input>
                </div>`;return lit.qy`
            <style>
               #attribute-picker {
                   flex: 0;
                   margin: 0 0 10px 0;
                   position: unset;
               }
               
               #attribute-picker > or-mwc-input {
                   width: 250px;
               }
                
                or-attribute-history {
                    width: 100%;
                    --or-attribute-history-controls-margin: 0 0 10px -5px;
                    --or-attribute-history-controls-justify-content: flex-start;
                }

               @media screen and (min-width: 1900px) {
                   #attribute-picker {
                       position: absolute;
                   }

                   or-attribute-history {
                       --or-attribute-history-controls-margin: 0 0 10px 0;
                       --or-attribute-history-controls-justify-content: flex-end;
                       min-height: 70px;
                   }
               }
            </style>
            ${m}
            <or-attribute-history id="attribute-history" .config="${i.historyConfig}" .assetType="${n.type}" .assetId="${n.id}"></or-attribute-history>
        `}if("group"===o.type){if(!n.id||"GroupAsset"!==n.type)return;const i=t.childAssets;if(!i||0===i.length)return;const r=n.attributes&&n.attributes.childAssetType,a=o;if(!r||"string"!=typeof r.value)return;const l=r.value;let d=[],c=[];a.childAssetTypes&&a.childAssetTypes[l]&&(d=a.childAssetTypes[l].availableAttributes?a.childAssetTypes[l].availableAttributes:[],c=a.childAssetTypes[l].selectedAttributes?a.childAssetTypes[l].selectedAttributes:[]);const p=t=>{c.length=0,c.push(...t);const i=s.shadowRoot.getElementById(e+"-attribute-table"),o=m();i.columns=o[0],i.rows=o[1],u.views[n.id]=[...c],core_lib.Ay.console.storeData("OrAssetConfig",u)};let u;if(core_lib.Ay.console.retrieveData("OrAssetConfig").then((e=>{u=e,u||(u={views:{}}),u.views||(u.views={});const t=u.views[n.id];t&&p([...t])})),0===d.length){const e=model_lib.u0.getAssetTypeInfo(l);e&&e.attributeDescriptors&&(d=e.attributeDescriptors.map((e=>e.name)))}c&&0!==c.length||!d||(c=[...new Set(i.map((e=>Object.keys(e.attributes))).flat())]);const m=()=>{const e=[...c].sort(),t=e.map((e=>{const t=model_lib.u0.getAttributeDescriptor(e,l);return core_lib.J0.getAttributeLabel(void 0,t,n.type,!1)})),s=i.map((t=>{const s=e.map((e=>{const s=model_lib.u0.getAttributeDescriptor(e,l);return t.attributes[e]?core_lib.J0.getAttributeValueAsString(t.attributes[e],s,n.type,!1):""}));return s.unshift(t.name),s}));return t.unshift(i18next.Ay.t("groupAssetName")),[t,s]},h=()=>{const e=[...c];(0,or_mwc_dialog.YB)(i18next.Ay.t("addRemoveAttributes"),lit.qy`
                    <div style="display: flex; flex-direction: column;">
                        ${d.sort().map((t=>lit.qy`
                            <or-mwc-input .type="${or_mwc_input.NZ.CHECKBOX}" .label="${i18next.Ay.t(core_lib.J0.camelCaseToSentenceCase(t))}" style="display: inline-flex;"
                                          .value="${!!c.find((e=>e===t))}" 
                                          @or-mwc-input-changed="${s=>s.detail.value?e.push(t):e.splice(e.findIndex((e=>e===t)),1)}"
                            ></or-mwc-input>
                        `))}
                    </div>
                `).then((t=>{t&&p(e)}))},v=m();return lit.qy`
                <style>
                    .asset-group-add-remove-button {
                        position: absolute;
                        --or-mwc-input-color: currentColor;
                        top: calc(var(--internal-or-asset-viewer-panel-padding) - 15px);
                        right: calc(var(--internal-or-asset-viewer-panel-padding) - 15px);
                    }
                    .asset-group-add-remove-button.active {
                        cursor: pointer;
                        opacity: 1;
                    }
                </style>
                <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" class="asset-group-add-remove-button" icon="pencil" @click="${()=>h()}"></or-mwc-input>
                <or-mwc-table .columns="${v[0]}" .rows="${v[1]}" .id="${e}-attribute-table" .config="${{stickyFirstColumn:!0}}"></or-mwc-table>
            `}if("linkedUsers"===o.type){const e=core_lib.Ay.hasRole("read:admin"),i=t.userAssetLinks;if(!e)return;if(!i||0===i.length)return;const o=[i18next.Ay.t("username"),i18next.Ay.t("roles"),i18next.Ay.t("restrictedUser")],r=i.sort(core_lib.J0.sortByString((e=>e.usernameAndId))).map((e=>[e.usernameAndId,e.roles.join(", "),e.restrictedUser?i18next.Ay.t("yes"):i18next.Ay.t("no")]));return lit.qy`<or-mwc-table id="linked-users-table" .rows="${r}" .config="${{stickyFirstColumn:!1}}" .columns="${o}"
                                  @or-mwc-table-row-click="${e=>{s.dispatchEvent(new OrAssetViewerLoadUserEvent(i[e.detail.index].userId))}}">
                    </or-mwc-table>`}}}function getPropertyTemplate(e,t,s,i,o,r){let n=e[t];if(i&&i.propertyViewProvider&&o){const r=i.propertyViewProvider(e,t,n,s,i,o);if(r)return r}let a=or_mwc_input.NZ.TEXT;switch(t){case"parentId":n=e.path||["",e.parentId];const t=[...n];t.pop(),n="",t.length>0&&(function getAssetNames(e){return lib_awaiter(this,void 0,void 0,(function*(){const t=yield core_lib.Ay.rest.api.AssetResource.queryAssets({select:{attributes:[]},ids:e});return 200===t.status&&t.data&&t.data.length===e.length?e.map((e=>t.data.find((t=>t.id===e)).name)):e}))}(t).then((e=>{if(s&&s.shadowRoot){const t=s.shadowRoot.getElementById("property-parentId");t&&(t.value=e.join(" > "))}})),n=i18next.Ay.t("loading"));break;case"createdOn":a=or_mwc_input.NZ.DATETIME;break;case"accessPublicRead":a=or_mwc_input.NZ.CHECKBOX}return lit.qy`<or-mwc-input id="property-${t}" .type="${a}" dense .value="${n}" .readonly="${void 0===r.readonly||r.readonly}" .label="${r.label}"></or-mwc-input>`}function getField(e,t,s){return s?lit.qy`
            <div id="field-${e}" style="${t&&t.styles?(0,style_map.W)(t.styles):""}" class=${(0,class_map.H)({field:!0,mobileHidden:!!t&&!!t.hideOnMobile})}>
                ${s}
            </div>
        `:lit.qy``}function getLinkedUsers(e){return lib_awaiter(this,void 0,void 0,(function*(){try{return yield core_lib.Ay.rest.api.AssetResource.getUserAssetLinks({realm:core_lib.Ay.displayRealm,assetId:e.id}).then((e=>{const t=e.data.map((e=>function getLinkedUserInfo(e){return lib_awaiter(this,void 0,void 0,(function*(){const t=e.id.userId;return{userId:t,usernameAndId:e.userFullName,roles:yield core_lib.Ay.rest.api.UserResource.getUserRoles(core_lib.Ay.displayRealm,t).then((e=>e.data.filter((e=>e.composite&&e.assigned)).map((e=>e.name)))).catch((e=>(console.info("User not allowed to get roles",e),[]))),restrictedUser:yield core_lib.Ay.rest.api.UserResource.getUserRealmRoles(core_lib.Ay.displayRealm,t).then((e=>!!e.data&&!!e.data.find((e=>e.assigned&&"restricted_user"===e.name))))}}))}(e)));return Promise.all(t)}))}catch(e){return console.log("Failed to get child assets: "+e),[]}}))}function saveAsset(e){return lib_awaiter(this,void 0,void 0,(function*(){const t=!!e.id&&void 0!==e.version;let s,i="";try{if(t){if(!e.id)throw new Error("Request to update existing asset but asset ID is not set");s=200===(yield core_lib.Ay.rest.api.AssetResource.update(e.id,e)).status,i=e.id}else{const t=yield core_lib.Ay.rest.api.AssetResource.create(e);s=200===t.status,s&&(i=t.data.id)}}catch(e){s=!1,(0,or_mwc_snackbar.td)(void 0,t?"saveAssetFailed":"createAssetFailed","dismiss"),console.error("Failed to save asset",e)}return{assetId:i,success:s,isNew:!t}}))}OrAssetViewerLoadUserEvent.NAME="or-asset-viewer-load-user-event";const lib_tableStyle=__webpack_require__("../../../node_modules/@material/data-table/dist/mdc.data-table.css"),DEFAULT_ASSET_PROPERTIES=["name","createdOn","type","parentId","accessPublicRead"],DEFAULT_VIEWER_CONFIG={viewerStyles:{},panels:[{type:"group",title:"underlyingAssets"},{type:"info",hideOnMobile:!0,properties:{include:[]},attributes:{include:["notes","manufacturer","model"]}},{title:"attributes",type:"info",properties:{include:[]},attributes:{exclude:["location","notes","manufacturer","model"]}},{type:"setup",hideOnMobile:!1},{title:"location",type:"info",column:1,properties:{include:[]},attributes:{include:["location"],itemConfig:{location:{label:"",readonly:!0}}}},{type:"history",column:1},{type:"linkedUsers",column:1}]};let OrAssetViewer=class extends((0,core_lib.B1)(core_lib.Ay)((0,or_translate_lib.Tl)(i18next.Ay)(lit.WF))){static get styles(){return[(0,lit.iz)(lib_tableStyle),lib_style.f,panelStyles,style_style]}constructor(){super(),this._validationResults=[],this.langChangedCallback=()=>{this._assetInfo&&(this._assetInfo.attributeTemplateMap={},this.requestUpdate("_assetInfo"))},this.addEventListener(OrEditAssetModifiedEvent.NAME,(e=>this._onAssetModified(e.detail)))}isModified(){return!!this.editMode&&this._assetInfo&&this._assetInfo.modified}shouldUpdate(e){return console.log(e),this._isReadonly()&&(this.editMode=!1),e.has("ids")&&(this._assetInfo=void 0,this.asset=void 0,this.ids&&1===this.ids.length?super.assetIds=[this.ids[0]]:super.assetIds=void 0),e.has("asset")&&(this._assetInfo=void 0,this.ids=void 0,super.assetIds=void 0,this.asset&&this.loadAssetInfo(this.asset).then((e=>this._assetInfo=e)).catch((e=>{console.debug(e)}))),super.shouldUpdate(e)}updated(e){e.has("asset")&&this._doValidation()}loadAssetInfo(e){return lib_awaiter(this,void 0,void 0,(function*(){if(console.log("loadAssetInfo()",e),!e)throw new Error("Asset has changed");e.attributes||(e.attributes={});const t=!!e.id,s=!t,i=this._getPanelConfig(e);if(!t)return{asset:e,modified:s,viewerConfig:i,attributeTemplateMap:{}};const o=yield getLinkedUsers(e);if(console.log(o),!this.ids||1!=this.ids.length||this.ids[0]!==e.id)throw console.log("Wrong asset id?"),new Error("Asset has changed");let r;if("GroupAsset"===e.type&&(r=yield function getAssetChildren(e,t){return lib_awaiter(this,void 0,void 0,(function*(){let s;try{s=yield core_lib.Ay.rest.api.AssetResource.queryAssets({parents:[{id:e}]})}catch(e){return console.log("Failed to get child assets: "+e),[]}return 200===s.status&&s.data?s.data.filter((e=>e.type===t)):[]}))}(e.id,e.attributes.childAssetType.value)),!this.ids||1!=this.ids.length||this.ids[0]!==e.id)throw console.log("Wrong assetg id 2?"),new Error("Asset has changed");return{asset:e,modified:s,viewerConfig:i,childAssets:r,userAssetLinks:o,attributeTemplateMap:{}}}))}_doValidation(){this.editMode&&this.editor&&(this._validationResults=this.editor.validate())}_onParentChangeClick(){let e;const t=e=>{e.stopPropagation()},s=lit.qy`
            <or-asset-tree id="parent-asset-tree" disableSubscribe readonly .selectedIds="${[]}"
                           @or-asset-tree-request-select="${t}"
                           @or-asset-tree-selection-changed="${t}"></or-asset-tree>`,i=[{actionName:"clear",content:"none",action:()=>{this.dispatchEvent(new OrAssetViewerChangeParentEvent(void 0,this.ids||[]))}},{actionName:"ok",content:"ok",action:()=>{const t=e.shadowRoot.getElementById("parent-asset-tree");let s=1===t.selectedIds.length?t.selectedIds[0]:void 0;this.dispatchEvent(new OrAssetViewerChangeParentEvent(s,this.ids||[]))}},{default:!0,actionName:"cancel",content:"cancel"}];e=(0,or_mwc_dialog.ui)((new or_mwc_dialog.X$).setContent(s).setActions(i).setStyles(lit.qy`
                <style>
                    .mdc-dialog__surface {
                        width: 400px;
                        height: 800px;
                        display: flex;
                        overflow: visible;
                        overflow-x: visible !important;
                        overflow-y: visible !important;
                    }

                    #dialog-content {
                        flex: 1;
                        overflow: visible;
                        min-height: 0;
                        padding: 0;
                    }

                    footer.mdc-dialog__actions {
                        border-top: 1px solid ${(0,lit.iz)(core_lib.Id)};
                    }

                    or-asset-tree {
                        height: 100%;
                    }
                </style>
            `).setHeading(i18next.Ay.t("setParent")).setDismissAction(null))}render(){const e=!(this.asset||this.ids&&0!==this.ids.length);if(!this.asset&&this.ids&&this.ids.length>1)return lit.qy`
                <div class="msg">
                    <div class="multipleAssetsView">
                        <or-translate value="multiAssetSelected" .options="${{assetNbr:this.ids.length}}"></or-translate>
                        <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" label="changeParent" @click="${()=>this._onParentChangeClick()}" outlined></or-mwc-input>
                    </div>
                </div>
            `;if(e)return lit.qy`
                <div class="msg"><or-translate value="noAssetSelected"></or-translate></div>
            `;if(!this._assetInfo)return lit.qy`
                <div class="msg"><or-translate value="loading"></or-translate></div>
            `;if(!this._assetInfo.asset)return lit.qy`
                <div><or-translate value="notFound"></or-translate></div>
            `;const t=this._assetInfo.asset,s=model_lib.u0.getAssetDescriptor(t.type),i=!!this.editMode;let o="",r=[];if(i)o=lit.qy`
                <div id="edit-container">
                    <or-edit-asset-panel id="editor" .asset="${t}"></or-edit-asset-panel>
                </div>
            `,r=this._validationResults.filter((e=>!e.valid||e.metaResults&&e.metaResults.some((e=>!e.valid)))).flatMap((e=>{const t=[];return e.valid||t.push(i18next.Ay.t("validation.invalidAttributeValue",{attrName:e.name})),e.metaResults&&e.metaResults.filter((e=>!e.valid)).forEach((s=>{t.push(i18next.Ay.t("validation.invalidMetaItemValue",{attrName:e.name,metaName:s.name}))})),t}));else{const e=this._assetInfo.viewerConfig;if(e.panels){const t=[],s=[];e.panels.forEach(((i,o)=>{if(!i.hide){const r=o+"",n=i.column||0,a=getPanel(r,i,getPanelContent(r,this._assetInfo,this,e,i))||"";a&&(0==n?t.push(a):s.push(a))}})),o=lit.qy`                
                    <div id="view-container" style="${e.viewerStyles?(0,style_map.W)(e.viewerStyles):""}" @scroll="${this._toggleHeaderShadow}">
                        <div id="left-column" class="panelContainer">
                            ${t}
                        </div>
                        <div id="right-column" class="panelContainer">
                            ${s}
                        </div>
                    </div>`}}return lit.qy`
            <div id="wrapper">
                <div id="asset-header" class=${i?"editmode":""}>
                    <a class="back-navigation" @click="${()=>window.history.back()}">
                        <or-icon icon="chevron-left"></or-icon>
                    </a>
                    <div id="title">
                        <or-icon title="${s&&s.name?s.name:"unset"}" style="--or-icon-fill: ${s&&s.colour?"#"+s.colour:"unset"}" icon="${s&&s.icon?s.icon:model_lib.u0.getAssetDescriptorIcon("ThingAsset")}"></or-icon>
                        ${i?lit.qy`
                                    <or-mwc-input id="name-input" .type="${or_mwc_input.NZ.TEXT}" min="1" max="1023" comfortable required outlined .label="${i18next.Ay.t("name")}" .value="${t.name}" @or-mwc-input-changed="${e=>{t.name=e.detail.value,this._assetInfo.modified=!0,this._doValidation()}}"></or-mwc-input>
                                `:lit.qy`<span>${t.name}</span>`}
                    </div>
                    <div id="right-wrapper" class="mobileHidden">
                        ${0===r.length?t.createdOn?lit.qy`<or-translate id="created-time" class="tabletHidden" value="createdOnWithDate" .options="${{date:new Date(t.createdOn)}}"></or-translate>`:"":lit.qy`<span id="error-wrapper" .title="${r.join("\n")}"><or-icon icon="alert"></or-icon><or-translate class="tabletHidden" value="validation.invalidAsset"></or-translate></span>`}
                        ${i?lit.qy`<or-mwc-input id="save-btn" .disabled="${!this.isModified()}" raised .type="${or_mwc_input.NZ.BUTTON}" label="save" @or-mwc-input-changed="${()=>this._onSaveClicked()}"></or-mwc-input>`:""}
                        ${this._isReadonly()?"":lit.qy`<or-mwc-input id="edit-btn" .disabled="${!this._assetInfo.asset.id}" outlined .type="${or_mwc_input.NZ.BUTTON}" .value="${this.editMode}" .label="${this.editMode?i18next.Ay.t("viewAsset"):i18next.Ay.t("editAsset")}" icon="${this.editMode?"eye":"pencil"}" @or-mwc-input-changed="${()=>this._onEditToggleClicked(!this.editMode)}"></or-mwc-input>
                        `}
                    </div>
                </div>
                ${o}
            </div>
        `}_toggleHeaderShadow(){this.containerElem.scrollTop>0?this.headerElem.classList.add("scrolled"):this.headerElem.classList.remove("scrolled")}_isReadonly(){return this.readonly||!core_lib.Ay.hasRole("write:assets")}_onEditToggleClicked(e){core_lib.J0.dispatchCancellableEvent(this,new OrAssetViewerRequestEditToggleEvent(e)).then((t=>{t.allow?this._doEditToggle(e):this.editBtnElem.value=!e}))}_doEditToggle(e){this.editMode=e,this.dispatchEvent(new OrAssetViewerEditToggleEvent(e))}_onSaveClicked(){this._assetInfo&&this._assetInfo.asset&&core_lib.J0.dispatchCancellableEvent(this,new OrAssetViewerRequestSaveEvent(this._assetInfo.asset)).then((e=>{e.allow&&this._doSave()}))}_doSave(){return lib_awaiter(this,void 0,void 0,(function*(){if(!this._assetInfo)return;const e=this._assetInfo.asset;this.saveBtnElem.disabled=!0,this.wrapperElem.classList.add("saving"),this._saveResult=yield saveAsset(e),this.wrapperElem.classList.remove("saving"),this.saveBtnElem.disabled=!1,this._assetInfo&&this._assetInfo.asset===e&&(this._saveResult.success&&(this._assetInfo.modified=!1,this.asset=void 0,this.ids=[this._saveResult.assetId]),this.dispatchEvent(new OrAssetViewerSaveEvent(this._saveResult)))}))}_onAssetModified(e){this._assetInfo&&(this._assetInfo.modified=!0,this._validationResults=e)}_onEvent(e){var t;const s=this.ids&&this.ids.length>0?this.ids[0]:void 0;if("asset"===e.eventType&&e.asset.id===s||"attribute"===e.eventType&&e.ref.id==s){if("asset"===e.eventType){const i=e.asset;if(!this._assetInfo)return void this.loadAssetInfo(i).then((e=>this._assetInfo=e)).catch((e=>{}));if(i.id!==s)return;if(this.editMode){if(!this._assetInfo.modified||(null===(t=this._saveResult)||void 0===t?void 0:t.assetId)===s)return this._assetInfo=void 0,this._saveResult=void 0,void this.loadAssetInfo(i).then((e=>this._assetInfo=e)).catch((e=>{}));(0,or_mwc_dialog.Am)("assetModified",i18next.Ay.t("assetModifiedMustRefresh")).then((()=>{this._assetInfo=void 0,this.loadAssetInfo(i).then((e=>this._assetInfo=e)).catch((e=>{}))}))}else this._assetInfo=void 0,this.loadAssetInfo(i).then((e=>this._assetInfo=e)).catch((e=>{}))}if("attribute"===e.eventType){if(!this._assetInfo)return;const t=this._assetInfo.asset,s=e,i=s.ref.name;if(t&&t.attributes&&t.attributes[i]){delete this._assetInfo.attributeTemplateMap[i];const e=Object.assign({},t.attributes[i]);if(e.value=s.value,e.timestamp=s.timestamp,t.attributes[i]=e,this.editMode){const e=this.shadowRoot.getElementById("editor");e&&e.attributeUpdated(i)}else this.requestUpdate()}}}}_getPanelConfig(e){const t=Object.assign({},DEFAULT_VIEWER_CONFIG);if(this.config){t.viewerStyles=Object.assign({},t.viewerStyles),t.panels=t.panels?[...t.panels]:[];const s=this.config.assetTypes&&this.config.assetTypes.hasOwnProperty(e.type)?this.config.assetTypes[e.type]:this.config.default;s&&(s.viewerStyles&&Object.assign(t.viewerStyles,s.viewerStyles),s.panels&&(t.panels=s.panels),t.attributeViewProvider=s.attributeViewProvider||(this.config.default?this.config.default.attributeViewProvider:void 0),t.panelViewProvider=s.panelViewProvider||(this.config.default?this.config.default.panelViewProvider:void 0),t.propertyViewProvider=s.propertyViewProvider||(this.config.default?this.config.default.propertyViewProvider:void 0),t.historyConfig=s.historyConfig||this.config.historyConfig)}return t}};lib_decorate([(0,decorators.MZ)({type:Object,reflect:!1})],OrAssetViewer.prototype,"asset",void 0),lib_decorate([(0,decorators.MZ)({type:Array,reflect:!1})],OrAssetViewer.prototype,"ids",void 0),lib_decorate([(0,decorators.MZ)({type:Object})],OrAssetViewer.prototype,"config",void 0),lib_decorate([(0,decorators.MZ)({type:Boolean})],OrAssetViewer.prototype,"editMode",void 0),lib_decorate([(0,decorators.MZ)({type:Boolean})],OrAssetViewer.prototype,"readonly",void 0),lib_decorate([(0,decorators.wk)()],OrAssetViewer.prototype,"_assetInfo",void 0),lib_decorate([(0,decorators.wk)()],OrAssetViewer.prototype,"_validationResults",void 0),lib_decorate([(0,decorators.P)("#wrapper")],OrAssetViewer.prototype,"wrapperElem",void 0),lib_decorate([(0,decorators.P)("#save-btn")],OrAssetViewer.prototype,"saveBtnElem",void 0),lib_decorate([(0,decorators.P)("#edit-btn")],OrAssetViewer.prototype,"editBtnElem",void 0),lib_decorate([(0,decorators.P)("#editor")],OrAssetViewer.prototype,"editor",void 0),lib_decorate([(0,decorators.P)("#asset-header")],OrAssetViewer.prototype,"headerElem",void 0),lib_decorate([(0,decorators.P)("#view-container")],OrAssetViewer.prototype,"containerElem",void 0),OrAssetViewer=lib_decorate([(0,decorators.EM)("or-asset-viewer")],OrAssetViewer)},"../../component/or-attribute-input/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Lr:()=>jsonFormsInputTemplateProvider});var lit=__webpack_require__("../../../node_modules/lit/index.js"),decorators=__webpack_require__("../../../node_modules/lit/decorators.js"),if_defined=__webpack_require__("../../../node_modules/lit/directives/if-defined.js"),until=__webpack_require__("../../../node_modules/lit/directives/until.js"),ref=__webpack_require__("../../../node_modules/lit/directives/ref.js"),lib=__webpack_require__("../../component/or-translate/lib/index.js"),model_lib=__webpack_require__("../../component/model/lib/index.js"),core_lib=__webpack_require__("../../component/core/lib/index.js"),or_mwc_input=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-input.js"),style=__webpack_require__("../../component/or-mwc-components/lib/style.js"),__decorate=function(e,t,o,r){var i,p=arguments.length,a=p<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(a=(p<3?i(a):p>3?i(t,o,a):i(t,o))||a);return p>3&&a&&Object.defineProperty(t,o,a),a};let OrLoadingWrapper=class extends lit.WF{constructor(){super(...arguments),this.loadDom=!0,this.fadeContent=!1,this.loading=!1}static get styles(){return lit.AH`
            :host {
                display: block;
            }
            
            .hidden {
                display: none;
            }
            
            .faded {
                opacity: 0.5;
            }
            
            #wrapper {
                position: relative;
            }
            
            #loader {
                position: absolute;
                width: 100%;
                height: 100%;
            }
        `}render(){return lit.qy`
            <div id="wrapper">
                ${this.loading?lit.qy`<div id="loader">LOADING</div>`:""}
                ${this.loadDom||!this.loading?lit.qy`
                    <div id="content-wrapper" class="${this.loading?this.fadeContent?"faded":"hidden":""}">
                        <slot></slot>
                        ${this.content||""}
                    </div>`:""}
            </div>
        `}};__decorate([(0,decorators.MZ)({type:Number})],OrLoadingWrapper.prototype,"loadingHeight",void 0),__decorate([(0,decorators.MZ)({type:Boolean})],OrLoadingWrapper.prototype,"loadDom",void 0),__decorate([(0,decorators.MZ)({type:Boolean})],OrLoadingWrapper.prototype,"fadeContent",void 0),__decorate([(0,decorators.MZ)({type:Boolean})],OrLoadingWrapper.prototype,"loading",void 0),__decorate([(0,decorators.MZ)({type:Object,attribute:!1})],OrLoadingWrapper.prototype,"content",void 0),OrLoadingWrapper=__decorate([(0,decorators.EM)("or-loading-wrapper")],OrLoadingWrapper);var or_map_lib=__webpack_require__("../../component/or-map/lib/index.js"),or_json_forms_lib=__webpack_require__("../../component/or-json-forms/lib/index.js"),jsonforms_core_esm=__webpack_require__("../../../node_modules/@jsonforms/core/lib/jsonforms-core.esm.js");let agents,loadingPromise,subscribed=!1;function loadAgents(){return agents?Promise.resolve(agents):loadingPromise||(subscribed||(core_lib.Ay.addListener((e=>{e===core_lib.m0.DISPLAY_REALM_CHANGED&&(agents=void 0,loadingPromise=void 0)})),core_lib.Ay.events.subscribeAssetEvents(void 0,!1,(e=>{e.asset&&e.asset.type.endsWith("Agent")&&(agents=void 0,loadingPromise=void 0)})),subscribed=!0),loadingPromise=core_lib.Ay.rest.api.AssetResource.queryAssets({realm:{name:core_lib.Ay.displayRealm},types:["Agent"],select:{attributes:[]}}).then((e=>e.data)).then((e=>(agents=e,e))),loadingPromise)}const agentIdRendererRegistryEntry={tester:(0,jsonforms_core_esm.Hc7)(6,(0,jsonforms_core_esm.Uo6)((0,jsonforms_core_esm.LqE)("Control"),(0,jsonforms_core_esm.owq)("or-agent-id"))),renderer:(e,t)=>{t=Object.assign(Object.assign(Object.assign({},t),(0,jsonforms_core_esm.kOB)({jsonforms:Object.assign({},e)},t)),(0,jsonforms_core_esm.XGy)(e.dispatch));const r=loadAgents().then((e=>{const r=e.map((e=>[e.id,e.name+" ("+e.id+")"]));return lit.qy`
            <or-mwc-input .label="${lib.MR.t("agentId")}" required class="agent-id-picker" @or-mwc-input-changed="${r=>{return n=e.find((e=>e.id===r.detail.value)),void t.handleChange(t.path,n?n.id:void 0);var n}}" type="${or_mwc_input.NZ.SELECT}" .value="${t.data}" .placeholder="${lib.MR.t("selectAgent")}" .options="${r}"></or-mwc-input>
        `})),n=lit.qy`
        <style>
            .agent-id-picker {
                min-width: 300px;
                max-width: 600px;
                width: 100%;
            }
        </style>
        ${(0,until.T)(r,lit.qy`<or-mwc-input class="agent-id-picker" .type="${or_mwc_input.NZ.SELECT}"></or-mwc-input>`)}
        `;return(0,or_json_forms_lib.iM)(n,void 0)}};var lib_decorate=function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o},__awaiter=function(e,t,i,r){return new(i||(i=Promise))((function(n,a){function o(e){try{d(r.next(e))}catch(e){a(e)}}function s(e){try{d(r.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,s)}d((r=r.apply(e,t||[])).next())}))};class OrAttributeInputChangedEvent extends CustomEvent{constructor(e,t){super(OrAttributeInputChangedEvent.NAME,{detail:{value:e,previousValue:t},bubbles:!0,composed:!0})}}OrAttributeInputChangedEvent.NAME="or-attribute-input-changed";const jsonFormsAttributeRenderers=[...or_json_forms_lib.wj,agentIdRendererRegistryEntry],jsonFormsInputTemplateProvider=e=>(t,i,r,n,a,o)=>{const s=!(!o||!o.disabled),d=!(!o||!o.readonly),p=o.label;if("agentLink"===n.name){const e={type:"Control",scope:"#"};let t;const i=(0,ref._)(),r=(0,ref._)();let n,o=[],l=!1;const u=e=>{if(!l)return;const t=e.data;if(t){const e=o.find((e=>e.id===t.id));if(e){const i=model_lib.u0.getAssetDescriptor(e.type);i&&(t.type=i.agentLinkType)}}core_lib.J0.objectsEqual(t,n)||(n=t,a({value:t}))},c=e=>__awaiter(void 0,void 0,void 0,(function*(){if(l||(n=e),l=!0,t||(t=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"Agent Link","oneOf":[{"$ref":"#/definitions/SNMPAgentLink"},{"$ref":"#/definitions/HTTPAgentLink"},{"$ref":"#/definitions/DefaultAgentLink"},{"$ref":"#/definitions/ZWaveAgentLink"},{"$ref":"#/definitions/WebsocketAgentLink"},{"$ref":"#/definitions/StorageSimulatorAgentLink"},{"$ref":"#/definitions/MockAgentLink"},{"$ref":"#/definitions/BluetoothMeshAgentLink"},{"$ref":"#/definitions/MQTTAgentLink"},{"$ref":"#/definitions/KNXAgentLink"},{"$ref":"#/definitions/SimulatorAgentLink"},{"$ref":"#/definitions/VelbusAgentLink"}],"definitions":{"SNMPAgentLink":{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["SNMPAgentLink"],"default":"SNMPAgentLink"},"id":{"type":"string","format":"or-agent-id"},"valueFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"Defines ValueFilters to apply to an incoming value before it is written to a protocol linked attribute; this is particularly useful for generic protocols. The message should pass through the filters in array order"},"valueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValue":{"type":"string","format":"or-multiline","description":"String to be used for attribute writes and can contain \'{$value}\' placeholders to allow the written value to be injected into the string or to even hardcode the value written to the protocol (particularly useful for executable attributes)"},"messageMatchPredicate":{"oneOf":[{"$ref":"#/definitions/StringPredicate"},{"$ref":"#/definitions/BooleanPredicate"},{"$ref":"#/definitions/DateTimePredicate"},{"$ref":"#/definitions/NumberPredicate"},{"$ref":"#/definitions/RadialGeofencePredicate"},{"$ref":"#/definitions/RectangularGeofencePredicate"},{"$ref":"#/definitions/ArrayPredicate"},{"$ref":"#/definitions/ValueAnyPredicate"},{"$ref":"#/definitions/ValueEmptyPredicate"},{"$ref":"#/definitions/CalendarEventPredicate"}],"description":"The predicate to apply to incoming messages to determine if the message is intended for the linked attribute; the value used in the predicate can be filtered using the message match filters. This must be defined to enable attributes to be updated by the linked agent."},"messageMatchFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"ValueFilters to apply to incoming messages prior to comparison with the messageMatchPredicate"},"updateOnWrite":{"type":"boolean","description":"Don\'t expect a response from the protocol just update the attribute immediately on write"},"oid":{"type":"string"}},"title":"SNMPAgentLink","required":["type","oid"]},"regex":{"type":"object","additionalProperties":true,"title":"Regex","properties":{"type":{"type":"string","enum":["regex"],"default":"regex"},"pattern":{"type":"string"},"matchGroup":{"type":"integer"},"matchIndex":{"type":"integer"}},"required":["type"]},"substring":{"type":"object","additionalProperties":true,"title":"Substring","properties":{"type":{"type":"string","enum":["substring"],"default":"substring"},"beginIndex":{"type":"integer"},"endIndex":{"type":"integer"}},"required":["type","beginIndex"]},"jsonPath":{"type":"object","additionalProperties":true,"title":"JSON Path","properties":{"type":{"type":"string","enum":["jsonPath"],"default":"jsonPath"},"path":{"type":"string"},"returnFirst":{"type":"boolean"},"returnLast":{"type":"boolean"}},"required":["type","path","returnFirst","returnLast"]},"PatternPropertiesSimpleKeyAnyType":{"type":"object","additionalProperties":true,"patternProperties":{"^[a-zA-Z][a-zA-Z0-9]*":{"type":["null","number","integer","boolean","string","array","object"]}},"properties":{}},"StringPredicate":{"type":"object","additionalProperties":true,"description":"Predicate for string values; will match based on configured options.","properties":{"predicateType":{"type":"string","enum":["string"],"default":"string"},"match":{"type":"string","enum":["EXACT","BEGIN","END","CONTAINS"]},"caseSensitive":{"type":"boolean"},"value":{"type":"string"},"negate":{"type":"boolean"}},"title":"string","required":["predicateType","caseSensitive","negate"]},"BooleanPredicate":{"type":"object","additionalProperties":true,"description":"Predicate for boolean values; will evaluate the value as a boolean and match against this predicates value, any value that is not a boolean will not match","properties":{"predicateType":{"type":"string","enum":["boolean"],"default":"boolean"},"value":{"type":"boolean"}},"title":"boolean","required":["predicateType","value"]},"DateTimePredicate":{"type":"object","additionalProperties":true,"description":"Predicate for date time values; provided values should be valid ISO 8601 datetime strings (e.g. yyyy-MM-dd\'T\'HH:mm:ssZ or yyyy-MM-dd\'T\'HH:mm:ss±HH:mm), offset and time are optional, if no offset information is supplied then UTC is assumed.","properties":{"predicateType":{"type":"string","enum":["datetime"],"default":"datetime"},"value":{"type":"string"},"rangeValue":{"type":"string"},"operator":{"type":"string","enum":["EQUALS","GREATER_THAN","GREATER_EQUALS","LESS_THAN","LESS_EQUALS","BETWEEN"]},"negate":{"type":"boolean"}},"title":"datetime","required":["predicateType","negate"]},"NumberPredicate":{"type":"object","additionalProperties":true,"description":"Predicate for number values; will match based on configured options.","properties":{"predicateType":{"type":"string","enum":["number"],"default":"number"},"value":{"type":"number"},"rangeValue":{"type":"number"},"operator":{"type":"string","enum":["EQUALS","GREATER_THAN","GREATER_EQUALS","LESS_THAN","LESS_EQUALS","BETWEEN"]},"negate":{"type":"boolean"}},"title":"number","required":["predicateType","negate"]},"RadialGeofencePredicate":{"type":"object","additionalProperties":true,"description":"Predicate for GEO JSON point values; will return true if the point is within the specified radius of the specified latitude and longitude unless negated.","title":"Radial geofence","properties":{"predicateType":{"type":"string","enum":["radial"],"default":"radial"},"radius":{"type":"integer"},"lat":{"type":"number"},"lng":{"type":"number"},"negated":{"type":"boolean"}},"required":["predicateType","radius","lat","lng","negated"]},"RectangularGeofencePredicate":{"type":"object","additionalProperties":true,"description":"Predicate for GEO JSON point values; will return true if the point is within the specified rectangle specified as latitude and longitude values of two corners unless negated.","title":"Rectangular geofence","properties":{"predicateType":{"type":"string","enum":["rect"],"default":"rect"},"latMin":{"type":"number"},"lngMin":{"type":"number"},"latMax":{"type":"number"},"lngMax":{"type":"number"},"negated":{"type":"boolean"}},"required":["predicateType","latMin","lngMin","latMax","lngMax","negated"]},"ArrayPredicate":{"type":"object","additionalProperties":true,"description":"Predicate for array values; will match based on configured options.","properties":{"predicateType":{"type":"string","enum":["array"],"default":"array"},"value":{"$ref":"#/definitions/AnyType"},"index":{"type":"integer"},"lengthEquals":{"type":"integer"},"lengthGreaterThan":{"type":"integer"},"lengthLessThan":{"type":"integer"},"negated":{"type":"boolean"}},"title":"array","required":["predicateType","negated"]},"AnyType":{"type":["null","number","integer","boolean","string","array","object"],"additionalProperties":true,"properties":{}},"ValueAnyPredicate":{"type":"object","additionalProperties":true,"description":"Predicate that matches any value including null.","title":"Any value","properties":{"predicateType":{"type":"string","enum":["value-any"],"default":"value-any"}},"required":["predicateType"]},"ValueEmptyPredicate":{"type":"object","additionalProperties":true,"description":"Predicate that matches any empty/null value; unless negated.","title":"Empty value","properties":{"predicateType":{"type":"string","enum":["value-empty"],"default":"value-empty"},"negate":{"type":"boolean"}},"required":["predicateType","negate"]},"CalendarEventPredicate":{"type":"object","additionalProperties":true,"description":"Predicate for calendar event values; will match based on whether the calendar event is active for the specified time.","title":"Calendar","properties":{"predicateType":{"type":"string","enum":["calendar-event"],"default":"calendar-event"},"timestamp":{"type":"integer","format":"utc-millisec"}},"required":["predicateType"]},"HTTPAgentLink":{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["HTTPAgentLink"],"default":"HTTPAgentLink"},"id":{"type":"string","format":"or-agent-id"},"valueFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"Defines ValueFilters to apply to an incoming value before it is written to a protocol linked attribute; this is particularly useful for generic protocols. The message should pass through the filters in array order"},"valueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValue":{"type":"string","format":"or-multiline","description":"String to be used for attribute writes and can contain \'{$value}\' placeholders to allow the written value to be injected into the string or to even hardcode the value written to the protocol (particularly useful for executable attributes)"},"messageMatchPredicate":{"oneOf":[{"$ref":"#/definitions/StringPredicate"},{"$ref":"#/definitions/BooleanPredicate"},{"$ref":"#/definitions/DateTimePredicate"},{"$ref":"#/definitions/NumberPredicate"},{"$ref":"#/definitions/RadialGeofencePredicate"},{"$ref":"#/definitions/RectangularGeofencePredicate"},{"$ref":"#/definitions/ArrayPredicate"},{"$ref":"#/definitions/ValueAnyPredicate"},{"$ref":"#/definitions/ValueEmptyPredicate"},{"$ref":"#/definitions/CalendarEventPredicate"}],"description":"The predicate to apply to incoming messages to determine if the message is intended for the linked attribute; the value used in the predicate can be filtered using the message match filters. This must be defined to enable attributes to be updated by the linked agent."},"messageMatchFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"ValueFilters to apply to incoming messages prior to comparison with the messageMatchPredicate"},"updateOnWrite":{"type":"boolean","description":"Don\'t expect a response from the protocol just update the attribute immediately on write"},"headers":{"type":"object","additionalProperties":{"type":"array","items":{"type":"string"}},"description":"A JSON object of headers to be added to HTTP request; the key represents the name of the header and for each string value supplied a new header will be added with the key name and specified string value"},"queryParameters":{"type":"object","additionalProperties":{"type":"array","items":{"type":"string"}},"description":"A JSON object of query parameters to be added to HTTP request URL; the key represents the name of the query parameter and for each string value supplied a new query parameter will be added with the key name and specified string value (e.g. \'https://..../?test=1&test=2\')"},"pollingMillis":{"type":"integer","description":"Indicates that this HTTP request is used to update the linked attribute; this value indicates how frequently the HTTP request is made in order to update the linked attribute value"},"pagingMode":{"type":"boolean","description":"Indicates that the HTTP server supports pagination using the standard Link header mechanism"},"path":{"type":"string","description":"The URL path to append to the agents Base URL when making requests for this linked attribute"},"method":{"type":"string","enum":["GET","POST","PUT","DELETE","OPTIONS","PATCH"],"description":"The HTTP method to use when making requests for this linked attribute"},"contentType":{"type":"string","description":"The content type header value to use when making requests for this linked attribute (shortcut alternative to using headers parameter)"},"pollingAttribute":{"type":"string","description":"Allows the polled response to be written to another attribute with the specified name on the same asset as the linked attribute"},"messageConvertBinary":{"type":"boolean","description":"Indicates that the HTTP response is binary and should be converted to binary string representation"},"messageConvertHex":{"type":"boolean","description":"Indicates that the HTTP response is binary and should be converted to hexidecimal string representation"}},"title":"HTTPAgentLink","required":["type","messageConvertBinary","messageConvertHex"]},"DefaultAgentLink":{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["DefaultAgentLink"],"default":"DefaultAgentLink"},"id":{"type":"string","format":"or-agent-id"},"valueFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"Defines ValueFilters to apply to an incoming value before it is written to a protocol linked attribute; this is particularly useful for generic protocols. The message should pass through the filters in array order"},"valueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValue":{"type":"string","format":"or-multiline","description":"String to be used for attribute writes and can contain \'{$value}\' placeholders to allow the written value to be injected into the string or to even hardcode the value written to the protocol (particularly useful for executable attributes)"},"messageMatchPredicate":{"oneOf":[{"$ref":"#/definitions/StringPredicate"},{"$ref":"#/definitions/BooleanPredicate"},{"$ref":"#/definitions/DateTimePredicate"},{"$ref":"#/definitions/NumberPredicate"},{"$ref":"#/definitions/RadialGeofencePredicate"},{"$ref":"#/definitions/RectangularGeofencePredicate"},{"$ref":"#/definitions/ArrayPredicate"},{"$ref":"#/definitions/ValueAnyPredicate"},{"$ref":"#/definitions/ValueEmptyPredicate"},{"$ref":"#/definitions/CalendarEventPredicate"}],"description":"The predicate to apply to incoming messages to determine if the message is intended for the linked attribute; the value used in the predicate can be filtered using the message match filters. This must be defined to enable attributes to be updated by the linked agent."},"messageMatchFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"ValueFilters to apply to incoming messages prior to comparison with the messageMatchPredicate"},"updateOnWrite":{"type":"boolean","description":"Don\'t expect a response from the protocol just update the attribute immediately on write"}},"title":"DefaultAgentLink","required":["type"]},"ZWaveAgentLink":{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["ZWaveAgentLink"],"default":"ZWaveAgentLink"},"id":{"type":"string","format":"or-agent-id"},"valueFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"Defines ValueFilters to apply to an incoming value before it is written to a protocol linked attribute; this is particularly useful for generic protocols. The message should pass through the filters in array order"},"valueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValue":{"type":"string","format":"or-multiline","description":"String to be used for attribute writes and can contain \'{$value}\' placeholders to allow the written value to be injected into the string or to even hardcode the value written to the protocol (particularly useful for executable attributes)"},"messageMatchPredicate":{"oneOf":[{"$ref":"#/definitions/StringPredicate"},{"$ref":"#/definitions/BooleanPredicate"},{"$ref":"#/definitions/DateTimePredicate"},{"$ref":"#/definitions/NumberPredicate"},{"$ref":"#/definitions/RadialGeofencePredicate"},{"$ref":"#/definitions/RectangularGeofencePredicate"},{"$ref":"#/definitions/ArrayPredicate"},{"$ref":"#/definitions/ValueAnyPredicate"},{"$ref":"#/definitions/ValueEmptyPredicate"},{"$ref":"#/definitions/CalendarEventPredicate"}],"description":"The predicate to apply to incoming messages to determine if the message is intended for the linked attribute; the value used in the predicate can be filtered using the message match filters. This must be defined to enable attributes to be updated by the linked agent."},"messageMatchFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"ValueFilters to apply to incoming messages prior to comparison with the messageMatchPredicate"},"updateOnWrite":{"type":"boolean","description":"Don\'t expect a response from the protocol just update the attribute immediately on write"},"deviceNodeId":{"type":"integer"},"deviceEndpoint":{"type":"integer"},"deviceValue":{"type":"string"}},"title":"ZWaveAgentLink","required":["type"]},"WebsocketAgentLink":{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["WebsocketAgentLink"],"default":"WebsocketAgentLink"},"id":{"type":"string","format":"or-agent-id"},"valueFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"Defines ValueFilters to apply to an incoming value before it is written to a protocol linked attribute; this is particularly useful for generic protocols. The message should pass through the filters in array order"},"valueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValue":{"type":"string","format":"or-multiline","description":"String to be used for attribute writes and can contain \'{$value}\' placeholders to allow the written value to be injected into the string or to even hardcode the value written to the protocol (particularly useful for executable attributes)"},"messageMatchPredicate":{"oneOf":[{"$ref":"#/definitions/StringPredicate"},{"$ref":"#/definitions/BooleanPredicate"},{"$ref":"#/definitions/DateTimePredicate"},{"$ref":"#/definitions/NumberPredicate"},{"$ref":"#/definitions/RadialGeofencePredicate"},{"$ref":"#/definitions/RectangularGeofencePredicate"},{"$ref":"#/definitions/ArrayPredicate"},{"$ref":"#/definitions/ValueAnyPredicate"},{"$ref":"#/definitions/ValueEmptyPredicate"},{"$ref":"#/definitions/CalendarEventPredicate"}],"description":"The predicate to apply to incoming messages to determine if the message is intended for the linked attribute; the value used in the predicate can be filtered using the message match filters. This must be defined to enable attributes to be updated by the linked agent."},"messageMatchFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"ValueFilters to apply to incoming messages prior to comparison with the messageMatchPredicate"},"updateOnWrite":{"type":"boolean","description":"Don\'t expect a response from the protocol just update the attribute immediately on write"},"websocketSubscriptions":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/websocket"},{"$ref":"#/definitions/http"}]}}},"title":"WebsocketAgentLink","required":["type"]},"websocket":{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["websocket"],"default":"websocket"},"body":{"$ref":"#/definitions/AnyType"}},"title":"websocket","required":["type"]},"http":{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["http"],"default":"http"},"body":{"$ref":"#/definitions/AnyType"},"method":{"type":"string","enum":["GET","PUT","POST"]},"contentType":{"type":"string"},"headers":{"type":"object","additionalProperties":{"type":"array","items":{"type":"string"}}},"uri":{"type":"string"}},"title":"http","required":["type"]},"StorageSimulatorAgentLink":{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["StorageSimulatorAgentLink"],"default":"StorageSimulatorAgentLink"},"id":{"type":"string","format":"or-agent-id"},"valueFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"Defines ValueFilters to apply to an incoming value before it is written to a protocol linked attribute; this is particularly useful for generic protocols. The message should pass through the filters in array order"},"valueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValue":{"type":"string","format":"or-multiline","description":"String to be used for attribute writes and can contain \'{$value}\' placeholders to allow the written value to be injected into the string or to even hardcode the value written to the protocol (particularly useful for executable attributes)"},"messageMatchPredicate":{"oneOf":[{"$ref":"#/definitions/StringPredicate"},{"$ref":"#/definitions/BooleanPredicate"},{"$ref":"#/definitions/DateTimePredicate"},{"$ref":"#/definitions/NumberPredicate"},{"$ref":"#/definitions/RadialGeofencePredicate"},{"$ref":"#/definitions/RectangularGeofencePredicate"},{"$ref":"#/definitions/ArrayPredicate"},{"$ref":"#/definitions/ValueAnyPredicate"},{"$ref":"#/definitions/ValueEmptyPredicate"},{"$ref":"#/definitions/CalendarEventPredicate"}],"description":"The predicate to apply to incoming messages to determine if the message is intended for the linked attribute; the value used in the predicate can be filtered using the message match filters. This must be defined to enable attributes to be updated by the linked agent."},"messageMatchFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"ValueFilters to apply to incoming messages prior to comparison with the messageMatchPredicate"},"updateOnWrite":{"type":"boolean","description":"Don\'t expect a response from the protocol just update the attribute immediately on write"}},"title":"StorageSimulatorAgentLink","required":["type"]},"MockAgentLink":{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["MockAgentLink"],"default":"MockAgentLink"},"id":{"type":"string","format":"or-agent-id"},"valueFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"Defines ValueFilters to apply to an incoming value before it is written to a protocol linked attribute; this is particularly useful for generic protocols. The message should pass through the filters in array order"},"valueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValue":{"type":"string","format":"or-multiline","description":"String to be used for attribute writes and can contain \'{$value}\' placeholders to allow the written value to be injected into the string or to even hardcode the value written to the protocol (particularly useful for executable attributes)"},"messageMatchPredicate":{"oneOf":[{"$ref":"#/definitions/StringPredicate"},{"$ref":"#/definitions/BooleanPredicate"},{"$ref":"#/definitions/DateTimePredicate"},{"$ref":"#/definitions/NumberPredicate"},{"$ref":"#/definitions/RadialGeofencePredicate"},{"$ref":"#/definitions/RectangularGeofencePredicate"},{"$ref":"#/definitions/ArrayPredicate"},{"$ref":"#/definitions/ValueAnyPredicate"},{"$ref":"#/definitions/ValueEmptyPredicate"},{"$ref":"#/definitions/CalendarEventPredicate"}],"description":"The predicate to apply to incoming messages to determine if the message is intended for the linked attribute; the value used in the predicate can be filtered using the message match filters. This must be defined to enable attributes to be updated by the linked agent."},"messageMatchFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"ValueFilters to apply to incoming messages prior to comparison with the messageMatchPredicate"},"updateOnWrite":{"type":"boolean","description":"Don\'t expect a response from the protocol just update the attribute immediately on write"},"requiredValue":{"type":"string"}},"title":"MockAgentLink","required":["type"]},"BluetoothMeshAgentLink":{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["BluetoothMeshAgentLink"],"default":"BluetoothMeshAgentLink"},"id":{"type":"string","format":"or-agent-id"},"valueFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"Defines ValueFilters to apply to an incoming value before it is written to a protocol linked attribute; this is particularly useful for generic protocols. The message should pass through the filters in array order"},"valueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValue":{"type":"string","format":"or-multiline","description":"String to be used for attribute writes and can contain \'{$value}\' placeholders to allow the written value to be injected into the string or to even hardcode the value written to the protocol (particularly useful for executable attributes)"},"messageMatchPredicate":{"oneOf":[{"$ref":"#/definitions/StringPredicate"},{"$ref":"#/definitions/BooleanPredicate"},{"$ref":"#/definitions/DateTimePredicate"},{"$ref":"#/definitions/NumberPredicate"},{"$ref":"#/definitions/RadialGeofencePredicate"},{"$ref":"#/definitions/RectangularGeofencePredicate"},{"$ref":"#/definitions/ArrayPredicate"},{"$ref":"#/definitions/ValueAnyPredicate"},{"$ref":"#/definitions/ValueEmptyPredicate"},{"$ref":"#/definitions/CalendarEventPredicate"}],"description":"The predicate to apply to incoming messages to determine if the message is intended for the linked attribute; the value used in the predicate can be filtered using the message match filters. This must be defined to enable attributes to be updated by the linked agent."},"messageMatchFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"ValueFilters to apply to incoming messages prior to comparison with the messageMatchPredicate"},"updateOnWrite":{"type":"boolean","description":"Don\'t expect a response from the protocol just update the attribute immediately on write"},"appKeyIndex":{"type":"integer","minimum":0,"maximum":2147483647},"address":{"type":"string","pattern":"^([0-9A-Fa-f]{4})$"},"modelName":{"type":"string","pattern":"^.*\\\\S+.*$","minLength":1}},"title":"BluetoothMeshAgentLink","required":["type","appKeyIndex","modelName"]},"MQTTAgentLink":{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["MQTTAgentLink"],"default":"MQTTAgentLink"},"id":{"type":"string","format":"or-agent-id"},"valueFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"Defines ValueFilters to apply to an incoming value before it is written to a protocol linked attribute; this is particularly useful for generic protocols. The message should pass through the filters in array order"},"valueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValue":{"type":"string","format":"or-multiline","description":"String to be used for attribute writes and can contain \'{$value}\' placeholders to allow the written value to be injected into the string or to even hardcode the value written to the protocol (particularly useful for executable attributes)"},"messageMatchPredicate":{"oneOf":[{"$ref":"#/definitions/StringPredicate"},{"$ref":"#/definitions/BooleanPredicate"},{"$ref":"#/definitions/DateTimePredicate"},{"$ref":"#/definitions/NumberPredicate"},{"$ref":"#/definitions/RadialGeofencePredicate"},{"$ref":"#/definitions/RectangularGeofencePredicate"},{"$ref":"#/definitions/ArrayPredicate"},{"$ref":"#/definitions/ValueAnyPredicate"},{"$ref":"#/definitions/ValueEmptyPredicate"},{"$ref":"#/definitions/CalendarEventPredicate"}],"description":"The predicate to apply to incoming messages to determine if the message is intended for the linked attribute; the value used in the predicate can be filtered using the message match filters. This must be defined to enable attributes to be updated by the linked agent."},"messageMatchFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"ValueFilters to apply to incoming messages prior to comparison with the messageMatchPredicate"},"updateOnWrite":{"type":"boolean","description":"Don\'t expect a response from the protocol just update the attribute immediately on write"},"subscriptionTopic":{"type":"string"},"publishTopic":{"type":"string"}},"title":"MQTTAgentLink","required":["type"]},"KNXAgentLink":{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["KNXAgentLink"],"default":"KNXAgentLink"},"id":{"type":"string","format":"or-agent-id"},"valueFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"Defines ValueFilters to apply to an incoming value before it is written to a protocol linked attribute; this is particularly useful for generic protocols. The message should pass through the filters in array order"},"valueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValue":{"type":"string","format":"or-multiline","description":"String to be used for attribute writes and can contain \'{$value}\' placeholders to allow the written value to be injected into the string or to even hardcode the value written to the protocol (particularly useful for executable attributes)"},"messageMatchPredicate":{"oneOf":[{"$ref":"#/definitions/StringPredicate"},{"$ref":"#/definitions/BooleanPredicate"},{"$ref":"#/definitions/DateTimePredicate"},{"$ref":"#/definitions/NumberPredicate"},{"$ref":"#/definitions/RadialGeofencePredicate"},{"$ref":"#/definitions/RectangularGeofencePredicate"},{"$ref":"#/definitions/ArrayPredicate"},{"$ref":"#/definitions/ValueAnyPredicate"},{"$ref":"#/definitions/ValueEmptyPredicate"},{"$ref":"#/definitions/CalendarEventPredicate"}],"description":"The predicate to apply to incoming messages to determine if the message is intended for the linked attribute; the value used in the predicate can be filtered using the message match filters. This must be defined to enable attributes to be updated by the linked agent."},"messageMatchFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"ValueFilters to apply to incoming messages prior to comparison with the messageMatchPredicate"},"updateOnWrite":{"type":"boolean","description":"Don\'t expect a response from the protocol just update the attribute immediately on write"},"dpt":{"type":"string","pattern":"^\\\\d{1,3}\\\\.\\\\d{1,3}$"},"actionGroupAddress":{"type":"string","pattern":"^\\\\d{1,3}/\\\\d{1,3}/\\\\d{1,3}$"},"statusGroupAddress":{"type":"string","pattern":"^\\\\d{1,3}/\\\\d{1,3}/\\\\d{1,3}$"}},"title":"KNXAgentLink","required":["type","dpt"]},"SimulatorAgentLink":{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["SimulatorAgentLink"],"default":"SimulatorAgentLink"},"id":{"type":"string","format":"or-agent-id"},"valueFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"Defines ValueFilters to apply to an incoming value before it is written to a protocol linked attribute; this is particularly useful for generic protocols. The message should pass through the filters in array order"},"valueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValue":{"type":"string","format":"or-multiline","description":"String to be used for attribute writes and can contain \'{$value}\' placeholders to allow the written value to be injected into the string or to even hardcode the value written to the protocol (particularly useful for executable attributes)"},"messageMatchPredicate":{"oneOf":[{"$ref":"#/definitions/StringPredicate"},{"$ref":"#/definitions/BooleanPredicate"},{"$ref":"#/definitions/DateTimePredicate"},{"$ref":"#/definitions/NumberPredicate"},{"$ref":"#/definitions/RadialGeofencePredicate"},{"$ref":"#/definitions/RectangularGeofencePredicate"},{"$ref":"#/definitions/ArrayPredicate"},{"$ref":"#/definitions/ValueAnyPredicate"},{"$ref":"#/definitions/ValueEmptyPredicate"},{"$ref":"#/definitions/CalendarEventPredicate"}],"description":"The predicate to apply to incoming messages to determine if the message is intended for the linked attribute; the value used in the predicate can be filtered using the message match filters. This must be defined to enable attributes to be updated by the linked agent."},"messageMatchFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"ValueFilters to apply to incoming messages prior to comparison with the messageMatchPredicate"},"updateOnWrite":{"type":"boolean","description":"Don\'t expect a response from the protocol just update the attribute immediately on write"},"replayData":{"type":"array","items":{"$ref":"#/definitions/SimulatorReplayDatapoint"},"description":"Used to store 24h dataset of values that should be replayed (i.e. written to the linked attribute) in a continuous loop."}},"title":"SimulatorAgentLink","required":["type"]},"SimulatorReplayDatapoint":{"type":"object","additionalProperties":true,"properties":{"timestamp":{"type":"integer"},"value":{"type":["null","number","integer","boolean","array","object","string"]}},"title":"Data point","required":["timestamp", "value"]},"VelbusAgentLink":{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["VelbusAgentLink"],"default":"VelbusAgentLink"},"id":{"type":"string","format":"or-agent-id"},"deviceAddress":{"type":"integer","minimum":1,"maximum":255},"deviceValueLink":{"type":"string","pattern":"^.*\\\\S+.*$","minLength":1},"valueFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"Defines ValueFilters to apply to an incoming value before it is written to a protocol linked attribute; this is particularly useful for generic protocols. The message should pass through the filters in array order"},"valueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValueConverter":{"type":"object","patternProperties":{".+":{"type":["null","number","integer","boolean","string","array","object"]}}},"writeValue":{"type":"string","format":"or-multiline","description":"String to be used for attribute writes and can contain \'{$value}\' placeholders to allow the written value to be injected into the string or to even hardcode the value written to the protocol (particularly useful for executable attributes)"},"messageMatchPredicate":{"oneOf":[{"$ref":"#/definitions/StringPredicate"},{"$ref":"#/definitions/BooleanPredicate"},{"$ref":"#/definitions/DateTimePredicate"},{"$ref":"#/definitions/NumberPredicate"},{"$ref":"#/definitions/RadialGeofencePredicate"},{"$ref":"#/definitions/RectangularGeofencePredicate"},{"$ref":"#/definitions/ArrayPredicate"},{"$ref":"#/definitions/ValueAnyPredicate"},{"$ref":"#/definitions/ValueEmptyPredicate"},{"$ref":"#/definitions/CalendarEventPredicate"}],"description":"The predicate to apply to incoming messages to determine if the message is intended for the linked attribute; the value used in the predicate can be filtered using the message match filters. This must be defined to enable attributes to be updated by the linked agent."},"messageMatchFilters":{"type":"array","items":{"oneOf":[{"$ref":"#/definitions/regex"},{"$ref":"#/definitions/substring"},{"$ref":"#/definitions/jsonPath"}]},"description":"ValueFilters to apply to incoming messages prior to comparison with the messageMatchPredicate"},"updateOnWrite":{"type":"boolean","description":"Don\'t expect a response from the protocol just update the attribute immediately on write"}},"title":"VelbusAgentLink","required":["type","deviceAddress","deviceValueLink"]}}}')),o=yield loadAgents(),o){if(e&&(e.id?o.find((t=>t.id===e.id))||(console.warn("Agent link: linked agent could not be found"),e.id=""):e.id=""),i.value&&r.value){const n=i.value;n.schema=t,n.data=e,r.value.loading=!1}}else console.warn("Failed to load agents for agent link")}));return{templateFunction:(n,a,o,l,f,h)=>(n||(n={id:"",type:"DefaultAgentLink"}),window.setTimeout((()=>c(n)),0),lit.qy`
                <style>
                    .disabled {
                        opacity: 0.5;
                        pointer-events: none;
                    }
                    or-loading-wrapper {
                        width: 100%;
                    }
                </style>
                <or-loading-wrapper ${(0,ref.K)(r)} .loading="${!0}">
                    <or-json-forms .renderers="${jsonFormsAttributeRenderers}" ${(0,ref.K)(i)}
                                   .disabled="${s}" .readonly="${d}" .label="${p}"
                                   .schema="${t}" label="Agent link" .uischema="${e}" .onChange="${u}"></or-json-forms>
                </or-loading-wrapper>
            `),supportsHelperText:!1,supportsLabel:!1,supportsSendButton:!1,validator:()=>!!i.value&&i.value.checkValidity()}}return e};let OrAttributeInput=class extends((0,core_lib.B1)(core_lib.Ay)((0,lib.Tl)(lib.MR)(lit.WF))){constructor(){super(...arguments),this.disableSubscribe=!1,this.disableWrite=!1,this.compact=!1,this.comfortable=!1,this.resizeVertical=!1,this.writeTimeout=5e3,this._requestFocus=!1,this._sendError=!1,this.langChangedCallback=()=>{this._updateTemplate(),this.requestUpdate()}}static get styles(){return[style.f,lit.AH`
            :host {
                display: inline-block;
            }
            
            :host(.force-btn-padding) #wrapper.no-padding {
                /*padding-right: 52px;*/
            }   
            
            #wrapper or-mwc-input, #wrapper or-map {
                width: 100%;
            }
            
            #wrapper or-map {
                min-height: 250px;
            }

            #wrapper .long-press-msg {
                display: none;
            }
            
            #wrapper {
                display: flex;
                position: relative;
            }
            
            #wrapper.right-padding {
                padding-right: 52px;
            }
            
            #wrapper-helper {
                display: flex;
                flex: 1;
                flex-direction: column;
            }
            
            #wrapper-input {
                flex: 1;
                display: flex;
            }
            
            #wrapper-label, #helper-text {
                margin-left: 16px;
            }
            
            /* Copy of mdc text field helper text styles */
            #helper-text {                
                min-width: 255px;
                color: rgba(0, 0, 0, 0.6);
                font-family: Roboto, sans-serif;
                -webkit-font-smoothing: antialiased;
                font-size: 0.75rem;
                font-weight: 400;
                letter-spacing: 0.0333333em;
            }
            
            #scrim {
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                background: white;
                opacity: 0.2;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            #scrim.hidden {
                display: none;
            }

            #send-btn { 
                flex: 0;
                margin-left: 4px;
                margin-top: 4px;
            }
        `]}disconnectedCallback(){super.disconnectedCallback(),this._clearWriteTimeout()}shouldUpdate(e){const t=super.shouldUpdate(e);let i=!1,r=!1;if(e.has("disableSubscribe")&&(i=!0),(e.has("attributeDescriptor")||e.has("valueDescriptor")||e.has("assetType"))&&(r=!0),e.has("attribute")){const t=Object.assign({},e.get("attribute")),n=this.attribute;if(t&&n){const a=t.value,o=t.timestamp;if(t.value=n.value,t.timestamp=n.timestamp,core_lib.J0.objectsEqual(t,n))if(core_lib.J0.objectsEqual(a,n.value)&&o===n.timestamp){if(1===e.size)return!1}else this._onAttributeValueChanged(a,n.value,n.timestamp);else i=!0,r=!0}}return e.has("assetId")&&e.get("assetId")!==this.assetId&&(i=!0,r=!0),r&&this._updateDescriptors(),i&&this._updateSubscribedRefs(),this._templateProvider&&(e.has("disabled")||e.has("readonly")||e.has("required")||e.has("label"))&&this._updateTemplate(),t}_updateSubscribedRefs(){if(this._attributeEvent=void 0,this.disableSubscribe)this.attributeRefs=void 0;else{const e=this._getAttributeRef();this.attributeRefs=e?[e]:void 0}}_getAttributeRef(){if(this.assetId&&this.attribute)return{name:this.attribute.name,id:this.assetId}}_updateDescriptors(){if(this._valueDescriptor=void 0,this._attributeDescriptor=void 0,this.attributeDescriptor&&this.valueDescriptor)this._attributeDescriptor=this.attributeDescriptor,this._valueDescriptor=this.valueDescriptor;else{const e=this.attributeDescriptor||(this.attribute?this.attribute.name:void 0);if(e){const t=model_lib.u0.getAttributeAndValueDescriptors(this.assetType,e,this.attribute);this._attributeDescriptor=t[0],this._valueDescriptor=this.valueDescriptor?this._valueDescriptor:t[1]}else this._attributeDescriptor=this.attributeDescriptor,this._valueDescriptor=this.valueDescriptor}this._updateTemplate()}_updateTemplate(){if(this._templateProvider=void 0,!this.assetType)return;const e=model_lib.u0.resolveValueDescriptor(this.attribute,this._valueDescriptor||this._attributeDescriptor);if(!e)return;const t={readonly:this.isReadonly(),required:this.required,disabled:this.disabled,compact:this.compact,rounded:this.rounded,outlined:this.outlined,label:this.getLabel(),comfortable:this.comfortable,resizeVertical:this.resizeVertical,inputType:this.inputType},i=e=>{const t=e?e.value:void 0,i=e&&e.enterPressed||!this._templateProvider||!this.showButton||!this._templateProvider.supportsSendButton;this._onInputValueChanged(t,i)};if(this.customProvider)return void(this._templateProvider=this.customProvider?this.customProvider(this.assetType,this.attribute,this._attributeDescriptor,e,(e=>i(e)),t):void 0);if("GEO_JSONPoint"===e.name)return void(this._templateProvider=(0,or_map_lib.NS)(this.assetType,this.attribute,this._attributeDescriptor,e,(e=>i(e)),t));const r=(0,or_mwc_input.Zo)(this.assetType,this.attribute,this._attributeDescriptor,e,(e=>i(e)),t);this._templateProvider=jsonFormsInputTemplateProvider(r)(this.assetType,this.attribute,this._attributeDescriptor,e,(e=>i(e)),t),this._templateProvider||(this._templateProvider=r)}getLabel(){let e;if(this.label)e=this.label;else if(""!==this.label&&null!==this.label){const t=model_lib.u0.getAttributeAndValueDescriptors(this.assetType,this.attribute?this.attribute.name:void 0,this._attributeDescriptor);e=core_lib.J0.getAttributeLabel(this.attribute,t[0],this.assetType,!0)}return e}isReadonly(){return core_lib.Ay.hasRole("write:attributes")?void 0!==this.readonly?this.readonly:core_lib.J0.getMetaValue("readOnly",this.attribute,this._attributeDescriptor):(this.readonly=!core_lib.Ay.hasRole("write:attributes"),this.readonly)}render(){if(!this.assetType||!this._templateProvider)return lit.qy``;const e=this.attributeRefs&&!this._attributeEvent||!!this._writeTimeoutHandler;let t;const i=this.getValue(),r=this._requestFocus;this._requestFocus=!1;const n=this.hasHelperText?function getHelperText(e,t,i){return e?lib.MR.t("sending"):t?lib.MR.t("sendFailed"):i?lib.MR.t("updatedWithDate",{date:new Date(i)}):void 0}(!!this._writeTimeoutHandler,this._sendError,this.getTimestamp()):void 0,a=this.showButton?this._writeTimeoutHandler?"send-clock":"send":this.disableButton?void 0:"";return t=this._templateProvider&&this._templateProvider.templateFunction?lit.qy`${(0,until.T)(this._templateProvider.templateFunction(i,r,e,!!this._writeTimeoutHandler,this._sendError,this._templateProvider.supportsHelperText?n:void 0),"")}`:lit.qy`<or-translate .value="attributeUnsupported"></or-translate>`,t=function getAttributeInputWrapper(e,t,i,r,n,a,o,s,d){return n&&(e=lit.qy`
                    <div id="wrapper-helper">
                        ${a?lit.qy`<div id="wrapper-label">${a}</div>`:""}
                        <div id="wrapper-input">${e}</div>
                        <div id="helper-text">${n}</div>
                    </div>
                `),o&&(e=lit.qy`
                ${e}
                <or-mwc-input id="send-btn" icon="${o}" type="button" .disabled="${r||i}" @or-mwc-input-changed="${e=>{e.stopPropagation(),s&&s()}}"></or-mwc-input>
            `),lit.qy`
            <div id="wrapper" class="${o||d?"no-padding":"right-padding"}">
                ${e}
                <div id="scrim" class="${(0,if_defined.J)(i?void 0:"hidden")}"><progress class="pure-material-progress-circular"></progress></div>
            </div>
        `}(t,0,e,!!this.disabled,this._templateProvider.supportsHelperText?void 0:n,this._templateProvider.supportsLabel?void 0:this.getLabel(),this._templateProvider.supportsSendButton?a:void 0,(()=>this._updateValue()),this.fullWidth),t}updated(e){e.has("_writeTimeoutHandler")&&!this._writeTimeoutHandler&&(this._requestFocus=!0,this.requestUpdate())}get showButton(){return!(this.isReadonly()||this.disabled||this.disableButton||!this._getAttributeRef())&&!!this._templateProvider&&this._templateProvider.supportsSendButton}getValue(){return this._attributeEvent?this._attributeEvent.value:this.attribute?this.attribute.value:this.value}getTimestamp(){return this._attributeEvent?this._attributeEvent.timestamp:this.attribute?this.attribute.timestamp:void 0}_onEvent(e){if("attribute"!==e.eventType)return;const t=this.getValue();this._attributeEvent=e,this._onAttributeValueChanged(t,this._attributeEvent.value,e.timestamp)}checkValidity(){return!!this._templateProvider&&(!this._templateProvider.validator||this._templateProvider.validator())}_onAttributeValueChanged(e,t,i){this.attribute&&(this.attribute.value=t,this.attribute.timestamp=i),this._clearWriteTimeout(),this.value=t,this._sendError=!1,this.dispatchEvent(new OrAttributeInputChangedEvent(t,e))}_onInputValueChanged(e,t){this._newValue=e,t&&this._updateValue()}_updateValue(){if(this.readonly||this.isReadonly())return;if(this._writeTimeoutHandler)return;void 0===this._newValue&&(this._newValue=this.getValue());const e=this.getValue(),t=this._newValue;this._newValue=void 0;const i=this._getAttributeRef();i&&!this.disableWrite?(super._sendEvent({eventType:"attribute",ref:i,value:t}),this._writeTimeoutHandler=window.setTimeout((()=>this._onWriteTimeout()),this.writeTimeout)):(this.value=t,this.dispatchEvent(new OrAttributeInputChangedEvent(t,e)))}_clearWriteTimeout(){this._writeTimeoutHandler&&window.clearTimeout(this._writeTimeoutHandler),this._writeTimeoutHandler=void 0}_onWriteTimeout(){this._sendError=!0,this.showButton&&!this.hasHelperText||this.requestUpdate("value"),this._clearWriteTimeout()}};lib_decorate([(0,decorators.MZ)({type:Object,reflect:!1})],OrAttributeInput.prototype,"attribute",void 0),lib_decorate([(0,decorators.MZ)({type:String})],OrAttributeInput.prototype,"assetId",void 0),lib_decorate([(0,decorators.MZ)({type:Object})],OrAttributeInput.prototype,"attributeDescriptor",void 0),lib_decorate([(0,decorators.MZ)({type:Object})],OrAttributeInput.prototype,"valueDescriptor",void 0),lib_decorate([(0,decorators.MZ)({type:String})],OrAttributeInput.prototype,"assetType",void 0),lib_decorate([(0,decorators.MZ)({type:String})],OrAttributeInput.prototype,"label",void 0),lib_decorate([(0,decorators.MZ)({type:Boolean})],OrAttributeInput.prototype,"disabled",void 0),lib_decorate([(0,decorators.MZ)({type:Boolean})],OrAttributeInput.prototype,"readonly",void 0),lib_decorate([(0,decorators.MZ)({type:Boolean,attribute:!0})],OrAttributeInput.prototype,"required",void 0),lib_decorate([(0,decorators.MZ)()],OrAttributeInput.prototype,"value",void 0),lib_decorate([(0,decorators.MZ)()],OrAttributeInput.prototype,"inputType",void 0),lib_decorate([(0,decorators.MZ)({type:Boolean})],OrAttributeInput.prototype,"hasHelperText",void 0),lib_decorate([(0,decorators.MZ)({type:Boolean})],OrAttributeInput.prototype,"disableButton",void 0),lib_decorate([(0,decorators.MZ)({type:Boolean,attribute:!0})],OrAttributeInput.prototype,"disableSubscribe",void 0),lib_decorate([(0,decorators.MZ)({type:Boolean})],OrAttributeInput.prototype,"disableWrite",void 0),lib_decorate([(0,decorators.MZ)({type:Boolean})],OrAttributeInput.prototype,"compact",void 0),lib_decorate([(0,decorators.MZ)({type:Boolean})],OrAttributeInput.prototype,"comfortable",void 0),lib_decorate([(0,decorators.MZ)({type:Boolean})],OrAttributeInput.prototype,"resizeVertical",void 0),lib_decorate([(0,decorators.MZ)({type:Boolean})],OrAttributeInput.prototype,"fullWidth",void 0),lib_decorate([(0,decorators.MZ)({type:Boolean})],OrAttributeInput.prototype,"rounded",void 0),lib_decorate([(0,decorators.MZ)({type:Boolean})],OrAttributeInput.prototype,"outlined",void 0),lib_decorate([(0,decorators.MZ)()],OrAttributeInput.prototype,"_attributeEvent",void 0),lib_decorate([(0,decorators.MZ)()],OrAttributeInput.prototype,"_writeTimeoutHandler",void 0),OrAttributeInput=lib_decorate([(0,decorators.EM)("or-attribute-input")],OrAttributeInput)},"../../component/or-components/lib/or-ace-editor.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/lit/decorators.js"),ace_builds__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/ace-builds/src-noconflict/ace.js"),ace_builds__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(ace_builds__WEBPACK_IMPORTED_MODULE_2__),__decorate=(__webpack_require__("../../../node_modules/ace-builds/src-noconflict/mode-javascript.js"),__webpack_require__("../../../node_modules/ace-builds/src-noconflict/mode-json.js"),__webpack_require__("../../../node_modules/ace-builds/src-noconflict/mode-groovy.js"),__webpack_require__("../../../node_modules/ace-builds/webpack-resolver.js"),function(t,e,i,o){var r,d=arguments.length,s=d<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(d<3?r(s):d>3?r(e,i,s):r(e,i))||s);return d>3&&s&&Object.defineProperty(e,i,s),s});class OrAceEditorChangedEvent extends CustomEvent{constructor(t,e){super(OrAceEditorChangedEvent.NAME,{bubbles:!0,composed:!0,detail:{value:t,valid:e}})}}OrAceEditorChangedEvent.NAME="or-ace-editor-changed";class OrAceEditorEditEvent extends CustomEvent{constructor(){super(OrAceEditorEditEvent.NAME,{bubbles:!0,composed:!0})}}OrAceEditorEditEvent.NAME="or-ace-editor-edit";let OrAceEditor=class extends lit__WEBPACK_IMPORTED_MODULE_0__.WF{constructor(){super(...arguments),this.mode="ace/mode/json",this._lastValue="",this._editing=!1}static get styles(){return lit__WEBPACK_IMPORTED_MODULE_0__.AH`
            :host {
                display: block;
                width: 100%;
                height: 100%;
            }
        
            #ace-editor {
                position: relative;
                height: 100%;
                width: 100%;
            }
        
            @media screen and (max-width: 1400px) {
                :host > * {
                    flex-grow: 0;
                }
        
                :host {
                    flex-direction: column;
                }
            }
        `}disconnectedCallback(){this.destroyEditor(),super.disconnectedCallback()}updated(t){super.updated(t),t.has("mode")&&(this.destroyEditor(),this.initEditor()),t.has("value")&&this._aceEditor&&(this._lastValue=void 0!==this.value?"string"==typeof this.value?this.value:JSON.stringify(this.value,null,2):"",this._aceEditor.setValue(this._lastValue))}render(){return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
            <div id="ace-editor"></div>
        `}destroyEditor(){this._aceEditor&&(this._aceEditor.destroy(),this._aceEditor=void 0)}initEditor(){this._aceElem&&(this._aceEditor=ace_builds__WEBPACK_IMPORTED_MODULE_2___default().edit(this._aceElem,{mode:this.mode,value:this._lastValue,useSoftTabs:!0,tabSize:2,readOnly:this.readonly,showPrintMargin:!1}),this._aceEditor.renderer.attachToShadowRoot(),this._aceEditor.getSession().on("changeAnnotation",(()=>this._onEditorChange())),this._aceEditor.on("change",(()=>this._onEditorEdit())))}_onEditorEdit(){this._editing||(this.dispatchEvent(new OrAceEditorEditEvent),this._editing=!0),this._changeTimer&&window.clearTimeout(this._changeTimer),this._changeTimer=window.setTimeout((()=>{this._changeTimer=void 0,this._editing&&this._onEditorChange()}),600)}_onEditorChange(){this._editing=!1;const t=this.getValue()||"";if(this._lastValue!==t){this._lastValue=t;const e=this.validate();this.dispatchEvent(new OrAceEditorChangedEvent(t,e))}}getValue(){if(this._aceEditor)return this._aceEditor.getValue()}validate(){if(!this._aceEditor)return!1;const t=this._aceEditor.getSession().getAnnotations();return!t||0===t.length}};__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean,attribute:!1})],OrAceEditor.prototype,"readonly",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({attribute:!1})],OrAceEditor.prototype,"value",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:String,attribute:!1})],OrAceEditor.prototype,"mode",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#ace-editor")],OrAceEditor.prototype,"_aceElem",void 0),OrAceEditor=__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.EM)("or-ace-editor")],OrAceEditor)},"../../component/or-json-forms/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{wj:()=>StandardRenderers,iM:()=>getTemplateWrapper});var lit=__webpack_require__("../../../node_modules/lit/index.js"),decorators=__webpack_require__("../../../node_modules/lit/decorators.js"),jsonforms_core_esm=__webpack_require__("../../../node_modules/@jsonforms/core/lib/jsonforms-core.esm.js"),or_mwc_input=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-input.js"),lib=__webpack_require__("../../component/core/lib/index.js"),or_translate_lib=__webpack_require__("../../component/or-translate/lib/index.js"),ref=(__webpack_require__("../../component/or-components/lib/or-ace-editor.js"),__webpack_require__("../../../node_modules/lit/directives/ref.js")),or_mwc_dialog=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-dialog.js");function getTemplateFromProps(e,t){if(!e||!t)return lit.qy``;const o=t.renderers||(0,jsonforms_core_esm.Fos)({jsonforms:Object.assign({},e)}),r=t.schema,i=t.uischema;let s;if(o&&r&&i){const n=o.map((e=>[e,e.tester(i,r)])).sort(((e,t)=>t[1]-e[1])),a=n&&n.length>0?n[0]:void 0;s=a&&-1!==a[1]?a[0].renderer(e,t):function unknownTemplate(){return lit.qy`<span>No applicable renderer found!</span>`}()}return s}function getCombinatorInfos(e,t){return e.map((e=>{let o,r,i;const s=findSchemaTitleAndDescription(e,t);if(e.$ref&&(e=jsonforms_core_esm.XKv.schema(t,e.$ref)),Array.isArray(e.allOf)&&(e=(0,jsonforms_core_esm.VoW)(e,t,"allOf")),(0,jsonforms_core_esm.fCZ)(e).every((e=>"object"===e))){const t=function getSchemaObjectProperties(e){let t=[];return e.allOf?t=e.allOf.map((e=>e.properties?Object.entries(e.properties):[])).flat():e.properties&&(t=Object.entries(e.properties)),t}(e).find((([e,t])=>void 0!==getSchemaConst(t)));t?(o=t[0],r=getSchemaConst(t[1]),i=()=>{const e={};return e[t[0]]=getSchemaConst(t[1]),e},s[0]||(s[0]=getSchemaConst(t[1]))):i=()=>(0,jsonforms_core_esm.DmA)(e)}else i=()=>(0,jsonforms_core_esm.DmA)(e);return{title:s[0],description:s[1],defaultValueCreator:i,constProperty:o,constValue:r}}))}function getSchemaConst(e){if(e)return void 0!==e.const?e.const:Array.isArray(e.enum)&&1===e.enum.length?e.enum[0]:void 0}function getSchemaPicker(e,t,o,r,i,s){const n=getCombinatorInfos(t[r],e),a=n.map(((e,t)=>[t+"",e.title||or_translate_lib.MR.t("schema.title.indexedItem",{index:t})])),c=i?or_translate_lib.MR.t("schema.anyOfPickerLabel",{label:i}):or_translate_lib.MR.t("type");return lit.qy`                
        <or-mwc-input class="any-of-picker" .label="${c}" .type="${or_mwc_input.NZ.SELECT}" .options="${a}" @or-mwc-input-changed="${e=>(e=>{const t=n[e];s(t)})(Number(e.detail.value))}"></or-mwc-input>
    `}function findSchemaTitleAndDescription(e,t){let o;if(e.$ref&&(o=getLabelFromScopeOrRef(e.$ref),e=jsonforms_core_esm.XKv.schema(t,e.$ref)),e.title)return[e.title,e.description];if(e.allOf){const o=(0,jsonforms_core_esm.VoW)(e,t,"allOf").allOf.find((e=>!!e.title));if(o)return[o.title,o.description]}return[or_translate_lib.MR.t("schema.title."+o,{defaultValue:lib.J0.camelCaseToSentenceCase(o)}),void 0]}function getLabelFromScopeOrRef(e){return e.substr(e.lastIndexOf("/")+1)}function getLabel(e,t,o,r){if(o)return o;const i=findSchemaTitleAndDescription(e,t);return i[0]?i[0]:r?lib.J0.camelCaseToSentenceCase(getLabelFromScopeOrRef(r)):void 0}const controlWithoutLabel=e=>({type:"Control",scope:e,label:!1}),showJsonEditor=(e,t,o)=>{const r=(0,ref._)(),i=(0,ref._)();(0,or_mwc_dialog.ui)((new or_mwc_dialog.X$).setContent(lit.qy`
                <or-ace-editor ${(0,ref.K)(r)} @or-ace-editor-edit="${()=>{i.value.disabled=!0}}" @or-ace-editor-changed="${e=>(e=>{const t=e.detail.valid;i.value.disabled=!t})(e)}" .value="${t}"></or-ace-editor>
            `).setActions([{actionName:"cancel",content:"cancel"},{default:!0,actionName:"update",action:()=>{const e=r.value;if(e.validate()){const t=e.getValue()?JSON.parse(e.getValue()):void 0;o(t)}},content:lit.qy`<or-mwc-input ${(0,ref.K)(i)} disabled .type="${or_mwc_input.NZ.BUTTON}" label="update"></or-mwc-input>`}]).setHeading(e).setDismissAction(null).setStyles(lit.qy`
                <style>
                    .mdc-dialog__surface {
                        width: 1024px;
                        overflow-x: visible !important;
                        overflow-y: visible !important;
                    }
                    #dialog-content {
                        border-color: var(--or-app-color5, ${(0,lit.iz)(lib.Id)});
                        border-top-width: 1px;
                        border-top-style: solid;
                        border-bottom-width: 1px;
                        border-bottom-style: solid;
                        padding: 0;
                        overflow: visible;
                        height: 60vh;
                    }
                </style>
            `))};var __decorate=function(e,t,r,o){var p,a=arguments.length,y=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)y=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(p=e[i])&&(y=(a<3?p(y):a>3?p(t,r,y):p(t,r))||y);return a>3&&y&&Object.defineProperty(t,r,y),y};class BaseElement extends lit.WF{set props(e){delete e.id,Object.assign(this,e)}}__decorate([(0,decorators.MZ)({type:Object})],BaseElement.prototype,"state",void 0),__decorate([(0,decorators.MZ)({type:Object})],BaseElement.prototype,"uischema",void 0),__decorate([(0,decorators.MZ)({type:Object})],BaseElement.prototype,"schema",void 0),__decorate([(0,decorators.MZ)({type:String,attribute:!1})],BaseElement.prototype,"data",void 0),__decorate([(0,decorators.MZ)({type:Array})],BaseElement.prototype,"renderers",void 0),__decorate([(0,decorators.MZ)({type:Array})],BaseElement.prototype,"cells",void 0),__decorate([(0,decorators.MZ)({type:String,attribute:!1})],BaseElement.prototype,"config",void 0),__decorate([(0,decorators.MZ)({type:Array})],BaseElement.prototype,"uischemas",void 0),__decorate([(0,decorators.MZ)({type:Boolean})],BaseElement.prototype,"enabled",void 0),__decorate([(0,decorators.MZ)({type:Boolean})],BaseElement.prototype,"visible",void 0),__decorate([(0,decorators.MZ)({type:String})],BaseElement.prototype,"path",void 0),__decorate([(0,decorators.MZ)({type:String})],BaseElement.prototype,"label",void 0),__decorate([(0,decorators.MZ)({type:Boolean})],BaseElement.prototype,"required",void 0),__decorate([(0,decorators.MZ)()],BaseElement.prototype,"errors",void 0);var layout_base_element_decorate=function(e,t,r,o){var s,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(c=(i<3?s(c):i>3?s(t,r,c):s(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c};class LayoutBaseElement extends BaseElement{constructor(){super(...arguments),this.direction="column"}getChildProps(){return(this.uischema&&this.uischema.elements?this.uischema.elements:[]).map((e=>({renderers:this.renderers,uischema:e,schema:this.schema,path:this.path})))}}layout_base_element_decorate([(0,decorators.MZ)({type:String})],LayoutBaseElement.prototype,"direction",void 0);__webpack_require__("../../component/or-mwc-components/lib/or-mwc-list.js");var or_collapsible_panel_decorate=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};const style=lit.AH`

    :host {
        display: block;
        box-sizing: content-box;
        margin: 0;
        overflow: hidden;
        transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        border-color: var(--or-app-color5, ${(0,lit.iz)(lib.Id)});
        background-color: var(--or-collapisble-panel-background-color);
        border-radius: 4px;
        border-width: 1px;
        border-style: solid;
    }

    :host([hidden]) {
        display: none;
    }
    
    #header {
        display: flex;
        height: 48px;
        flex-direction: row;
        font-family: Roboto,Helvetica Neue,sans-serif;
        font-size: 15px;
        font-weight: 400;
        align-items: center;
        padding: 0 24px 0 16px;
        border-radius: inherit;
    }
    
    #header.expandable {
        cursor: pointer;
        transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    #header.expanded {
        height: 64px;
    }

    #header.expanded > #indicator {
    }
    
    #header-content {
        flex: 1;
        display: flex;
        flex-direction: row;
        overflow: hidden;
    }

    #header-title, #header-description {
        display: inline-flex;
        align-items: center;
    }
    
    #header-description {
        flex-grow: 2;
    }
    
    #indicator {
        align-self: center;
        margin-right: 6px;
        margin-left: -5px;
    }
    
    #content {
        height: 0;
        visibility: hidden;
    }
    
    #content.expanded {
        height: unset;
        visibility: visible;
    }

    or-icon {
        vertical-align: middle;
        --or-icon-width: 20px;
        --or-icon-height: 20px;
        margin-right: 2px;
        margin-left: -5px;
    }
`;let OrCollapsiblePanel=class extends lit.WF{constructor(){super(...arguments),this.expanded=!1,this.expandable=!0}static get styles(){return[style]}_onHeaderClicked(e){this.expandable&&(e.preventDefault(),this.expanded=!this.expanded)}render(){return lit.qy`
            <div id="header" class="${this.expandable?"expandable":""} ${this.expandable&&this.expanded?"expanded":""}" @click="${e=>this._onHeaderClicked(e)}">
                ${this.expandable?lit.qy`<or-icon icon="chevron-${this.expanded?"down":"right"}"></or-icon>`:""}
                <span id="header-content">
                    <span id="header-title"><slot name="header"></slot></span>
                    <span id="header-description"><slot name="header-description"></slot></span>
                </span>
            </div>
            <div id="content" class="${this.expandable&&this.expanded?"expanded":""}">
                <slot name="content"></slot>
            </div>
        `}};or_collapsible_panel_decorate([(0,decorators.MZ)({type:Boolean})],OrCollapsiblePanel.prototype,"expanded",void 0),or_collapsible_panel_decorate([(0,decorators.MZ)({type:Boolean})],OrCollapsiblePanel.prototype,"expandable",void 0),or_collapsible_panel_decorate([(0,decorators.P)("#header")],OrCollapsiblePanel.prototype,"headerElem",void 0),OrCollapsiblePanel=or_collapsible_panel_decorate([(0,decorators.EM)("or-collapsible-panel")],OrCollapsiblePanel);const baseStyle=lit.AH`
    :host {
        flex: 1;
    }
    
    .item-container {
        display: flex;
    }
    
    .delete-container, .drag-container {
        width: 30px;
        display: flex;
        vertical-align: middle;
    }
    
    .item-container:hover .button-clear, .item-wrapper:hover .button-clear {
        visibility: visible;
    }
    
    .no-match-container {
        align-items: center;
    }

    .no-match-container > *:not(:last-child) {
        margin-right: 10px;
    }

    .button-clear {
        background: none;
        color: ${(0,lit.iz)(lib.Id)};
        --or-icon-fill: ${(0,lit.iz)(lib.Id)};
        visibility: hidden;
        display: inline-block;
        border: none;
        padding: 0 0 0 5px;
        cursor: pointer;
    }                
    .button-clear:hover {
        --or-icon-fill: ${(0,lit.iz)(lib.BB)};
    }                
    .button-clear:focus {
        outline: 0;
    }                
    .button-clear.hidden {
        visibility: hidden;
    }
    
    .any-of-picker {
        width: 100%;
        min-width: 200px;
    }

    #errors {
        color: red;
        margin-right: 10px;
        flex: 1;
        display: flex;
        align-items: center;
    }

    #errors > or-icon {
        margin-right: 5px;
    }
`,panelStyle=lit.AH`
    #header-description {
        flex: 1;
        display: flex;
        flex-direction: row;
    }

    #type-label {
        border: 1px solid green;
        border-radius: 3px;
        padding: 3px;
        margin-left: 10px;
    }

    #header-buttons {
        flex: 0;
    }

    #content-wrapper {
        flex: 1;
        padding: 0 4px 14px 24px;
    }

    #content {
        display: flex;
        flex-direction: column;
    }

    #content > * {
        flex: 1;
    }

    .item-container + .item-container {
        padding-top: 10px;
    }

    #footer {
        margin-top: 10px;
    }

`,addItemOrParameterDialogStyle=lit.qy`
    <style>
        .mdc-dialog__surface {
            width: 800px;
            overflow-x: visible !important;
            overflow-y: visible !important;
        }
        #dialog-content {
            border-color: var(--or-app-color5, ${(0,lit.iz)(lib.Id)});
            border-top-width: 1px;
            border-top-style: solid;
            border-bottom-width: 1px;
            border-bottom-style: solid;
            padding: 0;
        }
        form {
            display: flex;
            height: 100%;
        }
        #type-list {
            overflow: auto;
            min-width: 150px;
            max-width: 300px;
            flex: 0 0 40%;
            border-right: 1px solid var(--or-app-color5, #CCC);
        }
        #parameter-list {
            display: block;
        }
        #parameter-title {
            text-transform: capitalize;
            color: var(--or-app-color3, ${(0,lit.iz)(lib.Iy)});
            font-size: 18px;
            font-weight: bold;
        }
        #parameter-desc {
            padding: 15px;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            overflow: auto;
        }
    </style>
`;var layout_vertical_element_decorate=function(e,t,i,a){var r,o=arguments.length,s=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};const layout_vertical_element_style=lit.AH`
    
    #dynamic-wrapper {
        display: table;
    }
    
    #dynamic-wrapper .row {
        display: table-row;
    }
    
    #dynamic-wrapper .row:hover .button-clear {
        visibility: visible;
    }
    
    #dynamic-wrapper .row > div {
        display: table-cell;
    }
    
    .value-container {
        padding: 0 0 20px 10px;
    }

    .key-container {
        padding: 0 10px 20px 0;
    }

    .value-container, .key-container {
        vertical-align: top;
    }

    .key-container or-mwc-input, .value-container or-mwc-input {
        display: block;
    }

    .value-container > .item-container {
        margin: 0;
    }

    .value-container > .item-container > .delete-container {
        display: none;
    }

    .value-container > .item-container :first-child {
        border: 0;
        padding: 0;
        margin: 0;
        flex: 1;
    }
`;let LayoutVerticalElement=class extends LayoutBaseElement{static get styles(){return[baseStyle,panelStyle,layout_vertical_element_style]}render(){const e=[],t={jsonforms:Object.assign({},this.state)},i=(0,jsonforms_core_esm._wW)(t),a=function isDynamic(e){return void 0===e.allOf&&void 0===e.anyOf&&(void 0===e.properties||0===Object.keys(e.properties).length)}(this.schema);let r,o=".+";if(a)if("object"==typeof this.schema.patternProperties){const e=Object.entries(this.schema.patternProperties);1===e.length&&(o=e[0][0],r=e[0][1])}else"object"==typeof this.schema.additionalProperties&&(r=this.schema.additionalProperties);const s=this.minimal?"":lit.qy`
            <div slot="header">
                <span>${this.label?(0,jsonforms_core_esm.m25)(this.label,this.required,!1):""}</span>
                ${this.type?lit.qy`<span id="type-label">${this.type}</span>`:""}
            </div>
            <div id="header-description" slot="header-description">
                <div id="errors">
                    ${this.errors?lit.qy`<or-icon icon="alert"></or-icon><span>${this.errors}</span>`:""}
                </div>
                <div id="header-buttons"><or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" outlined label="json" icon="pencil" @or-mwc-input-changed="${e=>this._showJson(e)}"></or-mwc-input></div>
            </div>
        `;let l;a&&r?l=this._getDynamicContentTemplate(o,r):this.getChildProps().length>0&&(l=this.getChildProps().map((a=>{if((0,jsonforms_core_esm.c0N)(a.uischema)){const r=(0,jsonforms_core_esm.kOB)(t,a);if(r.label=r.label||getLabel(this.schema,i,void 0,a.uischema.scope)||"",a.label=r.label,a.required=!!r.required,!r.required&&void 0===r.data)return e.push(r),lit.qy``}return getTemplateFromProps(this.state,a)})).filter((e=>void 0!==e)));const n=!!l&&(!Array.isArray(l)||l.length>0)||!this.errors&&e.length>0,c=lit.qy`
            ${s}
            <div id="content-wrapper" slot="content">
                <div id="content">
                    ${l||""}
                </div>

                ${this.errors||0===e.length&&!a?"":lit.qy`
                        <div id="footer">
                            <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" label="addParameter" icon="plus" @or-mwc-input-changed="${()=>this._addParameter(i,e,o,r)}"></or-mwc-input>
                        </div>`}
            </div>
        `;return this.minimal?lit.qy`<div>${c}</div>`:lit.qy`<or-collapsible-panel .expandable="${n}">${c}</or-collapsible-panel>`}_getDynamicContentTemplate(e,t){if(!this.data)return;const i=e=>{const t=Object.assign({},this.data);delete t[e],this.handleChange(this.path,t)},a=(e,t,i)=>{if(!e.valid)return;if(void 0!==this.data[i])return void e.setCustomValidity(or_translate_lib.MR.t("validation.keyAlreadyExists"));e.setCustomValidity(void 0);const a=Object.assign({},this.data),r=a[t];delete a[t],a[i]=r,this.handleChange(this.path,a)},r={renderers:this.renderers,uischema:controlWithoutLabel("#"),enabled:this.enabled,visible:this.visible,path:"",schema:t,minimal:!0,required:!1,label:""},o=(e,t)=>(r.path=jsonforms_core_esm.JhW.compose(this.path,e),getTemplateFromProps(this.state,r)||lit.qy``);return lit.qy`
            <div id="dynamic-wrapper">
                ${Object.entries(this.data).map((([t,r])=>lit.qy`
                        <div class="row">
                            <div class="key-container">
                                <or-mwc-input .type="${or_mwc_input.NZ.TEXT}" @or-mwc-input-changed="${e=>a(e.currentTarget,t,e.detail.value)}" required .pattern="${e}" .value="${t}"></or-mwc-input>
                            </div>
                            <div class="value-container">
                                ${o(t)}
                            </div>
                            <div class="delete-container">
                                <button class="button-clear" @click="${()=>i(t)}"><or-icon icon="close-circle"></or-icon></input>
                            </div>
                        </div>
                    `))}
            </div>
        `}_showJson(e){e.stopPropagation(),showJsonEditor(this.title||this.schema.title||"",this.data,(e=>{this.handleChange(this.path||"",e)}))}_addParameter(e,t,i,a){const r=0===t.length;let o,s;const l=t.map((e=>{const t=(0,jsonforms_core_esm.m25)(e.label,!!e.required,!1);return{text:t,value:t,data:e}}));let n;const c=e=>{const t=e.currentTarget;t.setCustomValidity(void 0),n=t.currentValue;let i=t.valid;void 0!==this.data[n]&&(i=!1,t.setCustomValidity(or_translate_lib.MR.t("validation.keyAlreadyExists"))),d.shadowRoot.getElementById("add-btn").disabled=!i},d=(0,or_mwc_dialog.ui)((new or_mwc_dialog.X$).setContent((()=>{let t;if(o&&o.schema&&o.schema.oneOf){const i=e=>{s=e,d.shadowRoot.getElementById("add-btn").disabled=!s,d.shadowRoot.getElementById("schema-description").innerHTML=(s?s.description:or_translate_lib.MR.t("schema.selectTypeMessage"))||or_translate_lib.MR.t("schema.noDescriptionAvailable")};t=getSchemaPicker(e,o.schema,o.path,"oneOf",o.label,i)}return lit.qy`
                <div class="col">
                    <form id="mdc-dialog-form-add" class="row">
                        ${r?"":lit.qy`
                            <div id="type-list" class="col">
                                <or-mwc-list @or-mwc-list-changed="${e=>{1===e.detail.length&&(e=>{o=e;const t=!!(o&&o.schema&&o.schema.oneOf);d.shadowRoot.getElementById("add-btn").disabled=t,d.requestUpdate()})(e.detail[0].data)}}" .listItems="${l}" id="parameter-list"></or-mwc-list>
                            </div>
                        `}
                        <div id="parameter-desc" class="col">
                            ${o?lit.qy`
                                <or-translate id="parameter-title" value="${o.label}"></or-translate>
                                <p>${o.description}</p>`:""}
                            ${r?lit.qy`
                                <style>
                                    #dynamic-wrapper > or-mwc-input {
                                        display: block;
                                        margin: 10px;
                                    }
                                </style>
                                <div id="dynamic-wrapper">
                                    <or-mwc-input required .type="${or_mwc_input.NZ.TEXT}" .pattern="${i}" .label="${or_translate_lib.MR.t("schema.keyInputLabel")}" @keyup="${e=>c(e)}"></or-mwc-input>
                                </div>
                            `:t?lit.qy`
                                <style>
                                    #schema-picker {
                                        align-self: stretch;
                                        margin: 10px;
                                        display: flex;
                                        align-items: center;
                                    }
                                    #schema-picker > or-translate {
                                        padding-right: 20px;
                                    }
                                    #schema-picker > or-mwc-input {
                                        flex: 1;
                                    }
                                </style>
                                <div id="schema-picker">
                                    <or-translate style="justify-self: left;" value="type"></or-translate>
                                    ${t}
                                </div>
                                <p id="schema-description">${or_translate_lib.MR.t("schema.selectTypeMessage")}</p>`:""}
                        </div>
                    </form>
                </div>
            `})).setStyles(addItemOrParameterDialogStyle).setHeading((this.label?(0,jsonforms_core_esm.m25)(this.label,this.required,!1)+" - ":"")+or_translate_lib.MR.t("addParameter")).setActions([{actionName:"cancel",content:"cancel"},{default:!0,actionName:"add",action:()=>{const e=r?n:o.path.split(".").pop(),t=Object.assign({},this.data),i=r?a:o.schema;t[e]=Array.isArray(i.type)?null:(s?s.defaultValueCreator():void 0)||(0,jsonforms_core_esm.DmA)(i),this.handleChange(this.path||"",t)},content:lit.qy`<or-mwc-input id="add-btn" .type="${or_mwc_input.NZ.BUTTON}" disabled label="add"></or-mwc-input>`}]).setDismissAction(null))}};layout_vertical_element_decorate([(0,decorators.MZ)()],LayoutVerticalElement.prototype,"minimal",void 0),layout_vertical_element_decorate([(0,decorators.MZ)()],LayoutVerticalElement.prototype,"type",void 0),LayoutVerticalElement=layout_vertical_element_decorate([(0,decorators.EM)("or-json-forms-vertical-layout")],LayoutVerticalElement);var control_base_element_decorate=function(e,t,o,r){var s,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(a=(i<3?s(a):i>3?s(t,o,a):s(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a};class ControlBaseElement extends BaseElement{constructor(){super()}updated(e){if(super.updated(e),e.has("state")){const{handleChange:e}=(0,jsonforms_core_esm.XGy)(this.state.dispatch);this.handleChange=e}}shouldUpdate(e){var t;if(e.has("uischema")&&(0,jsonforms_core_esm.c0N)(this.uischema)){const o=e.get("uischema");(null==o?void 0:o.scope)!==(null===(t=this.uischema)||void 0===t?void 0:t.scope)&&(this.id&&(0,jsonforms_core_esm.aSh)(this.id),this.id=(0,jsonforms_core_esm.sX_)(this.uischema.scope))}return!0}disconnectedCallback(){(0,jsonforms_core_esm.c0N)(this.uischema)&&(0,jsonforms_core_esm.aSh)(this.id)}}control_base_element_decorate([(0,decorators.MZ)()],ControlBaseElement.prototype,"description",void 0),control_base_element_decorate([(0,decorators.MZ)()],ControlBaseElement.prototype,"rootSchema",void 0);var control_input_element_decorate=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};const control_input_element_style=lit.AH`
    or-mwc-input {
        width: 100%;
    }
`;let ControlInputElement=class extends ControlBaseElement{static get styles(){return[baseStyle,control_input_element_style]}render(){var t;const e=this.uischema,n=this.schema,i=this.schema.format;let r,o,s,p,l,a,m;this.inputType=or_mwc_input.NZ.TEXT;let u=!1,y=null!==(t=this.data)&&void 0!==t?t:n.default;return Array.isArray(n.type)?this.inputType=or_mwc_input.NZ.JSON:(0,jsonforms_core_esm.uA2)(e,n)?this.inputType=or_mwc_input.NZ.CHECKBOX:(0,jsonforms_core_esm.zz5)(e,n)||(0,jsonforms_core_esm.aNO)(e,n)?(r=(0,jsonforms_core_esm.zz5)(e,n)?.1:1,this.inputType=or_mwc_input.NZ.NUMBER,o=n.minimum,p=n.maximum,r=n.multipleOf||r,void 0!==o&&void 0!==p&&"or-range"===i&&(p-o)/r<=200&&(this.inputType=or_mwc_input.NZ.RANGE)):(0,jsonforms_core_esm.pyz)(e,n)||(0,jsonforms_core_esm.GIF)(e,n)||isEnumArray(e,n)?(this.inputType=or_mwc_input.NZ.SELECT,(0,jsonforms_core_esm.pyz)(e,n)?m=n.enum.map((t=>[JSON.stringify(t),String(t)])):(0,jsonforms_core_esm.GIF)(e,n)?m=n.oneOf.map((t=>[JSON.stringify(t.const),String(t.const)])):(u=!0,m=n.items.oneOf?n.items.oneOf.map((t=>[JSON.stringify(t.const),String(t.const)])):n.items.enum.map((t=>[JSON.stringify(t),String(t)]))),y=u?Array.isArray(y)?y.map((t=>JSON.stringify(t))):void 0!==y?[JSON.stringify(y)]:void 0:void 0!==y?JSON.stringify(y):void 0):(0,jsonforms_core_esm.Nyt)(e,n)&&(s=n.minLength,l=n.maxLength,a=n.pattern,"date-time"===i?this.inputType=or_mwc_input.NZ.DATETIME:"date"===i?this.inputType=or_mwc_input.NZ.DATE:"time"===i?this.inputType=or_mwc_input.NZ.TIME:"email"===i?this.inputType=or_mwc_input.NZ.EMAIL:"tel"===i?this.inputType=or_mwc_input.NZ.TELEPHONE:"or-multiline"===i?this.inputType=or_mwc_input.NZ.TEXTAREA:("or-password"===i||n.writeOnly)&&(this.inputType=or_mwc_input.NZ.PASSWORD)),lit.qy`<or-mwc-input
                .label="${this.label}"
                .type="${this.inputType}"
                .disabled="${!this.enabled}"
                .required="${!!this.required}"
                .id="${this.id}"
                .options="${m}"
                .multiple="${u}"
                @or-mwc-input-changed="${t=>this.onValueChanged(t)}"
                .maxLength="${l}"
                .minLength="${s}"
                .pattern="${a}"
                .validationMessage="${this.errors}"
                .step="${r}"
                .max="${p}"
                .min="${o}"
                .value="${y}"></or-mwc-input>`}onValueChanged(t){this.inputType===or_mwc_input.NZ.SELECT?Array.isArray(t.detail.value)?this.handleChange(this.path,t.detail.value.map((t=>JSON.parse(t)))):this.handleChange(this.path,JSON.parse(t.detail.value)):this.handleChange(this.path,t.detail.value)}};ControlInputElement=control_input_element_decorate([(0,decorators.EM)("or-json-forms-input-control")],ControlInputElement);var control_array_element_decorate=function(t,e,r,o){var a,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(s=(i<3?a(s):i>3?a(e,r,s):a(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};const control_array_element_style=lit.AH`
    .item-border, .drag-handle {
        border-color: var(--or-app-color5, ${(0,lit.iz)(lib.Id)});
        border-radius: 4px;
        border-width: 1px;
        border-style: solid;
    }

    .item-wrapper {
        display: flex;
    }
    
    .item-wrapper > .item-container {
        flex: 1;
    }

    .item-wrapper + .item-wrapper {
        padding-top: 10px;
    }
    
    .item-wrapper > .item-container > .item-container {
        margin: 0;
        flex: 1;
    }

    .item-wrapper > .item-container > .item-container > .delete-container {
        display: none;
    }

    .item-wrapper > .item-container > .item-container :first-child {
        padding: 0;
        margin: 0;
        flex: 1;
    }

    .item-wrapper.dragging > .item-container {
        opacity: 0.5;
    }

    .item-wrapper.indicator-after {
        border-bottom-width: 3px;
        border-bottom-style: solid;
        border-bottom-color: var(--or-app-color4, ${(0,lit.iz)(lib.BB)});
    }

    .item-wrapper.indicator-before {
        border-top-width: 3px;
        border-top-style: solid;
        border-top-color: var(--or-app-color4, ${(0,lit.iz)(lib.BB)});
    }
    
    .drag-container > button {
        cursor: grab;
    }
`;let ControlArrayElement=class extends ControlBaseElement{static get styles(){return[baseStyle,panelStyle,control_array_element_style]}shouldUpdate(t){if(t.has("schema")&&(this.itemInfos=void 0,this.resolvedSchema=jsonforms_core_esm.XKv.schema(this.schema,"items",this.rootSchema),Array.isArray(this.resolvedSchema.anyOf)?this.itemInfos=getCombinatorInfos(this.resolvedSchema.anyOf,this.rootSchema):Array.isArray(this.resolvedSchema.oneOf)&&(this.itemInfos=getCombinatorInfos(this.resolvedSchema.oneOf,this.rootSchema))),t.has("state")){const t=(0,jsonforms_core_esm.oid)(this.state.dispatch);this.addItem=e=>t.addItem(this.path,e)(),this.removeItem=e=>{t.removeItems(this.path,[e])()},this.moveItem=(t,e)=>{this.state.dispatch((0,jsonforms_core_esm.yoy)(this.path,(r=>(((t,e,r)=>{let o=1;const a=t.splice(e,o)[0];o=0,t.splice(r,o,a)})(r,t,e),r))))}}return super.shouldUpdate(t)}render(){var t;const e=null!==(t=this.schema.maxItems)&&void 0!==t?t:Number.MAX_SAFE_INTEGER,r=Array.isArray(this.data)?this.data.length:0,o=this.minimal?"":lit.qy`
            <span slot="header">${this.label?(0,jsonforms_core_esm.m25)(this.label,this.required,!1):""}</span>
            <div id="header-description" slot="header-description">
                <div id="errors">
                    ${this.errors?lit.qy`<or-icon icon="alert"></or-icon><span>${this.errors}</span>`:""}
                </div>
                <div id="header-buttons"><or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" outlined label="json" icon="pencil" @or-mwc-input-changed="${t=>this._showJson(t)}"></or-mwc-input></div>
            </div>
        `,a=lit.qy`
            ${o}
            <div id="content-wrapper" slot="content">
                <div id="content" @dragover="${t=>this._onDragOver(t)}">
                    
                    ${Array.isArray(this.data)?this.data.map(((t,e)=>{const r=jsonforms_core_esm.JhW.compose(this.path,""+e),o={renderers:this.renderers,uischema:controlWithoutLabel("#"),schema:this.resolvedSchema,path:r};return this.getArrayItemWrapper(getTemplateFromProps(this.state,o)||lit.qy``,e)})):""}

                </div>
                ${this.errors?"":lit.qy`
                    <div id="footer">
                        <or-mwc-input .disabled="${r&&r>=e}" .type="${or_mwc_input.NZ.BUTTON}" label="addItem" icon="plus" @or-mwc-input-changed="${()=>this.doAddItem()}"></or-mwc-input>
                    </div>
                `}
            </div>
        `;return this.minimal?lit.qy`<div>${a}</div>`:lit.qy`<or-collapsible-panel>${a}</or-collapsible-panel>`}getArrayItemWrapper(t,e){return lit.qy`
            <div class="item-wrapper" data-index="${e}">
                <div class="drag-container">
                    <button draggable="true" @dragstart="${t=>this._onDragStart(t)}" @dragend="${t=>this._onDragEnd(t)}" class="draggable button-clear"><or-icon icon="menu"></or-icon></input>
                </div>
                ${getTemplateWrapper(t,(()=>this.removeItem(e)))}
            </div>
        `}_onDragStart(t){const e=t.currentTarget.parentElement.parentElement;e.classList.add("dragging");const r=e.lastElementChild;t.dataTransfer.setDragImage(r,r.getBoundingClientRect().width/2-50,0)}_onDragEnd(t){const e=[...this.shadowRoot.querySelectorAll(".item-wrapper")],r=t.currentTarget.parentElement.parentElement;r.classList.remove("dragging");const o=Number(r.getAttribute("data-index")),a=Math.max(0,(null!==r.getAttribute("data-after-index")?Number(r.getAttribute("data-after-index")):e.length)-1);e.forEach((t=>t.classList.remove("indicator-before","indicator-after"))),o!==a&&this.moveItem(o,a)}_onDragOver(t){const e=this.shadowRoot.querySelector(".dragging");if(!e)return;t.preventDefault();const r=[...this.shadowRoot.querySelectorAll(".item-wrapper:not(.dragging)")],o={offset:Number.NEGATIVE_INFINITY,element:null},a=r.reduce(((e,r)=>{const o=r.getBoundingClientRect(),a=t.clientY-o.top-o.height/2;return a<0&&a>e.offset?{offset:a,element:r}:e}),o).element;if(r.forEach((t=>t.classList.remove("indicator-before","indicator-after"))),null===a)r[r.length-1].classList.add("indicator-after"),e.removeAttribute("data-after-index");else{a.classList.add("indicator-before");const t=a.getAttribute("data-index");e.setAttribute("data-after-index",t)}}_showJson(t){t.stopPropagation(),showJsonEditor(this.title||this.schema.title||"",this.data,(t=>{this.handleChange(this.path||"",t)}))}doAddItem(){this.resolvedSchema&&(this.itemInfos?this.showAddDialog():this.addItem((0,jsonforms_core_esm.DmA)(this.resolvedSchema)))}showAddDialog(){let t;const e=this.itemInfos.map(((t,e)=>{const r=t.title?(0,jsonforms_core_esm.m25)(t.title,!1,!0):"";return{text:r,value:r,data:t}})),r=(0,or_mwc_dialog.ui)((new or_mwc_dialog.X$).setContent(lit.qy`
                <div class="col">
                    <form id="mdc-dialog-form-add" class="row">
                        <div id="type-list" class="col">
                            <or-mwc-list @or-mwc-list-changed="${e=>{var o;1===e.detail.length&&(o=e.detail[0].data,t=o,r.shadowRoot.getElementById("parameter-desc").innerHTML=o.description||"",r.shadowRoot.getElementById("add-btn").disabled=!1)}}" .listItems="${e.sort(((t,e)=>t.text.localeCompare(e.text)))}" id="parameter-list"></or-mwc-list>
                        </div>
                        <div id="parameter-desc" class="col"></div>
                    </form>
                </div>
            `).setStyles(addItemOrParameterDialogStyle).setHeading((this.label?(0,jsonforms_core_esm.m25)(this.label,this.required,!1)+" - ":"")+or_translate_lib.MR.t("addItem")).setActions([{actionName:"cancel",content:"cancel"},{default:!0,actionName:"add",action:()=>{if(t){const e=t.defaultValueCreator();this.addItem(e)}},content:lit.qy`<or-mwc-input id="add-btn" .type="${or_mwc_input.NZ.BUTTON}" disabled label="add"></or-mwc-input>`}]).setDismissAction(null))}};control_array_element_decorate([(0,decorators.MZ)()],ControlArrayElement.prototype,"minimal",void 0),ControlArrayElement=control_array_element_decorate([(0,decorators.EM)("or-json-forms-array-control")],ControlArrayElement);const isEnumArray=(0,jsonforms_core_esm.Uo6)((0,jsonforms_core_esm.LqE)("Control"),(0,jsonforms_core_esm.Uo6)((0,jsonforms_core_esm.f4S)((e=>(0,jsonforms_core_esm.dfR)(e,"array")&&!Array.isArray(e.items)&&!0===e.uniqueItems)),(0,jsonforms_core_esm.Qbm)("items",(e=>(e=>void 0!==e.oneOf&&e.oneOf.length>0&&e.oneOf.every((e=>void 0!==getSchemaConst(e))))(e)||(e=>Array.isArray(e.enum))(e))))),verticalOrGroupLayoutTester=(0,jsonforms_core_esm.Hc7)(1,(0,jsonforms_core_esm.or)((0,jsonforms_core_esm.LqE)("VerticalLayout"),(0,jsonforms_core_esm.LqE)("Group"))),constTester=(0,jsonforms_core_esm.Hc7)(6,(0,jsonforms_core_esm.f4S)((e=>void 0!==getSchemaConst(e)))),inputControlTester=(0,jsonforms_core_esm.Hc7)(3,(0,jsonforms_core_esm.or)((0,jsonforms_core_esm.f4S)((e=>Array.isArray(e.type)&&7===e.type.length)),jsonforms_core_esm.Nyt,jsonforms_core_esm.uA2,jsonforms_core_esm.zz5,jsonforms_core_esm.aNO,jsonforms_core_esm.kcm,jsonforms_core_esm.ZCq,jsonforms_core_esm.PPm,jsonforms_core_esm.pyz,jsonforms_core_esm.GIF,isEnumArray)),objectControlTester=(0,jsonforms_core_esm.Hc7)(2,jsonforms_core_esm.zoU),anyOfOneOfControlTester=(0,jsonforms_core_esm.Hc7)(4,(0,jsonforms_core_esm.or)(jsonforms_core_esm.JQi,jsonforms_core_esm.n0P)),allOfControlTester=(0,jsonforms_core_esm.Hc7)(4,jsonforms_core_esm._bd);function getTemplateWrapper(e,r){const t=r?lit.qy`
                <button class="button-clear" @click="${r}"><or-icon icon="close-circle"></or-icon></input>
            `:"";return lit.qy`
                <div class="item-container">
                    ${e}
                    <div class="delete-container">
                        ${t}
                    </div>
                </div>
            `}const StandardRenderers=[{tester:verticalOrGroupLayoutTester,renderer:(e,r)=>{const t=Object.assign(Object.assign(Object.assign({},(0,jsonforms_core_esm.n93)({jsonforms:Object.assign({},e)},r)),(0,jsonforms_core_esm.XGy)(e.dispatch)),{label:r.label,required:r.required,errors:r.errors,minimal:r.minimal,type:r.type}),o=lit.qy`<or-json-forms-vertical-layout .state="${e}" .props="${t}"></or-json-forms-vertical-layout>`;let n;return!t.required&&t.path&&(n=()=>{t.handleChange(t.path||"",void 0)}),getTemplateWrapper(o,n)}},{tester:constTester,renderer:(e,r)=>{}},{tester:inputControlTester,renderer:(e,r)=>{const t=Object.assign(Object.assign({},(0,jsonforms_core_esm.kOB)({jsonforms:Object.assign({},e)},r)),(0,jsonforms_core_esm.XGy)(e.dispatch));t.label=r.label||t.label,t.required=!!r.required||t.required;const o=lit.qy`<or-json-forms-input-control .state="${e}" .props="${t}"></or-json-forms-input-control>`;let n;return!t.required&&t.path&&(n=()=>{t.handleChange(t.path,void 0)}),getTemplateWrapper(o,n)}},{tester:objectControlTester,renderer:(e,r)=>{const{required:t,renderers:o,cells:n,uischemas:a,schema:s,label:i,errors:l,path:c,visible:m,enabled:p,uischema:h,rootSchema:u}=(0,jsonforms_core_esm.to_)({jsonforms:Object.assign({},e)},r);return getTemplateFromProps(e,{visible:m,enabled:p,schema:s,uischema:(0,jsonforms_core_esm.N92)(a,s,h.scope,c,"VerticalLayout",h,u),path:c,renderers:o,cells:n,label:r.label||getLabel(s,u,i)||"",required:!!r.required||!!t,errors:l,minimal:r.minimal})}},{tester:(0,jsonforms_core_esm.Hc7)(2,(0,jsonforms_core_esm.f4S)((e=>(0,jsonforms_core_esm.dfR)(e,"array")&&!Array.isArray(e.items)))),renderer:(e,r)=>{const t=Object.assign(Object.assign({},(0,jsonforms_core_esm.kOB)({jsonforms:Object.assign({},e)},r)),(0,jsonforms_core_esm.XGy)(e.dispatch));t.label=r.label||t.label,t.required=!!r.required||t.required,t.minimal=r.minimal;const o=lit.qy`<or-json-forms-array-control .state="${e}" .props="${t}"></or-json-forms-array-control>`;let n;return!t.required&&t.path&&(n=()=>{t.handleChange(t.path,void 0)}),getTemplateWrapper(o,n)}},{tester:anyOfOneOfControlTester,renderer:(e,r)=>{const t={jsonforms:Object.assign({},e)},{required:o,renderers:n,cells:a,schema:s,label:i,path:l,errors:c,visible:m,enabled:p,uischema:h,rootSchema:u,data:d}=(0,jsonforms_core_esm.to_)(t,r),C=void 0!==s.anyOf?"anyOf":"oneOf",f=(0,jsonforms_core_esm.VoW)(s,u,C),b=function mapStateToCombinatorRendererProps(e,t,o){const{uischema:r}=t,i=(0,jsonforms_core_esm.D1A)(r,t.path),s=(0,jsonforms_core_esm._wW)(e),n=jsonforms_core_esm.XKv.schema(t.schema||s,r.scope,s),a=void 0===t.visible||(0,jsonforms_core_esm.WiS)(r)?(0,jsonforms_core_esm.zNq)(r,(0,jsonforms_core_esm.bQ_)(e),t.path,(0,jsonforms_core_esm.qDI)(e)):t.visible,c=t.id,l=jsonforms_core_esm.XKv.data((0,jsonforms_core_esm.bQ_)(e),i),m=e.jsonforms.core.ajv,p=n||s,u=(0,jsonforms_core_esm.VoW)(p,s,o),f=["required","additionalProperties","type","enum","const"];let d=-1;for(let e=0;e<u[o].length;e++)try{const t=Object.assign({definitions:s.definitions},u[o][e]),r=m.compile(t);if(r(l),!(h=r.errors)||0===h.length||!h.find((e=>-1!==f.indexOf(e.keyword)))){d=e;break}}catch(e){console.debug("Combinator subschema is not self contained, can't hand it over to AJV")}var h;return{data:l,path:i,schema:p,rootSchema:s,visible:a,id:c,indexOfFittingSchema:d,uischemas:e.jsonforms.uischemas,uischema:r}}(t,r,C),O=(0,jsonforms_core_esm.uU2)(f[C],u,C,b.uischema||h,l,b.uischemas);if(null!=d&&(void 0===b.indexOfFittingSchema||b.indexOfFittingSchema<0)){const e=getCombinatorInfos(f[C],u),r=e.length>0?e[0].constProperty:void 0;if(r&&"object"==typeof d&&d[r]){const t=d[r];b.indexOfFittingSchema=e.findIndex((e=>e.constValue===t))}}if(void 0===b.indexOfFittingSchema||b.indexOfFittingSchema<0){const{handleChange:t}=(0,jsonforms_core_esm.XGy)(e.dispatch);if(null!=d){console.warn("Cannot match "+C+" schema to instance data");const e=e=>{e.stopPropagation(),showJsonEditor(i,d,(e=>{t(l||"",e)}))};return lit.qy`
                <div class="item-container no-match-container"><span>${i}:</span><b><or-translate value="validation.noSchemaMatchFound"></b><or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" outlined label="json" icon="pencil" @or-mwc-input-changed="${r=>e(r)}"></or-mwc-input></div>
            `}return getSchemaPicker(u,f,0,C,r.label||i,(e=>t(l,e.defaultValueCreator())))}const y=O[b.indexOfFittingSchema].schema;let T=O[b.indexOfFittingSchema].uischema;y.allOf&&(T={type:"Control",scope:"#",label:!1});return getTemplateFromProps(e,{schema:y,uischema:T,path:l,renderers:n,cells:a,label:r.label||getLabel(y,u,i)||"",required:r.required||!!o,errors:c,minimal:r.minimal,type:y.title})}},{tester:allOfControlTester,renderer:(e,r)=>{const t={jsonforms:Object.assign({},e)},o=Object.assign({},(0,jsonforms_core_esm.to_)(t,r)),n=(0,jsonforms_core_esm.VoW)(o.schema,o.rootSchema,"allOf");return o.schema=n.allOf.reduce(((e,r)=>lib.J0.mergeObjects(e,r,!1))),o.uischema.scope="#",o.label=r.label||o.label,o.required=!!r.required||o.required,o.minimal=r.minimal,getTemplateFromProps(e,o)}}];var lib_decorate=function(e,t,r,o){var s,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(a<3?s(i):a>3?s(t,r,i):s(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};const styles=lit.AH`
    .delete-container {
        width: 0;
    }

    .item-container {
        margin: 0; /* Remove inherited margin */
    }
`;let OrJSONForms=class extends lit.WF{constructor(){super(...arguments),this.renderers=StandardRenderers,this.readonly=!1,this.required=!1,this.previousErrors=[]}static get styles(){return[baseStyle,styles]}checkValidity(){return 0===this.previousErrors.length}shouldUpdate(e){if(super.shouldUpdate(e),this.schema||(this.schema=void 0!==this.data?(0,jsonforms_core_esm.l$M)(this.data):{}),this.uischema||(this.uischema=(0,jsonforms_core_esm.qlT)(this.schema)),this.core||(this.core={ajv:(0,jsonforms_core_esm.grE)({useDefaults:!0,validateFormats:!1}),data:{},schema:this.schema,uischema:this.uischema},this.updateCore(jsonforms_core_esm.En0.init(this.data,this.schema,this.uischema)),this.config=(0,jsonforms_core_esm.tWo)(void 0,(0,jsonforms_core_esm.Nk5)(this.config))),(e.has("data")||e.has("schema")||e.has("uischema"))&&this.updateCore(jsonforms_core_esm.En0.updateCore(this.data,this.schema,this.uischema)),(!this.contextValue||e.has("core")||e.has("renderers")||e.has("cells")||e.has("config")||e.has("readonly"))&&(this.contextValue={core:this.core,renderers:this.renderers,cells:this.cells,config:this.config,uischemas:this.uischemas,readonly:this.readonly,dispatch:e=>this.updateCore(e)}),e.has("core")){const e=this.core.data,t=this.core.errors;this.onChange&&(!lib.J0.objectsEqual(e,this.previousData,!0)||t&&!lib.J0.objectsEqual(t,this.previousErrors,!0))&&(this.previousErrors=t||[],this.previousData=e,this.onChange({data:e,errors:t}))}return!0}updateCore(e){const t=(0,jsonforms_core_esm.kkC)(this.core,e);return t!==this.core&&(this.core=t),e}render(){if(!this.contextValue)return lit.qy``;const e=Object.assign(Object.assign({},(0,jsonforms_core_esm.DWl)({jsonforms:Object.assign({},this.contextValue)},this)),{label:getLabel(this.schema,this.uischema,this.label,void 0)||"",required:this.required});return getTemplateFromProps(this.contextValue,e)||lit.qy``}};lib_decorate([(0,decorators.MZ)({type:Object})],OrJSONForms.prototype,"uischema",void 0),lib_decorate([(0,decorators.MZ)({type:Object})],OrJSONForms.prototype,"schema",void 0),lib_decorate([(0,decorators.MZ)({type:Object,attribute:!1})],OrJSONForms.prototype,"data",void 0),lib_decorate([(0,decorators.MZ)({type:Array})],OrJSONForms.prototype,"renderers",void 0),lib_decorate([(0,decorators.MZ)({type:Array})],OrJSONForms.prototype,"cells",void 0),lib_decorate([(0,decorators.MZ)({type:String,attribute:!1})],OrJSONForms.prototype,"onChange",void 0),lib_decorate([(0,decorators.MZ)({type:String,attribute:!1})],OrJSONForms.prototype,"config",void 0),lib_decorate([(0,decorators.MZ)({type:Array})],OrJSONForms.prototype,"uischemas",void 0),lib_decorate([(0,decorators.MZ)({type:Boolean})],OrJSONForms.prototype,"readonly",void 0),lib_decorate([(0,decorators.MZ)({type:String})],OrJSONForms.prototype,"label",void 0),lib_decorate([(0,decorators.MZ)({type:Boolean})],OrJSONForms.prototype,"required",void 0),lib_decorate([(0,decorators.wk)()],OrJSONForms.prototype,"core",void 0),lib_decorate([(0,decorators.wk)()],OrJSONForms.prototype,"contextValue",void 0),OrJSONForms=lib_decorate([(0,decorators.EM)("or-json-forms")],OrJSONForms)},"../../component/or-map/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{mk:()=>OrMapAssetCardLoadAssetEvent,fX:()=>OrMapClickedEvent,qO:()=>OrMapGeocoderChangeEvent,z$:()=>OrMapLoadedEvent,tm:()=>OrMapLongPressEvent,rC:()=>OrMapMarkerClickedEvent,NS:()=>geoJsonPointInputTemplateProvider});var lib=__webpack_require__("../../component/core/lib/index.js"),flattened_nodes_observer=__webpack_require__("../../../node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js"),lit=__webpack_require__("../../../node_modules/lit/index.js"),decorators=__webpack_require__("../../../node_modules/lit/decorators.js"),maplibre_gl=__webpack_require__("../../../node_modules/maplibre-gl/dist/maplibre-gl.js"),maplibre_gl_default=__webpack_require__.n(maplibre_gl),maplibre_gl_geocoder_lib=__webpack_require__("../../../node_modules/@maplibre/maplibre-gl-geocoder/lib/index.js"),lib_default=__webpack_require__.n(maplibre_gl_geocoder_lib),lodash=(__webpack_require__("../../../node_modules/@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css"),__webpack_require__("../../../node_modules/lodash/lodash.js")),model_lib=__webpack_require__("../../component/model/lib/index.js");function getLngLat(t){if(t){if(t instanceof maplibre_gl.LngLat)return t;if(t.lat)return t.lon?{lng:t.lon,lat:t.lat}:{lng:t.lng,lat:t.lat};if(Array.isArray(t))return{lng:t[0],lat:t[1]};if(t.coordinates&&Array.isArray(t.coordinates)&&t.coordinates.length>=2)return getLngLat(t.coordinates);if(t.attributes){const n=t.attributes.location;if(!n)return;return n.value?getLngLat(n.value):void 0}return t.value?getLngLat(t.value):void 0}}function getGeoJSONPoint(t){if(t)return Array.isArray(t)?{type:"Point",coordinates:t}:{type:"Point",coordinates:[t.hasOwnProperty("lng")?t.lng:t.lon,t.lat]}}function getLatLngBounds(t){const n=function getLngLatBounds(t){if(t){if(t instanceof maplibre_gl.LngLatBounds)return t;const n=t;if(2===n.length){const t=getLngLat(n[0]),e=getLngLat(n[1]);if(t&&e)return new maplibre_gl.LngLatBounds(t,e)}if(4===n.length)return new maplibre_gl.LngLatBounds([n[0],n[1],n[2],n[3]])}}(t);if(n)return L.latLngBounds(n.getNorthEast(),n.getSouthWest())}function getMarkerIconAndColorFromAssetType(t,n){if(!t)return;const e="string"==typeof t?model_lib.u0.getAssetDescriptor(t):t,o=e&&e.icon?e.icon:"help-circle";let r=e&&e.colour?e.colour:void 0;if(n&&n.markerConfig){const t=n.markerConfig,e=n.currentValue;if("range"===t.type&&t.ranges&&"number"==typeof e){const n=t.ranges;r=(n.sort(((t,n)=>n.min-t.min)).find((t=>e>=t.min))||n.reduce(((t,n)=>n.min>t.min?t:n))).colour||void 0}else"boolean"===t.type?r=t[!!e+""]:"string"===t.type&&(r=t[e+""])}return{color:r,icon:o}}var __awaiter=function(e,t,o,i){return new(o||(o=Promise))((function(s,r){function a(e){try{l(i.next(e))}catch(e){r(e)}}function n(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,n)}l((i=i.apply(e,t||[])).next())}))};const mapboxJsStyles=__webpack_require__("../../../node_modules/mapbox.js/dist/mapbox.css"),maplibreGlStyles=__webpack_require__("../../../node_modules/maplibre-gl/dist/maplibre-gl.css"),maplibreGeoCoderStyles=__webpack_require__("../../../node_modules/@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css"),metersToPixelsAtMaxZoom=(e,t)=>e/.075/Math.cos(t*Math.PI/180);class MapWidget{constructor(e,t,o,i=!1,s=!1,r=!0,a=!0){this._loaded=!1,this._markersJs=new Map,this._markersGl=new Map,this._geoJsonSources=[],this._geoJsonLayers=new Map,this._showGeoCodingControl=!1,this._showBoundaryBox=!1,this._useZoomControls=!0,this._showGeoJson=!0,this._clickHandlers=new Map,this._type=e,this._styleParent=t,this._mapContainer=o,this._showGeoCodingControl=i,this._showBoundaryBox=s,this._useZoomControls=r,this._showGeoJson=a}setCenter(e){switch(this._center=getLngLat(e),this._type){case"RASTER":if(this._mapJs){const e=getLngLat(this._center)||(this._viewSettings?getLngLat(this._viewSettings.center):void 0);e&&this._mapJs.setView(e,void 0,{pan:{animate:!1},zoom:{animate:!1}})}break;case"VECTOR":this._mapGl&&this._center&&this._mapGl.setCenter(this._center)}return this}flyTo(e,t){switch(this._type){case"RASTER":this._mapJs;break;case"VECTOR":e||(e=this._center?this._center:this._viewSettings?this._viewSettings.center:void 0),t||(t=this._zoom?this._zoom:this._viewSettings&&this._viewSettings.zoom?this._viewSettings.zoom:void 0),this._mapGl?e&&this._mapGl.flyTo({center:e,zoom:t}):(this._center=e,this._zoom=t)}return this}resize(){switch(this._type){case"RASTER":this._mapJs;break;case"VECTOR":this._mapGl&&this._mapGl.resize()}return this}setZoom(e){switch(this._zoom=e,this._type){case"RASTER":this._mapJs&&this._zoom&&this._mapJs.setZoom(this._zoom,{animate:!1});break;case"VECTOR":this._mapGl&&this._zoom&&this._mapGl.setZoom(this._zoom)}return this}setControls(e){return this._controls=e,this._mapGl&&(this._controls?this._controls.forEach((e=>{if(Array.isArray(e)){const t=e;this._mapGl.addControl(t[0],t[1])}else this._mapGl.addControl(e)})):this._mapGl.addControl(new maplibre_gl.NavigationControl)),this}setGeoJson(e){var t;return this._geoJsonConfig=e,this._mapGl&&(this._geoJsonConfig?this.loadGeoJSON(this._geoJsonConfig):this.loadGeoJSON(null===(t=this._viewSettings)||void 0===t?void 0:t.geoJson)),this}loadViewSettings(){var e;return __awaiter(this,void 0,void 0,(function*(){let t;t="RASTER"===this._type?yield lib.Ay.rest.api.MapResource.getSettingsJs():yield lib.Ay.rest.api.MapResource.getSettings();const o=t.data,i=lib.Ay.displayRealm||"default";return this._viewSettings=o.options?o.options[i]?o.options[i]:o.options.default:null,this._viewSettings&&(this._mapGl&&(this._mapGl.setMinZoom(this._viewSettings.minZoom),this._mapGl.setMaxZoom(this._viewSettings.maxZoom),this._viewSettings.bounds&&this._mapGl.setMaxBounds(this._viewSettings.bounds),this._geoJsonConfig?yield this.loadGeoJSON(this._geoJsonConfig):yield this.loadGeoJSON(null===(e=this._viewSettings)||void 0===e?void 0:e.geoJson)),this._center?this.setCenter(this._center):this.setCenter(this._viewSettings.center)),o}))}load(){var e;return __awaiter(this,void 0,void 0,(function*(){if(!this._loaded){if("RASTER"===this._type){const e=document.createElement("style");e.id="mapboxJsStyle",e.textContent=mapboxJsStyles,this._styleParent.appendChild(e);const t=yield this.loadViewSettings();let o;if(this._viewSettings){if(o={},o.zoom=this._viewSettings.zoom?this._viewSettings.zoom+1:void 0,this._useZoomControls&&(o.maxZoom=this._viewSettings.maxZoom?this._viewSettings.maxZoom-1:void 0,o.minZoom=this._viewSettings.minZoom?this._viewSettings.minZoom+1:void 0),o.boxZoom=this._viewSettings.boxZoom,this._viewSettings.bounds&&(o.maxBounds=getLatLngBounds(this._viewSettings.bounds)),this._viewSettings.center){const e=getLngLat(this._viewSettings.center);o.center=e?L.latLng(e.lat,e.lng):void 0}if(this._center){const e=getLngLat(this._center);o.center=e?L.latLng(e.lat,e.lng):void 0}this._zoom&&(o.zoom=this._zoom+1)}if(this._mapJs=L.mapbox.map(this._mapContainer,t,o),this._mapJs.on("click",(e=>{this._onMapClick(e.latlng)})),o&&o.maxBounds){const e=this._mapJs.getBoundsZoom(o.maxBounds,!0);(!o.minZoom||o.minZoom<e)&&this._mapJs.setMinZoom(e)}}else{let t=document.createElement("style");t.id="maplibreGlStyle",t.textContent=maplibreGlStyles,this._styleParent.appendChild(t),t=document.createElement("style"),t.id="maplibreGeoCoderStyles",t.textContent=maplibreGeoCoderStyles,this._styleParent.appendChild(t);const o=yield Promise.resolve().then(__webpack_require__.t.bind(__webpack_require__,"../../../node_modules/maplibre-gl/dist/maplibre-gl.js",23)),i=yield this.loadViewSettings(),s={attributionControl:{compact:!0},container:this._mapContainer,style:i,transformRequest:(e,t)=>({headers:{Authorization:lib.Ay.getAuthorizationHeader()},url:e})};this._viewSettings&&(this._useZoomControls&&(s.maxZoom=this._viewSettings.maxZoom,s.minZoom=this._viewSettings.minZoom),this._viewSettings.bounds&&!this._showBoundaryBox&&(s.maxBounds=this._viewSettings.bounds),s.boxZoom=this._viewSettings.boxZoom,s.zoom=this._viewSettings.zoom,s.center=this._viewSettings.center),this._center=this._center||(this._viewSettings?this._viewSettings.center:void 0),s.center=this._center,this._zoom&&(s.zoom=this._zoom),this._mapGl=new o.Map(s),yield this.styleLoaded(),this._mapGl.on("click",(e=>{this._onMapClick(e.lngLat)})),this._mapGl.on("dblclick",(e=>{this._onMapClick(e.lngLat,!0)})),this._showGeoCodingControl&&this._viewSettings&&this._viewSettings.geocodeUrl&&(this._geocoder=new(lib_default())({forwardGeocode:this._forwardGeocode.bind(this),reverseGeocode:this._reverseGeocode},{maplibregl:maplibre_gl_default(),showResultsWhileTyping:!0}),this._geocoder._onKeyDown=(0,lodash.debounce)((e=>{var t=27,o=9;if(e.keyCode===t&&this._geocoder.options.clearAndBlurOnEsc)return this._geocoder._clear(e),this._geocoder._inputEl.blur();var i=this._geocoder._inputEl.value||e.key;if(!i)return this._geocoder.fresh=!0,e.keyCode!==o&&this._geocoder.clear(e),this._geocoder._clearEl.style.display="none";if(!e.metaKey&&-1===[o,t,37,39,38,40].indexOf(e.keyCode)){if(13===e.keyCode){if(this._geocoder.options.showResultsWhileTyping)return this._geocoder.options.showResultMarkers&&this._geocoder._fitBoundsForMarkers(),this._geocoder._inputEl.value=this._geocoder._typeahead.query,this._geocoder.lastSelected=null,void(this._geocoder._typeahead.selected=null);this._geocoder._typeahead.list.selectingListItem||this._geocoder._geocode(i)}i.length>=this._geocoder.options.minLength&&this._geocoder.options.showResultsWhileTyping&&this._geocoder._geocode(i)}}),300),this._mapGl.addControl(this._geocoder,"top-left"),this._geocoder._inputEl.addEventListener("change",(()=>{var e=this._geocoder._typeahead.selected;this._onGeocodeChange(e)}))),this._controls?this._controls.forEach((e=>{if(Array.isArray(e)){const t=e;this._mapGl.addControl(t[0],t[1])}else this._mapGl.addControl(e)})):(this._mapGl.addControl(new maplibre_gl.NavigationControl),this._mapGl.addControl(new maplibre_gl.GeolocateControl({positionOptions:{enableHighAccuracy:!0},showAccuracyCircle:!0,showUserLocation:!0}))),this._geoJsonConfig?yield this.loadGeoJSON(this._geoJsonConfig):yield this.loadGeoJSON(null===(e=this._viewSettings)||void 0===e?void 0:e.geoJson),this._initLongPressEvent()}this._mapContainer.dispatchEvent(new OrMapLoadedEvent),this._loaded=!0,this.createBoundaryBox()}}))}styleLoaded(){return new Promise((e=>{this._mapGl&&this._mapGl.once("style.load",(()=>{e()}))}))}unload(){this._mapGl&&(this._mapGl.remove(),this._mapGl=void 0),this._mapJs&&(this._mapJs.remove(),this._mapJs=void 0)}_onMapClick(e,t=!1){this._mapContainer.dispatchEvent(new OrMapClickedEvent(e,t))}loadGeoJSON(e){return __awaiter(this,void 0,void 0,(function*(){if(this._geoJsonLayers.size>0&&(this._geoJsonLayers.forEach(((e,t)=>this._mapGl.removeLayer(t))),this._geoJsonLayers=new Map),this._geoJsonSources.length>0&&(this._geoJsonSources.forEach((e=>this._mapGl.removeSource(e))),this._geoJsonSources=[]),this._showGeoJson&&e)if("FeatureCollection"==e.source.type){const t=this.groupSourcesByGeometryType(e.source);null==t||t.forEach(((e,t)=>{const o={type:"geojson",data:{type:"FeatureCollection",features:e}},i=this.addGeoJSONSource(o);i&&this.addGeoJSONLayer(t,i.sourceId)}))}else if("Feature"==e.source.type){const t=this.addGeoJSONSource(e.source);t&&this.addGeoJSONLayer(t.source.type,t.sourceId)}else console.error("Could not create layer since source type is neither 'FeatureCollection' nor 'Feature'.")}))}groupSourcesByGeometryType(e){const t=new Map;return e.features.forEach((e=>{let o=t.get(e.geometry.type);null==o&&(o=[]),o.push(e),t.set(e.geometry.type,o)})),t}addGeoJSONSource(e){if(!this._mapGl)return void console.error("mapGl instance not found!");const t=Date.now()+"-"+(this._geoJsonSources.length+1);return this._mapGl.addSource(t,e),this._geoJsonSources.push(t),{source:e,sourceId:t}}addGeoJSONLayer(e,t){if(!this._mapGl)return void console.error("mapGl instance not found!");const o=e,i=t+"-"+o;if(null==this._geoJsonLayers.get(i)){let e=getComputedStyle(this._mapContainer).getPropertyValue("--or-app-color4");null!=e&&0!=e.length||(e=lib.BB);let s={id:i,source:t};switch(o){case"Point":case"MultiPoint":s.type="circle",s.paint={"circle-radius":12,"circle-color":e},this._geoJsonLayers.set(i,s),this._mapGl.addLayer(s);break;case"LineString":case"MultiLineString":s.type="line",s.paint={"line-color":e,"line-width":4},this._geoJsonLayers.set(i,s),this._mapGl.addLayer(s);break;case"Polygon":case"MultiPolygon":{s.type="fill",s.paint={"fill-color":e,"fill-opacity":.3},this._geoJsonLayers.set(i,s),this._mapGl.addLayer(s);const o=i+"-outline",r={id:o,source:t,type:"line",paint:{"line-color":e,"line-width":2}};this._geoJsonLayers.set(o,r),this._mapGl.addLayer(r);break}case"GeometryCollection":return void console.error("GeometryCollection GeoJSON is not implemented yet!")}}}addMarker(e){e.hasPosition()&&this._updateMarkerElement(e,!0)}removeMarker(e){this._removeMarkerRadius(e),this._updateMarkerElement(e,!1)}onMarkerChanged(e,t){if(this._loaded)switch(t){case"lat":case"lng":case"radius":e.hasPosition()?e._actualMarkerElement?this._updateMarkerPosition(e):this._updateMarkerElement(e,!0):e._actualMarkerElement&&this._updateMarkerElement(e,!1)}}_updateMarkerPosition(e){switch(this._type){case"RASTER":const t=this._markersJs.get(e);t&&t.setLatLng([e.lat,e.lng]);break;case"VECTOR":const o=this._markersGl.get(e);o&&o.setLngLat([e.lng,e.lat])}this._createMarkerRadius(e)}_updateMarkerElement(e,t){switch(this._type){case"RASTER":let o=this._markersJs.get(e);if(o&&(this._removeMarkerClickHandler(e,e.markerContainer),e._actualMarkerElement=void 0,o.removeFrom(this._mapJs),this._markersJs.delete(e)),t){const t=e._createMarkerElement();if(t){const i=L.divIcon({html:t.outerHTML,className:"or-marker-raster"});o=L.marker([e.lat,e.lng],{icon:i,clickable:e.interactive}),o.addTo(this._mapJs),e._actualMarkerElement=o.getElement()?o.getElement().firstElementChild:void 0,e.interactive&&this._addMarkerClickHandler(e,e.markerContainer),this._markersJs.set(e,o)}e.radius&&this._createMarkerRadius(e)}break;case"VECTOR":let i=this._markersGl.get(e);if(i&&(e._actualMarkerElement=void 0,this._removeMarkerClickHandler(e,i.getElement()),i.remove(),this._markersGl.delete(e)),t){const t=e._createMarkerElement();t&&(i=new maplibre_gl.Marker({element:t,anchor:"top-left"}).setLngLat([e.lng,e.lat]).addTo(this._mapGl),this._markersGl.set(e,i),e._actualMarkerElement=i.getElement(),e.interactive&&this._addMarkerClickHandler(e,i.getElement())),e.radius&&this._createMarkerRadius(e)}}}_removeMarkerRadius(e){this._mapGl&&this._loaded&&e.radius&&e.lat&&e.lng&&this._mapGl.getSource("circleData")&&(this._mapGl.removeLayer("marker-radius-circle"),this._mapGl.removeSource("circleData"))}_createMarkerRadius(e){this._mapGl&&this._loaded&&e.radius&&e.lat&&e.lng&&(this._removeMarkerRadius(e),this._mapGl.addSource("circleData",{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[e.lng,e.lat]},properties:{title:"You Found Me"}}]}}),this._mapGl.addLayer({id:"marker-radius-circle",type:"circle",source:"circleData",paint:{"circle-radius":["interpolate",["linear"],["zoom"],0,0,20,metersToPixelsAtMaxZoom(e.radius,e.lat)],"circle-color":"red","circle-opacity":.3}}))}createBoundaryBox(e=[]){var t,o;if(this._mapGl&&this._loaded&&this._showBoundaryBox&&(null===(t=this._viewSettings)||void 0===t?void 0:t.bounds)){this._mapGl.getSource("bounds")&&(this._mapGl.removeLayer("bounds"),this._mapGl.removeSource("bounds")),4!==e.length&&(e=null===(o=this._viewSettings)||void 0===o?void 0:o.bounds.toString().split(","));var i=[[[e[0],e[3]],[e[2],e[3]],[e[2],e[1]],[e[0],e[1]],[e[0],e[3]]]];this._mapGl.fitBounds([parseFloat(e[0])+.01,parseFloat(e[1])-.01,parseFloat(e[2])-.01,parseFloat(e[3])+.01]),this._mapGl.addSource("bounds",{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:i}}}),this._mapGl.addLayer({id:"bounds",type:"fill",source:"bounds",paint:{"fill-color":"#FF0000","fill-opacity":.4}})}}_addMarkerClickHandler(e,t){if(t){const o=t=>{t.stopPropagation(),e._onClick(t)};this._clickHandlers.set(e,o),t.addEventListener("click",o)}}_removeMarkerClickHandler(e,t){const o=this._clickHandlers.get(e);o&&t&&(t.removeEventListener("click",o),this._clickHandlers.delete(e))}_forwardGeocode(e){return __awaiter(this,void 0,void 0,(function*(){const t=[];try{let o=this._viewSettings.geocodeUrl+"/search?q="+e.query+"&format=geojson&polygon_geojson=1&addressdetails=1";const i=yield fetch(o),s=yield i.json();for(let e of s.features){let o=[e.bbox[0]+(e.bbox[2]-e.bbox[0])/2,e.bbox[1]+(e.bbox[3]-e.bbox[1])/2],i={type:"Feature",geometry:{type:"Point",coordinates:o},place_name:e.properties.display_name,properties:e.properties,text:e.properties.display_name,place_type:["place"],center:o};t.push(i)}}catch(e){console.error(`Failed to forwardGeocode with error: ${e}`)}return{features:t}}))}_reverseGeocode(e){return __awaiter(this,void 0,void 0,(function*(){const t=[];try{let o=this._viewSettings.geocodeUrl+"/reverse?lat="+e.lat+"&lon="+e.lon+"&format=geojson&polygon_geojson=1&addressdetails=1";const i=yield fetch(o),s=yield i.json();for(let e of s.features){let o=[e.bbox[0]+(e.bbox[2]-e.bbox[0])/2,e.bbox[1]+(e.bbox[3]-e.bbox[1])/2],i={type:"Feature",geometry:{type:"Point",coordinates:o},place_name:e.properties.display_name,properties:e.properties,text:e.properties.display_name,place_type:["place"],center:o};t.push(i)}}catch(e){console.error(`Failed to reverseGeocode with error: ${e}`)}return{features:t}}))}_initLongPressEvent(){if(this._mapGl){let e,t,o=()=>{e&&clearTimeout(e),e=null};this._mapGl.on("touchstart",(o=>{o.originalEvent.touches.length>1||(t=o.lngLat,e=setTimeout((()=>{this._onLongPress(t)}),500))})),this._mapGl.on("mousedown",(o=>{e||(t=o.lngLat,e=setTimeout((()=>{this._onLongPress(t),e=null}),500))})),this._mapGl.on("dragstart",o),this._mapGl.on("mouseup",o),this._mapGl.on("touchend",o),this._mapGl.on("touchcancel",o),this._mapGl.on("touchmove",o),this._mapGl.on("moveend",o),this._mapGl.on("gesturestart",o),this._mapGl.on("gesturechange",o),this._mapGl.on("gestureend",o)}}_onLongPress(e){this._mapContainer.dispatchEvent(new OrMapLongPressEvent(e))}_onGeocodeChange(e){this._mapContainer.dispatchEvent(new OrMapGeocoderChangeEvent(e))}}const style=lit.AH`
    :host {
        --internal-or-map-width: var(--or-map-width, 100%);
        --internal-or-map-min-height: var(--or-map-min-height, 300px);
        --internal-or-map-marker-transform: var(--or-map-marker-transform, translate(-16px, -29px));
        --internal-or-map-marker-width: var(--or-map-marker-width, 32px);
        --internal-or-map-marker-height: var(--or-map-marker-height, 32px);
        --internal-or-map-marker-color: var(--or-map-marker-color, var(--or-app-color4, ${(0,lit.iz)(lib.BB)}));
        --internal-or-map-marker-stroke: var(--or-map-marker-stroke, none);
        --internal-or-map-marker-icon-color: var(--or-map-marker-icon-color, var(--or-app-color1, ${(0,lit.iz)(lib.WO)}));
        --internal-or-map-marker-icon-stroke: var(--or-map-marker-icon-stroke, none);
        --internal-or-map-marker-icon-width: var(--or-map-marker-icon-width, 16px);
        --internal-or-map-marker-icon-height: var(--or-map-marker-icon-height, 16px);
        --internal-or-map-marker-icon-transform: var(--or-map-marker-icon-transform, translate(-50%, -14px));
        --internal-or-map-marker-active-transform: var(--or-map-marker-active-transform, translate(-24px, -44px));
        --internal-or-map-marker-active-width: var(--or-map-marker-active-width, 48px);
        --internal-or-map-marker-active-height: var(--or-map-marker-active-height, 48px);
        --internal-or-map-marker-active-color: var(--or-map-marker-active-color, var(--or-app-color4, ${(0,lit.iz)(lib.BB)}));
        --internal-or-map-marker-active-stroke: var(--or-map-marker-active-stroke, 2px);
        --internal-or-map-marker-icon-active-color: var(--or-map-marker-icon-active-color, var(--or-app-color1, ${(0,lit.iz)(lib.WO)}));
        --internal-or-map-marker-icon-active-stroke: var(--or-map-marker-icon-active-stroke, none);
        --internal-or-map-marker-icon-active-width: var(--or-map-marker-icon-active-width, 24px);
        --internal-or-map-marker-icon-active-height: var(--or-map-marker-icon-active-height, 24px);
        --internal-or-map-marker-icon-active-transform: var(--or-map-marker-icon-active-transform, translate(-50%, -20px));
        display: block;
        overflow: hidden;
        
        min-height: var(--internal-or-map-min-height);
        width: var(--internal-or-map-width);
    }
    
    canvas {
        outline: none !important;
    }

    :host([hidden]) {
        display: none;
    }

    slot {
        display: none;
    }
          
    #container {
        position: relative;
        width: 100%;
        height: 100%;    
    }
    
    #map {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    .mapboxgl-ctrl-geocoder,
    .maplibregl-ctrl-geocoder--input {
        width: calc(100% - 20px)
    }
    .leaflet-marker-icon, .maplibregl-marker, .mapboxgl-marker {
        pointer-events: none !important;
    }

    .or-map-marker {
        position: absolute; /* This makes mapboxJS behave like mapboxGL */
    }
    
    .or-map-marker.active {
        z-index: 1;
    }
    
    .marker-container {
        position: relative;
        cursor: pointer;
        transform: var(--internal-or-map-marker-transform);
        --or-icon-fill: var(--internal-or-map-marker-color);
        --or-icon-width: var(--internal-or-map-marker-width);
        --or-icon-height: var(--internal-or-map-marker-height);
        --or-icon-stroke: var(--internal-or-map-marker-stroke);
    }

    .or-map-marker.active .marker-container {
        transform: var(--internal-or-map-marker-active-transform);
        --or-icon-fill: var(--internal-or-map-marker-active-color);
        --or-icon-width: var(--internal-or-map-marker-active-width);
        --or-icon-height: var(--internal-or-map-marker-active-height);
        --or-icon-stroke: var(--internal-or-map-marker-active-stroke);
    }

    .or-map-marker.interactive .marker-container {
        pointer-events: all;
    }

    .or-map-marker-default.interactive .marker-container {
        pointer-events: none;
        --or-icon-pointer-events: visible;
    }

    .or-map-marker .marker-icon {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 1000;
        --or-icon-fill: var(--internal-or-map-marker-icon-color);
        --or-icon-stroke: var(--internal-or-map-marker-icon-stroke);
        --or-icon-width: var(--internal-or-map-marker-icon-width);
        --or-icon-height: var(--internal-or-map-marker-icon-height);
        transform: var(--internal-or-map-marker-icon-transform);
    }
    
    .or-map-marker.active .marker-icon {
        transform: var(--internal-or-map-marker-icon-active-transform);
        --or-icon-fill: var(--internal-or-map-marker-icon-active-color);
        --or-icon-stroke: var(--internal-or-map-marker-icon-active-stroke);
        --or-icon-width: var(--internal-or-map-marker-icon-active-width);
        --or-icon-height: var(--internal-or-map-marker-icon-active-height);
    }
    
    #openremote {
        position: absolute;
        bottom: 25px;
        right: 5px;
        height: 20px;
        width: 20px;
        cursor: pointer;
    }
    
    #openremote img {
        height: 20px;
        width: 20px;
    }
    
    @media only screen and (max-width: 640px) {
        #openremote {
            bottom: 40px;
            right: 12px;
        }
    }
`,mapAssetCardStyle=lit.AH`
            :host {
                --internal-or-map-asset-card-header-color: var(--or-map-asset-card-header-color, var(--or-app-color4, ${(0,lit.iz)(lib.BB)}));
                --internal-or-map-asset-card-header-text-color: var(--or-map-asset-card-header-text-color, var(--or-app-color1, ${(0,lit.iz)(lib.WO)}));
                --internal-or-map-asset-card-header-height: var(--or-map-asset-card-header-height, calc(${(0,lit.iz)(lib.Kk)} - 10px));
                --internal-or-map-asset-card-background-color: var(--or-map-asset-card-background-color, var(--or-app-color1, ${(0,lit.iz)(lib.WO)}));
                --internal-or-map-asset-card-background-text-color: var(--or-map-asset-card-background-text-color, var(--or-app-color3, ${(0,lit.iz)(lib.Iy)}));
                --internal-or-map-asset-card-separator-color: var(--or-map-asset-card-separator-color, var(--or-app-color2, ${(0,lit.iz)(lib.PR)}));
                
                display: block;
            }

            #card-container {
                display: flex;
                flex-direction: column;
                height: 100%;
                background-color: var(--internal-or-map-asset-card-background-color);
                -webkit-box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.28);
                -moz-box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.28);
                box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.28);  
            }
            
            #header {
                height: var(--internal-or-map-asset-card-header-height);
                background-color: var(--internal-or-map-asset-card-header-color);
                line-height: var(--internal-or-map-asset-card-header-height);
                border-bottom: 1px solid ${(0,lit.iz)(lib.Id)};
                text-align: center;
                color: var(--internal-or-map-asset-card-header-text-color);
                --or-icon-fill: var(--internal-or-map-asset-card-header-text-color);
                --or-icon-width: 20px;
                --or-icon-height: 20px;
                z-index: 99999;
            }

            #header > or-icon {
                margin-right: 5px;
            }
            
            #title {
                font-weight: 500;
            }
            
            #attribute-list {
                flex: 1;                
                color: var(--internal-or-map-asset-card-background-text-color);
                padding: 10px 20px;
                overflow: auto;
                font-size: 14px;
            }
            
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
            }
            
            li {
                display: flex;
                line-height: 30px;
            }
            li.highlighted {
                font-weight: bold;
            }
            
            .attribute-name {
                flex: 1;            
            }
            
            .attribute-value {
                overflow: hidden;
                padding-left: 20px;
                text-align: right;
            }
            
            #footer {
                height: var(--internal-or-map-asset-card-header-height);
                border-top: 1px solid var(--internal-or-map-asset-card-separator-color);
                text-align: right;
                padding: 5px 12px;
            }
            
            @media only screen and (min-width: 415px){
                #card-container {
                    height: 400px; /* fallback for IE */
                    height: max-content;
                    max-height: calc(100vh - 150px);
                    min-height: 134px;
                }
            }
`;var OrMapMarker_1,__decorate=function(e,t,r,a){var o,i=arguments.length,s=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,a);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};class OrMapMarkerChangedEvent extends CustomEvent{constructor(e,t){super(OrMapMarkerChangedEvent.NAME,{detail:{marker:e,property:t},bubbles:!0,composed:!0})}}OrMapMarkerChangedEvent.NAME="or-map-marker-changed";class OrMapMarkerClickedEvent extends CustomEvent{constructor(e){super(OrMapMarkerClickedEvent.NAME,{detail:{marker:e},bubbles:!0,composed:!0})}}OrMapMarkerClickedEvent.NAME="or-map-marker-clicked";let OrMapMarker=OrMapMarker_1=class extends lit.WF{constructor(){super(...arguments),this.visible=!0,this.interactive=!0,this.active=!1}static get styles(){return lit.AH`
          .label {
            background-color: white;
            width: auto;
            height: 20px;
            position: absolute;
            top: -14px;
            left: 50%;
            padding: 0 3px;
            transform: translate(-50%, -50%);
            text-align: center;
            border-radius: 3px;
            -webkit-box-shadow: ${(0,lit.iz)(lib.rO)};
            -moz-box-shadow: ${(0,lit.iz)(lib.rO)};
            box-shadow: ${(0,lit.iz)(lib.rO)};
          }
          .label > span {
            white-space: nowrap;
          }
          
          .direction-icon-wrapper {
            position: absolute;
            top: 11px;
            left: 16px;
          }
          .direction-circle {
            position: absolute;
            margin-top: -15px;
            margin-left: -15px;
            width: 30px;
            height: 30px;
          }
          .direction-circle circle {
            cx: 15px;
            cy: 15px;
            r: 12px;
            stroke: white;
            stroke-width: 3px;
            fill: transparent;
          }
          .direction-icon {
            position: absolute;
            top: -25px;
            left: -16px;
            transform: scale(0.75) rotate(-90deg);
          }
          
          .active .direction-icon-wrapper {
            top: 17px;
            left: 24px;
          }
          .active .direction-circle {
            margin-top: -20px;
            margin-left: -20px;
            width: 40px;
            height: 40px;
          }
          .active .direction-icon {
            top: -36px;
            left: -23px;
          }
          .active .direction-circle circle {
            cx: 20px;
            cy: 20px;
            r: 18px;
            stroke-width: 4px;
          }
        `}get markerContainer(){if(this._actualMarkerElement)return this._actualMarkerElement.firstElementChild}_onClick(e){this.dispatchEvent(new OrMapMarkerClickedEvent(this))}_createMarkerElement(){const e=document.createElement("div"),t=document.createElement("div");e.appendChild(t),this.addMarkerClassNames(e),this.addMarkerContainerClassNames(t);let r=this.createMarkerContent();return r||(e.classList.add("or-map-marker-default"),r=this.createDefaultMarkerContent()),t.appendChild(r),this.updateInteractive(e),this.updateVisibility(e),this.updateColor(t),this.updateActive(e),e}createMarkerContent(){let e=!1,t=document.createElement("div");if(this._slot&&this._slot.assignedNodes({flatten:!0}).forEach((r=>{r instanceof HTMLElement&&(t.appendChild(r.cloneNode(!0)),e=!0)})),e)return t}shouldUpdate(e){return(e.has("icon")||e.has("displayValue")||e.has("direction"))&&this.refreshMarkerContent(),(e.has("color")||e.has("activeColor"))&&this.updateColor(this.markerContainer),e.has("visible")&&this.updateVisibility(this._actualMarkerElement),e.has("interactive")&&this.updateInteractive(this._actualMarkerElement),e.has("active")&&(this.updateActive(this._actualMarkerElement),this.updateColor(this.markerContainer)),e.forEach(((e,t)=>this._raisePropertyChange(t))),!1}updateVisibility(e){e&&(this.visible?e.removeAttribute("hidden"):e.setAttribute("hidden","true"))}getColor(){return this.color&&"unset"!==this.color?this.color:void 0}getActiveColor(){return this.activeColor&&"unset"!==this.activeColor?this.activeColor:void 0}updateColor(e){if(e){e.style.removeProperty("--internal-or-map-marker-color"),e.style.removeProperty("--internal-or-map-marker-active-color");const t=this.getColor(),r=this.getActiveColor();t&&e.style.setProperty("--internal-or-map-marker-color",t),r&&e.style.setProperty("--internal-or-map-marker-active-color",r)}}updateActive(e){e&&(this.active?e.classList.add("active"):e.classList.remove("active"))}updateInteractive(e){e&&(this.interactive?e.classList.add("interactive"):e.classList.remove("interactive"))}refreshMarkerContent(){if(this.markerContainer){let e=this.createMarkerContent();e?this._actualMarkerElement.classList.remove("or-map-marker-default"):(this._actualMarkerElement.classList.add("or-map-marker-default"),e=this.createDefaultMarkerContent()),this.markerContainer.children.length>0&&this.markerContainer.removeChild(this.markerContainer.children[0]),this.markerContainer.appendChild(e)}}render(){return lit.qy`
          <slot></slot>
        `}_raisePropertyChange(e){this.dispatchEvent(new OrMapMarkerChangedEvent(this,e))}addMarkerClassNames(e){e.classList.add("or-map-marker")}addMarkerContainerClassNames(e){e.classList.add("marker-container")}createDefaultMarkerContent(){const e=document.createElement("div");return e.innerHTML=OrMapMarker_1._defaultTemplate(this.icon,{displayValue:this.displayValue,direction:this.direction}),e}hasPosition(){return"number"==typeof this.lat&&"number"==typeof this.lng&&this.lat>=-90&&this.lat<90&&this.lng>=-180&&this.lng<180}};OrMapMarker._defaultTemplate=(e,t)=>`\n        ${t&&void 0!==t.displayValue?`<div class="label"><span>${t.displayValue}</span></div>`:""}\n        ${t&&t.direction?`<div class="direction-icon-wrapper" style="transform: rotate(${t.direction}deg);">\n                <svg class="direction-circle">\n                 <circle/> \n                </svg>\n                <or-icon class="direction-icon" icon="play"></or-icon>\n               </div>`:""}\n        <or-icon icon="or:marker"></or-icon>\n        <or-icon class="marker-icon" icon="${e||""}"></or-icon>\n    `,__decorate([(0,decorators.MZ)({type:Number,reflect:!0,attribute:!0})],OrMapMarker.prototype,"lat",void 0),__decorate([(0,decorators.MZ)({type:Number,reflect:!0})],OrMapMarker.prototype,"lng",void 0),__decorate([(0,decorators.MZ)({type:Number,reflect:!0})],OrMapMarker.prototype,"radius",void 0),__decorate([(0,decorators.MZ)({reflect:!0})],OrMapMarker.prototype,"displayValue",void 0),__decorate([(0,decorators.MZ)({reflect:!0})],OrMapMarker.prototype,"direction",void 0),__decorate([(0,decorators.MZ)({type:Boolean})],OrMapMarker.prototype,"visible",void 0),__decorate([(0,decorators.MZ)({type:String})],OrMapMarker.prototype,"icon",void 0),__decorate([(0,decorators.MZ)({type:String})],OrMapMarker.prototype,"color",void 0),__decorate([(0,decorators.MZ)({type:String})],OrMapMarker.prototype,"activeColor",void 0),__decorate([(0,decorators.MZ)({type:Boolean})],OrMapMarker.prototype,"interactive",void 0),__decorate([(0,decorators.MZ)({type:Boolean})],OrMapMarker.prototype,"active",void 0),__decorate([(0,decorators.P)("slot")],OrMapMarker.prototype,"_slot",void 0),OrMapMarker=OrMapMarker_1=__decorate([(0,decorators.EM)("or-map-marker")],OrMapMarker);var or_map_marker_asset_decorate=function(t,e,r,s){var o,i=arguments.length,a=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,s);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},or_map_marker_asset_awaiter=function(t,e,r,s){return new(r||(r=Promise))((function(o,i){function a(t){try{c(s.next(t))}catch(t){i(t)}}function n(t){try{c(s.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,n)}c((s=s.apply(t,e||[])).next())}))};function getMarkerConfigForAssetType(t,e){if(t&&e&&t[e])return t[e]}let OrMapMarkerAsset=class extends((0,lib.B1)(lib.Ay)(OrMapMarker)){constructor(){super(),this.assetTypeAsIcon=!0,this.visible=!1}set type(t){let e;const r=getMarkerConfigForAssetType(this.config,t);if(r&&r.attributeName&&this.asset&&this.asset.attributes&&this.asset.attributes[r.attributeName]&&r.colours){const t=this.asset.attributes[r.attributeName].value;e={markerConfig:r.colours,currentValue:t}}const s=getMarkerIconAndColorFromAssetType(t,e);s?(this.assetTypeAsIcon&&(this.icon=s.icon),this.markerColor=Array.isArray(s.color)?s.color[0].colour:s.color||void 0,this.updateColor(this.markerContainer),this.visible=!0):this.visible=!1}shouldUpdate(t){if(t.has("assetId")&&(this.lat=void 0,this.lng=void 0,this.type=void 0,this.direction=void 0,this.displayValue=void 0,this.assetIds=this.assetId&&this.assetId.length>0?[this.assetId]:void 0,1===Object.keys(t).length))return!1;if(t.has("asset"))try{this.onAssetChanged(this.asset)}catch(t){console.error(t)}return super.shouldUpdate(t)}_onEvent(t){if("attribute"===t.eventType){const e=t;return"location"===e.ref.name?void this._updateLocation(e.value):void(this.asset&&(this.asset=lib.J0.updateAsset(this.asset,t),this.requestUpdate()))}if("asset"===t.eventType){const e=t;switch(e.cause){case"READ":case"CREATE":case"UPDATE":this.onAssetChanged(e.asset);break;case"DELETE":this.onAssetChanged(void 0)}}}onAssetChanged(t){return or_map_marker_asset_awaiter(this,void 0,void 0,(function*(){if(t){this.direction=void 0,this.displayValue=void 0;const e=t.attributes?t.attributes.location:void 0;this._updateLocation(e?e.value:null);const r=getMarkerConfigForAssetType(this.config,t.type),s=!r||!r.hideDirection,o=r&&!0===r.showLabel&&!!r.attributeName,i=!(!r||!1===r.showUnits);if(o&&t.attributes&&t.attributes[null==r?void 0:r.attributeName]){const e=t.attributes[r.attributeName],s=model_lib.u0.getAttributeAndValueDescriptors(t.type,e.name,e);this.displayValue=lib.J0.getAttributeValueAsString(e,s[0],t.type,i,"-")}if(s&&t.attributes&&t.attributes.direction){const e=t.attributes.direction.value;null!=e&&(this.direction=e.toString())}this.type=t.type}else this.lat=void 0,this.lng=void 0}))}_updateLocation(t){this.lat=t&&t.coordinates?t.coordinates[1]:void 0,this.lng=t&&t.coordinates?t.coordinates[0]:void 0}getColor(){return this.markerColor&&!this.color?"#"+this.markerColor:super.getColor()}getActiveColor(){return this.markerColor&&!this.activeColor?"#"+this.markerColor:super.getActiveColor()}};or_map_marker_asset_decorate([(0,decorators.MZ)({type:String,reflect:!0,attribute:!0})],OrMapMarkerAsset.prototype,"assetId",void 0),or_map_marker_asset_decorate([(0,decorators.MZ)({type:Object,attribute:!0})],OrMapMarkerAsset.prototype,"asset",void 0),or_map_marker_asset_decorate([(0,decorators.MZ)()],OrMapMarkerAsset.prototype,"config",void 0),OrMapMarkerAsset=or_map_marker_asset_decorate([(0,decorators.EM)("or-map-marker-asset")],OrMapMarkerAsset);var or_mwc_input=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-input.js"),or_mwc_dialog=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-dialog.js"),or_translate_lib=__webpack_require__("../../component/or-translate/lib/index.js"),class_map=__webpack_require__("../../../node_modules/lit-html/directives/class-map.js"),or_map_asset_card_decorate=(__webpack_require__("../../component/or-icon/lib/index.js"),function(t,e,s,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,s,r);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(i=(o<3?a(i):o>3?a(e,s,i):a(e,s))||i);return o>3&&i&&Object.defineProperty(e,s,i),i});class OrMapAssetCardLoadAssetEvent extends CustomEvent{constructor(t){super(OrMapAssetCardLoadAssetEvent.NAME,{bubbles:!0,composed:!0,detail:t})}}OrMapAssetCardLoadAssetEvent.NAME="or-map-asset-card-load-asset";const DefaultConfig={default:{exclude:["notes"]},assetTypes:{}};let OrMapAssetCard=class extends((0,lib.B1)(lib.Ay)(lit.WF)){constructor(){super(...arguments),this.useAssetColor=!0}static get styles(){return mapAssetCardStyle}shouldUpdate(t){return(!t.has("assetId")||(this.title="",this.assetIds=this.assetId&&this.assetId.length>0?[this.assetId]:void 0,1!==t.size))&&super.shouldUpdate(t)}_onEvent(t){if("asset"===t.eventType){const e=t;switch(e.cause){case"READ":case"CREATE":case"UPDATE":this.asset=e.asset;break;case"DELETE":this.asset=void 0}}"attribute"===t.eventType&&this.asset&&(this.asset=lib.J0.updateAsset(this.asset,t),this.requestUpdate())}getCardConfig(){let t=this.config||DefaultConfig;return this.asset&&t.assetTypes&&t.assetTypes.hasOwnProperty(this.asset.type)?t.assetTypes[this.asset.type]:t.default}render(){if(!this.asset)return lit.qy``;const t=this.getIcon(),e=this.getColor(),s=e?"--internal-or-map-asset-card-header-color: #"+e+";":"",r=this.getCardConfig(),a=Object.values(this.asset.attributes).filter((t=>"location"!==t.name)),o=r&&r.include?r.include:void 0,i=r&&r.exclude?r.exclude:[],n=a.filter((t=>!(o&&!(o.indexOf(t.name)>=0)||i&&!(i.indexOf(t.name)<0)||t.meta&&t.meta.hasOwnProperty("showOnDashboard")&&!lib.J0.getMetaValue("showOnDashboard",t)))).sort(lib.J0.sortByString((t=>t.name))),p=function getMarkerConfigAttributeName(t,e){const r=getMarkerConfigForAssetType(t,e);if(r)return r.attributeName}(this.markerconfig,this.asset.type);return lit.qy`
            <div id="card-container" style="${s}">
                <div id="header">
                    ${t?lit.qy`<or-icon icon="${t}"></or-icon>`:""}
                    <span id="title">${this.asset.name}</span>
                </div>
                <div id="attribute-list">
                    <ul>
                        ${n.map((t=>{if(!this.asset||!this.asset.type)return;const e=model_lib.u0.getAttributeAndValueDescriptors(this.asset.type,t.name,t);if(e&&e.length){const s=lib.J0.getAttributeLabel(t,e[0],this.asset.type,!0),r=lib.J0.getAttributeValueAsString(t,e[0],this.asset.type,!1,"-"),a={highlighted:p===t.name};return lit.qy`<li class="${(0,class_map.H)(a)}"><span class="attribute-name">${s}</span><span class="attribute-value">${r}</span></li>`}}))}
                    </ul>
                </div>
                ${r&&r.hideViewAsset?lit.qy``:lit.qy`
                    <div id="footer">
                        <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" label="viewAsset" @or-mwc-input-changed="${t=>{t.preventDefault(),this._loadAsset(this.asset.id)}}"></or-mwc-input>
                    </div>
                `}
            </div>
        `}_loadAsset(t){this.dispatchEvent(new OrMapAssetCardLoadAssetEvent(t))}getIcon(){var t;if(this.asset){return(null===(t=getMarkerIconAndColorFromAssetType(model_lib.u0.getAssetDescriptor(this.asset.type)))||void 0===t?void 0:t.icon)||void 0}}getColor(){var t;if(this.asset){const s=null===(t=getMarkerIconAndColorFromAssetType(model_lib.u0.getAssetDescriptor(this.asset.type)))||void 0===t?void 0:t.color;if(s)return"string"==typeof s?s:s[0].colour}}};or_map_asset_card_decorate([(0,decorators.MZ)({type:String,reflect:!0,attribute:!0})],OrMapAssetCard.prototype,"assetId",void 0),or_map_asset_card_decorate([(0,decorators.MZ)({type:Object,attribute:!0})],OrMapAssetCard.prototype,"asset",void 0),or_map_asset_card_decorate([(0,decorators.MZ)({type:Object})],OrMapAssetCard.prototype,"config",void 0),or_map_asset_card_decorate([(0,decorators.MZ)({type:Object})],OrMapAssetCard.prototype,"markerconfig",void 0),or_map_asset_card_decorate([(0,decorators.MZ)({type:Boolean,attribute:!0})],OrMapAssetCard.prototype,"useAssetColor",void 0),OrMapAssetCard=or_map_asset_card_decorate([(0,decorators.EM)("or-map-asset-card")],OrMapAssetCard);var lib_decorate=function(e,t,o,r){var a,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(s=(n<3?a(s):n>3?a(t,o,s):a(t,o))||s);return n>3&&s&&Object.defineProperty(t,o,s),s};class OrMapLoadedEvent extends CustomEvent{constructor(){super(OrMapLoadedEvent.NAME,{bubbles:!0,composed:!0})}}OrMapLoadedEvent.NAME="or-map-loaded";class OrMapClickedEvent extends CustomEvent{constructor(e,t=!1){super(OrMapClickedEvent.NAME,{detail:{doubleClick:t,lngLat:e},bubbles:!0,composed:!0})}}OrMapClickedEvent.NAME="or-map-clicked";class OrMapLongPressEvent extends CustomEvent{constructor(e){super(OrMapLongPressEvent.NAME,{detail:{doubleClick:!1,lngLat:e},bubbles:!0,composed:!0})}}OrMapLongPressEvent.NAME="or-map-long-press";class OrMapGeocoderChangeEvent extends CustomEvent{constructor(e){super(OrMapGeocoderChangeEvent.NAME,{detail:{geocode:e},bubbles:!0,composed:!0})}}OrMapGeocoderChangeEvent.NAME="or-map-geocoder-change";class CenterControl{onAdd(e){this.map=e;const t=document.createElement("div");t.classList.add("maplibregl-ctrl"),t.classList.add("maplibregl-ctrl-group");const o=document.createElement("button");o.className="maplibregl-ctrl-compass",o.addEventListener("click",(t=>e.flyTo({center:this.pos,zoom:e.getZoom()})));const r=document.createElement("span");return r.className="maplibregl-ctrl-icon",o.appendChild(r),t.appendChild(o),this.elem=t,t}onRemove(e){this.map=void 0,this.elem=void 0}}function getCoordinatesInputKeyHandler(e){return t=>{if("Enter"===t.code||"NumpadEnter"===t.code){const o=t.target.value;let r=o?{}:void 0;if(o){const e=o.split(/[ ,]/).filter((e=>!!e));2===e.length&&(r=new maplibre_gl.LngLat(Number.parseFloat(e[0]),Number.parseFloat(e[1])))}e(r)}}}class CoordinatesControl{constructor(e=!1,t){this._readonly=!1,this._readonly=e,this._valueChangedHandler=t}onAdd(e){this.map=e;const t=document.createElement("div");t.classList.add("maplibregl-ctrl"),t.classList.add("maplibregl-ctrl-group");const o=new or_mwc_input.n_;return o.type=or_mwc_input.NZ.TEXT,o.outlined=!0,o.compact=!0,o.readonly=this._readonly,o.icon="crosshairs-gps",o.value=this._value,o.pattern="^[ ]*(?:Lat: )?(-?\\d+\\.?\\d*)[, ]+(?:Lng: )?(-?\\d+\\.?\\d*)[ ]*$",o.onkeyup=getCoordinatesInputKeyHandler(this._valueChangedHandler),t.appendChild(o),this.elem=t,this.input=o,t}onRemove(e){this.map=void 0,this.elem=void 0}set readonly(e){this._readonly=e,this.input&&(this.input.readonly=e)}set value(e){this._value=e,this.input&&(this.input.value=e)}}const geoJsonPointInputTemplateProvider=(e,t,o,r,a,n)=>{const s=!(!n||!n.disabled),i=!(!n||!n.readonly),p=!(!n||!n.compact),l=!(!n||!n.comfortable),d=new CenterControl,c=e=>{a&&a(void 0!==e?{value:e?getGeoJSONPoint(e):null}:void 0)},m=new CoordinatesControl(s,c);let h;return{templateFunction:(t,o,r,a,n,u)=>{let g;t&&(h=getLngLat(t),g=h?Object.values(h):void 0);const v=g?g.join(", "):void 0;d.pos=h||void 0,m.readonly=s||i||a||r,m.value=v;const y=getMarkerIconAndColorFromAssetType(e);let C;const M=e=>{if(!i&&!s)if(h=e?getLngLat(e):null,C){const e=C.shadowRoot.getElementById("geo-json-point-marker");e.lng=h?h.lng:void 0,e.lat=h?h.lat:void 0,g=h?Object.values(h):void 0;const t=g?g.join(", "):void 0;m.value=t}else c(h)},f=[[d,"bottom-left"],[m,"top-right"]];if(!i){const e=new maplibre_gl.GeolocateControl({positionOptions:{enableHighAccuracy:!0},showAccuracyCircle:!1,showUserLocation:!1});e.on("geolocate",(e=>{M(new maplibre_gl.LngLat(e.coords.longitude,e.coords.latitude))})),e.on("outofmaxbounds",(e=>{M(new maplibre_gl.LngLat(e.coords.longitude,e.coords.latitude))})),f.push([e,"bottom-left"])}let _=lit.qy`
            <or-map id="geo-json-point-map" class="or-map" @or-map-long-press="${e=>{M(e.detail.lngLat)}}" .center="${g}" .controls="${f}" .showGeoCodingControl=${!i}>
                <or-map-marker id="geo-json-point-marker" active .lng="${h?h.lng:void 0}" .lat="${h?h.lat:void 0}" .icon="${y?y.icon:void 0}" .activeColor="${y?"#"+y.color:void 0}" .colour="${y?"#"+y.color:void 0}"></or-map-marker>
            </or-map>
            <span class="long-press-msg">${or_translate_lib.MR.t("longPressSetLoc")}</span>
        `;if(p){const e=_,t=()=>{C=(0,or_mwc_dialog.ui)((new or_mwc_dialog.X$).setContent(e).setStyles(lit.qy`
                            <style>
                                .dialog-container {
                                    flex-direction: column !important;
                                }
                                .dialog-container .long-press-msg {
                                    display: block;
                                    text-align: center;
                                }
                                or-map {
                                    width: 600px !important;
                                    min-height: 600px !important;
                                }
                            </style>
                        `).setActions([{actionName:"none",content:"none",action:()=>{M(null),c(h)}},{actionName:"ok",content:"ok",action:()=>{c(h)}},{default:!0,actionName:"cancel",content:"cancel"}]))};_=lit.qy`
                <style>
                    #geo-json-point-input-compact-wrapper {
                        display: table-cell;
                    }
                    #geo-json-point-input-compact-wrapper > * {
                        vertical-align: middle;
                    }
                </style>
                <div id="geo-json-point-input-compact-wrapper">
                    <or-mwc-input style="width: auto;" .comfortable="${l}" .type="${or_mwc_input.NZ.TEXT}" .value="${v}" .pattern="${"^[ ]*(?:Lat: )?(-?\\d+\\.?\\d*)[, ]+(?:Lng: )?(-?\\d+\\.?\\d*)[ ]*$"}" @keyup="${e=>getCoordinatesInputKeyHandler(c)(e)}"></or-mwc-input>
                    <or-mwc-input style="width: auto;" .type="${or_mwc_input.NZ.BUTTON}" compact icon="crosshairs-gps" @or-mwc-input-changed="${t}"></or-mwc-input>
                </div>
            `}return _},supportsHelperText:!1,supportsLabel:!1,supportsSendButton:!1,validator:()=>!h||void 0!==h.lat&&null!==h.lat&&void 0!==h.lng&&null!==h.lng}};let OrMap=class extends lit.WF{constructor(){super(),this.type=lib.Ay.mapType,this._markerStyles=[],this.showGeoCodingControl=!1,this.showBoundaryBoxControl=!1,this.useZoomControl=!0,this.showGeoJson=!0,this.boundary=[],this._loaded=!1,this._markers=[],this.addEventListener(OrMapMarkerChangedEvent.NAME,this._onMarkerChangedEvent)}firstUpdated(e){super.firstUpdated(e),lib.Ay.ready&&this.loadMap()}get markers(){return this._markers}connectedCallback(){super.connectedCallback()}disconnectedCallback(){var e;super.disconnectedCallback(),this._observer&&this._observer.disconnect(),this._resizeObserver&&this._resizeObserver.disconnect(),null===(e=this._map)||void 0===e||e.unload()}render(){return lit.qy`
            <div id="container">
                <div id="map"></div>
                <slot></slot>
                <a id="openremote" href="https://openremote.io/" target="_blank">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAAYagMeiWXwAAAAJiS0dEAP+Hj8y/AAAESUlEQVRIx5XVbWzdZRnH8c//f07POe36sK7SrYXZjYGzbBokOqd4QtKATdnMDFFSkoFzmWGRQOAFSoYnsBSzxBdmGsN4Y7LEFwZkUdHpDoja/AnJjBvp1sm2upW5PtAV+zBS+7Tz//tiLe0emPF+d9/39fvmunJf9+8K3HBF1drFzurVn5+5XkTwPwBNOt1s0pCjDnnT+Xzy/wOa5jaXnLLfLwzlF0WENwaYckyvUTHS1tnjl+6JFqk+JoMOqqy2JqjPVpXP1k7U1+Ty8paBPk97NX/pYwEdgZUetNkdlirDrHGnyv6y5r3lm4M2WVzwpJfz8XUBHTntnrJO6qqLWE9u/125zBNq0WebN/PXAjqq/cBOVWDasCEsd5MsmEzt/3xP+S6fwNsezPdfBejI6fCEDMa95oAT/t31pVxDQ6p6oy2WYSb18w0D2V3Klez2w3y8CNAR2G6vShxXUCxMkXLvS7Y6E/5+3emaJ92JqezzG+8M2nHW/flTi59xladU4phtfluYgnsDWUt8Nv7+8UfO73UUuenvDLxuCKu0RQt90BFo14wxzzpamD8uExtHSsu5HSP7XMCtZ5uTPyO0SdVCBlXahHjNG4WFrGY9Y4tXzODL7zb7NYJS64eHzWK92xYAa9yBKa8Wphf0xaQ4XOz0qF9JhMnXh//mIm4dnDSMOusWALepwQUnrm2t4pi9hrGyP+ccloxV6kOZFemoWi2mOpclaQycqGlt9R8XHS/GixinnVWvbDpjDEEpNpdnWrtd+HvZWzMQT9xjj1iXzUau6MPS9X9NKOeTmqzPpZWwfMkEKnza2ivimqxCKZjQa9BMmFI2D+gxibql4z7EiobYOSy1o7V6Xt1aYacGvD/7lse1+GZ9t0Zc8kHaGcOa1K6o+FePL1iy7K7wYHy70FZa9+qVWOm7tgslfpecKcy46GS0xXKM6g6d14VU+RfTnRJ8Y223w8j4tkMOOeR1j6nAMT8tzkCUcvlbn3ImbJn0RyWC+1af1Iv6ukcbf+aIRKDR3b5ipVCiy+PenaupWRsSfzCWim0ftUmdiqrJwWLpbmk3196UfXG0X6NKIWKDXva0I0UQZT2nRaDfc/mhgCj0PS9ImZzefbg5fliIvuTA++/0ZaYDTDqqpzhn6lHoW36iSuLHnslfCiBqdMBGDI6/0LUhfkgGiWFbC29c+epRaJMX3YJuD+R75l15wG4DaKh5dsPJsj0GXLaawavkWY/MyUcU/JOPHCkK7fAjNZiIf/PeX/vWx1814muF0Y/EKWs95mFVuKhgX352EYAoY5vnNSDRF/9p/MgHfQ2dldNIqbPeJm2aBBix20vzg26RpUUpLfb43FxZU4YMmEJGoxXKQeIfCg4uzMkrTDVitZ0ecst1B05i0Cv26Vk8H68JjFKabXa/Zkul5w5Lxp120EHdlyu/AQCiQI1P+YxaGcwY1+20kasnM/wXCa5/Ik1hKTEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDgtMjBUMTU6MTc6NTUrMDA6MDCwJSdSAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA4LTIwVDE1OjE3OjU1KzAwOjAwwXif7gAAAABJRU5ErkJggg==" />
                </a>
            </div>
        `}updated(e){var t;super.updated(e),(e.has("center")||e.has("zoom"))&&this.flyTo(this.center,this.zoom),e.has("boundary")&&this.showBoundaryBoxControl&&(null===(t=this._map)||void 0===t||t.createBoundaryBox(this.boundary))}refresh(){this._map&&this._map.loadViewSettings().then((()=>{this._map&&(this._map.setCenter(),this._map.flyTo())}))}loadMap(){this._loaded||(this._mapContainer&&this._slotElement&&(this._map=new MapWidget(this.type,this.shadowRoot,this._mapContainer,this.showGeoCodingControl,this.showBoundaryBoxControl,this.useZoomControl,this.showGeoJson).setCenter(this.center).setZoom(this.zoom).setControls(this.controls).setGeoJson(this.geoJson),this._map.load().then((()=>{var e,t;this._observer=new flattened_nodes_observer.b(this._slotElement,(e=>{this._processNewMarkers(e.addedNodes),this._processRemovedMarkers(e.removedNodes)})),null===(e=this._resizeObserver)||void 0===e||e.disconnect(),this._resizeObserver=new ResizeObserver((0,lodash.debounce)((()=>{this.resize()}),200));var o=null===(t=this._mapContainer)||void 0===t?void 0:t.parentElement;o&&this._resizeObserver.observe(o)}))),this._loaded=!0)}resize(){this._map&&this._map.resize()}flyTo(e,t){this._map&&this._map.flyTo(e,t)}_onMarkerChangedEvent(e){this._map&&this._map.onMarkerChanged(e.detail.marker,e.detail.property)}_processNewMarkers(e){e.forEach((e=>{if(this._map&&e instanceof OrMapMarker){this._markers.push(e);const t=e.constructor.name;if(this._markerStyles.indexOf(t)<0){const o=e.constructor.styles;let r=[];o&&(Array.isArray(o)?r=o:r.push(o),r.forEach((e=>{const t=document.createElement("style");t.textContent=String(e.toString()),this._mapContainer.children.length>0?this._mapContainer.insertBefore(t,this._mapContainer.children[0]):this._mapContainer.appendChild(t)}))),this._markerStyles.push(t)}this._map.addMarker(e)}}))}_processRemovedMarkers(e){e.forEach((e=>{if(this._map&&e instanceof OrMapMarker){const t=this._markers.indexOf(e);t>=0&&this._markers.splice(t,1),this._map.removeMarker(e)}}))}};OrMap.styles=style,lib_decorate([(0,decorators.MZ)({type:String})],OrMap.prototype,"type",void 0),lib_decorate([(0,decorators.MZ)({type:String,converter:{fromAttribute(e,t){if(!e)return;const o=e.split(",");if(2!==o.length)return;const r=Number(o[0]),a=Number(o[1]);return new maplibre_gl.LngLat(r,a)},toAttribute(e,t){const o=getLngLat(e);return o?o.lng+","+o.lat:""}}})],OrMap.prototype,"center",void 0),lib_decorate([(0,decorators.MZ)({type:Number})],OrMap.prototype,"zoom",void 0),lib_decorate([(0,decorators.MZ)({type:Boolean})],OrMap.prototype,"showGeoCodingControl",void 0),lib_decorate([(0,decorators.MZ)({type:Boolean})],OrMap.prototype,"showBoundaryBoxControl",void 0),lib_decorate([(0,decorators.MZ)({type:Boolean})],OrMap.prototype,"useZoomControl",void 0),lib_decorate([(0,decorators.MZ)({type:Object})],OrMap.prototype,"geoJson",void 0),lib_decorate([(0,decorators.MZ)({type:Boolean})],OrMap.prototype,"showGeoJson",void 0),lib_decorate([(0,decorators.MZ)({type:Array})],OrMap.prototype,"boundary",void 0),lib_decorate([(0,decorators.P)("#map")],OrMap.prototype,"_mapContainer",void 0),lib_decorate([(0,decorators.P)("slot")],OrMap.prototype,"_slotElement",void 0),OrMap=lib_decorate([(0,decorators.EM)("or-map")],OrMap)},"../../component/or-mwc-components/lib/style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>progressCircular});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/lit/index.js"),_openremote_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../component/core/lib/index.js");const progressCircular=lit__WEBPACK_IMPORTED_MODULE_0__.AH`
           
            /*  https://codepen.io/finnhvman/pen/bmNdNr  */
            .pure-material-progress-circular {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                box-sizing: border-box;
                border: none;
                border-radius: 50%;
                padding: 0.25em;
                width: 3em;
                height: 3em;
                color: var(--or-app-color4, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_1__.BB)});
                background-color: transparent;
                font-size: 16px;
                overflow: hidden;
            }

            .pure-material-progress-circular::-webkit-progress-bar {
                background-color: transparent;
            }

            /* Indeterminate */
            .pure-material-progress-circular:indeterminate {
                -webkit-mask-image: linear-gradient(transparent 50%, black 50%), linear-gradient(to right, transparent 50%, black 50%);
                mask-image: linear-gradient(transparent 50%, black 50%), linear-gradient(to right, transparent 50%, black 50%);
                animation: pure-material-progress-circular 6s infinite cubic-bezier(0.3, 0.6, 1, 1);
            }

            :-ms-lang(x), .pure-material-progress-circular:indeterminate {
                animation: none;
            }

            .pure-material-progress-circular:indeterminate::before,
            .pure-material-progress-circular:indeterminate::-webkit-progress-value {
                content: "";
                display: block;
                box-sizing: border-box;
                margin-bottom: 0.25em;
                border: solid 0.25em transparent;
                border-top-color: currentColor;
                border-radius: 50%;
                width: 100% !important;
                height: 100%;
                background-color: transparent;
                animation: pure-material-progress-circular-pseudo 0.75s infinite linear alternate;
            }

            .pure-material-progress-circular:indeterminate::-moz-progress-bar {
                box-sizing: border-box;
                border: solid 0.25em transparent;
                border-top-color: currentColor;
                border-radius: 50%;
                width: 100%;
                height: 100%;
                background-color: transparent;
                animation: pure-material-progress-circular-pseudo 0.75s infinite linear alternate;
            }

            .pure-material-progress-circular:indeterminate::-ms-fill {
                animation-name: -ms-ring;
            }

            @keyframes pure-material-progress-circular {
                0% {
                    transform: rotate(0deg);
                }
                12.5% {
                    transform: rotate(180deg);
                    animation-timing-function: linear;
                }
                25% {
                    transform: rotate(630deg);
                }
                37.5% {
                    transform: rotate(810deg);
                    animation-timing-function: linear;
                }
                50% {
                    transform: rotate(1260deg);
                }
                62.5% {
                    transform: rotate(1440deg);
                    animation-timing-function: linear;
                }
                75% {
                    transform: rotate(1890deg);
                }
                87.5% {
                    transform: rotate(2070deg);
                    animation-timing-function: linear;
                }
                100% {
                    transform: rotate(2520deg);
                }
            }

            @keyframes pure-material-progress-circular-pseudo {
                0% {
                    transform: rotate(-30deg);
                }
                29.4% {
                    border-left-color: transparent;
                }
                29.41% {
                    border-left-color: currentColor;
                }
                64.7% {
                    border-bottom-color: transparent;
                }
                64.71% {
                    border-bottom-color: currentColor;
                }
                100% {
                    border-left-color: currentColor;
                    border-bottom-color: currentColor;
                    transform: rotate(225deg);
                }
            }
`}}]);
//# sourceMappingURL=3581.3260eb6e.iframe.bundle.js.map