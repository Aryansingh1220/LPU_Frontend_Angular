import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  @Input() name='Aryan Singh';
  @Input() age=21;
  @Input() address='Bijnor';
  @Input() gender='Male'


  constructor(){

    console.log("In constructor of userDetails ");
    console.log('Gender: ',this.name)
    console.log('Age: ',this.age)
    console.log('Address: ',this.address)
    console.log('Gender: ',this.gender)
  }

  ngOnInit(){
    console.log("In ngOnInit of userDetails ");
    console.log('Gender: ',this.name)
    console.log('Age: ',this.age)
    console.log('Address: ',this.address)
    console.log('Gender: ',this.gender)

  }
}
