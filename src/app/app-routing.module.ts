import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrListComponent } from './pages/dr-list/dr-list.component';
import { DrAddComponent } from './pages/dr-add/dr-add.component';
import { DrEditComponent } from './pages/dr-edit/dr-edit.component';
import { DrViewComponent } from './pages/dr-view/dr-view.component';


const routes: Routes = [

  // DR Documentation Module
  { path: 'dr-docs', component: DrListComponent },
  { path: 'dr-docs/add', component: DrAddComponent },
  { path: 'dr-docs/edit/:id', component: DrEditComponent },
    { path: 'dr-view/:id', component: DrViewComponent },


  // Default route
  { path: '', redirectTo: 'dr-docs', pathMatch: 'full' },

  // Optional safety (good practice)
  { path: '**', redirectTo: 'dr-docs' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
