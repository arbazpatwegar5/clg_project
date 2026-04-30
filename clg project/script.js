document.getElementById('hotelForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! We are checking availability for your selected dates.');
});

const hotelForm = document.getElementById('hotelForm');
const toast = document.getElementById('toast');
const closeIcon = document.querySelector(".close");
const progress = document.querySelector(".progress");

hotelForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Show the custom notification
    toast.classList.add("active");
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        toast.classList.remove("active");
    }, 5000);
});

// Close manually on click
closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");
});