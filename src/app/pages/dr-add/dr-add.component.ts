import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DrDocument } from '../../models/dr-document.model';
import { DrDocService } from 'src/app/services/dr-doc.service.ts.service';

@Component({
  selector: 'app-dr-add',
  templateUrl: './dr-add.component.html'
  
})
export class DrAddComponent {

  drDoc: DrDocument = {
    title: '',
    component: '',
    detection: '',
    immediateAction: '',
    recoverySteps: '',
    notes: ''
  };

  constructor(
    private drDocService: DrDocService,
    private router: Router
  ) {}

  submit() {
    this.drDocService.create(this.drDoc).subscribe(() => {
      this.router.navigate(['/dr-docs']);
    });
  }

  cancel() {
      this.router.navigate(['/dr-docs']);
    
  }
}
