import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent {
  @Input() isOpen = false; // To control the visibility of the bottom sheet
  @Input() customClass = ''; // To apply custom CSS classes
  @Output() close = new EventEmitter<void>(); // Event emitter for closing the bottom sheet

  closeSheet() {
    this.isOpen = false;
    this.close.emit(); // Emit an event when the bottom sheet is closed
  }
}
