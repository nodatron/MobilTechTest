import { Component, OnInit } from '@angular/core';

import { AlienService } from './alien.service';

import { Alien } from '../alien';

@Component({
  selector: 'app-alien',
  templateUrl: './alien.component.html',
  styleUrls: ['./alien.component.css'],
  providers: [AlienService],
})
export class AlienComponent implements OnInit {
  userId: string;
  lastChangedBy: string;
  lastChangedDate: Date;
  formId: string;
  aliens: Alien[];

  constructor(private alienService: AlienService) {
  }

  ngOnInit() {
    this.getAliens();
  }

  getAliens(): void {
    this.alienService.getAliens()
      .subscribe(res => {
        this.formId = res.formId;
        this.userId = res.userId;
        this.lastChangedBy = res.lastChangedBy;
        this.lastChangedDate = res.lastChangedDate;
        this.aliens = res.form.map(f => new Alien(f.id, f.caption, f.type));
      });
  }

  move(alien: Alien, pos: number) {
    this.alienService.moveTask(alien, pos);
  }
}
