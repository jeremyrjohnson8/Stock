/* beautify ignore:start */
import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Product} from '../../dtos/product'; 

/* beautify ignore:end */

@Component({
    selector: 'stock-pile',
    styles: [require('./style.scss').toString()],
    template: require('./template.html')
})
export class StockPileComponent {
    constructor(private _router: Router //GetStockpile service 
    
    ){

    }
    private tryRoute(route:string){
        this._router.navigate([route]); 
    }


}