const pages = document.querySelectorAll(".page");
const content = document.getElementById("content");

const pageData = [
    "Welcome to Page 1.",
    "Hello! This is Page 2.",
    "You're on Page 3.",
    "Welcome to Page 4.",
    "This is Page 5."
];

let currentPage = 0;

const updatePages = () => {
    pages.forEach((page, index) => {
        if (index === currentPage) {
            page.classList.add("active");
        } else {
            page.classList.remove("active");
        }
    });
    content.innerHTML = `<p>${pageData[currentPage]}</p>`;
};

const goPrev = () => {
    if (currentPage > 0) {
        currentPage--;
    } else {
        currentPage = pages.length - 1;
    }
    updatePages();
};

const goNext = () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
    } else {
        currentPage = 0;
    }
    updatePages();
};

pages.forEach((page, index) => {
    page.addEventListener("click", () => {
        currentPage = index;
        updatePages();
    });
});

updatePages();
