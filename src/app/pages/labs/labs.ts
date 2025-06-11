import { Component, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.html',
  styleUrl: './labs.css'
})
export class Labs {
protected tasks = signal([
   'Create un proyecto Angular',
    'Crear un componente',
    'Actualización de la vista',
    ]);
protected name = signal("Angular labs");
protected disabled = false;
protected imageUrl = 'https://w3schools.com/howto/img_avatar.png';
protected person = {
  name: 'John Doe',
  age: 30,
  avatar: 'https://w3schools.com/howto/img_avatar.png'
};

protected clickHandler = () => {
  alert(this.person.name+ ' user')
};

protected changeEvent = (event: Event) => {

  const elementInput = event.target as HTMLInputElement;
  
  this.person.age = +elementInput.value;
  
};

protected keyDownEvent = (event: Event) => {

  const elementInput = event.target as HTMLInputElement;
  console.log(elementInput.value);
  
}

}


