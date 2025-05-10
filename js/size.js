function checkScreenSize() {
    if (window.innerWidth < 768) {
        return "MOBILE";
    } else {
        return "DESKTOP";
    }
}

function setFooterText() {
    const screenSize = checkScreenSize()
    const footer = document.getElementById("footer");
    
    if (screenSize === "MOBILE") {
        footer.innerHTML = `<p><span class="text-white">PC</span> 혹은 <span class="text-white">태블릿</span> 환경을 권장합니다</p>`;
    } else if (screenSize === "DESKTOP") {
        footer.innerHTML = `<p>Created by <span class="text-white">동동</span></p>`;
    }
}

function getYoutubeIframeSize() {
    const screenSize = checkScreenSize()
    
    if (screenSize === "MOBILE") {
        return {
            height: "230",
            width: "320",
        };
    } else if (screenSize === "DESKTOP") {
        return {
            height: "390",
            width: "640",
        };
    }
}