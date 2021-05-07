
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService{

  constructor(private http: HttpClient){}

  getSuperHeroByName(superheroName: string): Observable<any>{
    //const url = `${environment.endpointBaseUrl}/${environment.accessToken}/${environment.superhero.search}/${superheroName}`;
    const url = 'https://www.superheroapi.com/api/466790091239259/search/'+ superheroName;
    return this.http.get(url).pipe(
      map(response => {
        return response;
      })
    );
  }

  getSuperheroById(idSuperhero: string): Observable<any>{
    //const url = `${environment.endpointBaseUrl}/${environment.accessToken}/${idSuperhero}`;
    const url = 'https://www.superheroapi.com/api/466790091239259/' + idSuperhero;
    return this.http.get(url).pipe(
      map(response => {
        return response;
      })
    );
  }
}
