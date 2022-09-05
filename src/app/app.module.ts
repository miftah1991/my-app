import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MypipePipe } from './mypipe.pipe';
import { StudentComponent } from './student/student.component';
import { FundamentalsComponent } from './fundamentals/fundamentals.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemplateformComponent } from './templateform/templateform.component';

@NgModule({
  declarations: [
    AppComponent,
    MypipePipe,
    StudentComponent,
    FundamentalsComponent,
    MaincomponentComponent,
    PageNotFoundComponent,
    TemplateformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
