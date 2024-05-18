
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AndroidesService } from './app/service/androides.service';

bootstrapApplication(AppComponent, {
    providers: [AndroidesService]
})
  .catch(err => console.error(err));
