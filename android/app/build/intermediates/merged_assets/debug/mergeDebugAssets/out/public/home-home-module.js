(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            Home\r\n        </ion-title>\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"SettingsButtonClick()\">\r\n                <ion-icon name=\"settings\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button color={{net_color_status}} slot=\"secondary\">\r\n                {{net_title}}\r\n            </ion-button>\r\n\r\n        </ion-buttons>\r\n\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-img src=\"../../assets/img/bg.png\"></ion-img>\r\n    <ion-grid>\r\n        <ion-row size=\"6\">\r\n            <ion-col>\r\n                <ion-card>\r\n                    <ion-button expand=\"block\" justify-content-center fill=\"outline\" (click)=SearchButtonClick()>\r\n                        <ion-icon slot=\"start\" name=\"search\"></ion-icon>Browse Recipes and Snacks</ion-button>\r\n\r\n                </ion-card>\r\n\r\n                <ion-card>\r\n                    <ion-button expand=\"block\" justify-content-center fill=\"outline\" (click)=\"ngOnInit()\">\r\n                        <ion-icon slot=\"start\" name=\"list\"></ion-icon>View Bookmarked Recipes</ion-button>\r\n                    <ion-item *ngFor=\"let recipe of fav_recipes\">\r\n                        {{recipe[0]}}\r\n                    </ion-item>\r\n                </ion-card>\r\n                <ion-card>\r\n                    <ion-button expand=\"block\" justify-content-center fill=\"outline\" (click)=ResourcesButtonClick()>\r\n                        <ion-icon slot=\"start\" name=\"link\"></ion-icon>Campus Resources</ion-button>\r\n                </ion-card>\r\n                <!--<ion-card><ion-button expand=\"block\" justify-content-center fill=\"outline\" (click)=SettingsButtonClick()> \r\n                <ion-icon  slot=\"start\" name=\"settings\"></ion-icon>Account and Settings</ion-button></ion-card>\r\n                -->\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.no-padding {\n  padding: 0px !important; }\n\n.bg {\n  background: url('bg.png'); }\n\n.login {\n  background: #0f7fd4;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  width: 100%;\n  height: 246px;\n  margin: auto;\n  z-index: 2;\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGFkZm95XFxpb25pY19BcHBcXGJyb25jby1udXRyaXRpb24yL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFJbEI7RUFDRSx1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSx5QkFBMEMsRUFBQTs7QUFHNUM7RUFFRSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5cclxuLm5vLXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmd7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL3Jlc291cmNlcy9iZy5wbmcpO1xyXG59XHJcblxyXG4ubG9naW4ge1xyXG4gIC8vYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL3Jlc291cmNlcy9iZy5wbmcpO1xyXG4gIGJhY2tncm91bmQ6ICMwZjdmZDQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjQ2cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(menuCtrl, navCtrl, afAuth) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.fav_recipes = [];
        this.native = new _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"]();
    }
    HomePage.prototype.SearchButtonClick = function () {
        this.navCtrl.navigateForward('browse');
    };
    HomePage.prototype.ListButtonClick = function () {
        this.navCtrl.navigateForward('recipelist');
    };
    HomePage.prototype.ResourcesButtonClick = function () {
        this.navCtrl.navigateForward('resources');
    };
    HomePage.prototype.SettingsButtonClick = function () {
        this.navCtrl.navigateForward('settings');
    };
    HomePage.prototype.ngOnInit = function () {
        this.recipes = localStorage.getItem(this.afAuth.user.email);
        if (this.recipes) {
            this.fav_recipes = JSON.parse(this.recipes);
        }
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map