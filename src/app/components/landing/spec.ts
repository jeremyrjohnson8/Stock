/* beautify ignore:start */
import {it, inject, beforeEachProviders} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import {Landing} from './landing';
import {Assert} from '../../../assert';
/* beautify ignore:end */

describe('Component: LandingComponent', () => {

    let providers = [];
    let assert = new Assert < Landing > (Landing, providers);

    assert.it('should be defined', (component, element, fixture) => {
        fixture.detectChanges();

        expect(component).toBeDefined();
        expect(element).toBeDefined();
    });
});