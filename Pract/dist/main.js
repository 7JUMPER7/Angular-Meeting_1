class User {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    getInfo() {
        return `Name: ${this._name}, age: ${this._age} year old`;
    }
    showInfo() {
        console.log(this.getInfo());
    }
}
let userDiv = document.getElementById('userInfo');
let user = new User('Arseniy', 18);
userDiv.innerText = user.getInfo();
