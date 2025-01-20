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
    await queryInterface.bulkInsert('Backgrounds', [{
      id: 1,
      name: 'Acólito',
      description: 'Has dedicado tu vida al servicio de un templo consagrado a un dios o panteón de dioses. Sirves de intermediario entre el reino de lo sagrado y el mundo mortal, realizando rituales religiosos y ofreciendo sacrificios para que los fieles puedan ser partícipes de la presencia divina. No tienes por qué ser un clérigo; llevar a cabo ritos sagrados no es lo mismo que canalizar el poder divino.',
      ability_score_1: 4,
      ability_score_2: 5,
      ability_score_3: 6,
      feat_id: 5,
      skill_prof_1: 9,
      skill_prof_2: 12,
      tool_profs: 'Suministros de calígrafo',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'Artesano',
      description: 'Empezaste trapeando pisos y limpiando mostradores en un taller de artesano por unas cuantas piezas de cobre al día. Cuando llegaste a la edad suficiente para ser aprendiz, aprendiste a crear cosas básicas por ti mismo, así como a atraer a tus clientes ocacionales. Tu comercio también te ha dado un ojo atento al detalle.',
      ability_score_1: 1,
      ability_score_2: 2,
      ability_score_3: 4,
      feat_id: 2,
      skill_prof_1: 7,
      skill_prof_2: 18,
      tool_profs: '1,Artesano',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: 'Charlatán',
      description: 'Siempre has conseguido que los demás hagan lo que quieres. Sabes qué cuerdas tocar, cómo sonsacarles sus anhelos simplemente hablando un rato con ellos y, mediante unas pocas preguntas escogidas, eres capaz de leerles como si de un cuento de niños se tratara. Supone un talento muy útil, que estás más que dispuesto a usar para tu propio beneficio.',
      ability_score_1: 2,
      ability_score_2: 3,
      ability_score_3: 6,
      feat_id: 8,
      skill_prof_1: 3,
      skill_prof_2: 15,
      tool_profs: 'Útiles para falsificar',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      name: 'Criminal',
      description: 'Eres un criminal experto, con una abultada experiencia al margen de la ley. Has pasado mucho tiempo entre delincuentes y todavía conservas numerosos contactos en el mundillo criminal. Estás mucho más fam iliarizado que la mayoría con el asesinato, el hurto y la violencia que impregnan las entrañas de la civilización. Has logrado sobrevivir todo este tiempo gracias a tu desdén por las reglas y normativas de la sociedad.',
      ability_score_1: 2,
      ability_score_2: 3,
      ability_score_3: 4,
      feat_id: 1,
      skill_prof_1: 3,
      skill_prof_2: 4,
      tool_profs: 'Herramientas de ladrón',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      name: 'Animador',
      description: 'Tu sitio favorito es frente al público. Sabes cómo encandilarlo, entretenerlo e incluso inspirarlo. Tus poemas animan el corazón de quienes te escuchan, despertando en ellos la pena, la alegría, la risa o la furia. Tu música levanta sus ánimos o apresa su melancolía. Tus pasos de baile les cautivan y tus burlas les hieren en el alma . Sean cuales sean las técnicas que emplees, tu arte es tu vida.',
      ability_score_1: 1,
      ability_score_2: 2,
      ability_score_3: 6,
      feat_id: 6,
      skill_prof_1: 2,
      skill_prof_2: 16,
      tool_profs: '1,Instrumento',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      name: 'Granjero',
      description: 'Creciste siendo cercano a la tierra. Años atendiendo a los animales y cultivando la tierra te han recompensado con paciencia y buena salud. Has tenido una apreciación apasionada por los bienes de la naturaleza, así como un respeto sano por su ira.',
      ability_score_1: 1,
      ability_score_2: 3,
      ability_score_3: 5,
      feat_id: 10,
      skill_prof_1: 8,
      skill_prof_2: 13,
      tool_profs: 'Herramientas de carpintero',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      name: 'Guardia',
      description: 'Tus pies duelen con sólo recordar las incontables horas que pasaste en tu puesto en la torre. Fuiste entrenado para mantener un ojo mirando el otro lado del muro, observando por si llegan merodeadores desde el bosque cercano, y el otro ojo mirando dentro del muro, buscando ladrones y criminales.',
      ability_score_1: 1,
      ability_score_2: 4,
      ability_score_3: 5,
      feat_id: 1,
      skill_prof_1: 1,
      skill_prof_2: 11,
      tool_profs: '1,Juegos',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      name: 'Guía',
      description: 'Alcanzaste la mayoría de edad al aire libre, lejos de tierras colonizadas. Tu hogar fue cualquier lugar donde podías estirar tu petate. Hay maravillas en la naturaleza- monstruos extraños, bosques prístinos y ríos, ruinas abandonadas de grandes vestíbulos alguna vez habitados por gigantes- y aprendiste a defenderte por ti mismo mientras los explorabas. De vez en cuando, guiaste a amistosos sacerdotes de la naturaleza que te instruían sobre lo fundamental de canalizar la magia de lo salvaje.',
      ability_score_1: 2,
      ability_score_2: 3,
      ability_score_3: 5,
      feat_id: 5,
      skill_prof_1: 4,
      skill_prof_2: 14,
      tool_profs: 'Herramientas de cartógrafo',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      name: 'Ermitaño',
      description: 'Has pasado gran parte de tus años de aprendizaje aislado, ya fuera como parte de una comunidad resguardada del exterior, como un monasterio, o completamente solo. Apartado del clamor de la sociedad has encontrado quietud, soledad y puede que, incluso, algunas de las respuestas que estabas buscando.',
      ability_score_1: 3,
      ability_score_2: 5,
      ability_score_3: 6,
      feat_id: 3,
      skill_prof_1: 9,
      skill_prof_2: 10,
      tool_profs: 'Útiles de herborista',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 10,
      name: 'Mercader',
      description: 'Fuiste aprendiz de un comerciante, maestro de caravana, o tendero, aprendiendo las cosas fundamentales sobre el comercio. Viajaste mucho, y te ganaste la vida comprando y vendiendo los materiales básicos que necesitan los artesanos para trabajar, o vendiendo los objetos trabajados por dichos artesanos. Quizá transportaste los bienes de un lado a otro (a través de un barco, un vagón o en una caravana) o los compraste de comerciantes ambulantes y los vendiste en tu propia tienda.',
      ability_score_1: 3,
      ability_score_2: 4,
      ability_score_3: 6,
      feat_id: 4,
      skill_prof_1: 13,
      skill_prof_2: 18,
      tool_profs: 'Herramientas de navegante',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 11,
      name: 'Noble',
      description: 'Entiendes las riquezas, el poder y los privilegios. Posees un título nobiliario y tu familia es dueña de tierras, recauda impuestos y ostenta una influencia política no desdeñable. Podrías ser un aristócrata consentido, que nunca ha trabajado o sufrido incomodidad alguna, un antiguo mercader que acaba de entrar a formar parte de la nobleza o un canalla desheredado que se cree que tiene derecho a todo. O quizá seas un terrateniente honesto y diligente, que se preocupa sinceramente por los que viven y trabajan en sus tierras y es consciente de su responsabilidad para con ellos.',
      ability_score_1: 1,
      ability_score_2: 4,
      ability_score_3: 6,
      feat_id: 8,
      skill_prof_1: 6,
      skill_prof_2: 18,
      tool_profs: '1,Juegos',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 12,
      name: 'Erudito',
      description: 'Has pasado años aprendiendo sobre el multiverso. Has leído detenidamente manuscritos, estudiado pergaminos y escuchado a los mayores expertos de los temas que te interesan. Tus esfuerzos te han convertido en un maestro de tu campo.',
      ability_score_1: 3,
      ability_score_2: 4,
      ability_score_3: 5,
      feat_id: 5,
      skill_prof_1: 5,
      skill_prof_2: 6,
      tool_profs: 'Suministros de calígrafo',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 13,
      name: 'Marinero',
      description: 'Has sido marinero en un barco durante años. A lo largo de este periodo te has enfrentado a tormentas portentosas, monstruos de las profundidades y aquellos que querían hundir tu navío en las profundidades sin fondo. Tu primer amor fueron los vastos horizontes, pero ha llegado la hora de probar algo nuevo.',
      ability_score_1: 1,
      ability_score_2: 2,
      ability_score_3: 5,
      feat_id: 9,
      skill_prof_1: 2,
      skill_prof_2: 11,
      tool_profs: 'Herramientas de navegante',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 14,
      name: 'Escriba',
      description: 'Pasaste tus años formativos en un scriptorium, un monasterio dedicado a la preservación del conocimiento, o una agencia del gobierno, donde aprendiste a escribir de forma clara y a producir textos finamente escritos. Quizá redactaste documentos gubernamentales, o copiaste tomos de literatura. Podrías tener habilidades de escritor de poesía, narrativa o en investigaciones académicas. Por sobre todo, tienes mucha atención al detalle, lo que te ayuda a evitar introducir errores en los documentos que copias y creas.',
      ability_score_1: 2,
      ability_score_2: 4,
      ability_score_3: 5,
      feat_id: 8,
      skill_prof_1: 7,
      skill_prof_2: 11,
      tool_profs: 'Suministros de calígrafo',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 15,
      name: 'Soldado',
      description: 'Desde que tienes memoria, la guerra ha sido tu vida. Te entrenaste desde pequeño, estudiando el uso de tus armas y tu armadura. Aprendiste técnicas básicas de supervivencia, entre las que se encontraban cómo salir vivo del campo de batalla. Puede que formaras parte de las fuerzas regulares de un ejército nacional o una compañía mercenaria, o tal vez luchabas en una milicia local que adquirió protagonismo durante una guerra reciente.',
      ability_score_1: 1,
      ability_score_2: 2,
      ability_score_3: 3,
      feat_id: 7,
      skill_prof_1: 1,
      skill_prof_2: 17,
      tool_profs: '1,Juegos',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 16,
      name: 'Marginado',
      description: 'Creciste en las calles rodeado de marginados con la misma suerte, algunos de ellos amigos y unos pocos rivales. Dormías donde podías y hacías trabajos inusuales por comida. A veces, cuando el hambre se vovía insoportable, te dedicabas al robo. Aún así, nunca perdiste tu orgullo ni abandonaste la esperanza. El destino aún no acaba contigo.',
      ability_score_1: 2,
      ability_score_2: 5,
      ability_score_3: 6,
      feat_id: 4,
      skill_prof_1: 4,
      skill_prof_2: 12,
      tool_profs: 'Herramientas de ladrón',
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
    await queryInterface.bulkDelete('Backgrounds', null, {});
  }
};
