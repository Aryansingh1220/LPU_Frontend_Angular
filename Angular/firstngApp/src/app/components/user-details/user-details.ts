import { Component,EventEmitter,Input, Output } from '@angular/core';


@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  editMode=false;
  @Input() id=1;
  @Input() name='Aryan Singh';
  @Input() age=21;
  @Input() address='Bijnor';
  @Input() gender='Male'
  @Input() pic='';
  @Output() onupdate=new EventEmitter<any>();
  @Output() updateEvent = new EventEmitter<any>();


  informParent(){
    this.onupdate.emit({name:this.name,gender:this.gender,age:this.age,address:this.address})
  }
  toggleEdit(){
    this.editMode=!this.editMode;
  }

  updateUser() {
    this.updateEvent.emit({
      name: this.name,
      age: this.age,
      address: this.address,
      gender: this.gender
    });

//   constructor(){

//     console.log("In constructor of userDetails ");
//     console.log('Gender: ',this.name)
//     console.log('Age: ',this.age)
//     console.log('Address: ',this.address)
//     console.log('Gender: ',this.gender)
//   }

//   ngOnInit(){
//     console.log("In ngOnInit of userDetails ");
//     console.log('Gender: ',this.name)
//     console.log('Age: ',this.age)
//     console.log('Address: ',this.address)
//     console.log('Gender: ',this.gender)

  }
}
