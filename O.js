//--------------------------------------------------------------------------------

// BAD 
// class Discount { Мы хотим создать класс скидки, скидки выдаём проверяя внутри типы пользователя, но так делать не надо 
//   giveDiscount() {
//       if(this.customer == 'fav') {
//           return this.price * 0.2;
//       }
//       if(this.customer == 'vip') {
//           return this.price * 0.4;
//       }
//   }
// }


class Discount {//Теперь нам не нужно будет каждый раз модифицировать функции
  giveDiscount() {
      return this.price * 0.2
  }
}

class VIPDiscount extends Discount {//И теперь если хотим сделать отдельный тип скидок, создаём класс, не модифицируя предыдущие 
  getDiscount() {
      return super.getDiscount() * 2;
  }
}

class SuperVIPDiscount extends VIPDiscount {//Можем создать сколько захотим классом, при это не изменяя предыдущие
  getDiscount() {
      return super.getDiscount() * 2;
  }
}
