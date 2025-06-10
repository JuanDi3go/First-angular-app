import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'Mi primera aplicación Angular';
  protected tasks = [
   'Create un proyecto Angular',
    'Crear un componente',
    'Actualización de la vista',
  ];
}
