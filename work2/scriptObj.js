//const init = () => {

    // const car = {
    //     brand: "Ferrari",
    //     make: "F550",
    //     color: "Yellow",
    //     makeRed: () => {
    //         this.color = "red"
    //     },
    // }

    // console.log(car)
    // function CarClass(color, name) {
    //     this.color = color
    //     this.name = name
    //     this.makeRed = function() {
    //         this.color = "red"
    //     }
    // }

    // const car1 = new CarClass("black", "Bugatti")
    // const car2 = new CarClass("green", "Volga")
    // car1.name = "Audi"
    // car1.makeRed()
    // console.log(car1)
    // console.log(car2)

    //const list = [10,1,123,34,42,53,60];
    //list.map()
    //list.forEach()
    //list.sort()
    //console.log(list)

    // function menuItemClass(color, name, icon) {
    //     this.color = color
    //     this.name = name
    //     this.icon = icon
    // }
    // function sideMenuItemClass(color, name, icon, height) {
    //     menuItemClass.call(this, color, name, icon)
    //     this.height = height
    // }
    // function topMenuItemClass(color, name, icon, width) {
    //     menuItemClass.call(this, color, name, icon)
    //     this.width = width
    // }

    // sideMenuItemClass.prototype.changeColorToAny = function () { // Добавление метода в класс из вне....!!!
    //     this.color = "orange"
    // }
    // sideMenuItemClass.prototype.changeColorToAny = function () { // Добавление метода в класс из вне....!!!
    //     this.color = "purple"
    // }
    // sideMenuItemClass.prototype.changeColor = function (newColor) { // Добавление метода в класс из вне....!!!
    //     this.color = newColor
    // }
    // const sideMenuItemObject = new sideMenuItemClass("red", "Masages", "mail", "100")
    // sideMenuItemObject.changeColorToAny("orange") // Использование метода добавленного извне (оно-же полиморфизм).
    // sideMenuItemObject.changeColor("forest green")
    // console.log(sideMenuItemObject)

    // for (var i = 0; i < 10; i++) {
    //     setTimeout (function () { console.log(i); 
    //     }, 1000) 
    // }  // инкапсуляция "i"

    // for (var i = 0; i < 10; i++) {   
    //     (function (m) {
    //         setTimeout (function () { console.log(m); },2000);
    //     })(i) 
    // }  // инкапсуляция "m.i"
    
    // class menuItem {
    //     constructor(color, name) {
    //         this.color = color;
    //         this.name = name
    //     }

    //     makeRed() {
    //         this.color = "red" 
    //     }
    // }

    // class sideMenuItem extends menuItem {
    //     makeBlue() {
    //         this.color = "blue"
    //     }
    // }

    // const menuItem1 = new menuItem("pink", "enter")
    // const sideMenuItem1 = new sideMenuItem("blue", "Message")

    // console.log(menuItem1)
    // console.log(sideMenuItem1)

//}

//window.onload = init
