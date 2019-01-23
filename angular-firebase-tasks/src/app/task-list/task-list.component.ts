import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { take } from 'rxjs/operators/take';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks$: Observable<Task[]>;
  selectedTask: Task;
  loading = true;

  constructor(
    private dialog: MatDialog,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.tasks$ = this.taskService.tasks.valueChanges();
    this.tasks$
      .pipe(take(1))
      .subscribe(() => this.loading = false);
  }

  onPerformTask(task: Task): void {
    task.done = !task.done;
    this.taskService.update(task)
      .then(() => console.log('Update task'))
      .catch((e) => console.log(e));
  }

  onDelete(task: Task): void {
    this.taskService.delete(task)
      .then(() => console.log('task deleted'))
      .catch((e) => console.log(e));
  }

  showDialog(task?: Task): void {
    const config: MatDialogConfig<any> = (task) ? { data: { task} } : null;
    this.dialog.open(TaskDialogComponent, config);
  }

}
