//Напиши класс Car с указанными свойствами и методами.

class Car {
    /*
     * Добавь статический метод `getSpecs(car)`,
     * который принимает объект-машину как параметр и выводит
     * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
     */ //done
    static getSpecs(car) {
        return console.log(car)
    }
    /*
     * Конструктор получает объект настроек.
     *
     * Добавь свойства будущеего экземпляра класса:
     *  speed - текущая скорость, изначально 0
     *  price - цена автомобиля
     *  maxSpeed - максимальная скорость
     *  isOn - заведен ли автомобиль, значения true или false. Изначально false
     *  distance - общий киллометраж, изначально 0
     */ //done
    constructor({maxSpeed, speed, isOn, distance, price}) {
        this.speed = 0;
        this.maxSpeed = maxSpeed;
        this.price = price;
        this.isOn = false;
        this.distance = 0;
    }
    /*
     * Добавь геттер и сеттер для свойства price,
     * который будет работать с свойством цены автомобиля.
     */ //done
    get _price() {
      return this.price
    }
  
    set _price(num) {
        return this.price = num;
    }
  
    /*
     * Добавь код для того чтобы завести автомобиль
     * Записывает в свойство isOn значение true
     */ //done
    turnOn() {
      this.isOn = true;
    }
    /*
     * Добавь код для того чтобы заглушить автомобиль
     * Записывает в свойство isOn значение false,
     * и сбрасывает текущую скорость в 0
     */ //done
    turnOff() {
      this.isOn = false;
      this.speed = 0;
    }
    /*
     * Добавялет к свойству speed полученное значение,
     * при условии что результирующая скорость
     * не больше чем значение свойства maxSpeed
     */ //done
    accelerate(value) {
        if(this.speed + value <= this.maxSpeed) {
          this.speed += value;
        }
    }
    /*
     * Отнимает от свойства speed полученное значение,
     * при условии что результирующая скорость не меньше нуля
     */ //done
    decelerate(value) {
      if(this.speed - value >= 0) {
          this.speed -= value;
      }
    }
    /*
     * Добавляет в поле distance киллометраж (hours * speed),
     * но только в том случае если машина заведена!
     */ //done
    drive(hours) {
        if(this.isOn === true) {
            this.distance += hours * this.speed
        }
    }
  }
  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000