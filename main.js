function mostrarMensaje(mensaje) {
    alert(mensaje);
}

function realizarReserva() {
    const nombre = prompt('Ingrese su nombre');
    const edad = parseInt(prompt('Ingrese su edad'));
    let fechaYaReservada;

    while (true) {
        let fechaDeReserva = parseInt(prompt('Indique la fecha para reservar su turno en el próximo mes'));

        if (fechaDeReserva > 31 || fechaDeReserva <= 0) {
            mostrarMensaje('No corresponde a una fecha válida');
        } else if (fechaDeReserva === fechaYaReservada) {
            mostrarMensaje('Esta fecha ya ha sido reservada');
        } else {
            fechaYaReservada = fechaDeReserva;
            mostrarMensaje('Muchas gracias, lo esperamos el día ' + fechaDeReserva + ' del próximo mes');
        }

        const realizarOtraReserva = confirm('¿Quiere realizar otra reserva?');
        if (!realizarOtraReserva) {
            break;
        }
    }
}

mostrarMensaje('Bienvenido a Black Lemon');
realizarReserva();