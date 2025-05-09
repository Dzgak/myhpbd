function initParticles(show) {
    particlesJS('particles-js', {
        particles: {
            number: { value: show ? 80 : 0 },
            color: { value: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'] },
            shape: { type: 'circle' },
            opacity: { value: 0.8 },
            size: { value: 5 },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: true
            }
        }
    });
}

function updateCountdown() {
    const birthday = new Date(2025, 5, 1); // June 1, 2025
    const now = new Date();
    const diff = birthday - now;

    if (diff <= 0) {
        // It's birthday time!
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('message').style.display = 'block';
        document.getElementById('message').textContent = 'Happy Birthday! 🎉';
        initParticles(true);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Initialize
initParticles(false);
setInterval(updateCountdown, 1000);
updateCountdown();
