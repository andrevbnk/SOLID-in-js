// Liskov substitution principle

class Person {
    // Если  мы бы наследовались через Person, то мы не могли бы добавлять посторонних пользователей ибо бросало ошибку,
    // и openDoor не мог бы нормально работать с базовым классом, нам нужно разбить на более мелкие абстракции
    // что бы не нарушать принцип Liskov
    // До этого Frontend и PersonFromDifferentCompany наследовались от Person, а сейчас мы разбили абстракции по доступам

    // access() {    
    //     console.log('У тебя есть доступ')
    //   }
}

class Member extends Person {
  access() {
    console.log('У тебя есть доступ')
  }
}

class Guest extends Person {
  isGuest = true
}

class Frontend extends Member {
  canCreateFrontend() {}
}

class Backend extends Member {
  canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {
  access() {
    throw new Error('У вас нет доступа.');
  }
}

function openDoor(member) {
  member.access()
}

openDoor(new Frontend())
openDoor(new Backend())
openDoor(new PersonFromDifferentCompany())  
  