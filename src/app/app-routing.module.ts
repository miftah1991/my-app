import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundamentalsComponent } from './fundamentals/fundamentals.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactformComponent } from './reactform/reactform.component';
import { StudentComponent } from './student/student.component';
import { TemplateformComponent } from './templateform/templateform.component';
const routes: Routes = [
  {path :'', redirectTo:'main',pathMatch:'full'},
  {path :'main',component:MaincomponentComponent},
  {path :'student',component:StudentComponent},
  {path :'fundamentals',component:FundamentalsComponent},
  {path :'templateform',component:TemplateformComponent},
  {path :'reactform',component:ReactformComponent},
  {path :'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
