import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-right-navbar',
  templateUrl: './right-navbar.component.html',
  styleUrls: ['./right-navbar.component.css'],
  imports: [MarkdownComponent, FormsModule, CommonModule]
})
export class RightNavbarComponent {
  notes: string = '';

  saveNotes() {
    console.log('Anotações salvas:', this.notes);
  }

  exportNotes() {
    const blob = new Blob([this.notes], { type: 'text/markdown' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'anotacoes.md';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}