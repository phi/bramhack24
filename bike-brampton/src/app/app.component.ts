import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bike-brampton';

  userForm = this.formBuilder.group({
    age: '',
    address: ''
  }) 

  contructor(
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void{
    //If you want any specific behaviours on submission
  }
}
