import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { ServicioDatosBase } from '../compartido/data-service/servicio-datos-base';
import { Usuario } from '../modelo/usuario';

@Injectable()
export class Login extends ServicioDatosBase {

   /**
     * Constructor de la clase.
     * @param http  Servicio para manejo de periciones HTTP.
     */
    constructor(public router: Router, http: Http) {
        super(http);
    }


    login(event, username, password) {

        event.preventDefault();

        let headers = super.obtenerHeadersPorDefecto();

        let body = JSON.stringify({ username, password });
             
        this.http.post('http://localhost:3001/sessions/create', body, { headers: headers })
            .subscribe(
            response => {
                localStorage.setItem('id_token', response.json().id_token);

                let usuario =  super.extraerRespuesta<Usuario>(response);

                this.router.navigate(['/home']);
            },
            error => {
                alert(error.text());
                console.log(error.text());
            }
            );
        
       

    }   

}