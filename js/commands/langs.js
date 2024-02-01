import { comm_ptbr, error_ptbr } from "./ptbr.js";
import { comm_en, error_en } from "./en.js";

export function comm(lang) {
    if (lang == 'ptbr') {
        return comm_ptbr;
    } else {
        return comm_en;
    }
}

export function error(lang) {
    if (lang == 'ptbr') {
        return error_ptbr;
    } else {
        return error_en;
    }
}