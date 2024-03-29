import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:MovieApiServiceService) {}

  bannerResults:any=[];
  trendingResults:any=[];

  ngOnInit(): void {
    this.bannerData(),
    this.trendingData() 
  }

  //bannerdata
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result, 'bannerresult#');
      this.bannerResults = result.results;
    });
  }


  trendingData()
  {
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result, 'trendingresult#');
      this.trendingResults = result.results;
    });
  }
}
