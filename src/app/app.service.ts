import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  // url of the endpoint
  private alienUrl = 'http://www.mocky.io/v2/59f7760a2f0000ab1d55864e';

  constructor(private http: HttpClient) {
  }

  /**
   * @description calls the endpoint and returns the data
   * @returns {Observable<{
   *     formId: string,
   *     userId: string,
   *     lastChangedBy: string,
   *     lastChangedDate: Date,
   *     form: []
   *   }>} the data from the http call
   * @memberof AppService
   */
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
 }
