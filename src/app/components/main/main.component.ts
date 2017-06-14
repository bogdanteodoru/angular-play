import { Component } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  addEnabled = true;
  pizzaSaved = false;
  pizza = {
    name: '',
    description: '',
    price: 0
  };

  savePizza($event) {
    $event.preventDefault();
    this.pizzaSaved = true;
    this.addEnabled = true;
  }
}
