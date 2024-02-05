import { ascii_cubes } from './ascii.js';
import { comm, error } from './commands/langs.js';

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
export const app = document.getElementById('app');


// Funções para adição de texto e arte no terminal

function add_text(text, classname) {
    const p = document.createElement('p');
    p.innerHTML = text;
    if (classname !== undefined) {
        p.className = classname;
    } else {
        p.className = 'terminal_text';
    
    }
    app.appendChild(p);
}

function add_art(art, classname) { 
    const pre = document.createElement('pre');
    pre.innerHTML = art;
    pre.className = classname;
    app.appendChild(pre);

}

// Funções para manipular o idioma

function get_lang() {
    return window.localStorage.getItem('lang');
}

function alternate_language() {

    const language = get_lang();

    if (language == 'ptbr') {
        window.localStorage.setItem('lang', 'en');
    } else {
        window.localStorage.setItem('lang', 'ptbr');
    }

}


function block_previous_input() {
    const input = document.querySelectorAll('input');
    if (input.length > 0) {
        input.forEach((element) => {
            element.setAttribute('disabled', 'true');
        });
    }
}

function create_terminal_input_line(language) {
    const p = document.createElement('p');
    const span_dots = document.createElement('span');

    p.setAttribute('class', 'pre_line');

    if (language == 'ptbr') {
        p.innerHTML = 'convidado<span class="highlight">@</span>devlucasborges.com';
    } else {
        p.innerHTML = 'guest<span class="highlight">@</span>devlucasborges.com';
    }

    span_dots.setAttribute('class', 'dots');
    span_dots.innerHTML = ":~$  ";
    p.appendChild(span_dots);
    app.appendChild(p);
    const div = document.createElement('div');
    div.setAttribute('class', 'type');
    const input = document.createElement('input');
    div.appendChild(p);
    div.appendChild(input);
    app.appendChild(div);

    return input;
}

export function next_line() {
    block_previous_input();
    const input = create_terminal_input_line(get_lang());

    input.focus();
}

export async function get_input_command() {
    const inputs = document.querySelectorAll('input');
    let value = '';
    for (let input of inputs) {
        if (!input.disabled) {
            value = input.value;
            break;
        }
    }
    const commands = comm(get_lang());

    
    find: {
        for (let key in commands) {
            if (value == key) {
                add_text(commands[key], 'command');
                next_line();
                return;
            }
        }
        if (value == 'lang') {
            alternate_language();
            load_terminal();
            return;
        }
        if (value == 'banner') {
            add_art(ascii_cubes, 'ascii');
            next_line();
            return;
        }
        if (value == '') {
            next_line();
            return;
        }
        if (value == 'clear') {
            app.innerHTML = '';
            next_line();
            return;
        }
        add_text(error(get_lang()), 'error');
        next_line();
    }
}

export async function load_terminal() {

    app.innerHTML = '';
    const lang = get_lang();

    if (lang == null) {
        window.localStorage.setItem('lang', 'en');
    }

    switch (lang) {
        case 'ptbr':
            add_art(ascii_cubes, 'ascii');
            await delay(400);
            add_text('Iniciando terminal...');
            await delay(800);
            add_text('Digite "<span class="highlight">lang"</span> para mudar o idioma');
            add_text('Digite "<span class="highlight">help</span>" para ver a lista de comandos');
            break;
        case 'en':
            add_art(ascii_cubes, 'ascii');
            await delay(400);
            add_text('Launching terminal...');
            await delay(800);
            add_text('Run "<span class="highlight">lang"</span> to change the language');
            add_text('Run "<span class="highlight">help</span>" for a list of commands');
            break;
    }

    await delay(500);
    next_line();
}


export default { delay, app, get_input_command, load_terminal, next_line }