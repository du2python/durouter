import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
//import { ThirdModule } from './third/third.module';
import { RouterModule,Routes} from '@angular/router'; //라우터
const router : Routes = [  //라우팅
  {path : '' , redirectTo:'first', pathMatch:'full'},
  {path : 'first' , component : FirstComponent},  
  {path : 'second' , loadChildren: () => import('./third/third.module').then(m => m.ThirdModule) },
  {path : '**' , redirectTo:'first', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router,{enableTracing:false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
