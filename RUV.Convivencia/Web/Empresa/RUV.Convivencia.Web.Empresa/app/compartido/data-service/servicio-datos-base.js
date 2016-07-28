"use strict";
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
var Observable_1 = require('rxjs/Observable');
/**
 * Clase base para los Servicios de datos.
 */
var ServicioDatosBase = (function () {
    //#region Constructor
    /**
     * Constructor de la clase.
     * @param http Servicio para hacer peticiones HTTP.
     * @param servicioAlertas Servicio para mostrar alertas al usuario
     */
    function ServicioDatosBase(http) {
        this.http = http;
    }
    //#endregion
    //#region Metodos protegidos 
    /**
     * Generar header HTTP por defecto
     * @description Incluye: Content-Type: application/json
     * @returns {Headers}
     */
    ServicioDatosBase.prototype.obtenerHeadersPorDefecto = function () {
        return new http_1.Headers({ 'Content-Type': 'application/json' });
    };
    /**
     * Agrega parametros a una coleccion de {URLSearchParams} validando antes si no son indefinidos.
     * @param parametros Coleccion donde agrega los parametros.
     * @param nombreParametro Nombre del parametro.
     * @param valorParametro valor del parametro.
     */
    ServicioDatosBase.prototype.agregarParametroQueryString = function (parametros, nombreParametro, valorParametro) {
        if (nombreParametro && valorParametro)
            parametros.set(nombreParametro, valorParametro);
    };
    /**
     * Obtiene el objeto devuleto en una respuesta HTTP.
     * @param res Respuesta HTTP.
     * @returns {T} Objeto devuelto
     */
    ServicioDatosBase.prototype.extraerRespuesta = function (res) {
        var body = res.json();
        return (body || {});
    };
    /**
     * Maneja una respuesta HTTP de error logeandola a la consola y a Application isnights y devuleve el error.
     * @param error Respuesta HTTP de error.
     * @returns {ErrorObservable}
     */
    ServicioDatosBase.prototype.manejarError = function (error) {
        var respuesta = error;
        var cuerpoError = respuesta.json();
        var mensajeError = JSON.stringify(cuerpoError);
        console.error(cuerpoError);
        return Observable_1.Observable.throw(mensajeError);
    };
    ServicioDatosBase = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ServicioDatosBase);
    return ServicioDatosBase;
}());
exports.ServicioDatosBase = ServicioDatosBase;
//# sourceMappingURL=servicio-datos-base.js.map