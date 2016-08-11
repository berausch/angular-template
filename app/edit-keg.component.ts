import { Component } from 'angular2/core';
import { Keg } from './keg.model';


@Component({
  selector: 'edit-keg',
  inputs: ['keg'],
  template: `
    <h3>Edit Keg:</h3>
    <div class='keg-object'>
      <h4 class='keg'>Name: <input [(ngModel)]="keg.name" class="input-lg task-form"/></h4>
      <h4>Brand:  <input [(ngModel)]="keg.brand" class="input-lg task-form"/></h4>
      <h4> Alcohol Content: <input [(ngModel)]="keg.alcoholContent" class="input-lg task-form"/> <br></h4>
      <br><h4>Pints: <input [(ngModel)]="keg.pints" class="input-lg task-form"/> </h4>
      <br>
      <h4>Price: <input [(ngModel)]="keg.price" class="input-lg task-form"/></h4>
    </div>
  `
})

export class EditKegComponent {
  public keg: Keg;
}
