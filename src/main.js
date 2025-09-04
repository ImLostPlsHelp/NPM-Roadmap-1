import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc.js'
import timezone from 'dayjs/plugin/timezone.js'
dayjs.extend(utc)
dayjs.extend(timezone)

document.querySelector('#app').innerHTML = `
  <div class="date-container">
  <p>${dayjs.tz.guess()}</p>
    <h1>${dayjs().format("HH:mm:ss")}</h1>
    <p>${dayjs().format("DD MMMM YYYY")}</p>
  </div>
`

// setupCounter(document.querySelector('#counter'))
