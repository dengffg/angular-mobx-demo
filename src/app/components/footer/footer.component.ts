import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Todos } from "../../stores/todos.store";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  constructor(public todos: Todos) { }
}