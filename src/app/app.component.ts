import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Todos } from './stores/todos.store';

@Component({
  /**
   * 如果组件是通过@input,observalbe input,或者event handler来接收数据的话，使用OnPush更优。它可以减少变化检测，实现高性能UI
   * https://blog.angular-university.io/onpush-change-detection-how-it-works/
   */
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';

  constructor(public todos: Todos) { }

  addTodo() {
    this.todos.addTodo({ title: this.title });
    this.title = '';
  }
}
