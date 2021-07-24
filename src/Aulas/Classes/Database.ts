// Singleton - GoF
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private port: number = 3306,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(
      `Conectado ao host ${this.host}:${this.port}, com o usuário: ${this.user}`,
    );
  }

  static getDatabase(
    host: string,
    port: number,
    user: string,
    password: string,
  ): Database {
    if (Database.database) {
      console.log('Retornando instância já criada');
      return Database.database;
    }
    console.log('Criando nova instância');
    Database.database = new Database(host, port, user, password);
    return Database.database;
  }
}

const database = Database.getDatabase('localhost', 3306, 'root', 'dasuidhas');
database.connect();

const database2 = Database.getDatabase('sdad', 3306, 'root', 'dasuidhas');
database2.connect();
