import { Component } from '@angular/core';

@Component({
    selector: 'lst-demo-component',
    template: `
        <h1>Demo Component</h1>
    `,
    styles: [`
        h1 {
            padding: 10px;
            border: solid 4px black;
        }
    `]
})
export class DemoComponent {
}