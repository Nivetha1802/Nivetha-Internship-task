import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { PlanInputAllComponent } from './plan-input-all/plan-input-all.component';
import { PlansComponent } from './plans/plans.component';
import { PlanDetailsComponent } from './plan-details/plan-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeHeaderComponent },
  { path: 'YourPlan', component: PlanInputAllComponent },
  { path: 'MyPlans', component: PlansComponent},
  { path: 'Title', component: PlanDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }