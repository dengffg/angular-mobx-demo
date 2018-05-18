import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Todos } from "../../stores/todos.store";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-section',
  templateUrl: './section.component.html',
})
export class SectionComponent {
  constructor(public todos: Todos) { }
}