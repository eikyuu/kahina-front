import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooListComponent } from './components/foo-list/foo-list.component';
import { FooButtonComponent } from './components/foo-button/foo-button.component';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [CommonModule, FooListComponent, FooButtonComponent],
  templateUrl: './foos.component.html',
  styleUrls: ['./foos.component.scss']
})
export class FoosComponent {

}
