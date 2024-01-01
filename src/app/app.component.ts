import {Component} from '@angular/core';
import {TetrisContainerComponent} from "./components/tetris-container/tetris-container.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    TetrisContainerComponent,
  ],
  standalone: true,
})
export class AppComponent {
}

