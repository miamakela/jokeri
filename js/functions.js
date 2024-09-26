const list = document.querySelector('table')
const p = document.querySelector('p')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    const row = list.insertRow()

    for (let i = 0; i < 7; i++) {
        const col = row.insertCell()
        const randomNumber = Math.floor(Math.random() * 10)
        col.innerHTML = randomNumber
    }

    p.innerHTML = 'Valmiita rivejä ' + list.rows.length
})