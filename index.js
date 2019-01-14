let Inhabitant = function(gender, name, saying, legs){
  this.gender = gender;
  this.name = name;
  this.saying = saying;
  this.legs = legs;
};

Inhabitant.prototype.makeMessage = function(){
  return `Hello i am a <strong>${this.species}</strong>. My name is <strong>${this.name}</strong> end i am a ${this.gender}.I have ${this.legs == 4 ? this.legs + ' legs' : this.legs + ' legs and'} ${this.hands ? this.hands + ' hands': ''} i saying: <em>${this.saying}</em><hr>`;
};

let Animal = function(gender, name, saying, legs){
  Inhabitant.call(this, gender, name, saying, legs);
  this.legs = 4;
}
Animal.prototype = Object.create(Inhabitant.prototype);

let Dog = function(gender, name, saying, legs){
  Animal.call(this, gender, name, saying, legs);
  this.species = 'dog';
  this.saying = 'woof-woof!';
};

Dog.prototype = Object.create(Animal.prototype);

let Cat = function(gender, name, legs){
  Animal.call(this, gender, name, legs);
  this.species = 'cat';
  this.saying = 'meow-meow!';
};

Cat.prototype = Object.create(Animal.prototype);

let Human = function(gender, name, saying){
  Inhabitant.call(this, gender, name, saying);
  this.species = 'human';
  this.legs = 2;
  this.hands = 2;
};

Human.prototype = Object.create(Inhabitant.prototype);

let Cathuman = function(gender, name){
  Human.call(this, gender, name, cat, woman);
  this.species = 'cat-human';
  this.cat = cat;
  this.woman = woman;
  this.saying = this.sayMutate();
};

Cathuman.prototype = Object.create(Animal.prototype);
Cathuman.prototype.sayMutate = function(){
  return `${this.woman.saying} and sometimes ${this.cat.saying}`;
};

let dog = new Dog('male', 'Toby');
let cat = new Cat('female', 'Murka');
let man = new Human('male', 'Vasiliy', 'I am hungry!');
let woman = new Human('female', 'Marusiya', 'Listen to me!');
let catwoman = new Cathuman('female', 'Selina Kyle');
let inhabitants = [dog, cat, man, woman, catwoman];


inhabitants.forEach(inhabitant => {
 print(inhabitant.makeMessage());
})
