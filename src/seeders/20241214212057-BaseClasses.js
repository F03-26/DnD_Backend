'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Classes', [{
      id: 1,
      name: 'Guerrero',
      description: 'Caballeros andantes, generales conquistadores, campeones reales, soldados de élite, mercenarios endurecidos y reyes bandidos... Todos ellos son guerreros y, como tales, comparten una maestría sin par con las armas y armaduras, así como un conocim iento profundo de las artes del combate. Tamb ién están acostumbrados a la muerte, pues se han cruzado con ella y la han desafiado con valentía.',
      primary_ability_1: 1,
      primary_ability_2: 2,
      hit_point_die: 'D10',
      saving_throws_1: 1,
      saving_throws_2: 3,
      skill_profs: '2,Acrobacias,Atletismo,Historia,Intimidación,Percepción,Perspicacia,Supervivencia,Trato con Animales',
      weapon_profs: 'Sencillas,Marciales',
      armor_train: 'Ligera,Media,Pesada,Escudo',
      tool_profs: null,
      start_equip: '1 Cota de malla, 1 Espadón, 1 Flagelo, 8 Jabalinas, 1 Paqute de explorador de mazmorras y 4 GP; 1 Armadura de cuero tachonado, 1 Cimitarra, 1 Espada corta, 1 Arco largo, 20 Flechas, 1 Carcaj, 1 Paquete de explorador de mazmorras y 11 GP;155 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'Pícaro',
      description: 'Los pícaros recurren a la habilidad, el sigilo y explotar las debilidades de sus enemigos para sacar ventaja de cualquier situación. Tienen un don para encontrar la solución a casi cualquier problema. Su ingenio y versatilidad les convierten en la piedra angular de prácticamente cualquier grupo que culmina sus aventuras con éxito.',
      primary_ability_1: 2,
      primary_ability_2: null,
      hit_point_die: 'D8',
      saving_throws_1: 2,
      saving_throws_2: 4,
      skill_profs: '4,Acrobacias,Atletismo,Engaño,Perspicacia,Intimidación,Investigación,Percepción,Persuación,Juego de Manos,Sigilo',
      weapon_profs: 'Sencillas,Marciales ligeras,Marciales sutiles',
      armor_train: 'Ligera',
      tool_profs: '1,Herramientas de ladrón',
      start_equip: '1 Armadura de cuero, 2 Dagas, 1 Espada corta, 1 Arco corto, 20 Flechas, 1 Carcaj, 1 Herramientas de ladrón, 1 Paquete de ladrón y 8 GP;100 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: 'Mago',
      description: 'Los magos son los supremos usua rios de la magia. Si algo define a esta clase es la gran cantidad de conjuros que puede lanzar. Tirando del sutil tejido mágico que permea el cosmos, lanzan conjuros de fuego explosivo, relámpagos súbitos, engaños sutiles y control mental. Su magia les permite conjurar elementales desde otros planos de existencia, vislumbrar el futuro o alzar enemigos fallecidos en forma de zombis. Sus conjuros más poderosos les permiten transmutar una sustancia en otra, invocar meteoros para que caigan desde el cielo o abrir portales a otros mundos.',
      primary_ability_1: 4,
      primary_ability_2: null,
      hit_point_die: 'D6',
      saving_throws_1: 5,
      saving_throws_2: 6,
      skill_profs: '2,Conocimiento Arcano,Historia,Perspicacia,Investigación,Medicina,Naturaleza,Religión',
      weapon_profs: 'Sencillas',
      armor_train: null,
      tool_profs: null,
      start_equip: '2 Dagas, 1 Canalizador Arcano, 1 Túnica, 1 Libro de Conjuros, 1 Paquete de erudito y 5 GP;55 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      name: 'Clérigo',
      description: 'Los clérigos son intermediarios entre el mundo mortal y los remotos planos de los dioses. Tan variopintos como las deidades a las que sirven, estos se esfuerzan por personificar las obras de sus dioses. Un clérigo no es un sacerdote corriente, pues está imbuido de magia divina.',
      primary_ability_1: 5,
      primary_ability_2: null,
      hit_point_die: 'D8',
      saving_throws_1: 5,
      saving_throws_2: 6,
      skill_profs: '2,Historia,Medicina,Perspicacia,Persuación,Religión',
      weapon_profs: 'Sencillas',
      armor_train: 'Ligera,Media,Escudo',
      tool_profs: null,
      start_equip: '1 Cota de malla, 1 Escudo, 1 Maza, 1 Símbolo sagrado,1 Paquete de sacerdote,7 GP;110 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      name: 'Bárbaro',
      description: 'Para algunos, su rabia brota de la comunión con espíritus de animales salvajes. Otros recurren a su hirviente reserva de ira. Para los bárbaros, la furia es un poder que no sólo les proporciona un frenesí ciego en la batalla, sino también extraordinarios reflejos, resistencia y proezas de fuerza.',
      primary_ability_1: 1,
      primary_ability_2: null,
      hit_point_die: 'D12',
      saving_throws_1: 1,
      saving_throws_2: 3,
      skill_profs: '2,Atletismo,Intimidación,Naturaleza,Percepción,Supervivencia,Trato con Animales',
      weapon_profs: 'Sencillas,Marciales',
      armor_train: 'Ligera,Media,Escudo',
      tool_profs: null,
      start_equip: '1 Hacha a dos manos, 4 Hachas de mano, 1 Paquete de explorador y 15 GP;7 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      name: 'Explorador',
      description: 'Los exploradores persisten en su eterna vigilancia lejos del bullicio de las ciudades y los pueblos, fuera de los muros que defienden las granjas más remotas de los terrores de la naturaleza salvaje, entre los densos bosques que carecen de sendero alguno y a través de extensas llanuras deshabitadas.',
      primary_ability_1: 2,
      primary_ability_2: 5,
      hit_point_die: 'D10',
      saving_throws_1: 1,
      saving_throws_2: 2,
      skill_profs: '3,Atletismo,Investigación,Naturaleza,Percepción,Perspicacia,Sigilo,Supervivencia,Trato con Animales',
      weapon_profs: 'Sencillas,Marciales',
      armor_train: 'Ligera,Media,Escudo',
      tool_profs: null,
      start_equip: '1 Armadura de cuero tachonada, 1 Cimitarra, 1 Espada corta, 1 Arco largo, 20 flechas, 1 Carcaj, 1 Canalizador druídico, 1 Paquete de explorador y 7 GP;150 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      name: 'Hechicero',
      description: 'Los hechiceros son poseedores de un derecho de nacimiento, proveniente de una estirpe exótica, la influencia de un ser sobrenatural o la exposición a fuerzas cósmicas desconocidas. No se puede estudiar la hechicería como si de un idioma se tratara, al igual que tampoco se puede aprender a vivir una vida legendaria. Nadie escoge el camino del hechicero, es el poder el que te escoge a ti.',
      primary_ability_1: 6,
      primary_ability_2: null,
      hit_point_die: 'D6',
      saving_throws_1: 3,
      saving_throws_2: 6,
      skill_profs: '2,Conocimiento Arcano, Engaño,Intimidación,Perspicacia,Persuación,Religión',
      weapon_profs: 'Sencillas',
      armor_train: null,
      tool_profs: null,
      start_equip: '1 Lanza, 2 Dagas, 1 Canalizador Arcano, 1 Paquete de explorador de mazmorras y 28 GP;50 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      name: 'Monje',
      description: 'Independientemente de la disciplina que practiquen, todos los monjes tienen en común su capacidad para controlar la energía mágica que fluye a través de sus cuerpos. Ya sea canalizándola a través de una impresionante muestra de habilidad en combate o de un sutil refuerzo de sus capacidades defensivas y su velocidad, esta energía impregna todo lo que el monje hace.',
      primary_ability_1: 2,
      primary_ability_2: 5,
      hit_point_die: 'D8',
      saving_throws_1: 1,
      saving_throws_2: 2,
      skill_profs: '2,Acrobacias,Atletismo,Historia,Perspicacia,Religión,Sigilo',
      weapon_profs: 'Sencillas,Marciales ligeras',
      armor_train: null,
      tool_profs: '1,Herramientas de artesano;1,Instrumento musical',
      start_equip: '1 Cota de malla, 1 Escudo, 1 Espada larga, 6 Jabalinas, 1 Símbolo sagrado, 1 Paquete de sacerdote 9 GP;150 GP1 Lanza, 5 dagas, 1 herramientas de artesano o instrumento musical, 1 Paquete de explorador, 11 GP;50 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      name: 'Paladín',
      description: 'Independientemente de su origen o misión, los paladines están unidos por su juramento, que les lleva a enfrentarse a las fuerzas del mal. Ya lo hayan pronunciado ante el altar de un dios y con un sacerdote como testigo, en un claro sagrado frente a espíritus de la naturaleza y seres feéricos o en un momento de desesperación y pena con los difuntos como únicos testigos, el juramento de un paladín es un vínculo muy poderoso. Es la fuente del poder que transforma a un combatiente devoto en un campeón bendito.',
      primary_ability_1: 1,
      primary_ability_2: 6,
      hit_point_die: 'D10',
      saving_throws_1: 5,
      saving_throws_2: 6,
      skill_profs: '2,Atletismo,Perspicacia,Intimidación,Medicina,Persuación,Religión',
      weapon_profs: 'Sencillas,Marciales',
      armor_train: 'Ligera,Media,Pesada,Escudo',
      tool_profs: null,
      start_equip: '1 Cota de malla, 1 Escudo, 1 Espada larga, 6 Jabalinas, 1 Símbolo sagrado, 1 Paquete de sacerdote 9 GP;150 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 10,
      name: 'Druida',
      description: 'Ya sea convocando las fuerzas elementales de la naturaleza o emulando a las criaturas d el reino animal, los druidas encarnan la adaptabilidad, astucia y furia de la naturaleza. Pero no se consideran amos de esta, sino que se ven a sí mismos como meras extensiones de la voluntad indómita de la naturaleza.',
      primary_ability_1: 5,
      primary_ability_2: null,
      hit_point_die: 'D8',
      saving_throws_1: 4,
      saving_throws_2: 5,
      skill_profs: '2,Conocimiento Arcano,Medicina,Naturaleza,Percepción,Perspicacia,Religión,Trato con Animales.',
      weapon_profs: 'Sencillas',
      armor_train: 'Ligera,Escudo',
      tool_profs: '1,Útiles de herborista',
      start_equip: '1 Armadura de cuero, 1 Escudo, 1 Hoz, 1 Canalizador druídico, 1 Paquete de explorador, Útiles de herborista y 9 GP;50 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 11,
      name: 'Brujo',
      description: 'Los brujos buscan el conocimiento que yace escondido tras el tejido mismo del multiverso. A través de pactos forjados con misteriosos seres de poder sobrenatural, desvelan efectos mágicos sutiles y espectaculares a partes iguales. A partir del conocimiento ancestral poseído por entidades como nobles feéricos, demonios, diablos, sagas o los extraños seres del Reino Lejano, los brujos descubren secretos arcanos que refuerzan sus propios poderes.',
      primary_ability_1: 6,
      primary_ability_2: null,
      hit_point_die: 'D8',
      saving_throws_1: 5,
      saving_throws_2: 6,
      skill_profs: '2,Conocimiento Arcano,Engaño,Historia,Intimidación,Investigación,Naturaleza,Religión',
      weapon_profs: 'Sencillas',
      armor_train: 'Ligera',
      tool_profs: '1,Útiles de herborista',
      start_equip: '1 Armadura de cuero, 1 Hoz, 2 Dagas, 1 Canalizador Arcano, 1 Libro de conocimiento sobrenatural, 1 Paquete de Erudito y 15 GP;100 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 12,
      name: 'Bardo',
      description: 'Un bardo, ya sea este un erudito, un escaldo o un bribón, es capaz de tejer magia a través de sus palabras y su música, inspirando a sus aliados, desmoralizando a sus enemigos, manipulando mentes, creando ilusiones e incluso sanando heridas.',
      primary_ability_1: 6,
      primary_ability_2: null,
      hit_point_die: 'D8',
      saving_throws_1: 2,
      saving_throws_2: 6,
      skill_profs: '3,Acrobacias,Atletismo,Conocimiento Arcano,Engaño,Historia,Intimidación,Investigación,Interpretación,Medicina,Naturaleza,Percepción,Perspicacia,Persuación,Juego de Manos,Religión,Sigilo,Supervivencia,Trato con Animales',
      weapon_profs: 'Sencillas',
      armor_train: 'Ligera',
      tool_profs: '3,Instrumento musical',
      start_equip: '1 Armadura de cuero, 2 Dagas, 1 Instrumento a elección, 1 Paquete de artista, 19 GP;90 GP',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Classes', null, {});
  }
};
