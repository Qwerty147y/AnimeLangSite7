// Оптимизированное приложение без лишних функций
let currentAnime = null;
let currentEpisode = null;

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    loadAnimes();
    handleInitialLoad();
});

// Загрузка аниме
function loadAnimes() {
    const grid = document.getElementById('anime-grid');
    
    if (!animeData || animeData.length === 0) {
        grid.innerHTML = '<div class="loading">Аниме не найдены</div>';
        return;
    }

    const gridHTML = `
        <div class="grid">
            ${animeData.map(anime => `
                <div class="anime-card" onclick="showAnimeDetail('${anime.id}')">
                    <div class="anime-banner">
                        <img src="${anime.bannerUrl}" alt="${anime.title}" loading="lazy">
                        <div class="anime-overlay">
                            <h3 class="anime-title">${anime.title}</h3>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    grid.innerHTML = gridHTML;
}

// Показать главную страницу
function showHome() {
    document.body.classList.remove('episode-playing');
    stopAllVideos();
    showPage('home-page');
    history.pushState(null, null, '/');
}

// Показать детали аниме
function showAnimeDetail(animeId) {
    document.body.classList.remove('episode-playing');
    
    // Остановить все видео
    stopAllVideos();
    
    const anime = animeData.find(a => a.id === animeId);
    if (!anime) return;

    currentAnime = anime;
    
    // Показать баннер аниме с описанием
    const container = document.getElementById('anime-detail-container');
    container.innerHTML = `
        <div class="anime-hero">
            <div class="anime-hero-bg">
                <img src="${anime.heroImage || anime.bannerUrl}" alt="${anime.title}">
                <div class="anime-hero-overlay"></div>
            </div>
            <div class="anime-hero-content">
                <div class="anime-info">
                    <h1 class="anime-hero-title">${anime.title}</h1>
                    <div class="anime-meta">
                        <span class="anime-year">${anime.year || '2024'}</span>
                        <span class="anime-episodes">${anime.episodes ? anime.episodes.length : 0} серий</span>
                        <span class="anime-movies">${anime.movies ? anime.movies.length : 0} фильмов</span>
                        <span class="anime-genre">${anime.genre || 'Аниме'}</span>
                    </div>
                    <p class="anime-description">${anime.description || 'Захватывающее аниме, которое не оставит вас равнодушными.'}</p>
                </div>
            </div>
        </div>
        
        ${anime.episodes && anime.episodes.length > 0 ? `
            <div class="episodes-container">
                <h2 class="section-title">Серии</h2>
                <div class="episodes-list">
                    ${anime.episodes.map(episode => `
                        <div class="episode-item" onclick="showEpisode('${anime.id}', ${episode.number}, 'episode')">
                            <div class="episode-number">${episode.number}</div>
                            <div class="episode-info">
                                <h4>Серия ${episode.number}</h4>
                                <p>${episode.title || `Серия ${episode.number}`}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}
        
        ${anime.movies && anime.movies.length > 0 ? `
            <div class="movies-container">
                <h2 class="section-title">Фильмы</h2>
                <div class="episodes-list">
                    ${anime.movies.map(movie => `
                        <div class="episode-item" onclick="showEpisode('${anime.id}', ${movie.number}, 'movie')">
                            <div class="episode-number">🎬</div>
                            <div class="episode-info">
                                <h4>${movie.title}</h4>
                                <p>Фильм ${movie.number}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}
    `;

    showPage('anime-detail-page');
    // Убираем # из URL
    history.pushState(null, null, `anime/${animeId}`);
}

// Вернуться к аниме
function backToAnime() {
    if (currentAnime) {
        showAnimeDetail(currentAnime.id);
    } else {
        showHome();
    }
}

// Показать серию
function showEpisode(animeId, episodeNumber, type = 'episode') {
    // Остановить все видео
    stopAllVideos();
    
    const anime = animeData.find(a => a.id === animeId);
    const episode = type === 'movie' 
        ? anime?.movies?.find(e => e.number === episodeNumber)
        : anime?.episodes?.find(e => e.number === episodeNumber);
    
    if (!anime || !episode) return;

    currentAnime = anime;
    currentEpisode = episode;
    
    // Скрыть хедер на странице серий
    document.body.classList.add('episode-playing');
    
    // Создать iframe плеер
    const container = document.getElementById('video-container');
    container.innerHTML = `
        <iframe 
            src="${episode.videoUrl}" 
            frameborder="0" 
            allowfullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            class="video-iframe"
            id="current-video">
        </iframe>
    `;
    
    // Добавить обработчик полноэкранного режима для мобильных
    const iframe = container.querySelector('iframe');
    iframe.addEventListener('load', () => {
        // Автоповорот в полноэкранном режиме на мобильных
        if (window.innerWidth <= 768) {
            iframe.addEventListener('fullscreenchange', () => {
                if (document.fullscreenElement) {
                    screen.orientation?.lock?.('landscape');
                }
            });
        }
    });
    
    // Обновить навигацию
    updateEpisodeNavigation(type);
    
    showPage('episode-page');
    // Убираем # из URL
    const urlType = type === 'movie' ? 'movie' : 'episode';
    history.pushState(null, null, `anime/${animeId}/${urlType}/${episodeNumber}`);
}

// Обновить навигацию серий
function updateEpisodeNavigation(type = 'episode') {
    if (!currentAnime || !currentEpisode) return;
    
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const counter = document.getElementById('episode-counter');
    
    const currentNumber = currentEpisode.number;
    const totalEpisodes = type === 'movie' 
        ? (currentAnime.movies?.length || 0)
        : (currentAnime.episodes?.length || 0);
    
    // Обновить счетчик
    const label = type === 'movie' ? 'Фильм' : 'Серия';
    counter.textContent = `${label} ${currentNumber} / ${totalEpisodes}`;
    
    // Обновить кнопки
    prevBtn.disabled = currentNumber === 1;
    nextBtn.disabled = currentNumber === totalEpisodes;
}

// Предыдущая серия
function goToPreviousEpisode() {
    if (!currentAnime || !currentEpisode || currentEpisode.number === 1) return;
    const type = currentAnime.movies?.find(m => m.number === currentEpisode.number) ? 'movie' : 'episode';
    showEpisode(currentAnime.id, currentEpisode.number - 1, type);
}

// Следующая серия
function goToNextEpisode() {
    if (!currentAnime || !currentEpisode) return;
    const type = currentAnime.movies?.find(m => m.number === currentEpisode.number) ? 'movie' : 'episode';
    const totalEpisodes = type === 'movie' 
        ? (currentAnime.movies?.length || 0)
        : (currentAnime.episodes?.length || 0);
    if (currentEpisode.number === totalEpisodes) return;
    showEpisode(currentAnime.id, currentEpisode.number + 1, type);
}

// Показать контакты
function showContacts() {
    document.body.classList.remove('episode-playing');
    stopAllVideos();
    showPage('contacts-page');
    history.pushState(null, null, 'contacts');
}

// Показать страницу поддержки
function showSupport() {
    document.body.classList.remove('episode-playing');
    stopAllVideos();
    showPage('support-page');
    history.pushState(null, null, 'support');
}

// Остановить все видео
function stopAllVideos() {
    const currentVideo = document.getElementById('current-video');
    if (currentVideo) {
        // Заменяем src чтобы остановить воспроизведение
        currentVideo.src = 'about:blank';
        currentVideo.remove();
    }
}

// Показать страницу
function showPage(pageId) {
    // Остановить видео при смене страницы
    if (pageId !== 'episode-page') {
        stopAllVideos();
    }
    
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    window.scrollTo(0, 0);
}

// Обработка начальной загрузки
function handleInitialLoad() {
    const hash = window.location.hash;
    if (hash) {
        handleHashChange(hash);
    }
    
    window.addEventListener('hashchange', () => {
        handleHashChange(window.location.hash);
    });
}

// Обработка изменения hash
function handleHashChange(path) {
    // Убираем # если есть
    const cleanPath = path.replace('#', '');
    
    if (cleanPath.startsWith('anime/')) {
        const parts = cleanPath.split('/');
        const animeId = parts[1];
        const type = parts[2]; // 'episode' или 'movie'
        const episodeNumber = parts[3];
        
        if (episodeNumber) {
            showEpisode(animeId, parseInt(episodeNumber), type);
        } else {
            showAnimeDetail(animeId);
        }
    } else if (cleanPath === 'support') {
        showSupport();
    } else if (cleanPath === 'contacts') {
        showContacts();
    } else {
        showHome();
    }
}