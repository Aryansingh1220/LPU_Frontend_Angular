import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetails } from './components/user-details/user-details';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserDetails,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'firstNgApp';
  user ={
    id:1,
    name : 'Aryan Singh',
    email: 'aryansinghup6562@gmail.com',
    age: 21,
    address: 'Bijnor,Uttar-Pradesh',
    phoneNo: [9760203187, 7017971564],
    pic: "public/images/sunset.jpg",
  }
  users = [
    {
      id:1,
      name : 'Aryan Singh',
    email: 'aryansingh@gmail.com',
    age: 21,
    address: 'Bijnor,Uttar-Pradesh',
    phoneNo: [8765432109, 9876543210],
    gender: 'Male',
    pic: "public/images/pngtree.jpg",
    edit:true
    },
    {
      id:2,
      name : 'Ayush Chahal',
    email: 'ayushchahal44@gmail.com',
    age: 22,
    address: 'Bijnor,Uttar-Pradesh',
    phoneNo: [9760203187, 7017971564],
    gender: 'Male',
    pic: "public/images/sunset.jpg",
    edit:false
    },
    {
      id:3,
      name : 'Navdeep Rana',
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

parentAction(data:any){
  console.log("Parent got the data",data);

  for(let i=0;i<this.users.length;i++){
    if(this.users[i].name===data.name){
      this.users.splice(i,1);
      break;
    }
  }
}

 updateUser(data: any) {
  for (let i = 0; i < this.users.length; i++) {
    if (this.users[i].name === data.name) {
      this.users[i].age = data.age + 1;

      break;
    }
  }
}
}