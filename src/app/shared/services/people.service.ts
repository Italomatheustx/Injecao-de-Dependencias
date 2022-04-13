import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [{firstName: "Maria", lastName: "silva", age:19}, {firstName: "Mario", lastName: "barbosa", age:20}, {firstName: "beatriz", lastName: "teixeira", age:21}, {firstName: "João", lastName: "da silva", age:22}]
    return of(peopleArray)
  }
}
