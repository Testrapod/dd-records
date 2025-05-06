function createRecordsCarousel(records, floor) {
    // Get contents div
    const contents = document.getElementById("contents");

    const carouselId = "recordsCarousel" + floor;
    const indicatorsId = "recordsCarouselIndicators" + floor;
    const innerId = "recordsCarouselInner" + floor;

    // Create carousel
    const carousel = document.createElement("div");
    carousel.className = "carousel slide d-none";
    carousel.id = carouselId;

    // Create indicators
    const indicators = document.createElement("div");
    indicators.className = "carousel-indicators";
    indicators.id = indicatorsId;

    // Create inner
    const inner = document.createElement("div");
    inner.className = "carousel-inner";
    inner.id = innerId;

    // Create previous and next buttons
    const prevBtn = `
        <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
    `;
    const nextBtn = `
        <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    `;

    // Fill carousel with records
    records.forEach((record, index) => {
        // Create carousel indicators
        const button = document.createElement("button");
        button.type = "button";
        button.setAttribute("data-bs-target", "#recordsCarousel");
        button.setAttribute("data-bs-slide-to", index);
        if (index === 0) {
            button.classList.add("active");
            button.setAttribute("aria-current", "true");
        }

        indicators.appendChild(button);

        // Create carousel inner
        const div = document.createElement("div");
        div.classList.add("carousel-item");
        if (index === 0) div.classList.add("active");

        div.innerHTML = `
            <div id="${record.videoId}" class="d-block w-100"></div>
            <div class="carousel-caption d-none d-md-block">
                <h5>${record.artist} - ${record.title}</h5>
                <p>${record.description}</p>
            </div>
        `;

        inner.appendChild(div);
    });

    // Assemble carousel
    carousel.appendChild(indicators);
    carousel.appendChild(inner);
    carousel.insertAdjacentHTML("beforeend", prevBtn + nextBtn);

    // Append carousel to contents
    contents.appendChild(carousel);
}

function showRecordsCarousel(floor) {
    // Hide all carousels
    const carousels = document.getElementsByClassName("carousel")
    for (let i = 0; i < carousels.length; i++) {
        carousels[i].classList.add("d-none");
    }

    // Show the selected carousel
    if (floor !== 4) {
        const carouselId = "recordsCarousel" + floor;
        const carousel = document.getElementById(carouselId);
        carousel.classList.remove("d-none");
    } else {
        return;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Create carousels for each floor
    createRecordsCarousel(first_floor_records, 1);
    createRecordsCarousel(second_floor_records, 2);
    createRecordsCarousel(third_floor_records, 3);

    const floor = document.getElementById("floor");
    const description = document.getElementById("description");
    const navLinks = document.querySelectorAll(".nav-link");

    // Set up event listeners for nav links
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();  // Prevent a tag default action
    
            navLinks.forEach(l => l.classList.remove("active"));
            navLinks.forEach(l => l.removeAttribute("aria-current"));
    
            this.classList.add("active");
            this.setAttribute("aria-current", "page");
    
            if (this.id === "first_floor") {
                floor.innerHTML = "1F 로비";
                description.classList.remove("d-none");
                showRecordsCarousel(1);
            } else if (this.id === "second_floor") {
                floor.innerHTML = "2F 아티스트 존";
                description.classList.remove("d-none");
                showRecordsCarousel(2);
            } else if (this.id === "third_floor") {
                floor.innerHTML = "3F 플레이스 존";
                description.classList.remove("d-none");
                showRecordsCarousel(3);
            } else if (this.id === "fourth_floor") {
                floor.innerHTML = "4F 관계자 외 출입금지";
                description.classList.add("d-none");
                showRecordsCarousel(4);
            }
    
            this.blur();
        });
    });

    // Show first floor carousel by default
    showRecordsCarousel(1);
});