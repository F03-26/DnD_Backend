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
    await queryInterface.bulkInsert('Abilities', [{
      id: 1,
      ability_id: 1,
      name: 'Atletismo',
      description: 'Las pruebas de Fuerza (Atletismo) se realizan en situaciones difíciles en las que puedas encontrarte mientras trepas, saltas o nadas.',
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      ability_id: 2,
      name: 'Acrobacias',
      description: 'Las pruebas de Destreza (Acrobacias) se utilizan para intentar conservar el equilibrio en situaciones difíciles, como cuando estás corriendo sobre una placa de hielo, manteniendo el equilibrio sobre una cuerda floja o intentando no ser derribado por el bamboleo de un barco.',
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      ability_id: 2,
      name: 'Juego de Manos',
      description: 'Cada vez que quieras recurrir a la prestidigitación o la habilidad manual, como cuando tratas de esconder algo en tu persona o inculpar a alguien colocando un objeto en sus ropas, tendrás que hacer una prueba de Destreza (Juego de Manos).',
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      ability_id: 2,
      name: 'Sigilo',
      description: 'Haz una prueba de Destreza (Sigilo) cuando intentes esconderte de tus enemigos, escabullirte sin que te detecten los guardias, moverte sin ser detectado o acercarte a alguien sin ser visto u oído.',
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      ability_id: 4,
      name: 'Conocimiento arcano',
      description: 'Las pruebas de Inteligencia (Conocimiento Arcano) miden tu capacidad para recordar información acerca de conjuros, objetos mágicos, símbolos sobre naturales, tradiciones mágicas, planos de existencia y los habitantes de dichos planos.',
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      ability_id: 4,
      name: 'Historia',
      description: 'Las pruebas de Inteligencia (Historia) miden tu capacidad para recordar información sobre eventos históricos, personas legendarias, reinos antiguos, disputas pasadas, guerras recientes y civilizaciones perdidas.',
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      ability_id: 4,
      name: 'Investigación',
      description: 'Cuando buscas pistas y haces deducciones en base a ellas, llevas a cabo pruebas de Inteligencia (Investigación). Podrías determinar la ubicación de un objeto escondido, discernir el arma que causó una herida a partir de su aspecto o encontrar el punto más débil de un túnel, cuya ruptura haría que se derrumbara. Estudiar pergaminos antiguos en busca de un fragmento de conocimiento perdido también implicaría una prueba de Inteligencia (Investigación).',
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      ability_id: 4,
      name: 'Naturaleza',
      description: 'Las pruebas de Inteligencia (Naturaleza) miden tu capacidad para recordar información acerca del terreno, plantas y animales, el clima y los ciclos de la naturaleza.',
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      ability_id: 4,
      name: 'Religión',
      description: 'Las pruebas de Inteligencia (Religión) miden tu capacidad para recordar información acerca dedeidades, ritos y oraciones, jerarquías religiosas, símbolos sagrados y los rituales de sectas secretas.',
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 10,
      ability_id: 5,
      name: 'Medicina',
      description: 'Una prueba de Sabiduría (Medicina) sirve para intentar estabilizar un compañero que agoniza o diagnosticar una enfermedad.',
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 11,
      ability_id: 5,
      name: 'Percepción',
      description: 'Las pruebas de Sabiduría (Percepción) te permiten ver, oír y, en general, detectar la presencia de algo o alguien. Mide tu atención y la agudeza de tus sentidos. Podrías, por ejemplo, intentar escuchar una conversación a través de una puerta cerrada, espiar tras una ventana abierta u oír a monstruos moverse sigilosamente por el bosque. También podrías tratar de descubrir cosas escondidas o fáciles de pasar por alto, ya sean orcos tendiendo una emboscada en el camino, matones ocultándose en las sombras de un callejón o la luz de una vela tras una puerta secreta cerrada.',
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 12,
      ability_id: 5,
      name: 'Perspicacia',
      description: 'Las pruebas de Sabiduría (Perspicacia) indican si eres capaz de discernir las verdaderas intenciones de una criatura, como cuando intentas detectar si miente o predecir su siguiente movimiento. La observación del lenguaje corporal, hábitos del habla y cambios en los gestos es clave.',
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 13,
      ability_id: 5,
      name: 'Trato con animales',
      description: 'Cuando haya que dilucidar si puedes calmar a un animal doméstico, evitar que una montura se asuste o intuir las intenciones de un animal, el DM podrá pedirte una prueba de Sabiduría (Trato con Animales). También debes hacer una prueba de este tipo para controlar tu montura al intentar hacer una maniobra arriesgada.',
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 14,
      ability_id: 5,
      name: 'Supervivencia',
      description: 'El DM te podría pedir una prueba de Sabiduría (Supervivencia) para seguir rastros, cazar, guiar a tu grupo a través de un páramo helado, identificar signos que indiquen la presencia de osos lechuza en los alrededores, predecir el tiempo, o evitar arenas movedizas y otros peligros naturales.',
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 15,
      ability_id: 6,
      name: 'Engaño',
      description: 'Las pruebas de Carisma (Engaño) determinan si puedes esconder la verdad de forma convincente, ya sea verbalmente o mediante tus actos. El engaño abarca desde confundir a otros recurriendo a ambigüedades hasta simple y llanamente mentir. Ejemplos de situaciones en las que es útil son confundir a un guardia, timar a un mercader, ganar dinero con juegos de azar, disfrazarse para pasar desapercibido, impedir sospechas mediante afirmaciones falsas o mantener la compostura al mentir.',
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 16,
      ability_id: 6,
      name: 'Interpretación',
      description: 'Las pruebas de Carisma (Interpretación) indican si has entretenido a tu audiencia mediante la música, el baile, la declamación o cualquier otra forma de entretenimiento.',
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 17,
      ability_id: 6,
      name: 'Intimidación',
      description: 'Cuando intentes influir en alguien recurriendo a amenazas, actos hostiles y violencia física, el DM te pedirá una prueba de Carisma (Intimidación). Algunos ejemplos son sacar información a un prisionero, convencer a unos matones callejeros de que se retiren de una confrontación o usar el filo de una botella rota para pedir a un burlón visir que reconsidere su decisión.',
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 18,
      ability_id: 6,
      name: 'Persuación',
      description: 'Cuando intentes influir en personas o grupos recurriendo al tacto, la educación o los buenos modos, el DM te pedirá una prueba de Carisma (Persuasión). Lo normal es usar Persuasión cuando se actúa de buena fe, como, por ejemplo, para afianzar amistades, hacer peticiones cordiales o comportarse según exige la etiqueta. Algunos intentos de persuadir podrían ser convencer a un chambelán de que permita a tu grupo ver al rey, negociar la paz entre tribus enfrentadas o inspirar a una masa de pueblerinos.',
      modifier: 0,
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Abilities', null, {});
  }
};
