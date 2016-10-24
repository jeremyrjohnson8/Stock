/* beautify ignore:start */
import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated'; 

/* beautify ignore:end */

@Component({
    selector: 'landing',
    styles: [require('./style.scss').toString()],
    template: require('./landing-template.html')
})
export class Landing {
    constructor( private _router:Router){

    }
    private userName: string; 
    

    private tryRoute(route:string){
        this._router.navigate([route]); 
    }
    private onLogout(){
        
    }
}