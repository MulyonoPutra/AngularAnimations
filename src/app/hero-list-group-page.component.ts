import { Component } from '@angular/core';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-hero-list-groups-page',
  template: `
    <section>
      <h2>Hero List Group</h2>

      <app-hero-list-groups [heroes]="heroes" (remove)="onRemove($event)"></app-hero-list-groups>
    </section>
  `
})
export class HeroListGroupPageComponent {
  heroes = HEROES.slice();

  onRemove(id: number) {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/