const records = [
    ...first_floor_records,
    ...second_floor_records,
    ...third_floor_records,
];

var players = [];

function onYouTubeIframeAPIReady () {
    for (let i = 0; i < records.length; i++) {
        players[i] = new YT.Player(records[i].videoId, {
            height: "390",
            width: "640",
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