class Tv {
    private _brand: string;
    private _size: number;
    private _resolution: string;
    private _connections: string[];
    private _connectedTo: string | undefined;
    constructor(b: string, s:number, res: string, con: string[]) {
        this._brand = b;
        this._size = s;
        this._resolution = res;
        this._connections = con;
    }
    turnOn() {
        console.log(this);
    }
    
    public get connectedTo() : string | undefined {
        return this._connectedTo
    }
    
    public set connectedTo(v : string | undefined) {
        if(this._connections.some((elem) => elem === v)) {
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