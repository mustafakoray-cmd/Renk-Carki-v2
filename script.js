const wheels = document.querySelectorAll(".wheel-container");

wheels.forEach(wheel => {
    const front = wheel.querySelector(".front");
    let isDragging = false;  // Her çarkın kendi dragging durumu
    let centerX = 0;
    let centerY = 0;

    function calculateCenter() {
        const rect = wheel.getBoundingClientRect();
        centerX = rect.left + rect.width / 2;
        centerY = rect.top + rect.height / 2;
    }

    calculateCenter();
    window.addEventListener("resize", calculateCenter);

    // Fare ile sürükleme
    wheel.addEventListener("mousedown", () => {
        isDragging = true;
    });

    wheel.addEventListener("mouseup", () => {
        isDragging = false;
    });

    wheel.addEventListener("mouseleave", () => {
        isDragging = false;
    });

    wheel.addEventListener("mousemove", (event) => {
        if (!isDragging) return;
        const dx = event.clientX - centerX;
        const dy = event.clientY - centerY;
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        front.style.transform = `rotate(${angle}deg)`;
    });

    // Touch (iPad / telefon) desteği
    wheel.addEventListener("touchstart", (event) => {
        isDragging = true;
        event.preventDefault();
    });

    wheel.addEventListener("touchend", () => {
        isDragging = false;
    });

    wheel.addEventListener("touchmove", (event) => {
        if (!isDragging) return;
        const touch = event.touches[0];
        const dx = touch.clientX - centerX;
        const dy = touch.clientY - centerY;
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        front.style.transform = `rotate(${angle}deg)`;
        event.preventDefault();
    });
});
