const show = document.getElementById('show')
let i = 0

const add = () => {
    i++
    show.innerHTML = i
}

const sub = () => {
    i--
    show.innerHTML = i
} 