// Single Responsibility

class Car { //
  constructor({model,cost,color}){
  	this.model = model;
    this.cost = cost;
    this.color = color;
  }
  paint(newColor){
  	this.color = newColor;
  }

  /* Если добавить вывод в сам Car, это нарушает принцип S , лучше отделять логику и выносить в отдельные абстракции 
    toJson(){
        return {'model':this.car.model,'cost':this.car.cost,'color':this.car.color}
    }
    toHtml(){
        return `<h1>${this.car.title}</h1><p>${this.car.text} , ${this.car.red}</p>`
    }
  */
}
class CarPrint{// Вынесли принт в отдельный класс, теперь если захотим добавить вывод в XML, не нужно будет расширять сам класс Car, а добавить метод в специально преднозначенный для него класс 
  constructor(car){
  	this.car = car;
  }
  toJson(){
  	return {'model':this.car.model,'cost':this.car.cost,'color':this.car.color}
  }
  toHtml(){
  	return `<h1>${this.car.model}</h1><p>${this.car.cost} , ${this.car.color}</p>`
  }
}

const Audi = new Car({model:'Audit TT',cost:'5000$',color:'red'}); //Отделили саму машину и её вывод, иначе бы писали Audi.toJson()
const AudiPrint = new CarPrint(Audi);
console.log(AudiPrint.toHtml());



