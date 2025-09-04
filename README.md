# First project for the "External Package" checkpoint

Packages Used : <br>
- Dayjs

How to call the package
```
import dayjs from 'dayjs'

document.querySelector('#app').innerHTML = `
  <div class="date-container">
    <h1>${dayjs().format("HH:mm:ss")}</h1>
    <p>${dayjs().format("DD MMMM YYYY")}</p>
  </div>
```

<i>(MMMM tells the month in it's entirety e.g.:January)</i>