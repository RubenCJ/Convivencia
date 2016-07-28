"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var servicio_datos_base_1 = require('../compartido/data-service/servicio-datos-base');
var Login = (function (_super) {
    __extends(Login, _super);
    /**
      * Constructor de la clase.
      * @param http  Servicio para manejo de periciones HTTP.
      */
    function Login(router, http) {
        _super.call(this, http);
        this.router = router;
    }
    Login.prototype.login = function (event, username, password) {
        var _this = this;
        event.preventDefault();
        var headers = _super.prototype.obtenerHeadersPorDefecto.call(this);
        var body = JSON.stringify({ username: username, password: password });
        this.http.post('http://localhost:3001/sessions/create', body, { headers: headers })
            .subscribe(function (response) {
            localStorage.setItem('id_token', response.json().id_token);
            var usuario = _super.prototype.extraerRespuesta.call(_this, response);
            _this.router.navigate(['/home']);
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    Login = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], Login);
    return Login;
}(servicio_datos_base_1.ServicioDatosBase));
exports.Login = Login;
//# sourceMappingURL=login.componente.js.map