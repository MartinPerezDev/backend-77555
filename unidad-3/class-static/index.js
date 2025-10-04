import crypto from "crypto";

const secretKey = "miclavesecreta";

class UsersManager{
  static users = [];

  static hashPassword = (password) => {
    const hashedPassword = crypto.createHmac("sha256", secretKey).update(password).digest("hex");
    return hashedPassword;
  }

  static createUser = (user) => {
    const hashedPassword = this.hashPassword(user.password);
    const newUser = { ...user, password: hashedPassword };

    this.users.push(newUser);
    return "Usuario creado correctamente";
  }

  static showUsers = () => {
    return this.users;
  }

  static login = (username, password) => {
    const userFind = this.users.find( (user) => user.username === username );
    if(!userFind) return "Usuario no encontrado";

    const hashedPassword = this.hashPassword(password);
    if(userFind.password !== hashedPassword) return "Error, contraseña incorrecta";

    return "Logueado correctamente";
  }
}

UsersManager.createUser( { username: "FernandoDev", password: "miclavesecreta_1" } );
UsersManager.createUser( { username: "MatiasDev", password: "coder09" } );

console.table( UsersManager.showUsers() );

console.log( UsersManager.login("FernandoDev", "miclavesecreta_1") );