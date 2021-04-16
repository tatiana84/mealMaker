let menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
// 4 step:
    get appetizers() {
        return this._courses.appetizers;// 6 step
    },

    get mains() {
        return this._courses.mains;//6 step
    }, 

    get desserts() {
        return this._courses.desserts;//6 step
    },

    set appetizers(appetizerSet) {
        this._courses.appetizers = appetizerSet;
    },

    set mains(mainSet) {
        this._courses.mains = mainSet;
    },

    set desserts(dessertSet) {
        this._courses.desserts = dessertSet;
    },

    get _courses() { // 5 step
        return{
            appetizers: this.appetizer,
            mains: this.main,
            desserts: this.dessert
        }
    },
// 7-8 step:
    addDishToCourse(courseName, dishName, dishPrice) {
        let dish = {
            name: dishName,
            price: dishPrice
        }
        this.courses[courseName].push(dish);
    },
// 9-10 step:
    getRandomDishFromCourse(courseName) {
        let dishes = this.courses[courseName];
        let randomDish = Math.floor(Math.random()*dishes.length);
        return dishes[randomDish];
    },
// 11 step:
    generateRandomMeal(){
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let main = this.getRandomDishFromCourse('mains');
        let dessert = this.getRandomDishFromCourse('desserts');
        let totalPrice = (appetizer.price + main.price + dessert.price);
        return `Your bill is ${totalPrice} $.`

    }
};

menu.addDishToCourse('appetizers', 'Salata Cesar', 120);
menu.addDishToCourse('mains', 'Supa crem de brocoli', 80);
menu.addDishToCourse('desserts', 'Inghetata de vanilie', 35);

menu.addDishToCourse('appetizers', 'Salata calda', 75);
menu.addDishToCourse('mains', 'Supa crem de pui', 150);
menu.addDishToCourse('desserts', 'Tort Napolion', 80);

menu.addDishToCourse('appetizers', 'Salata de vara', 90);
menu.addDishToCourse('mains', 'Bors rosu', 70);
menu.addDishToCourse('desserts', 'Tort de miere', 150);


let meal = menu.addDishToCourse();
console.log(meal);