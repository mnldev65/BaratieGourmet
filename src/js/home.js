document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.container')

    const historiaBtn = document.getElementById('historia-btn')
    const conceitoBtn = document.getElementById('conceito-btn')
    const diferencialBtn = document.getElementById('diferencial-btn')
    const filosofiaBtn = document.getElementById('filosofia-btn')
    const verTudoBtn = document.getElementById('verTudo-btn')

    const ocultarTodos = () => {
        containers.forEach(container => container.classList.add('oculto'));
    };

    const mostrarContainer = (index) => {
        ocultarTodos();
        if (containers[index]) {
            containers[index].classList.remove('oculto');
        }
    };

    mostrarContainer(0);

    const mostrarTodos = () => {
        containers.forEach(container => container.classList.remove('oculto'));
    };

    const handleClick = (event) => {
        const id = event.target.id;
        switch (id) {
            case 'historia-btn':
                mostrarContainer(0);
                break;
            case 'conceito-btn':
                mostrarContainer(1);
                break;
            case 'diferencial-btn':
                mostrarContainer(2);
                break;
            case 'filosofia-btn':
                mostrarContainer(3);
                break;
            case 'verTudo-btn':
                mostrarTodos();
                break;
            default:
                break;
        }
    };

    [historiaBtn, conceitoBtn, diferencialBtn, filosofiaBtn, verTudoBtn].forEach(btn => {
        btn.addEventListener('click', handleClick);
    });
})


