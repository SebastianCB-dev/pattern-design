// DECORATOR PATTERN

interface Component {
  getUser(): string;
}

class UserComponent implements Component {
  public getUser(): string {
    return 'User';
  }
}

class Decorator implements Component {
  constructor(protected c: Component ) {}

  getUser(): string {
    return this.c.getUser();
  }

  removeUser(): string {
    return 'User removed';
  }
}


class ComponentDecoratorA extends Decorator {
  getUser(): string {
    return `Decorator A ${super.getUser()}`;
  }

  removeUser(): string {
    return `Decorator A ${super.removeUser()}`;
  }
}


const user = new UserComponent();
console.log(user.getUser());

const component = new ComponentDecoratorA(new UserComponent());
console.log(component.getUser());
console.log(component.removeUser());
