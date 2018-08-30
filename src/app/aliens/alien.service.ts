import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Alien } from '../alien';

@Injectable({
  providedIn: 'root'
})
export class AlienService {

  private alienUrl = 'http://www.mocky.io/v2/59f7760a2f0000ab1d55864e';

  constructor(private http: HttpClient) {
  }

  getAliens(): Observable<{
    formId: string,
    userId: string,
    lastChangedBy: string,
    lastChangedDate: Date,
    form: []
  }> {
    return this.http.get<{
      formId: string,
      userId: string,
      lastChangedBy: string,
      lastChangedDate: Date,
      form: []
    }>(this.alienUrl);
  }

  moveTask(alien: Alien, position: number): void {
    console.log(`Moved ${JSON.stringify(Alien)} to the position ${position}`);
  }
 }
