abstract class Car {
    protected manufacturer: string;
    protected model: string;
    protected year: number;

    constructor(manufacturer: string, model: string, year: number) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
    }

    abstract getInfo(): string;
    public get Manufacturer(): string {
        return this.manufacturer;
    }
    public set Manufacturer(manufacturer: string) {
        this.manufacturer = manufacturer;
    }
    public get Model(): string {
        return this.model;
    }
    public set Model(model: string) {
        this.model = model;
    }
    public get Year(): number {
        return this.year;
    }
    public set Year(year: number) {
        this.year = year;
    }
}

class Tesla extends Car {
    private autopilotVer: number;
    
    constructor(manufacturer: string, model: string, year: number, autopilotVer: number) {
        super(manufacturer, model, year);
        this.autopilotVer = autopilotVer;
    }
    
    getInfo(): string {
        return `Manufaturer: ${this.manufacturer}\nModel: ${this.model}\nYear: ${this.year}\nAutopilot version: ${this.autopilotVer}`;
    }
    public get AutopilotVer(): number {
        return this.autopilotVer;
    }
    public set AutopilotVer(autopilotVer: number) {
        this.autopilotVer = autopilotVer;
    }
}

class Audi extends Car {
    private complectation: string;
    
    constructor(manufacturer: string, model: string, year: number, complectation: string) {
        super(manufacturer, model, year);
        this.complectation = complectation;
    }
    
    getInfo(): string {
        return `Manufaturer: ${this.manufacturer}\nModel: ${this.model}\nYear: ${this.year}\nComplectation: ${this.complectation}`;
    }
    public get Complectation(): string {
        return this.complectation;
    }
    public set Complectation(complectation: string) {
        this.complectation = complectation;
    }
}

let tesla: Tesla = new Tesla('Tesla', 'Model 3 Performance', 2021, 3);
console.log(tesla.getInfo());
tesla.Year = 2022;
console.log(tesla.AutopilotVer);
console.log(tesla.getInfo());

console.log('-----------------------');

let audi: Audi = new Audi('Audi', 'RS6 Avant', 2021, 'Black package');
console.log(audi.getInfo());
audi.Complectation = 'Carbon package';
console.log(audi.Complectation);
console.log(audi.getInfo());