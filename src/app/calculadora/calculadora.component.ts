import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  firstNumber: number = 0;
  secondNumber: number = 0;
  result: number = 0;

  calculateSum() {
    this.result = this.firstNumber + this.secondNumber;
  }
}
