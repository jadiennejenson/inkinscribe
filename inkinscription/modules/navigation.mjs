export function navbar(links) {
    const navElement = document.querySelector("#nav");
    navElement.className = "bg-sky-200 flex flex-col sm:flex-row sm:border-b sm:border-x-2 px-2";

    const ulElement = document.createElement("ul");
    ulElement.className = "flex flex-col sm:flex-row";

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    const hb = document.querySelector("#hamburgerBtn");
    const pn = document.querySelector("#primaryNav");
    hb.addEventListener("click", () => {
        pn.classList.toggle("hidden");
    });

    links.forEach(e => {
        let listItem = document.createElement("li");
        let linkAnchor = document.createElement("a");
        linkAnchor.href = e.href;
        linkAnchor.textContent = e.name;
        
        const baseClasses = "block py-2 px-3 hover:text-gray-400";
        const activeClasses = "text-black border-2 rounded border-blue-800";
        const inactiveClasses = "text-purple-300";
        
        linkAnchor.className = (currentPage === e.href) ? 
            `${baseClasses} ${activeClasses}` : 
            `${baseClasses} ${inactiveClasses}`;

        listItem.appendChild(linkAnchor);
        ulElement.appendChild(listItem);
    });

    // Append the ul element to the nav element
    navElement.appendChild(ulElement);
}