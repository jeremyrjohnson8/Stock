/* beautify ignore:start */
import {it, inject, beforeEachProviders} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import {WatchlistComponent} from './index';
import {Assert} from '../../../assert';
/* beautify ignore:end */

describe('Component: WatchlistComponent', () => {

    let providers = [];
    let assert = new Assert < WatchlistComponent > (WatchlistComponent, providers);

    assert.it('should be defined', (component, element, fixture) => {
        fixture.detectChanges();

        expect(component).toBeDefined();
        expect(element).toBeDefined();
    });
});