import Dexie, { Table } from "dexie";
import { Versiculo } from "./versiculos.model";

export interface TodoItem {
    id?: number;
    todoListId: number;
    title: string;
    done?: boolean;
  }
  
  export class AppDB extends Dexie {
  versiculos!: Table<Versiculo, number>;

    constructor() {
      super('ngdexieliveQuery');
      this.version(2).stores({
        
        versiculos: 'id, titulo, texto',
      });
      this.on('populate', () => this.populate());
    }
  
    async populate() {
  
      await db.versiculos.bulkAdd([
        {
          id:1,
          titulo: 'Filipenses 2:5-8',
          texto: ' La actitud de ustedes debe ser como la de Cristo Jesús, quien, siendo por naturaleza Dios, no consideró el ser igual a Dios como algo a qué aferrarse. Por el contrario, se rebajó voluntariamente, tomando la naturaleza de siervo y haciéndose semejante a los seres humanos. Y, al manifestarse como hombre, se humilló a sí mismo y se hizo obediente hasta la muerte, ¡y muerte de cruz! (Filipenses 2:5-8)',
        },
          {
          id:2,
          titulo: 'Juan 3:16',
          texto: ' Porque tanto amó Dios al mundo que dio a su Hijo unigénito, para que todo el que cree en él no se pierda, sino que tenga vida eterna. (Juan 3:16)',
        },
          {
          id:3,
          titulo: '1 Juan 1:9',
          texto: 'Si confesamos nuestros pecados, Dios, que es fiel y justo, nos los perdonará y nos limpiará de toda maldad. (1 Juan 1:9)',
        },
          {
          id:4,
          titulo: 'Hechos 4:11-12',
          texto: 'Jesucristo es “la piedra que desecharon ustedes los constructores, y que ha llegado a ser la piedra angular”. De hecho, en ningún otro hay salvación, porque no hay bajo el cielo otro nombre dado a los hombres mediante el cual podamos ser salvos. (Hechos 4:11-12)',
        },
          {
          id:5,
          titulo: '1 Timoteo 2:5-6a',
          texto: 'Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre, quien dio su vida como rescate por todos. (1 Timoteo 2:5-6a)',
        },
          {
          id:6,
          titulo: 'Hebreos 13:8',
          texto: 'Jesucristo es el mismo ayer y hoy y por los siglos.(Hebreos 13:8)',
        },
      ]);
    }
  }
  
  export const db = new AppDB();
  