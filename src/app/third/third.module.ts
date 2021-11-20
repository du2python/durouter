import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router'; //라우터
import { SecondComponent } from '../second/second.component';

const routes : Routes = [  //라우팅
  {path : '' , component : SecondComponent},
  { path: 'hello', component: SecondComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdModule { }
