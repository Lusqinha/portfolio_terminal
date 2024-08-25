import {
    app, delay,
    get_input_command, get_recent_input,
    navigate_on_history, load_terminal,
    next_line
} from './terminal.js';


app.addEventListener("keypress", async function (e) {
    if (e.key === 'Enter') {
        await delay(200);
        get_input_command();
    }
})


app.addEventListener("keydown", async function (e) {
    if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        app.innerHTML = '';
        next_line();
    }
})

app.addEventListener("click", async function (e) {
    const input = get_recent_input(); 
    input.focus();
})


app.addEventListener("keydown", async function (e) { 

    if (e.key === 'ArrowUp') {
        navigate_on_history('forward');
    }
    if (e.key === 'ArrowDown') {
        navigate_on_history('backward');
    }

})

app.addEventListener("DOMNodeInserted", function (e) {
    app.scrollTop = app.scrollHeight;
})
load_terminal();