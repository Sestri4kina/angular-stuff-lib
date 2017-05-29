import { TestBed } from '@angular/core/testing';
import { LibStarterModule } from '../index';

describe('LibStarter', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [LibStarterModule.forRoot()]
        });
    });

    it('null is not undefined', () => {
        expect(null).not.toEqual(undefined);
    });

});
