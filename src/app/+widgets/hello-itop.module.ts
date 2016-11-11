import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { helloItop } from './hello-itop.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    helloItop
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: helloItop }
    ])
  ],
  providers: [],
  bootstrap: [helloItop],
  exports: [helloItop]
})
export class HelloItopModule { }
