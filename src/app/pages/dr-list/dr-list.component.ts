import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrDocument } from 'src/app/models/dr-document.model';
import { DrDocService } from 'src/app/services/dr-doc.service.ts.service';

@Component({
  selector: 'app-dr-list',
  templateUrl: './dr-list.component.html'
})
export class DrListComponent implements OnInit {

  drDocs: DrDocument[] = [];

  // ✅ defaults (VERY IMPORTANT)
  selectedComponent: string = '';
  sortBy: string = 'latest';

  constructor(
    private drDocService: DrDocService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  // ================= LOAD =================
  loadData() {
    this.drDocService.getAll().subscribe({
      next: res => {
        this.drDocs = res;
        this.applySort();
      },
      error: err => console.error('Failed to load DR docs', err)
    });
  }

  // ================= FILTER =================
  onComponentChange() {
    if (!this.selectedComponent) {
      // All components
      this.loadData();
      return;
    }

    this.drDocService.getByCategory(this.selectedComponent).subscribe({
      next: (res: DrDocument[]) => {
        this.drDocs = res;
        this.applySort();
      },
      error: (err: any) => console.error('Component filter failed', err)
    });
  }

  // ================= SORT =================
  onSortChange() {
    this.applySort();
  }

  applySort() {
    if (!this.drDocs || this.drDocs.length === 0) return;

    switch (this.sortBy) {
      case 'oldest':
        this.drDocs.sort(
          (a, b) =>
            new Date(a.createdAt!).getTime() -
            new Date(b.createdAt!).getTime()
        );
        break;

      case 'title':
        this.drDocs.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;

      case 'component':
        this.drDocs.sort((a, b) =>
          a.component.localeCompare(b.component)
        );
        break;

      default: // latest
        this.drDocs.sort(
          (a, b) =>
            new Date(b.createdAt!).getTime() -
            new Date(a.createdAt!).getTime()
        );
    }
  }

  // ================= STATS =================
  getLastUpdatedDate(): string | null {
    if (!this.drDocs || this.drDocs.length === 0) {
      return null;
    }

    const latest = this.drDocs
      .filter(d => d.updatedAt)
      .sort(
        (a, b) =>
          new Date(b.updatedAt!).getTime() -
          new Date(a.updatedAt!).getTime()
      )[0];

    return latest?.updatedAt || null;
  }

  // ================= NAVIGATION =================
  viewDoc(id: number) {
    this.router.navigate(['/dr-view', id]);
  }

  addDoc() {
    this.router.navigate(['/dr-docs/add']);
  }

  editDoc(id: number) {
    this.router.navigate(['/dr-docs/edit', id]);
  }

  // ================= DELETE =================
  deleteDoc(id: number) {
    const confirmed = confirm(
      'Are you sure you want to delete this DR document?'
    );

    if (!confirmed) return;

    this.drDocService.deleteById(id).subscribe({
      next: () => {
        this.drDocs = this.drDocs.filter(doc => doc.id !== id);
      },
      error: err => {
        console.error('Delete failed', err);
        alert('Failed to delete document. Please try again.');
      }
    });
  }

  // ================= EXPORT =================
  exportDocs() {
    console.log('Export triggered');
    // next: CSV / PDF
  }
}
