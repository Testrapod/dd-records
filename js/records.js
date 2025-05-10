const first_floor_records = [
    {
        videoId: "t9aZFgD0mic",
        artist: "백예린",
        title: "산책",
        description: "제주도의 밤길을 산책하는 순간이 떠오른다. 제주도의 아름다운 풍경과 함께 듣는다면 더욱 특별한 경험이 될 것이다.",
        galleryBackgroudImages: [
            "img/floor1/jeju1.jpg",
            "img/floor1/jeju2.jpg",
        ]
    },
    {
        videoId: "NzNntz-YA0U",
        artist: "스텔라장",
        title: "L’Amour, Les Baguettes, Paris",
        description: "파리의 아름다운 야경이 에펠탑의 모습과 함께 그려진다. 우리가 상상했던 낭만적인 순간이 가득 담겨있다.",
        galleryBackgroudImages: [
            "img/floor1/france.jpg",
            "img/floor1/swiss.jpg",
        ]
    },
    {
        videoId: "pBSyRQYYhMI",
        artist: "잔나비",
        title: "가을밤에 든 생각",
        description: "노을지는 울릉도 바닷길을 드라이빙하며 듣고 싶은 노래. 어디선가 모를 치킨 냄새가 나를 반긴다.",
        galleryBackgroudImages: [
            "img/floor1/ulleung1.jpg",
            "img/floor1/ulleung2.jpg",
        ]
    },
    {
        videoId: "xb3F_YlAb7k",
        artist: "아이유",
        title: "잠 못 드는 밤 비는 내리고",
        description: "비가 내리는 공주에서의 하루는 잊지 못할 순간이 될 것이다. 행복했던 온도가 아직도 따스히 남아있다.",
        galleryBackgroudImages: [
            "img/floor1/gongju1.jpg",
            "img/floor1/gongju2.jpg",
        ]
    },
];

const second_floor_records = [
    {
        videoId: "RdI0hXnVLvk",
        artist: "츠키 오디세이 OST",
        artist_en: "Tsuki's Odyssey OST",
        title: "Tsuki's Home (Day)",
        description: "..."
    },
    {
        videoId: "Mz6yCMbxnuU",
        artist: "츠키 오디세이 OST",
        artist_en: "Tsuki's Odyssey OST",
        title: "Yori's Shop (Day)",
        description: "..."
    },
];

const third_floor_records = [];

const records = [
    ...first_floor_records,
    ...second_floor_records,
    ...third_floor_records,
];

function getRecordByVideoId(videoId) {
    return records.find(record => record.videoId === videoId);
}