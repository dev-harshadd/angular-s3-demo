import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrListComponent } from './pages/dr-list/dr-list.component';
import { DrAddComponent } from './pages/dr-add/dr-add.component';
import { DrEditComponent } from './pages/dr-edit/dr-edit.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DrViewComponent } from './pages/dr-view/dr-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DrListComponent,
    DrAddComponent,
    DrEditComponent,
    DrViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
   FormsModule,         // ✅ REQUIRED for ngModel

    
  ],

 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
