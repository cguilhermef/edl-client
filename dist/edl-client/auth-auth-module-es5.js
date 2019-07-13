(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/containers/activate-email/activate-email.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/containers/activate-email/activate-email.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar\n  class=\"progress-bar\"\n  mode=\"indeterminate\"\n  color=\"primary\"></mat-progress-bar>\n<div class=\"main__content\">\n  <div class=\"main__header\">\n    <h2 class=\"main__title\">Confirmando seu email...</h2>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/containers/create-account/create-account.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/containers/create-account/create-account.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar\r\n  class=\"progress-bar\"\r\n  mode=\"indeterminate\"\r\n  color=\"primary\"\r\n  *ngIf=\"processing\"></mat-progress-bar>\r\n<div class=\"main__content\">\r\n  <div class=\"main__header\">\r\n    <h2 class=\"main__title\">Criar conta</h2>\r\n  </div>\r\n  <mat-card>\r\n<!--    <mat-card-title>Dados de cadastro</mat-card-title>-->\r\n\r\n    <form [formGroup]=\"form\">\r\n      <mat-grid-list cols=\"1\" rowHeight=\"81px\">\r\n        <mat-grid-tile>\r\n          <mat-form-field appearance=\"fill\" class=\"fullwidth\">\r\n            <mat-label>Nome</mat-label>\r\n            <input matInput placeholder=\"Nome e sobrenome\" formControlName=\"name\">\r\n          </mat-form-field>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n          <mat-form-field appearance=\"fill\" class=\"fullwidth\">\r\n            <mat-label>Email</mat-label>\r\n            <input type=\"email\" matInput placeholder=\"Email\" formControlName=\"email\">\r\n          </mat-form-field>\r\n        </mat-grid-tile>\r\n      </mat-grid-list>\r\n      <mat-grid-list cols=\"2\" rowHeight=\"81px\" gutterSize=\"16px\">\r\n        <mat-grid-tile>\r\n          <mat-form-field appearance=\"fill\" class=\"fullwidth\">\r\n            <mat-label>Senha</mat-label>\r\n            <input type=\"password\" matInput placeholder=\"Senha\" formControlName=\"password\">\r\n          </mat-form-field>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n          <mat-form-field appearance=\"fill\" class=\"fullwidth\">\r\n            <mat-label>Confirmar senha</mat-label>\r\n            <input type=\"password\" matInput placeholder=\"Informe novamente\" formControlName=\"confirm\">\r\n          </mat-form-field>\r\n        </mat-grid-tile>\r\n      </mat-grid-list>\r\n    </form>\r\n    <mat-card-actions align=\"end\">\r\n      <button mat-button\r\n              color=\"primary\"\r\n              [routerLink]=\"['/account', 'login']\">Login</button>\r\n      <button mat-raised-button\r\n              color=\"primary\"\r\n              (click)=\"create()\">Cadastrar</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/containers/forgot-password/forgot-password.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/containers/forgot-password/forgot-password.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar\r\n  class=\"progress-bar\"\r\n  mode=\"indeterminate\"\r\n  color=\"primary\"\r\n  *ngIf=\"processing\"></mat-progress-bar>\r\n<div class=\"main__content\">\r\n  <div class=\"main__header\">\r\n    <h2 class=\"main__title\">Esqueci minha senha</h2>\r\n  </div>\r\n  <mat-card>\r\n    <mat-card-subtitle>Informe seu email de cadastro</mat-card-subtitle>\r\n    <form [formGroup]=\"form\">\r\n      <mat-grid-list cols=\"1\" rowHeight=\"81px\">\r\n        <mat-grid-tile>\r\n          <mat-form-field appearance=\"fill\" class=\"fullwidth\">\r\n            <mat-label>Email</mat-label>\r\n            <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n          </mat-form-field>\r\n        </mat-grid-tile>\r\n      </mat-grid-list>\r\n    </form>\r\n    <mat-card-actions align=\"end\">\r\n      <button mat-button [routerLink]=\"['/account', 'login']\" color=\"primary\">Login</button>\r\n      <button mat-raised-button\r\n              color=\"primary\"\r\n              (click)=\"send()\">Entrar</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/containers/link-account/link-account.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/containers/link-account/link-account.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar\n  class=\"progress-bar\"\n  mode=\"indeterminate\"\n  color=\"primary\"\n  *ngIf=\"processing\"></mat-progress-bar>\n<div class=\"main__content\">\n  <div class=\"main__header\">\n    <h2 class=\"main__title\">Vincular conta</h2>\n  </div>\n  <mat-card>\n    <mat-card-content>\n      Agora vamos vincular sua conta a um perfil válido no jogo. <br>\n      Abaixo, informe seu nome de invocador - aquele que as pessoas veem no jogo - para verificarmos se o perfil existe.\n    </mat-card-content>\n    <form [formGroup]=\"form\">\n      <mat-grid-list cols=\"1\" rowHeight=\"81px\">\n         <mat-grid-tile>\n           <mat-form-field appearance=\"fill\" class=\"fullwidth\">\n             <mat-label>Invocador</mat-label>\n             <input matInput placeholder=\"Nome de invocador\" formControlName=\"summoner\">\n           </mat-form-field>\n         </mat-grid-tile>\n      </mat-grid-list>\n    </form>\n    <mat-card-actions align=\"end\" *ngIf=\"!iconId\">\n      <button mat-raised-button\n              color=\"primary\"\n              (click)=\"register()\">Vincular</button>\n    </mat-card-actions>\n    <ng-container *ngIf=\"urlIcon\">\n      <mat-card-content>\n        Agora, acesse sua conta no LoL e coloque o ícone abaixo como ícone da conta. Depois, clique em verificar\n      </mat-card-content>\n      <div class=\"profile-icon\">\n        <img [src]=\"urlIcon\" alt=\"\" class=\"profile-icon__image\">\n      </div>\n      <mat-card-actions align=\"end\">\n        <button mat-raised-button\n                color=\"primary\"\n                (click)=\"verify()\">Verificar</button>\n      </mat-card-actions>\n    </ng-container>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/containers/login/login.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/containers/login/login.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar\r\n  class=\"progress-bar\"\r\n  mode=\"indeterminate\"\r\n  color=\"primary\"\r\n  *ngIf=\"processing\"></mat-progress-bar>\r\n<div class=\"main__content\">\r\n  <div class=\"main__header\">\r\n    <h2 class=\"main__title\">Login</h2>\r\n  </div>\r\n  <mat-card>\r\n    <form [formGroup]=\"form\">\r\n      <mat-grid-list cols=\"1\" rowHeight=\"81px\">\r\n        <mat-grid-tile>\r\n          <mat-form-field appearance=\"fill\" class=\"fullwidth\">\r\n            <mat-label>Email</mat-label>\r\n            <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n          </mat-form-field>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n          <mat-form-field appearance=\"fill\" class=\"fullwidth\">\r\n            <mat-label>Senha</mat-label>\r\n            <input type=\"password\" matInput placeholder=\"Senha\" formControlName=\"password\">\r\n          </mat-form-field>\r\n        </mat-grid-tile>\r\n      </mat-grid-list>\r\n    </form>\r\n    <mat-card-actions align=\"end\">\r\n      <button mat-button [routerLink]=\"['/account', 'forgot-password']\" color=\"primary\">Esqueci minha senha</button>\r\n      <button mat-raised-button color=\"primary\" (click)=\"login()\">Entrar</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/containers/recovery-password/recovery-password.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/containers/recovery-password/recovery-password.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar\r\n  class=\"progress-bar\"\r\n  mode=\"indeterminate\"\r\n  color=\"primary\"\r\n  *ngIf=\"processing\"></mat-progress-bar>\r\n<div class=\"main__content\">\r\n  <div class=\"main__header\">\r\n    <h2 class=\"main__title\">Criar nova senha</h2>\r\n  </div>\r\n  <mat-card>\r\n    <form [formGroup]=\"form\">\r\n      <mat-grid-list cols=\"1\" rowHeight=\"81px\">\r\n        <mat-grid-tile>\r\n          <mat-form-field appearance=\"fill\" class=\"fullwidth\">\r\n            <mat-label>Senha</mat-label>\r\n            <input type=\"password\" matInput placeholder=\"Senha\" formControlName=\"password\">\r\n          </mat-form-field>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n          <mat-form-field appearance=\"fill\" class=\"fullwidth\">\r\n            <mat-label>Confirmar senha</mat-label>\r\n            <input type=\"password\" matInput placeholder=\"Repita a senha\" formControlName=\"confirm\">\r\n          </mat-form-field>\r\n        </mat-grid-tile>\r\n      </mat-grid-list>\r\n    </form>\r\n    <mat-card-actions align=\"end\">\r\n      <button mat-raised-button\r\n              color=\"primary\"\r\n              (click)=\"send()\">Concluir</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_auth_containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/auth/containers */ "./src/app/auth/containers/index.ts");
/* harmony import */ var _app_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_guards */ "./src/app/_guards/index.ts");





