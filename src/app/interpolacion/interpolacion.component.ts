import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interpolacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css',
})
export class InterpolacionComponent {
  mensaje: string = '¡Esto es un ejemplo de interpolación en Angular!';
  num1: number = 10;
  num2: number = 20;
}
