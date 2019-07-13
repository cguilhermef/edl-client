(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/_guards/authenticated.guard.ts":
/*!************************************************!*\
  !*** ./src/app/_guards/authenticated.guard.ts ***!
  \************************************************/
/*! exports provided: AuthenticatedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedGuard", function() { return AuthenticatedGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");




var AuthenticatedGuard = /** @class */ (function () {
    function AuthenticatedGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthenticatedGuard.prototype.canActivate = function (next, state) {
        if (!this.authService.isAuthenticated()) {
            this.router.navigateByUrl('/account/login');
            return false;
        }
        return true;
    };
    AuthenticatedGuard.prototype.canActivateChild = function (next, state) {
        return this.canActivate(next, state);
    };
    AuthenticatedGuard.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthenticatedGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthenticatedGuard);
    return AuthenticatedGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthenticatedGuard, NonAuthenticatedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authenticated_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authenticated.guard */ "./src/app/_guards/authenticated.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedGuard", function() { return _authenticated_guard__WEBPACK_IMPORTED_MODULE_0__["AuthenticatedGuard"]; });

/* harmony import */ var _non_authenticated_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./non-authenticated.guard */ "./src/app/_guards/non-authenticated.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NonAuthenticatedGuard", function() { return _non_authenticated_guard__WEBPACK_IMPORTED_MODULE_1__["NonAuthenticatedGuard"]; });





/***/ }),

/***/ "./src/app/_guards/non-authenticated.guard.ts":
/*!****************************************************!*\
  !*** ./src/app/_guards/non-authenticated.guard.ts ***!
  \****************************************************/
/*! exports provided: NonAuthenticatedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonAuthenticatedGuard", function() { return NonAuthenticatedGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");




var NonAuthenticatedGuard = /** @class */ (function () {
    function NonAuthenticatedGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NonAuthenticatedGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isAuthenticated()) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    };
    NonAuthenticatedGuard.prototype.canActivateChild = function (next, state) {
        return this.canActivate(next, state);
    };
    NonAuthenticatedGuard.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    NonAuthenticatedGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NonAuthenticatedGuard);
    return NonAuthenticatedGuard;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map