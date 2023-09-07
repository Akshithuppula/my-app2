import { Component, numberAttribute } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {


public dice:any = 0;

role(){
  this.dice = Math.floor((Math.random()*6)+1)
}

}

