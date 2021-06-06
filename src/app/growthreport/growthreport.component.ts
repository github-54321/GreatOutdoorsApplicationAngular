import { Component, OnInit } from '@angular/core';
import { Growthreport } from '../growthreport';
import { GrowthreportService } from '../growthreport.service';

@Component({
  selector: 'app-growthreport',
  templateUrl: './growthreport.component.html',
  styleUrls: ['./growthreport.component.css'],
})
export class GrowthreportComponent implements OnInit {
  growth: Growthreport = new Growthreport();
  growths!: Growthreport[];
  currentDate!: string;
  constructor(private growthservice: GrowthreportService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  // Get All Growth Reports 

  reloadData() {
    this.growthservice.getGrowthReports().subscribe((mydata) => {
      this.growths = mydata;
    });
  }

  // Growth Report Create

  createGrowthReport(): void {
    this.growthservice.createGrowthReport(this.currentDate).subscribe(
      (data: any) => {
        console.log(data);
        this.growths = data;
        this.reloadData();
      },
      (error) => {
        console.log(error);
        //  console.log('hello');
        alert('Invalid Date');
      }
    );
  }
}
