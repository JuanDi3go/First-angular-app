import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
    protected tasks = signal([
   'Create un proyecto Angular',
    'Crear un componente',
    'Actualización de la vista',
    ]);

    protected changeHandler = (event: Event) => {

      const input = event.target as HTMLInputElement;
      const newTask = input.value;

      this.tasks.update((tasks) => [...tasks,newTask]);

      input.value = "";

    }

    protected onDeleteTaskHandler = (index: number) => {

      this.tasks.update((tasks) => tasks.filter((task,position) => position != index));

    }

}
