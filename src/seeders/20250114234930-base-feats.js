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
    await queryInterface.bulkInsert('Feats', [{
      id: 1,
      name: 'Alerta',
      category: 'Origen',
      prerequisite: null,
      benefits: 'Competencia en iniciativa: Cuando tiras el dado para la iniciativa, puedes añadir tu bonificador por competencia a lo que saques.;Cambio de iniciativa: Inmediatamente después de tirar el dado para la iniciativa, puedes  cambiar tu iniciativa por la de uno de tus aliados en el mismo combate. No puedes hacer esto si tu aliado está Incapacitado.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'Artesano',
      category: 'Origen',
      prerequisite: null,
      benefits: 'Competencia en herramientas: Ganas competencia en tres herramientas de artesano a tu elección.;Descuento: Cuando compres un objeto no mágico, recibes un descuento del 20%.;Fabricación rápida: Cuando termines un Descanso Largo, puedes fabricar un objeto de equipo, siempre que tengas la herramienta de artesano asociada al objeto y la competencia para utilizar la herramienta. El objeto dura hasta la próxima vez que termines otro Descanso Largo, luego el objeto se destruye.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: 'Sanador',
      category: 'Origen',
      prerequisite: null,
      benefits: 'Médico en batalla: Si tienes útiles de sanador, puedes gastar un uso de ellos para aplicárselo a una criatura a 5 pies de ti como una Acción. Esa criatura puede usar un Dado de Golpe, y tú tiras el dado. La criatura recuupera puntos de golpe iguales a lo que obtengas en el dado más tu bonificador por competencia.;Volver a tirar curación: Cuando tires un dado para determinar el número de puntos de golpe que recuperas con un Conjuro o con el beneficio de Médico en batalla de esta dote, puedes volver a tirar el  dado si sale 1, y debes usar el nuevo tiro.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      name: 'Afortunado',
      category: 'Origen',
      prerequisite: null,
      benefits: 'Puntos de suerte: Tienes un número de Puntos de suerte igual a tu bonificador por competencia y puedes usar los puntos en los otros beneficios. Recuperas tus Puntos de suerte usados cuando terminas un Descanso Largo.;Ventaja: Cuando tiras un d20 por una prueba, puedes usar 1 Punto de suerte para darte Ventaja en el tiro.;Desventaja: Cuando una criatura tira un d20 para una tirada de ataque contra ti, puedes usar 1 Punto de suerte para imponer desventaja en la tirada.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      name: 'Iniciado en la magia',
      category: 'Origen',
      prerequisite: null,
      benefits: 'Dos trucos: Puedes aprender dos Trucos a tu elección de la lista de Conjuros del Clérigo, Druida o Mago. Tu habilidad para lanzar conjuros para los conjuros de esta dote es Inteligencia, Sabiduría o Carisma (lo eliges cuando selecciones esta dote).;Conjuro nivel 1: Escoge un conjuro de nivel 1 de la misma lista de la cual seleccionaste los trucos para esta dote.  Siempre tendrás este conjuro preparado. Puedes lanzarlo una vez sin tener un espacio de conjuro, y recuperas la habilidad de lanzarlo de esta forma una vez que terminas un Descanso Largo. También puedes lanzar el conjuro usando cualquier espacio de conjuro que tengas.;Cambio de conjuro: Cuando subes de nivel, puedes reemplazar uno de tus conjuros a tu elección para esta dote con un conjuro diferente del mismo nivel de la lista de conjuros elegida.;Repetible: Puedes tomar esta dote más de una vez, pero debes elegir una lista de conjuros distinta cada vez.',
      repeatable: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      name: 'Músico',
      category: 'Origen',
      prerequisite: null,
      benefits: 'Entrenamiento en instrumentos: Obtienes competencia en 3 instrumentos a tu elección.;Canción alentadora: Cuando terminas un Descanso Corto o Largo, puedes tocar instrumento musical con el que tengas competencia y darle Inspiración heróica a los aliados que escuchen la canción. El número de aliados que pueden ser afectados por este efecto equivale a tu bonificador por competencia.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      name: 'Atacante salvaje',
      category: 'Origen',
      prerequisite: null,
      benefits: 'Has entrenado para dar golpes particularmente dañinos. Una vez por turno, cuando golpeas a un blanco con un arma, puedes tirar el dado de daño del arma dos veces y usar cualquier tiro contra el blanco.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      name: 'Habilidoso',
      category: 'Origen',
      prerequisite: null,
      benefits: 'Obtienes competencia en cualquier combinación de tres habilidades o herramientas a tu elección.;Repetible: Puedes tomar esta dote más de una vez.',
      repeatable: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      name: 'Luchador de taberna',
      category: 'Origen',
      prerequisite: null,
      benefits: 'Golpe desarmado mejorado: Cuando golpeas en un ataque desarmado y haces daño, puedes hacer daño Contundente igual a 1d4 más tu modificador de Fuerza en lugar de hacer el daño normal de un ataque desarmado.;Volver a tirar daño: Cuando tires un dado por un ataque desarmado, puedes volver a tirar el dado si sacas un 1, y debes usar este nuevo tiro.;Armamento improvisado: Tienes competencia en armas improvisadas.;Empuje: Cuando golpeas a una criatura con un ataque desarmado como parte de una acción de ataque en tu turno, puedes hacer daño a tu objetivo y además empujarlo a 5 pies más lejos de ti. Puedes usar este beneficio sólo 1 vez por turno.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 10,
      name: 'Duro',
      category: 'Origen',
      prerequisite: null,
      benefits: 'Tus puntos de golpe máximos incrementan por una cantidad igual al doble de tu nivel de personaje cuando obtienes esta dote. Luego, cada vez que subes de nivel, tus puntos de golpe máximos incrementan en 2 puntos adicionales.',
      repeatable: false,
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
    await queryInterface.bulkDelete('Feats', null, {});
  }
};
