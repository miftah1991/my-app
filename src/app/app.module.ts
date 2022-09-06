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
import { MatButton, MatButtonModule } from '@angular/material/button'
import { MatToolbar, MatToolbarModule, } from '@angular/material/toolbar'

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
