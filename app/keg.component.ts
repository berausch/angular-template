import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-display',
  inputs: ["keg"],
  template: `
    <div class="keg-object"> <h3 class="keg-">{{ keg.name }}</h3> <h4> {{ keg.brand }} - {{ keg.alcoholContent }}% <br></h4> <br><h5>{{ keg.pints }} pints</h5><h4><button>Fill an order</button></h4><br><h3>$ {{ keg.price }}</h3>

    </div>
  `
})

export class KegComponent {
  public keg: Keg;
}
