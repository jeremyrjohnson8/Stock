/// src/app/index.ts
import {Component, ViewEncapsulation, ViewContainerRef, OnInit, NgZone, ViewChild} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {FORM_PROVIDERS} from '@angular/common';
import {AtomicLogo} from '../app/components/logo/index'; 

import '../style/app.scss';

import {AppRoutes} from './routes';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app', // <app></app>
    providers: [FORM_PROVIDERS],
    directives: [ROUTER_DIRECTIVES, AtomicLogo],
    encapsulation: ViewEncapsulation.None,
    pipes: [],
    styles: [require('./style.scss')],
    template: require('./template.html')
})

@RouteConfig(AppRoutes)

export class App {

    constructor(private viewContainerRef:ViewContainerRef, private zone:NgZone) {
        this.viewContainerRef = viewContainerRef; 
    }
}
