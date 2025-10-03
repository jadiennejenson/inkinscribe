export function header() {
    const headerElement = document.querySelector("#header");
    // Correct grid and spacing classes
    headerElement.className = "grid grid-cols-[auto_44px_44px] gap-2 p-2 px-2 border-b";

    const logo = document.createElement("img");
    logo.src = "images/logo header.jpg";
    logo.alt = "Ink Inscribe Logo";
    logo.width = "300";
    logo.height = "200";

    const account = document.createElement("a");
    account.href = "myprofile";
    account.className = "border w-11 h-11 flex justify-around rounded-full hover:bg-slate-200";
    const accountImg = document.createElement("img");
    accountImg.src = "images/person-circle.svg";
    accountImg.className = "w-4";
    account.appendChild(accountImg);

    const heart = document.createElement("a");
    heart.href = "hearticon";
    heart.className = "border w-11 h-11 flex justify-around rounded-full hover:bg-slate-200";
    const heartImg = document.createElement("img");
    heartImg.src = "images/heart.svg";
    heartImg.className = "w-4";
    heart.appendChild(heartImg);

    const bell = document.createElement("a");
    bell.href = "bellicon";
    bell.className = "border w-11 h-11 flex justify-around rounded-full hover:bg-slate-200";
    const bellImg = document.createElement("img");
    bellImg.src = "images/bell.svg";
    bellImg.className = "w-4";
    bell.appendChild(bellImg);

    headerElement.appendChild(logo);
    headerElement.appendChild(account);
    headerElement.appendChild(heart);
    headerElement.appendChild(bell);
     headerElement.appendChild(hamburgerBtn);
}