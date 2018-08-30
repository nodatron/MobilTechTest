import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

import { Alien } from './alien';

/**
 * @description App Component
 * @export AppComponent
 * @class AppComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService],
})
export class AppComponent implements OnInit { // implement OnInit to get access to ngOnInit to make http request
  userId: string;
  lastChangedBy: string;
  lastChangedDate: Date;
  formId: string;
  aliens: Alien[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getAliens();
  }

  /**
   * @description calls the service to retrieve the data
   * @memberof AppComponent
   */
  getAliens(): void {
    this.appService.getAliens()
      .subscribe(res => {
        this.formId = res.formId;
        this.userId = res.userId;
        this.lastChangedBy = res.lastChangedBy;
        this.lastChangedDate = res.lastChangedDate;
        this.aliens = res.form.map(f => new Alien(f));
      });
  }
  /**
   * @description handles reordering of the data after drop event
   * @param {Event} e the event which contains the dragData which is the index of the dragged item
   * @param {number} index the index where the dragged item was dropped
   * @memberof AppComponent
   */
  onItemDrop(e: Event, index: number) {
    const data = this.aliens[e.dragData];
    const remaining = this.aliens.filter((alien, idx) => idx !== e.dragData);
    // to reorder we place all remaining items infront of the new index into the array, then the data moved, followed by the rest of the data
    this.aliens = [
      ...remaining.slice(0, index),
      data,
      ...remaining.slice(index)
    ];
  }
}
