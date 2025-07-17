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
    await queryInterface.bulkInsert('Races', [{
      id: 1,
      name: 'Aasimar',
      description: 'Los aasimar portan la luz de los cielos en sus almas. Descienden de humanos tocados por el poder del Monte Celestia, el plano divino de muchas deidades legales buenas. Los aasimar nacieron para ser los campeones de los dioses, sus nacimientos son aclamados como bendiciones. Son gentes de rostros sobrenaturales, con rasgos luminosos que revelan su herencia celestial.',
      type: 'Humanoide',
      size: 'Mediano,Pequeño',
      size_range: '4-7,2-4',
      speed: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'Dracónido',
      description: 'Nacidos de dragones, tal como su nombre proclama, los dracónidos caminan orgullosos por un mundo que los recibe con incomprensión temerosa. Creados por los dioses dracónidos o por los dragones mismos, los dracónidos nacían originalmente de huevos de dragón como una única raza, combinando los mejores atributos de dragones y humanoides. Algunos dracónidos son fieles servidores de verdaderos dragones, otros son soldados que luchan en grandes guerras, y otros se encuentran a la deriva, sin una vocación clara en la vida.',
      type: 'Humanoide',
      size: 'Mediano',
      size_range: '5-7',
      speed: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: 'Enano',
      description: 'Ricos reinos de antiguas grandezas, salones tallados en las entrañas de las montañas, el eco de picos y martillos en profundas minas y ardientes forjas, la entrega total al clan y la tradición, y un odio visceral hacia los goblins y los orcos. Estos principios comunes unen a todos los enanos.',
      type: 'Humanoide',
      size: 'Mediano',
      size_range: '4-5',
      speed: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      name: 'Elfo',
      description: 'Los elfos son un pueblo mágico de gracilidad sobrenatural, que viven en lugares de etérea belleza, morando en el interior de antiguos bosques o en espiras plateadas que brillan con luz feérica, donde una suave música surca el aire y dulces fragancias flotan en el viento. Los elfos aman la naturaleza y la magia, el arte, la música y la poesía.',
      type: 'Humanoide',
      size: 'Mediano',
      size_range: '5-6',
      speed: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      name: 'Gnomo',
      description: 'Un murmullo constante de bullicio impregna las madrigueras y vecindarios donde los gnomos forman sus muy unidas comunidades. El murmullo está puntualizado por otros ruidos: un entrechocar de engranajes por allí, una pequeña explosión por allá, un chillido de sorpresa y triunfo, y especialmente estallidos de carcajadas. Los gnomos disfrutan de la vida, recreándose en cada momento de invención, exploración, investigación, creación y diversión.',
      type: 'Humanoide',
      size: 'Pequeño',
      size_range: '3-4',
      speed: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      name: 'Goliat',
      description: 'En las cimas de las montañas más altas, donde los árboles no crecen y soplan gélidos vientos, moran los aislados goliats. Pocos pueden decir que han visto un goliat con sus propios ojos, y aún menos pueden decir que son amigos de uno. Los goliats vagan por un reino desolado de piedra, viento y frío. Sus cuerpos parecen haber sido esculpidos de las rocas de las montañas, y les otorgan grandes capacidades físicas. Sus espíritus se parecen al viento, convirtiéndolos en nómadas que vagan de cumbre a cumbre. Sus corazones están imbuidos con el frío procedente de sus tierras, dejando a cada goliat con la responsabilidad de ganarse un lugar en la tribu o morir intentándolo.',
      type: 'Humanoide',
      size: 'Mediano',
      size_range: '7-8',
      speed: 35,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      name: 'Halfling',
      description: 'Las comodidades del hogar son la meta en la vida de la mayoría de los halflings: un lugar donde asentarse en paz y tranquilidad, lejos de monstruos acechantes y el choque de ejércitos. Otros forman bandas nómadas que viajan constantemente, atraídos por el camino y el horizonte para descubrir las maravillas de nuevas tierras y sus gentes. Los halflings trabajan de buena gana con otros, y son leales a sus amigos, ya sean halflings o no. Pueden demostrar una ferocidad notable cuando sus amigos, familias o comunidades son amenazadas.',
      type: 'Humanoide',
      size: 'Pequeño',
      size_range: '2-3',
      speed: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      name: 'Humano',
      description: 'En las crónicas de la mayoría de los mundos, los humanos son la más joven de las razas, tardíos en su llegada a la escena mundial y efímeros en comparación con enanos, elfos y dragones. Quizás es por sus cortas vidas que luchan por lograr tanto como puedan en los años que le son dados; o quizás sienten que tienen algo que probar a las razas mayores, y es ese el por qué de las fundaciones de sus imperios basados en la conquista y el comercio. Cualquiera que sea su motivación, los humanos son los innovadores, los triunfadores y los pioneros de los mundos.',
      type: 'Humanoide',
      size: 'Mediano,Pequeño',
      size_range: '4-7,2-4',
      speed: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      name: 'Orco',
      description: 'La creación de los orcos se dio por Gruumsh, un poderoso dios que merodeaba por los espacios más abiertos del Plano Material. Gruumsh equipó a sus hijos con regalos que les ayudaría a deambular las grandes planicies, las vastas cavernas y mares agitados y para enfrentarse a los monstruos que los habitan. Incluso cuando cambian su devoción a otros dioses, los orcos retienen los regalos de Gruumsh: resistencia, determinación, y la habilidad para ver en la oscuridad.',
      type: 'Humanoide',
      size: 'Mediano',
      size_range: '6-7',
      speed: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 10,
      name: 'Tiefling',
      description: 'Ser recibidos con miradas furtivas y susurros, sufrir violencia e insultos en la calle, ver desconfianza y miedo en cada mirada: ésta es la carga de los tieflings. Además, para empeorar las cosas, los tiefling saben que esto es debido a un pacto realizado hace generaciones que introdujo en sus venas la esencia de Asmodeo, el señor de los Nueve Infiernos. Su apariencia y naturaleza no son culpa suya, sino de un antiguo pecado, por el cual ellos, sus hijos y los hijos de sus hijos siempre deberán pagar el precio.',
      type: 'Humanoide',
      size: 'Mediano,Pequeño',
      size_range: '4-7,3-4',
      speed: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 11,
      name: 'Semielfo',
      description: 'Caminando entre dos mundos pero sin pertenecer a ninguno, los semielfos poseen lo que algunos creen que son las mejores cualidades de sus padres elfos y humanos: la curiosidad, creatividad y ambición de los últimos, templada por los agudos sentidos, amor por la naturaleza y gustos artísticos de los primeros. Algunos semielfos viven entre humanos, apartados por sus diferencias físicas y emocionales, velando por sus amigos y seres queridos mientras el tiempo apenas deja mella en ellos. Otros viven con los elfos, llegando a la madurez mientras sus pares continúan siendo niños, creciendo sin descanso en los eternos reinos élficos. Muchos semielfos, incapaces de encajar en ninguna de estas sociedades, escogen una vida de vagabundeo solitario, o se unen a otros parias e inadaptados en una vida de aventureros.',
      type: 'Humanoide',
      size: 'Mediano',
      size_range: '5-6',
      speed: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 12,
      name: 'Semiorco',
      description: 'Ya sea unidos bajo el liderazgo de un poderoso brujo o habiendo luchado hasta el hartazgo después de años de conflicto, las tribus orcas y los humanos a veces forman alianzas, uniendo fuerzas en una enorme horda para el terror de las tierras civilizadas de los alrededores. Cuando estas aliazas son selladas mediante matrimonios, nacen los semiorcos. Algunos se alzan para convertirse en orgullosos líderes de sus tribus, aventajándose de su sangre humana frente a sus compañeros de sangre pura. Otros se aventuran al mundo exterior para probarse a sí mismos frente a los humanos y las otras razas civilizadas. Muchos de ellos se convierten en aventureros, cubriéndose de gloria gracias a su fuerza, y de notoriedad por sus costumbres barbáricas y furia salvaje.',
      type: 'Humanoide',
      size: 'Mediano',
      size_range: '5-6',
      speed: 30,
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
    await queryInterface.bulkDelete('Races', null, {});
  }
};
