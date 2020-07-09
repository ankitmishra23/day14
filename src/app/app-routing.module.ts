import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarchartComponent } from './barchart/barchart.component';
import { BubblechartComponent } from './bubblechart/bubblechart.component';
import { DoughnutchartComponent } from './doughnutchart/doughnutchart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { RadarchartComponent } from './radarchart/radarchart.component';
import { AppComponent } from './app.component';
import { PolarComponent } from './polar/polar.component';
import { ScatterComponent } from './scatter/scatter.component';


const routes: Routes = [
  {
    path:"",
    redirectTo:'line',
    pathMatch:'full'
  },
  {
    path:"bar",
    component:BarchartComponent
  },
  {
    path:"bubble",
    component:BubblechartComponent
  },
  {
    path:"doughnut",
    component:DoughnutchartComponent
  },
  {
    path:"line",
    component:LinechartComponent
  },
  {
    path:"pie",
    component:PiechartComponent
  },
  {
    path:"radar",
    component:RadarchartComponent
  },
  {
    path:"polar",
    component:PolarComponent
  },
  {
    path:"scatter",
    component:ScatterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
