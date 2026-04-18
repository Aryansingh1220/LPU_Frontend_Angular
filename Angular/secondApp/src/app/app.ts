import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LaptopObject } from './components/laptop-object/laptop-object';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LaptopObject],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'secondApp';
  laptops=[
    {
      id:"101",
      brand:"HP",
      price:"99999",
      ram:8
    },
    {
      id:"102",
      brand:"ASUS",
      price:"89999",
      ram:16
    },
    {
      id:"103",
      brand:"DELL",
      price:"79999",
      ram:4
    }
  ]

}
