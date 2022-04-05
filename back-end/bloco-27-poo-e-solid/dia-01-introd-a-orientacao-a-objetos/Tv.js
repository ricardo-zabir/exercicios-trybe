"use strict";
class Tv {
    constructor(b, s, res, con) {
        this._brand = b;
        this._size = s;
        this._resolution = res;
        this._connections = con;
    }
    turnOn() {
        console.log(this);
    }
    get connectedTo() {
        return this._connectedTo;
    }
    set connectedTo(v) {
        if (this._connections.some((elem) => elem === v)) {
            this._connectedTo = v;
        }
        else {
            console.log('Sorry, connection unavailable!');
        }
    }
}
const television = new Tv('Samsung', 45, '480x520', ['HDMI', 'Ethernet']);
television.turnOn();
television.connectedTo = 'HDMI';
console.log(television.connectedTo);
