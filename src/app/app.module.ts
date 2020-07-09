import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LinechartComponent } from './linechart/linechart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { DoughnutchartComponent } from './doughnutchart/doughnutchart.component';
import { RadarchartComponent } from './radarchart/radarchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { BubblechartComponent } from './bubblechart/bubblechart.component';
import { ChartsModule } from 'ng2-charts';
import { PolarComponent } from './polar/polar.component';
import { ScatterComponent } from './scatter/scatter.component';


@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
    BarchartComponent,
    DoughnutchartComponent,
    RadarchartComponent,
    PiechartComponent,
    BubblechartComponent,
    PolarComponent,
    ScatterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
