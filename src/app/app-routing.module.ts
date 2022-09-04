import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundamentalsComponent } from './fundamentals/fundamentals.component';
import { StudentComponent } from './student/student.component';
const routes: Routes = [
  {path :'student',component:StudentComponent},
  {path :'fundamentals',component:FundamentalsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
