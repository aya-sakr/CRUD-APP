import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from "./component/employee/employee.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CRUD-APP';
}
