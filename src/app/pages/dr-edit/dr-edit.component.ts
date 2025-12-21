import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DrDocument } from 'src/app/models/dr-document.model';
import { DrDocService } from 'src/app/services/dr-doc.service.ts.service';


@Component({
  selector: 'app-dr-edit',
  templateUrl: './dr-edit.component.html'
})
export class DrEditComponent implements OnInit {

  drDoc!: DrDocument;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private drService: DrDocService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.drService.getById(this.id).subscribe(res => {
      this.drDoc = res;
    });
  }

  submit() {
    this.drService.update(this.id, this.drDoc).subscribe(() => {
      this.router.navigate(['/dr-docs']);
    });
  }
   cancel() {
    // this.drService.update(this.id, this.drDoc).subscribe(() => {
      this.router.navigate(['/dr-docs']);
    // });
  }
}