var routes = [
    {
        path: 'activate',
        component: _app_auth_containers__WEBPACK_IMPORTED_MODULE_3__["ActivateEmailComponent"],
        canActivate: [_app_guards__WEBPACK_IMPORTED_MODULE_4__["NonAuthenticatedGuard"]]
    },
    {
        path: 'link-account',
        component: _app_auth_containers__WEBPACK_IMPORTED_MODULE_3__["LinkAccountComponent"],
        canActivate: [_app_guards__WEBPACK_IMPORTED_MODULE_4__["AuthenticatedGuard"]]
    },
    {
        path: 'register',
        component: _app_auth_containers__WEBPACK_IMPORTED_MODULE_3__["CreateAccountComponent"],
        canActivate: [_app_guards__WEBPACK_IMPORTED_MODULE_4__["NonAuthenticatedGuard"]]
    },
    {
        path: 'forgot-password',
        component: _app_auth_containers__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"],
        canActivate: [_app_guards__WEBPACK_IMPORTED_MODULE_4__["NonAuthenticatedGuard"]]
    },
    {
        path: 'recovery-password',
        component: _app_auth_containers__WEBPACK_IMPORTED_MODULE_3__["RecoveryPasswordComponent"],
        canActivate: [_app_guards__WEBPACK_IMPORTED_MODULE_4__["NonAuthenticatedGuard"]]
    },
    {
        path: 'login',
        component: _app_auth_containers__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        canActivate: [_app_guards__WEBPACK_IMPORTED_MODULE_4__["NonAuthenticatedGuard"]]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "./src/app/auth/containers/index.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _containers_recovery_password_recovery_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/recovery-password/recovery-password.component */ "./src/app/auth/containers/recovery-password/recovery-password.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _containers_activate_email_activate_email_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/activate-email/activate-email.component */ "./src/app/auth/containers/activate-email/activate-email.component.ts");
/* harmony import */ var _containers_link_account_link_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/link-account/link-account.component */ "./src/app/auth/containers/link-account/link-account.component.ts");










