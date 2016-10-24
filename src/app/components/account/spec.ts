/* beautify ignore:start */
import {it, inject, beforeEachProviders} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import {AccountPage} from './index';
import {Assert} from '../../../assert';
/* beautify ignore:end */

describe('Component: AccountPage', () => {

    let providers = [];
    let assert = new Assert < AccountPage > (AccountPage, providers);

    assert.it('should be defined', (component, element, fixture) => {
        fixture.detectChanges();

        expect(component).toBeDefined();
        expect(element).toBeDefined(); 
    });
});