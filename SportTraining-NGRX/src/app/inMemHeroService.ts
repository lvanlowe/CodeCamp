import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Sport } from './sport';
import { Program } from './location';
import { Category } from './category';
import { Team } from './team';

export class InMemHeroService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const sports: Sport[] = [
      { id: 1, name: 'Bowling' },
      { id: 2, name: 'Soccer' },
      { id: 3, name: 'Bocce' },
      { id: 4, name: 'Basketball' },
      { id: 5, name: 'Floor Hockey' },
      { id: 6, name: 'Powerlifting' },
      { id: 7, name: 'Aquatics' },
      { id: 8, name: 'Track' },
      { id: 9, name: 'Tennis' },
      { id: 10, name: 'Flag Football' }
    ];

    const locations: Program[] = [
      { id: 1, name: 'Massasas', sportid: 1  },
      { id: 2, name: 'Woodbridge', sportid: 2  },
      { id: 3, name: 'Gainesville', sportid: 3  },
      { id: 4, name: 'Woodbridge', sportid: 3  },
      { id: 5, name: 'Woodbridge', sportid: 4  },
      { id: 6, name: 'Freedonm Center', sportid: 4  },
      { id: 7, name: 'Potomac HS', sportid: 6  },
      { id: 8, name: 'Colgan HS', sportid: 7  },
      { id: 9, name: 'Central Park', sportid: 7  },
      { id: 10, name: 'Woodbridge MS', sportid: 8  },
      { id: 11, name: 'Maresella MS', sportid: 8  },
      { id: 12, name: 'Colgan HS', sportid: 9  },
      { id: 13, name: 'Colgan HS', sportid: 10  },
    ];

    const categories: Category[] = [
      { id: 1, name: 'Traditional', sportid: 1  },
      { id: 2, name: '5 X 5', sportid: 2  },
      { id: 3, name: 'Basic Skills', sportid: 2  },
      { id: 4, name: 'Traditional', sportid: 3  },
      { id: 5, name: 'Full Court', sportid: 4  },
      { id: 6, name: 'Half Court', sportid: 4  },
      { id: 7, name: 'Basic Skills', sportid: 4  },
      { id: 8, name: 'Traditional', sportid: 5  },
      { id: 9, name: 'Basic Skills', sportid: 5  },
      { id: 10, name: 'Traditional', sportid: 6  },
      { id: 11, name: 'Basic Skills', sportid: 7  },
      { id: 12, name: 'Traditional', sportid: 7  },
      { id: 13, name: 'Traditional', sportid: 8  },
      { id: 14, name: 'Traditional', sportid: 9  },
      { id: 15, name: 'Traditional', sportid: 10  },
    ];

    const teams: Team[] = [
      { id: 1, name: 'Spirit', locationid: 2 , categoryid: 2 },
      { id: 2, name: 'United', locationid: 2 , categoryid: 2  },
      { id: 3, name: 'Gladiators', locationid: 5 , categoryid: 1  },
      { id: 4, name: 'Jedi', locationid: 5 , categoryid: 5  },
      { id: 5, name: 'Bulls', locationid: 5 , categoryid: 5 },
      { id: 6, name: 'Rebels', locationid: 5 , categoryid: 5  },
      { id: 7, name: 'Viking', locationid: 5 , categoryid: 6  },
      { id: 8, name: 'Indians', locationid: 5 , categoryid: 6  },
      { id: 9, name: 'Dominators', locationid: 6 , categoryid: 5  },
      { id: 10, name: 'Liberty', locationid: 6 , categoryid: 6  }
    ];
    return { heroes, sports, locations, categories, teams };
  }
}
