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

function createSlideCarouselListener(floor) {
    const $carousel = $("#recordsCarousel" + floor);

    // Set up event listener for carousel slide
    $carousel.on("slid.bs.carousel", function () {
        setGalleryForCarousel($carousel);
    });
}

function setGalleryForCarousel($carousel) {
    // Set the gallery background images for the active carousel item
    const $activeItem = $carousel.find(".carousel-item.active");

    const $iframe = $activeItem.find("iframe");
    const iframeId = $iframe.attr("id");

    const images = getRecordByVideoId(iframeId).galleryBackgroudImages;

    crossfadeBackground($("#gallery1"), images[0]);
    crossfadeBackground($("#gallery2"), images[1]);
}

function crossfadeBackground($card, newImageUrl) {
    $card.fadeTo(300, 0, function () {
        $card.css('background-image', `url(${newImageUrl})`);
        $card.fadeTo(500, 1);
    });
}

function checkDoorlockPassword(password) {
    if (password.replace(/\s+/g, '') === "제오멤하라") {
        const $doorlock = $("#doorlock");
        const $description = $("#description");
        
        $doorlock.addClass("d-none");
        $description.html(`
            관리자 실로 들어왔습니다.<br>
            <br>
            관리자 실 책상에는 메모 한 장과 카세트 테이프가 놓여 있습니다.<br>
            마침 카세트 플레이어도 있네요.<br>
            <br>
            카세트 플레이어에 카세트를 넣고, 메모를 읽어 보시겠습니까?<br>

            <div class="mt-3">
                <button type="button" class="btn btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#secretPlayModal">
                    확인
                </button>
            </div>
        `);
    } else {
        $("#doorlockInput").addClass("is-invalid");
        setTimeout(function () {
            $("#doorlockInput").removeClass("is-invalid");
        }, 1000);
    }
}

function changeFloorText(floor) {
    const $slogan = $("#slogan");
    const $description = $("#description");

    if (floor !== 4) {
        $slogan.removeClass("d-none");
        $description.removeClass("d-none");
    } else {
        $slogan.addClass("d-none");
        $description.removeClass("d-none");
    }

    if (floor === 1) {
        $slogan.html(`
            <h2 class="mb-2">음악으로 여행하다.</h2>
            <h4 class="text-secondary">음악을 통해 여행을 떠나는 기분을 느껴보세요.</h4>
        `);
        $description.html(`
            당신의 여행에 음악을 더해보세요.<br>
            여행의 순간을 더욱 특별하게 만들어 줄겁니다.
        `);
    } else if (floor === 2) {
        $slogan.html(`
            <h2 class="mb-2">음악으로 기억하다.</h2>
            <h4 class="text-secondary">당신의 모든 순간에 음악이 함께하길 바랍니다.</h4>
        `);
        $description.html(`
            음악이 함께한다면<br>
            그 순간은 더욱 오래 기억될 겁니다.
        `);
    } else if (floor === 3) {
        $slogan.html(`
            <h2 class="mb-2">음악으로 떠올리다.</h2>
            <h4 class="text-secondary">멋진 순간들을 음악으로 떠올리세요.</h4>
        `);
        $description.html(`
            음악을 통해 떠오르는 순간들을<br>
            당신과 함께 나누고 싶습니다.
        `);
    } else {
        $slogan.html(``);
        $description.html(`
            관계자 외 출입금지 구역입니다.<br>
            관리자 실로 들어가기 위해선 비밀번호를 입력해주세요.
        `);
    }
}

function changeFloorGallerys(floor) {
    const $gallerys = $("#gallerys");

    if (floor !== 4) {
        $gallerys.removeClass("d-none");

        const $carousel = $("#recordsCarousel" + floor);
        setGalleryForCarousel($carousel);
    } else {
        $gallerys.addClass("d-none");
    }
}

function changeFloorDoorlock(floor) {
    const $doorlock = $("#doorlock");

    if (floor === 4) {
        $doorlock.removeClass("d-none");
    } else {
        $doorlock.addClass("d-none");
    }
}

function changeFloorRecords(floor) {
    $(".carousel").addClass("d-none");

    if (floor !== 4) {
        const carouselId = "#recordsCarousel" + floor;
        $(carouselId).removeClass("d-none");
    } else {
        return;
    }
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

    const $navLinks = $(".nav-link");

    // Set up event listeners for nav links
    $navLinks.on("click", function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        $navLinks.removeClass("active").removeAttr("aria-current");

        const $this = $(this);
        $this.addClass("active").attr("aria-current", "page");

        const id = $this.attr("id");

        if (id === "first_floor") {
            changeFloorText(1);
            changeFloorGallerys(1);
            changeFloorDoorlock(1);
            changeFloorRecords(1);
        } else if (id === "second_floor") {
            changeFloorText(2);
            changeFloorGallerys(2);
            changeFloorDoorlock(2);
            changeFloorRecords(2);
        } else if (id === "third_floor") {
            changeFloorText(3);
            changeFloorGallerys(3);
            changeFloorDoorlock(3);
            changeFloorRecords(3);
        } else if (id === "fourth_floor") {
            changeFloorText(4);
            changeFloorGallerys(4);
            changeFloorDoorlock(4);
            changeFloorRecords(4);
        }

        $this.blur();
    });

    // Set up event listener for doorlock
    $("#doorlockButton").on("click", function() {
        const password = $("#doorlock input").val();
        $("#doorlock input").val("");
        
        checkDoorlockPassword(password);
    });
    $("#doorlock input").on("keypress", function(e) {
        if (e.which === 13) {
            const password = $(this).val();
            $(this).val("");

            checkDoorlockPassword(password);
        }
    });

    // Set up event listener for play music button
    $("#playMusicButton").click(function () {
        playMusic();
    });
    $("#pauseMusicButton").click(function () {
        pauseMusic();
    });
    $("#stopMusicButton").click(function () {
        stopMusic();
    });
    $("#secretPlayModal").on("hidden.bs.modal", function () {
        stopMusic();
    });
    music.addEventListener("ended", function () {
        musicPlaying = false

        music.currentTime = 0;

        $("#playMusicButton").removeClass("d-none");
        $("#pauseMusicButton").addClass("d-none");
        $("#stopMusicButton").addClass("d-none");
    });

    // Set intial state
    setSecritRecordLyrics();
    setFooterText();
});
