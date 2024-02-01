import { ascii_cubes } from './ascii.js';
import { comm, error } from './commands/langs.js';

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
export const app = document.getElementById('app');

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

function block_previous_input() {
    const input = document.querySelectorAll('input');
    if (input.length > 0) {
        input.forEach((element) => {
            element.setAttribute('disabled', 'true');
        });
    }
}

export function next_line() {
    block_previous_input();
    const p = document.createElement('p');
    const span_dots = document.createElement('span');

    p.setAttribute('class', 'pre_line');
    p.textContent = "guest@devlucasborges.com";
    span_dots.setAttribute('class', 'dots');
    span_dots.textContent = ":~$ ";
    p.appendChild(span_dots);
    app.appendChild(p);
    const div = document.createElement('div');
    div.setAttribute('class', 'type');
    const input = document.createElement('input');
    div.appendChild(p);
    div.appendChild(input);
    app.appendChild(div);
    input.focus();
}

function remove_input(){
    const div = document.querySelector('.type');
    app.removeChild(div);
}

export async function get_input_command() {
    const value = document.querySelector('input').value;

    if (value == 'lang') {
        if (window.localStorage.getItem('lang') == 'ptbr' || window.localStorage.getItem('lang') == null) {
            window.localStorage.setItem('lang', 'en');
            window.location.reload();
        }else{
            window.localStorage.setItem('lang', 'ptbr');
            window.location.reload();
        }
    }

    const language = window.localStorage.getItem('lang');

    const commands = comm(language);
    console.log(commands);
    
    find: {
        for (let key in commands) {
            if (value == key) {
                add_text(commands[key], 'command');
                next_line();
                return;
            }
        }
        if (value == 'lang') {
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
        add_text(error(language), 'error');
    }
}

function get_lang() {
    return window.localStorage.getItem('lang');
}

export async function load_terminal() {

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
            add_text('Digite "lang" para mudar o idioma');
            add_text('Digite "<span>help</span>" para ver a lista de comandos');
            break;
        case 'en':
            add_art(ascii_cubes, 'ascii');
            await delay(400);
            add_text('Launching terminal...');
            await delay(800);
            add_text('Run "lang" to change the language');
            add_text('Run "<span>help</span>" for a list of commands');
            break;
    }

    await delay(500);
    next_line();
}


export default { delay, app, get_input_command, load_terminal, next_line }