import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
   @Input() all: number = 0;
   @Input() free: number = 0;
   @Input() premium: number = 0;

   @Output() filterChanged = new EventEmitter<string>();

    constructor() { }

    selectedRadioBtn: string = 'All';

    onRadioBtnChange() {
      this.filterChanged.emit(this.selectedRadioBtn);
    }

   



}
