class User {
    _name: string;
    _age: number;
    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }
    getInfo(): string {
        return `Name: ${this._name}, age: ${this._age} year old`;
    }
    showInfo(): void {
        console.log(this.getInfo());
    }
}

let userDiv = document.getElementById('userInfo');
let user: User = new User('Arseniy', 18);
userDiv.innerText = user.getInfo();