import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetails } from './components/user-details/user-details';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'firstNgApp';
  user ={
    name : 'Aryan Singh',
    email: 'aryansinghup6562@gmail.com',
    age: 21,
    address: 'Bijnor,Uttar-Pradesh',
    phoneNo: [9760203187, 7017971564]
  }
  users = [
    {name : 'Aryan Singh',
    email: 'aryansingh@gmail.com',
    age: 21,
    address: 'Bijnor,Uttar-Pradesh',
    phoneNo: [8765432109, 9876543210],
    gender: 'Male',
    pic: "public/images/pngtree.jpg",
    edit:true
    },
    {name : 'Ayush Chahal',
    email: 'ayushchahal44@gmail.com',
    age: 22,
    address: 'Bijnor,Uttar-Pradesh',
    phoneNo: [9760203187, 7017971564],
    gender: 'Male',
    edit:false
    },
    {name : 'Navdeep Rana',
    email: 'navdeeprana@gmail.com',
    age: 14,
    address: 'Bijnor,Uttar-Pradesh',
    phoneNo: [7654321098, 8765432109],
    gender: 'Male',
    pic: "public/images/sunset.jpg",
    edit:true

    }
  ]
  changeTitle(){
    this.title="New Title";
  }

viewType: 'card' | 'list' = 'card';

card() {
  this.viewType = 'card';
}

list() {
  this.viewType = 'list';
}
}

