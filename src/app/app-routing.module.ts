import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwgComponent } from './common/pwg/pwg.component';
import { TypingComponent } from './common/typing/typing.component';
import { BothComponent } from './both/both.component';
import { WikipediaComponent } from './common2/wikipedia/wikipedia.component';

const routes: Routes = [
  {path:'pwg',component:PwgComponent},
  {path:'typing',component:TypingComponent},
  {path:'both',component:BothComponent},
  {path:'wikipedia',component:WikipediaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
