import { Component, EventEmitter } from "angular2/core";
import { KegComponent } from "./keg.component";
import { Keg } from "./keg.model";
import { EditKegComponent } from "./edit-keg.component";
import { NewKegComponent } from "./new-keg.component";


@Component ({
  selector: "keg-list",
  inputs: ["kegList"],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegComponent, NewKegComponent],
  template: `
  <keg-display *ngFor="#currentKeg of kegList"
  (click)="kegClicked(currentKeg)"
  [keg]="currentKeg" class="col-lg-4">
  </keg-display>
  <edit-keg *ngIf="selectedKeg" [keg]="selectedKeg">
  </edit-keg>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(name: string, brand: string, alcoholContent: number, price: number): void {
    this.kegList.push(new Keg(name, brand, alcoholContent, price));
  }
}
