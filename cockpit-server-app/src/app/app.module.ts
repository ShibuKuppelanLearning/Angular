import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CockpitAppComponent } from './cockpit-app/cockpit-app.component';
import { ServerAppComponent } from './server-app/server-app.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitAppComponent,
    ServerAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
