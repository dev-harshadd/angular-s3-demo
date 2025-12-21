import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DrDocService } from 'src/app/services/dr-doc.service.ts.service';

@Component({
  selector: 'app-dr-view',
  templateUrl: './dr-view.component.html',
  styleUrls: ['./dr-view.component.scss']
})
export class DrViewComponent implements OnInit {
  drDoc: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private drService: DrDocService
    // Inject your DR service here
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // Load document by ID from your service
    this.drService.getById(id).subscribe(doc => this.drDoc = doc

    );

  }

  goBack() {
this.router.navigate(['/dr-docs']);  }

  editDoc() {
    this.router.navigate(['/dr-edit', this.drDoc.id]);
  }
}