import { Component } from '@angular/core';
import { AuthGuard } from './shared/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EmployeeAssignment';
}
