// Interface Segregation Principle

interface CanWalk {
  walk(distance: number): void;
}

interface CanSwim {
  swim(distance: number): void;
}

interface Animal extends CanWalk, CanSwim {  
  eat(): void;
  sleep(): void;
}

class Dog implements CanWalk, Animal {
  walk(distance: number) {
    console.log('Walking...')
  }
  swim(distance: number) {
    throw new Error("Method not implemented.");
  }
  eat(): void {
    throw new Error("Method not implemented.");
  }
  sleep(): void {
    throw new Error("Method not implemented.");
  }
}