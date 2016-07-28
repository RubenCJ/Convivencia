import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';


/**
 * Clase base para los Servicios de datos.
 */
@Injectable()
export class ServicioDatosBase {

    //#region Constructor

    /**
     * Constructor de la clase.
     * @param http Servicio para hacer peticiones HTTP.
     * @param servicioAlertas Servicio para mostrar alertas al usuario
     */
    constructor(
        protected http: Http ) {
    }

    //#endregion

    //#region Metodos protegidos 

    /**
     * Generar header HTTP por defecto
     * @description Incluye: Content-Type: application/json
     * @returns {Headers}
     */
    protected obtenerHeadersPorDefecto() {
        return new Headers(
            { 'Content-Type': 'application/json' }
        );
    }

    /**
     * Agrega parametros a una coleccion de {URLSearchParams} validando antes si no son indefinidos.
     * @param parametros Coleccion donde agrega los parametros.
     * @param nombreParametro Nombre del parametro.
     * @param valorParametro valor del parametro.
     */
    protected agregarParametroQueryString(parametros: URLSearchParams, nombreParametro: string, valorParametro: any) {
        if (nombreParametro && valorParametro)
            parametros.set(nombreParametro, valorParametro);
    }

    /**
     * Obtiene el objeto devuleto en una respuesta HTTP.
     * @param res Respuesta HTTP.
     * @returns {T} Objeto devuelto
     */
    protected extraerRespuesta<T>(res: Response) {
        let body = res.json();
        return <T>(body || {});
    }

    /**
     * Maneja una respuesta HTTP de error logeandola a la consola y a Application isnights y devuleve el error.
     * @param error Respuesta HTTP de error.
     * @returns {ErrorObservable}
     */
    protected manejarError(error: any) {
        let respuesta = <Response>error;
        let cuerpoError = respuesta.json();
        let mensajeError = JSON.stringify(cuerpoError);

        console.error(cuerpoError);        

        return Observable.throw(mensajeError);
    }

  

    //#endregion
}