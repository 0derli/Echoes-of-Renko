const dialog = {
    step1: {
        text: "я вижу тебя, Ренко..",
        options: [
            { label: "кто это?", next: "step2" },
            { label: "пошел ты", next: "step3" },
        ]
    },
    step2: {
        text: "скоро ты все узнаешь"
    },
    step3: {
        text: "эй это было грубо"
    }
}

function renderSteps(id) {
    const render = document.getElementById('messages');
    const step = dialog[id];
    const stepText = step.text;

    const paragraph = document.createElement('p');
    paragraph.textContent = stepText;
    render.appendChild(paragraph);

    const variants = step.options;

    if (variants) {
        const panel = document.createElement('div');
        variants.forEach(variant => {
            const btnVariant = document.createElement('button');
            btnVariant.textContent = variant.label;
            panel.appendChild(btnVariant);
            btnVariant.onclick = function () {
                const otvet = document.createElement('p');
                otvet.textContent = variant.label;
                render.appendChild(otvet);
                panel.remove();
                renderSteps(variant.next);
            }
        });
        render.appendChild(panel);
    }




}

renderSteps("step1");