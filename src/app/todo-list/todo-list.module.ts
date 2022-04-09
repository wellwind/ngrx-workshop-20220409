import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodoListEffects } from '../todo-list.effects';
import { reducer, todoListFeatureKey } from '../todo-list.reducer';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';



@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodoListRoutingModule,
    StoreModule.forFeature(todoListFeatureKey, reducer),
    EffectsModule.forFeature([TodoListEffects])
  ]
})
export class TodoListModule { }
