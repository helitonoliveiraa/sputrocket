// https://typeorm.io/#/

// With the typeORM, is necessary use this function to set it up.

// And is necessary to create a ormconfig.json where you have to tell it 
// which it is the database you're using, and where the system will find it,
// where the migrations will be.
// Where the entities will be, too. (The models), and the "cli".

// To configure the syntax of the entities, you should find in Strict Type-Checking Options
// in tsconfig.json, the commented line "strictPropertyInitialization" and put it from true
// to false, for enable the strict checking of property initialization in classes.

// And still in tsconfig, you have to descomment in Experimental Options, the "experimentalDecorators"
// and "emitDecoratorMetadata", both two with the boolean true.

// Of course that when you clone this repository, all will be setted up as well, ready for use,
// but if you just got interted in typeORM and never used before, just went the tips for you :3

import { createConnection } from 'typeorm';

createConnection();
