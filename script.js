async function injectValues() {
    const today = new Date()
    const month = today.getMonth()
    const date = today.getDate()
    const year = today.getFullYear()
    const nextChristmas = new Date(`12/25/${year}`);

    const delta = Math.ceil(Math.abs(nextChristmas - today) / (1000 * 60 * 60 * 24))
    if (!delta) {
        h1 = 'YES'
        h2 = `It's Christmas Day!`
    } else {
        h1 = 'NO';
        h2 = `${delta} days to go for Christmas`
    }
    if (month == 11 && date > 25) {

        h2 = `But, it's Christmas week!`
    }
    document.querySelector('h1').innerText = h1
    document.querySelector('h2').innerText = h2

    document.querySelector('h1').classList.add('ifNotBlocked')
}

let h1, h2
injectValues();

