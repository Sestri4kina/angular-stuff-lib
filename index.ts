import {NgModule, ModuleWithProviders} from "@angular/core";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './src/demo.component';
import { DemoService } from './src/demo.service';

export * from './src/demo.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        DemoComponent
    ],
    exports: [
        DemoComponent
    ]
})
export class LibStarterModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LibStarterModule,
            providers: [
                DemoService
            ]
        };
    }

}
