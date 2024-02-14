import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RDFComponent } from './Components/rdf/rdf.component';
import { TDFComponent } from './Components/tdf/tdf.component';
import { ValidationComponent } from './Components/validation/validation.component';
import { TodoComponent } from './Components/todo/todo.component';
import { ParentComponent } from './Components/parent/parent.component';
import { HomeComponent } from './Components/home/home.component';
import { ViewchildComponent } from './Components/viewchild/viewchild.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { RxjsComponent } from './Components/rxjs/rxjs.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { PipeComponent } from './Components/pipe/pipe.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
  pathMatch:'full'
  },
  {
    path:'rdf',
    component:RDFComponent
  },
  {
    path:'tdf',
    component:TDFComponent
  },

  {
    path:'validation',
    component:ValidationComponent
  },
  {
    path:'parent',
    component:ParentComponent
  }, {
    path:'todo',
    component:TodoComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'viewchild',
    component:ViewchildComponent
  },
  {
    path:'loginpage',
    component:SignUpComponent
  },
  {
    path:'rxjs',
    component:RxjsComponent
  },
  {
    path:'pipe',
    component:PipeComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
