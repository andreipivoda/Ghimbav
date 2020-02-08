import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// ***********
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { ChoiceGridComponent } from './choice-grid/choice-grid.component';
import { HealthyComponent } from './healthy/healthy.component';
import { EducatedComponent } from './educated/educated.component';
import { ModernComponent } from './modern/modern.component';
import { GoodComponent } from './good/good.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// ***********


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ChoiceGridComponent,
    HealthyComponent,
    EducatedComponent,
    ModernComponent,
    GoodComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    LayoutModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