var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _containers__WEBPACK_IMPORTED_MODULE_3__["CreateAccountComponent"],
                _containers__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _containers__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"],
                _containers_recovery_password_recovery_password_component__WEBPACK_IMPORTED_MODULE_6__["RecoveryPasswordComponent"],
                _containers_activate_email_activate_email_component__WEBPACK_IMPORTED_MODULE_8__["ActivateEmailComponent"],
                _containers_link_account_link_account_component__WEBPACK_IMPORTED_MODULE_9__["LinkAccountComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/containers/activate-email/activate-email.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/auth/containers/activate-email/activate-email.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29udGFpbmVycy9hY3RpdmF0ZS1lbWFpbC9hY3RpdmF0ZS1lbWFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/containers/activate-email/activate-email.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/auth/containers/activate-email/activate-email.component.ts ***!
  \****************************************************************************/
/*! exports provided: ActivateEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateEmailComponent", function() { return ActivateEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");





var ActivateEmailComponent = /** @class */ (function () {
    function ActivateEmailComponent(route, router, service, snackbar) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.snackbar = snackbar;
    }
    ActivateEmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParamMap.subscribe(function (params) {
            _this.token = params.get('token');
            _this.service.confirmEmail(_this.token)
                .subscribe(function (response) {
                _this.snackbar.open('Email confirmado com sucesso!', 'Ok', {
                    duration: 3000
                });
                _this.router.navigate(['/account', 'login']);
            });
        });
    };
    ActivateEmailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AccountService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
    ]; };
    ActivateEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'edl-activate-email',
            template: __webpack_require__(/*! raw-loader!./activate-email.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/containers/activate-email/activate-email.component.html"),
            styles: [__webpack_require__(/*! ./activate-email.component.scss */ "./src/app/auth/containers/activate-email/activate-email.component.scss")]
        })
    ], ActivateEmailComponent);
    return ActivateEmailComponent;
}());



