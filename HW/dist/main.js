var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(manufacturer, model, year) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
    }
    Object.defineProperty(Car.prototype, "Manufacturer", {
        get: function () {
            return this.manufacturer;
        },
        set: function (manufacturer) {
            this.manufacturer = manufacturer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "Model", {
        get: function () {
            return this.model;
        },
        set: function (model) {
            this.model = model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "Year", {
        get: function () {
            return this.year;
        },
        set: function (year) {
            this.year = year;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    function Tesla(manufacturer, model, year, autopilotVer) {
        var _this = _super.call(this, manufacturer, model, year) || this;
        _this.autopilotVer = autopilotVer;
        return _this;
    }
    Tesla.prototype.getInfo = function () {
        return "Manufaturer: " + this.manufacturer + "\nModel: " + this.model + "\nYear: " + this.year + "\nAutopilot version: " + this.autopilotVer;
    };
    Object.defineProperty(Tesla.prototype, "AutopilotVer", {
        get: function () {
            return this.autopilotVer;
        },
        set: function (autopilotVer) {
            this.autopilotVer = autopilotVer;
        },
        enumerable: false,
        configurable: true
    });
    return Tesla;
}(Car));
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(manufacturer, model, year, complectation) {
        var _this = _super.call(this, manufacturer, model, year) || this;
        _this.complectation = complectation;
        return _this;
    }
    Audi.prototype.getInfo = function () {
        return "Manufaturer: " + this.manufacturer + "\nModel: " + this.model + "\nYear: " + this.year + "\nComplectation: " + this.complectation;
    };
    Object.defineProperty(Audi.prototype, "Complectation", {
        get: function () {
            return this.complectation;
        },
        set: function (complectation) {
            this.complectation = complectation;
        },
        enumerable: false,
        configurable: true
    });
    return Audi;
}(Car));
var tesla = new Tesla('Tesla', 'Model 3 Performance', 2021, 3);
console.log(tesla.getInfo());
tesla.Year = 2022;
console.log(tesla.AutopilotVer);
console.log(tesla.getInfo());
console.log('-----------------------');
var audi = new Audi('Audi', 'RS6 Avant', 2021, 'Black package');
console.log(audi.getInfo());
audi.Complectation = 'Carbon package';
console.log(audi.Complectation);
console.log(audi.getInfo());
