import { Component, EventEmitter } from "angular2/core";
import { Keg } from "./keg.model";

@Component ({
  selector: "new-keg",
  outputs: ["onSubmitNewKeg"],
  template: `
    <h3>Create New Keg</h3>
    <div class='keg-form'>
      <h4>Name<input placeholder="Name" class="input-lg task-form" #newKegName></h4>
      <h4>Brand<input placeholder="Brand" class="input-lg task-form" #newKegBrand></h4>
      <h4>Alcohol Content<input placeholder="AlcoholContent" class="input-lg task-form" #newKegAlcoholContent><br></h4>
      <h4>Price<input placeholder="Price" class="input-lg task-form" #newKegPrice></h4>
      <h4><button (click)="addKeg(newKegName, newKegBrand, newKegAlcoholContent, newKegPrice)">Submit</button></h4>
    </div>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(kegName: HTMLInputElement, kegBrand: HTMLInputElement, alcoholContent: HTMLInputElement, kegPrice: HTMLInputElement) {
    var newKeg: Keg = new Keg(kegName.value, kegBrand.value, parseInt(alcoholContent.value), parseInt(kegPrice.value));
    this.onSubmitNewKeg.emit(newKeg);
    kegName.value = "";
    kegBrand.value = "";
    alcoholContent.value = "";
    kegPrice.value = "";
  }
}
