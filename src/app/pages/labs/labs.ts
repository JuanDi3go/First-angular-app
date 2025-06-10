import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.html',
  styleUrl: './labs.css'
})
export class Labs {
protected tasks = [
   'Create un proyecto Angular',
    'Crear un componente',
    'Actualización de la vista',
  ];
protected name = 'Angular Labs';
protected disabled = true;
protected imageUrl = 'https://w3schools.com/howto/img_avatar.png';
protected person = {
  name: 'John Doe',
  age: 30,
  avatar: 'https://w3schools.com/howto/img_avatar.png'
}

}


