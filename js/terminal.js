/**
 * @fileoverview This file contains the implementation of a terminal in JavaScript.
 * It exports several functions and constants related to the terminal functionality.
 * The terminal supports commands, language switching, command history, and more.
 * 
 * @module terminal
 * @requires ascii_cubes
 * @requires comm
 * @requires error
 */

import { ascii_cubes } from "./ascii.js";
import { comm, error } from "./commands/langs.js";

/**
 * Delays the execution for a specified amount of time.
 * 
 * @param {number} ms - The delay time in milliseconds.
 * @returns {Promise} A promise that resolves after the specified delay.
 */
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * The DOM element representing the terminal application.
 * 
 * @type {HTMLElement}
 */
export const app = document.getElementById("app");

/**
 * The command history of the terminal.
 * 
 * @type {Array<string>}
 */
const history = [''];

/**
 * A temporary history used for navigating through the command history.
 * 
 * @type {Array<string>}
 */
let temp_history = [];

/**
 * The typing speed for the terminal text.
 * 
 * @type {number} 
 */

const type_speed = 0.1;

/**
 * Adds text to the terminal output.
 * 
 * @param {string} text - The text to be added.
 * @param {string} [classname] - The CSS class name to be applied to the text element.
 */
async function add_text(text, classname) {
  const p = document.createElement("p");
  if (classname !== undefined) {
    p.className = classname;
  } else {
    p.className = "terminal_text";
  }
  const typed = new Typed(p, {
    strings: [text],
    typeSpeed: type_speed,
    backSpeed: 0,
    loop: false,
    showCursor: true,
    onComplete: () => resolve(),
  });

  app.appendChild(p);

  await new Promise(resolve => typed.options.onComplete = resolve);
}

/**
 * Adds ASCII art to the terminal output.
 * 
 * @param {string} art - The ASCII art to be added.
 * @param {string} [classname] - The CSS class name to be applied to the pre element.
 */
function add_art(art, classname) {
  const pre = document.createElement("pre");
  pre.innerHTML = art;
  pre.className = classname;
  app.appendChild(pre);
}

/**
 * Retrieves the current language setting from local storage.
 * 
 * @returns {string} The current language setting.
 */
function get_lang() {
  return window.localStorage.getItem("lang");
}

/**
 * Toggles the language between "ptbr" and "en" and updates the language setting in local storage.
 */
function alternate_language() {
  const language = get_lang();

  if (language == "ptbr") {
    window.localStorage.setItem("lang", "en");
  } else {
    window.localStorage.setItem("lang", "ptbr");
  }
}

/**
 * Disables the previous input elements in the terminal.
 */
function block_previous_input() {
  const input = document.querySelectorAll("input");
  if (input.length > 0) {
    input.forEach((element) => {
      element.setAttribute("disabled", "true");
    });
  }
}

/**
 * Mounts a terminal line with the prompt, input, and dots.
 * 
 * @param {HTMLElement} p - The paragraph element for the prompt.
 * @param {HTMLElement} div - The div element for the terminal line.
 * @param {HTMLElement} input - The input element for the user input.
 * @param {HTMLElement} span_dots - The span element for the dots.
 * @param {HTMLElement} app - The terminal application element.
 */
function mount_terminal_line(p, div, input, span_dots, app) {
  span_dots.setAttribute("class", "dots");
  span_dots.innerHTML = ":~$  ";
  p.appendChild(span_dots);
  app.appendChild(p);

  div.setAttribute("class", "type");

  div.appendChild(p);
  div.appendChild(input);
  app.appendChild(div);
}

/**
 * Creates a new input line for the terminal with the appropriate prompt.
 * 
 * @param {string} language - The current language setting.
 * @returns {HTMLElement} The input element for the user input.
 */
function create_terminal_input_line(language) {
  const p = document.createElement("p");
  const span_dots = document.createElement("span");

  p.setAttribute("class", "pre_line");

  if (language == "ptbr") {
    p.innerHTML = 'visitante<span class="highlight">@</span>devlucasborges.com';
  } else {
    p.innerHTML = 'visitor<span class="highlight">@</span>devlucasborges.com';
  }

  const div = document.createElement("div");
  const input = document.createElement("input");

  mount_terminal_line(p, div, input, span_dots, app);
  
  return input;
}

/**
 * Adds a command to the command history.
 * 
 * @param {string} command - The command to be added.
 */
function add_to_history(command) {
  history.push(command);
}

/**
 * Navigates through the command history.
 * 
 * @param {string} direction - The direction to navigate. Can be "forward" or "backward".
 */
export function navigate_on_history(direction) {
  if (temp_history.length === 0) {
    temp_history = [...history];
  }
  const input = get_recent_input();

  if (direction == "forward") {
    if (temp_history.length > 0) {
      const command = temp_history.pop();
      input.value = command;
    }
  }
  if (direction == "backward") {
    if (temp_history.length > 0) {
      const command = temp_history.shift();
      input.value = command;
    }
  }
}

/**
 * Moves to the next line in the terminal, disabling the previous input and creating a new input line.
 */
export function next_line() {
  block_previous_input();
  const input = create_terminal_input_line(get_lang());

  input.focus();
}

/**
 * Retrieves the most recent input element in the terminal.
 * 
 * @returns {HTMLElement} The most recent input element.
 */
export function get_recent_input() {
  const inputs = document.querySelectorAll('input');
  let input = null;
  for (let inpt of inputs) {
    if (!inpt.disabled) {
      input = inpt;
      break;
    }
  }
  return input;
}

/**
 * Processes the user input command and performs the corresponding action.
 */
export async function get_input_command() {
  const recent_input = get_recent_input()
  const value = recent_input.value;
  recent_input.setAttribute("disabled", "true");
  add_to_history(value);
  const commands = comm(get_lang());

  find: {
    for (let key in commands) {
      if (value == key) {
        await add_text(commands[key], "command");
        next_line();
        return;
      }
    }
    if (value == "lang") {
      alternate_language();
      load_terminal();
      return;
    }
    if (value == "banner") {
      add_art(ascii_cubes, "ascii");
      next_line();
      return;
    }
    if (value == "") {
      next_line();
      return;
    }
    if (value == "clear") {
      app.innerHTML = "";
      next_line();
      return;
    }
    if (value == "exit") {
      window.location.href = "https://devlucasborges.com";
      return;
    }
    await add_text(error(get_lang()), "error");
    next_line();
  }
}

/**
 * Loads the first screen of the terminal based on the language setting.
 * 
 * @param {string} lang - The current language setting.
 */
async function load_first_screen(lang) {
  switch (lang) {
    case "ptbr":
      await add_art(ascii_cubes, "ascii");
      await delay(500);
      await add_text("Iniciando terminal...");
      await delay(1500);
      await add_text(
        'Digite "<span class="highlight">lang"</span> para mudar o idioma | <span class="highlight">pt-br</span> / en-us<br><br>Digite "<span class="highlight">help</span>" para ver a lista de comandos'
      );
      break;
    case "en":
      add_art(ascii_cubes, "ascii");
      await delay(400);
      await add_text("Launching terminal...");
      await delay(800);
      await add_text(
        'Run "<span class="highlight">lang"</span> to change the language | pt-br / <span class="highlight">en-us</span><br><br>Run "<span class="highlight">help</span>" for a list of commands'
      );
      break;
  }
}

/**
 * Loads the terminal by clearing the application element and displaying the first screen.
 */
export async function load_terminal() {
  app.innerHTML = "";
  if (!get_lang()) {
    window.localStorage.setItem("lang", "ptbr");
  }
  const lang = get_lang();
  await load_first_screen(lang);
  next_line();
}


