import { app, delay, get_input_command, load_terminal, next_line } from './terminal.js';

app.addEventListener("keypress", async function (e) {
    if (e.key === 'Enter') {
        await delay(200);
        get_input_command();
    }
})

// ctrl + l to clear the terminal
app.addEventListener("keydown", async function (e) {
    if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        app.innerHTML = '';
        next_line();
    }
})

document.addEventListener("click", async function (e) {
    const input = document.querySelector('input');
    input.focus();
})


load_terminal();