import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckBoxRadioComponent } from './check-box-radio/check-box-radio.component';
import { DynamicRowComponent } from './dynamic-row/dynamic-row.component';
import { FundamentalsComponent } from './fundamentals/fundamentals.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { NestedFormArrayComponent } from './nested-form-array/nested-form-array.component';
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
  {path :'nestedFormArray',component:NestedFormArrayComponent},
  {path :'dynamicrow',component:DynamicRowComponent},
  {path :'checkradio',component:CheckBoxRadioComponent},
  {path :'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
