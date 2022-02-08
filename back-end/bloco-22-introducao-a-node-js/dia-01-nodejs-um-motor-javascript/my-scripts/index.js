const { getScript } = require('./input');

const script = getScript();

if(script === 1) {
    require('./imc');
}
else if(script === 2) {
    require('./velocidade');
}
else if(script === 3) {
    require('./sorteio');
}
else if(script === 4) {
    require('./fatorial');
}
else if(script === 5) {
    require('./fibonacci')
}