(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _verifyotp_verifyotp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verifyotp/verifyotp.component */ "./src/app/verifyotp/verifyotp.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_middel_middel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/middel/middel.component */ "./src/app/layout/middel/middel.component.ts");
/* harmony import */ var _users_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/userlist/userlist.component */ "./src/app/users/userlist/userlist.component.ts");
/* harmony import */ var _order_place_order_place_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order/place-order/place-order.component */ "./src/app/order/place-order/place-order.component.ts");
/* harmony import */ var _order_orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order/orderlist/orderlist.component */ "./src/app/order/orderlist/orderlist.component.ts");
/* harmony import */ var _order_orderdetails_orderdetails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order/orderdetails/orderdetails.component */ "./src/app/order/orderdetails/orderdetails.component.ts");
/* harmony import */ var _layout_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/errorpage/errorpage.component */ "./src/app/layout/errorpage/errorpage.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _refferandearn_refferandearn_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./refferandearn/refferandearn.component */ "./src/app/refferandearn/refferandearn.component.ts");
/* harmony import */ var _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./myprofile/myprofile.component */ "./src/app/myprofile/myprofile.component.ts");
/* harmony import */ var _offer_offer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./offer/offer.component */ "./src/app/offer/offer.component.ts");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/wallet/wallet.component.ts");
/* harmony import */ var _order_confirm_order_confirm_order_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./order/confirm-order/confirm-order.component */ "./src/app/order/confirm-order/confirm-order.component.ts");
/* harmony import */ var _order_paymentresult_paymentresult_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./order/paymentresult/paymentresult.component */ "./src/app/order/paymentresult/paymentresult.component.ts");
/* harmony import */ var _servicecategory_servicecategory_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./servicecategory/servicecategory.component */ "./src/app/servicecategory/servicecategory.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"] },
    { path: 'verifyotp', component: _verifyotp_verifyotp_component__WEBPACK_IMPORTED_MODULE_4__["VerifyotpComponent"] },
    // {path:'dashboard', component:DashboardComponent},
    {
        path: '',
        component: _layout_middel_middel_component__WEBPACK_IMPORTED_MODULE_7__["MiddelComponent"],
        children: [
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], pathMatch: 'full' },
            { path: 'orderlist', component: _order_orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_10__["OrderlistComponent"] },
            { path: 'userlist', component: _users_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_8__["UserlistComponent"] },
            { path: 'orderdetails/:id', component: _order_orderdetails_orderdetails_component__WEBPACK_IMPORTED_MODULE_11__["OrderdetailsComponent"] },
            { path: 'placeorder', component: _order_place_order_place_order_component__WEBPACK_IMPORTED_MODULE_9__["PlaceOrderComponent"] },
            { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_13__["ServicesComponent"] },
            { path: 'servicescategory/:id', component: _servicecategory_servicecategory_component__WEBPACK_IMPORTED_MODULE_20__["ServicecategoryComponent"] },
            { path: 'refferandearn', component: _refferandearn_refferandearn_component__WEBPACK_IMPORTED_MODULE_14__["RefferandearnComponent"] },
            { path: 'profile', component: _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_15__["MyprofileComponent"] },
            { path: 'offers', component: _offer_offer_component__WEBPACK_IMPORTED_MODULE_16__["OfferComponent"] },
            { path: 'userwallet', component: _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_17__["WalletComponent"] },
            { path: 'confirmorder/:id', component: _order_confirm_order_confirm_order_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmOrderComponent"] },
            { path: 'paymentresult/:id', component: _order_paymentresult_paymentresult_component__WEBPACK_IMPORTED_MODULE_19__["PaymentresultComponent"], pathMatch: 'full' },
            { path: 'errorpage', component: _layout_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_12__["ErrorpageComponent"] },
        ]
    },
    {
        path: 'header',
        component: _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _verifyotp_verifyotp_component__WEBPACK_IMPORTED_MODULE_4__["VerifyotpComponent"], _users_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_8__["UserlistComponent"], _order_place_order_place_order_component__WEBPACK_IMPORTED_MODULE_9__["PlaceOrderComponent"], _order_orderdetails_orderdetails_component__WEBPACK_IMPORTED_MODULE_11__["OrderdetailsComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"], _layout_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_12__["ErrorpageComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_13__["ServicesComponent"], _refferandearn_refferandearn_component__WEBPACK_IMPORTED_MODULE_14__["RefferandearnComponent"], _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_15__["MyprofileComponent"], _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_17__["WalletComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <app-middel></app-middel> -->\n\n<router-outlet></router-outlet>\n<!-- \n<button type=\"button\" (click)=\"Success()\">Success</button>\n<button type=\"button\" (click)=\"Error()\">Error</button>\n<button type=\"button\" (click)=\"Warning()\">Warning</button>\n<button type=\"button\" (click)=\"Info()\">Info</button>  -->\n\n<!-- <div *ngIf=\"showlogin; then thenBlock; else elseBlock\"></div>\n\n<ng-template #thenBlock>\n    <router-outlet></router-outlet>\n</ng-template>\n\n<ng-template #elseBlock>\n    <app-middel></app-middel> \n</ng-template> -->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _toster_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toster-service.service */ "./src/app/toster-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _local_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage-service.service */ "./src/app/local-storage-service.service.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(http, toasterService, router, localStorageService, data, renderer) {
        this.http = http;
        this.toasterService = toasterService;
        this.router = router;
        this.localStorageService = localStorageService;
        this.data = data;
        this.renderer = renderer;
        this.title = 'Thew';
        this.showlogin = true;
        this.successMessage = "";
        this.errorMessage = "";
        this.token_id = "";
        this.menuState = "";
        this.postData = {};
        // this.data.currentMessage.subscribe(message => this.message = message)
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                // Show loading indicator
                // this.renderer.removeClass(document.body, 'overlay-open'); 
                console.log("call event");
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                // Hide loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
                // Hide loading indicator
                // Present error to user
                console.log(event.error);
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        // console.log("Check Login call");
        // this.token_id = this.localStorageService.GetValueFromLocalStorage();
        // this.postData = {
        //   token_id: JSON.parse(this.token_id)
        // };
        // let apiUrl = Constant.API_URL+`checklogin`;
        // return this.http.post(apiUrl,this.postData).subscribe(response => {
        //   // console.log(response)
        //   if(response['ERROR_CODE'] == 0)
        //   {
        //     // this.router.navigate(['/dashboard']);
        //   }else{
        //     this.router.navigate(['/login']);
        //   }
        // });
    };
    AppComponent.prototype.Success = function () {
        this.toasterService.Success("Title", "New Toster");
    };
    AppComponent.prototype.Error = function () {
        this.toasterService.Error("Title", "New Toster");
    };
    AppComponent.prototype.Warning = function () {
        this.toasterService.Warning("Title", "New Toster");
    };
    AppComponent.prototype.Info = function () {
        this.toasterService.Info("New Toster");
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _toster_service_service__WEBPACK_IMPORTED_MODULE_2__["TosterService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _local_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageServiceService"], _common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_middel_middel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/middel/middel.component */ "./src/app/layout/middel/middel.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _layout_header_layout_header_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/header-layout/header-layout.component */ "./src/app/layout/header-layout/header-layout.component.ts");
/* harmony import */ var _users_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/userlist/userlist.component */ "./src/app/users/userlist/userlist.component.ts");
/* harmony import */ var _constant_constant_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constant/constant.component */ "./src/app/constant/constant.component.ts");
/* harmony import */ var _toster_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./toster-service.service */ "./src/app/toster-service.service.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");
/* harmony import */ var _order_place_order_place_order_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./order/place-order/place-order.component */ "./src/app/order/place-order/place-order.component.ts");
/* harmony import */ var _local_storage_service_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./local-storage-service.service */ "./src/app/local-storage-service.service.ts");
/* harmony import */ var _interceptors_authinterceptors_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./interceptors/authinterceptors.service */ "./src/app/interceptors/authinterceptors.service.ts");
/* harmony import */ var _order_orderdetails_orderdetails_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./order/orderdetails/orderdetails.component */ "./src/app/order/orderdetails/orderdetails.component.ts");
/* harmony import */ var _order_orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./order/orderlist/orderlist.component */ "./src/app/order/orderlist/orderlist.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _layout_loader_loader_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./layout/loader/loader.component */ "./src/app/layout/loader/loader.component.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _layout_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./layout/errorpage/errorpage.component */ "./src/app/layout/errorpage/errorpage.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _refferandearn_refferandearn_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./refferandearn/refferandearn.component */ "./src/app/refferandearn/refferandearn.component.ts");
/* harmony import */ var _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./myprofile/myprofile.component */ "./src/app/myprofile/myprofile.component.ts");
/* harmony import */ var _order_paymentresult_paymentresult_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./order/paymentresult/paymentresult.component */ "./src/app/order/paymentresult/paymentresult.component.ts");
/* harmony import */ var _offer_offer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./offer/offer.component */ "./src/app/offer/offer.component.ts");
/* harmony import */ var _order_confirm_order_confirm_order_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./order/confirm-order/confirm-order.component */ "./src/app/order/confirm-order/confirm-order.component.ts");
/* harmony import */ var _servicecategory_servicecategory_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./servicecategory/servicecategory.component */ "./src/app/servicecategory/servicecategory.component.ts");
/* harmony import */ var _layout_login_middel_login_middel_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./layout/login-middel/login-middel.component */ "./src/app/layout/login-middel/login-middel.component.ts");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/wallet/wallet.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["routingComponents"],
                _layout_middel_middel_component__WEBPACK_IMPORTED_MODULE_6__["MiddelComponent"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _layout_header_layout_header_layout_component__WEBPACK_IMPORTED_MODULE_10__["HeaderLayoutComponent"],
                _users_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_11__["UserlistComponent"],
                _constant_constant_component__WEBPACK_IMPORTED_MODULE_12__["Constant"],
                _order_place_order_place_order_component__WEBPACK_IMPORTED_MODULE_15__["PlaceOrderComponent"],
                _order_orderdetails_orderdetails_component__WEBPACK_IMPORTED_MODULE_18__["OrderdetailsComponent"],
                _order_orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_19__["OrderlistComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_20__["LogoutComponent"],
                _layout_loader_loader_component__WEBPACK_IMPORTED_MODULE_21__["LoaderComponent"],
                _layout_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_24__["ErrorpageComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_25__["ServicesComponent"],
                _refferandearn_refferandearn_component__WEBPACK_IMPORTED_MODULE_26__["RefferandearnComponent"],
                _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_27__["MyprofileComponent"],
                _order_paymentresult_paymentresult_component__WEBPACK_IMPORTED_MODULE_28__["PaymentresultComponent"],
                _offer_offer_component__WEBPACK_IMPORTED_MODULE_29__["OfferComponent"],
                _order_confirm_order_confirm_order_component__WEBPACK_IMPORTED_MODULE_30__["ConfirmOrderComponent"],
                _servicecategory_servicecategory_component__WEBPACK_IMPORTED_MODULE_31__["ServicecategoryComponent"],
                _layout_login_middel_login_middel_component__WEBPACK_IMPORTED_MODULE_32__["LoginMiddelComponent"],
                _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_33__["WalletComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_22__["LoadingModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_23__["Ng4LoadingSpinnerModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_authinterceptors_service__WEBPACK_IMPORTED_MODULE_17__["AuthinterceptorsService"],
                    multi: true,
                },
                _toster_service_service__WEBPACK_IMPORTED_MODULE_13__["TosterService"],
                _common_service__WEBPACK_IMPORTED_MODULE_14__["CommonService"],
                _local_storage_service_service__WEBPACK_IMPORTED_MODULE_16__["LocalStorageServiceService"],
                _interceptors_authinterceptors_service__WEBPACK_IMPORTED_MODULE_17__["AuthinterceptorsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common.service.ts":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _toster_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toster-service.service */ "./src/app/toster-service.service.ts");
/* harmony import */ var _constant_constant_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant/constant.component */ "./src/app/constant/constant.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _local_storage_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local-storage-service.service */ "./src/app/local-storage-service.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CommonService = /** @class */ (function () {
    function CommonService(http, toasterService, router, localStorageService, spinnerService) {
        this.http = http;
        this.toasterService = toasterService;
        this.router = router;
        this.localStorageService = localStorageService;
        this.spinnerService = spinnerService;
        this.showlogin = 'true';
        this.token_id = "";
        this.postData = {};
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]('default message');
        this.currentMessage = this.messageSource.asObservable();
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
    }
    CommonService.prototype.loadScript = function (url) {
        // console.log('preparing to load...')
        var node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
    };
    CommonService.prototype.checkLogin = function () {
        var _this = this;
        this.showloader();
        this.token_id = this.localStorageService.GetValueFromLocalStorage();
        this.postData = {
            token_id: JSON.parse(this.token_id)
        };
        var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_3__["Constant"].API_URL + "checklogin";
        return this.http.post(apiUrl, this.postData).subscribe(function (response) {
            if (response['ERROR_CODE'] == 0) {
            }
            else {
                _this.router.navigate(['/login']);
            }
            _this.hideloader();
        });
    };
    CommonService.prototype.checkNotLogin = function () {
        var _this = this;
        this.showloader();
        this.token_id = this.localStorageService.GetValueFromLocalStorage();
        this.postData = {
            token_id: JSON.parse(this.token_id)
        };
        // console.log(this.postData);
        var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_3__["Constant"].API_URL + "checknotlogin";
        return this.http.post(apiUrl, this.postData).subscribe(function (response) {
            // console.log(response);
            if (response['ERROR_CODE'] == 0) {
                // this.router.navigate(['/dashboard']);
            }
            else {
                _this.router.navigate(['/dashboard']);
            }
            _this.hideloader();
        });
    };
    CommonService.prototype.showloader = function () {
        this.spinnerService.show();
    };
    CommonService.prototype.hideloader = function () {
        this.spinnerService.hide();
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _toster_service_service__WEBPACK_IMPORTED_MODULE_2__["TosterService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _local_storage_service_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageServiceService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/constant/constant.component.css":
/*!*************************************************!*\
  !*** ./src/app/constant/constant.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/constant/constant.component.html":
/*!**************************************************!*\
  !*** ./src/app/constant/constant.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  constant works!\n</p>\n"

/***/ }),

/***/ "./src/app/constant/constant.component.ts":
/*!************************************************!*\
  !*** ./src/app/constant/constant.component.ts ***!
  \************************************************/
/*! exports provided: Constant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constant", function() { return Constant; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Constant = /** @class */ (function () {
    function Constant() {
    }
    Object.defineProperty(Constant, "HOME_URL", {
        get: function () { return "http://127.0.0.1:8000/thew3/"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constant, "API_URL", {
        get: function () { return "http://127.0.0.1:8000/index.php/api/"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constant, "razor_key", {
        get: function () { return "rzp_test_a8i85PIwYFA2rr"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constant, "razor_secret", {
        get: function () { return "5lxZSpm4wxmKs5xTr6scBVe0"; },
        enumerable: true,
        configurable: true
    });
    ;
    Constant.prototype.ngOnInit = function () {
    };
    Constant = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-constant',
            template: __webpack_require__(/*! ./constant.component.html */ "./src/app/constant/constant.component.html"),
            styles: [__webpack_require__(/*! ./constant.component.css */ "./src/app/constant/constant.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Constant);
    return Constant;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-dashboard {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      \n      \n      <!-- <div class=\"block-header\">\n          <h2>DASHBOARD</h2>\n      </div> -->\n\n      <!-- Widgets -->\n      <div class=\"row clearfix\">\n          <a routerLink=\"/placeorder\">\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n                <div class=\"info-box bg-pink hover-expand-effect\">\n                    <div class=\"icon\">\n                        <i class=\"material-icons\">playlist_add_check</i>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"text\">Place your order</div>\n                        <!-- <div class=\"number count-to\" data-from=\"0\" data-to=\"125\" data-speed=\"15\" data-fresh-interval=\"20\"></div> -->\n                    </div>\n                </div>\n            </div>\n          </a>\n          <a routerLink=\"/services\">\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n                <div class=\"info-box bg-cyan hover-expand-effect\">\n                    <div class=\"icon\">\n                        <i class=\"material-icons\">help</i>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"text\">Our Services</div>\n                        <!-- <div class=\"number count-to\" data-from=\"0\" data-to=\"257\" data-speed=\"1000\" data-fresh-interval=\"20\"></div> -->\n                    </div>\n                </div>\n            </div>\n          </a>\n          <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n              <div class=\"info-box bg-light-green hover-expand-effect\">\n                  <div class=\"icon\">\n                      <i class=\"material-icons\">forum</i>\n                  </div>\n                  <div class=\"content\">\n                      <div class=\"text\">NEW COMMENTS</div>\n                      <div class=\"number count-to\" data-from=\"0\" data-to=\"243\" data-speed=\"1000\" data-fresh-interval=\"20\"></div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n              <div class=\"info-box bg-orange hover-expand-effect\">\n                  <div class=\"icon\">\n                      <i class=\"material-icons\">person_add</i>\n                  </div>\n                  <div class=\"content\">\n                      <div class=\"text\">NEW VISITORS</div>\n                      <div class=\"number count-to\" data-from=\"0\" data-to=\"1225\" data-speed=\"1000\" data-fresh-interval=\"20\"></div>\n                  </div>\n              </div>\n          </div> -->\n      </div>\n      <!-- #END# Widgets -->\n      "

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(commonservice) {
        this.commonservice = commonservice;
        this.successMessage = "";
        this.errorMessage = "";
        this.showlogin = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.commonservice.showloader();
        this.commonservice.checkLogin();
        // this.data.currentMessage.subscribe(message => this.message = message);
        // this.data.checkLogin("Hello from Sibling");
        this.successMessage = "hiiiiiii";
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/interceptors/authinterceptors.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/interceptors/authinterceptors.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthinterceptorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthinterceptorsService", function() { return AuthinterceptorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _local_storage_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../local-storage-service.service */ "./src/app/local-storage-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthinterceptorsService = /** @class */ (function () {
    function AuthinterceptorsService(localStorageService) {
        this.localStorageService = localStorageService;
    }
    AuthinterceptorsService.prototype.intercept = function (req, next) {
        // console.log("hii interceptors");
        // console.log(req);
        // console.log(this.localStorageService.GetValueFromLocalStorage());
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type':  'application/json',
        //     // 'Authorization': '1234',
        //     'Access-Control-Allow-Origin': '*',
        //     'dummy': 'dummy',
        //   })
        // };
        var tokendata = this.localStorageService.GetValueFromLocalStorage();
        var authHeader = 'Bearer ' + tokendata;
        if (tokendata != null) {
            console.log("Local token - " + tokendata);
        }
        var authReq = req.clone({
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': authHeader
            })
        });
        // var dummydata = 'dummydata';
        // // const authReq = req.clone({setHeaders: {'Authorization' :"bele",'abc': dummydata}});
        // const authReq = req.clone({ headers: req.headers.set("dummy", "headerValue") });
        // console.log(authReq);
        return next.handle(authReq);
    };
    AuthinterceptorsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_local_storage_service_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageServiceService"]])
    ], AuthinterceptorsService);
    return AuthinterceptorsService;
}());



/***/ }),

/***/ "./src/app/layout/errorpage/errorpage.component.css":
/*!**********************************************************!*\
  !*** ./src/app/layout/errorpage/errorpage.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/errorpage/errorpage.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/errorpage/errorpage.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin:: Page -->\n<div class=\"m-grid m-grid--hor m-grid--root m-page\">\n  <div class=\"m-grid__item m-grid__item--fluid m-grid  m-error-6\" style=\"background-image: url(assets/app/media/img//error/bg6.jpg);\">\n    <div class=\"m-error_container\">\n      <div class=\"m-error_subtitle m--font-light\">\n        <h1>\n          Oops...\n        </h1>\n      </div>\n      <p class=\"m-error_description m--font-light\">\n        Looks like something went wrong.\n        <br>\n        We're working on it\n      </p>\n    </div>\n  </div>\n</div>\n<!-- end:: Page -->"

/***/ }),

/***/ "./src/app/layout/errorpage/errorpage.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/errorpage/errorpage.component.ts ***!
  \*********************************************************/
/*! exports provided: ErrorpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorpageComponent", function() { return ErrorpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorpageComponent = /** @class */ (function () {
    function ErrorpageComponent() {
    }
    ErrorpageComponent.prototype.ngOnInit = function () {
    };
    ErrorpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-errorpage',
            template: __webpack_require__(/*! ./errorpage.component.html */ "./src/app/layout/errorpage/errorpage.component.html"),
            styles: [__webpack_require__(/*! ./errorpage.component.css */ "./src/app/layout/errorpage/errorpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorpageComponent);
    return ErrorpageComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"m-grid__item\t\tm-footer \">\n    <div class=\"m-container m-container--fluid m-container--full-height m-page__container\">\n      <div class=\"m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop\">\n        <div class=\"m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last\">\n          <span class=\"m-footer__copyright\">\n             &copy;\n            <a href=\"https://kissht.com\" class=\"m-link\" target=\"_blank\">\n              Kissht.com\n            </a>\n          </span>\n        </div>\n        <div class=\"m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first\">\n          <ul class=\"m-footer__nav m-nav m-nav--inline m--pull-right\">\n            <li class=\"m-nav__item\">\n              <a href=\"#\" class=\"m-nav__link\">\n                <span class=\"m-nav__link-text\">\n                  About\n                </span>\n              </a>\n            </li>\n            <li class=\"m-nav__item\">\n              <a href=\"#\"  class=\"m-nav__link\">\n                <span class=\"m-nav__link-text\"> \n                  Privacy\n                </span>\n              </a>\n            </li>\n            <li class=\"m-nav__item\">\n              <a href=\"#\" class=\"m-nav__link\">\n                <span class=\"m-nav__link-text\">\n                  Tc\n                </span>\n              </a>\n            </li>\n            \n          </ul>\n        </div>\n      </div>\n    </div>\n  </footer>"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layout/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header-layout/header-layout.component.css":
/*!******************************************************************!*\
  !*** ./src/app/layout/header-layout/header-layout.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ls-closed .navbar-brand {\n    margin-left: 50px;\n}"

/***/ }),

/***/ "./src/app/layout/header-layout/header-layout.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/header-layout/header-layout.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Loader -->\n<div class=\"page-loader-wrapper\">\n  <div class=\"loader\">\n      <div class=\"preloader\">\n          <div class=\"spinner-layer pl-red\">\n              <div class=\"circle-clipper left\">\n                  <div class=\"circle\"></div>\n              </div>\n              <div class=\"circle-clipper right\">\n                  <div class=\"circle\"></div>\n              </div>\n          </div>\n      </div>\n      <p>Please wait...</p>\n  </div>\n</div>\n<!-- #END# Page Loader -->\n<!-- Overlay For Sidebars -->\n<div class=\"overlay\"></div>\n<!-- #END# Overlay For Sidebars -->\n<!-- Search Bar -->\n<div class=\"search-bar\">\n  <div class=\"search-icon\">\n      <i class=\"material-icons\">search</i>\n  </div>\n  <input type=\"text\" placeholder=\"START TYPING...\">\n  <div class=\"close-search\">\n      <i class=\"material-icons\">close</i>\n  </div>\n</div>\n<!-- #END# Search Bar -->\n<!-- Top Bar -->\n<nav class=\"navbar\">\n  <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n          <a href=\"javascript:void(0);\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\" aria-expanded=\"false\"></a>\n          <a href=\"javascript:void(0);\" class=\"bars\"></a>\n          <a class=\"navbar-brand\">Thew</a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-right\">\n              <!-- Call Search -->\n              <li><a href=\"javascript:void(0);\" class=\"js-search\" data-close=\"true\"><i class=\"material-icons\">search</i></a></li>\n              <!-- #END# Call Search -->\n              <!-- Notifications -->\n              <li class=\"dropdown\">\n                  <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\">\n                      <i class=\"material-icons\">notifications</i>\n                      <span class=\"label-count\">7</span>\n                  </a>\n                  <ul class=\"dropdown-menu\">\n                      <li class=\"header\">NOTIFICATIONS</li>\n                      <li class=\"body\">\n                          <ul class=\"menu\">\n                              <li>\n                                  <a href=\"javascript:void(0);\">\n                                      <div class=\"icon-circle bg-light-green\">\n                                          <i class=\"material-icons\">person_add</i>\n                                      </div>\n                                      <div class=\"menu-info\">\n                                          <h4>12 new members joined</h4>\n                                          <p>\n                                              <i class=\"material-icons\">access_time</i> 14 mins ago\n                                          </p>\n                                      </div>\n                                  </a>\n                              </li>\n                              <li>\n                                  <a href=\"javascript:void(0);\">\n                                      <div class=\"icon-circle bg-cyan\">\n                                          <i class=\"material-icons\">add_shopping_cart</i>\n                                      </div>\n                                      <div class=\"menu-info\">\n                                          <h4>4 sales made</h4>\n                                          <p>\n                                              <i class=\"material-icons\">access_time</i> 22 mins ago\n                                          </p>\n                                      </div>\n                                  </a>\n                              </li>\n                              <li>\n                                  <a href=\"javascript:void(0);\">\n                                      <div class=\"icon-circle bg-red\">\n                                          <i class=\"material-icons\">delete_forever</i>\n                                      </div>\n                                      <div class=\"menu-info\">\n                                          <h4><b>Nancy Doe</b> deleted account</h4>\n                                          <p>\n                                              <i class=\"material-icons\">access_time</i> 3 hours ago\n                                          </p>\n                                      </div>\n                                  </a>\n                              </li>\n                              <li>\n                                  <a href=\"javascript:void(0);\">\n                                      <div class=\"icon-circle bg-orange\">\n                                          <i class=\"material-icons\">mode_edit</i>\n                                      </div>\n                                      <div class=\"menu-info\">\n                                          <h4><b>Nancy</b> changed name</h4>\n                                          <p>\n                                              <i class=\"material-icons\">access_time</i> 2 hours ago\n                                          </p>\n                                      </div>\n                                  </a>\n                              </li>\n                              <li>\n                                  <a href=\"javascript:void(0);\">\n                                      <div class=\"icon-circle bg-blue-grey\">\n                                          <i class=\"material-icons\">comment</i>\n                                      </div>\n                                      <div class=\"menu-info\">\n                                          <h4><b>John</b> commented your post</h4>\n                                          <p>\n                                              <i class=\"material-icons\">access_time</i> 4 hours ago\n                                          </p>\n                                      </div>\n                                  </a>\n                              </li>\n                              <li>\n                                  <a href=\"javascript:void(0);\">\n                                      <div class=\"icon-circle bg-light-green\">\n                                          <i class=\"material-icons\">cached</i>\n                                      </div>\n                                      <div class=\"menu-info\">\n                                          <h4><b>John</b> updated status</h4>\n                                          <p>\n                                              <i class=\"material-icons\">access_time</i> 3 hours ago\n                                          </p>\n                                      </div>\n                                  </a>\n                              </li>\n                              <li>\n                                  <a href=\"javascript:void(0);\">\n                                      <div class=\"icon-circle bg-purple\">\n                                          <i class=\"material-icons\">settings</i>\n                                      </div>\n                                      <div class=\"menu-info\">\n                                          <h4>Settings updated</h4>\n                                          <p>\n                                              <i class=\"material-icons\">access_time</i> Yesterday\n                                          </p>\n                                      </div>\n                                  </a>\n                              </li>\n                          </ul>\n                      </li>\n                      <li class=\"footer\">\n                          <a href=\"javascript:void(0);\">View All Notifications</a>\n                      </li>\n                  </ul>\n              </li>\n              <!-- #END# Notifications -->\n              <!-- Tasks -->\n              <li class=\"dropdown\">\n                  <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\">\n                      <i class=\"material-icons\">flag</i>\n                      <span class=\"label-count\">9</span>\n                  </a>\n                  <ul class=\"dropdown-menu\">\n                      <li class=\"header\">TASKS</li>\n                      <li class=\"body\">\n                          <ul class=\"menu tasks\">\n                              <li>\n                                  <a href=\"javascript:void(0);\">\n                                      <h4>\n                                          Footer display issue\n                                          <small>32%</small>\n                                      </h4>\n                                      <div class=\"progress\">\n                                          <div class=\"progress-bar bg-pink\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 32%\">\n                                          </div>\n                                      </div>\n                                  </a>\n                              </li>\n                              <li>\n                                  <a href=\"javascript:void(0);\">\n                                      <h4>\n                                          Make new buttons\n                                          <small>45%</small>\n                                      </h4>\n                                      <div class=\"progress\">\n                                          <div class=\"progress-bar bg-cyan\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 45%\">\n                                          </div>\n                                      </div>\n                                  </a>\n                              </li>\n                              <li>\n                                  <a href=\"javascript:void(0);\">\n                                      <h4>\n                                          Create new dashboard\n                                          <small>54%</small>\n                                      </h4>\n                                      <div class=\"progress\">\n                                          <div class=\"progress-bar bg-teal\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 54%\">\n                                          </div>\n                                      </div>\n                                  </a>\n                              </li>\n                              <li>\n                                  <a href=\"javascript:void(0);\">\n                                      <h4>\n                                          Solve transition issue\n                                          <small>65%</small>\n                                      </h4>\n                                      <div class=\"progress\">\n                                          <div class=\"progress-bar bg-orange\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 65%\">\n                                          </div>\n                                      </div>\n                                  </a>\n                              </li>\n                              <li>\n                                  <a href=\"javascript:void(0);\">\n                                      <h4>\n                                          Answer GitHub questions\n                                          <small>92%</small>\n                                      </h4>\n                                      <div class=\"progress\">\n                                          <div class=\"progress-bar bg-purple\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 92%\">\n                                          </div>\n                                      </div>\n                                  </a>\n                              </li>\n                          </ul>\n                      </li>\n                      <li class=\"footer\">\n                          <a href=\"javascript:void(0);\">View All Tasks</a>\n                      </li>\n                  </ul>\n              </li>\n              <!-- #END# Tasks -->\n              <li class=\"pull-right\"><a href=\"javascript:void(0);\" class=\"js-right-sidebar\" data-close=\"true\"><i class=\"material-icons\">more_vert</i></a></li>\n          </ul>\n      </div>\n  </div>\n</nav>\n<!-- #Top Bar -->"

/***/ }),

/***/ "./src/app/layout/header-layout/header-layout.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/header-layout/header-layout.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLayoutComponent", function() { return HeaderLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderLayoutComponent = /** @class */ (function () {
    function HeaderLayoutComponent() {
    }
    HeaderLayoutComponent.prototype.ngOnInit = function () {
    };
    HeaderLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-layout',
            template: __webpack_require__(/*! ./header-layout.component.html */ "./src/app/layout/header-layout/header-layout.component.html"),
            styles: [__webpack_require__(/*! ./header-layout.component.css */ "./src/app/layout/header-layout/header-layout.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], HeaderLayoutComponent);
    return HeaderLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/loader/loader.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/loader/loader.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .loading{\n\tposition:fixed;\n\twidth:100%;\n\theight:100%;\n\ttop:0px;\n\tleft:0px;\n\tbackground-color:rgba(0,0,0,0.6);\n\tz-index:5;\n\tdisplay:none;\n}\n.loading img{\n\tposition:absolute;\n\ttop:50%;\n\tleft:50%;\n\t\twidth:50px;\n} */\n\n/* .loader{\n    position: absolute;\n    width: 200px;\n    left: 46%;\n    top: 50%;\n    /* position:absolute;\n\ttop:50%;\n\tleft:50%;\n\t\twidth:50px; \n} */\n\n.loaderajaxbx{ width: 100%; height: 100vh; position: fixed; text-align: center; padding-top: 20%; background: rgba(0, 0, 0, 0.5); z-index:9999;  }\n\n.m-loader {\n    margin-top: 21% !important;\n}\n\n.loadermain {\n    width: 100%;\n    height: 100vh;\n    position: fixed;\n    z-index: 99;\n    background: rgba(0, 0, 0, 0.5);\n    top: 0;\n    left: 0;\n}\n\n.m-loader::before {\n    width: 80px;\n    height: 80px;\n    border-top-color: #5867dd;\n}"

/***/ }),

/***/ "./src/app/layout/loader/loader.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/loader/loader.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- <div id=\"searching\" class=\"loading loader\" *ngIf=\"showloader\">\n    <a href=\"#\" class=\"btn m-btn btn-outline-primary m-loader m-loader--primary m-loader--left\">\n        Button\n      </a>\n</div> -->\n\n<!-- <ngx-loading [show]=\"loading\"><div id=\"searching\" class=\"loading loader\">Loading...</div></ngx-loading> -->\n\n<ng4-loading-spinner [loadingText]=\"\" [template]=''>Please Wait.....</ng4-loading-spinner>\n<!-- <div class=\"visible spinner center loadermain\">\n    <div class=\"m-loader\"></div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/layout/loader/loader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
        // template: string = '<div id="searching" class="loading loader" *ngIf="showloader"><a href="#" class="btn m-btn btn-outline-primary m-loader m-loader--primary m-loader--left">Button</a></div>';
        this.template = '<div class="m-loader"></div>';
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/layout/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/layout/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/login-middel/login-middel.component.css":
/*!****************************************************************!*\
  !*** ./src/app/layout/login-middel/login-middel.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/login-middel/login-middel.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/login-middel/login-middel.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login-middel works!\n</p>\n"

/***/ }),

/***/ "./src/app/layout/login-middel/login-middel.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/login-middel/login-middel.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginMiddelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginMiddelComponent", function() { return LoginMiddelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginMiddelComponent = /** @class */ (function () {
    function LoginMiddelComponent() {
    }
    LoginMiddelComponent.prototype.ngOnInit = function () {
    };
    LoginMiddelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-middel',
            template: __webpack_require__(/*! ./login-middel.component.html */ "./src/app/layout/login-middel/login-middel.component.html"),
            styles: [__webpack_require__(/*! ./login-middel.component.css */ "./src/app/layout/login-middel/login-middel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginMiddelComponent);
    return LoginMiddelComponent;
}());



/***/ }),

/***/ "./src/app/layout/middel/middel.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/middel/middel.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/middel/middel.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/middel/middel.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-loader></app-loader>\n<app-header-layout></app-header-layout>\n\n<app-sidebar></app-sidebar>\n<section class=\"content\">\n    <div class=\"container-fluid\">\n        <router-outlet></router-outlet>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/layout/middel/middel.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/middel/middel.component.ts ***!
  \***************************************************/
/*! exports provided: MiddelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiddelComponent", function() { return MiddelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MiddelComponent = /** @class */ (function () {
    function MiddelComponent(commonservice, renderer) {
        this.commonservice = commonservice;
        this.renderer = renderer;
    }
    MiddelComponent.prototype.ngOnInit = function () {
        // this.renderer.addClass(document.body, 'theme-red');
        this.commonservice.checkLogin();
    };
    MiddelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-middel',
            template: __webpack_require__(/*! ./middel.component.html */ "./src/app/layout/middel/middel.component.html"),
            styles: [__webpack_require__(/*! ./middel.component.css */ "./src/app/layout/middel/middel.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], MiddelComponent);
    return MiddelComponent;
}());



/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.css":
/*!******************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".m-aside-left.m-aside-left--skin-dark {\n    background-color: #2c2e3e;\n    height: 90vh;\n}"

/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- #Top Bar --> \n<section>\n  <!-- Left Sidebar -->\n  <aside id=\"leftsidebar\" class=\"sidebar\">\n      <!-- User Info -->\n      <div class=\"user-info\">\n          <div class=\"image\">\n              <img src=\"assets/images/user.png\" width=\"48\" height=\"48\" alt=\"User\" />\n          </div>\n          <div class=\"info-container\">\n              <div class=\"name\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Name</div>\n              <div class=\"email\">Mobile</div>\n          </div>\n      </div>\n      <!-- #User Info -->\n      <!-- Menu -->\n      <div class=\"menu\">\n          <ul class=\"list\">\n              <li class=\"active\">\n                  <a routerLink=\"/dashboard\">\n                      <i class=\"material-icons\">home</i>\n                      <span>Home</span>\n                  </a>\n              </li>\n              <li>\n                  <a routerLink=\"/services\">\n                      <i class=\"material-icons\">local_laundry_service</i>\n                      <span>Our Services</span>\n                  </a>\n              </li>\n              <li>\n                  <a routerLink=\"/orderlist\">\n                      <i class=\"material-icons\">airport_shuttle</i>\n                      <span>Your Orders</span>\n                  </a>\n              </li>\n              <li>\n                <a routerLink=\"/offers\">\n                    <i class=\"material-icons\">local_offer</i>\n                    <span>Offers</span>\n                </a>\n            </li>\n            <li>\n                <a routerLink=\"/userwallet\">\n                    <i class=\"material-icons\">account_balance_wallet</i>\n                    <span>Wallet</span>\n                </a>\n            </li>\n            <li>\n                <a routerLink=\"/refferandearn\">\n                    <i class=\"material-icons\">layers</i>\n                    <span>Reffer & Earn</span>\n                </a>\n            </li>\n              <li>\n                <a href=\"tel:+919975541407\">\n                    <i class=\"material-icons\">call</i>\n                    <span>Call Us</span>\n                </a>\n            </li>\n              <li>\n                <a routerLink=\"/logout\">\n                    <i class=\"material-icons\">input</i>\n                    <span>Log Out</span>\n                </a>\n            </li>\n\n          </ul>\n      </div>\n      <!-- #Menu -->\n      <!-- Footer -->\n      <div class=\"legal\">\n          <div class=\"copyright\">\n              &copy; 2018 <a href=\"javascript:void(0);\">Thew</a>.\n          </div>\n          <div class=\"version\">\n              <b>Version: </b> 1.0.5\n          </div>\n      </div>\n      <!-- #Footer -->\n  </aside>\n  <!-- #END# Left Sidebar -->\n  \n</section>"

/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/layout/sidebar/sidebar.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/local-storage-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/local-storage-service.service.ts ***!
  \**************************************************/
/*! exports provided: LocalStorageServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageServiceService", function() { return LocalStorageServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorageServiceService = /** @class */ (function () {
    function LocalStorageServiceService() {
        this.channelPartnerTokenKey = "channel_partner_token";
    }
    LocalStorageServiceService.prototype.SetAuthorizationData = function (token) {
        localStorage.setItem(this.channelPartnerTokenKey, JSON.stringify(token));
    };
    LocalStorageServiceService.prototype.GetValueFromLocalStorage = function () {
        var token_data = localStorage.getItem(this.channelPartnerTokenKey);
        return token_data == null ? null : token_data;
    };
    LocalStorageServiceService.prototype.RemoveValueFromLocalStorage = function () {
        localStorage.removeItem(this.channelPartnerTokenKey);
    };
    LocalStorageServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageServiceService);
    return LocalStorageServiceService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader></app-loader>\n<div class=\"signup-box\">\n  <div class=\"logo\">\n      <a href=\"javascript:void(0);\">Admin<b>BSB</b></a>\n      <small>Admin BootStrap Based - Material Design</small>\n  </div>\n  <div class=\"card\">\n      <div class=\"body\">\n          <div *ngIf=\"successMessage\" class=\"alert alert-success\">{{successMessage}}</div>\n          <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\n          <form id=\"sign_up\" method=\"POST\" novalidate #formdata=\"ngForm\" (ngSubmit) = \"onSubmit(formdata)\">\n              <div class=\"msg\">Register as New User</div>\n              <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                      <i class=\"material-icons\">person</i>\n                  </span>\n                  <div class=\"form-line\">\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" #userName=\"ngModel\" name=\"name\" placeholder=\"Name\" autofocus>\n                      <span *ngIf=\"userName.errors?.required && userName.touched\">Name is required</span>\n                  </div>\n              </div>\n              <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                      <i class=\"material-icons\">email</i>\n                  </span>\n                  <div class=\"form-line\">\n                      <input class=\"form-control\" type=\"number\" [(ngModel)]=\"mobile\" #userMobile=\"ngModel\" name=\"mobile\" placeholder=\"Mobile No.\">\n                      <div *ngIf=\"userMobile?.touched\">\n                          <div *ngIf=\"userMobile.errors?.required\">Mobile Noumber is required</div>\n                        <div *ngIf=\"userMobile.errors?.minlength || userMobile.errors?.pattern\">Invalid Mobile Noumber</div>\n                      </div>\n                  </div>\n              </div>\n              <!-- <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                      <i class=\"material-icons\">lock</i>\n                  </span>\n                  <div class=\"form-line\">\n                      <input type=\"password\" class=\"form-control\" name=\"password\" minlength=\"6\" placeholder=\"Password\" required>\n                  </div>\n              </div>\n              <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                      <i class=\"material-icons\">lock</i>\n                  </span>\n                  <div class=\"form-line\">\n                      <input type=\"password\" class=\"form-control\" name=\"confirm\" minlength=\"6\" placeholder=\"Confirm Password\" required>\n                  </div>\n              </div> -->\n              <!-- <div class=\"form-group\">\n                  <input type=\"checkbox\" name=\"terms\" id=\"terms\" class=\"filled-in chk-col-pink\">\n                  <label for=\"terms\">I read and agree to the <a href=\"javascript:void(0);\">terms of usage</a>.</label>\n              </div> -->\n\n              <button class=\"btn btn-block btn-lg bg-pink waves-effect\" type=\"submit\">SIGN UP</button>\n\n              <!-- <div class=\"m-t-25 m-b--5 align-center\">\n                  <a href=\"sign-in.html\">You already have a membership?</a>\n              </div> -->\n          </form>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant/constant.component */ "./src/app/constant/constant.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _local_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../local-storage-service.service */ "./src/app/local-storage-service.service.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router, localStorageService, commonservice, renderer) {
        this.http = http;
        this.router = router;
        this.localStorageService = localStorageService;
        this.commonservice = commonservice;
        this.renderer = renderer;
        this.successMessage = "";
        this.errorMessage = "";
        this.postvalue = [];
        this.commonservice.checkNotLogin();
        // this.spinnerService.show();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.renderer.addClass(document.body, 'signup-page');
        // console.log(this.localStorageService.GetValueFromLocalStorage());
        // this.postvalue['email'] ="gfdg";
        // this.postvalue['pass'] ="gfdg";
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type':  'application/json',
        //     'username': '36017',
        //     'Access-Control-Allow-Origin': '*',
        //     'password':'N41D9sFQU5E0e8v9PkNa6W3IvIacQrpcjjDdvc0B',
        //     'token':'BZMWYRC7FA8XP1QRDV8BQ548VYY5J2Q3'
        //   })
        // };
        // console.log(this.postvalue);
        // let apiUrl = `http://localhost/kissht/api/v2/user_management/send_otp`;
        // return this.http.post(apiUrl,this.postvalue,httpOptions).subscribe(response => {
        //   console.log(response)
        // });
    };
    LoginComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid) {
            this.commonservice.showloader();
            var localstoragetoken = this.localStorageService.GetValueFromLocalStorage();
            // value.push({login_token:localstoragetoken});
            value['login_token'] = localstoragetoken;
            // console.log(value);
            var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_URL + "getLoginData";
            return this.http.post(apiUrl, value).subscribe(function (response) {
                // console.log(response)
                if (response['ERROR_CODE'] == 0) {
                    _this.successMessage = "Data get successfully.";
                    _this.localStorageService.SetAuthorizationData(response['DATA']);
                    _this.errorMessage = "";
                    _this.router.navigate(['verifyotp']);
                }
                else {
                    _this.errorMessage = response['ERROR_DESCRIPTION'];
                    _this.successMessage = "";
                }
                _this.commonservice.hideloader();
            });
        }
        else {
            this.errorMessage = "Enter required fields.";
            this.successMessage = "";
        }
        this.commonservice.hideloader();
    };
    LoginComponent.prototype.verifyOtp = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _local_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageServiceService"], _common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant/constant.component */ "./src/app/constant/constant.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _local_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../local-storage-service.service */ "./src/app/local-storage-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(http, router, localStorageService) {
        this.http = http;
        this.router = router;
        this.localStorageService = localStorageService;
        this.successMessage = "";
        this.errorMessage = "";
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_URL + "logout";
        return this.http.get(apiUrl).subscribe(function (response) {
            console.log(response);
            if (response['ERROR_CODE'] == 0) {
                _this.localStorageService.RemoveValueFromLocalStorage();
                // this.errorMessage = "";
                _this.router.navigate(['login']);
            }
            else {
                _this.errorMessage = response['ERROR_DESCRIPTION'];
                _this.successMessage = "";
            }
        });
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _local_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageServiceService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/myprofile/myprofile.component.css":
/*!***************************************************!*\
  !*** ./src/app/myprofile/myprofile.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/myprofile/myprofile.component.html":
/*!****************************************************!*\
  !*** ./src/app/myprofile/myprofile.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\n  <div class=\"m-subheader \">\n  <div class=\"d-flex align-items-center\">\n    <div class=\"mr-auto\">\n      <h3 class=\"m-subheader__title\">\n        Welcome Profile\n      </h3>\t\t\t\t\t\t\t\t\n    </div>\t\t\t\t\t\t\t\n  </div>\n</div>\n\n<div class=\"m-content\">\n  <div class=\"row\">\n    \n    <div class=\"col-xl-12 col-lg-8\">\n      <div class=\"m-portlet m-portlet--full-height m-portlet--tabs  \">\n        \n        <div class=\"tab-content\">\n          <div class=\"tab-pane active\" id=\"m_user_profile_tab_1\">\n            <form class=\"m-form m-form--fit m-form--label-align-right\" novalidate #formdata=\"ngForm\" (ngSubmit) = \"onSubmitt(formdata)\">\n\t\t\t\t\t\n              <div class=\"m-portlet__body\">\n                \n                <div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t\t<label for=\"\">\n\t\t\t\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"email\" #useremail=\"ngModel\" name=\"email\" class=\"form-control m-input\" placeholder=\"Enter Email\">\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"useremail.errors?.required && useremail.touched\">Name is required</span>\n\t\t  \t\t\t\t\t</div>\n                 \n                <div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t\t<label for=\"\">\n\t\t\t\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"name\" #userName=\"ngModel\" name=\"name\" class=\"form-control m-input\" placeholder=\"Enter Name\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback\" *ngIf=\"userName.errors?.required && userName.touched\">\n\t\t\t\t\t\t\t\t\t\tPlease Enter Name\n\t\t\t\t\t\t\t\t\t</div>\n\t\t  \t\t\t\t\t</div>\n\t\t  \t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t<label for=\"exampleTextarea\">\n\t\t\t\t\t\t\t\t\tAddress\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<textarea class=\"form-control m-input\" name=\"address\" #useraddress=\"ngModel\" [(ngModel)]=\"address\" id=\"exampleTextarea\" rows=\"3\"></textarea>\n\t\t\t\t\t\t\t\t<div class=\"form-control-feedback\" *ngIf=\"useraddress.errors?.required && useraddress.touched\">\n\t\t\t\t\t\t\t\t\t\tPlease Enter Address.\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t<label for=\"\">\n\t\t\t\t\t\t\t\t\tLandmark\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"landmark\" [(ngModel)]=\"landmark\" #userlandmark=\"ngModel\" class=\"form-control m-input\" placeholder=\"Enter Landmark\">\n\t\t\t\t\t\t\t\t<div class=\"form-control-feedback\" *ngIf=\"userlandmark.errors?.required && userlandmark.touched\">\n\t\t\t\t\t\t\t\t\tLandmark Required.\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t<label for=\"\">\n\t\t\t\t\t\t\t\t\tPincode\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"pincode\" [(ngModel)]=\"pincode\" #userpincode=\"ngModel\" class=\"form-control m-input\" placeholder=\"Enter Pincode\">\n\t\t\t\t\t\t\t\t<div class=\"form-control-feedback\" *ngIf=\"userpincode.errors?.required && userpincode.touched\">\n\t\t\t\t\t\t\t\t\tPincode Required.\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n              <div class=\"form-group m-form__group\">\n                <label for=\"\">\n                  Mobile No.\n                </label>\n                <input type=\"number\" name=\"mobile\" [(ngModel)]=\"mobile\" #mobileno=\"ngModel\" class=\"form-control m-input\" placeholder=\"Enter Mobile No.\">\n                <div class=\"form-control-feedback\" *ngIf=\"mobileno.errors?.required && mobileno.touched\">\n                  Please Mobile No.\n                </div> \n            </div>\n              </div>\n              </form>\n              <div class=\"m-portlet__foot m-portlet__foot--fit\">\n                <div class=\"m-form__actions\">\n                  <div class=\"row\">\n                    <div class=\"col-2\"></div>\n                    <div class=\"col-7\">\n                      <button type=\"submit\" class=\"btn btn-accent m-btn m-btn--custom purplebtn\">\n                        Save\n                      </button>\n                      <!-- &nbsp;&nbsp;\n                      <a href=\"dashboard\" class=\"btn btn-secondary m-btn m-btn--air m-btn--custom\">\n                        Cancel\n                      </a> -->\n                    </div>\n                  </div>\n                </div>\n              </div>\n            <!--</form>-->\n            \n          </div>\n          <!-- <div class=\"tab-pane active\" id=\"m_user_profile_tab_2\"></div> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\t\t\n</div>"

/***/ }),

/***/ "./src/app/myprofile/myprofile.component.ts":
/*!**************************************************!*\
  !*** ./src/app/myprofile/myprofile.component.ts ***!
  \**************************************************/
/*! exports provided: MyprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofileComponent", function() { return MyprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyprofileComponent = /** @class */ (function () {
    function MyprofileComponent() {
        this.email = "";
    }
    MyprofileComponent.prototype.ngOnInit = function () {
    };
    MyprofileComponent.prototype.onSubmitt = function (_a) {
        var value = _a.value, valid = _a.valid;
        console.log(value);
        if (valid) {
        }
    };
    MyprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myprofile',
            template: __webpack_require__(/*! ./myprofile.component.html */ "./src/app/myprofile/myprofile.component.html"),
            styles: [__webpack_require__(/*! ./myprofile.component.css */ "./src/app/myprofile/myprofile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyprofileComponent);
    return MyprofileComponent;
}());



/***/ }),

/***/ "./src/app/offer/offer.component.css":
/*!*******************************************!*\
  !*** ./src/app/offer/offer.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/offer/offer.component.html":
/*!********************************************!*\
  !*** ./src/app/offer/offer.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n          <!-- Changelogs -->\n          <div class=\"block-header\">\n              <h2>Available Offers</h2>\n          </div>\n          <div class=\"row clearfix\" *ngFor=\"let value of OfferData\">\n              <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                  <div class=\"card\">\n                      <div class=\"header\">\n                          <h2>\n                              <button type=\"button\" class=\"btn bg-cyan waves-effect\">{{value['offer_code']}}</button>\n                              <small>{{value['offer_type']}}</small>\n                          </h2>\n                      </div>\n                      <div class=\"body\">\n                          <p>{{value['details']}}</p>\n                      </div>\n                  </div>\n              </div>\n          </div>\n        "

/***/ }),

/***/ "./src/app/offer/offer.component.ts":
/*!******************************************!*\
  !*** ./src/app/offer/offer.component.ts ***!
  \******************************************/
/*! exports provided: OfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferComponent", function() { return OfferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant/constant.component */ "./src/app/constant/constant.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OfferComponent = /** @class */ (function () {
    function OfferComponent(http) {
        this.http = http;
    }
    OfferComponent.prototype.ngOnInit = function () {
        var _this = this;
        var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_URL + "getOfferData";
        return this.http.get(apiUrl).subscribe(function (response) {
            // console.log(response)
            if (response['ERROR_CODE'] == 0) {
                _this.OfferData = response['DATA']['offer_data'];
                // let data = response['DATA']['order_data'];
                // let service_data = response['DATA']['service_data'];
            }
        });
    };
    OfferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offer',
            template: __webpack_require__(/*! ./offer.component.html */ "./src/app/offer/offer.component.html"),
            styles: [__webpack_require__(/*! ./offer.component.css */ "./src/app/offer/offer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OfferComponent);
    return OfferComponent;
}());



/***/ }),

/***/ "./src/app/order/confirm-order/confirm-order.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/order/confirm-order/confirm-order.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order/confirm-order/confirm-order.component.html":
/*!******************************************************************!*\
  !*** ./src/app/order/confirm-order/confirm-order.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n          <div class=\"block-header\">\n              <h2>Payment Details - {{orderdetails.order_unique_id}} </h2>\n          </div>\n          <!-- Blockquotes -->\n          <div class=\"row clearfix\" >\n              <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                  <div class=\"card\">\n                      <div class=\"header\">\n                          <h2>\n                              Confirm Order\n                          </h2>\n                          \n                      </div>\n                      <div class=\"body\">\n                          <blockquote class=\"m-b-25\">\n                              <p>Order Amount<span style=\"float: right\">&#x20B9;{{orderdetails.amount_of_order}}</span></p>\n                          </blockquote>\n                          <blockquote class=\"m-b-25\">\n                              <p>Remaning Amount<span style=\"float: right\">+&#x20B9;0</span></p>\n                          </blockquote>\n                          <blockquote class=\"m-b-25\" *ngIf=\"wallet_amount\">\n                              <p>Wallet Amount<span style=\"float: right\">-&#x20B9;{{orderdetails.total_amount}}</span></p>\n                          </blockquote>\n\n                          <div>\n                            <button type=\"button\" class=\"btn btn-success waves-effect\" *ngIf=\"apply_promocode_button\" (click)=\"apply_promocode()\">Have a promocode</button>\n\n                            <form class=\"m-form m-form--fit m-form--label-align-right\" *ngIf=\"apply_promocode_box\" novalidate [formGroup]='apply_promocode_form' (ngSubmit) = \"onApply()\">\n                              <div class=\"m-portlet__body\">\n                                  \n                                <div class=\"form-group form-float form-group-lg\">\n                                  <div class=\"form-line\">\n                                    <input type=\"text\" class=\"form-control\" formControlName='promocode' [(ngModel)]=\"promocode_value\" placeholder=\"Apply Promocode\" oninput=\"if(value.length>15)value=value.slice(0,15)\">\n                                    \n                                  </div>\n                                  <div *ngIf=\"promocode.invalid && (promocode.dirty || promocode.touched)\">\n                                        <label class=\"error\" *ngIf=\"promocode.errors.required\">Please enter Pramocode</label>\n                                        <label class=\"error\" *ngIf=\"promocode.errors.minlength\">Please enter at least 3 characters.</label>\n                                        <label class=\"error\" *ngIf=\"promocode.errors.pattern\">Please enter valid name.</label>\n                                 </div>\n                                </div>\n                                <span class=\"input-group-btn\">\n                                    <button class=\"btn btn-primary\" type=\"submit\"> \n                                        Apply\n                                    </button>\n                                </span>\n                              </div>\n                              \n                            </form>\n                            <blockquote *ngIf=\"offer_box\">\n                                <p>{{offerData.offer_code}}<span style=\"float: right\">-&#x20B9;{{offer_discount}}</span></p>\n                                <footer><cite title=\"Source Title\" style=\"color:green;\">{{offerData.details}}</cite></footer>\n                                <div class=\"demo-google-material-icon\" (click)=\"cancleOffer()\"> <i class=\"material-icons\">cancel</i></div>\n                            </blockquote>\n                          </div>\n                          <br>\n                          <blockquote class=\"m-b-25\">\n                              <p><b>Total Bill</b><span style=\"float: right\"><b>&#x20B9;{{total_bill}}</b></span></p>\n                          </blockquote>\n\n                          <div class=\"footer\">\n                              <button type=\"button\" class=\"btn btn-info btn-block btn-lg waves-effect\" (click)=\"proceed_to_pay()\">Pay Rs. {{total_bill}}</button>\n                          </div>\n\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <!-- #END# Blockquotes -->\n          \n     "

/***/ }),

/***/ "./src/app/order/confirm-order/confirm-order.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/order/confirm-order/confirm-order.component.ts ***!
  \****************************************************************/
/*! exports provided: ConfirmOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmOrderComponent", function() { return ConfirmOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/constant.component */ "./src/app/constant/constant.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _toster_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../toster-service.service */ "./src/app/toster-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var pay_url = 'https://checkout.razorpay.com/v1/checkout.js';
var ConfirmOrderComponent = /** @class */ (function () {
    function ConfirmOrderComponent(http, router, route, commonservice, toasterService, frmBuilder) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.commonservice = commonservice;
        this.toasterService = toasterService;
        this.frmBuilder = frmBuilder;
        this.orderdetails = "";
        this.postData = {};
        this.transactionData = {};
        this.offerData = {};
        this.razor_key = "";
        this.promocode_value = "";
        this.apply_promocode_button = true;
        this.apply_promocode_box = false;
        this.offer_box = false;
        this.remaning_amount = false;
        this.wallet_amount = false;
        this.total_bill = 0;
        this.offer_discount = 0;
        //This code for check login     
        this.commonservice.checkLogin();
        this.commonservice.loadScript(pay_url);
    }
    ConfirmOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.order_id = params['id']; });
        this.postData = {
            order_id: this.order_id
        };
        //This code for getting payment details of the order
        var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_URL + "getPaymenDetails";
        return this.http.post(apiUrl, this.postData).subscribe(function (response) {
            console.log(response);
            if (response['ERROR_CODE'] == 0) {
                if (response['DATA'].length != 0) {
                    _this.orderdetails = response['DATA']['payment_details'][0];
                    _this.total_bill = _this.orderdetails['total_amount'];
                    // console.log(this.orderdetails)
                }
                else {
                    _this.toasterService.Error("Error", response['ERROR_DESCRIPTION']);
                    _this.router.navigate(['/orderlist']);
                }
            }
            else {
                _this.toasterService.Error("Error", response['ERROR_DESCRIPTION']);
                _this.router.navigate(['/orderlist']);
            }
            _this.commonservice.hideloader();
        });
    };
    ConfirmOrderComponent.prototype.proceed_to_pay = function () {
        var _this = this;
        this.commonservice.showloader();
        this.postData = {
            order_id: this.order_id
        };
        var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_URL + "initiate";
        return this.http.post(apiUrl, this.postData).subscribe(function (response) {
            console.log(response);
            if (response['ERROR_CODE'] == 0) {
                _this.transactionData = response['DATA'];
                //This code for set rezor pay ID
                _this.razor_key = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].razor_key;
                _this.paymentStart();
            }
            else {
                _this.toasterService.Error("Error", response['ERROR_DESCRIPTION']);
                // this.errorMessage = response['ERROR_DESCRIPTION'];
                // this.successMessage = "";
            }
            _this.commonservice.hideloader();
        });
    };
    ConfirmOrderComponent.prototype.paymentStart = function () {
        var _this = this;
        var options = {
            "key": "rzp_test_a8i85PIwYFA2rr",
            "amount": this.total_bill * 100,
            "name": "Merchant Name",
            "description": "Purchase Description",
            "image": "/your_logo.png",
            "handler": function (response) {
                // alert(response.razorpay_payment_id);
                // console.log(this.transaction_id);
                // this.transaction_id = response.razorpay_payment_id;
                // this.storePaymentData(); 
            },
            "prefill": {
                "name": "Harshil Mathur",
                "email": "harshil@razorpay.com"
            },
            "notes": {
                "address": "Hello World",
                "id": this.transactionData['transaction_id'],
                "order_id": this.order_id,
            },
            "theme": {
                "color": "#384ad7" //"#F37254"
            }
        };
        options.handler = function (response) {
            _this.storePaymentData(response);
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    };
    ConfirmOrderComponent.prototype.storePaymentData = function (transaction_id) {
        var _this = this;
        this.commonservice.showloader();
        this.postData = {
            transaction_id: transaction_id.razorpay_payment_id
        };
        var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_URL + "storeTransData";
        return this.http.post(apiUrl, this.postData).subscribe(function (response) {
            console.log(response);
            if (response['ERROR_CODE'] == 0) {
                // if(response['DATA'].length != 0)
                // {
                // }else{
                //    this.router.navigate(['/orderlist']);
                // }
                // this.errorMessage = "";
                // this.successMessage = "Order is successfully placed";
                // this.router.navigateByUrl(`/paymentresult/${response['DATA']['transaction_id']}`);
                _this.router.navigate(['/paymentresult', response['DATA']['transaction_id']]);
                // this.toasterService.Success("Success","Payment is Successfully Done.");
            }
            else {
                _this.toasterService.Error("Error", response['ERROR_DESCRIPTION']);
            }
            _this.commonservice.hideloader();
        });
    };
    ConfirmOrderComponent.prototype.apply_promocode = function () {
        this.createForm();
        this.apply_promocode_button = false;
        this.apply_promocode_box = true;
    };
    Object.defineProperty(ConfirmOrderComponent.prototype, "promocode", {
        get: function () { return this.apply_promocode_form.get('promocode'); },
        enumerable: true,
        configurable: true
    });
    ConfirmOrderComponent.prototype.createForm = function () {
        this.apply_promocode_form = this.frmBuilder.group({
            promocode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3),
                ])]
        });
    };
    ConfirmOrderComponent.prototype.onApply = function () {
        var _this = this;
        console.log(this.apply_promocode_form.value);
        if (this.apply_promocode_form.valid) {
            this.commonservice.showloader();
            var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_URL + "checkPromocode";
            return this.http.post(apiUrl, this.apply_promocode_form.value).subscribe(function (response) {
                console.log(response);
                if (response['ERROR_CODE'] == 0) {
                    _this.offerData = response['DATA'];
                    if (_this.offerData['offer_amount_type'] == "percent") {
                        _this.offer_discount = (_this.orderdetails['amount_of_order'] / 100) * _this.offerData['offer_amount'];
                        _this.total_bill = _this.total_bill - _this.offer_discount;
                    }
                    else {
                        _this.offer_discount = _this.offerData['offer_amount'];
                        _this.total_bill = _this.total_bill - _this.offer_discount;
                    }
                    _this.apply_promocode_box = false;
                    _this.offer_box = true;
                    _this.toasterService.Success("Success", "Promocode applied successfully.");
                }
                else {
                    _this.toasterService.Error("Error", response['ERROR_DESCRIPTION']);
                }
                _this.commonservice.hideloader();
            });
        }
        else {
            this.toasterService.Error("", "Please enter valid promocode.");
        }
    };
    ConfirmOrderComponent.prototype.cancleOffer = function () {
        var _this = this;
        if (confirm("Are you sure you want to remove this promocode")) {
            var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_URL + "cancleOffer";
            return this.http.get(apiUrl).subscribe(function (response) {
                console.log(response);
                if (response['ERROR_CODE'] == 0) {
                    _this.total_bill = _this.total_bill + _this.offerData['offer_amount'];
                    _this.apply_promocode_box = false;
                    _this.offer_box = false;
                    _this.apply_promocode_button = true;
                    _this.promocode_value = "";
                    _this.toasterService.Success("Success", response['ERROR_DESCRIPTION']);
                }
                else {
                    _this.toasterService.Error("Error", response['ERROR_DESCRIPTION']);
                }
                _this.commonservice.hideloader();
            });
        }
    };
    ConfirmOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-order',
            template: __webpack_require__(/*! ./confirm-order.component.html */ "./src/app/order/confirm-order/confirm-order.component.html"),
            styles: [__webpack_require__(/*! ./confirm-order.component.css */ "./src/app/order/confirm-order/confirm-order.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _toster_service_service__WEBPACK_IMPORTED_MODULE_5__["TosterService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], ConfirmOrderComponent);
    return ConfirmOrderComponent;
}());



/***/ }),

/***/ "./src/app/order/orderdetails/orderdetails.component.css":
/*!***************************************************************!*\
  !*** ./src/app/order/orderdetails/orderdetails.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    margin-bottom: 15px;\n}"

/***/ }),

/***/ "./src/app/order/orderdetails/orderdetails.component.html":
/*!****************************************************************!*\
  !*** ./src/app/order/orderdetails/orderdetails.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n            <!-- <div class=\"block-header\">\n                <h2>Order Details({{orderdetails.order_unique_id}})</h2>\n                <button type=\"button\" class=\"btn btn-danger waves-effect\" (click)=\"cancleOrder()\" *ngIf=\"cancleOrderShow\">Cancle Order</button>\n\n            </div> -->\n            <!-- Basic Card -->\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-12 col-md-4 col-sm-6 col-xs-12\">\n                    <div class=\"card\">\n                        <div class=\"header\">\n                            <h2>\n                                Order ID -> {{orderdetails.order_unique_id}} \n                                  \n                            </h2>\n\n                            <small>Service Name - {{orderdetails.type}}</small>\n                            <br>\n                            <small>Weight of order - {{orderdetails.weight_of_order}} Kg</small>\n                            <br>\n                            <small>Pick up slot - {{orderdetails.pick_up_slot}}</small>\n                            <br>\n                            <small>Status - {{orderdetails.status}}</small>\n\n                            <!-- <div class=\"font-12\">\n                                Service Name - {{orderdetails.type}}\n                                <br>\n                                Weight of order - {{orderdetails.weight_of_order}} Kg\n                                <br>\n                                Pick up slot - {{orderdetails.pick_up_slot}}\n                                <br>\n                                Status - {{orderdetails.status}}\n                            </div> -->\n                        </div>\n                        \n                    </div>\n                </div>\n\n                <div class=\"col-lg-12 col-md-4 col-sm-6 col-xs-12\" style=\"display: none;\">\n                    <div class=\"card\">\n                        <div class=\"header\">\n                            <div class=\"irs-demo\" style=\"display: none;\">\n                                <b>Set min value, max value and start point</b>\n                                <input type=\"text\" id=\"range_02\" value=\"\" />\n                            </div>\n                        </div>\n                        \n                    </div>\n                </div>\n                \n                <div class=\"col-lg-12 col-md-4 col-sm-6 col-xs-12\" *ngIf=\"paymentShow\">\n                    <div class=\"card\">\n                        <div class=\"header\">\n                            <div>\n                                <div class=\"header\">\n                                    <h2>\n                                        Payment Summary\n                                    </h2>\n                                </div>\n                                <div class=\"body\">\n                                    <ul class=\"list-group\">\n                                        <li class=\"list-group-item\">Order Amount <span class=\"badge bg-pink\">&#x20B9;{{orderdetails.amount_of_order}}</span></li>\n                                        <!-- <li class=\"list-group-item\">Dapibus ac facilisis in <span class=\"badge bg-cyan\">99 read</span></li>\n                                        <li class=\"list-group-item\">Morbi leo risus <span class=\"badge bg-teal\">99+</span></li>\n                                        <li class=\"list-group-item\">Porta ac consectetur ac <span class=\"badge bg-orange\">21</span></li>\n                                        <li class=\"list-group-item\">Vestibulum at eros <span class=\"badge bg-purple\">18</span></li> -->\n                                    </ul>\n                                </div>\n                                <div class=\"footer\">\n                                    <a routerLink=\"/confirmorder/{{orderdetails.order_id}}\" class=\"btn btn-info btn-block btn-lg waves-effect\">Proceed to Pay</a>\n                                </div>\n                            </div>\n                        </div>\n                        \n                    </div>\n                </div>\n\n            </div>\n            <!-- #END# Basic Card -->\n            "

/***/ }),

/***/ "./src/app/order/orderdetails/orderdetails.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/order/orderdetails/orderdetails.component.ts ***!
  \**************************************************************/
/*! exports provided: OrderdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderdetailsComponent", function() { return OrderdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/constant.component */ "./src/app/constant/constant.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _toster_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../toster-service.service */ "./src/app/toster-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// const url = 'assets/js/pages/ui/range-sliders.js';
var url2 = 'assets/plugins/ion-rangeslider/js/ion.rangeSlider.js';
var url3 = 'assets/js/pages/ui/range-sliders.js';
var url4 = 'assets/plugins/jquery/jquery.min.js';
var pay_url = 'https://checkout.razorpay.com/v1/checkout.js';

var OrderdetailsComponent = /** @class */ (function () {
    function OrderdetailsComponent(http, router, route, commonservice, toasterService) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.commonservice = commonservice;
        this.toasterService = toasterService;
        this.successMessage = "";
        this.errorMessage = "";
        this.postData = {};
        this.status = [
            "Ordered", "Picked up",
            "Processing", "Ready",
            "Delivered", "Cancelled"
        ];
        this.orderdetails = "";
        this.razor_key = "";
        this.transactionData = {};
        this.paymentShow = false;
        this.cancleOrderShow = false;
        //This code for check login     
        this.commonservice.checkLogin();
        // this.commonservice.loadScript(url4);
        // this.commonservice.loadScript(url2);
        // this.commonservice.loadScript(url3);
    }
    OrderdetailsComponent.prototype.ngOnInit = function () {
        //This service for loading script
        // this.commonservice.loadScript(url);
        this.commonservice.loadScript(pay_url);
        this.getOrderData();
    };
    OrderdetailsComponent.prototype.getOrderData = function () {
        var _this = this;
        this.commonservice.showloader();
        this.route.params.subscribe(function (params) { _this.order_id = params['id']; });
        this.postData = {
            order_id: this.order_id
        };
        var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_URL + "getOrderDetails";
        return this.http.post(apiUrl, this.postData).subscribe(function (response) {
            console.log(response);
            if (response['ERROR_CODE'] == 0) {
                if (response['DATA'].length != 0) {
                    _this.orderdetails = response['DATA'][0];
                    if (_this.orderdetails['total_amount'] > 0) {
                        _this.paymentShow = true;
                        if (_this.orderdetails['status'] == "Ordered") {
                            _this.cancleOrderShow = true;
                        }
                        _this.razor_key = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].razor_key;
                    }
                    // console.log(this.orderdetails)
                }
                else {
                    _this.router.navigate(['/orderlist']);
                }
                // this.errorMessage = "";
                // this.successMessage = "Order is successfully placed";
                //this.router.navigate(['/verifyotp']);
            }
            else {
                _this.errorMessage = response['ERROR_DESCRIPTION'];
                _this.successMessage = "";
            }
            _this.commonservice.hideloader();
        });
    };
    OrderdetailsComponent.prototype.cancleOrder = function () {
        var _this = this;
        this.commonservice.showloader();
        this.postData = {
            order_id: this.order_id
        };
        var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_URL + "cancleOrder";
        return this.http.post(apiUrl, this.postData).subscribe(function (response) {
            console.log(response);
            if (response['ERROR_CODE'] == 0) {
                _this.toasterService.Error("", "Order Cancled successfully..");
                window.location.reload();
                //this.getOrderData();
            }
            else {
                _this.errorMessage = response['ERROR_DESCRIPTION'];
                _this.successMessage = "";
            }
            _this.commonservice.hideloader();
        });
    };
    OrderdetailsComponent.prototype.proceed_to_pay = function () {
        var _this = this;
        this.commonservice.showloader();
        this.postData = {
            order_id: this.order_id
        };
        var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_URL + "initiate";
        return this.http.post(apiUrl, this.postData).subscribe(function (response) {
            console.log(response);
            if (response['ERROR_CODE'] == 0) {
                _this.transactionData = response['DATA'];
                _this.paymentStart();
            }
            else {
                _this.toasterService.Error("Error", "Something is wrong, Please try again.");
                // this.errorMessage = response['ERROR_DESCRIPTION'];
                // this.successMessage = "";
            }
            _this.commonservice.hideloader();
        });
    };
    OrderdetailsComponent.prototype.paymentStart = function () {
        var _this = this;
        var options = {
            "key": "rzp_test_a8i85PIwYFA2rr",
            "amount": this.orderdetails['total_amount'] * 100,
            "name": "Merchant Name",
            "description": "Purchase Description",
            "image": "/your_logo.png",
            "handler": function (response) {
                // alert(response.razorpay_payment_id);
                // console.log(this.transaction_id);
                // this.transaction_id = response.razorpay_payment_id;
                // this.storePaymentData(); 
            },
            "prefill": {
                "name": "Harshil Mathur",
                "email": "harshil@razorpay.com"
            },
            "notes": {
                "address": "Hello World",
                "id": this.transactionData['transaction_id'],
                "order_id": this.order_id,
            },
            "theme": {
                "color": "#384ad7" //"#F37254"
            }
        };
        options.handler = function (response) {
            _this.storePaymentData(response);
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    };
    OrderdetailsComponent.prototype.storePaymentData = function (transaction_id) {
        var _this = this;
        this.commonservice.showloader();
        this.postData = {
            transaction_id: transaction_id.razorpay_payment_id
        };
        var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_URL + "storeTransData";
        return this.http.post(apiUrl, this.postData).subscribe(function (response) {
            console.log(response);
            if (response['ERROR_CODE'] == 0) {
                // if(response['DATA'].length != 0)
                // {
                // }else{
                //    this.router.navigate(['/orderlist']);
                // }
                // this.errorMessage = "";
                // this.successMessage = "Order is successfully placed";
                //this.router.navigate(['/verifyotp']);
                _this.toasterService.Success("Success", "Payment is Successfully Done.");
            }
            else {
                _this.toasterService.Error("Error", response['ERROR_DESCRIPTION']);
            }
            _this.commonservice.hideloader();
        });
    };
    OrderdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orderdetails',
            template: __webpack_require__(/*! ./orderdetails.component.html */ "./src/app/order/orderdetails/orderdetails.component.html"),
            styles: [__webpack_require__(/*! ./orderdetails.component.css */ "./src/app/order/orderdetails/orderdetails.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _toster_service_service__WEBPACK_IMPORTED_MODULE_5__["TosterService"]])
    ], OrderdetailsComponent);
    return OrderdetailsComponent;
}());



/***/ }),

/***/ "./src/app/order/orderlist/orderlist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/order/orderlist/orderlist.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-box {\n    margin-bottom: 15px;\n}\n.info-box .icon {\n    bottom: 29px;\n}\n.info-box .icon {\n    background-color: #537590;\n}\n"

/***/ }),

/***/ "./src/app/order/orderlist/orderlist.component.html":
/*!**********************************************************!*\
  !*** ./src/app/order/orderlist/orderlist.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n            <!-- Counter Examples -->\n            <div class=\"block-header\">\n                <h2>\n                    Your Orders\n                </h2>\n            </div>\n            <div class=\"row\">\n\n                <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12 waves-effect\" *ngFor=\"let datavalue of responceData\">\n                  <a routerLink=\"/orderdetails/{{datavalue.order_id}}\" style=\"text-decoration:none;\">\n                    \n                    <div class=\"info-box-4\">\n                        \n                        <div class=\"icon\" *ngIf=\"display(datavalue.amount_of_order);\">\n                            &#x20B9;{{datavalue.amount_of_order}}\n                            <i class=\"material-icons\">shopping_cart</i>\n                        </div>\n                       \n                        <div class=\"content\">\n                            <div class=\"text\"><strong>Order ID -> {{datavalue.order_unique_id}}</strong></div>\n                            <div class=\"text\">{{datavalue.order_date | date:'EEE, d MMMM y'}}</div>\n                            <div class=\"number count-to\" data-from=\"0\" data-to=\"125\" data-speed=\"1000\" data-fresh-interval=\"20\">125</div>\n                        </div>\n                    </div>\n                  </a>\n                </div> -->\n                \n                <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12 \" *ngFor=\"let datavalue of responceData\">\n                        <a routerLink=\"/orderdetails/{{datavalue.order_id}}\" class=\"waves-light\" style=\"text-decoration:none;\">\n                          \n                          <div class=\"info-box\">\n                                <div class=\"icon\">\n                                        <i class=\"material-icons\">local_laundry_service</i>\n                                </div>\n                             \n                              <div class=\"content\">\n                                  <div class=\"text\"><strong>Order ID -> {{datavalue.order_unique_id}}</strong></div>\n                                  <div class=\"text\">{{datavalue.order_date | date:'EEE, d MMMM y'}}</div>\n                                  <!-- <div class=\"number count-to\" data-from=\"0\" data-to=\"125\" data-speed=\"1000\" data-fresh-interval=\"20\">125</div> -->\n                              </div>\n                             \n                          </div>\n                        </a>\n                      </div>\n\n            </div>\n            <!-- #END# Counter Examples -->\n           \n     \n"

/***/ }),

/***/ "./src/app/order/orderlist/orderlist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/order/orderlist/orderlist.component.ts ***!
  \********************************************************/
/*! exports provided: OrderlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlistComponent", function() { return OrderlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/constant.component */ "./src/app/constant/constant.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderlistComponent = /** @class */ (function () {
    function OrderlistComponent(http, router, commonservice) {
        // this.commonservice.checkconnection();
        this.http = http;
        this.router = router;
        this.commonservice = commonservice;
        this.successMessage = "";
        this.errorMessage = "";
        this.responceData = [];
        this.show = false;
        //This code for check login
        this.commonservice.checkLogin();
    }
    OrderlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonservice.showloader();
        var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_URL + "getOrderlist";
        return this.http.get(apiUrl).subscribe(function (response) {
            console.log(response);
            if (response['ERROR_CODE'] == 0) {
                _this.responceData = response['DATA'];
            }
            else {
                _this.errorMessage = response['ERROR_DESCRIPTION'];
                _this.successMessage = "";
            }
            _this.commonservice.hideloader();
        });
    };
    //This code for showing amount of the product
    OrderlistComponent.prototype.display = function (value) {
        this.show = false;
        if (value != "" && value != null) {
            this.show = true;
        }
        return this.show;
    };
    OrderlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orderlist',
            template: __webpack_require__(/*! ./orderlist.component.html */ "./src/app/order/orderlist/orderlist.component.html"),
            styles: [__webpack_require__(/*! ./orderlist.component.css */ "./src/app/order/orderlist/orderlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], OrderlistComponent);
    return OrderlistComponent;
}());



/***/ }),

/***/ "./src/app/order/paymentresult/paymentresult.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/order/paymentresult/paymentresult.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order/paymentresult/paymentresult.component.html":
/*!******************************************************************!*\
  !*** ./src/app/order/paymentresult/paymentresult.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row clearfix\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"body\">\n            <div class=\"row\">\n                <div class=\"col-sm-6 col-md-12\">\n                    <div class=\"thumbnail\">\n                        <img src=\"assets/images/payment/success.png\">\n                        <div class=\"caption\">\n                            <h3 style=\"text-align: center\">Rs. {{transactionData.total_amount}}</h3>\n                            <h3 style=\"text-align: center\">Payment Successful</h3>\n                            <hr>\n                            <div class=\"header\">\n                                <h4>\n                                    Transaction Details\n                                </h4>\n                            </div>\n                            <div class=\"body\">\n                                <ul class=\"list-group\">\n                                    <li class=\"list-group-item\">Order ID\n                                        <span class=\"badge bg-pink\">{{transactionData.order_unique_id}}</span>\n                                    </li>\n                                    <li class=\"list-group-item\">Transaction ID\n                                        <span class=\"badge bg-cyan\">{{transactionData.temp_transaction_unique_id}}</span>\n                                    </li>\n                                    <li class=\"list-group-item\">Order Amount\n                                        <span class=\"badge bg-teal\">Rs. {{transactionData.amount_of_order}}</span>\n                                    </li>\n                                    <li class=\"list-group-item\" *ngIf=\"offerShow\">Offer Voucher\n                                        <span class=\"badge bg-orange\">{{transactionData.offer_id}}</span>\n                                    </li>\n                                    <li class=\"list-group-item\" *ngIf=\"offerShow\">Offer Amount\n                                        <span class=\"badge bg-orange\">{{transactionData.offer_amount}}</span>\n                                    </li>\n                                    <li class=\"list-group-item\" *ngIf=\"walletShow\">Wallet Amount\n                                        <span class=\"badge bg-orange\">{{transactionData.wallet_amount}}</span>\n                                    </li>\n                                    <li class=\"list-group-item\">Total Bill\n                                        <span class=\"badge bg-purple\">Rs. {{transactionData.total_amount}}</span>\n                                    </li>\n                                </ul>\n                            </div>\n\n                            <p>\n                                <a routerLink=\"/dashboard\" class=\"btn btn-primary waves-effect\">Done</a>\n                            </p>\n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/order/paymentresult/paymentresult.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/order/paymentresult/paymentresult.component.ts ***!
  \****************************************************************/
/*! exports provided: PaymentresultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentresultComponent", function() { return PaymentresultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/constant.component */ "./src/app/constant/constant.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _toster_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../toster-service.service */ "./src/app/toster-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PaymentresultComponent = /** @class */ (function () {
    function PaymentresultComponent(http, router, route, commonservice, toasterService) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.commonservice = commonservice;
        this.toasterService = toasterService;
        this.postData = {};
        this.transactionData = {};
        this.transactionStatus = true;
        this.offerShow = false;
        this.walletShow = false;
        this.showData = false;
        this.commonservice.checkLogin();
        this.getTransactionData();
    }
    PaymentresultComponent.prototype.ngOnInit = function () {
    };
    PaymentresultComponent.prototype.getTransactionData = function () {
        var _this = this;
        this.commonservice.showloader();
        this.route.params.subscribe(function (params) { _this.transaction_id = params['id']; });
        this.postData = {
            transaction_id: this.transaction_id
        };
        var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_URL + "getTransactionData";
        this.http.post(apiUrl, this.postData).subscribe(function (response) {
            if (response['ERROR_CODE'] == 0) {
                _this.showData = true;
                _this.transactionData = response['DATA'][0];
                if (_this.transactionData['offer_id'] != "" && _this.transactionData['offer_id'] != null) {
                    _this.offerShow = true;
                }
                if (_this.transactionData['wallet_amount'] != "" && _this.transactionData['wallet_amount'] != null) {
                    _this.walletShow = true;
                }
                _this.toasterService.Success("Success", "Payment is Successfully Done.");
            }
            else {
                _this.transactionStatus = false;
            }
            _this.commonservice.hideloader();
        });
    };
    PaymentresultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paymentresult',
            template: __webpack_require__(/*! ./paymentresult.component.html */ "./src/app/order/paymentresult/paymentresult.component.html"),
            styles: [__webpack_require__(/*! ./paymentresult.component.css */ "./src/app/order/paymentresult/paymentresult.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _toster_service_service__WEBPACK_IMPORTED_MODULE_5__["TosterService"]])
    ], PaymentresultComponent);
    return PaymentresultComponent;
}());



/***/ }),

/***/ "./src/app/order/place-order/place-order.component.css":
/*!*************************************************************!*\
  !*** ./src/app/order/place-order/place-order.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchable-container{margin:20px 0 0 0}\n.searchable-container label.btn-default.active{background-color:#007ba7;color:#FFF}\n.searchable-container label.btn-default{width:90%;border:1px solid #efefef;margin:5px; box-shadow:5px 8px 8px 0 #ccc;}\n.searchable-container label .bizcontent{width:100%;}\n.searchable-container .btn-group{width:90%}\n.searchable-container .btn span.glyphicon{\n    opacity: 0;\n}\n.searchable-container .btn.active span.glyphicon {\n    opacity: 1;\n}\n"

/***/ }),

/***/ "./src/app/order/place-order/place-order.component.html":
/*!**************************************************************!*\
  !*** ./src/app/order/place-order/place-order.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n            <div class=\"block-header\">\n                <h2>\n                    Place Your Order\n                    <!-- <small>Taken from <a href=\"https://jqueryvalidation.org/\" target=\"_blank\">jqueryvalidation.org</a></small> -->\n                </h2>\n            </div>\n            <!-- Basic Validation -->\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                    <div class=\"card\">\n                        \n                        <div class=\"body\">\n                            <form novalidate [formGroup]='placeorder' (ngSubmit) = \"onSubmit()\">\n                                <div class=\"form-group form-float\">\n                                    <div class=\"form-line\">\n                                        <input type=\"date\" class=\"form-control\" formControlName='pick_up_date' required>\n\t\t\t\t\t\t\t\t\t\t<label class=\"form-label\">Pick up date</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"pick_up_date.invalid && (pick_up_date.dirty || pick_up_date.touched)\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"error\" *ngIf=\"pick_up_date.invalid && (pick_up_date.dirty || pick_up_date.touched)\">Please Enter Date</label>\n\t\t\t\t\t\t\t\t\t</div>\n                                </div>\n                                <div class=\"form-group form-float\">\n                                    <div class=\"form-line\">\n                                        <select class=\"form-control\" formControlName='services'>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">-- Select Service --</option>\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let services of serviceArray\" value=\"{{services.service_id}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{services.type}}\n\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"services.invalid && (services.dirty || services.touched)\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"error\" *ngIf=\"services.errors.required\">Please Select Services</label>\n\t\t\t\t\t\t\t\t\t</div>\n                                </div>\n                                <div class=\"form-group form-float\">\n                                    <div class=\"form-line\">\n                                        <select class=\"form-control\" formControlName='slot'>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">-- Select Slot --</option>\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let slot of slotArray\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{slot}}\n\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"slot.invalid && (slot.dirty || slot.touched)\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"error\" *ngIf=\"slot.errors.required\">Please Select Slot</label>\n\t\t\t\t\t\t\t\t\t</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"form-line\">\n                                        <input type=\"text\" class=\"form-control\" formControlName='name' [(ngModel)]=\"username\" value=\"\" required>\n\t\t\t\t\t\t\t\t\t\t<label class=\"form-label\">Name</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"error\" *ngIf=\"name.errors.required\">Please Enter Name</label>\n\t\t\t\t\t\t\t\t\t\t<label class=\"error\" *ngIf=\"name.errors.minlength\">Please Enter at least 3 characters.</label>\n\t\t\t\t\t\t\t\t\t\t<label class=\"error\" *ngIf=\"name.errors.pattern\">Please Enter valid name</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n                                    <div class=\"form-line\">\n                                        <input type=\"text\" class=\"form-control\" formControlName='mobile' [(ngModel)]=\"usermobile\" oninput=\"if(value.length>10)value=value.slice(0,10)\" required>\n\t\t\t\t\t\t\t\t\t\t<label class=\"form-label\">Mobile No.</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"error\" *ngIf=\"mobile.errors.required\">Please Enter Mobile No.</label>\n\t\t\t\t\t\t\t\t\t\t<label class=\"error\" *ngIf=\"mobile.errors.minlength\">Please Enter at least 10 characters.</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n                                <div class=\"form-group form-float\">\n                                    <div class=\"form-line\">\n                                        <textarea formControlName='address' [(ngModel)]=\"useraddress\" class=\"form-control\" required></textarea>\n                                        <label class=\"form-label\">Address</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"address.invalid && (address.dirty || address.touched)\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"error\" *ngIf=\"address.errors.required\">Please Enter Address</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n                                    <div class=\"form-line\">\n                                        <input type=\"text\" class=\"form-control\" formControlName='landmark' [(ngModel)]=\"userlandmark\" required>\n\t\t\t\t\t\t\t\t\t\t<label class=\"form-label\">Landmark</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"landmark.invalid && (landmark.dirty || landmark.touched)\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"error\" *ngIf=\"landmark.errors.required\">Please Enter Landmark</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n                                    <div class=\"form-line\">\n                                        <input type=\"text\" class=\"form-control\" formControlName='pincode' [(ngModel)]=\"userpincode\" required>\n\t\t\t\t\t\t\t\t\t\t<label class=\"form-label\">Pincode</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"pincode.invalid && (pincode.dirty || pincode.touched)\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"error\" *ngIf=\"pincode.errors.required\">Please Enter Pincode</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n                               \n                                <button class=\"btn btn-primary waves-effect\" type=\"submit\">Place Order</button>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- #END# Basic Validation -->\n     \n"

/***/ }),

/***/ "./src/app/order/place-order/place-order.component.ts":
/*!************************************************************!*\
  !*** ./src/app/order/place-order/place-order.component.ts ***!
  \************************************************************/
/*! exports provided: PlaceOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceOrderComponent", function() { return PlaceOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/constant.component */ "./src/app/constant/constant.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _toster_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../toster-service.service */ "./src/app/toster-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlaceOrderComponent = /** @class */ (function () {
    function PlaceOrderComponent(http, router, commonservice, frmBuilder, toasterService) {
        this.http = http;
        this.router = router;
        this.commonservice = commonservice;
        this.frmBuilder = frmBuilder;
        this.toasterService = toasterService;
        this.successMessage = "";
        this.errorMessage = "";
        this.value = "";
        this.username = "";
        this.usermobile = "";
        this.useraddress = "";
        this.userlandmark = "";
        this.userpincode = "";
        this.slotArray = ['8.00AM-10:00AM', '10.00AM-01:00PM', '01.00PM-04:00PM', '04.00PM-07:00PM', '07.00PM-10:00PM'];
        // this.commonservice.checkconnection();
        //This code for check login
        this.commonservice.checkLogin();
    }
    PlaceOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        //This is slot array
        // this.slotArray.push({'8.00AM-10:00AM':'8.00AM-10:00AM'},{'10.00AM-01:00PM':'10.00AM-01:00PM'},{'01.00PM-04:00PM':'01.00PM-04:00PM'},{'04.00PM-07:00PM':'04.00PM-07:00PM'},{'07.00PM-10:00PM':'07.00PM-10:00PM'});
        // this.slotArray.push({'8.00AM-10:00AM'},{'10.00AM-01:00PM'},{'01.00PM-04:00PM'},{'04.00PM-07:00PM'},{'07.00PM-10:00PM'});
        console.log(this.slotArray);
        //This function for validation
        this.createForm();
        //This code for getting last order data
        var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_URL + "getLastOrderData";
        return this.http.get(apiUrl).subscribe(function (response) {
            console.log(response);
            if (response['ERROR_CODE'] == 0) {
                if (response['DATA'].length != 0) {
                    var data = response['DATA']['order_data'];
                    var service_data = response['DATA']['service_data'];
                    _this.serviceArray = service_data;
                    console.log(data);
                    console.log(service_data[0]['type']);
                    _this.username = data.name;
                    _this.usermobile = data.mobile;
                    _this.useraddress = data.address_line1;
                    _this.userlandmark = data.landmark;
                    _this.userpincode = data.pincode;
                }
            }
        });
    };
    Object.defineProperty(PlaceOrderComponent.prototype, "pick_up_date", {
        get: function () { return this.placeorder.get('pick_up_date'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaceOrderComponent.prototype, "slot", {
        get: function () { return this.placeorder.get('slot'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaceOrderComponent.prototype, "services", {
        get: function () { return this.placeorder.get('services'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaceOrderComponent.prototype, "name", {
        get: function () { return this.placeorder.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaceOrderComponent.prototype, "mobile", {
        get: function () { return this.placeorder.get('mobile'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaceOrderComponent.prototype, "address", {
        get: function () { return this.placeorder.get('address'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaceOrderComponent.prototype, "landmark", {
        get: function () { return this.placeorder.get('landmark'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaceOrderComponent.prototype, "pincode", {
        get: function () { return this.placeorder.get('pincode'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaceOrderComponent.prototype, "var_id", {
        get: function () { return this.placeorder.get('var_id'); },
        enumerable: true,
        configurable: true
    });
    PlaceOrderComponent.prototype.createForm = function () {
        this.placeorder = this.frmBuilder.group({
            pick_up_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                ])],
            slot: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                ])],
            services: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                ])],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("[a-zA-Z ]*")
                ])],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10),
                ])],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)
                ])],
            landmark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                ])],
            pincode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                ])],
        });
    };
    PlaceOrderComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.placeorder.value);
        if (this.placeorder.valid) {
            this.value = this.placeorder.value;
            var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_URL + "getOrderData";
            return this.http.post(apiUrl, this.value).subscribe(function (response) {
                console.log(response);
                if (response['ERROR_CODE'] == 0) {
                    // this.errorMessage = "";
                    // this.successMessage = "Order is successfully placed";
                    _this.router.navigate(['/orderdetails', response['DATA']['responce_id']]);
                }
                else {
                    _this.errorMessage = response['ERROR_DESCRIPTION'];
                    _this.successMessage = "";
                }
            });
        }
        else {
            this.toasterService.Error("", "Please enter required field.");
            // console.log("Form is invalid"); 
        }
    };
    PlaceOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-place-order',
            template: __webpack_require__(/*! ./place-order.component.html */ "./src/app/order/place-order/place-order.component.html"),
            styles: [__webpack_require__(/*! ./place-order.component.css */ "./src/app/order/place-order/place-order.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _toster_service_service__WEBPACK_IMPORTED_MODULE_6__["TosterService"]])
    ], PlaceOrderComponent);
    return PlaceOrderComponent;
}());



/***/ }),

/***/ "./src/app/refferandearn/refferandearn.component.css":
/*!***********************************************************!*\
  !*** ./src/app/refferandearn/refferandearn.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/refferandearn/refferandearn.component.html":
/*!************************************************************!*\
  !*** ./src/app/refferandearn/refferandearn.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n   \n            <!-- <div class=\"block-header\">\n                <h2>THUMBNAILS</h2>\n            </div>\n            -->\n            <!-- Custom Content -->\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                    <!-- <div class=\"card\"> -->\n                        \n                        <div class=\"body\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-12 col-md-12\">\n                                    <div class=\"thumbnail\">\n                                        <img src=\"assets/images/refer/Refer-Earn-.png\">\n                                        <div class=\"caption\">\n                                            <h3>Your Refferel Code <span style=\"float: right;\">ABCD12563</span></h3>\n                                            <p>\n                                                You can earn more reward by referring your friends. Send your referel code to your friends\n                                            </p>\n                                            <p>\n                                                <button type=\"button\" class=\"btn btn-primary waves-effect\">Invite Your Friend</button>\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                                \n                            </div>\n                        </div>\n                    <!-- </div> -->\n                </div>\n            </div>\n            <!-- #END# Custom Content -->\n      "

/***/ }),

/***/ "./src/app/refferandearn/refferandearn.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/refferandearn/refferandearn.component.ts ***!
  \**********************************************************/
/*! exports provided: RefferandearnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefferandearnComponent", function() { return RefferandearnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RefferandearnComponent = /** @class */ (function () {
    function RefferandearnComponent() {
    }
    RefferandearnComponent.prototype.ngOnInit = function () {
    };
    RefferandearnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-refferandearn',
            template: __webpack_require__(/*! ./refferandearn.component.html */ "./src/app/refferandearn/refferandearn.component.html"),
            styles: [__webpack_require__(/*! ./refferandearn.component.css */ "./src/app/refferandearn/refferandearn.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RefferandearnComponent);
    return RefferandearnComponent;
}());



/***/ }),

/***/ "./src/app/servicecategory/servicecategory.component.css":
/*!***************************************************************!*\
  !*** ./src/app/servicecategory/servicecategory.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/servicecategory/servicecategory.component.html":
/*!****************************************************************!*\
  !*** ./src/app/servicecategory/servicecategory.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row clearfix\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n            <div class=\"card\">\n                <div class=\"header\">\n                    <h2>\n                        Service Categories\n                    </h2>\n                    \n                </div>\n                <div class=\"body\">\n                    <div class=\"row clearfix jsdemo-notification-button\">\n                        <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-2\" *ngFor=\"let datavalue of responceData\">\n                            <button type=\"button\" class=\"btn btn-primary btn-block waves-effect\" data-placement-from=\"top\" data-placement-align=\"left\"\n                                    data-animate-enter=\"\" data-animate-exit=\"\" data-color-name=\"bg-black\" (click)=\"getCategoryData(datavalue['services_category_id'])\">\n                                {{datavalue['category_name']}}\n                            </button>\n                        </div>\n                        <!-- <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-2\">\n                            <button type=\"button\" class=\"btn btn-primary btn-block waves-effect\" data-placement-from=\"top\" data-placement-align=\"center\"\n                                    data-animate-enter=\"\" data-animate-exit=\"\" data-color-name=\"bg-black\">\n                                TOP CENTER\n                            </button>\n                        </div>\n                        <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-2\">\n                            <button type=\"button\" class=\"btn btn-primary btn-block waves-effect\" data-placement-from=\"top\" data-placement-align=\"right\"\n                                    data-animate-enter=\"\" data-animate-exit=\"\" data-color-name=\"bg-black\">\n                                TOP RIGHT\n                            </button>\n                        </div>\n                        <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-2\">\n                            <button type=\"button\" class=\"btn btn-primary btn-block waves-effect\" data-placement-from=\"bottom\" data-placement-align=\"left\"\n                                    data-animate-enter=\"\" data-animate-exit=\"\" data-color-name=\"bg-black\">\n                                BOTTOM LEFT\n                            </button>\n                        </div>\n                        <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-2\">\n                            <button type=\"button\" class=\"btn btn-primary btn-block waves-effect\" data-placement-from=\"bottom\" data-placement-align=\"center\"\n                                    data-animate-enter=\"\" data-animate-exit=\"\" data-color-name=\"bg-black\">\n                                BOTTOM CENTER\n                            </button>\n                        </div>\n                        <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-2\">\n                            <button type=\"button\" class=\"btn btn-primary btn-block waves-effect\" data-placement-from=\"bottom\" data-placement-align=\"right\"\n                                    data-animate-enter=\"\" data-animate-exit=\"\" data-color-name=\"bg-black\">\n                                BOTTOM RIGHT\n                            </button>\n                        </div> -->\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"modal fade {{fade}}\" id=\"defaultModal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':display}\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h4 class=\"modal-title\" id=\"defaultModalLabel\">Modal title</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan\n                        vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper.\n                        Fusce pulvinar libero vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus\n                        nibh mattis erat, vitae porta nunc nisi non tellus. Vivamus mollis ante non massa egestas fringilla.\n                        Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur nunc.\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-link waves-effect\">SAVE CHANGES</button>\n                        <button type=\"button\" class=\"btn btn-link waves-effect\" data-dismiss=\"modal\">CLOSE</button>\n                    </div>\n                </div>\n            </div>\n        </div>"

/***/ }),

/***/ "./src/app/servicecategory/servicecategory.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/servicecategory/servicecategory.component.ts ***!
  \**************************************************************/
/*! exports provided: ServicecategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicecategoryComponent", function() { return ServicecategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant/constant.component */ "./src/app/constant/constant.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServicecategoryComponent = /** @class */ (function () {
    function ServicecategoryComponent(http, router, route, commonservice) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.commonservice = commonservice;
        this.successMessage = "";
        this.errorMessage = "";
        this.postData = {};
        this.responceData = "";
        this.categorytypedata = "";
        this.showModal = true;
        this.display = "none";
        this.fade = "";
    }
    ServicecategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonservice.showloader();
        this.route.params.subscribe(function (params) { _this.id = params['id']; });
        this.postData = {
            service_id: this.id
        };
        var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_URL + "getServiceCategories";
        return this.http.post(apiUrl, this.postData).subscribe(function (response) {
            console.log(response);
            if (response['ERROR_CODE'] == 0) {
                if (response['DATA'].length != 0) {
                    _this.responceData = response['DATA'];
                }
                else {
                    _this.router.navigate(['/services']);
                }
                // this.errorMessage = "";
                // this.successMessage = "Order is successfully placed";
                //this.router.navigate(['/verifyotp']);
            }
            else {
                _this.errorMessage = response['ERROR_DESCRIPTION'];
                _this.successMessage = "";
            }
            _this.commonservice.hideloader();
        });
    };
    ServicecategoryComponent.prototype.getCategoryData = function (services_category_id) {
        var _this = this;
        this.commonservice.showloader();
        this.postData = {
            services_category_id: services_category_id
        };
        var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_URL + "getCategoryTypeData";
        return this.http.post(apiUrl, this.postData).subscribe(function (response) {
            console.log(response);
            if (response['ERROR_CODE'] == 0) {
                if (response['DATA'].length != 0) {
                    _this.categorytypedata = response['DATA'];
                    _this.display = 'block';
                    _this.fade = 'in';
                    _this.showModal = false;
                    console.log(_this.display);
                }
                else {
                    //  this.router.navigate(['/services']);
                }
                // this.errorMessage = "";
                // this.successMessage = "Order is successfully placed";
                //this.router.navigate(['/verifyotp']);
            }
            else {
                _this.errorMessage = response['ERROR_DESCRIPTION'];
                _this.successMessage = "";
            }
            _this.commonservice.hideloader();
        });
    };
    ServicecategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servicecategory',
            template: __webpack_require__(/*! ./servicecategory.component.html */ "./src/app/servicecategory/servicecategory.component.html"),
            styles: [__webpack_require__(/*! ./servicecategory.component.css */ "./src/app/servicecategory/servicecategory.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], ServicecategoryComponent);
    return ServicecategoryComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"block-header\">\n          <h2>\n              Our Services\n          </h2>\n      </div>\n      <!-- Counter Examples -->\n      <div class=\"row clearfix\">\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\" *ngFor=\"let value of responceData\">\n              <a routerLink=\"/servicescategory/{{value['service_id']}}\" style=\"text-decoration:none;\">\n                <div class=\"info-box\">\n                        \n                    <div class=\"icon bg-red\">\n                        <i class=\"material-icons\">shopping_cart</i>\n                    </div> \n                    \n                    <div class=\"content\">\n                        <div class=\"text\">\n                            <div class=\"font-12\">\n                                {{value['type']}}\n                                {{value['type'] == \"wash\"?\"abc\":\"\"}}\n                                {{value['type'] == \"washiron\"?\"abc + efg\":\"\"}}\n                            </div>\n                        </div>\n                        <div class=\"number count-to\">&#x20B9;{{value['service_price']}} /Kg</div>\n                    </div>\n                </div>\n            </a>\n          </div>\n          <!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n              <div class=\"info-box\">\n                  <div class=\"icon bg-indigo\">\n                      <i class=\"material-icons\">face</i>\n                  </div>\n                  <div class=\"content\">\n                      <div class=\"text\">NEW MEMBERS</div>\n                      <div class=\"number count-to\" data-from=\"0\" data-to=\"257\" data-speed=\"1000\" data-fresh-interval=\"20\">257</div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n              <div class=\"info-box\">\n                  <div class=\"icon bg-purple\">\n                      <i class=\"material-icons\">bookmark</i>\n                  </div>\n                  <div class=\"content\">\n                      <div class=\"text\">BOOKMARKS</div>\n                      <div class=\"number count-to\" data-from=\"0\" data-to=\"117\" data-speed=\"1000\" data-fresh-interval=\"20\"></div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n              <div class=\"info-box\">\n                  <div class=\"icon bg-deep-purple\">\n                      <i class=\"material-icons\">favorite</i>\n                  </div>\n                  <div class=\"content\">\n                      <div class=\"text\">LIKES</div>\n                      <div class=\"number count-to\" data-from=\"0\" data-to=\"1432\" data-speed=\"1500\" data-fresh-interval=\"20\"></div>\n                  </div>\n              </div>\n          </div> -->\n      </div>\n      <!-- #END# Counter Examples -->\n      "

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant/constant.component */ "./src/app/constant/constant.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(http, router, commonservice) {
        this.http = http;
        this.router = router;
        this.commonservice = commonservice;
        this.responceData = [];
        this.servicesArray = [];
        this.servicesData = [];
    }
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonservice.showloader();
        var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_URL + "getServices";
        return this.http.get(apiUrl).subscribe(function (response) {
            console.log(response);
            if (response['ERROR_CODE'] == 0) {
                _this.servicesArray = ['wash', 'washiron'];
                _this.responceData = response['DATA'];
                //  for(var value of this.responceData)
                //  {  
                //   console.log(value['type']);
                //     if(this.servicesArray[value['type']])
                //     {
                //       this.servicesData.push(value);
                //     }
                //  }
                //  console.log(this.servicesData)
            }
            else {
            }
            _this.commonservice.hideloader();
        });
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/toster-service.service.ts":
/*!*******************************************!*\
  !*** ./src/app/toster-service.service.ts ***!
  \*******************************************/
/*! exports provided: TosterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TosterService", function() { return TosterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TosterService = /** @class */ (function () {
    function TosterService() {
    }
    TosterService.prototype.Success = function (title, message) {
        toastr.success(message, title);
    };
    TosterService.prototype.Error = function (title, message) {
        toastr.error(message, title);
    };
    TosterService.prototype.Warning = function (title, message) {
        toastr.warning(message, title);
    };
    TosterService.prototype.Info = function (message) {
        toastr.info(message);
    };
    TosterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TosterService);
    return TosterService;
}());



/***/ }),

/***/ "./src/app/users/userlist/userlist.component.css":
/*!*******************************************************!*\
  !*** ./src/app/users/userlist/userlist.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/userlist/userlist.component.html":
/*!********************************************************!*\
  !*** ./src/app/users/userlist/userlist.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- END: Subheader -->\n<div class=\"m-content\">\n    <!--begin::Portlet-->\n    <div class=\"m-portlet\">\n      <div class=\"m-portlet__head\">\n        <div class=\"m-portlet__head-caption\">\n          <div class=\"m-portlet__head-title\">\n            <h3 class=\"m-portlet__head-text\">\n              ion Range Slider Examples\n            </h3>\n          </div>\n        </div>\n      </div>\n      <!--begin::Form-->\n      <form class=\"m-form m-form--fit m-form--label-align-right\">\n        <div class=\"m-portlet__body\">\n          <div class=\"form-group m-form__group row\">\n            <label class=\"col-form-label col-lg-3 col-sm-12\">\n              Basic Example\n            </label>\n            <div class=\"col-lg-8 col-md-9 col-sm-12\">\n              <div class=\"m-ion-range-slider\">\n                <input type=\"hidden\" id=\"m_slider_1\"/>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group m-form__group row\">\n            <label class=\"col-form-label col-lg-3 col-sm-12\">\n              Min & Max Values\n            </label>\n            <div class=\"col-lg-8 col-md-9 col-sm-12\">\n              <input type=\"hidden\" id=\"m_slider_2\"/>\n              <div class=\"m-ion-range-slider\">\n                <input type=\"hidden\" id=\"m_slider_2\"/>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group m-form__group row\">\n            <label class=\"col-form-label col-lg-3 col-sm-12\">\n              Custom Prefix\n            </label>\n            <div class=\"col-lg-8 col-md-9 col-sm-12\">\n              <div class=\"m-ion-range-slider\">\n                <input type=\"hidden\" id=\"m_slider_3\"/>\n              </div>\n              <div class=\"m-form__help\">\n                Set type to double and specify range, also showing grid and adding prefix \"$\"\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group m-form__group row\">\n            <label class=\"col-form-label col-lg-3 col-sm-12\">\n              Range & Step\n            </label>\n            <div class=\"col-lg-8 col-md-9 col-sm-12\">\n              <div class=\"m-ion-range-slider\">\n                <input type=\"hidden\" id=\"m_slider_4\"/>\n              </div>\n              <div class=\"m-form__help\">\n                Set up range with negative values\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group m-form__group row\">\n            <label class=\"col-form-label col-lg-3 col-sm-12\">\n              Fractional Range & Step\n            </label>\n            <div class=\"col-lg-8 col-md-9 col-sm-12\">\n              <div class=\"m-ion-range-slider\">\n                <input type=\"hidden\" id=\"m_slider_5\"/>\n              </div>\n              <div class=\"m-form__help\">\n                Set up range with fractional values, using fractional step\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group m-form__group row\">\n            <label class=\"col-form-label col-lg-3 col-sm-12\">\n              Using Postfixes\n            </label>\n            <div class=\"col-lg-8 col-md-9 col-sm-12\">\n              <div class=\"m-ion-range-slider\">\n                <input type=\"hidden\" id=\"m_slider_6\"/>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group m-form__group row\">\n            <label class=\"col-form-label col-lg-3 col-sm-12\">\n              Using Text\n            </label>\n            <div class=\"col-lg-8 col-md-9 col-sm-12\">\n              <div class=\"m-ion-range-slider\">\n                <input type=\"hidden\" id=\"m_slider_7\"/>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"m-portlet__foot m-portlet__foot--fit\">\n          <div class=\"m-form__actions m-form__actions\">\n            <div class=\"row\">\n              <div class=\"col-lg-8 ml-lg-auto\">\n                <button type=\"reset\" class=\"btn btn-brand\">\n                  Submit\n                </button>\n                <button type=\"reset\" class=\"btn btn-secondary\">\n                  Cancel\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n      <!--end::Form-->\n    </div>\n    <!--end::Portlet-->\n  </div>\n"

/***/ }),

/***/ "./src/app/users/userlist/userlist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/users/userlist/userlist.component.ts ***!
  \******************************************************/
/*! exports provided: UserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistComponent", function() { return UserlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var url = 'assets/demo/default/custom/components/forms/widgets/ion-range-slider.js';
var UserlistComponent = /** @class */ (function () {
    function UserlistComponent(commonservice) {
        this.commonservice = commonservice;
    }
    UserlistComponent.prototype.ngOnInit = function () {
        this.commonservice.loadScript(url);
    };
    UserlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userlist',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./userlist.component.html */ "./src/app/users/userlist/userlist.component.html"),
            styles: [__webpack_require__(/*! ./userlist.component.css */ "./src/app/users/userlist/userlist.component.css")]
        }),
        __metadata("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], UserlistComponent);
    return UserlistComponent;
}());



/***/ }),

/***/ "./src/app/verifyotp/verifyotp.component.css":
/*!***************************************************!*\
  !*** ./src/app/verifyotp/verifyotp.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/verifyotp/verifyotp.component.html":
/*!****************************************************!*\
  !*** ./src/app/verifyotp/verifyotp.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <app-loader></app-loader>\n<div class=\"signup-box\">\n  <div class=\"logo\">\n      <a href=\"javascript:void(0);\">Admin<b>BSB</b></a>\n      <small>Admin BootStrap Based - Material Design</small>\n  </div>\n  <div class=\"card\">\n      <div class=\"body\">\n          <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\n          <form id=\"sign_up\" method=\"POST\" novalidate #formdata=\"ngForm\" (ngSubmit)=\"onSubmit(formdata)\">\n              <div class=\"msg\">Register as New User</div>\n              <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                      <i class=\"material-icons\">person</i>\n                  </span>\n                  <div class=\"form-line\">\n                      <input class=\"form-control\" type=\"number\" [(ngModel)]=\"otp\" #userOtp=\"ngModel\" name=\"otp\" placeholder=\"Otp\" autofocus>\n                      <div *ngIf=\"userOtp?.touched\">\n                          <div *ngIf=\"userOtp.errors?.required\">OTP is required</div>\n                        <div *ngIf=\"userOtp.errors?.minlength || userOtp.errors?.pattern\">Invalid OTP</div>\n                      </div>\n                  </div>\n              </div>\n           \n              <!-- <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                      <i class=\"material-icons\">lock</i>\n                  </span>\n                  <div class=\"form-line\">\n                      <input type=\"password\" class=\"form-control\" name=\"password\" minlength=\"6\" placeholder=\"Password\" required>\n                  </div>\n              </div>\n              <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                      <i class=\"material-icons\">lock</i>\n                  </span>\n                  <div class=\"form-line\">\n                      <input type=\"password\" class=\"form-control\" name=\"confirm\" minlength=\"6\" placeholder=\"Confirm Password\" required>\n                  </div>\n              </div> -->\n              <!-- <div class=\"form-group\">\n                  <input type=\"checkbox\" name=\"terms\" id=\"terms\" class=\"filled-in chk-col-pink\">\n                  <label for=\"terms\">I read and agree to the <a href=\"javascript:void(0);\">terms of usage</a>.</label>\n              </div> -->\n\n              <button class=\"btn btn-block btn-lg bg-pink waves-effect\" type=\"submit\">Verify</button>\n\n              <!-- <div class=\"m-t-25 m-b--5 align-center\">\n                  <a href=\"sign-in.html\">You already have a membership?</a>\n              </div> -->\n          </form>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/verifyotp/verifyotp.component.ts":
/*!**************************************************!*\
  !*** ./src/app/verifyotp/verifyotp.component.ts ***!
  \**************************************************/
/*! exports provided: VerifyotpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyotpComponent", function() { return VerifyotpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant/constant.component */ "./src/app/constant/constant.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VerifyotpComponent = /** @class */ (function () {
    function VerifyotpComponent(http, router, commonservice, renderer) {
        this.http = http;
        this.router = router;
        this.commonservice = commonservice;
        this.renderer = renderer;
        this.successMessage = "";
        this.errorMessage = "";
        this.commonservice.checkNotLogin();
    }
    VerifyotpComponent.prototype.ngOnInit = function () {
        this.renderer.addClass(document.body, 'signup-page');
    };
    VerifyotpComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid) {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': '1234',
                    'Access-Control-Allow-Origin': '*',
                })
            };
            // console.log(httpOptions);
            var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_URL + "verifyOtp";
            return this.http.post(apiUrl, value).subscribe(function (response) {
                console.log(response);
                if (response['ERROR_CODE'] == 0) {
                    _this.successMessage = "Data get successfully.";
                    _this.errorMessage = "";
                    _this.router.navigate(['/dashboard']);
                }
                else {
                    _this.errorMessage = response['ERROR_DESCRIPTION'];
                    _this.successMessage = "";
                }
            });
        }
        else {
            this.errorMessage = "Enter required fields.";
            this.successMessage = "";
            console.log("Form is invalid");
        }
    };
    VerifyotpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verifyotp',
            template: __webpack_require__(/*! ./verifyotp.component.html */ "./src/app/verifyotp/verifyotp.component.html"),
            styles: [__webpack_require__(/*! ./verifyotp.component.css */ "./src/app/verifyotp/verifyotp.component.css"), __webpack_require__(/*! ../../assets/login_css/vendors/bootstrap/dist/css/bootstrap.min.css */ "./src/assets/login_css/vendors/bootstrap/dist/css/bootstrap.min.css"), __webpack_require__(/*! ../../assets/login_css/vendors/font-awesome/css/font-awesome.min.css */ "./src/assets/login_css/vendors/font-awesome/css/font-awesome.min.css"), __webpack_require__(/*! ../../assets/login_css/vendors/nprogress/nprogress.css */ "./src/assets/login_css/vendors/nprogress/nprogress.css"), __webpack_require__(/*! ../../assets/login_css/vendors/animate.css/animate.min.css */ "./src/assets/login_css/vendors/animate.css/animate.min.css"), __webpack_require__(/*! ../../assets/login_css/build/css/custom.min.css */ "./src/assets/login_css/build/css/custom.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], VerifyotpComponent);
    return VerifyotpComponent;
}());



/***/ }),

/***/ "./src/app/wallet/wallet.component.css":
/*!*********************************************!*\
  !*** ./src/app/wallet/wallet.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/wallet/wallet.component.html":
/*!**********************************************!*\
  !*** ./src/app/wallet/wallet.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n      <div class=\"card\">\n          <div class=\"header\">\n              <h2>\n                  Wallet Amount\n              </h2>\n             \n          </div>\n          <div class=\"body\">\n              <div class=\"clearfix row\">\n                  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                      <div class=\"demo-color-box bg-grey\">\n                          <div class=\"color-name font-40\">Rs. {{walletData.wallet_total_amount}}</div>\n                          <!-- <div class=\"color-code\">#F44336</div>\n                          <div class=\"color-class-name\">bg-red</div> -->\n                      </div>\n                  </div>\n                  \n              </div>\n              <button type=\"button\" class=\"btn btn-primary waves-effect\">\n                <i class=\"material-icons\">extension</i>\n                <span>Add Money</span>\n              </button>\n\n              <div (click)=\"getWalletHistory()\">View Wallet History</div> \n\n              <table class=\"table table-striped\" *ngIf=\"historyData\">\n                <thead>\n                    <tr>\n                        <th>Amount</th>\n                        <th>Date</th>\n                        <th>Type</th>\n                        <th></th>\n                       \n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let datavalue of walletHistoryData\" data-toggle=\"dropdown\">\n                        <th scope=\"row\">Rs. {{datavalue.wallet_amount}}</th>\n                        <td>{{datavalue.created_at | date:'y-dd-MM'}}</td>\n                        <td>{{datavalue.type}}</td>\n                        <td>><span class=\"dropdown-menu pull-right\">{{datavalue.comment}}</span></td>\n                        \n                    </tr>\n                    \n                </tbody>\n            </table>\n\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/wallet/wallet.component.ts":
/*!********************************************!*\
  !*** ./src/app/wallet/wallet.component.ts ***!
  \********************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant/constant.component */ "./src/app/constant/constant.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WalletComponent = /** @class */ (function () {
    function WalletComponent(http) {
        this.http = http;
        this.walletData = {};
        this.walletHistoryData = {};
        this.historyData = false;
    }
    WalletComponent.prototype.ngOnInit = function () {
        var _this = this;
        var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_URL + "getWalletData";
        return this.http.get(apiUrl).subscribe(function (response) {
            console.log(response);
            if (response['ERROR_CODE'] == 0) {
                _this.walletData = response['DATA'];
                // let data = response['DATA']['order_data'];
                // let service_data = response['DATA']['service_data'];
            }
        });
    };
    WalletComponent.prototype.getWalletHistory = function () {
        var _this = this;
        var apiUrl = _constant_constant_component__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_URL + "getWalletHistory";
        return this.http.get(apiUrl).subscribe(function (response) {
            console.log(response);
            if (response['ERROR_CODE'] == 0) {
                _this.historyData = true;
                _this.walletHistoryData = response['DATA'];
                // let data = response['DATA']['order_data'];
                // let service_data = response['DATA']['service_data'];
            }
        });
    };
    WalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallet',
            template: __webpack_require__(/*! ./wallet.component.html */ "./src/app/wallet/wallet.component.html"),
            styles: [__webpack_require__(/*! ./wallet.component.css */ "./src/app/wallet/wallet.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WalletComponent);
    return WalletComponent;
}());



/***/ }),

/***/ "./src/assets/login_css/build/css/custom.min.css":
/*!*******************************************************!*\
  !*** ./src/assets/login_css/build/css/custom.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".x_title h2,table.tile_info td p{white-space:nowrap;text-overflow:ellipsis}.site_title,.x_title h2,table.tile_info td p{text-overflow:ellipsis}.detail a,.expand,.jqstooltip,.paging_full_numbers a:hover,.site_title:focus,.site_title:hover,a,a:focus,a:hover{text-decoration:none}.byline,.main_menu .fa{-webkit-font-smoothing:antialiased}.daterangepicker .ranges li{color:#73879C}.daterangepicker .ranges li.active,.daterangepicker .ranges li:hover{background:#536A7F;border:1px solid #536A7F;color:#fff}.daterangepicker .input-mini{background-color:#eee;border:1px solid #ccc;box-shadow:none!important}.daterangepicker .input-mini.active{border:1px solid #ccc}.daterangepicker select.ampmselect,.daterangepicker select.hourselect,.daterangepicker select.minuteselect,.daterangepicker select.monthselect,.daterangepicker select.secondselect,.daterangepicker select.yearselect{font-size:12px;padding:1px;margin:0;cursor:default;height:30px;border:1px solid #ADB2B5;line-height:30px;border-radius:0!important}.daterangepicker select.monthselect{margin-right:2%}.daterangepicker td.in-range{background:#E4E7EA;color:#73879C}.daterangepicker td.active,.daterangepicker td.active:hover{background-color:#536A7F;color:#fff}.daterangepicker th.available:hover{background:#eee;color:#34495E}.daterangepicker:after,.daterangepicker:before{content:none}.daterangepicker .calendar.single{margin:0 0 4px}.daterangepicker .calendar.single .calendar-table{width:224px;padding:0 0 4px!important}.daterangepicker .calendar.single .calendar-table thead tr:first-child th{padding:8px 5px}.daterangepicker .calendar.single .calendar-table thead th{border-radius:0}.daterangepicker.picker_1{color:#fff;background:#34495E}.daterangepicker.picker_1 .calendar-table{background:#34495E}.daterangepicker.picker_1 .calendar-table thead tr{background:#213345}.daterangepicker.picker_1 .calendar-table thead tr:first-child{background:#1ABB9C}.daterangepicker.picker_1 .calendar-table td.off{background:#34495E;color:#999}.daterangepicker.picker_1 .calendar-table td.available:hover{color:#34495E}.daterangepicker.picker_2 .calendar-table thead tr{color:#1ABB9C}.daterangepicker.picker_2 .calendar-table thead tr:first-child{color:#73879C}.daterangepicker.picker_3 .calendar-table thead tr:first-child{color:#fff;background:#1ABB9C}.daterangepicker.picker_4 .calendar-table thead tr:first-child{color:#fff;background:#34495E}.daterangepicker.picker_4 .calendar-table td,.daterangepicker.picker_4 .calendar-table td.off{background:#ECF0F1;border:1px solid #fff;border-radius:0}.daterangepicker.picker_4 .calendar-table td.active{background:#34495E}.calendar-exibit .show-calendar{float:none;display:block;position:relative;background-color:#fff;border:1px solid #ccc;margin-bottom:20px;border:1px solid rgba(0,0,0,.15);overflow:hidden}.calendar-exibit .show-calendar .calendar{margin:0 0 4px}.calendar-exibit .show-calendar.picker_1{background:#34495E}.calendar-exibit .calendar-table{padding:0 0 4px}.left_col{background:#2A3F54}.nav-sm .container.body .col-md-3.left_col{min-height:100%;width:70px;padding:0;z-index:9999;position:absolute}.nav-sm .container.body .col-md-3.left_col.menu_fixed{position:fixed;height:100%}.nav-sm .container.body .col-md-3.left_col .mCSB_container,.nav-sm .container.body .col-md-3.left_col .mCustomScrollBox{overflow:visible}.overflow_hidden,.sidebar-widget,.site_title,.tile,.weather-days .col-sm-2,.x_title h2,table.tile_info td p{overflow:hidden}.nav-sm .hidden-small{visibility:hidden}.nav-sm .container.body .right_col{padding:10px 20px;margin-left:70px;z-index:2}.nav-sm .navbar.nav_title{width:70px}.nav-sm .navbar.nav_title a span{display:none}.nav-sm .navbar.nav_title a i{font-size:27px;margin:13px 0 0 3px}.site_title i{border:1px solid #EAEAEA;padding:5px 6px;border-radius:50%}.nav-sm .main_container .top_nav{display:block;margin-left:70px;z-index:2}.nav-sm .nav.side-menu li a{text-align:center!important;font-weight:400;font-size:10px;padding:10px 5px}.nav-sm .nav.child_menu li.active,.nav-sm .nav.side-menu li.active-sm{border-right:5px solid #1ABB9C}.nav-sm .nav.side-menu li.active-sm ul ul,.nav-sm ul.nav.child_menu ul{position:static;width:200px;background:0 0}.nav-sm>.nav.side-menu>li.active-sm>a{color:#1ABB9C!important}.nav-sm .nav.side-menu li a i.toggle-up{display:none!important}.nav-sm .menu_section h3,.nav-sm .profile,.nav-sm .menu_section span.fa{display:none}.nav-sm .nav.side-menu li a i{font-size:25px!important;text-align:center;width:100%!important;margin-bottom:5px}.nav-sm ul.nav.child_menu{left:100%;position:absolute;top:0;width:210px;z-index:4000;background:#3E5367;display:none}.nav-sm ul.nav.child_menu li{padding:0 10px}.nav-sm ul.nav.child_menu li a{text-align:left!important}.menu_section{margin-bottom:35px}.menu_section h3{padding-left:15px;color:#fff;text-transform:uppercase;letter-spacing:.5px;font-weight:700;font-size:11px;margin-bottom:0;margin-top:0;text-shadow:1px 1px #000}.menu_section>ul{margin-top:10px}.profile_pic{width:35%;float:left}.img-circle.profile_img{width:70%;background:#fff;margin-left:15%;z-index:1000;position:inherit;margin-top:20px;border:1px solid rgba(52,73,94,.44);padding:4px}.profile_info{padding:25px 10px 10px;width:65%;float:left}.profile_info span{font-size:13px;line-height:30px;color:#BAB8B8}.profile_info h2{font-size:14px;color:#ECF0F1;margin:0;font-weight:300}.profile.img_2{text-align:center}.profile.img_2 .profile_pic{width:100%}.profile.img_2 .profile_pic .img-circle.profile_img{width:50%;margin:10px 0 0}.profile.img_2 .profile_info{padding:15px 10px 0;width:100%;margin-bottom:10px;float:left}.main_menu span.fa{float:right;text-align:center;margin-top:5px;font-size:10px;min-width:inherit;color:#C4CFDA}.active a span.fa{text-align:right!important;margin-right:4px}.nav-sm .menu_section{margin:0}.nav-sm li li span.fa{display:inline-block}.nav_menu{float:left;background:#EDEDED;border-bottom:1px solid #D9DEE4;margin-bottom:10px;width:100%;position:relative}@media (min-width:480px){.nav_menu{position:static}}.nav-md .container.body .col-md-3.left_col{min-height:100%;width:230px;padding:0;position:absolute;display:flex;z-index:1}.nav-md .container.body .col-md-3.left_col.menu_fixed{height:100%;position:fixed}body .container.body .right_col{background:#F7F7F7}.nav-md .container.body .right_col{padding:10px 20px 0;margin-left:230px}.nav_title{width:230px;float:left;background:#2A3F54;border-radius:0;height:57px}@media (max-width:991px){.nav-md .container.body .right_col,.nav-md .container.body .top_nav{width:100%;margin:0}.nav-md .container.body .col-md-3.left_col{display:none}.nav-md .container.body .right_col{width:100%;padding-right:0}.right_col{padding:10px!important}}@media (max-width:1200px){.x_title h2{width:62%;font-size:17px}.graph,.tile{zoom:85%;height:inherit}}@media (max-width:1270px) and (min-width:192px){.x_title h2 small{display:none}}.left_col .mCSB_scrollTools{width:6px}.left_col .mCSB_dragger{max-height:400px!important}.blue{color:#3498DB}.purple{color:#9B59B6}.green{color:#1ABB9C}.aero{color:#9CC2CB}.red{color:#E74C3C}.dark{color:#34495E}.border-blue{border-color:#3498DB!important}.border-purple{border-color:#9B59B6!important}.border-green{border-color:#1ABB9C!important}.border-aero{border-color:#9CC2CB!important}.border-red{border-color:#E74C3C!important}.border-dark{border-color:#34495E!important}.bg-white{background:#fff!important;border:1px solid #fff!important;color:#73879C}.bg-green{background:#1ABB9C!important;border:1px solid #1ABB9C!important;color:#fff}.bg-red{background:#E74C3C!important;border:1px solid #E74C3C!important;color:#fff}.bg-blue{background:#3498DB!important;border:1px solid #3498DB!important;color:#fff}.bg-orange{background:#F39C12!important;border:1px solid #F39C12!important;color:#fff}.bg-purple{background:#9B59B6!important;border:1px solid #9B59B6!important;color:#fff}.bg-blue-sky{background:#50C1CF!important;border:1px solid #50C1CF!important;color:#fff}.container{width:100%;padding:0}.top_nav .nav .open>a,.top_nav .nav .open>a:focus,.top_nav .nav .open>a:hover,.top_nav .nav>li>a:focus,.top_nav .nav>li>a:hover{background:#D9DEE4}body{color:#73879C;background:#2A3F54;font-family:\"Helvetica Neue\",Roboto,Arial,\"Droid Sans\",sans-serif;font-size:13px;font-weight:400;line-height:1.471}.main_container .top_nav{display:block;margin-left:230px}.no-padding{padding:0!important}.page-title{width:100%;height:65px;padding:10px 0}.page-title .title_left{width:45%;float:left;display:block}.page-title .title_left h3{margin:9px 0}.page-title .title_right{width:55%;float:left;display:block}.page-title .title_right .pull-right{margin:10px 0}.fixed_height_320{height:320px}.fixed_height_390{height:390px}.fixed_height_200{height:200px}.progress-bar-dark{background-color:#34495E!important}.progress-bar-gray{background-color:#BDC3C7!important}table.no-margin .progress{margin-bottom:0}.main_content{padding:10px 20px}.col-md-55{width:50%;margin-bottom:10px}@media (min-width:768px){.col-md-55{width:20%}}@media (min-width:992px){.col-md-55{width:20%}}@media (min-width:1200px){.col-md-55{width:20%}}@media (min-width:192px) and (max-width:1270px){table.tile_info span.right{margin-right:7px;float:left}}.center-margin{margin:0 auto;float:none!important}.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-55,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{position:relative;min-height:1px;float:left;padding-right:10px;padding-left:10px}.row{margin-right:-10px;margin-left:-10px}.grid_slider .col-md-6{padding:0 40px}.h1,.h2,.h3,h1,h2,h3{margin-top:10px;margin-bottom:10px}a{color:#5A738E}.btn.active.focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn:active:focus,.btn:focus,:active,:focus,:visited,a,a:active,a:focus,a:visited{outline:0}.navbar{margin-bottom:0}.navbar-header{background:#34495E}.navbar-right{margin-right:0}.top_nav .navbar-right{margin:0;width:70%;float:right}.top_nav .navbar-right li{display:inline-block;float:right;position:static}@media (min-width:480px){.top_nav .navbar-right li{position:relative}}.top_nav .dropdown-menu li{width:100%}.top_nav .dropdown-menu li a{width:100%;padding:12px 20px}.top_nav li a i{font-size:15px}.navbar-static-top{position:fixed;top:0;width:100%}.sidebar-header{border-bottom:0;margin-top:46px}.sidebar-header:first-of-type{margin-top:0}.nav.side-menu>li{position:relative;display:block;cursor:pointer}.nav.side-menu>li>a{margin-bottom:6px}.nav.side-menu>li>a:hover{color:#F2F5F7!important}.nav.side-menu>li>a:hover,.nav>li>a:focus{text-decoration:none;background:0 0}.nav.child_menu{display:none}.nav.child_menu li.active,.nav.child_menu li:hover{background-color:rgba(255,255,255,.06)}.nav.child_menu li{padding-left:36px}.nav-md ul.nav.child_menu li:before{background:#425668;bottom:auto;content:\"\";height:8px;left:23px;margin-top:15px;position:absolute;right:auto;width:8px;z-index:1;border-radius:50%}.nav-md ul.nav.child_menu li:after{border-left:1px solid #425668;bottom:0;content:\"\";left:27px;position:absolute;top:0}.nav.top_menu>li>a,.nav>li>a{position:relative;display:block}.nav.child_menu>li>a,.nav.side-menu>li>a{color:#E7E7E7;font-weight:500}.nav li li.current-page a,.nav.child_menu li li a.active,.nav.child_menu li li a:hover{color:#fff}.nav.child_menu li li.active,.nav.child_menu li li:hover{background:0 0}.nav>li>a{padding:13px 15px 12px}.nav.side-menu>li.active,.nav.side-menu>li.current-page{border-right:5px solid #1ABB9C}.nav li.current-page{background:rgba(255,255,255,.05)}.nav li li li.current-page{background:0 0}.navbar-brand,.navbar-nav>li>a,.site_title{color:#ECF0F1!important;margin-left:0!important}.nav.side-menu>li.active>a{text-shadow:rgba(0,0,0,.25) 0 -1px 0;background:linear-gradient(#334556,#2C4257),#2A3F54;box-shadow:rgba(0,0,0,.25) 0 1px 0,inset rgba(255,255,255,.16) 0 1px 0}.navbar-brand,.navbar-nav>li>a{font-weight:500;line-height:32px}.site_title{font-weight:400;font-size:22px;width:100%;line-height:59px;display:block;height:55px;margin:0;padding-left:10px}.nav.navbar-nav>li>a{color:#515356!important}.nav.top_menu>li>a{padding:10px 15px;color:#34495E!important}.nav>li>a:focus,.nav>li>a:hover{background-color:transparent}.top_search{padding:0}.top_search .form-control{box-shadow:inset 0 1px 0 rgba(0,0,0,.075);border-radius:25px 0 0 25px;padding-left:20px;border:1px solid rgba(221,226,232,.49)}.top_search .form-control:focus{border:1px solid rgba(221,226,232,.49);border-right:0}.top_search .input-group-btn button{border-radius:0 25px 25px 0;border:1px solid rgba(221,226,232,.49);border-left:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);color:#93A2B2;margin-bottom:0!important}.tiles,.top_tiles{margin-bottom:0}.toggle{float:left;margin:0;padding-top:16px;width:70px}.toggle a{padding:15px 15px 0;margin:0;cursor:pointer}.toggle a i{font-size:26px}.nav.child_menu>li>a{color:rgba(255,255,255,.75);font-size:12px;padding:9px}.panel_toolbox{float:right;min-width:70px}.panel_toolbox>li{float:left;cursor:pointer}.panel_toolbox>li>a{padding:5px;color:#C5C7CB;font-size:14px}.panel_toolbox>li>a:hover{background:#F5F7FA}.line_30{line-height:30px}.main_menu_side{padding:0}.bs-docs-sidebar .nav>li>a{display:block;padding:4px 6px}footer{background:#fff;padding:15px 20px;display:block}.nav-sm footer{margin-left:70px}.footer_fixed footer{position:fixed;left:0;bottom:0;width:100%}.degrees:after,.x_content,.x_panel{position:relative}@media (min-width:768px){.footer_fixed .nav-sm footer,.footer_fixed footer{margin-left:0}}.tile-stats.sparkline{padding:10px;text-align:center}.jqstooltip{background:#34495E!important;width:30px!important;height:22px!important}.tooltip{display:block!important}.tiles{border-top:1px solid #ccc;margin-top:15px;padding-top:5px}.top_tiles .tile h2{font-size:30px;line-height:30px;margin:3px 0 7px;font-weight:700}article.media{width:100%}*,:after,:before{box-sizing:border-box}#integration-list{width:100%;margin:0 auto;display:table}#integration-list ul{padding:0;margin:20px 0;color:#555}#integration-list ul>li{list-style:none;border-top:1px solid #ddd;display:block;padding:15px;overflow:hidden}#integration-list ul:last-child{border-bottom:1px solid #ddd}#integration-list ul>li:hover{background:#efefef}.expand{display:block;color:#555;cursor:pointer}.expand h2{width:85%;float:left}h2{font-size:18px;font-weight:400}#left,#right{display:table}#sup{display:table-cell;vertical-align:middle;width:80%}.detail a{color:#C0392B;border:1px solid #C0392B;padding:6px 10px 5px;font-size:13px;margin-right:7px}.detail{margin:10px 0;display:none;line-height:22px;height:150px}.detail span{margin:0}.right-arrow{width:10px;float:right;font-weight:700;font-size:20px}.accordion .panel{margin-bottom:5px;border-radius:0;border-bottom:1px solid #efefef}.x_panel,.x_title{margin-bottom:10px}.accordion .panel-heading{background:#F2F5F7;padding:13px;width:100%;display:block}.accordion .panel:hover{background:#F2F5F7}.x_panel{width:100%;padding:10px 17px;display:inline-block;background:#fff;border:1px solid #E6E9ED;-webkit-column-break-inside:avoid;-moz-column-break-inside:avoid;column-break-inside:avoid;opacity:1;transition:all .2s ease}.x_title{border-bottom:2px solid #E6E9ED;padding:1px 5px 6px}.x_title .filter{width:40%;float:right}.x_content,table.tile td ul li a,table.tile_info{width:100%}.x_title h2{margin:5px 0 6px;float:left;display:block}.x_title h2 small{margin-left:10px}.x_title span{color:#BDBDBD}.x_content{padding:0 5px 6px;float:left;clear:both;margin-top:5px}.x_content h4{font-size:16px;font-weight:500}legend{padding-bottom:7px}.demo-placeholder{height:280px}.profile_details:nth-child(3n){clear:both}.profile_details .profile_view{display:inline-block;padding:10px 0 0;background:#fff}.profile_details .profile_view .divider{border-top:1px solid #e5e5e5;padding-top:5px;margin-top:5px}.profile_details .profile_view .ratings{margin-bottom:0;text-align:left;font-size:16px}.profile_details .profile_view .bottom{background:#F2F5F7;padding:9px 0;border-top:1px solid #E6E9ED}.profile_details .profile_view .left{margin-top:20px}.profile_details .profile_view .left p{margin-bottom:3px}.profile_details .profile_view .right{margin-top:0;padding:10px}.profile_details .profile_view .img-circle{border:1px solid #E6E9ED;padding:2px}.profile_details .profile_view h2{margin:5px 0}.profile_details .profile_view .brief{margin:0;font-weight:300}.profile_details .profile_left{background:#fff}.pagination.pagination-split li{display:inline-block;margin-right:3px}.pagination.pagination-split li a{border-radius:4px;color:#768399;-moz-border-radius:4px;-webkit-border-radius:4px}table.tile h3,table.tile h4,table.tile span{font-weight:700;vertical-align:middle!important}table.tile td,table.tile th{text-align:center}table.tile th{border-bottom:1px solid #E6ECEE}table.tile td{padding:5px 0}table.tile td ul{text-align:left;padding-left:0}table.tile td ul li{list-style:none;width:100%}table.tile td ul li a big{right:0;float:right;margin-right:13px}table.tile_info td{text-align:left;padding:1px;font-size:15px}table.tile_info td p{margin:0;line-height:28px}table.tile_info td i{margin-right:8px;font-size:17px;float:left;width:18px;line-height:28px}table.tile_info td:first-child{width:83%}td span{line-height:28px}.error-number{font-size:90px;line-height:90px;margin:20px 0}.col-middle{margin-top:5%}.mid_center{width:370px;margin:0 auto;text-align:center;padding:10px 20px}h3.degrees{font-size:22px;font-weight:400;text-align:center}.degrees:after{content:\"o\";top:-12px;font-size:13px;font-weight:300}.daily-weather .day{font-size:14px;border-top:2px solid rgba(115,135,156,.36);text-align:center;border-bottom:2px solid rgba(115,135,156,.36);padding:5px 0}.weather-days .col-sm-2{width:16.66666667%}.weather .row{margin-bottom:0}.bulk-actions{display:none}table.countries_list{width:100%}table.countries_list td{padding:0 10px;line-height:30px;border-top:1px solid #eee}.dataTables_paginate a{padding:6px 9px!important;background:#ddd!important;border-color:#ddd!important}.paging_full_numbers a.paginate_active{background-color:rgba(38,185,154,.59)!important;border-color:rgba(38,185,154,.59)!important}a.DTTT_button,button.DTTT_button,div.DTTT_button{border:1px solid #E7E7E7!important;background:#E7E7E7!important;box-shadow:none!important}table.jambo_table{border:1px solid rgba(221,221,221,.78)}table.jambo_table thead{background:rgba(52,73,94,.94);color:#ECF0F1}table.jambo_table tbody tr:hover td{background:rgba(38,185,154,.07);border-top:1px solid rgba(38,185,154,.11);border-bottom:1px solid rgba(38,185,154,.11)}table.jambo_table tbody tr.selected{background:rgba(38,185,154,.16)}table.jambo_table tbody tr.selected td{border-top:1px solid rgba(38,185,154,.4);border-bottom:1px solid rgba(38,185,154,.4)}.dataTables_wrapper{position:relative;clear:both;zoom:1}.dataTables_processing{position:absolute;top:50%;left:50%;width:250px;height:30px;margin-left:-125px;margin-top:-15px;padding:14px 0 2px;border:1px solid #ddd;text-align:center;color:#999;font-size:14px;background-color:#fff}td.details,td.group{background-color:#d1cfd0}.dataTables_length{width:40%;float:left}.dataTables_filter{width:50%;float:right;text-align:right}.dataTables_info{width:60%;float:left}.dataTables_paginate{float:right;text-align:right}.dataTables_empty,table.display td.center{text-align:center}table.dataTable td.focus,table.dataTable th.focus{outline:#1ABB9C solid 2px!important;outline-offset:-1px}.paging_full_numbers a:active,table.display thead td:active,table.display thead th:active{outline:0}table.display{margin:0 auto;clear:both;width:100%}table.display thead th{padding:8px 18px 8px 10px;border-bottom:1px solid #000;font-weight:700;cursor:pointer}table.display tfoot th{padding:3px 18px 3px 10px;border-top:1px solid #000;font-weight:700}table.display tr.heading2 td{border-bottom:1px solid #aaa}table.display td{padding:3px 10px}.dataTables_scroll{clear:both}.dataTables_scrollBody{-webkit-overflow-scrolling:touch}.top .dataTables_info{float:none}.clear{clear:both}tfoot input{margin:.5em 0;width:100%;color:#444}tfoot input.search_init{color:#999}td.group{border-bottom:2px solid #A19B9E;border-top:2px solid #A19B9E}td.details{border:2px solid #A19B9E}.example_alt_pagination div.dataTables_info{width:40%}.paging_full_numbers{width:400px;height:22px;line-height:22px}.paging_full_numbers a.paginate_active,.paging_full_numbers a.paginate_button{border:1px solid #aaa;-webkit-border-radius:5px;-moz-border-radius:5px;padding:2px 5px;margin:0 3px;cursor:pointer}.paging_full_numbers a.paginate_button{background-color:#ddd}.paging_full_numbers a.paginate_button:hover{background-color:#ccc;text-decoration:none!important}.login_content .btn-default:hover,.login_content a,.tagsinput span.tag a,.tile-stats>.dash-box-footer,.tile:hover,.view a.info,span.tag{text-decoration:none}table.display tr.even.row_selected td{background-color:#B0BED9}table.display tr.odd.row_selected td{background-color:#9FAFD1}div.box{height:100px;padding:10px;overflow:auto;border:1px solid #8080FF;background-color:#E5E5FF}ul.msg_list li{background:#f7f7f7;padding:5px;display:flex;margin:6px 6px 0;width:96%!important}ul.msg_list li:last-child{margin-bottom:6px;padding:10px}ul.msg_list li a{padding:3px 5px!important}ul.msg_list li a .image img{border-radius:2px;-webkit-border-radius:2px;float:left;margin-right:10px;width:11%}ul.msg_list li a .time{font-size:11px;font-style:italic;font-weight:700;position:absolute;right:35px}ul.msg_list li a .message{display:block!important;font-size:11px}.dropdown-menu.msg_list span{white-space:normal}.tile_count .tile_stats_count,ul.quick-list li{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.dropdown-menu{box-shadow:none;display:none;float:left;font-size:12px;left:0;list-style:none;padding:0;position:absolute;text-shadow:none;top:100%;z-index:9998;border:1px solid #D9DEE4;border-top-left-radius:0;border-top-right-radius:0}.dropdown-menu>li>a{color:#5A738E}.navbar-nav .open .dropdown-menu{position:absolute;background:#fff;margin-top:0;border:1px solid #D9DEE4;-webkit-box-shadow:none;right:0;left:auto;width:220px}.navbar-nav .open .dropdown-menu.msg_list{width:300px}.info-number .badge{font-size:10px;font-weight:400;line-height:13px;padding:2px 6px;position:absolute;right:2px;top:8px}ul.to_do{padding:0}ul.to_do li{background:#f3f3f3;border-radius:3px;position:relative;padding:7px;margin-bottom:5px;list-style:none}ul.to_do p{margin:0}.dashboard-widget{background:#f6f6f6;border-top:5px solid #79C3DF;border-radius:3px;padding:5px 10px 10px}.dashboard-widget .dashboard-widget-title{font-weight:400;border-bottom:1px solid #c1cdcd;margin:0 0 10px;padding-bottom:5px;padding-left:40px;line-height:30px}.dashboard-widget .dashboard-widget-title i{font-size:100%;margin-left:-35px;margin-right:10px;color:#33a1c9;padding:3px 6px;border:1px solid #abd9ea;border-radius:5px;background:#fff}ul.quick-list{width:45%;padding-left:0;display:inline-block}ul.quick-list li{padding-left:10px;list-style:none;margin:0;padding-bottom:6px;padding-top:4px}ul.quick-list li i{padding-right:10px;color:#757679}.dashboard-widget-content{padding-top:9px}.dashboard-widget-content .sidebar-widget{width:50%;display:inline-block;vertical-align:top;background:#fff;border:1px solid #abd9ea;border-radius:5px;text-align:center;float:right;padding:2px;margin-top:10px}.widget_summary{width:100%;display:inline-flex}.widget_summary .w_left{float:left;text-align:left}.widget_summary .w_center{float:left}.widget_summary .w_right{float:left;text-align:right}.widget_summary .w_right span{font-size:20px}.w_20{width:20%}.w_25{width:25%}.w_55{width:55%}h5.graph_title{text-align:left;margin-left:10px}h5.graph_title i{margin-right:10px;font-size:17px}span.right{float:right;font-size:14px!important}.tile_info a{text-overflow:ellipsis}.sidebar-footer{bottom:0;clear:both;display:block;padding:5px 0 0;position:fixed;width:230px;background:#2A3F54;z-index:999}.sidebar-footer a{padding:7px 0 3px;text-align:center;width:25%;font-size:17px;display:block;float:left;background:#172D44;cursor:pointer}.sidebar-footer a:hover{background:#425567}.tile_count{margin-bottom:20px;margin-top:20px}.tile_count .tile_stats_count{border-bottom:1px solid #D9DEE4;padding:0 10px 0 20px;position:relative}.tile_count .tile_stats_count:before{content:\"\";position:absolute;left:0;height:65px;border-left:2px solid #ADB2B5;margin-top:10px}@media (min-width:992px){footer{margin-left:230px}.tile_count .tile_stats_count{margin-bottom:10px;border-bottom:0;padding-bottom:10px}.tile_count .tile_stats_count:first-child:before{border-left:0}}.tile_count .tile_stats_count .count{font-size:30px;line-height:47px;font-weight:600}@media (min-width:768px){.tile_count .tile_stats_count .count{font-size:40px}}@media (min-width:992px) and (max-width:1100px){.tile_count .tile_stats_count .count{font-size:30px}}.tile_count .tile_stats_count span{font-size:12px}@media (min-width:768px){.tile_count .tile_stats_count span{font-size:13px}}.tile_count .tile_stats_count .count_bottom i{width:12px}.dashboard_graph{background:#fff;padding:7px 10px}.dashboard_graph .col-md-3,.dashboard_graph .col-md-9{padding:0}a.user-profile{color:#5E6974!important}.user-profile img{width:29px;height:29px;border-radius:50%;margin-right:10px}ul.top_profiles{height:330px;width:100%}ul.top_profiles li{margin:0;padding:3px 5px}ul.top_profiles li:nth-child(odd){background-color:#eee}.media .profile_thumb{border:1px solid;width:50px;height:50px;margin:5px 10px 5px 0;border-radius:50%;padding:9px 12px}.media .profile_thumb i{font-size:30px}.media .date{background:#ccc;width:52px;margin-right:10px;border-radius:10px;padding:5px}.media .date .day,.media .date .month{margin:0;text-align:center;color:#fff}.media .date .day{font-size:27px;line-height:27px;font-weight:700}.event .media-body a.title{font-weight:700}.event .media-body p{margin-bottom:0}h4.graph_title{margin:7px;text-align:center}.fontawesome-icon-list .fa-hover a:hover{background-color:#ddd;color:#fff;text-decoration:none}.fontawesome-icon-list .fa-hover a{display:block;line-height:32px;height:32px;padding-left:10px;border-radius:4px}.fontawesome-icon-list .fa-hover a:hover .fa{font-size:28px;vertical-align:-6px}.fontawesome-icon-list .fa-hover a .fa{width:32px;font-size:16px;display:inline-block;text-align:right;margin-right:10px}.main_menu .fa{width:26px;opacity:.99;display:inline-block;font-family:FontAwesome;font-style:normal;font-weight:400;font-size:18px;-moz-osx-font-smoothing:grayscale}.tile-stats{position:relative;display:block;margin-bottom:12px;border:1px solid #E4E4E4;-webkit-border-radius:5px;overflow:hidden;padding-bottom:5px;-webkit-background-clip:padding-box;-moz-border-radius:5px;-moz-background-clip:padding;border-radius:5px;background:#FFF;transition:all .3s ease-in-out}.tile-stats:hover .icon i{animation-name:transformAnimation;animation-duration:.5s;animation-iteration-count:1;color:rgba(58,58,58,.41);animation-timing-function:ease;animation-fill-mode:forwards;-webkit-animation-name:transformAnimation;-webkit-animation-duration:.5s;-webkit-animation-iteration-count:1;-webkit-animation-timing-function:ease;-webkit-animation-fill-mode:forwards;-moz-animation-name:transformAnimation;-moz-animation-duration:.5s;-moz-animation-iteration-count:1;-moz-animation-timing-function:ease;-moz-animation-fill-mode:forwards}.tile-stats .icon{width:20px;height:20px;color:#BAB8B8;position:absolute;right:53px;top:22px;z-index:1}.tile-stats .icon i{margin:0;font-size:60px;line-height:0;vertical-align:bottom;padding:0}.tile-stats .count{font-size:38px;font-weight:700;line-height:1.65857}.tile-stats .count,.tile-stats h3,.tile-stats p{position:relative;margin:0 0 0 10px;z-index:5;padding:0}.tile-stats h3{color:#BAB8B8}.tile-stats p{margin-top:5px;font-size:12px}.tile-stats>.dash-box-footer{position:relative;text-align:center;margin-top:5px;padding:3px 0;color:#fff;color:rgba(255,255,255,.8);display:block;z-index:10;background:rgba(0,0,0,.1)}.tile-stats>.dash-box-footer:hover{color:#fff;background:rgba(0,0,0,.15)}table.tile_info{padding:10px 15px}table.tile_info span.right{margin-right:0;float:right;position:absolute;right:4%}.tile_header{border-bottom:transparent;padding:7px 15px;margin-bottom:15px;background:#E7E7E7}.tile_head h4{margin-top:0;margin-bottom:5px}.tiles-bottom{padding:5px 10px;margin-top:10px;background:rgba(194,194,194,.3);text-align:left}a.star{color:#428bca!important}.mail_content{background:#FFF;border-radius:4px;margin-top:20px;min-height:500px;padding:10px 11px;width:100%}.list-btn-mail{margin-bottom:15px}.list-btn-mail.active{border-bottom:1px solid #39B3D7;padding:0 0 14px}.list-btn-mail>i{float:left;font-size:18px;font-style:normal;width:33px}.list-btn-mail>.cn{background:#39B3D7;border-radius:12px;color:#FFF;float:right;font-style:normal;padding:0 5px}.byline,.view p{font-style:italic}.button-mail{margin:0 0 15px!important;text-align:left;width:100%}.btn,.buttons,.modal-footer .btn+.btn,button{margin-bottom:5px;margin-right:5px}.btn-group .btn,.btn-group-vertical .btn{margin-bottom:0;margin-right:0}.mail_list_column,.mail_view{border-left:1px solid #DBDBDB}.mail_list{width:100%;border-bottom:1px solid #DBDBDB;margin-bottom:2px;display:inline-block}.mail_list .left{width:5%;float:left;margin-right:3%}.mail_list .right{width:90%;float:left}.mail_list h3{font-size:15px;font-weight:700;margin:0 0 6px}.mail_list h3 small{float:right;color:#ADABAB;font-size:11px;line-height:20px}.mail_list .badge{padding:3px 6px;font-size:8px;background:#BAB7B7}@media (max-width:767px){.mail_list{margin-bottom:5px;display:inline-block}}.mail_heading h4{font-size:18px;border-bottom:1px solid #ddd;padding-bottom:10px;margin-top:20px}.attachment{margin-top:30px}.attachment ul{width:100%;list-style:none;padding-left:0;display:inline-block;margin-bottom:30px}.attachment ul li{float:left;width:150px;margin-right:10px;margin-bottom:10px}.attachment ul li img{height:150px;border:1px solid #ddd;padding:5px;margin-bottom:10px}.attachment ul li span{float:right}.attachment .file-name{float:left}.attachment .links{width:100%;display:inline-block}.compose{padding:0;position:fixed;bottom:0;right:0;background:#fff;border:1px solid #D9DEE4;border-right:0;border-bottom:0;border-top-left-radius:5px;z-index:9999;display:none}.compose .compose-header{padding:5px;background:#169F85;color:#fff;border-top-left-radius:5px}.compose .compose-header .close{text-shadow:0 1px 0 #fff;line-height:.8}.compose .compose-body .editor.btn-toolbar{margin:0}.compose .compose-body .editor-wrapper{height:100%;min-height:50px;max-height:180px;border-radius:0;border-left:none;border-right:none;overflow:auto}.compose .compose-footer{padding:10px}.editor.btn-toolbar{zoom:1;background:#F7F7F7;margin:5px 2px;padding:3px 0;border:1px solid #EFEFEF}.input-group{margin-bottom:10px}.ln_solid{border-top:1px solid #e5e5e5;color:#fff;background-color:#fff;height:1px;margin:20px 0}span.section{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border:0;border-bottom:1px solid #e5e5e5}.form-control{border-radius:0;width:100%}.form-horizontal .control-label{padding-top:8px}.form-control:focus{border-color:#CCD0D7;box-shadow:none!important}legend{font-size:18px;color:inherit}.form-horizontal .form-group{margin-right:0;margin-left:0}.form-control-feedback{margin-top:8px;height:23px;color:#bbb;line-height:24px;font-size:15px}.form-control-feedback.left{border-right:1px solid #ccc;left:13px}.form-control-feedback.right{border-left:1px solid #ccc;right:13px}.form-control.has-feedback-left{padding-left:45px}.form-control.has-feedback-right{padding-right:45px}.form-group{margin-bottom:10px}.validate{margin-top:10px}.invalid-form-error-message{margin-top:10px;padding:5px}.invalid-form-error-message.filled{border-left:2px solid #E74C3C}p.parsley-success{color:#468847;background-color:#DFF0D8;border:1px solid #D6E9C6}p.parsley-error{color:#B94A48;background-color:#F2DEDE;border:1px solid #EED3D7}ul.parsley-errors-list{list-style:none;color:#E74C3C;padding-left:0}input.parsley-error,select.parsley-error,textarea.parsley-error{background:#FAEDEC;border:1px solid #E85445}.btn-group .parsley-errors-list{display:none}.bad input,.bad select,.bad textarea{border:1px solid #CE5454;box-shadow:0 0 4px -2px #CE5454;position:relative;left:0;-moz-animation:.7s 1 shake linear;-webkit-animation:.7s 1 shake linear}.item input,.item textarea{transition:.42s}.item .alert{float:left;margin:0 0 0 20px;padding:3px 10px;color:#FFF;border-radius:3px 4px 4px 3px;background-color:#CE5454;max-width:170px;white-space:pre;position:relative;left:-15px;opacity:0;z-index:1;transition:.15s ease-out}.item .alert::after{content:'';display:block;height:0;width:0;border-color:transparent #CE5454 transparent transparent;border-style:solid;border-width:11px 7px;position:absolute;left:-13px;top:1px}.item.bad .alert{left:0;opacity:1}.inl-bl{display:inline-block}.well .markup{background:#fff;color:#777;position:relative;padding:45px 15px 15px;margin:15px 0 0;border-radius:0 0 4px 4px;box-shadow:none}.well .markup::after{content:\"Example\";position:absolute;top:15px;left:15px;font-size:12px;font-weight:700;color:#bbb;text-transform:uppercase;letter-spacing:1px}.autocomplete-suggestions{border:1px solid #e4e4e4;background:#F4F4F4;cursor:default;overflow:auto}.autocomplete-suggestion{padding:2px 5px;font-size:1.2em;white-space:nowrap;overflow:hidden}.autocomplete-selected{background:#f0f0f0}.autocomplete-suggestions strong{color:#39f;font-weight:bolder}.btn{border-radius:3px}a.btn-danger,a.btn-primary,a.btn-success,a.btn-warning{color:#fff}.btn-success{background:#26B99A;border:1px solid #169F85}.btn-success.active,.btn-success:active,.btn-success:focus,.btn-success:hover,.open .dropdown-toggle.btn-success{background:#169F85}.btn-dark{color:#E9EDEF;background-color:#4B5F71;border-color:#364B5F}.btn-dark.active,.btn-dark:active,.btn-dark:focus,.btn-dark:hover,.open .dropdown-toggle.btn-dark{color:#FFF;background-color:#394D5F;border-color:#394D5F}.btn-round{border-radius:30px}.btn.btn-app{position:relative;padding:15px 5px;margin:0 0 10px 10px;min-width:80px;height:60px;box-shadow:none;border-radius:0;text-align:center;color:#666;border:1px solid #ddd;background-color:#fafafa;font-size:12px}.btn.btn-app>.fa,.btn.btn-app>.glyphicon,.btn.btn-app>.ion{font-size:20px;display:block}.btn.btn-app:hover{background:#f4f4f4;color:#444;border-color:#aaa}.btn.btn-app:active,.btn.btn-app:focus{box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn.btn-app>.badge{position:absolute;top:-3px;right:-10px;font-size:10px;font-weight:400}textarea{padding:10px;vertical-align:top;width:200px}textarea:focus{outline-style:solid;outline-width:2px}.btn_{display:inline-block;padding:3px 9px;margin-bottom:0;font-size:14px;line-height:20px;text-align:center;vertical-align:middle;cursor:pointer;color:#333;text-shadow:0 1px 1px rgba(255,255,255,.75);background-color:#f5f5f5;background-image:linear-gradient(to bottom,#fff,#e6e6e6);background-repeat:repeat-x;filter:progid: DXImageTransform.Microsoft.gradient(enabled=false);border:1px solid #ccc;border-bottom-color:#b3b3b3;border-radius:4px;box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05)}.bs-glyphicons{margin:0 -10px 20px;overflow:hidden}.bs-glyphicons-list{padding-left:0;list-style:none}.bs-glyphicons li{float:left;width:25%;height:115px;padding:10px;font-size:10px;line-height:1.4;text-align:center;background-color:#f9f9f9;border:1px solid #fff}.bs-glyphicons .glyphicon{margin-top:5px;margin-bottom:10px;font-size:24px}.bs-glyphicons .glyphicon-class{display:block;text-align:center;word-wrap:break-word}.bs-glyphicons li:hover{color:#fff;background-color:#1ABB9C}@media (min-width:768px){.bs-glyphicons{margin-right:0;margin-left:0}.bs-glyphicons li{width:12.5%;font-size:12px}}.tagsinput{border:1px solid #CCC;background:#FFF;padding:6px 6px 0;width:300px;overflow-y:auto}span.tag{-moz-border-radius:2px;-webkit-border-radius:2px;display:block;float:left;padding:5px 9px;background:#1ABB9C;color:#F1F6F7;margin-right:5px;font-weight:500;margin-bottom:5px;font-family:helvetica}span.tag a{color:#F1F6F7!important}.tagsinput span.tag a{font-weight:700;color:#82ad2b;font-size:11px}.tagsinput input{width:80px;margin:0;font-family:helvetica;font-size:13px;border:1px solid transparent;padding:3px;background:0 0;color:#000;outline:0}.tagsinput div{display:block;float:left}.social-body,.social-sidebar,ul.bar_tabs.right li{float:right}.tags_clear{clear:both;width:100%;height:0}.not_valid{background:#FBD8DB!important;color:#90111A!important}ul.bar_tabs{overflow:visible;background:#F5F7FA;height:25px;margin:21px 0 14px;padding-left:14px;position:relative;z-index:1;width:100%;border-bottom:1px solid #E6E9ED}ul.bar_tabs>li{border:1px solid #E6E9ED;color:#333!important;margin-top:-17px;margin-left:8px;background:#fff;border-bottom:none;border-radius:4px 4px 0 0}ul.bar_tabs>li.active{border-right:6px solid #D3D6DA;border-top:0;margin-top:-15px}ul.bar_tabs>li a{padding:10px 17px;background:#F5F7FA;margin:0;border-top-right-radius:0}ul.bar_tabs>li a:hover{border:1px solid transparent}ul.bar_tabs>li.active a{border-bottom:none}ul.bar_tabs.right{padding-right:14px}a:focus{outline:0}ul.timeline li{position:relative;border-bottom:1px solid #e8e8e8;clear:both}.timeline .block{margin:0 0 0 105px;border-left:3px solid #e8e8e8;overflow:visible;padding:10px 15px}.timeline.widget{min-width:0;max-width:inherit}.timeline.widget .block{margin-left:5px}.timeline .tags{position:absolute;top:15px;left:0;width:84px}.timeline .tag{display:block;height:30px;font-size:13px;padding:8px}.timeline .tag span{display:block;overflow:hidden;width:100%;white-space:nowrap;text-overflow:ellipsis}.tag{line-height:1;background:#1ABB9C;color:#fff!important}.tag:after{content:\" \";height:30px;width:0;position:absolute;left:100%;top:0;margin:0;pointer-events:none;border-top:14px solid transparent;border-bottom:14px solid transparent;border-left:11px solid #1ABB9C}.timeline h2.title{position:relative;font-size:16px;margin:0}.timeline h2.title:before{content:\"\";position:absolute;left:-23px;top:3px;display:block;width:14px;height:14px;border:3px solid #d2d3d2;border-radius:14px;background:#f9f9f9}.timeline .byline{padding:.25em 0}.byline{font-size:.9375em;line-height:1.3;color:#aab6aa}ul.social li{border:0}.social-sidebar{background:#EDEDED;width:22%}.social-body{border:1px solid #ccc;width:78%}.thumb img{width:50px;height:50px;border-radius:50%}.chat .thumb img{width:27px;height:27px;border-radius:50%}.chat .status{float:left;margin:16px 0 0 -16px;font-size:14px;font-weight:700;width:12px;height:12px;display:block;border:2px solid #FFF;z-index:12312;border-radius:50%}.chart,.percent{display:inline-block}.chat .status.online{background:#1ABB9C}.chat .status.away{background:#F39C12}.chat .status.offline{background:#ccc}.chat .media-body{padding-top:5px}.dashboard_graph .x_title{padding:5px 5px 7px}.dashboard_graph .x_title h3{margin:0;font-weight:400}.chart{position:relative;width:110px;height:110px;margin-top:5px;margin-bottom:5px;text-align:center}.chart canvas{position:absolute;top:0;left:0}.percent{line-height:110px;z-index:2;font-size:18px}.percent:after{content:'%';margin-left:.1em;font-size:.8em}.angular{margin-top:100px}.angular .chart{margin-top:0}.widget{min-width:250px;max-width:310px}.widget_tally_box .btn-group button{text-align:center;color:inherit;font-weight:500;background-color:#f5f5f5;border:1px solid #e7e7e7}ul.widget_tally,ul.widget_tally li{width:100%}ul.widget_tally li{padding:2px 10px 4px;border-bottom:1px solid #ECECEC}ul.widget_tally .month{width:70%;float:left}ul.widget_tally .count{width:30%;float:left;text-align:right}.pie_bg{border-bottom:1px solid rgba(101,204,182,.16);border-radius:4px;filter:progid: DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffe6e6e6', GradientType=0);filter:progid: DXImageTransform.Microsoft.gradient(enabled=false);padding-bottom:10px;box-shadow:0 4px 6px -6px #222}.widget_tally_box .flex{display:flex}ul.widget_profile_box{width:100%;height:42px;padding:3px;background:#ececec;margin-top:40px;margin-left:1px}ul.widget_profile_box li:first-child{width:25%;float:left}ul.widget_profile_box li:first-child a{float:left}ul.widget_profile_box li:last-child{width:25%;float:right}ul.widget_profile_box li:last-child a{float:right}ul.widget_profile_box li a{font-size:22px;text-align:center;width:35px;height:35px;border:1px solid rgba(52,73,94,.44);display:block;border-radius:50%;padding:0}ul.widget_profile_box li a:hover{color:#1ABB9C!important;border:1px solid #26b99a}ul.widget_profile_box li .profile_img{width:85px;height:85px;margin:-28px 0 0}.widget_tally_box p,.widget_tally_box span{text-align:center}.widget_tally_box .name{text-align:center;margin:25px}.widget_tally_box .name_title{text-align:center;margin:5px}.widget_tally_box ul.legend{margin:0}.widget_tally_box ul.legend p,.widget_tally_box ul.legend span{text-align:left}.widget_tally_box ul.legend li .icon{font-size:20px;float:left;width:14px}.widget_tally_box ul.legend li .name{font-size:14px;margin:5px 0 0 14px;text-overflow:ellipsis;float:left}.widget_tally_box ul.legend p{display:inline-block;margin:0}.widget_tally_box ul.verticle_bars li{height:140px;width:23%}.widget .verticle_bars li .progress.vertical.progress_wide{width:65%}ul.count2{width:100%;margin-left:1px;border:1px solid #ddd;border-left:0;border-right:0;padding:10px 0}ul.count2 li{width:30%;text-align:center}ul.count2 li h3{font-weight:400;margin:0}ul.count2 li span{font-weight:300}.divider{border-bottom:1px solid #ddd;margin:10px}.divider-dashed{border-top:1px dashed #e7eaec;background-color:#fff;height:1px;margin:10px 0}ul.messages{padding:0;list-style:none}.tasks li,ul.messages li{border-bottom:1px dotted #e6e6e6;padding:8px 0}img.avatar,ul.messages li img.avatar{height:32px;width:32px;float:left;display:inline-block;border-radius:2px;padding:2px;background:#f7f7f7;border:1px solid #e6e6e6}ul.messages li .message_date{float:right;text-align:right}ul.messages li .message_wrapper{margin-left:50px;margin-right:40px}ul.messages li .message_wrapper h4.heading{font-weight:600;margin:0 0 10px;cursor:pointer;line-height:100%}ul.messages li .message_wrapper blockquote{padding:0 10px;margin:0;border-left:5px solid #eee}ul.user_data li{margin-bottom:6px}ul.user_data li p{margin-bottom:0}ul.user_data li .progress{width:90%}.project_progress .progress{margin-bottom:3px!important;margin-top:5px}.projects .list-inline{margin:0}.profile_title{background:#F5F7FA;border:0;padding:7px 0;display:flex}ul.stats-overview{border-bottom:1px solid #e8e8e8;padding-bottom:10px;margin-bottom:10px}ul.stats-overview li{display:inline-block;text-align:center;padding:0 15px;width:30%;font-size:14px;border-right:1px solid #e8e8e8}ul.stats-overview li:last-child{border-right:0}ul.stats-overview li .name{font-size:12px}ul.stats-overview li .value{font-size:14px;font-weight:700;display:block}ul.stats-overview li:first-child{padding-left:0}ul.project_files li{margin-bottom:5px}ul.project_files li a i{width:20px}.project_detail p{margin-bottom:10px}.project_detail p.title{font-weight:700;margin-bottom:0}.avatar img{border-radius:50%;max-width:45px}.pricing{background:#fff}.pricing .title{background:#1ABB9C;height:110px;color:#fff;padding:15px 0 0;text-align:center}.pricing .title h2{text-transform:capitalize;font-size:18px;border-radius:5px 5px 0 0;margin:0;font-weight:400}.notifications a,.tabbed_notifications h2,.view .tools,.view a.info{text-transform:uppercase}.pricing .title h1{font-size:30px;margin:12px}.pricing .title span{background:rgba(51,51,51,.28);padding:2px 5px}.pricing_features{background:#FAFAFA;padding:20px 15px;min-height:230px;font-size:13.5px}.pricing_features ul li{margin-top:10px}.pricing_footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;text-align:center;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.pricing_footer p{font-size:13px;padding:10px 0 2px;display:block}.ui-ribbon-container{position:relative}.ui-ribbon-container .ui-ribbon-wrapper{position:absolute;overflow:hidden;width:85px;height:88px;top:-3px;right:-3px}.ui-ribbon-container.ui-ribbon-primary .ui-ribbon{background-color:#5b90bf}.ui-ribbon-container .ui-ribbon{position:relative;display:block;text-align:center;font-size:15px;font-weight:700;color:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg);padding:7px 0;left:-5px;top:15px;width:120px;line-height:20px;background-color:#555;box-shadow:0 0 3px rgba(0,0,0,.3)}.ui-ribbon-container.ui-ribbon-primary .ui-ribbon:after,.ui-ribbon-container.ui-ribbon-primary .ui-ribbon:before{border-top:2px solid #5b90bf}.ui-ribbon-container .ui-ribbon:before{left:0;bottom:-1px;right:0}.ui-ribbon-container .ui-ribbon:after,.ui-ribbon-container .ui-ribbon:before{position:absolute;content:\" \";line-height:0;border-top:2px solid #555;border-left:2px solid transparent;border-right:2px solid transparent}.thumbnail .image{height:120px;overflow:hidden}.caption{padding:9px 5px;background:#F7F7F7}.caption p{margin-bottom:5px}.thumbnail{height:190px;overflow:hidden}.view{overflow:hidden;position:relative;text-align:center;box-shadow:1px 1px 2px #e6e6e6;cursor:default}.dropdown-menu a,.voiceBtn{cursor:pointer}.view .content,.view .mask{position:absolute;width:100%;overflow:hidden;top:0;left:0}.sideways,.view .tools,.view img,.view p{position:relative}.view img{display:block}.view .tools{color:#fff;text-align:center;font-size:17px;padding:3px;background:rgba(0,0,0,.35);margin:43px 0 0}.mask.no-caption .tools{margin:90px 0 0}.view .tools a{display:inline-block;color:#FFF;font-size:18px;font-weight:400;padding:0 4px}.view p{font-family:Georgia,serif;font-size:12px;color:#fff;padding:10px 20px 20px;text-align:center}.view a.info{display:inline-block;padding:7px 14px;background:#000;color:#fff;box-shadow:0 0 1px #000}.view-first img{transition:all .2s linear}.view-first .mask{opacity:0;background-color:rgba(0,0,0,.5);transition:all .4s ease-in-out}.view-first .tools{-webkit-transform:translateY(-100px);transform:translateY(-100px);opacity:0;transition:all .2s ease-in-out}.view-first p{-webkit-transform:translateY(100px);transform:translateY(100px);opacity:0;transition:all .2s linear}.view-first:hover img{-webkit-transform:scale(1.1);transform:scale(1.1)}.view-first:hover .mask{opacity:1}.view-first:hover .tools,.view-first:hover p{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.view-first:hover p{transition-delay:.1s}.form-group.has-feedback span{display:block!important}.form-group .btn{margin-bottom:-6px}.input-group-btn .btn{margin-bottom:0}.input-group.date .input-group-addon{border-radius:0px!important;background-color:#ffff!important}/*!\n * bootstrap-vertical-tabs - v1.2.1\n * https://dbtek.github.io/bootstrap-vertical-tabs\n * 2014-11-07\n * Copyright (c) 2014 Ä°smail Demirbilek\n * License: MIT\n */.tabs-left,.tabs-right{border-bottom:none;padding-top:2px}.tabs-left{border-right:1px solid #F7F7F7}.tabs-right{border-left:1px solid #F7F7F7}.tabs-left>li,.tabs-right>li{float:none;margin-bottom:2px}.alignleft,.left{float:left}.tabs-left>li{margin-right:-1px}.tabs-left>li>a,.tabs-right>li>a{margin-right:0;background:#F7F7F7;overflow:hidden;text-overflow:ellipsis}.tabs-right>li{margin-left:-1px}.tabs-left>li.active>a,.tabs-left>li.active>a:focus,.tabs-left>li.active>a:hover{border-bottom-color:#F7F7F7;border-right-color:transparent}.tabs-right>li.active>a,.tabs-right>li.active>a:focus,.tabs-right>li.active>a:hover{border-bottom:1px solid #F7F7F7;border-left-color:transparent}.tabs-left>li>a{border-radius:4px 0 0 4px;display:block}.tabs-right>li>a{border-radius:0 4px 4px 0}.sideways{margin-top:50px;border:none}.sideways>li{height:20px;width:120px;margin-bottom:100px}.sideways>li>a{border-bottom:1px solid #ddd;border-right-color:transparent;text-align:center;border-radius:4px 4px 0 0}.sideways>li.active>a,.sideways>li.active>a:focus,.sideways>li.active>a:hover{border-bottom-color:transparent;border-right-color:#ddd;border-left-color:#ddd}.sideways.tabs-left{left:-50px}.sideways.tabs-right{right:-50px}.sideways.tabs-right>li{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sideways.tabs-left>li{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.morris-hover{position:absolute;z-index:1000}.morris-hover.morris-default-style{padding:6px;color:#666;background:rgba(243,242,243,.8);border:2px solid rgba(195,194,196,.8);font-family:sans-serif;font-size:12px;text-align:center}.morris-hover.morris-default-style .morris-hover-row-label{font-weight:700;margin:.25em 0}.morris-hover.morris-default-style .morris-hover-point{white-space:nowrap;margin:.1em 0}.price{font-size:40px;font-weight:400;color:#26B99A;margin:0}.prod_title{border-bottom:1px solid #DFDFDF;padding-bottom:5px;margin:30px 0;font-size:20px;font-weight:400}.product-image img{width:90%}.prod_color li{margin:0 10px}.prod_color li p{margin-bottom:0}.prod_size li{padding:0}.prod_color .color{width:25px;height:25px;border:2px solid rgba(51,51,51,.28)!important;padding:2px;border-radius:50px}.product_gallery a{width:100px;height:100px;float:left;margin:10px;border:1px solid #e5e5e5}.product_gallery a img{width:100%;margin-top:15px}.product_price{margin:20px 0;padding:5px 10px;background-color:#FFF;text-align:left;border:2px dashed #E0E0E0}.price-tax{font-size:18px}.product_social{margin:20px 0}.product_social ul li a i{font-size:35px}.login{background:#F7F7F7}.login .fa-paw{font-size:26px}a.hiddenanchor{display:none}.login_wrapper{right:0;margin:5% auto 0;max-width:350px;position:relative}.cropper .docs-cropped .modal-body>canvas,.cropper .docs-cropped .modal-body>img,.cropper .img-container>img,.cropper .img-preview>img{max-width:100%}.login_form,.registration_form{position:absolute;top:0;width:100%}.registration_form{z-index:21;opacity:0;width:100%}.login_form{z-index:22}#signin:target~.login_wrapper .login_form,#signup:target~.login_wrapper .registration_form{z-index:22;-webkit-animation-name:fadeInLeft;animation-name:fadeInLeft;-webkit-animation-delay:.1s;animation-delay:.1s}#signin:target~.login_wrapper .registration_form,#signup:target~.login_wrapper .login_form{-webkit-animation-name:fadeOutLeft;animation-name:fadeOutLeft}.animate{-webkit-animation-duration:.5s;-webkit-animation-timing-function:ease;-webkit-animation-fill-mode:both;-moz-animation-duration:.5s;-moz-animation-timing-function:ease;-moz-animation-fill-mode:both;-o-animation-duration:.5s;-o-animation-timing-function:ease;-o-animation-fill-mode:both;-ms-animation-duration:.5s;-ms-animation-timing-function:ease;-ms-animation-fill-mode:both;animation-duration:.5s;animation-timing-function:ease;animation-fill-mode:both}.login_box{padding:20px;margin:auto}.alignleft{margin-right:15px}.alignright{float:right;margin-left:15px}.clearfix:after,form:after{content:\".\";display:block;height:0;clear:both;visibility:hidden}.login_content{margin:0 auto;padding:25px 0 0;position:relative;text-align:center;text-shadow:0 1px 0 #fff;min-width:280px}.login_content a:hover{text-decoration:underline}.login_content h1{font:400 25px Helvetica,Arial,sans-serif;letter-spacing:-.05em;line-height:20px;margin:10px 0 30px}.login_content h1:after,.login_content h1:before{content:\"\";height:1px;position:absolute;top:10px;width:20%}.login_content h1:after{background:#7e7e7e;background:linear-gradient(left,#7e7e7e 0,#fff 100%);right:0}.login_content h1:before{background:#7e7e7e;background:linear-gradient(right,#7e7e7e 0,#fff 100%);left:0}.login_content form{margin:20px 0;position:relative}.login_content form input[type=text],.login_content form input[type=email],.login_content form input[type=password]{border-radius:3px;-ms-box-shadow:0 1px 0 #fff,0 -2px 5px rgba(0,0,0,.08) inset;-o-box-shadow:0 1px 0 #fff,0 -2px 5px rgba(0,0,0,.08) inset;box-shadow:0 1px 0 #fff,0 -2px 5px rgba(0,0,0,.08) inset;border:1px solid #c8c8c8;color:#777;margin:0 0 20px;width:100%}.login_content form input[type=text]:focus,.login_content form input[type=email]:focus,.login_content form input[type=password]:focus{-ms-box-shadow:0 0 2px #ed1c24 inset;-o-box-shadow:0 0 2px #ed1c24 inset;box-shadow:0 0 2px #A97AAD inset;background-color:#fff;border:1px solid #A878AF;outline:0}#username{background-position:10px 10px!important}#password{background-position:10px -53px!important}.login_content form div a{font-size:12px;margin:10px 15px 0 0}.reset_pass{margin-top:10px!important}.login_content div .reset_pass{margin-top:13px!important;margin-right:39px;float:right}.separator{border-top:1px solid #D8D8D8;margin-top:10px;padding-top:10px}.button{background:#f7f9fa;background:linear-gradient(top,#f7f9fa 0,#f0f0f0 100%);filter:progid: DXImageTransform.Microsoft.gradient( startColorstr='#f7f9fa', endColorstr='#f0f0f0', GradientType=0);-ms-box-shadow:0 1px 2px rgba(0,0,0,.1) inset;-o-box-shadow:0 1px 2px rgba(0,0,0,.1) inset;box-shadow:0 1px 2px rgba(0,0,0,.1) inset;border-radius:0 0 5px 5px;border-top:1px solid #CFD5D9;padding:15px 0}#content form .submit,.login_content form input[type=submit]{float:left;margin-left:38px}.button a{background:url(http://cssdeck.com/uploads/media/items/8/8bcLQqF.png) 0 -112px no-repeat;color:#7E7E7E;font-size:17px;padding:2px 0 2px 40px;text-decoration:none;transition:all .3s ease}.button a:hover{background-position:0 -135px;color:#00aeef}header{width:100%}#nprogress .bar{background:#1ABB9C}#nprogress .peg{box-shadow:0 0 10px #1ABB9C,0 0 5px #1ABB9C}#nprogress .spinner-icon{border-top-color:#1ABB9C;border-left-color:#1ABB9C}.editor-wrapper{min-height:250px;background-color:#fff;border-collapse:separate;border:1px solid #ccc;padding:4px;box-sizing:content-box;box-shadow:rgba(0,0,0,.07451) 0 1px 1px 0 inset;overflow:scroll;outline:0;border-radius:3px}.voiceBtn{width:20px;color:transparent;background-color:transparent;transform:scale(2,2);-webkit-transform:scale(2,2);-moz-transform:scale(2,2);border:transparent;box-shadow:none;-webkit-box-shadow:none}div[data-role=editor-toolbar]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.select2-container--default .select2-selection--multiple,.select2-container--default .select2-selection--single{background-color:#fff;border:1px solid #ccc;border-radius:0;min-height:38px}.select2-container--default .select2-selection--single .select2-selection__rendered{color:#73879C;padding-top:5px}.select2-container--default .select2-selection--multiple .select2-selection__rendered{padding-top:3px}.select2-container--default .select2-selection--single .select2-selection__arrow{height:36px}.select2-container--default .select2-selection--multiple .select2-selection__choice,.select2-container--default .select2-selection--multiple .select2-selection__clear{margin-top:2px;border:none;border-radius:0;padding:3px 5px}.select2-container--default.select2-container--focus .select2-selection--multiple{border:1px solid #ccc}.switchery{width:32px;height:20px}.switchery>small{width:20px;height:20px}fieldset{border:none;margin:0;padding:0}.cropper .img-container,.cropper .img-preview{background-color:#f7f7f7;width:100%;text-align:center}.cropper .img-container{min-height:200px;max-height:516px;margin-bottom:20px}.cropper .docs-data>.input-group,.cropper .docs-toggles>.btn,.cropper .docs-toggles>.btn-group,.cropper .docs-toggles>.dropdown,.cropper .img-preview{margin-bottom:10px}@media (min-width:768px){.cropper .img-container{min-height:516px}}.cropper .docs-preview{margin-right:-15px}.cropper .img-preview{float:left;margin-right:10px;overflow:hidden}.cropper .preview-lg{width:263px;height:148px}.cropper .preview-md{width:139px;height:78px}.cropper .preview-sm{width:69px;height:39px}.cropper .preview-xs{width:35px;height:20px;margin-right:0}.cropper .docs-data>.input-group>label{min-width:80px}.cropper .docs-data>.input-group>span{min-width:50px}.cropper .docs-buttons>.btn,.cropper .docs-buttons>.btn-group,.cropper .docs-buttons>.form-control{margin-right:5px;margin-bottom:10px}.cropper .docs-tooltip{display:block;margin:-6px -12px;padding:6px 12px}.cropper .docs-tooltip>.icon{margin:0 -3px;vertical-align:top}.cropper .tooltip-inner{white-space:normal}.cropper .btn-toggle .tooltip-inner,.cropper .btn-upload .tooltip-inner{white-space:nowrap}.cropper .btn-toggle{padding:6px}.cropper .btn-toggle>.docs-tooltip{margin:-6px;padding:6px}@media (max-width:400px){.cropper .btn-group-crop{margin-right:-15px!important}.cropper .btn-group-crop>.btn{padding-left:5px;padding-right:5px}.cropper .btn-group-crop .docs-tooltip{margin-left:-5px;margin-right:-5px;padding-left:5px;padding-right:5px}}.cropper .docs-options .dropdown-menu{width:100%}.cropper .docs-options .dropdown-menu>li{padding:3px 20px}.cropper .docs-options .dropdown-menu>li:hover{background-color:#f7f7f7}.cropper .docs-options .dropdown-menu>li>label{display:block}.cropper .docs-cropped .modal-body{text-align:center}.cropper .docs-diagram .modal-dialog{max-width:352px}.cropper .docs-cropped canvas{max-width:100%}.form_wizard .stepContainer{display:block;position:relative;margin:0;padding:0;border:0 solid #CCC;overflow-x:hidden}.wizard_horizontal ul.wizard_steps{display:table;list-style:none;position:relative;width:100%;margin:0 0 20px}.wizard_horizontal ul.wizard_steps li{display:table-cell;text-align:center}.wizard_horizontal ul.wizard_steps li a,.wizard_horizontal ul.wizard_steps li:hover{display:block;position:relative;-moz-opacity:1;filter:alpha(opacity=100);opacity:1;color:#666}.wizard_horizontal ul.wizard_steps li a:before{content:\"\";position:absolute;height:4px;background:#ccc;top:20px;width:100%;z-index:4;left:0}.wizard_horizontal ul.wizard_steps li a.disabled .step_no{background:#ccc}.wizard_horizontal ul.wizard_steps li a .step_no{width:40px;height:40px;line-height:40px;border-radius:100px;display:block;margin:0 auto 5px;font-size:16px;text-align:center;position:relative;z-index:5}.step_no,.wizard_horizontal ul.wizard_steps li a.selected:before{background:#34495E;color:#fff}.wizard_horizontal ul.wizard_steps li a.done .step_no,.wizard_horizontal ul.wizard_steps li a.done:before{background:#1ABB9C;color:#fff}.wizard_horizontal ul.wizard_steps li:first-child a:before{left:50%}.wizard_horizontal ul.wizard_steps li:last-child a:before{right:50%;width:50%;left:auto}.wizard_verticle .stepContainer{width:80%;float:left;padding:0 10px}.actionBar{width:100%;border-top:1px solid #ddd;padding:10px 5px;text-align:right;margin-top:10px}.actionBar .buttonDisabled{cursor:not-allowed;pointer-events:none;opacity:.65;filter:alpha(opacity=65);box-shadow:none}.actionBar a{margin:0 3px}.wizard_verticle .wizard_content{width:80%;float:left;padding-left:20px}.wizard_verticle ul.wizard_steps{display:table;list-style:none;position:relative;width:20%;float:left;margin:0 0 20px}.wizard_verticle ul.wizard_steps li{display:list-item;text-align:center}.wizard_verticle ul.wizard_steps li a{height:80px}.wizard_verticle ul.wizard_steps li a:first-child{margin-top:20px}.wizard_verticle ul.wizard_steps li a,.wizard_verticle ul.wizard_steps li:hover{display:block;position:relative;-moz-opacity:1;filter:alpha(opacity=100);opacity:1;color:#666}.wizard_verticle ul.wizard_steps li a:before{content:\"\";position:absolute;height:100%;background:#ccc;top:20px;width:4px;z-index:4;left:49%}.wizard_verticle ul.wizard_steps li a.disabled .step_no{background:#ccc}.wizard_verticle ul.wizard_steps li a .step_no{width:40px;height:40px;line-height:40px;border-radius:100px;display:block;margin:0 auto 5px;font-size:16px;text-align:center;position:relative;z-index:5}.progress.progress_sm,.progress.progress_sm .progress-bar{height:10px!important}.step_no,.wizard_verticle ul.wizard_steps li a.selected:before{background:#34495E;color:#fff}.wizard_verticle ul.wizard_steps li a.done .step_no,.wizard_verticle ul.wizard_steps li a.done:before{background:#1ABB9C;color:#fff}.wizard_verticle ul.wizard_steps li:first-child a:before{left:49%}.wizard_verticle ul.wizard_steps li:last-child a:before{left:49%;left:auto;width:0}.form_wizard .loader,.form_wizard .msgBox{display:none}.progress{border-radius:0}.progress-bar-info{background-color:#3498DB}.progress-bar-success{background-color:#26B99A}.progress_summary .progress{margin:5px 0 12px!important}.progress_summary .row{margin-bottom:5px}.progress_summary .row .col-xs-2{padding:0}.progress_summary .data span,.progress_summary .more_info span{text-align:right;float:right}.progress_summary p{margin-bottom:3px;width:100%}.progress_title .left{float:left;text-align:left}.progress_title .right{float:right;text-align:right;font-weight:300}.progress.progress_sm{border-radius:0;margin-bottom:18px}.dashboard_graph p{margin:0 0 4px}ul.verticle_bars{width:100%}ul.verticle_bars li{width:23%;height:200px;margin:0}.progress.vertical.progress_wide{width:35px}.alert-success{color:#fff;background-color:rgba(38,185,154,.88);border-color:rgba(38,185,154,.88)}.alert-info{color:#E9EDEF;background-color:rgba(52,152,219,.88);border-color:rgba(52,152,219,.88)}.alert-warning{color:#E9EDEF;background-color:rgba(243,156,18,.88);border-color:rgba(243,156,18,.88)}.alert-danger,.alert-error{color:#E9EDEF;background-color:rgba(231,76,60,.88);border-color:rgba(231,76,60,.88)}.ui-pnotify.dark .ui-pnotify-container{color:#E9EDEF;background-color:rgba(52,73,94,.88);border-color:rgba(52,73,94,.88)}.custom-notifications{position:fixed;margin:15px;right:0;float:right;width:400px;z-index:4000;bottom:0}ul.notifications{float:right;display:block;margin-bottom:7px;padding:0;width:100%}.notifications li{float:right;margin:3px;width:36px;box-shadow:3px 3px 3px rgba(0,0,0,.3)}.notifications li:last-child{margin-left:0}.notifications a{display:block;text-align:center;text-decoration:none;padding:9px 8px}.tabbed_notifications .text{padding:5px 15px;height:140px;border-radius:7px;box-shadow:6px 6px 6px rgba(0,0,0,.3)}.tabbed_notifications div p{display:inline-block}.tabbed_notifications h2{font-weight:700;width:80%;float:left;height:20px;text-overflow:ellipsis;overflow:hidden;display:block}.tabbed_notifications .close{padding:5px;color:#E9EDEF;float:right;opacity:1}.fc-state-default{background:#f5f5f5;color:#73879C}.fc-state-active,.fc-state-down{color:#333;background:#ccc}.dropzone{min-height:300px;border:1px solid #e5e5e5}.main_menu .label{line-height:11px;margin-top:4px}@media (max-width:460px){.dataTables_wrapper .col-sm-6{width:100%;margin-bottom:5px}.dataTables_wrapper .col-sm-6 .dataTables_filter{float:none}}@media (max-width:767px){.dataTables_length{float:none}}.daterangepicker.xdisplay{width:228px}.dataTables_wrapper>.row{overflow:auto!important}"

/***/ }),

/***/ "./src/assets/login_css/vendors/animate.css/animate.min.css":
/*!******************************************************************!*\
  !*** ./src/assets/login_css/vendors/animate.css/animate.min.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n\n/*!\n * animate.css -http://daneden.me/animate\n * Version - 3.5.0\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2016 Daniel Eden\n */\n\n.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}\n\n.animated.infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}\n\n.animated.hinge{-webkit-animation-duration:2s;animation-duration:2s}\n\n.animated.bounceIn,.animated.bounceOut,.animated.flipOutX,.animated.flipOutY{-webkit-animation-duration:.75s;animation-duration:.75s}\n\n@-webkit-keyframes bounce{0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}40%,43%,70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06)}70%{-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}\n\n@keyframes bounce{0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}40%,43%,70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06)}70%{-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}\n\n.bounce{-webkit-animation-name:bounce;animation-name:bounce;-webkit-transform-origin:center bottom;transform-origin:center bottom}\n\n@-webkit-keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}\n\n@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}\n\n.flash{-webkit-animation-name:flash;animation-name:flash}\n\n@-webkit-keyframes pulse{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}\n\n@keyframes pulse{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}\n\n.pulse{-webkit-animation-name:pulse;animation-name:pulse}\n\n@-webkit-keyframes rubberBand{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}\n\n@keyframes rubberBand{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}\n\n.rubberBand{-webkit-animation-name:rubberBand;animation-name:rubberBand}\n\n@-webkit-keyframes shake{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}\n\n@keyframes shake{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}\n\n.shake{-webkit-animation-name:shake;animation-name:shake}\n\n@-webkit-keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0)}6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)}18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)}31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)}43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)}50%{-webkit-transform:translateX(0);transform:translateX(0)}}\n\n@keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0)}6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)}18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)}31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)}43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)}50%{-webkit-transform:translateX(0);transform:translateX(0)}}\n\n.headShake{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-name:headShake;animation-name:headShake}\n\n@-webkit-keyframes swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}\n\n@keyframes swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}\n\n.swing{-webkit-transform-origin:top center;transform-origin:top center;-webkit-animation-name:swing;animation-name:swing}\n\n@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate(-3deg);transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(3deg);transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(-3deg);transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}\n\n@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate(-3deg);transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(3deg);transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(-3deg);transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}\n\n.tada{-webkit-animation-name:tada;animation-name:tada}\n\n@-webkit-keyframes wobble{0%{-webkit-transform:none;transform:none}15%{-webkit-transform:translate3d(-25%,0,0) rotate(-5deg);transform:translate3d(-25%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate(3deg);transform:translate3d(20%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate(-3deg);transform:translate3d(-15%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate(2deg);transform:translate3d(10%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate(-1deg);transform:translate3d(-5%,0,0) rotate(-1deg)}to{-webkit-transform:none;transform:none}}\n\n@keyframes wobble{0%{-webkit-transform:none;transform:none}15%{-webkit-transform:translate3d(-25%,0,0) rotate(-5deg);transform:translate3d(-25%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate(3deg);transform:translate3d(20%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate(-3deg);transform:translate3d(-15%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate(2deg);transform:translate3d(10%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate(-1deg);transform:translate3d(-5%,0,0) rotate(-1deg)}to{-webkit-transform:none;transform:none}}\n\n.wobble{-webkit-animation-name:wobble;animation-name:wobble}\n\n@-webkit-keyframes jello{0%,11.1%,to{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}\n\n@keyframes jello{0%,11.1%,to{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}\n\n.jello{-webkit-animation-name:jello;animation-name:jello;-webkit-transform-origin:center;transform-origin:center}\n\n@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\n\n@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\n\n.bounceIn{-webkit-animation-name:bounceIn;animation-name:bounceIn}\n\n@-webkit-keyframes bounceInDown{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}to{-webkit-transform:none;transform:none}}\n\n@keyframes bounceInDown{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}to{-webkit-transform:none;transform:none}}\n\n.bounceInDown{-webkit-animation-name:bounceInDown;animation-name:bounceInDown}\n\n@-webkit-keyframes bounceInLeft{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}to{-webkit-transform:none;transform:none}}\n\n@keyframes bounceInLeft{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}to{-webkit-transform:none;transform:none}}\n\n.bounceInLeft{-webkit-animation-name:bounceInLeft;animation-name:bounceInLeft}\n\n@-webkit-keyframes bounceInRight{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}to{-webkit-transform:none;transform:none}}\n\n@keyframes bounceInRight{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}to{-webkit-transform:none;transform:none}}\n\n.bounceInRight{-webkit-animation-name:bounceInRight;animation-name:bounceInRight}\n\n@-webkit-keyframes bounceInUp{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}\n\n@keyframes bounceInUp{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}\n\n.bounceInUp{-webkit-animation-name:bounceInUp;animation-name:bounceInUp}\n\n@-webkit-keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}\n\n@keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}\n\n.bounceOut{-webkit-animation-name:bounceOut;animation-name:bounceOut}\n\n@-webkit-keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}\n\n@keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}\n\n.bounceOutDown{-webkit-animation-name:bounceOutDown;animation-name:bounceOutDown}\n\n@-webkit-keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}\n\n@keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}\n\n.bounceOutLeft{-webkit-animation-name:bounceOutLeft;animation-name:bounceOutLeft}\n\n@-webkit-keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}\n\n@keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}\n\n.bounceOutRight{-webkit-animation-name:bounceOutRight;animation-name:bounceOutRight}\n\n@-webkit-keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0)}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}\n\n@keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0)}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}\n\n.bounceOutUp{-webkit-animation-name:bounceOutUp;animation-name:bounceOutUp}\n\n@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}\n\n@keyframes fadeIn{0%{opacity:0}to{opacity:1}}\n\n.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}\n\n@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}\n\n@keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}\n\n.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}\n\n@-webkit-keyframes fadeInDownBig{0%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}to{opacity:1;-webkit-transform:none;transform:none}}\n\n@keyframes fadeInDownBig{0%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}to{opacity:1;-webkit-transform:none;transform:none}}\n\n.fadeInDownBig{-webkit-animation-name:fadeInDownBig;animation-name:fadeInDownBig}\n\n@-webkit-keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}\n\n@keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}\n\n.fadeInLeft{-webkit-animation-name:fadeInLeft;animation-name:fadeInLeft}\n\n@-webkit-keyframes fadeInLeftBig{0%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}\n\n@keyframes fadeInLeftBig{0%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}\n\n.fadeInLeftBig{-webkit-animation-name:fadeInLeftBig;animation-name:fadeInLeftBig}\n\n@-webkit-keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}\n\n@keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}\n\n.fadeInRight{-webkit-animation-name:fadeInRight;animation-name:fadeInRight}\n\n@-webkit-keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}\n\n@keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}\n\n.fadeInRightBig{-webkit-animation-name:fadeInRightBig;animation-name:fadeInRightBig}\n\n@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}\n\n@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}\n\n.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}\n\n@-webkit-keyframes fadeInUpBig{0%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}to{opacity:1;-webkit-transform:none;transform:none}}\n\n@keyframes fadeInUpBig{0%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}to{opacity:1;-webkit-transform:none;transform:none}}\n\n.fadeInUpBig{-webkit-animation-name:fadeInUpBig;animation-name:fadeInUpBig}\n\n@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}\n\n@keyframes fadeOut{0%{opacity:1}to{opacity:0}}\n\n.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}\n\n@-webkit-keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}\n\n@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}\n\n.fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown}\n\n@-webkit-keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}\n\n@keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}\n\n.fadeOutDownBig{-webkit-animation-name:fadeOutDownBig;animation-name:fadeOutDownBig}\n\n@-webkit-keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}\n\n@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}\n\n.fadeOutLeft{-webkit-animation-name:fadeOutLeft;animation-name:fadeOutLeft}\n\n@-webkit-keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}\n\n@keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}\n\n.fadeOutLeftBig{-webkit-animation-name:fadeOutLeftBig;animation-name:fadeOutLeftBig}\n\n@-webkit-keyframes fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}\n\n@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}\n\n.fadeOutRight{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight}\n\n@-webkit-keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}\n\n@keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}\n\n.fadeOutRightBig{-webkit-animation-name:fadeOutRightBig;animation-name:fadeOutRightBig}\n\n@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}\n\n@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}\n\n.fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}\n\n@-webkit-keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}\n\n@keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}\n\n.fadeOutUpBig{-webkit-animation-name:fadeOutUpBig;animation-name:fadeOutUpBig}\n\n@-webkit-keyframes flip{0%{-webkit-transform:perspective(400px) rotateY(-1turn);transform:perspective(400px) rotateY(-1turn)}0%,40%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-190deg);transform:perspective(400px) translateZ(150px) rotateY(-190deg)}50%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-170deg);transform:perspective(400px) translateZ(150px) rotateY(-170deg)}50%,80%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95);transform:perspective(400px) scale3d(.95,.95,.95)}to{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}\n\n@keyframes flip{0%{-webkit-transform:perspective(400px) rotateY(-1turn);transform:perspective(400px) rotateY(-1turn)}0%,40%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-190deg);transform:perspective(400px) translateZ(150px) rotateY(-190deg)}50%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-170deg);transform:perspective(400px) translateZ(150px) rotateY(-170deg)}50%,80%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95);transform:perspective(400px) scale3d(.95,.95,.95)}to{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}\n\n.animated.flip{-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip;animation-name:flip}\n\n@-webkit-keyframes flipInX{0%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}0%,40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}40%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg)}60%{-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}\n\n@keyframes flipInX{0%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}0%,40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}40%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg)}60%{-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}\n\n.flipInX{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInX;animation-name:flipInX}\n\n@-webkit-keyframes flipInY{0%{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}0%,40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}40%{-webkit-transform:perspective(400px) rotateY(-20deg);transform:perspective(400px) rotateY(-20deg)}60%{-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateY(-5deg);transform:perspective(400px) rotateY(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}\n\n@keyframes flipInY{0%{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}0%,40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}40%{-webkit-transform:perspective(400px) rotateY(-20deg);transform:perspective(400px) rotateY(-20deg)}60%{-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateY(-5deg);transform:perspective(400px) rotateY(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}\n\n.flipInY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInY;animation-name:flipInY}\n\n@-webkit-keyframes flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}}\n\n@keyframes flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}}\n\n.flipOutX{-webkit-animation-name:flipOutX;animation-name:flipOutX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}\n\n@-webkit-keyframes flipOutY{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateY(-15deg);transform:perspective(400px) rotateY(-15deg);opacity:1}to{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}}\n\n@keyframes flipOutY{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateY(-15deg);transform:perspective(400px) rotateY(-15deg);opacity:1}to{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}}\n\n.flipOutY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipOutY;animation-name:flipOutY}\n\n@-webkit-keyframes lightSpeedIn{0%{-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{-webkit-transform:skewX(20deg);transform:skewX(20deg)}60%,80%{opacity:1}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg)}to{-webkit-transform:none;transform:none;opacity:1}}\n\n@keyframes lightSpeedIn{0%{-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{-webkit-transform:skewX(20deg);transform:skewX(20deg)}60%,80%{opacity:1}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg)}to{-webkit-transform:none;transform:none;opacity:1}}\n\n.lightSpeedIn{-webkit-animation-name:lightSpeedIn;animation-name:lightSpeedIn;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}\n\n@-webkit-keyframes lightSpeedOut{0%{opacity:1}to{-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}\n\n@keyframes lightSpeedOut{0%{opacity:1}to{-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}\n\n.lightSpeedOut{-webkit-animation-name:lightSpeedOut;animation-name:lightSpeedOut;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}\n\n@-webkit-keyframes rotateIn{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg);opacity:0}0%,to{-webkit-transform-origin:center}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none;opacity:1}}\n\n@keyframes rotateIn{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg);opacity:0}0%,to{-webkit-transform-origin:center}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none;opacity:1}}\n\n.rotateIn{-webkit-animation-name:rotateIn;animation-name:rotateIn}\n\n@-webkit-keyframes rotateInDownLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}0%,to{-webkit-transform-origin:left bottom}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}\n\n@keyframes rotateInDownLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}0%,to{-webkit-transform-origin:left bottom}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}\n\n.rotateInDownLeft{-webkit-animation-name:rotateInDownLeft;animation-name:rotateInDownLeft}\n\n@-webkit-keyframes rotateInDownRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}0%,to{-webkit-transform-origin:right bottom}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}\n\n@keyframes rotateInDownRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}0%,to{-webkit-transform-origin:right bottom}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}\n\n.rotateInDownRight{-webkit-animation-name:rotateInDownRight;animation-name:rotateInDownRight}\n\n@-webkit-keyframes rotateInUpLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}0%,to{-webkit-transform-origin:left bottom}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}\n\n@keyframes rotateInUpLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}0%,to{-webkit-transform-origin:left bottom}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}\n\n.rotateInUpLeft{-webkit-animation-name:rotateInUpLeft;animation-name:rotateInUpLeft}\n\n@-webkit-keyframes rotateInUpRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0}0%,to{-webkit-transform-origin:right bottom}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}\n\n@keyframes rotateInUpRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0}0%,to{-webkit-transform-origin:right bottom}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}\n\n.rotateInUpRight{-webkit-animation-name:rotateInUpRight;animation-name:rotateInUpRight}\n\n@-webkit-keyframes rotateOut{0%{-webkit-transform-origin:center;transform-origin:center;opacity:1}0%,to{-webkit-transform-origin:center}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(200deg);transform:rotate(200deg);opacity:0}}\n\n@keyframes rotateOut{0%{-webkit-transform-origin:center;transform-origin:center;opacity:1}0%,to{-webkit-transform-origin:center}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(200deg);transform:rotate(200deg);opacity:0}}\n\n.rotateOut{-webkit-animation-name:rotateOut;animation-name:rotateOut}\n\n@-webkit-keyframes rotateOutDownLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}0%,to{-webkit-transform-origin:left bottom}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}\n\n@keyframes rotateOutDownLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}0%,to{-webkit-transform-origin:left bottom}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}\n\n.rotateOutDownLeft{-webkit-animation-name:rotateOutDownLeft;animation-name:rotateOutDownLeft}\n\n@-webkit-keyframes rotateOutDownRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}0%,to{-webkit-transform-origin:right bottom}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}\n\n@keyframes rotateOutDownRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}0%,to{-webkit-transform-origin:right bottom}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}\n\n.rotateOutDownRight{-webkit-animation-name:rotateOutDownRight;animation-name:rotateOutDownRight}\n\n@-webkit-keyframes rotateOutUpLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}0%,to{-webkit-transform-origin:left bottom}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}\n\n@keyframes rotateOutUpLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}0%,to{-webkit-transform-origin:left bottom}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}\n\n.rotateOutUpLeft{-webkit-animation-name:rotateOutUpLeft;animation-name:rotateOutUpLeft}\n\n@-webkit-keyframes rotateOutUpRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}0%,to{-webkit-transform-origin:right bottom}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0}}\n\n@keyframes rotateOutUpRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}0%,to{-webkit-transform-origin:right bottom}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0}}\n\n.rotateOutUpRight{-webkit-animation-name:rotateOutUpRight;animation-name:rotateOutUpRight}\n\n@-webkit-keyframes hinge{0%{-webkit-transform-origin:top left;transform-origin:top left}0%,20%,60%{-webkit-transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-transform:rotate(80deg);transform:rotate(80deg);-webkit-transform-origin:top left;transform-origin:top left}40%,80%{-webkit-transform:rotate(60deg);transform:rotate(60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}to{-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0);opacity:0}}\n\n@keyframes hinge{0%{-webkit-transform-origin:top left;transform-origin:top left}0%,20%,60%{-webkit-transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-transform:rotate(80deg);transform:rotate(80deg);-webkit-transform-origin:top left;transform-origin:top left}40%,80%{-webkit-transform:rotate(60deg);transform:rotate(60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}to{-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0);opacity:0}}\n\n.hinge{-webkit-animation-name:hinge;animation-name:hinge}\n\n@-webkit-keyframes rollIn{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate(-120deg);transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;-webkit-transform:none;transform:none}}\n\n@keyframes rollIn{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate(-120deg);transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;-webkit-transform:none;transform:none}}\n\n.rollIn{-webkit-animation-name:rollIn;animation-name:rollIn}\n\n@-webkit-keyframes rollOut{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate(120deg);transform:translate3d(100%,0,0) rotate(120deg)}}\n\n@keyframes rollOut{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate(120deg);transform:translate3d(100%,0,0) rotate(120deg)}}\n\n.rollOut{-webkit-animation-name:rollOut;animation-name:rollOut}\n\n@-webkit-keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}\n\n@keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}\n\n.zoomIn{-webkit-animation-name:zoomIn;animation-name:zoomIn}\n\n@-webkit-keyframes zoomInDown{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n\n@keyframes zoomInDown{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n\n.zoomInDown{-webkit-animation-name:zoomInDown;animation-name:zoomInDown}\n\n@-webkit-keyframes zoomInLeft{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n\n@keyframes zoomInLeft{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n\n.zoomInLeft{-webkit-animation-name:zoomInLeft;animation-name:zoomInLeft}\n\n@-webkit-keyframes zoomInRight{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n\n@keyframes zoomInRight{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n\n.zoomInRight{-webkit-animation-name:zoomInRight;animation-name:zoomInRight}\n\n@-webkit-keyframes zoomInUp{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n\n@keyframes zoomInUp{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n\n.zoomInUp{-webkit-animation-name:zoomInUp;animation-name:zoomInUp}\n\n@-webkit-keyframes zoomOut{0%{opacity:1}50%{-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%,to{opacity:0}}\n\n@keyframes zoomOut{0%{opacity:1}50%{-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%,to{opacity:0}}\n\n.zoomOut{-webkit-animation-name:zoomOut;animation-name:zoomOut}\n\n@-webkit-keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n\n@keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n\n.zoomOutDown{-webkit-animation-name:zoomOutDown;animation-name:zoomOutDown}\n\n@-webkit-keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0);-webkit-transform-origin:left center;transform-origin:left center}}\n\n@keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0);-webkit-transform-origin:left center;transform-origin:left center}}\n\n.zoomOutLeft{-webkit-animation-name:zoomOutLeft;animation-name:zoomOutLeft}\n\n@-webkit-keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center}}\n\n@keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center}}\n\n.zoomOutRight{-webkit-animation-name:zoomOutRight;animation-name:zoomOutRight}\n\n@-webkit-keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n\n@keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n\n.zoomOutUp{-webkit-animation-name:zoomOutUp;animation-name:zoomOutUp}\n\n@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}\n\n@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}\n\n.slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown}\n\n@-webkit-keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}\n\n@keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}\n\n.slideInLeft{-webkit-animation-name:slideInLeft;animation-name:slideInLeft}\n\n@-webkit-keyframes slideInRight{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}\n\n@keyframes slideInRight{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}\n\n.slideInRight{-webkit-animation-name:slideInRight;animation-name:slideInRight}\n\n@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}\n\n@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}\n\n.slideInUp{-webkit-animation-name:slideInUp;animation-name:slideInUp}\n\n@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}\n\n@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}\n\n.slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown}\n\n@-webkit-keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}\n\n@keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}\n\n.slideOutLeft{-webkit-animation-name:slideOutLeft;animation-name:slideOutLeft}\n\n@-webkit-keyframes slideOutRight{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}\n\n@keyframes slideOutRight{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}\n\n.slideOutRight{-webkit-animation-name:slideOutRight;animation-name:slideOutRight}\n\n@-webkit-keyframes slideOutUp{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}\n\n@keyframes slideOutUp{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}\n\n.slideOutUp{-webkit-animation-name:slideOutUp;animation-name:slideOutUp}"

/***/ }),

/***/ "./src/assets/login_css/vendors/bootstrap/dist/css/bootstrap.min.css":
/*!***************************************************************************!*\
  !*** ./src/assets/login_css/vendors/bootstrap/dist/css/bootstrap.min.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n *//*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{margin:.67em 0;font-size:2em}mark{color:#000;background:#ff0}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{height:0;box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{margin:0;font:inherit;color:inherit}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{box-sizing:content-box;-webkit-appearance:textfield}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{padding:.35em .625em .75em;margin:0 2px;border:1px solid silver}legend{padding:0;border:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-spacing:0;border-collapse:collapse}td,th{padding:0}/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */@media print{*,:after,:before{color:#000!important;text-shadow:none!important;background:0 0!important;box-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"javascript:\"]:after,a[href^=\"#\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}.navbar{display:none}.btn>.caret,.dropup>.btn>.caret{border-top-color:#000!important}.label{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}@font-face{font-family:'Glyphicons Halflings';src:url('glyphicons-halflings-regular.eot');src:url('glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'),url('glyphicons-halflings-regular.woff2') format('woff2'),url('glyphicons-halflings-regular.woff') format('woff'),url('glyphicons-halflings-regular.ttf') format('truetype'),url('glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg')}.glyphicon{position:relative;top:1px;display:inline-block;font-family:'Glyphicons Halflings';font-style:normal;font-weight:400;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.glyphicon-asterisk:before{content:\"\\002a\"}.glyphicon-plus:before{content:\"\\002b\"}.glyphicon-eur:before,.glyphicon-euro:before{content:\"\\20ac\"}.glyphicon-minus:before{content:\"\\2212\"}.glyphicon-cloud:before{content:\"\\2601\"}.glyphicon-envelope:before{content:\"\\2709\"}.glyphicon-pencil:before{content:\"\\270f\"}.glyphicon-glass:before{content:\"\\e001\"}.glyphicon-music:before{content:\"\\e002\"}.glyphicon-search:before{content:\"\\e003\"}.glyphicon-heart:before{content:\"\\e005\"}.glyphicon-star:before{content:\"\\e006\"}.glyphicon-star-empty:before{content:\"\\e007\"}.glyphicon-user:before{content:\"\\e008\"}.glyphicon-film:before{content:\"\\e009\"}.glyphicon-th-large:before{content:\"\\e010\"}.glyphicon-th:before{content:\"\\e011\"}.glyphicon-th-list:before{content:\"\\e012\"}.glyphicon-ok:before{content:\"\\e013\"}.glyphicon-remove:before{content:\"\\e014\"}.glyphicon-zoom-in:before{content:\"\\e015\"}.glyphicon-zoom-out:before{content:\"\\e016\"}.glyphicon-off:before{content:\"\\e017\"}.glyphicon-signal:before{content:\"\\e018\"}.glyphicon-cog:before{content:\"\\e019\"}.glyphicon-trash:before{content:\"\\e020\"}.glyphicon-home:before{content:\"\\e021\"}.glyphicon-file:before{content:\"\\e022\"}.glyphicon-time:before{content:\"\\e023\"}.glyphicon-road:before{content:\"\\e024\"}.glyphicon-download-alt:before{content:\"\\e025\"}.glyphicon-download:before{content:\"\\e026\"}.glyphicon-upload:before{content:\"\\e027\"}.glyphicon-inbox:before{content:\"\\e028\"}.glyphicon-play-circle:before{content:\"\\e029\"}.glyphicon-repeat:before{content:\"\\e030\"}.glyphicon-refresh:before{content:\"\\e031\"}.glyphicon-list-alt:before{content:\"\\e032\"}.glyphicon-lock:before{content:\"\\e033\"}.glyphicon-flag:before{content:\"\\e034\"}.glyphicon-headphones:before{content:\"\\e035\"}.glyphicon-volume-off:before{content:\"\\e036\"}.glyphicon-volume-down:before{content:\"\\e037\"}.glyphicon-volume-up:before{content:\"\\e038\"}.glyphicon-qrcode:before{content:\"\\e039\"}.glyphicon-barcode:before{content:\"\\e040\"}.glyphicon-tag:before{content:\"\\e041\"}.glyphicon-tags:before{content:\"\\e042\"}.glyphicon-book:before{content:\"\\e043\"}.glyphicon-bookmark:before{content:\"\\e044\"}.glyphicon-print:before{content:\"\\e045\"}.glyphicon-camera:before{content:\"\\e046\"}.glyphicon-font:before{content:\"\\e047\"}.glyphicon-bold:before{content:\"\\e048\"}.glyphicon-italic:before{content:\"\\e049\"}.glyphicon-text-height:before{content:\"\\e050\"}.glyphicon-text-width:before{content:\"\\e051\"}.glyphicon-align-left:before{content:\"\\e052\"}.glyphicon-align-center:before{content:\"\\e053\"}.glyphicon-align-right:before{content:\"\\e054\"}.glyphicon-align-justify:before{content:\"\\e055\"}.glyphicon-list:before{content:\"\\e056\"}.glyphicon-indent-left:before{content:\"\\e057\"}.glyphicon-indent-right:before{content:\"\\e058\"}.glyphicon-facetime-video:before{content:\"\\e059\"}.glyphicon-picture:before{content:\"\\e060\"}.glyphicon-map-marker:before{content:\"\\e062\"}.glyphicon-adjust:before{content:\"\\e063\"}.glyphicon-tint:before{content:\"\\e064\"}.glyphicon-edit:before{content:\"\\e065\"}.glyphicon-share:before{content:\"\\e066\"}.glyphicon-check:before{content:\"\\e067\"}.glyphicon-move:before{content:\"\\e068\"}.glyphicon-step-backward:before{content:\"\\e069\"}.glyphicon-fast-backward:before{content:\"\\e070\"}.glyphicon-backward:before{content:\"\\e071\"}.glyphicon-play:before{content:\"\\e072\"}.glyphicon-pause:before{content:\"\\e073\"}.glyphicon-stop:before{content:\"\\e074\"}.glyphicon-forward:before{content:\"\\e075\"}.glyphicon-fast-forward:before{content:\"\\e076\"}.glyphicon-step-forward:before{content:\"\\e077\"}.glyphicon-eject:before{content:\"\\e078\"}.glyphicon-chevron-left:before{content:\"\\e079\"}.glyphicon-chevron-right:before{content:\"\\e080\"}.glyphicon-plus-sign:before{content:\"\\e081\"}.glyphicon-minus-sign:before{content:\"\\e082\"}.glyphicon-remove-sign:before{content:\"\\e083\"}.glyphicon-ok-sign:before{content:\"\\e084\"}.glyphicon-question-sign:before{content:\"\\e085\"}.glyphicon-info-sign:before{content:\"\\e086\"}.glyphicon-screenshot:before{content:\"\\e087\"}.glyphicon-remove-circle:before{content:\"\\e088\"}.glyphicon-ok-circle:before{content:\"\\e089\"}.glyphicon-ban-circle:before{content:\"\\e090\"}.glyphicon-arrow-left:before{content:\"\\e091\"}.glyphicon-arrow-right:before{content:\"\\e092\"}.glyphicon-arrow-up:before{content:\"\\e093\"}.glyphicon-arrow-down:before{content:\"\\e094\"}.glyphicon-share-alt:before{content:\"\\e095\"}.glyphicon-resize-full:before{content:\"\\e096\"}.glyphicon-resize-small:before{content:\"\\e097\"}.glyphicon-exclamation-sign:before{content:\"\\e101\"}.glyphicon-gift:before{content:\"\\e102\"}.glyphicon-leaf:before{content:\"\\e103\"}.glyphicon-fire:before{content:\"\\e104\"}.glyphicon-eye-open:before{content:\"\\e105\"}.glyphicon-eye-close:before{content:\"\\e106\"}.glyphicon-warning-sign:before{content:\"\\e107\"}.glyphicon-plane:before{content:\"\\e108\"}.glyphicon-calendar:before{content:\"\\e109\"}.glyphicon-random:before{content:\"\\e110\"}.glyphicon-comment:before{content:\"\\e111\"}.glyphicon-magnet:before{content:\"\\e112\"}.glyphicon-chevron-up:before{content:\"\\e113\"}.glyphicon-chevron-down:before{content:\"\\e114\"}.glyphicon-retweet:before{content:\"\\e115\"}.glyphicon-shopping-cart:before{content:\"\\e116\"}.glyphicon-folder-close:before{content:\"\\e117\"}.glyphicon-folder-open:before{content:\"\\e118\"}.glyphicon-resize-vertical:before{content:\"\\e119\"}.glyphicon-resize-horizontal:before{content:\"\\e120\"}.glyphicon-hdd:before{content:\"\\e121\"}.glyphicon-bullhorn:before{content:\"\\e122\"}.glyphicon-bell:before{content:\"\\e123\"}.glyphicon-certificate:before{content:\"\\e124\"}.glyphicon-thumbs-up:before{content:\"\\e125\"}.glyphicon-thumbs-down:before{content:\"\\e126\"}.glyphicon-hand-right:before{content:\"\\e127\"}.glyphicon-hand-left:before{content:\"\\e128\"}.glyphicon-hand-up:before{content:\"\\e129\"}.glyphicon-hand-down:before{content:\"\\e130\"}.glyphicon-circle-arrow-right:before{content:\"\\e131\"}.glyphicon-circle-arrow-left:before{content:\"\\e132\"}.glyphicon-circle-arrow-up:before{content:\"\\e133\"}.glyphicon-circle-arrow-down:before{content:\"\\e134\"}.glyphicon-globe:before{content:\"\\e135\"}.glyphicon-wrench:before{content:\"\\e136\"}.glyphicon-tasks:before{content:\"\\e137\"}.glyphicon-filter:before{content:\"\\e138\"}.glyphicon-briefcase:before{content:\"\\e139\"}.glyphicon-fullscreen:before{content:\"\\e140\"}.glyphicon-dashboard:before{content:\"\\e141\"}.glyphicon-paperclip:before{content:\"\\e142\"}.glyphicon-heart-empty:before{content:\"\\e143\"}.glyphicon-link:before{content:\"\\e144\"}.glyphicon-phone:before{content:\"\\e145\"}.glyphicon-pushpin:before{content:\"\\e146\"}.glyphicon-usd:before{content:\"\\e148\"}.glyphicon-gbp:before{content:\"\\e149\"}.glyphicon-sort:before{content:\"\\e150\"}.glyphicon-sort-by-alphabet:before{content:\"\\e151\"}.glyphicon-sort-by-alphabet-alt:before{content:\"\\e152\"}.glyphicon-sort-by-order:before{content:\"\\e153\"}.glyphicon-sort-by-order-alt:before{content:\"\\e154\"}.glyphicon-sort-by-attributes:before{content:\"\\e155\"}.glyphicon-sort-by-attributes-alt:before{content:\"\\e156\"}.glyphicon-unchecked:before{content:\"\\e157\"}.glyphicon-expand:before{content:\"\\e158\"}.glyphicon-collapse-down:before{content:\"\\e159\"}.glyphicon-collapse-up:before{content:\"\\e160\"}.glyphicon-log-in:before{content:\"\\e161\"}.glyphicon-flash:before{content:\"\\e162\"}.glyphicon-log-out:before{content:\"\\e163\"}.glyphicon-new-window:before{content:\"\\e164\"}.glyphicon-record:before{content:\"\\e165\"}.glyphicon-save:before{content:\"\\e166\"}.glyphicon-open:before{content:\"\\e167\"}.glyphicon-saved:before{content:\"\\e168\"}.glyphicon-import:before{content:\"\\e169\"}.glyphicon-export:before{content:\"\\e170\"}.glyphicon-send:before{content:\"\\e171\"}.glyphicon-floppy-disk:before{content:\"\\e172\"}.glyphicon-floppy-saved:before{content:\"\\e173\"}.glyphicon-floppy-remove:before{content:\"\\e174\"}.glyphicon-floppy-save:before{content:\"\\e175\"}.glyphicon-floppy-open:before{content:\"\\e176\"}.glyphicon-credit-card:before{content:\"\\e177\"}.glyphicon-transfer:before{content:\"\\e178\"}.glyphicon-cutlery:before{content:\"\\e179\"}.glyphicon-header:before{content:\"\\e180\"}.glyphicon-compressed:before{content:\"\\e181\"}.glyphicon-earphone:before{content:\"\\e182\"}.glyphicon-phone-alt:before{content:\"\\e183\"}.glyphicon-tower:before{content:\"\\e184\"}.glyphicon-stats:before{content:\"\\e185\"}.glyphicon-sd-video:before{content:\"\\e186\"}.glyphicon-hd-video:before{content:\"\\e187\"}.glyphicon-subtitles:before{content:\"\\e188\"}.glyphicon-sound-stereo:before{content:\"\\e189\"}.glyphicon-sound-dolby:before{content:\"\\e190\"}.glyphicon-sound-5-1:before{content:\"\\e191\"}.glyphicon-sound-6-1:before{content:\"\\e192\"}.glyphicon-sound-7-1:before{content:\"\\e193\"}.glyphicon-copyright-mark:before{content:\"\\e194\"}.glyphicon-registration-mark:before{content:\"\\e195\"}.glyphicon-cloud-download:before{content:\"\\e197\"}.glyphicon-cloud-upload:before{content:\"\\e198\"}.glyphicon-tree-conifer:before{content:\"\\e199\"}.glyphicon-tree-deciduous:before{content:\"\\e200\"}.glyphicon-cd:before{content:\"\\e201\"}.glyphicon-save-file:before{content:\"\\e202\"}.glyphicon-open-file:before{content:\"\\e203\"}.glyphicon-level-up:before{content:\"\\e204\"}.glyphicon-copy:before{content:\"\\e205\"}.glyphicon-paste:before{content:\"\\e206\"}.glyphicon-alert:before{content:\"\\e209\"}.glyphicon-equalizer:before{content:\"\\e210\"}.glyphicon-king:before{content:\"\\e211\"}.glyphicon-queen:before{content:\"\\e212\"}.glyphicon-pawn:before{content:\"\\e213\"}.glyphicon-bishop:before{content:\"\\e214\"}.glyphicon-knight:before{content:\"\\e215\"}.glyphicon-baby-formula:before{content:\"\\e216\"}.glyphicon-tent:before{content:\"\\26fa\"}.glyphicon-blackboard:before{content:\"\\e218\"}.glyphicon-bed:before{content:\"\\e219\"}.glyphicon-apple:before{content:\"\\f8ff\"}.glyphicon-erase:before{content:\"\\e221\"}.glyphicon-hourglass:before{content:\"\\231b\"}.glyphicon-lamp:before{content:\"\\e223\"}.glyphicon-duplicate:before{content:\"\\e224\"}.glyphicon-piggy-bank:before{content:\"\\e225\"}.glyphicon-scissors:before{content:\"\\e226\"}.glyphicon-bitcoin:before{content:\"\\e227\"}.glyphicon-btc:before{content:\"\\e227\"}.glyphicon-xbt:before{content:\"\\e227\"}.glyphicon-yen:before{content:\"\\00a5\"}.glyphicon-jpy:before{content:\"\\00a5\"}.glyphicon-ruble:before{content:\"\\20bd\"}.glyphicon-rub:before{content:\"\\20bd\"}.glyphicon-scale:before{content:\"\\e230\"}.glyphicon-ice-lolly:before{content:\"\\e231\"}.glyphicon-ice-lolly-tasted:before{content:\"\\e232\"}.glyphicon-education:before{content:\"\\e233\"}.glyphicon-option-horizontal:before{content:\"\\e234\"}.glyphicon-option-vertical:before{content:\"\\e235\"}.glyphicon-menu-hamburger:before{content:\"\\e236\"}.glyphicon-modal-window:before{content:\"\\e237\"}.glyphicon-oil:before{content:\"\\e238\"}.glyphicon-grain:before{content:\"\\e239\"}.glyphicon-sunglasses:before{content:\"\\e240\"}.glyphicon-text-size:before{content:\"\\e241\"}.glyphicon-text-color:before{content:\"\\e242\"}.glyphicon-text-background:before{content:\"\\e243\"}.glyphicon-object-align-top:before{content:\"\\e244\"}.glyphicon-object-align-bottom:before{content:\"\\e245\"}.glyphicon-object-align-horizontal:before{content:\"\\e246\"}.glyphicon-object-align-left:before{content:\"\\e247\"}.glyphicon-object-align-vertical:before{content:\"\\e248\"}.glyphicon-object-align-right:before{content:\"\\e249\"}.glyphicon-triangle-right:before{content:\"\\e250\"}.glyphicon-triangle-left:before{content:\"\\e251\"}.glyphicon-triangle-bottom:before{content:\"\\e252\"}.glyphicon-triangle-top:before{content:\"\\e253\"}.glyphicon-console:before{content:\"\\e254\"}.glyphicon-superscript:before{content:\"\\e255\"}.glyphicon-subscript:before{content:\"\\e256\"}.glyphicon-menu-left:before{content:\"\\e257\"}.glyphicon-menu-right:before{content:\"\\e258\"}.glyphicon-menu-down:before{content:\"\\e259\"}.glyphicon-menu-up:before{content:\"\\e260\"}*{box-sizing:border-box}:after,:before{box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#337ab7;text-decoration:none}a:focus,a:hover{color:#23527c;text-decoration:underline}a:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.carousel-inner>.item>a>img,.carousel-inner>.item>img,.img-responsive,.thumbnail a>img,.thumbnail>img{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{display:inline-block;max-width:100%;height:auto;padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;transition:all .2s ease-in-out}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}[role=button]{cursor:pointer}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}.h1 .small,.h1 small,.h2 .small,.h2 small,.h3 .small,.h3 small,.h4 .small,.h4 small,.h5 .small,.h5 small,.h6 .small,.h6 small,h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small{font-weight:400;line-height:1;color:#777}.h1,.h2,.h3,h1,h2,h3{margin-top:20px;margin-bottom:10px}.h1 .small,.h1 small,.h2 .small,.h2 small,.h3 .small,.h3 small,h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small{font-size:65%}.h4,.h5,.h6,h4,h5,h6{margin-top:10px;margin-bottom:10px}.h4 .small,.h4 small,.h5 .small,.h5 small,.h6 .small,.h6 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small{font-size:75%}.h1,h1{font-size:36px}.h2,h2{font-size:30px}.h3,h3{font-size:24px}.h4,h4{font-size:18px}.h5,h5{font-size:14px}.h6,h6{font-size:12px}p{margin:0 0 10px}.lead{margin-bottom:20px;font-size:16px;font-weight:300;line-height:1.4}@media (min-width:768px){.lead{font-size:21px}}.small,small{font-size:85%}.mark,mark{padding:.2em;background-color:#fcf8e3}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-justify{text-align:justify}.text-nowrap{white-space:nowrap}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.text-muted{color:#777}.text-primary{color:#337ab7}a.text-primary:focus,a.text-primary:hover{color:#286090}.text-success{color:#3c763d}a.text-success:focus,a.text-success:hover{color:#2b542c}.text-info{color:#31708f}a.text-info:focus,a.text-info:hover{color:#245269}.text-warning{color:#8a6d3b}a.text-warning:focus,a.text-warning:hover{color:#66512c}.text-danger{color:#a94442}a.text-danger:focus,a.text-danger:hover{color:#843534}.bg-primary{color:#fff;background-color:#337ab7}a.bg-primary:focus,a.bg-primary:hover{background-color:#286090}.bg-success{background-color:#dff0d8}a.bg-success:focus,a.bg-success:hover{background-color:#c1e2b3}.bg-info{background-color:#d9edf7}a.bg-info:focus,a.bg-info:hover{background-color:#afd9ee}.bg-warning{background-color:#fcf8e3}a.bg-warning:focus,a.bg-warning:hover{background-color:#f7ecb5}.bg-danger{background-color:#f2dede}a.bg-danger:focus,a.bg-danger:hover{background-color:#e4b9b9}.page-header{padding-bottom:9px;margin:40px 0 20px;border-bottom:1px solid #eee}ol,ul{margin-top:0;margin-bottom:10px}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;margin-left:-5px;list-style:none}.list-inline>li{display:inline-block;padding-right:5px;padding-left:5px}dl{margin-top:0;margin-bottom:20px}dd,dt{line-height:1.42857143}dt{font-weight:700}dd{margin-left:0}@media (min-width:768px){.dl-horizontal dt{float:left;width:160px;overflow:hidden;clear:left;text-align:right;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:180px}}abbr[data-original-title],abbr[title]{cursor:help;border-bottom:1px dotted #777}.initialism{font-size:90%;text-transform:uppercase}blockquote{padding:10px 20px;margin:0 0 20px;font-size:17.5px;border-left:5px solid #eee}blockquote ol:last-child,blockquote p:last-child,blockquote ul:last-child{margin-bottom:0}blockquote .small,blockquote footer,blockquote small{display:block;font-size:80%;line-height:1.42857143;color:#777}blockquote .small:before,blockquote footer:before,blockquote small:before{content:'\\2014 \\00A0'}.blockquote-reverse,blockquote.pull-right{padding-right:15px;padding-left:0;text-align:right;border-right:5px solid #eee;border-left:0}.blockquote-reverse .small:before,.blockquote-reverse footer:before,.blockquote-reverse small:before,blockquote.pull-right .small:before,blockquote.pull-right footer:before,blockquote.pull-right small:before{content:''}.blockquote-reverse .small:after,.blockquote-reverse footer:after,.blockquote-reverse small:after,blockquote.pull-right .small:after,blockquote.pull-right footer:after,blockquote.pull-right small:after{content:'\\00A0 \\2014'}address{margin-bottom:20px;font-style:normal;line-height:1.42857143}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,\"Courier New\",monospace}code{padding:2px 4px;font-size:90%;color:#c7254e;background-color:#f9f2f4;border-radius:4px}kbd{padding:2px 4px;font-size:90%;color:#fff;background-color:#333;border-radius:3px;box-shadow:inset 0 -1px 0 rgba(0,0,0,.25)}kbd kbd{padding:0;font-size:100%;font-weight:700;box-shadow:none}pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:1.42857143;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.container-fluid{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{margin-right:-15px;margin-left:-15px}.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{position:relative;min-height:1px;padding-right:15px;padding-left:15px}.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:auto}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0}@media (min-width:768px){.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:auto}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0}}@media (min-width:992px){.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:auto}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0}}@media (min-width:1200px){.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:auto}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0}}table{background-color:transparent}caption{padding-top:8px;padding-bottom:8px;color:#777;text-align:left}th{text-align:left}.table{width:100%;max-width:100%;margin-bottom:20px}.table>tbody>tr>td,.table>tbody>tr>th,.table>tfoot>tr>td,.table>tfoot>tr>th,.table>thead>tr>td,.table>thead>tr>th{padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.table>caption+thead>tr:first-child>td,.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>td,.table>thead:first-child>tr:first-child>th{border-top:0}.table>tbody+tbody{border-top:2px solid #ddd}.table .table{background-color:#fff}.table-condensed>tbody>tr>td,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>td,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>thead>tr>th{padding:5px}.table-bordered{border:1px solid #ddd}.table-bordered>tbody>tr>td,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>td,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border:1px solid #ddd}.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border-bottom-width:2px}.table-striped>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.table-hover>tbody>tr:hover{background-color:#f5f5f5}table col[class*=col-]{position:static;display:table-column;float:none}table td[class*=col-],table th[class*=col-]{position:static;display:table-cell;float:none}.table>tbody>tr.active>td,.table>tbody>tr.active>th,.table>tbody>tr>td.active,.table>tbody>tr>th.active,.table>tfoot>tr.active>td,.table>tfoot>tr.active>th,.table>tfoot>tr>td.active,.table>tfoot>tr>th.active,.table>thead>tr.active>td,.table>thead>tr.active>th,.table>thead>tr>td.active,.table>thead>tr>th.active{background-color:#f5f5f5}.table-hover>tbody>tr.active:hover>td,.table-hover>tbody>tr.active:hover>th,.table-hover>tbody>tr:hover>.active,.table-hover>tbody>tr>td.active:hover,.table-hover>tbody>tr>th.active:hover{background-color:#e8e8e8}.table>tbody>tr.success>td,.table>tbody>tr.success>th,.table>tbody>tr>td.success,.table>tbody>tr>th.success,.table>tfoot>tr.success>td,.table>tfoot>tr.success>th,.table>tfoot>tr>td.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>thead>tr.success>th,.table>thead>tr>td.success,.table>thead>tr>th.success{background-color:#dff0d8}.table-hover>tbody>tr.success:hover>td,.table-hover>tbody>tr.success:hover>th,.table-hover>tbody>tr:hover>.success,.table-hover>tbody>tr>td.success:hover,.table-hover>tbody>tr>th.success:hover{background-color:#d0e9c6}.table>tbody>tr.info>td,.table>tbody>tr.info>th,.table>tbody>tr>td.info,.table>tbody>tr>th.info,.table>tfoot>tr.info>td,.table>tfoot>tr.info>th,.table>tfoot>tr>td.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>thead>tr.info>th,.table>thead>tr>td.info,.table>thead>tr>th.info{background-color:#d9edf7}.table-hover>tbody>tr.info:hover>td,.table-hover>tbody>tr.info:hover>th,.table-hover>tbody>tr:hover>.info,.table-hover>tbody>tr>td.info:hover,.table-hover>tbody>tr>th.info:hover{background-color:#c4e3f3}.table>tbody>tr.warning>td,.table>tbody>tr.warning>th,.table>tbody>tr>td.warning,.table>tbody>tr>th.warning,.table>tfoot>tr.warning>td,.table>tfoot>tr.warning>th,.table>tfoot>tr>td.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>thead>tr.warning>th,.table>thead>tr>td.warning,.table>thead>tr>th.warning{background-color:#fcf8e3}.table-hover>tbody>tr.warning:hover>td,.table-hover>tbody>tr.warning:hover>th,.table-hover>tbody>tr:hover>.warning,.table-hover>tbody>tr>td.warning:hover,.table-hover>tbody>tr>th.warning:hover{background-color:#faf2cc}.table>tbody>tr.danger>td,.table>tbody>tr.danger>th,.table>tbody>tr>td.danger,.table>tbody>tr>th.danger,.table>tfoot>tr.danger>td,.table>tfoot>tr.danger>th,.table>tfoot>tr>td.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>thead>tr.danger>th,.table>thead>tr>td.danger,.table>thead>tr>th.danger{background-color:#f2dede}.table-hover>tbody>tr.danger:hover>td,.table-hover>tbody>tr.danger:hover>th,.table-hover>tbody>tr:hover>.danger,.table-hover>tbody>tr>td.danger:hover,.table-hover>tbody>tr>th.danger:hover{background-color:#ebcccc}.table-responsive{min-height:.01%;overflow-x:auto}@media screen and (max-width:767px){.table-responsive{width:100%;margin-bottom:15px;overflow-y:hidden;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd}.table-responsive>.table{margin-bottom:0}.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tfoot>tr>td,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>thead>tr>th{white-space:nowrap}.table-responsive>.table-bordered{border:0}.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.table-responsive>.table-bordered>tbody>tr:last-child>td,.table-responsive>.table-bordered>tbody>tr:last-child>th,.table-responsive>.table-bordered>tfoot>tr:last-child>td,.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border:0;border-bottom:1px solid #e5e5e5}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}input[type=search]{box-sizing:border-box}input[type=checkbox],input[type=radio]{margin:4px 0 0;margin-top:1px\\9;line-height:normal}input[type=file]{display:block}input[type=range]{display:block;width:100%}select[multiple],select[size]{height:auto}input[type=file]:focus,input[type=checkbox]:focus,input[type=radio]:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}output{display:block;padding-top:7px;font-size:14px;line-height:1.42857143;color:#555}.form-control{display:block;width:100%;height:34px;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s}.form-control:focus{border-color:#66afe9;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.form-control::-moz-placeholder{color:#999;opacity:1}.form-control:-ms-input-placeholder{color:#999}.form-control::-webkit-input-placeholder{color:#999}.form-control::-ms-expand{background-color:transparent;border:0}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{background-color:#eee;opacity:1}.form-control[disabled],fieldset[disabled] .form-control{cursor:not-allowed}textarea.form-control{height:auto}input[type=search]{-webkit-appearance:none}@media screen and (-webkit-min-device-pixel-ratio:0){input[type=date].form-control,input[type=time].form-control,input[type=datetime-local].form-control,input[type=month].form-control{line-height:34px}.input-group-sm input[type=date],.input-group-sm input[type=time],.input-group-sm input[type=datetime-local],.input-group-sm input[type=month],input[type=date].input-sm,input[type=time].input-sm,input[type=datetime-local].input-sm,input[type=month].input-sm{line-height:30px}.input-group-lg input[type=date],.input-group-lg input[type=time],.input-group-lg input[type=datetime-local],.input-group-lg input[type=month],input[type=date].input-lg,input[type=time].input-lg,input[type=datetime-local].input-lg,input[type=month].input-lg{line-height:46px}}.form-group{margin-bottom:15px}.checkbox,.radio{position:relative;display:block;margin-top:10px;margin-bottom:10px}.checkbox label,.radio label{min-height:20px;padding-left:20px;margin-bottom:0;font-weight:400;cursor:pointer}.checkbox input[type=checkbox],.checkbox-inline input[type=checkbox],.radio input[type=radio],.radio-inline input[type=radio]{position:absolute;margin-top:4px\\9;margin-left:-20px}.checkbox+.checkbox,.radio+.radio{margin-top:-5px}.checkbox-inline,.radio-inline{position:relative;display:inline-block;padding-left:20px;margin-bottom:0;font-weight:400;vertical-align:middle;cursor:pointer}.checkbox-inline+.checkbox-inline,.radio-inline+.radio-inline{margin-top:0;margin-left:10px}fieldset[disabled] input[type=checkbox],fieldset[disabled] input[type=radio],input[type=checkbox].disabled,input[type=checkbox][disabled],input[type=radio].disabled,input[type=radio][disabled]{cursor:not-allowed}.checkbox-inline.disabled,.radio-inline.disabled,fieldset[disabled] .checkbox-inline,fieldset[disabled] .radio-inline{cursor:not-allowed}.checkbox.disabled label,.radio.disabled label,fieldset[disabled] .checkbox label,fieldset[disabled] .radio label{cursor:not-allowed}.form-control-static{min-height:34px;padding-top:7px;padding-bottom:7px;margin-bottom:0}.form-control-static.input-lg,.form-control-static.input-sm{padding-right:0;padding-left:0}.input-sm{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-sm{height:30px;line-height:30px}select[multiple].input-sm,textarea.input-sm{height:auto}.form-group-sm .form-control{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.form-group-sm select.form-control{height:30px;line-height:30px}.form-group-sm select[multiple].form-control,.form-group-sm textarea.form-control{height:auto}.form-group-sm .form-control-static{height:30px;min-height:32px;padding:6px 10px;font-size:12px;line-height:1.5}.input-lg{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.input-lg{height:46px;line-height:46px}select[multiple].input-lg,textarea.input-lg{height:auto}.form-group-lg .form-control{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.form-group-lg select.form-control{height:46px;line-height:46px}.form-group-lg select[multiple].form-control,.form-group-lg textarea.form-control{height:auto}.form-group-lg .form-control-static{height:46px;min-height:38px;padding:11px 16px;font-size:18px;line-height:1.3333333}.has-feedback{position:relative}.has-feedback .form-control{padding-right:42.5px}.form-control-feedback{position:absolute;top:0;right:0;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center;pointer-events:none}.form-group-lg .form-control+.form-control-feedback,.input-group-lg+.form-control-feedback,.input-lg+.form-control-feedback{width:46px;height:46px;line-height:46px}.form-group-sm .form-control+.form-control-feedback,.input-group-sm+.form-control-feedback,.input-sm+.form-control-feedback{width:30px;height:30px;line-height:30px}.has-success .checkbox,.has-success .checkbox-inline,.has-success .control-label,.has-success .help-block,.has-success .radio,.has-success .radio-inline,.has-success.checkbox label,.has-success.checkbox-inline label,.has-success.radio label,.has-success.radio-inline label{color:#3c763d}.has-success .form-control{border-color:#3c763d;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-success .form-control:focus{border-color:#2b542c;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168}.has-success .input-group-addon{color:#3c763d;background-color:#dff0d8;border-color:#3c763d}.has-success .form-control-feedback{color:#3c763d}.has-warning .checkbox,.has-warning .checkbox-inline,.has-warning .control-label,.has-warning .help-block,.has-warning .radio,.has-warning .radio-inline,.has-warning.checkbox label,.has-warning.checkbox-inline label,.has-warning.radio label,.has-warning.radio-inline label{color:#8a6d3b}.has-warning .form-control{border-color:#8a6d3b;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-warning .form-control:focus{border-color:#66512c;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b}.has-warning .input-group-addon{color:#8a6d3b;background-color:#fcf8e3;border-color:#8a6d3b}.has-warning .form-control-feedback{color:#8a6d3b}.has-error .checkbox,.has-error .checkbox-inline,.has-error .control-label,.has-error .help-block,.has-error .radio,.has-error .radio-inline,.has-error.checkbox label,.has-error.checkbox-inline label,.has-error.radio label,.has-error.radio-inline label{color:#a94442}.has-error .form-control{border-color:#a94442;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-error .form-control:focus{border-color:#843534;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483}.has-error .input-group-addon{color:#a94442;background-color:#f2dede;border-color:#a94442}.has-error .form-control-feedback{color:#a94442}.has-feedback label~.form-control-feedback{top:25px}.has-feedback label.sr-only~.form-control-feedback{top:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#737373}@media (min-width:768px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-static{display:inline-block}.form-inline .input-group{display:inline-table;vertical-align:middle}.form-inline .input-group .form-control,.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn{width:auto}.form-inline .input-group>.form-control{width:100%}.form-inline .control-label{margin-bottom:0;vertical-align:middle}.form-inline .checkbox,.form-inline .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.form-inline .checkbox label,.form-inline .radio label{padding-left:0}.form-inline .checkbox input[type=checkbox],.form-inline .radio input[type=radio]{position:relative;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}}.form-horizontal .checkbox,.form-horizontal .checkbox-inline,.form-horizontal .radio,.form-horizontal .radio-inline{padding-top:7px;margin-top:0;margin-bottom:0}.form-horizontal .checkbox,.form-horizontal .radio{min-height:27px}.form-horizontal .form-group{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.form-horizontal .control-label{padding-top:7px;margin-bottom:0;text-align:right}}.form-horizontal .has-feedback .form-control-feedback{right:15px}@media (min-width:768px){.form-horizontal .form-group-lg .control-label{padding-top:11px;font-size:18px}}@media (min-width:768px){.form-horizontal .form-group-sm .control-label{padding-top:6px;font-size:12px}}.btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px}.btn.active.focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn:active:focus,.btn:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn.focus,.btn:focus,.btn:hover{color:#333;text-decoration:none}.btn.active,.btn:active{background-image:none;outline:0;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn.disabled,.btn[disabled],fieldset[disabled] .btn{cursor:not-allowed;filter:alpha(opacity=65);box-shadow:none;opacity:.65}a.btn.disabled,fieldset[disabled] a.btn{pointer-events:none}.btn-default{color:#333;background-color:#fff;border-color:#ccc}.btn-default.focus,.btn-default:focus{color:#333;background-color:#e6e6e6;border-color:#8c8c8c}.btn-default:hover{color:#333;background-color:#e6e6e6;border-color:#adadad}.btn-default.active,.btn-default:active,.open>.dropdown-toggle.btn-default{color:#333;background-color:#e6e6e6;border-color:#adadad}.btn-default.active.focus,.btn-default.active:focus,.btn-default.active:hover,.btn-default:active.focus,.btn-default:active:focus,.btn-default:active:hover,.open>.dropdown-toggle.btn-default.focus,.open>.dropdown-toggle.btn-default:focus,.open>.dropdown-toggle.btn-default:hover{color:#333;background-color:#d4d4d4;border-color:#8c8c8c}.btn-default.active,.btn-default:active,.open>.dropdown-toggle.btn-default{background-image:none}.btn-default.disabled.focus,.btn-default.disabled:focus,.btn-default.disabled:hover,.btn-default[disabled].focus,.btn-default[disabled]:focus,.btn-default[disabled]:hover,fieldset[disabled] .btn-default.focus,fieldset[disabled] .btn-default:focus,fieldset[disabled] .btn-default:hover{background-color:#fff;border-color:#ccc}.btn-default .badge{color:#fff;background-color:#333}.btn-primary{color:#fff;background-color:#337ab7;border-color:#2e6da4}.btn-primary.focus,.btn-primary:focus{color:#fff;background-color:#286090;border-color:#122b40}.btn-primary:hover{color:#fff;background-color:#286090;border-color:#204d74}.btn-primary.active,.btn-primary:active,.open>.dropdown-toggle.btn-primary{color:#fff;background-color:#286090;border-color:#204d74}.btn-primary.active.focus,.btn-primary.active:focus,.btn-primary.active:hover,.btn-primary:active.focus,.btn-primary:active:focus,.btn-primary:active:hover,.open>.dropdown-toggle.btn-primary.focus,.open>.dropdown-toggle.btn-primary:focus,.open>.dropdown-toggle.btn-primary:hover{color:#fff;background-color:#204d74;border-color:#122b40}.btn-primary.active,.btn-primary:active,.open>.dropdown-toggle.btn-primary{background-image:none}.btn-primary.disabled.focus,.btn-primary.disabled:focus,.btn-primary.disabled:hover,.btn-primary[disabled].focus,.btn-primary[disabled]:focus,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary.focus,fieldset[disabled] .btn-primary:focus,fieldset[disabled] .btn-primary:hover{background-color:#337ab7;border-color:#2e6da4}.btn-primary .badge{color:#337ab7;background-color:#fff}.btn-success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.btn-success.focus,.btn-success:focus{color:#fff;background-color:#449d44;border-color:#255625}.btn-success:hover{color:#fff;background-color:#449d44;border-color:#398439}.btn-success.active,.btn-success:active,.open>.dropdown-toggle.btn-success{color:#fff;background-color:#449d44;border-color:#398439}.btn-success.active.focus,.btn-success.active:focus,.btn-success.active:hover,.btn-success:active.focus,.btn-success:active:focus,.btn-success:active:hover,.open>.dropdown-toggle.btn-success.focus,.open>.dropdown-toggle.btn-success:focus,.open>.dropdown-toggle.btn-success:hover{color:#fff;background-color:#398439;border-color:#255625}.btn-success.active,.btn-success:active,.open>.dropdown-toggle.btn-success{background-image:none}.btn-success.disabled.focus,.btn-success.disabled:focus,.btn-success.disabled:hover,.btn-success[disabled].focus,.btn-success[disabled]:focus,.btn-success[disabled]:hover,fieldset[disabled] .btn-success.focus,fieldset[disabled] .btn-success:focus,fieldset[disabled] .btn-success:hover{background-color:#5cb85c;border-color:#4cae4c}.btn-success .badge{color:#5cb85c;background-color:#fff}.btn-info{color:#fff;background-color:#5bc0de;border-color:#46b8da}.btn-info.focus,.btn-info:focus{color:#fff;background-color:#31b0d5;border-color:#1b6d85}.btn-info:hover{color:#fff;background-color:#31b0d5;border-color:#269abc}.btn-info.active,.btn-info:active,.open>.dropdown-toggle.btn-info{color:#fff;background-color:#31b0d5;border-color:#269abc}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle.btn-info.focus,.open>.dropdown-toggle.btn-info:focus,.open>.dropdown-toggle.btn-info:hover{color:#fff;background-color:#269abc;border-color:#1b6d85}.btn-info.active,.btn-info:active,.open>.dropdown-toggle.btn-info{background-image:none}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{background-color:#5bc0de;border-color:#46b8da}.btn-info .badge{color:#5bc0de;background-color:#fff}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}.btn-warning.focus,.btn-warning:focus{color:#fff;background-color:#ec971f;border-color:#985f0d}.btn-warning:hover{color:#fff;background-color:#ec971f;border-color:#d58512}.btn-warning.active,.btn-warning:active,.open>.dropdown-toggle.btn-warning{color:#fff;background-color:#ec971f;border-color:#d58512}.btn-warning.active.focus,.btn-warning.active:focus,.btn-warning.active:hover,.btn-warning:active.focus,.btn-warning:active:focus,.btn-warning:active:hover,.open>.dropdown-toggle.btn-warning.focus,.open>.dropdown-toggle.btn-warning:focus,.open>.dropdown-toggle.btn-warning:hover{color:#fff;background-color:#d58512;border-color:#985f0d}.btn-warning.active,.btn-warning:active,.open>.dropdown-toggle.btn-warning{background-image:none}.btn-warning.disabled.focus,.btn-warning.disabled:focus,.btn-warning.disabled:hover,.btn-warning[disabled].focus,.btn-warning[disabled]:focus,.btn-warning[disabled]:hover,fieldset[disabled] .btn-warning.focus,fieldset[disabled] .btn-warning:focus,fieldset[disabled] .btn-warning:hover{background-color:#f0ad4e;border-color:#eea236}.btn-warning .badge{color:#f0ad4e;background-color:#fff}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.btn-danger.focus,.btn-danger:focus{color:#fff;background-color:#c9302c;border-color:#761c19}.btn-danger:hover{color:#fff;background-color:#c9302c;border-color:#ac2925}.btn-danger.active,.btn-danger:active,.open>.dropdown-toggle.btn-danger{color:#fff;background-color:#c9302c;border-color:#ac2925}.btn-danger.active.focus,.btn-danger.active:focus,.btn-danger.active:hover,.btn-danger:active.focus,.btn-danger:active:focus,.btn-danger:active:hover,.open>.dropdown-toggle.btn-danger.focus,.open>.dropdown-toggle.btn-danger:focus,.open>.dropdown-toggle.btn-danger:hover{color:#fff;background-color:#ac2925;border-color:#761c19}.btn-danger.active,.btn-danger:active,.open>.dropdown-toggle.btn-danger{background-image:none}.btn-danger.disabled.focus,.btn-danger.disabled:focus,.btn-danger.disabled:hover,.btn-danger[disabled].focus,.btn-danger[disabled]:focus,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger.focus,fieldset[disabled] .btn-danger:focus,fieldset[disabled] .btn-danger:hover{background-color:#d9534f;border-color:#d43f3a}.btn-danger .badge{color:#d9534f;background-color:#fff}.btn-link{font-weight:400;color:#337ab7;border-radius:0}.btn-link,.btn-link.active,.btn-link:active,.btn-link[disabled],fieldset[disabled] .btn-link{background-color:transparent;box-shadow:none}.btn-link,.btn-link:active,.btn-link:focus,.btn-link:hover{border-color:transparent}.btn-link:focus,.btn-link:hover{color:#23527c;text-decoration:underline;background-color:transparent}.btn-link[disabled]:focus,.btn-link[disabled]:hover,fieldset[disabled] .btn-link:focus,fieldset[disabled] .btn-link:hover{color:#777;text-decoration:none}.btn-group-lg>.btn,.btn-lg{padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.btn-group-sm>.btn,.btn-sm{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.btn-group-xs>.btn,.btn-xs{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:5px}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{opacity:0;transition:opacity .15s linear}.fade.in{opacity:1}.collapse{display:none}.collapse.in{display:block}tr.collapse.in{display:table-row}tbody.collapse.in{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;transition-timing-function:ease;transition-duration:.35s;transition-property:height,visibility}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-top:4px solid\\9;border-right:4px solid transparent;border-left:4px solid transparent}.dropdown,.dropup{position:relative}.dropdown-toggle:focus{outline:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;font-size:14px;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.15);border-radius:4px;box-shadow:0 6px 12px rgba(0,0,0,.175)}.dropdown-menu.pull-right{right:0;left:auto}.dropdown-menu .divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.dropdown-menu>li>a{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:nowrap}.dropdown-menu>li>a:focus,.dropdown-menu>li>a:hover{color:#262626;text-decoration:none;background-color:#f5f5f5}.dropdown-menu>.active>a,.dropdown-menu>.active>a:focus,.dropdown-menu>.active>a:hover{color:#fff;text-decoration:none;background-color:#337ab7;outline:0}.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover{color:#777}.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover{text-decoration:none;cursor:not-allowed;background-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.open>.dropdown-menu{display:block}.open>a{outline:0}.dropdown-menu-right{right:0;left:auto}.dropdown-menu-left{right:auto;left:0}.dropdown-header{display:block;padding:3px 20px;font-size:12px;line-height:1.42857143;color:#777;white-space:nowrap}.dropdown-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:990}.pull-right>.dropdown-menu{right:0;left:auto}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{content:\"\";border-top:0;border-bottom:4px dashed;border-bottom:4px solid\\9}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:2px}@media (min-width:768px){.navbar-right .dropdown-menu{right:0;left:auto}.navbar-right .dropdown-menu-left{right:auto;left:0}}.btn-group,.btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;float:left}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:2}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{margin-left:-5px}.btn-toolbar .btn,.btn-toolbar .btn-group,.btn-toolbar .input-group{float:left}.btn-toolbar>.btn,.btn-toolbar>.btn-group,.btn-toolbar>.input-group{margin-left:5px}.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.btn-group>.btn-group{float:left}.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-left-radius:0;border-bottom-left-radius:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn-group>.btn+.dropdown-toggle{padding-right:8px;padding-left:8px}.btn-group>.btn-lg+.dropdown-toggle{padding-right:12px;padding-left:12px}.btn-group.open .dropdown-toggle{box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn-group.open .dropdown-toggle.btn-link{box-shadow:none}.btn .caret{margin-left:0}.btn-lg .caret{border-width:5px 5px 0;border-bottom-width:0}.dropup .btn-lg .caret{border-width:0 5px 5px}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn{display:block;float:none;width:100%;max-width:100%}.btn-group-vertical>.btn-group>.btn{float:none}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:last-child:not(:first-child){border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-left-radius:0;border-top-right-radius:0}.btn-group-justified{display:table;width:100%;table-layout:fixed;border-collapse:separate}.btn-group-justified>.btn,.btn-group-justified>.btn-group{display:table-cell;float:none;width:1%}.btn-group-justified>.btn-group .btn{width:100%}.btn-group-justified>.btn-group .dropdown-menu{left:auto}[data-toggle=buttons]>.btn input[type=checkbox],[data-toggle=buttons]>.btn input[type=radio],[data-toggle=buttons]>.btn-group>.btn input[type=checkbox],[data-toggle=buttons]>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:table;border-collapse:separate}.input-group[class*=col-]{float:none;padding-right:0;padding-left:0}.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.input-group .form-control:focus{z-index:3}.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.input-group-lg>.form-control,select.input-group-lg>.input-group-addon,select.input-group-lg>.input-group-btn>.btn{height:46px;line-height:46px}select[multiple].input-group-lg>.form-control,select[multiple].input-group-lg>.input-group-addon,select[multiple].input-group-lg>.input-group-btn>.btn,textarea.input-group-lg>.form-control,textarea.input-group-lg>.input-group-addon,textarea.input-group-lg>.input-group-btn>.btn{height:auto}.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-group-sm>.form-control,select.input-group-sm>.input-group-addon,select.input-group-sm>.input-group-btn>.btn{height:30px;line-height:30px}select[multiple].input-group-sm>.form-control,select[multiple].input-group-sm>.input-group-addon,select[multiple].input-group-sm>.input-group-btn>.btn,textarea.input-group-sm>.form-control,textarea.input-group-sm>.input-group-addon,textarea.input-group-sm>.input-group-btn>.btn{height:auto}.input-group .form-control,.input-group-addon,.input-group-btn{display:table-cell}.input-group .form-control:not(:first-child):not(:last-child),.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:6px 12px;font-size:14px;font-weight:400;line-height:1;color:#555;text-align:center;background-color:#eee;border:1px solid #ccc;border-radius:4px}.input-group-addon.input-sm{padding:5px 10px;font-size:12px;border-radius:3px}.input-group-addon.input-lg{padding:10px 16px;font-size:18px;border-radius:6px}.input-group-addon input[type=checkbox],.input-group-addon input[type=radio]{margin-top:0}.input-group .form-control:first-child,.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn-group:not(:last-child)>.btn,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.input-group-addon:first-child{border-right:0}.input-group .form-control:last-child,.input-group-addon:last-child,.input-group-btn:first-child>.btn-group:not(:first-child)>.btn,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group>.btn,.input-group-btn:last-child>.dropdown-toggle{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-addon:last-child{border-left:0}.input-group-btn{position:relative;font-size:0;white-space:nowrap}.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:active,.input-group-btn>.btn:focus,.input-group-btn>.btn:hover{z-index:2}.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group{margin-right:-1px}.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group{z-index:2;margin-left:-1px}.nav{padding-left:0;margin-bottom:0;list-style:none}.nav>li{position:relative;display:block}.nav>li>a{position:relative;display:block;padding:10px 15px}.nav>li>a:focus,.nav>li>a:hover{text-decoration:none;background-color:#eee}.nav>li.disabled>a{color:#777}.nav>li.disabled>a:focus,.nav>li.disabled>a:hover{color:#777;text-decoration:none;cursor:not-allowed;background-color:transparent}.nav .open>a,.nav .open>a:focus,.nav .open>a:hover{background-color:#eee;border-color:#337ab7}.nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.nav>li>a>img{max-width:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{float:left;margin-bottom:-1px}.nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0}.nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:focus,.nav-tabs>li.active>a:hover{color:#555;cursor:default;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent}.nav-tabs.nav-justified{width:100%;border-bottom:0}.nav-tabs.nav-justified>li{float:none}.nav-tabs.nav-justified>li>a{margin-bottom:5px;text-align:center}.nav-tabs.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-tabs.nav-justified>li{display:table-cell;width:1%}.nav-tabs.nav-justified>li>a{margin-bottom:0}}.nav-tabs.nav-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border-bottom-color:#fff}}.nav-pills>li{float:left}.nav-pills>li>a{border-radius:4px}.nav-pills>li+li{margin-left:2px}.nav-pills>li.active>a,.nav-pills>li.active>a:focus,.nav-pills>li.active>a:hover{color:#fff;background-color:#337ab7}.nav-stacked>li{float:none}.nav-stacked>li+li{margin-top:2px;margin-left:0}.nav-justified{width:100%}.nav-justified>li{float:none}.nav-justified>li>a{margin-bottom:5px;text-align:center}.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-justified>li{display:table-cell;width:1%}.nav-justified>li>a{margin-bottom:0}}.nav-tabs-justified{border-bottom:0}.nav-tabs-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border-bottom-color:#fff}}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.navbar{position:relative;min-height:50px;margin-bottom:20px;border:1px solid transparent}@media (min-width:768px){.navbar{border-radius:4px}}@media (min-width:768px){.navbar-header{float:left}}.navbar-collapse{padding-right:15px;padding-left:15px;overflow-x:visible;-webkit-overflow-scrolling:touch;border-top:1px solid transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,.1)}.navbar-collapse.in{overflow-y:auto}@media (min-width:768px){.navbar-collapse{width:auto;border-top:0;box-shadow:none}.navbar-collapse.collapse{display:block!important;height:auto!important;padding-bottom:0;overflow:visible!important}.navbar-collapse.in{overflow-y:visible}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse{padding-right:0;padding-left:0}}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse{max-height:340px}@media (max-device-width:480px) and (orientation:landscape){.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse{max-height:200px}}.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:0;margin-left:0}}.navbar-static-top{z-index:1000;border-width:0 0 1px}@media (min-width:768px){.navbar-static-top{border-radius:0}}.navbar-fixed-bottom,.navbar-fixed-top{position:fixed;right:0;left:0;z-index:1030}@media (min-width:768px){.navbar-fixed-bottom,.navbar-fixed-top{border-radius:0}}.navbar-fixed-top{top:0;border-width:0 0 1px}.navbar-fixed-bottom{bottom:0;margin-bottom:0;border-width:1px 0 0}.navbar-brand{float:left;height:50px;padding:15px 15px;font-size:18px;line-height:20px}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-brand>img{display:block}@media (min-width:768px){.navbar>.container .navbar-brand,.navbar>.container-fluid .navbar-brand{margin-left:-15px}}.navbar-toggle{position:relative;float:right;padding:9px 10px;margin-top:8px;margin-right:15px;margin-bottom:8px;background-color:transparent;background-image:none;border:1px solid transparent;border-radius:4px}.navbar-toggle:focus{outline:0}.navbar-toggle .icon-bar{display:block;width:22px;height:2px;border-radius:1px}.navbar-toggle .icon-bar+.icon-bar{margin-top:4px}@media (min-width:768px){.navbar-toggle{display:none}}.navbar-nav{margin:7.5px -15px}.navbar-nav>li>a{padding-top:10px;padding-bottom:10px;line-height:20px}@media (max-width:767px){.navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;box-shadow:none}.navbar-nav .open .dropdown-menu .dropdown-header,.navbar-nav .open .dropdown-menu>li>a{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu>li>a{line-height:20px}.navbar-nav .open .dropdown-menu>li>a:focus,.navbar-nav .open .dropdown-menu>li>a:hover{background-image:none}}@media (min-width:768px){.navbar-nav{float:left;margin:0}.navbar-nav>li{float:left}.navbar-nav>li>a{padding-top:15px;padding-bottom:15px}}.navbar-form{padding:10px 15px;margin-top:8px;margin-right:-15px;margin-bottom:8px;margin-left:-15px;border-top:1px solid transparent;border-bottom:1px solid transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1)}@media (min-width:768px){.navbar-form .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.navbar-form .form-control{display:inline-block;width:auto;vertical-align:middle}.navbar-form .form-control-static{display:inline-block}.navbar-form .input-group{display:inline-table;vertical-align:middle}.navbar-form .input-group .form-control,.navbar-form .input-group .input-group-addon,.navbar-form .input-group .input-group-btn{width:auto}.navbar-form .input-group>.form-control{width:100%}.navbar-form .control-label{margin-bottom:0;vertical-align:middle}.navbar-form .checkbox,.navbar-form .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.navbar-form .checkbox label,.navbar-form .radio label{padding-left:0}.navbar-form .checkbox input[type=checkbox],.navbar-form .radio input[type=radio]{position:relative;margin-left:0}.navbar-form .has-feedback .form-control-feedback{top:0}}@media (max-width:767px){.navbar-form .form-group{margin-bottom:5px}.navbar-form .form-group:last-child{margin-bottom:0}}@media (min-width:768px){.navbar-form{width:auto;padding-top:0;padding-bottom:0;margin-right:0;margin-left:0;border:0;box-shadow:none}}.navbar-nav>li>.dropdown-menu{margin-top:0;border-top-left-radius:0;border-top-right-radius:0}.navbar-fixed-bottom .navbar-nav>li>.dropdown-menu{margin-bottom:0;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.navbar-btn{margin-top:8px;margin-bottom:8px}.navbar-btn.btn-sm{margin-top:10px;margin-bottom:10px}.navbar-btn.btn-xs{margin-top:14px;margin-bottom:14px}.navbar-text{margin-top:15px;margin-bottom:15px}@media (min-width:768px){.navbar-text{float:left;margin-right:15px;margin-left:15px}}@media (min-width:768px){.navbar-left{float:left!important}.navbar-right{float:right!important;margin-right:-15px}.navbar-right~.navbar-right{margin-right:0}}.navbar-default{background-color:#f8f8f8;border-color:#e7e7e7}.navbar-default .navbar-brand{color:#777}.navbar-default .navbar-brand:focus,.navbar-default .navbar-brand:hover{color:#5e5e5e;background-color:transparent}.navbar-default .navbar-text{color:#777}.navbar-default .navbar-nav>li>a{color:#777}.navbar-default .navbar-nav>li>a:focus,.navbar-default .navbar-nav>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:focus,.navbar-default .navbar-nav>.active>a:hover{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav>.disabled>a,.navbar-default .navbar-nav>.disabled>a:focus,.navbar-default .navbar-nav>.disabled>a:hover{color:#ccc;background-color:transparent}.navbar-default .navbar-toggle{border-color:#ddd}.navbar-default .navbar-toggle:focus,.navbar-default .navbar-toggle:hover{background-color:#ddd}.navbar-default .navbar-toggle .icon-bar{background-color:#888}.navbar-default .navbar-collapse,.navbar-default .navbar-form{border-color:#e7e7e7}.navbar-default .navbar-nav>.open>a,.navbar-default .navbar-nav>.open>a:focus,.navbar-default .navbar-nav>.open>a:hover{color:#555;background-color:#e7e7e7}@media (max-width:767px){.navbar-default .navbar-nav .open .dropdown-menu>li>a{color:#777}.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#ccc;background-color:transparent}}.navbar-default .navbar-link{color:#777}.navbar-default .navbar-link:hover{color:#333}.navbar-default .btn-link{color:#777}.navbar-default .btn-link:focus,.navbar-default .btn-link:hover{color:#333}.navbar-default .btn-link[disabled]:focus,.navbar-default .btn-link[disabled]:hover,fieldset[disabled] .navbar-default .btn-link:focus,fieldset[disabled] .navbar-default .btn-link:hover{color:#ccc}.navbar-inverse{background-color:#222;border-color:#080808}.navbar-inverse .navbar-brand{color:#9d9d9d}.navbar-inverse .navbar-brand:focus,.navbar-inverse .navbar-brand:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-text{color:#9d9d9d}.navbar-inverse .navbar-nav>li>a{color:#9d9d9d}.navbar-inverse .navbar-nav>li>a:focus,.navbar-inverse .navbar-nav>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>.active>a,.navbar-inverse .navbar-nav>.active>a:focus,.navbar-inverse .navbar-nav>.active>a:hover{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav>.disabled>a,.navbar-inverse .navbar-nav>.disabled>a:focus,.navbar-inverse .navbar-nav>.disabled>a:hover{color:#444;background-color:transparent}.navbar-inverse .navbar-toggle{border-color:#333}.navbar-inverse .navbar-toggle:focus,.navbar-inverse .navbar-toggle:hover{background-color:#333}.navbar-inverse .navbar-toggle .icon-bar{background-color:#fff}.navbar-inverse .navbar-collapse,.navbar-inverse .navbar-form{border-color:#101010}.navbar-inverse .navbar-nav>.open>a,.navbar-inverse .navbar-nav>.open>a:focus,.navbar-inverse .navbar-nav>.open>a:hover{color:#fff;background-color:#080808}@media (max-width:767px){.navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header{border-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu .divider{background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a{color:#9d9d9d}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#444;background-color:transparent}}.navbar-inverse .navbar-link{color:#9d9d9d}.navbar-inverse .navbar-link:hover{color:#fff}.navbar-inverse .btn-link{color:#9d9d9d}.navbar-inverse .btn-link:focus,.navbar-inverse .btn-link:hover{color:#fff}.navbar-inverse .btn-link[disabled]:focus,.navbar-inverse .btn-link[disabled]:hover,fieldset[disabled] .navbar-inverse .btn-link:focus,fieldset[disabled] .navbar-inverse .btn-link:hover{color:#444}.breadcrumb{padding:8px 15px;margin-bottom:20px;list-style:none;background-color:#f5f5f5;border-radius:4px}.breadcrumb>li{display:inline-block}.breadcrumb>li+li:before{padding:0 5px;color:#ccc;content:\"/\\00a0\"}.breadcrumb>.active{color:#777}.pagination{display:inline-block;padding-left:0;margin:20px 0;border-radius:4px}.pagination>li{display:inline}.pagination>li>a,.pagination>li>span{position:relative;float:left;padding:6px 12px;margin-left:-1px;line-height:1.42857143;color:#337ab7;text-decoration:none;background-color:#fff;border:1px solid #ddd}.pagination>li:first-child>a,.pagination>li:first-child>span{margin-left:0;border-top-left-radius:4px;border-bottom-left-radius:4px}.pagination>li:last-child>a,.pagination>li:last-child>span{border-top-right-radius:4px;border-bottom-right-radius:4px}.pagination>li>a:focus,.pagination>li>a:hover,.pagination>li>span:focus,.pagination>li>span:hover{z-index:2;color:#23527c;background-color:#eee;border-color:#ddd}.pagination>.active>a,.pagination>.active>a:focus,.pagination>.active>a:hover,.pagination>.active>span,.pagination>.active>span:focus,.pagination>.active>span:hover{z-index:3;color:#fff;cursor:default;background-color:#337ab7;border-color:#337ab7}.pagination>.disabled>a,.pagination>.disabled>a:focus,.pagination>.disabled>a:hover,.pagination>.disabled>span,.pagination>.disabled>span:focus,.pagination>.disabled>span:hover{color:#777;cursor:not-allowed;background-color:#fff;border-color:#ddd}.pagination-lg>li>a,.pagination-lg>li>span{padding:10px 16px;font-size:18px;line-height:1.3333333}.pagination-lg>li:first-child>a,.pagination-lg>li:first-child>span{border-top-left-radius:6px;border-bottom-left-radius:6px}.pagination-lg>li:last-child>a,.pagination-lg>li:last-child>span{border-top-right-radius:6px;border-bottom-right-radius:6px}.pagination-sm>li>a,.pagination-sm>li>span{padding:5px 10px;font-size:12px;line-height:1.5}.pagination-sm>li:first-child>a,.pagination-sm>li:first-child>span{border-top-left-radius:3px;border-bottom-left-radius:3px}.pagination-sm>li:last-child>a,.pagination-sm>li:last-child>span{border-top-right-radius:3px;border-bottom-right-radius:3px}.pager{padding-left:0;margin:20px 0;text-align:center;list-style:none}.pager li{display:inline}.pager li>a,.pager li>span{display:inline-block;padding:5px 14px;background-color:#fff;border:1px solid #ddd;border-radius:15px}.pager li>a:focus,.pager li>a:hover{text-decoration:none;background-color:#eee}.pager .next>a,.pager .next>span{float:right}.pager .previous>a,.pager .previous>span{float:left}.pager .disabled>a,.pager .disabled>a:focus,.pager .disabled>a:hover,.pager .disabled>span{color:#777;cursor:not-allowed;background-color:#fff}.label{display:inline;padding:.2em .6em .3em;font-size:75%;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25em}a.label:focus,a.label:hover{color:#fff;text-decoration:none;cursor:pointer}.label:empty{display:none}.btn .label{position:relative;top:-1px}.label-default{background-color:#777}.label-default[href]:focus,.label-default[href]:hover{background-color:#5e5e5e}.label-primary{background-color:#337ab7}.label-primary[href]:focus,.label-primary[href]:hover{background-color:#286090}.label-success{background-color:#5cb85c}.label-success[href]:focus,.label-success[href]:hover{background-color:#449d44}.label-info{background-color:#5bc0de}.label-info[href]:focus,.label-info[href]:hover{background-color:#31b0d5}.label-warning{background-color:#f0ad4e}.label-warning[href]:focus,.label-warning[href]:hover{background-color:#ec971f}.label-danger{background-color:#d9534f}.label-danger[href]:focus,.label-danger[href]:hover{background-color:#c9302c}.badge{display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:middle;background-color:#777;border-radius:10px}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.btn-group-xs>.btn .badge,.btn-xs .badge{top:0;padding:1px 5px}a.badge:focus,a.badge:hover{color:#fff;text-decoration:none;cursor:pointer}.list-group-item.active>.badge,.nav-pills>.active>a>.badge{color:#337ab7;background-color:#fff}.list-group-item>.badge{float:right}.list-group-item>.badge+.badge{margin-right:5px}.nav-pills>li>a>.badge{margin-left:3px}.jumbotron{padding-top:30px;padding-bottom:30px;margin-bottom:30px;color:inherit;background-color:#eee}.jumbotron .h1,.jumbotron h1{color:inherit}.jumbotron p{margin-bottom:15px;font-size:21px;font-weight:200}.jumbotron>hr{border-top-color:#d5d5d5}.container .jumbotron,.container-fluid .jumbotron{padding-right:15px;padding-left:15px;border-radius:6px}.jumbotron .container{max-width:100%}@media screen and (min-width:768px){.jumbotron{padding-top:48px;padding-bottom:48px}.container .jumbotron,.container-fluid .jumbotron{padding-right:60px;padding-left:60px}.jumbotron .h1,.jumbotron h1{font-size:63px}}.thumbnail{display:block;padding:4px;margin-bottom:20px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;transition:border .2s ease-in-out}.thumbnail a>img,.thumbnail>img{margin-right:auto;margin-left:auto}a.thumbnail.active,a.thumbnail:focus,a.thumbnail:hover{border-color:#337ab7}.thumbnail .caption{padding:9px;color:#333}.alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:4px}.alert h4{margin-top:0;color:inherit}.alert .alert-link{font-weight:700}.alert>p,.alert>ul{margin-bottom:0}.alert>p+p{margin-top:5px}.alert-dismissable,.alert-dismissible{padding-right:35px}.alert-dismissable .close,.alert-dismissible .close{position:relative;top:-2px;right:-21px;color:inherit}.alert-success{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.alert-success hr{border-top-color:#c9e2b3}.alert-success .alert-link{color:#2b542c}.alert-info{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.alert-info hr{border-top-color:#a6e1ec}.alert-info .alert-link{color:#245269}.alert-warning{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.alert-warning hr{border-top-color:#f7e1b5}.alert-warning .alert-link{color:#66512c}.alert-danger{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.alert-danger hr{border-top-color:#e4b9c0}.alert-danger .alert-link{color:#843534}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.progress{height:20px;margin-bottom:20px;overflow:hidden;background-color:#f5f5f5;border-radius:4px;box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:20px;color:#fff;text-align:center;background-color:#337ab7;box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);transition:width .6s ease}.progress-bar-striped,.progress-striped .progress-bar{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:40px 40px}.progress-bar.active,.progress.active .progress-bar{-webkit-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.progress-bar-success{background-color:#5cb85c}.progress-striped .progress-bar-success{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-info{background-color:#5bc0de}.progress-striped .progress-bar-info{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-warning{background-color:#f0ad4e}.progress-striped .progress-bar-warning{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-danger{background-color:#d9534f}.progress-striped .progress-bar-danger{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.media{margin-top:15px}.media:first-child{margin-top:0}.media,.media-body{overflow:hidden;zoom:1}.media-body{width:10000px}.media-object{display:block}.media-object.img-thumbnail{max-width:none}.media-right,.media>.pull-right{padding-left:10px}.media-left,.media>.pull-left{padding-right:10px}.media-body,.media-left,.media-right{display:table-cell;vertical-align:top}.media-middle{vertical-align:middle}.media-bottom{vertical-align:bottom}.media-heading{margin-top:0;margin-bottom:5px}.media-list{padding-left:0;list-style:none}.list-group{padding-left:0;margin-bottom:20px}.list-group-item{position:relative;display:block;padding:10px 15px;margin-bottom:-1px;background-color:#fff;border:1px solid #ddd}.list-group-item:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}a.list-group-item,button.list-group-item{color:#555}a.list-group-item .list-group-item-heading,button.list-group-item .list-group-item-heading{color:#333}a.list-group-item:focus,a.list-group-item:hover,button.list-group-item:focus,button.list-group-item:hover{color:#555;text-decoration:none;background-color:#f5f5f5}button.list-group-item{width:100%;text-align:left}.list-group-item.disabled,.list-group-item.disabled:focus,.list-group-item.disabled:hover{color:#777;cursor:not-allowed;background-color:#eee}.list-group-item.disabled .list-group-item-heading,.list-group-item.disabled:focus .list-group-item-heading,.list-group-item.disabled:hover .list-group-item-heading{color:inherit}.list-group-item.disabled .list-group-item-text,.list-group-item.disabled:focus .list-group-item-text,.list-group-item.disabled:hover .list-group-item-text{color:#777}.list-group-item.active,.list-group-item.active:focus,.list-group-item.active:hover{z-index:2;color:#fff;background-color:#337ab7;border-color:#337ab7}.list-group-item.active .list-group-item-heading,.list-group-item.active .list-group-item-heading>.small,.list-group-item.active .list-group-item-heading>small,.list-group-item.active:focus .list-group-item-heading,.list-group-item.active:focus .list-group-item-heading>.small,.list-group-item.active:focus .list-group-item-heading>small,.list-group-item.active:hover .list-group-item-heading,.list-group-item.active:hover .list-group-item-heading>.small,.list-group-item.active:hover .list-group-item-heading>small{color:inherit}.list-group-item.active .list-group-item-text,.list-group-item.active:focus .list-group-item-text,.list-group-item.active:hover .list-group-item-text{color:#c7ddef}.list-group-item-success{color:#3c763d;background-color:#dff0d8}a.list-group-item-success,button.list-group-item-success{color:#3c763d}a.list-group-item-success .list-group-item-heading,button.list-group-item-success .list-group-item-heading{color:inherit}a.list-group-item-success:focus,a.list-group-item-success:hover,button.list-group-item-success:focus,button.list-group-item-success:hover{color:#3c763d;background-color:#d0e9c6}a.list-group-item-success.active,a.list-group-item-success.active:focus,a.list-group-item-success.active:hover,button.list-group-item-success.active,button.list-group-item-success.active:focus,button.list-group-item-success.active:hover{color:#fff;background-color:#3c763d;border-color:#3c763d}.list-group-item-info{color:#31708f;background-color:#d9edf7}a.list-group-item-info,button.list-group-item-info{color:#31708f}a.list-group-item-info .list-group-item-heading,button.list-group-item-info .list-group-item-heading{color:inherit}a.list-group-item-info:focus,a.list-group-item-info:hover,button.list-group-item-info:focus,button.list-group-item-info:hover{color:#31708f;background-color:#c4e3f3}a.list-group-item-info.active,a.list-group-item-info.active:focus,a.list-group-item-info.active:hover,button.list-group-item-info.active,button.list-group-item-info.active:focus,button.list-group-item-info.active:hover{color:#fff;background-color:#31708f;border-color:#31708f}.list-group-item-warning{color:#8a6d3b;background-color:#fcf8e3}a.list-group-item-warning,button.list-group-item-warning{color:#8a6d3b}a.list-group-item-warning .list-group-item-heading,button.list-group-item-warning .list-group-item-heading{color:inherit}a.list-group-item-warning:focus,a.list-group-item-warning:hover,button.list-group-item-warning:focus,button.list-group-item-warning:hover{color:#8a6d3b;background-color:#faf2cc}a.list-group-item-warning.active,a.list-group-item-warning.active:focus,a.list-group-item-warning.active:hover,button.list-group-item-warning.active,button.list-group-item-warning.active:focus,button.list-group-item-warning.active:hover{color:#fff;background-color:#8a6d3b;border-color:#8a6d3b}.list-group-item-danger{color:#a94442;background-color:#f2dede}a.list-group-item-danger,button.list-group-item-danger{color:#a94442}a.list-group-item-danger .list-group-item-heading,button.list-group-item-danger .list-group-item-heading{color:inherit}a.list-group-item-danger:focus,a.list-group-item-danger:hover,button.list-group-item-danger:focus,button.list-group-item-danger:hover{color:#a94442;background-color:#ebcccc}a.list-group-item-danger.active,a.list-group-item-danger.active:focus,a.list-group-item-danger.active:hover,button.list-group-item-danger.active,button.list-group-item-danger.active:focus,button.list-group-item-danger.active:hover{color:#fff;background-color:#a94442;border-color:#a94442}.list-group-item-heading{margin-top:0;margin-bottom:5px}.list-group-item-text{margin-bottom:0;line-height:1.3}.panel{margin-bottom:20px;background-color:#fff;border:1px solid transparent;border-radius:4px;box-shadow:0 1px 1px rgba(0,0,0,.05)}.panel-body{padding:15px}.panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-left-radius:3px;border-top-right-radius:3px}.panel-heading>.dropdown .dropdown-toggle{color:inherit}.panel-title{margin-top:0;margin-bottom:0;font-size:16px;color:inherit}.panel-title>.small,.panel-title>.small>a,.panel-title>a,.panel-title>small,.panel-title>small>a{color:inherit}.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.list-group,.panel>.panel-collapse>.list-group{margin-bottom:0}.panel>.list-group .list-group-item,.panel>.panel-collapse>.list-group .list-group-item{border-width:1px 0;border-radius:0}.panel>.list-group:first-child .list-group-item:first-child,.panel>.panel-collapse>.list-group:first-child .list-group-item:first-child{border-top:0;border-top-left-radius:3px;border-top-right-radius:3px}.panel>.list-group:last-child .list-group-item:last-child,.panel>.panel-collapse>.list-group:last-child .list-group-item:last-child{border-bottom:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.panel-heading+.panel-collapse>.list-group .list-group-item:first-child{border-top-left-radius:0;border-top-right-radius:0}.panel-heading+.list-group .list-group-item:first-child{border-top-width:0}.list-group+.panel-footer{border-top-width:0}.panel>.panel-collapse>.table,.panel>.table,.panel>.table-responsive>.table{margin-bottom:0}.panel>.panel-collapse>.table caption,.panel>.table caption,.panel>.table-responsive>.table caption{padding-right:15px;padding-left:15px}.panel>.table-responsive:first-child>.table:first-child,.panel>.table:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child,.panel>.table:first-child>thead:first-child>tr:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table:first-child>thead:first-child>tr:first-child th:first-child{border-top-left-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table:first-child>thead:first-child>tr:first-child th:last-child{border-top-right-radius:3px}.panel>.table-responsive:last-child>.table:last-child,.panel>.table:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child{border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child{border-bottom-right-radius:3px}.panel>.panel-body+.table,.panel>.panel-body+.table-responsive,.panel>.table+.panel-body,.panel>.table-responsive+.panel-body{border-top:1px solid #ddd}.panel>.table>tbody:first-child>tr:first-child td,.panel>.table>tbody:first-child>tr:first-child th{border-top:0}.panel>.table-bordered,.panel>.table-responsive>.table-bordered{border:0}.panel>.table-bordered>tbody>tr>td:first-child,.panel>.table-bordered>tbody>tr>th:first-child,.panel>.table-bordered>tfoot>tr>td:first-child,.panel>.table-bordered>tfoot>tr>th:first-child,.panel>.table-bordered>thead>tr>td:first-child,.panel>.table-bordered>thead>tr>th:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,.panel>.table-responsive>.table-bordered>thead>tr>td:first-child,.panel>.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.panel>.table-bordered>tbody>tr>td:last-child,.panel>.table-bordered>tbody>tr>th:last-child,.panel>.table-bordered>tfoot>tr>td:last-child,.panel>.table-bordered>tfoot>tr>th:last-child,.panel>.table-bordered>thead>tr>td:last-child,.panel>.table-bordered>thead>tr>th:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,.panel>.table-responsive>.table-bordered>thead>tr>td:last-child,.panel>.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.panel>.table-bordered>tbody>tr:first-child>td,.panel>.table-bordered>tbody>tr:first-child>th,.panel>.table-bordered>thead>tr:first-child>td,.panel>.table-bordered>thead>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>th,.panel>.table-responsive>.table-bordered>thead>tr:first-child>td,.panel>.table-responsive>.table-bordered>thead>tr:first-child>th{border-bottom:0}.panel>.table-bordered>tbody>tr:last-child>td,.panel>.table-bordered>tbody>tr:last-child>th,.panel>.table-bordered>tfoot>tr:last-child>td,.panel>.table-bordered>tfoot>tr:last-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}.panel>.table-responsive{margin-bottom:0;border:0}.panel-group{margin-bottom:20px}.panel-group .panel{margin-bottom:0;border-radius:4px}.panel-group .panel+.panel{margin-top:5px}.panel-group .panel-heading{border-bottom:0}.panel-group .panel-heading+.panel-collapse>.list-group,.panel-group .panel-heading+.panel-collapse>.panel-body{border-top:1px solid #ddd}.panel-group .panel-footer{border-top:0}.panel-group .panel-footer+.panel-collapse .panel-body{border-bottom:1px solid #ddd}.panel-default{border-color:#ddd}.panel-default>.panel-heading{color:#333;background-color:#f5f5f5;border-color:#ddd}.panel-default>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ddd}.panel-default>.panel-heading .badge{color:#f5f5f5;background-color:#333}.panel-default>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ddd}.panel-primary{border-color:#337ab7}.panel-primary>.panel-heading{color:#fff;background-color:#337ab7;border-color:#337ab7}.panel-primary>.panel-heading+.panel-collapse>.panel-body{border-top-color:#337ab7}.panel-primary>.panel-heading .badge{color:#337ab7;background-color:#fff}.panel-primary>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#337ab7}.panel-success{border-color:#d6e9c6}.panel-success>.panel-heading{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.panel-success>.panel-heading+.panel-collapse>.panel-body{border-top-color:#d6e9c6}.panel-success>.panel-heading .badge{color:#dff0d8;background-color:#3c763d}.panel-success>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#d6e9c6}.panel-info{border-color:#bce8f1}.panel-info>.panel-heading{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.panel-info>.panel-heading+.panel-collapse>.panel-body{border-top-color:#bce8f1}.panel-info>.panel-heading .badge{color:#d9edf7;background-color:#31708f}.panel-info>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#bce8f1}.panel-warning{border-color:#faebcc}.panel-warning>.panel-heading{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.panel-warning>.panel-heading+.panel-collapse>.panel-body{border-top-color:#faebcc}.panel-warning>.panel-heading .badge{color:#fcf8e3;background-color:#8a6d3b}.panel-warning>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#faebcc}.panel-danger{border-color:#ebccd1}.panel-danger>.panel-heading{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.panel-danger>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ebccd1}.panel-danger>.panel-heading .badge{color:#f2dede;background-color:#a94442}.panel-danger>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ebccd1}.embed-responsive{position:relative;display:block;height:0;padding:0;overflow:hidden}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-16by9{padding-bottom:56.25%}.embed-responsive-4by3{padding-bottom:75%}.well{min-height:20px;padding:19px;margin-bottom:20px;background-color:#f5f5f5;border:1px solid #e3e3e3;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.05)}.well blockquote{border-color:#ddd;border-color:rgba(0,0,0,.15)}.well-lg{padding:24px;border-radius:6px}.well-sm{padding:9px;border-radius:3px}.close{float:right;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer;filter:alpha(opacity=50);opacity:.5}button.close{-webkit-appearance:none;padding:0;cursor:pointer;background:0 0;border:0}.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;-webkit-overflow-scrolling:touch;outline:0}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out, -webkit-transform .3s ease-out;-webkit-transform:translate(0,-25%);transform:translate(0,-25%)}.modal.in .modal-dialog{-webkit-transform:translate(0,0);transform:translate(0,0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;background-clip:padding-box;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;box-shadow:0 3px 9px rgba(0,0,0,.5)}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{filter:alpha(opacity=0);opacity:0}.modal-backdrop.in{filter:alpha(opacity=50);opacity:.5}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer .btn+.btn{margin-bottom:0;margin-left:5px}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.modal-footer .btn-block+.btn-block{margin-left:0}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{box-shadow:0 5px 15px rgba(0,0,0,.5)}.modal-sm{width:300px}}@media (min-width:992px){.modal-lg{width:900px}}.tooltip{position:absolute;z-index:1070;display:block;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:1.42857143;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;word-wrap:normal;white-space:normal;filter:alpha(opacity=0);opacity:0;line-break:auto}.tooltip.in{filter:alpha(opacity=90);opacity:.9}.tooltip.top{padding:5px 0;margin-top:-3px}.tooltip.right{padding:0 5px;margin-left:3px}.tooltip.bottom{padding:5px 0;margin-top:3px}.tooltip.left{padding:0 5px;margin-left:-3px}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:4px}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-left .tooltip-arrow{right:5px;bottom:0;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-right .tooltip-arrow{bottom:0;left:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-left .tooltip-arrow{top:0;right:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-right .tooltip-arrow{top:0;left:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.popover{position:absolute;top:0;left:0;z-index:1060;display:none;max-width:276px;padding:1px;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:1.42857143;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;word-wrap:normal;white-space:normal;background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.2);border-radius:6px;box-shadow:0 5px 10px rgba(0,0,0,.2);line-break:auto}.popover.top{margin-top:-10px}.popover.right{margin-left:10px}.popover.bottom{margin-top:10px}.popover.left{margin-left:-10px}.popover-title{padding:8px 14px;margin:0;font-size:14px;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-radius:5px 5px 0 0}.popover-content{padding:9px 14px}.popover>.arrow,.popover>.arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover>.arrow{border-width:11px}.popover>.arrow:after{content:\"\";border-width:10px}.popover.top>.arrow{bottom:-11px;left:50%;margin-left:-11px;border-top-color:#999;border-top-color:rgba(0,0,0,.25);border-bottom-width:0}.popover.top>.arrow:after{bottom:1px;margin-left:-10px;content:\" \";border-top-color:#fff;border-bottom-width:0}.popover.right>.arrow{top:50%;left:-11px;margin-top:-11px;border-right-color:#999;border-right-color:rgba(0,0,0,.25);border-left-width:0}.popover.right>.arrow:after{bottom:-10px;left:1px;content:\" \";border-right-color:#fff;border-left-width:0}.popover.bottom>.arrow{top:-11px;left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,.25)}.popover.bottom>.arrow:after{top:1px;margin-left:-10px;content:\" \";border-top-width:0;border-bottom-color:#fff}.popover.left>.arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999;border-left-color:rgba(0,0,0,.25)}.popover.left>.arrow:after{right:1px;bottom:-10px;content:\" \";border-right-width:0;border-left-color:#fff}.carousel{position:relative}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner>.item{position:relative;display:none;transition:.6s ease-in-out left}.carousel-inner>.item>a>img,.carousel-inner>.item>img{line-height:1}@media all and (transform-3d), (-webkit-transform-3d){.carousel-inner>.item{transition:-webkit-transform .6s ease-in-out;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out, -webkit-transform .6s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px}.carousel-inner>.item.active.right,.carousel-inner>.item.next{left:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.carousel-inner>.item.active.left,.carousel-inner>.item.prev{left:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.carousel-inner>.item.active,.carousel-inner>.item.next.left,.carousel-inner>.item.prev.right{left:0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev{display:block}.carousel-inner>.active{left:0}.carousel-inner>.next,.carousel-inner>.prev{position:absolute;top:0;width:100%}.carousel-inner>.next{left:100%}.carousel-inner>.prev{left:-100%}.carousel-inner>.next.left,.carousel-inner>.prev.right{left:0}.carousel-inner>.active.left{left:-100%}.carousel-inner>.active.right{left:100%}.carousel-control{position:absolute;top:0;bottom:0;left:0;width:15%;font-size:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6);background-color:rgba(0,0,0,0);filter:alpha(opacity=50);opacity:.5}.carousel-control.left{background-image:linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);background-repeat:repeat-x}.carousel-control.right{right:0;left:auto;background-image:linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);background-repeat:repeat-x}.carousel-control:focus,.carousel-control:hover{color:#fff;text-decoration:none;filter:alpha(opacity=90);outline:0;opacity:.9}.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next,.carousel-control .icon-prev{position:absolute;top:50%;z-index:5;display:inline-block;margin-top:-10px}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{left:50%;margin-left:-10px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{right:50%;margin-right:-10px}.carousel-control .icon-next,.carousel-control .icon-prev{width:20px;height:20px;font-family:serif;line-height:1}.carousel-control .icon-prev:before{content:'\\2039'}.carousel-control .icon-next:before{content:'\\203a'}.carousel-indicators{position:absolute;bottom:10px;left:50%;z-index:15;width:60%;padding-left:0;margin-left:-30%;text-align:center;list-style:none}.carousel-indicators li{display:inline-block;width:10px;height:10px;margin:1px;text-indent:-999px;cursor:pointer;background-color:#000\\9;background-color:rgba(0,0,0,0);border:1px solid #fff;border-radius:10px}.carousel-indicators .active{width:12px;height:12px;margin:0;background-color:#fff}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6)}.carousel-caption .btn{text-shadow:none}@media screen and (min-width:768px){.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next,.carousel-control .icon-prev{width:30px;height:30px;margin-top:-10px;font-size:30px}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{margin-left:-10px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{margin-right:-10px}.carousel-caption{right:20%;left:20%;padding-bottom:30px}.carousel-indicators{bottom:20px}}.btn-group-vertical>.btn-group:after,.btn-group-vertical>.btn-group:before,.btn-toolbar:after,.btn-toolbar:before,.clearfix:after,.clearfix:before,.container-fluid:after,.container-fluid:before,.container:after,.container:before,.dl-horizontal dd:after,.dl-horizontal dd:before,.form-horizontal .form-group:after,.form-horizontal .form-group:before,.modal-footer:after,.modal-footer:before,.modal-header:after,.modal-header:before,.nav:after,.nav:before,.navbar-collapse:after,.navbar-collapse:before,.navbar-header:after,.navbar-header:before,.navbar:after,.navbar:before,.pager:after,.pager:before,.panel-body:after,.panel-body:before,.row:after,.row:before{display:table;content:\" \"}.btn-group-vertical>.btn-group:after,.btn-toolbar:after,.clearfix:after,.container-fluid:after,.container:after,.dl-horizontal dd:after,.form-horizontal .form-group:after,.modal-footer:after,.modal-header:after,.nav:after,.navbar-collapse:after,.navbar-header:after,.navbar:after,.pager:after,.panel-body:after,.row:after{clear:both}.center-block{display:block;margin-right:auto;margin-left:auto}.pull-right{float:right!important}.pull-left{float:left!important}.hide{display:none!important}.show{display:block!important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none!important}.affix{position:fixed}@-ms-viewport{width:device-width}.visible-lg,.visible-md,.visible-sm,.visible-xs{display:none!important}.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block{display:none!important}@media (max-width:767px){.visible-xs{display:block!important}table.visible-xs{display:table!important}tr.visible-xs{display:table-row!important}td.visible-xs,th.visible-xs{display:table-cell!important}}@media (max-width:767px){.visible-xs-block{display:block!important}}@media (max-width:767px){.visible-xs-inline{display:inline!important}}@media (max-width:767px){.visible-xs-inline-block{display:inline-block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm{display:block!important}table.visible-sm{display:table!important}tr.visible-sm{display:table-row!important}td.visible-sm,th.visible-sm{display:table-cell!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-block{display:block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline{display:inline!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline-block{display:inline-block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md{display:block!important}table.visible-md{display:table!important}tr.visible-md{display:table-row!important}td.visible-md,th.visible-md{display:table-cell!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-block{display:block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline{display:inline!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline-block{display:inline-block!important}}@media (min-width:1200px){.visible-lg{display:block!important}table.visible-lg{display:table!important}tr.visible-lg{display:table-row!important}td.visible-lg,th.visible-lg{display:table-cell!important}}@media (min-width:1200px){.visible-lg-block{display:block!important}}@media (min-width:1200px){.visible-lg-inline{display:inline!important}}@media (min-width:1200px){.visible-lg-inline-block{display:inline-block!important}}@media (max-width:767px){.hidden-xs{display:none!important}}@media (min-width:768px) and (max-width:991px){.hidden-sm{display:none!important}}@media (min-width:992px) and (max-width:1199px){.hidden-md{display:none!important}}@media (min-width:1200px){.hidden-lg{display:none!important}}.visible-print{display:none!important}@media print{.visible-print{display:block!important}table.visible-print{display:table!important}tr.visible-print{display:table-row!important}td.visible-print,th.visible-print{display:table-cell!important}}.visible-print-block{display:none!important}@media print{.visible-print-block{display:block!important}}.visible-print-inline{display:none!important}@media print{.visible-print-inline{display:inline!important}}.visible-print-inline-block{display:none!important}@media print{.visible-print-inline-block{display:inline-block!important}}@media print{.hidden-print{display:none!important}}/*# sourceMappingURL=bootstrap.min.css.map */"

/***/ }),

/***/ "./src/assets/login_css/vendors/font-awesome/css/font-awesome.min.css":
/*!****************************************************************************!*\
  !*** ./src/assets/login_css/vendors/font-awesome/css/font-awesome.min.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n *  Font Awesome 4.6.3 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:'FontAwesome';src:url('fontawesome-webfont.eot?v=4.6.3');src:url('fontawesome-webfont.eot?#iefix&v=4.6.3') format('embedded-opentype'),url('fontawesome-webfont.woff2?v=4.6.3') format('woff2'),url('fontawesome-webfont.woff?v=4.6.3') format('woff'),url('fontawesome-webfont.ttf?v=4.6.3') format('truetype'),url('fontawesome-webfont.svg?v=4.6.3#fontawesomeregular') format('svg');font-weight:normal;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";-webkit-transform:scale(1, -1);transform:scale(1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{-webkit-filter:none;filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\f000\"}.fa-music:before{content:\"\\f001\"}.fa-search:before{content:\"\\f002\"}.fa-envelope-o:before{content:\"\\f003\"}.fa-heart:before{content:\"\\f004\"}.fa-star:before{content:\"\\f005\"}.fa-star-o:before{content:\"\\f006\"}.fa-user:before{content:\"\\f007\"}.fa-film:before{content:\"\\f008\"}.fa-th-large:before{content:\"\\f009\"}.fa-th:before{content:\"\\f00a\"}.fa-th-list:before{content:\"\\f00b\"}.fa-check:before{content:\"\\f00c\"}.fa-remove:before,.fa-close:before,.fa-times:before{content:\"\\f00d\"}.fa-search-plus:before{content:\"\\f00e\"}.fa-search-minus:before{content:\"\\f010\"}.fa-power-off:before{content:\"\\f011\"}.fa-signal:before{content:\"\\f012\"}.fa-gear:before,.fa-cog:before{content:\"\\f013\"}.fa-trash-o:before{content:\"\\f014\"}.fa-home:before{content:\"\\f015\"}.fa-file-o:before{content:\"\\f016\"}.fa-clock-o:before{content:\"\\f017\"}.fa-road:before{content:\"\\f018\"}.fa-download:before{content:\"\\f019\"}.fa-arrow-circle-o-down:before{content:\"\\f01a\"}.fa-arrow-circle-o-up:before{content:\"\\f01b\"}.fa-inbox:before{content:\"\\f01c\"}.fa-play-circle-o:before{content:\"\\f01d\"}.fa-rotate-right:before,.fa-repeat:before{content:\"\\f01e\"}.fa-refresh:before{content:\"\\f021\"}.fa-list-alt:before{content:\"\\f022\"}.fa-lock:before{content:\"\\f023\"}.fa-flag:before{content:\"\\f024\"}.fa-headphones:before{content:\"\\f025\"}.fa-volume-off:before{content:\"\\f026\"}.fa-volume-down:before{content:\"\\f027\"}.fa-volume-up:before{content:\"\\f028\"}.fa-qrcode:before{content:\"\\f029\"}.fa-barcode:before{content:\"\\f02a\"}.fa-tag:before{content:\"\\f02b\"}.fa-tags:before{content:\"\\f02c\"}.fa-book:before{content:\"\\f02d\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-print:before{content:\"\\f02f\"}.fa-camera:before{content:\"\\f030\"}.fa-font:before{content:\"\\f031\"}.fa-bold:before{content:\"\\f032\"}.fa-italic:before{content:\"\\f033\"}.fa-text-height:before{content:\"\\f034\"}.fa-text-width:before{content:\"\\f035\"}.fa-align-left:before{content:\"\\f036\"}.fa-align-center:before{content:\"\\f037\"}.fa-align-right:before{content:\"\\f038\"}.fa-align-justify:before{content:\"\\f039\"}.fa-list:before{content:\"\\f03a\"}.fa-dedent:before,.fa-outdent:before{content:\"\\f03b\"}.fa-indent:before{content:\"\\f03c\"}.fa-video-camera:before{content:\"\\f03d\"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:\"\\f03e\"}.fa-pencil:before{content:\"\\f040\"}.fa-map-marker:before{content:\"\\f041\"}.fa-adjust:before{content:\"\\f042\"}.fa-tint:before{content:\"\\f043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\f044\"}.fa-share-square-o:before{content:\"\\f045\"}.fa-check-square-o:before{content:\"\\f046\"}.fa-arrows:before{content:\"\\f047\"}.fa-step-backward:before{content:\"\\f048\"}.fa-fast-backward:before{content:\"\\f049\"}.fa-backward:before{content:\"\\f04a\"}.fa-play:before{content:\"\\f04b\"}.fa-pause:before{content:\"\\f04c\"}.fa-stop:before{content:\"\\f04d\"}.fa-forward:before{content:\"\\f04e\"}.fa-fast-forward:before{content:\"\\f050\"}.fa-step-forward:before{content:\"\\f051\"}.fa-eject:before{content:\"\\f052\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-plus-circle:before{content:\"\\f055\"}.fa-minus-circle:before{content:\"\\f056\"}.fa-times-circle:before{content:\"\\f057\"}.fa-check-circle:before{content:\"\\f058\"}.fa-question-circle:before{content:\"\\f059\"}.fa-info-circle:before{content:\"\\f05a\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-times-circle-o:before{content:\"\\f05c\"}.fa-check-circle-o:before{content:\"\\f05d\"}.fa-ban:before{content:\"\\f05e\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\f064\"}.fa-expand:before{content:\"\\f065\"}.fa-compress:before{content:\"\\f066\"}.fa-plus:before{content:\"\\f067\"}.fa-minus:before{content:\"\\f068\"}.fa-asterisk:before{content:\"\\f069\"}.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-gift:before{content:\"\\f06b\"}.fa-leaf:before{content:\"\\f06c\"}.fa-fire:before{content:\"\\f06d\"}.fa-eye:before{content:\"\\f06e\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-warning:before,.fa-exclamation-triangle:before{content:\"\\f071\"}.fa-plane:before{content:\"\\f072\"}.fa-calendar:before{content:\"\\f073\"}.fa-random:before{content:\"\\f074\"}.fa-comment:before{content:\"\\f075\"}.fa-magnet:before{content:\"\\f076\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-retweet:before{content:\"\\f079\"}.fa-shopping-cart:before{content:\"\\f07a\"}.fa-folder:before{content:\"\\f07b\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-arrows-v:before{content:\"\\f07d\"}.fa-arrows-h:before{content:\"\\f07e\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\f080\"}.fa-twitter-square:before{content:\"\\f081\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-key:before{content:\"\\f084\"}.fa-gears:before,.fa-cogs:before{content:\"\\f085\"}.fa-comments:before{content:\"\\f086\"}.fa-thumbs-o-up:before{content:\"\\f087\"}.fa-thumbs-o-down:before{content:\"\\f088\"}.fa-star-half:before{content:\"\\f089\"}.fa-heart-o:before{content:\"\\f08a\"}.fa-sign-out:before{content:\"\\f08b\"}.fa-linkedin-square:before{content:\"\\f08c\"}.fa-thumb-tack:before{content:\"\\f08d\"}.fa-external-link:before{content:\"\\f08e\"}.fa-sign-in:before{content:\"\\f090\"}.fa-trophy:before{content:\"\\f091\"}.fa-github-square:before{content:\"\\f092\"}.fa-upload:before{content:\"\\f093\"}.fa-lemon-o:before{content:\"\\f094\"}.fa-phone:before{content:\"\\f095\"}.fa-square-o:before{content:\"\\f096\"}.fa-bookmark-o:before{content:\"\\f097\"}.fa-phone-square:before{content:\"\\f098\"}.fa-twitter:before{content:\"\\f099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\f09a\"}.fa-github:before{content:\"\\f09b\"}.fa-unlock:before{content:\"\\f09c\"}.fa-credit-card:before{content:\"\\f09d\"}.fa-feed:before,.fa-rss:before{content:\"\\f09e\"}.fa-hdd-o:before{content:\"\\f0a0\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-bell:before{content:\"\\f0f3\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-hand-o-right:before{content:\"\\f0a4\"}.fa-hand-o-left:before{content:\"\\f0a5\"}.fa-hand-o-up:before{content:\"\\f0a6\"}.fa-hand-o-down:before{content:\"\\f0a7\"}.fa-arrow-circle-left:before{content:\"\\f0a8\"}.fa-arrow-circle-right:before{content:\"\\f0a9\"}.fa-arrow-circle-up:before{content:\"\\f0aa\"}.fa-arrow-circle-down:before{content:\"\\f0ab\"}.fa-globe:before{content:\"\\f0ac\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-tasks:before{content:\"\\f0ae\"}.fa-filter:before{content:\"\\f0b0\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-arrows-alt:before{content:\"\\f0b2\"}.fa-group:before,.fa-users:before{content:\"\\f0c0\"}.fa-chain:before,.fa-link:before{content:\"\\f0c1\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-flask:before{content:\"\\f0c3\"}.fa-cut:before,.fa-scissors:before{content:\"\\f0c4\"}.fa-copy:before,.fa-files-o:before{content:\"\\f0c5\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-save:before,.fa-floppy-o:before{content:\"\\f0c7\"}.fa-square:before{content:\"\\f0c8\"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:\"\\f0c9\"}.fa-list-ul:before{content:\"\\f0ca\"}.fa-list-ol:before{content:\"\\f0cb\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-underline:before{content:\"\\f0cd\"}.fa-table:before{content:\"\\f0ce\"}.fa-magic:before{content:\"\\f0d0\"}.fa-truck:before{content:\"\\f0d1\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-pinterest-square:before{content:\"\\f0d3\"}.fa-google-plus-square:before{content:\"\\f0d4\"}.fa-google-plus:before{content:\"\\f0d5\"}.fa-money:before{content:\"\\f0d6\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-columns:before{content:\"\\f0db\"}.fa-unsorted:before,.fa-sort:before{content:\"\\f0dc\"}.fa-sort-down:before,.fa-sort-desc:before{content:\"\\f0dd\"}.fa-sort-up:before,.fa-sort-asc:before{content:\"\\f0de\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-linkedin:before{content:\"\\f0e1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\f0e2\"}.fa-legal:before,.fa-gavel:before{content:\"\\f0e3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\f0e4\"}.fa-comment-o:before{content:\"\\f0e5\"}.fa-comments-o:before{content:\"\\f0e6\"}.fa-flash:before,.fa-bolt:before{content:\"\\f0e7\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-paste:before,.fa-clipboard:before{content:\"\\f0ea\"}.fa-lightbulb-o:before{content:\"\\f0eb\"}.fa-exchange:before{content:\"\\f0ec\"}.fa-cloud-download:before{content:\"\\f0ed\"}.fa-cloud-upload:before{content:\"\\f0ee\"}.fa-user-md:before{content:\"\\f0f0\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-bell-o:before{content:\"\\f0a2\"}.fa-coffee:before{content:\"\\f0f4\"}.fa-cutlery:before{content:\"\\f0f5\"}.fa-file-text-o:before{content:\"\\f0f6\"}.fa-building-o:before{content:\"\\f0f7\"}.fa-hospital-o:before{content:\"\\f0f8\"}.fa-ambulance:before{content:\"\\f0f9\"}.fa-medkit:before{content:\"\\f0fa\"}.fa-fighter-jet:before{content:\"\\f0fb\"}.fa-beer:before{content:\"\\f0fc\"}.fa-h-square:before{content:\"\\f0fd\"}.fa-plus-square:before{content:\"\\f0fe\"}.fa-angle-double-left:before{content:\"\\f100\"}.fa-angle-double-right:before{content:\"\\f101\"}.fa-angle-double-up:before{content:\"\\f102\"}.fa-angle-double-down:before{content:\"\\f103\"}.fa-angle-left:before{content:\"\\f104\"}.fa-angle-right:before{content:\"\\f105\"}.fa-angle-up:before{content:\"\\f106\"}.fa-angle-down:before{content:\"\\f107\"}.fa-desktop:before{content:\"\\f108\"}.fa-laptop:before{content:\"\\f109\"}.fa-tablet:before{content:\"\\f10a\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\f10b\"}.fa-circle-o:before{content:\"\\f10c\"}.fa-quote-left:before{content:\"\\f10d\"}.fa-quote-right:before{content:\"\\f10e\"}.fa-spinner:before{content:\"\\f110\"}.fa-circle:before{content:\"\\f111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\f112\"}.fa-github-alt:before{content:\"\\f113\"}.fa-folder-o:before{content:\"\\f114\"}.fa-folder-open-o:before{content:\"\\f115\"}.fa-smile-o:before{content:\"\\f118\"}.fa-frown-o:before{content:\"\\f119\"}.fa-meh-o:before{content:\"\\f11a\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-keyboard-o:before{content:\"\\f11c\"}.fa-flag-o:before{content:\"\\f11d\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-terminal:before{content:\"\\f120\"}.fa-code:before{content:\"\\f121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\f122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\f123\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-crop:before{content:\"\\f125\"}.fa-code-fork:before{content:\"\\f126\"}.fa-unlink:before,.fa-chain-broken:before{content:\"\\f127\"}.fa-question:before{content:\"\\f128\"}.fa-info:before{content:\"\\f129\"}.fa-exclamation:before{content:\"\\f12a\"}.fa-superscript:before{content:\"\\f12b\"}.fa-subscript:before{content:\"\\f12c\"}.fa-eraser:before{content:\"\\f12d\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-microphone:before{content:\"\\f130\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-shield:before{content:\"\\f132\"}.fa-calendar-o:before{content:\"\\f133\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-rocket:before{content:\"\\f135\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-chevron-circle-left:before{content:\"\\f137\"}.fa-chevron-circle-right:before{content:\"\\f138\"}.fa-chevron-circle-up:before{content:\"\\f139\"}.fa-chevron-circle-down:before{content:\"\\f13a\"}.fa-html5:before{content:\"\\f13b\"}.fa-css3:before{content:\"\\f13c\"}.fa-anchor:before{content:\"\\f13d\"}.fa-unlock-alt:before{content:\"\\f13e\"}.fa-bullseye:before{content:\"\\f140\"}.fa-ellipsis-h:before{content:\"\\f141\"}.fa-ellipsis-v:before{content:\"\\f142\"}.fa-rss-square:before{content:\"\\f143\"}.fa-play-circle:before{content:\"\\f144\"}.fa-ticket:before{content:\"\\f145\"}.fa-minus-square:before{content:\"\\f146\"}.fa-minus-square-o:before{content:\"\\f147\"}.fa-level-up:before{content:\"\\f148\"}.fa-level-down:before{content:\"\\f149\"}.fa-check-square:before{content:\"\\f14a\"}.fa-pencil-square:before{content:\"\\f14b\"}.fa-external-link-square:before{content:\"\\f14c\"}.fa-share-square:before{content:\"\\f14d\"}.fa-compass:before{content:\"\\f14e\"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:\"\\f150\"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:\"\\f151\"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:\"\\f152\"}.fa-euro:before,.fa-eur:before{content:\"\\f153\"}.fa-gbp:before{content:\"\\f154\"}.fa-dollar:before,.fa-usd:before{content:\"\\f155\"}.fa-rupee:before,.fa-inr:before{content:\"\\f156\"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:\"\\f157\"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:\"\\f158\"}.fa-won:before,.fa-krw:before{content:\"\\f159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\f15a\"}.fa-file:before{content:\"\\f15b\"}.fa-file-text:before{content:\"\\f15c\"}.fa-sort-alpha-asc:before{content:\"\\f15d\"}.fa-sort-alpha-desc:before{content:\"\\f15e\"}.fa-sort-amount-asc:before{content:\"\\f160\"}.fa-sort-amount-desc:before{content:\"\\f161\"}.fa-sort-numeric-asc:before{content:\"\\f162\"}.fa-sort-numeric-desc:before{content:\"\\f163\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-youtube-square:before{content:\"\\f166\"}.fa-youtube:before{content:\"\\f167\"}.fa-xing:before{content:\"\\f168\"}.fa-xing-square:before{content:\"\\f169\"}.fa-youtube-play:before{content:\"\\f16a\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-instagram:before{content:\"\\f16d\"}.fa-flickr:before{content:\"\\f16e\"}.fa-adn:before{content:\"\\f170\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-bitbucket-square:before{content:\"\\f172\"}.fa-tumblr:before{content:\"\\f173\"}.fa-tumblr-square:before{content:\"\\f174\"}.fa-long-arrow-down:before{content:\"\\f175\"}.fa-long-arrow-up:before{content:\"\\f176\"}.fa-long-arrow-left:before{content:\"\\f177\"}.fa-long-arrow-right:before{content:\"\\f178\"}.fa-apple:before{content:\"\\f179\"}.fa-windows:before{content:\"\\f17a\"}.fa-android:before{content:\"\\f17b\"}.fa-linux:before{content:\"\\f17c\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-skype:before{content:\"\\f17e\"}.fa-foursquare:before{content:\"\\f180\"}.fa-trello:before{content:\"\\f181\"}.fa-female:before{content:\"\\f182\"}.fa-male:before{content:\"\\f183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\f184\"}.fa-sun-o:before{content:\"\\f185\"}.fa-moon-o:before{content:\"\\f186\"}.fa-archive:before{content:\"\\f187\"}.fa-bug:before{content:\"\\f188\"}.fa-vk:before{content:\"\\f189\"}.fa-weibo:before{content:\"\\f18a\"}.fa-renren:before{content:\"\\f18b\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-arrow-circle-o-right:before{content:\"\\f18e\"}.fa-arrow-circle-o-left:before{content:\"\\f190\"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:\"\\f191\"}.fa-dot-circle-o:before{content:\"\\f192\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-vimeo-square:before{content:\"\\f194\"}.fa-turkish-lira:before,.fa-try:before{content:\"\\f195\"}.fa-plus-square-o:before{content:\"\\f196\"}.fa-space-shuttle:before{content:\"\\f197\"}.fa-slack:before{content:\"\\f198\"}.fa-envelope-square:before{content:\"\\f199\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-openid:before{content:\"\\f19b\"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:\"\\f19c\"}.fa-mortar-board:before,.fa-graduation-cap:before{content:\"\\f19d\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-google:before{content:\"\\f1a0\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-reddit-square:before{content:\"\\f1a2\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-digg:before{content:\"\\f1a6\"}.fa-pied-piper-pp:before{content:\"\\f1a7\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-language:before{content:\"\\f1ab\"}.fa-fax:before{content:\"\\f1ac\"}.fa-building:before{content:\"\\f1ad\"}.fa-child:before{content:\"\\f1ae\"}.fa-paw:before{content:\"\\f1b0\"}.fa-spoon:before{content:\"\\f1b1\"}.fa-cube:before{content:\"\\f1b2\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-behance:before{content:\"\\f1b4\"}.fa-behance-square:before{content:\"\\f1b5\"}.fa-steam:before{content:\"\\f1b6\"}.fa-steam-square:before{content:\"\\f1b7\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-automobile:before,.fa-car:before{content:\"\\f1b9\"}.fa-cab:before,.fa-taxi:before{content:\"\\f1ba\"}.fa-tree:before{content:\"\\f1bb\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-database:before{content:\"\\f1c0\"}.fa-file-pdf-o:before{content:\"\\f1c1\"}.fa-file-word-o:before{content:\"\\f1c2\"}.fa-file-excel-o:before{content:\"\\f1c3\"}.fa-file-powerpoint-o:before{content:\"\\f1c4\"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:\"\\f1c5\"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:\"\\f1c6\"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:\"\\f1c7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\f1c8\"}.fa-file-code-o:before{content:\"\\f1c9\"}.fa-vine:before{content:\"\\f1ca\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:\"\\f1cd\"}.fa-circle-o-notch:before{content:\"\\f1ce\"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:\"\\f1d0\"}.fa-ge:before,.fa-empire:before{content:\"\\f1d1\"}.fa-git-square:before{content:\"\\f1d2\"}.fa-git:before{content:\"\\f1d3\"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:\"\\f1d4\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-qq:before{content:\"\\f1d6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\f1d7\"}.fa-send:before,.fa-paper-plane:before{content:\"\\f1d8\"}.fa-send-o:before,.fa-paper-plane-o:before{content:\"\\f1d9\"}.fa-history:before{content:\"\\f1da\"}.fa-circle-thin:before{content:\"\\f1db\"}.fa-header:before{content:\"\\f1dc\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-sliders:before{content:\"\\f1de\"}.fa-share-alt:before{content:\"\\f1e0\"}.fa-share-alt-square:before{content:\"\\f1e1\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:\"\\f1e3\"}.fa-tty:before{content:\"\\f1e4\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-plug:before{content:\"\\f1e6\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-newspaper-o:before{content:\"\\f1ea\"}.fa-wifi:before{content:\"\\f1eb\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-bell-slash-o:before{content:\"\\f1f7\"}.fa-trash:before{content:\"\\f1f8\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-at:before{content:\"\\f1fa\"}.fa-eyedropper:before{content:\"\\f1fb\"}.fa-paint-brush:before{content:\"\\f1fc\"}.fa-birthday-cake:before{content:\"\\f1fd\"}.fa-area-chart:before{content:\"\\f1fe\"}.fa-pie-chart:before{content:\"\\f200\"}.fa-line-chart:before{content:\"\\f201\"}.fa-lastfm:before{content:\"\\f202\"}.fa-lastfm-square:before{content:\"\\f203\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-bicycle:before{content:\"\\f206\"}.fa-bus:before{content:\"\\f207\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-angellist:before{content:\"\\f209\"}.fa-cc:before{content:\"\\f20a\"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:\"\\f20b\"}.fa-meanpath:before{content:\"\\f20c\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-dashcube:before{content:\"\\f210\"}.fa-forumbee:before{content:\"\\f211\"}.fa-leanpub:before{content:\"\\f212\"}.fa-sellsy:before{content:\"\\f213\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-diamond:before{content:\"\\f219\"}.fa-ship:before{content:\"\\f21a\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-street-view:before{content:\"\\f21d\"}.fa-heartbeat:before{content:\"\\f21e\"}.fa-venus:before{content:\"\\f221\"}.fa-mars:before{content:\"\\f222\"}.fa-mercury:before{content:\"\\f223\"}.fa-intersex:before,.fa-transgender:before{content:\"\\f224\"}.fa-transgender-alt:before{content:\"\\f225\"}.fa-venus-double:before{content:\"\\f226\"}.fa-mars-double:before{content:\"\\f227\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-mars-stroke-h:before{content:\"\\f22b\"}.fa-neuter:before{content:\"\\f22c\"}.fa-genderless:before{content:\"\\f22d\"}.fa-facebook-official:before{content:\"\\f230\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-server:before{content:\"\\f233\"}.fa-user-plus:before{content:\"\\f234\"}.fa-user-times:before{content:\"\\f235\"}.fa-hotel:before,.fa-bed:before{content:\"\\f236\"}.fa-viacoin:before{content:\"\\f237\"}.fa-train:before{content:\"\\f238\"}.fa-subway:before{content:\"\\f239\"}.fa-medium:before{content:\"\\f23a\"}.fa-yc:before,.fa-y-combinator:before{content:\"\\f23b\"}.fa-optin-monster:before{content:\"\\f23c\"}.fa-opencart:before{content:\"\\f23d\"}.fa-expeditedssl:before{content:\"\\f23e\"}.fa-battery-4:before,.fa-battery-full:before{content:\"\\f240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\\f242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\\f243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\f244\"}.fa-mouse-pointer:before{content:\"\\f245\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-object-group:before{content:\"\\f247\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-sticky-note:before{content:\"\\f249\"}.fa-sticky-note-o:before{content:\"\\f24a\"}.fa-cc-jcb:before{content:\"\\f24b\"}.fa-cc-diners-club:before{content:\"\\f24c\"}.fa-clone:before{content:\"\\f24d\"}.fa-balance-scale:before{content:\"\\f24e\"}.fa-hourglass-o:before{content:\"\\f250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\f251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\f252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\f253\"}.fa-hourglass:before{content:\"\\f254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\\f255\"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:\"\\f256\"}.fa-hand-scissors-o:before{content:\"\\f257\"}.fa-hand-lizard-o:before{content:\"\\f258\"}.fa-hand-spock-o:before{content:\"\\f259\"}.fa-hand-pointer-o:before{content:\"\\f25a\"}.fa-hand-peace-o:before{content:\"\\f25b\"}.fa-trademark:before{content:\"\\f25c\"}.fa-registered:before{content:\"\\f25d\"}.fa-creative-commons:before{content:\"\\f25e\"}.fa-gg:before{content:\"\\f260\"}.fa-gg-circle:before{content:\"\\f261\"}.fa-tripadvisor:before{content:\"\\f262\"}.fa-odnoklassniki:before{content:\"\\f263\"}.fa-odnoklassniki-square:before{content:\"\\f264\"}.fa-get-pocket:before{content:\"\\f265\"}.fa-wikipedia-w:before{content:\"\\f266\"}.fa-safari:before{content:\"\\f267\"}.fa-chrome:before{content:\"\\f268\"}.fa-firefox:before{content:\"\\f269\"}.fa-opera:before{content:\"\\f26a\"}.fa-internet-explorer:before{content:\"\\f26b\"}.fa-tv:before,.fa-television:before{content:\"\\f26c\"}.fa-contao:before{content:\"\\f26d\"}.fa-500px:before{content:\"\\f26e\"}.fa-amazon:before{content:\"\\f270\"}.fa-calendar-plus-o:before{content:\"\\f271\"}.fa-calendar-minus-o:before{content:\"\\f272\"}.fa-calendar-times-o:before{content:\"\\f273\"}.fa-calendar-check-o:before{content:\"\\f274\"}.fa-industry:before{content:\"\\f275\"}.fa-map-pin:before{content:\"\\f276\"}.fa-map-signs:before{content:\"\\f277\"}.fa-map-o:before{content:\"\\f278\"}.fa-map:before{content:\"\\f279\"}.fa-commenting:before{content:\"\\f27a\"}.fa-commenting-o:before{content:\"\\f27b\"}.fa-houzz:before{content:\"\\f27c\"}.fa-vimeo:before{content:\"\\f27d\"}.fa-black-tie:before{content:\"\\f27e\"}.fa-fonticons:before{content:\"\\f280\"}.fa-reddit-alien:before{content:\"\\f281\"}.fa-edge:before{content:\"\\f282\"}.fa-credit-card-alt:before{content:\"\\f283\"}.fa-codiepie:before{content:\"\\f284\"}.fa-modx:before{content:\"\\f285\"}.fa-fort-awesome:before{content:\"\\f286\"}.fa-usb:before{content:\"\\f287\"}.fa-product-hunt:before{content:\"\\f288\"}.fa-mixcloud:before{content:\"\\f289\"}.fa-scribd:before{content:\"\\f28a\"}.fa-pause-circle:before{content:\"\\f28b\"}.fa-pause-circle-o:before{content:\"\\f28c\"}.fa-stop-circle:before{content:\"\\f28d\"}.fa-stop-circle-o:before{content:\"\\f28e\"}.fa-shopping-bag:before{content:\"\\f290\"}.fa-shopping-basket:before{content:\"\\f291\"}.fa-hashtag:before{content:\"\\f292\"}.fa-bluetooth:before{content:\"\\f293\"}.fa-bluetooth-b:before{content:\"\\f294\"}.fa-percent:before{content:\"\\f295\"}.fa-gitlab:before{content:\"\\f296\"}.fa-wpbeginner:before{content:\"\\f297\"}.fa-wpforms:before{content:\"\\f298\"}.fa-envira:before{content:\"\\f299\"}.fa-universal-access:before{content:\"\\f29a\"}.fa-wheelchair-alt:before{content:\"\\f29b\"}.fa-question-circle-o:before{content:\"\\f29c\"}.fa-blind:before{content:\"\\f29d\"}.fa-audio-description:before{content:\"\\f29e\"}.fa-volume-control-phone:before{content:\"\\f2a0\"}.fa-braille:before{content:\"\\f2a1\"}.fa-assistive-listening-systems:before{content:\"\\f2a2\"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:\"\\f2a3\"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:\"\\f2a4\"}.fa-glide:before{content:\"\\f2a5\"}.fa-glide-g:before{content:\"\\f2a6\"}.fa-signing:before,.fa-sign-language:before{content:\"\\f2a7\"}.fa-low-vision:before{content:\"\\f2a8\"}.fa-viadeo:before{content:\"\\f2a9\"}.fa-viadeo-square:before{content:\"\\f2aa\"}.fa-snapchat:before{content:\"\\f2ab\"}.fa-snapchat-ghost:before{content:\"\\f2ac\"}.fa-snapchat-square:before{content:\"\\f2ad\"}.fa-pied-piper:before{content:\"\\f2ae\"}.fa-first-order:before{content:\"\\f2b0\"}.fa-yoast:before{content:\"\\f2b1\"}.fa-themeisle:before{content:\"\\f2b2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\\f2b3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\\f2b4\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}\n"

/***/ }),

/***/ "./src/assets/login_css/vendors/nprogress/nprogress.css":
/*!**************************************************************!*\
  !*** ./src/assets/login_css/vendors/nprogress/nprogress.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Make clicks pass-through */\n#nprogress {\n  pointer-events: none;\n}\n#nprogress .bar {\n  background: #29d;\n\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 2px;\n}\n/* Fancy blur effect */\n#nprogress .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n  opacity: 1.0;\n\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\n          transform: rotate(3deg) translate(0px, -4px);\n}\n/* Remove these to get rid of the spinner */\n#nprogress .spinner {\n  display: block;\n  position: fixed;\n  z-index: 1031;\n  top: 15px;\n  right: 15px;\n}\n#nprogress .spinner-icon {\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box;\n\n  border: solid 2px transparent;\n  border-top-color: #29d;\n  border-left-color: #29d;\n  border-radius: 50%;\n\n  -webkit-animation: nprogress-spinner 400ms linear infinite;\n          animation: nprogress-spinner 400ms linear infinite;\n}\n.nprogress-custom-parent {\n  overflow: hidden;\n  position: relative;\n}\n.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar {\n  position: absolute;\n}\n@-webkit-keyframes nprogress-spinner {\n  0%   { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n@keyframes nprogress-spinner {\n  0%   { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n"

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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/thewproject/thewfrontnew/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map