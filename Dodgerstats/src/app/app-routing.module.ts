import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PitchingComponent} from './pitching/pitching.component';
import { AppComponent } from './app.component';
import { HittingComponent } from './hitting/hitting.component';

const routes: Routes = [
  { path: 'hitting', component: HittingComponent},
  {path: 'pitching', component: PitchingComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