/***/ }),

/***/ "./src/app/auth/containers/activate-email/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/auth/containers/activate-email/index.ts ***!
  \*********************************************************/
/*! exports provided: ActivateEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activate_email_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activate-email.component */ "./src/app/auth/containers/activate-email/activate-email.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivateEmailComponent", function() { return _activate_email_component__WEBPACK_IMPORTED_MODULE_0__["ActivateEmailComponent"]; });




/***/ }),

/***/ "./src/app/auth/containers/create-account/create-account.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/auth/containers/create-account/create-account.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb250YWluZXJzL2NyZWF0ZS1hY2NvdW50L0M6XFxkZXZcXGVkbC1jbGllbnQvc3JjXFxhcHBcXGF1dGhcXGNvbnRhaW5lcnNcXGNyZWF0ZS1hY2NvdW50XFxjcmVhdGUtYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9jb250YWluZXJzL2NyZWF0ZS1hY2NvdW50L2NyZWF0ZS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jb250YWluZXJzL2NyZWF0ZS1hY2NvdW50L2NyZWF0ZS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/auth/containers/create-account/create-account.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/auth/containers/create-account/create-account.component.ts ***!
  \****************************************************************************/
/*! exports provided: CreateAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountComponent", function() { return CreateAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var CreateAccountComponent = /** @class */ (function () {
    function CreateAccountComponent(fb, router, service, snackbar) {
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.snackbar = snackbar;
        this.processing = false;
    }
    CreateAccountComponent.prototype.ngOnDestroy = function () {
        this.processing = false;
        this.form.reset({});
    };
    CreateAccountComponent.prototype.ngOnInit = function () {
        this.setupForm();
    };
    CreateAccountComponent.prototype.create = function () {
        var _this = this;
        if (this.form.invalid) {
            return;
        }
        var _a = this.form.value, name = _a.name, email = _a.email, password = _a.password, confirm = _a.confirm;
        if (password !== confirm) {
            return;
        }
        this.processing = true;
        this.form.disable();
        this.service.create({ name: name, email: email, password: password })
            .subscribe(function (response) {
            _this.snackbar.open('Conta criada! Verifique seu email', 'Ok', {
                duration: 0
            });
            _this.router.navigate(['/vacancies']);
        }, function () {
            _this.snackbar.open('Ocorreu um erro. Tente novamente!', 'Ok');
            _this.form.enable();
            _this.processing = false;
        });
    };
    CreateAccountComponent.prototype.setupForm = function () {
        this.form = this.fb.group({
            name: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
            email: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            confirm: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    CreateAccountComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
    ]; };
    CreateAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'edl-create-account',
            template: __webpack_require__(/*! raw-loader!./create-account.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/containers/create-account/create-account.component.html"),
            styles: [__webpack_require__(/*! ./create-account.component.scss */ "./src/app/auth/containers/create-account/create-account.component.scss")]
        })
    ], CreateAccountComponent);
    return CreateAccountComponent;
}());



/***/ }),

/***/ "./src/app/auth/containers/create-account/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/auth/containers/create-account/index.ts ***!
  \*********************************************************/
/*! exports provided: CreateAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-account.component */ "./src/app/auth/containers/create-account/create-account.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateAccountComponent", function() { return _create_account_component__WEBPACK_IMPORTED_MODULE_0__["CreateAccountComponent"]; });




/***/ }),

/***/ "./src/app/auth/containers/forgot-password/forgot-password.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/auth/containers/forgot-password/forgot-password.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb250YWluZXJzL2ZvcmdvdC1wYXNzd29yZC9DOlxcZGV2XFxlZGwtY2xpZW50L3NyY1xcYXBwXFxhdXRoXFxjb250YWluZXJzXFxmb3Jnb3QtcGFzc3dvcmRcXGZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9jb250YWluZXJzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2NvbnRhaW5lcnMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/containers/forgot-password/forgot-password.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/auth/containers/forgot-password/forgot-password.component.ts ***!
  \******************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(authService, fb, snackbar, router) {
        this.authService = authService;
        this.fb = fb;
        this.snackbar = snackbar;
        this.router = router;
        this.processing = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.setupForm();
    };
    ForgotPasswordComponent.prototype.send = function () {
        var _this = this;
        if (this.form.invalid) {
            return;
        }
        this.form.disable();
        var email = this.form.value.email;
        this.processing = true;
        this.authService.forgot(email)
            .subscribe(function () {
            _this.processing = false;
            _this.snackbar.open('Enviamos um email para você');
            _this.router.navigate(['/vacancies']);
        }, function (err) {
            _this.processing = false;
            _this.form.enable();
            _this.snackbar.open('Ocorreu um erro. Verifique o email informado', 'Ok');
        });
    };
    ForgotPasswordComponent.prototype.setupForm = function () {
        this.form = this.fb.group({
            email: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])
        });
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'edl-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/containers/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/auth/containers/forgot-password/forgot-password.component.scss")]
        })
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/auth/containers/forgot-password/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/containers/forgot-password/index.ts ***!
  \**********************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.component */ "./src/app/auth/containers/forgot-password/forgot-password.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return _forgot_password_component__WEBPACK_IMPORTED_MODULE_0__["ForgotPasswordComponent"]; });




/***/ }),

/***/ "./src/app/auth/containers/index.ts":
/*!******************************************!*\
  !*** ./src/app/auth/containers/index.ts ***!
  \******************************************/
/*! exports provided: ActivateEmailComponent, LinkAccountComponent, RecoveryPasswordComponent, CreateAccountComponent, ForgotPasswordComponent, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activate_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activate-email */ "./src/app/auth/containers/activate-email/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivateEmailComponent", function() { return _activate_email__WEBPACK_IMPORTED_MODULE_0__["ActivateEmailComponent"]; });

/* harmony import */ var _create_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-account */ "./src/app/auth/containers/create-account/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateAccountComponent", function() { return _create_account__WEBPACK_IMPORTED_MODULE_1__["CreateAccountComponent"]; });

/* harmony import */ var _forgot_password__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password */ "./src/app/auth/containers/forgot-password/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return _forgot_password__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"]; });

/* harmony import */ var _link_account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link-account */ "./src/app/auth/containers/link-account/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkAccountComponent", function() { return _link_account__WEBPACK_IMPORTED_MODULE_3__["LinkAccountComponent"]; });

/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login */ "./src/app/auth/containers/login/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]; });

/* harmony import */ var _recovery_password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recovery-password */ "./src/app/auth/containers/recovery-password/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecoveryPasswordComponent", function() { return _recovery_password__WEBPACK_IMPORTED_MODULE_5__["RecoveryPasswordComponent"]; });









/***/ }),

/***/ "./src/app/auth/containers/link-account/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/auth/containers/link-account/index.ts ***!
  \*******************************************************/
/*! exports provided: LinkAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _link_account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link-account.component */ "./src/app/auth/containers/link-account/link-account.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkAccountComponent", function() { return _link_account_component__WEBPACK_IMPORTED_MODULE_0__["LinkAccountComponent"]; });




/***/ }),

