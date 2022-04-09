import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
    TodoListRoutingModule,
    StoreModule.forFeature(todoListFeatureKey, reducer),
    EffectsModule.forFeature([TodoListEffects])
  ]
})
export class TodoListModule { }
