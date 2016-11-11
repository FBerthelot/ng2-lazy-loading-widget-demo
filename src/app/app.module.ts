import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Home } from './home/home.component';
import { WidgetContainer } from './widgetContainer/widgetContainer.component';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    WidgetContainer
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: Home},
      {path: 'widget', component: WidgetContainer}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
