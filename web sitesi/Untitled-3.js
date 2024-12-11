// Button 1'e tıklandığında başlığı gizle/göster
document.getElementById('btn1').addEventListener('click', function () {
    const element = document.querySelector('.center h1');
    element.style.display = element.style.display === 'none' ? 'block' : 'none';
});

// Button 2'ye tıklandığında butona tıklama animasyonu ekle
document.getElementById('btn2').addEventListener('click', function () {
    const button = this;
    button.style.transform = 'scale(1.2)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 200);
});
