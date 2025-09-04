import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
import dayjs from 'dayjs'

document.querySelector('#app').innerHTML = `
  <div class="date-container">
    <h1>${dayjs().format("HH:mm:ss")}</h1>
    <p>${dayjs().format("DD MMMM YYYY")}</p>
  </div>
`

// setupCounter(document.querySelector('#counter'))
