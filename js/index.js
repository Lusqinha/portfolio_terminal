import { app, delay, get_input_command, load_terminal } from './terminal.js';

app.addEventListener("keypress", async function (e) {
    if (e.key === 'Enter') {
        await delay(200);
        get_input_command();
    }
})

app.addEventListener("click", async function (e) {
    const input = document.querySelector('input');
    input.focus();
})


load_terminal();