/***/ "./src/app/auth/containers/link-account/link-account.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/auth/containers/link-account/link-account.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n}\n\n.profile-icon {\n  border: 3px solid rgba(0, 0, 0, 0.38);\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 64px;\n  display: -webkit-box;\n  display: flex;\n  height: 128px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n  margin: 0 auto;\n  width: 128px;\n}\n\n.profile-icon__image {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb250YWluZXJzL2xpbmstYWNjb3VudC9DOlxcZGV2XFxlZGwtY2xpZW50L3NyY1xcYXBwXFxhdXRoXFxjb250YWluZXJzXFxsaW5rLWFjY291bnRcXGxpbmstYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9jb250YWluZXJzL2xpbmstYWNjb3VudC9saW5rLWFjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQ0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29udGFpbmVycy9saW5rLWFjY291bnQvbGluay1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pY29uIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzgpO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNjRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTI4cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMTI4cHg7XHJcbn1cclxuLnByb2ZpbGUtaWNvbl9faW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9maWxlLWljb24ge1xuICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA2NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEyOHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMjhweDtcbn1cblxuLnByb2ZpbGUtaWNvbl9faW1hZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/containers/link-account/link-account.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/auth/containers/link-account/link-account.component.ts ***!
  \************************************************************************/
/*! exports provided: LinkAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkAccountComponent", function() { return LinkAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LinkAccountComponent = /** @class */ (function () {
    function LinkAccountComponent(authService, fb, riotService, router, snackbar, service) {
        this.authService = authService;
        this.fb = fb;
        this.riotService = riotService;
        this.router = router;
        this.snackbar = snackbar;
        this.service = service;
        this.processing = false;
    }
    LinkAccountComponent.prototype.ngOnInit = function () {
        this.setupForm();
    };
    Object.defineProperty(LinkAccountComponent.prototype, "urlIcon", {
        get: function () {
            return this.iconId ? this.riotService.urlToIcon(this.iconId) : null;
        },
        enumerable: true,
        configurable: true
    });
    LinkAccountComponent.prototype.register = function () {
        var _this = this;
        if (this.form.invalid) {
            return;
        }
        var summoner = this.form.value.summoner;
        this.processing = true;
        this.form.disable();
        this.service.registerSummoner(summoner)
            .subscribe(function (response) {
            _this.iconId = response.iconId;
            _this.processing = false;
        }, function (err) {
            _this.processing = false;
            _this.form.enable();
        });
    };
    LinkAccountComponent.prototype.verify = function () {
        var _this = this;
        var summoner = this.form.value.summoner;
        this.processing = true;
        this.service.verifySummoner(summoner, this.iconId)
            .subscribe(function (response) {
            _this.authService.setSummonerConfirmed();
            _this.authService.setSummoner(response);
            _this.snackbar.open('Sua conta foi verificada!');
            _this.router.navigate(['/vacancies']);
            _this.processing = false;
        }, function () {
            _this.processing = false;
            _this.snackbar.open('Oops... um erro ocorreu um erro!', 'Ok');
        });
    };
    LinkAccountComponent.prototype.setupForm = function () {
        this.form = this.fb.group({
            summoner: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)])
        });
    };
    LinkAccountComponent.ctorParameters = function () { return [
        { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["RiotService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }
    ]; };
    LinkAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'edl-link-account',
            template: __webpack_require__(/*! raw-loader!./link-account.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/containers/link-account/link-account.component.html"),
            styles: [__webpack_require__(/*! ./link-account.component.scss */ "./src/app/auth/containers/link-account/link-account.component.scss")]
        })
    ], LinkAccountComponent);
    return LinkAccountComponent;
}());



/***/ }),

