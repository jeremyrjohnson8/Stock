import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {AtomicLogo} from '../logo/index';
import {Router} from '@angular/router-deprecated'; 

@Component({
  selector: 'login',
  directives: [FORM_DIRECTIVES],
  pipes: [],
  styles: [require('./style.scss')],
  template: require('./login-template.html')
})

export class Login {
 username: string = ""; 
 passWord: string = ""; 
 private valid: boolean = false; 
  constructor(private router: Router) {
    
  }
  private onLogin(name: any, pass: any){
    this.username = name; 
    this.passWord = pass; 
    if(this.username != "" && this.passWord != ""){
      this.valid = true; 
    }
    if (this.valid == true){
      this.router.navigate(['Landing']);
    }
  }
}
