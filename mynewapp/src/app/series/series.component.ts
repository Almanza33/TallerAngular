import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  constructor(private serieService: SerieService) { }

  series: Array<Serie> = [];
  promedio: number = 0;

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;

      let average:number =0;
      series.forEach(c =>{
        average = average + c.seasons;
      });
      this.promedio = average/series.length;
    });
  }

  ngOnInit() {
    this.getSeries();
  }

}
