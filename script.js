const pages = document.querySelectorAll(".page");
const prevButton = document.querySelector(".prev"); 
const nextButton = document.querySelector(".next"); 

let currentPage = 0; 

const updatePages = () => {
    pages.forEach((page, index) => {
        if (index === currentPage) {
            page.classList.add("active"); 
        } else {
            page.classList.remove("active"); 
        }
    });
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

prevButton.addEventListener("click", goPrev);
nextButton.addEventListener("click", goNext);

updatePages();
