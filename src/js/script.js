import filters from "./filters"
import range from "./range"
import search from "./search"
import "../sass/style.sass"

window.addEventListener("DOMContentLoaded", (e) => {
    filters();
    range();
    search();
});