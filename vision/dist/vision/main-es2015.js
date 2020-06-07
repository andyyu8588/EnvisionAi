(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_tensorflow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/tensorflow.service */ "./src/app/services/tensorflow.service.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");





class AppComponent {
    constructor(TensorflowService) {
        this.TensorflowService = TensorflowService;
        this.title = 'EnVision';
    }
    ngAfterContentInit() {
        // call tf service to import model
        this.TensorflowService.loadModel();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tensorflow_service__WEBPACK_IMPORTED_MODULE_1__["TensorflowService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [["lang", "en"], ["href", "https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css", "rel", "stylesheet"], [1, ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]], styles: ["h1[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\nbody[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBbmR5IFl1XFxEZXNrdG9wXFxIVE5FXFx2aXNpb24vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbn0iLCJoMSB7XG4gIHotaW5kZXg6IDI7XG59XG5cbmJvZHkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_tensorflow_service__WEBPACK_IMPORTED_MODULE_1__["TensorflowService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_sidebar_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/sidebar/searchbar/searchbar.component */ "./src/app/components/sidebar/searchbar/searchbar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");















































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__["MatTreeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_40__["BrowserAnimationsModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_44__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_45__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_41__["SidebarComponent"],
        _components_map_map_component__WEBPACK_IMPORTED_MODULE_42__["MapComponent"],
        _components_sidebar_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_43__["SearchbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__["MatTreeModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_40__["BrowserAnimationsModule"],
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_44__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_45__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_41__["SidebarComponent"],
                    _components_map_map_component__WEBPACK_IMPORTED_MODULE_42__["MapComponent"],
                    _components_sidebar_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_43__["SearchbarComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__["MatTreeModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_40__["BrowserAnimationsModule"],
                    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_44__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_45__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/map/map.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/map.service */ "./src/app/services/map.service.ts");



class MapComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.map.buildMap();
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 2, vars: 0, consts: [["href", "https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css", "rel", "stylesheet"], ["id", "mapbox"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
    } }, styles: ["#mapbox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXAvQzpcXFVzZXJzXFxBbmR5IFl1XFxEZXNrdG9wXFxIVE5FXFx2aXNpb24vc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1hcFxcbWFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwYm94IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuIiwiI21hcGJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.scss']
            }]
    }], function () { return [{ type: src_app_services_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/sidebar/data.ts":
/*!********************************************!*\
  !*** ./src/app/components/sidebar/data.ts ***!
  \********************************************/
/*! exports provided: single */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
var single = [
    {
        "name": "Germany",
        "value": 1
    },
    {
        "name": "USA",
        "value": 1
    },
    {
        "name": "France",
        "value": 1
    },
    {
        "name": "UK",
        "value": 1
    },
    {
        "name": "Italy",
        "value": 1
    },
    {
        "name": "Spain",
        "value": 1
    },
    {
        "name": "Canada",
        "value": 1
    }
];


/***/ }),

/***/ "./src/app/components/sidebar/searchbar/searchbar.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/sidebar/searchbar/searchbar.component.ts ***!
  \*********************************************************************/
/*! exports provided: SearchbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function() { return SearchbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_trendsapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/trendsapi.service */ "./src/app/services/trendsapi.service.ts");
/* harmony import */ var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/sidebar.service */ "./src/app/services/sidebar.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");











function SearchbarComponent_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Must Envision a trend!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchbarComponent_small_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Must Envision a year!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SearchbarComponent {
    constructor(trendsapiService, sidebarService) {
        this.trendsapiService = trendsapiService;
        this.sidebarService = sidebarService;
        this.clicked = false;
        this.byDate = [];
    }
    ngOnInit() {
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'keyword': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'year': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    // search is performed either by button or enter
    onSubmit(event) {
        // stop page refresh
        event.preventDefault();
        this.clicked = true;
        // check if form is complete
        if (this.searchForm.valid) {
            // use getData to get backend information
            this.trendsapiService.getData({
                keyword: this.searchForm.get('keyword').value,
                year: this.searchForm.get('year').value,
            }).then((res) => {
                // parse by week
                this.sidebarService.parseCountries(res);
                this.arraybyDate = this.sidebarService.byDate.subscribe((byDate) => this.byDate = byDate);
            }).catch((err) => {
                console.log(err);
            });
        }
        else {
            // look for invalid year
            if (!this.searchForm.get('year').valid) {
                // this.searchForm.patchValue({
                //   keyword: 'Must envision a year!'
                // })
            }
            // look for invalid keyword
            if (!this.searchForm.get('keyword').valid) {
                // this.searchForm.patchValue({
                //   keyword: 'Must envision something!'
                // })
            }
        }
    }
}
SearchbarComponent.ɵfac = function SearchbarComponent_Factory(t) { return new (t || SearchbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_trendsapi_service__WEBPACK_IMPORTED_MODULE_2__["TrendsapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"])); };
SearchbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchbarComponent, selectors: [["app-searchbar"]], decls: 47, vars: 3, consts: [["id", "form", "autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-6"], [1, ""], ["matInput", "", "formControlName", "keyword", "id", "seachInput", "type", "text", "placeholder", "ex: #BLM", "aria-placeholder", "ex: #BLM", 1, ""], ["id", "passwordHelpBlock", "class", "text-danger", 4, "ngIf"], [1, "col-4"], ["formControlName", "year"], ["value", "2004"], ["value", "2005"], ["value", "2006"], ["value", "2007"], ["value", "2008"], ["value", "2009"], ["value", "2010"], ["value", "2011"], ["value", "2012"], ["value", "2013"], ["value", "2014"], ["value", "2015"], ["value", "2016"], ["value", "2017"], ["value", "2018"], ["value", "2019"], ["value", "2020"], ["src", "assets/img/logo.png", 1, "col-2", "img", 3, "click"], ["id", "passwordHelpBlock", 1, "text-danger"]], template: function SearchbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SearchbarComponent_Template_form_ngSubmit_0_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search for a trend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchbarComponent_small_6_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select a year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "2004");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "2005");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "2006");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "2007");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "2008");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "2009");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "2010");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "2011");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "2012");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "2013");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "2015");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, SearchbarComponent_small_45_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchbarComponent_Template_img_click_46_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.searchForm.get("keyword").valid && ctx.clicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.searchForm.get("year").valid && ctx.clicked);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n#form[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NlYXJjaGJhci9DOlxcVXNlcnNcXEFuZHkgWXVcXERlc2t0b3BcXEhUTkVcXHZpc2lvbi9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2lkZWJhclxcc2VhcmNoYmFyXFxzZWFyY2hiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zZWFyY2hiYXIvc2VhcmNoYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zZWFyY2hiYXIvc2VhcmNoYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuI2Zvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbn0iLCJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbiNmb3JtIHtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMjAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-searchbar',
                templateUrl: './searchbar.component.html',
                styleUrls: ['./searchbar.component.scss']
            }]
    }], function () { return [{ type: _services_trendsapi_service__WEBPACK_IMPORTED_MODULE_2__["TrendsapiService"] }, { type: _services_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/app/components/sidebar/data.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_tensorflow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/tensorflow.service */ "./src/app/services/tensorflow.service.ts");
/* harmony import */ var _services_trendsapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/trendsapi.service */ "./src/app/services/trendsapi.service.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./searchbar/searchbar.component */ "./src/app/components/sidebar/searchbar/searchbar.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");











class SidebarComponent {
    constructor(DataService, TensorflowService, trendsapiService) {
        this.DataService = DataService;
        this.TensorflowService = TensorflowService;
        this.trendsapiService = trendsapiService;
        this.view = [240, 1500];
        // options
        this.showLegend = true;
        this.showLabels = true;
        this.colorScheme = {
            domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
        Object.assign(this, { single: _data__WEBPACK_IMPORTED_MODULE_1__["single"] });
    }
    changeDate(date) {
        console.log(this.DataService.getData(date.value));
        Object.assign(this, this.DataService.getData(date.value));
    }
    ngOnInit() {
    }
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tensorflow_service__WEBPACK_IMPORTED_MODULE_3__["TensorflowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_trendsapi_service__WEBPACK_IMPORTED_MODULE_4__["TrendsapiService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 20, vars: 7, consts: [["autosize", "", 1, "example-sidenav-container", 3, "hidden"], ["mode", "side", "opened", "true", 1, "container-fluid"], ["drawer", ""], ["mat-button", "", "id", "closeBtn", 1, "", 3, "click"], [1, ""], [1, "row", "outer"], [1, "col-6", "inner"], [1, "", 3, "view", "scheme", "results"], ["min", "1", "max", "56", 3, "displayWith", "value", "input"], ["matslider", ""], [1, "col-6"], ["id", "openBtn"], ["type", "button", "mat-raised-button", "", 3, "click"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-searchbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ngx-charts-pie-grid", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-slider", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SidebarComponent_Template_mat_slider_input_10_listener($event) { return ctx.changeDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur rerum vel ipsam a corrupti perferendis, perspiciatis recusandae obcaecati cumque iusto doloremque voluptatum architecto exercitationem eveniet commodi rem provident animi at!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Open Sidebar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r0.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("scheme", ctx.colorScheme)("results", ctx.single);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.formatLabel)("value", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r1.value);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_7__["SearchbarComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_8__["PieGridComponent"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSlider"]], styles: ["mat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n  max-width: 500px;\n  background-color: rgba(255, 255, 100, 0);\n  overflow: hidden;\n}\n\nmat-drawer-inner-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\nngx-charts-pie-grid[_ngcontent-%COMP%] {\n  left: 2%;\n  width: 240 px;\n  height: 1000 px;\n}\n\n.outer[_ngcontent-%COMP%] {\n  height: 95%;\n  position: relative;\n}\n\n#closeBtn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n}\n\n#openBtn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n\nmat-slider[_ngcontent-%COMP%] {\n  top: 2%;\n  left: 4%;\n  right: 4%;\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n}\n\nbody[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL0M6XFxVc2Vyc1xcQW5keSBZdVxcRGVza3RvcFxcSFRORVxcdmlzaW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNDSjs7QURLQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBRE1BO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDSEo7O0FETUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDSEo7O0FETUE7RUFDSSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ0hKOztBRE1BO0VBQ0ksZ0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwxMDAsICRhbHBoYTogMCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lcntcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbm5neC1jaGFydHMtcGllLWdyaWQge1xyXG4gICAgbGVmdDogMiU7XHJcbiAgICB3aWR0aDogMjQwIHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAwIHB4O1xyXG59XHJcblxyXG4uaW5uZXJ7XHJcbn1cclxuXHJcbi5vdXRlcntcclxuICBoZWlnaHQ6IDk1JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4jY2xvc2VCdG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuI29wZW5CdG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbn1cclxuXHJcbm1hdC1zbGlkZXIge1xyXG4gICAgdG9wOiAyJTtcclxuICAgIGxlZnQ6IDQlO1xyXG4gICAgcmlnaHQ6IDQlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIiwibWF0LWRyYXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDEwMCwgMCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxubmd4LWNoYXJ0cy1waWUtZ3JpZCB7XG4gIGxlZnQ6IDIlO1xuICB3aWR0aDogMjQwIHB4O1xuICBoZWlnaHQ6IDEwMDAgcHg7XG59XG5cbi5vdXRlciB7XG4gIGhlaWdodDogOTUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNjbG9zZUJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbn1cblxuI29wZW5CdG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG59XG5cbm1hdC1zbGlkZXIge1xuICB0b3A6IDIlO1xuICBsZWZ0OiA0JTtcbiAgcmlnaHQ6IDQlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHN0aWNreTtcbn1cblxuYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _services_tensorflow_service__WEBPACK_IMPORTED_MODULE_3__["TensorflowService"] }, { type: _services_trendsapi_service__WEBPACK_IMPORTED_MODULE_4__["TrendsapiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.service */ "./src/app/services/sidebar.service.ts");



class DataService {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        this.byDate = [];
    }
    getData(i) {
        this.arraybyDate = this.sidebarService.byDate.subscribe((byDate) => this.byDate = byDate);
        // console.log(this.arraybyDate)
        return (this.arraybyDate)[i];
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/map.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/map.service.ts ***!
  \*****************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);




class MapService {
    constructor() {
    }
    buildMap() {
        this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Map"]({
            accessToken: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].mapbox.token,
            container: 'mapbox',
            style: 'mapbox://styles/travelnet/ckb47dkvn0dh31ila3aizjqlt',
            center: [-71.22, 46.85],
            zoom: 2,
        });
    }
}
MapService.ɵfac = function MapService_Factory(t) { return new (t || MapService)(); };
MapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapService, factory: MapService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/sidebar.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/sidebar.service.ts ***!
  \*********************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class SidebarService {
    constructor() {
        this.CountriesArray = [];
        this._countries = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.CountriesArray);
        this.countries = this._countries.asObservable();
        this.byDateArray = [];
        this._byDate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.byDateArray);
        this.byDate = this._byDate.asObservable();
    }
    parseCountries(_countries) {
        let parsedData = [];
        for (var i = 0; i < (_countries.data)[0].data.length; i++) {
            let parsedDay = [];
            (_countries.data).forEach(country => {
                parsedDay.push((country.data)[i]);
            });
            parsedData.push(parsedDay);
        }
        console.log(parsedData);
        this._byDate.next(parsedData);
    }
    getCountriesData(_byDate, index) {
        return _byDate[index];
    }
    ngOnDestroy() {
        this._byDate.unsubscribe();
        this._countries.unsubscribe();
    }
}
SidebarService.ɵfac = function SidebarService_Factory(t) { return new (t || SidebarService)(); };
SidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidebarService, factory: SidebarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/tensorflow.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/tensorflow.service.ts ***!
  \************************************************/
/*! exports provided: TensorflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TensorflowService", function() { return TensorflowService; });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/index.js");
/* harmony import */ var _trendsapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trendsapi.service */ "./src/app/services/trendsapi.service.ts");





