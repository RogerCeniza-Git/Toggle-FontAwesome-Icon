import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Icon, IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isActive = true;
  fasStar: [IconPrefix, IconName] = ['fas', 'star']
  fasDefault: [IconPrefix, IconName] = ['fas', 'star']
  farStar: [IconPrefix, IconName] = ['far', 'star']

  constructor() { }

  ngOnInit(): void {
  }
}
