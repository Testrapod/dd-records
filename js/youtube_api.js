var players = [];

function onYouTubeIframeAPIReady() {
    const { height, width } = getYoutubeIframeSize();

    for (let i = 0; i < records.length; i++) {
        players[i] = new YT.Player(records[i].videoId, {
            height: height,
            width: width,
            videoId: records[i].videoId,
            playerVars: {
                "playsinline": 1
            },
            events: {
                "onReady": onPlayerReady,
            }
        });
    }
}

function onPlayerReady(event) {
    event.target.playVideo();
}