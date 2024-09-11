/*! For license information please see 2810.811717bb.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_openremote_workshop=self.webpackChunk_openremote_workshop||[]).push([[2810],{"./stories/util/or-app-helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L8:()=>DefaultStore,jQ:()=>getManagerAppConfig,lb:()=>loadOrApp,xM:()=>loadOrMobileApp});var lib=__webpack_require__("../../component/or-app/lib/index.js"),redux=__webpack_require__("../../../node_modules/redux/es/redux.js"),redux_toolkit_esm=__webpack_require__("../../../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),or_mobile_app_lib=__webpack_require__("../../component/or-mobile-app/lib/index.js"),core_lib=__webpack_require__("../../component/core/lib/index.js");function getMapRoute(assetId){let route="map";return assetId&&(route+="/"+assetId),route}function getAssetsRoute(editMode,assetId){let route="assets/"+(editMode?"true":"false");return assetId&&(route+="/"+assetId),route}function getUsersRoute(userId){let route="users";return userId&&(route+="/"+userId),route}function headerItemLanguage(orApp){return{icon:"web",value:"language",text:"language",action:()=>{orApp.showLanguageModal()}}}function headerItemLogout(orApp){return{icon:"logout",value:"logout",text:"logout",action:()=>{orApp.logout()}}}var lit=__webpack_require__("../../../node_modules/lit/index.js"),decorators=__webpack_require__("../../../node_modules/lit/decorators.js"),or_map_lib=__webpack_require__("../../component/or-map/lib/index.js"),es=__webpack_require__("../../../node_modules/reselect/es/index.js"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))};const INITIAL_STATE={assets:[],currentAssetId:void 0},pageMapSlice=(0,redux_toolkit_esm.Z0)({name:"pageMap",initialState:INITIAL_STATE,reducers:{assetEventReceived(state,action){if("CREATE"===action.payload.cause){const asset=action.payload.asset,locationAttr=asset.attributes&&asset.attributes.hasOwnProperty("location")?asset.attributes.location:void 0;if(locationAttr&&(!locationAttr.meta||locationAttr.meta&&(!locationAttr.meta.hasOwnProperty("showOnDashboard")||locationAttr.meta.showOnDashboard)))return Object.assign(Object.assign({},state),{assets:[...state.assets,action.payload.asset]})}return state},attributeEventReceived(state,action){const assets=state.assets,attrsOfInterest=action.payload[0],attrEvent=action.payload[1],attrName=attrEvent.ref.name,assetId=attrEvent.ref.id,index=assets.findIndex((asst=>asst.id===assetId)),asset=index>=0?assets[index]:null;return asset?"location"===attrName&&attrEvent.deleted?Object.assign(Object.assign({},state),{assets:[...assets.splice(index,1)]}):attrsOfInterest.includes(attrName)?(assets[index]=core_lib.J0.updateAsset(Object.assign({},asset),attrEvent),state):void 0:state},setAssets:(state,action)=>Object.assign(Object.assign({},state),{assets:action.payload})}}),{assetEventReceived,attributeEventReceived,setAssets}=pageMapSlice.actions,pageMapReducer=pageMapSlice.reducer;function pageMapProvider(store,config){return{name:"map",routes:["map","map/:id"],pageCreator:()=>{const page=new PageMap(store);return page.config=config||{},page}}}let PageMap=class PageMap extends lib.YW{static get styles(){return lit.AH`
           or-map-asset-card {
                height: 35vh;
                position: absolute;
                bottom: 0;
                right: 0;
                width: 100vw;
                z-index: 3;
            }
        
            or-map {
                display: block;
                height: 100%;
                width: 100%;
            }
        
            @media only screen and (min-width: 415px){
                or-map-asset-card {
                    position: absolute;
                    top: 10px;
                    right: 50px;
                    width: 320px;
                    margin: 0;
                    height: 400px; /* fallback for IE */
                    height: max-content;
                    max-height: calc(100vh - 150px);
                }
            }
        `}getAttributesOfInterest(){let markerLabelAttributes=[];return this.config&&this.config.markers&&(markerLabelAttributes=Object.values(this.config.markers).filter((assetTypeMarkerConfig=>assetTypeMarkerConfig.attributeName)).map((assetTypeMarkerConfig=>assetTypeMarkerConfig.attributeName))),[...markerLabelAttributes,"location","direction"]}_setCenter(geocode){this._map.center=[geocode.geometry.coordinates[0],geocode.geometry.coordinates[1]]}get name(){return"map"}constructor(store){super(store),this._assets=[],this._assetSelector=state=>state.map.assets,this._paramsSelector=state=>state.app.params,this._realmSelector=state=>state.app.realm||core_lib.Ay.displayRealm,this.subscribeAssets=realm=>__awaiter(this,void 0,void 0,(function*(){let response;const attrsOfInterest=this.getAttributesOfInterest(),assetQuery=this.config&&this.config.assetQuery?this.config.assetQuery:{realm:{name:realm},select:{attributes:attrsOfInterest},attributes:{items:[{name:{predicateType:"string",value:"location"},meta:[{name:{predicateType:"string",value:"showOnDashboard"},negated:!0},{name:{predicateType:"string",value:"showOnDashboard"},value:{predicateType:"boolean",value:!0}}]}]}};try{if(response=yield core_lib.Ay.rest.api.AssetResource.queryAssets(assetQuery),!this.isConnected||realm!==this._realmSelector(this.getState()))return;if(response.data){const assets=response.data;this._store.dispatch(setAssets(assets));const assetSubscriptionId=yield core_lib.Ay.events.subscribeAssetEvents(void 0,!1,(event=>{this._store.dispatch(assetEventReceived(event))}));if(!this.isConnected||realm!==this._realmSelector(this.getState()))return void core_lib.Ay.events.unsubscribe(assetSubscriptionId);this.assetSubscriptionId=assetSubscriptionId;const attributeSubscriptionId=yield core_lib.Ay.events.subscribeAttributeEvents(void 0,!1,(event=>{this._store.dispatch(attributeEventReceived([attrsOfInterest,event]))}));if(!this.isConnected||realm!==this._realmSelector(this.getState()))return this.assetSubscriptionId=void 0,core_lib.Ay.events.unsubscribe(assetSubscriptionId),void core_lib.Ay.events.unsubscribe(attributeSubscriptionId);this.attributeSubscriptionId=attributeSubscriptionId}}catch(e){console.error("Failed to subscribe to assets",e)}})),this.unsubscribeAssets=()=>{this.assetSubscriptionId&&(core_lib.Ay.events.unsubscribe(this.assetSubscriptionId),this.assetSubscriptionId=void 0),this.attributeSubscriptionId&&(core_lib.Ay.events.unsubscribe(this.attributeSubscriptionId),this.attributeSubscriptionId=void 0)},this.getRealmState=(0,es.Mz)([this._realmSelector],(realm=>__awaiter(this,void 0,void 0,(function*(){this._assets.length>0&&(this._assets=[]),this.unsubscribeAssets(),this.subscribeAssets(realm),this._map&&this._map.refresh()})))),this._getMapAssets=(0,es.Mz)([this._assetSelector],(assets=>assets)),this._getCurrentAsset=(0,es.Mz)([this._assetSelector,this._paramsSelector],((assets,params)=>{const currentId=params?params.id:void 0;return currentId?assets.find((asset=>asset.id===currentId)):null})),this.addEventListener(or_map_lib.mk.NAME,this.onLoadAssetEvent)}render(){var _a,_b;return lit.qy`
            
            ${this._currentAsset?lit.qy`<or-map-asset-card .config="${null===(_a=this.config)||void 0===_a?void 0:_a.card}" .assetId="${this._currentAsset.id}" .markerconfig="${null===(_b=this.config)||void 0===_b?void 0:_b.markers}"></or-map-asset-card>`:""}
            
            <or-map id="map" class="or-map" showGeoCodingControl @or-map-geocoder-change="${ev=>{this._setCenter(ev.detail.geocode)}}">
                ${this._assets.filter((asset=>{if(!asset.attributes)return!1;const attr=asset.attributes.location;return!attr.meta||!attr.meta.hasOwnProperty("showOnDashboard")||!!core_lib.J0.getMetaValue("showOnDashboard",attr)})).sort(((a,b)=>a.attributes.location.value&&b.attributes.location.value?b.attributes.location.value.coordinates[1]-a.attributes.location.value.coordinates[1]:void 0)).map((asset=>lit.qy`
                            <or-map-marker-asset ?active="${this._currentAsset&&this._currentAsset.id===asset.id}" .asset="${asset}" .config="${this.config.markers}"></or-map-marker-asset>
                        `))}
            </or-map>
        `}connectedCallback(){super.connectedCallback(),this.addEventListener(or_map_lib.rC.NAME,this.onMapMarkerClick),this.addEventListener(or_map_lib.fX.NAME,this.onMapClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(or_map_lib.rC.NAME,this.onMapMarkerClick),this.removeEventListener(or_map_lib.fX.NAME,this.onMapClick),this.unsubscribeAssets()}stateChanged(state){this._assets=this._getMapAssets(state),this._currentAsset=this._getCurrentAsset(state),this.getRealmState(state)}onMapMarkerClick(e){const asset=e.detail.marker.asset;lib.QB.navigate(getMapRoute(asset.id))}onMapClick(e){lib.QB.navigate(getMapRoute())}getCurrentAsset(){this._getCurrentAsset(this.getState())}onLoadAssetEvent(loadAssetEvent){lib.QB.navigate(getAssetsRoute(!1,loadAssetEvent.detail))}};__decorate([(0,decorators.MZ)()],PageMap.prototype,"config",void 0),__decorate([(0,decorators.P)("#map")],PageMap.prototype,"_map",void 0),__decorate([(0,decorators.wk)()],PageMap.prototype,"_assets",void 0),__decorate([(0,decorators.wk)()],PageMap.prototype,"_currentAsset",void 0),PageMap=__decorate([(0,decorators.EM)("page-map")],PageMap);var or_asset_viewer_lib=__webpack_require__("../../component/or-asset-viewer/lib/index.js"),or_asset_tree_lib=__webpack_require__("../../component/or-asset-tree/lib/index.js"),or_mwc_dialog=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-dialog.js"),i18next=__webpack_require__("../../../node_modules/i18next/dist/esm/i18next.js"),or_mwc_snackbar=(__webpack_require__("../../component/or-json-forms/lib/index.js"),__webpack_require__("../../component/or-mwc-components/lib/or-mwc-snackbar.js")),page_assets_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},page_assets_awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))};const pageAssetsSlice=(0,redux_toolkit_esm.Z0)({name:"pageAssets",initialState:{expandedParents:[]},reducers:{updateExpandedParents(state,action){const expandedParents=JSON.parse(JSON.stringify(state.expandedParents)),expanded=expandedParents.find((x=>x.realm==core_lib.Ay.displayRealm));expanded||expandedParents.push({realm:core_lib.Ay.displayRealm,ids:[]});const expandedId=expandedParents.findIndex((x=>x.realm==core_lib.Ay.displayRealm));return!action.payload[1]&&expanded&&expanded.ids&&expanded.ids.includes(action.payload[0])?expandedParents[expandedId].ids=expanded.ids.filter((parent=>parent!=action.payload[0])):(!expanded||action.payload[1]&&expanded&&expanded.ids&&!expanded.ids.includes(action.payload[0]))&&expandedParents[expandedId].ids.push(action.payload[0]),Object.assign(Object.assign({},state),{expandedParents})}}}),{updateExpandedParents}=pageAssetsSlice.actions,pageAssetsReducer=pageAssetsSlice.reducer,PAGE_ASSETS_CONFIG_DEFAULT_tree={add:{typesParent:{default:{exclude:["TradfriLightAsset","TradfriPlugAsset","ArtnetLightAsset","ConsoleAsset"]}}}};function pageAssetsProvider(store,config){return{name:"assets",routes:["assets","assets/:editMode","assets/:editMode/:id"],pageCreator:()=>{const page=new PageAssets(store);return config&&(page.config=config),page}}}let PageAssets=class PageAssets extends lib.YW{static get styles(){return lit.AH`

            or-asset-tree {
                align-items: stretch;
                z-index: 1;
            }

            .hideMobile {
                display: none;
            }

            or-asset-viewer {
                align-items: stretch;
                z-index: 0;
            }

            @media only screen and (min-width: 768px){
                or-asset-tree {
                    width: 300px;
                    min-width: 300px;
                    box-shadow: ${(0,lit.iz)(core_lib.rO)}
                }

                .hideMobile {
                    display: flex;
                }

                or-asset-viewer,
                or-asset-viewer.hideMobile {
                    display: initial;
                    max-width: calc(100vw - 300px);
                }
            }
        `}get name(){return"assets"}constructor(store){super(store),this._editMode=!1,this._realmSelector=state=>state.app.realm||core_lib.Ay.displayRealm,this.getRealmState=(0,es.Mz)([this._realmSelector],(realm=>page_assets_awaiter(this,void 0,void 0,(function*(){this._assetIds=void 0,this._viewer&&this._viewer.ids&&(this._viewer.ids=void 0),this._tree&&this._tree.refresh(),this._updateRoute(!0)})))),this.addEventListener(or_asset_tree_lib.dF.NAME,this._onAssetSelectionRequested),this.addEventListener(or_asset_tree_lib.Ym.NAME,this._onAssetSelectionChanged),this.addEventListener(or_asset_viewer_lib.rh.NAME,this._onEditToggleRequested),this.addEventListener(or_asset_viewer_lib.go.NAME,this._onEditToggle),this.addEventListener(or_asset_tree_lib.XT.NAME,this._onAssetAdd),this.addEventListener(or_asset_viewer_lib.RS.NAME,(ev=>this._onAssetSave(ev.detail))),this.addEventListener(or_asset_tree_lib.Uj.NAME,this._onAssetTreeAssetEvent),this.addEventListener(or_asset_viewer_lib.K9.NAME,(ev=>this._onAssetParentChange(ev.detail))),this.addEventListener(or_asset_tree_lib.s7.NAME,(ev=>this._onAssetParentChange(ev.detail))),this.addEventListener(or_asset_tree_lib.eg.NAME,this._onAssetExpandToggle),this.addEventListener(or_asset_viewer_lib.FN.NAME,this._onLoadUserEvent)}connectedCallback(){var _a;super.connectedCallback(),this._expandedIds=null===(_a=this._store.getState().assets.expandedParents.find((x=>x.realm==core_lib.Ay.displayRealm)))||void 0===_a?void 0:_a.ids}render(){return lit.qy`
            <or-asset-tree id="tree" .config="${this.config&&this.config.tree?this.config.tree:PAGE_ASSETS_CONFIG_DEFAULT_tree}"
                           class="${this._assetIds&&1===this._assetIds.length?"hideMobile":""}"
                           .selectedIds="${this._assetIds}"
                           .expandedIds="${this._expandedIds}"
            ></or-asset-tree>
            <or-asset-viewer id="viewer" .config="${this.config&&this.config.viewer?this.config.viewer:void 0}"
                             class="${this._assetIds&&1===this._assetIds.length?"":"hideMobile"}"
                             .editMode="${this._editMode}"
            ></or-asset-viewer>
        `}stateChanged(state){this.getRealmState(state),this._editMode=!(!state.app.params||"true"!==state.app.params.editMode),this._assetIds&&0!==this._assetIds.length||(this._assetIds=state.app.params&&state.app.params.id?[state.app.params.id]:void 0)}_onAssetSelectionRequested(event){this._viewer.isModified()&&(event.detail.allow=!1,this._confirmContinue((()=>{const nodes=event.detail.detail.newNodes;core_lib.J0.objectsEqual(nodes,event.detail.detail.oldNodes)?(this._viewer.ids=void 0,this._viewer.ids=nodes.map((node=>node.asset.id))):(this._assetIds=nodes.map((node=>node.asset.id)),this._viewer.ids=this._assetIds,this._updateRoute(!0))})))}_onAssetSelectionChanged(event){this._assetIds=event.detail.newNodes.map((node=>node.asset.id)),this._viewer.ids=this._assetIds,this._updateRoute(!0)}_onEditToggleRequested(event){this._viewer.isModified()&&(event.detail.allow=!1,this._confirmContinue((()=>{this._editMode=event.detail.detail})))}_onEditToggle(event){this._editMode=event.detail,this._updateRoute(!0)}_confirmContinue(action){this._viewer.isModified()?(0,or_mwc_dialog.YB)(i18next.Ay.t("loseChanges"),i18next.Ay.t("confirmContinueAssetModified"),i18next.Ay.t("discard")).then((ok=>{ok&&action()})):action()}_onAssetAdd(ev){return page_assets_awaiter(this,void 0,void 0,(function*(){if(this._editMode)this._viewer.asset=ev.detail.asset;else{const result=yield(0,or_asset_viewer_lib.We)(ev.detail.asset);result.isCopy=!0,this.dispatchEvent(new or_asset_viewer_lib.RS(result)),this._onAssetSave(result)}}))}_onAssetSave(result){result.success&&result.isNew&&(this._addedAssetId=result.assetId)}_onAssetParentChange(newParentId){return page_assets_awaiter(this,void 0,void 0,(function*(){let parentId=newParentId.parentId,assetsIds=newParentId.assetsIds;try{parentId?assetsIds.includes(parentId)?(0,or_mwc_snackbar.td)(void 0,"moveAssetFailed","dismiss"):yield core_lib.Ay.rest.api.AssetResource.updateParent(parentId,{assetIds:assetsIds}):yield core_lib.Ay.rest.api.AssetResource.updateNoneParent({assetIds:assetsIds})}catch(e){(0,or_mwc_snackbar.td)(void 0,"moveAssetFailed","dismiss")}}))}_onAssetTreeAssetEvent(ev){"CREATE"===ev.detail.cause&&this._addedAssetId&&this._addedAssetId===ev.detail.asset.id&&(this._assetIds=[ev.detail.asset.id],this._addedAssetId=void 0,this._viewer.ids=this._assetIds,this._updateRoute(!0))}_onAssetExpandToggle(event){this._store.dispatch(updateExpandedParents([event.detail.node.asset.id,event.detail.node.expanded]))}_updateRoute(silent=!0){const assetId=this._assetIds&&1===this._assetIds.length?this._assetIds[0]:void 0;lib.QB.navigate(getAssetsRoute(this._editMode,assetId),{callHooks:!silent,callHandler:!silent})}_onLoadUserEvent(event,silent=!1){lib.QB.navigate(getUsersRoute(event.detail),{callHooks:!silent,callHandler:!silent})}};page_assets_decorate([(0,decorators.MZ)()],PageAssets.prototype,"config",void 0),page_assets_decorate([(0,decorators.MZ)()],PageAssets.prototype,"_editMode",void 0),page_assets_decorate([(0,decorators.MZ)()],PageAssets.prototype,"_assetIds",void 0),page_assets_decorate([(0,decorators.wk)()],PageAssets.prototype,"_expandedIds",void 0),page_assets_decorate([(0,decorators.P)("#tree")],PageAssets.prototype,"_tree",void 0),page_assets_decorate([(0,decorators.P)("#viewer")],PageAssets.prototype,"_viewer",void 0),PageAssets=page_assets_decorate([(0,decorators.EM)("page-assets")],PageAssets);var or_chart_lib=__webpack_require__("../../component/or-chart/lib/index.js"),or_translate_lib=__webpack_require__("../../component/or-translate/lib/index.js");__webpack_require__("../../component/or-components/lib/or-panel.js");const style=lit.AH`

    :host {
        --internal-or-asset-viewer-background-color: var(--or-asset-viewer-background-color, var(--or-app-color2, ${(0,lit.iz)(core_lib.PR)}));
        --internal-or-asset-viewer-panel-margin: var(--or-asset-viewer-panel-margin, 20px);
        --internal-or-asset-viewer-panel-padding: var(--or-asset-viewer-panel-padding, 24px);
        --internal-or-asset-viewer-text-color: var(--or-asset-viewer-text-color, var(--or-app-color3, ${(0,lit.iz)(core_lib.Iy)}));
        --internal-or-asset-viewer-title-text-color: var(--or-asset-viewer-title-text-color, var(--or-app-color3, ${(0,lit.iz)(core_lib.Iy)}));       
        --internal-or-asset-viewer-panel-color: var(--or-asset-viewer-panel-color, var(--or-app-color1, ${(0,lit.iz)(core_lib.WO)}));
        --internal-or-asset-viewer-line-color: var(--or-asset-viewer-line-color, var(--or-app-color5, ${(0,lit.iz)(core_lib.Id)}));
        
        height: 100%;
        width: 100%;
        background-color: var(--internal-or-asset-viewer-background-color);
    }
   
    *[hidden] {
        display: none;
    }
    
    #container {
        width: 100%;
        box-sizing: border-box;
        display: grid;
        margin: auto;
        padding: 20px 20px;
        grid-gap: 10px;
        grid-template-columns: repeat(auto-fill, minmax(calc(25% - 8px), 1fr));
        grid-auto-rows: 5px;

        -webkit-animation: fadein 0.3s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 0.3s; /* Firefox < 16 */
        -ms-animation: fadein 0.3s; /* Internet Explorer */
        -o-animation: fadein 0.3s; /* Opera < 12.1 */
        animation: fadein 0.3s;
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

    .panel {
        background-color: var(--internal-or-asset-viewer-panel-color);     
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        max-width: 100%;
    }
    
    .panel-content-wrapper {
        padding: var(--internal-or-asset-viewer-panel-padding);
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
        margin-bottom: 25px;
        flex: 0 0 auto;
    }
   
    .field {
        margin: 10px 0;
        width: 100%;
        flex: 0 0 auto;
        min-height: 50px;
    }
    
    .field > * {
        width: 100%;
        box-sizing: border-box;
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

    @media screen and (max-width: 1024px) {
        #container {
            grid-template-columns: repeat(auto-fill, minmax(calc(50% - 8px), 1fr));
        }
    }

    @media screen and (max-width: 769px) {
        .back-navigation {
            display: block;
        }
        
        .mobileHidden {
            display: none;
        }
      
        #container {
            grid-auto-rows: auto;
        }

        .panel {
            border-radius: 0;
            border-right: none;
            border-left: none;
        }

        #chart-panel {
            grid-row-start: 1;
        }

        
        #container { 
            grid-template-columns: 100% !important;
            padding: 20px 0;
        }
        
        
    }
`;var style_map=__webpack_require__("../../../node_modules/lit/directives/style-map.js"),class_map=__webpack_require__("../../../node_modules/lit/directives/class-map.js"),model_lib=__webpack_require__("../../component/model/lib/index.js"),chart=__webpack_require__("../../../node_modules/chart.js/dist/chart.mjs"),or_mwc_input=(__webpack_require__("../../../node_modules/chartjs-adapter-moment/dist/chartjs-adapter-moment.esm.js"),__webpack_require__("../../component/or-mwc-components/lib/or-mwc-input.js")),or_icon_lib=__webpack_require__("../../component/or-icon/lib/index.js"),or_attribute_picker_lib=__webpack_require__("../../component/or-attribute-picker/lib/index.js"),moment=__webpack_require__("../../../node_modules/moment/moment.js"),moment_default=__webpack_require__.n(moment),or_mwc_menu=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-menu.js"),lodash=__webpack_require__("../../../node_modules/lodash/lodash.js"),lib_decorate=function(t,e,i,a){var s,r=arguments.length,o=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,a);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(o=(r<3?s(o):r>3?s(e,i,o):s(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o},lib_awaiter=function(t,e,i,a){return new(i||(i=Promise))((function(s,r){function o(t){try{l(a.next(t))}catch(t){r(t)}}function n(t){try{l(a.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,n)}l((a=a.apply(t,e||[])).next())}))};chart.t1.register(chart.ZT,chart.No,chart.FN,chart.kc,chart.hE,chart.iw);const lib_style=lit.AH`
    
    :host {
        --internal-or-attribute-history-graph-line-color: var(--or-attribute-history-graph-line-color, var(--or-app-color4, ${(0,lit.iz)(core_lib.BB)}));       
        width: 100%;
    }
    
    :host([hidden]) {
        display: none;
    }
    
    .panel {
        position: relative;
        height: 100%;
    }
    .panel.panel-empty {
        display: flex;
    }
    .panel.panel-empty .panel-content-wrapper {
        align-items: center;
        width: 100%;
    }
    .panel.panel-empty .panel-content {
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    
    .panel-content-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
        
    .panel-title {
        display: flex;
        align-items: center;
        /*margin: -15px -15px 0 0;*/ /* compensate for the click-space of the plusminus button */
        font-weight: bolder;
        line-height: 1em;
        color: var(--internal-or-asset-viewer-title-text-color);
        flex: 0 0 auto;
    }
    
    .panel-title-text {
        flex: 1;
        text-transform: uppercase;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    
    .panel-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        flex: 1;
    }
    
    .mainvalue-wrapper {
        width: 100%;
        display: flex;
        flex: 0 0 60px;
        align-items: center;
        justify-content: center;
    }
    
    .graph-wrapper {
        width: 100%;
        display: flex;
        flex: 1;
        align-items: center;
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
    
    .chart-wrapper {
        flex: 1 1 auto;
        width: 65%;
        height: 75%;
    }
    .controls-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        place-content: space-between;
    }
    
    .delta-wrapper {
        /*flex: 0 0 50px;*/
        text-align: right;
        
        /*position: absolute;*/
        /*right: var(--internal-or-asset-viewer-panel-padding);*/
    }
    
    .date-range-wrapper {
        flex: 1;
        display: flex;
        justify-content: space-between;
    }
    
    .period-selector {
        
    }
    
    .delta {
        color: var(--or-app-color3, ${(0,lit.iz)(core_lib.Iy)});
        font-weight: bold;
    }
`;let OrAttributeCard=class extends lit.WF{static get styles(){return[lib_style]}constructor(){super(),this.assets=[],this.assetAttributes=[],this.data=void 0,this.mainValueDecimals=2,this.mainValueSize="m",this.delta=void 0,this.deltaPlus="",this.deltaFormat="absolute",this.showControls=!0,this.showTitle=!0,this._loading=!1,this.error=!1,this.period="day"}connectedCallback(){super.connectedCallback(),this._style=window.getComputedStyle(this)}disconnectedCallback(){super.disconnectedCallback(),this._cleanup()}firstUpdated(){this.loadSettings()}updated(t){t.has("realm")&&null!=t.get("realm")&&(this.assets=[],this.loadSettings()),(t.has("period")||t.has("compareTimestamp")||t.has("timestamp")||t.has("assetAttributes")||t.has("realm"))&&(this.data=void 0,this._chart&&(this._chart.destroy(),this._chart=void 0),this.loadData()),this.data&&0!==this.data.length&&(this._chart?t.has("data")&&(this._chart.data.datasets[0].data=this.data.filter((t=>null!=t.y)),this._chart.update(),this.delta=this.getFormattedDelta(this.getFirstKnownMeasurement(this.data),this.getLastKnownMeasurement(this.data))):this._chart=new chart.t1(this._chartElem.getContext("2d"),{type:"line",data:{datasets:[{data:this.data.filter((t=>null!=t.y)),tension:.1,spanGaps:!0,backgroundColor:"transparent",borderColor:this._style.getPropertyValue("--internal-or-attribute-history-graph-line-color"),pointBorderColor:"transparent"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{displayColors:!1,callbacks:{title:t=>"",footer:()=>""}}},scales:{y:{display:!1},x:{type:"time",min:this._startOfPeriod,max:this._endOfPeriod,display:!1}}}}),(t.has("mainValue")||t.has("mainValueDecimals"))&&(this.formattedMainValue=this.getFormattedValue(this.mainValue)),t.has("delta")&&(this.deltaPlus=this.delta&&this.delta.val>0?"+":""))}shouldShowControls(){return this.showControls&&"true"==this.showControls.toString()}shouldShowTitle(){return this.showTitle&&"true"==this.showTitle.toString()}render(){return this.assets&&this.assetAttributes&&0!==this.assetAttributes.length?this.error?lit.qy`
                <div class="panel panel-empty">
                    <div class="panel-content-wrapper">
                        <div class="panel-content">
                            <span>${i18next.Ay.t("couldNotRetrieveAttribute")}</span>
                            ${this.shouldShowControls()?lit.qy`
                                <or-mwc-input class="button" .type="${or_mwc_input.NZ.BUTTON}" label="selectAttribute" icon="plus" @or-mwc-input-changed="${()=>this._openDialog("editAttribute")}"></or-mwc-input>
                            `:void 0}
                        </div>
                    </div>
                </div>
            `:(this.updateComplete.then((()=>{this.resizeObserver=new ResizeObserver((0,lodash.debounce)((t=>{const e=t[0].devicePixelContentBoxSize[0].blockSize;this.setLabelSizeByWidth(e)}),200)),this.resizeObserver.observe(this.shadowRoot.querySelector(".graph-wrapper"))})),lit.qy`
            <div class="panel" id="attribute-card">
                <div class="panel-content-wrapper">
                    <div class="panel-title">
                        ${this.shouldShowTitle()?lit.qy`<span class="panel-title-text">${this.assets[0].name+" - "+i18next.Ay.t(this.assetAttributes[0][1].name)}</span>`:void 0}
                        ${this.shouldShowTitle()?(0,or_mwc_menu.Xj)(lit.qy`
                            <or-mwc-input icon="dots-vertical" type="button"></or-mwc-input>
                        `,[{text:i18next.Ay.t("editAttribute"),value:"editAttribute"},{text:i18next.Ay.t("editDelta"),value:"editDelta"},{text:i18next.Ay.t("editCurrentValue"),value:"editCurrentValue"},{text:i18next.Ay.t("delete"),value:"delete"}],void 0,(t=>this.handleMenuSelect(t))):void 0}
                    </div>
                    <div class="panel-content">
                        <div class="mainvalue-wrapper">
                            <span class="main-number-icon">${this.assets&&1===this.assets.length?(0,or_icon_lib.xl)(model_lib.u0.getAssetDescriptor(this.assets[0].type)):""}</span>
                            <span class="main-number ${this.mainValueSize}">${this.formattedMainValue?this.formattedMainValue.value:""}</span>
                            <span class="main-number-unit ${this.mainValueSize}">${this.formattedMainValue?this.formattedMainValue.unit:""}</span>      
                        </div>
                        <div class="graph-wrapper">
                            <div class="chart-wrapper">
                                <canvas id="chart"></canvas>
                            </div>
                            <div class="controls-wrapper">
                                <div class="delta-wrapper">
                                    <span class="delta">${this.delta?this.deltaPlus+(void 0!==this.delta.val&&null!==this.delta.val?this.delta.val:"")+(this.delta.unit||""):""}</span>
                                </div>
                                ${this.shouldShowControls()?lit.qy`
                                    <div class="period-selector-wrapper">
                                        ${(0,or_mwc_menu.Xj)(lit.qy`<or-mwc-input class="period-selector" .type="${or_mwc_input.NZ.BUTTON}" label="${this.period?this.period:"-"}"></or-mwc-input>`,[{value:"hour",text:"hour"},{value:"day",text:"day"},{value:"week",text:"week"},{value:"month",text:"month"},{value:"year",text:"year"}].map((t=>(t.text=i18next.Ay.t(t.value),t))),this.period,(t=>this._setPeriodOption(t)))}
                                    </div>
                                `:lit.qy`
                                    <or-mwc-input class="period-selector" .type="${or_mwc_input.NZ.BUTTON}" disabled .label="${i18next.Ay.t(this.period?this.period:"-")}"></or-mwc-input>
                                `}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `):lit.qy`
                <div class="panel panel-empty">
                    <div class="panel-content-wrapper">
                        <div class="panel-content">
                            ${this.shouldShowControls()?lit.qy`
                                <or-mwc-input class="button" .type="${or_mwc_input.NZ.BUTTON}" label="selectAttribute" icon="plus" @or-mwc-input-changed="${()=>this._openDialog("editAttribute")}"></or-mwc-input>
                            `:lit.qy`
                                <span>${i18next.Ay.t("noAttributeConnected")}</span>
                            `}
                        </div>
                    </div>
                </div>
            `}_openDialog(t){let e;switch(t){case"editDelta":case"editCurrentValue":e=(new or_mwc_dialog.X$).setHeading(i18next.Ay.t(t)).setDismissAction(null).setContent("editDelta"===t?lit.qy`
                                <or-mwc-input id="delta-mode-picker" value="${this.deltaFormat}" @or-mwc-input-changed="${t=>{this.deltaFormat=t.detail.value,this.saveSettings()}}" .type="${or_mwc_input.NZ.LIST}" .options="${[["percentage","Percentage"],["absolute","Absolute"]]}"></or-mwc-input>                
                            `:lit.qy`
                                <or-mwc-input id="current-value-decimals" .label="${i18next.Ay.t("decimals")}" value="${this.mainValueDecimals}" .type="${or_mwc_input.NZ.TEXT}"></or-mwc-input>
                            `).setActions([{actionName:"cancel",content:lit.qy`<or-mwc-input class="button" .type="${or_mwc_input.NZ.BUTTON}" label="cancel"></or-mwc-input>`,action:()=>{}},{actionName:"yes",default:!0,content:lit.qy`<or-mwc-input class="button" .type="${or_mwc_input.NZ.BUTTON}" label="ok" data-mdc-dialog-action="yes"></or-mwc-input>`,action:()=>{if("editDelta"===t)this.delta=this.data?this.getFormattedDelta(this.getFirstKnownMeasurement(this.data),this.getLastKnownMeasurement(this.data)):void 0;else if(e&&e.shadowRoot&&e.shadowRoot.getElementById("current-value-decimals")){const t=e.shadowRoot.getElementById("current-value-decimals"),i=parseInt(t.value,10);this.mainValueDecimals=i<0?0:i>10?10:i,this.formattedMainValue=this.getFormattedValue(this.mainValue),this.saveSettings()}}}]),e.addEventListener(or_asset_tree_lib.Ym.NAME,(t=>lib_awaiter(this,void 0,void 0,(function*(){const e=t.detail&&t.detail.newNodes.length>0?t.detail.newNodes[0]:void 0;if(e){const t=yield core_lib.m8.events.sendEventWithReply({event:{eventType:"read-asset",assetId:e.asset.id}});this.asset=t.asset}else this.asset=void 0}))));break;default:e=(new or_attribute_picker_lib.y).setHeading(i18next.Ay.t("selectAttribute")),e.addEventListener(or_attribute_picker_lib._.NAME,(t=>lib_awaiter(this,void 0,void 0,(function*(){const e=t.detail[0];try{const t=yield core_lib.m8.rest.api.AssetResource.get(e.id);this.asset=t.data,this._setAttribute(e.name)}catch(t){console.error("Failed to get assets requested in settings",t)}}))))}e&&(0,or_mwc_dialog.ui)(e)}_setAttribute(t){if(this.asset&&t){const e=this.asset.attributes?this.asset.attributes[t]:void 0;this.assets=[this.asset],this.assetAttributes=e?[[0,e]]:[],this.saveSettings()}}_cleanup(){this._chart&&(this._chart.destroy(),this._chart=void 0)}loadSettings(t=!1){return lib_awaiter(this,void 0,void 0,(function*(){this.assetAttributes=[],this.period&&!t||(this.period="day"),this.deltaFormat&&!t||(this.deltaFormat="absolute"),this.mainValueDecimals&&!t||(this.mainValueDecimals=0),this.realm||(this.realm=core_lib.m8.getRealm());let e=(yield core_lib.m8.console.retrieveData("OrChartConfig"))||[];if(Array.isArray(e)||(e=[e]),0===e.length||!this.panelName)return;const i=window.location.hash;let a=e.find((t=>t.realm===this.realm));const s=a&&a.views&&a.views[i]?a.views[i][this.panelName]:void 0;if(!s)return;if(!s.attributeRefs){delete a.views[i][this.panelName];const t=[...e.filter((t=>t.realm!==this.realm)),a];return void core_lib.m8.console.storeData("OrChartConfig",t)}const r=s.attributeRefs.map((t=>t.id));if(0!==r.length&&(this._loading=!0,!r.every((t=>!!this.assets.find((e=>e.id===t)))))){const t={ids:r};try{const i=(yield core_lib.m8.rest.api.AssetResource.queryAssets(t)).data||[];s.attributeRefs=s.attributeRefs.filter((t=>!!i.find((e=>e.id===t.id&&e.attributes&&e.attributes.hasOwnProperty(t.name))))),e=[...e.filter((t=>t.realm!==this.realm)),a],core_lib.m8.console.storeData("OrChartConfig",e),this.assets=i.filter((t=>s.attributeRefs.find((e=>e.id===t.id))))}catch(t){console.error("Failed to get assets requested in settings",t)}this._loading=!1,this.assets&&this.assets.length>0&&(this.assetAttributes=s.attributeRefs.map((t=>{const e=this.assets.findIndex((e=>e.id===t.id)),i=e>=0?this.assets[e]:void 0;return i&&i.attributes?[e,i.attributes[t.name]]:void 0})).filter((t=>!!t)),this.period=s.period||"day",this.mainValueDecimals=s.decimals||0,this.deltaFormat=s.deltaFormat||"absolute")}}))}saveSettings(){return lib_awaiter(this,void 0,void 0,(function*(){if(!this.panelName)return;const t=window.location.hash;let e=(yield core_lib.m8.console.retrieveData("OrChartConfig"))||[],i=e.find((t=>t.realm===this.realm));i||(i={realm:this.realm,views:{}}),i.views[t]||(i.views[t]={}),this.assets&&this.assetAttributes&&0!==this.assets.length&&0!==this.assetAttributes.length?(i.realm=this.realm,i.views[t][this.panelName]={attributeRefs:this.assetAttributes.map((([t,e])=>{const i=this.assets[t];return i?{id:i.id,name:e.name}:void 0})).filter((t=>!!t)),period:this.period,deltaFormat:this.deltaFormat,decimals:this.mainValueDecimals}):delete i.views[t][this.panelName],e=[...e.filter((t=>t.realm!==this.realm)),i],core_lib.m8.console.storeData("OrChartConfig",e)}))}loadData(){return lib_awaiter(this,void 0,void 0,(function*(){if(this._loading||this.data||!this.assetAttributes||!this.assets||0===this.assets.length||0===this.assetAttributes.length||!this.period)return;this._loading=!0;let t="HOUR",e=1;switch(this.period){case"hour":t="MINUTE",e=5;break;case"day":t="HOUR",e=1;break;case"week":t="HOUR",e=6;break;case"month":t="DAY",e=1;break;case"year":t="MONTH",e=1}t.toLowerCase(),this._startOfPeriod=moment_default()().subtract(1,this.period).toDate().getTime(),this._endOfPeriod=moment_default()().toDate().getTime(),this.mainValue=void 0,this.formattedMainValue=void 0;const i=this.assets[0].id,a=this.assetAttributes[0][1].name,s=yield core_lib.m8.events.sendEventWithReply({event:{eventType:"read-asset-attribute",ref:{id:i,name:a}}});this.mainValue=s.value,this.formattedMainValue=this.getFormattedValue(this.mainValue);const r=yield core_lib.m8.rest.api.AssetDatapointResource.getDatapoints(i,a,{type:"lttb",fromTimestamp:this._startOfPeriod,toTimestamp:this._endOfPeriod,amountOfPoints:20});this._loading=!1,200===r.status&&(this.data=r.data,this.delta=this.getFormattedDelta(this.getFirstKnownMeasurement(this.data),this.getLastKnownMeasurement(this.data)),this.deltaPlus=this.delta&&this.delta.val>0?"+":"",this.error=!1)}))}getTotalValue(t){return t.reduce(((t,e)=>e.y?t+Math.round(e.y):t),0)}getHighestValue(t){return Math.max.apply(Math,t.map((t=>t.y||!1)))}getFormattedValue(t){if(void 0===t||!this.assets||!this.assetAttributes||0===this.assets.length||0===this.assetAttributes.length)return;const e=this.assetAttributes[0][1],i=+(null==t?void 0:t.toFixed(this.mainValueDecimals)),a=model_lib.u0.getAttributeDescriptor(e.name,this.assets[0].type),s=core_lib.J0.resolveUnits(core_lib.J0.getAttributeUnits(e,a,this.assets[0].type));return this.setLabelSizeByLength(i.toString()),s?{value:i,unit:s}:{value:i,unit:""}}getFirstKnownMeasurement(t){for(let e=0;e<=t.length;e++)if(t[e]&&void 0!==t[e].y)return t[e].y;return 0}getLastKnownMeasurement(t){for(let e=t.length-1;e>=0;e--)if(t[e]&&void 0!==t[e].y)return t[e].y;return 0}getFormattedDelta(t,e){return"percentage"===this.deltaFormat?t&&e?0===e&&0===t?{val:0,unit:"%"}:0===e&&0!==t?{val:100,unit:"%"}:{val:Math.round((e-t)/t*100),unit:"%"}:{val:0,unit:"%"}:{val:Math.round(e-t),unit:""}}handleMenuSelect(t){"delete"===t?(this.assets=[],this.assetAttributes=[],this.saveSettings()):this._openDialog(t)}setLabelSizeByLength(t){t.length>=20&&(this.mainValueSize="xs"),t.length<20&&(this.mainValueSize="s"),t.length<15&&(this.mainValueSize="m"),t.length<10&&(this.mainValueSize="l"),t.length<5&&(this.mainValueSize="xl")}setLabelSizeByWidth(t){this.mainValueSize=t<60?"s":t<100?"m":t<200?"l":"xl"}_setPeriodOption(t){this.period=t,this.saveSettings()}};lib_decorate([(0,decorators.MZ)()],OrAttributeCard.prototype,"panelName",void 0),lib_decorate([(0,decorators.MZ)({type:Object})],OrAttributeCard.prototype,"assets",void 0),lib_decorate([(0,decorators.MZ)({type:Object})],OrAttributeCard.prototype,"assetAttributes",void 0),lib_decorate([(0,decorators.MZ)()],OrAttributeCard.prototype,"data",void 0),lib_decorate([(0,decorators.MZ)({type:String})],OrAttributeCard.prototype,"realm",void 0),lib_decorate([(0,decorators.MZ)()],OrAttributeCard.prototype,"mainValue",void 0),lib_decorate([(0,decorators.MZ)()],OrAttributeCard.prototype,"mainValueDecimals",void 0),lib_decorate([(0,decorators.MZ)()],OrAttributeCard.prototype,"mainValueSize",void 0),lib_decorate([(0,decorators.MZ)()],OrAttributeCard.prototype,"delta",void 0),lib_decorate([(0,decorators.MZ)()],OrAttributeCard.prototype,"deltaPlus",void 0),lib_decorate([(0,decorators.MZ)()],OrAttributeCard.prototype,"deltaFormat",void 0),lib_decorate([(0,decorators.MZ)()],OrAttributeCard.prototype,"showControls",void 0),lib_decorate([(0,decorators.MZ)()],OrAttributeCard.prototype,"showTitle",void 0),lib_decorate([(0,decorators.MZ)()],OrAttributeCard.prototype,"_loading",void 0),lib_decorate([(0,decorators.MZ)()],OrAttributeCard.prototype,"period",void 0),lib_decorate([(0,decorators.P)("#chart")],OrAttributeCard.prototype,"_chartElem",void 0),OrAttributeCard=lib_decorate([(0,decorators.EM)("or-attribute-card")],OrAttributeCard);var OrDataViewer_1,or_data_viewer_lib_decorate=function(e,t,r,i){var a,o=arguments.length,n=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(o<3?a(n):o>3?a(t,r,n):a(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n};class OrDataViewerRenderCompleteEvent extends CustomEvent{constructor(){super(OrDataViewerRenderCompleteEvent.NAME,{bubbles:!0,composed:!0})}}OrDataViewerRenderCompleteEvent.NAME="or-data-viewer-render-complete-event";class OrDataViewerConfigInvalidEvent extends CustomEvent{constructor(){super(OrDataViewerConfigInvalidEvent.NAME,{bubbles:!0,composed:!0})}}OrDataViewerConfigInvalidEvent.NAME="or-data-viewer-config-invalid-event";let OrDataViewer=OrDataViewer_1=class extends((0,or_translate_lib.Tl)(i18next.Ay)(lit.WF)){static get styles(){return[style]}static generateGrid(e){if(e){const t=e.querySelector("#container");if(t){const r=parseInt(window.getComputedStyle(t).getPropertyValue("grid-auto-rows"),10),i=parseInt(window.getComputedStyle(t).getPropertyValue("grid-row-gap"),10),a=e.querySelectorAll(".panel");a&&a.forEach((e=>{const t=e.querySelector(".panel-content-wrapper");if(t){const a=Math.ceil((t.getBoundingClientRect().height+i)/(r+i));e.style.gridRowEnd="span "+a}}))}}}constructor(){super(),this._loading=!1,this._resizeHandler=()=>{OrDataViewer_1.generateGrid(this.shadowRoot)},this.addEventListener(or_chart_lib.a.NAME,(()=>OrDataViewer_1.generateGrid(this.shadowRoot)))}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._resizeHandler)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._resizeHandler)}refresh(){this.realm=core_lib.Ay.displayRealm}getPanel(e,t){const r=this.getPanelContent(e,t);return r?lit.qy`
            <div class=${(0,class_map.H)({panel:!0,mobileHidden:!0===t.hideOnMobile})} id="${e}-panel" style="${t&&t.panelStyles?(0,style_map.W)(t.panelStyles):""}">
                <div class="panel-content-wrapper">
                    ${t&&"chart"===t.type?lit.qy`
                        <div class="panel-title">
                            <or-translate value="${e}"></or-translate>
                        </div>
                    `:""}
                   
                    <div class="panel-content">
                        ${r}
                    </div>
                </div>
            </div>
        `:lit.qy``}getPanelContent(e,t){if(t.hide||!this.config)return;let r;return this.realm=core_lib.Ay.displayRealm,t&&"chart"===t.type&&(r=lit.qy`<or-chart id="chart" panelName="${e}" .config="${this.config.chartConfig}" .realm="${this.realm}"></or-chart>`),t&&"kpi"===t.type&&(r=lit.qy`
                <or-attribute-card panelName="${e}" .config="${this.config.chartConfig}" .realm="${this.realm}"></or-attribute-card>
            `),r}render(){return this._loading?lit.qy`
                <div class="msg"><or-translate value="loading"></or-translate></div>
            `:(this.config||(this.config=Object.assign({},OrDataViewer_1.DEFAULT_CONFIG)),lit.qy`
            <div id="wrapper">
                <div id="container" style="${this.config.viewerStyles?(0,style_map.W)(this.config.viewerStyles):""}">
                    ${this.renderConfig()}
                </div>
            </div>
        `)}renderConfig(){let e=this.config?this.config:OrDataViewer_1.DEFAULT_CONFIG;try{return Object.entries(e.panels).map((([e,t])=>this.getPanel(e,t)))}catch(t){return console.warn("OR data viewer config is invalid"),this.config=void 0,this.dispatchEvent(new OrDataViewerConfigInvalidEvent),e=OrDataViewer_1.DEFAULT_CONFIG,Object.entries(e.panels).map((([e,t])=>this.getPanel(e,t)))}}updated(e){super.updated(e),e.has("realm")&&this.refresh(),this.updateComplete.then((()=>{this.dispatchEvent(new OrDataViewerRenderCompleteEvent),OrDataViewer_1.generateGrid(this.shadowRoot)}))}};OrDataViewer.DEFAULT_PANEL_TYPE="chart",OrDataViewer.DEFAULT_CONFIG={viewerStyles:{},panels:{chart:{type:"chart",hideOnMobile:!0,panelStyles:{gridColumn:"1 / -1"}},kpi1:{type:"kpi",hideOnMobile:!1},kpi2:{type:"kpi",hideOnMobile:!1},kpi3:{type:"kpi",hideOnMobile:!1},kpi4:{type:"kpi",hideOnMobile:!1},kpi5:{type:"kpi",hideOnMobile:!1},kpi6:{type:"kpi",hideOnMobile:!1},kpi7:{type:"kpi",hideOnMobile:!1},kpi8:{type:"kpi",hideOnMobile:!1},chart2:{type:"chart",hideOnMobile:!0,panelStyles:{gridColumn:"1 / -1"}},chart3:{type:"chart",hideOnMobile:!0,panelStyles:{gridColumn:"1 / -1"}}}},or_data_viewer_lib_decorate([(0,decorators.MZ)()],OrDataViewer.prototype,"config",void 0),or_data_viewer_lib_decorate([(0,decorators.MZ)({type:Array,attribute:!1})],OrDataViewer.prototype,"_assets",void 0),or_data_viewer_lib_decorate([(0,decorators.MZ)()],OrDataViewer.prototype,"_loading",void 0),or_data_viewer_lib_decorate([(0,decorators.MZ)()],OrDataViewer.prototype,"realm",void 0),OrDataViewer=OrDataViewer_1=or_data_viewer_lib_decorate([(0,decorators.EM)("or-data-viewer")],OrDataViewer);var when=__webpack_require__("../../../node_modules/lit-html/directives/when.js");const style_style=lit.AH`

    :host {       
        --internal-or-asset-tree-header-color: var(--or-asset-tree-header-color, var(--or-app-color4, ${(0,lit.iz)(core_lib.BB)}));     
        --internal-or-asset-tree-header-text-color: var(--or-asset-tree-header-text-color, var(--or-app-color7, ${(0,lit.iz)(core_lib.WO)}));
        --internal-or-asset-tree-header-menu-background-color: var(--or-asset-tree-header-menu-background-color, var(--internal-or-asset-tree-header-text-color));
        --internal-or-asset-tree-header-menu-text-color: var(--or-asset-tree-header-menu-text-color, inherit);
        --internal-or-asset-tree-header-height: var(--or-asset-tree-header-height, 48px);
        --internal-or-asset-tree-background-color: var(--or-asset-tree-background-color, var(--or-app-color1, ${(0,lit.iz)(core_lib.WO)}));
        --internal-or-asset-tree-text-color: var(--or-asset-tree-text-color, inherit);
        --internal-or-asset-tree-item-height: var(--or-asset-tree-item-height, 24px);
        --internal-or-asset-tree-item-padding: var(--or-asset-tree-item-padding, 10px);
        --internal-or-asset-tree-selected-background-color: var(--or-asset-tree-selected-background-color, var(--or-app-color2, ${(0,lit.iz)(core_lib.PR)}));
        --internal-or-asset-tree-selected-color: var(--or-asset-tree-selected-color, var(--or-app-color4, ${(0,lit.iz)(core_lib.BB)}));
        --internal-or-asset-tree-button-color: var(--or-asset-tree-button-color, var(--or-app-color4, ${(0,lit.iz)(core_lib.BB)}));
        --internal-or-asset-tree-line-color: var(--or-asset-tree-line-color, var(--or-app-color5, ${(0,lit.iz)(core_lib.Id)}));
            
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        background-color: var(--internal-or-asset-tree-background-color);
    }

    @media only screen and (max-width: 640px){
        .hideMobile {
            display: none !important;
        }
    }
    @media only screen and (min-width: 641px){
        .showMobile {
            display: none !important;
        }
    }
    
    #container {
        display: flex;
        width: 100%;
        height: 100%;
    }
        
    #menu-header {
        background-color: var(--internal-or-asset-tree-header-color);
        display: flex;
        align-items: center;
        width: 100%;
        height: var(--internal-or-asset-tree-header-height);
        border-bottom: 1px solid var(--or-app-color5, ${(0,lit.iz)(core_lib.Id)});
        z-index: 3;
        line-height: var(--internal-or-asset-tree-header-height);
        color: var(--internal-or-asset-tree-header-text-color);
        --or-icon-fill: var(--internal-or-asset-tree-header-text-color);
    }

    #title-container {
        flex: 1;
        flex-direction: row;
        text-transform: capitalize;
        padding-left: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    #title {
        font-weight: 500;
        font-size: 16px;
    }

    .expandableHeader {
        display: flex;
        align-items: center;
        padding: 12px;
        background: none;
        border-top: 1px solid var(--or-app-color5, ${(0,lit.iz)(core_lib.Id)});
        border-right: none;
        border-bottom: none;
        border-left: none;
        border-radius: 0;
        width: 100%;
        cursor: pointer;
        font-weight: 700;
        line-height: 1em;
        color: var(--internal-or-asset-viewer-title-text-color);
        flex: 0 0 auto;
    }
    .expandableHeader > or-icon {
        --or-icon-height: 20px;
        --or-icon-width: 20px;
    }
    .panel-title {
        text-transform: uppercase;
        font-weight: bolder;
        line-height: 1em;
        color: var(--internal-or-asset-viewer-title-text-color);
        /*margin-bottom: 20px;*/
        flex: 0 0 auto;
    }
`;var DashboardSizeOption,e,dashboard_service_awaiter=function(e,t,a,i){return new(a||(a=Promise))((function(r,n){function s(e){try{d(i.next(e))}catch(e){n(e)}}function o(e){try{d(i.throw(e))}catch(e){n(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,o)}d((i=i.apply(e,t||[])).next())}))};(e=DashboardSizeOption||(DashboardSizeOption={}))[e.DESKTOP=0]="DESKTOP",e[e.MOBILE=1]="MOBILE";class DashboardService{static create(e,t=DashboardSizeOption.DESKTOP,a=core_lib.Ay.displayRealm,i=!0){var r;return dashboard_service_awaiter(this,void 0,void 0,(function*(){const n=()=>(Math.random()+1).toString(36).substring(2);return e?(e.id=n(),e.template&&(e.template.id=n(),null===(r=e.template.widgets)||void 0===r||r.forEach((e=>e.id=n())))):e={realm:a,displayName:this.getDefaultDisplayName(t),template:{id:n(),columns:this.getDefaultColumns(t),maxScreenWidth:this.getDefaultMaxScreenWidth(t),refreshInterval:"OFF",screenPresets:this.getDefaultScreenPresets(t)}},i?(yield core_lib.Ay.rest.api.DashboardResource.create(e)).data:e}))}static delete(e,t=core_lib.Ay.displayRealm){return dashboard_service_awaiter(this,void 0,void 0,(function*(){return(yield core_lib.Ay.rest.api.DashboardResource.delete(t,e)).data}))}static getDefaultColumns(e){switch(e){case DashboardSizeOption.MOBILE:return 4;case DashboardSizeOption.DESKTOP:default:return 12}}static getDefaultDisplayName(e){switch(e){case DashboardSizeOption.DESKTOP:return or_translate_lib.MR.t("dashboard.initialName");case DashboardSizeOption.MOBILE:return or_translate_lib.MR.t("dashboard.initialName")+" ("+or_translate_lib.MR.t("dashboard.size.mobile")+")"}}static getDefaultScreenPresets(e){return e===DashboardSizeOption.MOBILE?[{id:"mobile",displayName:"dashboard.size.mobile",breakpoint:640,scalingPreset:"KEEP_LAYOUT"}]:[{id:"mobile",displayName:"dashboard.size.mobile",breakpoint:640,scalingPreset:"WRAP_TO_SINGLE_COLUMN"}]}static getDefaultMaxScreenWidth(e){switch(e){case DashboardSizeOption.DESKTOP:return 4e3;case DashboardSizeOption.MOBILE:return 640}}}var rest_lib=__webpack_require__("../../component/rest/lib/index.js"),or_dashboard_tree_decorate=function(e,t,r,o){var a,s=arguments.length,d=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(d=(s<3?a(d):s>3?a(t,r,d):a(t,r))||d);return s>3&&d&&Object.defineProperty(t,r,d),d},or_dashboard_tree_awaiter=function(e,t,r,o){return new(r||(r=Promise))((function(a,s){function d(e){try{n(o.next(e))}catch(e){s(e)}}function i(e){try{n(o.throw(e))}catch(e){s(e)}}function n(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(d,i)}n((o=o.apply(e,t||[])).next())}))};const treeStyling=lit.AH`
    #header-btns {
        display: flex;
        flex-direction: row;
        padding-right: 5px;
    }

    .node-container {
        align-items: center;
        padding-left: 10px;
    }
`;let OrDashboardTree=class extends lit.WF{constructor(){super(...arguments),this.realm=core_lib.Ay.displayRealm,this.readonly=!0,this.hasChanged=!1,this.showControls=!0}static get styles(){return[style_style,treeStyling,or_asset_tree_lib.iF]}shouldUpdate(e){return(1!==e.size||!e.has("hasChanged")||!this.hasChanged)&&super.shouldUpdate(e)}updated(e){this.dashboards||this.getAllDashboards(),e.has("dashboards")&&null!=e.get("dashboards")&&this.dispatchEvent(new CustomEvent("updated",{detail:this.dashboards})),e.has("selected")&&this.dispatchEvent(new CustomEvent("select",{detail:this.selected}))}getAllDashboards(){return or_dashboard_tree_awaiter(this,void 0,void 0,(function*(){return core_lib.Ay.rest.api.DashboardResource.getAllRealmDashboards(this.realm).then((e=>{this.dashboards=e.data})).catch((e=>{console.error(e),(0,or_mwc_snackbar.td)(void 0,"errorOccurred")}))}))}selectDashboard(e){var t;this.selected="string"==typeof e?null===(t=this.dashboards)||void 0===t?void 0:t.find((t=>t.id===e)):e}createDashboard(e){DashboardService.create(void 0,e,this.realm).then((e=>{this.dashboards?(this.dashboards.push(e),this.requestUpdate("dashboards")):this.dashboards=[e],this.dispatchEvent(new CustomEvent("created",{detail:{d:e}})),this.selectDashboard(e)})).catch((e=>{var t;console.error(e),(0,rest_lib.F0)(e)&&404===(null===(t=e.response)||void 0===t?void 0:t.status)?(0,or_mwc_snackbar.td)(void 0,"noDashboardFound"):(0,or_mwc_snackbar.td)(void 0,"errorOccurred")}))}duplicateDashboard(e){null!==(null==e?void 0:e.id)?this.hasChanged?this.showDiscardChangesModal().then((t=>{t&&this._doDuplicateDashboard(e)})):this._doDuplicateDashboard(e):console.warn("Tried duplicating a NULL dashboard!")}_doDuplicateDashboard(e){const t=JSON.parse(JSON.stringify(e));t.displayName=t.displayName+" copy",DashboardService.create(t,void 0,this.realm).then((e=>{this.dashboards?(this.dashboards.push(e),this.requestUpdate("dashboards")):this.dashboards=[e],this.dispatchEvent(new CustomEvent("created",{detail:{d:e}})),this.selectDashboard(e.id)})).catch((e=>{var t;console.error(e),(0,rest_lib.F0)(e)&&404===(null===(t=e.response)||void 0===t?void 0:t.status)?(0,or_mwc_snackbar.td)(void 0,"noDashboardFound"):(0,or_mwc_snackbar.td)(void 0,"errorOccurred")}))}deleteDashboard(e){null!=e.id&&DashboardService.delete(e.id,this.realm).then((()=>{this.getAllDashboards()})).catch((e=>{console.error(e),(0,or_mwc_snackbar.td)(void 0,"errorOccurred")}))}onDashboardClick(e){var t;e!==(null===(t=this.selected)||void 0===t?void 0:t.id)&&(this.hasChanged?this.showDiscardChangesModal().then((t=>{t&&this.selectDashboard(e)})):this.selectDashboard(e))}showDiscardChangesModal(){return(0,or_mwc_dialog.YB)(or_translate_lib.MR.t("areYouSure"),or_translate_lib.MR.t("confirmContinueDashboardModified"),or_translate_lib.MR.t("discard"))}render(){var e;const t=[];if(this.dashboards&&this.dashboards.length>0&&this.userId){const r=[],o=[];if(null===(e=this.dashboards)||void 0===e||e.forEach((e=>{e.ownerId===this.userId?r.push(e):o.push(e)})),r.length>0){const e=[];r.sort(((e,t)=>e.displayName?e.displayName.localeCompare(t.displayName):0)).forEach((t=>{e.push({icon:"view-dashboard",text:t.displayName,value:t.id})})),t.push(e)}if(o.length>0){const e=[];o.sort(((e,t)=>e.displayName?e.displayName.localeCompare(t.displayName):0)).forEach((t=>{e.push({icon:"view-dashboard",text:t.displayName,value:t.id})})),t.push(e)}}return lit.qy`
            <div id="menu-header">
                <div id="title-container">
                    <span id="title"><or-translate value="insights"></or-translate></span>
                </div>
                
                <!-- Controls header -->
                ${this.showControls?lit.qy`
                    <div id="header-btns">
                        ${null!=this.selected?lit.qy`
                            <or-mwc-input type="${or_mwc_input.NZ.BUTTON}" icon="close" @or-mwc-input-changed="${()=>{this.selectDashboard(void 0)}}"></or-mwc-input>
                            ${this.readonly?void 0:lit.qy`
                                <or-mwc-input type="${or_mwc_input.NZ.BUTTON}" class="hideMobile" icon="content-copy"
                                              @or-mwc-input-changed="${()=>{this.duplicateDashboard(this.selected)}}"
                                ></or-mwc-input>
                                <or-mwc-input type="${or_mwc_input.NZ.BUTTON}" icon="delete" @or-mwc-input-changed="${()=>{null!=this.selected&&(0,or_mwc_dialog.YB)(or_translate_lib.MR.t("areYouSure"),or_translate_lib.MR.t("dashboard.deletePermanentWarning",{dashboard:this.selected.displayName}),or_translate_lib.MR.t("delete")).then((e=>{e&&this.deleteDashboard(this.selected)}))}}"></or-mwc-input>
                            `}
                        `:void 0}
                        ${this.readonly?void 0:lit.qy`
                            <or-mwc-input type="${or_mwc_input.NZ.BUTTON}" class="hideMobile" icon="plus"
                                          @or-mwc-input-changed="${()=>{this.createDashboard(DashboardSizeOption.DESKTOP)}}"
                            ></or-mwc-input>
                        `}
                    </div>
                `:void 0}
            </div>
            
            <!-- List of dashboards -->
            <div id="content">
                <div style="padding-top: 8px;">
                    ${t.map(((e,t)=>null!=e&&e.length>0?lit.qy`
                            <div style="padding: 8px 0;">
                                <span style="font-weight: 500; padding-left: 14px; color: #000000;">
                                    <or-translate value="${0===t?"dashboard.myDashboards":"dashboard.createdByOthers"}"></or-translate>
                                 </span>
                                <div id="list-container" style="overflow: hidden;">
                                    <ol id="list">
                                        ${e.map((e=>{var t;return lit.qy`
                                                <li ?data-selected="${e.value===(null===(t=this.selected)||void 0===t?void 0:t.id)}" @click="${t=>{this.onDashboardClick(e.value)}}">
                                                    <div class="node-container">
                                                        <span class="node-name">${e.text} </span>
                                                    </div>
                                                </li>
                                            `}))}
                                    </ol>
                                </div>
                            </div>
                        `:void 0))}
                </div>
            </div>
        `}};or_dashboard_tree_decorate([(0,decorators.MZ)()],OrDashboardTree.prototype,"dashboards",void 0),or_dashboard_tree_decorate([(0,decorators.MZ)()],OrDashboardTree.prototype,"selected",void 0),or_dashboard_tree_decorate([(0,decorators.MZ)()],OrDashboardTree.prototype,"realm",void 0),or_dashboard_tree_decorate([(0,decorators.MZ)()],OrDashboardTree.prototype,"userId",void 0),or_dashboard_tree_decorate([(0,decorators.MZ)()],OrDashboardTree.prototype,"readonly",void 0),or_dashboard_tree_decorate([(0,decorators.MZ)()],OrDashboardTree.prototype,"hasChanged",void 0),or_dashboard_tree_decorate([(0,decorators.MZ)()],OrDashboardTree.prototype,"showControls",void 0),OrDashboardTree=or_dashboard_tree_decorate([(0,decorators.EM)("or-dashboard-tree")],OrDashboardTree);var gridstack=__webpack_require__("../../../node_modules/gridstack/dist/gridstack.js"),or_dashboard_browser_decorate=function(e,r,t,i){var d,s=arguments.length,o=s<3?r:null===i?i=Object.getOwnPropertyDescriptor(r,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,r,t,i);else for(var a=e.length-1;a>=0;a--)(d=e[a])&&(o=(s<3?d(o):s>3?d(r,t,o):d(r,t))||o);return s>3&&o&&Object.defineProperty(r,t,o),o};const gridcss=__webpack_require__("../../../node_modules/gridstack/dist/gridstack.min.css"),extracss=__webpack_require__("../../../node_modules/gridstack/dist/gridstack-extra.css"),browserStyling=lit.AH`
    #sidebar {
        display: grid;
        padding: 16px;
    }
    #sidebarElement, #sidebarBgElement {
        grid-column: 1;
        grid-row: 1;
    }
    .grid-stack-item {
        cursor: grab;
    }
    .sidebarItem {
        height: 100%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border: 1px solid #E0E0E0;
        border-radius: 8px;
        box-sizing: border-box;
        flex-direction: column;
        font-size: 14px;
        --or-icon-width: 36px;
    }
    .itemText {
        margin-top: 10px;
    }
`;let OrDashboardBrowser=class extends lit.WF{static get styles(){return[(0,lit.iz)(gridcss),(0,lit.iz)(extracss),browserStyling,style_style]}constructor(){super(),this.updateComplete.then((()=>{this.renderGrid()}))}renderGrid(){var e,r;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("sidebarElement"),i=new Array([0,0],[2,0],[0,2],[2,2],[0,4],[2,4],[0,6],[2,6],[0,8],[2,8]),d=Array.from(widgetTypes).sort(((e,r)=>e[1].displayName.localeCompare(r[1].displayName))).map(((e,r)=>({x:i[r][0],y:i[r][1],w:2,h:2,widgetTypeId:e[0],locked:!0,content:`<div class="sidebarItem"><or-icon icon="${e[1].displayIcon}"></or-icon><span class="itemText">${e[1].displayName}</span>`})));let s=0;d.forEach((e=>{e.y+e.h>s&&(s=e.y+e.h)}));let o=0;o=d.length%2!=0?d.length+1:d.length,void 0!==this.sidebarGrid?(this.sidebarGrid.removeAll(),this.sidebarGrid.load(d)):(this.sidebarGrid=gridstack.GridStack.init({acceptWidgets:!1,column:4,cellHeight:67,disableOneColumnMode:!0,disableResize:!0,draggable:{appendTo:"parent"},margin:8,row:o},t),this.sidebarGrid.load(d),this.sidebarGrid.on("removed",((e,r)=>{var t;if(1===r.length){const e=d.filter((e=>e.content===r[0].content));null===(t=this.sidebarGrid)||void 0===t||t.load([e[0]])}})),this.sidebarGrid.on("change",((e,r)=>{this.renderGrid()})));const a=null===(r=this.shadowRoot)||void 0===r?void 0:r.getElementById("sidebarBgElement");null!=this.backgroundGrid?(this.backgroundGrid.removeAll(),this.backgroundGrid.load(d)):(this.backgroundGrid=gridstack.GridStack.init({staticGrid:!0,column:4,cellHeight:67,disableOneColumnMode:!0,margin:8},a),this.backgroundGrid.load(d))}render(){return lit.qy`
            <div id="sidebar">
                <div id="sidebarElement" class="grid-stack" style="width: 100%; z-index: 3;"></div>
                <div id="sidebarBgElement" class="grid-stack" style="width: 100%; z-index: 2"></div>
            </div>
        `}};or_dashboard_browser_decorate([(0,decorators.wk)()],OrDashboardBrowser.prototype,"sidebarGrid",void 0),or_dashboard_browser_decorate([(0,decorators.wk)()],OrDashboardBrowser.prototype,"backgroundGrid",void 0),OrDashboardBrowser=or_dashboard_browser_decorate([(0,decorators.EM)("or-dashboard-browser")],OrDashboardBrowser);var widget_service_awaiter=function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function a(t){try{d(n.next(t))}catch(t){r(t)}}function c(t){try{d(n.throw(t))}catch(t){r(t)}}function d(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,c)}d((n=n.apply(t,e||[])).next())}))};class WidgetService{static getManifest(t){const e=widgetTypes.get(t);if(!e)throw new Error("Widget manifest could not be found during widget creation.");return e}static placeNew(t,e,i){return widget_service_awaiter(this,void 0,void 0,(function*(){const n=(Math.random()+1).toString(36).substring(2),o=this.getManifest(t);return{id:n,displayName:o.displayName,gridItem:{id:n,x:e,y:i,w:2,h:2,minW:o.minColumnWidth,minH:o.minColumnHeight,minPixelW:o.minPixelWidth,minPixelH:o.minPixelHeight,noResize:!1,noMove:!1,locked:!1},widgetConfig:o.getDefaultConfig(),widgetTypeId:t}}))}static correctToConfigSpec(t,e){return core_lib.J0.mergeObjects(t.getDefaultConfig(),e,!1)}}var or_dashboard_widgetcontainer_decorate=function(e,t,i,r){var o,d=arguments.length,s=d<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(d<3?o(s):d>3?o(t,i,s):o(t,i))||s);return d>3&&s&&Object.defineProperty(t,i,s),s};let OrDashboardWidgetContainer=class extends lit.WF{constructor(){super(...arguments),this.loading=!1}static get styles(){return[style_style]}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.resizeObserver)||void 0===e||e.disconnect()}shouldUpdate(e){var t,i,r;const o=e;if(this.widget){const e=WidgetService.getManifest(this.widget.widgetTypeId);e&&(this.widget.widgetConfig=WidgetService.correctToConfigSpec(e,this.widget.widgetConfig))}if(e.has("widget")&&this.widget){const d=e.get("widget"),s=(null==d?void 0:d.id)!==(null===(t=this.widget)||void 0===t?void 0:t.id),n=(null==d?void 0:d.displayName)!==(null===(i=this.widget)||void 0===i?void 0:i.displayName),a=JSON.stringify(null==d?void 0:d.widgetConfig)!==JSON.stringify(null===(r=this.widget)||void 0===r?void 0:r.widgetConfig);s||n||a||o.delete("widget")}return 0!==o.size&&super.shouldUpdate(e)}willUpdate(e){super.willUpdate(e),!this.manifest&&this.widget&&(this.manifest=WidgetService.getManifest(this.widget.widgetTypeId)),e.has("widget")&&this.widget&&this.initializeWidgetElem(this.manifest,this.widget.widgetConfig)}firstUpdated(e){var t;if(super.firstUpdated(e),this.orWidget){const e=this.containerElem;e?(null===(t=this.resizeObserver)||void 0===t||t.disconnect(),this.resizeObserver=new ResizeObserver((0,lodash.throttle)((()=>{const t=this.manifest.minPixelWidth||0,i=this.manifest.minPixelHeight||0,r=t<e.clientWidth&&i<e.clientHeight;this.error=r?void 0:"dashboard.widgetTooSmall"}),200)),this.resizeObserver.observe(e)):console.error("gridItemElement could not be found!")}}initializeWidgetElem(e,t){console.debug(`Initialising ${e.displayName} widget..`),this.orWidget&&this.orWidget.remove(),this.orWidget=e.getContentHtml(t),this.orWidget.getDisplayName=()=>this.widget.displayName,this.orWidget.getEditMode=()=>this.editMode,this.orWidget.getWidgetLocation=()=>{var e,t,i,r;return{x:null===(e=this.widget.gridItem)||void 0===e?void 0:e.x,y:null===(t=this.widget.gridItem)||void 0===t?void 0:t.y,w:null===(i=this.widget.gridItem)||void 0===i?void 0:i.w,h:null===(r=this.widget.gridItem)||void 0===r?void 0:r.h}}}render(){const e=!!this.widget.displayName;return lit.qy`
            <div id="widget-container" style="height: calc(100% - 16px); padding: 8px 16px 8px 16px; display: flex; flex-direction: column;">

                <!-- Container title -->
                ${(0,when.z)(e,(()=>{var e;return lit.qy`
                    <div style="flex: 0 0 36px; display: flex; justify-content: space-between; align-items: center;">
                        <span class="panel-title" style="width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            ${null===(e=this.widget.displayName)||void 0===e?void 0:e.toUpperCase()}
                        </span>
                    </div>
                `}))}

                <!-- Content -->
                <div style="flex: 1; max-height: ${e?"calc(100% - 36px)":"100%"};">
                    ${(0,when.z)(!this.error&&!this.loading,(()=>lit.qy`
                        ${this.orWidget}
                    `),(()=>lit.qy`<or-translate value="${this.error?this.error:"loading"}"></or-translate>`))}
                </div>
            </div>
        `}refreshContent(e){var t;null===(t=this.orWidget)||void 0===t||t.refreshContent(e)}};OrDashboardWidgetContainer.tagName="or-dashboard-widget-container",or_dashboard_widgetcontainer_decorate([(0,decorators.MZ)()],OrDashboardWidgetContainer.prototype,"widget",void 0),or_dashboard_widgetcontainer_decorate([(0,decorators.MZ)()],OrDashboardWidgetContainer.prototype,"editMode",void 0),or_dashboard_widgetcontainer_decorate([(0,decorators.MZ)()],OrDashboardWidgetContainer.prototype,"loading",void 0),or_dashboard_widgetcontainer_decorate([(0,decorators.wk)()],OrDashboardWidgetContainer.prototype,"orWidget",void 0),or_dashboard_widgetcontainer_decorate([(0,decorators.wk)()],OrDashboardWidgetContainer.prototype,"error",void 0),or_dashboard_widgetcontainer_decorate([(0,decorators.P)("#widget-container")],OrDashboardWidgetContainer.prototype,"containerElem",void 0),OrDashboardWidgetContainer=or_dashboard_widgetcontainer_decorate([(0,decorators.EM)("or-dashboard-widget-container")],OrDashboardWidgetContainer);__webpack_require__("../../component/or-components/lib/or-loading-indicator.js");var repeat=__webpack_require__("../../../node_modules/lit/directives/repeat.js"),cache=__webpack_require__("../../../node_modules/lit/directives/cache.js"),guard=__webpack_require__("../../../node_modules/lit/directives/guard.js");class OrDashboardEngine extends gridstack.GridStackEngine{moveNode(i,e){return e.skip&&e.skip.id==i.id&&(e.x=e.skip.x,e.y=e.skip.y,e.w=e.skip.w,e.h=e.skip.h),super.moveNode(i,e)}}var or_dashboard_preview_decorate=function(e,i,t,r){var s,d=arguments.length,o=d<3?i:null===r?r=Object.getOwnPropertyDescriptor(i,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,i,t,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(d<3?s(o):d>3?s(i,t,o):s(i,t))||o);return d>3&&o&&Object.defineProperty(i,t,o),o},or_dashboard_preview_awaiter=function(e,i,t,r){return new(t||(t=Promise))((function(s,d){function o(e){try{n(r.next(e))}catch(e){d(e)}}function a(e){try{n(r.throw(e))}catch(e){d(e)}}function n(e){var i;e.done?s(e.value):(i=e.value,i instanceof t?i:new t((function(e){e(i)}))).then(o,a)}n((r=r.apply(e,i||[])).next())}))};const or_dashboard_preview_gridcss=__webpack_require__("../../../node_modules/gridstack/dist/gridstack.min.css"),or_dashboard_preview_extracss=__webpack_require__("../../../node_modules/gridstack/dist/gridstack-extra.css"),editorStyling=lit.AH`
    
    #loadingContainer {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    #view-options {
        padding: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /* Margins on view options */
    #fit-btn { margin-right: 10px; }
    #view-preset-select { margin-left: 20px; }
    #width-input { margin-left: 20px; }
    #height-input { margin-left: 10px; }
    #rotate-btn { margin-left: 10px; }
    
    .maingridContainer {
        position: absolute;
        padding-bottom: 32px;
    }
    .maingridContainer__fullscreen {
        width: 100%;
    }
    
    .maingrid {
        border: 3px solid #909090;
        background: #FFFFFF;
        border-radius: 8px;
        overflow-x: hidden;
        overflow-y: scroll;
        padding: 4px;
        z-index: 0;
    }
    .maingrid__fullscreen {
        border: none;
        background: transparent;
        border-radius: 0;
        overflow-x: hidden;
        overflow-y: scroll;
        height: 100% !important; /* To override .maingrid */
        width: 100% !important; /* To override .maingrid */
        padding: 0;
        /*pointer-events: none;*/
        position: relative;
        z-index: 0;
    }
    .maingrid__disabled {
        pointer-events: none;
        opacity: 40%;
    }
    .grid-stack-item-content {
        background: white;
        box-sizing: border-box;
        border: 1px solid var(--or-app-color5, ${(0,lit.iz)(core_lib.Id)});
        border-radius: 4px;
    }
    .grid-stack > .grid-stack-item > .grid-stack-item-content {
        overflow: visible;
    }
    .grid-stack-item-content__active {
        border: 2px solid var(--or-app-color4, ${(0,lit.iz)(core_lib.BB)});
        margin: -1px !important; /* to compromise with the extra pixel of border. */
    }
    
    /* Grid lines on the background of the grid */
    .grid-element {
        background-image:
                linear-gradient(90deg, #E0E0E0, transparent 1px),
                linear-gradient(90deg, transparent calc(100% - 1px), #E0E0E0),
                linear-gradient(#E0E0E0, transparent 1px),
                linear-gradient(transparent calc(100% - 1px), #E0E0E0 100%);
    }
`;let OrDashboardPreview=class extends lit.WF{set template(e){const i=this._template;if(null!=i){const t={changedKeys:Object.keys(e).filter((t=>JSON.stringify(e[t])!==JSON.stringify(i[t]))),oldValue:i,newValue:e};this._template=JSON.parse(JSON.stringify(e)),this.latestChanges=t,this.requestUpdate("template",i)}else null!=e&&(this._template=e,this.setupGrid(!1,!1))}get template(){return this._template}constructor(){super(),this.editMode=!1,this.readonly=!0,this.previewZoom=1,this.fullscreen=!0,this.rerenderActive=!1,this.isLoading=!1,this.cachedGridstackCSS=new Map,this.resizeObserverCallback=e=>{var i;(null===(i=this.previousObserverEntry)||void 0===i?void 0:i.contentRect.width)+"px"!=e[0].contentRect.width+"px"&&this._onGridResize(),this.previousObserverEntry=e[0]},this.realm||(this.realm=core_lib.Ay.displayRealm),this.availablePreviewSizes||(this.availablePreviewSizes=[{displayName:"4k Television",width:3840,height:2160},{displayName:"Desktop",width:1920,height:1080},{displayName:"Small desktop",width:1280,height:720},{displayName:"Phone",width:360,height:800},{displayName:"Custom"}]),this.previewSize||(this.previewSize=this.availablePreviewSizes[3]),gridstack.GridStack.registerEngine(OrDashboardEngine)}static get styles(){return[(0,lit.iz)(or_dashboard_preview_gridcss),(0,lit.iz)(or_dashboard_preview_extracss),editorStyling,style_style]}shouldUpdate(e){var i,t,r;const s=e;return e.has("latestChanges")&&0==(null===(i=this.latestChanges)||void 0===i?void 0:i.changedKeys.length)&&JSON.stringify(null===(t=e.get("latestChanges"))||void 0===t?void 0:t.oldValue)==JSON.stringify(null===(r=e.get("latestChanges"))||void 0===r?void 0:r.newValue)&&s.delete("latestChanges"),this.fullscreen&&e.has("previewWidth")&&s.delete("previewWidth"),this.fullscreen&&e.has("previewHeight")&&s.delete("previewHeight"),0!==s.size&&super.shouldUpdate(e)}updated(e){var i,t,r,s,d,o;if(super.updated(e),null==this.realm&&(this.realm=core_lib.Ay.displayRealm),!this.template&&this.dashboardId?core_lib.Ay.rest.api.DashboardResource.get(this.realm,this.dashboardId).then((e=>{this.template=e.data.template})).catch((e=>{console.error(e),(0,or_mwc_snackbar.td)(void 0,"errorOccurred")})):null==this.template&&null==this.dashboardId&&console.warn("Neither the template nor dashboardId attributes have been specified!"),e.has("latestChanges")&&this.latestChanges&&(this.processTemplateChanges(this.latestChanges),this.latestChanges=void 0),e.has("selectedWidget"))if(this.selectedWidget){if(null!=e.get("selectedWidget")&&this.dispatchEvent(new CustomEvent("deselected",{detail:e.get("selectedWidget")})),null!=(null===(i=this.grid)||void 0===i?void 0:i.el)){const e=null===(t=this.grid)||void 0===t?void 0:t.getGridItems().find((e=>{var i,t,r;return(null===(i=e.gridstackNode)||void 0===i?void 0:i.id)==(null===(r=null===(t=this.selectedWidget)||void 0===t?void 0:t.gridItem)||void 0===r?void 0:r.id)}));null!=e&&this.selectGridItem(e),this.dispatchEvent(new CustomEvent("selected",{detail:this.selectedWidget}))}}else null!=(null===(r=this.grid)||void 0===r?void 0:r.el)&&null!=(null===(s=this.grid)||void 0===s?void 0:s.getGridItems())&&this.deselectGridItems(this.grid.getGridItems()),this.dispatchEvent(new CustomEvent("deselected",{detail:e.get("selectedWidget")}));e.has("editMode")&&null!=e.get("editMode")&&this.setupGrid(!0,!0),(e.has("previewWidth")||e.has("previewHeight"))&&(null===(d=this.template)||void 0===d?void 0:d.screenPresets)&&(this.previewSize=null===(o=this.availablePreviewSizes)||void 0===o?void 0:o.find((e=>e.width+"px"==this.previewWidth&&e.height+"px"==this.previewHeight))),e.has("previewSize")&&this.previewSize&&(this.previewWidth=this.previewSize.width+"px",this.previewHeight=this.previewSize.height+"px"),e.has("rerenderActive")&&this.rerenderActive&&(this.rerenderActive=!1)}setupGrid(e,i=!1){var t,r,s,d,o,a,n,l,h,c,p,v;return or_dashboard_preview_awaiter(this,void 0,void 0,(function*(){this.isLoading=!0,yield this.updateComplete;let g=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("gridElement");if(null!=g){e&&null!=this.grid&&(this.grid.destroy(!1),i&&(this.rerenderActive=!0,yield this.updateComplete,yield this.waitUntil((e=>!this.rerenderActive)),g=null===(r=this.shadowRoot)||void 0===r?void 0:r.getElementById("gridElement"),this.grid=void 0));const t=this.fullscreen?this.clientWidth:+(null===(s=this.previewWidth)||void 0===s?void 0:s.replace(/\D/g,"")),m=function getActivePreset(e,t){let i;return sortScreenPresets(t,!0).forEach((t=>{null!=t.breakpoint&&e<=t.breakpoint&&(i=t)})),i}(t,this.template.screenPresets);if((null==m?void 0:m.scalingPreset)!=(null===(d=this.activePreset)||void 0===d?void 0:d.scalingPreset)&&(e&&i||(e||null===(o=this.grid)||void 0===o||o.destroy(!1),this.rerenderActive=!0,yield this.updateComplete,yield this.waitUntil((e=>!this.rerenderActive)),g=null===(a=this.shadowRoot)||void 0===a?void 0:a.getElementById("gridElement"),this.grid=void 0)),this.activePreset=m,null==this.grid){const e=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelector(".maingrid");this.setupResizeObserver(e)}g.style.maxWidth=this.template.maxScreenWidth+"px",this.grid=gridstack.GridStack.init({acceptWidgets:this.editMode,animate:!0,cellHeight:"WRAP_TO_SINGLE_COLUMN"===(null===(l=this.activePreset)||void 0===l?void 0:l.scalingPreset)?t/((null===(h=this.template)||void 0===h?void 0:h.columns)?this.template.columns/4:2):"initial",column:null===(c=this.template)||void 0===c?void 0:c.columns,disableOneColumnMode:"WRAP_TO_SINGLE_COLUMN"!==(null===(p=this.activePreset)||void 0===p?void 0:p.scalingPreset),oneColumnModeDomSort:!0,draggable:{appendTo:"parent"},float:!0,margin:5,resizable:{handles:"all"},staticGrid:"WRAP_TO_SINGLE_COLUMN"===(null===(v=this.activePreset)||void 0===v?void 0:v.scalingPreset)||!this.editMode,styleInHead:!1},g),g.style.backgroundSize=this.grid.cellWidth()+"px "+this.grid.getCellHeight()+"px",g.style.height="100%",g.style.minHeight="100%",this.grid.on("dropped",((e,i,t)=>this.onWidgetDrop(e,i,t))),this.grid.on("change",((e,i)=>{null!=this.template&&null!=this.template.widgets&&(i.forEach((e=>{var i,t;const r=null===(t=null===(i=this.template)||void 0===i?void 0:i.widgets)||void 0===t?void 0:t.find((i=>{var t;return(null===(t=i.gridItem)||void 0===t?void 0:t.id)==e.id}));r.gridItem.x=e.x,r.gridItem.y=e.y,r.gridItem.w=e.w,r.gridItem.h=e.h})),this.dispatchEvent(new CustomEvent("changed",{detail:{template:this.template}})))})),this.grid.on("resizestart",(e=>{this.latestDragWidgetStart=new Date})),this.grid.on("resizestop",(e=>{setTimeout((()=>{this.latestDragWidgetStart=void 0}),200)}))}this.isLoading=!1}))}refreshPreview(){this.setupGrid(!0,!0)}refreshWidgets(){var e;null===(e=this.grid)||void 0===e||e.getGridItems().forEach((e=>{const i=e.querySelector(OrDashboardWidgetContainer.tagName);i&&i.refreshContent(!1)}))}selectGridItem(e){null!=this.grid&&(this.deselectGridItems(this.grid.getGridItems()),e.querySelectorAll(".grid-stack-item-content").forEach((e=>{e.classList.add("grid-stack-item-content__active")})))}deselectGridItem(e){e.querySelectorAll(".grid-stack-item-content").forEach((e=>{e.classList.remove("grid-stack-item-content__active")}))}deselectGridItems(e){e.forEach((e=>{this.deselectGridItem(e)}))}onGridItemClick(e){var i,t,r,s,d;this.latestDragWidgetStart||(null===(i=this.grid)||void 0===i?void 0:i.opts.staticGrid)||(e?(null===(r=null===(t=this.selectedWidget)||void 0===t?void 0:t.gridItem)||void 0===r?void 0:r.id)!=e.id&&(this.selectedWidget=null===(d=null===(s=this.template)||void 0===s?void 0:s.widgets)||void 0===d?void 0:d.find((i=>{var t;return(null===(t=i.gridItem)||void 0===t?void 0:t.id)==e.id}))):this.selectedWidget=void 0)}onFitToScreenClick(){var e;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#container");if(i){const e=+(.95*i.clientWidth/+this.previewWidth.replace("px","")).toFixed(2);this.previewZoom=e>1?1:e}}isPreviewVisible(){var e;return!this.isLoading&&"BLOCK_DEVICE"!=(null===(e=this.activePreset)||void 0===e?void 0:e.scalingPreset)}render(){var e,i,t,r,s,d,o,a;try{(null===(e=this.grid)||void 0===e?void 0:e.el)&&(null===(i=this.grid)||void 0===i?void 0:i.getGridItems())&&(null===(t=this.grid)||void 0===t||t.getGridItems().forEach((e=>{var i,t,r;null==(null===(t=null===(i=this.template)||void 0===i?void 0:i.widgets)||void 0===t?void 0:t.find((i=>i.id==e.id)))&&(null===(r=this.grid)||void 0===r||r.removeWidget(e))})))}catch(e){console.error(e)}const n="Custom";let l=null===(s=null===(r=this.template)||void 0===r?void 0:r.screenPresets)||void 0===s?void 0:s.map((e=>e.displayName));return null==l||l.push(n),lit.qy`
            <div id="buildingArea" style="display: flex; flex-direction: column; height: 100%; position: relative;" @click="${e=>{"buildingArea"===e.composedPath()[1].id&&this.onGridItemClick(void 0)}}">
                ${this.editMode&&!this.fullscreen?lit.qy`
                    <div id="view-options">
                        <or-mwc-input id="fit-btn" type="${or_mwc_input.NZ.BUTTON}" icon="fit-to-screen"
                                      @or-mwc-input-changed="${()=>this.onFitToScreenClick()}">
                        </or-mwc-input>
                        <or-mwc-input id="zoom-input" type="${or_mwc_input.NZ.NUMBER}" outlined label="${or_translate_lib.MR.t("dashboard.zoomPercent")}" min="25" .value="${100*this.previewZoom}" style="width: 90px"
                                      @or-mwc-input-changed="${(0,lodash.debounce)((e=>{this.previewZoom=e.detail.value/100}),50)}"
                        ></or-mwc-input>
                        <or-mwc-input id="view-preset-select" type="${or_mwc_input.NZ.SELECT}" outlined label="${or_translate_lib.MR.t("dashboard.presetSize")}" style="min-width: 220px;"
                                      .value="${null==this.previewSize?n:this.previewSize.displayName}" .options="${null===(d=this.availablePreviewSizes)||void 0===d?void 0:d.map((e=>e.displayName))}"
                                      @or-mwc-input-changed="${e=>{var i;this.previewSize=null===(i=this.availablePreviewSizes)||void 0===i?void 0:i.find((i=>i.displayName==e.detail.value))}}"
                        ></or-mwc-input>
                        <or-mwc-input id="width-input" type="${or_mwc_input.NZ.NUMBER}" outlined label="${or_translate_lib.MR.t("width")}" min="100" .value="${null===(o=this.previewWidth)||void 0===o?void 0:o.replace("px","")}" style="width: 90px"
                                      @or-mwc-input-changed="${(0,lodash.debounce)((e=>{this.previewWidth=e.detail.value+"px"}),550)}"
                        ></or-mwc-input>
                        <or-mwc-input id="height-input" type="${or_mwc_input.NZ.NUMBER}" outlined label="${or_translate_lib.MR.t("height")}" min="100" .value="${null===(a=this.previewHeight)||void 0===a?void 0:a.replace("px","")}" style="width: 90px;"
                                      @or-mwc-input-changed="${e=>{this.previewHeight=e.detail.value+"px"}}"
                        ></or-mwc-input>
                        <or-mwc-input id="rotate-btn" type="${or_mwc_input.NZ.BUTTON}" icon="screen-rotation"
                                      @or-mwc-input-changed="${()=>{const e=this.previewHeight,i=this.previewWidth;this.previewWidth=e,this.previewHeight=i}}">
                        </or-mwc-input>
                    </div>
                `:void 0}
                ${this.rerenderActive?lit.qy`
                    <div id="container" style="justify-content: center; align-items: center;">
                        <span><or-translate value="dashboard.renderingGrid"></or-translate></span>
                    </div>
                `:lit.qy`
                    <div id="container" style="justify-content: center; position: relative;">
                        ${(0,when.z)(this.isLoading,(()=>lit.qy`
                            <div style="position: absolute; z-index: 3; height: 100%; display: flex; align-items: center;">
                                <or-loading-indicator></or-loading-indicator>
                            </div>
                        `),(()=>{var e;return lit.qy`
                            ${"BLOCK_DEVICE"==(null===(e=this.activePreset)||void 0===e?void 0:e.scalingPreset)?lit.qy`
                                <div style="position: absolute; z-index: 3; height: 100%; display: flex; align-items: center;">
                                    <span><or-translate value="dashboard.deviceNotSupported"></or-translate></span>
                                </div>
                            `:void 0}
                        `}))}
                        <!-- The grid itself. Will also show during isLoading, but will be invisible through CSS -->
                        <div class="${this.fullscreen?"maingridContainer__fullscreen":"maingridContainer"}" style="${this.isLoading?"visibility: hidden;":""}">
                            <div class="maingrid ${this.fullscreen?"maingrid__fullscreen":void 0}"
                                 style="width: ${this.previewWidth}; height: ${this.previewHeight}; visibility: ${this.isPreviewVisible()?"visible":"hidden"}; zoom: ${this.editMode&&!this.fullscreen?this.previewZoom:"normal"}; ${this.editMode&&!this.fullscreen?"-moz-transform: scale("+this.previewZoom+")":void 0}; transform-origin: top;"
                                 @click="${e=>{"gridElement"==e.composedPath()[0].id&&this.onGridItemClick(void 0)}}">
                                ${(0,guard.a)([this.editMode,this.template],(()=>{var e;return lit.qy`
                                    <!-- Gridstack element on which the Grid will be rendered -->
                                    <div id="gridElement" class="grid-stack ${this.editMode?"grid-element":void 0}" style="margin: auto;">
                                        ${(null===(e=this.template)||void 0===e?void 0:e.widgets)?(0,repeat.u)(this.template.widgets,(e=>e.id),(e=>{var i,t,r,s,d,o,a;return lit.qy`
                                                    <div class="grid-stack-item" id="${e.id}" gs-id="${null===(i=e.gridItem)||void 0===i?void 0:i.id}" gs-x="${null===(t=e.gridItem)||void 0===t?void 0:t.x}" gs-y="${null===(r=e.gridItem)||void 0===r?void 0:r.y}"
                                                         gs-w="${null===(s=e.gridItem)||void 0===s?void 0:s.w}" gs-h="${null===(d=e.gridItem)||void 0===d?void 0:d.h}" gs-min-w="${null===(o=e.gridItem)||void 0===o?void 0:o.minW}" gs-min-h="${null===(a=e.gridItem)||void 0===a?void 0:a.minH}"
                                                         @click="${()=>{this.onGridItemClick(e.gridItem)}}">
                                                        <div class="grid-stack-item-content" style="display: flex;">
                                                            <or-dashboard-widget-container .widget="${e}" .editMode="${this.editMode}" style="width: 100%; height: auto; border-radius: 4px;"></or-dashboard-widget-container>
                                                        </div>
                                                    </div>
                                                `})):void 0}
                                    </div>
                                `}))}
                            </div>
                        </div>
                    </div>
                `}
            </div>
            <style>
                ${(0,cache.P)((0,when.z)(this.isExtraLargeGrid(),(()=>this.applyCustomGridstackGridCSS(this.getGridstackColumns(this.grid)?this.getGridstackColumns(this.grid):this.template.columns))))}
            </style>
        `}getGridstackColumns(e){try{return null==e?void 0:e.getColumn()}catch(e){return}}isExtraLargeGrid(){var e;return!!this.grid&&(this.getGridstackColumns(this.grid)&&this.getGridstackColumns(this.grid)>12||!!((null===(e=this.template)||void 0===e?void 0:e.columns)&&this.template.columns>12))}applyCustomGridstackGridCSS(e){if(this.cachedGridstackCSS.has(e))return lit.qy`${this.cachedGridstackCSS.get(e).map((e=>e))}`;{const i=[];for(let t=0;t<e+1;t++)i.push(lit.qy`
                    <style>
                        .grid-stack > .grid-stack-item[gs-w="${t}"]:not(.ui-draggable-dragging):not(.ui-resizable-resizing) { width: ${100-100/e*(e-t)}% !important; }
                        .grid-stack > .grid-stack-item[gs-x="${t}"]:not(.ui-draggable-dragging):not(.ui-resizable-resizing) { left: ${100-100/e*(e-t)}% !important; }                    
                    </style>
                `);return this.cachedGridstackCSS.set(e,i),lit.qy`${i.map((e=>e))}`}}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.resizeObserver)||void 0===e||e.disconnect()}setupResizeObserver(e){var i;return null===(i=this.resizeObserver)||void 0===i||i.disconnect(),this.fullscreen?this.resizeObserver=new ResizeObserver((0,lodash.debounce)(this.resizeObserverCallback,200)):this.resizeObserver=new ResizeObserver(this.resizeObserverCallback),this.resizeObserver.observe(e),this.resizeObserver}_onGridResize(){this.setupGrid(!0,!1)}processTemplateChanges(e){var i,t,r;if(1==e.changedKeys.length&&e.changedKeys.includes("columns")&&this.grid){this.grid.column(e.newValue.columns);let r=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector(".maingrid"),s=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("gridElement");s.style.backgroundSize=this.grid.cellWidth()+"px "+this.grid.getCellHeight()+"px",s.style.height=r.scrollHeight+"px",this.setupGrid(!0,!1)}else e.changedKeys.length>1?this.setupGrid(!0,!0):e.changedKeys.includes("widgets")?null!=(null===(r=this.grid)||void 0===r?void 0:r.el)&&this.grid.getGridItems().forEach((e=>{var i;e.classList.contains("ui-draggable")||null===(i=this.grid)||void 0===i||i.makeWidget(e)})):e.changedKeys.includes("screenPresets")&&this.setupGrid(!0,!0)}waitUntil(e){const i=t=>{e()?t():setTimeout((e=>i(t)),400)};return new Promise(i)}onWidgetDrop(e,i,t){this.grid&&t&&(this.grid.removeWidget(t.el,!0,!1),WidgetService.placeNew(t.widgetTypeId,t.x,t.y).then((e=>{this.dispatchEvent(new CustomEvent("created",{detail:e}))})))}};or_dashboard_preview_decorate([(0,decorators.MZ)({hasChanged:(e,i)=>JSON.stringify(e)!=JSON.stringify(i)})],OrDashboardPreview.prototype,"template",null),or_dashboard_preview_decorate([(0,decorators.MZ)()],OrDashboardPreview.prototype,"dashboardId",void 0),or_dashboard_preview_decorate([(0,decorators.MZ)()],OrDashboardPreview.prototype,"realm",void 0),or_dashboard_preview_decorate([(0,decorators.MZ)({type:Object})],OrDashboardPreview.prototype,"selectedWidget",void 0),or_dashboard_preview_decorate([(0,decorators.MZ)()],OrDashboardPreview.prototype,"editMode",void 0),or_dashboard_preview_decorate([(0,decorators.MZ)()],OrDashboardPreview.prototype,"readonly",void 0),or_dashboard_preview_decorate([(0,decorators.MZ)()],OrDashboardPreview.prototype,"previewWidth",void 0),or_dashboard_preview_decorate([(0,decorators.MZ)()],OrDashboardPreview.prototype,"previewHeight",void 0),or_dashboard_preview_decorate([(0,decorators.MZ)()],OrDashboardPreview.prototype,"previewZoom",void 0),or_dashboard_preview_decorate([(0,decorators.MZ)()],OrDashboardPreview.prototype,"previewSize",void 0),or_dashboard_preview_decorate([(0,decorators.MZ)()],OrDashboardPreview.prototype,"availablePreviewSizes",void 0),or_dashboard_preview_decorate([(0,decorators.MZ)()],OrDashboardPreview.prototype,"fullscreen",void 0),or_dashboard_preview_decorate([(0,decorators.wk)()],OrDashboardPreview.prototype,"latestChanges",void 0),or_dashboard_preview_decorate([(0,decorators.wk)()],OrDashboardPreview.prototype,"activePreset",void 0),or_dashboard_preview_decorate([(0,decorators.wk)()],OrDashboardPreview.prototype,"rerenderActive",void 0),or_dashboard_preview_decorate([(0,decorators.wk)()],OrDashboardPreview.prototype,"isLoading",void 0),OrDashboardPreview=or_dashboard_preview_decorate([(0,decorators.EM)("or-dashboard-preview")],OrDashboardPreview);var until=__webpack_require__("../../../node_modules/lit/directives/until.js"),widget_settings_decorate=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var g=t.length-1;g>=0;g--)(o=t[g])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};class WidgetSettingsChangedEvent extends CustomEvent{constructor(t){super(WidgetSettingsChangedEvent.NAME,{bubbles:!0,composed:!0,detail:t})}}WidgetSettingsChangedEvent.NAME="settings-changed";class WidgetSettings extends lit.WF{static get styles(){return[style_style]}constructor(t){super(),this.widgetConfig=t}willUpdate(t){t.has("widgetConfig")&&this.widgetConfig&&this.dispatchEvent(new WidgetSettingsChangedEvent(this.widgetConfig))}notifyConfigUpdate(){this.requestUpdate("widgetConfig")}}widget_settings_decorate([(0,decorators.MZ)()],WidgetSettings.prototype,"widgetConfig",void 0);var or_dashboard_widgetsettings_decorate=function(t,e,i,s){var d,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(d=t[o])&&(r=(n<3?d(r):n>3?d(e,i,r):d(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},or_dashboard_widgetsettings_awaiter=function(t,e,i,s){return new(i||(i=Promise))((function(d,n){function r(t){try{a(s.next(t))}catch(t){n(t)}}function o(t){try{a(s.throw(t))}catch(t){n(t)}}function a(t){var e;t.done?d(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,o)}a((s=s.apply(t,e||[])).next())}))};const tableStyle=__webpack_require__("../../../node_modules/@material/data-table/dist/mdc.data-table.css");let OrDashboardWidgetsettings=class extends lit.WF{static get styles(){return[(0,lit.iz)(tableStyle),style_style]}forceParentUpdate(t,e=!1){this.requestUpdate(),this.dispatchEvent(new CustomEvent("update",{detail:{changes:t,force:e}}))}render(){var t;return lit.qy`
            <div style="padding: 12px;">
                <div>
                    <or-mwc-input .type="${or_mwc_input.NZ.TEXT}" style="width: 100%;" .value="${null===(t=this.selectedWidget)||void 0===t?void 0:t.displayName}" label="${or_translate_lib.MR.t("name")}"
                                  @or-mwc-input-changed="${t=>this.setDisplayName(t.detail.value)}"
                    ></or-mwc-input>
                </div>
            </div>
            <div>
                ${(0,guard.a)([this.selectedWidget],(()=>lit.qy`
                    ${(0,until.T)(this.generateContent(this.selectedWidget.widgetTypeId),lit.qy`Loading...`)}
                `))}
            </div>
        `}setDisplayName(t){this.selectedWidget.displayName=t,this.forceParentUpdate(new Map([["widget",this.selectedWidget]]))}generateContent(t){return or_dashboard_widgetsettings_awaiter(this,void 0,void 0,(function*(){if(!this.settingsElem||this.settingsElem.id!==this.selectedWidget.id){const e=WidgetService.getManifest(t);this.settingsElem=this.initSettings(e)}return lit.qy`
            ${this.settingsElem}
        `}))}initSettings(t){const e=t.getSettingsHtml(this.selectedWidget.widgetConfig);return e.id=this.selectedWidget.id,e.getDisplayName=()=>this.selectedWidget.displayName,e.setDisplayName=t=>this.setDisplayName(t),e.getEditMode=()=>!0,e.getWidgetLocation=()=>{var t,e,i,s;return{x:null===(t=this.selectedWidget.gridItem)||void 0===t?void 0:t.x,y:null===(e=this.selectedWidget.gridItem)||void 0===e?void 0:e.y,w:null===(i=this.selectedWidget.gridItem)||void 0===i?void 0:i.w,h:null===(s=this.selectedWidget.gridItem)||void 0===s?void 0:s.h}},e.addEventListener(WidgetSettingsChangedEvent.NAME,(t=>this.onWidgetConfigChange(t))),e}onWidgetConfigChange(t){this.selectedWidget.widgetConfig=t.detail,this.forceParentUpdate(new Map([["widget",this.selectedWidget]]))}};or_dashboard_widgetsettings_decorate([(0,decorators.MZ)({type:Object})],OrDashboardWidgetsettings.prototype,"selectedWidget",void 0),or_dashboard_widgetsettings_decorate([(0,decorators.wk)()],OrDashboardWidgetsettings.prototype,"settingsElem",void 0),OrDashboardWidgetsettings=or_dashboard_widgetsettings_decorate([(0,decorators.EM)("or-dashboard-widgetsettings")],OrDashboardWidgetsettings);var unsafe_html=__webpack_require__("../../../node_modules/lit/directives/unsafe-html.js"),or_dashboard_boardsettings_decorate=function(e,t,a,s){var r,i=arguments.length,n=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,s);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(n=(i<3?r(n):i>3?r(t,a,n):r(t,a))||n);return i>3&&n&&Object.defineProperty(t,a,n),n};const boardSettingsStyling=lit.AH`
    .label {
        margin-bottom: 4px;
    }
`;let OrDashboardBoardsettings=class extends lit.WF{static get styles(){return[boardSettingsStyling,style_style]}forceParentUpdate(e=!1){this.dispatchEvent(new CustomEvent("update",{detail:{force:e}}))}setViewAccess(e){this.dashboard.viewAccess=e,"PRIVATE"===e&&(this.dashboard.editAccess="PRIVATE"),this.requestUpdate(),this.forceParentUpdate(!1)}setEditAccess(e){this.dashboard.editAccess=e,this.requestUpdate(),this.forceParentUpdate(!1)}setBreakpoint(e,t){this.dashboard.template.screenPresets[e].breakpoint=t,this.requestUpdate(),this.forceParentUpdate(!0)}setRefreshInterval(e){this.dashboard.template.refreshInterval=e,this.requestUpdate(),this.forceParentUpdate(!1)}render(){var e,t;if(null!=(null===(e=this.dashboard.template)||void 0===e?void 0:e.screenPresets)){const e=sortScreenPresets(this.dashboard.template.screenPresets,!0),a=["PRIVATE","SHARED","PUBLIC"].map((e=>({key:e,value:dashboardAccessToString(e)}))),s=["PRIVATE","SHARED"].map((e=>({key:e,value:dashboardAccessToString(e)}))),r=["OFF","ONE_MIN","FIVE_MIN","QUARTER","ONE_HOUR"].map((e=>({key:e,value:`dashboard.interval.${e.toLowerCase()}`}))),i=[];return["KEEP_LAYOUT","WRAP_TO_SINGLE_COLUMN","BLOCK_DEVICE"].forEach((e=>{i.push({key:e,value:scalingPresetToString(e)})})),lit.qy`

                <!-- Permissions panel, to set who can view/edit the selected dashboard -->
                ${(0,when.z)(this.showPerms,(()=>lit.qy`
                    <settings-panel displayName="permissions" expanded="${!0}">
                        <div>
                            <div style="margin-bottom: 24px;">
                                <div class="label">
                                    ${lit.qy`<span>${(0,unsafe_html._)(or_translate_lib.MR.t("dashboard.whoCanView").toString())}</span>`}
                                </div>
                                <or-mwc-input class="permissionInput" comfortable type="${or_mwc_input.NZ.SELECT}" style="width: 100%;"
                                              .options="${a.map((e=>e.value))}"
                                              .value="${dashboardAccessToString(this.dashboard.viewAccess)}"
                                              @or-mwc-input-changed="${e=>{var t;this.setViewAccess(null===(t=a.find((t=>t.value==e.detail.value)))||void 0===t?void 0:t.key)}}"
                                ></or-mwc-input>
                            </div>
                            <div style="margin-bottom: 24px;">
                                <div class="label">
                                    ${lit.qy`<span>${(0,unsafe_html._)(or_translate_lib.MR.t("dashboard.whoCanEdit").toString())}</span>`}
                                </div>
                                <or-mwc-input class="permissionInput" comfortable type="${or_mwc_input.NZ.SELECT}" style="width: 100%;"
                                              .disabled="${"PRIVATE"==this.dashboard.viewAccess}"
                                              .options="${s.map((e=>e.value))}"
                                              .value="${dashboardAccessToString(this.dashboard.editAccess)}"
                                              @or-mwc-input-changed="${e=>{var t;this.setEditAccess(null===(t=s.find((t=>t.value==e.detail.value)))||void 0===t?void 0:t.key)}}"
                                ></or-mwc-input>
                            </div>
                        </div>
                    </settings-panel>
                `))}

                <!-- Layout panel, with options such as 'amount of columns' -->
                <settings-panel displayName="layout" expanded="${!0}">
                    <div>
                        
                        <!-- Number of Columns control -->
                        <div style="margin-bottom: 24px; display: flex; align-items: center;">
                            <span style="min-width: 180px;"><or-translate value="dashboard.numberOfColumns"></or-translate></span>
                            <or-mwc-input type="${or_mwc_input.NZ.NUMBER}" comfortable .value="${this.dashboard.template.columns}" min="1" max="24" @or-mwc-input-changed="${e=>{null!=this.dashboard.template&&e.detail.value<=24&&e.detail.value>=1&&(this.dashboard.template.columns=e.detail.value,this.forceParentUpdate(!0))}}"></or-mwc-input>
                        </div>
                        
                        <!-- Scaling preset -->
                        ${1===e.length?lit.qy`
                            ${this.scalingPresetTemplate(e,i)}
                        `:void 0}
                        
                        <!-- Screen preset -->
                        ${1===e.length?lit.qy`
                            ${this.screenPresetTemplate(e,["Mobile breakpoint"])}
                        `:void 0}
                        
                        <!-- Max Screen Width control-->
                        <div style="margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between;">
                            <span style="min-width: 150px;"><or-translate value="dashboard.maxScreenWidth"></or-translate></span>
                            <div>
                                <or-mwc-input type="${or_mwc_input.NZ.NUMBER}" comfortable .value="${this.dashboard.template.maxScreenWidth}" style="width: 70px;"
                                              @or-mwc-input-changed="${e=>{null!=this.dashboard.template&&(this.dashboard.template.maxScreenWidth=e.detail.value,this.forceParentUpdate(!0))}}">
                                </or-mwc-input>
                                <span style="margin-left: 2px;">px</span>
                            </div>
                        </div>
                        
                        <!-- "Set to mobile" preset button, for ease of use -->
                        <div>
                            <or-mwc-input type="${or_mwc_input.NZ.BUTTON}" comfortable label="dashboard.setToMobilePreset"
                                          @or-mwc-input-changed="${()=>{this.setToMobilePreset()}}">
                            </or-mwc-input>
                        </div>
                    </div>
                </settings-panel>

                <!-- Data management options -->
                <settings-panel displayName="dashboard.dataManagement" expanded="${!0}">
                    <div>
                        <div class="label">
                            <span><or-translate value="dashboard.defaultRefreshInterval"></or-translate></span>
                        </div>
                        <or-mwc-input type="${or_mwc_input.NZ.SELECT}" comfortable .options="${r.map((e=>e.value))}" style="width: 100%;"
                                      .value="${`dashboard.interval.${(null===(t=this.dashboard.template.refreshInterval)||void 0===t?void 0:t.toLowerCase())||"off"}`}"
                                      @or-mwc-input-changed="${e=>{const t=r.find((t=>t.value===e.detail.value));t&&this.setRefreshInterval(t.key)}}">
                        </or-mwc-input>
                    </div>
                </settings-panel>
                
            `}return lit.qy`
                <div style="padding: 24px;">
                    <span><or-translate value="errorOccurred"></or-translate></span><br/>
                    <span><or-translate value="noDashboardFound"></or-translate></span>
                </div>
            `}setToMobilePreset(){this.dashboard.template.columns=4,this.dashboard.template.screenPresets[0].scalingPreset="KEEP_LAYOUT",this.dashboard.template.maxScreenWidth=700,this.requestUpdate(),this.forceParentUpdate(!0)}scalingPresetTemplate(e,t){return lit.qy`
            ${e.map((a=>{var s;return lit.qy`
                    <div style="margin-bottom: ${e.length>1?"24px":"16px"}">
                        <div class="label">
                            ${lit.qy`<span>${(0,unsafe_html._)(or_translate_lib.MR.t("dashboard.onScreenMyBoardShould").replace("{{size}}","<b>"+or_translate_lib.MR.t(a.displayName)+"</b>"))}</span>`}
                        </div>
                        <or-mwc-input class="displayInput" type="${or_mwc_input.NZ.SELECT}" comfortable style="width: 100%;"
                                      .options="${t.map((e=>e.value))}"
                                      .value="${null===(s=t.find((e=>e.key==a.scalingPreset)))||void 0===s?void 0:s.value}"
                                      @or-mwc-input-changed="${e=>{var s;a.scalingPreset=null===(s=t.find((t=>t.value==e.detail.value)))||void 0===s?void 0:s.key,this.forceParentUpdate(!0),this.requestUpdate()}}"
                        ></or-mwc-input>
                    </div>
                `}))}
        `}screenPresetTemplate(e,t){return lit.qy`
            ${e.map(((a,s)=>lit.qy`
                    <div style="margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between;">
                        <span style="min-width: 140px;">${t?t[s]:a.displayName+" "+or_translate_lib.MR.t("screen")}</span>
                        <div>
                            <span style="margin-right: 4px;">${0==e.indexOf(a)?">":"<"}</span>
                            <or-mwc-input type="${or_mwc_input.NZ.NUMBER}" comfortable .disabled="${e.length>1&&0==e.indexOf(a)}" style="width: 70px;"
                                          .value="${e.length>1&&0==e.indexOf(a)?e[1].breakpoint:a.breakpoint}"
                                          @or-mwc-input-changed="${t=>{this.setBreakpoint(e.indexOf(a),t.detail.value)}}"
                            ></or-mwc-input>
                            <span style="margin-left: 2px;">px</span>
                        </div>
                    </div>
                `))}
        `}};or_dashboard_boardsettings_decorate([(0,decorators.MZ)()],OrDashboardBoardsettings.prototype,"dashboard",void 0),or_dashboard_boardsettings_decorate([(0,decorators.MZ)()],OrDashboardBoardsettings.prototype,"showPerms",void 0),OrDashboardBoardsettings=or_dashboard_boardsettings_decorate([(0,decorators.EM)("or-dashboard-boardsettings")],OrDashboardBoardsettings);var dashboard_refresh_controls_decorate=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};class IntervalSelectEvent extends CustomEvent{constructor(e){super(IntervalSelectEvent.NAME,{bubbles:!0,composed:!0,detail:e})}}IntervalSelectEvent.NAME="interval-select";let DashboardRefreshControls=class extends lit.WF{constructor(){super(...arguments),this.interval="OFF",this.readonly=!0,this.intervalOptions=["OFF","ONE_MIN","FIVE_MIN","QUARTER","ONE_HOUR"]}willUpdate(e){super.willUpdate(e),e.has("interval")&&void 0!==this.interval&&this.dispatchEvent(new IntervalSelectEvent(this.interval))}render(){const e=this.getRefreshOptions(),t=this.getIntervalString(this.interval);return lit.qy`
            <div style="height: 100%; display: flex; align-items: center;">
                ${(0,when.z)(this.readonly,(()=>lit.qy`
                    ${(0,when.z)("OFF"===this.interval,(()=>lit.qy`
                        <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" icon="pause" disabled="true" style="height: 36px; margin-top: -12px;"></or-mwc-input>
                    `),(()=>lit.qy`
                        <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" label="${t}" disabled="true"></or-mwc-input>
                    `))}
                `),(()=>lit.qy`
                    ${(0,or_mwc_menu.Xj)("OFF"===this.interval?lit.qy`
                                <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" icon="pause" style="height: 36px; margin-top: -12px;"></or-mwc-input>
                            `:lit.qy`
                                <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" label="${t}"></or-mwc-input>
                            `,e.map((e=>({value:e}))),t,(t=>this.onIntervalSelect(e,t)),void 0,!1,!0,!0)}
                `))}
            </div>
        `}onIntervalSelect(e,t){this.interval=this.intervalOptions[e.indexOf(t)]}getIntervalString(e){return`dashboard.interval.${e.toLowerCase()}`}getRefreshOptions(){return this.intervalOptions.map((e=>this.getIntervalString(e)))}};dashboard_refresh_controls_decorate([(0,decorators.MZ)()],DashboardRefreshControls.prototype,"interval",void 0),dashboard_refresh_controls_decorate([(0,decorators.MZ)()],DashboardRefreshControls.prototype,"readonly",void 0),DashboardRefreshControls=dashboard_refresh_controls_decorate([(0,decorators.EM)("dashboard-refresh-controls")],DashboardRefreshControls);var component=__webpack_require__("../../../node_modules/@material/tab-bar/component.js"),or_mwc_tabs_decorate=function(t,e,r,o){var a,l=arguments.length,i=l<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(i=(l<3?a(i):l>3?a(e,r,i):a(e,r))||i);return l>3&&i&&Object.defineProperty(e,r,i),i};const tabStyle=__webpack_require__("../../../node_modules/@material/tab/dist/mdc.tab.css"),tabBarStyle=__webpack_require__("../../../node_modules/@material/tab-bar/dist/mdc.tab-bar.css"),tabIndicatorStyle=__webpack_require__("../../../node_modules/@material/tab-indicator/dist/mdc.tab-indicator.css"),tabScrollerStyle=__webpack_require__("../../../node_modules/@material/tab-scroller/dist/mdc.tab-scroller.css"),tabStyling=lit.AH`
    .mdc-tab {
        background: var(--or-app-color4, ${(0,lit.iz)(core_lib.BB)});
    }
    .mdc-tab .mdc-tab__text-label {
        color: var(--or-app-color8, ${(0,lit.iz)(core_lib.BH)});
    }
    .mdc-tab .mdc-tab__icon {
        color: var(--or-app-color8, ${(0,lit.iz)(core_lib.BH)})
    }
    .mdc-tab-indicator .mdc-tab-indicator__content--underline {
        border-color: var(--or-app-color8, ${(0,lit.iz)(core_lib.BH)})
    }
    .mdc-tab__ripple::before, .mdc-tab__ripple::after {
        background-color: var(--ripplecolor, ${(0,lit.iz)(core_lib.BH)});
    }
    .mdc-tab-vertical {
        height: 72px !important; /* 72px is original Material spec */
    }
    .mdc-tab-vertical__content {
        flex-direction: column;
        gap: 6px; /* 6px is original Material spec */
    }
    .mdc-tab-vertical__text-label {
        padding-left: 0 !important;
    }
`;let OrMwcTabs=class extends lit.WF{static get styles(){return[(0,lit.iz)(tabStyle),(0,lit.iz)(tabBarStyle),(0,lit.iz)(tabIndicatorStyle),(0,lit.iz)(tabScrollerStyle),tabStyling]}constructor(){super(),null==this.index&&(this.index=0),null==this.items&&(this.items=[]),null==this.iconPosition&&(this.iconPosition="left"),null==this.noScroll&&(this.noScroll=!1),this.updateComplete.then((()=>{var t,e;const r=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".mdc-tab-bar");null!=r&&(this.mdcTabBar=new component.$(r),this.mdcTabBar.listen("MDCTabBar:activated",(t=>{this.index=t.detail.index}))),null!=r&&("top"===this.iconPosition&&null!=(null===(e=this.items)||void 0===e?void 0:e.find((t=>null!=t.name&&null!=t.icon)))&&(r.querySelectorAll(".mdc-tab").forEach((t=>{t.classList.add("mdc-tab-vertical")})),r.querySelectorAll(".mdc-tab__content").forEach((t=>{t.classList.add("mdc-tab-vertical__content")})),r.querySelectorAll(".mdc-tab__text-label").forEach((t=>{t.classList.add("mdc-tab-vertical__text-label")}))),null!=this.bgColor&&r.querySelectorAll(".mdc-tab").forEach((t=>{t.style.background=this.bgColor})),null!=this.color&&(r.querySelectorAll(".mdc-tab__text-label").forEach((t=>{t.style.color=this.color})),r.querySelectorAll(".mdc-tab__icon").forEach((t=>{t.style.color=this.color})),r.querySelectorAll(".mdc-tab-indicator__content--underline").forEach((t=>{t.style.borderColor=this.color})),r.querySelectorAll(".mdc-tab__ripple").forEach((t=>{t.style.setProperty("--ripplecolor",this.color)}))))}))}updated(t){(t.has("index")||t.has("mdcTabBar"))&&null!=this.mdcTabBar&&null!=this.index&&(this.mdcTabBar.activateTab(this.index),this.dispatchEvent(new CustomEvent("activated",{detail:{index:this.index}})))}render(){var t;let e;return null!=this.items&&null!=this.index&&(e=this.items[this.index]),lit.qy`
            ${"string"==typeof this.styles?lit.qy`<style>${this.styles}</style>`:this.styles||""}
            <div>
                <div class="mdc-tab-bar" role="tablist" id="tab-bar">
                    <div class="mdc-tab-scroller">
                        <div class="mdc-tab-scroller__scroll-area" style="overflow-x: ${this.noScroll?"hidden":void 0}">
                            <div class="mdc-tab-scroller__scroll-content">
                                ${null===(t=this.items)||void 0===t?void 0:t.map((t=>{var e;return lit.qy`
                                    <button class="mdc-tab" role="tab" aria-selected="false" tabindex="${null===(e=this.items)||void 0===e?void 0:e.indexOf(t)}">
                                    <span class="mdc-tab__content">
                                        ${null!=t.icon?lit.qy`<or-icon icon="${t.icon}" class="mdc-tab__icon"></or-icon>`:null}
                                        ${null!=t.name?lit.qy`<span class="mdc-tab__text-label">${t.name}</span>`:null}
                                    </span>
                                        <span class="mdc-tab-indicator">
                                        <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                                    </span>
                                        <span class="mdc-tab__ripple"></span>
                                    </button>
                                `}))}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <!-- Content of menu Item. Using either unsafeHTML or HTML depending on input type -->
                        ${null!=e&&null!=e.content?"string"==typeof e.content?(0,unsafe_html._)(e.content):lit.qy`${e.content}`:void 0}
                    </div>
                </div>
            </div>
        `}};or_mwc_tabs_decorate([(0,decorators.MZ)({type:Number})],OrMwcTabs.prototype,"index",void 0),or_mwc_tabs_decorate([(0,decorators.MZ)({type:Array})],OrMwcTabs.prototype,"items",void 0),or_mwc_tabs_decorate([(0,decorators.MZ)({type:String})],OrMwcTabs.prototype,"iconPosition",void 0),or_mwc_tabs_decorate([(0,decorators.MZ)({type:Boolean})],OrMwcTabs.prototype,"noScroll",void 0),or_mwc_tabs_decorate([(0,decorators.MZ)({type:String})],OrMwcTabs.prototype,"bgColor",void 0),or_mwc_tabs_decorate([(0,decorators.MZ)({type:String})],OrMwcTabs.prototype,"color",void 0),or_mwc_tabs_decorate([(0,decorators.MZ)()],OrMwcTabs.prototype,"styles",void 0),or_mwc_tabs_decorate([(0,decorators.wk)()],OrMwcTabs.prototype,"mdcTabBar",void 0),OrMwcTabs=or_mwc_tabs_decorate([(0,decorators.EM)("or-mwc-tabs")],OrMwcTabs);var events=__webpack_require__("../../../node_modules/events/events.js");class DashboardKeyEmitter extends events.EventEmitter{constructor(){super(),this.onkeydown=e=>{"Delete"==e.key?(e.preventDefault(),this.emit("delete",e)):"Escape"==e.key?(e.preventDefault(),this.emit("deselect",e)):"s"==e.key&&e.ctrlKey&&(e.preventDefault(),this.emit("save",e))},window.addEventListener("keydown",this.onkeydown)}}var or_widget_decorate=function(t,e,r,o){var i,n=arguments.length,s=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(n<3?i(s):n>3?i(e,r,s):i(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};class OrWidget extends lit.WF{constructor(t){super(),this.widgetConfig=t}static get styles(){return[]}static getManifest(){if(!this.manifest)throw new Error(`No manifest present on ${this.name}`);return this.manifest}}or_widget_decorate([(0,decorators.MZ)({type:Object})],OrWidget.prototype,"widgetConfig",void 0);var or_asset_widget_decorate=function(t,e,s,r){var i,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,r);else for(var d=t.length-1;d>=0;d--)(i=t[d])&&(n=(o<3?i(n):o>3?i(e,s,n):i(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n},or_asset_widget_awaiter=function(t,e,s,r){return new(s||(s=Promise))((function(i,o){function n(t){try{a(r.next(t))}catch(t){o(t)}}function d(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(n,d)}a((r=r.apply(t,e||[])).next())}))};class OrAssetWidget extends OrWidget{constructor(){super(...arguments),this.loadedAssets=[],this.assetAttributes=[]}static get styles(){return[...super.styles]}fetchAssets(t=[]){return or_asset_widget_awaiter(this,void 0,void 0,(function*(){return fetchAssetsByAttributeRef(t)}))}queryAssets(t){return or_asset_widget_awaiter(this,void 0,void 0,(function*(){return fetchAssets(t)}))}isAssetLoaded(t){return isAssetIdLoaded(this.loadedAssets,t)}isAttributeRefLoaded(t){return isAssetIdLoaded(this.loadedAssets,t.id)}}or_asset_widget_decorate([(0,decorators.wk)()],OrAssetWidget.prototype,"loadedAssets",void 0),or_asset_widget_decorate([(0,decorators.wk)()],OrAssetWidget.prototype,"assetAttributes",void 0);class AssetWidgetSettings extends WidgetSettings{constructor(){super(...arguments),this.loadedAssets=[]}fetchAssets(t=[]){return or_asset_widget_awaiter(this,void 0,void 0,(function*(){return fetchAssetsByAttributeRef(t)}))}queryAssets(t){return or_asset_widget_awaiter(this,void 0,void 0,(function*(){return fetchAssets(t)}))}isAssetLoaded(t){return isAssetIdLoaded(this.loadedAssets,t)}isAttributeRefLoaded(t){return isAssetIdLoaded(this.loadedAssets,t.id)}}function fetchAssetsByAttributeRef(t=[]){return or_asset_widget_awaiter(this,void 0,void 0,(function*(){return t.map((t=>t.id)),t.map((t=>t.name)),fetchAssets({ids:null==t?void 0:t.map((t=>t.id)),select:{attributes:null==t?void 0:t.map((t=>t.name))}})}))}function fetchAssets(t){return or_asset_widget_awaiter(this,void 0,void 0,(function*(){let e=[];return t.realm={name:core_lib.Ay.displayRealm},yield core_lib.Ay.rest.api.AssetResource.queryAssets(t).then((t=>{e=t.data})).catch((t=>{console.error(t),(0,or_mwc_snackbar.td)(void 0,"errorOccurred")})),e}))}function isAssetIdLoaded(t,e){return void 0!==(null==t?void 0:t.find((t=>t.id===e)))}or_asset_widget_decorate([(0,decorators.wk)()],AssetWidgetSettings.prototype,"loadedAssets",void 0);var map=__webpack_require__("../../../node_modules/lit-html/directives/map.js"),attributes_panel_decorate=function(t,e,i,r){var o,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(a=(s<3?o(a):s>3?o(e,i,a):o(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a},attributes_panel_awaiter=function(t,e,i,r){return new(i||(i=Promise))((function(o,s){function a(t){try{l(r.next(t))}catch(t){s(t)}}function n(t){try{l(r.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,n)}l((r=r.apply(t,e||[])).next())}))};class AttributeActionEvent extends CustomEvent{constructor(t,e,i){super(AttributeActionEvent.NAME,{bubbles:!0,composed:!0,detail:{asset:t,attributeRef:e,action:i}})}}AttributeActionEvent.NAME="attribute-action";class AttributesSelectEvent extends CustomEvent{constructor(t,e){super(AttributesSelectEvent.NAME,{bubbles:!0,composed:!0,detail:{assets:t,attributeRefs:e}})}}AttributesSelectEvent.NAME="attribute-select";const styling=lit.AH`
  #attribute-list {
    overflow: auto;
    flex: 1 1 0;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .attribute-list-item {
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    gap: 10px;
    padding: 0;
    min-height: 50px;
  }
  
  .attribute-list-item-icon {
    display: flex;
    align-items: center;
    --or-icon-width: 20px;
  }

  .attribute-list-item-label {
    display: flex;
    justify-content: center;
    flex: 1 1 0;
    line-height: 16px;
    flex-direction: column;
  }
  
  .attribute-list-item-actions {
    flex: 1;
    justify-content: end;
    align-items: center;
    display: flex;
    gap: 8px;
  }

  .attribute-list-item-bullet {
    width: 14px;
    height: 14px;
    border-radius: 7px;
    margin-right: 10px;
  }

  .attribute-list-item .button.delete {
    display: none;
  }

  .attribute-list-item:hover .button.delete {
    display: block;
  }

  .button-action {
    background: none;
    visibility: hidden;
    color: var(--or-app-color5, ${(0,lit.iz)(core_lib.Id)});
    --or-icon-fill: var(--or-app-color5, ${(0,lit.iz)(core_lib.Id)});
    display: inline-block;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  .attribute-list-item:hover .attribute-list-item-actions {
    background: white;
    z-index: 1;
  }
  
  .attribute-list-item:hover .button-action {
    visibility: visible;
  }

  .button-action:hover {
    --or-icon-fill: var(--or-app-color4);
  }
`;let AttributesPanel=class extends lit.WF{constructor(){super(...arguments),this.attributeRefs=[],this.multi=!1,this.onlyDataAttrs=!1,this.loadedAssets=[]}static get styles(){return[styling,style_style]}willUpdate(t){super.willUpdate(t),this.attributeRefs||(this.attributeRefs=[]),t.has("attributeRefs")&&this.attributeRefs&&this.loadAssets().then((e=>{t.get("attributeRefs")&&this.dispatchEvent(new AttributesSelectEvent(e,this.attributeRefs))}))}getLoadedAsset(t){var e;return null===(e=this.loadedAssets)||void 0===e?void 0:e.find((e=>e.id===t.id))}removeWidgetAttribute(t){null!=this.attributeRefs&&(this.attributeRefs=this.attributeRefs.filter((e=>e!==t)))}loadAssets(){return attributes_panel_awaiter(this,void 0,void 0,(function*(){if(this.attributeRefs.filter((t=>!this.getLoadedAsset(t))).length>0){const t=yield this.fetchAssets(this.attributeRefs);return this.loadedAssets=t,t}return this.loadedAssets}))}fetchAssets(t=[]){return attributes_panel_awaiter(this,void 0,void 0,(function*(){let e=[];return yield core_lib.Ay.rest.api.AssetResource.queryAssets({ids:t.map((t=>t.id)),realm:{name:core_lib.Ay.displayRealm},select:{attributes:t.map((t=>t.name))}}).then((t=>{e=t.data})).catch((t=>{console.error(t),(0,or_mwc_snackbar.td)(void 0,"errorOccurred")})),e}))}onAttributeActionClick(t,e,i){this.dispatchEvent(new AttributeActionEvent(t,e,i))}openAttributeSelector(t,e,i=!0,r){let o;o=(0,or_mwc_dialog.ui)(null!=t?(new or_attribute_picker_lib.y).setMultiSelect(e).setSelectedAttributes(t).setShowOnlyDatapointAttrs(i).setAttributeFilter(r):(new or_attribute_picker_lib.y).setMultiSelect(e).setShowOnlyDatapointAttrs(i)),o.addEventListener(or_attribute_picker_lib._.NAME,(t=>{this.attributeRefs=t.detail}))}render(){return lit.qy`
            <div>
                ${(0,when.z)(this.attributeRefs.length>0,(()=>lit.qy`

                    <div id="attribute-list">
                        ${(0,guard.a)([this.attributeRefs,this.loadedAssets,this.attributeActionCallback,this.attributeLabelCallback],(()=>lit.qy`
                            ${(0,map.T)(this.attributeRefs,(t=>{const e=this.getLoadedAsset(t);if(e){const i=e.attributes[t.name],r=model_lib.u0.getAttributeAndValueDescriptors(e.type,t.name,i),o=core_lib.J0.getAttributeLabel(i,r[0],e.type,!0);return lit.qy`
                                        <div class="attribute-list-item">
                                            <div class="attribute-list-item-icon">
                                                <span>${(0,or_icon_lib.xl)(model_lib.u0.getAssetDescriptor(e.type))}</span>
                                            </div>
                                            <div class="attribute-list-item-label">
                                                ${(0,when.z)(!!this.attributeLabelCallback,(()=>this.attributeLabelCallback(e,i,o)),(()=>lit.qy`
                                                            <span>${e.name}</span>
                                                            <span style="font-size:14px; color:grey;">${o}</span>
                                                        `))}
                                            </div>
                                            <div class="attribute-list-item-actions">
                                                
                                                <!-- Custom actions defined by callback -->
                                                ${(0,when.z)(!!this.attributeActionCallback,(()=>this.attributeActionCallback(t).map((i=>lit.qy`
                                                        <button class="button-action" .disabled="${i.disabled}" title="${i.tooltip}" @click="${()=>this.onAttributeActionClick(e,t,i)}">
                                                            <or-icon icon="${i.icon}"></or-icon>
                                                        </button>
                                                    `))))}
                                                <!-- Remove attribute button -->
                                                <button class="button-action" title="${or_translate_lib.MR.t("delete")}" @click="${()=>this.removeWidgetAttribute(t)}">
                                                    <or-icon icon="close-circle"></or-icon>
                                                </button>
                                            </div>
                                        </div>
                                    `}}))}
                        `))}
                    </div>

                `),(()=>lit.qy`
                    <span style="padding: 14px 0; display: block;"><or-translate value="noAttributesConnected"></or-translate></span>
                `))}

                <!-- Button that opens attribute selection -->
                <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" label="attribute" icon="${this.multi||0===this.attributeRefs.length?"plus":"swap-horizontal"}"
                              style="margin-top: 8px;"
                              @or-mwc-input-changed="${()=>this.openAttributeSelector(this.attributeRefs,this.multi,this.onlyDataAttrs,this.attributeFilter)}">
                </or-mwc-input>
            </div>
        `}};attributes_panel_decorate([(0,decorators.MZ)()],AttributesPanel.prototype,"attributeRefs",void 0),attributes_panel_decorate([(0,decorators.MZ)()],AttributesPanel.prototype,"multi",void 0),attributes_panel_decorate([(0,decorators.MZ)()],AttributesPanel.prototype,"onlyDataAttrs",void 0),attributes_panel_decorate([(0,decorators.MZ)()],AttributesPanel.prototype,"attributeFilter",void 0),attributes_panel_decorate([(0,decorators.MZ)()],AttributesPanel.prototype,"attributeLabelCallback",void 0),attributes_panel_decorate([(0,decorators.MZ)()],AttributesPanel.prototype,"attributeActionCallback",void 0),attributes_panel_decorate([(0,decorators.wk)()],AttributesPanel.prototype,"loadedAssets",void 0),AttributesPanel=attributes_panel_decorate([(0,decorators.EM)("attributes-panel")],AttributesPanel);var settings_panel_decorate=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a},settings_panel_awaiter=function(e,t,i,n){return new(i||(i=Promise))((function(r,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))};const settings_panel_styling=lit.AH`
  :host {
    height: auto !important;
  }
  
  #panel-wrapper {
    border-top: 1px solid #E0E0E0;
    border-bottom: 1px solid #E0E0E0;
  }

  #panel-header {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 12px;
    gap: 8px;
  }

  #panel-title {
    line-height: 100%;
    font-weight: 700;
  }

  .panel-content {
    padding: 0 16px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s cubic-bezier(0.4, 0.0, 0.2, 1) 0s, visibility 0s 0.2s; /* expanded -> collapsed */
  }

  .panel-content--expanded {
    max-height: 100vh;
    overflow: visible;
    transition: max-height 0.25s cubic-bezier(0.4, 0.0, 0.2, 1) 0s; /* collapsed -> expanded */
  }
`;let SettingsPanel=class extends lit.WF{constructor(){super(...arguments),this.expanded=!1}static get styles(){return[settings_panel_styling,style_style]}render(){const e={"panel-content":!0,"panel-content--expanded":this.expanded};return lit.qy`
            <div id="panel-wrapper">
                ${(0,until.T)(this.generateHeader(this.expanded,this.displayName),lit.qy``)}
                <div class="${(0,class_map.H)(e)}">
                    <div style="padding-bottom: 16px;">
                        <slot></slot>
                    </div>
                </div>
            </div>
        `}toggle(e){this.expanded=e||!this.expanded}generateHeader(e,t){return settings_panel_awaiter(this,void 0,void 0,(function*(){return lit.qy`
            <div id="panel-header" @click="${()=>this.toggle()}">
                <div id="panel-chevron">
                    <or-icon icon="${e?"chevron-down":"chevron-right"}"></or-icon>
                </div>
                ${(0,when.z)(t,(()=>lit.qy`
                    <div id="panel-title">
                        <span><or-translate value="${this.displayName}"></or-translate></span>
                    </div>
                `))}
            </div>
        `}))}};settings_panel_decorate([(0,decorators.MZ)()],SettingsPanel.prototype,"expanded",void 0),settings_panel_decorate([(0,decorators.MZ)()],SettingsPanel.prototype,"displayName",void 0),SettingsPanel=settings_panel_decorate([(0,decorators.EM)("settings-panel")],SettingsPanel);var chart_settings_decorate=function(t,i,e,n){var o,s=arguments.length,a=s<3?i:null===n?n=Object.getOwnPropertyDescriptor(i,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,i,e,n);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(a=(s<3?o(a):s>3?o(i,e,a):o(i,e))||a);return s>3&&a&&Object.defineProperty(i,e,a),a};const chart_settings_styling=lit.AH`
  .switch-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;let ChartSettings=class extends WidgetSettings{constructor(){super(...arguments),this.timePresetOptions=new Map,this.samplingOptions=new Map}setTimePresetOptions(t){this.timePresetOptions=t}setSamplingOptions(t){this.samplingOptions=t}static get styles(){return[...super.styles,chart_settings_styling]}render(){var t,i,e,n,o,s;const a=null===(e=null===(i=null===(t=this.widgetConfig.chartOptions.options)||void 0===t?void 0:t.scales)||void 0===i?void 0:i.y)||void 0===e?void 0:e.min,l=null===(s=null===(o=null===(n=this.widgetConfig.chartOptions.options)||void 0===n?void 0:n.scales)||void 0===o?void 0:o.y)||void 0===s?void 0:s.max,r=this.widgetConfig.rightAxisAttributes.length>0,p=Array.from(this.samplingOptions.entries()).find((t=>t[1]===this.widgetConfig.datapointQuery.type))[0];return lit.qy`
            <div>
                <!-- Attribute selection -->
                <settings-panel displayName="attributes" expanded="${!0}">
                    <attributes-panel .attributeRefs="${this.widgetConfig.attributeRefs}" multi="${!0}" onlyDataAttrs="${!0}" .attributeFilter="${t=>["boolean","positiveInteger","positiveNumber","number","long","integer","bigInteger","negativeInteger","negativeNumber","bigNumber","integerByte","direction"].includes(t.type)}" style="padding-bottom: 12px;"
                                      .attributeLabelCallback="${(t,i,e)=>{const n=r&&void 0!==this.widgetConfig.rightAxisAttributes.find((e=>e.id===t.id&&e.name===i.name));return lit.qy`
                <span>${t.name}</span>
                <span style="font-size:14px; color:grey;">${e}</span>
                ${(0,when.z)(n,(()=>lit.qy`
                    <span style="position: absolute; right: 0; margin-bottom: 16px; font-size:14px; color:grey;"><or-translate value="right"></or-translate></span>
                `))}
            `}}" .attributeActionCallback="${t=>[{icon:this.widgetConfig.rightAxisAttributes.includes(t)?"arrow-right-bold":"arrow-left-bold",tooltip:or_translate_lib.MR.t("dashboard.toggleAxis"),disabled:!1}]}"
                                      @attribute-action="${t=>this.onAttributeAction(t)}"
                                      @attribute-select="${t=>this.onAttributesSelect(t)}"
                    ></attributes-panel>
                </settings-panel>

                <!-- Display options -->
                <settings-panel displayName="display" expanded="${!0}">
                    <div style="padding-bottom: 12px; display: flex; flex-direction: column; gap: 6px;">
                        <!-- Timeframe -->
                        <div>
                            <or-mwc-input .type="${or_mwc_input.NZ.SELECT}" label="${or_translate_lib.MR.t("timeframeDefault")}" style="width: 100%;"
                                          .options="${Array.from(this.timePresetOptions.keys())}" value="${this.widgetConfig.defaultTimePresetKey}"
                                          @or-mwc-input-changed="${t=>this.onTimePresetSelect(t)}"
                            ></or-mwc-input>
                        </div>
                        <!-- Y Min/max options -->
                        <div>
                            <div class="switch-container">
                                <span><or-translate value="dashboard.allowTimerangeSelect"></or-translate></span>
                                <or-mwc-input .type="${or_mwc_input.NZ.SWITCH}" style="margin: 0 -10px;" .value="${!this.widgetConfig.showTimestampControls}"
                                              @or-mwc-input-changed="${t=>this.onTimestampControlsToggle(t)}"
                                ></or-mwc-input>
                            </div>
                            <div class="switch-container">
                                <span><or-translate value="dashboard.showLegend"></or-translate></span>
                                <or-mwc-input .type="${or_mwc_input.NZ.SWITCH}" style="margin: 0 -10px;" .value="${this.widgetConfig.showLegend}"
                                              @or-mwc-input-changed="${t=>this.onShowLegendToggle(t)}"
                                ></or-mwc-input>
                            </div>
                        </div>
                    </div>
                </settings-panel>

                <!-- Axis configuration -->
                <settings-panel displayName="dashboard.axisConfig" expanded="${!0}">
                    <div style="padding-bottom: 12px; display: flex; flex-direction: column; gap: 16px;">

                        <!-- Left axis configuration -->
                        <div>
                            ${(0,when.z)(r,(()=>lit.qy`
                                <div style="margin-bottom: 8px;">
                                    <span><or-translate value="dashboard.leftAxis"></or-translate></span>
                                </div>
                            `))}
                            <div style="display: flex;">
                                ${void 0!==l?lit.qy`
                                    <or-mwc-input .type="${or_mwc_input.NZ.NUMBER}" label="${or_translate_lib.MR.t("yAxis")+" "+or_translate_lib.MR.t("max")}" .value="${l}" style="width: 100%;"
                                                  @or-mwc-input-changed="${t=>this.onMinMaxValueChange("left","max",t)}"
                                    ></or-mwc-input>
                                `:lit.qy`
                                    <or-mwc-input .type="${or_mwc_input.NZ.TEXT}" label="${or_translate_lib.MR.t("yAxis")+" "+or_translate_lib.MR.t("max")}" disabled="true" value="auto" style="width: 100%;"></or-mwc-input>
                                `}
                                <or-mwc-input .type="${or_mwc_input.NZ.SWITCH}" style="margin: 0 -10px 0 0;" .value="${void 0!==l}"
                                              @or-mwc-input-changed="${t=>this.onMinMaxValueToggle("left","max",t)}"
                                ></or-mwc-input>
                            </div>
                            <div style="display: flex; margin-top: 12px;">
                                ${void 0!==a?lit.qy`
                                    <or-mwc-input .type="${or_mwc_input.NZ.NUMBER}" label="${or_translate_lib.MR.t("yAxis")+" "+or_translate_lib.MR.t("min")}" .value="${a}" style="width: 100%;"
                                                  @or-mwc-input-changed="${t=>this.onMinMaxValueChange("left","min",t)}"
                                    ></or-mwc-input>
                                `:lit.qy`
                                    <or-mwc-input .type="${or_mwc_input.NZ.TEXT}" label="${or_translate_lib.MR.t("yAxis")+" "+or_translate_lib.MR.t("min")}" disabled="true" value="auto" style="width: 100%;"></or-mwc-input>
                                `}
                                <or-mwc-input .type="${or_mwc_input.NZ.SWITCH}" style="margin: 0 -10px 0 0;" .value="${void 0!==a}"
                                              @or-mwc-input-changed="${t=>this.onMinMaxValueToggle("left","min",t)}"
                                ></or-mwc-input>
                            </div>
                        </div>

                        <!-- Right axis configuration -->
                        ${(0,when.z)(r,(()=>{var t,i,e,n,o,s;const a=null===(e=null===(i=null===(t=this.widgetConfig.chartOptions.options)||void 0===t?void 0:t.scales)||void 0===i?void 0:i.y1)||void 0===e?void 0:e.min,l=null===(s=null===(o=null===(n=this.widgetConfig.chartOptions.options)||void 0===n?void 0:n.scales)||void 0===o?void 0:o.y1)||void 0===s?void 0:s.max;return lit.qy`
                                <div>
                                    <div style="margin-bottom: 8px;">
                                        <span><or-translate value="dashboard.rightAxis"></or-translate></span>
                                    </div>
                                    <div style="display: flex;">
                                        ${void 0!==l?lit.qy`
                                            <or-mwc-input .type="${or_mwc_input.NZ.NUMBER}" label="${or_translate_lib.MR.t("yAxis")+" "+or_translate_lib.MR.t("max")}" .value="${l}" style="width: 100%;"
                                                          @or-mwc-input-changed="${t=>this.onMinMaxValueChange("right","max",t)}"
                                            ></or-mwc-input>
                                        `:lit.qy`
                                            <or-mwc-input .type="${or_mwc_input.NZ.TEXT}" label="${or_translate_lib.MR.t("yAxis")+" "+or_translate_lib.MR.t("max")}" disabled="true" value="auto"
                                                          style="width: 100%;"></or-mwc-input>
                                        `}
                                        <or-mwc-input .type="${or_mwc_input.NZ.SWITCH}" style="margin: 0 -10px 0 0;" .value="${void 0!==l}"
                                                      @or-mwc-input-changed="${t=>this.onMinMaxValueToggle("right","max",t)}"
                                        ></or-mwc-input>
                                    </div>
                                    <div style="display: flex; margin-top: 12px;">
                                        ${void 0!==a?lit.qy`
                                            <or-mwc-input .type="${or_mwc_input.NZ.NUMBER}" label="${or_translate_lib.MR.t("yAxis")+" "+or_translate_lib.MR.t("min")}" .value="${a}" style="width: 100%;"
                                                          @or-mwc-input-changed="${t=>this.onMinMaxValueChange("right","min",t)}"
                                            ></or-mwc-input>
                                        `:lit.qy`
                                            <or-mwc-input .type="${or_mwc_input.NZ.TEXT}" label="${or_translate_lib.MR.t("yAxis")+" "+or_translate_lib.MR.t("min")}" disabled="true" value="auto"
                                                          style="width: 100%;"></or-mwc-input>
                                        `}
                                        <or-mwc-input .type="${or_mwc_input.NZ.SWITCH}" style="margin: 0 -10px 0 0;" .value="${void 0!==a}"
                                                      @or-mwc-input-changed="${t=>this.onMinMaxValueToggle("right","min",t)}"
                                        ></or-mwc-input>
                                    </div>
                                </div>
                            `}))}
                    </div>
                </settings-panel>

                <!-- Data sampling options -->
                <settings-panel displayName="dataSampling" expanded="${!0}">
                    <div style="padding-bottom: 12px; display: flex; flex-direction: column; gap: 12px;">
                        <div>
                            <or-mwc-input .type="${or_mwc_input.NZ.SELECT}" style="width: 100%" .options="${Array.from(this.samplingOptions.keys())}" .value="${p}"
                                          label="${or_translate_lib.MR.t("algorithm")}" @or-mwc-input-changed="${t=>this.onSamplingQueryChange(t)}"
                            ></or-mwc-input>
                        </div>
                        <div>
                            ${this.getSamplingOptionsTemplate(this.widgetConfig.datapointQuery.type)}
                        </div>
                    </div>
                </settings-panel>
            </div>
        `}getSamplingOptionsTemplate(t){if("interval"===t){const t=this.widgetConfig.datapointQuery,i=["AVG","MIN","MAX"];return lit.qy`
                    <or-mwc-input .type="${or_mwc_input.NZ.SELECT}" style="width: 100%;" .options="${i}"
                                  .value="${t.formula}" label="${or_translate_lib.MR.t("algorithmMethod")}" @or-mwc-input-changed="${i=>{t.formula=i.detail.value,this.notifyConfigUpdate()}}"
                    ></or-mwc-input>
                `}return lit.qy``}onAttributeAction(t){this.widgetConfig.attributeRefs.indexOf(t.detail.attributeRef)>=0&&(this.widgetConfig.rightAxisAttributes.includes(t.detail.attributeRef)?this.removeFromRightAxis(t.detail.attributeRef):this.addToRightAxis(t.detail.attributeRef),this.notifyConfigUpdate())}onAttributesSelect(t){this.widgetConfig.attributeRefs.filter((i=>!t.detail.attributeRefs.includes(i))).forEach((t=>this.removeFromRightAxis(t))),this.widgetConfig.attributeRefs=t.detail.attributeRefs,this.notifyConfigUpdate()}addToRightAxis(t,i=!1){this.widgetConfig.rightAxisAttributes.includes(t)||(this.widgetConfig.rightAxisAttributes.push(t),i&&this.notifyConfigUpdate())}removeFromRightAxis(t,i=!1){this.widgetConfig.rightAxisAttributes.includes(t)&&(this.widgetConfig.rightAxisAttributes.splice(this.widgetConfig.rightAxisAttributes.indexOf(t),1),i&&this.notifyConfigUpdate())}onTimePresetSelect(t){this.widgetConfig.defaultTimePresetKey=t.detail.value.toString(),this.notifyConfigUpdate()}onTimestampControlsToggle(t){this.widgetConfig.showTimestampControls=!t.detail.value,this.notifyConfigUpdate()}onShowLegendToggle(t){this.widgetConfig.showLegend=t.detail.value,this.notifyConfigUpdate()}setAxisMinMaxValue(t,i,e){"left"===t?"min"===i?this.widgetConfig.chartOptions.options.scales.y.min=e:this.widgetConfig.chartOptions.options.scales.y.max=e:"min"===i?this.widgetConfig.chartOptions.options.scales.y1.min=e:this.widgetConfig.chartOptions.options.scales.y1.max=e,this.notifyConfigUpdate()}onMinMaxValueChange(t,i,e){this.setAxisMinMaxValue(t,i,e.detail.value)}onMinMaxValueToggle(t,i,e){this.setAxisMinMaxValue(t,i,e.detail.value?"min"===i?0:100:void 0)}onSamplingQueryChange(t){this.widgetConfig.datapointQuery.type=this.samplingOptions.get(t.detail.value),this.notifyConfigUpdate()}};ChartSettings=chart_settings_decorate([(0,decorators.EM)("chart-settings")],ChartSettings);var ChartWidget_1,chart_widget_decorate=function(t,e,i,s){var o,a=arguments.length,n=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};function getDefaultTimePresetOptions(){return new Map([["lastHour",t=>[moment_default()(t).subtract(1,"hour").toDate(),t]],["last24Hours",t=>[moment_default()(t).subtract(24,"hours").toDate(),t]],["last7Days",t=>[moment_default()(t).subtract(7,"days").toDate(),t]],["last30Days",t=>[moment_default()(t).subtract(30,"days").toDate(),t]],["last90Days",t=>[moment_default()(t).subtract(90,"days").toDate(),t]],["last6Months",t=>[moment_default()(t).subtract(6,"months").toDate(),t]],["lastYear",t=>[moment_default()(t).subtract(1,"year").toDate(),t]],["thisHour",t=>[moment_default()(t).startOf("hour").toDate(),moment_default()(t).endOf("hour").toDate()]],["thisDay",t=>[moment_default()(t).startOf("day").toDate(),moment_default()(t).endOf("day").toDate()]],["thisWeek",t=>[moment_default()(t).startOf("isoWeek").toDate(),moment_default()(t).endOf("isoWeek").toDate()]],["thisMonth",t=>[moment_default()(t).startOf("month").toDate(),moment_default()(t).endOf("month").toDate()]],["thisYear",t=>[moment_default()(t).startOf("year").toDate(),moment_default()(t).endOf("year").toDate()]],["yesterday",t=>[moment_default()(t).subtract(24,"hours").startOf("day").toDate(),moment_default()(t).subtract(24,"hours").endOf("day").toDate()]],["thisDayLastWeek",t=>[moment_default()(t).subtract(1,"week").startOf("day").toDate(),moment_default()(t).subtract(1,"week").endOf("day").toDate()]],["previousWeek",t=>[moment_default()(t).subtract(1,"week").startOf("isoWeek").toDate(),moment_default()(t).subtract(1,"week").endOf("isoWeek").toDate()]],["previousMonth",t=>[moment_default()(t).subtract(1,"month").startOf("month").toDate(),moment_default()(t).subtract(1,"month").endOf("month").toDate()]],["previousYear",t=>[moment_default()(t).subtract(1,"year").startOf("year").toDate(),moment_default()(t).subtract(1,"year").endOf("year").toDate()]]])}let ChartWidget=ChartWidget_1=class extends OrAssetWidget{static getManifest(){return{displayName:"Line Chart",displayIcon:"chart-line",minColumnWidth:2,minColumnHeight:2,getContentHtml:t=>new ChartWidget_1(t),getSettingsHtml(t){const e=new ChartSettings(t);return e.setTimePresetOptions(getDefaultTimePresetOptions()),e.setSamplingOptions(function getDefaultSamplingOptions(){return new Map([["lttb","lttb"],["withInterval","interval"]])}()),e},getDefaultConfig:()=>function getDefaultWidgetConfig(){const t="last24Hours",e=getDefaultTimePresetOptions().get(t)(new Date);return{attributeRefs:[],rightAxisAttributes:[],datapointQuery:{type:"lttb",fromTimestamp:e[0].getTime(),toTimestamp:e[1].getTime()},chartOptions:{options:{scales:{y:{min:void 0,max:void 0},y1:{min:void 0,max:void 0}}}},showTimestampControls:!1,defaultTimePresetKey:t,showLegend:!0}}()}}refreshContent(t){if(t)this.widgetConfig=JSON.parse(JSON.stringify(this.widgetConfig));else{const t=JSON.parse(JSON.stringify(this.widgetConfig.datapointQuery));t.fromTimestamp=void 0,t.toTimestamp=void 0,this.datapointQuery=t}}willUpdate(t){return this.widgetConfig.datapointQuery||(this.widgetConfig.datapointQuery=this.getDefaultQuery(),t.has("widgetConfig")||t.set("widgetConfig",this.widgetConfig)),t.has("widgetConfig")&&this.widgetConfig&&(this.datapointQuery=this.widgetConfig.datapointQuery),super.willUpdate(t)}updated(t){if(super.updated(t),t.has("widgetConfig")&&this.widgetConfig){const t=this.widgetConfig.attributeRefs;(null==t?void 0:t.filter((t=>!this.isAttributeRefLoaded(t)))).length>0&&this.fetchAssets(t).then((e=>{this.loadedAssets=e,this.assetAttributes=null==t?void 0:t.map((t=>{const i=e.findIndex((e=>e.id===t.id)),s=i>=0?e[i]:void 0;return s&&s.attributes?[i,s.attributes[t.name]]:void 0})).filter((t=>!!t))}))}return super.updated(t)}render(){return lit.qy`
            ${(0,when.z)(this.loadedAssets&&this.assetAttributes&&this.loadedAssets.length>0&&this.assetAttributes.length>0,(()=>{var t,e,i,s,o;return lit.qy`
                    <or-chart .assets="${this.loadedAssets}" .assetAttributes="${this.assetAttributes}" .rightAxisAttributes="${this.widgetConfig.rightAxisAttributes}"
                              .showLegend="${null==(null===(t=this.widgetConfig)||void 0===t?void 0:t.showLegend)||(null===(e=this.widgetConfig)||void 0===e?void 0:e.showLegend)}"
                              .attributeControls="${!1}" .timestampControls="${!(null===(i=this.widgetConfig)||void 0===i?void 0:i.showTimestampControls)}"
                              .timePresetOptions="${getDefaultTimePresetOptions()}" .timePresetKey="${null===(s=this.widgetConfig)||void 0===s?void 0:s.defaultTimePresetKey}"
                              .datapointQuery="${this.datapointQuery}" .chartOptions="${null===(o=this.widgetConfig)||void 0===o?void 0:o.chartOptions}"
                              style="height: 100%"
                    ></or-chart>
                `}),(()=>lit.qy`
                    <div style="height: 100%; display: flex; justify-content: center; align-items: center;">
                        <span><or-translate value="noAttributesConnected"></or-translate></span>
                    </div>
                `))}
        `}getDefaultQuery(){return{type:"lttb",fromTimestamp:moment_default()().set("minute",-60).toDate().getTime(),toTimestamp:moment_default()().set("minute",60).toDate().getTime()}}};chart_widget_decorate([(0,decorators.wk)()],ChartWidget.prototype,"datapointQuery",void 0),ChartWidget=ChartWidget_1=chart_widget_decorate([(0,decorators.EM)("chart-widget")],ChartWidget);var gauge_settings_decorate=function(t,e,i,n){var a,s=arguments.length,o=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(o=(s<3?a(o):s>3?a(e,i,o):a(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};let GaugeSettings=class extends WidgetSettings{render(){return lit.qy`
            <div>
                <!-- Attribute selection -->
                <settings-panel displayName="attributes" expanded="${!0}">
                    <attributes-panel .attributeRefs="${this.widgetConfig.attributeRefs}" .attributeFilter="${t=>["positiveInteger","positiveNumber","number","long","integer","bigInteger","negativeInteger","negativeNumber","bigNumber","integerByte","direction"].includes(t.type)}" style="padding-bottom: 12px;"
                                      @attribute-select="${t=>this.onAttributesSelect(t)}"
                    ></attributes-panel>
                </settings-panel>
                
                <!-- Min/max and decimals options-->
                <settings-panel displayName="values" expanded="${!0}">
                    <div style="padding-bottom: 12px; display: flex; flex-direction: column; gap: 12px;">
                        <div style="display: flex; gap: 8px;">
                            <or-mwc-input .type="${or_mwc_input.NZ.NUMBER}" label="${or_translate_lib.MR.t("min")}" .max="${this.widgetConfig.max}" .value="${this.widgetConfig.min}"
                                          @or-mwc-input-changed="${t=>this.onMinMaxValueChange("min",t)}"
                            ></or-mwc-input>
                            <or-mwc-input .type="${or_mwc_input.NZ.NUMBER}" label="${or_translate_lib.MR.t("max")}" .min="${this.widgetConfig.min}" .value="${this.widgetConfig.max}"
                                          @or-mwc-input-changed="${t=>this.onMinMaxValueChange("max",t)}"
                            ></or-mwc-input>
                        </div>
                        <div>
                            <or-mwc-input .type="${or_mwc_input.NZ.NUMBER}" style="width: 100%;" .value="${this.widgetConfig.decimals}" label="${or_translate_lib.MR.t("decimals")}" .min="${0}"
                                          @or-mwc-input-changed="${t=>this.onDecimalsChange(t)}"
                            ></or-mwc-input>
                        </div>
                    </div>
                </settings-panel>
                
                <!-- Thresholds panel -->
                <settings-panel displayName="thresholds" expanded="${!0}">
                    <thresholds-panel .thresholds="${this.widgetConfig.thresholds}" .valueType="${"number"}" style="padding-bottom: 12px;"
                                      .min="${this.widgetConfig.min}" .max="${this.widgetConfig.max}"
                                      @threshold-change="${t=>this.onThresholdChange(t)}">
                    </thresholds-panel>
                </settings-panel>
            </div>
        `}onAttributesSelect(t){if(this.widgetConfig.attributeRefs=t.detail.attributeRefs,1===t.detail.attributeRefs.length){const e=t.detail.attributeRefs[0],i=t.detail.assets.find((t=>t.id===e.id));this.setDisplayName(i?`${i.name} - ${e.name}`:`${e.name}`)}this.notifyConfigUpdate()}onMinMaxValueChange(t,e){switch(t){case"max":this.widgetConfig.max=e.detail.value,this.widgetConfig.thresholds.sort(((t,e)=>e[0]-t[0])).forEach(((t,i)=>{t[0]=Math.max(Math.min(t[0],e.detail.value-i-1),this.widgetConfig.min)}));break;case"min":{this.widgetConfig.min=e.detail.value;const t=this.widgetConfig.thresholds.sort(((t,e)=>t[0]<e[0]?-1:1));t[0][0]=e.detail.value,t.forEach(((t,i)=>{t[0]=Math.min(Math.max(t[0],e.detail.value+i),this.widgetConfig.max)}));break}}this.notifyConfigUpdate()}onDecimalsChange(t){this.widgetConfig.decimals=t.detail.value,this.notifyConfigUpdate()}onThresholdChange(t){this.widgetConfig.thresholds=t.detail,this.notifyConfigUpdate()}};GaugeSettings=gauge_settings_decorate([(0,decorators.EM)("gauge-settings")],GaugeSettings);__webpack_require__("../../component/or-gauge/lib/index.js");var GaugeWidget_1,gauge_widget_decorate=function(t,e,i,s){var n,r=arguments.length,a=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var g=t.length-1;g>=0;g--)(n=t[g])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let GaugeWidget=GaugeWidget_1=class extends OrAssetWidget{static getManifest(){return{displayName:"Gauge",displayIcon:"gauge",minColumnWidth:1,minColumnHeight:1,getContentHtml:t=>new GaugeWidget_1(t),getSettingsHtml:t=>new GaugeSettings(t),getDefaultConfig:()=>({attributeRefs:[],thresholds:[[0,"#4caf50"],[75,"#ff9800"],[90,"#ef5350"]],decimals:0,min:0,max:100,valueType:"number"})}}refreshContent(t){this.loadAssets(this.widgetConfig.attributeRefs)}updated(t){if(super.updated(t),t.has("widgetConfig")&&this.widgetConfig){const t=this.widgetConfig.attributeRefs,e=null==t?void 0:t.filter((t=>this.isAttributeRefLoaded(t)));(null==e?void 0:e.length)!==(t?t.length:0)&&this.loadAssets(t)}return super.updated(t)}loadAssets(t){this.fetchAssets(t).then((e=>{this.loadedAssets=e,this.assetAttributes=null==t?void 0:t.map((t=>{const i=e.findIndex((e=>e.id===t.id)),s=i>=0?e[i]:void 0;return s&&s.attributes?[i,s.attributes[t.name]]:void 0})).filter((t=>!!t))}))}render(){return lit.qy`
            ${(0,when.z)(this.loadedAssets&&this.assetAttributes&&this.loadedAssets.length>0&&this.assetAttributes.length>0,(()=>lit.qy`
                    <or-gauge .asset="${this.loadedAssets[0]}" .assetAttribute="${this.assetAttributes[0]}" .thresholds="${this.widgetConfig.thresholds}"
                              .decimals="${this.widgetConfig.decimals}" .min="${this.widgetConfig.min}" .max="${this.widgetConfig.max}"
                              style="height: 100%; overflow: hidden;">
                    </or-gauge>
                `),(()=>lit.qy`
                    <div style="height: 100%; display: flex; justify-content: center; align-items: center;">
                        <span><or-translate value="noAttributeConnected"></or-translate></span>
                    </div>
                `))}
        `}};GaugeWidget=GaugeWidget_1=gauge_widget_decorate([(0,decorators.EM)("gauge-widget")],GaugeWidget);var image_settings_decorate=function(t,e,i,s){var n,r=arguments.length,a=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const image_settings_styling=lit.AH`
  #marker-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;let ImageSettings=class extends AssetWidgetSettings{static get styles(){return[...super.styles,image_settings_styling]}willUpdate(t){super.willUpdate(t),t.has("widgetConfig")&&this.widgetConfig&&(this.updateCoordinateMap(this.widgetConfig),this.loadAssets())}loadAssets(){this.widgetConfig.attributeRefs.filter((t=>!this.isAttributeRefLoaded(t))).length>0&&this.fetchAssets(this.widgetConfig.attributeRefs).then((t=>{this.loadedAssets=void 0===t?[]:t}))}render(){return lit.qy`
            <div>
                <!-- Attributes selector -->
                <settings-panel displayName="attributes" expanded="${!0}">
                    <attributes-panel .attributeRefs="${this.widgetConfig.attributeRefs}" onlyDataAttrs="${!1}" multi="${!0}"
                                      @attribute-select="${t=>this.onAttributesSelect(t)}"
                    ></attributes-panel>
                </settings-panel>
                
                <!-- Marker coordinates -->
                <settings-panel displayName="dashboard.markerCoordinates" expanded="${!0}">
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        ${(0,map.T)(this.draftCoordinateEntries(this.widgetConfig),(t=>t))}
                    </div>
                </settings-panel>
                
                <!-- Image settings -->
                <settings-panel displayName="dashboard.imageSettings" expanded="${!0}">
                    <div>
                        <or-mwc-input style="width: 100%;" type="${or_mwc_input.NZ.TEXT}" label="${or_translate_lib.MR.t("dashboard.imageUrl")}" .value="${this.widgetConfig.imagePath}"
                                      @or-mwc-input-changed="${t=>this.onImageUrlUpdate(t)}"
                        ></or-mwc-input>
                    </div>
                </settings-panel>
            </div>
        `}onAttributesSelect(t){this.widgetConfig.attributeRefs=t.detail.attributeRefs,this.notifyConfigUpdate()}onImageUrlUpdate(t){this.widgetConfig.imagePath=t.detail.value,this.notifyConfigUpdate()}updateCoordinateMap(t){for(let e=0;e<t.attributeRefs.length;e++){const i=t.attributeRefs[e];if(void 0===i)return void console.error("attributeRef is undefined");-1===t.markers.findIndex((t=>t.attributeRef.id===i.id&&t.attributeRef.name===i.name))&&t.markers.push({attributeRef:i,coordinates:[50,50]})}}draftCoordinateEntries(t){return t.markers.length>0?t.attributeRefs.map((e=>{var i,s,n;const r=t.markers.find((t=>t.attributeRef.id===e.id&&t.attributeRef.name===e.name));if(void 0===r)return console.error("A marker could not be found during drafting coordinate entries."),lit.qy``;const a=t.markers.indexOf(r),o=r.coordinates,d=null===(i=this.loadedAssets)||void 0===i?void 0:i.find((t=>t.id===e.id));let l;if(d){const t=d.attributes[e.name],i=model_lib.u0.getAttributeAndValueDescriptors(d.type,e.name,t);l=core_lib.J0.getAttributeLabel(t,i[0],d.type,!1)}return lit.qy`
                    <div id="marker-container">
                        <div style="flex: 1; display: flex; flex-direction: column;">
                            <span>${null===(n=null===(s=this.loadedAssets)||void 0===s?void 0:s.find((t=>t.id===e.id)))||void 0===n?void 0:n.name}</span>
                            ${(0,when.z)(l,(()=>lit.qy`
                                <span style="color: gray;">${l}</span>
                            `))}
                        </div>
                        <div style="display: flex; gap: 8px;">
                            <or-mwc-input .disableSliderNumberInput="${!0}" compact style="max-width: 64px;"
                                          .type="${or_mwc_input.NZ.NUMBER}" .min="${0}" .max="${100}" .value="${o[0]}"
                                          @or-mwc-input-changed="${t=>this.onCoordinateUpdate(a,"x",t.detail.value)}"
                            ></or-mwc-input>

                            <or-mwc-input .disableSliderNumberInput="${!0}" compact style="max-width: 64px;"
                                          .type="${or_mwc_input.NZ.NUMBER}" .min="${0}" .max="${100}" .value="${o[1]}"
                                          @or-mwc-input-changed="${t=>this.onCoordinateUpdate(a,"y",t.detail.value)}"
                            ></or-mwc-input>
                        </div>
                    </div>
                `})):[lit.qy`<span><or-translate value="noAttributeConnected"></or-translate></span>`]}onCoordinateUpdate(t,e,i){let s=this.widgetConfig.markers[t].coordinates;s||(s=[0,0]),"x"===e?s[0]=i:"y"===e&&(s[1]=i),this.widgetConfig.markers[t].coordinates=s,this.notifyConfigUpdate()}};ImageSettings=image_settings_decorate([(0,decorators.EM)("image-settings")],ImageSettings);var ImageWidget_1,image_widget_decorate=function(t,e,i,r){var s,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};const image_widget_styling=lit.AH`
  #img-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 1;
  }

  #img-container {
    position: relative;
    max-height: 100%;
  }

  #img-content {
    height: 100%;
    max-height: 100%;
    max-width: 100%;
  }

  #overlay {
    position: absolute;
    z-index: 3;

    /* additional marker styling */
    color: var(--or-app-color2, ${(0,lit.iz)(core_lib.PR)});
    background-color: var(--or-app-color3, ${(0,lit.iz)(core_lib.Iy)});
    border-radius: 15px;
    padding: 3px 8px 5px 8px;
    object-fit: contain;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;let ImageWidget=ImageWidget_1=class extends OrAssetWidget{static getManifest(){return{displayName:"Image",displayIcon:"file-image-marker",minColumnWidth:1,minColumnHeight:1,getContentHtml:t=>new ImageWidget_1(t),getSettingsHtml:t=>new ImageSettings(t),getDefaultConfig:()=>({attributeRefs:[],showTimestampControls:!1,imagePath:"",markers:[]})}}refreshContent(t){this.loadAssets()}static get styles(){return[...super.styles,image_widget_styling]}updated(t){if(t.has("widgetConfig")&&this.widgetConfig){const t=this.widgetConfig.attributeRefs;(null==t?void 0:t.filter((t=>!this.isAttributeRefLoaded(t)))).length>0&&this.loadAssets()}}loadAssets(){this.fetchAssets(this.widgetConfig.attributeRefs).then((t=>{this.loadedAssets=t,this.assetAttributes=this.widgetConfig.attributeRefs.map((e=>{const i=t.findIndex((t=>t.id===e.id)),r=i>=0?t[i]:void 0;return r&&r.attributes?[i,r.attributes[e.name]]:void 0})).filter((t=>!!t))}))}handleMarkerPlacement(t){if(this.assetAttributes.length&&t.attributeRefs.length>0)return 0===t.markers.length?(console.error("No markers found!"),[]):t.attributeRefs.map(((e,i)=>{const r=t.markers.find((t=>t.attributeRef.id===e.id&&t.attributeRef.name===e.name)),s=this.loadedAssets.find((t=>t.id===e.id));let o;const a={left:`${r.coordinates[0]}%`,top:`${r.coordinates[1]}%`};if(s){const t=s.attributes[e.name],i=model_lib.u0.getAttributeAndValueDescriptors(s.type,e.name,t);o=core_lib.J0.getAttributeValueAsString(t,i[0],s.type,!0,"-"),"colourRGB"===(null==t?void 0:t.type)&&"-"!==o&&(a.backgroundColor=o,a.minHeight="21px",a.minWidth="13px",o=void 0)}return lit.qy`
                    <span id="overlay" style="${(0,style_map.W)(a)}">
                        ${o}
                    </span>
                `}))}render(){const t=this.widgetConfig.imagePath;return lit.qy`
            <div id="img-wrapper">
                ${(0,when.z)(t,(()=>lit.qy`
                    <div id="img-container">
                        <img id="img-content" src="${t}" alt=""/>
                        <div>
                            ${this.handleMarkerPlacement(this.widgetConfig)}
                        </div>
                    </div>
                `),(()=>lit.qy`
                    <span><or-translate value="dashboard.noImageSelected"></or-translate></span>
                `))}
            </div>
        `}};ImageWidget=ImageWidget_1=image_widget_decorate([(0,decorators.EM)("image-widget")],ImageWidget);var kpi_settings_decorate=function(t,e,i,n){var s,a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(o=(a<3?s(o):a>3?s(e,i,o):s(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o};const kpi_settings_styling=lit.AH`
  .switchMwcInputContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;let KpiSettings=class extends AssetWidgetSettings{static get styles(){return[...super.styles,kpi_settings_styling]}render(){return lit.qy`
            <div>
                <!-- Attribute selector -->
                <settings-panel displayName="attributes" expanded="${!0}">
                    <attributes-panel .attributeRefs="${this.widgetConfig.attributeRefs}" onlyDataAttrs="${!1}" .attributeFilter="${t=>["positiveInteger","positiveNumber","number","long","integer","bigInteger","negativeInteger","negativeNumber","bigNumber","integerByte","direction"].includes(t.type)}" style="padding-bottom: 12px;"
                                      @attribute-select="${t=>this.onAttributesSelect(t)}"
                    ></attributes-panel>
                </settings-panel>

                <!-- Display settings -->
                <settings-panel displayName="display" expanded="${!0}">
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <or-mwc-input .type="${or_mwc_input.NZ.SELECT}" style="width: 100%;"
                                      .options="${["year","month","week","day","hour"]}"
                                      .value="${this.widgetConfig.period}" label="${or_translate_lib.MR.t("timeframe")}"
                                      @or-mwc-input-changed="${t=>this.onTimeframeSelect(t)}"
                        ></or-mwc-input>
                        <div class="switchMwcInputContainer">
                            <span><or-translate value="dashboard.allowTimerangeSelect"></or-translate></span>
                            <or-mwc-input .type="${or_mwc_input.NZ.SWITCH}" style="margin: 0 -10px;" .value="${this.widgetConfig.showTimestampControls}"
                                          @or-mwc-input-changed="${t=>this.onTimeframeToggle(t)}"
                            ></or-mwc-input>
                        </div>
                    </div>
                </settings-panel>

                <settings-panel displayName="values" expanded="${!0}">
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <or-mwc-input .type="${or_mwc_input.NZ.SELECT}" style="width: 100%;" .options="${["absolute","percentage"]}" .value="${this.widgetConfig.deltaFormat}"
                                      label="${or_translate_lib.MR.t("dashboard.showValueAs")}"
                                      @or-mwc-input-changed="${t=>this.onDeltaFormatSelect(t)}"
                        ></or-mwc-input>
                        <or-mwc-input .type="${or_mwc_input.NZ.NUMBER}" style="width: 100%;" .value="${this.widgetConfig.decimals}" label="${or_translate_lib.MR.t("decimals")}"
                                      @or-mwc-input-changed="${t=>this.onDecimalsChange(t)}"
                        ></or-mwc-input>
                    </div>
                </settings-panel>

                <!-- -->
            </div>
        `}onAttributesSelect(t){if(this.widgetConfig.attributeRefs=t.detail.attributeRefs,1===t.detail.attributeRefs.length){const e=t.detail.attributeRefs[0],i=t.detail.assets.find((t=>t.id===e.id));this.setDisplayName(i?`${i.name} - ${e.name}`:`${e.name}`)}this.notifyConfigUpdate()}onTimeframeSelect(t){this.widgetConfig.period=t.detail.value,this.notifyConfigUpdate()}onTimeframeToggle(t){this.widgetConfig.showTimestampControls=t.detail.value,this.notifyConfigUpdate()}onDeltaFormatSelect(t){this.widgetConfig.deltaFormat=t.detail.value,this.notifyConfigUpdate()}onDecimalsChange(t){this.widgetConfig.decimals=t.detail.value,this.notifyConfigUpdate()}};KpiSettings=kpi_settings_decorate([(0,decorators.EM)("kpi-settings")],KpiSettings);var KpiWidget_1,kpi_widget_decorate=function(t,e,i,s){var o,r=arguments.length,d=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(d=(r<3?o(d):r>3?o(e,i,d):o(e,i))||d);return r>3&&d&&Object.defineProperty(e,i,d),d};let KpiWidget=KpiWidget_1=class extends OrAssetWidget{static getManifest(){return{displayName:"KPI",displayIcon:"label",minColumnWidth:1,minColumnHeight:1,getContentHtml:t=>new KpiWidget_1(t),getSettingsHtml:t=>new KpiSettings(t),getDefaultConfig:()=>({attributeRefs:[],period:"day",decimals:0,deltaFormat:"absolute",showTimestampControls:!1})}}refreshContent(t){this.loadAssets(this.widgetConfig.attributeRefs)}updated(t){if(super.updated(t),t.has("widgetConfig")&&this.widgetConfig){const t=this.widgetConfig.attributeRefs,e=null==t?void 0:t.filter((t=>this.isAttributeRefLoaded(t)));(null==e?void 0:e.length)!==(t?t.length:0)&&this.loadAssets(t)}return super.updated(t)}loadAssets(t){this.fetchAssets(t).then((e=>{this.loadedAssets=e,this.assetAttributes=null==t?void 0:t.map((t=>{const i=e.findIndex((e=>e.id===t.id)),s=i>=0?e[i]:void 0;return s&&s.attributes?[i,s.attributes[t.name]]:void 0})).filter((t=>!!t))}))}render(){var t;return lit.qy`
            <div style="height: 100%; overflow: hidden;">
                <or-attribute-card .assets="${this.loadedAssets}" .assetAttributes="${this.assetAttributes}" .period="${this.widgetConfig.period}"
                                   .deltaFormat="${this.widgetConfig.deltaFormat}" .mainValueDecimals="${this.widgetConfig.decimals}"
                                   showControls="${null===(t=this.widgetConfig)||void 0===t?void 0:t.showTimestampControls}" showTitle="${!1}" style="height: 100%;">
                </or-attribute-card>
            </div>
        `}};KpiWidget=KpiWidget_1=kpi_widget_decorate([(0,decorators.EM)("kpi-widget")],KpiWidget);var ref=__webpack_require__("../../../node_modules/lit/directives/ref.js"),assettypes_panel_decorate=function(e,t,s,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,s,n):o(t,s))||n);return r>3&&n&&Object.defineProperty(t,s,n),n},assettypes_panel_awaiter=function(e,t,s,i){return new(s||(s=Promise))((function(o,r){function n(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,a)}l((i=i.apply(e,t||[])).next())}))};class AssetTypeSelectEvent extends CustomEvent{constructor(e){super(AssetTypeSelectEvent.NAME,{bubbles:!0,composed:!0,detail:e})}}AssetTypeSelectEvent.NAME="assettype-select";class AssetIdsSelectEvent extends CustomEvent{constructor(e){super(AssetIdsSelectEvent.NAME,{bubbles:!0,composed:!0,detail:e})}}AssetIdsSelectEvent.NAME="assetids-select";class AttributeNamesSelectEvent extends CustomEvent{constructor(e){super(AttributeNamesSelectEvent.NAME,{bubbles:!0,composed:!0,detail:e})}}AttributeNamesSelectEvent.NAME="attributenames-select";const assettypes_panel_styling=lit.AH`
  .switchMwcInputContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;let AssettypesPanel=class extends lit.WF{constructor(){super(...arguments),this.config={attributes:{enabled:!0}},this._attributeSelectList=[],this._loadedAssetTypes=model_lib.u0.getAssetDescriptors().filter((e=>"asset"===e.descriptorType)),this.assetTreeDataProvider=()=>assettypes_panel_awaiter(this,void 0,void 0,(function*(){const e={realm:{name:core_lib.Ay.displayRealm},select:{attributes:[]}},t=(yield core_lib.Ay.rest.api.AssetResource.queryAssets(e)).data,s=t.filter((e=>e.type===this.assetType)).map((e=>e.path)),i=[...new Set([].concat(...s))];return t.filter((e=>i.includes(e.id)))}))}static get styles(){return[assettypes_panel_styling]}willUpdate(e){super.willUpdate(e),e.has("assetType")&&this.assetType&&(this._attributeSelectList=this.getAttributesByType(this.assetType),this.dispatchEvent(new AssetTypeSelectEvent(this.assetType))),e.has("assetIds")&&this.assetIds&&this.dispatchEvent(new AssetIdsSelectEvent(this.assetIds)),e.has("attributeNames")&&this.attributeNames&&this.dispatchEvent(new AttributeNamesSelectEvent(this.attributeNames))}render(){var e,t;return lit.qy`
            <div style="display: flex; flex-direction: column; gap: 8px;">

                <!-- Select asset type -->
                <div>
                    ${this._loadedAssetTypes.length>0?(0,or_mwc_menu.Xj)(this.getAssetTypeTemplate(),this.mapDescriptors(this._loadedAssetTypes,{text:or_translate_lib.MR.t("filter.assetTypeMenuNone"),value:"",icon:"selection-ellipse"}),void 0,(e=>{this.assetType=e}),void 0,!1,!0,!0,!0):lit.qy``}
                </div>

                <!-- Select one or more assets -->
                ${(0,when.z)(null===(e=this.config.assets)||void 0===e?void 0:e.enabled,(()=>{var e;const t="string"==typeof this.assetIds?[this.assetIds]:this.assetIds;return lit.qy`
                        <div>
                            <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" .label="${((null===(e=this.assetIds)||void 0===e?void 0:e.length)||0)+" "+or_translate_lib.MR.t("assets")}" .disabled="${!this.assetType}" fullWidth outlined comfortable style="width: 100%;"
                                          @or-mwc-input-changed="${e=>{var s;return this._openAssetSelector(this.assetType,t,null===(s=this.config.assets)||void 0===s?void 0:s.multi)}}"
                            ></or-mwc-input>
                        </div>
                    `}))}

                <!-- Select one or more attributes -->
                ${(0,when.z)(null===(t=this.config.attributes)||void 0===t?void 0:t.enabled,(()=>{var e;const t=this._attributeSelectList.map((e=>[e[0],e[1]]));return lit.qy`
                        <div>
                            <or-mwc-input .type="${or_mwc_input.NZ.SELECT}" label="${or_translate_lib.MR.t("filter.attributeLabel")}" .disabled="${!this.assetType}" style="width: 100%;"
                                          .options="${t}" .searchProvider="${e=>assettypes_panel_awaiter(this,void 0,void 0,(function*(){return e?t.filter((t=>t[1].toLowerCase().includes(e.toLowerCase()))):t}))}" .multiple="${null===(e=this.config.attributes)||void 0===e?void 0:e.multi}" .value="${this.attributeNames}"
                                          @or-mwc-input-changed="${e=>{this.attributeNames=e.detail.value}}"
                            ></or-mwc-input>
                        </div>
                    `}))}
            </div>
        `}getAssetTypeTemplate(){if(this.assetType){const e=this._loadedAssetTypes.find((e=>e.name===this.assetType));return e?this.getSelectedHeader(e):this.getSelectHeader()}return this.getSelectHeader()}getSelectHeader(){return lit.qy`
            <or-mwc-input style="width:100%;" type="${or_mwc_input.NZ.TEXT}" readonly .label="${or_translate_lib.MR.t("filter.assetTypeLabel")}"
                          iconTrailing="menu-down" iconColor="rgba(0, 0, 0, 0.87)" icon="selection-ellipse"
                          value="${or_translate_lib.MR.t("filter.assetTypeNone")}">
            </or-mwc-input>
        `}getSelectedHeader(e){return lit.qy`
            <or-mwc-input style="width:100%;" type="${or_mwc_input.NZ.TEXT}" readonly .label="${or_translate_lib.MR.t("filter.assetTypeLabel")}"
                          .iconColor="${e.colour}" iconTrailing="menu-down" icon="${e.icon}"
                          value="${core_lib.J0.getAssetTypeLabel(e)}">
            </or-mwc-input>
        `}mapDescriptors(e,t){const s=e.map((e=>({styleMap:{"--or-icon-fill":e.colour?"#"+e.colour:"unset"},icon:e.icon,text:core_lib.J0.getAssetTypeLabel(e),value:e.name,data:e}))).sort(core_lib.J0.sortByString((e=>e.text)));return t&&s.splice(0,0,t),s}getAttributesByType(e){var t;const s=model_lib.u0.getAssetDescriptor(e);if(s){const i=model_lib.u0.getAssetTypeInfo(s);if(null==i?void 0:i.attributeDescriptors){const s=null===(t=this.config.attributes)||void 0===t?void 0:t.valueTypes;return(s?i.attributeDescriptors.filter((e=>s.indexOf(e.type)>-1)):i.attributeDescriptors).map((t=>{const s=core_lib.J0.getAttributeLabel(t,void 0,e,!1);return[t.name,s]})).sort(core_lib.J0.sortByString((e=>e[1])))}}}_openAssetSelector(e,t,s=!1){const i=(0,ref._)(),o={select:{types:[e],multiSelect:s}};(0,or_mwc_dialog.ui)((new or_mwc_dialog.X$).setHeading(or_translate_lib.MR.t("linkedAssets")).setContent(lit.qy`
                <div style="width: 400px;">
                    <or-asset-tree ${(0,ref.K)(i)} .dataProvider="${this.assetTreeDataProvider}" expandAllNodes
                                   id="chart-asset-tree" readonly .config="${o}" .selectedIds="${t}"
                                   .showSortBtn="${!1}" .showFilter="${!1}" .checkboxes="${s}"
                    ></or-asset-tree>
                </div>
            `).setActions([{default:!0,actionName:"cancel",content:"cancel"},{actionName:"ok",content:"ok",action:()=>{const e=i.value;(null==e?void 0:e.selectedIds)&&(this.assetIds=s?e.selectedIds:e.selectedIds[0])}}]).setDismissAction({actionName:"cancel"}))}};assettypes_panel_decorate([(0,decorators.MZ)()],AssettypesPanel.prototype,"assetType",void 0),assettypes_panel_decorate([(0,decorators.MZ)()],AssettypesPanel.prototype,"config",void 0),assettypes_panel_decorate([(0,decorators.MZ)()],AssettypesPanel.prototype,"assetIds",void 0),assettypes_panel_decorate([(0,decorators.MZ)()],AssettypesPanel.prototype,"attributeNames",void 0),assettypes_panel_decorate([(0,decorators.wk)()],AssettypesPanel.prototype,"_attributeSelectList",void 0),assettypes_panel_decorate([(0,decorators.wk)()],AssettypesPanel.prototype,"_loadedAssetTypes",void 0),AssettypesPanel=assettypes_panel_decorate([(0,decorators.EM)("assettypes-panel")],AssettypesPanel);var if_defined=__webpack_require__("../../../node_modules/lit/directives/if-defined.js"),thresholds_panel_decorate=function(e,t,o,s){var l,r=arguments.length,i=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,s);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(i=(r<3?l(i):r>3?l(t,o,i):l(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};class ThresholdChangeEvent extends CustomEvent{constructor(e){super(ThresholdChangeEvent.NAME,{bubbles:!0,composed:!0,detail:e})}}ThresholdChangeEvent.NAME="threshold-change";class TextColorsChangeEvent extends CustomEvent{constructor(e){super(TextColorsChangeEvent.NAME,{bubbles:!0,composed:!0,detail:e})}}TextColorsChangeEvent.NAME="text-colors-change";class BoolColorsChangeEvent extends CustomEvent{constructor(e){super(BoolColorsChangeEvent.NAME,{bubbles:!0,composed:!0,detail:e})}}BoolColorsChangeEvent.NAME="bool-colors-change";const thresholds_panel_styling=lit.AH`

  #thresholds-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .threshold-list-item {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .threshold-list-item-colour {
    height: 100%;
    padding: 0 4px 0 0;
  }

  .threshold-list-item:hover .button-clear {
    visibility: visible;
  }

  .button-clear {
    background: none;
    visibility: hidden;
    color: var(--or-app-color5, ${(0,lit.iz)(core_lib.Id)});
    --or-icon-fill: var(--or-app-color5, ${(0,lit.iz)(core_lib.Id)});
    display: inline-block;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  .button-clear:hover {
    --or-icon-fill: var(--or-app-color4);
  }

`;let ThresholdsPanel=class extends lit.WF{constructor(){super(...arguments),this.thresholds=[],this.textColors=[]}static get styles(){return[thresholds_panel_styling,style_style]}updated(e){e.has("thresholds")&&this.thresholds&&this.dispatchEvent(new ThresholdChangeEvent(this.thresholds)),e.has("textColors")&&this.textColors&&this.dispatchEvent(new TextColorsChangeEvent(this.textColors)),e.has("boolColors")&&this.boolColors&&this.dispatchEvent(new BoolColorsChangeEvent(this.boolColors))}render(){return lit.qy`
            <div id="thresholds-list" class="expanded-panel">

                <!-- Thresholds by number -->
                ${"number"===this.valueType||"positiveInteger"===this.valueType||"positiveNumber"===this.valueType||"negativeInteger"===this.valueType||"negativeNumber"===this.valueType?lit.qy`
                    ${this.thresholds.sort(((e,t)=>e[0]<t[0]?-1:1)).map(((e,t)=>lit.qy`
                            <div class="threshold-list-item">
                                <div class="threshold-list-item-colour">
                                    <or-mwc-input type="${or_mwc_input.NZ.COLOUR}" value="${e[1]}"
                                                  @or-mwc-input-changed="${e=>{this.thresholds[t][1]=e.detail.value,this.requestUpdate("thresholds")}}"
                                    ></or-mwc-input>
                                </div>
                                <or-mwc-input type="${or_mwc_input.NZ.NUMBER}" comfortable .value="${e[0]}"
                                              ?disabled="${0===t&&this.max}"
                                              .min="${(0,if_defined.J)(this.min)}" .max="${(0,if_defined.J)(this.max)}"
                                              @or-mwc-input-changed="${e=>{(!this.min||e.detail.value>=this.min)&&(!this.max||e.detail.value<=this.max)&&(this.thresholds[t][0]=e.detail.value,this.requestUpdate("thresholds"))}}"
                                ></or-mwc-input>
                                ${0===t?lit.qy`
                                    <button class="button-clear"
                                            style="margin-left: 8px;">
                                        <or-icon icon="lock" style="--or-icon-fill: var(--or-app-color5, ${(0,lit.iz)(core_lib.Id)});"></or-icon>
                                    </button>
                                `:lit.qy`
                                    <button class="button-clear"
                                            style="margin-left: 8px;"
                                            @click="${()=>{this.removeThreshold(e)}}">
                                        <or-icon icon="close-circle"></or-icon>
                                    </button>
                                `}
                            </div>
                        `))}
                    <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" label="threshold" icon="plus"
                                  @or-mwc-input-changed="${()=>this.addNewThreshold()}">
                    </or-mwc-input>
                `:null}

                <!-- Thresholds by boolean -->
                ${"boolean"===this.valueType?lit.qy`
                    <div class="threshold-list-item">
                        <div class="threshold-list-item-colour">
                            <or-mwc-input type="${or_mwc_input.NZ.COLOUR}" value="${this.boolColors.true}"
                                          @or-mwc-input-changed="${e=>{this.boolColors.true=e.detail.value,this.requestUpdate("boolColors")}}"
                            ></or-mwc-input>
                        </div>
                        <or-mwc-input type="${or_mwc_input.NZ.TEXT}" comfortable .value="${"True"}" .readonly="${!0}"
                        ></or-mwc-input>
                    </div>
                    <div class="threshold-list-item">
                        <div class="threshold-list-item-colour">
                            <or-mwc-input type="${or_mwc_input.NZ.COLOUR}" value="${this.boolColors.false}"
                                          @or-mwc-input-changed="${e=>{this.boolColors.false=e.detail.value,this.requestUpdate("boolColors")}}"
                            ></or-mwc-input>
                        </div>
                        <or-mwc-input type="${or_mwc_input.NZ.TEXT}" comfortable .value="${"False"}" .readonly="${!0}"
                        ></or-mwc-input>
                    </div>
                `:null}

                <!-- Thresholds by string -->
                ${"text"===this.valueType&&this.textColors?lit.qy`
                    ${this.textColors.map(((e,t)=>lit.qy`
                            <div class="threshold-list-item">
                                <div class="threshold-list-item-colour">
                                    <or-mwc-input type="${or_mwc_input.NZ.COLOUR}" value="${e[1]}"
                                                  @or-mwc-input-changed="${e=>{this.textColors[t][1]=e.detail.value,this.requestUpdate("textColors")}}"
                                    ></or-mwc-input>
                                </div>
                                <or-mwc-input type="${or_mwc_input.NZ.TEXT}" comfortable .value="${e[0]}"
                                              @or-mwc-input-changed="${e=>{this.textColors[t][0]=e.detail.value,this.requestUpdate("textColors")}}"

                                ></or-mwc-input>
                                ${0===t?lit.qy`
                                    <button class="button-clear"
                                            style="margin-left: 8px;">
                                        <or-icon icon="lock" style="--or-icon-fill: var(--or-app-color5, ${(0,lit.iz)(core_lib.Id)});"></or-icon>
                                    </button>
                                `:lit.qy`
                                    <button class="button-clear"
                                            style="margin-left: 8px;"
                                            @click="${()=>{this.removeThreshold(e)}}">
                                        <or-icon icon="close-circle"></or-icon>
                                    </button>
                                `}
                            </div>
                        `))}
                    <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" label="threshold" icon="plus"
                                  @or-mwc-input-changed="${()=>this.addNewThreshold()}">
                    </or-mwc-input>
                `:null}
            </div>
        `}removeThreshold(e){"number"==typeof e[0]?this.thresholds=this.thresholds.filter((t=>t!==e)):this.textColors=this.textColors.filter((t=>t!==e))}addThreshold(e){"number"==typeof e[0]?(this.thresholds.push(e),this.requestUpdate("thresholds")):(this.textColors.push(e),this.requestUpdate("textColors"))}addNewThreshold(){if("text"===this.valueType)this.addThreshold(["new","#000000"]);else{const e=this.thresholds[this.thresholds.length-1][0]+10;this.addThreshold([!this.max||e<=this.max?e:this.max,"#000000"])}this.updateComplete.then((()=>{var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("thresholds-list");Array.from(t.children)[t.children.length-2].children[1].setAttribute("focused","true")}))}};thresholds_panel_decorate([(0,decorators.MZ)()],ThresholdsPanel.prototype,"thresholds",void 0),thresholds_panel_decorate([(0,decorators.MZ)()],ThresholdsPanel.prototype,"textColors",void 0),thresholds_panel_decorate([(0,decorators.MZ)()],ThresholdsPanel.prototype,"boolColors",void 0),thresholds_panel_decorate([(0,decorators.MZ)()],ThresholdsPanel.prototype,"min",void 0),thresholds_panel_decorate([(0,decorators.MZ)()],ThresholdsPanel.prototype,"max",void 0),thresholds_panel_decorate([(0,decorators.MZ)()],ThresholdsPanel.prototype,"valueType",void 0),ThresholdsPanel=thresholds_panel_decorate([(0,decorators.EM)("thresholds-panel")],ThresholdsPanel);var maplibre_gl=__webpack_require__("../../../node_modules/maplibre-gl/dist/maplibre-gl.js"),map_settings_decorate=function(t,e,i,s){var n,o=arguments.length,a=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a},map_settings_awaiter=function(t,e,i,s){return new(i||(i=Promise))((function(n,o){function a(t){try{l(s.next(t))}catch(t){o(t)}}function r(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,r)}l((s=s.apply(t,e||[])).next())}))};const map_settings_styling=lit.AH`
  .switchMwcInputContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;let MapSettings=class extends AssetWidgetSettings{static get styles(){return[...super.styles,map_settings_styling]}render(){return lit.qy`
            <div>

                <!-- Map settings -->
                <settings-panel displayName="configuration.mapSettings" expanded="${!0}">
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <div>
                            <or-mwc-input .type="${or_mwc_input.NZ.NUMBER}" style="width: 100%;"
                                          .value="${this.widgetConfig.zoom}" label="${or_translate_lib.MR.t("dashboard.zoom")}"
                                          @or-mwc-input-changed="${t=>this.onZoomUpdate(t)}"
                            ></or-mwc-input>
                        </div>
                        <div style="display: flex; gap: 8px;">
                            <or-mwc-input .type="${or_mwc_input.NZ.TEXT}" style="width: 100%;"
                                          .value="${this.widgetConfig.center?Object.values(this.widgetConfig.center)[0]+", "+Object.values(this.widgetConfig.center)[1]:void 0}"
                                          label="${or_translate_lib.MR.t("dashboard.center")}"
                                          @or-mwc-input-changed="${t=>this.onCenterUpdate(t)}"
                            ></or-mwc-input>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span><or-translate value="dashboard.showGeoJson"></or-translate></span>
                            <or-mwc-input .type="${or_mwc_input.NZ.SWITCH}" style="width: 70px;"
                                          .value="${this.widgetConfig.showGeoJson}"
                                          @or-mwc-input-changed="${t=>this.onGeoJsonToggle(t)}"
                            ></or-mwc-input>
                        </div>
                    </div>
                </settings-panel>

                <!-- Panel where Asset type and the selected attribute can be customized -->
                <settings-panel displayName="attributes" expanded="${!0}">
                    <assettypes-panel .assetType="${this.widgetConfig.assetType}" .attributeNames="${this.widgetConfig.attributeName}" .config="${{attributes:{enabled:!0,valueTypes:["boolean","number","positiveInteger","positiveNumber","negativeInteger","negativeNumber","text"]}}}"
                                      @assettype-select="${t=>this.onAssetTypeSelect(t)}"
                                      @attributenames-select="${t=>this.onAttributeNameSelect(t)}"
                    ></assettypes-panel>

                    <!-- Other settings like labels and units-->
                    <div>
                        <div class="switchMwcInputContainer">
                            <span><or-translate value="dashboard.showLabels"></or-translate></span>
                            <or-mwc-input .type="${or_mwc_input.NZ.SWITCH}" style="width: 70px;"
                                          .value="${this.widgetConfig.showLabels}" .disabled="${!this.widgetConfig.assetType}"
                                          @or-mwc-input-changed="${t=>this.onShowLabelsToggle(t)}"
                            ></or-mwc-input>
                        </div>
                        <div class="switchMwcInputContainer">
                            <span><or-translate value="dashboard.showUnits"></or-translate></span>
                            <or-mwc-input .type="${or_mwc_input.NZ.SWITCH}" style="width: 70px;"
                                          .value="${this.widgetConfig.showUnits}" .disabled="${!this.widgetConfig.showLabels||!this.widgetConfig.assetType}"
                                          @or-mwc-input-changed="${t=>this.onShowUnitsToggle(t)}"
                            ></or-mwc-input>
                        </div>
                    </div>
                </settings-panel>

                <!-- List of customizable thresholds -->
                ${(0,when.z)(this.widgetConfig.assetIds.length>0,(()=>lit.qy`
                    <settings-panel displayName="thresholds" expanded="${!0}">
                        <thresholds-panel .thresholds="${this.widgetConfig.thresholds}" .valueType="${this.widgetConfig.valueType}" style="padding-bottom: 12px;"
                                          .min="${this.widgetConfig.min}" .max="${this.widgetConfig.max}"
                                          @threshold-change="${t=>this.onThresholdsChange(t)}">
                        </thresholds-panel>
                    </settings-panel>
                `))}
            </div>
        `}onZoomUpdate(t){this.widgetConfig.zoom=t.detail.value,this.notifyConfigUpdate()}onCenterUpdate(t){if(t.detail.value){const e=t.detail.value.split(/[, ]/).filter((t=>!!t));if(2===e.length){const t=new maplibre_gl.LngLat(Number.parseFloat(e[0]),Number.parseFloat(e[1]));this.widgetConfig.center=t,this.notifyConfigUpdate()}}}onGeoJsonToggle(t){this.widgetConfig.showGeoJson=t.detail.value,this.notifyConfigUpdate()}onAssetTypeSelect(t){this.widgetConfig.assetType!==t.detail&&(this.widgetConfig.attributeName=void 0,this.widgetConfig.assetIds=[],this.widgetConfig.showLabels=!1,this.widgetConfig.showUnits=!1,this.widgetConfig.boolColors={type:"boolean",false:"#ef5350",true:"#4caf50"},this.widgetConfig.textColors=[["example","#4caf50"],["example2","#ff9800"]],this.widgetConfig.thresholds=[[0,"#4caf50"],[75,"#ff9800"],[90,"#ef5350"]],this.widgetConfig.assetType=t.detail,this.notifyConfigUpdate())}onAttributeNameSelect(t){return map_settings_awaiter(this,void 0,void 0,(function*(){const e=t.detail;this.widgetConfig.attributeName=e,yield core_lib.Ay.rest.api.AssetResource.queryAssets({realm:{name:core_lib.Ay.displayRealm},select:{attributes:[e,"location"]},types:[this.widgetConfig.assetType]}).then((t=>{this.widgetConfig.assetIds=t.data.map((t=>t.id)),this.widgetConfig.valueType=t.data.length>0?t.data[0].attributes[e].type:"text"})).catch((t=>{console.error(t),(0,or_mwc_snackbar.td)(void 0,"errorOccurred")})),this.notifyConfigUpdate()}))}onShowLabelsToggle(t){this.widgetConfig.showLabels=t.detail.value,this.notifyConfigUpdate()}onShowUnitsToggle(t){this.widgetConfig.showUnits=t.detail.value,this.notifyConfigUpdate()}onThresholdsChange(t){this.widgetConfig.thresholds=t.detail,this.notifyConfigUpdate()}};MapSettings=map_settings_decorate([(0,decorators.EM)("map-settings")],MapSettings);var MapWidget_1,map_widget_decorate=function(e,t,s,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r<3?o(a):r>3?o(t,s,a):o(t,s))||a);return r>3&&a&&Object.defineProperty(t,s,a),a},map_widget_awaiter=function(e,t,s,i){return new(s||(s=Promise))((function(o,r){function a(e){try{l(i.next(e))}catch(e){r(e)}}function n(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,n)}l((i=i.apply(e,t||[])).next())}))};let MapWidget=MapWidget_1=class extends OrAssetWidget{constructor(){super(...arguments),this.markers={}}static getManifest(){return{displayName:"Map",displayIcon:"map",minColumnWidth:2,minColumnHeight:2,getContentHtml:e=>new MapWidget_1(e),getSettingsHtml:e=>new MapSettings(e),getDefaultConfig:()=>({attributeRefs:[],showLabels:!1,showUnits:!1,showGeoJson:!0,boolColors:{type:"boolean",false:"#ef5350",true:"#4caf50"},textColors:[["example","4caf50"],["example2","ef5350"]],thresholds:[[0,"#4caf50"],[75,"#ff9800"],[90,"#ef5350"]],assetTypes:[],assetType:void 0,assetIds:[],attributes:[]})}}refreshContent(e){this.loadAssets()}updated(e){e.has("widgetConfig")&&this.widgetConfig&&this.loadAssets()}loadAssets(){return map_widget_awaiter(this,void 0,void 0,(function*(){this.widgetConfig.assetType&&this.widgetConfig.attributeName&&this.fetchAssetsByType([this.widgetConfig.assetType],this.widgetConfig.attributeName).then((e=>{this.loadedAssets=e}))}))}fetchAssetsByType(e,t){return map_widget_awaiter(this,void 0,void 0,(function*(){let s=[];return yield core_lib.Ay.rest.api.AssetResource.queryAssets({realm:{name:core_lib.Ay.displayRealm},select:{attributes:[t,"location"]},types:e}).then((e=>{s=e.data,this.markers={}})).catch((e=>{console.error(e),(0,or_mwc_snackbar.td)(void 0,"errorOccurred")})),s}))}render(){return lit.qy`
            <div style="height: 100%; display: flex; flex-direction: column; overflow: hidden;">
                <or-map id="miniMap" class="or-map" .zoom="${this.widgetConfig.zoom}" .center="${this.widgetConfig.center}" .showGeoJson="${this.widgetConfig.showGeoJson}" style="flex: 1;">
                    ${(0,when.z)(this.loadedAssets,(()=>this.getMarkerTemplates()))}
                </or-map>
            </div>
        `}getMarkerTemplates(){return this.loadedAssets.filter((e=>{if(!e.attributes)return!1;const t=e.attributes.location;return!(t&&t.meta&&t.meta.hasOwnProperty("showOnDashboard")&&!core_lib.J0.getMetaValue("showOnDashboard",t))})).map((e=>{if(this.markers)if(this.markers[e.type]={attributeName:this.widgetConfig.attributeName},this.markers[e.type].showUnits=this.widgetConfig.showUnits,this.markers[e.type].showLabel=this.widgetConfig.showLabels,"boolean"==this.widgetConfig.valueType)this.widgetConfig.boolColors.true=this.widgetConfig.boolColors.true.replace("#",""),this.widgetConfig.boolColors.false=this.widgetConfig.boolColors.false.replace("#",""),this.markers[e.type].colours=this.widgetConfig.boolColors;else if("text"==this.widgetConfig.valueType){var t={type:"string"};this.widgetConfig.textColors.map((e=>{t[e[0]]=e[1].replace("#","")})),this.markers[e.type].colours=t}else{var s=[];this.widgetConfig.thresholds.sort(((e,t)=>e[0]>t[0]?-1:1)).map(((e,t)=>{var i={min:e[0],colour:e[1].replace("#","")};s.push(i)}));var i={type:"range",ranges:s};this.markers[e.type].colours=i}return lit.qy`
                <or-map-marker-asset .asset="${e}" .config="${this.markers}"></or-map-marker-asset>
            `}))}};MapWidget=MapWidget_1=map_widget_decorate([(0,decorators.EM)("map-widget")],MapWidget);var attribute_input_settings_decorate=function(t,e,i,s){var n,r=arguments.length,a=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const attribute_input_settings_styling=lit.AH`
  .switch-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;let AttributeInputSettings=class extends AssetWidgetSettings{static get styles(){return[...super.styles,attribute_input_settings_styling]}render(){return lit.qy`
            <div>
                <!-- Attribute selection -->
                <settings-panel displayName="attributes" expanded="${!0}">
                    <attributes-panel .attributeRefs="${this.widgetConfig.attributeRefs}" style="padding-bottom: 12px;"
                                      @attribute-select="${t=>this.onAttributesSelect(t)}"
                    ></attributes-panel>
                </settings-panel>

                <!-- Other settings -->
                <settings-panel displayName="settings" expanded="${!0}">
                    <div>
                        <!-- Toggle readonly -->
                        <div class="switch-container">
                            <span><or-translate value="dashboard.userCanEdit"></or-translate></span>
                            <or-mwc-input .type="${or_mwc_input.NZ.SWITCH}" style="margin: 0 -10px;" .value="${!this.widgetConfig.readonly}"
                                          @or-mwc-input-changed="${t=>this.onReadonlyToggle(t)}"
                            ></or-mwc-input>
                        </div>
                        <!-- Toggle helper text -->
                        <div class="switch-container">
                            <span><or-translate value="dashboard.showHelperText"></or-translate></span>
                            <or-mwc-input .type="${or_mwc_input.NZ.SWITCH}" style="margin: 0 -10px;" .value="${this.widgetConfig.showHelperText}"
                                          @or-mwc-input-changed="${t=>this.onHelperTextToggle(t)}"
                            ></or-mwc-input>
                        </div>
                    </div>
                </settings-panel>
            </div>
        `}onAttributesSelect(t){if(this.widgetConfig.attributeRefs=t.detail.attributeRefs,1===t.detail.attributeRefs.length){const e=t.detail.assets.find((e=>e.id===t.detail.attributeRefs[0].id));e&&this.setDisplayName(e.name)}this.notifyConfigUpdate()}onReadonlyToggle(t){this.widgetConfig.readonly=!t.detail.value,this.notifyConfigUpdate()}onHelperTextToggle(t){this.widgetConfig.showHelperText=t.detail.value,this.notifyConfigUpdate()}};AttributeInputSettings=attribute_input_settings_decorate([(0,decorators.EM)("attribute-input-settings")],AttributeInputSettings);__webpack_require__("../../component/or-attribute-input/lib/index.js");var AttributeInputWidget_1,attribute_input_widget_decorate=function(t,e,i,r){var s,n=arguments.length,o=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var d=t.length-1;d>=0;d--)(s=t[d])&&(o=(n<3?s(o):n>3?s(e,i,o):s(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};const attribute_input_widget_styling=lit.AH`
  #widget-wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .attr-input {
    width: 100%;
    box-sizing: border-box;
  }
`;let AttributeInputWidget=AttributeInputWidget_1=class extends OrAssetWidget{static getManifest(){return{displayName:"Attribute",displayIcon:"form-textbox",getContentHtml:t=>new AttributeInputWidget_1(t),getDefaultConfig:()=>({attributeRefs:[],readonly:!1,showHelperText:!0}),getSettingsHtml:t=>new AttributeInputSettings(t)}}refreshContent(t){this.widgetConfig=JSON.parse(JSON.stringify(this.widgetConfig))}static get styles(){return[...super.styles,attribute_input_widget_styling]}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.resizeObserver)||void 0===t||t.disconnect(),delete this.resizeObserver}updated(t){if(t.has("widgetConfig")&&this.widgetConfig){const t=this.widgetConfig.attributeRefs;t.length>0&&!this.isAttributeRefLoaded(t[0])&&this.loadAssets(t)}return!this.resizeObserver&&this.widgetWrapperElem&&(this.resizeObserver=new ResizeObserver((0,lodash.throttle)((()=>{window.dispatchEvent(new Event("resize"))}),200)),this.resizeObserver.observe(this.widgetWrapperElem)),super.updated(t)}loadAssets(t){this.fetchAssets(t).then((t=>{this.loadedAssets=t}))}render(){var t;const e=this.widgetConfig,i=e.attributeRefs.length>0&&(null===(t=this.loadedAssets[0])||void 0===t?void 0:t.attributes)?this.loadedAssets[0].attributes[e.attributeRefs[0].name]:void 0,r=core_lib.J0.getMetaValue("readOnly",i);return lit.qy`
            ${(0,when.z)(e.attributeRefs.length>0&&i&&this.loadedAssets&&this.loadedAssets.length>0,(()=>{var t,s;return lit.qy`
                    <div id="widget-wrapper">
                        <or-attribute-input class="attr-input" fullWidth
                                            .assetType="${null===(t=this.loadedAssets[0])||void 0===t?void 0:t.type}"
                                            .attribute="${i}"
                                            .assetId="${null===(s=this.loadedAssets[0])||void 0===s?void 0:s.id}"
                                            .disabled="${!this.loadedAssets}"
                                            .readonly="${e.readonly||r||this.getEditMode()}"
                                            .hasHelperText="${e.showHelperText}"
                        ></or-attribute-input>
                    </div>
                `}),(()=>lit.qy`
                <div style="height: 100%; display: flex; justify-content: center; align-items: center;">
                    <span><or-translate value="noAttributesConnected"></or-translate></span>
                </div>
            `))}
        `}};attribute_input_widget_decorate([(0,decorators.P)("#widget-wrapper")],AttributeInputWidget.prototype,"widgetWrapperElem",void 0),attribute_input_widget_decorate([(0,decorators.YG)(".attr-input")],AttributeInputWidget.prototype,"attributeInputElems",void 0),AttributeInputWidget=AttributeInputWidget_1=attribute_input_widget_decorate([(0,decorators.EM)("attribute-input-widget")],AttributeInputWidget);var table_settings_decorate=function(t,e,s,i){var n,a=arguments.length,o=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(o=(a<3?n(o):a>3?n(e,s,o):n(e,s))||o);return a>3&&o&&Object.defineProperty(e,s,o),o};const table_settings_styling=lit.AH`
  .customMwcInputContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;let TableSettings=class extends AssetWidgetSettings{static get styles(){return[...super.styles,table_settings_styling]}render(){return lit.qy`
            <div>
                <!-- Asset type, assets, and attribute picker -->
                <settings-panel displayName="attributes" expanded="${!0}">
                    <div style="padding-bottom: 12px;">
                        <assettypes-panel .assetType="${this.widgetConfig.assetType}" .config="${{assets:{enabled:!0,multi:!0},attributes:{enabled:!0,multi:!0}}}"
                                          .assetIds="${this.widgetConfig.assetIds}" .attributeNames="${this.widgetConfig.attributeNames}"
                                          @assettype-select="${t=>this.onAssetTypeSelect(t)}"
                                          @assetids-select="${t=>this.onAssetIdsSelect(t)}"
                                          @attributenames-select="${t=>this.onAttributesSelect(t)}"
                        ></assettypes-panel>
                    </div>
                </settings-panel>
                
                <!-- Table settings like amount of rows -->
                <settings-panel displayName="dashboard.tableSettings" expanded="${!0}">
                    <div style="padding-bottom: 12px;">
                        <div class="customMwcInputContainer">
                            <span style="min-width: 180px"><or-translate value="dashboard.numberOfRows"></or-translate></span>
                            <or-mwc-input type="${or_mwc_input.NZ.SELECT}" .options="${[10,25,100]}" .value="${this.widgetConfig.tableSize}"
                                          @or-mwc-input-changed="${t=>this.onTableSizeSelect(t)}"
                            ></or-mwc-input>
                        </div>
                    </div>
                </settings-panel>
            </div>
        `}onAssetTypeSelect(t){this.widgetConfig.assetType=t.detail,this.widgetConfig.assetIds=[],this.widgetConfig.attributeNames=[],this.notifyConfigUpdate()}onAssetIdsSelect(t){this.widgetConfig.assetIds=t.detail,this.notifyConfigUpdate()}onAttributesSelect(t){this.widgetConfig.attributeNames=t.detail,this.notifyConfigUpdate()}onTableSizeSelect(t){const e=t.detail.value||10;this.widgetConfig.tableSize=e,this.widgetConfig.tableOptions=10!==e?[e]:[10,25,100],this.notifyConfigUpdate()}};TableSettings=table_settings_decorate([(0,decorators.EM)("table-settings")],TableSettings);__webpack_require__("../../component/or-mwc-components/lib/or-mwc-table.js");var TableWidget_1,table_widget_decorate=function(t,e,i,s){var o,r=arguments.length,a=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const table_widget_styling=lit.AH`
    #widget-wrapper {
      height: 100%;
      overflow: hidden;
    }
`;let TableWidget=TableWidget_1=class extends OrAssetWidget{static getManifest(){return{displayName:"Table",displayIcon:"table",getContentHtml:t=>new TableWidget_1(t),getDefaultConfig:()=>({assetType:void 0,assetIds:[],attributeNames:[],tableSize:10,tableOptions:[10,25,100]}),getSettingsHtml:t=>new TableSettings(t)}}static get styles(){return[...super.styles,table_widget_styling]}refreshContent(t){this.widgetConfig=JSON.parse(JSON.stringify(this.widgetConfig))}willUpdate(t){return t.has("widgetConfig")&&this.widgetConfig&&this.loadAssets(),super.willUpdate(t)}loadAssets(){this.widgetConfig.assetIds.find((t=>!this.isAssetLoaded(t)))&&this.queryAssets({ids:this.widgetConfig.assetIds,select:{attributes:this.widgetConfig.attributeNames}}).then((t=>{this.loadedAssets=t}))}getColumns(t){const e=this.loadedAssets[0],i=t.map((t=>{var i,s;let o=t,r=!1;if(this.widgetConfig.assetType&&e&&e.attributes&&e.attributes[t]){const a=model_lib.u0.getAttributeDescriptor(t,this.widgetConfig.assetType);o=core_lib.J0.getAttributeLabel(e.attributes[t],a,this.widgetConfig.assetType,!0),r=(null===(i=null==a?void 0:a.format)||void 0===i?void 0:i.asNumber)||(null===(s=null==a?void 0:a.format)||void 0===s?void 0:s.asSlider)||!1}return{title:o,isSortable:!0,isNumeric:r}}));return Array.of({title:or_translate_lib.MR.t("assetName"),isSortable:!0},...i)}getRows(t){return this.loadedAssets.map((e=>{const i=t.map((t=>{if(e.attributes&&e.attributes[t]){const i=model_lib.u0.getAttributeDescriptor(t,e.type),s=core_lib.J0.getAttributeValueAsString(e.attributes[t],i,e.type,!1),o=parseFloat(s);return isNaN(o)?s:o}return"N.A."}));return{content:Array.of(e.name,...i)}}))}render(){const t={fullHeight:!0,pagination:{enable:!0,options:this.widgetConfig.tableOptions}},e=this.getColumns(this.widgetConfig.attributeNames),i=this.getRows(this.widgetConfig.attributeNames);return lit.qy`
            <div id="widget-wrapper">
                <or-mwc-table .columns="${e}" .rows="${i}" .config="${t}" .paginationSize="${this.widgetConfig.tableSize}"
                              @or-mwc-table-row-click="${t=>this.onTableRowClick(t)}"
                ></or-mwc-table>
            </div>
        `}onTableRowClick(t){}};TableWidget=TableWidget_1=table_widget_decorate([(0,decorators.EM)("table-widget")],TableWidget);var task=__webpack_require__("../../../node_modules/@lit/task/index.js"),gateway_settings_decorate=function(t,e,i,n){var a,s=arguments.length,o=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(o=(s<3?a(o):s>3?a(e,i,o):a(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o},gateway_settings_awaiter=function(t,e,i,n){return new(i||(i=Promise))((function(a,s){function o(t){try{l(n.next(t))}catch(t){s(t)}}function r(t){try{l(n.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,r)}l((n=n.apply(t,e||[])).next())}))};let GatewaySettings=class extends WidgetSettings{constructor(){super(...arguments),this.GATEWAY_ASSET_TYPES=["GatewayAsset"],this.GATEWAY_TUNNEL_TYPES=["HTTPS","HTTP","TCP"],this._fetchAssetsTask=new task.YZ(this,{task:([],{signal:t})=>gateway_settings_awaiter(this,void 0,void 0,(function*(){return yield this._fetchAssets(!0,t)})),args:()=>[]})}connectedCallback(){super.connectedCallback()}render(){const t=!this.widgetConfig.gatewayId;return lit.qy`
            <div>
                <settings-panel displayName="gatewayTunnels.settings" expanded="${!0}">
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <div>
                            ${this._fetchAssetsTask.render({pending:()=>lit.qy`
                                    <or-mwc-input .type="${or_mwc_input.NZ.SELECT}" compact style="width: 100%;" disabled
                                                  label="${or_translate_lib.MR.t("gatewayTunnels.selectAsset")}"
                                    ></or-mwc-input>
                                `,complete:t=>{const e=t.map((t=>[t.id,t.name])),i=t.find((t=>t.id===this.widgetConfig.gatewayId)),n=i?[i.id,i.name]:void 0;return lit.qy`
                                        <or-mwc-input .type="${or_mwc_input.NZ.SELECT}" compact style="width: 100%;"
                                                      .options="${e}" .value="${n}"
                                                      label="${or_translate_lib.MR.t("gatewayTunnels.selectAsset")}"
                                                      @or-mwc-input-changed="${t=>this._onAssetSelect(t)}"
                                        ></or-mwc-input>
                                    `},error:()=>lit.qy`
                                    <or-mwc-input .type="${or_mwc_input.NZ.TEXT}" compact style="width: 100%;" disabled
                                                  label="${or_translate_lib.MR.t("gatewayTunnels.selectAsset")}" .value="${or_translate_lib.MR.t("errorOccurred")}"
                                    ></or-mwc-input>
                                `})}
                        </div>
                        <div>
                            <or-mwc-input .type="${or_mwc_input.NZ.SELECT}" compact style="width: 100%;"
                                          .disabled="${t}" .options="${this.GATEWAY_TUNNEL_TYPES}" .value="${this.widgetConfig.type}"
                                          label="${or_translate_lib.MR.t("gatewayTunnels.protocol")}"
                                          @or-mwc-input-changed="${t=>this._onTunnelTypeSelect(t)}"
                            ></or-mwc-input>
                        </div>
                        <div>
                            <or-mwc-input .type="${or_mwc_input.NZ.TEXT}" style="width: 100%;"
                                          .disabled="${t}" .value="${this.widgetConfig.target}"
                                          label="${or_translate_lib.MR.t("gatewayTunnels.target")}"
                                          @or-mwc-input-changed="${t=>this._onTunnelTargetSelect(t)}"
                            ></or-mwc-input>
                        </div>
                        <div>
                            <or-mwc-input .type="${or_mwc_input.NZ.NUMBER}" style="width: 100%;"
                                          .disabled="${t}" .value="${this.widgetConfig.targetPort}"
                                          label="${or_translate_lib.MR.t("gatewayTunnels.targetPort")}"
                                          @or-mwc-input-changed="${t=>this._onTunnelTargetPortSelect(t)}"
                            ></or-mwc-input>
                        </div>
                    </div>
                </settings-panel>
            </div>
        `}_onAssetSelect(t){this.widgetConfig.gatewayId=t.detail.value,this.notifyConfigUpdate()}_onTunnelTypeSelect(t){this.widgetConfig.type=t.detail.value,this.notifyConfigUpdate()}_onTunnelTargetSelect(t){this.widgetConfig.target=t.detail.value,this.notifyConfigUpdate()}_onTunnelTargetPortSelect(t){this.widgetConfig.targetPort=t.detail.value,this.notifyConfigUpdate()}_fetchAssets(t=!0,e){return gateway_settings_awaiter(this,void 0,void 0,(function*(){const e={realm:{name:core_lib.Ay.displayRealm},select:{attributes:["tunnelingSupported"]},types:this.GATEWAY_ASSET_TYPES,attributes:t?{items:[{name:{predicateType:"string",value:"tunnelingSupported"},value:{predicateType:"boolean",value:!0}},{name:{predicateType:"string",value:"gatewayStatus"},value:{predicateType:"string",value:"CONNECTED"}}]}:void 0};return(yield core_lib.Ay.rest.api.AssetResource.queryAssets(e)).data}))}};GatewaySettings=gateway_settings_decorate([(0,decorators.EM)("gateway-settings")],GatewaySettings);var GatewayWidget_1,gateway_widget_decorate=function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},gateway_widget_awaiter=function(t,e,n,o){return new(n||(n=Promise))((function(i,a){function r(t){try{l(o.next(t))}catch(t){a(t)}}function s(t){try{l(o.throw(t))}catch(t){a(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,s)}l((o=o.apply(t,e||[])).next())}))};const gateway_widget_styling=lit.AH`
    #gateway-widget-wrapper {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    #gateway-widget-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-height: 48px;
        flex-wrap: wrap;
        position: relative;
    }
`;let GatewayWidget=GatewayWidget_1=class extends OrWidget{constructor(){super(...arguments),this._loading=!1,this._startedByUser=!1}static getManifest(){return{displayName:"Gateway",displayIcon:"lan-connect",minColumnWidth:1,minColumnHeight:1,getContentHtml:t=>new GatewayWidget_1(t),getSettingsHtml:t=>new GatewaySettings(t),getDefaultConfig:()=>({type:"HTTPS",target:"localhost",targetPort:443})}}refreshContent(t){this.widgetConfig=JSON.parse(JSON.stringify(this.widgetConfig))}static get styles(){return[...super.styles,gateway_widget_styling]}disconnectedCallback(){this._activeTunnel&&(this._startedByUser?this._stopTunnel(this._activeTunnel):console.warn("Keeping the active tunnel open, as it is not started through the widget.")),super.disconnectedCallback()}willUpdate(t){t.has("_activeTunnel")&&this._activeTunnel&&this._navigateToTunnel(this._activeTunnel)}render(){var t;const e=(null===(t=this.getEditMode)||void 0===t?void 0:t.call(this))||!this._isConfigComplete(this.widgetConfig);return lit.qy`
            <div id="gateway-widget-wrapper">
                <div id="gateway-widget-container">
                    ${(0,when.z)(this._loading,(()=>lit.qy`
                        <or-loading-indicator></or-loading-indicator>
                    `),(()=>this._activeTunnel?lit.qy`
                                
                                <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" icon="stop" label="${or_translate_lib.MR.t("gatewayTunnels.stop")}"
                                              @or-mwc-input-changed="${t=>this._onStopTunnelClick(t)}"
                                ></or-mwc-input>
                                
                                ${(0,when.z)("TCP"===this.widgetConfig.type,(()=>lit.qy`
                                    <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" icon="content-copy" label="${or_translate_lib.MR.t("gatewayTunnels.copyAddress")}" outlined .disabled="${e}"
                                                  @or-mwc-input-changed="${t=>this._onCopyTunnelAddressClick(t)}"
                                    ></or-mwc-input>
                                `),(()=>lit.qy`
                                    <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" icon="open-in-new" label="${or_translate_lib.MR.t("gatewayTunnels.open")}" outlined .disabled="${e}"
                                                  @or-mwc-input-changed="${t=>this._onTunnelNavigateClick(t)}"
                                    ></or-mwc-input>
                                `))}
                                
                            `:lit.qy`
                                <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" label="${or_translate_lib.MR.t("gatewayTunnels.start")}" outlined .disabled="${e}"
                                              @or-mwc-input-changed="${t=>this._onStartTunnelClick(t)}"
                                ></or-mwc-input>
                            `))}
                </div>
            </div>
        `}_onCopyTunnelAddressClick(t){if(this._isConfigComplete(this.widgetConfig)){const t=this._getTunnelInfoByConfig(this.widgetConfig),e=this._getTunnelAddress(t);e?navigator.clipboard.writeText(e).finally((()=>{(0,or_mwc_snackbar.td)(void 0,or_translate_lib.MR.t("gatewayTunnels.copySuccess"))})):(console.warn("Could not copy tunnel address as it could not be found."),(0,or_mwc_snackbar.td)(void 0,or_translate_lib.MR.t("errorOccurred")))}else console.warn("Could not copy tunnel address as configuration is not complete."),(0,or_mwc_snackbar.td)(void 0,or_translate_lib.MR.t("errorOccurred"))}_onStartTunnelClick(t){this._tryStartTunnel(this.widgetConfig)}_onStopTunnelClick(t){this._tryStopTunnel(this.widgetConfig)}_onTunnelNavigateClick(t){this._isConfigComplete(this.widgetConfig)?this._navigateToTunnel(this._getTunnelInfoByConfig(this.widgetConfig)):console.warn("Could not navigate to tunnel as configuration is not complete.")}_tryStartTunnel(t){if(this._isConfigComplete(t)){const e=this._getTunnelInfoByConfig(t);this._loading=!0,this._getActiveTunnel(e).then((t=>{t?(console.log("Found an active tunnel!",t),this._activeTunnel=t,this._loading=!1):this._startTunnel(e).then((t=>{t?(console.log("Started a new tunnel!",t),this._activeTunnel=t,this._startedByUser=!0):console.warn("No new tunnel!")})).catch((t=>{console.error(t),(0,or_mwc_snackbar.td)(void 0,or_translate_lib.MR.t("errorOccurred"))})).finally((()=>{this._loading=!1}))})).catch((t=>{console.error(t),(0,or_mwc_snackbar.td)(void 0,or_translate_lib.MR.t("errorOccurred")),this._loading=!1}))}}_startTunnel(t){return gateway_widget_awaiter(this,void 0,void 0,(function*(){if(!(t.realm&&t.gatewayId&&t.target&&t.targetPort))throw new Error("Could not start tunnel, as some provided information was not set.");return(yield core_lib.Ay.rest.api.GatewayServiceResource.startTunnel(t)).data}))}_getActiveTunnel(t){return gateway_widget_awaiter(this,void 0,void 0,(function*(){if(!(t.realm&&t.gatewayId&&t.target&&t.targetPort))throw new Error("Could not get active tunnel, as some provided information was not set.");return(yield core_lib.Ay.rest.api.GatewayServiceResource.getActiveTunnelInfo(t.realm,t.gatewayId,t.target,t.targetPort)).data}))}_tryStopTunnel(t){const e=this._getTunnelInfoByConfig(t);this._loading=!0,this._stopTunnel(e).then((()=>{this._activeTunnel=void 0,this._startedByUser=!1})).catch((t=>{console.warn(t)})).finally((()=>{this._loading=!1}))}_stopTunnel(t){return gateway_widget_awaiter(this,void 0,void 0,(function*(){return(yield core_lib.Ay.rest.api.GatewayServiceResource.stopTunnel(t)).data}))}_navigateToTunnel(t){var e;t.realm&&t.gatewayId&&t.target&&t.targetPort||console.warn("Could not navigate to tunnel, as some provided information was not set.");const n=this._getTunnelAddress(t);switch(t.type){case"HTTPS":case"HTTP":null===(e=window.open(n))||void 0===e||e.focus();break;default:console.error("Unknown error when navigating to tunnel.")}}_getTunnelAddress(t){switch(t.type){case"HTTPS":case"HTTP":return"//"+t.id+"."+window.location.host;case"TCP":return t.id+"."+window.location.hostname+":"+t.assignedPort}}_isConfigComplete(t){return t.gatewayId?t.type?t.target?!!t.targetPort||(console.error("Could not start tunnel, since no gateway target port was configured."),!1):(console.error("Could not start tunnel, since no gateway target was configured."),!1):(console.error("Could not start tunnel, since no gateway type / protocol was configured."),!1):(console.error("Could not start tunnel, since no gateway asset was configured."),!1)}_getTunnelInfoByConfig(t){return{realm:core_lib.Ay.displayRealm,gatewayId:t.gatewayId,type:t.type,target:t.target,targetPort:t.targetPort}}};gateway_widget_decorate([(0,decorators.wk)()],GatewayWidget.prototype,"_loading",void 0),gateway_widget_decorate([(0,decorators.wk)()],GatewayWidget.prototype,"_activeTunnel",void 0),GatewayWidget=GatewayWidget_1=gateway_widget_decorate([(0,decorators.EM)("gateway-widget")],GatewayWidget);var or_dashboard_builder_lib_decorate=function(e,t,i,s){var r,d=arguments.length,a=d<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(d<3?r(a):d>3?r(t,i,a):r(t,i))||a);return d>3&&a&&Object.defineProperty(t,i,a),a},or_dashboard_builder_lib_awaiter=function(e,t,i,s){return new(i||(i=Promise))((function(r,d){function a(e){try{l(s.next(e))}catch(e){d(e)}}function o(e){try{l(s.throw(e))}catch(e){d(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,o)}l((s=s.apply(e,t||[])).next())}))};const lib_styling=lit.AH`
    
    @media only screen and (min-width: 641px){
        #tree {
            min-width: 300px !important;
        }
    }
    @media only screen and (max-width: 641px) {
        #tree {
            flex: 1 !important;
        }
        #builder {
            max-height: inherit !important;
        }
    }
    
    #tree {
        flex: 0;
        align-items: stretch;
        z-index: 1;
        box-shadow: rgb(0 0 0 / 21%) 0px 1px 3px 0px;
    }
    
    /* Header related styling */
    #header {
        background: var(--or-app-color1, ${(0,lit.iz)(core_lib.WO)});
    }
    #header-wrapper {
        padding: 14px 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 1px solid ${(0,lit.iz)(core_lib.Id)};
    }
    #header-title {
        font-size: 18px;
    }
    #header-title > or-icon {
        margin-right: 10px;
    }
    #header-actions {
        flex: 1 1 auto;
        text-align: right;
    }
    #header-actions-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        float: right;
    }

    /* Header related styling */
    @media screen and (max-width: 700px) {
        #fullscreen-header-wrapper {
            padding: 11px !important;
        }
    }
    #fullscreen-header-wrapper {
        min-height: 36px;
        padding: 20px 30px 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    #fullscreen-header-title {
        font-size: 18px;
        font-weight: bold;
        color: var(--or-app-color3, ${(0,lit.iz)(core_lib.Iy)});
    }
    #fullscreen-header-title > or-mwc-input {
        margin-right: 4px;
        --or-icon-fill: ${(0,lit.iz)(core_lib.Iy)};
    }
    #fullscreen-header-actions {
        flex: 1 1 auto;
        text-align: right;
    }
    #fullscreen-header-actions-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        float: right;
    }
    
    /* ----------------------------- */
    /* Editor/builder related styling */
    #builder {
        flex: 1 0 auto;
        height: 100%;
    }
    
    /* ----------------------------- */
    /* Sidebar related styling (drag and drop widgets / configuration) */
    #sidebar {
        vertical-align: top;
        position: relative;
        width: 300px;
        background: white;
        border-left: 1px solid ${(0,lit.iz)(core_lib.Id)};
    }
    #sidebar-widget-headeractions {
        flex: 0;
        display: flex;
        flex-direction: row;
        padding-right: 5px;
    }
    .settings-container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    #browser {
        flex-grow: 1;
        align-items: stretch;
        z-index: 1;
        max-width: 300px;
    }
    
    #save-btn { margin-left: 15px; }
    #view-btn { margin-left: 18px; }
    
    .small-btn {
        height: 36px;
        margin-top: -12px;
    }
    
    .hidescroll {
        -ms-overflow-style: none; /* for Internet Explorer, Edge */
        scrollbar-width: none; /* for Firefox */
    }
    .hidescroll::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }
`;function scalingPresetToString(e){return null!=e?or_translate_lib.MR.t("dashboard.presets."+e.toLowerCase()):"undefined"}function dashboardAccessToString(e){return or_translate_lib.MR.t("dashboard.access."+e.toLowerCase())}function sortScreenPresets(e,t=!1){return e.sort(((e,i)=>{if(null!=e.breakpoint&&null!=i.breakpoint){if(e.breakpoint>i.breakpoint)return t?1:-1;if(e.breakpoint<i.breakpoint)return t?1:-1}return 0}))}const widgetTypes=new Map;let OrDashboardBuilder=class extends lit.WF{static get styles(){return[lib_styling,style_style]}constructor(){super(),this.editMode=!1,this.fullscreen=!0,this.realm=core_lib.Ay.displayRealm,this.readonly=!0,this.refreshInterval="OFF",this.keyEmitter=new DashboardKeyEmitter,this.sidebarMenuIndex=0,this.showDashboardTree=!0,this.menuItems=[{icon:"content-copy",text:or_translate_lib.MR.t("copy")+" URL",value:"copy"},{icon:"open-in-new",text:or_translate_lib.MR.t("dashboard.openInNewTab"),value:"tab"}],this.tabItems=[{name:or_translate_lib.MR.t("dashboard.widgets")},{name:or_translate_lib.MR.t("settings")}],this.isInitializing=!0,this.isLoading=!0,this.hasChanged=!1,function registerWidgetTypes(){widgetTypes.set("linechart",ChartWidget.getManifest()),widgetTypes.set("gauge",GaugeWidget.getManifest()),widgetTypes.set("image",ImageWidget.getManifest()),widgetTypes.set("kpi",KpiWidget.getManifest()),widgetTypes.set("map",MapWidget.getManifest()),widgetTypes.set("attributeinput",AttributeInputWidget.getManifest()),widgetTypes.set("table",TableWidget.getManifest()),widgetTypes.set("gateway",GatewayWidget.getManifest())}(),this.updateComplete.then((()=>{this.loadAllDashboards(this.realm)}))}connectedCallback(){super.connectedCallback(),this.keyEmitter.addListener("delete",(e=>{var t,i,s;if(this.selectedWidgetId){const e=null===(s=null===(i=null===(t=this.selectedDashboard)||void 0===t?void 0:t.template)||void 0===i?void 0:i.widgets)||void 0===s?void 0:s.find((e=>e.id==this.selectedWidgetId));e&&(0,or_mwc_dialog.YB)(or_translate_lib.MR.t("areYouSure"),or_translate_lib.MR.t("dashboard.deleteWidgetWarning"),or_translate_lib.MR.t("delete")).then((t=>{t&&this.deleteWidget(e)}))}})),this.keyEmitter.addListener("deselect",(e=>{this.deselectWidget()})),this.keyEmitter.addListener("save",(e=>{this.saveDashboard()}))}disconnectedCallback(){super.disconnectedCallback(),this.keyEmitter.removeAllListeners()}willUpdate(e){var t,i,s;if(super.willUpdate(e),this.isLoading=null==this.dashboards,this.isInitializing=null==this.dashboards,1!==e.size||!e.has("selectedWidget")){const e=core_lib.J0.objectsEqual(this.selectedDashboard,this.initialDashboardJSON?JSON.parse(this.initialDashboardJSON):void 0),t=core_lib.J0.objectsEqual(this.currentTemplate,this.initialTemplateJSON?JSON.parse(this.initialTemplateJSON):void 0);this.hasChanged=!e||!t}e.has("realm")&&void 0!==e.get("realm")&&this.realm&&this.loadAllDashboards(this.realm),e.has("selectedDashboard")&&(this.deselectWidget(),this.currentTemplate=null===(t=this.selectedDashboard)||void 0===t?void 0:t.template,this.editMode||(this.refreshInterval=(null===(i=this.currentTemplate)||void 0===i?void 0:i.refreshInterval)||"OFF",e.set("refreshInterval",this.refreshInterval)),this.dispatchEvent(new CustomEvent("selected",{detail:this.selectedDashboard}))),e.has("editMode")&&(this.deselectWidget(),this.refreshInterval="OFF",this.showDashboardTree=!0,this.editMode?this.refreshInterval="OFF":this.refreshInterval=(null===(s=this.currentTemplate)||void 0===s?void 0:s.refreshInterval)||"OFF",e.set("refreshInterval",this.refreshInterval)),e.has("refreshInterval")&&this.refreshInterval&&this.setRefreshTimer(function intervalToMillis(e){switch(e){case"OFF":default:return;case"ONE_MIN":return 6e4;case"FIVE_MIN":return 3e5;case"QUARTER":return 9e5;case"ONE_HOUR":return 36e5}}(this.refreshInterval))}setRefreshTimer(e){this.clearRefreshTimer(),void 0!==e&&(this.refreshTimer=setInterval((()=>{var e;this.deselectWidget(),null===(e=this.dashboardPreview)||void 0===e||e.refreshWidgets()}),e))}clearRefreshTimer(){this.refreshTimer&&(clearInterval(this.refreshTimer),this.refreshTimer=void 0)}loadAllDashboards(e){var t;return or_dashboard_builder_lib_awaiter(this,void 0,void 0,(function*(){yield core_lib.Ay.rest.api.DashboardResource.getAllRealmDashboards(e).then((e=>{this.dashboards=e.data})).catch((e=>{(0,or_mwc_snackbar.td)(void 0,"errorOccurred"),console.error(e)})),void 0!==this.selectedId&&(this.selectedDashboard=null===(t=this.dashboards)||void 0===t?void 0:t.find((e=>e.id==this.selectedId)))}))}updated(e){super.updated(e),e.has("currentTemplate")&&null!=this.selectedDashboard&&(this.selectedDashboard.template=this.currentTemplate)}onWidgetCreation(e){const t=JSON.parse(JSON.stringify(this.currentTemplate));t.widgets||(t.widgets=[]),t.widgets.push(e),this.currentTemplate=t}deleteWidget(e){var t;if(null!=this.currentTemplate&&null!=this.currentTemplate.widgets){const i=this.currentTemplate;i.widgets=null===(t=i.widgets)||void 0===t?void 0:t.filter((t=>t.id!=e.id)),this.currentTemplate=i}this.selectedWidgetId===e.id&&this.deselectWidget()}selectWidget(e){var t,i;const s=null===(i=null===(t=this.currentTemplate)||void 0===t?void 0:t.widgets)||void 0===i?void 0:i.find((t=>{var i,s;return(null===(i=t.gridItem)||void 0===i?void 0:i.id)==(null===(s=e.gridItem)||void 0===s?void 0:s.id)}));null!=s?this.selectedWidgetId=s.id:console.error("The selected widget does not exist!")}deselectWidget(){this.selectedWidgetId=void 0}selectDashboard(e){var t;if(null!=this.dashboards){if(this.selectedDashboard&&this.initialDashboardJSON){const e=this.dashboards.indexOf(this.selectedDashboard);e&&(this.dashboards[e]=JSON.parse(this.initialDashboardJSON))}this.selectedDashboard=e?this.dashboards.find((t=>t.id==e.id)):void 0,this.initialDashboardJSON=JSON.stringify(this.selectedDashboard),this.initialTemplateJSON=JSON.stringify(null===(t=this.selectedDashboard)||void 0===t?void 0:t.template)}}changeDashboardName(e){null!=this.selectedDashboard&&(this.selectedDashboard.displayName=e,this.requestUpdate("selectedDashboard"))}openDashboardInInsights(){var e;if(null!=this.selectedDashboard){const t=window.location.origin+"/insights/?realm="+core_lib.Ay.displayRealm+"#/view/"+this.selectedDashboard.id+"/true/";null===(e=window.open(t))||void 0===e||e.focus()}}shareUrl(e){var t;let i=window.location.href.replace("true","false");"copy"==e?navigator.clipboard.writeText(i):"tab"==e&&(null===(t=window.open(i,"_blank"))||void 0===t||t.focus())}saveDashboard(){null!=this.selectedDashboard&&!this._isReadonly()&&this._hasEditAccess()?(this.isLoading=!0,core_lib.Ay.rest.api.DashboardResource.update(this.selectedDashboard).then((()=>{var e;null!=this.dashboards&&null!=this.selectedDashboard&&(this.initialDashboardJSON=JSON.stringify(this.selectedDashboard),this.initialTemplateJSON=JSON.stringify(this.selectedDashboard.template),this.dashboards[null===(e=this.dashboards)||void 0===e?void 0:e.indexOf(this.selectedDashboard)]=this.selectedDashboard,this.currentTemplate=Object.assign({},this.selectedDashboard.template),(0,or_mwc_snackbar.td)(void 0,"dashboard.saveSuccessful"))})).catch((e=>{console.error(e),(0,or_mwc_snackbar.td)(void 0,"errorOccurred")})).finally((()=>{this.isLoading=!1}))):(console.error("The selected dashboard could not be found.."),(0,or_mwc_snackbar.td)(void 0,"errorOccurred"))}_isReadonly(){return this.readonly||!core_lib.Ay.hasRole("write:insights")}_hasEditAccess(){var e,t;return null!=this.userId&&("PRIVATE"!=(null===(e=this.selectedDashboard)||void 0===e?void 0:e.editAccess)||(null===(t=this.selectedDashboard)||void 0===t?void 0:t.ownerId)==this.userId)}_hasViewAccess(){var e,t;return null!=this.userId&&("PRIVATE"!=(null===(e=this.selectedDashboard)||void 0===e?void 0:e.viewAccess)||(null===(t=this.selectedDashboard)||void 0===t?void 0:t.ownerId)==this.userId)}render(){var e,t,i,s;window.matchMedia("(max-width: 600px)").matches&&this.editMode&&(this.dispatchEvent(new CustomEvent("editToggle",{detail:!1})),this.showDashboardTree=!0);const r={display:!this.editMode||!this._isReadonly()&&this._hasEditAccess()?void 0:"none",maxHeight:this.editMode?"calc(100vh - 77px - 50px)":"inherit"};return!this.isInitializing||null!=this.dashboards&&0==this.dashboards.length?lit.qy`
            <div id="container">
                ${this.showDashboardTree?lit.qy`
                    <or-dashboard-tree id="tree" class="${this.selectedDashboard?"hideMobile":void 0}"
                                       .realm="${this.realm}" .hasChanged="${this.hasChanged}" .selected="${this.selectedDashboard}" .dashboards="${this.dashboards}" .showControls="${!0}" .userId="${this.userId}" .readonly="${this._isReadonly()}"
                                       @created="${e=>{this.dispatchEvent(new CustomEvent("editToggle",{detail:!0}))}}"
                                       @updated="${e=>{this.dashboards=e.detail,this.selectedDashboard=void 0}}"
                                       @select="${e=>{this.selectDashboard(e.detail)}}"
                    ></or-dashboard-tree>
                `:void 0}
                <div class="${null==this.selectedDashboard?"hideMobile":void 0}" style="flex: 1; display: flex; flex-direction: column;">
                    ${this.editMode?lit.qy`
                        <div id="header" class="hideMobile">
                            <div id="header-wrapper">
                                <div id="header-title">
                                    <or-icon icon="view-dashboard"></or-icon>
                                    ${null!=this.selectedDashboard?lit.qy`
                                        <or-mwc-input .type="${or_mwc_input.NZ.TEXT}" min="1" max="1023" comfortable required outlined .label="${or_translate_lib.MR.t("name")+"* "}" 
                                                      ?readonly="${this._isReadonly()}" .value="${this.selectedDashboard.displayName}" 
                                                      .disabled="${this.isLoading}" style="width: 300px;" 
                                                      @or-mwc-input-changed="${e=>{this.changeDashboardName(e.detail.value)}}"
                                        ></or-mwc-input>
                                    `:void 0}
                                </div>
                                <div id="header-actions">
                                    <div id="header-actions-content">
                                        ${(0,when.z)(this.selectedDashboard,(()=>lit.qy`
                                            <or-mwc-input id="refresh-btn" class="small-btn" .disabled="${this.isLoading}" type="${or_mwc_input.NZ.BUTTON}" icon="refresh"
                                                          @or-mwc-input-changed="${()=>{var e;this.deselectWidget(),null===(e=this.dashboardPreview)||void 0===e||e.refreshPreview()}}">
                                            </or-mwc-input>
                                            <or-mwc-input id="responsive-btn" class="small-btn" .disabled="${this.isLoading}" type="${or_mwc_input.NZ.BUTTON}" icon="responsive"
                                                          @or-mwc-input-changed="${()=>{this.dispatchEvent(new CustomEvent("fullscreenToggle",{detail:!this.fullscreen}))}}">
                                            </or-mwc-input>
                                            <or-mwc-input id="share-btn" class="small-btn" .disabled="${this.isLoading}" type="${or_mwc_input.NZ.BUTTON}" icon="open-in-new"
                                                          @or-mwc-input-changed="${()=>{this.openDashboardInInsights()}}">
                                            </or-mwc-input>
                                            <or-mwc-input id="save-btn" ?hidden="${this._isReadonly()||!this._hasEditAccess()}" .disabled="${this.isLoading||!this.hasChanged}" type="${or_mwc_input.NZ.BUTTON}" raised label="save"
                                                          @or-mwc-input-changed="${()=>{this.saveDashboard()}}">
                                            </or-mwc-input>
                                            <or-mwc-input id="view-btn" ?hidden="${this._isReadonly()||!this._hasViewAccess()}" type="${or_mwc_input.NZ.BUTTON}" outlined icon="eye" label="viewAsset"
                                                          @or-mwc-input-changed="${()=>{this.dispatchEvent(new CustomEvent("editToggle",{detail:!1}))}}">
                                            </or-mwc-input>
                                        `))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `:lit.qy`
                        <div id="fullscreen-header">
                            <div id="fullscreen-header-wrapper">
                                <div id="fullscreen-header-title" style="display: flex; align-items: center;">
                                    <or-icon class="showMobile" style="margin-right: 10px;" icon="chevron-left" @click="${()=>{this.selectedDashboard=void 0}}"></or-icon>
                                    <or-icon class="hideMobile" style="margin-right: 10px;" icon="menu" @click="${()=>{this.showDashboardTree=!this.showDashboardTree}}"></or-icon>
                                    <span>${null===(e=this.selectedDashboard)||void 0===e?void 0:e.displayName}</span>
                                </div>
                                <div id="fullscreen-header-actions">
                                    <div id="fullscreen-header-actions-content">
                                        ${(0,when.z)(this.selectedDashboard,(()=>lit.qy`
                                            <or-mwc-input id="refresh-btn" class="small-btn" .disabled="${null==this.selectedDashboard}" type="${or_mwc_input.NZ.BUTTON}" icon="refresh"
                                                      @or-mwc-input-changed="${()=>{var e;this.deselectWidget(),null===(e=this.dashboardPreview)||void 0===e||e.refreshPreview()}}"
                                            ></or-mwc-input>
                                            <dashboard-refresh-controls .interval="${this.refreshInterval}" .readonly="${!1}"
                                                                        @interval-select="${e=>this.onIntervalSelect(e)}"
                                            ></dashboard-refresh-controls>
                                            <or-mwc-input id="share-btn" class="small-btn" .disabled="${null==this.selectedDashboard}" type="${or_mwc_input.NZ.BUTTON}" icon="open-in-new"
                                                          @or-mwc-input-changed="${()=>{this.openDashboardInInsights()}}"
                                            ></or-mwc-input>
                                            <or-mwc-input id="view-btn" class="hideMobile" ?hidden="${null==this.selectedDashboard||this._isReadonly()||!this._hasEditAccess()}" type="${or_mwc_input.NZ.BUTTON}" outlined icon="pencil" label="editAsset"
                                                          @or-mwc-input-changed="${()=>{this.dispatchEvent(new CustomEvent("editToggle",{detail:!0}))}}">
                                            </or-mwc-input>
                                        `))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `}
                    <div id="content" style="flex: 1;">
                        <div id="container">
                            ${!this.editMode||!this._isReadonly()&&this._hasEditAccess()?void 0:lit.qy`
                                <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
                                    <span>${this._hasEditAccess()?or_translate_lib.MR.t("errorOccurred"):or_translate_lib.MR.t("noDashboardWriteAccess")}.</span>
                                </div>
                            `}
                            <div id="builder" style="${(0,style_map.W)(r)}">
                                ${null!=this.selectedDashboard?lit.qy`
                                    <or-dashboard-preview class="editor" style="background: transparent;"
                                                          .realm="${this.realm}" .template="${this.currentTemplate}"
                                                          .selectedWidget="${null===(s=null===(i=null===(t=this.selectedDashboard)||void 0===t?void 0:t.template)||void 0===i?void 0:i.widgets)||void 0===s?void 0:s.find((e=>e.id==this.selectedWidgetId))}" .editMode="${this.editMode}"
                                                          .fullscreen="${this.fullscreen}" .readonly="${this._isReadonly()}"
                                                          @selected="${e=>{this.selectWidget(e.detail)}}"
                                                          @deselected="${()=>{this.deselectWidget()}}"
                                                          @created="${e=>{this.onWidgetCreation(e.detail)}}"
                                                          @changed="${e=>{this.currentTemplate=e.detail.template}}"
                                    ></or-dashboard-preview>
                                `:lit.qy`
                                    <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
                                        <span>${or_translate_lib.MR.t("noDashboardSelected")}</span>
                                    </div>
                                `}
                            </div>
                            ${(0,when.z)(null!=this.selectedDashboard&&this.editMode&&!this._isReadonly()&&this._hasEditAccess(),(()=>{var e,t,i,s;const r=null===(i=null===(t=null===(e=this.selectedDashboard)||void 0===e?void 0:e.template)||void 0===t?void 0:t.widgets)||void 0===i?void 0:i.find((e=>e.id==this.selectedWidgetId));return lit.qy`
                                    <div id="sidebar" class="hideMobile">
                                        ${null!=this.selectedWidgetId?lit.qy`
                                            <div class="settings-container">
                                                <div id="menu-header">
                                                    <div id="title-container">
                                                        <span id="title" title="${null==r?void 0:r.displayName}">${null==r?void 0:r.displayName}</span>
                                                    </div>
                                                    <div id="sidebar-widget-headeractions">
                                                        <or-mwc-input type="${or_mwc_input.NZ.BUTTON}" icon="delete" @or-mwc-input-changed="${()=>{(0,or_mwc_dialog.YB)(or_translate_lib.MR.t("areYouSure"),or_translate_lib.MR.t("dashboard.deleteWidgetWarning"),or_translate_lib.MR.t("delete")).then((e=>{e&&this.deleteWidget(r)}))}}"></or-mwc-input>
                                                        <or-mwc-input type="${or_mwc_input.NZ.BUTTON}" icon="close" @or-mwc-input-changed="${()=>{this.deselectWidget()}}"></or-mwc-input>
                                                    </div>
                                                </div>
                                                <div id="content" class="hidescroll" style="flex: 1; overflow: hidden auto;">
                                                    <div style="position: relative;">
                                                        <or-dashboard-widgetsettings style="position: absolute;" .selectedWidget="${r}" .realm="${this.realm}"
                                                                                     @delete="${e=>{this.deleteWidget(e.detail)}}"
                                                                                     @update="${e=>{var t,i;this.currentTemplate=Object.assign({},null===(t=this.selectedDashboard)||void 0===t?void 0:t.template),e.detail.force&&(this.deselectWidget(),null===(i=this.dashboardPreview)||void 0===i||i.refreshPreview())}}"
                                                        ></or-dashboard-widgetsettings>
                                                    </div>
                                                </div>
                                            </div>
                                        `:void 0}
                                        <div class="settings-container" style="${null!=this.selectedWidgetId?lit.AH`display: none`:null}">
                                            <div style="border-bottom: 1px solid ${(0,lit.iz)(core_lib.Id)};">
                                                <or-mwc-tabs .items="${this.tabItems}" noScroll @activated="${e=>{this.sidebarMenuIndex=e.detail.index}}" style="pointer-events: ${this.selectedDashboard?void 0:"none"}"></or-mwc-tabs>
                                            </div>
                                            <div id="content" class="hidescroll" style="flex: 1; overflow: hidden auto;">
                                                <div style="position: relative;">
                                                    <or-dashboard-browser id="browser" style="position: absolute; ${0!=this.sidebarMenuIndex?lit.AH`display: none`:null}"></or-dashboard-browser>
                                                    <or-dashboard-boardsettings style="position: absolute; ${1!=this.sidebarMenuIndex?lit.AH`display: none`:null}" 
                                                                                .dashboard="${this.selectedDashboard}" .showPerms="${(null===(s=this.selectedDashboard)||void 0===s?void 0:s.ownerId)==this.userId}" 
                                                                                @update="${e=>{var t,i;this.currentTemplate=Object.assign({},null===(t=this.selectedDashboard)||void 0===t?void 0:t.template),e.detail.force&&(this.deselectWidget(),null===(i=this.dashboardPreview)||void 0===i||i.refreshPreview())}}"
                                                    ></or-dashboard-boardsettings>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `}))}
                        </div>
                    </div>
                </div>
            </div>
        `:lit.qy`
            <div id="container" style="justify-content: center; align-items: center;">
                ${this.isInitializing?lit.qy`
                    <span>${or_translate_lib.MR.t("loading")}.</span>
                `:lit.qy`
                    <span>${or_translate_lib.MR.t("errorOccurred")}.</span>
                `}
            </div>
        `}onIntervalSelect(e){this.refreshInterval=e.detail}};or_dashboard_builder_lib_decorate([(0,decorators.MZ)()],OrDashboardBuilder.prototype,"config",void 0),or_dashboard_builder_lib_decorate([(0,decorators.MZ)()],OrDashboardBuilder.prototype,"editMode",void 0),or_dashboard_builder_lib_decorate([(0,decorators.MZ)()],OrDashboardBuilder.prototype,"fullscreen",void 0),or_dashboard_builder_lib_decorate([(0,decorators.MZ)()],OrDashboardBuilder.prototype,"selectedId",void 0),or_dashboard_builder_lib_decorate([(0,decorators.MZ)()],OrDashboardBuilder.prototype,"realm",void 0),or_dashboard_builder_lib_decorate([(0,decorators.MZ)()],OrDashboardBuilder.prototype,"userId",void 0),or_dashboard_builder_lib_decorate([(0,decorators.MZ)()],OrDashboardBuilder.prototype,"readonly",void 0),or_dashboard_builder_lib_decorate([(0,decorators.wk)()],OrDashboardBuilder.prototype,"dashboards",void 0),or_dashboard_builder_lib_decorate([(0,decorators.wk)()],OrDashboardBuilder.prototype,"currentTemplate",void 0),or_dashboard_builder_lib_decorate([(0,decorators.wk)()],OrDashboardBuilder.prototype,"selectedDashboard",void 0),or_dashboard_builder_lib_decorate([(0,decorators.wk)()],OrDashboardBuilder.prototype,"selectedWidgetId",void 0),or_dashboard_builder_lib_decorate([(0,decorators.wk)()],OrDashboardBuilder.prototype,"initialDashboardJSON",void 0),or_dashboard_builder_lib_decorate([(0,decorators.wk)()],OrDashboardBuilder.prototype,"initialTemplateJSON",void 0),or_dashboard_builder_lib_decorate([(0,decorators.wk)()],OrDashboardBuilder.prototype,"refreshInterval",void 0),or_dashboard_builder_lib_decorate([(0,decorators.wk)()],OrDashboardBuilder.prototype,"isInitializing",void 0),or_dashboard_builder_lib_decorate([(0,decorators.wk)()],OrDashboardBuilder.prototype,"isLoading",void 0),or_dashboard_builder_lib_decorate([(0,decorators.wk)()],OrDashboardBuilder.prototype,"hasChanged",void 0),or_dashboard_builder_lib_decorate([(0,decorators.P)("or-dashboard-preview")],OrDashboardBuilder.prototype,"dashboardPreview",void 0),or_dashboard_builder_lib_decorate([(0,decorators.wk)()],OrDashboardBuilder.prototype,"sidebarMenuIndex",void 0),or_dashboard_builder_lib_decorate([(0,decorators.wk)()],OrDashboardBuilder.prototype,"showDashboardTree",void 0),OrDashboardBuilder=or_dashboard_builder_lib_decorate([(0,decorators.EM)("or-dashboard-builder")],OrDashboardBuilder);var page_insights_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},page_insights_awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))};function pageInsightsProvider(store,config){return{name:"insights",routes:["insights","insights/:editMode","insights/:editMode/:id"],pageCreator:()=>{const page=new PageInsights(store);return config&&(page.config=config),page}}}let PageInsights=class PageInsights extends lib.YW{static get styles(){return lit.AH`

            :host {
                overflow: hidden; 
            }
            
            #builder {
                z-index: 0;
                background: transparent;
            }
        `}updated(changedProperties){changedProperties.has("_dashboardId")&&this._updateRoute()}get name(){return"insights"}constructor(store){super(store),this._editMode=!0,this._fullscreen=!0,this._realmSelector=state=>state.app.realm||core_lib.m8.displayRealm,this.getRealmState=(0,es.Mz)([this._realmSelector],(()=>page_insights_awaiter(this,void 0,void 0,(function*(){this._dataviewer&&this._dataviewer.refresh(),this._updateRoute(!0),this.requestUpdate()})))),core_lib.m8.rest.api.UserResource.getCurrent().then((response=>{this._userId=response.data.id})).catch((ex=>{console.error(ex),(0,or_mwc_snackbar.td)(void 0,"errorOccurred")}))}connectedCallback(){super.connectedCallback()}render(){return lit.qy`
            <div style="width: 100%;">
                <or-dashboard-builder id="builder" .editMode="${this._editMode}" .fullscreen="${this._fullscreen}" .selectedId="${this._dashboardId}"
                                      .realm="${core_lib.m8.displayRealm}" .userId="${this._userId}" .readonly="${!core_lib.m8.hasRole("write:insights")}"
                                      @selected="${event=>{var _a;this._dashboardId=null===(_a=event.detail)||void 0===_a?void 0:_a.id}}"
                                      @editToggle="${event=>{this._editMode=event.detail,this._fullscreen=!0,this._updateRoute(!0)}}"
                                      @fullscreenToggle="${event=>{this._fullscreen=event.detail}}"
                ></or-dashboard-builder>
            </div>
        `}stateChanged(state){this.getRealmState(state),this._editMode=!(!state.app.params||!state.app.params.editMode)&&("true"===state.app.params.editMode&&core_lib.m8.hasRole("write:insights")),this._dashboardId=state.app.params&&state.app.params.id?state.app.params.id:void 0}_updateRoute(silent=!0){lib.QB.navigate(function getInsightsRoute(editMode,dashboardId){let route="insights/"+(editMode?"true":"false");return dashboardId&&(route+="/"+dashboardId),route}(this._editMode,this._dashboardId),{callHooks:!silent,callHandler:!silent})}};page_insights_decorate([(0,decorators.MZ)()],PageInsights.prototype,"config",void 0),page_insights_decorate([(0,decorators.P)("#data-viewer")],PageInsights.prototype,"_dataviewer",void 0),page_insights_decorate([(0,decorators.MZ)()],PageInsights.prototype,"_editMode",void 0),page_insights_decorate([(0,decorators.MZ)()],PageInsights.prototype,"_fullscreen",void 0),page_insights_decorate([(0,decorators.MZ)()],PageInsights.prototype,"_dashboardId",void 0),page_insights_decorate([(0,decorators.wk)()],PageInsights.prototype,"_userId",void 0),PageInsights=page_insights_decorate([(0,decorators.EM)("page-insights")],PageInsights);var drawer_component=__webpack_require__("../../../node_modules/@material/drawer/component.js"),or_mwc_drawer_decorate=function(e,r,t,a){var s,o=arguments.length,d=o<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,r,t,a);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(d=(o<3?s(d):o>3?s(r,t,d):s(r,t))||d);return o>3&&d&&Object.defineProperty(r,t,d),d};const drawerStyle=__webpack_require__("../../../node_modules/@material/drawer/dist/mdc.drawer.css");class OrMwcDrawerChangedEvent extends CustomEvent{constructor(e){super(OrMwcDrawerChangedEvent.NAME,{detail:e,bubbles:!0,composed:!0})}}OrMwcDrawerChangedEvent.NAME="or-mwc-drawer-changed";let OrMwcDrawer=class extends lit.WF{constructor(){super(...arguments),this.dismissible=!1,this.rightSided=!1,this.transparent=!1,this.open=!1}static get styles(){return[lit.AH`${(0,lit.iz)(drawerStyle)}`,lit.AH`
      .transparent{
        background: none;
      }`]}toggle(){this.open=!this.open}disconnectedCallback(){super.disconnectedCallback(),this.drawer&&(this.drawer.destroy(),this.drawer=void 0)}render(){const e=!this.dismissible,r={"mdc-drawer--dismissible":this.dismissible,"mdc-drawer--modal":e,transparent:this.transparent};return lit.qy`
      <aside class="mdc-drawer ${(0,class_map.H)(r)}" dir="${this.rightSided?"rtl":"ltr"}">
        ${this.header}
        <div class="mdc-drawer__content" dir="ltr">
          <slot></slot>
        </div>
      </aside>`}updated(){this.drawer.open!==this.open&&(this.drawer.open=this.open)}dispatchChangedEvent(e){this.dispatchEvent(new OrMwcDrawerChangedEvent(e))}firstUpdated(){this.drawer=drawer_component.U.attachTo(this.drawerElement),this.drawer.listen("MDCDrawer:opened",(()=>{this.dispatchChangedEvent(!0)})),this.drawer.listen("MDCDrawer:closed",(()=>{this.dispatchChangedEvent(!1)})),this.appContent&&this.appContent.classList.add("mdc-drawer-app-content"),this.topBar&&this.topBar.classList.add("mdc-top-app-bar")}};or_mwc_drawer_decorate([(0,decorators.MZ)({attribute:!1})],OrMwcDrawer.prototype,"header",void 0),or_mwc_drawer_decorate([(0,decorators.MZ)({type:Boolean})],OrMwcDrawer.prototype,"dismissible",void 0),or_mwc_drawer_decorate([(0,decorators.MZ)({type:Boolean})],OrMwcDrawer.prototype,"rightSided",void 0),or_mwc_drawer_decorate([(0,decorators.MZ)({type:Boolean})],OrMwcDrawer.prototype,"transparent",void 0),or_mwc_drawer_decorate([(0,decorators.MZ)({type:Boolean})],OrMwcDrawer.prototype,"open",void 0),or_mwc_drawer_decorate([(0,decorators.MZ)({attribute:!1})],OrMwcDrawer.prototype,"appContent",void 0),or_mwc_drawer_decorate([(0,decorators.MZ)({attribute:!1})],OrMwcDrawer.prototype,"topBar",void 0),or_mwc_drawer_decorate([(0,decorators.P)(".mdc-drawer")],OrMwcDrawer.prototype,"drawerElement",void 0),OrMwcDrawer=or_mwc_drawer_decorate([(0,decorators.EM)("or-mwc-drawer")],OrMwcDrawer);var OrRuleList_1,or_rule_list_decorate=function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o},or_rule_list_awaiter=function(e,t,s,i){return new(s||(s=Promise))((function(l,r){function o(e){try{a(i.next(e))}catch(e){r(e)}}function n(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?l(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,n)}a((i=i.apply(e,t||[])).next())}))};const or_rule_list_style=lit.AH`
    :host {
        flex-grow: 1;
        font-size: var(--internal-or-rules-list-text-size);
        
        /*Override asset tree styles*/
        --internal-or-asset-tree-header-height: var(--internal-or-rules-list-header-height);
    }
    
    #wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }

    #wrapper[data-disabled] {
        opacity: 0.3;
        pointer-events: none;
    }

    .node-container {
        align-items: center;
        padding-left: 10px;
    }
    
    .header-ruleset-type {
        display: flex;
        align-items: center;
        height: var(--internal-or-asset-tree-header-height);
        line-height: var(--internal-or-asset-tree-header-height);
        color: var(--internal-or-rules-panel-color);
        background-color: var(--internal-or-rules-header-background-color);
    }
    
    #header-btns {
        --or-mwc-input-color: var(--internal-or-rules-text-color);
    }
    
    .header-ruleset-type p {
        margin: 0 15px;
    }

    .node-status {
        --or-icon-width: 18px; 
        margin-right: 8px;
    }

    .node-language{
        padding-left: 10px;
        opacity: 50%;
    }

    .iconfill-gray {
        --or-icon-fill: var(--internal-or-rules-list-icon-color-ok);
    }

    .iconfill-red {
        --or-icon-fill: var(--internal-or-rules-list-icon-color-error);
    }
`;let OrRuleList=OrRuleList_1=class extends((0,or_translate_lib.Tl)(i18next.Ay)(lit.WF)){constructor(){super(...arguments),this.readonly=!1,this.disabled=!1,this.multiSelect=!0,this._showLoading=!0,this._globalRulesets=!1,this._selectedNodes=[],this._rulesetPromises=new Map,this._ready=!1}static get styles(){return[or_asset_tree_lib.iF,or_rule_list_style]}refresh(){return or_rule_list_awaiter(this,void 0,void 0,(function*(){this._nodes=void 0}))}get _allowedLanguages(){const e=this.config&&this.config.controls&&this.config.controls.allowedLanguages?[...this.config.controls.allowedLanguages]:OrRuleList_1.DEFAULT_ALLOWED_LANGUAGES,t=e.indexOf("GROOVY"),s=e.indexOf("FLOW");return core_lib.Ay.isSuperUser()?t<0&&e.push("GROOVY"):t>0&&e.splice(t,1),this._globalRulesets&&s>0&&e.splice(s,1),e}_updateLanguage(){const e=this._allowedLanguages;e&&0!==e.length?(!this.language||e.indexOf(this.language)<0)&&(this.language=e[0]):this.language=void 0}_onReady(){this._ready=!0,this._loadRulesets()}firstUpdated(e){super.firstUpdated(e),core_lib.Ay.ready&&this._onReady()}shouldUpdate(e){const t=super.shouldUpdate(e);if(this.sortBy||(this.sortBy="name"),e.has("language")&&this._updateLanguage(),e.has("_globalRulesets")&&(this._updateLanguage(),this.refresh()),core_lib.Ay.ready){if(!this._nodes)return this._loadRulesets(),!0;if(e.has("selectedIds")){let t=!0;const s=e.get("selectedIds");this.selectedIds&&s&&this.selectedIds.length===s.length&&(t=!!this.selectedIds.find((e=>s.indexOf(e)<0))),t&&this._updateSelectedNodes()}e.has("sortBy")&&OrRuleList_1._updateSort(this._nodes,this._getSortFunction())}return t}render(){this.language||this._updateLanguage();const e=this._allowedLanguages,t=["name","createdOn","status"];e&&e.length>1&&t.push("lang");let s="";return this._isReadonly()||(s=e&&e.length>1?(0,or_mwc_menu.Xj)(lit.qy`<or-mwc-input type="${or_mwc_input.NZ.BUTTON}" icon="plus"></or-mwc-input>`,e.map((e=>({value:e,text:i18next.Ay.t("rulesLanguages."+e)}))),this.language,(e=>this._onAddClicked(e))):lit.qy`<or-mwc-input type="${or_mwc_input.NZ.BUTTON}" icon="plus" @or-mwc-input-changed="${()=>this._onAddClicked(this.language)}"></or-mwc-input>`),lit.qy`
            <div id="wrapper" ?data-disabled="${this.disabled}">
                ${core_lib.Ay.isSuperUser()?lit.qy`
                    <div class="header-ruleset-type">
                        <p>${i18next.Ay.t("realmRules")}</p>
                        
                        <div style="flex: 1 1 0; display: flex;">
                            <or-mwc-input style="margin: auto;" type="${or_mwc_input.NZ.SWITCH}" @or-mwc-input-changed="${e=>this._globalRulesets=e.detail.value}"></or-mwc-input>
                        </div>

                        <p>${i18next.Ay.t("globalRules")}</p>
                    </div>
                `:""}

                <div id="header">
                    <div id="title-container">
                        <or-translate id="title" value="rule_plural"></or-translate>
                    </div>
        
                    <div id="header-btns">
                        <or-mwc-input ?hidden="${this._isReadonly()||!this.selectedIds||0===this.selectedIds.length}" type="${or_mwc_input.NZ.BUTTON}" icon="content-copy" @or-mwc-input-changed="${()=>this._onCopyClicked()}"></or-mwc-input>
                        <or-mwc-input ?hidden="${this._isReadonly()||!this.selectedIds||0===this.selectedIds.length}" type="${or_mwc_input.NZ.BUTTON}" icon="delete" @or-mwc-input-changed="${()=>this._onDeleteClicked()}"></or-mwc-input>
                        ${s}
                        <or-mwc-input hidden type="${or_mwc_input.NZ.BUTTON}" icon="magnify" @or-mwc-input-changed="${()=>this._onSearchClicked()}"></or-mwc-input>
                        
                        ${(0,or_mwc_menu.Xj)(lit.qy`<or-mwc-input type="${or_mwc_input.NZ.BUTTON}" icon="sort-variant" ></or-mwc-input>`,t.map((e=>({value:e,text:i18next.Ay.t(e)}))),this.sortBy,(e=>this._onSortClicked(e)))}
                    </div>
                </div>
        
                ${!this._nodes||this._showLoading?lit.qy`
                        <span id="loading"><or-translate value="loading"></or-translate></span>`:lit.qy`
                        <div id="list-container">
                            <ol id="list">
                                ${this._nodes.map((e=>this._nodeTemplate(e)))}
                            </ol>
                        </div>
                    `}
        
                <div id="footer">
                
                </div>
            </div>
        `}_isReadonly(){return this.readonly||!core_lib.Ay.hasRole("write:rules")}_nodeTemplate(e){let t="help",s="iconfill-gray",i="mdi-state-machine",l="Unknown language";switch(e.ruleset.status){case"DEPLOYED":t="",s="iconfill-gray";break;case"READY":t="check",s="iconfill-gray";break;case"COMPILATION_ERROR":case"LOOP_ERROR":case"EXECUTION_ERROR":t="alert-octagon",s="iconfill-red";break;case"DISABLED":t="minus-circle",s="iconfill-gray";break;case"PAUSED":t="calendar-arrow-right",s="iconfill-gray";break;case"EXPIRED":t="calendar-remove",s="iconfill-gray";break;case"REMOVED":t="close",s="iconfill-gray";break;default:t="stop",s="iconfill-gray"}switch(e.ruleset.lang){case"JSON":i="ray-start-arrow",l="rulesLanguages.JSON";break;case"FLOW":i="transit-connection-variant",l="rulesLanguages.FLOW";break;case"GROOVY":i="alpha-g-box-outline",l="rulesLanguages.GROOVY";break;case"JAVASCRIPT":i="language-javascript",l="rulesLanguages.JAVASCRIPT";break;default:i="mdi-state-machine",l="Unknown language"}return lit.qy`
            <li ?data-selected="${e.selected}" @click="${t=>this._onNodeClicked(t,e)}">
                <div class="node-container">
                    <or-icon style="--or-icon-width: 18px; margin-right: 8px;" icon="${i}" title="${i18next.Ay.t(l)}"></or-icon>
                    <span class="node-name">${e.ruleset.name}</span>
                    <or-icon class="node-status ${s}" title="${i18next.Ay.t("rulesetStatus."+(e.ruleset.status?e.ruleset.status:"NOSTATUS"))}" icon="${t}"></or-icon>
                </div>
            </li>
        `}static _getNodeStatusClasses(e){let t=e.enabled?"bg-green":"bg-red";if(e.enabled&&e.meta&&e.meta.validity){const s=e.meta.validity,i=(new Date).getTime();s.start&&(i<s.start?t="bg-blue":s.end&&i>s.end?t="bg-grey":s.recurrence)}return t}_updateSelectedNodes(){const e=[],t=[];this._nodes&&this._nodes.forEach((s=>{this.selectedIds&&this.selectedIds.indexOf(s.ruleset.id)>=0?(e.push(s.ruleset.id),t.push(s),s.selected=!0):s.selected=!1})),this.selectedIds=e;const s=this._selectedNodes;this._selectedNodes=t,this.dispatchEvent(new OrRulesSelectionEvent({oldNodes:s,newNodes:t}))}static _updateSort(e,t){e&&e.sort(t)}_onNodeClicked(e,t){if(e.defaultPrevented)return;e.preventDefault();let s=[];const i=this._selectedNodes.indexOf(t);let l=!0,r=!0;!this._isReadonly()&&this.multiSelect&&(!this.config||!this.config.controls||!this.config.controls.multiSelect)&&(e.ctrlKey||e.metaKey)&&(r=!1,i>=0&&this._selectedNodes&&this._selectedNodes.length>1&&(l=!1)),r?s=[t]:l?i<0&&(s=[...this._selectedNodes],s.push(t)):i>=0&&(s=[...this._selectedNodes],s.splice(i,1)),core_lib.J0.dispatchCancellableEvent(this,new OrRulesRequestSelectionEvent({oldNodes:this._selectedNodes,newNodes:s})).then((e=>{e.allow&&(this.selectedIds=e.detail.newNodes.map((e=>e.ruleset.id)))}))}_onCopyClicked(){if(1!==this._selectedNodes.length)return;const e=this._selectedNodes[0],t=JSON.parse(JSON.stringify(e.ruleset));delete t.lastModified,delete t.createdOn,delete t.status,delete t.error,delete t.id,t.name=t.name+" copy",this.config&&this.config.rulesetCopyHandler&&!this.config.rulesetCopyHandler(t)||core_lib.J0.dispatchCancellableEvent(this,new OrRulesRequestAddEvent({ruleset:t,sourceRuleset:e.ruleset})).then((e=>{e.allow&&this.dispatchEvent(new OrRulesAddEvent(e.detail))}))}_onAddClicked(e){const t=this._globalRulesets?"global":"realm",s=core_lib.Ay.isSuperUser()?core_lib.Ay.displayRealm:core_lib.Ay.config.realm,i={id:0,type:t,name:OrRules.DEFAULT_RULESET_NAME,lang:e,realm:s,rules:void 0};if(this.config&&this.config.rulesetAddHandler&&!this.config.rulesetAddHandler(i))return;this.config&&this.config.rulesetTemplates&&this.config.rulesetTemplates[e]?i.rules=this.config.rulesetTemplates[e]:i.rules=RuleViewInfoMap[e].viewRulesetTemplate,"realm"===t&&(i.realm=s);const l={ruleset:i,isCopy:!1};core_lib.J0.dispatchCancellableEvent(this,new OrRulesRequestAddEvent(l)).then((e=>{e.allow&&this.dispatchEvent(new OrRulesAddEvent(e.detail))}))}_onDeleteClicked(){this._selectedNodes.length>0&&core_lib.J0.dispatchCancellableEvent(this,new OrRulesRequestDeleteEvent(this._selectedNodes)).then((e=>{e.allow&&this._doDelete()}))}_doDelete(){if(!this._selectedNodes||0===this._selectedNodes.length)return;const e=this._selectedNodes.map((e=>e.ruleset)),t=e.map((e=>"\n- "+e.name)),s=()=>or_rule_list_awaiter(this,void 0,void 0,(function*(){this.disabled=!0;let t=!1;for(const s of e)if(!this.config||!this.config.rulesetDeleteHandler||this.config.rulesetDeleteHandler(s))try{let e;switch(s.type){case"asset":e=yield core_lib.Ay.rest.api.RulesResource.deleteAssetRuleset(s.id);break;case"realm":e=yield core_lib.Ay.rest.api.RulesResource.deleteRealmRuleset(s.id);break;case"global":e=yield core_lib.Ay.rest.api.RulesResource.deleteGlobalRuleset(s.id)}204!==e.status&&(console.error("Delete ruleset returned unexpected status '"+e.status+"': "+JSON.stringify(s,null,2)),t=!0)}catch(e){console.error("Failed to delete ruleset: "+JSON.stringify(s,null,2),e),t=!0}t&&(0,or_mwc_dialog._F)(i18next.Ay.t("deleteAssetsFailed")),this.disabled=!1,this.refresh()}));(0,or_mwc_dialog.YB)(i18next.Ay.t("deleteRulesets"),i18next.Ay.t("deleteRulesetsConfirm",{ruleNames:t}),i18next.Ay.t("delete")).then((e=>{e&&s()}))}_onSearchClicked(){}_onSortClicked(e){this.sortBy=e}_getSortFunction(){return"createdOn"===this.sortBy?core_lib.J0.sortByNumber((e=>e.ruleset[this.sortBy])):core_lib.J0.sortByString((e=>e.ruleset[this.sortBy]))}_getRealm(){return core_lib.Ay.isSuperUser()?core_lib.Ay.displayRealm:core_lib.Ay.getRealm()}_loadRulesets(){return or_rule_list_awaiter(this,void 0,void 0,(function*(){const e=this._getSortFunction();let t;if(this._globalRulesets)0!=this._rulesetPromises.size||this._rulesetPromises.has("global")||this._rulesetPromises.set("global",new Promise((e=>or_rule_list_awaiter(this,void 0,void 0,(function*(){const t=yield core_lib.Ay.rest.api.RulesResource.getGlobalRulesets({fullyPopulate:!0});e(t.data)}))))),t=yield this._rulesetPromises.get("global"),this._rulesetPromises.delete("global");else{const e=this._getRealm()||core_lib.Ay.displayRealm;0!=this._rulesetPromises.size||this._rulesetPromises.has(e)||this._rulesetPromises.set(e,new Promise((t=>or_rule_list_awaiter(this,void 0,void 0,(function*(){const s={fullyPopulate:!0,language:this._allowedLanguages},i=yield core_lib.Ay.rest.api.RulesResource.getRealmRulesets(e,s);t(i.data)}))))),t=yield this._rulesetPromises.get(e),this._rulesetPromises.delete(e)}t&&this._buildTreeNodes(t,e)}))}_buildTreeNodes(e,t){if(e&&0!==e.length){const s=e.map((e=>({ruleset:e})));s.sort(t),this._nodes=s}else this._nodes=[];this.selectedIds&&this.selectedIds.length>0&&this._updateSelectedNodes(),this._showLoading=!1}};OrRuleList.DEFAULT_ALLOWED_LANGUAGES=["JSON","GROOVY","JAVASCRIPT","FLOW"],or_rule_list_decorate([(0,decorators.MZ)({type:Object})],OrRuleList.prototype,"config",void 0),or_rule_list_decorate([(0,decorators.MZ)({type:Boolean})],OrRuleList.prototype,"readonly",void 0),or_rule_list_decorate([(0,decorators.MZ)({type:Boolean})],OrRuleList.prototype,"disabled",void 0),or_rule_list_decorate([(0,decorators.MZ)({type:Boolean})],OrRuleList.prototype,"multiSelect",void 0),or_rule_list_decorate([(0,decorators.MZ)({type:Array})],OrRuleList.prototype,"selectedIds",void 0),or_rule_list_decorate([(0,decorators.MZ)({type:String})],OrRuleList.prototype,"sortBy",void 0),or_rule_list_decorate([(0,decorators.MZ)({type:String})],OrRuleList.prototype,"language",void 0),or_rule_list_decorate([(0,decorators.MZ)({attribute:!1})],OrRuleList.prototype,"_nodes",void 0),or_rule_list_decorate([(0,decorators.MZ)({attribute:!1})],OrRuleList.prototype,"_showLoading",void 0),or_rule_list_decorate([(0,decorators.MZ)({type:Boolean})],OrRuleList.prototype,"_globalRulesets",void 0),OrRuleList=OrRuleList_1=or_rule_list_decorate([(0,decorators.EM)("or-rule-list")],OrRuleList);lit.AH`
    *:invalid {
        border-bottom: 2px solid var(--internal-or-rules-invalid-color);
    }
`;const buttonStyle=lit.AH`
    .button-clear {
        background: none;
        color: ${(0,lit.iz)(core_lib.Id)};
        --or-icon-fill: ${(0,lit.iz)(core_lib.Id)};
        visibility: hidden;
        display: inline-block;
        border: none;
        padding: 0;
        cursor: pointer;
    }

    .button-clear:hover {
        --or-icon-fill: var(--internal-or-rules-button-color);
    }

    .button-clear:focus {
        outline: 0;
    }

    .button-clear.hidden {
        visibility: hidden;
    }

    .plus-button {
        --or-icon-fill: var(--internal-or-rules-button-color);
    }
    
    .add-button {
        display: inline-block;
        font-weight: bold;
        font-size: 15px;
        line-height: 24px;
    }

    .add-buttons-container {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        margin-bottom: -10px;
        padding-top: 5px;
        border-top-width: 1px;
        border-top-style: solid;
        border-color: var(--internal-or-rules-line-color);
    }

    .add-buttons-container.hidden {
        border: none;
        margin: 0;
        padding: 0;
    }
    
    .add-buttons-container > button {
        display: inline-flex;
    }

    .add-buttons-container > button > or-icon {
        margin-right: 5px;
    }
`;var or_rule_radial_modal_decorate=function(e,t,r,o){var a,i=arguments.length,l=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(l=(i<3?a(l):i>3?a(t,r,l):a(t,r))||l);return i>3&&l&&Object.defineProperty(t,r,l),l};let OrRuleRadialModal=class extends((0,or_translate_lib.Tl)(i18next.Ay)(lit.WF)){constructor(){super(),this.addEventListener(or_mwc_dialog.wr.NAME,this.initRadialMap)}initRadialMap(){const e=this.shadowRoot.getElementById("radial-modal");if(!e)return;const t=e.shadowRoot.querySelector(".or-map");if(t){t.addEventListener(or_map_lib.fX.NAME,(t=>{const r=t.detail.lngLat,o=e.shadowRoot.querySelector(".location-lat"),a=e.shadowRoot.querySelector(".location-lng");o.value=r.lat,a.value=r.lng;const i=new Event("change");o.dispatchEvent(i),a.dispatchEvent(i),this.setValuePredicateProperty("lat",r.lat),this.setValuePredicateProperty("lng",r.lng)}));const r=e.shadowRoot.querySelector(".location-lat"),o=e.shadowRoot.querySelector(".location-lng");if(o.value&&r.value){const e=[parseFloat(o.value),parseFloat(r.value)];t.flyTo(e,15)}else t.flyTo()}}getAttributeName(e){return e&&e.name?e.name.value:void 0}setValuePredicateProperty(e,t){this.attributePredicate&&this.attributePredicate.value&&(this.attributePredicate.value[e]=t,this.attributePredicate=Object.assign({},this.attributePredicate),this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate())}renderDialogHTML(e){const t=this.shadowRoot.getElementById("radial-modal");t&&(t.content=lit.qy`
                <div style="display:grid">
                    <or-map class="or-map" type="VECTOR" style="border: 1px solid #d5d5d5; height: 400px; min-width: 300px; margin-bottom: 20px;">
                        <or-map-marker active color="#FF0000" icon="information" lat="${e.lat}" lng="${e.lng}" radius="${e.radius}"></or-map-marker>
                    </or-map>
                
                    <div class="layout horizontal">
                        <input hidden class="location-lng"  required placeholder=" " type="text" .value="${e&&e.lng?e.lng:null}" />
                        <input hidden class="location-lat" required placeholder=" " type="text" .value="${e&&e.lat?e.lat:null}" />
                    </div>

                    <label>${i18next.Ay.t("radiusMin")}</label>
                    <input @change="${e=>this.setValuePredicateProperty("radius",parseInt(e.target.value))}" style="max-width: calc(50% - 30px);" required placeholder=" " min="100" type="number" .value="${e&&e.radius?e.radius:100}" />
                </div>`)}render(){if(!this.attributePredicate)return lit.qy``;if(!this.query)return lit.qy``;const e=this.attributePredicate.value;if(!this.assetDescriptor||!e)return lit.qy``;this.getAttributeName(this.attributePredicate),getAssetTypeFromQuery(this.query);const t=e||void 0,r=[{actionName:"cancel",content:lit.qy`<or-mwc-input class="button" .type="${or_mwc_input.NZ.BUTTON}" label="cancel"></or-mwc-input>`,action:()=>{}},{actionName:"ok",default:!0,content:lit.qy`<or-mwc-input class="button" .type="${or_mwc_input.NZ.BUTTON}" label="ok"></or-mwc-input>`,action:()=>{}}];return this.renderDialogHTML(t),lit.qy`
            <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" label="area" @or-mwc-input-changed="${()=>{const e=this.shadowRoot.getElementById("radial-modal");e&&(e.dismissAction=null,e.open(),this.renderDialogHTML(t))}}"></or-mwc-input>
            <or-mwc-dialog id="radial-modal" heading="area" .actions="${r}"></or-mwc-dialog>
        `}};or_rule_radial_modal_decorate([(0,decorators.MZ)({type:Object})],OrRuleRadialModal.prototype,"assetDescriptor",void 0),or_rule_radial_modal_decorate([(0,decorators.MZ)({type:Object})],OrRuleRadialModal.prototype,"attributePredicate",void 0),or_rule_radial_modal_decorate([(0,decorators.MZ)({type:Object})],OrRuleRadialModal.prototype,"query",void 0),OrRuleRadialModal=or_rule_radial_modal_decorate([(0,decorators.EM)("or-rule-radial-modal")],OrRuleRadialModal);var or_rule_asset_query_decorate=function(e,t,r,s){var a,i=arguments.length,o=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,s);else for(var u=e.length-1;u>=0;u--)(a=e[u])&&(o=(i<3?a(o):i>3?a(t,r,o):a(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o},or_rule_asset_query_awaiter=function(e,t,r,s){return new(r||(r=Promise))((function(a,i){function o(e){try{n(s.next(e))}catch(e){i(e)}}function u(e){try{n(s.throw(e))}catch(e){i(e)}}function n(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,u)}n((s=s.apply(e,t||[])).next())}))};const or_rule_asset_query_style=lit.AH`
    
    ${buttonStyle}
    
    :host {
        display: block;
    }
    
    .attribute-group {
        flex-grow: 1;
        display: flex;
        align-items: start;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .min-width {
        min-width: 200px;
    }
    
    .attribute-group > * {
        margin: 10px 3px 6px 3px;
    }
    .attributes {
        flex: 1 1 min-content;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
    or-icon.small {
        --or-icon-width: 14px;
        --or-icon-height: 14px;
    }
    .attribute {
        display: flex;
        align-items: center;
    }
    .attribute > div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
    }    
    .attribute > div > * {
        min-width: 200px;
    }
    .button-clear {
        margin-left: auto;
    }
    .attribute:hover .button-clear {
        visibility: visible;
    }
    
    .invalidLabel {
        display: flex;
        align-items: center;
        margin: 14px 3px auto 0;
        height: 48px; /* Same as the icon size */
    }
`;let OrRuleAssetQuery=class extends((0,or_translate_lib.Tl)(i18next.Ay)(lit.WF)){constructor(){super(),this._queryOperatorsMap={},this._queryOperatorsMap.GEO_JSONPoint=[AssetQueryOperator.EQUALS,AssetQueryOperator.NOT_EQUALS,AssetQueryOperator.WITHIN_RADIUS,AssetQueryOperator.OUTSIDE_RADIUS,AssetQueryOperator.WITHIN_RECTANGLE,AssetQueryOperator.OUTSIDE_RECTANGLE,AssetQueryOperator.VALUE_EMPTY,AssetQueryOperator.VALUE_NOT_EMPTY],this._queryOperatorsMap.string=[AssetQueryOperator.EQUALS,AssetQueryOperator.NOT_EQUALS,AssetQueryOperator.CONTAINS,AssetQueryOperator.NOT_CONTAINS,AssetQueryOperator.STARTS_WITH,AssetQueryOperator.NOT_STARTS_WITH,AssetQueryOperator.ENDS_WITH,AssetQueryOperator.NOT_ENDS_WITH,AssetQueryOperator.VALUE_EMPTY,AssetQueryOperator.VALUE_NOT_EMPTY],this._queryOperatorsMap.number=[AssetQueryOperator.EQUALS,AssetQueryOperator.NOT_EQUALS,AssetQueryOperator.GREATER_THAN,AssetQueryOperator.GREATER_EQUALS,AssetQueryOperator.LESS_THAN,AssetQueryOperator.LESS_EQUALS,AssetQueryOperator.BETWEEN,AssetQueryOperator.NOT_BETWEEN,AssetQueryOperator.VALUE_EMPTY,AssetQueryOperator.VALUE_NOT_EMPTY],this._queryOperatorsMap.boolean=[AssetQueryOperator.IS_TRUE,AssetQueryOperator.IS_FALSE,AssetQueryOperator.VALUE_EMPTY,AssetQueryOperator.VALUE_NOT_EMPTY],this._queryOperatorsMap.array=[AssetQueryOperator.CONTAINS,AssetQueryOperator.NOT_CONTAINS,AssetQueryOperator.INDEX_CONTAINS,AssetQueryOperator.NOT_INDEX_CONTAINS,AssetQueryOperator.LENGTH_EQUALS,AssetQueryOperator.NOT_LENGTH_EQUALS,AssetQueryOperator.LENGTH_LESS_THAN,AssetQueryOperator.LENGTH_GREATER_THAN,AssetQueryOperator.VALUE_EMPTY,AssetQueryOperator.VALUE_NOT_EMPTY],this._queryOperatorsMap.object=[AssetQueryOperator.CONTAINS_KEY,AssetQueryOperator.NOT_CONTAINS_KEY,AssetQueryOperator.VALUE_EMPTY,AssetQueryOperator.VALUE_NOT_EMPTY]}refresh(){this._assets=void 0}attributePredicateEditorTemplate(e,t,r){const s=e.assetDescriptor,a=this.getOperator(r),i=this.getAttributeName(r);let o=t&&t.attributes&&i?t.attributes[i]:void 0,u=[];const n=model_lib.u0.getAttributeAndValueDescriptors(t?t.type:s.name,o||i,o);u=t&&t.attributes?Object.values(t.attributes).filter((e=>e.meta&&(e.meta.hasOwnProperty("ruleState")?e.meta.ruleState:e.meta.hasOwnProperty("agentLink")))).map((e=>{const r=model_lib.u0.getAttributeAndValueDescriptors(t.type,e.name,e),s=core_lib.J0.getAttributeLabel(e,r[0],t.type,!1);return[e.name,s]})):e&&e.attributeDescriptors?e.attributeDescriptors.map((e=>{const t=model_lib.u0.getAttributeAndValueDescriptors(s.name,e),r=core_lib.J0.getAttributeLabel(void 0,t?t[0]:void 0,s.name,!1);return[e.name,r]})):[],u.sort(core_lib.J0.sortByString((e=>e[1])));const p=i?this.getOperators(s,n?n[0]:void 0,n?n[1]:void 0,o,i):[];return lit.qy`
            <or-mwc-input type="${or_mwc_input.NZ.SELECT}" @or-mwc-input-changed="${e=>this.setAttributeName(r,e.detail.value)}" .readonly="${this.readonly||!1}" .options="${u}" .value="${i}" .label="${i18next.Ay.t("attribute")}"></or-mwc-input>
            ${i?lit.qy`<or-mwc-input type="${or_mwc_input.NZ.SELECT}" @or-mwc-input-changed="${e=>this.setOperator(s,o,i,r,e.detail.value)}" .readonly="${this.readonly||!1}" .options="${p}" .value="${a}" .label="${i18next.Ay.t("operator")}"></or-mwc-input>`:""}
            ${r?this.attributePredicateValueEditorTemplate(s,t,r):""}
        `}attributePredicateValueEditorTemplate(e,t,r){var s,a,i,o,u,n,p;const l=r.value;if(!e||!l)return"";const y=this.getAttributeName(r),A=getAssetTypeFromQuery(this.query),d=t&&t.attributes&&y?t.attributes[y]:void 0,c=model_lib.u0.getAttributeAndValueDescriptors(A,y,d),T=l?l.value:void 0;switch(l.predicateType){case"string":return lit.qy`<or-attribute-input @or-attribute-input-changed="${e=>this.setValuePredicateProperty(l,"value",e.detail.value)}" .customProvider="${null===(s=this.config)||void 0===s?void 0:s.inputProvider}" .label="${i18next.Ay.t("value")}" .assetType="${A}" .attributeDescriptor="${c[0]}" .attributeValueDescriptor="${c[1]}" .value="${T}" .readonly="${this.readonly||!1}" .fullWidth="${!0}"></or-attribute-input>`;case"boolean":return lit.qy``;case"datetime":case"rect":default:return lit.qy`<span>NOT IMPLEMENTED</span>`;case"number":if("BETWEEN"===l.operator)return lit.qy`
                        <or-attribute-input .inputType="${or_mwc_input.NZ.NUMBER}" @or-attribute-input-changed="${e=>this.setValuePredicateProperty(l,"value",e.detail.value)}" .customProvider="${null===(a=this.config)||void 0===a?void 0:a.inputProvider}" .label="${i18next.Ay.t("between")}" .assetType="${A}" .attributeDescriptor="${c[0]}" .attributeValueDescriptor="${c[1]}" .value="${T}" .readonly="${this.readonly||!1}" .fullWidth="${!0}"></or-attribute-input>
                        <span style="display: inline-flex; align-items: center;">&</span>
                        <or-attribute-input .inputType="${or_mwc_input.NZ.NUMBER}" @or-attribute-input-changed="${e=>this.setValuePredicateProperty(l,"rangeValue",e.detail.value)}" .customProvider="${null===(i=this.config)||void 0===i?void 0:i.inputProvider}" .label="${i18next.Ay.t("and")}" .assetType="${A}" .attributeDescriptor="${c[0]}" .attributeValueDescriptor="${c[1]}" .value="${l.rangeValue}" .readonly="${this.readonly||!1}" .fullWidth="${!0}"></or-attribute-input>
                    `;let t;return(null===(u=null===(o=c[0])||void 0===o?void 0:o.format)||void 0===u?void 0:u.asSlider)&&(t=or_mwc_input.NZ.NUMBER),lit.qy`<or-attribute-input .inputType="${(0,if_defined.J)(t)}" @or-attribute-input-changed="${e=>this.setValuePredicateProperty(l,"value",e.detail.value)}" .customProvider="${null===(n=this.config)||void 0===n?void 0:n.inputProvider}" .label="" .assetType="${A}" .attributeDescriptor="${c[0]}" .attributeValueDescriptor="${c[1]}" .value="${T}" .readonly="${this.readonly||!1}" .fullWidth="${!0}"></or-attribute-input>`;case"radial":return lit.qy`<or-rule-radial-modal .query="${this.query}" .assetDescriptor="${e}" .attributePredicate="${r}"></or-rule-radial-modal>`;case"value-empty":return"";case"array":return lit.qy`<or-attribute-input @or-attribute-input-changed="${e=>this.setValuePredicateProperty(l,"value",e.detail.value)}" .customProvider="${null===(p=this.config)||void 0===p?void 0:p.inputProvider}" .label="" .assetType="${A}" .attributeDescriptor="${c[0]}" .attributeValueDescriptor="${c[1]}" .value="${T}" .readonly="${this.readonly||!1}" .fullWidth="${!0}></or-attribute-input>`}}static get styles(){return or_rule_asset_query_style}shouldUpdate(e){return e.has("condition")&&(this._assets=void 0),super.shouldUpdate(e)}get query(){return this.condition.assets}render(){const e=getAssetTypeFromQuery(this.query);if(!e)return lit.qy`<span class="invalidLabel">${i18next.Ay.t("errorOccurred")}</span>`;const t=this.assetInfos?this.assetInfos.find((t=>t.assetDescriptor.name===e)):void 0;if(!t)return lit.qy`<span class="invalidLabel">${i18next.Ay.t("errorOccurred")}</span>`;this._assets||this.loadAssets(e),this.query.attributes||(this.query.attributes={}),this.query.attributes.items&&0!==this.query.attributes.items.length||(this.query.attributes.items=[{}]);const r=!this.readonly&&this.query.attributes&&this.query.attributes.items&&this.query.attributes.items.length>1,s=getAssetIdsFromQuery(this.query),a=s&&s.length>0?s[0]:"*",i=[["*",i18next.Ay.t("anyOfThisType")]];let o;return lit.qy`
            <div class="attribute-group">
            
                <!-- Show SELECT input with 'loading' until the assets are retrieved -->
                ${(0,when.z)(!this._assets,(()=>lit.qy`
                    <or-mwc-input id="idSelect" class="min-width" type="${or_mwc_input.NZ.SELECT}" .readonly="${!0}" .label="${i18next.Ay.t("loading")}"></or-mwc-input>
                `),(()=>{this._assets.length<=25?i.push(...this._assets.map((e=>[e.id,e.name]))):o=e=>or_rule_asset_query_awaiter(this,void 0,void 0,(function*(){var t;if(e)return this._assets.filter((t=>{var r;return null===(r=t.name)||void 0===r?void 0:r.toLowerCase().includes(e.toLowerCase())})).map((e=>[e.id,e.name]));if(this._assets.length<=100)return i.push(...this._assets.map((e=>[e.id,e.name]))),i;{const e=null===(t=this._assets)||void 0===t?void 0:t.find((e=>e.id==a));return e&&null==i.find((([t,r])=>t==e.id))&&i.push([e.id,e.name]),i}}));const e=!(this.readonly||this.config&&this.config.controls&&!0===this.config.controls.hideWhenAddAttribute);return lit.qy`
                        <or-mwc-input id="idSelect" class="min-width filledSelect" type="${or_mwc_input.NZ.SELECT}" .readonly="${this.readonly||!1}" .label="${i18next.Ay.t("asset")}" 
                                      .options="${i}" .value="${a}" .searchProvider="${o}"
                                      @or-mwc-input-changed="${e=>{this._assetId=e.detail.value,this.refresh()}}"
                        ></or-mwc-input>
                        <div class="attributes">
                            ${this.query.attributes&&this.query.attributes.items?this.query.attributes.items.map(((e,s)=>lit.qy`
                                    ${s>0?lit.qy`<or-icon class="small" icon="ampersand"></or-icon>`:""}
                                    <div class="attribute">
                                        <div>
                                    ${this.attributePredicateEditorTemplate(t,"*"!==a?this._assets.find((e=>e.id===a)):void 0,e)}
                                        </div>
                                    ${r?lit.qy`
                                        <button class="button-clear" @click="${()=>this.removeAttributePredicate(this.query.attributes,e)}"><or-icon icon="close-circle"></or-icon></input>
                                    </div>`:""}
                                `)):""}
                            ${e?lit.qy`
                                <or-mwc-input class="plus-button" type="${or_mwc_input.NZ.BUTTON}" icon="plus"
                                              label="rulesEditorAddAttribute" @or-mwc-input-changed="${e=>this.addAttributePredicate(this.query.attributes)}"></or-mwc-input>
                            `:""}
                        </div>
                    `}))}
            </div>
        `}set _assetId(e){this.query.ids=e&&"*"!==e?[e]:void 0,this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate()}getAttributeName(e){return e&&e.name?e.name.value:void 0}setAttributeName(e,t){e.name||(e.name={predicateType:"string"}),e.name.match="EXACT",e.name.value=t,e.value=void 0,this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate()}getOperatorMapValue(e,t,r,s,a){if(t&&r&&e[t+":"+r])return e[t+":"+r];if(a){if(e[a.name])return e[a.name];if(e[a.jsonType])return e[a.jsonType];if(a.arrayDimensions)return e.array}}getOperators(e,t,r,s,a){let i;return this.config&&this.config.controls&&this.config.controls.allowedAssetQueryOperators&&(i=this.getOperatorMapValue(this.config.controls.allowedAssetQueryOperators,getAssetTypeFromQuery(this.query),a,t,r)),i||(i=this.getOperatorMapValue(this._queryOperatorsMap,getAssetTypeFromQuery(this.query),a,t,r)),i?i.map((e=>[e,i18next.Ay.t(e)])):[]}getOperator(e){if(!e||!e.value)return;const t=e.value;switch(t.predicateType){case"string":switch(t.match){case"EXACT":return t.negate?AssetQueryOperator.NOT_EQUALS:AssetQueryOperator.EQUALS;case"BEGIN":return t.negate?AssetQueryOperator.NOT_STARTS_WITH:AssetQueryOperator.STARTS_WITH;case"END":return t.negate?AssetQueryOperator.NOT_ENDS_WITH:AssetQueryOperator.ENDS_WITH;case"CONTAINS":return t.negate?AssetQueryOperator.NOT_CONTAINS:AssetQueryOperator.CONTAINS}return;case"boolean":return t.value?AssetQueryOperator.IS_TRUE:AssetQueryOperator.IS_FALSE;case"datetime":case"number":switch(t.operator){case"EQUALS":return t.negate?AssetQueryOperator.NOT_EQUALS:AssetQueryOperator.EQUALS;case"GREATER_THAN":return t.negate?AssetQueryOperator.LESS_EQUALS:AssetQueryOperator.GREATER_THAN;case"GREATER_EQUALS":return t.negate?AssetQueryOperator.LESS_THAN:AssetQueryOperator.GREATER_EQUALS;case"LESS_THAN":return t.negate?AssetQueryOperator.GREATER_EQUALS:AssetQueryOperator.LESS_THAN;case"LESS_EQUALS":return t.negate?AssetQueryOperator.GREATER_THAN:AssetQueryOperator.LESS_EQUALS;case"BETWEEN":return t.negate?AssetQueryOperator.NOT_BETWEEN:AssetQueryOperator.BETWEEN}return;case"radial":return t.negated?AssetQueryOperator.OUTSIDE_RADIUS:AssetQueryOperator.WITHIN_RADIUS;case"rect":return t.negated?AssetQueryOperator.OUTSIDE_RECTANGLE:AssetQueryOperator.WITHIN_RECTANGLE;case"array":return t.value&&t.index?t.negated?AssetQueryOperator.NOT_INDEX_CONTAINS:AssetQueryOperator.INDEX_CONTAINS:t.lengthEquals?t.negated?AssetQueryOperator.NOT_LENGTH_EQUALS:AssetQueryOperator.LENGTH_EQUALS:t.lengthGreaterThan?t.negated?AssetQueryOperator.LENGTH_LESS_THAN:AssetQueryOperator.LENGTH_GREATER_THAN:t.lengthLessThan?t.negated?AssetQueryOperator.LENGTH_GREATER_THAN:AssetQueryOperator.LENGTH_LESS_THAN:t.negated?AssetQueryOperator.NOT_CONTAINS:AssetQueryOperator.CONTAINS;case"value-empty":return t.negate?AssetQueryOperator.VALUE_NOT_EMPTY:AssetQueryOperator.VALUE_EMPTY}}setOperator(e,t,r,s,a){if(!this.query||!this.query.attributes||!this.query.attributes.items||0===this.query.attributes.items.length)return;if(!a)return s.value=void 0,this.dispatchEvent(new OrRulesJsonRuleChangedEvent),void this.requestUpdate();const i=model_lib.u0.getAttributeAndValueDescriptors(e.name,t||r),o=a;if(!i||!i[1]||!o)return s.value=void 0,this.dispatchEvent(new OrRulesJsonRuleChangedEvent),void this.requestUpdate();const u=i[1];let n;switch(o){case AssetQueryOperator.INDEX_CONTAINS:case AssetQueryOperator.NOT_INDEX_CONTAINS:case AssetQueryOperator.LENGTH_EQUALS:case AssetQueryOperator.NOT_LENGTH_EQUALS:case AssetQueryOperator.LENGTH_LESS_THAN:case AssetQueryOperator.LENGTH_GREATER_THAN:u.arrayDimensions&&(n={predicateType:"array",negated:o===AssetQueryOperator.NOT_INDEX_CONTAINS||o===AssetQueryOperator.NOT_LENGTH_EQUALS,index:o===AssetQueryOperator.INDEX_CONTAINS||o===AssetQueryOperator.NOT_INDEX_CONTAINS?0:void 0,lengthEquals:o===AssetQueryOperator.LENGTH_EQUALS||o===AssetQueryOperator.NOT_LENGTH_EQUALS?0:void 0,lengthGreaterThan:o===AssetQueryOperator.LENGTH_GREATER_THAN?0:void 0,lengthLessThan:o===AssetQueryOperator.LENGTH_GREATER_THAN?0:void 0});break;case AssetQueryOperator.WITHIN_RADIUS:case AssetQueryOperator.OUTSIDE_RADIUS:n={predicateType:"radial",negated:o===AssetQueryOperator.OUTSIDE_RADIUS,lat:0,lng:0,radius:50};break;case AssetQueryOperator.WITHIN_RECTANGLE:case AssetQueryOperator.OUTSIDE_RECTANGLE:n={predicateType:"rect",negated:o===AssetQueryOperator.OUTSIDE_RECTANGLE,latMin:-.1,lngMin:-.1,latMax:.1,lngMax:.1};break;case AssetQueryOperator.IS_TRUE:case AssetQueryOperator.IS_FALSE:if("boolean"===u.jsonType){n={predicateType:"boolean",value:o===AssetQueryOperator.IS_TRUE};break}case AssetQueryOperator.STARTS_WITH:case AssetQueryOperator.NOT_STARTS_WITH:"string"===u.jsonType&&(n={predicateType:"string",negate:o===AssetQueryOperator.NOT_STARTS_WITH,match:"BEGIN"});break;case AssetQueryOperator.ENDS_WITH:case AssetQueryOperator.NOT_ENDS_WITH:"string"===u.jsonType&&(n={predicateType:"string",negate:o===AssetQueryOperator.NOT_ENDS_WITH,match:"END"});break;case AssetQueryOperator.NOT_BETWEEN:n="number"===u.jsonType||"bigint"===u.jsonType?{predicateType:"number",operator:"BETWEEN",negate:!0}:{predicateType:"datetime",operator:"BETWEEN",negate:!0};break;case AssetQueryOperator.GREATER_THAN:case AssetQueryOperator.GREATER_EQUALS:case AssetQueryOperator.LESS_THAN:case AssetQueryOperator.LESS_EQUALS:case AssetQueryOperator.BETWEEN:const e=core_lib.J0.getEnumKeyAsString(AssetQueryOperator,o);n="number"===u.jsonType?{predicateType:"number",operator:e}:{predicateType:"datetime",operator:e};break;case AssetQueryOperator.EQUALS:case AssetQueryOperator.NOT_EQUALS:"date"===u.jsonType?n={predicateType:"datetime",negate:o===AssetQueryOperator.NOT_EQUALS,operator:"EQUALS"}:"number"===u.jsonType?n={predicateType:"number",negate:o===AssetQueryOperator.NOT_EQUALS,operator:"EQUALS"}:"string"===u.jsonType&&(n={predicateType:"string",negate:o===AssetQueryOperator.NOT_EQUALS,match:"EXACT"});break;case AssetQueryOperator.VALUE_EMPTY:n={predicateType:"value-empty"};break;case AssetQueryOperator.VALUE_NOT_EMPTY:n={predicateType:"value-empty",negate:!0};break;case AssetQueryOperator.CONTAINS:case AssetQueryOperator.NOT_CONTAINS:u.arrayDimensions?n={predicateType:"array",negated:o===AssetQueryOperator.NOT_CONTAINS}:"string"===u.jsonType&&(n={predicateType:"string",negate:o===AssetQueryOperator.NOT_CONTAINS,match:"CONTAINS"})}s.value=n,this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate()}get attributePredicate(){return this.query&&this.query.attributes&&this.query.attributes.items&&this.query.attributes.items.length>0?this.query.attributes.items[0]:void 0}setValuePredicateProperty(e,t,r){e&&(e[t]=r,this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate())}removeAttributePredicate(e,t){const r=e.items.indexOf(t);r>=0&&e.items.splice(r,1),this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate()}addAttributePredicate(e){e.items||(e.items=[]),e.items.push({}),this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate()}toggleAttributeGroup(e){"OR"===e.operator?e.operator="AND":e.operator="OR",this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate()}loadAssets(e){this.assetProvider(e).then((e=>{this._assets=e}))}};or_rule_asset_query_decorate([(0,decorators.MZ)({type:Object,attribute:!1})],OrRuleAssetQuery.prototype,"condition",void 0),or_rule_asset_query_decorate([(0,decorators.MZ)({type:Object})],OrRuleAssetQuery.prototype,"config",void 0),or_rule_asset_query_decorate([(0,decorators.MZ)({type:Object})],OrRuleAssetQuery.prototype,"assetInfos",void 0),or_rule_asset_query_decorate([(0,decorators.MZ)({type:Object})],OrRuleAssetQuery.prototype,"assetProvider",void 0),or_rule_asset_query_decorate([(0,decorators.wk)()],OrRuleAssetQuery.prototype,"_assets",void 0),OrRuleAssetQuery=or_rule_asset_query_decorate([(0,decorators.EM)("or-rule-asset-query")],OrRuleAssetQuery);var or_rule_trigger_query_decorate=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};const or_rule_trigger_query_style=lit.AH`
    
    ${buttonStyle}
    
    :host {
        display: block;
    }
    
    .trigger-group {
        flex-grow: 1;
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .min-width {
        min-width: 200px;
    }
    .width {
        width: 200px;
    }
    
    .trigger-group > * {
        margin: 10px 3px 6px 3px;
    }
`;let OrRuleTriggerQuery=class extends lit.WF{static get styles(){return or_rule_trigger_query_style}constructor(){super(),this.readonly=!1,this.triggerOptions=[],Object.values(TimeTriggerType).forEach((t=>{this.triggerOptions.push({key:t,value:this.triggerToString(t)})})),this.getSunPositions().forEach((t=>{this.triggerOptions.push({key:t,value:this.triggerToString(t)})})),this.selectedTrigger=this.triggerOptions[0],this.addEventListener(or_mwc_dialog.wr.NAME,this.initMap)}updated(t){t.has("condition")&&(this.condition.cron?this.selectedTrigger={key:TimeTriggerType.TIME_OF_DAY,value:this.triggerToString(TimeTriggerType.TIME_OF_DAY)}:this.condition.sun&&(this.selectedTrigger={key:this.condition.sun.position,value:this.triggerToString(this.condition.sun.position)}))}initMap(){const t=this.shadowRoot.getElementById("map-modal");if(!t)return;const e=t.shadowRoot.querySelector(".or-map");e&&e.addEventListener(or_map_lib.fX.NAME,(e=>{const i=e.detail.lngLat;this.setLocation({type:"Point",coordinates:[i.lat,i.lng]});const o=t.shadowRoot.querySelector(".location-lat"),n=t.shadowRoot.querySelector(".location-lng");o.value=i.lat,n.value=i.lng}))}renderDialogHTML(t){const e=this.shadowRoot.getElementById("map-modal");e&&(e.content=lit.qy`
                <div style="display:grid">
                    <or-map class="or-map" type="VECTOR" style="border: 1px solid #d5d5d5; height: 400px; min-width: 300px; margin-bottom: 20px;">
                        ${t&&t.coordinates?lit.qy`
                            <or-map-marker class="or-map-marker" active color="#FF0000" icon="white-balance-sunny" lat="${t.coordinates[0]}" lng="${t.coordinates[1]}"></or-map-marker>
                        `:void 0}
                    </or-map>
                    <div class="layout horizontal">
                        <input hidden class="location-lng"  required placeholder=" " type="text" .value="${t&&t.coordinates?t.coordinates[0]:null}" />
                        <input hidden class="location-lat" required placeholder=" " type="text" .value="${t&&t.coordinates?t.coordinates[1]:null}" />
                    </div>
                </div>
            `)}render(){var t,e;const i=[{actionName:"close",default:!0,content:lit.qy`<or-mwc-input class="button" .type="${or_mwc_input.NZ.BUTTON}" label="close"></or-mwc-input>`,action:()=>{}}];return this.renderDialogHTML(null===(t=this.condition.sun)||void 0===t?void 0:t.location),lit.qy`
            <div class="trigger-group">
                <or-mwc-input class="min-width" type="${or_mwc_input.NZ.SELECT}" .options="${this.triggerOptions.map((t=>t.value))}" .value="${this.selectedTrigger.value}" label="${or_translate_lib.MR.t("triggerType")}"
                              @or-mwc-input-changed="${t=>{this.setTrigger(this.triggerOptions.find((e=>e.value==t.detail.value)))}}">
                </or-mwc-input>
                ${this.selectedTrigger?lit.qy`
                    ${this.selectedTrigger.key==this.triggerOptions[0].key?lit.qy`
                        <or-mwc-input class="min-width" type="${or_mwc_input.NZ.TIME}" .value="${this.condition.cron?moment_default()(core_lib.J0.cronStringToISOString(this.condition.cron,!0)).format("HH:mm"):void 0}" label="${or_translate_lib.MR.t("timeOfDay")}"
                                      @or-mwc-input-changed="${t=>{this.setTime(t.detail.value)}}">
                        </or-mwc-input>
                    `:lit.qy`
                        <or-mwc-input class="min-width width" type="${or_mwc_input.NZ.NUMBER}" .value="${null===(e=this.condition.sun)||void 0===e?void 0:e.offsetMins}" label="${or_translate_lib.MR.t("offsetInMinutes")}"
                                      @or-mwc-input-changed="${t=>{this.setOffset(t.detail.value)}}">
                        </or-mwc-input>
                        <or-mwc-input type="${or_mwc_input.NZ.BUTTON}" class="min-width" @or-mwc-input-changed="${()=>{var t;const e=this.shadowRoot.getElementById("map-modal");e&&(e.dismissAction=null,e.open(),this.renderDialogHTML(null===(t=this.condition.sun)||void 0===t?void 0:t.location))}}" label="location"></or-mwc-input>
                        <or-mwc-dialog id="map-modal" heading="${or_translate_lib.MR.t("pickLocation")}" .actions="${i}"></or-mwc-dialog>
                    `}
                `:void 0}
            </div>
        `}setTrigger(t){t&&(t.key==TimeTriggerType.TIME_OF_DAY?this.condition.sun=void 0:this.getSunPositions().includes(t.key)&&(this.condition.cron=void 0,this.getSunPositions().includes(this.selectedTrigger.key)?this.condition.sun={position:t.key,offsetMins:this.condition.sun.offsetMins,location:this.condition.sun.location}:this.condition.sun={position:t.key,offsetMins:0}),this.selectedTrigger=t,this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate())}setTime(t){if(t){const e=t.split(":"),i=new Date;i.setHours(Number(e[0])),i.setMinutes(Number(e[1])),this.condition.cron=core_lib.J0.formatCronString(void 0,void 0,void 0,i.getUTCHours().toString(),i.getUTCMinutes().toString()),this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate()}}setOffset(t){var e,i;this.condition.sun={position:null===(e=this.condition.sun)||void 0===e?void 0:e.position,location:null===(i=this.condition.sun)||void 0===i?void 0:i.location,offsetMins:t},this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate()}setLocation(t){var e,i;this.condition.sun={position:null===(e=this.condition.sun)||void 0===e?void 0:e.position,location:t,offsetMins:null===(i=this.condition.sun)||void 0===i?void 0:i.offsetMins},this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate()}getSunPositions(){return["TWILIGHT_MORNING_CIVIL","SUNRISE","SUNSET","TWILIGHT_EVENING_CIVIL"]}triggerToString(t){return t==TimeTriggerType.TIME_OF_DAY?or_translate_lib.MR.t("timeOfDay"):or_translate_lib.MR.t(t.toLowerCase())}};or_rule_trigger_query_decorate([(0,decorators.MZ)({type:Object,attribute:!1})],OrRuleTriggerQuery.prototype,"condition",void 0),or_rule_trigger_query_decorate([(0,decorators.MZ)()],OrRuleTriggerQuery.prototype,"readonly",void 0),or_rule_trigger_query_decorate([(0,decorators.wk)()],OrRuleTriggerQuery.prototype,"selectedTrigger",void 0),or_rule_trigger_query_decorate([(0,decorators.wk)()],OrRuleTriggerQuery.prototype,"triggerOptions",void 0),OrRuleTriggerQuery=or_rule_trigger_query_decorate([(0,decorators.EM)("or-rule-trigger-query")],OrRuleTriggerQuery);var or_rule_condition_decorate=function(e,t,o,r){var s,i=arguments.length,n=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(i<3?s(n):i>3?s(t,o,n):s(t,o))||n);return i>3&&n&&Object.defineProperty(t,o,n),n};function getWhenTypesMenu(e,t){let o=!0,r=!0,s=!0;e&&e.controls&&e.controls.allowedConditionTypes&&(o=e.controls.allowedConditionTypes.indexOf("assetQuery")>=0,r=e.controls.allowedConditionTypes.indexOf("agentQuery")>=0,s=e.controls.allowedConditionTypes.indexOf("time")>=0);const i=[];if(t){if(o){const e=t.filter((e=>"agent"!==e.assetDescriptor.descriptorType)).map((e=>{const t=model_lib.u0.getAssetDescriptorColour(e),o=model_lib.u0.getAssetDescriptorIcon(e),r=t?{"--or-icon-fill":"#"+t}:void 0;return{text:core_lib.J0.getAssetTypeLabel(e.assetDescriptor),value:e.assetDescriptor.name,icon:o||model_lib.u0.getAssetDescriptorIcon("ThingAsset"),styleMap:r}}));i.push(...e.sort(core_lib.J0.sortByString((e=>e.text))))}if(o&&r&&i.push(null),r){const e=t.filter((e=>"agent"===e.assetDescriptor.descriptorType)).map((e=>{const t=model_lib.u0.getAssetDescriptorColour(e),o=model_lib.u0.getAssetDescriptorIcon(e),r=t?{"--or-icon-fill":"#"+t}:void 0;return{text:core_lib.J0.getAssetTypeLabel(e.assetDescriptor),value:e.assetDescriptor.name,icon:o||model_lib.u0.getAssetDescriptorIcon("ThingAsset"),styleMap:r}}));i.push(...e.sort(core_lib.J0.sortByString((e=>e.text))))}}return s&&(i.push(null),i.push({text:or_translate_lib.MR.t("time"),icon:"timer",value:"time",styleMap:{"--or-icon-fill":"#4b87ea"}})),i}function updateRuleConditionType(e,t,o){if(t)if("time"===t){e.assets=void 0;const t=new Date;e.cron=core_lib.J0.formatCronString(void 0,void 0,void 0,t.getUTCHours().toString(),t.getUTCMinutes().toString())}else e.cron=void 0,o&&o.json&&o.json.whenAssetQuery?e.assets=JSON.parse(JSON.stringify(o.json.whenAssetQuery)):e.assets={},e.assets.types=[t];else e.assets=void 0,e.cron=void 0,e.sun=void 0}const or_rule_condition_style=lit.AH`
    :host {
        display: flex;
        flex-direction: row;
    }
    
    or-rule-asset-query {
        flex-grow: 1;
    }

    #type {
        white-space: nowrap;
        text-transform: capitalize;
        margin: 14px 3px auto 0;
    }
`;let OrRuleCondition=class extends((0,or_translate_lib.Tl)(or_translate_lib.MR)(lit.WF)){constructor(){super(...arguments),this.readonly=!1}static get styles(){return or_rule_condition_style}render(){const e=!this.config||!this.config.controls||!0!==this.config.controls.hideConditionTypeOptions,t=this.type;if(!t&&!e)return lit.qy`<span>INVALID CONFIG - NO TYPE SPECIFIED AND TYPE SELECTOR DISABLED</span>`;let o="",r="";if(e){let e,r="inherit";if(t)if("time"===t)e="timer",r="4b87ea";else{const o=model_lib.u0.getAssetDescriptor(t);e=model_lib.u0.getAssetDescriptorIcon(o)||e,r=model_lib.u0.getAssetDescriptorColour(o)||r}o=this.readonly?lit.qy`
                <div id="type" style="--or-mwc-input-color: #${r}">
                    <or-mwc-input readonly type="${or_mwc_input.NZ.BUTTON}" .icon="${e||""}"></or-mwc-input>
                </div>
                `:lit.qy`
                <div id="type" style="--or-mwc-input-color: #${r}">
                    ${(0,or_mwc_menu.Xj)(lit.qy`<or-mwc-input type="${or_mwc_input.NZ.BUTTON}" .icon="${e||""}"></or-mwc-input>`,getWhenTypesMenu(this.config,this.assetInfos),t,(e=>this.type=e))}
                </div>
            `}return t&&(r="time"===t?lit.qy`<or-rule-trigger-query id="asset-query" .condition="${this.ruleCondition}"></or-rule-trigger-query>`:lit.qy`<or-rule-asset-query id="asset-query" .config="${this.config}" .assetInfos="${this.assetInfos}" .readonly="${this.readonly}"
                                                         .condition="${this.ruleCondition}" .assetProvider="${this.assetProvider}"
                    ></or-rule-asset-query>`),lit.qy`
            ${o}        
            ${r}
        `}get type(){return getAssetTypeFromQuery(this.ruleCondition.assets)||(this.ruleCondition.cron||this.ruleCondition.sun?"time":void 0)}set type(e){updateRuleConditionType(this.ruleCondition,e,this.config),this._assetQuery&&this._assetQuery.refresh(),this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate()}};or_rule_condition_decorate([(0,decorators.MZ)({type:Object,attribute:!1})],OrRuleCondition.prototype,"ruleCondition",void 0),or_rule_condition_decorate([(0,decorators.MZ)({type:Object})],OrRuleCondition.prototype,"config",void 0),or_rule_condition_decorate([(0,decorators.MZ)({type:Object})],OrRuleCondition.prototype,"assetInfos",void 0),or_rule_condition_decorate([(0,decorators.MZ)({type:Object})],OrRuleCondition.prototype,"assetProvider",void 0),or_rule_condition_decorate([(0,decorators.P)("#asset-query")],OrRuleCondition.prototype,"_assetQuery",void 0),OrRuleCondition=or_rule_condition_decorate([(0,decorators.EM)("or-rule-condition")],OrRuleCondition);var OrRuleWhen_1,ResetOption,or_rule_when_decorate=function(e,t,o,n){var r,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(s=(i<3?r(s):i>3?r(t,o,s):r(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s};!function(e){e.NO_LONGER_MATCHES="noLongerMatches",e.VALUE_CHANGES="valueChanges"}(ResetOption||(ResetOption={}));const or_rule_when_style=lit.AH`
    
    :host {
        display: block;
    }
    
    ${buttonStyle}
    
    .rule-group-items {
        display: flex;
        flex-direction: column;
    }
    
    .rule-group .rule-group-items > div {
        margin: 10px 0;
    }
    
    .rule-condition {
        display: flex;
        padding-right: 5px;
    }
     
    .rule-condition > * {
        flex-grow: 0;
    }
    
    .rule-condition > or-rule-condition {
        flex-grow: 1;
    }
    
    or-rule-condition {
        margin-bottom: 10px;
    }

    .rule-group-item > or-icon {
        padding-left: 17px;
    }
    
    or-icon.small {
        --or-icon-width: 14px;
        --or-icon-height: 14px;
    }
    
    or-panel {
        margin: 10px 10px 20px 10px;
        position: relative;
    }
    
    or-panel > .remove-button {
        position: absolute;
        right: 0;
        top: 0;
        width: 24px;
        height: 24px;
        transform: translate(50%, -50%);
    }

    .rule-condition:hover .button-clear {
        visibility: visible;
    }

    or-panel:hover .remove-button.button-clear {
        visibility: visible;
    }
    
    .add-button-wrapper {
        display: flex;
        align-items: center;
        white-space: nowrap;
    }
    
    .add-button-wrapper > * {
        margin-right: 6px;
    }
    
    .add-button-wrapper or-mwc-menu {
        text-transform: capitalize;
    }

    strong {
        margin: var(--internal-or-panel-heading-margin);
        font-size: var(--internal-or-panel-heading-font-size);
    }
`;let OrRuleWhen=OrRuleWhen_1=class extends((0,or_translate_lib.Tl)(i18next.Ay)(lit.WF)){static get styles(){return or_rule_when_style}ruleGroupTemplate(e,t){if(!e)return lit.qy``;const o=!t,n=!(this.readonly||this.config&&this.config.controls&&!0===this.config.controls.hideWhenAddCondition),r=!this.readonly,i=!this.readonly;let s;s=o?(e,t,o,n,r)=>lit.qy`
                    <or-panel .heading="${i18next.Ay.t(r?"when":"orWhen")}...">
                        ${i?lit.qy`
                            <button class="button-clear remove-button" @click="${()=>this.removeItem(t,o,n)}">
                                <or-icon icon="close-circle"></or-icon>  
                            </button>
                        `:""}
                        ${e}
                    </or-panel>`:(e,t,o,n,r)=>lit.qy`
                    ${r?"":lit.qy`
                        <or-icon class="small" icon="ampersand"></or-icon>
                    `}
                    ${e}
                `;let l="",p="",u="",a=!0;return e.groups&&e.groups.length>0&&(l=lit.qy`
                ${e.groups.map(((t,o)=>{const n=lit.qy`
                        <div class="rule-group-item">
                            ${this.ruleGroupTemplate(t,e)}
                        </div>
                    `;return s(n,t,e,!0,0==o)}))}
            `,a=!1),e.items&&e.items.length>0&&(p=lit.qy`
                ${e.items.map(((t,o)=>{const n=lit.qy`
                        <div class="rule-group-item">
                            <div class="rule-condition">
                                <or-rule-condition .config="${this.config}" .assetInfos="${this.assetInfos}" .ruleCondition="${t}" .readonly="${this.readonly}" .assetProvider="${this.assetProvider}"></or-rule-condition>
                                ${i?lit.qy`
                                    <button class="button-clear ${r?"":"hidden"}" @click="${()=>this.removeItem(t,e,!1)}"><or-icon icon="close-circle"></or-icon></input>
                                `:""}
                            </div>
                        </div>
                    `;return s(n,t,e,!0,a&&0===o)}))}
            `,a=!1),!o&&n&&(u=lit.qy`
                <span class="add-button-wrapper">
                    ${(0,or_mwc_menu.Xj)(lit.qy`<or-mwc-input class="plus-button" type="${or_mwc_input.NZ.BUTTON}" icon="plus"
                                           .label="${i18next.Ay.t("rulesEditorAddCondition")}"></or-mwc-input>`,getWhenTypesMenu(this.config,this.assetInfos),void 0,(t=>this.addCondition(e,t)))}
                </span>
            `),lit.qy`
            ${l}
            ${p}
            ${u}
        `}dateTimePredicateTemplate(){return lit.qy`<span>DATE TIME PREDICATE NOT IMPLEMENTED</span>`}shouldUpdate(e){return e.has("rule")&&this.rule&&(this.rule.when?OrRuleWhen_1._isRuleWhenCompatible(this.rule.when)||(this.rule=void 0,this.dispatchEvent(new OrRulesRuleUnsupportedEvent)):this.rule.when={operator:"OR"}),super.shouldUpdate(e)}render(){if(!this.rule||!this.rule.when)return lit.qy``;const e=!(this.readonly||this.config&&this.config.controls&&!0===this.config.controls.hideWhenAddGroup);return lit.qy`
            <div>
                ${this.ruleGroupTemplate(this.rule.when)}
            </div>
            
            ${e?lit.qy`
                <or-panel>
                    <strong>${i18next.Ay.t(this.rule.when.groups&&0!==this.rule.when.groups.length?"orWhen":"when")}...</strong>
                    <span class="add-button-wrapper">
                        ${(0,or_mwc_menu.Xj)(lit.qy`<or-mwc-input class="plus-button" type="${or_mwc_input.NZ.BUTTON}" icon="plus"></or-mwc-input>`,getWhenTypesMenu(this.config,this.assetInfos),void 0,(e=>this.addGroup(this.rule.when,e)))}
                    </span>
                </or-panel>
            `:""}
        `}static _isRuleWhenCompatible(e){return"OR"!==e.operator?(console.warn("Incompatible rule: when operator not set to 'OR'"),!1):e.items&&e.items.length>0?(console.warn("Incompatible rule: when items not supported"),!1):!e.groups||!e.groups.find((e=>!this._isWhenGroupCompatible(e)))||(console.warn("Incompatible rule: when groups incompatible"),!1)}static _isWhenGroupCompatible(e){return"OR"===e.operator?(console.warn("Incompatible rule: when group operator not set to 'AND'"),!1):!(e.groups&&e.groups.length>0&&(console.warn("Incompatible rule: when group nested groups not supported"),1))}addGroup(e,t){if(!this.rule||!this.rule.when||e!==this.rule.when)return;let o={operator:"AND"};return this.config&&this.config.json&&this.config.json.whenGroup&&(o=JSON.parse(JSON.stringify(this.config.json.whenGroup))),"AND"!==o.operator?(console.warn("JSON rules editor doesn't support top level logic group with type OR"),void this.dispatchEvent(new OrRulesRuleUnsupportedEvent)):o.groups&&o.groups.length>0?(console.warn("JSON rules editor doesn't support multiple top level logic groups"),void this.dispatchEvent(new OrRulesRuleUnsupportedEvent)):(o.groups=void 0,o.items&&0!==o.items.length||this.addCondition(o,t,!0),e.groups||(e.groups=[]),e.groups.push(o),this.dispatchEvent(new OrRulesJsonRuleChangedEvent),void this.requestUpdate())}removeItem(e,t,o){let n=!1;if(t){if(o){const o=t.groups.indexOf(e);t.groups.splice(o,1),n=o>=0}else{const o=t.items.indexOf(e);t.items.splice(o,1),n=o>=0}n&&(this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate())}}addCondition(e,t,o){if(!e)return;e.items||(e.items=[]);let n={};this.config&&this.config.json&&this.config.json.whenCondition?n=JSON.parse(JSON.stringify(this.config.json.whenCondition)):updateRuleConditionType(n,t||"ThingAsset",this.config),e.items.push(n),o||(this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate())}};or_rule_when_decorate([(0,decorators.MZ)({type:Object})],OrRuleWhen.prototype,"rule",void 0),or_rule_when_decorate([(0,decorators.MZ)({type:Boolean})],OrRuleWhen.prototype,"readonly",void 0),or_rule_when_decorate([(0,decorators.MZ)({type:Object})],OrRuleWhen.prototype,"assetProvider",void 0),or_rule_when_decorate([(0,decorators.MZ)({type:Object,attribute:!1})],OrRuleWhen.prototype,"assetInfos",void 0),OrRuleWhen=OrRuleWhen_1=or_rule_when_decorate([(0,decorators.EM)("or-rule-when")],OrRuleWhen);var or_rule_action_attribute_decorate=function(t,e,i,s){var r,o=arguments.length,a=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(a=(o<3?r(a):o>3?r(e,i,a):r(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a},or_rule_action_attribute_awaiter=function(t,e,i,s){return new(i||(i=Promise))((function(r,o){function a(t){try{u(s.next(t))}catch(t){o(t)}}function n(t){try{u(s.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,n)}u((s=s.apply(t,e||[])).next())}))};const or_rule_action_attribute_style=lit.AH`
    :host {
        display: flex;
        align-items: center;

        flex-wrap: wrap;
    }

    :host > * {
        margin: 0 3px 6px;
    }

    .min-width {
        min-width: 200px;
    }
`;let OrRuleActionAttribute=class extends((0,or_translate_lib.Tl)(i18next.Ay)(lit.WF)){static get styles(){return or_rule_action_attribute_style}shouldUpdate(t){return t.has("action")&&(this._assets=void 0),super.shouldUpdate(t)}refresh(){this._assets=void 0}_getAssetType(){if(!this.action.target)return;const t=this.action.target.assets?this.action.target.assets:this.action.target.matchedAssets?this.action.target.matchedAssets:void 0;return t?getAssetTypeFromQuery(t):void 0}render(){if(!this.action.target)return lit.qy``;const t=this._getAssetType();if(!t)return lit.qy``;const e=this.action.target.assets?this.action.target.assets:this.action.target.matchedAssets?this.action.target.matchedAssets:void 0,i=this.assetInfos?this.assetInfos.find((e=>e.assetDescriptor.name===t)):void 0;if(!i)return lit.qy``;this._assets||this.loadAssets(t);const s=getAssetIdsFromQuery(e),r=s&&s.length>0?s[0]:"*",o=[["*",i18next.Ay.t("matched")]];let a;return lit.qy`
            
            <!-- Show SELECT input with 'loading' until the assets are retrieved -->
            ${(0,when.z)(!this._assets,(()=>lit.qy`
                <or-mwc-input id="matchSelect" class="min-width" type="${or_mwc_input.NZ.SELECT}" .readonly="${!0}" .label="${i18next.Ay.t("loading")}"></or-mwc-input>
            `),(()=>{var e,s,n;this._assets.length<=25?o.push(...this._assets.map((t=>[t.id,t.name]))):a=t=>or_rule_action_attribute_awaiter(this,void 0,void 0,(function*(){var e;if(t)return this._assets.filter((e=>{var i;return null===(i=e.name)||void 0===i?void 0:i.toLowerCase().includes(t.toLowerCase())})).map((t=>[t.id,t.name]));if(this._assets.length<=100)return o.push(...this._assets.map((t=>[t.id,t.name]))),o;{const t=null===(e=this._assets)||void 0===e?void 0:e.find((t=>t.id==r));return t&&null==o.find((([e,i])=>e==t.id))&&o.push([t.id,t.name]),o}}));const u=r&&"*"!==r?this._assets.find((t=>t.id===r)):void 0,l=model_lib.u0.getAttributeAndValueDescriptors(t,this.action.attributeName,u&&u.attributes&&this.action.attributeName?u.attributes[this.action.attributeName]:void 0);let c,p=[];if(u&&u.attributes)p=Object.values(u.attributes).map((e=>{const i=core_lib.J0.getAttributeLabel(e,l[0],t,!1);return[e.name,i]}));else if(i){const e=model_lib.u0.getAssetTypeInfo(i);p=e&&e.attributeDescriptors?e.attributeDescriptors.map((e=>{const i=core_lib.J0.getAttributeLabel(e,l[0],t,!1);return[e.name,i]})):[]}if(p.sort(core_lib.J0.sortByString((t=>t[1]))),this.action.attributeName){const i=l[1]&&"boolean"===l[1].name?"":i18next.Ay.t("value");let r;(null===(s=null===(e=l[0])||void 0===e?void 0:e.format)||void 0===s?void 0:s.asSlider)&&(r=or_mwc_input.NZ.NUMBER),c=lit.qy`<or-attribute-input ?compact=${l[1]&&"GEO_JSONPoint"===l[1].name} .inputType="${(0,if_defined.J)(r)}" @or-attribute-input-changed="${t=>this.setActionAttributeValue(t.detail.value)}" .customProvider="${null===(n=this.config)||void 0===n?void 0:n.inputProvider}" .label="${i}" .assetType="${t}" .attributeDescriptor="${l[0]}" .attributeValueDescriptor="${l[1]}" .value="${this.action.value}" .readonly="${this.readonly||!1}"></or-attribute-input>`}return lit.qy`
                    <or-mwc-input id="matchSelect" class="min-width" .label="${i18next.Ay.t("asset")}" .type="${or_mwc_input.NZ.SELECT}"
                                  .options="${o}" .searchProvider="${a}" .value="${r}" .readonly="${this.readonly||!1}"
                                  @or-mwc-input-changed="${t=>{this._assetId=t.detail.value,this.refresh()}}"
                    ></or-mwc-input>
                    ${p.length>0?lit.qy`
                        <or-mwc-input id="attributeSelect" class="min-width" .label="${i18next.Ay.t("attribute")}" .type="${or_mwc_input.NZ.SELECT}" @or-mwc-input-changed="${t=>this.setActionAttributeName(t.detail.value)}" .readonly="${this.readonly||!1}" ?searchable="${p.length>=25}" .options="${p}" .value="${this.action.attributeName}"></or-mwc-input>
                        ${c}
                    `:lit.qy`
                        <or-translate value="No attributes with write permission"></or-translate>
                    `}
                `}))}
        `}set _assetId(t){const e=this._getAssetType();"*"===t?(this.action.target.assets=void 0,this.action.target={matchedAssets:{types:[e||""]}}):(this.action.target.matchedAssets=void 0,this.action.target={assets:{ids:[t],types:[e||""]}}),this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate()}setActionAttributeName(t){this.action.attributeName=t,this.action.value=void 0,this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate()}setActionAttributeValue(t){this.action.value=t,this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate()}loadAssets(t){this.assetProvider(t).then((t=>{this._assets=t}))}};or_rule_action_attribute_decorate([(0,decorators.MZ)({type:Object,attribute:!1})],OrRuleActionAttribute.prototype,"action",void 0),or_rule_action_attribute_decorate([(0,decorators.MZ)({type:Object,attribute:!1})],OrRuleActionAttribute.prototype,"targetTypeMap",void 0),or_rule_action_attribute_decorate([(0,decorators.MZ)({type:Object})],OrRuleActionAttribute.prototype,"config",void 0),or_rule_action_attribute_decorate([(0,decorators.MZ)({type:Object})],OrRuleActionAttribute.prototype,"assetInfos",void 0),or_rule_action_attribute_decorate([(0,decorators.MZ)({type:Object})],OrRuleActionAttribute.prototype,"assetProvider",void 0),or_rule_action_attribute_decorate([(0,decorators.MZ)({type:Array,attribute:!1})],OrRuleActionAttribute.prototype,"_assets",void 0),OrRuleActionAttribute=or_rule_action_attribute_decorate([(0,decorators.EM)("or-rule-action-attribute")],OrRuleActionAttribute);var or_rule_notification_modal_decorate=function(t,o,e,i){var r,n=arguments.length,c=n<3?o:null===i?i=Object.getOwnPropertyDescriptor(o,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,o,e,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(n<3?r(c):n>3?r(o,e,c):r(o,e))||c);return n>3&&c&&Object.defineProperty(o,e,c),c};const checkValidity=(t,o)=>{if(t){const e=t.querySelectorAll("or-mwc-input");Array.prototype.slice.call(e).every((t=>{if(t.shadowRoot){const o=t.shadowRoot.querySelector("input, textarea, select");return!(!o||!o.checkValidity())||(t._mdcComponent.valid=!1,t._mdcComponent.helperTextContent="required",!1)}return!1}))&&o.close()}};let OrRuleNotificationModal=class extends((0,or_translate_lib.Tl)(i18next.Ay)(lit.WF)){constructor(){super(),this.title="message",this.addEventListener(or_mwc_dialog.wr.NAME,this.initDialog)}initDialog(){this.shadowRoot.getElementById("notification-modal")}renderDialogHTML(t){const o=this.shadowRoot.getElementById("notification-modal");if(!this.shadowRoot)return;const e=this.shadowRoot.querySelector(".notification-form-slot");if(o&&e){let t=document.createElement("div");e.assignedNodes({flatten:!0}).forEach((o=>{o instanceof HTMLElement&&t.appendChild(o)})),o.content=lit.qy`${t}`,o.dismissAction=null,this.requestUpdate()}}firstUpdated(t){t.has("action")&&this.renderDialogHTML(this.action)}checkForm(){const t=this.shadowRoot.host;if(this.shadowRoot){const o=this.shadowRoot.querySelector("or-rule-form-email-message"),e=this.shadowRoot.querySelector("or-rule-form-push-notification");if(e&&e.shadowRoot){const o=e.shadowRoot.querySelector("form");return checkValidity(o,t)}if(o&&o.shadowRoot){const e=o.shadowRoot.querySelector("form");return checkValidity(e,t)}}}render(){if(!this.action)return lit.qy``;const t=[{actionName:"cancel",content:lit.qy`<or-mwc-input class="button" .type="${or_mwc_input.NZ.BUTTON}" label="cancel"></or-mwc-input>`,action:t=>{}},{actionName:"",content:lit.qy`<or-mwc-input class="button" .type="${or_mwc_input.NZ.BUTTON}" label="ok" @or-mwc-input-changed="${this.checkForm}"></or-mwc-input>`}];return lit.qy`
            <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" label="message" @or-mwc-input-changed="${()=>{const t=this.shadowRoot.getElementById("notification-modal");t&&t.open()}}"></or-mwc-input>
            <or-mwc-dialog id="notification-modal" heading="${this.title}" .actions="${t}"></or-mwc-dialog>
            <slot class="notification-form-slot"></slot>
        `}};or_rule_notification_modal_decorate([(0,decorators.MZ)({type:Object,attribute:!1})],OrRuleNotificationModal.prototype,"action",void 0),or_rule_notification_modal_decorate([(0,decorators.MZ)({type:String})],OrRuleNotificationModal.prototype,"title",void 0),or_rule_notification_modal_decorate([(0,decorators.MZ)({type:Object})],OrRuleNotificationModal.prototype,"query",void 0),OrRuleNotificationModal=or_rule_notification_modal_decorate([(0,decorators.EM)("or-rule-notification-modal")],OrRuleNotificationModal);var or_rule_form_email_message_decorate=function(e,t,o,i){var r,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,o,s):r(t,o))||s);return n>3&&s&&Object.defineProperty(t,o,s),s};let OrRuleFormEmailMessage=class extends((0,or_translate_lib.Tl)(i18next.Ay)(lit.WF)){static get styles(){return lit.AH`
            or-mwc-input {
                margin-bottom: 20px;
                min-width: 420px;
                width: 100%;
            }
        `}render(){const e=this.action.notification.message;return lit.qy`
            <form style="display:grid">
                <or-mwc-input value="${e&&e.subject?e.subject:""}" @or-mwc-input-changed="${e=>this.setActionNotificationName(e.detail.value,"subject")}" .label="${i18next.Ay.t("subject")}" type="${or_mwc_input.NZ.TEXT}" required placeholder=" "></or-mwc-input>
                <or-mwc-input value="${e&&e.html?e.html:""}" @or-mwc-input-changed="${e=>this.setActionNotificationName(e.detail.value,"html")}" .label="${i18next.Ay.t("message")}" type="${or_mwc_input.NZ.TEXTAREA}" required placeholder=" " ></or-mwc-input>
            </form>
        `}setActionNotificationName(e,t){if(t&&this.action.notification&&this.action.notification.message){const o=this.action.notification.message;o[t]=e,this.action.notification.message=Object.assign({},o)}this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate()}};or_rule_form_email_message_decorate([(0,decorators.MZ)({type:Object,attribute:!1})],OrRuleFormEmailMessage.prototype,"action",void 0),OrRuleFormEmailMessage=or_rule_form_email_message_decorate([(0,decorators.EM)("or-rule-form-email-message")],OrRuleFormEmailMessage);var set=__webpack_require__("../../../node_modules/lodash-es/set.js"),or_rule_form_push_notification_decorate=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let OrRuleFormPushNotification=class extends((0,or_translate_lib.Tl)(i18next.Ay)(lit.WF)){static get styles(){return lit.AH`
            or-mwc-input {
                margin-bottom: 20px;
                min-width: 420px;
                width: 100%;
            }
        `}updated(t){if(t.has("action")){let t=this.action.notification.message;this.action.notification&&t&&!t.action&&(t={type:"push",action:{openInBrowser:!0}},this.action.notification.message=Object.assign(Object.assign({},this.action.notification.message),t))}}render(){const t=this.action.notification.message,e=t&&t.title?t.title:"",i=t&&t.body?t.body:"",o=t&&t.action?t.action:"",n=o&&o.url?o.url:"",r=t&&t.buttons?t.buttons:[];return lit.qy`
            <form style="display:grid">
                <or-mwc-input value="${e}" 
                    @or-mwc-input-changed="${t=>this.setActionNotificationName(t.detail.value,"title")}" 
                    .label="${i18next.Ay.t("subject")}" 
                    type="${or_mwc_input.NZ.TEXT}" 
                    required 
                    placeholder=" "></or-mwc-input>

                <or-mwc-input value="${i}" 
                    @or-mwc-input-changed="${t=>this.setActionNotificationName(t.detail.value,"body")}" 
                    .label="${i18next.Ay.t("message")}" 
                    type="${or_mwc_input.NZ.TEXTAREA}" 
                    required 
                    placeholder=" " ></or-mwc-input>
                <or-mwc-input value="${n}" 
                    @or-mwc-input-changed="${t=>this.setActionNotificationName(t.detail.value,"action.url")}" 
                    .label="${i18next.Ay.t("openWebsiteUrl")}" 
                    type="${or_mwc_input.NZ.TEXT}" 
                    required 
                    placeholder=" "></or-mwc-input>

                <or-mwc-input .value="${!o||void 0===o.openInBrowser||o&&o.openInBrowser}" 
                    @or-mwc-input-changed="${t=>this.setActionNotificationName(t.detail.value,"action.openInBrowser")}" 
                    .label="${i18next.Ay.t("openInBrowser")}" 
                    type="${or_mwc_input.NZ.SWITCH}" 
                    placeholder=" "></or-mwc-input>  
                
                <or-mwc-input value="${r&&r[0]&&r[0].title?r[0].title:""}" 
                    @or-mwc-input-changed="${t=>this.setActionNotificationName(t.detail.value,"buttons.0.title")}" 
                    .label="${i18next.Ay.t("buttonTextConfirm")}" 
                    type="${or_mwc_input.NZ.TEXT}" 
                    required 
                    placeholder=" "></or-mwc-input>
                <or-mwc-input value="${r&&r[1]&&r[1].title?r[1].title:""}" 
                    @or-mwc-input-changed="${t=>this.setActionNotificationName(t.detail.value,"buttons.1.title")}" 
                    .label="${i18next.Ay.t("buttonTextDecline")}" 
                    type="${or_mwc_input.NZ.TEXT}" 
                    placeholder=" "></or-mwc-input>
            </form>
        `}setActionNotificationName(t,e){if(e&&this.action.notification&&this.action.notification.message){let i=this.action.notification.message;(0,set.A)(i,e,t),e.includes("action")&&(0,set.A)(i,"buttons.0."+e,t),this.action.notification.message=Object.assign({},i)}this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate()}};or_rule_form_push_notification_decorate([(0,decorators.MZ)({type:Object,attribute:!1})],OrRuleFormPushNotification.prototype,"action",void 0),OrRuleFormPushNotification=or_rule_form_push_notification_decorate([(0,decorators.EM)("or-rule-form-push-notification")],OrRuleFormPushNotification);var OrRuleActionNotification_1,or_rule_action_notification_decorate=function(t,e,i,r){var s,a=arguments.length,o=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(o=(a<3?s(o):a>3?s(e,i,o):s(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o},or_rule_action_notification_awaiter=function(t,e,i,r){return new(i||(i=Promise))((function(s,a){function o(t){try{l(r.next(t))}catch(t){a(t)}}function n(t){try{l(r.throw(t))}catch(t){a(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,n)}l((r=r.apply(t,e||[])).next())}))};const or_rule_action_notification_style=lit.AH`
    :host {
        display: flex;
        align-items: center;
    }

    :host > * {
        margin: 0 3px 6px;
    }

    .min-width {
        min-width: 200px;
    }
`;let OrRuleActionNotification=OrRuleActionNotification_1=class extends lit.WF{static get styles(){return or_rule_action_notification_style}static getActionTargetTemplate(t,e,i,r,s,a,o,n){let l=[["USER",or_translate_lib.MR.t("user_plural")],["ASSET",or_translate_lib.MR.t("asset_plural")],["REALM",or_translate_lib.MR.t("realm_plural")],["CUSTOM",or_translate_lib.MR.t("custom")]];if(s&&s.controls&&s.controls.allowedActionTargetTypes){let t;t=s.controls.allowedActionTargetTypes.actions?s.controls.allowedActionTargetTypes.actions[i]:s.controls.allowedActionTargetTypes.default,t&&(l=l.filter((e=>null==t?void 0:t.includes(e[0]))))}if(0===l.length)return void console.warn("Rule action config doesn't allow any action target types for this type of action");let c,u="ASSET";if(e.target&&(!e.target.users||e.target.conditionAssets||e.target.matchedAssets||e.target.assets?e.target.linkedUsers?u="USER":void 0===e.target.custom||e.target.conditionAssets||e.target.matchedAssets||e.target.assets||(u="CUSTOM"):u="USER"),l.find((t=>t[0]===u))||(u=void 0),"CUSTOM"===u){const t=lit.qy`
                <or-mwc-input class="min-width" .type="${or_mwc_input.NZ.TEXT}" @or-mwc-input-changed="${t=>n(u,t.detail.value)}" ?readonly="${r}" .value="${e.target.custom}" ></or-mwc-input>            
            `;c=Promise.resolve(t)}else{let i,s,o;if("USER"===u){const t={realmPredicate:{name:core_lib.Ay.displayRealm},select:{basic:!0},serviceUsers:!1,attributes:[{name:{value:"systemAccount",predicateType:"string"},negated:!0}]};i=core_lib.Ay.rest.api.UserResource.query(t).then((t=>or_rule_action_notification_awaiter(this,void 0,void 0,(function*(){const e=or_translate_lib.MR.t("linked");let i=(yield core_lib.Ay.rest.api.RealmResource.get(core_lib.Ay.displayRealm)).data.realmRoles.filter((t=>core_lib.J0.realmRoleFilter(t))).map((t=>["linked-"+t.name,e+": "+or_translate_lib.MR.t("realmRole."+t.name,core_lib.J0.camelCaseToSentenceCase(t.name.replace("_"," ").replace("-"," ")))])),r=t.data.map((t=>[t.id,t.username]));return[["linkedUsers",e],...i,...r]})))),s=or_translate_lib.MR.t("user_plural");const r=e.target.users;if(e.target.linkedUsers)if(r&&r.realmRoles){if(r.realmRoles.length>1)return void console.warn("Rule action user target query is unsupported: "+JSON.stringify(r,null,2));o="linked-"+r.realmRoles[0].value}else o="linkedUsers";else{if(!r)return void console.warn("Rule action user target query is unsupported: "+JSON.stringify(r,null,2));if(r.ids&&r.ids.length>1||r.usernames||r.assets||r.limit||r.pathPredicate||r.realmPredicate)return void console.warn("Rule action user target query is unsupported: "+JSON.stringify(r,null,2));r.ids&&1===r.ids.length&&(o=r.ids[0])}}else{const r=a?Object.assign({},a):{};if(r.orderBy={property:"NAME"},i=core_lib.Ay.rest.api.AssetResource.queryAssets(r).then((e=>{let i=e.data.map((t=>[t.id,t.name+" ("+t.id+")"]));const r=[["allMatched",or_translate_lib.MR.t("matched")]];return t&&t.length>1&&t.forEach((t=>{r.find((e=>e[0]===t[0]))||r.push([t[0],or_translate_lib.MR.t("matchedOfType",{type:core_lib.J0.getAssetTypeLabel(t[0])})])})),[...r,...i]})),s=or_translate_lib.MR.t("asset_plural"),e.target){if(e.target.conditionAssets)return void console.warn("Rule action asset target, conditionAssets is unsupported: "+JSON.stringify(e.target,null,2));if(e.target.matchedAssets){if(e.target.matchedAssets.types&&e.target.matchedAssets.types.length>1)return void console.warn("Rule action asset target, matchedAssets query unsupported: "+JSON.stringify(e.target,null,2));e.target.matchedAssets.types&&1===e.target.matchedAssets.types.length&&(o=e.target.matchedAssets.types[0])}else if(e.target.assets){if(e.target.assets.ids&&e.target.assets.ids.length>1)return void console.warn("Rule action asset target, assets query unsupported: "+JSON.stringify(e.target,null,2));e.target.assets.ids&&1===e.target.assets.ids.length&&(o=e.target.assets.ids[0])}}else o="allMatched"}c=i.then((t=>lit.qy`
                    <or-mwc-input type="${or_mwc_input.NZ.SELECT}" 
                        class="min-width"
                        .options="${t}"
                        .label="${s}"
                        .value="${o}"
                        @or-mwc-input-changed="${t=>n(u,t.detail.value)}" 
                        ?readonly="${r}"></or-mwc-input>
                `))}return c=c.then((t=>lit.qy`
                <or-mwc-input type="${or_mwc_input.NZ.SELECT}" 
                    class="min-width"
                    .options="${l}"
                    .value="${u}"
                    .label="${or_translate_lib.MR.t("recipients")}"
                    @or-mwc-input-changed="${t=>o(t.detail.value)}" 
                    ?readonly="${r}"></or-mwc-input>
                ${t}
            `)),c}render(){if(!this.action.notification||!this.action.notification.message)return lit.qy``;const t=this.action.notification.message,e=t.type;let i;i="push"===e?{types:["ConsoleAsset"]}:{attributes:{items:[{name:{predicateType:"string",value:"email"},value:{predicateType:"value-empty",negate:!0}}]}};let r=OrRuleActionNotification_1.getActionTargetTemplate(getTargetTypeMap(this.rule),this.action,this.actionType,!!this.readonly,this.config,i,(t=>this._onTargetTypeChanged(t)),((t,e)=>this._onTargetChanged(t,e))),s="";return r?(t&&("push"===e&&(s=lit.qy`
                    <or-rule-notification-modal title="push-notification" .action="${this.action}">
                        <or-rule-form-push-notification .action="${this.action}"></or-rule-form-push-notification>
                    </or-rule-notification-modal>
                `),"email"===e&&(s=lit.qy`
                    <or-rule-notification-modal title="email" .action="${this.action}">
                        <or-rule-form-email-message .action="${this.action}"></or-rule-form-email-message>
                    </or-rule-notification-modal>
                `)),r=r.then((t=>lit.qy`
                ${t}
                ${s}
            `)),lit.qy`${(0,until.T)(r,lit.qy``)}`):(this.dispatchEvent(new OrRulesRuleUnsupportedEvent),"")}_onTargetTypeChanged(t){"ASSET"===t?delete this.action.target:"USER"===t?this.action.target={users:{ids:[]}}:"CUSTOM"===t&&(this.action.target={custom:""}),this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate()}_onTargetChanged(t,e){switch(t){case"USER":"linkedUsers"===e?this.action.target={linkedUsers:!0}:(null==e?void 0:e.startsWith("linked-"))?this.action.target={users:{realmRoles:[{predicateType:"string",value:null==e?void 0:e.substring(7)}]},linkedUsers:!0}:e&&(this.action.target={users:{ids:[e]}});break;case"CUSTOM":this.action.target={custom:e};break;case"ASSET":e&&"allMatched"!==e?e.endsWith("Asset")?this.action.target={matchedAssets:{types:[e]}}:this.action.target={assets:{ids:[e]}}:delete this.action.target}this.dispatchEvent(new OrRulesJsonRuleChangedEvent)}};or_rule_action_notification_decorate([(0,decorators.MZ)({type:Object,attribute:!1})],OrRuleActionNotification.prototype,"rule",void 0),or_rule_action_notification_decorate([(0,decorators.MZ)({type:Object,attribute:!1})],OrRuleActionNotification.prototype,"action",void 0),or_rule_action_notification_decorate([(0,decorators.MZ)({type:String,attribute:!1})],OrRuleActionNotification.prototype,"actionType",void 0),or_rule_action_notification_decorate([(0,decorators.MZ)({type:Object})],OrRuleActionNotification.prototype,"assetInfos",void 0),or_rule_action_notification_decorate([(0,decorators.MZ)({type:Object})],OrRuleActionNotification.prototype,"config",void 0),OrRuleActionNotification=OrRuleActionNotification_1=or_rule_action_notification_decorate([(0,decorators.EM)("or-rule-action-notification")],OrRuleActionNotification);var or_rule_webhook_modal_decorate=function(e,t,o,r){var n,l=arguments.length,i=l<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(l<3?n(i):l>3?n(t,o,i):n(t,o))||i);return l>3&&i&&Object.defineProperty(t,o,i),i};let OrRuleWebhookModal=class extends lit.WF{constructor(){super(),this.title=or_translate_lib.MR.t("message")}firstUpdated(e){e.has("action")&&this.renderDialogHTML(this.action)}renderDialogHTML(e){const t=this.shadowRoot.getElementById("webhook-modal");if(!this.shadowRoot)return;const o=this.shadowRoot.querySelector(".webhook-form-slot");if(t&&o){let e=document.createElement("div");o.assignedNodes({flatten:!0}).forEach((t=>{t instanceof HTMLElement&&e.appendChild(t)})),t.content=lit.qy`${e}`,t.dismissAction=null,this.requestUpdate()}}closeForm(e){this.shadowRoot.host.close()}render(){if(!this.action)return lit.qy`${or_translate_lib.MR.t("errorOccurred")}`;const e=[{actionName:"",content:lit.qy`
                    <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" label="ok"
                                  @or-mwc-input-changed="${this.closeForm}"></or-mwc-input>`}];return lit.qy`
            <or-mwc-input type="${or_mwc_input.NZ.BUTTON}" label="message"
                          @or-mwc-input-changed="${()=>{const e=this.shadowRoot.getElementById("webhook-modal");e&&e.open()}}"></or-mwc-input>
            <or-mwc-dialog id="webhook-modal" heading="${this.title}" .actions="${e}"></or-mwc-dialog>
            <slot class="webhook-form-slot"></slot>
        `}};or_rule_webhook_modal_decorate([(0,decorators.MZ)({type:Object})],OrRuleWebhookModal.prototype,"action",void 0),or_rule_webhook_modal_decorate([(0,decorators.MZ)({type:String})],OrRuleWebhookModal.prototype,"title",void 0),OrRuleWebhookModal=or_rule_webhook_modal_decorate([(0,decorators.EM)("or-rule-webhook-modal")],OrRuleWebhookModal);var or_rule_form_webhook_decorate=function(e,t,o,i){var n,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,o,s):n(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};const or_rule_form_webhook_styling=lit.AH`
    .divider {
        border-bottom: 1px solid rgba(0, 0, 0, 12%);
    }
`;let OrRuleFormWebhook=class extends lit.WF{constructor(){super(...arguments),this.loading=!1,this.httpMethodOptions=["GET","POST","PUT","DELETE"],this.authMethodOptions=new Map([["username_password",or_translate_lib.MR.t("username")+" & "+or_translate_lib.MR.t("password")],["client_credentials","oauth Client Credentials Grant"],["password","oauth Password Grant"]])}static get styles(){return[or_rule_form_webhook_styling]}shouldUpdate(e){return e.has("webhook")&&null==this.webhook.headers&&(this.webhook.headers={}),super.shouldUpdate(e)}getAuthMethod(e){return null!=e.oAuthGrant?this.authMethodOptions.get(e.oAuthGrant.grant_type):this.authMethodOptions.get("username_password")}getOAuthGrant(e){return"client_credentials"==e||"password"==e?{grant_type:e}:void 0}reloadHeaders(){this.loading=!0,this.updateComplete.then((()=>this.loading=!1)),this.notifyWebhookUpdate(!1)}notifyWebhookUpdate(e=!0){e&&this.requestUpdate("webhook"),this.dispatchEvent(new OrRulesJsonRuleChangedEvent)}render(){return(0,when.z)(!this.webhook,(()=>lit.qy`
            ${or_translate_lib.MR.t("errorOccurred")}
        `),(()=>lit.qy`
            <form style="display: flex; flex-direction: column; min-width: 520px;">
                <!-- HTTP Method & URL -->
                <div style="display: flex; flex-direction: row; align-items: center; gap: 5px; margin-bottom: 28px;">
                    <or-mwc-input style="flex: 0;" type="${or_mwc_input.NZ.SELECT}" .value="${this.webhook.httpMethod}"
                                  .options="${this.httpMethodOptions}"
                                  @or-mwc-input-changed="${e=>{this.webhook.httpMethod=e.detail.value,this.notifyWebhookUpdate()}}"
                    ></or-mwc-input>
                    <or-mwc-input style="flex: 1;" type="${or_mwc_input.NZ.URL}" required label="${or_translate_lib.MR.t("webUrl")}"
                                  .value="${this.webhook.url}" helperPersistent
                                  @or-mwc-input-changed="${e=>{this.webhook.url=e.detail.value,this.notifyWebhookUpdate()}}"></or-mwc-input>
                </div>
                <!-- Headers -->
                <div style="display: flex; flex-direction: column; gap: 5px; margin-bottom: 28px;">
                    <span>Headers</span>
                    ${(0,when.z)(this.loading,(()=>lit.qy`
                        ${this.getHeadersTemplate(this.webhook.headers,!0)}
                    `),(()=>lit.qy`
                        ${this.getHeadersTemplate(this.webhook.headers,!1)}
                    `))}
                    <or-mwc-input type="${or_mwc_input.NZ.BUTTON}" icon="plus" label="addRequestHeader"
                                  @or-mwc-input-changed="${e=>{null!=(this.webhook.headers?this.webhook.headers[""]:void 0)?this.webhook.headers[""].push(""):this.webhook.headers[""]=[""],this.reloadHeaders()}}"></or-mwc-input>
                </div>
                <!-- Authorization -->
                <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: ${this.webhook.oAuthGrant||this.webhook.usernamePassword?"28px":"0"};">
                    <or-mwc-input type="${or_mwc_input.NZ.SWITCH}" fullwidth label="${or_translate_lib.MR.t("requiresAuthorization")}"
                                  .value="${this.webhook.oAuthGrant||this.webhook.usernamePassword}"
                                  @or-mwc-input-changed="${e=>{this.webhook.usernamePassword=e.detail.value?{username:"admin",password:"secret"}:void 0,this.notifyWebhookUpdate()}}"></or-mwc-input>
                    ${(0,when.z)(this.webhook.oAuthGrant||this.webhook.usernamePassword,(()=>{const e=Array.from(this.authMethodOptions.values());return lit.qy`
                            <or-mwc-input type="${or_mwc_input.NZ.SELECT}" label="${or_translate_lib.MR.t("method")}"
                                          .value="${this.getAuthMethod(this.webhook)}"
                                          .options="${e}"
                                          @or-mwc-input-changed="${e=>{const t=[...this.authMethodOptions.entries()].find((t=>t[1]==e.detail.value));this.webhook.oAuthGrant=this.getOAuthGrant(t[0]),this.notifyWebhookUpdate()}}"></or-mwc-input>
                            ${this.getAuthSettingsTemplate(this.webhook)}
                        `}))}
                </div>
                <!-- Payload -->
                <div style="display: flex; flex-direction: column; gap: 5px;">
                    ${(0,when.z)("GET"!=this.webhook.httpMethod&&"DELETE"!=this.webhook.httpMethod,(()=>lit.qy`
                        <or-mwc-input type="${or_mwc_input.NZ.SWITCH}" fullwidth label="${or_translate_lib.MR.t("includeBodyInRequest")}"
                                      .value="${null!=this.webhook.payload}"
                                      @or-mwc-input-changed="${e=>{this.webhook.payload=e.detail.value?JSON.stringify({rule:"%RULESET_NAME%",assets:"%TRIGGER_ASSETS%"},null,4):void 0,this.notifyWebhookUpdate()}}"
                        ></or-mwc-input>
                        ${(0,when.z)(null!=this.webhook.payload,(()=>lit.qy`
                                <or-mwc-input type="${or_mwc_input.NZ.TEXTAREA}" .value="${this.webhook.payload}"
                                              @or-mwc-input-changed="${e=>{this.webhook.payload=e.detail.value,this.notifyWebhookUpdate()}}"></or-mwc-input>
                            `))}
                    `))}
                </div>
            </form>
        `))}getHeadersTemplate(e,t){return Object.keys(this.webhook.headers).sort(((e,t)=>-e.localeCompare(t))).map(((e,o,i)=>{const n=this.webhook.headers[e];return n.map(((o,i)=>lit.qy`
                    <div style="display: flex; gap: 5px;">
                        <or-mwc-input type="${or_mwc_input.NZ.TEXT}" label="${or_translate_lib.MR.t("header")}" value="${e}"
                                      style="flex: 1;" .disabled="${t}"
                                      @or-mwc-input-changed="${t=>{n.length>0?n.splice(i,1):delete this.webhook.headers[e];const r=this.webhook.headers[t.detail.value];r&&r.length>0?r.push(o):this.webhook.headers[t.detail.value]=[o],this.reloadHeaders()}}"
                        ></or-mwc-input>
                        <or-mwc-input type="${or_mwc_input.NZ.TEXT}" label="${or_translate_lib.MR.t("value")}" value="${o}"
                                      style="flex: 1;" .disabled="${t}"
                                      @or-mwc-input-changed="${t=>{this.webhook.headers[e][i]=t.detail.value,this.notifyWebhookUpdate()}}"
                        ></or-mwc-input>
                        <or-mwc-input type="${or_mwc_input.NZ.BUTTON}" icon="delete" .disabled="${t}"
                                      @or-mwc-input-changed="${()=>{n.splice(i,1),this.reloadHeaders()}}"></or-mwc-input>
                    </div>
                `))}))}getAuthSettingsTemplate(e){var t,o;const i=e.oAuthGrant;return null==i?lit.qy`
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <or-mwc-input type="${or_mwc_input.NZ.TEXT}" label="${or_translate_lib.MR.t("username")}"
                                  .value="${null===(t=e.usernamePassword)||void 0===t?void 0:t.username}"
                                  @or-mwc-input-changed="${e=>{this.webhook.usernamePassword||(this.webhook.usernamePassword={}),this.webhook.usernamePassword.username=e.detail.value,this.notifyWebhookUpdate()}}"></or-mwc-input>
                    <or-mwc-input type="${or_mwc_input.NZ.TEXT}" label="${or_translate_lib.MR.t("password")}"
                                  .value="${null===(o=this.webhook.usernamePassword)||void 0===o?void 0:o.password}"
                                  @or-mwc-input-changed="${e=>{this.webhook.usernamePassword||(this.webhook.usernamePassword={}),this.webhook.usernamePassword.password=e.detail.value,this.notifyWebhookUpdate()}}"></or-mwc-input>
                </div>
            `:lit.qy`
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <div style="display: flex; flex-direction: row; align-items: center; gap: 5px;">
                        <or-mwc-input style="flex: 1;" type="${or_mwc_input.NZ.URL}" required
                                      label="${or_translate_lib.MR.t("tokenUrl")}" .value="${i.tokenEndpointUri}"
                                      @or-mwc-input-changed="${e=>{i.tokenEndpointUri=e.detail.value,this.notifyWebhookUpdate()}}"></or-mwc-input>
                    </div>
                    ${(0,when.z)(null!=i.grant_type,(()=>{switch(i.grant_type){case"client_credentials":{const e=i;return lit.qy`
                                    <or-mwc-input type="${or_mwc_input.NZ.TEXT}" label="${or_translate_lib.MR.t("clientId")}"
                                                  .value="${e.client_id}"
                                                  @or-mwc-input-changed="${t=>{e.client_id=t.detail.value,this.notifyWebhookUpdate()}}"></or-mwc-input>
                                    <or-mwc-input type="${or_mwc_input.NZ.PASSWORD}" label="${or_translate_lib.MR.t("clientSecret")}"
                                                  .value="${e.client_secret}"
                                                  @or-mwc-input-changed="${t=>{e.client_secret=t.detail.value,this.notifyWebhookUpdate()}}"></or-mwc-input>
                                `}case"password":{const e=i;return lit.qy`
                                    <or-mwc-input type="${or_mwc_input.NZ.TEXT}" label="${or_translate_lib.MR.t("username")}"
                                                  .value="${e.username}"
                                                  @or-mwc-input-changed="${t=>{e.username=t.detail.value,this.notifyWebhookUpdate()}}"></or-mwc-input>
                                    <or-mwc-input type="${or_mwc_input.NZ.TEXT}" label="${or_translate_lib.MR.t("password")}"
                                                  .value="${e.password}"
                                                  @or-mwc-input-changed="${t=>{e.password=t.detail.value,this.notifyWebhookUpdate()}}"></or-mwc-input>
                                `}default:return lit.qy`${or_translate_lib.MR.t("errorOccurred")}`}}))}
                </div>
            `}};or_rule_form_webhook_decorate([(0,decorators.MZ)({type:Object})],OrRuleFormWebhook.prototype,"webhook",void 0),or_rule_form_webhook_decorate([(0,decorators.wk)()],OrRuleFormWebhook.prototype,"loading",void 0),OrRuleFormWebhook=or_rule_form_webhook_decorate([(0,decorators.EM)("or-rule-form-webhook")],OrRuleFormWebhook);var or_rule_action_webhook_decorate=function(e,o,t,r){var i,l=arguments.length,c=l<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,o,t,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(c=(l<3?i(c):l>3?i(o,t,c):i(o,t))||c);return l>3&&c&&Object.defineProperty(o,t,c),c};const or_rule_action_webhook_style=lit.AH`
    :host {
        height: 100%;
        margin: 2px 3px auto 0;
    }

    :host > * {
        margin: 0 3px 6px;
    }

    .min-width {
        min-width: 200px;
    }
`;let OrRuleActionWebhook=class extends lit.WF{static get styles(){return or_rule_action_webhook_style}render(){return lit.qy`
            <div style="display: flex; align-items: center; height: 100%;">
                <or-rule-webhook-modal .action="${this.action}">
                    <or-rule-form-webhook .webhook="${this.action.webhook}"></or-rule-form-webhook>
                </or-rule-webhook-modal>
            </div>
        `}};or_rule_action_webhook_decorate([(0,decorators.MZ)({type:Object,attribute:!1})],OrRuleActionWebhook.prototype,"rule",void 0),or_rule_action_webhook_decorate([(0,decorators.MZ)({type:Object,attribute:!1})],OrRuleActionWebhook.prototype,"action",void 0),OrRuleActionWebhook=or_rule_action_webhook_decorate([(0,decorators.EM)("or-rule-action-webhook")],OrRuleActionWebhook);var or_rule_then_otherwise_decorate=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};function getActionTypesMenu(e,t){let i=!0,o=!0,r=!0,n=!0,s=!0;e&&e.controls&&e.controls.allowedActionTypes&&(i=e.controls.allowedActionTypes.indexOf("attribute")>=0,o=e.controls.allowedActionTypes.indexOf("wait")>=0,r=e.controls.allowedActionTypes.indexOf("email")>=0,n=e.controls.allowedActionTypes.indexOf("push")>=0,s=e.controls.allowedActionTypes.indexOf("webhook")>=0);const c=[];return i&&t&&c.push(...t.filter((e=>"agent"!==e.assetDescriptor.descriptorType)).map((e=>{const t=model_lib.u0.getAssetDescriptorColour(e),i=model_lib.u0.getAssetDescriptorIcon(e),o=t?{"--or-icon-fill":"#"+t}:void 0;return{text:core_lib.J0.getAssetTypeLabel(e.assetDescriptor),value:e.assetDescriptor.name,icon:i||model_lib.u0.getAssetDescriptorIcon("ThingAsset"),styleMap:o}}))),c.sort(core_lib.J0.sortByString((e=>null==e?void 0:e.value))),c.push(null),r&&c.push({text:i18next.Ay.t("email"),icon:"email",value:"email",styleMap:{"--or-icon-fill":"#4B87EA"}}),n&&c.push({text:i18next.Ay.t("push-notification"),icon:"cellphone-message",value:"push",styleMap:{"--or-icon-fill":"#4B87EA"}}),o&&c.push({text:i18next.Ay.t("wait"),icon:"timer",value:"wait",styleMap:{"--or-icon-fill":"#EACC54"}}),s&&c.push({text:i18next.Ay.t("webhook"),icon:"webhook",value:"webhook",styleMap:{"--or-icon-fill":"#4B87EA"}}),c}var RecurrenceOption;!function(e){e.ALWAYS="always",e.ONCE="once",e.ONCE_PER_HOUR="oncePerHour",e.ONCE_PER_DAY="oncePerDay",e.ONCE_PER_WEEK="oncePerWeek"}(RecurrenceOption||(RecurrenceOption={}));const or_rule_then_otherwise_style=lit.AH`

    :host {
        display: flex;
        width: 100%;
        flex-direction: column;
    }
        
    ${buttonStyle}
    
    .rule-action {
        display: flex;
        margin: 10px 0;
    }
    
    .rule-action-wrapper {
        flex-grow: 1;
        display: flex;
        align-items: baseline;
    }
    
    .rule-action > button {
        flex-grow: 0;
    }

    .rule-action:hover .button-clear {
        visibility: visible;
    }

    or-panel:hover .remove-button.button-clear {
        visibility: visible;
    }
            
    or-panel {
        position: relative;
        margin: 10px 10px 20px 10px;
    }
    
    #type-selector {
        margin-top: 10px;
    }    
        
    .add-button-wrapper {
        display: flex;
        align-items: center;
        white-space: nowrap;
    }
    
    .add-button-wrapper > * {
        margin-right: 6px;
    }
    
    .add-button-wrapper or-mwc-menu {
        text-transform: capitalize;
    }
    
    #type {
        white-space: nowrap;
        margin: 4px 3px auto 0;
        text-transform: capitalize;
    }
    
    .rule-recurrence {
        position: absolute;
        top: 5px;
        right: 0;
    }
   
`;let OrRuleThenOtherwise=class extends((0,or_translate_lib.Tl)(i18next.Ay)(lit.WF)){static get styles(){return or_rule_then_otherwise_style}get thenAllowAdd(){return!this.config||!this.config.controls||!0!==this.config.controls.hideThenAddAction}ruleRecurrenceTemplate(e,t){let i="";const o="inherit";let r=RecurrenceOption.ONCE;return e&&(void 0===e.mins||null===e.mins?r=RecurrenceOption.ONCE:0===e.mins?r=RecurrenceOption.ALWAYS:60===e.mins?r=RecurrenceOption.ONCE_PER_HOUR:1440===e.mins?r=RecurrenceOption.ONCE_PER_DAY:10080===e.mins&&(r=RecurrenceOption.ONCE_PER_WEEK)),i=t?lit.qy`
                <div style="--or-mwc-input-color: ${o}; margin-right: 6px;">
                    <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" label="${r}"></or-mwc-input>
                </div>
            `:lit.qy`
                <div style="--or-mwc-input-color: ${o}; margin-right: 6px;">
                    ${(0,or_mwc_menu.Xj)(lit.qy`<or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" label="${r}"></or-mwc-input>`,function getRecurrenceMenu(e){return e&&e.controls&&e.controls.allowedRecurrenceOptions?e.controls.allowedRecurrenceOptions.map((e=>({text:i18next.Ay.t(e),value:e}))):Object.values(RecurrenceOption).map((e=>({text:i18next.Ay.t(e),value:e})))}(this.config),r,(e=>this.setRecurrenceOption(e)))}
                </div>
            `,lit.qy`
            <div class="rule-recurrence">
                ${i}
            </div>
        `}ruleActionTemplate(e,t,i){const o=!this.config||!this.config.controls||!0!==this.config.controls.hideActionTypeOptions,r=this.getActionType(t);if(!r&&!o)return lit.qy`<span>INVALID CONFIG - NO TYPE SPECIFIED AND TYPE SELECTOR DISABLED</span>`;let n="",s="";const c=!this.readonly&&(this.thenAllowAdd||this.rule.then.length>1);if(o){let o,s="inherit";if(t.action)switch(t.action){case"wait":o="timer",s="EACC54";break;case"webhook":o="webhook",s="4B87EA";break;case"notification":"push"===r?(o="cellphone-message",s="4B87EA"):(o="email",s="4B87EA");break;default:const e=model_lib.u0.getAssetDescriptor(r);o=model_lib.u0.getAssetDescriptorIcon(e),s=model_lib.u0.getAssetDescriptorColour(e)||s}n=i?lit.qy`
                    <div id="type" style="--or-mwc-input-color: #${s}">
                        <or-mwc-input type="${or_mwc_input.NZ.BUTTON}" .icon="${o||""}"></or-mwc-input>
                    </div>
                `:lit.qy`
                    <div id="type" style="--or-mwc-input-color: #${s}">
                        ${(0,or_mwc_menu.Xj)(lit.qy`<or-mwc-input type="${or_mwc_input.NZ.BUTTON}" .icon="${o||""}"></or-mwc-input>`,getActionTypesMenu(this.config,this.assetInfos),t.action,(i=>this.setActionType(e,t,i)))}
                    </div>
                `}if(r)switch(r){case"wait":s=lit.qy`<span>WAIT NOT IMPLEMENTED</span>`;break;case"push":s=lit.qy`<or-rule-action-notification id="push-notification" .rule="${this.rule}" .action="${t}" .actionType="${"push"}" .config="${this.config}" .assetInfos="${this.assetInfos}" .readonly="${this.readonly}"></or-rule-action-notification>`;break;case"email":s=lit.qy`<or-rule-action-notification id="email-notification" .rule="${this.rule}" .action="${t}" .actionType="${"email"}" .config="${this.config}" .assetInfos="${this.assetInfos}" .readonly="${this.readonly}"></or-rule-action-notification>`;break;case"webhook":s=lit.qy`<or-rule-action-webhook .rule="${this.rule}" .action="${t}" .actionType="${"webhook"}"></or-rule-action-webhook>`;break;default:s=lit.qy`<or-rule-action-attribute .action="${t}" .targetTypeMap="${this.targetTypeMap}" .config="${this.config}" .assetInfos="${this.assetInfos}" .assetProvider="${this.assetProvider}" .readonly="${this.readonly}"></or-rule-action-attribute>`}return lit.qy`
            <div class="rule-action">
                <div class="rule-action-wrapper">
                    ${n}
                    ${s}
                </div>
                    ${c?lit.qy`
                        <button class="button-clear" @click="${()=>this.removeAction(t)}"><or-icon icon="close-circle"></or-icon></input>
                    `:""}
            </div>
        `}render(){const e=!this.readonly&&(this.thenAllowAdd||this.rule.then.length>1);return lit.qy`
            <div>
                <or-panel .heading="${i18next.Ay.t("then")}...">
                    ${this.ruleRecurrenceTemplate(this.rule.recurrence,this.readonly)}

                    ${this.rule.then?this.rule.then.map((e=>this.ruleActionTemplate(this.rule.then,e,this.readonly))):""}
                    ${e?lit.qy`
                        <span class="add-button-wrapper">
                            ${(0,or_mwc_menu.Xj)(lit.qy`<or-mwc-input class="plus-button" type="${or_mwc_input.NZ.BUTTON}" icon="plus"
                                                   .label="${i18next.Ay.t("rulesEditorAddAction")}"></or-mwc-input>`,getActionTypesMenu(this.config,this.assetInfos),void 0,(e=>this.addAction(e)))}
                        </span>
                    `:""}
                </or-panel>
            </div>
        `}getActionType(e){switch(e.action){case"wait":break;case"webhook":return e.action;case"notification":return e.notification&&e.notification.message&&e.notification.message.type?e.notification.message.type:e.action;case"write-attribute":case"update-attribute":if(!e.target)return;if(e.target.matchedAssets)return getAssetTypeFromQuery(e.target.matchedAssets);if(e.target.assets)return getAssetTypeFromQuery(e.target.assets)}}setRecurrenceOption(e){switch(e){case RecurrenceOption.ALWAYS:this.rule.recurrence={mins:0};break;case RecurrenceOption.ONCE_PER_HOUR:this.rule.recurrence={mins:60};break;case RecurrenceOption.ONCE_PER_DAY:this.rule.recurrence={mins:1440};break;case RecurrenceOption.ONCE_PER_WEEK:this.rule.recurrence={mins:10080};break;case RecurrenceOption.ONCE:default:delete this.rule.recurrence}this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate()}setActionType(e,t,i){switch(t.target=void 0,t.action){case"wait":t.millis=void 0;break;case"webhook":break;case"write-attribute":t.value=void 0,t.attributeName=void 0;break;case"notification":t.notification=void 0;break;case"update-attribute":t.value=void 0,t.attributeName=void 0,t.index=void 0,t.key=void 0,t.updateAction=void 0}"wait"===i?t.action="wait":"webhook"==i?(t.action="webhook",t.webhook={httpMethod:"POST",payload:JSON.stringify({rule:"%RULESET_NAME%",assets:"%TRIGGER_ASSETS%"},null,4)}):"email"===i?(t.action="notification",t.notification={message:{type:"email",subject:"%RULESET_NAME%",html:"%TRIGGER_ASSETS%"}}):"push"===i?(t.action="notification",t.notification={message:{type:"push",title:"%RULESET_NAME%",body:"%TRIGGER_ASSETS%"}}):(t.action="write-attribute",t.target={matchedAssets:{types:[i]}});const o=e.indexOf(t);e[o]=Object.assign({},t),this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate()}removeAction(e){if(!this.rule||!this.rule.then||!e)return;const t=this.rule.then.indexOf(e);t>=0&&(this.rule.then.splice(t,1),this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate())}addAction(e,t){if(!this.rule)return;let i,o,r={action:"write-attribute"};const n=this.config&&this.config.json?this.config.json:void 0;t?(this.rule.otherwise||(this.rule.otherwise=[]),i=this.rule.otherwise,o=n&&n.otherwise?n.otherwise:void 0):(this.rule.then||(this.rule.then=[]),i=this.rule.then,o=n&&n.then?n.then:void 0),o&&(r=JSON.parse(JSON.stringify(o))),e&&this.setActionType(i,r,e),i.push(r),this.dispatchEvent(new OrRulesJsonRuleChangedEvent),this.requestUpdate()}};or_rule_then_otherwise_decorate([(0,decorators.MZ)({type:Array,attribute:!1})],OrRuleThenOtherwise.prototype,"targetTypeMap",void 0),or_rule_then_otherwise_decorate([(0,decorators.MZ)({type:Object,attribute:!1})],OrRuleThenOtherwise.prototype,"rule",void 0),or_rule_then_otherwise_decorate([(0,decorators.MZ)({type:Boolean})],OrRuleThenOtherwise.prototype,"readonly",void 0),or_rule_then_otherwise_decorate([(0,decorators.MZ)({type:Object,attribute:!1})],OrRuleThenOtherwise.prototype,"assetInfos",void 0),or_rule_then_otherwise_decorate([(0,decorators.MZ)({type:Object})],OrRuleThenOtherwise.prototype,"assetProvider",void 0),OrRuleThenOtherwise=or_rule_then_otherwise_decorate([(0,decorators.EM)("or-rule-then-otherwise")],OrRuleThenOtherwise);var or_rule_json_viewer_decorate=function(e,t,s,r){var i,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(n<3?i(o):n>3?i(t,s,o):i(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o},or_rule_json_viewer_awaiter=function(e,t,s,r){return new(s||(s=Promise))((function(i,n){function o(e){try{u(r.next(e))}catch(e){n(e)}}function a(e){try{u(r.throw(e))}catch(e){n(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))};class OrRulesJsonRuleChangedEvent extends CustomEvent{constructor(){super(OrRulesJsonRuleChangedEvent.NAME,{bubbles:!0,composed:!0})}}function getTypeAndTagsFromGroup(e){if(!e)return[];let t=[];if(e.items)for(const s of e.items){const e=getAssetTypeFromQuery(s.assets);e&&t.push([e,s.tag])}if(e.groups)for(const s of e.groups)t=t.concat(getTypeAndTagsFromGroup(s));return t}function getTargetTypeMap(e){return e.when?getTypeAndTagsFromGroup(e.when):[]}OrRulesJsonRuleChangedEvent.NAME="or-rules-json-rule-changed";const or_rule_json_viewer_style=lit.AH`
    :host {
        display: flex;
        width: calc(100% - 20px);
        padding: 0px 10px;
        margin-top: -10px;
    }
    
    :host > * {
        flex: 1;
    }

    @media screen and (max-width: 1400px) {
        :host > * {
            flex-grow: 0;
        }

        :host {
            flex-direction: column;
        }
    }
`;let OrRuleJsonViewer=class extends((0,or_translate_lib.Tl)(i18next.Ay)(lit.WF)){static get styles(){return or_rule_json_viewer_style}constructor(){super(),this._loadedAssets=new Map,this._unsupported=!1,this._activeAssetPromises=new Map,this.addEventListener(OrRulesJsonRuleChangedEvent.NAME,this._onJsonRuleChanged)}connectedCallback(){super.connectedCallback(),this._unsupported&&this.dispatchEvent(new OrRulesRuleUnsupportedEvent)}set ruleset(e){if(this._ruleset!==e)if(this._unsupported=!1,this._ruleset=e,e.rules)try{const t=JSON.parse(e.rules);if(!t.rules||t.rules.length>1)return void(this.isConnected?this.dispatchEvent(new OrRulesRuleUnsupportedEvent):this._unsupported=!0);this._rule=t.rules[0],this.requestUpdate()}catch(e){console.error("Invalid JSON rules, failed to parse: "+e),this.isConnected?this.dispatchEvent(new OrRulesRuleUnsupportedEvent):this._unsupported=!0}else this.config&&this.config.json&&this.config.json.rule?this._rule=JSON.parse(JSON.stringify(this.config.json.rule)):this._rule={recurrence:{mins:0}}}updated(e){e.has("config")&&(this.loadAssetDescriptors(!1),this.loadAssetDescriptors(!0))}render(){if(!this._rule)return lit.qy``;const e=getTargetTypeMap(this._rule);return lit.qy`
            <div class="section-container">                                    
                <or-rule-when .rule="${this._rule}" .config="${this.config}" .assetInfos="${this._whenAssetInfos}" ?readonly="${this.readonly}" 
                              .assetProvider="${e=>or_rule_json_viewer_awaiter(this,void 0,void 0,(function*(){return this.loadAssets(e)}))}"
                ></or-rule-when>
            </div>
        
            <div class="section-container">              
                <or-rule-then-otherwise .rule="${this._rule}" .config="${this.config}" .targetTypeMap="${e}" .assetInfos="${this._actionAssetInfos}" ?readonly="${this.readonly}" 
                                        .assetProvider="${e=>or_rule_json_viewer_awaiter(this,void 0,void 0,(function*(){return this.loadAssets(e)}))}"
                ></or-rule-then-otherwise>
            </div>
        `}loadAssets(e){return or_rule_json_viewer_awaiter(this,void 0,void 0,(function*(){if(this._activeAssetPromises.has(e))return(yield this._activeAssetPromises.get(e)).assets;{const t=function getAssetsByType(e,t,r){return or_rules_lib_awaiter(this,void 0,void 0,(function*(){if(null==r?void 0:r.has(e))return{assets:null==r?void 0:r.get(e),loadedAssets:r};{r||(r=new Map);const s={types:[e],orderBy:{property:"NAME"}};null!=t&&(s.realm={name:t});const o=yield core_lib.Ay.rest.api.AssetResource.queryAssets(s);return r.set(e,o.data),{assets:o.data,loadedAssets:r}}}))}(e,"realm"==this._ruleset.type?this._ruleset.realm:void 0,this._loadedAssets);this._activeAssetPromises.set(e,t);const s=yield t;return this._activeAssetPromises.delete(e),s.assets}}))}loadAssetDescriptors(e){(function getAssetInfos(e,t){const r=model_lib.u0.getAssetDescriptors();return getAssetTypes().then((s=>{let o=s||[],n=[];if(!e||!e.descriptors)return r.map((e=>model_lib.u0.getAssetTypeInfo(e)));const i=t?e.descriptors.action:e.descriptors.when;return(i&&i.includeAssets||e.descriptors.all&&e.descriptors.all.includeAssets)&&(o=[],i&&i.includeAssets&&(o=[...i.includeAssets]),e.descriptors.all&&e.descriptors.all.includeAssets&&(o=[...e.descriptors.all.includeAssets])),i&&i.excludeAssets&&(n=[...i.excludeAssets]),e.descriptors.all&&e.descriptors.all.excludeAssets&&(n=n.concat(e.descriptors.all.excludeAssets)),r.filter((e=>!(o.length>0&&o.indexOf(e.name)<0)&&n.indexOf(e.name)<0)).map((r=>{let s=model_lib.u0.getAssetTypeInfo(r);const o=function getAssetDescriptorFromSection(e,t,r){if(!t||!t.descriptors)return;const s=r?t.descriptors.action:t.descriptors.when,o=t.descriptors.all;return(s&&s.assets?s.assets[e]?s.assets[e]:s.assets["*"]:void 0)||(o&&o.assets?o.assets[e]?o.assets[e]:o.assets["*"]:void 0)}(r.name,e,t);if(!o)return s;const n={assetDescriptor:s.assetDescriptor?Object.assign({},s.assetDescriptor):{descriptorType:"asset"},attributeDescriptors:s.attributeDescriptors?[...s.attributeDescriptors]:[],metaItemDescriptors:s.metaItemDescriptors?[...s.metaItemDescriptors]:[],valueDescriptors:s.valueDescriptors?[...s.valueDescriptors]:[]};if(o.icon&&(n.assetDescriptor.icon=o.icon),o.color&&(n.assetDescriptor.colour=o.color),n.attributeDescriptors){const t=void 0!==o.includeAttributes?o.includeAttributes:void 0,r=void 0!==o.excludeAttributes?o.excludeAttributes:void 0;(t||r)&&(n.attributeDescriptors=n.attributeDescriptors.filter((e=>(!t||t.some((t=>core_lib.J0.stringMatch(t,e.name))))&&(!r||!r.some((t=>core_lib.J0.stringMatch(t,e.name))))))),o.attributeDescriptors&&n.attributeDescriptors.map((t=>{let r=o.attributeDescriptors[t.name];r||(r=i&&i.attributeDescriptors?i.attributeDescriptors[t.name]:void 0),r||(r=e.descriptors.all&&e.descriptors.all.attributeDescriptors?e.descriptors.all.attributeDescriptors[t.name]:void 0),r&&(r.type&&(t.type=r.type),r.format&&(t.format=r.format),r.units&&(t.units=r.units),r.constraints&&(t.constraints=t.constraints?[...r.constraints,...t.constraints]:r.constraints))}))}return n}))}))})(this.config,e).then((t=>{e?(this._actionAssetInfos=[...t],this.requestUpdate()):(this._whenAssetInfos=[...t],this.requestUpdate())}))}beforeSave(){if(!this._rule)return;this._rule.name=this._ruleset.name;const e={rules:[this._rule]};this._ruleset.rules=JSON.stringify(e)}validate(){const e=this._rule;return!!(e&&e.when&&e.then&&0!==e.then.length&&this._validateConditionGroup(e.when)&&this._validateRuleActions(e,e.then))}_onJsonRuleChanged(){const e=this.validate();this.dispatchEvent(new OrRulesRuleChangedEvent(e))}_validateConditionGroup(e){if(!(e.items&&0!==e.items.length||e.groups&&0!==e.groups.length))return!1;if(e.items)for(const t of e.items){if(!t.assets&&!t.cron&&!t.sun)return!1;if(t.cron&&!core_lib.J0.cronStringToISOString(t.cron,!0))return!1;if(t.sun&&(!t.sun.position||!t.sun.location))return!1;if(t.assets&&!this._validateAssetQuery(t.assets,!0,!1))return!1}if(e.groups)for(const t of e.groups)if(!this._validateConditionGroup(t))return!1;return!0}_validateRuleActions(e,t){var s;if(!t)return!0;for(const r of t)switch(r.action){case"wait":if(!r.millis)return!1;break;case"write-attribute":if(!r.attributeName)return!1;if(!this._validateAssetTarget(e,r.target))return!1;break;case"notification":break;case"webhook":if(!(null===(s=r.webhook)||void 0===s?void 0:s.url)||!r.webhook.httpMethod)return!1;break;case"update-attribute":if(!r.attributeName)return!1;if(!r.updateAction)return!1;if(!this._validateAssetTarget(e,r.target))return!1;break;default:return!1}return!0}_validateAssetTarget(e,t){return!t||(t.assets?this._validateAssetQuery(t.assets,!1,!1):t.matchedAssets?this._validateAssetQuery(t.matchedAssets,!1,!0):!(t.conditionAssets&&getTypeAndTagsFromGroup(e.when).findIndex((e=>t.conditionAssets===e[1]))<0))}_validateAssetQuery(e,t,s){if(!e.types||0===e.types.length)return!1;if(t){if(!e.attributes||!e.attributes.items||0===e.attributes.items.length)return!1}else if(!(s||e.ids&&0!==e.ids.length))return!1;if(e.attributes&&e.attributes.items)for(const t of e.attributes.items){if(!t.name||!t.name.match||!t.name.value)return!1;if(!t.value||!this._validateValuePredicate(t.value))return!1}return!0}_validateValuePredicate(e){switch(e.predicateType){case"string":return void 0!==e.match&&void 0!==e.value;case"boolean":return void 0!==e.value;case"datetime":case"number":return void 0!==e.operator&&void 0!==e.value&&("BETWEEN"!==e.operator||void 0!==e.rangeValue);case"radial":return void 0!==e.radius&&void 0!==e.lat&&void 0!==e.lng;case"rect":return void 0!==e.lngMax&&void 0!==e.latMax&&void 0!==e.lngMin&&void 0!==e.latMin;case"array":return e.index&&!e.value||e.value||e.lengthEquals||e.lengthLessThan||e.lengthGreaterThan;case"value-empty":return!0;default:return!1}}};or_rule_json_viewer_decorate([(0,decorators.MZ)({attribute:!1})],OrRuleJsonViewer.prototype,"readonly",void 0),or_rule_json_viewer_decorate([(0,decorators.MZ)({attribute:!1})],OrRuleJsonViewer.prototype,"config",void 0),or_rule_json_viewer_decorate([(0,decorators.MZ)({attribute:!1})],OrRuleJsonViewer.prototype,"_ruleset",void 0),or_rule_json_viewer_decorate([(0,decorators.wk)()],OrRuleJsonViewer.prototype,"_loadedAssets",void 0),OrRuleJsonViewer=or_rule_json_viewer_decorate([(0,decorators.EM)("or-rule-json-viewer")],OrRuleJsonViewer);__webpack_require__("../../../node_modules/ace-builds/src-noconflict/mode-javascript.js"),__webpack_require__("../../../node_modules/ace-builds/src-noconflict/mode-json.js"),__webpack_require__("../../../node_modules/ace-builds/src-noconflict/mode-groovy.js"),__webpack_require__("../../../node_modules/ace-builds/webpack-resolver.js"),__webpack_require__("../../component/or-components/lib/or-ace-editor.js");var or_rule_text_viewer_decorate=function(e,t,r,o){var i,s=arguments.length,l=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(l=(s<3?i(l):s>3?i(t,r,l):i(t,r))||l);return s>3&&l&&Object.defineProperty(t,r,l),l};const or_rule_text_viewer_style=lit.AH`
    :host {
        display: flex;
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
`;let OrRuleTextViewer=class extends lit.WF{constructor(){super(...arguments),this._aceEditor=(0,ref._)()}static get styles(){return or_rule_text_viewer_style}set ruleset(e){this._ruleset!==e&&(this._ruleset=e,e.rules?this._rules=e.rules:this._rules=this._createRules())}_createRules(){return""}render(){return lit.qy`
            <or-ace-editor ${(0,ref.K)(this._aceEditor)} @or-ace-editor-changed="${e=>this._onEditorChanged(e)}" .mode="${this._getMode()}" .value="${this._getRulesString()}"></or-ace-editor>
        `}_getMode(){switch(this._ruleset.lang){case"JAVASCRIPT":return"ace/mode/javascript";case"GROOVY":return"ace/mode/groovy";case"JSON":return"ace/mode/json"}}_getRulesString(){if(!this._rules)return"";switch(this._ruleset.lang){case"JAVASCRIPT":case"GROOVY":return this._rules;case"JSON":return JSON.stringify(JSON.parse(this._rules),null,2)}}_onEditorChanged(e){const t=e.detail.valid;this.dispatchEvent(new OrRulesRuleChangedEvent(t))}beforeSave(){this._aceEditor.value&&(this._ruleset.rules=this._aceEditor.value.getValue())}validate(){return!!this._aceEditor.value&&this._aceEditor.value.validate()}};or_rule_text_viewer_decorate([(0,decorators.MZ)({attribute:!1})],OrRuleTextViewer.prototype,"readonly",void 0),or_rule_text_viewer_decorate([(0,decorators.MZ)({attribute:!1})],OrRuleTextViewer.prototype,"config",void 0),or_rule_text_viewer_decorate([(0,decorators.MZ)({attribute:!1})],OrRuleTextViewer.prototype,"_ruleset",void 0),OrRuleTextViewer=or_rule_text_viewer_decorate([(0,decorators.EM)("or-rule-text-viewer")],OrRuleTextViewer);var esm=__webpack_require__("../../../node_modules/rrule/dist/esm/index.js"),or_rule_validity_decorate=function(t,e,i,l){var a,r=arguments.length,o=r<3?e:null===l?l=Object.getOwnPropertyDescriptor(e,i):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,l);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let OrRuleValidity=class extends((0,or_translate_lib.Tl)(i18next.Ay)(lit.WF)){constructor(){super()}updated(t){super.updated(t),t.has("ruleset")&&this.ruleset&&(this._validity=this.ruleset.meta?this.ruleset.meta.validity:void 0,this._validity&&this._validity.recurrence?this._rrule=esm.p3.fromString(this._validity.recurrence):this._rrule=void 0)}getWeekDay(t){switch(t){case"MO":return esm.p3.MO;case"TU":return esm.p3.TU;case"WE":return esm.p3.WE;case"TH":return esm.p3.TH;case"FR":return esm.p3.FR;case"SA":return esm.p3.SA;case"SU":return esm.p3.SU}}isAllDay(){return this._validity&&0===moment_default()(this._validity.start).hours()&&0===moment_default()(this._validity.start).minutes()&&23===moment_default()(this._validity.end).hours()&&59===moment_default()(this._validity.end).minutes()}setRRuleValue(t,e){let i=this._rrule?this._rrule.origOptions:void 0;const l=this._validity;switch(e){case"all-day":t?(l.start=moment_default()(l.start).startOf("day").toDate().getTime(),l.end=moment_default()(l.end).endOf("day").toDate().getTime()):(l.start=moment_default()().toDate().getTime(),l.end=moment_default()().add(1,"hour").toDate().getTime());break;case"start":const e=moment_default()(t);e.isValid()&&(l.start=e.set({hour:0,minute:0,second:0,millisecond:0}).toDate().getTime(),"validityRecurrence"===this.getValidityType()&&(i.dtstart=e.toDate(),this._rrule=new esm.p3(i)));break;case"end":const a=moment_default()(t);a.isValid()&&(l.end=a.set({hour:23,minute:59,second:0,millisecond:0}).toDate().getTime());break;case"never-ends":t?delete i.until:i.until=moment_default()().add(1,"year").toDate(),"validityRecurrence"===this.getValidityType()&&(this._rrule=new esm.p3(i));break;case"byweekday":i.byweekday||(i.byweekday=[]),Array.isArray(i.byweekday)||(i.byweekday=[i.byweekday]);const r=t;i.byweekday=[],r.forEach((t=>{const e=this.getWeekDay(t);e&&i.byweekday.push(e)})),"validityRecurrence"===this.getValidityType()&&(this._rrule=new esm.p3(i));break;case"until":if(this._rrule.options.until){const e=moment_default()(t);i.until=new Date(moment_default()(i.until).set({year:e.year(),month:e.month(),date:e.date()}).format())}"validityRecurrence"===this.getValidityType()&&(this._rrule=new esm.p3(i));break;case"dtstart-time":const o=t.split(":");i?i.dtstart=moment_default()(i.dtstart).set({hour:o[0],minute:o[1],second:0,millisecond:0}).toDate():i=new esm.p3({dtstart:moment_default()(this._validity.start).set({hour:o[0],minute:o[1],second:0,millisecond:0}).toDate()}).origOptions,l.start=moment_default()(i.dtstart).toDate().getTime(),"validityRecurrence"===this.getValidityType()&&(this._rrule=new esm.p3(i));break;case"until-time":const n=t.split(":");this._rrule&&this._rrule.options.until&&(i?i.until=moment_default()(i.until).set({hour:n[0],minute:n[1],second:0,millisecond:0}).toDate():i=new esm.p3({until:moment_default()(this._validity.end).set({hour:n[0],minute:n[1],second:0,millisecond:0}).toDate()}).origOptions),l.end=moment_default()(l.end).set({hour:n[0],minute:n[1],second:0,millisecond:0}).toDate().getTime(),"validityRecurrence"===this.getValidityType()&&(this._rrule=new esm.p3(i))}this._validity=Object.assign({},l),this._dialog.requestUpdate()}timeLabel(){if("validityAlways"===this.getValidityType())return i18next.Ay.t("validityAlways");if(this._validity&&this._rrule){const t=this._validity,e=moment_default()(t.end).diff(t.start,"days");let i="";return this.isAllDay()?(e>0&&(i=" "+i18next.Ay.t("forDays",{days:e})),this._rrule.toText()+i):(e>0&&(i=i18next.Ay.t("fromToDays",{start:moment_default()(t.start).format("HH:mm"),end:moment_default()(t.end).format("HH:mm"),days:e})),0===e&&(i=i18next.Ay.t("fromTo",{start:moment_default()(t.start).format("HH:mm"),end:moment_default()(t.end).format("HH:mm")})),this._rrule.toText()+" "+i)}if(this._validity){let t="DD-MM-YYYY";return this.isAllDay()||(t="DD-MM-YYYY HH:mm"),i18next.Ay.t("activeFromTo",{start:moment_default()(this._validity.start).format(t),end:moment_default()(this._validity.end).format(t)})}}setValidityType(t){if(this.ruleset){switch(this.ruleset.meta||(this.ruleset.meta={}),t){case"validityAlways":delete this.ruleset.meta.validity,this._validity=void 0,this._rrule=void 0;break;case"validityPeriod":this._validity={start:moment_default()().startOf("day").toDate().getTime(),end:moment_default()().endOf("day").toDate().getTime()},this._rrule=void 0;break;case"validityRecurrence":this._validity||(this._validity={start:moment_default()().startOf("day").toDate().getTime(),end:moment_default()().endOf("day").toDate().getTime()}),this._rrule=new esm.p3({freq:esm.p3.DAILY,dtstart:new Date})}this._dialog.requestUpdate()}}getValidityType(){return this._validity?this._rrule?"validityRecurrence":"validityPeriod":"validityAlways"}render(){return this.ruleset?lit.qy`
            <or-mwc-input outlined .type="${or_mwc_input.NZ.BUTTON}" label="${this.timeLabel()}" @or-mwc-input-changed="${()=>this.showDialog()}"></or-mwc-input>
        `:lit.qy``}showDialog(){this._dialog=(0,or_mwc_dialog.ui)((new or_mwc_dialog.X$).setHeading(i18next.Ay.t("scheduleRuleActivity")).setStyles(lit.qy`
                <style>
                    .mdc-dialog__surface {
                        overflow-x: visible !important;
                        overflow-y: visible !important;
                    }

                    #dialog-content {
                        overflow: visible;
                    }

                    @media only screen and (max-width: 1279px) {
                        .mdc-dialog__surface {
                            overflow-x: auto !important;
                            overflow-y: auto !important;
                        }

                        #dialog-content {
                            min-height: 230px;
                            overflow: auto;
                        }
                    }
                </style>`).setActions([{actionName:"cancel",content:lit.qy`<or-mwc-input class="button" .type="${or_mwc_input.NZ.BUTTON}" label="cancel"></or-mwc-input>`,action:()=>{this._dialog=void 0}},{actionName:"ok",default:!0,content:lit.qy`<or-mwc-input class="button" .type="${or_mwc_input.NZ.BUTTON}" label="apply"></or-mwc-input>`,action:()=>{this.ruleset&&this.ruleset.meta&&("validityAlways"===this.getValidityType()?delete this.ruleset.meta.validity:("validityRecurrence"===this.getValidityType()&&(this._validity.recurrence=this._rrule.toString().split("RRULE:")[1]),this.ruleset.meta.validity=this._validity),this.dispatchEvent(new OrRulesRuleChangedEvent(!0)),this._dialog=void 0)}}]).setContent((()=>this.getDialogContent())).setDismissAction(null))}getDialogContent(){const t=[esm.p3.MO.toString(),esm.p3.TU.toString(),esm.p3.WE.toString(),esm.p3.TH.toString(),esm.p3.FR.toString(),esm.p3.SA.toString(),esm.p3.SU.toString()],e=this.getValidityType(),i=this._rrule&&this._rrule.options&&this._rrule.options.byweekday?this._rrule.options.byweekday.map((t=>new esm.Bw(t).toString())):[],l=this._validity;return lit.qy`
            <div style="min-width: 635px; display:grid; flex-direction: row;">
                <div class="layout horizontal">
                    <or-mwc-input style="min-width: 280px;" .value="${e}" .type="${or_mwc_input.NZ.SELECT}" .options="${["validityAlways","validityPeriod","validityRecurrence"]}" @or-mwc-input-changed="${t=>this.setValidityType(t.detail.value)}" ></or-mwc-input>
                </div>

                ${!l||"validityPeriod"!==e&&"validityRecurrence"!==e?"":lit.qy`
                    <label style="display:block; margin-top: 20px;"><or-translate value="period"></or-translate></label>
                    <div style="display: flex; justify-content: space-between;" class="layout horizontal">
                        <div> 
                            <or-mwc-input value="${moment_default()(l.start).format("YYYY-MM-DD")}" .type="${or_mwc_input.NZ.DATE}" @or-mwc-input-changed="${t=>this.setRRuleValue(t.detail.value,"start")}" .label="${i18next.Ay.t("from")}"></or-mwc-input>
                            <or-mwc-input .disabled=${this.isAllDay()} .value="${moment_default()(l.start).format("HH:mm")}" .type="${or_mwc_input.NZ.TIME}" @or-mwc-input-changed="${t=>this.setRRuleValue(t.detail.value,"dtstart-time")}" .label="${i18next.Ay.t("from")}"></or-mwc-input>
                        </div>
                        <div>
                            <or-mwc-input .value="${moment_default()(l.end).format("YYYY-MM-DD")}"  .type="${or_mwc_input.NZ.DATE}" @or-mwc-input-changed="${t=>this.setRRuleValue(t.detail.value,"end")}" .label="${i18next.Ay.t("to")}"></or-mwc-input>
                            <or-mwc-input .disabled=${this.isAllDay()} .value="${moment_default()(l.end).format("HH:mm")}" .type="${or_mwc_input.NZ.TIME}" @or-mwc-input-changed="${t=>this.setRRuleValue(t.detail.value,"until-time")}" .label="${i18next.Ay.t("to")}"></or-mwc-input>
                        </div>
                    </div>  
                    
                    <div class="layout horizontal">
                        <or-mwc-input .value=${this.isAllDay()} @or-mwc-input-changed="${t=>this.setRRuleValue(t.detail.value,"all-day")}"  .type="${or_mwc_input.NZ.CHECKBOX}" .label="${i18next.Ay.t("allDay")}"></or-mwc-input>
                    </div>
                `}
             
                ${"validityRecurrence"===e?lit.qy`
                    <label style="display: block; margin-top: 20px;"><or-translate value="repeatOccurrenceEvery"></or-translate></label>
                    <div class="layout horizontal">
                        <or-mwc-input .value="${i}" 
                                      .type="${or_mwc_input.NZ.CHECKBOX_LIST}" 
                                      .options="${t}" 
                                      .label="${i18next.Ay.t("daysOfTheWeek")}" 
                                      @or-mwc-input-changed="${t=>{this.setRRuleValue(t.detail.value,"byweekday")}}" ></or-mwc-input>
                    </div>

                    <label style="display:block; margin-top: 20px;"><or-translate value="repetitionEnds"></or-translate></label>
                    <div class="layout horizontal">                        
                        <or-mwc-input .value="${!this._rrule.options.until}"  @or-mwc-input-changed="${t=>this.setRRuleValue(t.detail.value,"never-ends")}"  .type="${or_mwc_input.NZ.CHECKBOX}" .label="${i18next.Ay.t("never")}"></or-mwc-input>
                    </div>
                    <div class="layout horizontal">
                        <or-mwc-input ?disabled="${!this._rrule.options.until}" .value="${this._rrule.options.until?moment_default()(this._rrule.options.until).format("YYYY-MM-DD"):moment_default()().add(1,"year").format("YYYY-MM-DD")}"  .type="${or_mwc_input.NZ.DATE}" @or-mwc-input-changed="${t=>this.setRRuleValue(t.detail.value,"until")}" .label="${i18next.Ay.t("to")}"></or-mwc-input>
                    </div>
                `:""}                
            </div>`}};OrRuleValidity.styles=lit.AH`
        :host {
            margin-left: 20px;
        }
    `,or_rule_validity_decorate([(0,decorators.MZ)({type:Object})],OrRuleValidity.prototype,"ruleset",void 0),or_rule_validity_decorate([(0,decorators.P)("#radial-modal")],OrRuleValidity.prototype,"dialog",void 0),or_rule_validity_decorate([(0,decorators.MZ)()],OrRuleValidity.prototype,"_validity",void 0),or_rule_validity_decorate([(0,decorators.MZ)()],OrRuleValidity.prototype,"_rrule",void 0),OrRuleValidity=or_rule_validity_decorate([(0,decorators.EM)("or-rule-validity")],OrRuleValidity);var integration_awaiter=function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function s(t){try{c(o.next(t))}catch(t){i(t)}}function a(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((o=o.apply(t,e||[])).next())}))};class Integration extends events.EventEmitter{constructor(){super(...arguments),this.nodes=[]}refreshNodes(){return integration_awaiter(this,void 0,void 0,(function*(){this.nodes=[];const t=(yield rest_lib.Ay.api.FlowResource.getAllNodeDefinitions()).data;for(const e of t)this.nodes.push(e)}))}}class NodeUtilities{static getNodeFromID(t,e){const o=e.find((e=>e.id===t));return o||console.warn(`Node with ID ${t} not found`),o}static getSocketFromID(t,e){for(const o of e){for(const e of o.inputs)if(e.id===t)return e;for(const e of o.outputs)if(e.id===t)return e}}static convertValueTypeToSocketType(t){switch(t.jsonType){case"boolean":return"BOOLEAN";case"number":case"bigint":return"NUMBER";case"string":return"STRING";default:return"ANY"}}static backtrackFrom(t,e){if(!t)throw new Error("Collection has to exist");if(!t.nodes)throw new Error("Collection has to have existing nodes");if(!t.connections)throw new Error("Collection has to have existing connections");const o=this.getNodeFromID(e,t.nodes);if(!o)throw new Error("Node has to exist");if(!o.inputs)throw new Error("Node has to have existing inputs");if(!o.outputs)throw new Error("Node has to have existing outputs");let r=[],n=[];for(const e of o.inputs)n=n.concat(t.connections.filter((t=>t.to===e.id)).map((e=>this.getNodeFromID(this.getSocketFromID(e.from,t.nodes).nodeId,t.nodes))));for(const e of n){r.push(e);const o=this.backtrackFrom(t,e.id);r=r.concat(o)}return r}static validate(t){if(!t)return!1;if(!t.nodes)return!1;if(!t.connections)return!1;const e=t.nodes.filter((t=>"OUTPUT"===t.type));if(0===e.length)return!1;for(const o of e){const e=this.backtrackFrom(t,o.id);if(0===e.length)return!1;if(0===e.filter((t=>"INPUT"===t.type)).length)return!1}return!0}static add(t,e){return{x:t.x+e.x,y:t.y+e.y}}static subtract(t,e){return{x:t.x-e.x,y:t.y-e.y}}static multiply(t,e){return{x:t.x*e,y:t.y*e}}static lerpNumber(t,e,o){return t*(1-o)+e*o}static lerp(t,e,o){return{x:this.lerpNumber(t.x,e.x,o),y:this.lerpNumber(t.y,e.y,o)}}}var shortid=__webpack_require__("../../../node_modules/shortid/index.js"),shortid_default=__webpack_require__.n(shortid);class IdentityAssigner{static generateIdentity(){return shortid_default().generate()}static getSocketElementIdentity(t){return t.id}}class IdentityDomLink{}IdentityDomLink.map={};class SocketTypeMatcher{static match(e,t){return"ANY"===e||"ANY"===t||SocketTypeMatcher.matches.find((t=>t.type===e)).matches.includes(t)}}SocketTypeMatcher.matches=[{type:"NUMBER",matches:["NUMBER","STRING"]},{type:"STRING",matches:["STRING"]},{type:"TRIGGER",matches:["TRIGGER"]},{type:"BOOLEAN",matches:["BOOLEAN","STRING"]},{type:"COLOR",matches:["COLOR","STRING"]}];class CopyMachine{static copy(t){const e={};e.inputs=(t.inputs||[]).map((t=>({name:t.name,type:t.type}))),e.internals=t.internals||[],e.name=t.name,e.displayCharacter=t.displayCharacter,e.outputs=(t.outputs||[]).map((t=>({name:t.name,type:t.type}))),e.type=t.type,e.position={x:0,y:0},e.size={x:0,y:0};const n=JSON.parse(JSON.stringify(e));return n.id=IdentityAssigner.generateIdentity(),n.inputs.forEach((t=>{t.nodeId=n.id,t.id=IdentityAssigner.generateIdentity()})),n.outputs.forEach((t=>{t.nodeId=n.id,t.id=IdentityAssigner.generateIdentity()})),n}}var node_panel_decorate=function(e,t,r,o){var a,n=arguments.length,i=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(n<3?a(i):n>3?a(t,r,i):a(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i};let NodePanel=class extends((0,or_translate_lib.Tl)(or_translate_lib.MR)(lit.WF)){constructor(){super(...arguments),this.nodes=[]}static get styles(){return lit.AH`
        .list{
            overflow-x: hidden;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            background: #F9F9F9;
        }
        .category{
            display: flex;
            width: 80%;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 15px 15px 0 15px;
        }
        .category span{
            margin:0;
            color: rgb(125,125,125);
            padding: 0 0 15px 0 ;
        }
        .small-node-grid{
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-gap: 6px;
            justify-items: stretch;
            align-items: stretch;
            margin-bottom: 15px;
            width: var(--nodepanel-width);
        }
        .input-node{ background-color: var(--input-color); }
        .processor-node{ background-color: var(--processor-color); }
        .output-node{ background-color: var(--output-color); }
        .input-node:hover{ background-color: var(--input-color-h); }
        .processor-node:hover{ background-color: var(--processor-color-h); }
        .output-node:hover{ background-color: var(--output-color-h); }`}firstUpdated(){this.drawer&&(this.drawer.open=!0)}render(){return lit.qy`
        <!-- <or-mwc-drawer rightsided dismissible transparent> -->
            ${this.listTemplate}
        <!-- </or-mwc-drawer> -->
        `}nodeTemplate(e){return lit.qy`<node-menu-item class="node-item" .node="${e}" .workspace="${this.application.editorWorkspace}"></node-menu-item>`}get listTemplate(){return lit.qy`
        <div class="list">
            <div class="category"> <span>${or_translate_lib.MR.t("input","Input")}</span> 
                ${this.nodes.filter((e=>"INPUT"===e.type)).map((e=>this.nodeTemplate(e)))}
            </div>

            <div class="category"><span>${or_translate_lib.MR.t("processors","Processors")}</span> 
                <div class="small-node-grid">
                    ${this.nodes.filter((e=>"PROCESSOR"===e.type&&e.displayCharacter)).map((e=>this.nodeTemplate(e)))}
                </div>
                ${this.nodes.filter((e=>"PROCESSOR"===e.type&&!e.displayCharacter)).map((e=>this.nodeTemplate(e)))}
            </div>

            <div class="category"> <span>${or_translate_lib.MR.t("output","Output")}</span> 
                ${this.nodes.filter((e=>"OUTPUT"===e.type)).map((e=>this.nodeTemplate(e)))}
            </div>
        </div>
        `}};node_panel_decorate([(0,decorators.MZ)({type:Array})],NodePanel.prototype,"nodes",void 0),node_panel_decorate([(0,decorators.P)("or-mwc-drawer")],NodePanel.prototype,"drawer",void 0),node_panel_decorate([(0,decorators.MZ)({attribute:!1})],NodePanel.prototype,"application",void 0),NodePanel=node_panel_decorate([(0,decorators.EM)("node-panel")],NodePanel);var src=__webpack_require__("../../../node_modules/linqts/dist/src/index.js");const EditorWorkspaceStyle=lit.AH`
:host{
    background: whitesmoke;
    position: relative;
    display: block;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.2) 0 0 4px inset;
    height: 100%;
}

.view-options{
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: row;
}

.button{
    padding: 10px;
    margin: 10px;
    cursor:pointer;
    background: rgba(0,0,0,0.02);
}

or-mwc-input[type=button]
{
    margin: 10px;
    color: inherit;
}

.button:hover{
    background: rgba(0,0,0,0.04);
}

.button:active{
    background: rgba(0,0,0,0.06);
}

svg, connection-container {
    pointer-events: none;
    position: absolute;
    display: block;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    stroke-width: 4px;
    stroke: rgb(80,80,80);
}
`;var ContextMenu_1,context_menu_decorate=function(t,e,n,o){var i,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(r<3?i(s):r>3?i(e,n,s):i(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s};let ContextMenu=ContextMenu_1=class extends((0,or_translate_lib.Tl)(or_translate_lib.MR)(lit.WF)){constructor(){super(...arguments),this.entries=[],this.isOpen=!1,this.closeCallback=()=>{ContextMenu_1.close()}}static get opened(){return ContextMenu_1.main.isOpen}static get styles(){return lit.AH`
        :host{
            display: inline-block;
            position: fixed;
            background: white;
            outline: 1px solid rgb(200,200,200);
            box-shadow: rgba(0, 0, 0, 0.05) 0 2px 4px;
            font-size: 13px;
            z-index: 1000000;
        }
        .context-menu-button{
            color: rgb(0,0,0);
            display: grid;
            align-items: center;
            justify-items: start;
            grid-template-rows: 32px;
            grid-template-columns: 32px 220px;
            grid-template-areas:
                "icon label";
        }
        .context-menu-button:hover{
            background: whitesmoke;
        }
        .label
        {
            grid-area: label;
        }
        or-icon{
            justify-self: center;
            grid-area: icon;
            height: 16px;
            width: 16px;
        }
        .muted{
            pointer-events: none;
            color: rgb(150,150,150);
        }
        .context-menu-separator{
            --thickness: 1px;
            border: 0;
            height: var(--thickness);
            border-bottom: solid var(--thickness);
            border-color: rgb(234,234,234);
            padding: 0;
            margin: 5px 10px calc(5px - var(--thickness)) 10px;
        }`}static open(t,e,n,o){ContextMenu_1.main.container=n,ContextMenu_1.main.style.top=e+"px",ContextMenu_1.main.style.left=t+"px",window.addEventListener("mousedown",ContextMenu_1.main.closeCallback),window.addEventListener("blur",ContextMenu_1.main.closeCallback),window.addEventListener("wheel",ContextMenu_1.main.closeCallback),ContextMenu_1.main.entries=o,ContextMenu_1.main.isOpen=!0}static close(){window.removeEventListener("mousedown",ContextMenu_1.main.closeCallback),window.removeEventListener("blur",ContextMenu_1.main.closeCallback),window.removeEventListener("wheel",ContextMenu_1.main.closeCallback),ContextMenu_1.main.isOpen=!1}firstUpdated(){ContextMenu_1.main=this}updated(){if(!this.container)return;const t=this.container.getBoundingClientRect(),e=this.getBoundingClientRect();e.top+e.height>t.bottom&&(this.style.top=e.top-e.height+"px"),e.left+e.width>t.right&&(this.style.left=t.right-e.width+"px")}render(){if(this.style.display=this.isOpen?"unset":"none",!this.isOpen)return lit.qy``;const t=this.entries.map((t=>{switch(t.type){case"button":return this.buttonTemplate(t);case"separator":return this.separatorTemplate()}}));return lit.qy`${t.length>0?t:lit.qy`<div class="context-menu-button muted">...</div>`}`}buttonTemplate(t){return lit.qy`
        <div class="context-menu-button ${t.disabled?"muted":""}" @mousedown="${e=>{1===e.buttons&&(ContextMenu_1.close(),t.action&&t.action(),e.stopImmediatePropagation(),e.stopPropagation())}}">
        ${t.icon?lit.qy`<or-icon icon="${t.icon}"></or-icon>`:null}
        <span class="label">${t.label}</span></div>`}separatorTemplate(){return lit.qy`<div class="context-menu-separator"></div>`}};context_menu_decorate([(0,decorators.MZ)({attribute:!1})],ContextMenu.prototype,"isOpen",void 0),ContextMenu=ContextMenu_1=context_menu_decorate([(0,decorators.EM)("context-menu")],ContextMenu);const FlowNodeStyle=lit.AH`
:host{
    white-space: nowrap;
    min-width: 80px;
    min-height: 80px;
    background: rgba(200,200,200, 0.85);

    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto 1fr;
    grid-template-areas: 
        "title title title"
        "input internal output";

    position: absolute;
    border-radius: var(--roundness);
    transform-origin: 0 0;
    z-index: 0;
}
:host([minimal]){
    min-width: 60px;
    min-height: 60px;
    grid-template-columns: var(--socket-display-size) 1fr var(--socket-display-size);
    grid-template-rows: auto;
    grid-template-areas: 
        "input title output";
}
.internal-container{
    grid-area: internal;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px 0 8px 0;
}
.socket-side{
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-evenly;
}
.inputs{
    grid-area: input;
    align-items: flex-start;
}
.inputs flow-node-socket{
    transform: translateX(calc(var(--socket-size) / -2));
}
.outputs{
    grid-area: output;
    align-items: flex-end;
}
.outputs flow-node-socket{
    transform: translateX(calc(var(--socket-size) / 2));
}
.title{
    grid-area: title;
    padding: 3px 6px 3px 6px;
    background: rgb(180,180,180);
    border-radius: inherit;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    color: white;
    cursor: grab;
}
.title.input{
    background: var(--input-color);
    text-align: right;
}
.title.processor{
    background: var(--processor-color);
    text-align: center;
}
.title.output{
    background: var(--output-color);
    text-align: left;
}
.title.minimal{
    background: transparent;
    font-size: 20px;
    line-height: 50%;
    display: table;
    padding: 15px 0 15px 0;
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
}
.title.minimal[singlechar]{
    font-size: 32px;
}
.lock-icon{
    position: absolute;
    top: 0px;
    right: 0px;
    color: rgba(255,255,255,0.8);
    transform: scale(.7);
}
.lock-icon.input{
    left: 0;
}
`,nodeConverter={fromAttribute:o=>project.nodes.find((t=>t.id===o)),toAttribute:o=>o.id};var selectable_element_decorate=function(e,t,s,l){var i,n=arguments.length,o=n<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,s):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,l);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(o=(n<3?i(o):n>3?i(t,s,o):i(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o};class SelectableElement extends((0,or_translate_lib.Tl)(or_translate_lib.MR)(lit.WF)){constructor(){super(...arguments),this.isSelected=!1,this.onSelected=e=>{e===this&&(this.isSelected=!0)},this.onDeselected=e=>{e===this&&(this.isSelected=!1)},this.handleSelection=e=>{1===e.buttons?(input.handleSelection(this),e.stopPropagation()):2===e.buttons&&input.handleSelection(this,!0)}}get selected(){return this.isSelected}get handle(){return this.selectableHandle}disconnectedCallback(){super.disconnectedCallback(),this.selected&&input.selected.splice(input.selected.indexOf(this),1),this.isSelected=!1,input.removeListener("selected",this.onSelected),input.removeListener("deselected",this.onDeselected),input.selectables.splice(input.selectables.indexOf(this),1)}setHandle(e){this.selectableHandle&&this.selectableHandle.removeEventListener("mousedown",this.handleSelection),e.addEventListener("mousedown",this.handleSelection),this.selectableHandle=e}firstUpdated(){this.setHandle(this),input.selectables.push(this),input.addListener("selected",this.onSelected),input.addListener("deselected",this.onDeselected)}}selectable_element_decorate([(0,decorators.MZ)({type:Boolean})],SelectableElement.prototype,"isSelected",void 0),selectable_element_decorate([(0,decorators.MZ)({attribute:!1})],SelectableElement.prototype,"selectableHandle",void 0);var flow_node_decorate=function(e,t,o,i){var n,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s<3?n(r):s>3?n(t,o,r):n(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r},flow_node_awaiter=function(e,t,o,i){return new(o||(o=Promise))((function(n,s){function r(e){try{d(i.next(e))}catch(e){s(e)}}function a(e){try{d(i.throw(e))}catch(e){s(e)}}function d(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,a)}d((i=i.apply(e,t||[])).next())}))};let FlowNode=class extends SelectableElement{constructor(){super(),this.frozen=!1,this.minimal=!1,this.isBeingDragged=!1,this.forceUpdate=()=>{this.requestUpdate()},this.setTranslate=()=>{const e=this.workspace.worldToOffset(this.node.position);this.style.transform=`translate(${e.x}px, ${e.y}px) scale(${this.workspace.camera.zoom})`,this.dispatchEvent(new CustomEvent("updated"))},this.startDrag=e=>{this.frozen||1===e.buttons&&(project.createUndoSnapshot(),this.bringToFront(),window.addEventListener("mouseup",this.stopDrag),window.addEventListener("mousemove",this.onDrag),this.isBeingDragged=!0)},this.onDrag=e=>{this.node.position={x:this.node.position.x+e.movementX/this.workspace.camera.zoom,y:this.node.position.y+e.movementY/this.workspace.camera.zoom},this.setTranslate()},this.stopDrag=()=>{window.removeEventListener("mouseup",this.stopDrag),window.removeEventListener("mousemove",this.onDrag),this.isBeingDragged=!1,project.notifyChange()},this.linkIdentity=()=>{IdentityDomLink.map[this.node.id]=this}}static get styles(){return FlowNodeStyle}disconnectedCallback(){this.workspace.removeEventListener("pan",this.setTranslate),this.workspace.removeEventListener("zoom",this.setTranslate),project.removeListener("cleared",this.forceUpdate),project.removeListener("connectionremoved",this.linkIdentity),super.disconnectedCallback()}bringToFront(){this.frozen||(this.style.zIndex=""+this.workspace.topNodeZindex++)}firstUpdated(){const e=Object.create(null,{firstUpdated:{get:()=>super.firstUpdated}});return flow_node_awaiter(this,void 0,void 0,(function*(){if(e.firstUpdated.call(this),this.linkIdentity(),this.workspace.addEventListener("pan",this.setTranslate),this.workspace.addEventListener("zoom",this.setTranslate),project.addListener("cleared",this.forceUpdate),project.addListener("connectionremoved",this.linkIdentity),this.minimal=0!==(this.node.displayCharacter||"").length,this.bringToFront(),newIds.has(this.node.id)){yield this.updateComplete,yield this.updateComplete;const e=this.getBoundingClientRect();this.node.position.x-=e.width/2/this.workspace.camera.zoom,this.node.position.y-=e.height/2/this.workspace.camera.zoom,this.setTranslate(),newIds.delete(this.node.id)}this.minimal&&this.addEventListener("mousedown",this.startDrag)}))}updated(){return flow_node_awaiter(this,void 0,void 0,(function*(){this.linkIdentity(),this.dispatchEvent(new CustomEvent("updated"))}))}render(){this.minimal?this.style.background=`var(--${this.node.type.toLowerCase()}-color)`:this.style.background="",this.setTranslate(),this.style.boxShadow=this.selected?"var(--highlight) 0 0 0 3px":"";const e=this.minimal?lit.qy`<div class="title minimal" ?singlechar="${1===this.node.displayCharacter.length}">${or_translate_lib.MR.t(this.node.displayCharacter)}</div>`:lit.qy`<div class="title ${this.node.type.toLowerCase()}" @mousedown="${this.startDrag}">${or_translate_lib.MR.t(this.node.name)||"invalid"}</div>`,t=lit.qy`<div class="socket-side inputs">${this.node.inputs.map((e=>lit.qy`<flow-node-socket ?renderlabel="${!this.minimal}" .socket="${e}" side="input"></flow-node-socket>`))}</div>`,o=lit.qy`<div class="socket-side outputs">${this.node.outputs.map((e=>lit.qy`<flow-node-socket ?renderlabel="${!this.minimal}" .socket="${e}" side="output"></flow-node-socket>`))}</div>`,i=lit.qy`<div style="width: 10px"></div>`;return lit.qy`
        ${e}
        ${this.node.inputs.length>0?t:i}
        ${this.minimal?null:lit.qy`<div class="internal-container">${this.node.internals.map((e=>lit.qy`<internal-picker style="pointer-events: ${this.frozen?"none":"normal"}" @picked="${()=>flow_node_awaiter(this,void 0,void 0,(function*(){this.forceUpdate(),yield this.updateComplete,project.removeInvalidConnections()}))}" .node="${this.node}" .internalIndex="${this.node.internals.indexOf(e)}"></internal-picker>`))}</div>`}
        ${this.node.outputs.length>0?o:i}
        ${this.frozen?lit.qy`<or-icon class="lock-icon ${this.node.type.toLowerCase()}" icon="lock"></or-icon>`:""}
        `}};flow_node_decorate([(0,decorators.MZ)({converter:nodeConverter})],FlowNode.prototype,"node",void 0),flow_node_decorate([(0,decorators.MZ)({attribute:!1})],FlowNode.prototype,"workspace",void 0),flow_node_decorate([(0,decorators.MZ)({type:Boolean,reflect:!0})],FlowNode.prototype,"frozen",void 0),flow_node_decorate([(0,decorators.MZ)({type:Boolean,reflect:!0})],FlowNode.prototype,"minimal",void 0),flow_node_decorate([(0,decorators.MZ)({attribute:!1})],FlowNode.prototype,"isBeingDragged",void 0),FlowNode=flow_node_decorate([(0,decorators.EM)("flow-node")],FlowNode);class Utilities{static getCenter(t){return{x:t.left+t.width/2,y:t.top+t.height/2}}static isPointInsideBox(t,e,i){return t>i.x&&t<i.x+i.width&&e>i.y&&e<i.y+i.height}static isBoxInsideBox(t,e){const i=e.x-t.x,s=e.y-t.y;return t.x>=e.x&&t.width-i<=e.width&&t.y>=e.y&&t.height-s<=e.height}static humanLike(t){let e=(t=t.replace(/_+/gm," "))[0].toUpperCase();for(let i=1;i<t.length;i++){const s=t[i];s.match("[A-z]")&&s===s.toUpperCase()&&0!==t[i-1].trim().length&&(e+=" "),e+=s.toLowerCase()}return e}static ellipsis(t,e=15,i="..."){return t&&e&&i?i.length>e?(console.warn("Invalid ellipsis parameters: given ellipsis is longer than the max length"),t):t.length<e?t:t?t.length>8?t.substr(0,e-i.length)+i:t:"":t}}var editor_workspace_decorate=function(t,e,o,i){var n,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},editor_workspace_awaiter=function(t,e,o,i){return new(o||(o=Promise))((function(n,r){function s(t){try{c(i.next(t))}catch(t){r(t)}}function a(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,a)}c((i=i.apply(t,e||[])).next())}))};let EditorWorkspace=class extends((0,or_translate_lib.Tl)(or_translate_lib.MR)(lit.WF)){get clientRect(){return this.cachedClientRect}static get styles(){return EditorWorkspaceStyle}get halfSize(){const t=this.cachedClientRect;return{x:t.width/2,y:t.height/2}}get isCameraInDefaultPosition(){return Math.abs(this.camera.x)<.05&&Math.abs(this.camera.y)<.05&&this.camera.zoom>.95&&this.camera.zoom<1.05}constructor(){super(),this.camera={x:0,y:0,zoom:1},this.topNodeZindex=1,this.scrollSensitivity=1.25,this.zoomLowerBound=.2,this.zoomUpperBound=10,this.connectionDragging=!1,this.connectionFrom={x:0,y:0},this.connectionTo={x:0,y:0},this.isPanning=!1,this.onMove=t=>{const e=window.devicePixelRatio;this.camera={x:this.camera.x+t.movementX/this.camera.zoom/e,y:this.camera.y+t.movementY/this.camera.zoom/e,zoom:this.camera.zoom},this.dispatchEvent(new CustomEvent("pan"))},this.onZoom=t=>{if(this.connectionDragging)return;if(this.isPanning)return;const e=.9*this.scrollSensitivity,o=t.deltaY<0?this.camera.zoom*e:this.camera.zoom/e;o<this.zoomLowerBound||o>this.zoomUpperBound||(this.camera={x:this.camera.x,y:this.camera.y,zoom:o},this.dispatchEvent(new CustomEvent("zoom")))},this.onEmptyConnectionRelease=t=>{project.isCurrentlyConnecting&&project.endConnectionDrag(t,null,!1)},this.stopPan=()=>{this.isPanning&&(window.removeEventListener("mousemove",this.onMove),this.isPanning=!1)},project.addListener("nodeadded",(t=>{this.requestUpdate()})),project.addListener("noderemoved",(t=>{this.requestUpdate()})),project.addListener("cleared",(()=>{this.requestUpdate()})),project.addListener("connectionstart",((t,e)=>{if(1!==t.buttons)return;const o=IdentityDomLink.map[e.id].connectionPosition;this.connectionFrom=this.pageToOffset(o),this.addEventListener("mousemove",project.connectionDragging),this.addEventListener("mouseup",this.onEmptyConnectionRelease)})),project.addListener("connecting",(t=>{this.connectionTo={x:t.pageX-this.clientRect.left,y:t.pageY-this.clientRect.top},this.connectionDragging=!0})),project.addListener("connectionend",(()=>{this.connectionDragging=!1,this.removeEventListener("mousemove",project.connectionDragging)})),project.addListener("fitview",(()=>{this.fitCamera(project.nodes)})),window.addEventListener("resize",(()=>{this.cachedClientRect=this.getBoundingClientRect(),this.dispatchEvent(new CustomEvent("pan"))})),this.addEventListener("mousedown",(t=>{this.startPan(t),1===t.buttons&&input.clearSelection()})),this.addEventListener("contextmenu",(t=>{const e=((e,t)=>{const o=input.selected.filter((e=>e instanceof FlowNode&&e.selected)),n=input.selected.filter((e=>e instanceof ConnectionLine&&e.selected)),a=o=>{let n=[{type:"button",label:"",icon:"arrow-left",action:()=>{e.dispatchEvent(new MouseEvent("contextmenu",t))}}];return n=n.concat(integration.nodes.filter((e=>e.type===o)).map((o=>({type:"button",label:i18next.Ay.t(o.name,Utilities.humanLike(o.name)),action:()=>{const n=CopyMachine.copy(o);n.position=e.offsetToWorld({x:t.offsetX-e.offsetLeft,y:t.offsetY-e.offsetTop}),project.createUndoSnapshot(),project.addNode(n)}})))),n};let i=[{type:"button",label:i18next.Ay.t("input","Input"),icon:"arrow-collapse-right",action:()=>{ContextMenu.open(t.pageX,t.pageY,e,a("INPUT"))}},{type:"button",label:i18next.Ay.t("processors","Processors"),icon:"cog",action:()=>{ContextMenu.open(t.pageX,t.pageY,e,a("PROCESSOR"))}},{type:"button",label:i18next.Ay.t("output","Ouput"),icon:"arrow-expand-right",action:()=>{ContextMenu.open(t.pageX,t.pageY,e,a("OUTPUT"))}}];return i=i.concat([{type:"separator"},{type:"button",icon:"content-copy",label:i18next.Ay.t("copy","Copy"),action:()=>{const o=e.offsetToWorld({x:t.offsetX,y:t.offsetY});copyPasteManager.copy(o.x,o.y)},disabled:0===o.length},{type:"button",icon:"content-paste",label:i18next.Ay.t("paste","Paste"),action:()=>{project.createUndoSnapshot();const o=e.offsetToWorld({x:t.offsetX,y:t.offsetY});project.notifyChange(),e.pasteAt(o.x,o.y)},disabled:copyPasteManager.isFull},{type:"button",icon:"delete",label:i18next.Ay.t("delete","Delete"),action:()=>{project.createUndoSnapshot(),o.forEach((e=>{e.frozen||project.removeNode(e.node)})),n.forEach((e=>project.removeConnection(e.connection))),project.notifyChange()},disabled:0===o.length&&0===n.length||0!==o.length&&o.every((e=>e.frozen))},{type:"separator"},{type:"button",icon:"fit-to-page-outline",label:i18next.Ay.t("fitViewToSelectedNodes","Fit view to selected nodes"),action:()=>e.fitCamera(o.map((e=>e.node))),disabled:0===o.length},{type:"button",icon:"snowflake",label:"TOGGLE FROZEN [DEBUG FUNCTION]",action:()=>o.forEach((e=>e.frozen=!e.frozen)),disabled:0===o.length},{type:"separator"},{type:"button",icon:"export",label:"Export to JSON",action:()=>{modal.anything("Export result",lit.qy`
                <div style="user-select: all;font-family: monospace; padding: 5px; overflow: auto; background: whitesmoke; max-width:50vw; max-height:50vh">
                ${exporter.flowToJson(project.toNodeCollection("Exported on "+new Date,""))}
                </div>
                `)}}]),i})(this,t);ContextMenu.open(t.pageX,t.pageY,this,e),t.preventDefault()})),project.workspace=this,this.addEventListener("wheel",this.onZoom,{passive:!0})}resetCamera(){this.camera={x:0,y:0,zoom:1},this.dispatchEvent(new CustomEvent("pan")),this.dispatchEvent(new CustomEvent("zoom"))}fitCamera(t,e=25){const o=new src.B8;if(o.AddRange(t),0==o.Count())return;const i=o.OrderBy((t=>t.position.x)).First(),n=o.OrderBy((t=>t.position.y)).First(),r=o.OrderByDescending((t=>t.position.x+IdentityDomLink.map[t.id].scrollWidth)).First(),s=o.OrderByDescending((t=>t.position.y+IdentityDomLink.map[t.id].scrollHeight)).First(),a=IdentityDomLink.map[r.id].scrollWidth,c=IdentityDomLink.map[s.id].scrollHeight,p=i.position.x-e,d=r.position.x+e+a,h=s.position.y+e+c,m=n.position.y-e,l=d-p,u=h-m,y=this.clientRect,v=(p+d)/2,g=(h+m)/2,w=Math.min(y.width/l,y.height/u);this.camera={x:-v,y:-g,zoom:Math.min(Math.max(this.zoomLowerBound,w),this.zoomUpperBound)},this.dispatchEvent(new CustomEvent("pan")),this.dispatchEvent(new CustomEvent("zoom"))}offsetToWorld(t){const e=this.halfSize;return{x:(t.x-e.x)/this.camera.zoom-this.camera.x,y:(t.y-e.y)/this.camera.zoom-this.camera.y}}worldToOffset(t){const e=this.halfSize;return{x:(t.x+this.camera.x)*this.camera.zoom+e.x,y:(t.y+this.camera.y)*this.camera.zoom+e.y}}pageToOffset(t){const e=this.clientRect;return{x:t.x-e.left,y:t.y-e.top}}pasteAt(t,e){return editor_workspace_awaiter(this,void 0,void 0,(function*(){const o=copyPasteManager.getFromClipboard({x:t,y:e});o.nodes.forEach((t=>{project.addNode(t)})),yield this.updateComplete,o.connections.forEach((t=>{project.createConnection(t.from,t.to)}))}))}firstUpdated(){this.cachedClientRect=this.getBoundingClientRect(),this.application.nodePanel.drawer&&this.application.nodePanel.drawer.addEventListener("or-mwc-drawer-changed",(t=>editor_workspace_awaiter(this,void 0,void 0,(function*(){this.style.width=t.detail?"calc(100% - 255px)":"",yield this.updateComplete,this.cachedClientRect=this.getBoundingClientRect(),this.dispatchEvent(new CustomEvent("pan"))}))))}render(){return lit.qy`
        ${(0,repeat.u)(project.nodes,(t=>t.id),(t=>lit.qy`<flow-node .node="${t}" .workspace="${this}"></flow-node>`))}
        <connection-container .workspace="${this}"></connection-container>
        <svg>
            <line style="display: 
            ${this.connectionDragging?null:"none"}; 
            stroke-dasharray: ${20*this.camera.zoom}, ${10*this.camera.zoom}; 
            stroke-opacity: 0.25; stroke-width: ${4*this.camera.zoom}px" 

            x1="${this.connectionFrom.x}" 
            y1="${this.connectionFrom.y}" 
            x2="${this.connectionTo.x}" 
            y2="${this.connectionTo.y}"></line>
        </svg>
        <selection-box .workspace="${this}"></selection-box>
        <div class="view-options" style="z-index: ${this.topNodeZindex+1}">
            ${this.isCameraInDefaultPosition?null:lit.qy`<or-mwc-input type="${or_mwc_input.NZ.BUTTON}" icon="vector-square" @or-mwc-input-changed="${this.resetCamera}" label="${or_translate_lib.MR.t("resetView","Reset view")}"></or-mwc-input>`}
            ${0!==project.nodes.length?lit.qy`<or-mwc-input type="button" icon="fit-to-page-outline" @or-mwc-input-changed="${()=>this.fitCamera(project.nodes)}" label="${or_translate_lib.MR.t("fitView","Fit view")}"></or-mwc-input>`:null}
        </div>
        `}startPan(t){return!this.connectionDragging&&4===t.buttons&&(this.isPanning=!0,window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseup",this.stopPan),void t.preventDefault())}};editor_workspace_decorate([(0,decorators.MZ)({attribute:!1})],EditorWorkspace.prototype,"camera",void 0),editor_workspace_decorate([(0,decorators.MZ)({attribute:!1})],EditorWorkspace.prototype,"topNodeZindex",void 0),editor_workspace_decorate([(0,decorators.MZ)({attribute:!1})],EditorWorkspace.prototype,"scrollSensitivity",void 0),editor_workspace_decorate([(0,decorators.MZ)({attribute:!1})],EditorWorkspace.prototype,"zoomLowerBound",void 0),editor_workspace_decorate([(0,decorators.MZ)({attribute:!1})],EditorWorkspace.prototype,"zoomUpperBound",void 0),editor_workspace_decorate([(0,decorators.MZ)({attribute:!1})],EditorWorkspace.prototype,"application",void 0),editor_workspace_decorate([(0,decorators.MZ)({attribute:!1})],EditorWorkspace.prototype,"connectionDragging",void 0),editor_workspace_decorate([(0,decorators.MZ)({attribute:!1})],EditorWorkspace.prototype,"connectionFrom",void 0),editor_workspace_decorate([(0,decorators.MZ)({attribute:!1})],EditorWorkspace.prototype,"connectionTo",void 0),EditorWorkspace=editor_workspace_decorate([(0,decorators.EM)("editor-workspace")],EditorWorkspace);var top_bar_decorate=function(e,t,o,r){var l,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(a=(i<3?l(a):i>3?l(t,o,a):l(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a};let TopBar=class extends((0,or_translate_lib.Tl)(or_translate_lib.MR)(lit.WF)){static get styles(){return lit.AH`
        :host{
            display: flex;
            width: 100%;
            justify-content: flex-start;
            align-items: center;
            box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -5px;
            line-height: var(--topbar-height);
            z-index: 150;
        }
        .button{
            padding: 0 25px 0 25px;
            cursor: pointer;
        }
        .button:hover{
            background: #fafafa;
        }
        .button:active{
            background: whitesmoke;
        }
        .debug.button{
            background: yellow;
        }
        .title{
            margin: 0 15px 0 15px;
            text-transform: uppercase;
            font-weight: bold;
        }
        .right{ 
            margin-left: auto;
        }`}firstUpdated(){project.addListener("unsavedstateset",(()=>{this.requestUpdate()}))}render(){return lit.qy`
        <span class="title">${or_translate_lib.MR.t("flowEditor")}</span>
        <a class="button" @click="${()=>{project.unsavedState?modal.confirmation((()=>{project.clear(!0)}),"New project"):project.clear(!0)}}">New</a>
        <a class="button" @click="${this.save}">${or_translate_lib.MR.t("save")} <i>${Utilities.ellipsis(project.existingFlowRuleName)}</i>${project.unsavedState&&-1!==project.existingFlowRuleId?"*":""}</a>
        ${-1===project.existingFlowRuleId?null:lit.qy`<a @click="${this.showSaveAsDialog}" class="button">Save as...</a>`}
        <a class="button" @click="${this.showRuleBrowser}">Open</a>
        <a class="button right" @click="${()=>{this.application.nodePanel.drawer.toggle()}}"><or-icon icon="menu"></or-icon></a>
        `}save(){-1===project.existingFlowRuleId?this.showSaveAsDialog():exporter.exportAsExisting(project.existingFlowRuleId,project.toNodeCollection(project.existingFlowRuleName,project.existingFlowRuleDesc))}showRuleBrowser(){modal.element.content=lit.qy`<rule-browser @ruleloaded="${()=>modal.element.close()}"></rule-browser>`,modal.element.header="Select a Flow rule",modal.element.open()}showSaveAsDialog(){let e="",t="";modal.element.content=lit.qy`
            <div style="display: flex; flex-direction: column; width: auto; justify-content: space-between; align-items: stretch;">
            <or-mwc-input style="margin-bottom: 16px; width:100%;" required type="text" label="${or_translate_lib.MR.t("name","Name")}"
            @or-mwc-input-changed="${t=>{e=t.detail.value}}"
            ></or-mwc-input>
            <or-mwc-input style="margin-bottom: 16px; width:100%;" fullwidth type="textarea" label="${or_translate_lib.MR.t("description","Description")}"
            @or-mwc-input-changed="${e=>{t=e.detail.value}}"
            ></or-mwc-input>
            <div>
                <or-mwc-input style="text-align: left; margin-right: 10px" type="${or_mwc_input.NZ.BUTTON}" label="${or_translate_lib.MR.t("cancel","Cancel")}" @or-mwc-input-changed="${modal.element.close}"></or-mwc-input>
                <or-mwc-input style="text-align: right" type="${or_mwc_input.NZ.BUTTON}" unelevated label="${or_translate_lib.MR.t("save","Save")}" @or-mwc-input-changed="${()=>{e&&(exporter.exportAsNew(project.toNodeCollection(e,t)),modal.element.close())}}"></or-mwc-input>
            </div>
            </div>
        `,modal.element.header="Save project",modal.element.open()}};top_bar_decorate([(0,decorators.MZ)({attribute:!1})],TopBar.prototype,"application",void 0),TopBar=top_bar_decorate([(0,decorators.EM)("top-bar")],TopBar);var node_menu_item_decorate=function(e,t,i,o){var s,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let NodeMenuItem=class extends((0,or_translate_lib.Tl)(or_translate_lib.MR)(lit.WF)){constructor(){super(),this.isDragging=!1,this.x=0,this.y=0,this.xOffset=0,this.yOffset=0,this.startDrag=e=>{this.xOffset=e.offsetX,this.yOffset=e.offsetY,this.x=e.clientX,this.y=e.clientY,this.isDragging=!0,window.addEventListener("mouseup",this.stopDrag),window.addEventListener("mousemove",this.onMove)},this.onMove=e=>{this.x=e.clientX,this.y=e.clientY},this.stopDrag=e=>{if(window.removeEventListener("mouseup",this.stopDrag),window.removeEventListener("mousemove",this.onMove),this.isDragging=!1,Utilities.isPointInsideBox(e.offsetX,e.offsetY,{x:this.workspace.clientRect.left,y:this.workspace.clientRect.top,width:this.workspace.clientRect.width,height:this.workspace.clientRect.height})){const t=CopyMachine.copy(this.node);newIds.add(t.id),t.position=this.workspace.offsetToWorld({x:e.offsetX-this.workspace.clientRect.left,y:e.offsetY-this.workspace.clientRect.top}),project.createUndoSnapshot(),project.addNode(t),project.notifyChange()}},this.addEventListener("mousedown",this.startDrag)}static get styles(){return lit.AH`
        :host, .node-drag-item{
            padding: 4px;
            margin: 0 0 15px 0;
            display: inline-block;
            text-align: center;
            color: white;
            border-radius: var(--roundness);
            box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -5px;

            width: calc(var(--nodepanel-width) - 4px * 2);
            height: 22px;
            line-height: 22px;
            cursor:grab;
            transition: box-shadow 150ms;
        }
        :host(.small), .small{
            width: 26px;
            height: 26px;
            line-height: 26px;
            margin: 0;
        }
        .node-drag-item{
            z-index: 5000;
            position: fixed;
            background: inherit;
            box-shadow: rgba(0, 0, 0, 0.2) 0 2px 15px;
            filter: opacity(90%);
            pointer-events: none;
        }
        `}render(){switch(this.node.type){case"INPUT":this.classList.add("input-node");break;case"PROCESSOR":this.classList.add("processor-node");break;case"OUTPUT":this.classList.add("output-node")}return this.node.displayCharacter&&this.classList.add("small"),this.title=or_translate_lib.MR.t(this.node.name,Utilities.humanLike(this.node.name)),lit.qy`
        <div class="label">${this.flowNodeName}</div>
        ${this.isDragging?this.dragNodeTemplate:null}
        `}get dragNodeTemplate(){return lit.qy`<div class="node-drag-item ${this.node.displayCharacter?"small":null}" style="top: ${this.y-this.yOffset}px; left: ${this.x-this.xOffset}px"><div class="label">${this.flowNodeName}</div></div>`}get flowNodeName(){return or_translate_lib.MR.t(this.node.displayCharacter||this.node.name,this.node.displayCharacter||Utilities.humanLike(this.node.name||"invalid node name"))}};node_menu_item_decorate([(0,decorators.MZ)({attribute:!1})],NodeMenuItem.prototype,"node",void 0),node_menu_item_decorate([(0,decorators.MZ)({attribute:!1})],NodeMenuItem.prototype,"isDragging",void 0),node_menu_item_decorate([(0,decorators.MZ)({attribute:!1})],NodeMenuItem.prototype,"x",void 0),node_menu_item_decorate([(0,decorators.MZ)({attribute:!1})],NodeMenuItem.prototype,"y",void 0),node_menu_item_decorate([(0,decorators.MZ)({attribute:!1})],NodeMenuItem.prototype,"workspace",void 0),NodeMenuItem=node_menu_item_decorate([(0,decorators.EM)("node-menu-item")],NodeMenuItem);var flow_node_socket_decorate=function(e,t,o,i){var r,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var d=e.length-1;d>=0;d--)(r=e[d])&&(s=(n<3?r(s):n>3?r(t,o,s):r(t,o))||s);return n>3&&s&&Object.defineProperty(t,o,s),s};let FlowNodeSocket=class extends((0,or_translate_lib.Tl)(or_translate_lib.MR)(lit.WF)){constructor(){super(...arguments),this.renderLabel=!1,this.identityDeleted=!1,this.forceUpdate=()=>this.requestUpdate()}get connectionPosition(){return Utilities.getCenter(this.circleElem.getBoundingClientRect())}static get styles(){return lit.AH`
        :host{
            width: auto;
            height: var(--socket-size);
            margin: 2px;
            display: inline-block;
        }
        .socket{
            background: none;
            height: var(--socket-size);
            width: var(--socket-size);
            border-radius: 100%;
            display: inline-flex;
            justify-content: center;
            align-items: center;
        }
        .socket:hover{
            background: var(--highlight);
        }
        .label{
            display:inline-block;
            vertical-align: top;
            color: rgba(0,0,0,.5);
            text-transform: lowercase;
        }
        .circle{
            box-sizing: border-box;
            background: grey;
            width: var(--socket-display-size);
            height: var(--socket-display-size);
            border-radius: 100%;
            pointer-events: none;
            border: 1px solid rgb(80,80,80);
        }`}get socketTypeString(){return this.socket.type.toString().toLowerCase()}disconnectedCallback(){this.identityDeleted=delete IdentityDomLink.map[this.socket.id],project.removeListener("connectioncreated",this.forceUpdate),project.removeListener("connectionremoved",this.forceUpdate),project.removeListener("nodeadded",this.forceUpdate),project.removeListener("noderemoved",this.forceUpdate),project.removeListener("cleared",this.forceUpdate),IdentityDomLink.map[this.socket.nodeId].removeEventListener("updated",this.forceUpdate)}firstUpdated(){this.title=Utilities.humanLike(this.socketTypeString),this.linkIdentity(),project.addListener("connectioncreated",this.forceUpdate),project.addListener("connectionremoved",this.forceUpdate),project.addListener("nodeadded",this.forceUpdate),project.addListener("noderemoved",this.forceUpdate),project.addListener("cleared",this.forceUpdate),IdentityDomLink.map[this.socket.nodeId].addEventListener("updated",this.forceUpdate);const e="input"===this.side;this.addEventListener("mousedown",(t=>{this.linkIdentity(),1===t.buttons&&(project.isCurrentlyConnecting||(project.startConnectionDrag(t,this.socket,e),t.stopPropagation(),t.stopImmediatePropagation()))})),this.addEventListener("mouseup",(t=>{project.createUndoSnapshot(),this.linkIdentity(),project.endConnectionDrag(t,this.socket,e),project.notifyChange(),1===t.buttons&&(t.stopPropagation(),t.stopImmediatePropagation())}))}updated(){this.linkIdentity()}render(){const e=`var(--${this.socketTypeString})`,t=lit.qy`<div class="socket">
            <div class="circle" id="circle" style="background: ${e}"></div>
            </div>`;if(!this.renderLabel)return t;const o=lit.qy`<div class="label">${or_translate_lib.MR.t(this.socket.name)}</div>`;return"input"===this.side?lit.qy`${t}${o}`:lit.qy`${o}${t}`}linkIdentity(){this.identityDeleted||(IdentityDomLink.map[this.socket.id]=this)}};flow_node_socket_decorate([(0,decorators.MZ)({type:Object})],FlowNodeSocket.prototype,"socket",void 0),flow_node_socket_decorate([(0,decorators.MZ)({type:String})],FlowNodeSocket.prototype,"side",void 0),flow_node_socket_decorate([(0,decorators.MZ)({type:Boolean})],FlowNodeSocket.prototype,"renderLabel",void 0),flow_node_socket_decorate([(0,decorators.P)("#circle")],FlowNodeSocket.prototype,"circleElem",void 0),FlowNodeSocket=flow_node_socket_decorate([(0,decorators.EM)("flow-node-socket")],FlowNodeSocket);var lib_ResizeObserver=__webpack_require__("../../../node_modules/resize-observer/lib/ResizeObserver.js"),connection_line_decorate=function(e,t,o,n){var i,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(r=(s<3?i(r):s>3?i(t,o,r):i(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r};let ConnectionLine=class extends SelectableElement{constructor(){super(),this.fancyLine=!0,this.curveIntensity=1,this.nodeChanged=()=>{this.requestUpdate()},this.polylineId=IdentityAssigner.generateIdentity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.disconnect(),project.removeListener("connectionremoved",this.nodeChanged)}firstUpdated(){super.firstUpdated();const e=this.shadowRoot.getElementById(this.polylineId);e&&this.setHandle(e)}render(){if(this.isInvalid){const e=NodeUtilities.getSocketFromID(this.connection.from,project.nodes),t=NodeUtilities.getSocketFromID(this.connection.to,project.nodes);if(this.fromNodeElement=IdentityDomLink.map[e.nodeId],this.toNodeElement=IdentityDomLink.map[t.nodeId],this.fromElement=IdentityDomLink.map[e.id],this.toElement=IdentityDomLink.map[t.id],this.isInvalid)return console.warn(this.fromNodeElement),console.warn(this.toNodeElement),console.warn(this.fromElement),console.warn(this.toElement),console.warn("Attempt to render invalid connection"),lit.qy``;this.fromNodeElement.addEventListener("updated",this.nodeChanged),this.toNodeElement.addEventListener("updated",this.nodeChanged),this.resizeObserver=new lib_ResizeObserver.tb(this.nodeChanged),this.resizeObserver.observe(this.fromNodeElement),this.resizeObserver.observe(this.toNodeElement)}const e=this.workspace.clientRect,t=this.fromElement.connectionPosition,o=this.toElement.connectionPosition;if(this.fancyLine){const n=t.x-e.left,i=t.y-e.top,s=o.x-e.left,r=o.y-e.top,l=this.curveIntensity*(Math.abs(n-s)/2);return lit.qy`<svg style="stroke-width: ${this.workspace.camera.zoom*(this.selected?5:3)}px;">
                <path id="${this.polylineId}" 
                d="M ${n} ${i} C ${n+l} ${i}, ${s-l} ${r}, ${s} ${r}"
                selected="${this.selected}"
                />
            </svg>`}return lit.qy`<svg style="stroke-width: ${this.workspace.camera.zoom*(this.selected?5:3)}px;"><polyline id="${this.polylineId}"
        selected="${this.selected}"
        points="
        ${t.x-e.left}, ${t.y-e.top} 
        ${o.x-e.left}, ${o.y-e.top}"
        ></polyline>
        </svg>`}static get styles(){return lit.AH`
            svg{
                fill: none;  
                overflow: visible;
                position: absolute;
                pointer-events: none;
                stroke-linejoin: round;
            }
            path, line{
                position: absolute;
                pointer-events: all;
            }
            path:hover, line:hover, path[selected = true], line[selected = true]{
                stroke: var(--highlight);
            }
            text{
                fill: red;
                stroke: none;
            }`}get isInvalid(){return!(this.fromNodeElement&&this.toNodeElement&&this.fromElement&&this.toElement)}};connection_line_decorate([(0,decorators.MZ)({attribute:!1})],ConnectionLine.prototype,"connection",void 0),connection_line_decorate([(0,decorators.MZ)({attribute:!1})],ConnectionLine.prototype,"workspace",void 0),connection_line_decorate([(0,decorators.MZ)({type:String})],ConnectionLine.prototype,"polylineId",void 0),ConnectionLine=connection_line_decorate([(0,decorators.EM)("connection-line")],ConnectionLine);var connection_container_decorate=function(e,t,o,n){var r,c=arguments.length,i=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(c<3?r(i):c>3?r(t,o,i):r(t,o))||i);return c>3&&i&&Object.defineProperty(t,o,i),i};let ConnectionContainer=class extends lit.WF{constructor(){super(),project.addListener("connectioncreated",(()=>{this.requestUpdate()})),project.addListener("connectionremoved",(()=>{this.requestUpdate()})),project.addListener("cleared",(()=>{this.requestUpdate()}))}render(){return lit.qy`${(0,repeat.u)(project.connections,(e=>e.from+e.to),(e=>lit.qy`<connection-line .workspace="${this.workspace}" .connection="${e}"></connection-line>`))}`}};connection_container_decorate([(0,decorators.MZ)({attribute:!1})],ConnectionContainer.prototype,"workspace",void 0),ConnectionContainer=connection_container_decorate([(0,decorators.EM)("connection-container")],ConnectionContainer);var selection_box_decorate=function(t,e,i,o){var s,n=arguments.length,c=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,i,o);else for(var h=t.length-1;h>=0;h--)(s=t[h])&&(c=(n<3?s(c):n>3?s(e,i,c):s(e,i))||c);return n>3&&c&&Object.defineProperty(e,i,c),c};let SelectionBox=class extends lit.WF{constructor(){super(...arguments),this.distanceTreshold=20,this.isSelecting=!1,this.selectionStartPosition={x:0,y:0},this.selectionBox={x:0,y:0,width:0,height:0},this.workspaceMouseDown=t=>{1===t.buttons&&(this.selectionBox.x=t.offsetX,this.selectionBox.y=t.offsetY,this.selectionStartPosition.x=this.selectionBox.x,this.selectionStartPosition.y=this.selectionBox.y,window.addEventListener("mousemove",this.mouseMove))},this.mouseMove=t=>{const e=t.pageX-this.workspace.clientRect.left-this.selectionStartPosition.x,i=t.pageY-this.workspace.clientRect.top-this.selectionStartPosition.y;e<0?(this.selectionBox.x=t.pageX-this.workspace.clientRect.left,this.selectionBox.width=Math.abs(this.selectionBox.x-this.selectionStartPosition.x)):(this.selectionBox.x=this.selectionStartPosition.x,this.selectionBox.width=Math.abs(e)),i<0?(this.selectionBox.y=t.pageY-this.workspace.clientRect.top,this.selectionBox.height=Math.abs(this.selectionBox.y-this.selectionStartPosition.y)):(this.selectionBox.y=this.selectionStartPosition.y,this.selectionBox.height=Math.abs(i)),this.selectionBox.width+this.selectionBox.height>this.distanceTreshold&&(this.isSelecting=!0),this.requestUpdate()},this.workspaceMouseUp=()=>{window.removeEventListener("mousemove",this.mouseMove),this.isSelecting&&(this.selectInBounds(),this.isSelecting=!1)}}static get styles(){return lit.AH`
        svg{
            fill: none;  
            overflow: visible;
            position: absolute;
            pointer-events: all;
            stroke-linejoin: round;
            transition: stroke-width 120ms;
            z-index: 1000;
            width: 100vw;
            height: 100vh;
        }
        rect{
            fill: var(--highlight-faded);
            outline: solid 1px var(--highlight);
        }`}firstUpdated(){this.workspace.addEventListener("mousedown",this.workspaceMouseDown),window.addEventListener("mouseup",this.workspaceMouseUp)}render(){return this.isSelecting?lit.qy`<svg><rect x="${this.selectionBox.x}px" y="${this.selectionBox.y}px" width="${this.selectionBox.width}px" height="${this.selectionBox.height}px"></rect></svg>`:lit.qy``}selectInBounds(){input.clearSelection();const t={x:this.selectionBox.x+this.workspace.clientRect.left,y:this.selectionBox.y+this.workspace.clientRect.top,width:this.selectionBox.width,height:this.selectionBox.height};for(const e of input.selectables){const i=e.handle.getBoundingClientRect();Utilities.isBoxInsideBox({x:i.left,y:i.top,width:i.width,height:i.height},t)&&input.select(e,!0)}}};selection_box_decorate([(0,decorators.MZ)({attribute:!1})],SelectionBox.prototype,"workspace",void 0),selection_box_decorate([(0,decorators.MZ)({attribute:!1})],SelectionBox.prototype,"isSelecting",void 0),selection_box_decorate([(0,decorators.MZ)({attribute:!1})],SelectionBox.prototype,"selectionStartPosition",void 0),selection_box_decorate([(0,decorators.MZ)({attribute:!1})],SelectionBox.prototype,"selectionBox",void 0),SelectionBox=selection_box_decorate([(0,decorators.EM)("selection-box")],SelectionBox);const PickerStyle=lit.AH`
input{
    border: 0;
}
textarea{
    min-width: 150px;
    min-height: 37px;
}
textarea, input[type=text], input[type=number], select{
    font-family: inherit;
    padding: 10px;
    border-radius: var(--roundness);    
    width: auto;
    border: none;
}
.attribute-label{
    padding: 5px;
    background: rgba(0,0,0,0.05);
    text-align: center;
    border-radius: var(--roundness);
    font-size: 110%;
    color: rgb(76, 76, 76);
    font-weight: 400;
}
`;var internal_picker_decorate=function(e,t,r,s){var i,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,s);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(n<3?i(o):n>3?i(t,r,o):i(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o},internal_picker_awaiter=function(e,t,r,s){return new(r||(r=Promise))((function(i,n){function o(e){try{a(s.next(e))}catch(e){n(e)}}function l(e){try{a(s.throw(e))}catch(e){n(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,l)}a((s=s.apply(e,t||[])).next())}))};let InternalPicker=class extends((0,or_translate_lib.Tl)(or_translate_lib.MR)(lit.WF)){constructor(){super()}get internal(){return this.node.internals[this.internalIndex]}static get styles(){return[lit.AH`
            :host{
                padding: 0;
                margin: 0;
                display: flex;
                flex-direction: column;
                --or-app-color4: var(--or-mwc-input-color);
            }`,PickerStyle,lit.AH`.attribute-label-white {
                background: #ffffff;
            }
            .selected-asset-container {
                display: flex;
                align-items: center;
            }
            .selected-asset-container:hover {
                cursor: pointer;
                background-color: #F9F9F9;
            }
            .selected-asset-label {
                padding: 5px;
                display: flex;
                flex-direction: column;
                line-height: 16px;
                justify-content: flex-start;
                font-size: 14px;
                text-align: left;
            }
            .selected-asset-label .asset {
                color: rgb(76, 76, 76);
            }
            .selected-asset-label .asset-attribute {
                color: grey;
            }
            .selected-asset-icon {
                display: flex;
                justify-content: center;
                padding: 0px 5px 0px 5px;
                --or-icon-width: 20px;
            }`]}firstUpdated(){this.addEventListener("contextmenu",(e=>e.stopPropagation())),this.addEventListener("mousedown",(e=>(project.createUndoSnapshot(),project.notifyChange()))),this.resizeObserver=new lib_ResizeObserver.tb(((e,t)=>{const r=e[0].contentRect;this.node.size={x:r.width-20,y:r.height-20}})),this.resizeObserver.observe(this)}render(){switch(this.internal.picker.type){case"ASSET_ATTRIBUTE":return this.internal.value&&!this.selectedAsset&&this.setSelectedAssetFromInternalValue(),this.assetAttributeInput;case"COLOR":return this.colorInput;case"DOUBLE_DROPDOWN":return this.doubleDropdownInput;case"CHECKBOX":return this.checkBoxInput;case"DROPDOWN":return this.dropdownInput;case"MULTILINE":return this.multilineInput;case"NUMBER":return this.numberInput;case"TEXT":return this.textInput;default:return lit.qy`unimplemented picker`}}setSocketTypeDynamically(e){return internal_picker_awaiter(this,void 0,void 0,(function*(){const t=(yield rest_lib.Ay.api.AssetResource.queryAssets({ids:[e.assetId],select:{attributes:[e.attributeName]}})).data,r=this.node.outputs[0]||this.node.inputs[0];if(r.type="ANY",null!=t&&null!=t[0]&&null!=t[0].attributes)try{const s=t[0].attributes[e.attributeName],i=model_lib.u0.getValueDescriptors().find((e=>e.name===s.type));r.type=NodeUtilities.convertValueTypeToSocketType(i)}catch(e){console.error(e)}}))}setSelectedAssetFromInternalValue(){return internal_picker_awaiter(this,void 0,void 0,(function*(){const e=yield rest_lib.Ay.api.AssetResource.queryAssets({ids:[this.internal.value.assetId]});0!==e.data.length?this.selectedAsset=e.data[0]:console.warn(`Asset with id ${this.internal.value.assetId} is missing`)}))}get assetAttributeInput(){var e,t,r,s;const i=()=>{let e=[],t=[],r=this.node.internals[this.internalIndex].value;r&&(e=[{id:r.assetId,name:r.attributeName}]),this.selectedAsset&&this.selectedAsset.id&&(t=[this.selectedAsset.id]),(0,or_mwc_dialog.ui)((new or_attribute_picker_lib.y).setShowOnlyRuleStateAttrs(!0).setShowOnlyDatapointAttrs(!1).setMultiSelect(!1).setSelectedAttributes(e)).setSelectedAssets(t).addEventListener(or_attribute_picker_lib._.NAME,(e=>internal_picker_awaiter(this,void 0,void 0,(function*(){const t={assetId:e.detail[0].id,attributeName:e.detail[0].name};yield this.setSocketTypeDynamically(t),this.setValue(t),yield this.setSelectedAssetFromInternalValue()}))))};let n="?";if(this.selectedAsset&&this.selectedAsset.attributes&&(null===(t=null===(e=this.internal)||void 0===e?void 0:e.value)||void 0===t?void 0:t.attributeName)){const e=null===(s=null===(r=this.internal)||void 0===r?void 0:r.value)||void 0===s?void 0:s.attributeName,t=model_lib.u0.getAttributeDescriptor(e,this.selectedAsset.type);let i=this.selectedAsset.attributes[e];i&&(n=core_lib.J0.getAttributeLabel(i,t,this.selectedAsset.type,!0))}const o=this.selectedAsset?model_lib.u0.getAssetDescriptor(this.selectedAsset.type):void 0,l=(0,or_icon_lib.xl)(o);return lit.qy`<div>
            ${this.selectedAsset?lit.qy`<div class="attribute-label attribute-label-white selected-asset-container" @click="${()=>i()}">
                        <div class="selected-asset-icon">${l}</div>
                        <div class="selected-asset-label">
                            <div class="asset">${this.selectedAsset.name}</div>
                            <div class="asset-attribute">${n}</div>
                        </div>
                    </div>`:lit.qy`<or-mwc-input class="attribute-label-white" .type="${or_mwc_input.NZ.BUTTON}" label="attribute" icon="plus" @or-mwc-input-changed="${()=>i()}"></or-mwc-input>`}
        </div>`}get colorInput(){return lit.qy`<or-mwc-input type="color"></or-mwc-input>`}get doubleDropdownInput(){return lit.qy`unimplemented`}get dropdownInput(){return lit.qy`<writable-dropdown @input="${e=>this.setValue(e.target.value)}" .value="${this.internal.value}" .options="${this.internal.picker.options}">
        </writable-dropdown>`}get checkBoxInput(){return lit.qy`<input type="checkbox" ?checked="${this.internal.value||!1}" @input="${e=>this.setValue(e.target.checked)}"/>`}get multilineInput(){const e=this.node.size?`width:${this.node.size.x}px; height:${this.node.size.y}px`:"";return lit.qy`<textarea @wheel="${e=>{if(e.target.clientHeight<e.target.scrollHeight)return e.stopPropagation()}}" style="${e}" @input="${e=>this.setValue(e.target.value)}" placeholder="${this.internal.name}">${this.internal.value||""}</textarea>`}get numberInput(){return lit.qy`<input @wheel="${e=>{if(e.target===this.shadowRoot.activeElement)return e.stopPropagation()}}" @input="${e=>this.setValue(parseFloat(e.target.value))}" value="${this.internal.value||0}" type="number" placeholder="${this.internal.name}"/>`}get textInput(){return lit.qy`<input @input="${e=>this.setValue(e.target.value)}" value="${this.internal.value||""}" type="text" placeholder="${this.internal.name}"/>`}setValue(e){this.node.internals[this.internalIndex].value=e,this.onPicked()}onPicked(){return internal_picker_awaiter(this,void 0,void 0,(function*(){yield this.updateComplete,this.dispatchEvent(new CustomEvent("picked"))}))}};internal_picker_decorate([(0,decorators.MZ)({converter:nodeConverter,reflect:!0})],InternalPicker.prototype,"node",void 0),internal_picker_decorate([(0,decorators.MZ)({type:Number,reflect:!0})],InternalPicker.prototype,"internalIndex",void 0),internal_picker_decorate([(0,decorators.MZ)({type:Object})],InternalPicker.prototype,"selectedAsset",void 0),InternalPicker=internal_picker_decorate([(0,decorators.EM)("internal-picker")],InternalPicker);var popup_modal_decorate=function(t,e,o,i){var r,n=arguments.length,p=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(p=(n<3?r(p):n>3?r(e,o,p):r(e,o))||p);return n>3&&p&&Object.defineProperty(e,o,p),p};let PopupModal=class extends((0,or_translate_lib.Tl)(or_translate_lib.MR)(lit.WF)){constructor(){super(),this.closeButton=!0,this.isOpen=!1}close(){this.isOpen=!1}open(){this.isOpen=!0}static get styles(){return lit.AH`
        :host{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;

            display: flex;
            justify-content: center;
            align-items: center;

            background: rgba(0, 0, 0, 0.2);
            z-index: 10000;

            --topbar-height: 42px;
            --closebutton-padding: 12px;
            --modal-padding: 10px;
        }
        :host(:not([isopen])){
            display: none;
        }
        .modal{
            min-width: 300px;
            min-height: 64px;
            width: auto;
            height: auto;
            display: inline-block;
            background: white;
            border-radius: var(--roundness);
            position: relative;
            padding: var(--modal-padding);
        }
        .close-button{
            position: absolute;
            top: 0;
            right: 0;
            width: calc(var(--topbar-height) - var(--closebutton-padding) * 2);
            height: calc(var(--topbar-height) - var(--closebutton-padding) * 2);
            padding: var(--closebutton-padding);
            cursor: pointer;
        }
        .title{
            margin: 0;
            height: calc(var(--topbar-height) - var(--modal-padding));
            width: 100%;
            text-transform: uppercase;
            font-weight: bold;
        }`}firstUpdated(){modal.element=this,this.addEventListener("mousedown",this.close),window.addEventListener("keyup",(t=>{"Escape"===t.key&&this.close()}))}render(){return this.isOpen?(this.style.display="",lit.qy`
        <div class="modal" @mousedown="${t=>{t.stopPropagation()}}">
            <div class="title">${this.header}</div>
            ${this.content}
            ${this.closeButton?lit.qy`<or-icon class="close-button" icon="window-close" @click="${this.close}"></or-icon>`:null}
        </div>
        `):(this.style.display="none",lit.qy``)}};var Status,a;popup_modal_decorate([(0,decorators.MZ)({type:Boolean})],PopupModal.prototype,"closeButton",void 0),popup_modal_decorate([(0,decorators.MZ)({type:String})],PopupModal.prototype,"header",void 0),popup_modal_decorate([(0,decorators.MZ)({attribute:!1})],PopupModal.prototype,"content",void 0),popup_modal_decorate([(0,decorators.MZ)({type:Boolean,reflect:!0})],PopupModal.prototype,"isOpen",void 0),PopupModal=popup_modal_decorate([(0,decorators.EM)("popup-modal")],PopupModal),(a=Status||(Status={}))[a.Idle=0]="Idle",a[a.Loading=1]="Loading",a[a.Success=2]="Success",a[a.Failure=3]="Failure";var rule_browser_decorate=function(t,e,o,i){var r,s=arguments.length,n=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,o,n):r(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n},rule_browser_awaiter=function(t,e,o,i){return new(o||(o=Promise))((function(r,s){function n(t){try{l(i.next(t))}catch(t){s(t)}}function a(t){try{l(i.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(n,a)}l((i=i.apply(t,e||[])).next())}))};let RuleBrowser=class extends((0,or_translate_lib.Tl)(or_translate_lib.MR)(lit.WF)){constructor(){super(...arguments),this.status=Status.Idle,this.retrievedRules=[],this.loadRule=t=>rule_browser_awaiter(this,void 0,void 0,(function*(){let e;this.status=Status.Loading;try{e=yield rest_lib.Ay.api.RulesResource.getGlobalRuleset(t.id)}catch(e){return modal.notification("Failure","Something went wrong loading "+t.name),void(this.status=Status.Failure)}const o=e.data,i=exporter.jsonToFlow(o.rules);project.fromNodeCollection(i),project.setCurrentProject(t.id,t.name,i.description),this.dispatchEvent(new CustomEvent("ruleloaded"))})),this.getButton=t=>lit.qy`<div class="list-button" @click="${()=>{this.loadRule(t)}}">${Utilities.ellipsis(t.name,50)} 
        ${t.error?lit.qy`<or-icon title="${Utilities.humanLike(t.status)}" icon="alert-outline"></or-icon>`:null}
        ${t.enabled?null:lit.qy`<or-icon title="${or_translate_lib.MR.t("disabled")}" icon="sleep"></or-icon>`}
        </div>`}static get styles(){return lit.AH`
        .list-button {
            cursor: pointer;
            padding: 8px 0 8px 8px;
        }
        .list-button:hover {
            background: whitesmoke;
        }
        .list-button:active {
            background: none;
        }
        or-icon{
            width: 18px;
            vertical-align: text-top;
        }
        or-icon[icon=loading]{
            animation: spin 600ms infinite linear;
        }
        @keyframes spin{
            0%{
                transform: rotateZ(0deg);
            }
            100%{
                transform: rotateZ(360deg);
            }
        }`}firstUpdated(){return rule_browser_awaiter(this,void 0,void 0,(function*(){this.status=Status.Loading;try{const t=yield rest_lib.Ay.api.RulesResource.getGlobalRulesets();this.retrievedRules=t.data,this.status=Status.Success}catch(t){this.status=Status.Failure}}))}render(){let t=lit.qy``;switch(this.status){case Status.Loading:t=lit.qy`<span style="text-align: center;"><or-icon icon="loading"></or-icon></span>`;break;case Status.Success:t=lit.qy`${0===this.retrievedRules.length?lit.qy`<span>No rules to display</span>`:this.retrievedRules.map((t=>this.getButton(t)))}`;break;case Status.Failure:t=lit.qy`<span>Failed to load rules</span>`}return lit.qy`
        <div style="display: flex; flex-direction: column; width: auto; align-items: stretch;">
        ${t}
        </div>`}};rule_browser_decorate([(0,decorators.MZ)({type:Number})],RuleBrowser.prototype,"status",void 0),RuleBrowser=rule_browser_decorate([(0,decorators.EM)("rule-browser")],RuleBrowser);var writable_dropdown_decorate=function(e,t,o,r){var l,i=arguments.length,n=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(l=e[s])&&(n=(i<3?l(n):i>3?l(t,o,n):l(t,o))||n);return i>3&&n&&Object.defineProperty(t,o,n),n};let WritableDropdown=class extends lit.WF{constructor(){super(...arguments),this.options=[]}static get styles(){return PickerStyle}firstUpdated(){this.options.length>0&&!this.value&&(this.value=this.options[0].value),this.selectElement.value=this.value}shouldUpdate(e){return this.selectElement&&e.has("value")&&(this.selectElement.value=this.value),super.shouldUpdate(e)}render(){return lit.qy`
        <select id="select-element" @change=${e=>this.dispatchEvent(new Event("onchange",e))} @input=${e=>{this.dispatchEvent(new InputEvent("oninput",e)),this.value=this.selectElement.value}}>
            ${this.options.map((e=>lit.qy`<option value="${e.value}">${e.name}</option>`))}
        </select>
        `}};writable_dropdown_decorate([(0,decorators.MZ)({type:Object,reflect:!0})],WritableDropdown.prototype,"value",void 0),writable_dropdown_decorate([(0,decorators.MZ)({type:Array})],WritableDropdown.prototype,"options",void 0),writable_dropdown_decorate([(0,decorators.P)("#select-element")],WritableDropdown.prototype,"selectElement",void 0),WritableDropdown=writable_dropdown_decorate([(0,decorators.EM)("writable-dropdown")],WritableDropdown);var confirmation_dialog_decorate=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let ConfirmationDialog=class extends((0,or_translate_lib.Tl)(or_translate_lib.MR)(lit.WF)){constructor(){super(...arguments),this.agreeText=or_translate_lib.MR.t("ok"),this.disagreeText=or_translate_lib.MR.t("cancel"),this.question=or_translate_lib.MR.t("areYouSure","Are you sure?")}static get styles(){return lit.AH`
        .question{
            width: 100%;
            padding: 15px 5px 25px 5px;
            text-align: center;
        }
        .container{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            justify-content: space-evenly;
            justify-content: space-around;
        }`}render(){return lit.qy`
        <div class="question">${this.question}</div>
        <div class="container">
            <or-mwc-input type="${or_mwc_input.NZ.BUTTON}" unElevated label="${this.agreeText}"
                @or-mwc-input-changed="${()=>{this.dispatchEvent(new CustomEvent("agreed"))}}">
            </or-mwc-input>

            <or-mwc-input type="button" label="${this.disagreeText}"
                @or-mwc-input-changed="${()=>{this.dispatchEvent(new CustomEvent("disagreed"))}}">
            </or-mwc-input>
        </div>
        `}};confirmation_dialog_decorate([(0,decorators.MZ)({type:String})],ConfirmationDialog.prototype,"agreeText",void 0),confirmation_dialog_decorate([(0,decorators.MZ)({type:String})],ConfirmationDialog.prototype,"disagreeText",void 0),confirmation_dialog_decorate([(0,decorators.MZ)({type:String})],ConfirmationDialog.prototype,"question",void 0),ConfirmationDialog=confirmation_dialog_decorate([(0,decorators.EM)("confirmation-dialog")],ConfirmationDialog);var notification_dialog_decorate=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let NotificationDialog=class extends((0,or_translate_lib.Tl)(or_translate_lib.MR)(lit.WF)){constructor(){super(...arguments),this.buttonText=or_translate_lib.MR.t("ok"),this.message=" "}static get styles(){return lit.AH`
        .message{
            width: 100%;
            padding: 15px 5px 25px 5px;
            text-align: center;
            max-width: 50vw;
            overflow: auto;
            user-select: text;
        }
        .container{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            justify-content: space-evenly;
            justify-content: space-around;
        }`}render(){return lit.qy`
        <div class="message">${this.message}</div>
        <div class="container">
            <or-mwc-input type="button" unElevated label="${this.buttonText}"
                @click="${()=>{this.dispatchEvent(new CustomEvent("closed"))}}">
            </or-mwc-input>
        </div>
        `}};notification_dialog_decorate([(0,decorators.MZ)({type:String})],NotificationDialog.prototype,"buttonText",void 0),notification_dialog_decorate([(0,decorators.MZ)({type:String})],NotificationDialog.prototype,"message",void 0),NotificationDialog=notification_dialog_decorate([(0,decorators.EM)("notification-dialog")],NotificationDialog);var project_awaiter=function(t,i,e,n){return new(e||(e=Promise))((function(o,s){function h(t){try{r(n.next(t))}catch(t){s(t)}}function c(t){try{r(n.throw(t))}catch(t){s(t)}}function r(t){var i;t.done?o(t.value):(i=t.value,i instanceof e?i:new e((function(t){t(i)}))).then(h,c)}r((n=n.apply(t,i||[])).next())}))};class Project extends events.EventEmitter{constructor(){super(),this.nodes=[],this.connections=[],this.existingFlowRuleId=-1,this.existingFlowRuleName=null,this.existingFlowRuleDesc=null,this.isInUnsavedState=!1,this.isConnecting=!1,this.history=[],this.historyIndex=0,this.startConnectionDrag=(t,i,e)=>{this.connectionStartSocket=null,this.connectionEndSocket=null,e?this.connectionEndSocket=i:this.connectionStartSocket=i,this.isConnecting=!0,this.emit("connectionstart",t,i)},this.connectionDragging=t=>{this.emit("connecting",t)},this.endConnectionDrag=(t,i,e)=>{this.isConnecting&&(e?this.connectionEndSocket=i:this.connectionStartSocket=i,this.isConnecting=!1,this.emit("connectionend",t,i),this.connectionEndSocket&&this.connectionStartSocket&&this.createConnection(this.connectionStartSocket.id,this.connectionEndSocket.id))},this.setMaxListeners(1024)}get isCurrentlyConnecting(){return this.isConnecting}set unsavedState(t){this.isInUnsavedState=t,this.emit("unsavedstateset",t)}get unsavedState(){return this.isInUnsavedState}setCurrentProject(t,i,e){this.unsavedState=!1,this.existingFlowRuleId=t,this.existingFlowRuleName=i,this.existingFlowRuleDesc=e,this.history=[],this.emit("projectset",t)}notifyChange(){this.unsavedState=!0,this.emit("changed")}createUndoSnapshot(){this.history=this.history.splice(0,this.historyIndex+1),this.history.push(JSON.parse(JSON.stringify(this.toNodeCollection("","")))),this.historyIndex=this.history.length-1}undo(){return project_awaiter(this,void 0,void 0,(function*(){0!==this.history.length&&-1!==this.historyIndex&&(this.historyIndex===this.history.length-1&&this.history.push(JSON.parse(JSON.stringify(this.toNodeCollection("","")))),yield this.fromNodeCollection(this.history[this.historyIndex]),this.historyIndex--,this.notifyChange())}))}redo(){return project_awaiter(this,void 0,void 0,(function*(){0===this.history.length||this.historyIndex>=this.history.length-2||(this.historyIndex++,yield this.fromNodeCollection(this.history[this.historyIndex+1]),this.notifyChange())}))}fromNodeCollection(t){return project_awaiter(this,void 0,void 0,(function*(){yield this.clear(),t.nodes.forEach((t=>{this.addNode(t)})),t.connections.forEach((t=>{this.createConnection(t.from,t.to)})),this.emit("nodecollectionloaded",t),this.unsavedState=!1}))}toNodeCollection(t,i){return{name:t,description:i,connections:this.connections,nodes:this.nodes}}clear(t=!1){return project_awaiter(this,void 0,void 0,(function*(){input.clearSelection(),this.nodes.forEach((t=>{this.removeNode(t)})),this.nodes=[],this.connections=[],this.unsavedState=!t,t&&this.setCurrentProject(-1,null,null),this.emit("cleared")}))}addNode(t){if(this.nodes.filter((i=>i.id===t.id)).length>0)throw new Error("Node with identical identity already exists in the project");this.nodes.push(t),this.emit("nodeadded",t)}removeNode(t){input.clearSelection(),this.connections.filter((i=>{const e=NodeUtilities.getSocketFromID(i.from,this.nodes),n=NodeUtilities.getSocketFromID(i.to,this.nodes);return e.nodeId===t.id||n.nodeId===t.id})).forEach((t=>{this.removeConnection(t)})),this.nodes.filter((i=>i.id===t.id)).forEach((t=>{this.nodes.splice(this.nodes.indexOf(t),1),this.emit("noderemoved",t)}))}removeConnection(t){input.clearSelection(),this.connections.filter((i=>i.from===t.from&&i.to===t.to)).forEach((t=>{const i=this.connections.indexOf(t);-1===i?console.warn("attempt to delete nonexistent connection"):(this.connections.splice(i,1),this.emit("connectionremoved",t))}))}isValidConnection(t){const i=NodeUtilities.getSocketFromID(t.from,this.nodes),e=NodeUtilities.getSocketFromID(t.to,this.nodes);return!(!i||!e||!SocketTypeMatcher.match(i.type,e.type)||i.id===e.id||i.nodeId===e.nodeId)}createConnection(t,i){const e={from:t,to:i};if(!this.isValidConnection(e))return!1;for(const t of this.connections.filter((t=>t.to===i)))this.removeConnection(t);return this.connections.push(e),this.emit("connectioncreated",t,i),!0}removeInvalidConnections(){for(const t of this.connections.filter((t=>!this.isValidConnection(t))))this.removeConnection(t)}}class Input extends events.EventEmitter{constructor(){super(),this.selected=[],this.selectables=[],this.keysCurrentlyHeld=[],this.onkeydown=e=>{this.keysCurrentlyHeld.includes(e.key)||this.keysCurrentlyHeld.push(e.key)},this.onkeyup=e=>{const t=this.keysCurrentlyHeld.indexOf(e.key);-1!==t&&this.keysCurrentlyHeld.splice(t,1)},window.addEventListener("keydown",this.onkeydown),window.addEventListener("keyup",this.onkeyup),window.addEventListener("blur",(()=>{this.clearSelection(),this.keysCurrentlyHeld=[]})),project.addListener("cleared",(()=>{this.clearSelection()})),this.setMaxListeners(1024)}select(e,t=!1){this.multiSelectedEnabled||t||this.clearSelection(),this.selected.includes(e)||(this.emit("selected",e),e.selected&&this.selected.push(e))}deselect(e){const t=this.selected.indexOf(e);-1!==t?(this.emit("deselected",e),e.selected||this.selected.splice(t,1)):console.warn("Attempt to deselect nonexistent node")}handleSelection(e,t=!1){!this.multiSelectedEnabled&&this.selected.length>1?this.select(e):this.selected.includes(e)&&!t?this.deselect(e):this.select(e)}clearSelection(e=!1){this.multiSelectedEnabled&&!e||(this.selected.forEach((e=>this.emit("deselected",e))),this.selected=[],this.emit("selectioncleared"))}isHeld(e){return this.keysCurrentlyHeld.includes(e)}get multiSelectedEnabled(){return this.isHeld("Shift")||this.isHeld("Control")}}var flow_editor_decorate=function(e,t,o,r){var i,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(a=(s<3?i(a):s>3?i(t,o,a):i(t,o))||a);return s>3&&a&&Object.defineProperty(t,o,a),a},flow_editor_awaiter=function(e,t,o,r){return new(o||(o=Promise))((function(i,s){function a(e){try{p(r.next(e))}catch(e){s(e)}}function n(e){try{p(r.throw(e))}catch(e){s(e)}}function p(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,n)}p((r=r.apply(e,t||[])).next())}))};const integration=new Integration,copyPasteManager=new class CopyPasteManager{get isFull(){return!this.clipboard}putInClipboard(o,t){this.copyOrigin=t,this.clipboard=o}getFromClipboard(o){const t=this.cloneIsolated(this.clipboard,0),e=o.x-this.copyOrigin.x,n=o.y-this.copyOrigin.y;return t.nodes.forEach((o=>{o.position.x+=e,o.position.y+=n})),t}cloneIsolated(o,t=50){const e={},n=JSON.parse(JSON.stringify(o));return n.nodes.forEach((o=>{const n=IdentityAssigner.generateIdentity();e[o.id]=n,o.position.x+=t,o.position.y+=t,o.id=n,o.inputs.forEach((o=>{const t=IdentityAssigner.generateIdentity();e[o.id]=t,o.id=t,o.nodeId=n})),o.outputs.forEach((o=>{const t=IdentityAssigner.generateIdentity();e[o.id]=t,o.id=t,o.nodeId=n}))})),n.connections.forEach((o=>{o.from=e[o.from],o.to=e[o.to]})),n}copy(o,t){const e=input.selected.filter((o=>o instanceof FlowNode&&o.selected)),n=input.selected.filter((o=>o instanceof ConnectionLine&&o.selected));this.putInClipboard({nodes:e.map((o=>o.node)),connections:n.map((o=>o.connection))},{x:o,y:t})}},project=new Project,input=new Input,modal=new class ModalService{confirmation(e,t=or_translate_lib.MR.t("flowEditor","Flow editor"),i=or_translate_lib.MR.t("areYouSure","Are you sure?")){this.element.content=lit.qy`<confirmation-dialog 
        .question = "${i}"
        @agreed="${()=>{e&&e(),this.element.close()}}"
        @disagreed="${this.element.close}"
        ></confirmation-dialog>`,this.element.header=t,this.element.open()}notification(e,t,i=or_translate_lib.MR.t("ok","OK")){this.element.content=lit.qy`<notification-dialog 
        .message = "${t}"
        @closed = "${this.element.close}"
        ></notification-dialog>`,this.element.header=e,this.element.open()}anything(e,t){this.element.content=t,this.element.header=e,this.element.open()}},exporter=new class Exporter{flowToJson(e){return JSON.stringify(e)}jsonToFlow(e){return JSON.parse(e)}collectionToRuleset(e,o){return{lang:"FLOW",name:e.name,type:o,rules:this.flowToJson(e)}}rulesetToCollection(e){return this.jsonToFlow(e.rules)}exportAsNew(e){const o=this.flowToJson(e),t=core_lib.Ay.rest.api.RulesResource,n={lang:"FLOW",name:e.name,type:"global",rules:o};t.createGlobalRuleset(n).then((o=>{200===o.status?(project.setCurrentProject(o.data,e.name,e.description),console.log("Successfully saved new ruleset")):(console.log("Something went wrong while saving NEW ruleset\nHTTP status "+o.status),modal.notification("Failure",`Something went wrong while saving ${n.name}`))})).catch((e=>{console.log("Something went wrong while saving NEW ruleset\nHTTP status "+e),modal.notification("Failure",`Something went wrong while saving ${n.name}`)}))}exportAsExisting(e,o){const t=this.flowToJson(o),n=core_lib.Ay.rest.api.RulesResource;n.getGlobalRuleset(project.existingFlowRuleId).then((e=>{const s=e.data;s.rules=t,n.updateGlobalRuleset(s.id,s).then((e=>{204===e.status?(project.unsavedState=!1,console.log("Successfully saved ruleset")):(console.log("Something went wrong while saving EXISTING ruleset\n"+e.status),modal.notification("Failure",`Something went wrong while saving ${o.name}`))}))})).catch((e=>{console.log("Something went wrong while saving EXISTING ruleset\n"+e),modal.notification("Failure",`Something went wrong while saving ${o.name}`)}))}},newIds=(new class Shortcuts{constructor(){this.actions=[{keys:["Delete","Backspace"],action:()=>{project.createUndoSnapshot();const e=input.selected.filter((e=>e instanceof FlowNode&&e.selected&&!e.frozen));input.selected.filter((e=>e instanceof ConnectionLine&&e.selected)).forEach((e=>project.removeConnection(e.connection))),e.forEach((e=>project.removeNode(e.node))),project.notifyChange()}},{keys:["KeyA"],requireCtrl:!0,action:()=>{input.selected.length>0?input.clearSelection(!0):input.selectables.forEach((e=>{input.select(e,!0)}))}},{keys:["KeyZ"],requireCtrl:!0,action:()=>{project.undo()}},{keys:["KeyY"],requireCtrl:!0,action:()=>{project.redo()}}],window.addEventListener("keydown",(e=>{document.activeElement instanceof HTMLBodyElement&&this.actions.forEach((o=>{(o.keys.includes(e.key)||o.keys.includes(e.code))&&(o.requireCtrl&&!e.ctrlKey||o.action())}))}))}},new Set);let FlowEditor=class extends((0,or_translate_lib.Tl)(or_translate_lib.MR)(lit.WF)){constructor(){super(),this.showTopbar=!1}validate(){return NodeUtilities.validate(exporter.jsonToFlow(this._ruleset.rules||"{}"))}beforeSave(){this.readonly||this.serialiseRule()}set ruleset(e){if(this._ruleset!==e)if(this._ruleset=e,e.rules){const t=exporter.jsonToFlow(e.rules);project.fromNodeCollection(t),project.setCurrentProject(e.id,e.name,t.description)}else project.clear(!0)}static get styles(){return[lit.AH`
            :host{
                user-select: none;
                display: grid;
                grid-template-columns: 1fr auto;
                grid-template-rows: 100%;
                grid-template-areas: 
                "workspace node-panel";

                width: 100%;
                height: 100%;
                
                --or-app-color4: rgb(76,76,76);

                --socket-size: 24px;
                --socket-display-size: 14px;
                
                --topbar-height: 50px;
                --nodepanel-width: 195px;
                --roundness: 3px;
                
                --highlight-faded: hsla(102, 100%, 31%, 0.2);
                --highlight: hsla(102, 100%, 31%, 0.5);
                --highlight-opaque: hsla(102, 100%, 31%);
                
                --any: rgb(162, 0, 255);
                --number: rgb(165, 228, 50);
                --boolean: rgb(0, 102, 255);
                --string: rgb(45, 180, 221);
                --color: rgb(255, 228, 78);
                
                --input-color: hsl(222, 60%, 46%);
                --processor-color: hsl(102, 58%, 39%);
                --output-color: hsl(282, 60%, 47%);
                
                --input-color-h: hsl(222, 58%, 54%);
                --processor-color-h: hsl(102, 48%, 49%);
                --output-color-h: hsl(282, 58%, 54%);
            }`]}firstUpdated(){return flow_editor_awaiter(this,void 0,void 0,(function*(){yield integration.refreshNodes(),this.requestUpdate(),yield this.updateComplete,project.emit("fitview"),project.addListener("changed",(()=>{this.serialiseRule(),this.dispatchEvent(new OrRulesRuleChangedEvent(this.validate()))}))}))}render(){return this.showTopbar&&(this.style.gridTemplateRows="var(--topbar-height) 1fr",this.style.gridTemplateAreas='"topbar topbar" "workspace node-panel";'),lit.qy`
        ${this.showTopbar?lit.qy`<top-bar .application="${this}" style="grid-area: topbar"></top-bar>`:""}
        <node-panel .application="${this}" style="grid-area: node-panel" .nodes= "${integration.nodes}"></node-panel>
        <editor-workspace .application="${this}" id="workspace" style="grid-area: workspace"></editor-workspace>
        <context-menu></context-menu>
        <popup-modal id="popup-modal"></popup-modal>
        `}serialiseRule(){this._ruleset.rules=exporter.flowToJson(project.toNodeCollection(this._ruleset.name,project.existingFlowRuleDesc))}};flow_editor_decorate([(0,decorators.P)("node-panel")],FlowEditor.prototype,"nodePanel",void 0),flow_editor_decorate([(0,decorators.P)("top-bar")],FlowEditor.prototype,"topBar",void 0),flow_editor_decorate([(0,decorators.P)("editor-workspace")],FlowEditor.prototype,"editorWorkspace",void 0),flow_editor_decorate([(0,decorators.MZ)({type:Boolean})],FlowEditor.prototype,"showTopbar",void 0),flow_editor_decorate([(0,decorators.MZ)({attribute:!1})],FlowEditor.prototype,"readonly",void 0),flow_editor_decorate([(0,decorators.MZ)({attribute:!1})],FlowEditor.prototype,"_ruleset",void 0),FlowEditor=flow_editor_decorate([(0,decorators.EM)("flow-editor")],FlowEditor);var or_rule_viewer_decorate=function(e,t,r,i){var s,l=arguments.length,a=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(a=(l<3?s(a):l>3?s(t,r,a):s(t,r))||a);return l>3&&a&&Object.defineProperty(t,r,a),a},or_rule_viewer_awaiter=function(e,t,r,i){return new(r||(r=Promise))((function(s,l){function a(e){try{n(i.next(e))}catch(e){l(e)}}function o(e){try{n(i.throw(e))}catch(e){l(e)}}function n(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,o)}n((i=i.apply(e,t||[])).next())}))};const or_rule_viewer_style=lit.AH`

    :host {
        display: block;
        height: 100%;
        width: 100%;
        overflow-y: auto;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
    }

    #main-wrapper.saving {
        opacity: 0.5;
        pointer-events: none;
    }
    
    #rule-name {
        max-width: 400px;
        flex: 1 1 0;
        display: flex;
    }
    
    #rule-header {
        display: flex;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        min-height: var(--internal-or-rules-header-height);
        height: var(--internal-or-rules-header-height);
        z-index: 7;
        padding: 15px 20px;
        --or-icon-fill: var(--internal-or-rules-panel-color);
    }
    
    #rule-header-controls {
        margin-left: auto;
        display: flex;
        align-items: center;
    }

    #rule-status {
        flex: 1;
        text-align: center;
    }
    
    #rule-id {
        min-width: 70px;
        margin-right: 10px;
    }
    
    #rule-header-controls > * {
        margin: 0 10px;
    }
    
    #active-wrapper {
        display: flex;
        align-items: center;
    }
    
    #rule-view {
        flex-grow: 1;
        background-color: var(--internal-or-rules-background-color);
    }
`;let OrRuleViewer=class extends((0,or_translate_lib.Tl)(i18next.Ay)(lit.WF)){static get styles(){return[or_rule_viewer_style]}constructor(){super(),this.readonly=!1,this.disabled=!1,this.modified=!1,this._ruleValid=!1,this._supported=!0,this._focusName=!1,this.addEventListener(OrRulesRuleChangedEvent.NAME,this._onRuleChanged),this.addEventListener(OrRulesRuleUnsupportedEvent.NAME,this._onRuleUnsupported)}get valid(){return this.ruleset&&this.view&&this._ruleValid&&this.ruleset.name&&this.ruleset.name.length>=3&&this.ruleset.name.length<255}shouldUpdate(e){return e.has("ruleset")&&(this._supported=!0,this.modified=!1,this._ruleValid=!1,this.ruleset&&(this._focusName=!0,this.modified=!this.ruleset.id)),super.shouldUpdate(e)}render(){if(!this.ruleset)return lit.qy`<div class="wrapper" style="justify-content: center"><or-translate value="noRuleSelected"></or-translate></div>`;let e=RuleViewInfoMap[this.ruleset.lang].viewTemplateProvider(this.ruleset,this.config,this.readonly);return lit.qy`
            <div id="main-wrapper" class="wrapper">            
                <div id="rule-header">
                    <h3 id="rule-id">${this.ruleset.id?"ID: "+this.ruleset.id:""}</h3>
                    <or-mwc-input id="rule-name" outlined .type="${or_mwc_input.NZ.TEXT}" .label="${i18next.Ay.t("ruleName")}" ?focused="${this._focusName}" .value="${this.ruleset?this.ruleset.name:null}" ?disabled="${this._isReadonly()}" required minlength="3" maxlength="255" @or-mwc-input-changed="${e=>this._changeName(e.detail.value)}"></or-mwc-input>
                    <or-rule-validity id="rule-header-validity" .ruleset="${this.ruleset}"></or-rule-validity>
                    ${this.ruleset.status?lit.qy`<span id="rule-status" title="${this.ruleset.error}">${i18next.Ay.t("status")+": "+this.ruleset.status}</span>`:""}
                    <div id="rule-header-controls">
                        <span id="active-wrapper">
                            <or-translate value="enabled"></or-translate>
                            <or-mwc-input .type="${or_mwc_input.NZ.SWITCH}" .value="${this.ruleset&&this.ruleset.enabled}" ?disabled="${!this.ruleset.id}" @or-mwc-input-changed="${this._toggleEnabled}"></or-mwc-input>
                        </span>
           
                        <or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" id="save-btn" label="save" raised ?disabled="${this._cannotSave()}" @or-mwc-input-changed="${this._onSaveClicked}"></or-mwc-input>
                    </div>                        
                </div>

                ${e}
            </div>
        `}updated(e){e.has("ruleset")&&this.ruleset&&this.view&&(this._ruleValid=this.view.validate())}_isReadonly(){return this.readonly||!core_lib.Ay.hasRole("write:rules")}_cannotSave(){return this._isReadonly()||!this.ruleset||!this.modified||!this.valid}_changeName(e){this.ruleset&&this.ruleset.name!==e&&(this.ruleset.name=e,this.modified=!0,this.requestUpdate())}_onRuleChanged(e){this.modified=!0,this._ruleValid=e.detail}_onSaveClicked(){this.ruleset&&this.view&&(project.emit("fitview"),this.config&&this.config.rulesetSaveHandler&&!this.config.rulesetSaveHandler(this.ruleset)||core_lib.J0.dispatchCancellableEvent(this,new OrRulesRequestSaveEvent(this.ruleset)).then((e=>{e.allow&&this._doSave()})))}_doSave(){return or_rule_viewer_awaiter(this,void 0,void 0,(function*(){const e=this.ruleset;if(!e||!this.view)return;let t=!1;const r=!e.id;let i;this.saveBtnElem.disabled=!0,this.wrapperElem.classList.add("saving"),this.view.beforeSave();try{switch(e.type){case"asset":i=r?yield core_lib.Ay.rest.api.RulesResource.createAssetRuleset(e):yield core_lib.Ay.rest.api.RulesResource.updateAssetRuleset(e.id,e);break;case"realm":i=r?yield core_lib.Ay.rest.api.RulesResource.createRealmRuleset(e):yield core_lib.Ay.rest.api.RulesResource.updateRealmRuleset(e.id,e);break;case"global":i=r?yield core_lib.Ay.rest.api.RulesResource.createGlobalRuleset(e):yield core_lib.Ay.rest.api.RulesResource.updateGlobalRuleset(e.id,e)}if(i.status!==(r?200:204))return t=!0,void(0,or_mwc_dialog._F)("Create ruleset returned unexpected status: "+i.status);i.data&&(e.id=i.data)}catch(e){t=!0,console.error("Failed to save ruleset",e)}this.wrapperElem.classList.remove("saving"),this.saveBtnElem.disabled=!1,t&&(0,or_mwc_dialog._F)(i18next.Ay.t("saveRulesetFailed")),this.dispatchEvent(new OrRulesSaveEvent({ruleset:e,isNew:r,success:!t}))}))}_onRuleUnsupported(){this._supported=!1}_toggleEnabled(){this.ruleset&&(this.ruleset.enabled=!this.ruleset.enabled,this.modified=!0,this.requestUpdate())}};or_rule_viewer_decorate([(0,decorators.MZ)({type:Object})],OrRuleViewer.prototype,"ruleset",void 0),or_rule_viewer_decorate([(0,decorators.MZ)({type:Boolean})],OrRuleViewer.prototype,"readonly",void 0),or_rule_viewer_decorate([(0,decorators.MZ)({type:Boolean})],OrRuleViewer.prototype,"disabled",void 0),or_rule_viewer_decorate([(0,decorators.MZ)({type:Object})],OrRuleViewer.prototype,"config",void 0),or_rule_viewer_decorate([(0,decorators.MZ)({attribute:!1})],OrRuleViewer.prototype,"modified",void 0),or_rule_viewer_decorate([(0,decorators.MZ)({attribute:!1})],OrRuleViewer.prototype,"_ruleValid",void 0),or_rule_viewer_decorate([(0,decorators.MZ)({attribute:!1})],OrRuleViewer.prototype,"_supported",void 0),or_rule_viewer_decorate([(0,decorators.P)("#rule-view")],OrRuleViewer.prototype,"view",void 0),or_rule_viewer_decorate([(0,decorators.P)("#main-wrapper")],OrRuleViewer.prototype,"wrapperElem",void 0),or_rule_viewer_decorate([(0,decorators.P)("#save-btn")],OrRuleViewer.prototype,"saveBtnElem",void 0),OrRuleViewer=or_rule_viewer_decorate([(0,decorators.EM)("or-rule-viewer")],OrRuleViewer);var TimeTriggerType,AssetQueryOperator,or_rules_lib_decorate=function(e,t,r,s){var o,n=arguments.length,i=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,s);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(n<3?o(i):n>3?o(t,r,i):o(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i},or_rules_lib_awaiter=function(e,t,r,s){return new(r||(r=Promise))((function(o,n){function i(e){try{a(s.next(e))}catch(e){n(e)}}function l(e){try{a(s.throw(e))}catch(e){n(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}a((s=s.apply(e,t||[])).next())}))};!function(e){e.TIME_OF_DAY="TIME_OF_DAY"}(TimeTriggerType||(TimeTriggerType={})),function(e){e.VALUE_EMPTY="empty",e.VALUE_NOT_EMPTY="notEmpty",e.EQUALS="equals",e.NOT_EQUALS="notEquals",e.GREATER_THAN="greaterThan",e.GREATER_EQUALS="greaterEquals",e.LESS_THAN="lessThan",e.LESS_EQUALS="lessEquals",e.BETWEEN="between",e.NOT_BETWEEN="notBetween",e.CONTAINS="contains",e.NOT_CONTAINS="notContains",e.STARTS_WITH="startsWith",e.NOT_STARTS_WITH="notStartsWith",e.ENDS_WITH="endsWith",e.NOT_ENDS_WITH="notEndsWith",e.CONTAINS_KEY="containsKey",e.NOT_CONTAINS_KEY="notContainsKey",e.INDEX_CONTAINS="indexContains",e.NOT_INDEX_CONTAINS="notIndexContains",e.LENGTH_EQUALS="lengthEquals",e.NOT_LENGTH_EQUALS="notLengthEquals",e.LENGTH_GREATER_THAN="lengthGreaterThan",e.LENGTH_LESS_THAN="lengthLessThan",e.IS_TRUE="true",e.IS_FALSE="false",e.WITHIN_RADIUS="withinRadius",e.OUTSIDE_RADIUS="outsideRadius",e.WITHIN_RECTANGLE="withinRectangle",e.OUTSIDE_RECTANGLE="outsideRectangle"}(AssetQueryOperator||(AssetQueryOperator={}));const RuleViewInfoMap={JSON:{viewTemplateProvider:(e,t,r)=>lit.qy`<or-rule-json-viewer id="rule-view" .ruleset="${e}" .config="${t}" .readonly="${r}"></or-rule-json-viewer>`},FLOW:{viewTemplateProvider:(e,t,r)=>lit.qy`<flow-editor id="rule-view" .ruleset="${e}" .readonly="${r}"></flow-editor>`},GROOVY:{viewTemplateProvider:(e,t,r)=>lit.qy`
            <or-rule-text-viewer id="rule-view" .ruleset="${e}" .config="${t}" .readonly="${r}"></or-rule-text-viewer>
        `,viewRulesetTemplate:'package demo.rules\n\nimport org.openremote.manager.rules.RulesBuilder\nimport org.openremote.model.notification.*\nimport org.openremote.model.attribute.AttributeInfo\nimport org.openremote.model.asset.Asset\nimport org.openremote.model.asset.impl.*\nimport org.openremote.model.query.*\nimport org.openremote.model.query.filter.*\nimport org.openremote.model.rules.Assets\nimport org.openremote.model.rules.Notifications\nimport org.openremote.model.rules.Users\n\nimport java.util.logging.Logger\nimport java.util.stream.Collectors\n\nLogger LOG = binding.LOG\nRulesBuilder rules = binding.rules\nNotifications notifications = binding.notifications\nUsers users = binding.users\nAssets assets = binding.assets\n\n/*\n* A groovy rule is made up of a when closure (LHS) which must return a boolean indicating whether the then closure (RHS)\n* should be executed. The rule engine will periodically evaluate the when closure and if it evaluates to true then the\n* rule then closure will execute.\n*\n* NOTE: DO NOT MODIFY THE FACTS IN THE WHEN CLOSURE THIS SHOULD BE DONE IN THE THEN CLOSURE\n*\n* To avoid an infinite rule loop the when closure should not continually return true for subsequent executions\n* so either the then closure should perform an action that prevents the when closure from matching on subsequent\n* evaluations, or custom facts should be used, some ideas:\n*\n* - Change the value of an attribute being matched in the when closure (which will prevent it matching on subsequent evaluations)\n* - Insert a custom fact on first match and test this fact in the when closure to determine when the rule should match again (for\n*   example if a rule should match whenever the asset state changes the asset state timestamp can be used)\n*/\n\nrules.add()\n        .name("Example rule")\n        .when({\n    facts ->\n\n        // Find first matching asset state using an asset query\n\n        facts.matchFirstAssetState(\n\n                // Find asset state by asset type and attribute name\n                new AssetQuery().types(ThingAsset).attributeNames("someAttribute")\n\n                // Find asset state by asset ID and attribute name\n                //new AssetQuery().ids("7CaBoyiDhtdf2kn1Xso1w5").attributeNames("someAttribute")\n\n                // Find asset state by asset type, attribute name and value string predicate\n                //new AssetQuery().types(ThingAsset).attributes(\n                //        new AttributePredicate()\n                //                .name("someAttribute")\n                //                .value(new StringPredicate()\n                //                            .value("someValue")\n                //                            .match(AssetQuery.Match.EXACT)\n                //                            .caseSensitive(true)))\n\n                // Find asset state by asset type and location attribute predicate\n                //new AssetQuery().types(ThingAsset).attributes(\n                //        new AttributePredicate()\n                //                .name(Asset.LOCATION)\n                //                .value(new RadialGeofencePredicate()\n                //                            .radius(100)\n                //                            .lat(50.0)\n                //                            .lng(0.0)))\n\n        ).map { assetState ->\n\n            // Use logging to help with debugging if needed            //LOG.info("ATTRIBUTE FOUND")\n\n            // Check if this rule really should fire this time\n            Optional<Long> lastFireTimestamp = facts.getOptional("someAttribute")\n            if (lastFireTimestamp.isPresent() && assetState.getTimestamp() <= lastFireTimestamp.get()) {\n                return false\n            }\n\n            // OK to fire if we reach here\n\n            // Compute and bind any facts required for the then closure\n            facts.bind("assetState", assetState)\n            true\n        }.orElseGet {\n            // Asset state didn\'t match so clear out any custom facts to allow the rule to fire next time the when closure matches\n            facts.remove("someAttribute")\n            false\n        }\n\n})\n        .then({\n    facts ->\n\n        // Extract any binded facts\n        AttributeInfo assetState = facts.bound("assetState")\n\n        // Insert the custom fact to prevent rule loop\n        facts.put("someAttribute", assetState.getTimestamp())\n\n        // Write to attributes\n        def otherAttributeValue = null\n        if (assetState.getValue().orElse{null} == "Value 1") {\n            otherAttributeValue = "Converted Value 1"\n        } else if (assetState.getValue().orElse{null} == "Value 2") {\n            otherAttributeValue = "Converted Value 2"\n        } else {\n            otherAttributeValue = "Unknown"\n        }\n        assets.dispatch(assetState.id, "otherAttribute", otherAttributeValue)\n\n        // Generate notifications (useful for rules that check if an attribute is out of range)\n        //notifications.send(new Notification()\n        //        .setName("Attribute alert")\n        //        .setMessage(new EmailNotificationMessage()\n        //                .setTo("no-reply@openremote.io")\n        //                .setSubject("Attribute out of range: Attribute=${assetState.name} Asset ID=${assetState.id}")\n        //                .setText("Some text body")\n        //                .setHtml("<p>Or some HTML body</p>")\n        //        )\n        //)\n})'},JAVASCRIPT:{viewTemplateProvider:(e,t,r)=>lit.qy`
            <or-rule-text-viewer id="rule-view" .ruleset="${e}" .config="${t}" .readonly="${r}"></or-rule-text-viewer>
        `,viewRulesetTemplate:'rules = [ // An array of rules, add more objects to add more rules\n    {\n        name: "Set bar to foo on someAttribute",\n        description: "An example rule that sets \'bar\' on someAttribute when it is \'foo\'",\n        when: function(facts) {\n            return facts.matchAssetState(\n                new AssetQuery().types(AssetType.THING).attributeValue("someAttribute", "foo")\n            ).map(function(thing) {\n                facts.bind("assetId", thing.id);\n                return true;\n            }).orElse(false);\n        },\n        then: function(facts) {\n            facts.updateAssetState(\n                facts.bound("assetId"), "someAttribute", "bar"\n            );\n        }\n    }\n]'}};function getAssetTypeFromQuery(e){return e&&e.types&&e.types.length>0&&e.types[0]?e.types[0]:void 0}function getAssetIdsFromQuery(e){return e&&e.ids?[...e.ids]:void 0}const getAssetTypes=()=>or_rules_lib_awaiter(void 0,void 0,void 0,(function*(){return model_lib.u0.getAssetTypeInfos().map((e=>e.assetDescriptor.name))}));class OrRulesRuleChangedEvent extends CustomEvent{constructor(e){super(OrRulesRuleChangedEvent.NAME,{bubbles:!0,composed:!0,detail:e})}}OrRulesRuleChangedEvent.NAME="or-rules-rule-changed";class OrRulesRuleUnsupportedEvent extends CustomEvent{constructor(){super(OrRulesRuleUnsupportedEvent.NAME,{bubbles:!0,composed:!0})}}OrRulesRuleUnsupportedEvent.NAME="or-rules-rule-unsupported";class OrRulesRequestSelectionEvent extends CustomEvent{constructor(e){super(OrRulesRequestSelectionEvent.NAME,{bubbles:!0,composed:!0,detail:{detail:e,allow:!0}})}}OrRulesRequestSelectionEvent.NAME="or-rules-request-selection";class OrRulesSelectionEvent extends CustomEvent{constructor(e){super(OrRulesSelectionEvent.NAME,{bubbles:!0,composed:!0,detail:e})}}OrRulesSelectionEvent.NAME="or-rules-selection";class OrRulesRequestAddEvent extends CustomEvent{constructor(e){super(OrRulesRequestAddEvent.NAME,{bubbles:!0,composed:!0,detail:{detail:e,allow:!0}})}}OrRulesRequestAddEvent.NAME="or-rules-request-add";class OrRulesAddEvent extends CustomEvent{constructor(e){super(OrRulesAddEvent.NAME,{bubbles:!0,composed:!0,detail:e})}}OrRulesAddEvent.NAME="or-rules-add";class OrRulesRequestDeleteEvent extends CustomEvent{constructor(e){super(OrRulesRequestDeleteEvent.NAME,{bubbles:!0,composed:!0,detail:{detail:e,allow:!0}})}}OrRulesRequestDeleteEvent.NAME="or-rules-request-delete";class OrRulesRequestSaveEvent extends CustomEvent{constructor(e){super(OrRulesRequestSaveEvent.NAME,{bubbles:!0,composed:!0,detail:{allow:!0,detail:e}})}}OrRulesRequestSaveEvent.NAME="or-rules-request-save";class OrRulesSaveEvent extends CustomEvent{constructor(e){super(OrRulesSaveEvent.NAME,{bubbles:!0,composed:!0,detail:e})}}OrRulesSaveEvent.NAME="or-rules-save";class OrRulesDeleteEvent extends CustomEvent{constructor(e){super(OrRulesDeleteEvent.NAME,{bubbles:!0,composed:!0,detail:e})}}OrRulesDeleteEvent.NAME="or-rules-delete";const or_rules_lib_style=lit.AH`

    :host {
        display: flex;
        height: 100%;
        width: 100%;
        
        --internal-or-rules-background-color: var(--or-rules-background-color, var(--or-app-color2, ${(0,lit.iz)(core_lib.PR)}));
        --internal-or-rules-text-color: var(--or-rules-text-color, inherit);
        --internal-or-rules-button-color: var(--or-rules-button-color, var(--or-app-color4, ${(0,lit.iz)(core_lib.BB)}));
        --internal-or-rules-invalid-color: var(--or-rules-invalid-color, var(--or-app-color6, ${(0,lit.iz)(core_lib.PX)}));        
        --internal-or-rules-panel-color: var(--or-rules-panel-color, var(--or-app-color1, ${(0,lit.iz)(core_lib.WO)}));
        --internal-or-rules-line-color: var(--or-rules-line-color, var(--or-app-color5, ${(0,lit.iz)(core_lib.Id)}));
        
        --internal-or-rules-list-selected-color: var(--or-rules-list-selected-color, var(--or-app-color2, ${(0,lit.iz)(core_lib.PR)}));
        --internal-or-rules-list-text-color: var(--or-rules-list-text-color, var(--or-app-color3, ${(0,lit.iz)(core_lib.Iy)}));
        --internal-or-rules-list-text-size: var(--or-rules-list-text-size, 15px);
        --internal-or-rules-list-header-height: var(--or-rules-list-header-height, 48px);

        --internal-or-rules-list-icon-color-error: var(--or-rules-list-icon-color-error, var(--or-app-color6, ${(0,lit.iz)(core_lib.PX)}));
        --internal-or-rules-list-icon-color-ok: var(--or-rules-list-icon-color-ok, var(--or-app-color5, ${(0,lit.iz)(core_lib.Id)}));

        --internal-or-rules-list-button-size: var(--or-rules-list-button-size, 24px);
        
        --internal-or-rules-header-background-color: var(--or-rules-header-background-color, var(--or-app-color3, ${(0,lit.iz)(core_lib.Iy)}));
        --internal-or-rules-header-height: var(--or-rules-header-height, unset);
        
        --or-panel-background-color: var(--internal-or-rules-panel-color);
    }

    or-rule-list {
        min-width: 300px;
        width: 300px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        background-color: var(--internal-or-rules-panel-color);
        color: var(--internal-or-rules-list-text-color);
        box-shadow: ${(0,lit.iz)(core_lib.rO)};
    }
    
    or-rule-viewer {
        z-index: 1;    
    }
`;let OrRules=class extends((0,or_translate_lib.Tl)(i18next.Ay)(lit.WF)){static get styles(){return[or_rules_lib_style]}constructor(){super(),this.addEventListener(OrRulesRequestSelectionEvent.NAME,this._onRuleSelectionRequested),this.addEventListener(OrRulesSelectionEvent.NAME,this._onRuleSelectionChanged),this.addEventListener(OrRulesAddEvent.NAME,this._onRuleAdd),this.addEventListener(OrRulesSaveEvent.NAME,this._onRuleSave)}render(){return lit.qy`
            <or-rule-list id="rule-list" .config="${this.config}" .language="${this.language}" .selectedIds="${this.selectedIds}"></or-rule-list>
            <or-rule-viewer id="rule-viewer" .config="${this.config}" .readonly="${this.isReadonly()}"></or-rule-viewer>
        `}refresh(){this._viewer.ruleset=void 0,this._rulesList.refresh()}isReadonly(){return this.readonly||!core_lib.Ay.hasRole("write:rules")}_confirmContinue(e){this._viewer.modified?(0,or_mwc_dialog.YB)(i18next.Ay.t("loseChanges"),i18next.Ay.t("confirmContinueRulesetModified"),i18next.Ay.t("discard")).then((t=>{t&&e()})):e()}_onRuleSelectionRequested(e){this._viewer.modified&&(e.detail.allow=!1,this._confirmContinue((()=>{const t=e.detail.detail.newNodes;core_lib.J0.objectsEqual(t,e.detail.detail.oldNodes)?this._viewer.ruleset=Object.assign({},t[0].ruleset):(this.selectedIds=t.map((e=>e.ruleset.id)),this._viewer.ruleset=1===t.length?t[0].ruleset:void 0)})))}_onRuleSelectionChanged(e){const t=e.detail.newNodes;this.selectedIds=t.map((e=>e.ruleset.id)),this._viewer.ruleset=1===t.length?Object.assign({},t[0].ruleset):void 0}_onRuleAdd(e){this._viewer.ruleset=e.detail.ruleset}_onRuleSave(e){return or_rules_lib_awaiter(this,void 0,void 0,(function*(){yield this._rulesList.refresh(),e.detail.success&&e.detail.isNew&&(this.selectedIds=[e.detail.ruleset.id])}))}};OrRules.DEFAULT_RULESET_NAME="",or_rules_lib_decorate([(0,decorators.MZ)({type:Boolean})],OrRules.prototype,"readonly",void 0),or_rules_lib_decorate([(0,decorators.MZ)({type:Object})],OrRules.prototype,"config",void 0),or_rules_lib_decorate([(0,decorators.MZ)({type:String})],OrRules.prototype,"realm",void 0),or_rules_lib_decorate([(0,decorators.MZ)({type:String})],OrRules.prototype,"language",void 0),or_rules_lib_decorate([(0,decorators.MZ)({type:Array})],OrRules.prototype,"selectedIds",void 0),or_rules_lib_decorate([(0,decorators.MZ)({attribute:!1})],OrRules.prototype,"_isValidRule",void 0),or_rules_lib_decorate([(0,decorators.P)("#rule-list")],OrRules.prototype,"_rulesList",void 0),or_rules_lib_decorate([(0,decorators.P)("#rule-viewer")],OrRules.prototype,"_viewer",void 0),OrRules=or_rules_lib_decorate([(0,decorators.EM)("or-rules")],OrRules);var page_rules_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},page_rules_awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))};function pageRulesProvider(store,config=PAGE_RULES_CONFIG_DEFAULT){return{name:"rules",routes:["rules","rules/:id"],pageCreator:()=>{const page=new PageRules(store);return config&&(page.config=config),page}}}const PAGE_RULES_CONFIG_DEFAULT={rules:{controls:{allowedLanguages:["JSON","FLOW","GROOVY"],allowedActionTargetTypes:{actions:{wait:[],attribute:[],webhook:[],email:["USER","CUSTOM"],push:["USER","ASSET"]}}},descriptors:{all:{excludeAssets:["TradfriLightAsset","TradfriPlugAsset","ArtnetLightAsset"]}},json:{}}};let PageRules=class PageRules extends lib.YW{static get styles(){return lit.AH`
            :host {
            
            }
            
            or-rules {
                width: 100%;
                height: 100%;
            }
        `}get name(){return"rules"}constructor(store){super(store),this._realmSelector=state=>state.app.realm||core_lib.Ay.displayRealm,this.getRealmState=(0,es.Mz)([this._realmSelector],(realm=>page_rules_awaiter(this,void 0,void 0,(function*(){this._orRules&&this._orRules.refresh()}))))}render(){return lit.qy`
            <or-rules id="rules" .config="${this.config&&this.config.rules?this.config.rules:PAGE_RULES_CONFIG_DEFAULT.rules}"></or-rules>
        `}stateChanged(state){this.getRealmState(state)}};page_rules_decorate([(0,decorators.MZ)()],PageRules.prototype,"config",void 0),page_rules_decorate([(0,decorators.P)("#rules")],PageRules.prototype,"_orRules",void 0),PageRules=page_rules_decorate([(0,decorators.EM)("page-rules")],PageRules);var page_roles_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},page_roles_awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))};const page_roles_tableStyle=__webpack_require__("../../../node_modules/@material/data-table/dist/mdc.data-table.css");function pageRolesProvider(store){return{name:"roles",routes:["roles"],pageCreator:()=>new PageRoles(store)}}let PageRoles=class PageRoles extends lib.YW{constructor(){super(...arguments),this._compositeRoles=[],this._roles=[],this._rolesMapper={}}static get styles(){return[(0,lit.iz)(page_roles_tableStyle),lit.AH`
        #wrapper {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          overflow: auto;
        }

        #title {
          padding: 0 20px;
          font-size: 18px;
          font-weight: bold;
          width: calc(100% - 40px);
          max-width: 1360px;
          margin: 20px auto;
          align-items: center;
          display: flex;
          color: var(--or-app-color3, ${(0,lit.iz)(core_lib.Iy)});
        }

        #title or-icon {
          margin-right: 10px;
          margin-left: 14px;
        }

        .panel {
          width: calc(100% - 90px);
          max-width: 1310px;
          background-color: white;
          border: 1px solid #e5e5e5;
          border-radius: 5px;
          position: relative;
          margin: 0 auto;
          padding: 18px 24px 24px;
        }

        .panel-title {
          text-transform: uppercase;
          font-weight: bolder;
          line-height: 1em;
          color: var(--or-app-color3, ${(0,lit.iz)(core_lib.Iy)});
          margin-bottom: 20px;
          margin-top: 0;
          flex: 0 0 auto;
          letter-spacing: 0.025em;
        }

        #table-roles,
        #table-roles table{
          width: 100%;
          white-space: nowrap;
        }

        .mdc-data-table__row {
          cursor: pointer;
          border-top-color: #D3D3D3;
        }
        
        td, th {
          width: 25%;
          border: none;
        }
  
        td.large, th.large {
          width: 50%
        }

        .meta-item-container {
          flex-direction: row;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.25s ease-out;
          padding-left: 16px;
        }

        or-mwc-input {
            margin-bottom: 10px;
            margin-right: 16px;
        }

        or-icon {
            vertical-align: middle;
            --or-icon-width: 20px;
            --or-icon-height: 20px;
            margin-right: 2px;
            margin-left: -5px;
        }

        .row {
            display: flex;
            flex-direction: row;
            margin: 10px 0;
            flex: 1 1 0;
        }

        .column {
            display: flex;
            flex-direction: column;
            margin: 0px;
            flex: 1 1 0;
        }

        .column-title {
            padding-bottom: 10px;
        }

        .mdc-data-table__header-cell {
            font-weight: bold;
            color: ${(0,lit.iz)(core_lib.Iy)};
        }

        .mdc-data-table__header-cell:first-child {
            padding-left: 36px;
        }
        
        .padded-cell {
          overflow-wrap: break-word;
          word-wrap: break-word;
        }

        .attribute-meta-row td {
          padding: 0;
        }

        .attribute-meta-row {
          max-width: 0px;
        }

        .attribute-meta-row.expanded .meta-item-container {
          max-height: 1000px;
          max-width: none;
          transition: max-height 1s ease-in;
        }
        
        .button {
            cursor: pointer;
            display: flex;
            flex-direction: row;
            align-content: center;
            padding: 16px;
            align-items: center;
            font-size: 14px;
            text-transform: uppercase;
            color: var(--or-app-color4);
        }

        .button or-icon {
            --or-icon-fill: var(--or-app-color4);
            margin-right: 5px;
        }

        @media screen and (max-width: 1024px){
          .row {
            display: block;
            flex-direction: column;
          }
        }

        @media screen and (max-width: 768px){
          #title {
            padding: 0;
            width: 100%;
          }
          .panel {
            border-left: 0px;
            border-right: 0px;
            width: calc(100% - 48px);
            border-radius: 0;
          }
          .hide-mobile {
            display: none;
          }
          td, th {
            width: 50%
          }
        }
      `]}get name(){return"role_plural"}shouldUpdate(_changedProperties){return _changedProperties.has("realm")&&this.getRoles(),super.shouldUpdate(_changedProperties)}connectedCallback(){super.connectedCallback(),this.realm=this.getState().app.realm}getState(){return this._store.getState()}getRoles(){return page_roles_awaiter(this,void 0,void 0,(function*(){const roleResponse=yield core_lib.Ay.rest.api.UserResource.getRoles(this.realm);this._compositeRoles=[...roleResponse.data.filter((role=>role.composite))],this._roles=[...roleResponse.data.filter((role=>!role.composite))],this._roles.map((role=>{this._rolesMapper[role.id]=role.name}))}))}_updateRoles(){return page_roles_awaiter(this,void 0,void 0,(function*(){if(this._compositeRoles.some((role=>0===role.compositeRoleIds.length)))return;const roles=[...this._compositeRoles,...this._roles];yield core_lib.Ay.rest.api.UserResource.updateRoles(this.realm,roles),this.getRoles()}))}_deleteRole(role,rowIndex){(0,or_mwc_dialog.YB)(or_translate_lib.MR.t("deleteRole"),or_translate_lib.MR.t("deleteRoleConfirm",{roleName:role.name}),or_translate_lib.MR.t("delete")).then((ok=>{ok&&this.doDelete(role,rowIndex)}))}doDelete(role,rowIndex){this.expanderToggle(rowIndex),this._compositeRoles=[...this._compositeRoles.filter((u=>u.id!==role.id))],this._updateRoles()}addRemoveRole(e,r,index){e.detail.value?this._compositeRoles[index].compositeRoleIds=[...this._compositeRoles[index].compositeRoleIds,r.id]:this._compositeRoles[index].compositeRoleIds=this._compositeRoles[index].compositeRoleIds.filter((id=>id!==r.id)),this.requestUpdate("_compositeRoles")}expanderToggle(index){const metaRow=this.shadowRoot.getElementById("attribute-meta-row-"+index),expanderIcon=this.shadowRoot.getElementById("mdc-data-table-icon-"+index);metaRow.classList.contains("expanded")?(metaRow.classList.remove("expanded"),expanderIcon.icon="chevron-right"):(metaRow.classList.add("expanded"),expanderIcon.icon="chevron-down")}render(){if(!core_lib.Ay.authenticated)return lit.qy`
        <or-translate value="notAuthenticated"></or-translate>
      `;if(!core_lib.Ay.isKeycloak())return lit.qy`
        <or-translate value="notSupported"></or-translate>
      `;if(!this._roles||0===this._roles.length)return lit.qy``;const readonly=!core_lib.Ay.hasRole("write:user"),readRoles=this._roles.filter((role=>role.name.includes("read"))).sort(((a,b)=>a.name.localeCompare(b.name))),writeRoles=this._roles.filter((role=>role.name.includes("write"))).sort(((a,b)=>a.name.localeCompare(b.name))),otherRoles=this._roles.filter((role=>!role.name.includes("read")&&!role.name.includes("write"))).sort(((a,b)=>a.name.localeCompare(b.name)));return lit.qy`
      <div id="wrapper">
        <div id="title">
            <or-icon icon="account-box-multiple"></or-icon>${or_translate_lib.MR.t("role_plural")}
        </div>
        <div class="panel">
            <p class="panel-title">${or_translate_lib.MR.t("role")}</p>
            <div id="table-roles" class="mdc-data-table">
                <table class="mdc-data-table__table" aria-label="attribute list">
                    <thead>
                        <tr class="mdc-data-table__header-row">
                            <th class="mdc-data-table__header-cell" role="columnheader" scope="col">
                                <or-translate value="name"></or-translate>
                            </th>
                            <th class="mdc-data-table__header-cell" role="columnheader" scope="col">
                                <or-translate value="description"></or-translate>
                            </th>
                            <th class="mdc-data-table__header-cell hide-mobile large" role="columnheader" scope="col">
                                <or-translate value="permissions"></or-translate>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="mdc-data-table__content">
                        ${this._compositeRoles.map(((role,index)=>{const compositeRoleName=role.compositeRoleIds.map((id=>this._rolesMapper[id])).sort(((a,b)=>a.localeCompare(b))).join(", ");return lit.qy`
                        <tr id="mdc-data-table-row-${index}" class="mdc-data-table__row" @click="${()=>this.expanderToggle(index)}">
                            <td class="padded-cell mdc-data-table__cell">
                                <or-icon id="mdc-data-table-icon-${index}" icon="chevron-right"></or-icon>
                                <span>${role.name}</span>
                            </td>
                            <td class="padded-cell mdc-data-table__cell">
                                ${role.description}
                            </td>
                            <td class="padded-cell hide-mobile mdc-data-table__cell large">
                                ${compositeRoleName}
                            </td>
                        </tr>
                        <tr id="attribute-meta-row-${index}" class="attribute-meta-row${role.id?" ":" expanded "}">
                            <td colspan="100%">
                                <div class="meta-item-container">

                                    <div class="row">
                                        <div class="column">
                                            <or-mwc-input .label="${or_translate_lib.MR.t("role")}" .type="${or_mwc_input.NZ.TEXT}" min="1" required .value="${role.name}" @or-mwc-input-changed="${e=>role.name=e.detail.value}"></or-mwc-input>
                                        </div>
                                        <div class="column">
                                            <or-mwc-input .label="${or_translate_lib.MR.t("description")}" .type="${or_mwc_input.NZ.TEXT}" min="1" required .value="${role.description}" @or-mwc-input-changed="${e=>role.description=e.detail.value}"></or-mwc-input>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="column">
                                            <strong class="column-title">${or_translate_lib.MR.t("readPermissions")}</strong> ${readRoles.map((r=>lit.qy`
                                              <or-mwc-input ?readonly="${readonly}" .label="${r.name.split(":")[1]}: ${r.description}" .type="${or_mwc_input.NZ.CHECKBOX}" .value="${role.compositeRoleIds&&role.compositeRoleIds.find((id=>id===r.id))}" @or-mwc-input-changed="${e=>this.addRemoveRole(e,r,index)}"></or-mwc-input>
                                            `))}

                                        </div>
                                        <div class="column">
                                            <strong class="column-title">${or_translate_lib.MR.t("writePermissions")}</strong> ${writeRoles.map((r=>lit.qy`
                                              <or-mwc-input ?readonly="${readonly}" .label="${r.name.split(":")[1]}: ${r.description}" .type="${or_mwc_input.NZ.CHECKBOX}" .value="${role.compositeRoleIds&&role.compositeRoleIds.find((id=>id===r.id))}" @or-mwc-input-changed="${e=>this.addRemoveRole(e,r,index)}"></or-mwc-input>
                                            `))}
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="column">
                                            ${otherRoles.map((r=>lit.qy`
                                            <or-mwc-input ?readonly="${readonly}" .label="${r.name.split(" : ")[1]}: ${r.description}" .type="${or_mwc_input.NZ.CHECKBOX}" .value="${role.compositeRoleIds&&role.compositeRoleIds.find((id=>id===r.id))}" @or-mwc-input-changed="${e=>this.addRemoveRole(e,r,index)}"></or-mwc-input>
                                            `))}
                                        </div>
                                    </div>

                                    ${readonly?lit.qy``:lit.qy`
                                    <div class="row" style="margin-bottom: 0;">
                                        ${role.id?lit.qy`
                                        <or-mwc-input label="delete" .type="${or_mwc_input.NZ.BUTTON}" @click="${()=>this._deleteRole(role,index)}"></or-mwc-input>
                                        <or-mwc-input ?disabled="${this._compositeRoles.some((role=>0===role.compositeRoleIds.length))}" style="margin-left: auto;" label="save" .type="${or_mwc_input.NZ.BUTTON}" @click="${()=>this._updateRoles()}"></or-mwc-input>
                                        `:lit.qy`
                                        <or-mwc-input label="cancel" .type="${or_mwc_input.NZ.BUTTON}" @click="${()=>{this._compositeRoles.splice(-1,1),this._compositeRoles=[...this._compositeRoles]}}"></or-mwc-input>
                                        <or-mwc-input ?disabled="${this._compositeRoles.some((role=>0===role.compositeRoleIds.length))}" style="margin-left: auto;" label="create" .type="${or_mwc_input.NZ.BUTTON}" @click="${()=>this._updateRoles()}"></or-mwc-input>
                                        `}
                                    </div>
                                    `}
                                </div>
                            </td>
                        </tr>
                        `}))} ${this._compositeRoles.length>0&&this._compositeRoles[this._compositeRoles.length-1].id&&!readonly?lit.qy`
                        <tr class="mdc-data-table__row">
                            <td colspan="100%">
                                <a class="button" @click="${()=>this._compositeRoles=[...this._compositeRoles,{composite:!0,name:"",compositeRoleIds:[]}]}">
                                    <or-icon icon="plus"></or-icon>${or_translate_lib.MR.t("add")} ${or_translate_lib.MR.t("role")}</a>
                            </td>
                        </tr>
                        `:""}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    `}stateChanged(state){this.realm=state.app.realm}};page_roles_decorate([(0,decorators.wk)()],PageRoles.prototype,"_compositeRoles",void 0),page_roles_decorate([(0,decorators.wk)()],PageRoles.prototype,"_roles",void 0),page_roles_decorate([(0,decorators.wk)()],PageRoles.prototype,"_rolesMapper",void 0),page_roles_decorate([(0,decorators.wk)()],PageRoles.prototype,"realm",void 0),PageRoles=page_roles_decorate([(0,decorators.EM)("page-roles")],PageRoles);var page_users_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},page_users_awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))};const page_users_tableStyle=__webpack_require__("../../../node_modules/@material/data-table/dist/mdc.data-table.css");function pageUsersProvider(store){return{name:"users",routes:["users","users/:id","users/new/:type"],pageCreator:()=>new PageUsers(store)}}let PageUsers=class PageUsers extends lib.YW{constructor(){super(...arguments),this._users=[],this._serviceUsers=[],this._userFilter=this.getDefaultUserFilter(!1),this._serviceUserFilter=this.getDefaultUserFilter(!0),this._roles=[],this._realmRoles=[],this._registrationEmailAsUsername=!1,this._compositeRoles=[]}static get styles(){return[(0,lit.iz)(page_users_tableStyle),lit.AH`
                #wrapper {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                }

                #title {
                    padding: 0 20px;
                    font-size: 18px;
                    font-weight: bold;
                    width: calc(100% - 40px);
                    max-width: 1360px;
                    margin: 20px auto;
                    align-items: center;
                    display: flex;
                    color: var(--or-app-color3, ${(0,lit.iz)(core_lib.Iy)});
                }

                #title or-icon {
                    margin-right: 10px;
                    margin-left: 14px;
                }

                .panel {
                    flex: 0;
                    width: 100%;
                    box-sizing: border-box;
                    max-width: 1360px;
                    background-color: white;
                    border: 1px solid #e5e5e5;
                    border-radius: 5px;
                    position: relative;
                    margin: 0 auto 10px;
                    padding: 12px 24px 24px;
                    display: flex;
                    flex-direction: column;
                }

                .panel-title {
                    display: flex;
                    text-transform: uppercase;
                    font-weight: bolder;
                    color: var(--or-app-color3, ${(0,lit.iz)(core_lib.Iy)});
                    line-height: 1em;
                    margin-bottom: 10px;
                    margin-top: 0;
                    flex: 0 0 auto;
                    letter-spacing: 0.025em;
                    align-items: center;
                    min-height: 36px;
                }

                or-mwc-input {
                    margin-bottom: 20px;
                }

                or-icon {
                    vertical-align: middle;
                    --or-icon-width: 20px;
                    --or-icon-height: 20px;
                    margin-right: 2px;
                    margin-left: -5px;
                }

                .row {
                    display: flex;
                    flex-direction: row;
                    flex: 1 1 0;
                    gap: 24px;
                }

                .column {
                    display: flex;
                    flex-direction: column;
                    margin: 0px;
                    flex: 1 1 0;
                }

                .hidden {
                    display: none;
                }

                .breadcrumb-container {
                    padding: 0 20px;
                    width: calc(100% - 40px);
                    max-width: 1360px;
                    margin: 12px auto 0;
                    display: flex;
                    align-items: center;
                }

                .breadcrumb-clickable {
                    cursor: pointer;
                    color: ${(0,lit.iz)(core_lib.BB)}
                }

                .breadcrumb-arrow {
                    margin: 0 5px -3px 5px;
                    --or-icon-width: 16px;
                    --or-icon-height: 16px;
                }
                
                #session-table {
                    --or-mwc-table-column-width-3: 0;
                }
                
                .button-row {
                    display: flex !important;
                    flex-direction: row !important;
                    margin-bottom: 0;
                    justify-content: space-between;
                }

                @media screen and (max-width: 768px) {
                    #title {
                        padding: 0;
                        width: 100%;
                    }

                    .row {
                        display: block;
                        flex-direction: column;
                        gap: 0;
                    }

                    .panel {
                        border-radius: 0;
                        border-left: 0px;
                        border-right: 0px;
                    }
                }
            `]}get name(){return"user_plural"}shouldUpdate(changedProperties){return changedProperties.has("realm")&&null!=changedProperties.get("realm")&&(this.reset(),this.loadData()),changedProperties.has("userId")?this._updateRoute():changedProperties.has("creationState")&&this._updateNewUserRoute(),super.shouldUpdate(changedProperties)}connectedCallback(){super.connectedCallback(),this.loadData()}disconnectedCallback(){super.disconnectedCallback()}responseAndStateOK(stateChecker,response,errorMsg){return!!stateChecker()&&(!!response.data||((0,or_mwc_snackbar.td)(void 0,errorMsg,"dismiss"),console.error(errorMsg+": response = "+response.statusText),!1))}loadData(){return page_users_awaiter(this,void 0,void 0,(function*(){return this._loadDataPromise||(this._loadDataPromise=this.fetchUsers(),this._loadDataPromise.finally((()=>{this._loadDataPromise=void 0}))),this._loadDataPromise}))}fetchUsers(){return page_users_awaiter(this,void 0,void 0,(function*(){if(!this.realm||!this.isConnected)return;if(this._compositeRoles=[],this._roles=[],this._realmRoles=[],this._users=[],this._serviceUsers=[],!core_lib.Ay.authenticated||!core_lib.Ay.hasRole("read:users"))return void console.warn("Not authenticated or insufficient access");const stateChecker=()=>this.getState().app.realm===this.realm&&this.isConnected,roleResponse=yield core_lib.Ay.rest.api.UserResource.getRoles(core_lib.Ay.displayRealm);if(!this.responseAndStateOK(stateChecker,roleResponse,"loadFailedRoles"))return;const realmResponse=yield core_lib.Ay.rest.api.RealmResource.get(core_lib.Ay.displayRealm);if(!this.responseAndStateOK(stateChecker,realmResponse,"loadFailedRoles"))return;const usersResponse=yield core_lib.Ay.rest.api.UserResource.query({realmPredicate:{name:core_lib.Ay.displayRealm}});this.responseAndStateOK(stateChecker,usersResponse,"loadFailedUsers")&&(this._compositeRoles=roleResponse.data.filter((role=>role.composite)).sort(core_lib.J0.sortByString((role=>role.name))),this._roles=roleResponse.data.filter((role=>!role.composite)).sort(core_lib.J0.sortByString((role=>role.name))),this._registrationEmailAsUsername=realmResponse.data.registrationEmailAsUsername,this._realmRoles=(realmResponse.data.realmRoles||[]).sort(core_lib.J0.sortByString((role=>role.name))),this._users=usersResponse.data.filter((user=>!user.serviceAccount)).sort(core_lib.J0.sortByString((u=>u.username))),this._serviceUsers=usersResponse.data.filter((user=>user.serviceAccount)).sort(core_lib.J0.sortByString((u=>u.username))))}))}_createUpdateUser(user,action){return page_users_awaiter(this,void 0,void 0,(function*(){let result=!1;if(this._registrationEmailAsUsername&&!user.serviceAccount?!user.email:!user.username)return(0,or_mwc_snackbar.td)(void 0,this._registrationEmailAsUsername&&!user.serviceAccount?"noEmailSet":"noUsernameSet","dismiss"),!1;if(""===user.password)return!1;const isUpdate=!!user.id;try{const response="update"==action?yield core_lib.Ay.rest.api.UserResource.update(core_lib.Ay.displayRealm,user):yield core_lib.Ay.rest.api.UserResource.create(core_lib.Ay.displayRealm,user);if(user.id=response.data.id,user.password){const credentials={value:user.password};core_lib.Ay.rest.api.UserResource.resetPassword(core_lib.Ay.displayRealm,user.id,credentials)}yield this._updateRoles(user,!1),yield this._updateRoles(user,!0),yield this._updateUserAssetLinks(user),result=!0}catch(e){throw(0,rest_lib.F0)(e)&&(console.error((isUpdate?"save user failed":"create user failed")+": response = "+e.response.statusText),400===e.response.status?(0,or_mwc_snackbar.td)(void 0,isUpdate?"saveUserFailed":"createUserFailed","dismiss"):403===e.response.status&&(0,or_mwc_snackbar.td)(void 0,"userAlreadyExists")),result=!1,e}finally{return yield this.loadData(),result}}))}_updateRoles(user,realmRoles){return page_users_awaiter(this,void 0,void 0,(function*(){const roles=realmRoles?user.realmRoles.filter((role=>role.assigned)):user.roles.filter((role=>role.assigned)),previousRoles=realmRoles?user.previousRealmRoles:user.previousRoles,removedRoles=previousRoles.filter((previousRole=>!roles.some((role=>role.name===previousRole.name)))),addedRoles=roles.filter((role=>!previousRoles.some((previousRole=>previousRole.name===role.name))));0===removedRoles.length&&0===addedRoles.length||(realmRoles?yield core_lib.Ay.rest.api.UserResource.updateUserRealmRoles(core_lib.Ay.displayRealm,user.id,roles):yield core_lib.Ay.rest.api.UserResource.updateUserRoles(core_lib.Ay.displayRealm,user.id,roles))}))}_updateUserAssetLinks(user){return page_users_awaiter(this,void 0,void 0,(function*(){if(!user.previousAssetLinks)return;const removedLinks=user.previousAssetLinks.filter((assetLink=>!user.userAssetLinks.some((newLink=>assetLink.id.assetId===newLink.id.assetId)))),addedLinks=user.userAssetLinks.filter((assetLink=>!user.previousAssetLinks.some((oldLink=>assetLink.id.assetId===oldLink.id.assetId)))).map((link=>(link.id.userId=user.id,link)));removedLinks.length>0&&(yield core_lib.Ay.rest.api.AssetResource.deleteUserAssetLinks(removedLinks)),addedLinks.length>0&&(yield core_lib.Ay.rest.api.AssetResource.createUserAssetLinks(addedLinks))}))}_deleteUser(user){(0,or_mwc_dialog.YB)(or_translate_lib.MR.t("deleteUser"),or_translate_lib.MR.t("deleteUserConfirm",{userName:user.username}),or_translate_lib.MR.t("delete")).then((ok=>{ok&&this.doDelete(user)}))}doDelete(user){core_lib.Ay.rest.api.UserResource.delete(core_lib.Ay.displayRealm,user.id).then((response=>{user.serviceAccount?(this._serviceUsers=[...this._serviceUsers.filter((u=>u.id!==user.id))],this.reset()):(this._users=[...this._users.filter((u=>u.id!==user.id))],this.reset())}))}render(){var _a;if(!core_lib.Ay.authenticated)return lit.qy`
                <or-translate value="notAuthenticated"></or-translate>
            `;const users=this._userFilter(this._users),serviceUsers=this._serviceUserFilter(this._serviceUsers),compositeRoleOptions=this._compositeRoles.map((cr=>cr.name)),realmRoleOptions=this._realmRoles?this._realmRoles.filter((r=>core_lib.J0.realmRoleFilter(r))).map((r=>[r.name,or_translate_lib.MR.t("realmRole."+r.name,core_lib.J0.camelCaseToSentenceCase(r.name.replace("_"," ").replace("-"," ")))])):[],readonly=!core_lib.Ay.hasRole("write:admin"),userTableColumns=[{title:or_translate_lib.MR.t("username")},{title:or_translate_lib.MR.t("firstName")},{title:or_translate_lib.MR.t("surname")},{title:or_translate_lib.MR.t("email"),hideMobile:!0},{title:or_translate_lib.MR.t("status")}],userTableRows=users.map((user=>({content:[user.username,user.firstName,user.lastName,user.email,user.enabled?or_translate_lib.MR.t("enabled"):or_translate_lib.MR.t("disabled")],clickable:!0}))),serviceUserTableColumns=[{title:or_translate_lib.MR.t("username")},{title:or_translate_lib.MR.t("status")}],serviceUserTableRows=serviceUsers.map((user=>({content:[user.username,user.enabled?or_translate_lib.MR.t("enabled"):or_translate_lib.MR.t("disabled")],clickable:!0}))),tableConfig={columnFilter:[],stickyFirstColumn:!1,pagination:{enable:!0}},mergedUserList=[...users,...serviceUsers],index=this.userId?mergedUserList.findIndex((user=>user.id==this.userId)):void 0;return lit.qy`
            <div id="wrapper">

                <!-- Breadcrumb on top of the page-->
                ${(0,when.z)(this.userId&&null!=index||this.creationState,(()=>{var _a;return lit.qy`
                    <div class="breadcrumb-container">
                        <span class="breadcrumb-clickable"
                              @click="${()=>this.reset()}">${or_translate_lib.MR.t("user_plural")}</span>
                        <or-icon class="breadcrumb-arrow" icon="chevron-right"></or-icon>
                        <span style="margin-left: 2px;">${null!=index?null===(_a=mergedUserList[index])||void 0===_a?void 0:_a.username:this.creationState.userModel.serviceAccount?or_translate_lib.MR.t("creating_serviceUser"):or_translate_lib.MR.t("creating_regularUser")}</span>
                    </div>
                `}))}

                <div id="title">
                    <or-icon icon="account-group"></or-icon>
                    <span>${this.userId&&null!=index?null===(_a=mergedUserList[index])||void 0===_a?void 0:_a.username:or_translate_lib.MR.t("user_plural")}</span>
                </div>

                <!-- User Specific page -->
                ${(0,when.z)(this.userId&&null!=index||this.creationState,(()=>lit.qy`
                    ${(0,when.z)(null!=mergedUserList[index]||this.creationState,(()=>{const user=null!=index?mergedUserList[index]:this.creationState.userModel;return lit.qy`
                            <div id="content" class="panel">
                                <p class="panel-title">
                                    ${user.serviceAccount?or_translate_lib.MR.t("serviceUser"):or_translate_lib.MR.t("user")}
                                    ${or_translate_lib.MR.t("settings")}</p>
                                ${this.getSingleUserView(user,compositeRoleOptions,realmRoleOptions,"user"+index,readonly||null!=this._saveUserPromise)}
                            </div>
                            
                            ${user.serviceAccount?this.getMQTTSessionTemplate(user):""}
                        `}))}

                    <!-- List of Users page -->
                `),(()=>lit.qy`
                    <div id="content" class="panel">
                        <div class="panel-title" style="justify-content: space-between;">
                            <p>${or_translate_lib.MR.t("regularUser_plural")}</p>
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <or-mwc-input type="${or_mwc_input.NZ.TEXT}" placeholder="${or_translate_lib.MR.t("search")}" 
                                              style="margin: 0; text-transform: none;" iconTrailing="magnify" compact outlined
                                              @input="${ev=>this.onRegularUserSearch(ev)}"
                                ></or-mwc-input>
                                <or-mwc-input style="margin: 0;" type="${or_mwc_input.NZ.BUTTON}" icon="plus" label="${or_translate_lib.MR.t("add")} ${or_translate_lib.MR.t("user")}"
                                              @or-mwc-input-changed="${()=>this.creationState={userModel:this.getNewUserModel(!1)}}"
                                ></or-mwc-input>
                            </div>
                        </div>
                        ${(0,until.T)(this.getUsersTable(userTableColumns,userTableRows,tableConfig,(ev=>{this.userId=users[ev.detail.index].id})),lit.qy`${or_translate_lib.MR.t("loading")}`)}
                    </div>

                    <div id="content" class="panel">
                        <div class="panel-title" style="justify-content: space-between;">
                            <p>${or_translate_lib.MR.t("serviceUser_plural")}</p>
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <or-mwc-input style="margin: 0; text-transform: none;" type="${or_mwc_input.NZ.TEXT}" iconTrailing="magnify" placeholder="${or_translate_lib.MR.t("search")}" compact outlined
                                              @input="${ev=>this.onServiceUserSearch(ev)}"
                                ></or-mwc-input>
                                <or-mwc-input style="margin: 0;" type="${or_mwc_input.NZ.BUTTON}" icon="plus" label="${or_translate_lib.MR.t("add")} ${or_translate_lib.MR.t("user")}"
                                              @or-mwc-input-changed="${()=>this.creationState={userModel:this.getNewUserModel(!0)}}"
                                ></or-mwc-input>
                            </div>
                        </div>
                        ${(0,until.T)(this.getUsersTable(serviceUserTableColumns,serviceUserTableRows,tableConfig,(ev=>{this.userId=serviceUsers[ev.detail.index].id})),lit.qy`${or_translate_lib.MR.t("loading")}`)}
                    </div>
                `))}
            </div>
        `}getUsersTable(columns,rows,config,onRowClick){return page_users_awaiter(this,void 0,void 0,(function*(){return this._loadDataPromise&&(yield this._loadDataPromise),lit.qy`
            <or-mwc-table .columns="${columns instanceof Array?columns:void 0}"
                          .columnsTemplate="${columns instanceof Array?void 0:columns}"
                          .rows="${rows instanceof Array?rows:void 0}"
                          .rowsTemplate="${rows instanceof Array?void 0:rows}"
                          .config="${config}"
                          @or-mwc-table-row-click="${rows instanceof Array?onRowClick:void 0}"
            ></or-mwc-table>
        `}))}getNewUserModel(serviceAccount){return{enabled:!0,password:void 0,realm:core_lib.Ay.displayRealm,roles:[],previousRoles:[],realmRoles:[],previousRealmRoles:[],userAssetLinks:[],serviceAccount}}getDefaultUserFilter(serviceUser){return users=>users}onRegularUserSearch(ev){var _a;const value=null===(_a=ev.target.nativeValue)||void 0===_a?void 0:_a.toLowerCase();this._userFilter=value?users=>users.filter((u=>{var _a,_b,_c,_d;return(null===(_a=u.username)||void 0===_a?void 0:_a.toLowerCase().includes(value))||(null===(_b=u.firstName)||void 0===_b?void 0:_b.toLowerCase().includes(value))||(null===(_c=u.lastName)||void 0===_c?void 0:_c.toLowerCase().includes(value))||(null===(_d=u.email)||void 0===_d?void 0:_d.toLowerCase().includes(value))})):this.getDefaultUserFilter(!1)}onServiceUserSearch(ev){var _a;const value=null===(_a=ev.target.nativeValue)||void 0===_a?void 0:_a.toLowerCase();this._serviceUserFilter=value?users=>users.filter((u=>{var _a;return null===(_a=u.username)||void 0===_a?void 0:_a.includes(value)})):this.getDefaultUserFilter(!0)}loadUser(user){return page_users_awaiter(this,void 0,void 0,(function*(){if(user.roles||user.realmRoles)return;const userRolesResponse=yield core_lib.Ay.rest.api.UserResource.getUserRoles(core_lib.Ay.displayRealm,user.id);if(!this.responseAndStateOK((()=>!0),userRolesResponse,"loadFailedUserInfo"))return;const userRealmRolesResponse=yield core_lib.Ay.rest.api.UserResource.getUserRealmRoles(core_lib.Ay.displayRealm,user.id);if(!this.responseAndStateOK((()=>!0),userRolesResponse,"loadFailedUserInfo"))return;const userAssetLinksResponse=yield core_lib.Ay.rest.api.AssetResource.getUserAssetLinks({realm:core_lib.Ay.displayRealm,userId:user.id});this.responseAndStateOK((()=>!0),userAssetLinksResponse,"loadFailedUserInfo")&&(user.roles=userRolesResponse.data.filter((r=>r.assigned)),user.realmRoles=userRealmRolesResponse.data.filter((r=>r.assigned)),this._realmRoles=[...userRealmRolesResponse.data],user.previousRealmRoles=[...user.realmRoles],user.previousRoles=[...user.roles],user.userAssetLinks=userAssetLinksResponse.data,user.loaded=!0,user.loading=!1,this.requestUpdate())}))}_openAssetSelector(ev,user,readonly,suffix){const openBtn=ev.target;openBtn.disabled=!0,user.previousAssetLinks=[...user.userAssetLinks];(0,or_mwc_dialog.ui)((new or_mwc_dialog.X$).setHeading(or_translate_lib.MR.t("linkedAssets")).setContent(lit.qy`
                <or-asset-tree
                        id="chart-asset-tree" readonly .selectedIds="${user.userAssetLinks.map((ual=>ual.id.assetId))}"
                        .showSortBtn="${!1}" expandNodes checkboxes
                        @or-asset-tree-request-selection="${e=>{readonly&&(e.detail.allow=!1)}}"
                        @or-asset-tree-selection="${e=>{readonly||(e=>{user.userAssetLinks=e.detail.newNodes.map((node=>({id:{userId:user.id,realm:user.realm,assetId:node.asset.id}})))})(e)}}"></or-asset-tree>
            `).setActions([{default:!0,actionName:"cancel",content:"cancel",action:()=>{user.userAssetLinks=user.previousAssetLinks,user.previousAssetLinks=void 0,openBtn.disabled=!1}},{actionName:"ok",content:"ok",action:()=>{openBtn.disabled=!1,this.onUserChanged(suffix),this.requestUpdate()}}]).setDismissAction({actionName:"cancel",action:()=>{user.userAssetLinks=user.previousAssetLinks,user.previousAssetLinks=void 0,openBtn.disabled=!1}}))}onUserChanged(suffix){const validateArray=this.shadowRoot.querySelectorAll(".validate"),saveBtn=this.shadowRoot.getElementById("savebtn-"+suffix),saveDisabled=Array.from(validateArray).filter((e=>e instanceof or_mwc_input.n_)).some((input=>!input.valid));saveBtn.disabled=saveDisabled}_onPasswordChanged(user,suffix){const passwordComponent=this.shadowRoot.getElementById("password-"+suffix),repeatPasswordComponent=this.shadowRoot.getElementById("repeatPassword-"+suffix);if(repeatPasswordComponent.value!==passwordComponent.value){const error=or_translate_lib.MR.t("passwordMismatch");repeatPasswordComponent.setCustomValidity(error),user.password=""}else repeatPasswordComponent.setCustomValidity(void 0),user.password=passwordComponent.value}_regenerateSecret(ev,user,secretInputId){return page_users_awaiter(this,void 0,void 0,(function*(){const btnElem=ev.currentTarget,secretElem=this.shadowRoot.getElementById(secretInputId);if(!btnElem||!secretElem)return;btnElem.disabled=!0,secretElem.disabled=!0;const resetResponse=yield core_lib.Ay.rest.api.UserResource.resetSecret(core_lib.Ay.displayRealm,user.id);resetResponse.data&&(secretElem.value=resetResponse.data),btnElem.disabled=!1,secretElem.disabled=!1}))}_updateUserSelectedRoles(user,suffix){const roleCheckboxes=[...this.shadowRoot.getElementById("role-list-"+suffix).children],implicitRoleNames=this.getImplicitUserRoles(user);roleCheckboxes.forEach((checkbox=>{const roleName=checkbox.label,r=this._roles.find((role=>roleName===role.name));checkbox.disabled=!!implicitRoleNames.find((name=>r.name===name)),checkbox.value=!!user.roles.find((userRole=>userRole.name===r.name))||implicitRoleNames.some((implicitRoleName=>implicitRoleName===r.name))}))}getImplicitUserRoles(user){return this._compositeRoles.filter((role=>user.roles.some((ur=>ur.name===role.name)))).flatMap((role=>role.compositeRoleIds)).map((id=>this._roles.find((r=>r.id===id)).name))}getSingleUserView(user,compositeRoleOptions,realmRoleOptions,suffix,readonly=!0){return lit.qy`
            ${(0,when.z)(user.loaded||user.roles&&user.realmRoles,(()=>this.getSingleUserTemplate(user,compositeRoleOptions,realmRoleOptions,suffix,readonly)),(()=>{const content=(()=>page_users_awaiter(this,void 0,void 0,(function*(){return yield this.loadUser(user),this.getSingleUserTemplate(user,compositeRoleOptions,realmRoleOptions,suffix,readonly)})))();return lit.qy`
                    ${(0,until.T)(content,lit.qy`${or_translate_lib.MR.t("loading")}`)}
                `}))}
        `}getMQTTSessionTemplate(user){return this._sessionLoader||(this._sessionLoader=this.getSessionLoader(user)),lit.qy`
            <div id="content" class="panel">
                <p class="panel-title">${or_translate_lib.MR.t("mqttSessions")}</p>
                ${(0,until.T)(this._sessionLoader,lit.qy`${or_translate_lib.MR.t("loading")}`)}
            </div>
        `}getSessionLoader(user){return page_users_awaiter(this,void 0,void 0,(function*(){const userSessionsResponse=yield core_lib.Ay.rest.api.UserResource.getUserSessions(core_lib.Ay.displayRealm,user.id);if(!this.responseAndStateOK((()=>200===userSessionsResponse.status),userSessionsResponse,"loadFailedUserInfo"))return lit.qy``;const cols=[or_translate_lib.MR.t("address"),or_translate_lib.MR.t("since"),""],rows=userSessionsResponse.data.map((session=>[session.remoteAddress,new Date(session.startTimeMillis),lit.qy`<or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" label="disconnect" @or-mwc-input-changed="${()=>{this.disconnectSession(user,session)}}"></or-mwc-input>`]));return rows.length<1?lit.qy`<or-mwc-table .rows="${[["This user has no active MQTT sessions",null]]}" .config="${{stickyFirstColumn:!1}}" .columns="${cols}"></or-mwc-table>`:lit.qy`<or-mwc-table id="session-table" .rows="${rows}" .config="${{stickyFirstColumn:!1}}" .columns="${cols}"></or-mwc-table>`}))}getSingleUserTemplate(user,compositeRoleOptions,realmRoleOptions,suffix,readonly=!0){const isServiceUser=user.serviceAccount,isSameUser=user.username===core_lib.Ay.username,implicitRoleNames=user.loaded?this.getImplicitUserRoles(user):[];return lit.qy`
            <div class="row">
                <div class="column">
                    <h5>${or_translate_lib.MR.t("details")}</h5>
                    <!-- user details -->
                    <or-mwc-input id="username-${suffix}" ?readonly="${!!user.id||readonly}" .disabled="${!!user.id||!isServiceUser&&this._registrationEmailAsUsername}"
                                  class = "validate"
                                  .label="${or_translate_lib.MR.t("username")}"
                                  .type="${or_mwc_input.NZ.TEXT}" minLength="3" maxLength="255" 
                                  ?required="${isServiceUser||!this._registrationEmailAsUsername}"
                                  pattern="[A-Za-z0-9\\-_]+"
                                  .value="${user.username}"
                                  .validationMessage="${or_translate_lib.MR.t("invalidUsername")}"
                                  @or-mwc-input-changed="${e=>{user.username=e.detail.value,this.onUserChanged(suffix)}}"></or-mwc-input>
                    <!-- if identity provider is set to use email as username, make it required -->
                    <or-mwc-input ?readonly="${!!user.id&&this._registrationEmailAsUsername||readonly}"
                                  .disabled="${!!user.id&&this._registrationEmailAsUsername}"
                                  class="${isServiceUser?"hidden":"validate"}"
                                  .label="${or_translate_lib.MR.t("email")}"
                                  .type="${or_mwc_input.NZ.EMAIL}"
                                  .value="${user.email}"
                                  ?required="${!isServiceUser&&this._registrationEmailAsUsername}"
                                  pattern="^[\\w\\.\\-]+@([\\w\\-]+\\.)+[\\w]{2,4}$"
                                  .validationMessage="${or_translate_lib.MR.t("invalidEmail")}"
                                  @or-mwc-input-changed="${e=>{user.email=e.detail.value,this.onUserChanged(suffix)}}"></or-mwc-input>
                    <or-mwc-input ?readonly="${readonly}"
                                  class="${isServiceUser?"hidden":"validate"}"
                                  .label="${or_translate_lib.MR.t("firstName")}"
                                  .type="${or_mwc_input.NZ.TEXT}" minLength="1"
                                  .value="${user.firstName}"
                                  @or-mwc-input-changed="${e=>{user.firstName=e.detail.value,this.onUserChanged(suffix)}}"></or-mwc-input>
                    <or-mwc-input ?readonly="${readonly}"
                                  class="${isServiceUser?"hidden":"validate"}"
                                  .label="${or_translate_lib.MR.t("surname")}"
                                  .type="${or_mwc_input.NZ.TEXT}" minLength="1"
                                  .value="${user.lastName}"
                                  @or-mwc-input-changed="${e=>{user.lastName=e.detail.value,this.onUserChanged(suffix)}}"></or-mwc-input>

                    <!-- password -->
                    <h5>${or_translate_lib.MR.t("password")}</h5>
                    ${isServiceUser?lit.qy`
                        ${(0,when.z)(user.secret,(()=>lit.qy`
                            <or-mwc-input id="password-${suffix}" readonly
                                          class = "validate"
                                          .label="${or_translate_lib.MR.t("secret")}"
                                          .value="${user.secret}"
                                          .type="${or_mwc_input.NZ.TEXT}"></or-mwc-input>
                            <or-mwc-input ?readonly="${!user.id||readonly}"
                                          .label="${or_translate_lib.MR.t("regenerateSecret")}"
                                          .type="${or_mwc_input.NZ.BUTTON}"
                                          @or-mwc-input-changed="${ev=>{this._regenerateSecret(ev,user,"password-"+suffix),this.onUserChanged(suffix)}}"></or-mwc-input>
                        `),(()=>lit.qy`
                            <span>${or_translate_lib.MR.t("generateSecretInfo")}</span>
                        `))}
                    `:lit.qy`
                        <or-mwc-input id="password-${suffix}"
                                      ?readonly="${readonly}"
                                      class = "validate"
                                      .label="${or_translate_lib.MR.t("password")}"
                                      .type="${or_mwc_input.NZ.PASSWORD}" min="1"
                                      @or-mwc-input-changed="${e=>{this._onPasswordChanged(user,suffix),this.onUserChanged(suffix)}}"
                        ></or-mwc-input>
                        <or-mwc-input id="repeatPassword-${suffix}"
                                      helperPersistent ?readonly="${readonly}"
                                      .label="${or_translate_lib.MR.t("repeatPassword")}"
                                      .type="${or_mwc_input.NZ.PASSWORD}" min="1"
                                      @or-mwc-input-changed="${e=>{this._onPasswordChanged(user,suffix),this.onUserChanged(suffix)}}"
                        ></or-mwc-input>
                    `}
                </div>

                <div class="column">
                    <h5>${or_translate_lib.MR.t("settings")}</h5>
                    <!-- enabled -->
                    <or-mwc-input ?readonly="${readonly}"
                                  class="validate"
                                  .label="${or_translate_lib.MR.t("active")}"
                                  .type="${or_mwc_input.NZ.CHECKBOX}"
                                  .value="${user.enabled}"
                                  @or-mwc-input-changed="${e=>{user.enabled=e.detail.value,this.onUserChanged(suffix)}}"
                                  style="height: 56px;"
                    ></or-mwc-input>

                    <!-- realm roles -->
                    <or-mwc-input
                            ?readonly="${readonly}"
                            ?disabled="${isSameUser}"
                            class = "validate"
                            .value="${user.realmRoles&&user.realmRoles.length>0?user.realmRoles.filter((r=>core_lib.J0.realmRoleFilter(r))).map((r=>r.name)):void 0}"
                            .type="${or_mwc_input.NZ.SELECT}" multiple
                            .options="${realmRoleOptions}"
                            .label="${or_translate_lib.MR.t("realm_role_plural")}"
                            @or-mwc-input-changed="${e=>{this.onUserChanged(suffix);const roleNames=e.detail.value,excludedAndCompositeRoles=user.realmRoles.filter((r=>!core_lib.J0.realmRoleFilter(r))),selectedRoles=this._realmRoles.filter((cr=>roleNames.some((name=>cr.name===name)))).map((r=>Object.assign(Object.assign({},r),{assigned:!0})));user.realmRoles=[...excludedAndCompositeRoles,...selectedRoles]}}"></or-mwc-input>

                    <!-- composite client roles -->
                    <or-mwc-input
                            ?readonly="${readonly}"
                            ?disabled="${isSameUser}"
                            class = "validate"
                            .value="${user.roles&&user.roles.length>0?user.roles.filter((r=>r.composite)).map((r=>r.name)):void 0}"
                            .type="${or_mwc_input.NZ.SELECT}" multiple
                            .options="${compositeRoleOptions}"
                            .label="${or_translate_lib.MR.t("manager_role_plural")}"
                            @or-mwc-input-changed="${e=>{const roleNames=e.detail.value;user.roles=this._compositeRoles.filter((cr=>roleNames.some((name=>cr.name===name)))).map((r=>Object.assign(Object.assign({},r),{assigned:!0}))),this._updateUserSelectedRoles(user,suffix),this.onUserChanged(suffix)}}"></or-mwc-input>

                    <!-- roles -->
                    <div style="display:flex;flex-wrap:wrap;margin-bottom: 20px;"
                         id="role-list-${suffix}">
                        ${this._roles.map((r=>lit.qy`
                                <or-mwc-input
                                        ?readonly="${readonly}"
                                        ?disabled="${implicitRoleNames.find((name=>r.name===name))}"
                                        class = "validate"
                                        .value="${!!user.roles.find((userRole=>userRole.name===r.name))||implicitRoleNames.some((implicitRoleName=>implicitRoleName===r.name))}"
                                        .type="${or_mwc_input.NZ.CHECKBOX}"
                                        .label="${r.name}"
                                        style="flex: 0 1 160px; margin: 0; overflow: hidden;"
                                        @or-mwc-input-changed="${e=>{e.detail.value?user.roles.push(Object.assign(Object.assign({},r),{assigned:!0})):user.roles=user.roles.filter((e=>e.name!==r.name)),this.onUserChanged(suffix)}}"></or-mwc-input>
                            `))}
                    </div>

                    <!-- Asset-User links -->
                    <div>
                        <span>${or_translate_lib.MR.t("linkedAssets")}:</span>
                        <or-mwc-input outlined ?disabled="${readonly}" style="margin-left: 4px;"
                                      .type="${or_mwc_input.NZ.BUTTON}"
                                      .label="${or_translate_lib.MR.t("selectRestrictedAssets",{number:user.userAssetLinks.length})}"
                                      @or-mwc-input-changed="${ev=>this._openAssetSelector(ev,user,readonly,suffix)}"></or-mwc-input>
                    </div>
                </div>
            </div>
            <!-- Bottom controls (save/update and delete button) -->
            ${(0,when.z)(!(readonly&&!this._saveUserPromise),(()=>lit.qy`
                <div class="row button-row">

                    ${(0,when.z)(!isSameUser&&user.id,(()=>lit.qy`
                        <or-mwc-input style="margin: 0;" outlined ?disabled="${readonly}"
                                      .label="${or_translate_lib.MR.t("delete")}"
                                      .type="${or_mwc_input.NZ.BUTTON}"
                                      @click="${()=>this._deleteUser(user)}"
                        ></or-mwc-input>
                    `))}
                    <div style="display: flex; align-items: center; gap: 16px; margin: 0 0 0 auto;">
                        <!-- Button disabled until an input has input, and by that a valid check is done -->
                        <or-mwc-input id="savebtn-${suffix}" style="margin: 0;" raised disabled
                                      .label="${or_translate_lib.MR.t(user.id?"save":"create")}"
                                      .type="${or_mwc_input.NZ.BUTTON}"
                                      @or-mwc-input-changed="${e=>{let error;this._saveUserPromise=this._createUpdateUser(user,user.id?"update":"create").then((result=>{result&&((0,or_mwc_snackbar.td)(void 0,"saveUserSucceeded"),this.reset())})).catch((ex=>{(0,rest_lib.F0)(ex)&&(error={status:ex.response.status,text:403==ex.response.status?or_translate_lib.MR.t("userAlreadyExists"):or_translate_lib.MR.t("errorOccurred")})})).finally((()=>{this._saveUserPromise=void 0,error&&this.updateComplete.then((()=>{if((0,or_mwc_snackbar.td)(void 0,error.text),403==error.status){const elem=this.shadowRoot.getElementById("username-"+suffix);elem.setCustomValidity(error.text),elem.shadowRoot.getElementById("elem").reportValidity(),this.onUserChanged(suffix)}}))}))}}">
                        </or-mwc-input>
                    </div>
                </div>
            `))}
        `}reset(){this.userId=void 0,this.creationState=void 0,this._userFilter=this.getDefaultUserFilter(!1),this._serviceUserFilter=this.getDefaultUserFilter(!0)}stateChanged(state){var _a;"users"==state.app.page&&(this.realm=state.app.realm,this.userId=state.app.params&&state.app.params.id?state.app.params.id:void 0,this.creationState=(null===(_a=state.app.params)||void 0===_a?void 0:_a.type)?{userModel:this.getNewUserModel("serviceuser"==state.app.params.type)}:void 0)}_updateRoute(silent=!1){lib.QB.navigate(getUsersRoute(this.userId),{callHooks:!silent,callHandler:!silent})}_updateNewUserRoute(silent=!1){var _a;lib.QB.navigate(function getNewUserRoute(serviceAccount){let route="users";null!=serviceAccount&&(route+="/new/"+(serviceAccount?"serviceuser":"regular"));return route}(null===(_a=this.creationState)||void 0===_a?void 0:_a.userModel.serviceAccount),{callHooks:!silent,callHandler:!silent})}disconnectSession(user,session){this._sessionLoader=core_lib.Ay.rest.api.UserResource.disconnectUserSession(core_lib.Ay.displayRealm,session.ID).then((()=>(0,or_mwc_snackbar.td)(void 0,"userDisconnected"))).catch((e=>{(0,or_mwc_snackbar.td)(void 0,"userDisconnectFailed"),console.error("Failed to disconnect user",e)})).then((()=>this.getSessionLoader(user)))}};page_users_decorate([(0,decorators.MZ)()],PageUsers.prototype,"realm",void 0),page_users_decorate([(0,decorators.MZ)()],PageUsers.prototype,"userId",void 0),page_users_decorate([(0,decorators.MZ)()],PageUsers.prototype,"creationState",void 0),page_users_decorate([(0,decorators.wk)()],PageUsers.prototype,"_users",void 0),page_users_decorate([(0,decorators.wk)()],PageUsers.prototype,"_serviceUsers",void 0),page_users_decorate([(0,decorators.wk)()],PageUsers.prototype,"_userFilter",void 0),page_users_decorate([(0,decorators.wk)()],PageUsers.prototype,"_serviceUserFilter",void 0),page_users_decorate([(0,decorators.wk)()],PageUsers.prototype,"_roles",void 0),page_users_decorate([(0,decorators.wk)()],PageUsers.prototype,"_realmRoles",void 0),page_users_decorate([(0,decorators.wk)()],PageUsers.prototype,"_registrationEmailAsUsername",void 0),page_users_decorate([(0,decorators.wk)()],PageUsers.prototype,"_compositeRoles",void 0),page_users_decorate([(0,decorators.wk)()],PageUsers.prototype,"_loadDataPromise",void 0),page_users_decorate([(0,decorators.wk)()],PageUsers.prototype,"_saveUserPromise",void 0),page_users_decorate([(0,decorators.wk)()],PageUsers.prototype,"_sessionLoader",void 0),PageUsers=page_users_decorate([(0,decorators.EM)("page-users")],PageUsers);var page_realms_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},page_realms_awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))};const page_realms_tableStyle=__webpack_require__("../../../node_modules/@material/data-table/dist/mdc.data-table.css");function pageRealmsProvider(store){return{name:"realms",routes:["realms"],pageCreator:()=>new PageRealms(store)}}let PageRealms=class PageRealms extends lib.YW{static get styles(){return[(0,lit.iz)(page_realms_tableStyle),lit.AH`
        #wrapper {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          overflow: auto;
        }

        #title {
          padding: 0 20px;
          font-size: 18px;
          font-weight: bold;
          width: calc(100% - 40px);
          max-width: 1360px;
          margin: 20px auto;
          align-items: center;
          display: flex;
          color: var(--or-app-color3, ${(0,lit.iz)(core_lib.Iy)});
        }

        #title or-icon {
          margin-right: 10px;
          margin-left: 14px;
        }

        .panel {
          width: calc(100% - 90px);
          padding: 0 20px;
          max-width: 1310px;
          background-color: white;
          border: 1px solid #e5e5e5;
          border-radius: 5px;
          position: relative;
          margin: 0 auto;
          padding: 24px;
        }

        .panel-title {
            text-transform: uppercase;
            font-weight: bolder;
            line-height: 1em;
            color: var(--or-app-color3, ${(0,lit.iz)(core_lib.Iy)});
            margin-bottom: 20px;
            margin-top: 0;
            flex: 0 0 auto;
            letter-spacing: 0.025em;
        }


        #table-roles,
        #table-roles table{
          width: 100%;
          white-space: nowrap;
        }

        .mdc-data-table__row {
          border-top-color: #D3D3D3;
        }
        
        td, th {
          width: 25%;
          border: none;
        }
  
        td.large, th.large {
          width: 50%
        }

        .realm-container {
          flex-direction: row;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.25s ease-out;
          padding-left: 16px;
        }

        or-mwc-input {
            margin-bottom: 20px;
            margin-right: 16px;
        }

        or-icon {
            vertical-align: middle;
            --or-icon-width: 20px;
            --or-icon-height: 20px;
            margin-right: 2px;
            margin-left: -5px;
        }

        .row {
            display: flex;
            flex-direction: row;
            margin: 10px 0;
            flex: 1 1 0;
        }

        .column {
            display: flex;
            flex-direction: column;
            margin: 0px;
            flex: 1 1 0;
            
        }

        .mdc-data-table__header-cell {
            font-weight: bold;
            color: ${(0,lit.iz)(core_lib.Iy)};
        }

        .mdc-data-table__header-cell:first-child {
            padding-left: 36px;
        }

        .mdc-data-table__row {
            cursor: pointer;
        }
        
        .padded-cell {
          overflow-wrap: break-word;
          word-wrap: break-word
        }

        .realm-row td {
          padding: 0;
        }

        .realm-row {
          max-width: 0px;
        }

        .realm-row.expanded .realm-container {
          max-height: 1000px;
          max-width: none;
          transition: max-height 1s ease-in;
        }
        
        .button {
            cursor: pointer;
            display: flex;
            flex-direction: row;
            align-content: center;
            padding: 16px;
            align-items: center;
            font-size: 14px;
            text-transform: uppercase;
            color: var(--or-app-color4);
        }

        .button or-icon {
          --or-icon-fill: var(--or-app-color4);
        }

        @media screen and (max-width: 1024px){
          .row {
            display: block;
            flex-direction: column;
          }
        }

        @media screen and (max-width: 768px){
          #title {
            padding: 0;
            width: 100%;
          }
          .panel {
            border-left: 0px;
            border-right: 0px;
            width: calc(100% - 48px);
            border-radius: 0;
          }
          .hide-mobile {
            display: none;
          }
          td, th {
            width: 50%
          }
        }
      `]}get name(){return"realm_plural"}constructor(store){super(store),this._realms=[],this._realmSelector=state=>state.app.realm||core_lib.Ay.displayRealm,this.getRealmState=(0,es.Mz)([this._realmSelector],(realm=>page_realms_awaiter(this,void 0,void 0,(function*(){this.requestUpdate()})))),this._getRealms()}shouldUpdate(_changedProperties){return _changedProperties.has("realm")&&this._getRealms(),super.shouldUpdate(_changedProperties)}render(){if(!core_lib.Ay.authenticated)return lit.qy`
        <or-translate value="notAuthenticated"></or-translate>
      `;if(!core_lib.Ay.isKeycloak())return lit.qy`
        <or-translate value="notSupported"></or-translate>
      `;const readonly=!core_lib.Ay.hasRole("write:user");return lit.qy`
         <div id="wrapper">
                <div id="title">
                <or-icon icon="domain"></or-icon>${or_translate_lib.MR.t("realm_plural")}
                </div>
                <div class="panel">
                <p class="panel-title">${or_translate_lib.MR.t("realm_plural")}</p>
                  <div id="table-roles" class="mdc-data-table">
                  <table class="mdc-data-table__table" aria-label="realm list" >
                      <thead>
                          <tr class="mdc-data-table__header-row">
                              <th class="mdc-data-table__header-cell" role="columnheader" scope="col"><or-translate value="name"></or-translate></th>
                              <th class="mdc-data-table__header-cell" role="columnheader" scope="col"><or-translate value="displayName"></or-translate></th>
                              <th class="mdc-data-table__header-cell hide-mobile large" role="columnheader" scope="col"><or-translate value="status"></or-translate></th>
                          </tr>
                      </thead>
                      <tbody class="mdc-data-table__content">
                      ${this._realms.map(((realm,index)=>lit.qy`
                          <tr id="mdc-data-table-row-${index}" class="mdc-data-table__row" @click="${ev=>this.expanderToggle(ev,index)}">
                            <td  class="padded-cell mdc-data-table__cell"
                            >
                              <or-icon id="mdc-data-table-icon-${index}" icon="chevron-right"></or-icon>
                              <span>${realm.name}</span>
                            </td>
                            <td class="padded-cell mdc-data-table__cell">
                              ${realm.displayName}
                            </td>
                            <td class="padded-cell hide-mobile mdc-data-table__cell large">
                            ${realm.enabled?"Enabled":"Disabled"}

                            </td>
                          </tr>
                          <tr id="realm-row-${index}" class="realm-row${realm.id?"":" expanded"}">
                            <td colspan="100%">
                              <div class="realm-container">
                                 
                                  <div class="row">
                                    <div class="column">
                                      <or-mwc-input ?readonly="${realm.id}" .label="${or_translate_lib.MR.t("realm")}" .type="${or_mwc_input.NZ.TEXT}" min="1" required .value="${realm.name}" @or-mwc-input-changed="${e=>realm.name=e.detail.value}"></or-mwc-input>
                                      <or-mwc-input ?readonly="${readonly}" .label="${or_translate_lib.MR.t("loginTheme",core_lib.J0.camelCaseToSentenceCase("loginTheme"))}" .type="${or_mwc_input.NZ.TEXT}" .value="${realm.loginTheme}" @or-mwc-input-changed="${e=>realm.loginTheme=e.detail.value}"></or-mwc-input>
                                      <or-mwc-input ?readonly="${readonly}" .label="${or_translate_lib.MR.t("resetPasswordAllowed")}" .type="${or_mwc_input.NZ.SWITCH}" min="1" .value="${realm.resetPasswordAllowed}" @or-mwc-input-changed="${e=>realm.resetPasswordAllowed=e.detail.value}"></or-mwc-input>
                                      <or-mwc-input ?readonly="${readonly}" .label="${or_translate_lib.MR.t("enabled")}" .type="${or_mwc_input.NZ.SWITCH}" min="1" .value="${realm.enabled}" @or-mwc-input-changed="${e=>realm.enabled=e.detail.value}"></or-mwc-input>
                                      <or-mwc-input ?readonly="${readonly}" .label="${or_translate_lib.MR.t("rememberMe")}" .type="${or_mwc_input.NZ.SWITCH}" min="1" .value="${realm.rememberMe}" @or-mwc-input-changed="${e=>realm.rememberMe=e.detail.value}"></or-mwc-input>
                                    </div>
                                    <div class="column">
                                      <or-mwc-input .label="${or_translate_lib.MR.t("displayName")}" .type="${or_mwc_input.NZ.TEXT}" min="1" required .value="${realm.displayName}" @or-mwc-input-changed="${e=>realm.displayName=e.detail.value}"></or-mwc-input>
                                      <or-mwc-input ?readonly="${readonly}" .label="${or_translate_lib.MR.t("emailTheme",core_lib.J0.camelCaseToSentenceCase("emailTheme"))}" .type="${or_mwc_input.NZ.TEXT}" .value="${realm.emailTheme}" @or-mwc-input-changed="${e=>realm.emailTheme=e.detail.value}"></or-mwc-input>
                                    </div>
                                  </div>

                                  <div class="row" style="margin-bottom: 0;">
                                  ${realm.id&&!readonly?lit.qy`
                                      ${"master"!==realm.name&&core_lib.Ay.isSuperUser()?lit.qy`
                                        <or-mwc-input label="delete" .type="${or_mwc_input.NZ.BUTTON}" .disabled="${core_lib.Ay.displayRealm===realm.name}" @or-mwc-input-changed="${()=>this._deleteRealm(realm)}"></or-mwc-input>  
                                      `:""}
                                      <or-mwc-input style="margin-left: auto;" label="save" .type="${or_mwc_input.NZ.BUTTON}" @or-mwc-input-changed="${()=>this._updateRealm(realm)}"></or-mwc-input>   
                                  `:readonly?"":lit.qy`
                                    <or-mwc-input label="cancel" .type="${or_mwc_input.NZ.BUTTON}" @or-mwc-input-changed="${()=>{this._realms.splice(-1,1),this._realms=[...this._realms]}}"></or-mwc-input>            
                                    <or-mwc-input style="margin-left: auto;" label="create" .type="${or_mwc_input.NZ.BUTTON}" @or-mwc-input-changed="${()=>this._createRealm(realm)}"></or-mwc-input>   
                                  `}    
                                  </div>
                              </div>
                            </td>
                          </tr>
                        `))}
                        ${this._realms.length>0&&this._realms[this._realms.length-1].id&&!readonly?lit.qy`
                        <tr class="mdc-data-table__row">
                          <td colspan="100%">
                            <a class="button" @click="${()=>this._realms=[...this._realms,{displayName:"",enabled:!0}]}"><or-icon icon="plus"></or-icon>${or_translate_lib.MR.t("add")} ${or_translate_lib.MR.t("realm")}</a>
                          </td>
                        </tr>
                      `:""}
                      </tbody>
                  </table>
                </div>

            </div>
            </div>
           
        `}stateChanged(state){this.getRealmState(state)}_getRealms(){return page_realms_awaiter(this,void 0,void 0,(function*(){const response=yield core_lib.Ay.rest.api.RealmResource.getAll();return this._realms=response.data,this._realms}))}_updateRealm(realm){return page_realms_awaiter(this,void 0,void 0,(function*(){204===(yield core_lib.Ay.rest.api.RealmResource.update(realm.name,realm)).status?(0,or_mwc_snackbar.td)(void 0,"saveRealmSucceeded"):(0,or_mwc_snackbar.td)(void 0,"saveRealmFailed"),window.location.reload()}))}_createRealm(realm){return page_realms_awaiter(this,void 0,void 0,(function*(){yield core_lib.Ay.rest.api.RealmResource.create(realm).then((response=>{204===response.status?(0,or_mwc_snackbar.td)(void 0,"saveRealmSucceeded"):(0,or_mwc_snackbar.td)(void 0,"saveRealmFailed"),window.location.reload()}))}))}_deleteRealm(realm){let confirmedName="",okBtnRef=(0,ref._)();const dialogContent=lit.qy`<div>
          <p style="text-align: justify; font-weight: bold;">${or_translate_lib.MR.t("realmDeleteConfirm",{realmName:realm.name})}</p>
          <or-mwc-input .type="${or_mwc_input.NZ.TEXT}" @input=${ev=>{return value=ev.target.nativeValue,confirmedName=value,void(okBtnRef.value&&(okBtnRef.value.disabled=confirmedName!==realm.name));var value}} .label="${or_translate_lib.MR.t("realm")}"></or-mwc-input>
      </div>`,dialogActions=[{actionName:"ok",content:lit.qy`<or-mwc-input .type="${or_mwc_input.NZ.BUTTON}" ${(0,ref.K)(okBtnRef)} @click="${ev=>{ev.currentTarget.disabled&&ev.stopPropagation()}}" disabled label="ok"></or-mwc-input>`,action:dialog=>page_realms_awaiter(this,void 0,void 0,(function*(){try{yield core_lib.Ay.rest.api.RealmResource.delete(realm.name),this._realms=this._realms.filter((r=>r!==realm))}catch(e){(0,or_mwc_snackbar.td)(void 0,"realmDeleteFailed","dismiss")}}))},{default:!0,actionName:"cancel",content:"cancel"}];(0,or_mwc_dialog.ui)((new or_mwc_dialog.X$).setContent(dialogContent).setActions(dialogActions).setStyles(lit.qy`
                        <style>
                            .mdc-dialog__surface {
                                display: flex;
                                width: 400px;
                                max-width: 100%;
                                overflow: visible;
                                overflow-x: visible !important;
                                overflow-y: visible !important;
                            }
                            #dialog-content {
                                text-align: center;
                                flex: 1;
                                overflow: visible;
                                min-height: 0;
                            }
                            or-asset-tree {
                                height: 100%;
                            }
                        </style>
                    `).setDismissAction(null))}_doDelete(realm){return page_realms_awaiter(this,void 0,void 0,(function*(){yield core_lib.Ay.rest.api.RealmResource.delete(realm.realm),this._realms=[...this._realms.filter((u=>u.id!=realm.id))]}))}expanderToggle(ev,index){const metaRow=this.shadowRoot.getElementById("realm-row-"+index),expanderIcon=this.shadowRoot.getElementById("mdc-data-table-icon-"+index);metaRow.classList.contains("expanded")?(metaRow.classList.remove("expanded"),expanderIcon.icon="chevron-right"):(metaRow.classList.add("expanded"),expanderIcon.icon="chevron-down")}};function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}page_realms_decorate([(0,decorators.MZ)()],PageRealms.prototype,"_realms",void 0),PageRealms=page_realms_decorate([(0,decorators.EM)("page-realms")],PageRealms);var or_app_helpers_awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))},rootReducer=(0,redux.HY)({app:lib.cX,map:pageMapReducer,assets:pageAssetsReducer}),DefaultStore=(0,redux_toolkit_esm.U1)({reducer:rootReducer});function getManagerPages(){var store=arguments.length>0&&void 0!==arguments[0]?arguments[0]:DefaultStore;return[pageAssetsProvider(store),pageMapProvider(store),pageInsightsProvider(store),pageRulesProvider(store),pageRolesProvider(store),pageUsersProvider(store),pageRealmsProvider(store)]}function getManagerHeaderSecondaryMenu(orApp){return{language:headerItemLanguage(orApp),users:{icon:"account-group",value:"users",href:"users",text:"user_plural",roles:["read:admin","write:admin"]},roles:{icon:"account-box-multiple",value:"roles",href:"roles",text:"role_plural",roles:["read:admin","write:admin"]},realms:{icon:"domain",value:"realms",href:"realms",text:"realm_plural",roles:()=>core_lib.m8.isSuperUser()},logout:headerItemLogout(orApp)}}function getManagerHeaderConfig(orApp){return{mainMenu:Object.values({map:{icon:"map",href:getMapRoute(),text:"map"},assets:{icon:"rhombus-split",href:"assets",text:"asset_plural"},rules:{icon:"state-machine",href:"rules",text:"rule_plural",hideMobile:!0,roles:()=>!core_lib.m8.hasRealmRole("restricted_user")},insights:{icon:"chart-areaspline",href:"insights",text:"insights"}}),secondaryMenu:Object.values(getManagerHeaderSecondaryMenu(orApp))}}function getManagerRealmConfig(orApp){return{appTitle:"OpenRemote Manager",header:getManagerHeaderConfig(orApp)}}function getManagerAppConfig(orApp){return{pages:getManagerPages(arguments.length>1&&void 0!==arguments[1]?arguments[1]:DefaultStore),superUserHeader:getManagerHeaderConfig(orApp),realms:{default:getManagerRealmConfig(orApp)}}}function loadOrApp(args,getConfig){var getStore=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return DefaultStore};return or_app_helpers_awaiter(this,void 0,void 0,_regeneratorRuntime().mark((function _callee(){var app;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(console.debug("Loading OrApp..."),app=Object.assign(new lib.pX(getStore()),args),!getConfig){_context.next=9;break}return _context.t0=Object,_context.t1=Object.assign({},app.appConfig),_context.next=7,null==getConfig?void 0:getConfig(app);case 7:_context.t2=_context.sent,app.appConfig=_context.t0.assign.call(_context.t0,_context.t1,_context.t2);case 9:return console.debug("Waiting for OrApp update complete..."),_context.next=12,new Promise((function(r){return setTimeout(r,1e3)}));case 12:return console.debug("OrApp loaded"),_context.abrupt("return",app);case 14:case"end":return _context.stop()}}),_callee)})))}function loadOrMobileApp(args,getConfig){var getStore=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return DefaultStore};return or_app_helpers_awaiter(this,void 0,void 0,_regeneratorRuntime().mark((function _callee2(){var app;return _regeneratorRuntime().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(console.debug("Loading OrMobileApp..."),app=Object.assign(new or_mobile_app_lib.xS(getStore()),args),!getConfig){_context2.next=9;break}return _context2.t0=Object,_context2.t1=Object.assign({},app.appConfig),_context2.next=7,null==getConfig?void 0:getConfig(app);case 7:_context2.t2=_context2.sent,app.appConfig=_context2.t0.assign.call(_context2.t0,_context2.t1,_context2.t2);case 9:return console.debug("Waiting for OrMobileApp update complete..."),_context2.next=12,new Promise((function(r){return setTimeout(r,1e3)}));case 12:return console.debug("OrMobileApp loaded"),_context2.abrupt("return",app);case 14:case"end":return _context2.stop()}}),_callee2)})))}},"../../component/or-app/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{pX:()=>OrApp,YW:()=>Page,cX:()=>appReducer,QB:()=>router,b_:()=>updateRealm});var lit=__webpack_require__("../../../node_modules/lit/index.js"),decorators=__webpack_require__("../../../node_modules/lit/decorators.js"),i18next=__webpack_require__("../../../node_modules/i18next/dist/esm/i18next.js"),lib=__webpack_require__("../../component/or-translate/lib/index.js"),navigo_min=__webpack_require__("../../../node_modules/navigo/lib/navigo.min.js");const router=new(__webpack_require__.n(navigo_min)())("/",{hash:!0});class Page extends((0,lib.Tl)(i18next.Ay)(lit.WF)){constructor(t){super(),this._store=t}connectedCallback(){super.connectedCallback(),this._storeUnsubscribe=this._store.subscribe((()=>this.stateChanged(this._store.getState()))),this.stateChanged(this._store.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback()}getState(){return this._store.getState()}}var or_mwc_menu=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-menu.js"),or_mwc_snackbar=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-snackbar.js"),core_lib=__webpack_require__("../../component/core/lib/index.js"),or_mwc_dialog=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-dialog.js"),__decorate=(__webpack_require__("../../component/or-icon/lib/index.js"),function(e,r,o,t){var a,i=arguments.length,n=i<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,r,o,t);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(i<3?a(n):i>3?a(r,o,n):a(r,o))||n);return i>3&&n&&Object.defineProperty(r,o,n),n});function hasRequiredRole(e){return!e.roles||(Array.isArray(e.roles)?e.roles.some((e=>core_lib.Ay.hasRole(e))):core_lib.J0.isFunction(e.roles)?e.roles():Object.entries(e.roles).some((([e,r])=>r.some((r=>core_lib.Ay.hasRole(r,e))))))}let OrHeader=class extends lit.WF{constructor(){super(...arguments),this._drawerOpened=!1}static get styles(){return lit.AH`
        
            :host {
                --internal-or-header-color: var(--or-header-color, var(--or-app-color1, ${(0,lit.iz)(core_lib.WO)}));    
                --internal-or-header-selected-color: var(--or-header-selected-color, var(--or-app-color4, ${(0,lit.iz)(core_lib.BB)}));    
                --internal-or-header-text-color: var(--or-header-text-color, var(--or-app-color3, inherit));
                --internal-or-header-height: var(--or-header-height, ${(0,lit.iz)(core_lib.Kk)});
                --internal-or-header-logo-margin: var(--or-header-logo-margin, 0 40px 0 0);
                --internal-or-header-logo-height: var(--or-header-logo-height, var(--internal-or-header-height, ${(0,lit.iz)(core_lib.Kk)}));
                --internal-or-header-item-size: var(--or-header-item-size, calc(${(0,lit.iz)(core_lib.Kk)} - 20px));
                --internal-or-header-drawer-color: var(--or-header-drawer-color, var(--or-app-color2, ${(0,lit.iz)(core_lib.PR)}));
                --internal-or-header-drawer-text-color: var(--or-header-drawer-text-color, var(--or-app-color3, ${(0,lit.iz)(core_lib.Iy)}));
                --internal-or-header-drawer-item-size: var(--or-header-drawer-item-size, 30px);
                --internal-or-header-drawer-separator-color: var(--or-header-drawer-separator-color, var(--or-app-color5, ${(0,lit.iz)(core_lib.Id)}));
                
                display: block;
                z-index: 4;
            }
              
            #toolbar-top {
                display: flex;
                padding: 0;
            }
            
            #logo-mobile {
                margin: 8px;
                height: calc(var(--internal-or-header-logo-height) - 16px);
                display: block;
            }
    
            #logo {
                display: none;
            }
                                            
            #header {
                opacity: 1;
                width: 100%;
                height: var(--internal-or-header-height);
                text-align: center;
                background-color: var(--internal-or-header-color);
                color: var(--internal-or-header-text-color);
                --or-icon-fill: var(--internal-or-header-text-color);
                --or-icon-height: calc(var(--internal-or-header-item-size) - 12px);
                --or-icon-width: calc(var(--internal-or-header-item-size) - 12px);
                z-index: 9999999;
            }
    
            .shadow {
                -webkit-box-shadow: ${(0,lit.iz)(core_lib.w5)};
                -moz-box-shadow: ${(0,lit.iz)(core_lib.w5)};
                box-shadow: ${(0,lit.iz)(core_lib.w5)};
            }
                    
            #drawer {
                width: 100%;
                position: absolute;
                top: var(--internal-or-header-height);
                max-height: 0;
                height: calc(100% - var(--internal-or-header-height));
                transition: max-height 0.25s ease-out;
                background: var(--internal-or-header-drawer-color);
                color: var(--internal-or-header-drawer-text-color);
                --or-icon-fill: var(--internal-or-header-drawer-text-color);
                --or-icon-height: calc(var(--internal-or-header-drawer-item-size) - 10px);
                --or-icon-width: calc(var(--internal-or-header-drawer-item-size) - 10px);
                overflow: auto;
            }
            
            #drawer[opened] {
                max-height: 10000px;
                transition: max-height 0.75s ease-in;
            }
                            
            #drawer > div {
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                padding: 10px 0px;
                position: relative;
            }
              
            .menu-btn {
                background: none;
                border: none;
                cursor: pointer;
                padding: 0 16px;
                height: 100%;
            }
            
            #menu-btn-mobile {
                display: flex;
                margin-left: auto;
                --or-icon-height: calc(var(--internal-or-header-item-size) - 8px);
                --or-icon-width: calc(var(--internal-or-header-item-size) - 8px);
            }

            #menu-btn-mobile #realm-picker > span{
                max-width: 70px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
    
            #menu-btn-desktop {
                display: none;
            }
            
            #desktop-right {
                margin-left: auto;
                padding-right: 10px;
                display: none;
            }
    
            .mobile-bottom-border {
                border-top: 1px solid var(--internal-or-header-drawer-separator-color);
                margin-top: 16px;
                padding-top: 8px;
            }
          
            .menu-item {
                opacity: 0.7;
                cursor: pointer;
                text-decoration: none !important;         
                color: inherit;       
                padding: 0 20px;
                font-size: 14px;       
            }        
            
            .menu-item:hover,
            .menu-item[selected] {
                opacity: 1;
            }                
            #desktop-left .menu-item or-icon {
                margin-right: 10px;
            }
            #desktop-left .menu-item  {
                display: none;
                line-height: calc(var(--internal-or-header-height) - 4px);
            }
            
            #desktop-right .menu-item  {
                line-height: var(--internal-or-header-height);
            }
            
            #drawer .menu-item  {
                display: block;
                line-height: var(--internal-or-header-drawer-item-size);
                margin: 6px 0;
                padding: 8px 16px;
            }
            
            #drawer .menu-item  or-icon {
                margin: 0 10px;
            }

            #desktop-left .menu-item[selected] {
                display: inline-block;
                line-height: var(--internal-or-header-height);
            }
    
            or-mwc-menu {
                margin-right: 10px;
                display: block;
            }
            
            .or-language-container {
                display: flex;
                height: 50px;
                align-items: center;
            }
          
            #realm-picker {
                position: relative;
                display: flex;
                height: 50px;
                align-items: center;
                cursor: pointer;
                margin-left: 10px;
            }
            
            #realm-picker > span {
                margin-right: 2px;
            }
          
            /* Wide layout: when the viewport width is bigger than 768px, layout
            changes to a wide layout. */
            @media (min-width: 768px) {
                #menu-btn-desktop {
                    display: block;
                }          
    
                #menu-btn-mobile {
                    display: none;
                }
    
                #drawer {
                    display: none;
                }
                
                #desktop-right {
                    display: flex;
                }
                
                #desktop-left .menu-item {
                    display: inline-block;
                }
                
                #desktop-left .menu-item or-icon {
                    display: none;
                }
    
                #desktop-left .menu-item[selected] {                
                    border-bottom: 4px solid var(--internal-or-header-selected-color);
                    line-height: calc(var(--internal-or-header-height) - 4px);
                }

                #logo {
                    margin: var(--internal-or-header-logo-margin);
                    height: var(--internal-or-header-logo-height);
                    display: block;
                }
    
                #logo-mobile {
                    display: none;
                }
                
                #desktop-left ::slotted(*) {
                    display: inline-block;
                }
    
                #desktop-left ::slotted(*[selected]) {                
                    border-bottom: 4px solid var(--internal-or-header-selected-color);
                    line-height: calc(var(--internal-or-header-height) - 4px);
                }
            }
            
            @media (min-width: 1024px) {
               
    
                #desktop-left .menu-item or-icon{
                    display: inline-block;
                }
            }
    `}_onRealmSelect(e){this.store.dispatch(updateRealm(e))}shouldUpdate(e){return e.has("config")&&(this.activeMenu=function getCurrentMenuItemRef(e){return window.location.hash.substr(2).split("/")[0]||e}(this.config&&this.config.mainMenu&&this.config.mainMenu.length>0?this.config.mainMenu[0].href:void 0)),super.shouldUpdate(e)}render(){if(!this.config)return lit.qy``;const e=this.config.mainMenu,r=this.config.secondaryMenu;return lit.qy`
           <!-- Header -->
            <div id="header" class="shadow">
                <div id="toolbar-top">
                    <div><img id="logo" src="${this.logo}" /><img id="logo-mobile" src="${this.logoMobile}" /></div>

                    <!-- This gets hidden on a small screen-->
                    <nav id="toolbar-list">
                        <div id="desktop-left">
                            ${e?e.filter(hasRequiredRole).map((e=>lit.qy`
                                    <a class="menu-item" @click="${r=>this._onHeaderItemSelect(e)}" ?selected="${this.activeMenu===e.href}"><or-icon icon="${e.icon}"></or-icon><or-translate value="${e.text}"></or-translate></a>
                                `)):""}
                        </div>
                    </nav>
                    <div id="desktop-right">
                        ${this._getRealmMenu((e=>this._onRealmSelect(e)))}
                        ${r?(0,or_mwc_menu.Xj)(lit.qy`
                            <button id="menu-btn-desktop" class="menu-btn" title="Menu"><or-icon icon="dots-vertical"></or-icon></button>
                        `,function getHeaderMenuItems(e){return e.filter(hasRequiredRole).map((e=>({text:e.text,value:e.value?e.value:"",icon:e.icon,href:e.href})))}(r),void 0,(e=>this._onSecondaryMenuSelect(e))):""}
                    </div>
                    <div id="menu-btn-mobile">
                        ${this._getRealmMenu((e=>this._onRealmSelect(e)))}
                        <button id="menu-btn" class="menu-btn" title="Menu" @click="${this._toggleDrawer}"><or-icon icon="${this._drawerOpened?"close":"menu"}"></or-icon></button>
                    </div>
                </div>
            </div>
            <div id="drawer" ?opened="${this._drawerOpened}" @click="${this._closeDrawer}">
                <div>                    
                    <div id="mobile-top">
                        <nav id="drawer-list">
                            ${e?e.filter((e=>!e.hideMobile&&hasRequiredRole(e))).map((e=>lit.qy`
                                    <a class="menu-item" @click="${r=>this._onHeaderItemSelect(e)}" ?selected="${this.activeMenu===e.href}"><or-icon icon="${e.icon}"></or-icon><or-translate value="${e.text}"></or-translate></a>
                                `)):""}
                        </nav>
                    </div>
                    
                    ${r?lit.qy`
                        <div id="mobile-bottom" class="${e.length>0?"mobile-bottom-border":""}">
                            ${r.filter((e=>!e.hideMobile&&hasRequiredRole(e))).map((e=>lit.qy`
                                    <a class="menu-item" @click="${r=>this._onHeaderItemSelect(e)}" ?selected="${this.activeMenu===e.href}"><or-icon icon="${e.icon}"></or-icon><or-translate value="${e.text}"></or-translate></a>
                                `))}
                        </div>`:""}
                </div>
            </div>
        `}_getRealmMenu(e){const r=this.realms.find((e=>e.name===this.realm));let o=lit.qy`
            <div id="realm-picker">
                ${this.realms.length>1?lit.qy`
                    <span>${r?r.displayName:""}</span>
                    <or-icon icon="chevron-down"></or-icon>
                `:""}
            </div>
        `;if(core_lib.Ay.isSuperUser()){const t=this.realms.map((e=>({text:e.displayName,value:e.name})));o=lit.qy`
                ${(0,or_mwc_menu.Xj)(o,t,r?r.name:void 0,(r=>e(r)))}
            `}return o}_onSecondaryMenuSelect(e){const r=this.config.secondaryMenu.find((r=>r.value===e));r&&this._onHeaderItemSelect(r)}_onHeaderItemSelect(e){e.action?e.action():e.href&&(e.absolute?window.location.href=e.href:router.navigate(e.href))}_closeDrawer(){this._drawerOpened=!1}_toggleDrawer(){this._drawerOpened=!this._drawerOpened}};__decorate([(0,decorators.MZ)({type:Array})],OrHeader.prototype,"realms",void 0),__decorate([(0,decorators.MZ)({type:String})],OrHeader.prototype,"realm",void 0),__decorate([(0,decorators.MZ)({type:Object})],OrHeader.prototype,"store",void 0),__decorate([(0,decorators.MZ)({type:String})],OrHeader.prototype,"logo",void 0),__decorate([(0,decorators.MZ)({type:String})],OrHeader.prototype,"logoMobile",void 0),__decorate([(0,decorators.MZ)({type:Object})],OrHeader.prototype,"config",void 0),__decorate([(0,decorators.P)("div[id=mobile-bottom]")],OrHeader.prototype,"_mobileBottomDiv",void 0),__decorate([(0,decorators.MZ)()],OrHeader.prototype,"activeMenu",void 0),__decorate([(0,decorators.wk)()],OrHeader.prototype,"_drawerOpened",void 0),OrHeader=__decorate([(0,decorators.EM)("or-header")],OrHeader);var metadata=__webpack_require__("../../../node_modules/pwa-helpers/metadata.js");const appSlice=(0,__webpack_require__("../../../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js").Z0)({name:"app",initialState:{page:"",params:null,offline:!1,visible:!0,resolved:!1,drawerOpened:!1,scrollTop:0,realm:void 0},reducers:{updatePage:(e,a)=>Object.assign(Object.assign({},e),{page:"string"==typeof a.payload?a.payload:a.payload.page,params:"string"==typeof a.payload?null:a.payload.params}),updateDrawer:(e,a)=>Object.assign(Object.assign({},e),{drawerOpened:a.payload}),scrollToTop:(e,a)=>Object.assign(Object.assign({},e),{scrollTop:a.payload}),updateRealm:(e,a)=>Object.assign(Object.assign({},e),{realm:a.payload}),setOffline:(e,a)=>Object.assign(Object.assign({},e),{offline:a.payload}),setVisibility:(e,a)=>Object.assign(Object.assign({},e),{visible:a.payload})}}),{updatePage,updateDrawer,scrollToTop,updateRealm,setOffline,setVisibility}=appSlice.actions,appReducer=appSlice.reducer;var or_mwc_input=__webpack_require__("../../component/or-mwc-components/lib/or-mwc-input.js"),page_offline_decorate=function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var f=e.length-1;f>=0;f--)(o=e[f])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a};const styling=lit.AH`
    #offline-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        flex-direction: column;
        gap: 32px;
        padding: 0 32px;
    }

    #offline-icon {
        font-size: 64px;
    }

    #offline-text-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 16px;
    }

    #offline-title {
        font-size: 24px;
        font-weight: bold;
    }
    
    #reconnecting-text:after {
        display: inline-block;
        animation: dotty steps(2,end) 2s infinite;
        content: '';
    }

    @keyframes dotty {
        0%   { content: ''; }
        25%  { content: '.'; }
        50%  { content: '..'; }
        75%  { content: '...'; }
        100% { content: ''; }
    }
`;let PageOffline=class extends Page{static get styles(){return[styling]}stateChanged(e){}render(){return lit.qy`
            <div id="offline-wrapper">
                <or-icon id="offline-icon" icon="web-off"></or-icon>
                <div id="offline-text-container">
                    <span id="offline-title""><or-translate value="youAreOffline"></or-translate></span>
                    <span id="offline-subtitle"><or-translate value="checkConnection"></or-translate></span>
                </div>
                <div>
                    <span><or-translate id="reconnecting-text" value="reconnecting"></or-translate></span>
                </div>
            </div>
        `}get name(){return"offline"}};PageOffline=page_offline_decorate([(0,decorators.EM)("page-offline")],PageOffline);var lib_decorate=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a},__awaiter=function(e,t,i,o){return new(i||(i=Promise))((function(n,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,s)}l((o=o.apply(e,t||[])).next())}))};const DefaultLogo=__webpack_require__("../../component/or-app/images/logo.svg"),DefaultMobileLogo=__webpack_require__("../../component/or-app/images/logo-mobile.svg"),DefaultFavIcon=__webpack_require__("../../component/or-app/images/favicon.ico");const DEFAULT_MANAGER_CONFIG={managerUrl:"http://localhost:8080",keycloakUrl:void 0,auth:"KEYCLOAK",autoLogin:!0,realm:void 0,consoleAutoEnable:!0,loadTranslations:["or"]};let OrApp=class extends lit.WF{static get styles(){return[lit.AH`
            :host {
                --or-app-color2: ${(0,lit.iz)(core_lib.PR)};
                --or-app-color3: ${(0,lit.iz)(core_lib.Iy)};
                --or-app-color4: ${(0,lit.iz)(core_lib.BB)};
                --or-console-primary-color: #4D9D2A;
                color: ${(0,lit.iz)(core_lib.Iy)};
                fill: ${(0,lit.iz)(core_lib.Iy)};
                font-size: 14px;

                height: 100vh;
                display: flex;
                flex: 1;
                flex-direction: column;
            }
                
            .main-content {
                display: flex;
                flex: 1;
                box-sizing: border-box;
                background-color: var(--or-app-color2);
                overflow: auto;
            }
            
            .no-scroll {
                overflow: hidden;
            }

            main > * {
                display: flex;
                flex: 1;
                position: relative;
            }
    
            .desktop-hidden {
                display: none !important;
            }
            
            @media only screen and (max-width: 780px) {
                .desktop-hidden {
                    display: inline-block !important;
                }
            }
            
            /* HEADER STYLES */
            or-header a > or-icon {
                margin-right: 10px;
            }
        `]}constructor(e){super(),this.OFFLINE_PAGE_ID="offline-page",this._initialised=!1,this._offline=!1,this._showOfflineFallback=!1,this._store=e,or_mwc_dialog.X$.DialogHostElement=this,or_mwc_snackbar.C3.DialogHostElement=this}getState(){return this._store.getState()}onVisibilityChange(e){"visible"===document.visibilityState?this._onEvent(core_lib.m0.CONSOLE_VISIBLE):this._onEvent(core_lib.m0.CONSOLE_HIDDEN)}connectedCallback(){super.connectedCallback(),this._storeUnsubscribe=this._store.subscribe((()=>this.stateChanged(this.getState()))),this._onVisibilityBind=this.onVisibilityChange.bind(this),document.addEventListener("visibilitychange",this._onVisibilityBind),this.stateChanged(this.getState())}disconnectedCallback(){this._storeUnsubscribe(),this._onVisibilityBind&&document.removeEventListener("visibilityChange",this._onVisibilityBind),this._onEventBind&&core_lib.Ay.removeListener(this._onEventBind),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e);const t=this.managerConfig?Object.assign(Object.assign({},DEFAULT_MANAGER_CONFIG),this.managerConfig):DEFAULT_MANAGER_CONFIG;t.realm||(t.realm=core_lib.J0.getQueryParameter("realm")),t.defaultLanguage||(t.defaultLanguage=core_lib.J0.getBrowserLanguage()),t.skipFallbackToBasicAuth=!0,t.basicLoginProvider=(e,t)=>this.doBasicLogin(e,t),console.info("Initialising the manager"),core_lib.Ay.init(t).then((e=>__awaiter(this,void 0,void 0,(function*(){if(e||core_lib.Ay.error!==core_lib.IM.AUTH_FAILED||t.auth&&"KEYCLOAK"!==t.auth||(this.doAppConfigInit(),t.auth="BASIC",e=yield core_lib.Ay.init(t)),e){if(this.doAppConfigInit(),!this.appConfig)return(0,or_mwc_dialog._F)("appError.noConfig",document.body),void console.error("No AppConfig supplied");if(!this._config)return(0,or_mwc_dialog._F)("appError.noConfig",document.body),void console.error("No default AppConfig or realm specific config provided so cannot render");if(!this._store)return(0,or_mwc_dialog._F)("appError.noReduxStore",document.body),void console.error("No Redux store supplied");if(!this.appConfig.pages||0===Object.keys(this.appConfig.pages).length)return(0,or_mwc_dialog._F)("appError.noPages",document.body),void console.error("No page providers");const e=yield core_lib.Ay.rest.api.RealmResource.getAccessible();let t;this._realms=e.data,core_lib.Ay.isSuperUser()&&(t=window.sessionStorage.getItem("realm"),t&&!this._realms.some((e=>e.name===t))&&(t=void 0)),this._store.dispatch(updateRealm(t||core_lib.Ay.getRealm()||"master")),this._initialised=!0,this._onEventBind=this._onEvent.bind(this),core_lib.Ay.addListener(this._onEventBind);const i=e=>{this._activeMenu=e};router.hooks({before(e,t){i(t?t.url.split("/")[0]:void 0),e()}}),this.appConfig.pages.forEach(((e,t)=>{e.routes&&e.routes.forEach((t=>{router.on(t,(t=>{this._store.dispatch(updatePage({page:e.name,params:t.data}))}))}))})),this.appConfig.pages.length>0&&router.notFound((()=>{this._store.dispatch(updatePage(this.appConfig.pages[0].name))})),router.resolve()}else(0,or_mwc_dialog._F)(core_lib.Ay.isError?"managerError."+core_lib.Ay.error:"")}))))}updated(e){var t,i;if(super.updated(e),this._initialised&&(e.has("_page")||e.has("_offline")||e.has("_showOfflineFallback"))){if(this._mainElem){const o=this.appConfig.pages.find((e=>e.name===this._page)),n=this._showOfflineFallback&&!(null==o?void 0:o.allowOffline),r=this._mainElem.querySelector("#"+this.OFFLINE_PAGE_ID);if(e.has("_page")&&o&&(this._mainElem.firstElementChild?this._loadPage(o,(e=>{n&&(e.style.setProperty("display","none"),e.setAttribute("loadedDuringOffline","true"))})):this._loadPage(o)),r&&!n){this._mainElem.removeChild(r);const e=this._mainElem.firstElementChild;null==e||e.style.removeProperty("display"),(null==e?void 0:e.onRefresh)&&e.onRefresh()}else if(!r&&n){const e=(null===(t=this.appConfig)||void 0===t?void 0:t.offlinePage)?this.appConfig.offlinePage.pageCreator():function pageOfflineProvider(e){return{name:"offline",routes:["offline"],pageCreator:()=>new PageOffline(e)}}(this._store).pageCreator();null===(i=this._mainElem.firstElementChild)||void 0===i||i.style.setProperty("display","none"),e.id=this.OFFLINE_PAGE_ID,this._mainElem.appendChild(e)}}this.updateWindowTitle()}}shouldUpdate(e){if(e.has("_realm")&&(this._config=this._getConfig(),this._realm?(core_lib.Ay.displayRealm=this._realm,window.sessionStorage.setItem("realm",this._realm)):window.sessionStorage.removeItem("realm")),e.has("_config")&&this._config){this._config.logo||(this._config.logo=DefaultLogo),this._config.logoMobile||(this._config.logoMobile=DefaultMobileLogo);const e=this._config&&this._config.favicon?this._config.favicon:DefaultFavIcon;let t=document.querySelector("link[rel~='icon']");t||(t=document.createElement("link"),t.rel="icon",document.getElementsByTagName("head")[0].appendChild(t)),t.href=e}return this.updateWindowTitle(),super.shouldUpdate(e)}render(){if(!this._initialised)return lit.qy`<or-mwc-dialog id="app-modal"></or-mwc-dialog>`;let e;if(core_lib.Ay.consoleAppConfig){const t=core_lib.Ay.consoleAppConfig,i=t.primaryColor,o=t.secondaryColor;e=lit.qy`<style>:host {--or-console-primary-color:${i};--or-console-secondary-color:${o};}</style>`}return lit.qy`
            ${this._config.styles?"string"==typeof this._config.styles?lit.qy`<style>${this._config.styles}</style>`:this._config.styles.strings:""}
            ${e}
            ${this._config.header?lit.qy`
                <or-header .activeMenu="${this._activeMenu}" .store="${this._store}" .realm="${this._realm}" .realms="${this._realms}" .logo="${this._config.logo}" .logoMobile="${this._config.logoMobile}" .config="${this._config.header}"></or-header>
            `:""}
            
            <!-- Main content -->
            <main role="main" class="main-content d-none"></main>
            
            <slot></slot>
        `}stateChanged(e){this._realm=e.app.realm,this._page=e.app.page,this._offline=e.app.offline}_onEvent(e){var t;e===core_lib.m0.OFFLINE?this._offline||this._store.dispatch(setOffline(!0)):e===core_lib.m0.ONLINE?this._offline&&(this._showOfflineFallback=!1,this._completeOfflineFallbackTimer(),this._store.dispatch(setOffline(!1))):e===core_lib.m0.RECONNECT_FAILED?this._startOfflineFallbackTimer():e===core_lib.m0.CONSOLE_VISIBLE?(this._store.dispatch(setVisibility(!0)),(null===(t=core_lib.Ay.console)||void 0===t?void 0:t.isMobile)&&this._offline&&this._startOfflineFallbackTimer(!0),core_lib.Ay.reconnect(!0)):e===core_lib.m0.CONSOLE_HIDDEN&&this._store.dispatch(setVisibility(!1))}_startOfflineFallbackTimer(e=!1){var t;if(e)this._completeOfflineFallbackTimer(!0);else if(this._offlineFallbackDeferred||this._showOfflineFallback)return;const i=new core_lib.J0.Deferred;let o=!1;i.promise.then((()=>{this._showOfflineFallback=this._offline})).finally((()=>{o=!0})),setTimeout((()=>{o||i.resolve()}),(null===(t=this.appConfig)||void 0===t?void 0:t.offlineTimeout)||1e4),this._offlineFallbackDeferred=i}_completeOfflineFallbackTimer(e=!1){var t,i;e?null===(t=this._offlineFallbackDeferred)||void 0===t||t.reject():null===(i=this._offlineFallbackDeferred)||void 0===i||i.resolve(),this._offlineFallbackDeferred=void 0}logout(){core_lib.Ay.logout()}setLanguage(e){core_lib.Ay.language=e}showLanguageModal(){(0,or_mwc_dialog.ui)((new or_mwc_dialog.X$).setHeading("language").setDismissAction(null).setStyles(lit.qy`<style>.selected { color: ${(0,lit.iz)(core_lib.BB)} }</style>`).setActions(Object.entries(this.appConfig.languages||core_lib.ks).map((([e,t])=>({content:lit.qy`<span class="${e===core_lib.Ay.language?"selected":""}">${i18next.Ay.t(t)}</span>`,actionName:e,action:()=>{core_lib.Ay.language=e}})))))}doAppConfigInit(){this.appConfig=this.appConfig||(this.appConfigProvider?this.appConfigProvider(core_lib.Ay):void 0),this.appConfig&&(this._config||(this._config=this._getConfig()))}doBasicLogin(e,t){const i=new core_lib.J0.Deferred;let o=e,n=t;const r=lit.qy`
            #login-logo {
                width: 24px;
                height: 24px;
            }
            
            #login_wrapper > or-mwc-input {
                margin: 10px 0;
                width: 100%;
            }
        `;return(0,or_mwc_dialog.ui)((new or_mwc_dialog.X$).setStyles(lit.qy`<style>${r}</style>`).setHeading(lit.qy`<img id="login-logo" src="${this._config.logoMobile||this._config.logo}" /></or-icon><or-translate value="login"></or-translate>`).setContent(lit.qy`
                <div id="login_wrapper">
                    <or-mwc-input .label="${i18next.Ay.t("user")}" .type="${or_mwc_input.NZ.TEXT}" min="1" required .value="${e}" @or-mwc-input-changed="${e=>o=e.detail.value}"></or-mwc-input>            
                    <or-mwc-input .label="${i18next.Ay.t("password")}" .type="${or_mwc_input.NZ.PASSWORD}" min="1" required .value="${t}" @or-mwc-input-changed="${e=>n=e.detail.value}"></or-mwc-input>           
                </div>
            `).setActions([{actionName:"submit",default:!0,action:()=>{i.resolve({cancel:!1,username:o,password:n})},content:lit.qy`<or-mwc-input .type=${or_mwc_input.NZ.BUTTON} .label="${i18next.Ay.t("submit")}" raised></or-mwc-input>`}]),document.body),i.promise}_loadPage(e,t){return __awaiter(this,void 0,void 0,(function*(){const i=this._mainElem.firstElementChild,o=e.pageCreator();return yield null==t?void 0:t(o),i?this._mainElem.replaceChild(o,i):this._mainElem.appendChild(o),o}))}_unloadPage(e){var t;return __awaiter(this,void 0,void 0,(function*(){this._mainElem||console.error("Could not unload page; the main element could not be found."),e||(e=null===(t=this._mainElem)||void 0===t?void 0:t.firstElementChild)?this._mainElem.removeChild(e):console.warn("Tried to unload the current page, but no child element was found.")}))}updateWindowTitle(){if(!this._initialised)return;const e=this._config.appTitle||"";let t=i18next.Ay.isInitialized?i18next.Ay.t(e):e;const i=this._mainElem?this._mainElem.firstElementChild:void 0;i&&(t+=i18next.Ay.isInitialized?" - "+i18next.Ay.t(i.name):" - "+i.name),(0,metadata.D)({title:t,description:t})}_getConfig(){const e=this.appConfig.realms?this.appConfig.realms.default:{};let t=this.appConfig.realms?this.appConfig.realms[this._realm||""]:void 0;return t=core_lib.J0.mergeObjects(e,t,!1),this.appConfig&&this.appConfig.superUserHeader&&core_lib.Ay.isSuperUser()&&(t.header=this.appConfig.superUserHeader),t}};lib_decorate([(0,decorators.MZ)({type:Object})],OrApp.prototype,"appConfig",void 0),lib_decorate([(0,decorators.MZ)({type:Object})],OrApp.prototype,"managerConfig",void 0),lib_decorate([(0,decorators.P)("main")],OrApp.prototype,"_mainElem",void 0),lib_decorate([(0,decorators.wk)()],OrApp.prototype,"_initialised",void 0),lib_decorate([(0,decorators.wk)()],OrApp.prototype,"_page",void 0),lib_decorate([(0,decorators.wk)()],OrApp.prototype,"_config",void 0),lib_decorate([(0,decorators.wk)()],OrApp.prototype,"_realm",void 0),lib_decorate([(0,decorators.wk)()],OrApp.prototype,"_offline",void 0),lib_decorate([(0,decorators.wk)()],OrApp.prototype,"_showOfflineFallback",void 0),lib_decorate([(0,decorators.wk)()],OrApp.prototype,"_activeMenu",void 0),OrApp=lib_decorate([(0,decorators.EM)("or-app")],OrApp)},"../../component/or-gauge/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/lit/decorators.js"),_openremote_model__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../component/model/lib/index.js"),gaugeJS__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/gaugeJS/dist/gauge.js"),_openremote_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../component/core/lib/index.js"),_openremote_or_translate__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../component/or-translate/lib/index.js"),lodash__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../../node_modules/lodash/lodash.js"),_openremote_or_icon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../component/or-icon/lib/index.js"),__decorate=function(t,e,i,s){var a,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},__awaiter=function(t,e,i,s){return new(i||(i=Promise))((function(a,o){function r(t){try{l(s.next(t))}catch(t){o(t)}}function n(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,n)}l((s=s.apply(t,e||[])).next())}))};const styling=lit__WEBPACK_IMPORTED_MODULE_0__.AH`
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
        `}loadData(t){return __awaiter(this,void 0,void 0,(function*(){const e=(yield _openremote_core__WEBPACK_IMPORTED_MODULE_4__.Ay.rest.api.AssetResource.queryAssets({ids:[t.id]})).data,i=[t].map((t=>{const i=e.findIndex((e=>e.id===t.id)),s=i>=0?e[i]:void 0;return s&&s.attributes?[i,s.attributes[t.name]]:void 0})).filter((t=>!!t));this.asset=e[0],this.assetAttribute=i[0]}))}getDefaultConfig(){return{attributeRef:void 0,options:{angle:0,lineWidth:.4,radiusScale:1,pointer:{length:.5,strokeWidth:.035,color:"#000000"},staticZones:[],limitMax:!0,limitMin:!0,colorStart:"#000000",colorStop:"#707070",strokeColor:"#ABCDEF",generateGradient:!1,highDpiSupport:!0}}}};__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Object})],OrGauge.prototype,"attrRef",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Object})],OrGauge.prototype,"asset",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Object})],OrGauge.prototype,"assetAttribute",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Number})],OrGauge.prototype,"value",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrGauge.prototype,"decimals",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrGauge.prototype,"unit",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrGauge.prototype,"min",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrGauge.prototype,"max",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Array})],OrGauge.prototype,"thresholds",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)()],OrGauge.prototype,"config",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:String})],OrGauge.prototype,"realm",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.wk)()],OrGauge.prototype,"loading",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#chart")],OrGauge.prototype,"_gaugeElem",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#chart-wrapper")],OrGauge.prototype,"_wrapperElem",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("#details-container")],OrGauge.prototype,"_detailsElem",void 0),OrGauge=__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.EM)("or-gauge")],OrGauge)},"../../component/or-mobile-app/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ag:()=>MobilePage,kE:()=>MobilePageAnimation,xS:()=>OrMobileApp});var MobilePageAnimation,lib=__webpack_require__("../../component/or-app/lib/index.js"),decorators=__webpack_require__("../../../node_modules/lit/decorators.js"),__awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))};!function(MobilePageAnimation){MobilePageAnimation[MobilePageAnimation.SWIPE_RIGHT=0]="SWIPE_RIGHT",MobilePageAnimation[MobilePageAnimation.SWIPE_LEFT=1]="SWIPE_LEFT",MobilePageAnimation[MobilePageAnimation.FADE=2]="FADE"}(MobilePageAnimation||(MobilePageAnimation={}));class MobilePage extends lib.YW{getUpdateComplete(){const _super=Object.create(null,{getUpdateComplete:{get:()=>super.getUpdateComplete}});return __awaiter(this,void 0,void 0,(function*(){return _super.getUpdateComplete.call(this)}))}get enterAnimation(){return MobilePageAnimation.FADE}get exitAnimation(){return MobilePageAnimation.FADE}}var lit=__webpack_require__("../../../node_modules/lit/index.js");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let LoadingPage=class LoadingPage extends lib.YW{get name(){return"loading"}stateChanged(state){}render(){return lit.qy`
            <div style="height: 100%; display: flex; justify-content: center; align-items: center;">
                <or-loading-indicator></or-loading-indicator>
            </div>
        `}};LoadingPage=__decorate([(0,decorators.EM)("page-loading")],LoadingPage);var lib_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},lib_awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))};let OrMobileApp=class OrMobileApp extends lib.pX{constructor(){super(...arguments),this.loadingPageProvider=function loadingPageProvider(store){return{name:"loading",routes:[],hideHeader:!0,pageCreator:()=>new LoadingPage(store)}}(this._store)}static get styles(){return[super.styles,lit.AH`
        
        :host {
            --animate-offset: 0ms;
        }

        /* ------------------------------------------- */
        /* Material Design animation based on Shared X axis (https://m2.material.io/design/motion/the-motion-system.html#shared-axis) */
        /* ------------------------------------------- */

        .animate-swipeleft-enter {
            animation: container-swipeleft-enter 300ms cubic-bezier(0.0, 0.0, 0.2, 1) var(--animate-offset);
            animation-fill-mode: forwards;
        }

        .animate-swipeleft-exit {
            animation: container-swipeleft-exit 300ms cubic-bezier(0.0, 0.0, 0.2, 1) var(--animate-offset);
            animation-fill-mode: forwards;
        }

        /* ------------------------------------------- */
        /* Material Design animation based on Shared X axis (https://m2.material.io/design/motion/the-motion-system.html#shared-axis) */
        /* ------------------------------------------- */

        .animate-swiperight-enter {
            animation: container-swiperight-enter 300ms cubic-bezier(0.0, 0.0, 0.2, 1) var(--animate-offset);
            animation-fill-mode: forwards;
        }

        .animate-swiperight-exit {
            animation: container-swiperight-exit 300ms cubic-bezier(0.0, 0.0, 0.2, 1) var(--animate-offset);
            animation-fill-mode: forwards;
        }

        /* ------------------------------------------- */
        /* Material design animation based on https://m2.material.io/design/motion/the-motion-system.html#fade-through */
        /* ------------------------------------------- */

        .animate-fade-enter {
            animation: container-fade-enter 210ms ease-out var(--animate-offset);
            animation-fill-mode: forwards;
        }

        .animate-fade-exit {
            animation: container-fade-exit 90ms ease-in var(--animate-offset);
            animation-fill-mode: forwards;
        }


        /* ------------------------------------------ */


        /* Material Design animation based on Shared X axis (https://m2.material.io/design/motion/the-motion-system.html#shared-axis) */
        @keyframes container-swipeleft-enter {
            0% {
                margin-left: 30px;
                margin-right: -30px;
                opacity: 0;
            }
            33% {
                opacity: 0;
            }
            100% {
                margin-left: 0;
                margin-right: 0;
                opacity: 1;
            }
        }

        /* Material Design animation based on Shared X axis (https://m2.material.io/design/motion/the-motion-system.html#shared-axis) */
        @keyframes container-swipeleft-exit {
            0% {
                margin-left: 0;
                margin-right: 0;
                opacity: 1;
            }
            33% {
                opacity: 0;
            }
            100% {
                margin-left: -30px;
                margin-right: 30px;
                opacity: 0;
            }
        }

        /* Material Design animation based on Shared X axis (https://m2.material.io/design/motion/the-motion-system.html#shared-axis) */
        @keyframes container-swiperight-enter {
            0% {
                margin-left: -30px;
                margin-right: 30px;
                opacity: 0;
            }
            33% {
                opacity: 0;
            }
            100% {
                margin-left: 0;
                margin-right: 0;
                opacity: 1;
            }
        }

        /* Material Design animation based on Shared X axis (https://m2.material.io/design/motion/the-motion-system.html#shared-axis) */
        @keyframes container-swiperight-exit {
            0% {
                margin-left: 0;
                margin-right: 0;
                opacity: 1;
            }
            33% {
                opacity: 0;
            }
            100% {
                margin-left: 30px;
                margin-right: -30px;
                opacity: 0;
            }
        }

        /* Material design animation based on https://m2.material.io/design/motion/the-motion-system.html#fade-through */
        @keyframes container-fade-enter {
            0% {
                transform: scale(0.92);
                opacity: 0;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }

        /* Material design animation based on https://m2.material.io/design/motion/the-motion-system.html#fade-through */
        @keyframes container-fade-exit {
            0% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }

    `]}_loadPage(pageProvider_1,beforeLoad_1){return lib_awaiter(this,arguments,void 0,(function*(pageProvider,beforeLoad,animate=!0){var _a;const currentPage=Array.from(this._mainElem.children).find((child=>child.id!==this.OFFLINE_PAGE_ID));let loadingPage;console.info(`Navigating from ${null==currentPage?void 0:currentPage.name} to ${pageProvider.name}, with animation set to ${animate}`),currentPage&&(yield this._unloadPage(currentPage,animate)),animate&&(loadingPage=null===(_a=this.loadingPageProvider)||void 0===_a?void 0:_a.pageCreator(),loadingPage?yield this._applyLoadingPage(loadingPage,!1):console.warn("Could not apply loading page, as it did not exist."));const newPage=pageProvider.pageCreator();return yield null==beforeLoad?void 0:beforeLoad(newPage),newPage.style.visibility="hidden",newPage.style.position="absolute",this._mainElem.appendChild(newPage),yield newPage.getUpdateComplete(),console.log("New page update complete!"),animate&&(loadingPage?yield this._unloadLoadingPage(loadingPage,!1):console.warn("Could not unload loading page, as it did not exist.")),newPage.style.visibility="unset",newPage.style.position="unset",animate&&(yield this._doEnterAnimation(newPage)),console.log("Done with transition!"),newPage}))}_unloadPage(page_1){const _super=Object.create(null,{_unloadPage:{get:()=>super._unloadPage}});return lib_awaiter(this,arguments,void 0,(function*(page,animate=!0){console.log("_unloadPage()",page),page&&animate&&(yield this._doExitAnimation(page)),yield _super._unloadPage.call(this,page)}))}_applyLoadingPage(page_1){return lib_awaiter(this,arguments,void 0,(function*(page,animate=!0){page.id="loading-page",this._mainElem.appendChild(page),animate&&(yield this._doEnterAnimation(page))}))}_unloadLoadingPage(){return lib_awaiter(this,arguments,void 0,(function*(page=this._mainElem.querySelector("#loading-page"),animate=!0){page&&(animate&&(yield this._doExitAnimation(page)),this._mainElem.removeChild(page))}))}_doEnterAnimation(page,animation){return lib_awaiter(this,void 0,void 0,(function*(){switch(animation=animation||page.enterAnimation,yield page.getUpdateComplete(),animation){case MobilePageAnimation.SWIPE_LEFT:yield doAnimation(page,"animate-swipeleft-enter",300);break;case MobilePageAnimation.SWIPE_RIGHT:yield doAnimation(page,"animate-swiperight-enter",300);break;default:yield doAnimation(page,"animate-fade-enter",200)}}))}_doExitAnimation(page,animation){return lib_awaiter(this,void 0,void 0,(function*(){switch(animation=animation||page.exitAnimation,yield page.updateComplete,animation){case MobilePageAnimation.SWIPE_LEFT:yield doAnimation(page,"animate-swipeleft-exit",300);break;case MobilePageAnimation.SWIPE_RIGHT:yield doAnimation(page,"animate-swiperight-exit",300);break;default:yield doAnimation(page,"animate-fade-exit",90)}}))}};function doAnimation(elem,cssClass,timeout){return lib_awaiter(this,void 0,void 0,(function*(){elem.classList.add(cssClass),yield new Promise((resolve=>setTimeout(resolve,timeout))),elem.classList.remove(cssClass)}))}OrMobileApp=lib_decorate([(0,decorators.EM)("or-mobile-app")],OrMobileApp)},"../../component/or-app/images/favicon.ico":module=>{module.exports="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABMLAAATCwAAAAAAAAAAAAD+/v4B/v7+AOf//ABR3cgAdujXDV/fzElU28eJT9rGqVDaxqpW3MiLXd/LSXHm1Q1P3cgA2//7AP7+/gD+/v4BAAAAAHzq2gDk//8BW9/LOVDaxrJL2MTyS9jE9EvYw+hL2MPoS9fD90vYw/RQ2sW0W9/LO9L//wGA69sAAAAAAHjp2AAAOwAAXN7LVEzYxORL2MPuVNKuwVvGi6Zi1rI1X+HQJVvey0ZS28aTS9jD7UzYw+VZ3spVAAAAAHjp2ABN2cUAXN/LN0zYxOJM18HeV8KEtVCtUudRrlLgZrtmKmO5YwBz59cAlvTnAlney0RM2MPYTNjD5FrfyzlO2sUAeOnZClDaxqxL2MPvV8OGtU6rTvJSq1LUR405sTNtGa0vZxOiOW8eZU1+NRA7tY0AWN7KRkvXw+5O2cWtbefVClzfzD9L2MTtU9OxwlCtU+FSq1LVPnknvypiDfcsZRDmLWUQ5itkD/szahihTHwxDv///wFT28iZS9jD8F3fzENV28h8S9jE9lnFirxPrE/zSZA8tSpiDfUvZxOaQ3cpI0V4KyMxaBWZK2QO+TtyIWJvv2QdXNOta0vXw/hV3Mh/WN3Jh1LbyNFXunG+UK1R6UB+K7YuZRHYQHQnKj1yIwBAdSYAQnYoKixkEOo7dyW5U65Uz1a7c7xM2MTtVdzIon3o2RR/7eUaVrFblVCsUe9boFJOO20eJFKDPAVThD0APHIiAEN2KTIsZA/sPnwpwVCsUelWu3PDTNjE7lTbx5+53bkASapLAFiyWmNOrFD8WrNcZUGjQgBllFQAapRZA0N2KjIyaRawK2MN8kuUQLRPrE/0WsaNu0vYxPZW3Mh5AAAAAGO4ZABlumchUa1T2VCtUtRctV4uRpE7AFuIRREyaBbHK2MN9T59KrZQq1HbUa5V3VPUtcVL2MTqX+DNOgAAAACLzowACIMKAFqzXFxPrFHwUK1S2FmzXG1brlk8RIYzm0uWQrdQq1HdUKxQ71nHkbZL2MTzUdrGoYnu3wcAAAAAAAAAAHvGfQCO0Y8EWbNbWVGtU9VOrFD9TqxQ8k+sUO1PrE/1Uq9W21nIk7ZN2MPqS9jD1lvfyyxS3McAAAAAAAAAAAAAAAAAis+LAP///wBnu2kdXLRdW1SyW4lVvXe3WMiUulLVuMpK2MT1TNjE1VPdyD8hybAAhu7eAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFLfywBS3sodTNnG1ErYxPhM2MTnUtvHm1zgzCgAuJsAjPHiAAAAAAD9/f0B/f39AAAAAAAAAAAAAAAAAAAAAABb4c0AXeHNElfdyXpY3MlrYeHOMX/r2wZv5tUAAAAAAP39/QD9/f0BcA4AAMADAADAAwAAgMEAAAAQAAAAAAAAAAAAAAGAAAABgAAAxgAAAMIAAADgAAAA4AEAAPADAAD+BwAAfg4AAA=="},"../../component/or-app/images/logo-mobile.svg":module=>{module.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTA3LjM3MiAxMDcuNDUzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnPgogICAgPHBhdGggZmlsbD0iI0M0RDYwMCIgZD0iTTUzLjY0OCwxMDcuMjk2QzI0LjA2OCwxMDcuMjk2LDAsODMuMjM2LDAsNTMuNjQ2aDExLjIzNGMwLDIzLjM5MSwxOS4wMjUsNDIuNDIsNDIuNDE0LDQyLjQyIGMyMy4zODUsMCw0Mi40MTYtMTkuMDI5LDQyLjQxNi00Mi40MmMwLTIzLjM4Mi0xOS4wMzEtNDIuNDA4LTQyLjQxNi00Mi40MDhWMGMyOS41ODIsMCw1My42NSwyNC4wNjgsNTMuNjUsNTMuNjQ2IEMxMDcuMjk5LDgzLjIzNiw4My4yMywxMDcuMjk2LDUzLjY0OCwxMDcuMjk2TDUzLjY0OCwxMDcuMjk2eiIvPgogICAgPHBhdGggZmlsbD0iIzRFOUQyRCIgZD0iTTQ1LjUyNSw5Mi41N2MtMTAuMzk1LTIuMTY2LTE5LjMyNC04LjI2Mi0yNS4xNDUtMTcuMTM3Yy01LjgxNC04Ljg4NC03LjgyNi0xOS41MTEtNS42NTQtMjkuOTA2IGMyLjE3NC0xMC4zOTksOC4yNTgtMTkuMzI1LDE3LjE0MS0yNS4xNDVjOC44ODktNS44MTUsMTkuNTA2LTcuODI1LDI5LjkwNi01LjY1NWMyMS40NjMsNC40NzksMzUuMjgxLDI1LjU4MiwzMC44MDMsNDcuMDQxIEw4MS41OCw1OS40NzhjMy4yMDctMTUuMzk3LTYuNzAzLTMwLjUzOS0yMi4xMDUtMzMuNzUxYy03LjQ2MS0xLjU2LTE1LjA3OC0wLjExOS0yMS40NTUsNC4wNiBjLTYuMzY5LDQuMTY5LTEwLjczNiwxMC41OC0xMi4yOTksMTguMDM5Yy0xLjU1NSw3LjQ1OC0wLjExMywxNS4wNzUsNC4wNjQsMjEuNDUzYzQuMTcsNi4zNywxMC41NzYsMTAuNzQ0LDE4LjA0MSwxMi4yOTcgTDQ1LjUyNSw5Mi41N0w0NS41MjUsOTIuNTd6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMUQ1NjMyIiBkPSJNNTMuNjgyLDc5LjQyOGMtMC40MzIsMC0wLjg3MS0wLjAxMi0xLjMwOS0wLjAzMmMtNi44NjktMC4zNDItMTMuMjA1LTMuMzQ0LTE3LjgzLTguNDM5IGMtNC42MjEtNS4xMDgtNi45ODItMTEuNzA1LTYuNjM5LTE4LjU4MmwxMS4yMTUsMC41NTNjLTAuMTg4LDMuODc5LDEuMTQxLDcuNjA5LDMuNzUsMTAuNDg4YzIuNjA0LDIuODc5LDYuMTg2LDQuNTY4LDEwLjA1OSw0Ljc2MSBjMy44NjksMC4xNzksNy42MDctMS4xNDIsMTAuNDgtMy43NDhjMi44ODctMi42MDMsNC41NzYtNi4xNzksNC43NzMtMTAuMDU3YzAuMzkxLTguMDEyLTUuODAzLTE0Ljg1NC0xMy44MTYtMTUuMjQ4bDAuNTU5LTExLjIyMiBjMTQuMjAxLDAuNzEsMjUuMTc4LDEyLjgyMywyNC40NzUsMjcuMDIxYy0wLjM0NCw2Ljg4My0zLjMzNiwxMy4yMTItOC40NDEsMTcuODMxQzY2LjE3NCw3Ny4wODYsNjAuMDg0LDc5LjQyOCw1My42ODIsNzkuNDI4IEw1My42ODIsNzkuNDI4eiIvPgogIDwvZz4KPC9zdmc+"},"../../component/or-app/images/logo.svg":module=>{module.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSI3Mi4xODkgLTE5LjIxNyA1MzkuMTQzIDE3My43MjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwgMCwgMCwgMSwgMCwgNykiPgogICAgPHBhdGggZmlsbD0iIzFENTYzMiIgZD0iTTE0NS4wOSwzOC4wNTNjMTIuNDc5LDAsMjIuMDk4LDEwLjU0OCwyMi4wOTgsMjIuMDk1YzAsMTEuNDczLTkuNDczLDIyLjA5Ny0yMi4wOTgsMjIuMDk3IGMtMTIuMzE2LDAtMjEuOTQzLTEwLjM5Mi0yMS45NDMtMjEuNzg3QzEyMy4xNDYsNDcuMTQsMTM0LjAwNCwzOC4wNTMsMTQ1LjA5LDM4LjA1M3ogTTE0NS4xNyw3Ny4zOTYgYzguMTY0LDAsMTYuNjMxLTYuNDY4LDE2LjYzMS0xNy40NzljMC0xMS4wODgtOS4zOTMtMTcuMDE4LTE2LjYzMS0xNy4wMThjLTcuNzAxLDAtMTYuNjM1LDYuMzEzLTE2LjYzNSwxNy40NzYgQzEyOC41MzUsNzAuMTU4LDEzNi40NzEsNzcuMzk2LDE0NS4xNyw3Ny4zOTZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMUQ1NjMyIiBkPSJNMjY3Ljg0OCwzOC4yMzdoNS4zODVWNDUuNGgwLjE1NmMxLjYxNy0yLjU1MSw1Ljc3My02LjQ5NCwxMi45MzgtNi40OTRjNS4xNTQsMCw5LjQ2OSwxLjMxNSwxMy4zMTYsNS4xNzkgYzMuMTU2LDMuMDkzLDUuMjM4LDcuOTU2LDUuMjM4LDE0LjkxMXYyMy4yNmgtNS4zOTF2LTIzLjI2YzAtNS40ODQtMS42OTUtOS4zNDctNC4wMDYtMTEuNTg4Yy0yLjkyNC0yLjg1OS02Ljc3NS0zLjYzLTkuMTU4LTMuNjMgYy0yLjM4OSwwLTYuMjQsMC43NzEtOS4xNjgsMy42M2MtMi4zMDksMi4yNDEtNCw2LjEwNC0zLjkyNiwxMS41ODh2MjMuMjZoLTUuMzg1VjM4LjIzN3oiLz4KICAgIDxwYXRoIGZpbGw9IiM0RTlEMkQiIGQ9Ik0zMTIuMTYsMzkuNTIxaDkuMzk1djMuNzc1aDAuMTVjMS45MjgtMi43NzIsMy44NDgtNS4yMzUsOS4xNjYtNS4yMzVoMC44NDZ2OS45MzIgQzMyMi40LDQ4LjM3OCwzMjIuNCw1NS42OSwzMjIuNCw1OC4yM3YyNC4wMjVoLTEwLjI0VjM5LjUyMXoiLz4KICAgIDxwYXRoIGZpbGw9IiM0RTlEMkQiIGQ9Ik00NDguODE0LDU5LjkxOGMwLTEyLjkzNSwxMC41NDctMjIuODY2LDIyLjc4OS0yMi44NjZjMTIuMDg4LDAsMjIuNjM3LDkuNjIyLDIyLjYzNywyMi43MSBjMCwxNC4wMTYtMTAuNzgxLDIyLjg2Ny0yMi42MzcsMjIuODY3QzQ1OC44OTgsODIuNjI5LDQ0OC44MTQsNzIuMTU5LDQ0OC44MTQsNTkuOTE4eiBNNDgzLjk5Miw1OS45OTUgYzAtNy43NzYtNi0xMy41NTQtMTIuMzg5LTEzLjU1NGMtNS4zMTIsMC0xMi41NTUsNC41NDYtMTIuNTU1LDEzLjQ3N2MwLDguMDg4LDYuMDksMTMuMzIxLDEyLjU1NSwxMy4zMjEgQzQ3OS4wNjYsNzMuMjM5LDQ4My45OTIsNjYuNzcxLDQ4My45OTIsNTkuOTk1eiIvPgogICAgPHBhdGggZmlsbD0iIzRFOUQyRCIgZD0iTTUwMC4xOTksNDcuNTk4aC01Ljk4NFYzOC41MWg1Ljk4NFYyNC4yNzFoMTAuMjRWMzguNTFoNi4xNnY5LjA4OGgtNi4xNnYzMy42NDZoLTEwLjI0VjQ3LjU5OHoiLz4KICAgIDxwYXRoIGZpbGw9IiM0RTlEMkQiIGQ9Ik00MjYuMDQzLDM4LjM0OWMtNS4yMTMsMC05LjkyNCwyLjI3LTEzLjMyNCw1LjkyN2MtMy4zOTgtMy42NTctOC4xMTktNS45MjctMTMuMzIyLTUuOTI3IGMtMTAuMzI2LDAtMTguNzMsOC45MTYtMTguNzMsMTkuODczdjI0LjQ2NGgxMC43NTJWNTguMjIyYzAtNS4wMzIsMy41ODItOS4xMjMsNy45NzktOS4xMjNjNC4yMDMsMCw3LjY1LDMuNzMzLDcuOTQ3LDguNDUzIGMtMC4wMDYsMC4yMjctMC4wMzMsMC40NDYtMC4wMzMsMC42N3YyNC40NjRoMTAuNzU0di0wLjA2aDAuMDU5VjU4LjIyMmMwLTAuMjI0LTAuMDIzLTAuNDQzLTAuMDI5LTAuNjcgYzAuMjk3LTQuNzIsMy43NDQtOC40NTMsNy45NDktOC40NTNjNC4zOTUsMCw3Ljk3OSw0LjA5MSw3Ljk3OSw5LjEyM3YyNC40MDRoMTAuNzQ4VjU4LjIyMiBDNDQ0Ljc3LDQ3LjI2NSw0MzYuMzcxLDM4LjM0OSw0MjYuMDQzLDM4LjM0OXoiLz4KICAgIDxyZWN0IHg9IjE3MS43MDEiIHk9IjM5LjA5MSIgZmlsbD0iIzFENTYzMiIgd2lkdGg9IjUuNDAyIiBoZWlnaHQ9IjU2Ljk1NSIvPgogICAgPHBhdGggZmlsbD0iIzFENTYzMiIgZD0iTTE5My42OCwzOC4wNTNjLTExLjA4OCwwLTIxLjk0NSw5LjA1Mi0yMS45NzksMjIuMzM1aDUuMzkzYzAtMC4wMDYsMC0wLjAwNiwwLTAuMDA2IGMwLTExLjE2OCw4Ljk0NS0xNy40ODEsMTYuNjU0LTE3LjQ4MWM3LjI1NiwwLDE2LjY2LDUuOTMsMTYuNjYsMTcuMDE4YzAsMTEuMDExLTguNDgsMTcuNDc5LTE2LjY2LDE3LjQ3OSBjLTQuMDUxLDAtNy45MjgtMS41ODctMTAuOTMyLTQuMjUxdjYuMTY3YzMuMTg2LDEuODUsNi44ODEsMi45MzIsMTAuODYzLDIuOTMyYzEyLjYzOSwwLDIyLjEzMS0xMC42MjQsMjIuMTMxLTIyLjA5NyBDMjE1LjgxMSw0OC42MDEsMjA2LjE2OCwzOC4wNTMsMTkzLjY4LDM4LjA1M3oiLz4KICAgIDxwYXRoIGZpbGw9IiMxRDU2MzIiIGQ9Ik0yNTkuOTM5LDQ4LjgzYy0zLjAwMi01LjIzMy05LjU0Ny0xMC43MDItMTguNzg3LTEwLjc3N2MtMTIuMjQyLDAuMjMxLTIxLjg2NSwxMC4yMzctMjEuODY1LDIyLjE3MyBjMCwxMi40NzEsMTAuMTY2LDIyLjAxOSwyMS45NDMsMjIuMDE5YzkuNjk5LDAsMTcuNzg1LTYuMzg4LDIwLjcxMS0xNC43ODJoLTUuNjk5Yy0xLjkyMiw1LjIzNC03LjM5MSw5Ljc4MS0xNS4wOSw5LjkzNSBjLTguMjM2LDAtMTUuOTM4LTcuMDA2LTE2LjMyMi0xNS4yNDZoMC4wMDZjLTAuMjM0LTIuMjMyLTAuMzE4LTUuNTk0LDAuODA1LTguMTQ2aDAuMDFjMi42NTQtNy42MjIsOS43NDItMTEuMTA0LDE1LjU4LTExLjEwNCBjNi43MDEsMCwxNC43ODMsNC40NjYsMTYuNDc5LDE0LjQwMmgtMjQuMTY4djQuODQ4aDI5LjYzNUMyNjMuNDAyLDU4LjA3MywyNjIuNzg5LDUzLjM3MywyNTkuOTM5LDQ4LjgzeiIvPgogICAgPHBhdGggZmlsbD0iIzRFOUQyRCIgZD0iTTM3Ni4zOTYsNTkuMzA0YzAtMTAuNzc5LTguNTQ5LTIyLjQ4MS0yMi4xLTIyLjQ4MWMtMTMuMTcyLDAtMjIuNDgyLDExLjA4Ny0yMi40ODIsMjMuMTczIGMwLDEyLjQ3MSw5Ljg1MiwyMi42MzQsMjIuNTU5LDIyLjYzNGMxMC4wMDgsMCwxOC4xNy03LjE1NywyMC42MzUtMTQuODU1aC0xMC43NzljLTEuOTI2LDMuNTM4LTUuMzE0LDUuNDY2LTkuODU1LDUuNDY2IGMtNy4wOCwwLTExLjA0Ny01LjYxNi0xMS43MTUtOC40OTJjLTAuNjE5LTEuODg2LTEuMjMtNC45OTctMC4zNTItOC41MjFoLTAuMDIzYzAuMDUxLTAuMjA1LDAuMTE3LTAuMzk1LDAuMTctMC41OSBjMC4wMjEtMC4wNjQsMC4wMzctMC4xMjMsMC4wNTctMC4xODljMi4xNDUtNy4yNzgsOC4yMjEtOS4yMzIsMTEuODYzLTkuMjMyYzUuMDgsMCwxMC4zOTgsMy4xNTQsMTEuNTQ1LDEwLjAxMmgtMTcuOTcxdjguMjM1IGgyNy44MjZDMzc2LjA4Niw2My4wNzQsMzc2LjM5Niw2MS4zMDcsMzc2LjM5Niw1OS4zMDR6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNEU5RDJEIiBkPSJNNTYxLjEyNSw1OS4zMDRjMC0xMC43NzktOC41NDEtMjIuNDgxLTIyLjA5LTIyLjQ4MWMtMTMuMTcyLDAtMjIuNDksMTEuMDg3LTIyLjQ5LDIzLjE3MyBjMCwxMi40NzEsOS44NjEsMjIuNjM0LDIyLjU2NiwyMi42MzRjMTAuMDA4LDAsMTguMTctNy4xNTcsMjAuNjM1LTE0Ljg1NWgtMTAuNzgxYy0xLjkyNCwzLjUzOC01LjMxNCw1LjQ2Ni05Ljg1NCw1LjQ2NiBjLTcuMDc4LDAtMTEuMDQ3LTUuNjE2LTExLjcxNy04LjQ5MmMtMC42MTUtMS44ODYtMS4yMy00Ljk5Ny0wLjM1NC04LjUyMWgtMC4wMThjMC4wNDctMC4yMDUsMC4xMTUtMC4zOTUsMC4xNjgtMC41OSBjMC4wMjEtMC4wNjQsMC4wMzctMC4xMjMsMC4wNTctMC4xODljMi4xNDUtNy4yNzgsOC4yMjEtOS4yMzIsMTEuODYzLTkuMjMyYzUuMDgsMCwxMC4zOTMsMy4xNTQsMTEuNTUxLDEwLjAxMmgtMTguNjI5djguMjM1IGgyOC40NzlDNTYwLjgyLDYzLjA3NCw1NjEuMTI1LDYxLjMwNyw1NjEuMTI1LDU5LjMwNHoiLz4KICA8L2c+Cjwvc3ZnPg=="}}]);
//# sourceMappingURL=2810.811717bb.iframe.bundle.js.map