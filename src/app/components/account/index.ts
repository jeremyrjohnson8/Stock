/* beautify ignore:start */
import {Component} from '@angular/core';
import {User} from '../../dtos/user';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated'; 
/* beautify ignore:end */

@Component({
    selector: 'account',
    styles: [require('./style.scss').toString()],
    template: require('./template.html')
})
export class AccountPage {
    private user: User; 
    private placeholder: string; 
    constructor(private _router: Router){
        this.user = new User(); 
        this.user.firstName = "Jeremy";
        this.user.lastName = "Johnson";
        this.user.addressLineOne = "Test1";
        this.user.addressLineTwo = "Test2";
        this.user.city  = "Test City";
        this.user.username = "jeremyj"; 
        this.user.passWord = "pass"; 
        this.user.email = "useremail@test"; 
        this.user.zipcode = 858585;
        this.user.state = "AZ"; 
        this.user.birthday = "03/30/1988"; 

        this.placeholder = this.generatePlaceHolder(); 
    }

    private tryRoute(route:string){
        this._router.navigate([route]); 
    }

    private generatePlaceHolder() :string{
        
        return "";
    }
}