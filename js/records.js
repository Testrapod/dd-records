const first_floor_records = [
    {
        videoId: "t9aZFgD0mic",
        artist: "백예린",
        title: "산책",
        description: "제주도의 밤길을 산책하는 순간이 떠오른다. 제주도의 아름다운 풍경과 함께 듣는다면 더욱 특별한 경험이 될 것이다.",
        galleryBackgroudImages: [
            "img/floor1/jeju1.jpg",
            "img/floor1/jeju2.jpg",
        ],
    },
    {
        videoId: "NzNntz-YA0U",
        artist: "스텔라장",
        title: "L’Amour, Les Baguettes, Paris",
        description: "파리의 아름다운 야경이 에펠탑의 모습과 함께 그려진다. 우리가 상상했던 낭만적인 순간들이 가득 담겨있다.",
        galleryBackgroudImages: [
            "img/floor1/france.jpg",
            "img/floor1/swiss.jpg",
        ],
    },
    {
        videoId: "4FvqdZtH4xo",
        artist: "잔나비",
        title: "가을밤에 든 생각",
        description: "노을지는 울릉도 바닷길을 드라이빙하며 듣고 싶은 노래. 어디선가 모를 치킨 냄새가 나를 반긴다.",
        galleryBackgroudImages: [
            "img/floor1/ulleung1.jpg",
            "img/floor1/ulleung2.jpg",
        ],
    },
    {
        videoId: "xb3F_YlAb7k",
        artist: "아이유",
        title: "잠 못 드는 밤 비는 내리고",
        description: "비가 내리는 공주에서의 하루는 잊지 못할 순간이 될 것이다. 행복했던 온도가 아직도 따스히 남아있다.",
        galleryBackgroudImages: [
            "img/floor1/gongju1.jpg",
            "img/floor1/gongju2.jpg",
        ],
    },
];

const second_floor_records = [
    {
        videoId: "ENkfNb1I0jc",
        artist: "위키드 OST",
        title: "Popular",
        description: "영화의 주제곡을 듣고 있으면 마치 내가 그 주인공이 된 것 같다. 나도 인기인이 될 수 있을까?", 
        galleryBackgroudImages: [
            "img/floor2/popular1.jpg",
            "img/floor2/popular2.jpg",
        ],
    },
    {
        videoId: "GfJXzRALUEE",
        artist: "모여봐요 동물의 숲 OST",
        title: "메인 테마",
        description: "한 때 동물의 숲에 빠져 살았던 시절이 있었다. 이 노래를 듣고 있다보면 왠지 모를 그리운 마음이 든다.",
        galleryBackgroudImages: [
            "img/floor2/animal1.jpg",
            "img/floor2/animal2.jpg",
        ],
    },
    {
        videoId: "kqhstGZuZjo",
        artist: "마녀 배달부 키키 OST",
        title: "바다가 보이는 마을",
        description: "바다가 보이는 곳이면 언제나 생각난다. 차갑지만 따뜻한 바람이 나에게 불어온다.",
        galleryBackgroudImages: [
            "img/floor2/ghibli1.jpg",
            "img/floor2/ghibli2.jpg",
        ],
    },
    {
        videoId: "RdI0hXnVLvk",
        artist: "츠키 오디세이 OST",
        title: "츠키의 집 (Day)",
        description: "인생은 츠키처럼. 힘들었던 나날들은 돌이켜 생각하면 별거 아닐 것이다. 그저 지나가는 순간일 뿐.",
        galleryBackgroudImages: [
            "img/floor2/tsuki1.jpg",
            "img/floor2/tsuki2.jpg",
        ]
    },
];

