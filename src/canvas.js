const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const scale = 20;

canvas.height = 500;
canvas.width = 500;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

export {canvas, c, scale, rows, columns};