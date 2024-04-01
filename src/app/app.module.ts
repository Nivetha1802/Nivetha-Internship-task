import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddNotesComponent } from './add-notes/add-notes.component';
import { AddPlacesComponent } from './add-places/add-places.component';
import { AllDetailsComponent } from './all-details/all-details.component';
import { BudgetComponent } from './budget/budget.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { HeadersComponent } from './headers/headers.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { IntroLeftComponent } from './intro-left/intro-left.component';
import { IntroRightComponent } from './intro-right/intro-right.component';
import { MembersDetComponent } from './members-det/members-det.component';
import { PlanDetailsComponent } from './plan-details/plan-details.component';
import { PlanInputAllComponent } from './plan-input-all/plan-input-all.component';
import { PlansComponent } from './plans/plans.component';
import { ChildPlacesComponent } from './child-places/child-places.component';
import { ChildmembersComponent } from './childmembers/childmembers.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AddNotesComponent,
    AddPlacesComponent,
    AllDetailsComponent,
    BudgetComponent,
    ButtonsComponent,
    HeadersComponent,
    HomeHeaderComponent,
    IntroLeftComponent,
    IntroRightComponent,
    MembersDetComponent,
    PlanDetailsComponent,
    PlanInputAllComponent,
    PlansComponent,
    ChildPlacesComponent,
    ChildmembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
