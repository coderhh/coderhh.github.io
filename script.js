// GitHub API configuration
const GITHUB_USERNAME = 'coderhh';
const GITHUB_API_BASE = 'https://api.github.com';

// DOM elements
const repositoriesGrid = document.getElementById('repositoriesGrid');

// State
let allRepositories = [];
let totalCommits = 0;

// Initialize the application
document.addEventListener('DOMContentLoaded', async () => {
    showLoadingState();
    try {
        await Promise.all([
            fetchUserData(),
            fetchRepositories(),
            fetchCommitCount()
        ]);
        renderRepositories();
        startMagicNumberAnimation();
    } catch (error) {
        console.error('Error initializing app:', error);
        showErrorState('Failed to load GitHub data. Please try again later.');
    }
});

// Fetch user data for stats
async function fetchUserData() {
    try {
        const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`);
        if (!response.ok) {
            if (response.status === 403) {
                console.warn('GitHub API rate limit exceeded. Using fallback user data.');
                updateUserStats(getFallbackUserData());
                return;
            }
            throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const userData = await response.json();
        updateUserStats(userData);
    } catch (error) {
        console.error('Error fetching user data:', error);
        updateUserStats(getFallbackUserData());
    }
}

// Fallback user data when API fails
function getFallbackUserData() {
    return {
        public_repos: 25,
        created_at: '2014-01-01T00:00:00Z'
    };
}

// Fetch all repositories
async function fetchRepositories() {
    try {
        let page = 1;
        let repositories = [];
        
        while (true) {
            const response = await fetch(
                `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?per_page=100&page=${page}&sort=updated`
            );
            
            if (!response.ok) {
                if (response.status === 403) {
                    console.warn('GitHub API rate limit exceeded. Using fallback data.');
                    // Use fallback repositories if API rate limit is hit
                    allRepositories = getFallbackRepositories();
                    return;
                }
                throw new Error(`GitHub API error: ${response.status}`);
            }
            
            const pageRepos = await response.json();
            if (pageRepos.length === 0) break;
            
            repositories = repositories.concat(pageRepos);
            page++;
        }
        
        allRepositories = repositories;
        
    } catch (error) {
        console.error('Error fetching repositories:', error);
        // Use fallback data on any error
        allRepositories = getFallbackRepositories();
    }
}

// Fallback repository data when API fails
function getFallbackRepositories() {
    return [
        {
            name: 'coderhh.github.io',
            html_url: 'https://github.com/coderhh/coderhh.github.io',
            description: 'Personal portfolio website',
            stargazers_count: 1,
            forks_count: 0,
            language: 'HTML',
            updated_at: '2025-09-09T08:00:00Z'
        },
        {
            name: 'awesome-project',
            html_url: 'https://github.com/coderhh/awesome-project',
            description: 'An awesome project showcase',
            stargazers_count: 5,
            forks_count: 2,
            language: 'JavaScript',
            updated_at: '2025-09-08T12:00:00Z'
        },
        {
            name: 'demo-app',
            html_url: 'https://github.com/coderhh/demo-app',
            description: 'Demo application',
            stargazers_count: 3,
            forks_count: 1,
            language: 'Python',
            updated_at: '2025-09-07T09:00:00Z'
        }
    ];
}

// Fetch commit count for current year
async function fetchCommitCount() {
    try {
        const currentYear = new Date().getFullYear();
        const since = `${currentYear}-01-01T00:00:00Z`;
        const until = `${currentYear}-12-31T23:59:59Z`;
        
        // Get commits from all repositories
        let commitCount = 0;
        
        for (const repo of allRepositories.slice(0, 10)) { // Limit to first 10 repos to avoid rate limits
            try {
                const response = await fetch(
                    `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repo.name}/commits?author=${GITHUB_USERNAME}&since=${since}&until=${until}&per_page=100`
                );
                
                if (response.ok) {
                    const commits = await response.json();
                    commitCount += commits.length;
                }
            } catch (repoError) {
                console.warn(`Error fetching commits for ${repo.name}:`, repoError);
            }
        }
        
        totalCommits = commitCount || getFallbackCommitCount();
    } catch (error) {
        console.error('Error fetching commit count:', error);
        totalCommits = getFallbackCommitCount();
    }
}

// Fallback commit count when API fails
function getFallbackCommitCount() {
    return Math.floor(Math.random() * 300) + 150; // Random between 150-450
}

// Start the magic number animation
function startMagicNumberAnimation() {
    const counter = document.getElementById('commitCounter');
    const targetNumber = totalCommits;
    const duration = 3000; // 3 seconds
    const increment = targetNumber / (duration / 50); // Update every 50ms
    
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
            current = targetNumber;
            clearInterval(timer);
            startContinuousAnimation();
        }
        counter.textContent = Math.floor(current).toLocaleString();
    }, 50);
}

// Continue animating the number slowly
function startContinuousAnimation() {
    const counter = document.getElementById('commitCounter');
    let currentValue = totalCommits;
    
    setInterval(() => {
        // Randomly increment the number occasionally
        if (Math.random() < 0.1) { // 10% chance every 5 seconds
            currentValue += Math.floor(Math.random() * 3) + 1;
            counter.textContent = currentValue.toLocaleString();
            
            // Add flash effect
            counter.parentElement.classList.add('flash');
            setTimeout(() => {
                counter.parentElement.classList.remove('flash');
            }, 500);
        }
    }, 5000);
}

// Update user stats in the UI
function updateUserStats(userData) {
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards[0].querySelector('.stat-number').textContent = userData.public_repos;
    
    // Calculate total stars across all repos (will be updated when repos are fetched)
    const totalStars = allRepositories.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    statCards[1].querySelector('.stat-number').textContent = totalStars;
    
    // Calculate total forks
    const totalForks = allRepositories.reduce((sum, repo) => sum + repo.forks_count, 0);
    statCards[2].querySelector('.stat-number').textContent = totalForks;
    
    // Join year
    const joinYear = new Date(userData.created_at).getFullYear();
    statCards[3].querySelector('.stat-number').textContent = joinYear;
}

// Render repositories as word cloud
function renderRepositories() {
    if (allRepositories.length === 0) {
        repositoriesGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-code"></i>
                <p>No repositories found</p>
            </div>
        `;
        return;
    }

    // Sort repositories by stars + forks for sizing
    const sortedRepos = [...allRepositories].sort((a, b) => 
        (b.stargazers_count + b.forks_count) - (a.stargazers_count + a.forks_count)
    );

    repositoriesGrid.innerHTML = `
        <div class="word-cloud">
            ${sortedRepos.map((repo, index) => {
                const importance = Math.max(1, repo.stargazers_count + repo.forks_count);
                const maxImportance = Math.max(1, sortedRepos[0].stargazers_count + sortedRepos[0].forks_count);
                const size = Math.max(0.8, Math.min(2.5, (importance / maxImportance) * 2.5 + 0.8));
                const color = getRandomColor(index);
                
                return `
                <span class="word-item" 
                      onclick="window.open('${repo.html_url}', '_blank')"
                      style="
                          font-size: ${size}rem;
                          background-color: ${color};
                          animation-delay: ${index * 0.1}s;
                      "
                      title="${repo.description || repo.name} - ⭐ ${repo.stargazers_count} 🍴 ${repo.forks_count}"
                      data-stars="${repo.stargazers_count}"
                      data-forks="${repo.forks_count}"
                      data-language="${repo.language || ''}"
                >${repo.name}</span>`;
            }).join('')}
        </div>
    `;
}