/***/ "./src/app/auth/containers/login/index.ts":
/*!************************************************!*\
  !*** ./src/app/auth/containers/login/index.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/auth/containers/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/auth/containers/login/login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/auth/containers/login/login.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb250YWluZXJzL2xvZ2luL0M6XFxkZXZcXGVkbC1jbGllbnQvc3JjXFxhcHBcXGF1dGhcXGNvbnRhaW5lcnNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9jb250YWluZXJzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jb250YWluZXJzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/auth/containers/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/containers/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, service, snackbar) {
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.snackbar = snackbar;
        this.processing = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.setupForm();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.form.invalid) {
            return;
        }
        var _a = this.form.value, email = _a.email, password = _a.password;
        this.form.disable();
        this.processing = true;
        this.service.login(email, password)
            .subscribe(function (response) {
            if (!response.account_verified) {
                _this.router.navigate(['/account', 'link-account']);
                return;
            }
            _this.router.navigate(['/vacancies']);
            _this.processing = false;
        }, function () {
            _this.processing = false;
            _this.snackbar.open('Erro! Verifique o email e a senha informados!', 'Ok');
            _this.form.enable();
        });
    };
    LoginComponent.prototype.setupForm = function () {
        this.form = this.fb.group({
            email: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            password: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'edl-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/containers/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/containers/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/containers/recovery-password/index.ts":
/*!************************************************************!*\
  !*** ./src/app/auth/containers/recovery-password/index.ts ***!
  \************************************************************/
/*! exports provided: RecoveryPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recovery_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recovery-password.component */ "./src/app/auth/containers/recovery-password/recovery-password.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecoveryPasswordComponent", function() { return _recovery_password_component__WEBPACK_IMPORTED_MODULE_0__["RecoveryPasswordComponent"]; });




/***/ }),

/***/ "./src/app/auth/containers/recovery-password/recovery-password.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/auth/containers/recovery-password/recovery-password.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb250YWluZXJzL3JlY292ZXJ5LXBhc3N3b3JkL0M6XFxkZXZcXGVkbC1jbGllbnQvc3JjXFxhcHBcXGF1dGhcXGNvbnRhaW5lcnNcXHJlY292ZXJ5LXBhc3N3b3JkXFxyZWNvdmVyeS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9jb250YWluZXJzL3JlY292ZXJ5LXBhc3N3b3JkL3JlY292ZXJ5LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jb250YWluZXJzL3JlY292ZXJ5LXBhc3N3b3JkL3JlY292ZXJ5LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/auth/containers/recovery-password/recovery-password.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/auth/containers/recovery-password/recovery-password.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RecoveryPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryPasswordComponent", function() { return RecoveryPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RecoveryPasswordComponent = /** @class */ (function () {
    function RecoveryPasswordComponent(authService, fb, snackbar, route, router) {
        this.authService = authService;
        this.fb = fb;
        this.snackbar = snackbar;
        this.route = route;
        this.router = router;
        this.processing = false;
    }
    RecoveryPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setupForm();
        this.route.queryParamMap.subscribe(function (params) { return _this.token = params.get('token'); });
    };
    RecoveryPasswordComponent.prototype.send = function () {
        var _this = this;
        if (this.form.invalid) {
            return;
        }
        var _a = this.form.value, password = _a.password, confirm = _a.confirm;
        if (password !== confirm) {
            this.form.get('confirm').setErrors({ invalid: 'As senhas devem ser iguais' });
            return;
        }
        else {
            this.form.get('confirm').setErrors(null);
        }
        this.form.disable();
        this.processing = true;
        this.authService.redefine(password, this.token)
            .subscribe(function () {
            _this.processing = false;
            _this.snackbar.open('Senha alterada com sucesso!');
            _this.router.navigate(['/account', 'login']);
        }, function (err) {
            _this.processing = false;
            _this.form.enable();
            _this.snackbar.open('Ocorreu um erro', 'Ok');
        });
    };
    RecoveryPasswordComponent.prototype.setupForm = function () {
        this.form = this.fb.group({
            password: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            confirm: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    RecoveryPasswordComponent.ctorParameters = function () { return [
        { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    RecoveryPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'edl-recovery-password',
            template: __webpack_require__(/*! raw-loader!./recovery-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/containers/recovery-password/recovery-password.component.html"),
            styles: [__webpack_require__(/*! ./recovery-password.component.scss */ "./src/app/auth/containers/recovery-password/recovery-password.component.scss")]
        })
    ], RecoveryPasswordComponent);
    return RecoveryPasswordComponent;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es5.js.map