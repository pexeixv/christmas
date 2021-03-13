async function injectValues() {
    const res = await fetch('https://worldtimeapi.org/api/ip');
    const data = await res.json();
    const datetime = data.datetime;
    var date = datetime.slice(8, 10);
    var month = datetime.slice(5, 7);
    var year = datetime.slice(0, 4);
    const today = new Date(`${month}/${date}/${year}`);
    const nextChristmas = new Date(`12/25/${year}`);
    const delta = Math.ceil(Math.abs(nextChristmas - today) / (1000 * 60 * 60 * 24));
    if (delta == 0) {
        h1 = 'YES';
        h2 = `It's Christmas Day!`;
    } else {
        h1 = 'NO';
        h2 = `${delta} days to go for Christmas`;
    }
    if (month == '12' && date > 25) {
        h2 = `But, it's Christmas week!`
    }
    document.querySelector('h1').innerText = h1;
    document.querySelector('h2').innerText = h2;

    document.querySelector('h1').classList.add('ifNotBlocked');
}

injectValues();

