import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MypipePipe } from './mypipe.pipe';
import { StudentComponent } from './student/student.component';
import { FundamentalsComponent } from './fundamentals/fundamentals.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactformComponent } from './reactform/reactform.component';
import { NestedFormArrayComponent } from './nested-form-array/nested-form-array.component';
import { DynamicRowComponent } from './dynamic-row/dynamic-row.component';
import { CheckBoxRadioComponent } from './check-box-radio/check-box-radio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatButtonModule } from '@angular/material/button'
import {  MatToolbarModule, } from '@angular/material/toolbar';
import { AngMaterialComponent } from './ang-material/ang-material.component'
import {MatSliderModule} from '@angular/material/slider'
import {MatBadgeModule} from '@angular/material/badge'
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatRadioModule} from '@angular/material/radio'
import {MatSelectModule} from '@angular/material/select'
import { PersonModule } from './person/person.module';





@NgModule({
  declarations: [
    AppComponent,
    MypipePipe,
    StudentComponent,
    FundamentalsComponent,
    MaincomponentComponent,
    PageNotFoundComponent,
    TemplateformComponent,
    ReactformComponent,
    NestedFormArrayComponent,
    DynamicRowComponent,
    CheckBoxRadioComponent,
    AngMaterialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatBadgeModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,MatSelectModule,
    MatInputModule,
    PersonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
