import { ConfirmModalComponent } from './core/design-system/confirm-modal/confirm-modal.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './core/design-system/alert/alert.component';
import { SideNavComponent } from './core/design-system/nav/side/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideNavComponent,
    ConfirmModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