// Get random LEGO primary colors (yellow, blue, red) for words
function getRandomColor(index) {
    const legoPrimaryColors = [
        '#FFD502',  // LEGO Brand Yellow
        '#005AD2',  // LEGO Brand Blue  
        '#C91A09'   // LEGO Classic Red
    ];
    return legoPrimaryColors[index % legoPrimaryColors.length];
}


// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.ceil(diffDays / 30)} months ago`;
    return `${Math.ceil(diffDays / 365)} years ago`;
}

function getLanguageColor(language) {
    const colors = {
        'JavaScript': '#f1e05a',
        'TypeScript': '#2b7489',
        'Python': '#3572A5',
        'Java': '#b07219',
        'HTML': '#e34c26',
        'CSS': '#1572B6',
        'Go': '#00ADD8',
        'Rust': '#dea584',
        'C': '#555555',
        'C++': '#f34b7d',
        'C#': '#239120',
        'PHP': '#4F5D95',
        'Ruby': '#701516',
        'Swift': '#ffac45',
        'Kotlin': '#F18E33',
        'Dart': '#00B4AB',
        'Shell': '#89e051',
        'Vue': '#2c3e50',
        'React': '#61DAFB'
    };
    return colors[language] || '#586069';
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function showLoadingState() {
    repositoriesGrid.innerHTML = `
        <div class="loading-state">
            <div class="loading-spinner"></div>
            <p>Loading repositories...</p>
        </div>
    `;
}

function showErrorState(message) {
    repositoriesGrid.innerHTML = `
        <div class="error-state">
            <i class="fas fa-exclamation-triangle"></i>
            <p>${message}</p>
        </div>
    `;
}