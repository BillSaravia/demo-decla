var btnno = document.getElementById('btnno');
var btnyes = document.getElementById('btnyes');

btnno.addEventListener('mouseenter', () => {
    console.log("mouse entrando");
    var pos = coordenadas();
    btnno.style.top = `${pos.posy}px`;
    btnno.style.left = `${pos.posx}px`;
});

var coordenadas = () => {
    var ancho = screen.width - 100;
    var alto = screen.height - 200;
    var posx = Math.random() * (ancho - 0) + 0;
    var posy = Math.random() * (alto - 0) + 0;
    return { posx, posy };
};

btnyes.addEventListener('click', () => {
    // Send WhatsApp message
    var phoneNumber = '51926615108'; // Replace with the recipient's phone number
    var message = encodeURIComponent('Hola, ¿quieres ser mi novia?'); // Replace with your message
    var whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    // Open WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');

    // Display an alert
    alert('Ya sabía que querías ser mi novia');
});
