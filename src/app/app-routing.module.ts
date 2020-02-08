import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoiceGridComponent } from './choice-grid/choice-grid.component';
import { HealthyComponent } from './healthy/healthy.component';
import { EducatedComponent } from './educated/educated.component';
import { ModernComponent } from './modern/modern.component';
import { GoodComponent } from './good/good.component';
import { TownhallanswersComponent } from './townhallanswers/townhallanswers.component';


const routes: Routes = [
  { path: '', component: ChoiceGridComponent },
  { path: 'healthy', component: HealthyComponent },
  { path: 'educated', component: EducatedComponent },
  { path: 'modern', component: ModernComponent },
  { path: 'good', component: GoodComponent },
  { path: 'answers', component: TownhallanswersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
