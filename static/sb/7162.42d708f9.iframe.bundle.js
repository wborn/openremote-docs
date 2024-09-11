"use strict";(self.webpackChunk_openremote_workshop=self.webpackChunk_openremote_workshop||[]).push([[7162],{"../../component/or-asset-tree/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A$:()=>OrAssetTree,Uj:()=>OrAssetTreeAssetEvent,XT:()=>OrAssetTreeAddEvent,Ym:()=>OrAssetTreeSelectionEvent,dF:()=>OrAssetTreeRequestSelectionEvent,eg:()=>OrAssetTreeToggleExpandEvent,iF:()=>_style__WEBPACK_IMPORTED_MODULE_6__.i,s7:()=>OrAssetTreeChangeParentEvent});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/lit/decorators.js"),_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-input.js"),_openremote_or_icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../component/or-icon/lib/index.js"),_openremote_model__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../component/model/lib/index.js"),_openremote_or_translate__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../component/or-translate/lib/index.js"),_style__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../component/or-asset-tree/lib/style.js"),_openremote_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../component/core/lib/index.js"),qs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../../node_modules/qs/lib/index.js"),qs__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_8__),_openremote_or_mwc_components_or_mwc_menu__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-menu.js"),_openremote_or_mwc_components_or_mwc_list__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-list.js"),_openremote_or_mwc_components_or_mwc_dialog__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-dialog.js"),_or_add_asset_dialog__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../component/or-asset-tree/lib/or-add-asset-dialog.js"),_openremote_or_mwc_components_or_mwc_snackbar__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-snackbar.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../../node_modules/lit-html/directives/when.js"),__decorate=function(e,t,s,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(n=(a<3?r(n):a>3?r(t,s,n):r(t,s))||n);return a>3&&n&&Object.defineProperty(t,s,n),n},__awaiter=function(e,t,s,i){return new(s||(s=Promise))((function(r,a){function n(e){try{d(i.next(e))}catch(e){a(e)}}function o(e){try{d(i.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,o)}d((i=i.apply(e,t||[])).next())}))},OrAssetTree_1,FilterElementType,e;class OrAssetTreeRequestSelectionEvent extends CustomEvent{constructor(e){super(OrAssetTreeRequestSelectionEvent.NAME,{bubbles:!0,composed:!0,detail:{allow:!0,detail:e}})}}OrAssetTreeRequestSelectionEvent.NAME="or-asset-tree-request-selection";class OrAssetTreeSelectionEvent extends CustomEvent{constructor(e){super(OrAssetTreeSelectionEvent.NAME,{bubbles:!0,composed:!0,detail:e})}}OrAssetTreeSelectionEvent.NAME="or-asset-tree-selection";class OrAssetTreeChangeParentEvent extends CustomEvent{constructor(e,t){super(OrAssetTreeChangeParentEvent.NAME,{bubbles:!0,composed:!0,detail:{parentId:e,assetsIds:t}})}}OrAssetTreeChangeParentEvent.NAME="or-asset-tree-change-parent";class OrAssetTreeToggleExpandEvent extends CustomEvent{constructor(e){super(OrAssetTreeToggleExpandEvent.NAME,{bubbles:!0,composed:!0,detail:e})}}OrAssetTreeToggleExpandEvent.NAME="or-asset-tree-expand",e=FilterElementType||(FilterElementType={}),e[e.SEARCH_FILTER=0]="SEARCH_FILTER",e[e.ASSET_TYPE=1]="ASSET_TYPE",e[e.ATTRIBUTE_NAME=2]="ATTRIBUTE_NAME",e[e.ATTRIBUTE_VALUE=3]="ATTRIBUTE_VALUE";class OrAssetTreeRequestAddEvent extends CustomEvent{constructor(e){super(OrAssetTreeRequestAddEvent.NAME,{bubbles:!0,composed:!0,detail:{allow:!0,detail:e}})}}OrAssetTreeRequestAddEvent.NAME="or-asset-tree-request-add";class OrAssetTreeAddEvent extends CustomEvent{constructor(e){super(OrAssetTreeAddEvent.NAME,{bubbles:!0,composed:!0,detail:e})}}OrAssetTreeAddEvent.NAME="or-asset-tree-add";class OrAssetTreeRequestDeleteEvent extends CustomEvent{constructor(e){super(OrAssetTreeRequestDeleteEvent.NAME,{bubbles:!0,composed:!0,detail:{allow:!0,detail:e}})}}OrAssetTreeRequestDeleteEvent.NAME="or-asset-tree-request-delete";class OrAssetTreeAssetEvent extends CustomEvent{constructor(e){super(OrAssetTreeAssetEvent.NAME,{bubbles:!0,composed:!0,detail:e})}}OrAssetTreeAssetEvent.NAME="or-asset-tree-asset-event";class OrAssetTreeFilter{constructor(){this.asset=void 0,this.assetType=[],this.attribute=[],this.attributeValue=[]}}const getAssetTypes=()=>__awaiter(void 0,void 0,void 0,(function*(){const e=yield _openremote_core__WEBPACK_IMPORTED_MODULE_7__.Ay.rest.api.AssetResource.queryAssets({select:{attributes:[]},recursive:!0});if(e&&e.data)return e.data.map((e=>e.type))}));let OrAssetTree=OrAssetTree_1=class OrAssetTree extends((0,_openremote_core__WEBPACK_IMPORTED_MODULE_7__.B1)(_openremote_core__WEBPACK_IMPORTED_MODULE_7__.Ay)(lit__WEBPACK_IMPORTED_MODULE_0__.WF)){constructor(){super(...arguments),this.readonly=!1,this.disabled=!1,this.disableSubscribe=!1,this.showDeselectBtn=!0,this.showSortBtn=!0,this.showFilter=!0,this.sortBy="name",this.expandAllNodes=!1,this.expandedIds=[],this.checkboxes=!1,this._loading=!1,this._connected=!1,this._selectedNodes=[],this._expandedNodes=[],this._filter=new OrAssetTreeFilter,this._searchInputTimer=void 0,this._filterSettingOpen=!1,this._assetTypes=[],this._uniqueAssetTypes=[],this._dragDropParentId=null,this._expandTimer=void 0,this._latestSelected=void 0}static get styles(){return[_style__WEBPACK_IMPORTED_MODULE_6__.i]}get selectedNodes(){return this._selectedNodes?[...this._selectedNodes]:[]}set selectedNodes(e){this.selectedIds=e.map((e=>e.asset.id))}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.requestUpdate()}refresh(){this._nodes=void 0}isAncestorSelected(e){if(!this.selectedIds||!e.parent)return!1;for(;e.parent;)if(e=e.parent,this.selectedIds.includes(e.asset.id))return!0;return!1}mapDescriptors(e,t){let s=e.map((e=>({styleMap:{"--or-icon-fill":e.colour?"#"+e.colour:"unset"},icon:e.icon,text:_openremote_core__WEBPACK_IMPORTED_MODULE_7__.J0.getAssetTypeLabel(e),value:e.name,data:e}))).sort(_openremote_core__WEBPACK_IMPORTED_MODULE_7__.J0.sortByString((e=>e.text)));return t&&s.splice(0,0,t),s}getSelectHeader(){return lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-mwc-input style="width:100%;" ?disabled="${this._loading}" type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_2__.NZ.TEXT}" .label="${_openremote_or_translate__WEBPACK_IMPORTED_MODULE_5__.MR.t("filter.assetTypeLabel")}" iconTrailing="menu-down" iconColor="rgba(0, 0, 0, 0.87)" icon="selection-ellipse" value="${_openremote_or_translate__WEBPACK_IMPORTED_MODULE_5__.MR.t("filter.assetTypeNone")}"></or-mwc-input>`}getSelectedHeader(e){return lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-mwc-input style="width:100%;" ?disabled="${this._loading}" type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_2__.NZ.TEXT}" .label="${_openremote_or_translate__WEBPACK_IMPORTED_MODULE_5__.MR.t("filter.assetTypeLabel")}" .iconColor="${e.colour}" iconTrailing="menu-down" icon="${e.icon}" value="${_openremote_core__WEBPACK_IMPORTED_MODULE_7__.J0.getAssetTypeLabel(e)}"></or-mwc-input>`}assetTypeSelect(){if(this._assetTypeFilter){const e=this._assetTypes.find((e=>e.name===this._assetTypeFilter));return e?this.getSelectedHeader(e):this.getSelectHeader()}return this.getSelectHeader()}atLeastOneNodeToBeShown(){var e;let t=!1;return null===(e=this._nodes)||void 0===e||e.forEach((e=>{e.hidden||(t=!0)})),t}render(){return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
            <div id="header">
                <div id="title-container">
                    <or-translate id="title" value="asset_plural"></or-translate>
                </div>

                <div id="header-btns">
                    <or-mwc-input ?hidden="${!this.selectedIds||0===this.selectedIds.length||!this.showDeselectBtn}" type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_2__.NZ.BUTTON}" icon="close" @or-mwc-input-changed="${()=>this._onDeselectClicked()}"></or-mwc-input>
                    <or-mwc-input ?hidden="${this._isReadonly()||!this.selectedIds||1!==this.selectedIds.length}" type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_2__.NZ.BUTTON}" icon="content-copy" @or-mwc-input-changed="${()=>this._onCopyClicked()}"></or-mwc-input>
                    <or-mwc-input ?hidden="${this._isReadonly()||!this.selectedIds||0===this.selectedIds.length}" type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_2__.NZ.BUTTON}" icon="delete" @or-mwc-input-changed="${()=>this._onDeleteClicked()}"></or-mwc-input>
                    <or-mwc-input ?hidden="${this._isReadonly()||!this._canAdd()}" type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_2__.NZ.BUTTON}" icon="plus" @or-mwc-input-changed="${()=>this._onAddClicked()}"></or-mwc-input>
                    
                    ${(0,_openremote_or_mwc_components_or_mwc_menu__WEBPACK_IMPORTED_MODULE_9__.Xj)(lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-mwc-input type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_2__.NZ.BUTTON}" ?hidden="${!this.showSortBtn}" icon="sort-variant"></or-mwc-input>`,["name","type","createdOn"].map((e=>({value:e,text:_openremote_or_translate__WEBPACK_IMPORTED_MODULE_5__.MR.t(e)}))),this.sortBy,(e=>this._onSortClicked(e)))}
                </div>
            </div>
            
            ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_14__.z)(this.showFilter,(()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                <div id="asset-tree-filter">
                    <or-mwc-input id="filterInput"
                                  ?disabled="${this._loading}"
                                  style="width: 100%;"
                                  type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_2__.NZ.TEXT}"
                                  placeholder="${_openremote_or_translate__WEBPACK_IMPORTED_MODULE_5__.MR.t("filter.filter")}..."
                                  compact="true"
                                  outlined="true"
                                  @input="${e=>{this._onFilterInputEvent(e)}}"
                                  @or-mwc-input-changed="${e=>{this._onFilterInput(e.detail.value||void 0,!0)}}">
                    </or-mwc-input>
                    <or-icon id="filterSettingsIcon" icon="${this._filterSettingOpen?"window-close":"tune"}" @click="${()=>{if(this._filterSettingOpen)this._filterSettingOpen=!1;else{if(this._filterSettingOpen=!0,0===this._assetTypes.length){const e=this._getAllowedChildTypes(this._selectedNodes[0]);this._assetTypes=e.filter((e=>"asset"===e.descriptorType))}this._filter.attribute.length>0&&(this._attributeNameFilter.value=this._filter.attribute[0]),this._filter.attributeValue.length>0&&this._filter.attribute.length>0&&(this._attributeValueFilter.disabled=!1,this._attributeValueFilter.value=this._filter.attributeValue[0]),this._filter.assetType.length>0?this._assetTypeFilter=this._filter.assetType[0]:this._assetTypeFilter=""}}}"></or-icon>
                </div>
                <div id="asset-tree-filter-setting" class="${this._filterSettingOpen?"visible":""}">
                    <div class="advanced-filter">
                        ${this._assetTypes.length>0?(0,_openremote_or_mwc_components_or_mwc_menu__WEBPACK_IMPORTED_MODULE_9__.Xj)(this.assetTypeSelect(),this.mapDescriptors(this._assetTypes,{text:_openremote_or_translate__WEBPACK_IMPORTED_MODULE_5__.MR.t("filter.assetTypeMenuNone"),value:"",icon:"selection-ellipse"}),void 0,(e=>{this._assetTypeFilter=e}),void 0,!1,!0,!0):lit__WEBPACK_IMPORTED_MODULE_0__.qy``}
                        <or-mwc-input id="attributeNameFilter" .label="${_openremote_or_translate__WEBPACK_IMPORTED_MODULE_5__.MR.t("filter.attributeLabel")}"

                                      .type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_2__.NZ.TEXT}"
                                      style="margin-top: 10px;"
                                      ?disabled="${this._loading}"
                                      @input="${e=>{this._shouldEnableAttrTypeEvent(e)}}"
                                      @or-mwc-input-changed="${e=>{this._shouldEnableAttrType(e.detail.value||void 0)}}"></or-mwc-input>
                        <or-mwc-input id="attributeValueFilter" .label="${_openremote_or_translate__WEBPACK_IMPORTED_MODULE_5__.MR.t("filter.attributeValueLabel")}"

                                      .type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_2__.NZ.TEXT}"
                                      style="margin-top: 10px;"
                                      disabled></or-mwc-input>
                        <div style="margin-top: 10px;">
                            <or-mwc-input style="float:left;" type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_2__.NZ.BUTTON}" label="filter.clear" @or-mwc-input-changed="${()=>{this._filterInput.value=void 0,this._attributeValueFilter.value=void 0,this._attributeNameFilter.value=void 0,this._attributeValueFilter.disabled=!0,this._assetTypeFilter="",this._filter=new OrAssetTreeFilter,this._doFiltering()}}"></or-mwc-input>
                            <or-mwc-input style="float: right;" type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_2__.NZ.BUTTON}" label="filter.action" raised @or-mwc-input-changed="${()=>{this._filterFromSettings()}}"></or-mwc-input>
                        </div>
                    </div>
                </div>
            `))}
            
            ${this._nodes?0!==this._nodes.length&&this.atLeastOneNodeToBeShown()?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                    <div id="list-container">
                        <ol id="list">
                            ${this._nodes.map((e=>this._treeNodeTemplate(e,0))).filter((e=>!!e))}
                            <li class="asset-list-element">    
                                <div class="end-element" node-asset-id="${""}" @dragleave=${e=>{this._onDragLeave(e)}} @dragenter="${e=>this._onDragEnter(e)}" @dragend="${e=>this._onDragEnd(e)}" @dragover="${e=>this._onDragOver(e)}"></div>
                            </li>
                        </ol>
                    </div>
                `:lit__WEBPACK_IMPORTED_MODULE_0__.qy`<span id="noAssetsFound"><or-translate value="noAssetsFound"></or-translate></span>`:lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                    <span id="loading"><or-translate value="loading"></or-translate></span>`}

            <div id="footer">
            
            </div>
        `}_isReadonly(){return this.readonly||!_openremote_core__WEBPACK_IMPORTED_MODULE_7__.Ay.hasRole("write:assets")}shouldUpdate(e){const t=super.shouldUpdate(e);return(e.has("assets")||e.has("rootAssets")||e.has("rootAssetIds"))&&(this._nodes=void 0),this._nodes?(e.has("selectedIds")&&(_openremote_core__WEBPACK_IMPORTED_MODULE_7__.J0.objectsEqual(e.get("selectedIds"),this.selectedIds)||this._updateSelectedNodes()),e.has("sortBy")&&this._updateSort(this._nodes,this._getSortFunction()),e.has("disabledSubscribe")&&this.disableSubscribe&&this._removeEventSubscriptions(),t):(this._loadAssets(),!0)}_updateSelectedNodes(){const e=[],t=[];OrAssetTree_1._forEachNodeRecursive(this._nodes,(s=>{if(this.selectedIds&&this.selectedIds.indexOf(s.asset.id)>=0){e.push(s.asset.id),t.push(s),s.selected=!0;let i=s.parent;for(;i;)i.expanded=!0,i=i.parent}else s.selected=!1;if(this.checkboxes){let t=s.parent;for(;t;){const s=[];OrAssetTree_1._forEachNodeRecursive(t.children,(e=>{s.push(e)})),t.someChildrenSelected=!1,t.allChildrenSelected=!1,s.every((t=>e.includes(t.asset.id)))?t.allChildrenSelected=!0:s.some((t=>e.includes(t.asset.id)))&&(t.someChildrenSelected=!0),t=t.parent}}})),this.selectedIds=e;const s=this._selectedNodes;this._selectedNodes=t,this.dispatchEvent(new OrAssetTreeSelectionEvent({oldNodes:s,newNodes:t}))}_updateSort(e,t){e&&(e.sort(t),e.forEach((e=>this._updateSort(e.children,t))))}_toggleExpander(e,t){t&&t.expandable&&(t.expanded=!t.expanded,t.expanded?this._expandedNodes.push(t):this._expandedNodes=this._expandedNodes.filter((e=>e!==t)),e.parentElement.parentElement.parentElement.toggleAttribute("data-expanded"),this.dispatchEvent(new OrAssetTreeToggleExpandEvent({node:t})),this.requestUpdate())}_toggleExpanderWithoutEventDispatch(e,t){t&&t.expandable&&(t.expanded=!t.expanded,t.expanded?this._expandedNodes.push(t):this._expandedNodes=this._expandedNodes.filter((e=>e!==t)),e.parentElement.parentElement.parentElement.toggleAttribute("data-expanded"),this.requestUpdate())}_buildPaths(e){let t=[];return e.asset&&e.asset.id?(t.push(e.asset.id),e.children.length>0&&e.expanded&&e.children.forEach((e=>{t=t.concat(this._buildPaths(e))})),t):[]}_findNode(e,t){if(e.asset&&e.asset.id){if(e.asset.id===t)return e;if(e.children.length>0&&e.expanded){let s;return e.children.forEach((e=>{s||(s=this._findNode(e,t))})),s}}}_findNodeFromAssetId(e){if(this._nodes){let t;return this._nodes.forEach((s=>{t||(t=this._findNode(s,e))})),t}}_onNodeClicked(e,t){var s,i,r,a;if(e&&e.defaultPrevented)return;e&&e.preventDefault();const n=e&&e.target.className.indexOf("expander")>=0,o=e&&(null===(i=null===(s=e.target)||void 0===s?void 0:s.icon)||void 0===i?void 0:i.includes("checkbox-multiple"));if(n)this._toggleExpander(e.target,t);else{let s=!0;if(t&&this.config&&(null===(r=this.config.select)||void 0===r?void 0:r.types)&&(s=this.config.select.types.indexOf(t.asset.type)>=0),!s&&!o)return;let i=[];if(t){const s=this.selectedNodes.indexOf(t);let r=!0,n=!0;const d=!(this._isReadonly()||this.config&&this.config.select&&this.config.select.multiSelect);if((this.checkboxes||d&&e&&(e.ctrlKey||e.shiftKey||e.metaKey))&&(n=!1,s>=0&&this.selectedIds&&this.selectedIds.length>1&&(r=!1)),o){i=[...this.selectedNodes];const e=[];OrAssetTree_1._forEachNodeRecursive(t.children,(t=>{var s,i;let r=!0;t&&(null===(i=null===(s=this.config)||void 0===s?void 0:s.select)||void 0===i?void 0:i.types)&&(r=this.config.select.types.indexOf(t.asset.type)>=0),r&&e.push(t)})),i=t.allChildrenSelected?i.filter((t=>!e.map((e=>e.asset.id)).includes(t.asset.id))):i.concat(e)}else if(n)this._latestSelected=Object.assign({},t),i=[t];else if(r){if(s<0){if(e&&e.shiftKey){let e=[];if(null===(a=this._nodes)||void 0===a||a.forEach((t=>{e=e.concat(this._buildPaths(t))})),this._latestSelected&&this._latestSelected.asset&&this._latestSelected.asset.id&&t.asset&&t.asset.id){let s=this._latestSelected.asset.id,r=t.asset.id,a=e.findIndex((e=>e.includes(s))),n=e.findIndex((e=>e.includes(r))),o=-1,d=-1;a>n?(o=n,d=a):(o=a,d=n);let l=e.slice(o,d+1),c=[];l.forEach((e=>{let t=this._findNodeFromAssetId(e);t&&c.push(t)})),i=[...this.selectedNodes],i=i.concat(c)}}else i=[...this.selectedNodes],i.push(t);this._latestSelected=Object.assign({},t)}}else s>=0&&(i=[...this.selectedNodes],1===i.length&&(this._latestSelected=void 0),i.splice(s,1))}_openremote_core__WEBPACK_IMPORTED_MODULE_7__.J0.dispatchCancellableEvent(this,new OrAssetTreeRequestSelectionEvent({oldNodes:this.selectedNodes,newNodes:i})).then((e=>{e.allow&&(this.selectedNodes=e.detail.newNodes)}))}}_onDeselectClicked(){this._onNodeClicked(null,null)}parseFromInputFilter(e){let t=this._filterInput.value;e&&(t=e);let s=new OrAssetTreeFilter;if(t){let e=t,i=t.match(/(attribute\:)(\"[^"]+\")\S*/g);i&&(i.length>0&&i.forEach(((t,i)=>{e=e.replace(t,"");const r=t.toString().indexOf("attribute:"),a=t.toString().substring(r+10+1,t.toString().length-1);s.attribute.push(a),s.attributeValue.push("")})),this._attributeValueFilter.disabled=!1),i=t.match(/(type\:)\S+/g),i&&i.length>0&&i.forEach(((t,i)=>{e=e.replace(t,"");const r=t.toString().indexOf("type:"),a=t.toString().substring(r+5);s.assetType.push(a)})),i=t.match(/(\"[^\"]+\")\:(([^\"\s]+)|(\"[^\"]+\"))/g),i&&i.length>0&&i.forEach(((t,i)=>{e=e.replace(t,"");const r=t.toString().indexOf('":');let a=t.toString().substring(r+2);const n=t.toString().substring(1,r);'"'===a[0]&&'"'===a[a.length-1]&&(a=a.substring(1,a.length-1)),s.attribute.push(n),s.attributeValue.push(a)})),s.asset=e&&e.length>0?e.trim():void 0}return s}formatFilter(e){let t=e.asset?e.asset:"",s=e.asset?" ":"",i=[];return e.assetType.length>0&&e.assetType.forEach((e=>{t+=s+"type:"+e,s=" "})),e.attribute.length>0&&e.attributeValue.length>0&&e.attributeValue.forEach(((r,a)=>{i.push(e.attribute[a]),t+=s+'"'+e.attribute[a]+'":'+r,s=" "})),e.attribute.length>0&&0===e.attributeValue.length&&e.attribute.forEach((e=>{i.includes(e)||(t+=s+'attribute:"'+e+'"',s=" ")})),t}_shouldEnableAttrTypeEvent(e){let t;e.composedPath()&&(t=e.composedPath()[0].value||void 0),this._shouldEnableAttrType(t)}_shouldEnableAttrType(e){this._attributeValueFilter.disabled=!e}applySettingFields(e){if(this._assetTypeFilter?e.assetType=[this._assetTypeFilter]:e.assetType=[],this._attributeNameFilter.value?e.attribute=[this._attributeNameFilter.value]:e.attribute=[],this._attributeNameFilter.value&&this._attributeValueFilter.value){let t=this._attributeValueFilter.value;t.includes(" ")&&(t='"'+t+'"'),e.attributeValue=[t]}else e.attributeValue=[];return e}_filterFromSettings(){let e=this.parseFromInputFilter(),t=this.applySettingFields(e);this._filter=t;let s=this.formatFilter(this._filter);this._filterInput.value=s,this._filterSettingOpen=!1,this._doFiltering()}_onFilterInputEvent(e){let t;e.composedPath()&&(t=e.composedPath()[0].value||void 0),this._onFilterInput(t,!1)}_onFilterInput(e,t){let s=this.parseFromInputFilter(e);_openremote_core__WEBPACK_IMPORTED_MODULE_7__.J0.objectsEqual(this._filter,s,!0)||(this._filter=s,this._searchInputTimer&&clearTimeout(this._searchInputTimer),t?this._doFiltering():this._searchInputTimer=window.setTimeout((()=>{this._doFiltering()}),350))}_doFiltering(){return __awaiter(this,void 0,void 0,(function*(){if(this._searchInputTimer&&(clearTimeout(this._searchInputTimer),this._searchInputTimer=void 0),this.isConnected&&this._nodes){if(!(this._filter.asset||this._filter.attribute||this._filter.assetType||this._filter.attributeValue))return OrAssetTree_1._forEachNodeRecursive(this._nodes,(e=>{e.notMatchingFilter=!1,e.hidden=!1})),void this.requestUpdate("_nodes");if(this.disabled=!0,this._filter.asset||this._filter.assetType||this._filter.attribute){let e=!1;this._filter.attribute&&(e=!0),this.getMatcher(e).then((e=>{this._nodes&&(this._nodes.forEach((t=>{this.filterTreeNode(t,e)})),this.disabled=!1)}))}}}))}getMatcher(e){return e?this.getMatcherFromQuery():this.getSimpleNameMatcher()}getSimpleNameMatcher(){return __awaiter(this,void 0,void 0,(function*(){return e=>{let t=!0;return this._filter.asset&&(t=t&&e.name.toLowerCase().includes(this._filter.asset.toLowerCase())),this._filter.assetType.length>0&&(t=t&&e.type.toLowerCase()===this._filter.assetType[0].toLowerCase()),t}}))}getMatcherFromQuery(){return __awaiter(this,void 0,void 0,(function*(){let assetCond,attributeCond,assetTypeCond;this._filter.asset&&(assetCond=[{predicateType:"string",match:"CONTAINS",value:this._filter.asset,caseSensitive:!1}]),this._filter.assetType.length>0&&(assetTypeCond=this._filter.assetType),this._filter.attribute.length>0&&(attributeCond={operator:"AND",items:this._filter.attribute.map((e=>({name:{predicateType:"string",match:"EXACT",value:_openremote_core__WEBPACK_IMPORTED_MODULE_7__.J0.sentenceCaseToCamelCase(e),caseSensitive:!1}})))});const query={select:{attributes:attributeCond?void 0:[]},names:assetCond,types:assetTypeCond,attributes:attributeCond};let response,foundAssetIds;try{response=yield _openremote_core__WEBPACK_IMPORTED_MODULE_7__.Ay.rest.api.AssetResource.queryAssets(query),foundAssetIds=response.data.map((e=>e.id))}catch(e){this._filter.assetType.forEach((e=>{-1===this._assetTypes.findIndex((t=>t.name===e))&&(0,_openremote_or_mwc_components_or_mwc_snackbar__WEBPACK_IMPORTED_MODULE_13__.td)(void 0,"filter.assetTypeDoesNotExist","dismiss")})),foundAssetIds=[]}return asset=>{let attrValueCheck=!0;if(this._filter.attribute.length>0&&this._filter.attributeValue.length>0&&foundAssetIds.includes(asset.id)){let attributeVal=[];this._filter.attributeValue.forEach(((e,t)=>{e.length>0&&attributeVal.push([this._filter.attribute[t],e])}));let matchingAsset=response.data.find((e=>e.id===asset.id));if(matchingAsset&&matchingAsset.attributes)for(let attributeValIndex=0;attributeValIndex<attributeVal.length;attributeValIndex++){let currentAttributeVal=attributeVal[attributeValIndex],atLeastOneAttributeMatchValue=!1;Object.keys(matchingAsset.attributes).forEach((key=>{let attr=matchingAsset.attributes[key];if(attr.name.toLowerCase()===currentAttributeVal[0].toLowerCase()&&attr.value)switch(attr.type){case"number":case"integer":case"long":case"bigInteger":case"bigNumber":case"positiveInteger":case"negativeInteger":case"positiveNumber":case"negativeNumber":let value=currentAttributeVal[1];currentAttributeVal[1].startsWith("=")&&"="!==currentAttributeVal[1][1]&&(value="="+value),/^[0-9]+$/.test(currentAttributeVal[1])&&(value="=="+value);const resultNumberEval=eval(attr.value+value);resultNumberEval&&(atLeastOneAttributeMatchValue=!0);break;case"text":if(attr.value){let e=currentAttributeVal[1];const t="*";let s=e.replace(t,".*");s=s.replace(/"/g,"");let i=attr.value;-1!=i.toLowerCase().indexOf(s.toLowerCase())&&(atLeastOneAttributeMatchValue=!0)}}})),attrValueCheck=atLeastOneAttributeMatchValue}}return foundAssetIds.includes(asset.id)&&attrValueCheck}}))}isAnyFilter(){return void 0!==this._filter.asset||this._filter.assetType.length>0||this._filter.attribute.length>0}filterTreeNode(e,t,s=!1){let i=t(e.asset);e.notMatchingFilter=!i;let r=e.children.map((e=>this.filterTreeNode(e,t,i))).some((e=>e));return i=i||r,e.expanded=r&&e.children.length>0&&this.isAnyFilter(),e.hidden=!i&&!s,i}_onCopyClicked(){return __awaiter(this,void 0,void 0,(function*(){if(1===this._selectedNodes.length)try{const e=yield _openremote_core__WEBPACK_IMPORTED_MODULE_7__.Ay.rest.api.AssetResource.get(this._selectedNodes[0].asset.id);if(!e.data)throw new Error("API returned an invalid response when retrieving the source asset");const t=JSON.parse(JSON.stringify(e.data));t.name+=" copy",delete t.id,delete t.path,delete t.createdOn,delete t.version,_openremote_core__WEBPACK_IMPORTED_MODULE_7__.J0.dispatchCancellableEvent(this,new OrAssetTreeRequestAddEvent({sourceAsset:this._selectedNodes[0].asset,asset:t})).then((e=>{e.allow&&this.dispatchEvent(new OrAssetTreeAddEvent(e.detail))}))}catch(e){console.error("Failed to copy asset",e),(0,_openremote_or_mwc_components_or_mwc_dialog__WEBPACK_IMPORTED_MODULE_11__._F)("Failed to copy asset")}}))}_onAddClicked(){const e=this._getAllowedChildTypes(this._selectedNodes[0]),t=e.filter((e=>"agent"===e.descriptorType)),s=e.filter((e=>"asset"===e.descriptorType)),i=this._selectedNodes&&1===this._selectedNodes.length?this._selectedNodes[0].asset:void 0;let r;r=(0,_openremote_or_mwc_components_or_mwc_dialog__WEBPACK_IMPORTED_MODULE_11__.ui)((new _openremote_or_mwc_components_or_mwc_dialog__WEBPACK_IMPORTED_MODULE_11__.X$).setHeading(_openremote_or_translate__WEBPACK_IMPORTED_MODULE_5__.MR.t("addAsset")).setContent(lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                    <or-add-asset-dialog id="add-panel" .config="${this.config}" .agentTypes="${t}" .assetTypes="${s}" .parent="${i}" @or-add-asset-changed="${e=>{const t=!!e.detail.name&&e.detail.name.trim().length>0&&e.detail.name.trim().length<1024;r.shadowRoot.getElementById("add-btn").disabled=!e.detail.descriptor||!t}}"></or-add-asset-dialog>
                `).setActions([{actionName:"cancel",content:"cancel"},{actionName:"add",content:lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-mwc-input id="add-btn" class="button" .type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_2__.NZ.BUTTON}" label="add" disabled></or-mwc-input>`,action:()=>{const e=r.shadowRoot.getElementById("add-panel"),t=e.selectedType,s=e.selectedAttributes,i=e.name.trim(),a=e.parent;if(!t)return;const n={name:i,type:t.name,realm:_openremote_core__WEBPACK_IMPORTED_MODULE_7__.Ay.displayRealm},o=_openremote_model__WEBPACK_IMPORTED_MODULE_4__.u0.getAssetTypeInfo(t.name);if(!o)return;o.attributeDescriptors&&(n.attributes={},o.attributeDescriptors.filter((e=>!e.optional)).forEach((e=>{n.attributes[e.name]={name:e.name,type:e.type,meta:e.meta?Object.assign({},e.meta):void 0}}))),s&&(null==s||s.forEach((e=>{n.attributes[e.name]={name:e.name,type:e.type,meta:e.meta?Object.assign({},e.meta):void 0}}))),this.selectedIds&&(n.parentId=a?a.id:void 0);const d={asset:n};_openremote_core__WEBPACK_IMPORTED_MODULE_7__.J0.dispatchCancellableEvent(this,new OrAssetTreeRequestAddEvent(d)).then((e=>{e.allow&&this.dispatchEvent(new OrAssetTreeAddEvent(e.detail))}))}}]).setStyles(lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                    <style>
                        .mdc-dialog__content {
                            padding: 0 !important;
                        }
                    </style>
                `).setDismissAction(null))}_onDeleteClicked(){this._selectedNodes.length>0&&_openremote_core__WEBPACK_IMPORTED_MODULE_7__.J0.dispatchCancellableEvent(this,new OrAssetTreeRequestDeleteEvent(this._selectedNodes)).then((e=>{e.allow&&this._doDelete()}))}_onSortClicked(e){this.sortBy=e}_doDelete(){if(!this._selectedNodes||0===this._selectedNodes.length)return;let e=new Set;OrAssetTree_1._forEachNodeRecursive(this._selectedNodes,(t=>{e.add(t.asset)}));const t=Array.from(e).map((e=>e.id)),s=Array.from(e).map((e=>e.name)),i=()=>{this.disabled=!0,_openremote_core__WEBPACK_IMPORTED_MODULE_7__.Ay.rest.api.AssetResource.delete({assetId:t},{paramsSerializer:e=>qs__WEBPACK_IMPORTED_MODULE_8___default().stringify(e,{arrayFormat:"repeat"})}).then((e=>{this.refresh(),this.disabled=!1,204!==e.status&&(0,_openremote_or_mwc_components_or_mwc_dialog__WEBPACK_IMPORTED_MODULE_11__._F)(_openremote_or_translate__WEBPACK_IMPORTED_MODULE_5__.MR.t("deleteAssetsFailed"))})).catch((e=>{this.refresh(),this.disabled=!1,(0,_openremote_or_mwc_components_or_mwc_dialog__WEBPACK_IMPORTED_MODULE_11__._F)(_openremote_or_translate__WEBPACK_IMPORTED_MODULE_5__.MR.t("deleteAssetsFailed"))}))};(0,_openremote_or_mwc_components_or_mwc_dialog__WEBPACK_IMPORTED_MODULE_11__.YB)(_openremote_or_translate__WEBPACK_IMPORTED_MODULE_5__.MR.t("deleteAssets"),_openremote_or_translate__WEBPACK_IMPORTED_MODULE_5__.MR.t("deleteAssetsConfirm",{assetNames:s.join(",\n- ")}),_openremote_or_translate__WEBPACK_IMPORTED_MODULE_5__.MR.t("delete")).then((e=>{e&&i()}))}_canAdd(){if(this._selectedNodes&&this._selectedNodes.length>1)return!1;const e=this._selectedNodes?this._selectedNodes[0]:void 0;return this._getAllowedChildTypes(e).length>0}_getAllowedChildTypes(e){let t,s;if(this.config&&this.config.add){if(this.config.add.typesProvider){const t=this.config.add.typesProvider(e);if(t)return t}if(this.config.add.typesParent){let i;!e&&this.config.add.typesParent.none?i=this.config.add.typesParent.none:e&&this.config.add.typesParent.assetTypes&&(i=this.config.add.typesParent.assetTypes[e.asset.type]),i||(i=this.config.add.typesParent.default),i&&(t=i.include,s=i.exclude||[])}}return _openremote_model__WEBPACK_IMPORTED_MODULE_4__.u0.getAssetDescriptors().filter((e=>(!t||t.some((t=>_openremote_core__WEBPACK_IMPORTED_MODULE_7__.J0.stringMatch(t,e.name))))&&(!s||!s.some((t=>_openremote_core__WEBPACK_IMPORTED_MODULE_7__.J0.stringMatch(t,e.name))))))}_getSortFunction(){return"createdOn"===this.sortBy?_openremote_core__WEBPACK_IMPORTED_MODULE_7__.J0.sortByNumber((e=>e.asset[this.sortBy])):_openremote_core__WEBPACK_IMPORTED_MODULE_7__.J0.sortByString((e=>e.asset[this.sortBy]))}_loadAssets(){console.log("loadAssets()");const e=this._getSortFunction();if(this.assets)this._loading=!1,this._buildTreeNodes(this.assets,e);else{if(!this._connected)return void console.log("not connected...");if(this._loading)return void console.log("Its loading...");if(this._loading=!0,this.dataProvider)console.log("Dataprovider!"),this.dataProvider().then((t=>{this._loading=!1,this._buildTreeNodes(t,e)}));else{const t={realm:{name:_openremote_core__WEBPACK_IMPORTED_MODULE_7__.Ay.displayRealm},select:{attributes:[]}};this.assetIds?(t.ids=this.assetIds,t.recursive=!0):this.rootAssets?(t.ids=this.rootAssets.map((e=>e.id)),t.recursive=!0):this.rootAssetIds&&(t.ids=this.rootAssetIds,t.recursive=!0),console.log(t),this._sendEventWithReply({event:{eventType:"read-assets",assetQuery:t}}).then((t=>{console.log(t),this._loading=!1,this._buildTreeNodes(t.assets,e)}))}}}_addEventSubscriptions(){return __awaiter(this,void 0,void 0,(function*(){this.disableSubscribe||(this._subscriptionIds=[yield _openremote_core__WEBPACK_IMPORTED_MODULE_7__.Ay.getEventProvider().subscribeAssetEvents(void 0,!1,(e=>this._onEvent(e)))])}))}onEventsConnect(){this._connected=!0,this._loadAssets()}onEventsDisconnect(){this._connected=!1,this._nodes=void 0}getNodes(){return this._nodes||[]}_onEvent(e){if("assets"!==e.eventType){if("asset"===e.eventType&&this._nodes&&this._nodes.length>0){const t=e;if("READ"===t.cause)return;if("UPDATE"===t.cause&&!t.updatedProperties.includes("name")&&!t.updatedProperties.includes("parentId"))return;const s=[];"DELETE"!==t.cause&&s.push(t.asset),OrAssetTree_1._forEachNodeRecursive(this._nodes,(e=>{e.asset.id!==t.asset.id&&s.push(e.asset)})),this._filterInput.value||this._buildTreeNodes(s,this._getSortFunction()),this.dispatchEvent(new OrAssetTreeAssetEvent(t))}}else{const t=e;this._buildTreeNodes(t.assets,this._getSortFunction())}}_buildTreeNodes(e,t){if(e&&0!==e.length){let s,i;_openremote_core__WEBPACK_IMPORTED_MODULE_7__.Ay.isRestrictedUser()&&e.forEach((t=>{if(t.parentId&&t.path&&void 0===e.find((e=>e.id===t.parentId))){let s=null;for(let i=2;i<t.path.length;i++){const r=t.path[i];if(void 0!==e.find((e=>e.id===r))){s=r;break}}t.reparentId=s}})),this.rootAssetIds?s=this.rootAssetIds:this.rootAssets&&(s=this.rootAssets.map((e=>e.id))),i=s?e.filter((e=>s.indexOf(e.id)>=0||null===e.reparentId)).map((e=>({asset:e}))):e.filter((e=>!e.parentId||null===e.reparentId)).map((e=>({asset:e}))),this.assetsChildren={},e.forEach((e=>{e.parentId&&(this.assetsChildren[e.parentId]||(this.assetsChildren[e.parentId]=[]),this.assetsChildren[e.parentId].push({asset:e})),e.reparentId&&(this.assetsChildren[e.reparentId]||(this.assetsChildren[e.reparentId]=[]),this.assetsChildren[e.reparentId].push({asset:e}))})),i.sort(t),i.forEach((s=>this._buildChildTreeNodes(s,e,t))),this._nodes=i;const r=[];this._expandedNodes.forEach((e=>{OrAssetTree_1._forEachNodeRecursive(this._nodes,(t=>{t.asset&&e.asset&&t.asset.id===e.asset.id&&(t.expanded=!0,r.push(t))}))})),this._expandedNodes=r}else this._nodes=[];this.selectedIds&&this.selectedIds.length>0&&this._updateSelectedNodes(),this.expandAllNodes&&OrAssetTree_1._forEachNodeRecursive(this._nodes,(e=>{e.children&&e.children.length>0&&(e.expanded=!0)}))}_buildChildTreeNodes(e,t,s){let i=this.assetsChildren[e.asset.id];e.children=i?i.sort(s):[],e.children.length>0&&(e.expandable=!0),e.children.forEach((i=>{i.parent=e,this._buildChildTreeNodes(i,t,s)}))}_onDragStart(e){this._dragDropParentId=null;let t=e.currentTarget.getAttribute("node-asset-id");this.selectedIds||(this.selectedIds=[]),t&&this.selectedIds&&!this.selectedIds.includes(t)&&(e.ctrlKey||e.shiftKey||(this.selectedIds=[]),this.selectedIds.push(t))}_onDragEnd(e){const t=e.x,s=e.y;if(null!==this.shadowRoot){let e=this.shadowRoot.getElementById("list");if(e){const i=e.getBoundingClientRect().top,r=e.getBoundingClientRect().bottom,a=e.getBoundingClientRect().left,n=e.getBoundingClientRect().right;if(t<a||t>n||s>r||s<i)return}}this.selectedIds&&this.dispatchEvent(new OrAssetTreeChangeParentEvent(this._dragDropParentId?this._dragDropParentId:void 0,this.selectedIds))}isExpandable(e){return!(!this._nodes||!this.shadowRoot||!this.shadowRoot.querySelector('[node-asset-id="'+e+'"] > .node-name > [data-expandable]'))}_onDragOver(e){let t=e.currentTarget;t.classList.add("over");let s=t.getAttribute("node-asset-id");s&&this.isExpandable(s)&&!this._expandTimer&&(this._expandTimer=window.setTimeout((()=>{this.expandNode(s)}),1e3))}expandNode(e){var t;if(this.shadowRoot&&e&&e===this._dragDropParentId){const s=this._findNodeFromAssetId(e);let i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector('[node-asset-id="'+e+'"]');i&&s&&!s.expanded&&this._toggleExpanderWithoutEventDispatch(i.firstElementChild.firstElementChild,s)}}_onDragEnter(e){let t=e.currentTarget;t.classList.add("over");let s=t.getAttribute("node-asset-id");this._dragDropParentId=s}_onDragLeave(e){e.currentTarget.classList.remove("over"),clearTimeout(this._expandTimer),this._expandTimer=void 0}_treeNodeTemplate(e,t){const s=_openremote_model__WEBPACK_IMPORTED_MODULE_4__.u0.getAssetDescriptor(e.asset.type);let i;if(i=e.allChildrenSelected?"checkbox-multiple-marked":e.someChildrenSelected?"checkbox-multiple-marked-outline":"checkbox-multiple-blank-outline",e.hidden)return lit__WEBPACK_IMPORTED_MODULE_0__.qy``;let r=!1;return e.asset&&e.notMatchingFilter&&(r=!0),e.expanded&&0===e.children.length&&(e.expanded=!1),this.expandedIds&&-1!==this.expandedIds.findIndex((t=>t===e.asset.id))&&(e.expanded=!0),lit__WEBPACK_IMPORTED_MODULE_0__.qy`
            <li class="asset-list-element" ?data-selected="${e.selected}" ?data-expanded="${e.expanded}" @click="${t=>this._onNodeClicked(t,e)}">
                <div class="in-between-element" node-asset-id="${e.parent?e.parent.asset?e.parent.asset.id:"":void 0}" @dragleave=${e=>{this._onDragLeave(e)}} @dragenter="${e=>this._onDragEnter(e)}" @dragend="${e=>this._onDragEnd(e)}" @dragover="${e=>this._onDragOver(e)}"></div>
                <div class="node-container draggable" node-asset-id="${e.asset?e.asset.id:""}" draggable="true" @dragleave=${e=>{this._onDragLeave(e)}} @dragenter="${e=>this._onDragEnter(e)}" @dragstart="${e=>this._onDragStart(e)}" @dragend="${e=>this._onDragEnd(e)}" @dragover="${e=>this._onDragOver(e)}" style="padding-left: ${22*t}px">
                    <div class="node-name">
                        <div class="expander" ?data-expandable="${e.expandable}"></div>
                        ${(0,_openremote_or_icon__WEBPACK_IMPORTED_MODULE_3__.xl)(s,void 0,void 0,r?"d3d3d3":void 0)}
                        <span style="color: ${r?"#d3d3d3;":""}">${e.asset.name}</span>
                        ${this.checkboxes?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                            <span class="mdc-list-item__graphic">
                                ${e.expandable?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<div class="mdc-checkbox">
                                            <or-icon class="mdc-checkbox--parent" icon="${i}"></or-icon>
                                        </div>`:""}
                                <div class="mdc-checkbox">
                                    ${e.selected?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-icon icon="checkbox-marked"></or-icon>`:lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-icon icon="checkbox-blank-outline"></or-icon>`}
                                </div>
                            </span>`:""}
                    </div>
                </div>
                <ol>
                    ${!e.children||e.expandable&&!e.expanded?"":e.children.map((e=>this._treeNodeTemplate(e,t+1))).filter((e=>!!e))}
                </ol>
            </li>
        `}static _forEachNodeRecursive(e,t){e&&e.forEach((e=>{t(e),this._forEachNodeRecursive(e.children,t)}))}};__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Array,reflect:!1})],OrAssetTree.prototype,"assets",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Object})],OrAssetTree.prototype,"assetInfos",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Array})],OrAssetTree.prototype,"_assetIdsOverride",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Array})],OrAssetTree.prototype,"rootAssets",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Array})],OrAssetTree.prototype,"rootAssetIds",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Object})],OrAssetTree.prototype,"dataProvider",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrAssetTree.prototype,"readonly",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrAssetTree.prototype,"disabled",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrAssetTree.prototype,"disableSubscribe",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Array})],OrAssetTree.prototype,"selectedIds",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrAssetTree.prototype,"showDeselectBtn",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrAssetTree.prototype,"showSortBtn",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrAssetTree.prototype,"showFilter",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:String})],OrAssetTree.prototype,"sortBy",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrAssetTree.prototype,"expandAllNodes",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Array})],OrAssetTree.prototype,"expandedIds",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrAssetTree.prototype,"checkboxes",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({attribute:!1})],OrAssetTree.prototype,"_nodes",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.wk)()],OrAssetTree.prototype,"_filter",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#clearIconContainer")],OrAssetTree.prototype,"_clearIconContainer",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#filterInput")],OrAssetTree.prototype,"_filterInput",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.wk)()],OrAssetTree.prototype,"_filterSettingOpen",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.wk)()],OrAssetTree.prototype,"_assetTypes",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#attributeNameFilter")],OrAssetTree.prototype,"_attributeNameFilter",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#attributeValueFilter")],OrAssetTree.prototype,"_attributeValueFilter",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.wk)()],OrAssetTree.prototype,"_assetTypeFilter",void 0),OrAssetTree=OrAssetTree_1=__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.EM)("or-asset-tree")],OrAssetTree)},"../../component/or-asset-tree/lib/or-add-asset-dialog.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/lit/decorators.js"),_openremote_model__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../component/model/lib/index.js"),_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-input.js"),_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../component/or-asset-tree/lib/index.js"),_openremote_or_mwc_components_or_mwc_list__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-list.js"),_openremote_or_translate__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../component/or-translate/lib/index.js"),_openremote_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../component/core/lib/index.js"),__decorate=function(e,t,o,i){var r,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(a=(s<3?r(a):s>3?r(t,o,a):r(t,o))||a);return s>3&&a&&Object.defineProperty(t,o,a),a},__awaiter=function(e,t,o,i){return new(o||(o=Promise))((function(r,s){function a(e){try{l(i.next(e))}catch(e){s(e)}}function n(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,n)}l((i=i.apply(e,t||[])).next())}))};class OrAddChangedEvent extends CustomEvent{constructor(e){super(OrAddChangedEvent.NAME,{bubbles:!0,composed:!0,detail:e})}}OrAddChangedEvent.NAME="or-add-asset-changed";let OrAddAssetDialog=class extends lit__WEBPACK_IMPORTED_MODULE_0__.WF{static get styles(){return lit__WEBPACK_IMPORTED_MODULE_0__.AH`
            #name-wrapper {
                display: flex;
                flex-direction: column;
                margin-top: 12px;
            }

            #toggle-parent-selector,
            #remove-parent {
                flex: 0 0 50px;
                margin: 4px 0 0 5px;
            }

            #name-input,
            #parent-wrapper {
                margin: 10px 0;
            }

            #parent-wrapper {
                display: flex;
            }

            #parent {
                flex: 1 1 auto;
            }
            
            #parent-selector {
                max-width: 250px;
                border-left: 1px solid var(--or-app-color5, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_7__.Id)});
            }
            
            #mdc-dialog-form-add {
                display: flex;
                height: 600px;
                width: 1000px;
                border-style: solid;
                border-color: var(--or-app-color5, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_7__.Id)});
                border-width: 1px 0;
            }

            .msg {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                height: 100%;
                font-family: "Segoe UI", Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                font-size: 14px;
            }

            #asset-type-option-container {
                padding: 15px;
                flex: 1 1 auto;
                overflow: auto;
                max-width: 100%;
                font-size: 16px;
            }

            #type-list {
                width: 260px;
                overflow: auto;
                text-transform: capitalize;
                border-right: 1px solid var(--or-app-color5, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_7__.Id)});
            }

            #type-title {
                display: flex;
                align-items: center;
                margin: 9px 4px;
            }

            #type-description {
                text-transform: capitalize;
                color: var(--or-app-color3, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_7__.Iy)});
                margin-left: 10px;
                font-size: 18px;
                font-weight: bold;
                font-family: "Segoe UI", Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            }

            .heading,
            .mdc-list-group__subheader {
                text-transform: uppercase;
                font-family: "Segoe UI", Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                font-weight: bolder;
                line-height: 1em;
                color: var(--or-app-color3, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_7__.Iy)});
                letter-spacing: 0.025em;
                font-size: 14px;
                margin: 20px 0 10px;
            }

            .mdc-list-group__subheader {
                margin: 20px 0 0 16px;
            }
        `}constructor(){super(),this.selectedAttributes=[],this.showParentAssetSelector=!1,this.selectedChildAssetType="",this.name="New Asset",this.addEventListener(_index__WEBPACK_IMPORTED_MODULE_4__.Ym.NAME,(e=>{this.parent=e.detail.newNodes[0].asset}))}render(){const e=e=>e.map((e=>({styleMap:{"--or-icon-fill":e.colour?"#"+e.colour:"unset"},icon:e.icon,text:_openremote_core__WEBPACK_IMPORTED_MODULE_7__.J0.getAssetTypeLabel(e),value:e.name,data:e}))).sort(_openremote_core__WEBPACK_IMPORTED_MODULE_7__.J0.sortByString((e=>e.text))),t=e(this.agentTypes),o=e(this.assetTypes),i=[];t.length>0&&i.push({heading:_openremote_or_translate__WEBPACK_IMPORTED_MODULE_6__.MR.t("agents"),list:lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-mwc-list @or-mwc-list-changed="${e=>{1===e.detail.length&&this.onTypeChanged(!0,e.detail[0])}}" .listItems="${t}" id="agent-list"></or-mwc-list>`}),o.length>0&&i.push({heading:_openremote_or_translate__WEBPACK_IMPORTED_MODULE_6__.MR.t("assets"),list:lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-mwc-list @or-mwc-list-changed="${e=>{1===e.detail.length&&this.onTypeChanged(!1,e.detail[0])}}" .listItems="${o}" id="asset-list"></or-mwc-list>`});const r=this.parent?this.parent.name+" ("+this.parent.id+")":_openremote_or_translate__WEBPACK_IMPORTED_MODULE_6__.MR.t("none");return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
            <div class="col">
                <form id="mdc-dialog-form-add" class="row">
                    <div id="type-list" class="col">
                        ${(0,_openremote_or_mwc_components_or_mwc_list__WEBPACK_IMPORTED_MODULE_5__.uI)(i)}
                    </div>
                    <div id="asset-type-option-container" class="col">
                        ${this.selectedType?this.getTypeTemplate(this.selectedType,r):lit__WEBPACK_IMPORTED_MODULE_0__.qy`<div class="msg"><or-translate value="noAssetTypeSelected"></or-translate></div>`}
                    </div>
                    ${this.showParentAssetSelector?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-asset-tree id="parent-selector" class="col" .showDeselectBtn="${!1}" .showSortBtn="${!1}" selectedNodes readonly></or-asset-tree>`:lit__WEBPACK_IMPORTED_MODULE_0__.qy``}
                </form>
            </div>
        `}getTypeTemplate(e,t){var o,i;if(!e.name)return!1;const r=_openremote_model__WEBPACK_IMPORTED_MODULE_2__.u0.getAssetTypeInfo(e.name),s=null===(o=null==r?void 0:r.attributeDescriptors)||void 0===o?void 0:o.filter((e=>!e.optional)),a=null===(i=null==r?void 0:r.attributeDescriptors)||void 0===i?void 0:i.filter((e=>!!e.optional));return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
            <div id="type-title">
                <or-icon style="--or-icon-fill: ${e.colour?"#"+e.colour:"unset"}" id="type-icon" .icon="${e.icon}"></or-icon>
                <or-translate id="type-description" .value="${_openremote_core__WEBPACK_IMPORTED_MODULE_7__.J0.getAssetTypeLabel(e)}"></or-translate>
            </div>
            <div id="name-wrapper">
                <or-mwc-input id="name-input" .type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_3__.NZ.TEXT}" min="1" max="1023" required .label="${_openremote_or_translate__WEBPACK_IMPORTED_MODULE_6__.MR.t("name")}" .value="${this.name}" @or-mwc-input-changed="${e=>this.onNameChanged(e.detail.value)}"></or-mwc-input>
                <div id="parent-wrapper">
                    <or-mwc-input id="parent" .type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_3__.NZ.TEXT}" readonly .label="${_openremote_or_translate__WEBPACK_IMPORTED_MODULE_6__.MR.t("parent")}" .value="${t}" @click="${()=>this._onToggleParentAssetSelector()}"></or-mwc-input>
                    <or-mwc-input id="remove-parent" ?disabled="${!this.parent}" type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_3__.NZ.BUTTON}" icon="close" @or-mwc-input-changed="${()=>this._onDeselectClicked()}"></or-mwc-input>
                    <or-mwc-input id="toggle-parent-selector" icon="${this.showParentAssetSelector?"pencil-off":"pencil"}" type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_3__.NZ.BUTTON}" @or-mwc-input-changed="${()=>this._onToggleParentAssetSelector()}"></or-mwc-input>
                </div>
            </div>
            
            ${s?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                    <div>
                        <div class="heading">${_openremote_or_translate__WEBPACK_IMPORTED_MODULE_6__.MR.t("attribute_plural")}</div>
                        <div style="display: grid">
                            ${s.sort(_openremote_core__WEBPACK_IMPORTED_MODULE_7__.J0.sortByString((e=>e.name))).map((e=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                                    <or-mwc-input .type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_3__.NZ.CHECKBOX}" .label="${_openremote_core__WEBPACK_IMPORTED_MODULE_7__.J0.getAttributeLabel(void 0,e,void 0,!0)}"
                                                  .disabled="${!0}" .value="${!0}"></or-mwc-input>
                            `))}
                        </div>
                    `:lit__WEBPACK_IMPORTED_MODULE_0__.qy``}

            ${a?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                    <div>
                        <div class="heading">${_openremote_or_translate__WEBPACK_IMPORTED_MODULE_6__.MR.t("optional_attributes")}</div>
                        <div style="display: grid">
                            ${a.sort(_openremote_core__WEBPACK_IMPORTED_MODULE_7__.J0.sortByString((e=>e.name))).map((e=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                                    <or-mwc-input .type="${_openremote_or_mwc_components_or_mwc_input__WEBPACK_IMPORTED_MODULE_3__.NZ.CHECKBOX}" .label="${_openremote_core__WEBPACK_IMPORTED_MODULE_7__.J0.getAttributeLabel(void 0,e,void 0,!0)}"
                                                  .value="${this.selectedAttributes.find((t=>t===e))}"
                                                  @or-mwc-input-changed="${t=>t.detail.value?this.selectedAttributes.push(e):this.selectedAttributes.splice(this.selectedAttributes.findIndex((t=>t===e)),1)}"></or-mwc-input>
                            `))}
                        </div>
                    </div>
                `:lit__WEBPACK_IMPORTED_MODULE_0__.qy``} 
        `}onNameChanged(e){this.name=e,this.onModified()}onTypeChanged(e,t){return __awaiter(this,void 0,void 0,(function*(){yield this.updateComplete,this.selectedAttributes=[],this.selectedType=t.data;const o=e?this.assetList:this.agentList;o&&(o.values=void 0),this.onModified()}))}onModified(){this.dispatchEvent(new OrAddChangedEvent({name:this.name,descriptor:this.selectedType}))}_onToggleParentAssetSelector(){this.showParentAssetSelector=!this.showParentAssetSelector}_onDeselectClicked(){this.parent=void 0}};__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({attribute:!1})],OrAddAssetDialog.prototype,"config",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({attribute:!1})],OrAddAssetDialog.prototype,"agentTypes",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({attribute:!1})],OrAddAssetDialog.prototype,"assetTypes",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({attribute:!1})],OrAddAssetDialog.prototype,"parent",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({attribute:!1})],OrAddAssetDialog.prototype,"selectedType",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({attribute:!1})],OrAddAssetDialog.prototype,"selectedAttributes",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({attribute:!1})],OrAddAssetDialog.prototype,"showParentAssetSelector",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({attribute:!1})],OrAddAssetDialog.prototype,"selectedChildAssetType",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#name-input")],OrAddAssetDialog.prototype,"nameInput",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#agent-list")],OrAddAssetDialog.prototype,"agentList",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#asset-list")],OrAddAssetDialog.prototype,"assetList",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#parent-asset-list")],OrAddAssetDialog.prototype,"parentAssetList",void 0),OrAddAssetDialog=__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.EM)("or-add-asset-dialog")],OrAddAssetDialog)},"../../component/or-asset-tree/lib/style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>style});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/lit/index.js"),_openremote_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../component/core/lib/index.js"),_mdi_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/@mdi/js/mdi.js");const style=lit__WEBPACK_IMPORTED_MODULE_0__.AH`

    :host {       
        --internal-or-asset-tree-header-color: var(--or-asset-tree-header-color, var(--or-app-color4, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_1__.BB)}));     
        --internal-or-asset-tree-header-text-color: var(--or-asset-tree-header-text-color, var(--or-app-color8, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_1__.BH)}));
        --internal-or-asset-tree-header-menu-background-color: var(--or-asset-tree-header-menu-background-color, var(--internal-or-asset-tree-header-text-color));
        --internal-or-asset-tree-header-menu-text-color: var(--or-asset-tree-header-menu-text-color, inherit);
        --internal-or-asset-tree-header-height: var(--or-asset-tree-header-height, 48px);
        --internal-or-asset-tree-background-color: var(--or-asset-tree-background-color, var(--or-app-color1, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_1__.WO)}));
        --internal-or-asset-tree-text-color: var(--or-asset-tree-text-color, inherit);
        --internal-or-asset-tree-item-height: var(--or-asset-tree-item-height, 24px);
        --internal-or-asset-tree-item-padding: var(--or-asset-tree-item-padding, 10px);
        --internal-or-asset-tree-selected-background-color: var(--or-asset-tree-selected-background-color, var(--or-app-color2, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_1__.PR)}));
        --internal-or-asset-tree-selected-color: var(--or-asset-tree-selected-color, var(--or-app-color4, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_1__.BB)}));
        --internal-or-asset-tree-button-color: var(--or-asset-tree-button-color, var(--or-app-color4, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_1__.BB)}));
        --internal-or-asset-tree-line-color: var(--or-asset-tree-line-color, var(--or-app-color5, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_1__.Id)}));
        
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        background-color: var(--internal-or-asset-tree-background-color);
    }
    
    *[hidden] {
        display: none;
    }
    
    button {
        background-color: var(--internal-or-asset-tree-button-color);
        color: var(--internal-or-asset-tree-background-color);
        --or-icon-width: 20px;
        --or-icon-height: 20px;
        --or-icon-fill: var(--internal-or-asset-tree-background-color);
        border: none;
        padding: 0 6px;
        display: inline-block;
        cursor: pointer;
        opacity: 0.8;
    }

    button:focus, button:hover {
        outline: 0;
        opacity: 1;
    }
    
    #header {
        background-color: var(--internal-or-asset-tree-header-color);
        display: flex;
        align-items: center;
        width: 100%;        
        height: var(--internal-or-asset-tree-header-height);
        border-bottom: 1px solid ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_1__.Id)};
        z-index: 1000;
        line-height: var(--internal-or-asset-tree-header-height);
        color: var(--internal-or-asset-tree-header-text-color);
        --or-icon-fill: var(--internal-or-asset-tree-header-text-color);
    }
   
    #title-container {
        flex: 1 0 auto;
        flex-direction: row;
        text-transform: capitalize;
        padding-left: 15px;
    }
    
    #title {
        font-weight: 500;
        font-size: 16px;        
    }
    
    #realm-picker {
        outline: none;
        margin-left: 5px;
        text-transform: none;
        font-size: 14px;
    }
    
    #header-btns {
        display: flex;
        flex-direction: row;
        padding-right: 5px;
    }

    #list-container {
        flex: 1 1 auto;
        overflow: auto;
        font-size: 14px;
    }
    
    #list {
        margin: 0;
        color: var(--internal-or-asset-tree-text-color);
        padding: 0;
    }
    
    #list, ol {
        list-style-type: none;
    }
        
    li ol {
        padding: 0;
    }
    
    #list li:not([data-expanded]) > ol {
        display: none;
    }
    
    #list li[data-selected] > .node-container, #list li > .node-container:hover {
        background-color: var(--internal-or-asset-tree-selected-background-color);
    }
    
    #list li[data-selected] > .node-container {
        border-left-color: var(--internal-or-asset-tree-selected-color);
    }
          
    .asset-list-element .over {
        background-color: ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_1__.Id)};
    }
    
    .in-between-element {
        position: relative;
        height: 2px;
    }
    .in-between-element.over {
        padding: 5px 0;
        margin: -5px 0;
    }
    .end-element {
        height: 44px;
    }
    
    .node-container {
        display: flex;
        border-left: 4px solid transparent;
        user-select: none;
        cursor: pointer;
        height: var(--internal-or-asset-tree-item-height);
        line-height: var(--internal-or-asset-tree-item-height);
        padding-top: var(--internal-or-asset-tree-item-padding);
        padding-bottom: var(--internal-or-asset-tree-item-padding);
    }

    .node-container > * {
        flex: 0 0 auto;
    }
    
    .expander {
        width: 36px;
        height: 100%;
        display: inline-block;
        background-repeat: no-repeat;                
        background-size: 18px;
        background-position: center;
        
        margin-left: -4px;
        border-left: 4px solid transparent;
    }
    
    .expander[data-expandable] {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='rgb(204, 204, 204)' viewBox='0 0 24 24'%3E%3Cpath d='${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_mdi_js__WEBPACK_IMPORTED_MODULE_2__.mI8)}'/%3E%3C/svg%3E");
    }

    .expander[data-expandable]:hover {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_mdi_js__WEBPACK_IMPORTED_MODULE_2__.mI8)}'/%3E%3C/svg%3E");
    }
    
    li[data-expanded] > .node-container .expander {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_mdi_js__WEBPACK_IMPORTED_MODULE_2__.W5x)}'/%3E%3C/svg%3E") !important;
    }
    
    .node-name {
        margin: -4px 0;
        flex: 1 0 auto;
        display: flex;
        align-items: center;
    }
    
    .node-name > span {
        vertical-align: middle;
    }
    
    .node-name > or-icon {
        --or-icon-width: 18px;
        --or-icon-height: 18px;
        margin-right: 8px;
    }
    
    #loading {
        flex: 1 0 auto;
        display: inline-flex;
        align-items: center;
        text-align: center;
        margin: 0 auto;
        font-size: 14px;        
    }    
    
     @media only screen and (min-width: 768px){
        .expander {
            width: 26px;
        }
    }
    
    .mdc-list-item__graphic {
        margin-left: auto;
        display: flex;
        margin-right: 5px;
    }
    
    .mdc-checkbox {
        display: flex;
        height: 100%;
        align-items: center;
    }
    
    .mdc-checkbox or-icon {
        height: 15px;
        width: auto;
        color: var(--internal-or-asset-tree-line-color);
    }
    .mdc-checkbox or-icon.mdc-checkbox--parent {
        height: 17px;
    }

    .mdc-checkbox or-icon[icon="checkbox-marked"],
    .mdc-checkbox or-icon[icon="checkbox-multiple-marked"],
    .mdc-checkbox or-icon[icon="checkbox-multiple-marked-outline"] {
        color: var(--internal-or-asset-tree-selected-color);
    }
    
    #asset-tree-filter {
        display: flex;
        align-items: center;
        position: relative;
        background-color: var(--internal-or-asset-tree-selected-background-color);
    }
    
    #filterInput {
        padding: 7px 12px 7px 7px;
    }

    #filterAssetTypeDownIcon {
        width: 16px;
        height: 16px;
        position: absolute;
        right: 20px;
        padding-right: 14px;
        cursor: pointer;
    }
    
    #filterSettingsIcon {
        cursor: pointer;
        margin-right: 12px;
    }
    
    #asset-tree-filter-setting {
        position: absolute;
        background-color: var(--internal-or-asset-tree-background-color);
        top: calc(var(--internal-or-asset-tree-header-height) + var(--internal-or-header-height, 50px) - 1px);
        display: none;
        width: 300px;
        z-index: 100;
        box-shadow: rgb(0 0 0 / 21%) 0px 1px 3px 0px;
        box-sizing: border-box;
        padding: 10px;
    }

    #asset-tree-filter-setting .advanced-filter {
        display: flex;
        flex-direction: column;
    }

    #asset-tree-filter-setting.visible {
        display: block;
    }
    
    .filterAssetType {
        display: flex;
        align-items: center;
    }
    
    #clearIconContainer.visible {
        display: block;
    }

    #noAssetsFound {
        flex: 1 0 auto;
        display: inline-flex;
        align-items: center;
        text-align: center;
        margin: 0 auto;
        font-size: 14px;
    }
    
    .filterMatching {
        color: #808080;
    }
    
    .draggable {
        cursor: pointer;
    }
    
    .draggable:active {
        cursor: grabbing;
    }
`},"../../component/or-mwc-components/lib/or-mwc-dialog.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Am:()=>showOkDialog,X$:()=>OrMwcDialog,YB:()=>showOkCancelDialog,_F:()=>showErrorDialog,ui:()=>showDialog,wr:()=>OrMwcDialogOpenedEvent});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/lit/decorators.js"),_material_dialog__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/@material/dialog/component.js"),_openremote_or_translate__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../component/or-translate/lib/index.js"),_or_mwc_input__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-input.js"),_openremote_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../component/core/lib/index.js"),__decorate=function(t,e,o,i){var n,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(a=(s<3?n(a):s>3?n(e,o,a):n(e,o))||a);return s>3&&a&&Object.defineProperty(e,o,a),a},__awaiter=function(t,e,o,i){return new(o||(o=Promise))((function(n,s){function a(t){try{c(i.next(t))}catch(t){s(t)}}function r(t){try{c(i.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,r)}c((i=i.apply(t,e||[])).next())}))};const dialogStyle=__webpack_require__("../../../node_modules/@material/dialog/dist/mdc.dialog.css"),listStyle=__webpack_require__("../../../node_modules/@material/list/dist/mdc.list.css");class OrMwcDialogOpenedEvent extends CustomEvent{constructor(){super(OrMwcDialogOpenedEvent.NAME,{bubbles:!0,composed:!0})}}OrMwcDialogOpenedEvent.NAME="or-mwc-dialog-opened";class OrMwcDialogClosedEvent extends CustomEvent{constructor(t){super(OrMwcDialogClosedEvent.NAME,{detail:t,bubbles:!0,composed:!0})}}function showErrorDialog(t,e){return __awaiter(this,void 0,void 0,(function*(){return showOkDialog("error",lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                <div>
                    <p><or-translate value="errorOccurred"></or-translate>
                    ${t?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                        :</p>
                        <p>
                            <or-translate value="error"></or-translate>
                            <span> = </span> 
                            <or-translate .value="${t}"></or-translate>
                    `:""}
                    </p>
                </div>`,void 0,e)}))}function showOkCancelDialog(t,e,o,i){return __awaiter(this,void 0,void 0,(function*(){const n=new _openremote_core__WEBPACK_IMPORTED_MODULE_4__.J0.Deferred;return showDialog((new OrMwcDialog).setContent("string"==typeof e?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<p>${e}</p>`:e).setActions([{actionName:"cancel",content:"cancel",default:!0,action:()=>n.resolve(!1)},{actionName:"ok",content:o||_openremote_or_translate__WEBPACK_IMPORTED_MODULE_2__.MR.t("ok"),action:()=>n.resolve(!0)}]).setHeading(t).setStyles(lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                    <style>
                        .mdc-dialog__content {
                            white-space: pre-wrap
                        }
                    </style>
                `),i),yield n.promise}))}function showOkDialog(t,e,o,i){return __awaiter(this,void 0,void 0,(function*(){const n=new _openremote_core__WEBPACK_IMPORTED_MODULE_4__.J0.Deferred;return showDialog((new OrMwcDialog).setContent("string"==typeof e?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<p>${e}</p>`:e).setActions([{actionName:"ok",default:!0,content:o||_openremote_or_translate__WEBPACK_IMPORTED_MODULE_2__.MR.t("ok"),action:()=>n.resolve(!0)}]).setHeading(t),i),yield n.promise}))}function showDialog(t,e){return e||(e=OrMwcDialog.DialogHostElement||document.body),t.setOpen(!0),t.addEventListener(OrMwcDialogOpenedEvent.NAME,(t=>{t.stopPropagation()})),t.addEventListener(OrMwcDialogClosedEvent.NAME,(e=>{e.stopPropagation(),window.setTimeout((()=>{t.parentElement&&t.parentElement.removeChild(t)}),0)})),e.append(t),t}OrMwcDialogClosedEvent.NAME="or-mwc-dialog-closed";const style=lit__WEBPACK_IMPORTED_MODULE_0__.AH`
    :host {
        position: relative;
    }

    .dialog-container {
        display: flex;
        flex-direction: row;
    }

    .dialog-container > * {
        flex: 1 1 0;
    }
    
    .mdc-list {
        padding: 0 24px
    }

    .mdc-dialog .mdc-dialog__surface {
        outline: none;
    }
    
    @media (min-width: 1280px) {
        .mdc-dialog .mdc-dialog__surface {
            max-width: 1024px;
        }
    }
`;let OrMwcDialog=class extends lit__WEBPACK_IMPORTED_MODULE_0__.WF{constructor(){super(...arguments),this._open=!1}static get styles(){return[lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(dialogStyle)}`,lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(listStyle)}`,style]}get isOpen(){return!!this._mdcComponent&&this._mdcComponent.isOpen}setOpen(t){return this._open=!0,this}setHeading(t){return this.heading=t,this}setContent(t){return this.content=t,this}setActions(t){return this.actions=t,this}setDismissAction(t){return this.dismissAction=t,this}setStyles(t){return this.styles=t,this}setAvatar(t){return this.avatar=t,this}open(){this._mdcElem&&!this._mdcComponent&&(this._mdcComponent=new _material_dialog__WEBPACK_IMPORTED_MODULE_5__.V(this._mdcElem),this._mdcComponent.scrimClickAction=this.dismissAction||null===this.dismissAction?"close":""),this._mdcComponent&&this._mdcComponent.open()}close(t){this._mdcComponent&&this._mdcComponent.close(t)}disconnectedCallback(){super.disconnectedCallback(),this._mdcComponent&&(this._mdcComponent.destroy(),this._mdcComponent=void 0)}render(){return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
            ${"string"==typeof this.styles?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<style>${this.styles}</style>`:this.styles||""}
            
            <div id="dialog"
                class="mdc-dialog"
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="dialog-title"
                aria-describedby="dialog-content"
                @MDCDialog:opened="${()=>this._onDialogOpened()}"
                @MDCDialog:closed="${t=>this._onDialogClosed(t.detail.action)}">
                <div class="mdc-dialog__container">
                    <div class="mdc-dialog__surface" tabindex="0">
						${"string"==typeof this.heading?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<h2 class="mdc-dialog__title" id="dialog-title"><or-translate value="${this.heading}"></or-translate></h2>`:this.heading?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<span class="mdc-dialog__title" id="dialog-title">${this.heading}</span>`:""}
                        ${this.content?lit__WEBPACK_IMPORTED_MODULE_0__.qy` 
                            <div class="dialog-container mdc-dialog__content" id="dialog-content">
                                ${"function"==typeof this.content?this.content():this.content}
                            </div>
                            <footer class="mdc-dialog__actions">
                                ${this.actions?this.actions.map((t=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                                    <div class="mdc-button mdc-dialog__button" ?data-mdc-dialog-button-default="${t.default}" data-mdc-dialog-action="${t.disabled?void 0:t.actionName}">
                                        ${"string"==typeof t.content?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-mwc-input .type="${_or_mwc_input__WEBPACK_IMPORTED_MODULE_3__.NZ.BUTTON}" @or-mwc-input-changed="${t=>{t.currentTarget.disabled&&t.stopPropagation()}}" .disabled="${t.disabled}" .label="${t.content}"></or-mwc-input>`:t.content}
                                    </div>`)):""}
                            </footer>
                        `:lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                            <ul class="mdc-list ${this.avatar?"mdc-list--avatar-list":""}">
                                ${this.actions?this.actions.map(((t,e)=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`<li class="mdc-list-item" data-mdc-dialog-action="${t.actionName}"><span class="mdc-list-item__text">${t.content}</span></li>`)):""}
                            </ul>
                        `}
                    </div>
                </div>
                <div class="mdc-dialog__scrim"></div>
            </div>
        `}updated(t){super.updated(t),t.has("_open")&&this._open&&this.open()}_onDialogOpened(){this.dispatchEvent(new OrMwcDialogOpenedEvent)}_onDialogClosed(t){if("close"===t&&this.dismissAction&&this.dismissAction.action)this.dismissAction.action(this);else if(t&&this.actions){const e=this.actions.find((e=>e.actionName===t));e&&e.action&&e.action(this)}this._mdcComponent&&(this._mdcComponent.destroy(),this._mdcComponent=void 0),this.dispatchEvent(new OrMwcDialogClosedEvent(t))}};__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:String})],OrMwcDialog.prototype,"heading",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Object,attribute:!1})],OrMwcDialog.prototype,"content",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Array,attribute:!1})],OrMwcDialog.prototype,"actions",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Object,attribute:!1})],OrMwcDialog.prototype,"dismissAction",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcDialog.prototype,"avatar",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrMwcDialog.prototype,"styles",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({attribute:!1})],OrMwcDialog.prototype,"_open",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#dialog")],OrMwcDialog.prototype,"_mdcElem",void 0),OrMwcDialog=__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.EM)("or-mwc-dialog")],OrMwcDialog)},"../../component/or-mwc-components/lib/or-mwc-menu.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xj:()=>getContentWithMenuTemplate});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/lit/decorators.js"),lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/lit/directives/class-map.js"),_material_menu__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../../node_modules/@material/menu/component.js"),_openremote_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../component/core/lib/index.js"),_material_list_dist_mdc_list_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/@material/list/dist/mdc.list.css"),_material_menu_surface_dist_mdc_menu_surface_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../../node_modules/@material/menu-surface/dist/mdc.menu-surface.css"),_or_mwc_list__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-list.js"),__decorate=function(e,t,r,o){var s,n=arguments.length,i=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(n<3?s(i):n>3?s(t,r,i):s(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i};const menuStyle=__webpack_require__("../../../node_modules/@material/menu/dist/mdc.menu.css");class OrMwcMenuChangedEvent extends CustomEvent{constructor(e){super(OrMwcMenuChangedEvent.NAME,{detail:e,bubbles:!0,composed:!0})}}OrMwcMenuChangedEvent.NAME="or-mwc-menu-changed";class OrMwcMenuClosedEvent extends CustomEvent{constructor(){super(OrMwcMenuClosedEvent.NAME,{bubbles:!0,composed:!0})}}function getContentWithMenuTemplate(e,t,r,o,s,n=!1,i=!0,c=!1,a=!1){return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
        <span>
            <span @click="${e=>{t&&e.currentTarget.parentElement.lastElementChild.open()}}">${e}</span>
            ${t?lit__WEBPACK_IMPORTED_MODULE_0__.qy`<or-mwc-menu ?multiselect="${n}" @or-mwc-menu-closed="${()=>{s&&s()}}" @or-mwc-menu-changed="${e=>{o&&o(e.detail)}}" .translateValues="${i}" .values="${r}" .menuItems="${t}" .midHeight="${c}" .fullWidth="${a}" id="menu"></or-mwc-menu>`:""}
        </span>
    `}OrMwcMenuClosedEvent.NAME="or-mwc-menu-closed";const style=lit__WEBPACK_IMPORTED_MODULE_0__.AH`
    :host {
        white-space: nowrap;
        --internal-or-mwc-input-color: var(--or-mwc-input-color, var(--or-app-color4, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_3__.BB)}));    
        --internal-or-mwc-input-text-color: var(--or-mwc-input-text-color, var(--or-app-color8, ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_openremote_core__WEBPACK_IMPORTED_MODULE_3__.BH)}));
        
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
     
    .mdc-menu-surface-mid-height {
        max-height: calc(45vh - 32px) !important;
    }
    .mdc-menu-surface-full-width {
        width: 100%;
    }
`;let OrMwcMenu=class extends lit__WEBPACK_IMPORTED_MODULE_0__.WF{static get styles(){return[lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_material_list_dist_mdc_list_css__WEBPACK_IMPORTED_MODULE_5__)}`,lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(menuStyle)}`,lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(_material_menu_surface_dist_mdc_menu_surface_css__WEBPACK_IMPORTED_MODULE_6__)}`,style]}open(){this._mdcComponent.open=!0}disconnectedCallback(){super.disconnectedCallback(),this._mdcComponent&&(this._mdcComponent.destroy(),this._mdcComponent=void 0)}render(){if(!this.menuItems||0===this.menuItems.length)return lit__WEBPACK_IMPORTED_MODULE_0__.qy``;const e=this.getItemsTemplate(this.menuItems,this.translateValues),t=this.menuItems&&this.menuItems.some((e=>e&&!Array.isArray(e)&&!!e.secondaryText)),r={"mdc-menu-surface-mid-height":this.midHeight?1:0,"mdc-menu-surface-full-width":this.fullWidth?1:0};return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
            <div id="wrapper" class="mdc-menu-surface--anchor">
                <div class="mdc-menu mdc-menu-surface ${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_2__.H)(r)}" id="menu" @MDCMenuSurface:closed="${this._onMenuClosed}">
                    ${(0,_or_mwc_list__WEBPACK_IMPORTED_MODULE_4__.bb)(_or_mwc_list__WEBPACK_IMPORTED_MODULE_4__.pc.MULTI_TICK,e,t,"menu")}
                </div>
            </div>
        `}getItemsTemplate(e,t){const r=this.multiSelect?_or_mwc_list__WEBPACK_IMPORTED_MODULE_4__.pc.MULTI_TICK:_or_mwc_list__WEBPACK_IMPORTED_MODULE_4__.pc.PLAIN;return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
            ${e.map(((e,o)=>Array.isArray(e)?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                    <li>
                        <ul class="mdc-menu__selection-group">
                            ${this.getItemsTemplate(e,t)}
                        </ul>
                    </li>
                `:(0,_or_mwc_list__WEBPACK_IMPORTED_MODULE_4__.K3)(e,o,Array.isArray(this.values)?this.values:this.values?[this.values]:[],r,t,((e,t)=>this._itemClicked(e,t)))))}`}firstUpdated(e){super.firstUpdated(e),this._mdcElem&&(this._mdcComponent=new _material_menu__WEBPACK_IMPORTED_MODULE_7__.C(this._mdcElem),this._mdcComponent.menuSurface_.foundation.handleBodyClick=function(e){const t=e.composedPath()[0];this.adapter.isElementInContainer(t)||this.close()},this._mdcComponent.quickOpen=!0)}updated(e){e.has("visible")&&(this._mdcComponent.open=this.visible||!1)}_onMenuClosed(){this.dispatchEvent(new OrMwcMenuClosedEvent)}_itemClicked(e,t){e.stopPropagation();const r=t.value;if(this.multiSelect){Array.isArray(this.values)||(this.values=this.values?[this.values]:[]);const e=this.values.findIndex((e=>e===r));e>=0?this.values.splice(e,1):this.values.push(r),this.requestUpdate()}else this.values=r,this._mdcComponent.open=!1;this.dispatchEvent(new OrMwcMenuChangedEvent(this.values))}};__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Array})],OrMwcMenu.prototype,"menuItems",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Array})],OrMwcMenu.prototype,"values",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean,attribute:!0})],OrMwcMenu.prototype,"multiSelect",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean,attribute:!0})],OrMwcMenu.prototype,"visible",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean,attribute:!0})],OrMwcMenu.prototype,"translateValues",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean,attribute:!1})],OrMwcMenu.prototype,"midHeight",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean,attribute:!1})],OrMwcMenu.prototype,"fullWidth",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#wrapper")],OrMwcMenu.prototype,"_wrapperElem",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#menu")],OrMwcMenu.prototype,"_mdcElem",void 0),OrMwcMenu=__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.EM)("or-mwc-menu")],OrMwcMenu)},"../../component/or-mwc-components/lib/or-mwc-snackbar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C3:()=>OrMwcSnackbar,td:()=>showSnackbar});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/lit/decorators.js"),_material_snackbar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/@material/snackbar/component.js"),__decorate=function(t,e,n,o){var r,a=arguments.length,c=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(a<3?r(c):a>3?r(e,n,c):r(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c};const drawerStyle=__webpack_require__("../../../node_modules/@material/snackbar/dist/mdc.snackbar.css");class OrMwcSnackbarChangedEvent extends CustomEvent{constructor(t){super(OrMwcSnackbarChangedEvent.NAME,{detail:t,bubbles:!0,composed:!0})}}function showSnackbar(t,e,n,o){t||(t=OrMwcSnackbar.DialogHostElement||document.body);const r=new OrMwcSnackbar;return r.text=e,r.buttonText=n,r.buttonAction=o,r.isOpen=!0,r.addEventListener(OrMwcSnackbarChangedEvent.NAME,(t=>{t.stopPropagation(),t.detail.opened||window.setTimeout((()=>{r.parentElement&&r.parentElement.removeChild(r)}),0)})),t.append(r),r}OrMwcSnackbarChangedEvent.NAME="or-mwc-snackbar-changed";let OrMwcSnackbar=class extends lit__WEBPACK_IMPORTED_MODULE_0__.WF{constructor(){super(...arguments),this._open=!1}static get styles(){return[lit__WEBPACK_IMPORTED_MODULE_0__.AH`${(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(drawerStyle)}`,lit__WEBPACK_IMPORTED_MODULE_0__.AH`
      `]}get isOpen(){return!!this._mdcComponent&&this._mdcComponent.isOpen}set isOpen(t){this._open=!0}open(){this._mdcElem&&!this._mdcComponent&&(this._mdcComponent=new _material_snackbar__WEBPACK_IMPORTED_MODULE_2__._(this._mdcElem),this._mdcComponent.timeoutMs=this.timeout||4e3),this._mdcComponent&&this._mdcComponent.open()}close(t){this._mdcComponent&&this._mdcComponent.close(t)}disconnectedCallback(){super.disconnectedCallback(),this._mdcComponent&&(this._mdcComponent.destroy(),this._mdcComponent=void 0)}render(){return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
            <div id="mdc-snackbar" class="mdc-snackbar" @MDCSnackbar:opened="${()=>this.onOpen()}"
                 @MDCSnackbar:closed="${t=>this.onClose(t.detail.reason)}">
                <div class="mdc-snackbar__surface" role="status" aria-relevant="additions">
                    <div class="mdc-snackbar__label" aria-atomic="false">
                        <or-translate value="${this.text}"></or-translate>
                    </div>
                    ${this.buttonText?lit__WEBPACK_IMPORTED_MODULE_0__.qy`
                        <div class="mdc-snackbar__actions" aria-atomic="true">
                            <or-mwc-input type="button" class="mdc-button mdc-snackbar__action" label="${this.buttonText}">                                
                            </or-mwc-input>
                        </div>
                    `:lit__WEBPACK_IMPORTED_MODULE_0__.qy``};
                </div>
            </div>
        `}updated(t){super.updated(t),t.has("_open")&&this._open&&this.open()}onClose(t){this.buttonAction&&this.buttonAction(),this.dispatchChangedEvent({opened:!1,closeReason:t})}onOpen(){this.dispatchChangedEvent({opened:!0})}dispatchChangedEvent(t){this.dispatchEvent(new OrMwcSnackbarChangedEvent(t))}};__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:String,attribute:!1})],OrMwcSnackbar.prototype,"text",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:String})],OrMwcSnackbar.prototype,"buttonText",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Object,attribute:!1})],OrMwcSnackbar.prototype,"buttonAction",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Number})],OrMwcSnackbar.prototype,"timeout",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean})],OrMwcSnackbar.prototype,"_open",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#mdc-snackbar")],OrMwcSnackbar.prototype,"_mdcElem",void 0),OrMwcSnackbar=__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.EM)("or-mwc-snackbar")],OrMwcSnackbar)}}]);
//# sourceMappingURL=7162.42d708f9.iframe.bundle.js.map