const title = document.querySelector('h3')
const ul = document.querySelector('ul')
const reload = document.querySelector('.reload')

window.addEventListener('DOMContentLoaded', () => {
    if(window.navigator.onLine) {
       onLine()
    } else {
        offLine()
    }
})

window.addEventListener('online', () => {
    onLine()
})

window.addEventListener('offline', () => {
    offLine()
})

reload.addEventListener('click', () => {
    window.location.reload()
})

function offLine() {
    title.innerHTML = 'OffLine Internet'
    title.style.color = "red"
    ul.classList.remove('hide')
    reload.classList.remove('hide')
}

function onLine() {
    title.innerHTML = 'OnLine Internet'
    title.style.color = 'green'
    ul.classList.add('hide')
    reload.classList.add('hide')
}