// SINGLETON

class User {
  private static _userInstance: User | null = null
  private _user: string = ''

  private constructor() {}

  public static getInstance(): User {
    if (User._userInstance === null) {
      User._userInstance = new User()
    }
    return User._userInstance
  }

  get user(): string {
    return this._user
  }

  set user(newUser: string) {
    this._user = newUser
  }

}

// Singleton = 1 only CLASS
// Example with db

const user1 = User.getInstance()
const user2 = User.getInstance()
const user3 = User.getInstance()

user1.user = 'Sebastián'
console.log(user2.user) // Sebastián
console.log(user3.user) // Sebastián
user3.user = 'Carlitos'
console.log(user1.user) // Carlitos
console.log(user2.user) // Carlitos
console.log(user3.user) // Carlitos