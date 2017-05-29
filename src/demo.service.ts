import {Injectable } from '@angular/core';

@Injectable()
export class DemoService {

    info: string;

    doStuff() {
        return 'stuff: ' + this.info;
    }
}