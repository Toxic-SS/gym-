import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component'; // Adjust the path as necessary
import { WorkoutListComponent } from './workout-list/workout-list.component'; // Adjust the path as necessary

const routes: Routes = [
  { path: '', redirectTo: '/user-form', pathMatch: 'full' },
  { path: 'user-form', component: UserFormComponent },
  { path: 'workout-list', component: WorkoutListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }