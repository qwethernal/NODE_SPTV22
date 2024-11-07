const EventEmitter = require('events');

class Soobshenie extends EventEmitter {
    otpravitSoobshenie(message) {
        this.emit('soobshenie', `${message} - ${Date.now()}`);
    }
}

const soobshenie = new Soobshenie();

soobshenie.on('soobshenie', data => {
    console.log('Получено сообщение:', data);
});


soobshenie.otpravitSoobshenie('1');
soobshenie.otpravitSoobshenie('2');
soobshenie.otpravitSoobshenie('3');
