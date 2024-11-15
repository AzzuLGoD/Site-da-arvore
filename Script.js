let total = 0;

document.querySelectorAll('.adicionar').forEach(button => {
    button.addEventListener('click', () => {
        const produto = button.parentElement;
        const preco = parseFloat(produto.getAttribute('data-preco'));
        total += preco;
        document.getElementById('total').innerText = `Total: R$${total.toFixed(2)}`;
        document.getElementById('checkout').style.display = 'block';
    });
});

document.getElementById('finalizar').addEventListener('click', () => {
    alert('Compra finalizada! Obrigado pela sua compra!');
    total = 0;
    document.getElementById('total').innerText = `Total: R$0.00`;
    document.getElementById('checkout').style.display = 'none';
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length; 

function showSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Update slide styles based on currentIndex
    slides.forEach((slide, i) => {
        const isCurrent = i === currentIndex;
        const scaleFactor = isCurrent ? 1 : 0.8;
        const transformValue = isCurrent ? 'scale(1)' : 'scale(0.8)';
        const widthValue = isCurrent ? '100%' : '80%';

        slide.style.transform = transformValue; 
        slide.style.width = widthValue;
        dots[i].classList.toggle('active', isCurrent);
    });

    // Update slider transform
    const translateValue = -currentIndex * 100 + '%';
    document.querySelector('.slider').style.transform = `translateX(${translateValue})`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function currentSlide(index) {
    showSlide(index);
}


setInterval(nextSlide, 9000); // Adjusted interval 