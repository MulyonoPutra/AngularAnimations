import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Hero } from './hero';

@Component({
  selector: 'app-hero-list-enter-leave',
  template: `
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
          [@flyInOut]="'in'" (click)="removeHero(hero.id)">
          <div class="inner">
            <span class="badge">{{ hero.id }}</span>
            <span>{{ hero.name }}</span>
          </div>
      </li>
    </ul>
  `,
  styleUrls: ['./hero-list-page.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class HeroListEnterLeaveComponent {
  @Input() heroes: Hero[];

  @Output() remove = new EventEmitter<number>();

  removeHero(id: number) {
    this.remove.emit(id);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/