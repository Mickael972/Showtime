import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";

  //bannerapidate
  bannerApiData():Observable<any>
  {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }

  
  //trendingmovieapidata
  trendingMovieApiData():Observable<any>
  {
    return this.http.get(`${this.baseurl}/trending/movie/week?api_key=${this.apikey}`); 
  }


  getSearchMovie(data:any):Observable<any>
  {
    console.log(data, 'service');
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.query}`);
  }

}
