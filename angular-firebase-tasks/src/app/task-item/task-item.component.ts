import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {

  @Input() task: Task;
  @Output() selectTask = new EventEmitter<Task>();
  @Output() performTask = new EventEmitter<Task>();

  executeAction(action: string): void {
    this[action].emit(this.task);
  }

  /*
    <app-task-item [task]="t" (selectTask)="onSelectTask($event)"></app-task-item>
  */
}
