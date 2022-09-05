import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundamentalsComponent } from './fundamentals/fundamentals.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentComponent } from './student/student.component';
const routes: Routes = [
  {path :'', redirectTo:'main',pathMatch:'full'},
  {path :'main',component:MaincomponentComponent},
  {path :'student',component:StudentComponent},
  {path :'fundamentals',component:FundamentalsComponent},
  {path :'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
