import './style.css'
import { setupCounter } from './counter.ts'
import { populateLaptops } from './populateLaptops.ts'
import type {User} from './User.ts'
import type { Laptop } from './Laptop.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
  <div>
    <h1>Get started</h1>
  </div>
  <button id="counter" type="button" class="counter"></button>
  <table id="laptops">
    <thead>
      <tr>
        <th>Brand</th>
        <th>Model</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  </Section>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
populateLaptops(document.querySelector<HTMLTableElement>('#laptops')!, 'http://localhost:3000/laptops');


function getData(): Promise<any>|string{
  // if the is ready from local storage return it
  // else getData from server, then return promise

  var data =localStorage.getItem('mydata');
  if(data){
    return data;
  }
  return fetch('http://localhost:3000/laptops').then(res => res.json());
}

function showData(){
  var data=getData();
  // narrowing the type

  if(typeof data === 'string'){
    console.log(`from localStorage data ${data}`);
  }

  //else received promise

  if(data instanceof Promise){
    data.then(json=> console.log(json));
  }

}

showData();

async function getLaptopData():Promise<Laptop[]>{
  var resp=await fetch ('http://localhost:3000/laptops');

  var json=await resp.json() as Laptop[]; 

  return json;

}

getLaptopData().then(laptops => 
{
  for (let lp of laptops){
     console.log(lp);
  }
}

);