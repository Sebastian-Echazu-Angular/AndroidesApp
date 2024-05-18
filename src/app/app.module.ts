import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AndroidesService } from './service/androides.service';

@NgModule({
    declarations: [AppComponent],
    imports: [ ],
    providers: [AndroidesService],
    bootstrap: [AppComponent]
})
export class AppModule { }
