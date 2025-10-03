export function footer(y) {
    const footerElement = document.querySelector("#footer")
    footerElement.innerHTML=`<p class="text-center text-xs text-neutral-700 py-4">&copy; Jadienne Jenson &copy; ${y} &bull; DWDD 2620</p>`
}