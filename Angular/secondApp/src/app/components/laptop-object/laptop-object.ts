import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-laptop-object',
  imports: [CommonModule],
  templateUrl: './laptop-object.html',
  styleUrl: './laptop-object.css',
})
export class LaptopObject {
  // @Input() id="101"
  // @Input() brand="HP"
  // @Input() price="99999"
  // @Input() ram="8"
  @Input() laptop:any;
  
  }
