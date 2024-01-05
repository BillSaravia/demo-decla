var btnno = document.getElementById('btnno');
var btnyes = document.getElementById('btnyes');

var coordenadas = () => {
    var containerWidth = document.querySelector('.container').offsetWidth;
    var buttonWidth = btnno.offsetWidth;

    // Calculate the maximum allowed position to stay within the container
    var maxX = containerWidth - buttonWidth;

    var ancho = screen.width - 100;
    var alto = screen.height - 200;
    var posx = Math.random() * (maxX - 0) + 0;
    var posy = Math.random() * (alto - 0) + 0;
    return { posx, posy };
};

btnno.addEventListener('mouseenter', () => {
    console.log("mouse entrando");
    var pos = coordenadas();
    btnno.style.top = `${pos.posy}px`;
    btnno.style.left = `${pos.posx}px`;
});

btnyes.addEventListener('click', () => {
    // Send WhatsApp message
    var phoneNumber = '51926615108'; // Replace with the recipient's phone number
    var message = encodeURIComponent('Hola, ¿quieres ser mi novia?'); // Replace with your message
    var whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    // Open WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');

    // Display an alert
    alert('Ya sabía que querías ser mi novia');

    // Return false to prevent default behavior
    return false;
});
