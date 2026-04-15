import './style.css'
import { setupCounter } from './counter.ts'
import { populateLaptops } from './populateLaptops.ts'

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