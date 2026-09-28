function message() {
    const container = document.getElementById('messages');
const newMessages = document.createElement('p');
newMessages.textContent = 'привет';
container.appendChild(newMessages);

const btnContainer = document.createElement('div');
btnContainer.className = 'btnBox';

const options = ['привет', 'пока', 'идинах'];

options.forEach(Text => {
const btn = document.createElement('button');
btn.textContent = Text;

btnContainer.appendChild(btn);
btn.onclick = function() {
    const otvet = document.createElement('p');
    otvet.textContent = Text;
    container.appendChild(otvet);

    btnContainer.remove();
}
}
)

container.appendChild(btnContainer);
};

setTimeout(message, 2000);