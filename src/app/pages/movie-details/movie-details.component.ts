import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  getMovieDetailsRes:any;
  getMovieVideoRes:any;
  getMovieCastRes:any;  

  constructor(private service:MovieApiServiceService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getparamid#');

    this.getMovieDetails(getParamId);
    this.getVideo(getParamId);  
    this.getCast(getParamId);
  }



  getMovieDetails(id:any){
    this.service.getMovieDetails(id).subscribe((res)=>{
      console.log(res, 'getmoviedetails#');
      this.getMovieDetailsRes = res;
    });
  }


  getVideo(id:any){
    this.service.getMovieVideo(id).subscribe((res)=>{
      console.log(res, 'getmovievideo#');
      res.results.forEach((element:any) => {
        if(element.type == "Trailer")
        {
          this.getMovieVideoRes = element.key;
        }
      });
    });
  }


  getCast(id:any)
  {
    this.service.getMovieCast(id).subscribe((res)=>{
      console.log(res, 'getmoviecast#');
      this.getMovieCastRes = res.cast;
    });
  }


}
