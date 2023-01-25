// Animasi skill

listSkill = document.querySelectorAll(".skill li")

listSkill.forEach(el => {
    el.addEventListener("mouseover", function(){
        span = el.querySelector(".bungkus span")
        span.style.width = `${span.parentElement.nextElementSibling.innerHTML}`
    })
});

listSkill.forEach(el => {
    el.addEventListener("mouseout", function(){
        span = el.querySelector(".bungkus span")
        span.style.width = "0"
    })
});

// Responsive



const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
    const sections = document.querySelectorAll("section")
    sections.forEach(el => {
            if (el.classList.contains('dark')) {
                el.classList.remove('dark')
            } else {
                el.classList.add('dark')  
            }
        }
    )

    const html = document.querySelectorAll("html")
    html.forEach(el => {
            if (el.classList.contains('dark')) {
                el.classList.remove('dark')
            } else {
                el.classList.add('dark')  
            }
        }
    )

    const button = document.querySelectorAll("button")
    button.forEach(el => {
            if (el.classList.contains('dark')) {
                el.classList.remove('dark')
            } else {
                el.classList.add('dark')  
            }
        }
    )

    const path = document.querySelectorAll("path")
    path.forEach(el => {
            if (el.classList.contains('dark')) {
                el.classList.remove('dark')
            } else {
                el.classList.add('dark')  
            }
        }
    )

    const nav = document.querySelectorAll("nav")
    nav.forEach(el => {
            if (el.classList.contains('dark')) {
                el.classList.remove('dark')
            } else {
                el.classList.add('dark')  
            }
        }
    )

    const p = document.querySelectorAll("p")
    p.forEach(el => {
            if (el.classList.contains('dark')) {
                el.classList.remove('dark')
            } else {
                el.classList.add('dark')  
            }
        }
    )
    
    const divs = document.querySelectorAll("div")
    divs.forEach(el => {
            if (el.classList.contains('dark')) {
                el.classList.remove('dark')
            } else {
                el.classList.add('dark')  
            }
        }
    )

    const span = document.querySelectorAll("span")
    span.forEach(el => {
            if (el.classList.contains('dark')) {
                el.classList.remove('dark')
            } else {
                el.classList.add('dark')  
            }
        }
    )
    
    

    if(toggle.innerHTML === "Light mode"){
        e.target.innerHTML = 'Dark mode'
    }else{
        e.target.innerHTML = 'Light mode'
    }
})

function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)
