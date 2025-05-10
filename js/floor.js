function createRecordsCarousel(records, floor) {
    const $contents = $("#contents");

    const carouselId = "recordsCarousel" + floor;
    const indicatorsId = "recordsCarouselIndicators" + floor;
    const innerId = "recordsCarouselInner" + floor;

    // Create carousel (default hidden)
    const $carousel = $("<div>")
        .addClass("carousel slide d-none")
        .attr("id", carouselId);

    // Create indicators
    const $indicators = $("<div>")
        .addClass("carousel-indicators")
        .attr("id", indicatorsId);

    // Create inner
    const $inner = $("<div>")
        .addClass("carousel-inner")
        .attr("id", innerId);

    // Fill carousel with records
    records.forEach((record, index) => {
        // Create indicator button
        const $button = $("<button>")
            .attr({
                type: "button",
                "data-bs-target": `#${carouselId}`,
                "data-bs-slide-to": index
            });
        if (index === 0) $button.addClass("active").attr("aria-current", "true");

        $indicators.append($button);

        // Create inner item
        const $item = $("<div>").addClass("carousel-item");
        if (index === 0) $item.addClass("active");

        $item.html(`
            <div id="${record.videoId}" class="d-block w-100"></div>
            <div class="carousel-caption px-3 bg-dark bg-opacity-50 backdrop-blur rounded-3">
                <h5>${record.artist} - ${record.title}</h5>
                <div>${record.description}</div>
            </div>
        `);

        $inner.append($item);
    });

    // Create nav buttons
    const $prevBtn = $(`
        <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
    `);

    const $nextBtn = $(`
        <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    `);

    // Assemble and append
    $carousel.append($indicators, $inner, $prevBtn, $nextBtn);
    $contents.append($carousel);
}

function showRecordsCarousel(floor) {
    // Hide all carousels
    $(".carousel").addClass("d-none");

    // Show the selected carousel if floor is not 4
    if (floor !== 4) {
        const carouselId = "#recordsCarousel" + floor;
        $(carouselId).removeClass("d-none");
    } else {
        return;
    }
}

function createSlideCarouselListener(floor) {
    const $carousel = $("#recordsCarousel" + floor);

    $carousel.on("slid.bs.carousel", function () {
        const $activeItem = $carousel.find(".carousel-item.active");

        const $iframe = $activeItem.find("iframe");
        const iframeId = $iframe.attr("id");

        if (iframeId) {
            const images = getRecordByVideoId(iframeId).galleryBackgroudImages;

            crossfadeBackground($("#gallery1"), images[0]);
            crossfadeBackground($("#gallery2"), images[1]);
        }
    });
}

function crossfadeBackground($card, newImageUrl) {
    $card.fadeTo(300, 0, function () {
        $card.css('background-image', `url(${newImageUrl})`);
        $card.fadeTo(500, 1);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Create carousels for each floor
    createRecordsCarousel(first_floor_records, 1);
    createRecordsCarousel(second_floor_records, 2);
    createRecordsCarousel(third_floor_records, 3);

    // Create slide carousel listeners
    createSlideCarouselListener(1);
    createSlideCarouselListener(2);
    createSlideCarouselListener(3);

    const $floor = $("#floor");
    const $description = $("#description");
    const $navLinks = $(".nav-link");

    // Set up event listeners for nav links
    $navLinks.on("click", function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        $navLinks.removeClass("active").removeAttr("aria-current");

        const $this = $(this);
        $this.addClass("active").attr("aria-current", "page");

        const id = $this.attr("id");

        if (id === "first_floor") {
            $floor.addClass("d-none").html("1F 로비");
            $description.removeClass("d-none");
            showRecordsCarousel(1);
        } else if (id === "second_floor") {
            $floor.removeClass("d-none").html("2F 아티스트 존");
            $description.removeClass("d-none");
            showRecordsCarousel(2);
        } else if (id === "third_floor") {
            $floor.removeClass("d-none").html("3F 플레이스 존");
            $description.removeClass("d-none");
            showRecordsCarousel(3);
        } else if (id === "fourth_floor") {
            $floor.removeClass("d-none").html("4F 관계자 외 출입금지");
            $description.addClass("d-none");
            showRecordsCarousel(4);
        }

        $this.blur();
    });

    // Set footer text based on screen size
    setFooterText();

    // Show first floor carousel by default
    showRecordsCarousel(1);
});