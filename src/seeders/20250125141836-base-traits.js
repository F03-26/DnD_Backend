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
    await queryInterface.bulkInsert('Traits', [{
      id: 1,
      name: 'Resistencia celestial',
      description: 'Tienes resistencia al daño Necrótico y al daño Radiante.',
      race_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'Visión en la oscuridad',
      description: 'Tienes visión en la oscuridad con un rango de 60 pies.',
      race_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: 'Manos sanadoras',
      description: 'Como acción Mágica, tocas a una criatura y tiras tantos d4 como tu bonificación por competencia. La criatura recupera la cantidad total que hayas sacado en los dados en puntos de golpe. Una vez usas esta habilidad, no puedes volver a usarla hasta haber completado un Descanso Largo.Como acción Mágica, tocas a una criatura y tiras tantos d4 como tu bonificación por competencia. La criatura recupera la cantidad total que hayas sacado en los dados en puntos de golpe. Una vez usas esta habilidad, no puedes volver a usarla hasta haber completado un Descanso Largo.',
      race_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      name: 'Portador de luz',
      description: 'Conoces el truco de Luz. Tu habilidad para lanzarlo es Carisma.',
      race_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      name: 'Revelación celestial',
      description: 'Una vez que tu personaje alcanza el nivel 3, te puedes transformar usando una Acción de Bonificación. La transformación dura 1 minuto o hasta que la finalices por tu cuenta (no requiere utilizar una acción). Una vez que te transformas, no puedes volver a hacerlo hasta que completes un Descanso Largo. Una vez en cada turno durante la transformación, puedes hacer daño extra a un objetivo cuando hagas daño con un ataque o conjuro. El daño extra equivale a tu Bonificación por Competencia y el tipo de daño puede ser Necrótico o Radiante. Las opciones de transformación son;Alas Celestiales: Dos alas espectrales brotan de tu espalda temporalmente. Hasta que la transformación termine, tienes una Velocidad de Vuelo igual a tu Velocidad.;Radiación Interior: Una luz abrasadora irradia temporalmente de tus ojos y boca. Mientras dure la transformación, emanas Luz Brillante en un radio de 10 pies, y al final de cada uno de tus turnos, cada criatura a 10 pies de ti recibe daño Radiante igual a tu Bonificación por Competencia.;Manto Necrótico: Tus ojos temporalmente se convierten en piscinas de oscuridad, y alas que no sirven para volar brotan de tu espalda temporalmente. Criaturas que no sean aliados a 10 pies de ti deben tener éxito en una tirada de salvación de Carisma (DC 8 más tu modificador de Carisma y Bonificación por Competencia) o tendrán la condición de Asustado.',
      race_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      name: 'Ascendencia dracónida',
      description: 'Tu linaje se desprende de un dragón progenitor. Al elegir esta raza, debes elegir el tipo de dragón del que descendiste, lo cual afecta en los rasgos siguientes.;Negro: Ácido;Azul: Electricidad;Latón: Fuego;Bronce: Electricidad;Cobre: Ácido;Oro: Fuego;Verde: Veneno;Rojo: Fuego;Plata: Frío;Blanco: Frío',
      race_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      name: 'Arma de aliento',
      description: 'Cuando usas una acción de ataque en tu turno, puedes reemplazar uno de tus ataques con una exalación de energía mágica in un cono de 15 pies o una línea de 30 pies que tiene 5 pies de ancho. Cada criatura que se encuentre en el área afectada debe hacer una tirada de salvación de Destreza (DC 8 más tu modificador por Constitución y Bonificador por Competencia). Si tiene éxito, la criatura recibe la mitad del daño. El naño incrementa en 1d10 cuando alcanzas los niveles 5 (2d10), 11 (3d10), y 17(4d10). Puedes usar este rasgo el número de veces igual a tu Bonificador por Competencia, y recuperas todos los usos cuando completas un Descanso Largo.',
      race_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      name: 'Resistencia al daño',
      description: 'Tienes resistencia al daño del tipo determinado por tu Ascendencia dracónica.',
      race_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      name: 'Visión en la oscuridad',
      description: 'Tienes visión en la oscuridad con un rango de 60 pies.',
      race_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 10,
      name: 'Vuelo dracónido',
      description: 'Cuando alcanzas el nivel 5, puedes canalizar magia dracónica para darte vuelo temporalmente. Como Acción Bonus, puedes hacer brotar alas espectrales en tu espalda por 10 minutos o hasta que retraigas tus alas por tu cuenta (no requiere usar acciones) o tengas la condición de Incapacitado. Durante este tiempo, tu Velocidad de Vuelo es igual a tu Velocidad. Tus alas parecen estar hechas del mismo material que el Arma de aliento. Una vez usas este rasgo, no puedes usarlo de nuevo hasta que completes un Descanso Largo.',
      race_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 11,
      name: 'Visión en la oscuridad',
      description: 'Tienes visión en la oscuridad con un rango de 120 pies.',
      race_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 12,
      name: 'Resiliencia enana',
      description: 'Tienes resistencia al daño de Veneno. También tienes Ventaja en tiradas de salvación que hagas para evitar o terminar con la condición de Envenenado.',
      race_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 13,
      name: 'Dureza enana',
      description: 'Tus puntos de golpe máximos incrementan en 1, e incrementan también en 1 cada ve que avanzas un nivel.',
      race_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 14,
      name: 'Astucia de la piedra',
      description: 'Como Acción Bonus, obtienes Sentido del Temblor en un rango de 60 pies por 10 minutos. Debes estar en una superficie de piedra o tocando una superficie de piedra para usar el Sentido del temblor. Puedes usar este rasgo tantas veces como tu Bonificador por Competencia, y recuperas los usos al completar un Descanso Largo.',
      race_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 15,
      name: 'Visión en la oscuridad',
      description: 'Tienes visión en la oscuridad con un rango de 60 pies.',
      race_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 16,
      name: 'Linaje élfico',
      description: 'Eres parte de un linaje que te otorga habiidades sobrenaturales. El linaje que escojas te otorga un conjuro de mayor nivel al alcanzar los niveles 3 y 5. Siempre tendrás ese conjuro preparado. Puedes usarlo sin utilizar un espacio de conjuro una vez, y recuperas la habilidad de lanzarlo de este modo cuando completes un Descanso Largo. También puedes lanzar el conjuro usando los espacios de conjuro que tengas disponibles y que sean del nivel apropiado. Las habilidades que puedes usar para lanzar estos conjuros son Inteligencia, Sabiduría o Carisma.',
      race_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 17,
      name: 'Linaje feérico',
      description: 'Tienes ventaja en tiradas de salvación que te hagan evitar o terminar con el efecto de Hechizado.',
      race_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 18,
      name: 'Sentidos agudos',
      description: 'Tienes competencia en la habilidad de Perspicacia, Percepción o Supervivencia.',
      race_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 19,
      name: 'Trance',
      description: 'No necesitas dormir, y la magia no te puede poner a dormir. Puedes completar un Descanso Largo en 4 horas si pasas esas horas en meditación en trance, durante la cual conservas la consciencia.',
      race_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 20,
      name: 'Visión en la oscuridad',
      description: 'Tienes visión en la oscuridad con un rango de 60 pies.',
      race_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 21,
      name: 'Astucia gnoma',
      description: 'Tienes ventaja en tiradas de salvación de Inteligencia, Sabiduría y Carisma.',
      race_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 22,
      name: 'Linaje gnomo',
      description: 'Eres parte de un linaje que te otorga habiidades sobrenaturales. Elige una de las siguientes opciones, para cualquiera que escojas, Inteligencia, Sabiduría o Carisma son tus habilidades para lanzar hechizos usando este rasgo.;Gnomo de los bosques: Sabes el truco Ilusión Menor. También siempre tienes el conjuro Hablar con Animales preparado. Puedes lanzarlo sin utilizar espacios de conjuro el número de veces de tu Bonificador por Competencia, y recuperas todos los usos cuando completas un Descanso Largo. También puedes usar espacios de conjuro para lanzar el conjuro.;Gnomo de las rocas: Conoces los trucos Reparación y Prestidigitación. Además, puedes pasar 10 minutos lanzando Prestidigitación para crear un pequeño dispositivo (AC 5, 1 HP), como un juguete, algo para crear fuego o una cajita de música. Cuando creas el dispositivo, puedes determinar su función escogiendo un efecto de Prestidigitación. El dispositivo produce ese efecto cada ve que tú u otra criatura usa una Acción Bonus para activarlo tocándolo. Si puedes escoger el efecto, tú puedes escogerlo cuando lo creaste. Puedes tener 3 de estos dispositivos existiendo a la vez, y cada uno se destruye 8 horas luego de su creación o cuando lo desmanteles usando una acción.',
      race_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 23,
      name: 'Ascendencia de gigantes',
      description: 'Has descendido de los gigantes. Elige uno de los siguientes beneficios, una bendición de tu ascendencia. Puedes usar este beneficio el  número de veces igual a tu Bonificación por Competenecia, y recuperas todos los usos luego de completar un Descanso Largo.',
      race_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 24,
      name: 'Viaje de las nubes (Gigante de las nubes)',
      description: 'Como Acción Bonus, puedes teletransportarte mágicamente hasta 30 pies hacia un espacio desocupado que tengas a la vista.',
      race_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 25,
      name: 'Quemadura de fuego (Gigante de fuego)',
      description: 'Cuando le das a un objetivo con una tirada de ataque y le haces daño, puedes hacer 1d10 de daño de Fuego a ese objetivo.',
      race_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 26,
      name: 'Frío de las heladas (Gigante de hielo)',
      description: 'Cuando le das a un objetivo con una tirada de ataque y le haces daño, puedes hacer 1d6 de daño Frío a ese objetivo y reducir su Velocidad por 10 pies hasta el inicio de tu siguiente turno.',
      race_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 27,
      name: 'Caída de la colina (Gigante de las colinas)',
      description: 'Cuando le das a una criatura Grande o más pequeña con una tirada de ataque y le haces daño, le puedes dar el efecto de Derribado.',
      race_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 28,
      name: 'Resistencia de la piedra (Gigante de las piedras)',
      description: 'Cuando recibes daño, puedes usar una Reacción para tirar 1d12. Suma tu modificador por Constitución al número obtenido y reduce el daño recibido por el total.',
      race_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 29,
      name: 'Trueno de la tormenta (Gigante de las tormentas)',
      description: 'Cuando recibes daño de una criatura a 60 pies de ti, puedes usar una Reacción para hacer 1d8 de daño de Relámpago a esa criatura.',
      race_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 30,
      name: 'Forma grande',
      description: 'Empezando por el nivel 5 del personaje, puedes cambiar tu tamaño como Acción Bonus si estas en un espacio lo suficientemente grande. Esta transformación dura 10 minutos o hasta que la termines por tu cuenta (no requiere usar acción). Durante la transformación, tienes Ventaja en tiradas de Fuerza, y tu Velocidad incrementa en 10 pies. Una vez  que usas este rasgo, no lo puedes usar otra vez hasta que completes un Descanso Largo. ',
      race_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 31,
      name: 'Complexión robusta',
      description: 'Tienes ventaja en cualquier tirada de salvación que te haga terminar con el efecto de Agarrado. También para determinar tu capacidad de carga, cuentas con un tamaño mayor.',
      race_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 32,
      name: 'Valiente',
      description: 'Tienes ventaja en tiradas de salvación que te hagan evitar o terminar con el efecto de Asustado.',
      race_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 33,
      name: 'Agilidad halfling',
      description: 'Puedes moverte a través del espacio de cualquier criatura más grande que tú, pero no puedes detenerte en el mismo espacio.',
      race_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 34,
      name: 'Suerte',
      description: 'Cuando saques un 1 en el d20 de una prueba de d20, puedes volver a tirar el dado, y debes usar el segundo resultado.',
      race_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 35,
      name: 'Naturalmente sigiloso',
      description: 'Puedes usar una acción de Esconder incluso cuando estás escondido solo detrás de una criatura que es al menos un tamaño más grande que tú.',
      race_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 36,
      name: 'Ingenioso',
      description: 'Obtienes Inspiración Heroica siempre que completes un Descanso Largo.',
      race_id: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 37,
      name: 'Hábil',
      description: 'Eres Competente en una habilidad a tu elección.',
      race_id: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 38,
      name: 'Versátil',
      description: 'Obtienes una dote de Origen a tu elección. Se recomienda elegir Habilidoso.',
      race_id: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 39,
      name: 'Subidón de adrenalina',
      description: 'Puedes usar una acción de Esquivar como Acción Bonus. Cuando lo hagas, ganas un número de Puntos de Golpe Temporales igual a tu Bonificación por Competencia. Puedes usar este rasgo el número de veces igual a tu Bonificación por Competencia, y recuperas todos los usos cuando terminas un Descanso Corto o Largo.',
      race_id: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 40,
      name: 'Visión en la oscuridad',
      description: 'Tienes visión en la oscuridad con un rango de 120 pies.',
      race_id: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 41,
      name: 'Resistencia implacable',
      description: 'Cuando se te reducen los Puntos de Golpe a 0, pero aún no mueres, puedes quedar con 1 Punto de Golpe en lugar de ello. Una vez que usas este rasgo, no puedes hacerlo de nuevo hasta que termines un Descanso Largo.',
      race_id: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 42,
      name: 'Visión en la oscuridad',
      description: 'Tienes visión en la oscuridad con un rango de 60 pies.',
      race_id: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 43,
      name: 'Legado diabólico',
      description: 'Eres parte de un legado que te otorga habilidades sobrenaturales. Al elegir esta raza, debes elegir un Legado Diabólico y obtienes el beneficio de nivel 1 de ese legado. Cuando alzanzas los niveles 3 y 5, puedes aprender un conjuro de nivel más alto. Siempre tienes ese conjuro preparado. Lo puedes lanzar una vez sin usar un espacio de conjuro, y recuperas esta habilidad cuando completas un Descanso Largo. También puedes lanzar este conjuro usando espacios de conjuro que sean del nivel apropiado. Las habilidades que se usan para lanzar conjuros con este rasgo son Inteligencia, Sabiduría y Carisma (elige la habilidad al escoger el legado).',
      race_id: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 44,
      name: 'Presencia de otro mundo',
      description: 'Sabes el truco de Taumaturgia. Cuando lo lanzas con este rasgo, el conjuro usa la misma habilidad que con el rasgo de Legado Diabólico.',
      race_id: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 45,
      name: 'Mejora de característica',
      description: 'Tu puntuación de Carisma aumenta en 2 y otras dos puntuaciones de característica de tu elección en 1.',
      race_id: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 46,
      name: 'Visión en la oscuridad',
      description: 'Debido a tu sangre élfica, puedes ver bien en la oscuridad o con poca luz. Eres capaz de percibir hasta a 60 pies en luz tenue como si hubiera luz brillante, y esa misma distancia en la oscuridad como si hubiera luz tenue. Eso sí, no puedes distinguir colores en la oscuridad, solo tonos de gris.',
      race_id: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 47,
      name: 'Linaje feérico',
      description: 'Tienes ventaja en las tiradas de salvación para evitar ser hechizado y la magia no puede dormirte.',
      race_id: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 48,
      name: 'Versátil con habilidades',
      description: 'Ganas competencia en dos habilidades de tu elección.',
      race_id: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 49,
      name: 'Mejora de característica',
      description: 'Tu puntuación de Fuerza aumenta en 2 y tu puntuación de Constitución en 1.',
      race_id: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 50,
      name: 'Visión en la oscuridad',
      description: 'Debido a tu sangre orca, puedes ver bien en la oscuridad o con poca luz. Eres capaz de percibir hasta a 60 pies en luz tenue como si hubiera luz brillante, y esa misma distancia en la oscuridad como si hubiera luz tenue. Eso sí, no puedes distinguir colores en la oscuridad, solo tonos de gris.',
      race_id: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 51,
      name: 'Amenazador',
      description: 'Eres competente en la habilidad de intimidación.',
      race_id: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 52,
      name: 'Ataques salvajes',
      description: 'Cuando hagas un crítico con un ataque con arma cuerpo a cuerpo, podrás tirar uno de los dados de daño del arma una vez más y añadir el resultado al daño adicional causado por el crítico.',
      race_id: 12,
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
    await queryInterface.bulkDelete('Traits', null, {});
  }
};
