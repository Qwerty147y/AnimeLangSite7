// Данные аниме с расширенной информацией
const animeData = [
    {
        id: 'demon-slayer',
        title: 'Клинок, рассекающий демонов',
        bannerUrl: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=300&h=400',
        heroImage: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
        description: 'История о Танджиро Камадо, который становится охотником на демонов, чтобы спасти свою сестру Незуко, превращенную в демона.',
        year: '2019',
        genre: 'Экшен, Сёнэн',
        episodes: [
            {
                number: 1,
                title: 'Жестокость',
                videoUrl: 'https://iframe.mediadelivery.net/embed/474667/140584c4-76f3-41dd-b9a3-fb8ff2ad8935'
            },
            {
                number: 2,
                title: 'Тренер Сабито и Макомо',
                videoUrl: 'https://iframe.mediadelivery.net/embed/YOUR_LIBRARY_ID/YOUR_VIDEO_ID_2'
            },
            {
                number: 3,
                title: 'Сабито и Макомо',
                videoUrl: 'https://iframe.mediadelivery.net/embed/YOUR_LIBRARY_ID/YOUR_VIDEO_ID_3'
            }
        ],
        movies: [
            {
                number: 1,
                title: 'Поезд "Бесконечный"',
                videoUrl: 'https://iframe.mediadelivery.net/embed/YOUR_LIBRARY_ID/YOUR_MOVIE_ID_1'
            }
        ]
    },
    {
        id: 'attack-on-titan',
        title: 'Атака титанов',
        bannerUrl: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=300&h=400',
        heroImage: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
        description: 'Человечество живет за огромными стенами, защищающими от титанов - гигантских гуманоидных существ, пожирающих людей.',
        year: '2013',
        genre: 'Экшен, Драма',
        episodes: [
            {
                number: 1,
                title: 'Тот день',
                videoUrl: 'https://iframe.mediadelivery.net/embed/YOUR_LIBRARY_ID/YOUR_VIDEO_ID_4'
            },
            {
                number: 2,
                title: 'В тот день',
                videoUrl: 'https://iframe.mediadelivery.net/embed/YOUR_LIBRARY_ID/YOUR_VIDEO_ID_5'
            }
        ]
    },
    {
        id: 'naruto',
        title: 'Наруто',
        bannerUrl: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=300&h=400',
        heroImage: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
        description: 'История юного ниндзя Наруто Узумаки, который мечтает стать Хокаге - лидером своей деревни.',
        year: '2002',
        genre: 'Экшен, Сёнэн',
        episodes: [
            {
                number: 1,
                title: 'Войди! Наруто Узумаки',
                videoUrl: 'https://iframe.mediadelivery.net/embed/YOUR_LIBRARY_ID/YOUR_VIDEO_ID_6'
            },
            {
                number: 2,
                title: 'Меня зовут Коноха-мару!',
                videoUrl: 'https://iframe.mediadelivery.net/embed/YOUR_LIBRARY_ID/YOUR_VIDEO_ID_7'
            },
            {
                number: 3,
                title: 'Соперники? Саске и Сакура',
                videoUrl: 'https://iframe.mediadelivery.net/embed/YOUR_LIBRARY_ID/YOUR_VIDEO_ID_8'
            },
            {
                number: 4,
                title: 'Испытание на выживание',
                videoUrl: 'https://iframe.mediadelivery.net/embed/YOUR_LIBRARY_ID/YOUR_VIDEO_ID_9'
            }
        ]
    },
    {
        id: 'one-piece',
        title: 'Ван Пис',
        bannerUrl: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=300&h=400',
        heroImage: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
        description: 'Приключения Монки Д. Луффи и его команды пиратов в поисках легендарного сокровища "Ван Пис".',
        year: '1999',
        genre: 'Приключения, Сёнэн',
        episodes: [
            {
                number: 1,
                title: 'Я Луффи! Человек, который станет Королем Пиратов!',
                videoUrl: 'https://iframe.mediadelivery.net/embed/YOUR_LIBRARY_ID/YOUR_VIDEO_ID_10'
            },
            {
                number: 2,
                title: 'Великий мечник появляется! Охотник на пиратов Ророноа Зоро',
                videoUrl: 'https://iframe.mediadelivery.net/embed/YOUR_LIBRARY_ID/YOUR_VIDEO_ID_11'
            }
        ]
    },
    {
        id: 'my-hero-academia',
        title: 'Моя геройская академия',
        bannerUrl: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=300&h=400',
        heroImage: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
        description: 'В мире, где большинство людей обладают суперспособностями, Изуку Мидория мечтает стать героем, несмотря на отсутствие силы.',
        year: '2016',
        genre: 'Экшен, Школа',
        episodes: [
            {
                number: 1,
                title: 'Изуку Мидория: Начало',
                videoUrl: 'https://iframe.mediadelivery.net/embed/YOUR_LIBRARY_ID/YOUR_VIDEO_ID_12'
            }
        ]
    },
    {
        id: 'jujutsu-kaisen',
        title: 'Магическая битва',
        bannerUrl: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=300&h=400',
        heroImage: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
        description: 'Юдзи Итадори присоединяется к секретной организации магов, чтобы убить могущественное проклятие по имени Рёмен Сукуна.',
        year: '2020',
        genre: 'Экшен, Сверхъестественное',
        episodes: [
            {
                number: 1,
                title: 'Рёмен',
                videoUrl: 'https://iframe.mediadelivery.net/embed/YOUR_LIBRARY_ID/YOUR_VIDEO_ID_13'
            },
            {
                number: 2,
                title: 'Для меня',
                videoUrl: 'https://iframe.mediadelivery.net/embed/YOUR_LIBRARY_ID/YOUR_VIDEO_ID_14'
            },
            {
                number: 3,
                title: 'Девочка из стали',
                videoUrl: 'https://iframe.mediadelivery.net/embed/YOUR_LIBRARY_ID/YOUR_VIDEO_ID_15'
            }
        ]
    }
];

// ИНСТРУКЦИЯ ДЛЯ BUNNY.NET:
// 1. В панели Bunny.net найдите ваши видео
// 2. Скопируйте EMBED URL (не play URL!)
// 3. Замените YOUR_LIBRARY_ID и YOUR_VIDEO_ID_X на реальные значения
// 4. Пример: 'https://iframe.mediadelivery.net/embed/123456/abcd-efgh-ijkl'