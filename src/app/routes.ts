// src/app/routes.ts
import {Login} from './components/login/login';     // ./components/home/index.ts
import {Landing} from './components/landing/landing';
import {AccountPage} from './components/account/index';
import {StockPileComponent} from './components/stock-pile/index';
import {WatchlistComponent} from './components/watchlist/index';
import {PreferencesComponent} from './components/preferences/index';
import {SignUpComponent} from './components/sign-up/index'

export const AppRoutes = [
    {path: '/', component: Login, name: 'Login'},
    // Async load a component using Webpack's require with es6-promise-loader
    {path: '/landing', component: Landing, name: 'Landing'},
    {path: '/myaccount', component: AccountPage, name: 'Account'},
    {path: '/mystockpile', component: StockPileComponent, name: 'Stock'},
    {path: '/watchlist', component: WatchlistComponent, name: 'WatchList'},
    {path: '/preferences', component: PreferencesComponent, name: 'Preferences'},
    {path: '/sign-up', component: SignUpComponent, name: 'SignUp'}

]
