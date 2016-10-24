/* beautify ignore:start */
import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated'; 


/* beautify ignore:end */

@Component({
    selector: 'preferences',
    styles: [require('./style.scss').toString()],
    template: require('./template.html')
})
export class PreferencesComponent {
   
   constructor(private _router: Router){

    }
 private tryRoute(route:string){
        this._router.navigate([route]); 
    }
}