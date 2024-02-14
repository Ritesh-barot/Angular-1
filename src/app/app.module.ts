import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './Components/todo/todo.component';
import { TDFComponent } from './Components/tdf/tdf.component';
import { RDFComponent } from './Components/rdf/rdf.component';
import { ValidationComponent } from './Components/validation/validation.component';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';
import { ViewchildComponent } from './Components/viewchild/viewchild.component';
import { CustomDirective } from './pipes/Directive/custom.directive';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { RxjsComponent } from './Components/rxjs/rxjs.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { PipeComponent } from './Components/pipe/pipe.component';
import { AgePipe } from './pipes/age.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    TDFComponent,
    RDFComponent,
    ValidationComponent,
    ParentComponent,
    ChildComponent,
    ViewchildComponent,
    CustomDirective,
    SignUpComponent,
    RxjsComponent,
    NotFoundComponent,
    PipeComponent,
    AgePipe,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
