 import { Component, EventEmitter } from "angular2/core";
 import { KegListComponent } from "./keg-list.component";
 import { Keg } from "./keg.model";

 @Component ({
   selector: "my-app",
   directives: [KegListComponent],
   template: `
    <div class="container">
      <h1>My House</h1>
      <h2>Your very Local Bar</h2><br>
      <h2>Your Keg List</h2>
      <div class="row">
        <keg-list [kegList]="kegs">
        </keg-list>
      </div>
    </div>
   `
 })

 export class AppComponent {
   public kegs: Keg[];
   constructor() {
     this.kegs = [
       new Keg("Electric Chicken Pale Ale", "Coors", 5, 5.2),
       new Keg("Beige Pulaski Day Old Ale", "Blue Moon", 6, 4.3),
       new Keg("Glutinous Smurf Russian Stout", "Guinness", 7, 6.7)
     ];
   }
 }
