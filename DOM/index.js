const title = document.getElementById('title');
const nameInput = document.getElementById('name');
const hello = document.getElementById('hello');
const btn = document.getElementById('btn');
const status = document.getElementById('status');

const destinationSelect = document.getElementById('destination');
const ticketsInput = document.getElementById('tickets');

const resultContainer = document.createElement('div');
document.body.appendChild(resultContainer);

resultContainer.style.marginTop = '20px';
resultContainer.style.display = 'grid';
resultContainer.style.gridTemplateColumns = '1fr 1fr 1fr';
resultContainer.style.gap = '10px';
resultContainer.style.fontWeight = 'bold';


nameInput.addEventListener('input', function () {
    hello.textContent = "Привет, " + nameInput.value + "!";
});

btn.addEventListener('click', function () {
    const name = nameInput.value.trim();
    const destination = destinationSelect.value;
    const tickets = ticketsInput.value;

    if (!name || !destination || !tickets || tickets <= 0) {
        alert("Пожалуйста, заполните все поля корректно!");
        return;
    }

    status.textContent = 'Вы купили билет(ы)';
    status.style.color = 'green';

    resultContainer.innerHTML = `
        <div>Имя</div>
        <div>Направление</div>
        <div>Количество билетов</div>
        
        <div>${name}</div>
        <div>${destination}</div>
        <div>${tickets}</div>
    `;
});

btn.addEventListener("mouseover", function () {
    status.textContent = 'Вы готовы купить билет?';
    status.style.color = 'hwb(80 9% 43%)';
});

btn.addEventListener('dblclick', function () {
    status.textContent = 'Вы купили VIP-билет';
    status.style.color = '#BA55D3';
});