class TensorflowService {
    constructor(TrendsapiService) {
        this.TrendsapiService = TrendsapiService;
        // training parameters
        this.epochs = 45;
        this.split = 40;
        this.windowSize = 8;
        this.batchSize = 3;
        // subscribe to trendsapi calls
        this.receivedData_sub = this.TrendsapiService.receivedData.subscribe(data => {
            this.presentData = data;
            this.selectCountry('US');
            this.createDataset();
            this.train();
        });
    }
    loadModel() {
        // import keras model from backend w/o weights
        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["loadLayersModel"](_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].backend.Tfmodel, { strict: false })
            .then((layerModel) => {
            console.log('model imported successfully');
            this.Model = layerModel;
        })
            .catch((err) => {
            console.log(err);
        });
    }
    // setup training data for selected country
    selectCountry(country) {
        if (this.Model && this.presentData) {
            // get all values for 1 country
            let selected = [];
            this.presentData.data.forEach(element => {
                if (element.country == country) {
                    this.presentData.data[this.presentData.data.indexOf(element)].data.forEach(element => {
                        selected.push(element.value);
                    });
                    this.selectedData = selected;
                    console.log(this.selectedData);
                }
            });
        }
    }
    // creates dataset for training
    createDataset() {
        if (this.selectedData) {
            let _train = this.selectedData.slice(0, this.split);
            let _validate = this.selectedData.slice(this.split);
            this.trainSet = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["tensor"](this.sliceArr(_train));
            this.validateSet = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["tensor"](this.sliceArr(_validate));
        }
    }
    // slice arrays for createDataset
    sliceArr(arr) {
        let tensor = [];
        for (let x = 0; x < arr.length; x++) {
            if (x + this.windowSize > arr.length) {
                break;
            }
            else {
                tensor.push([arr.slice(x, (x + this.windowSize - 1)), [arr[x + (this.windowSize - 1)]]]);
            }
        }
        console.log(tensor);
        return tensor;
    }
    // compile & train the model
    train() {
        if (this.Model) {
            this.Model.compile({
                optimizer: _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["train"].adam(0.0001),
                loss: _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["losses"].meanSquaredError,
                metrics: ['accuracy']
            });
            this.Model.fit(this.trainSet, this.validateSet, {
                epochs: this.epochs,
                batchSize: this.batchSize,
                callbacks: []
            })
                .then((info) => {
                console.log('complete', info.history.acc);
            })
                .catch((err) => {
                console.log(err);
                console.log(err);
            });
        }
    }
    predict() {
    }
    ngOnDestroy() {
        this.receivedData_sub.unsubscribe();
    }
}
TensorflowService.ɵfac = function TensorflowService_Factory(t) { return new (t || TensorflowService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_trendsapi_service__WEBPACK_IMPORTED_MODULE_3__["TrendsapiService"])); };
TensorflowService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TensorflowService, factory: TensorflowService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TensorflowService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _trendsapi_service__WEBPACK_IMPORTED_MODULE_3__["TrendsapiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/trendsapi.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/trendsapi.service.ts ***!
  \***********************************************/
/*! exports provided: TrendsapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendsapiService", function() { return TrendsapiService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class TrendsapiService {
    constructor(http) {
        this.http = http;
        // observables for tf service
        this._receivedData = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this.receivedData = this._receivedData.asObservable();
    }
    // params must be an object with {
    //  keyword: keyword (string)
    //  year: year (string or number)
    // }
    getData(params) {
        return new Promise((resolve, reject) => {
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backend.trendsapi, {
                params
            }).subscribe((res) => {
                this._receivedData.next(res);
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
    ngOnDestroy() {
    }
}
TrendsapiService.ɵfac = function TrendsapiService_Factory(t) { return new (t || TrendsapiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
TrendsapiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TrendsapiService, factory: TrendsapiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TrendsapiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    backend: {
        Tfmodel: 'http://localhost:3000/Tfmodel/model.json'
    },
    mapbox: {
        token: 'pk.eyJ1IjoidHJhdmVsbmV0IiwiYSI6ImNrYjJ4bnpxZDBnMHUydG10cXJmeGNjazEifQ.Z2ajmP1ywUc77Z74VlXmWw',
        geocoding: 'https://api.mapbox.com/geocoding/v5/mapbox.places'
    },
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    backend: {
        trendsapi: 'http://localhost:3000/search',
        Tfmodel: 'http://localhost:3000/Tfmodel'
    },
    mapbox: {
        token: 'pk.eyJ1IjoidHJhdmVsbmV0IiwiYSI6ImNrOTk3cHkwaDAzaHkzZHEwMm03ZGN0MG8ifQ.j24u0Q5RbYw7PW4tVpGjmQ',
        geocoding: 'https://api.mapbox.com/geocoding/v5/mapbox.places'
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Andy Yu\Desktop\HTNE\vision\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** string_decoder (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map