const third_floor_records = [
    {
        videoId: "L5Ba-pp3Qw0",
        artist: "터치드",
        title: "Highlight",
        description: "페스티벌의 뜨거운 열기. 복잡한 머리속을 비워내고, 음악에 몸을 맡겨보자. (그렇다고 퇴사는 하지 말자)",
        galleryBackgroudImages: [
            "img/floor3/festival1.jpg",
            "img/floor3/festival2.jpg",
        ],
    },
    {
        videoId: "I1OzfxybATE",
        artist: "소녀시대",
        title: "다시 만난 세계",
        description: "교양을 쌓고 싶은 당신에게 추천하는 노래. 어쩌면 여긴 정말 다시 만난 세계일지 모른다.",
        galleryBackgroudImages: [
            "img/floor3/forest1.jpg",
            "img/floor3/forest2.jpg",
        ],
    },
    {
        videoId: "dXQzwNb8G7g",
        artist: "거북이",
        title: "비행기",
        description: "어렸을 적 동심을 떠올리며 놀이기구를 타고 하늘을 나는 기분을 느껴보자. 어디든지 갈 수 있을 것 같은 기분이 든다.",
        galleryBackgroudImages: [
            "img/floor3/everland1.jpg",
            "img/floor3/everland2.jpg",
        ],
    },
    {
        videoId: "A0sExm4B16k",
        artist: "이젤",
        title: "푸르른 이 여름 지나",
        description: "여름의 끝자락에 듣고 싶은 노래. 여름의 끝자락에서 느끼는 아쉬움과 그리움을 담아보자.",
        galleryBackgroudImages: [
            "img/floor3/daebu3.jpg",
            "img/floor3/daebu2.jpg",
        ],
    },
];

const records = [
    ...first_floor_records,
    ...second_floor_records,
    ...third_floor_records,
];

function getRecordByVideoId(videoId) {
    return records.find(record => record.videoId === videoId);
}

function setSecritRecordLyrics() {
    const lyrics = $("#lyrics");
    const lyricText = `
        요새 부쩍 늘어가는 너의 걱정
        하루가 끝난 뒤 뱉은 한숨은 커져
        기운 없는 목소린 작아져 점점
        오늘도 어두워진 네 마음속은 정전
        그치만 내가 볼 땐 너는 정말 멋져
        힘든 일 끝나고 찾아올 행복 값져
        그래서 난 얘기할 수 있을 것 같아 네게
        오늘도 수고했어 빛이 나는 개똥벌레

        넌 모르나봐 그래서 알아야 할 건
        네가 내게 늘 하는 말 대단하단 거
        하지만 그건 너도? 마찬가진 거
        그러니 걱정할 일? 하나 없단 거
        힘들 땐 잠깐 옆에 기대 울어 가끔씩은
        다 울고 나면 다시 힘내서 다음 날을
        맞이할 준비가 된 다음 널 바라봐
        그리고 네게 다시 말해 '괜찮아'

        내가 볼 땐 매사에 늘 열정적인 너
        열 번 넘어져도 다시 일어나는 법
        그 누구보다 제일 긍정적인 너
        그건 네가 갖고 있는 최고의 장점
        나에게도 전해지는 너의 에너지
        같이 있을 때면 내 기분도 좋아짐
        잘하고 있으니, 걱정은 버려봐
        언제나 네게 말해줄게 '괜찮아'
    `;

    const lines = lyricText.split("\n");
    lines.forEach(line => {
        lyrics.append(line + "<br>");
    });
}

var musicPlaying = false;
const music = new Audio("music/괜찮아.mp3");

function playMusic() {
    if (!musicPlaying) {
        musicPlaying = true;

        music.play();

        $("#playMusicButton").addClass("d-none");
        $("#pauseMusicButton").removeClass("d-none");
        $("#stopMusicButton").removeClass("d-none");
    }
}

function pauseMusic() {
    if (musicPlaying) {
        musicPlaying = false;

        music.pause();

        $("#playMusicButton").removeClass("d-none");
        $("#pauseMusicButton").addClass("d-none");
        $("#stopMusicButton").removeClass("d-none");
    }
}

function stopMusic() {
    musicPlaying = false;

    music.pause();
    music.currentTime = 0;

    $("#playMusicButton").removeClass("d-none");
    $("#pauseMusicButton").addClass("d-none");
    $("#stopMusicButton").addClass("d-none");
};