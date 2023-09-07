import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {


public length:number = 0;
public breadth:number = 0;

public Result:number = 0;

area(){
this.Result = this.length * this.breadth;
}

perimetor(){
this.Result = 2 *(this.length * this.breadth);
}

}




