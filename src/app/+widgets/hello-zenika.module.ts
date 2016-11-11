import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HelloZenika } from './hello-zenika.component';

@NgModule({
  declarations: [
    HelloZenika
  ],
  imports: [RouterModule.forChild([
    { path: '', component: HelloZenika}
  ])],
  providers: [],
  bootstrap: [HelloZenika],
  exports: [RouterModule]
})
export class HelloZenikaModule { }
