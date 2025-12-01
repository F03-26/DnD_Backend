'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Features', [
      {
      id: 1,
      name: 'Furia',
      level: 1,
      class_id: 5,
      description: 'Puedes imbuirte de un poder primigenio llamado furia, que te otorga una fuerza y resistencia extraordinarias. Puedes dejarte llevar por ella como acción adicional si no llevas puesta una armadura pesada. Recuperas uno de los usos gastados tras finalizar un descanso corto y todos tras finalizar un descanso largo. Mientras estés enfurecido, usa las siguientes reglas.\n- Resistencia al daño: Tienes resistencia al daño contundente, cortante y perforante. \n- Daño por furia: Cuando llevas a cabo un ataque que use la Fuerza (ya sea con un arma o un ataque sin armas) y causas daño al objetivo, obtienes un bonificador al daño que aumenta conforme subes de nivel de bárbaro, como se muestra en la columna “Daño por furia” de la tabla “Rasgos de bárbaro”.\n- Ventaja en Fuerza: Tienes ventaja en las pruebas de Fuerza y en las tiradas de salvación de Fuerza.\n- Sin concentración ni conjuros: No puedes mantener la concentración ni lanzar conjuros.\n- Duración: La furia dura hasta el final de tu siguiente turno y termina antes si te pones una armadura pesada o recibes el estado de incapacitado. Si la furia sigue activa en tu siguiente turno, puedes prolongarla otro asalto de una de las siguientes formas: \n* Haces una tirada de ataque contra un enemigo.\n* Obligas a un enemigo a hacer una tirada de salvación.\n* Empleas una acción adicional para prolongar tu furia.\nCada vez que prolongues la furia, durará hasta el final de tu siguiente turno. Puedes mantener una furia hasta 10 minutos.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 2,
      name: 'Defensa sin Armadura',
      level: 1,
      class_id: 5,
      description: 'Mientras no lleves armadura alguna, tu clase de armadura base será igual a 10 más tus modificadores por Destreza y Constitución. Obtienes este beneficio aunque lleves un escudo. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 3,
      name: 'Maestría con Armas',
      level: 1,
      class_id: 5,
      description: 'Tu entrenamiento con armas te permite utilizar las propiedades de maestría con dos tipos de armas cuerpo a cuerpo sencillas o marciales de tu elección, como las hachas a dos manos y las hachas de mano. Tras finalizar un descanso largo, puedes llevar a cabo ejercicios con armas y cambiar una de dichas elecciones. Cuando alcances ciertos niveles de bárbaro, adquirirás la capacidad de usar las propiedades de maestría con más tipos de armas.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 4,
      name: 'Sentir el Peligro',
      level: 2,
      class_id: 5,
      description: 'Eres capaz de percibir de forma casi sobrenatural cuándo las cosas no son como deberían. Gracias a ello, se te da bien evitar el peligro. Tienes ventaja en las tiradas de salvación de Destreza salvo que tengas el estado de incapacitado. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 5,
      name: 'Ataque Temerario',
      level: 2,
      class_id: 5,
      description: 'Puedes abandonar por completo tu defensa para atacar con una mayor fiereza. Cuando vayas a realizar la primera tirada de ataque de tu turno, puedes decidir atacar temerariamente. Si lo haces, tendrás ventaja en las tiradas de ataque que utilicen la Fuerza hasta el principio de tu siguiente turno, pero las tiradas de ataque contra ti también tendrán ventaja durante ese tiempo. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 6,
      name: 'Subclase de Bárbaro',
      level: 3,
      class_id: 5,
      description: 'Consigues una subclase de bárbaro de tu elección. Las subclases de la senda del Árbol del Mundo, la senda del berserker, la senda del corazón salvaje y la senda del fanático se detallan tras la descripción de esta clase. Una subclase es una especialización que te proporciona rasgos cuando alcanzas ciertos niveles de bárbaro. De aquí en adelante, obtienes todos los rasgos de tu subclase que sean de tu nivel de bárbaro e inferiores. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 7,
      name: 'Conocimiento Primigénio',
      level: 3,
      class_id: 5,
      description: 'Ganas competencia en otra habilidad de tu elección de la lista de habilidades disponibles para los bárbaros en el nivel 1. Además, mientras estés enfurecido, puedes canalizar el poder primigenio cuando intentes determinadas tareas. Siempre que hagas una prueba de característica con una de las siguientes habilidades, podrás hacerla como una prueba de Fuerza incluso si normalmente utiliza otra característica: Acrobacias, Intimidación, Percepción, Sigilo o Supervivencia. Cuando utilizas esta capacidad, tu Fuerza representa el poder primigenio que fluye por ti y agudiza tu agilidad, porte y sentidos. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 8,
      name: 'Mejora de Característica',
      level: 4,
      class_id: 5,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 9,
      name: 'Ataque Adicional',
      level: 5,
      class_id: 5,
      description: 'Cuando lleves a cabo la acción de atacar en tu turno, podrás hacer dos ataques en lugar de uno. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 10,
      name: 'Movimiento Rápido',
      level: 5,
      class_id: 5,
      description: 'Si no estás llevando armadura pesada, tu velocidad aumenta en 10 pies.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 11,
      name: 'Rasgo de Subclase',
      level: 6,
      class_id: 5,
      description: 'Elige un rasgo de la senda de Bárbaro que escogiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 12,
      name: 'Instinto Salvaje',
      level: 7,
      class_id: 5,
      description: 'Tus instintos están tan afilados que tienes ventaja en las tiradas de iniciativa.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 13,
      name: 'Salto Instintivo',
      level: 7,
      class_id: 5,
      description: 'Como parte de la acción adicional que usas para dejarte llevar por la Furia, puedes desplazarte una distancia igual a la mitad de tu velocidad.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 14,
      name: 'Mejora de Característica',
      level: 8,
      class_id: 5,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 15,
      name: 'Golpe Brutal',
      level: 9,
      class_id: 5,
      description: 'Si utilizas Ataque temerario, puedes renunciar a cualquier ventaja en una tirada de ataque de tu elección basada en la Fuerza en tu turno. La tirada de ataque elegida no debe tener desventaja. Si la tirada de ataque elegida acierta, el objetivo sufre 1d10 de daño adicional del mismo tipo que inflija el arma o el ataque sin armas y puedes causar un efecto de Golpe Brutal detu elección. Tienes las siguientes opciones de efectos.\n- Golpe enérgico: El objetivo es empujado 15 pies respecto a ti en línea recta. Luego puedes moverte hasta la mitad de tu velocidad directamente hacia el objetivo sin provocar ataques de oportunidad.\n- Golpe ralentizador. La velocidad del objetivo se reduce en 15 pies hasta el principio de tu siguiente turno. Un objetivo solo puede sufrir un golpe ralentizador cada vez: el más reciente.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 16,
      name: 'Rasgo de Subclase',
      level: 10,
      class_id: 5,
      description: 'Elige un rasgo de la senda de Bárbaro que escogiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 17,
      name: 'Furia Implacable',
      level: 11,
      class_id: 5,
      description: 'Tu furia te permite seguir luchando incluso tras sufrir heridas graves. Si tus puntos de golpe se reducen a 0 mientras estas enfurecido, pero no mueres inmediatamente, puedes hacer una tirada de salvación de Constitución con CD 10. Si la superas, tus puntos de golpe pasarán a ser una cantidad igual al doble de tu nivel de bárbaro. Siempre que uses este rasgo después de la primera vez, la CD aumenta en 5. Tras finalizar un descanso corto o largo, la CD vuelve a ser 10.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 18,
      name: 'Mejora de Característica',
      level: 12,
      class_id: 5,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 19,
      name: 'Golpe Brutal Mejorado',
      level: 13,
      class_id: 5,
      description: 'Has perfeccionado tus formas de atacar con fiereza.Entre las opciones de Golpe brutal se encuentran ahora los siguientes efectos:\n- Golpe abrumador: El objetivo tiene desventaja en la siguiente tirada de salvación que haga y no puede llevar a cabo ataques de oportunidad hasta el principio de tu siguiente turno.\n- Golpe desgarrador: Antes del principio de tu siguiente turno, la próxima tirada de ataque realizada por otra criatura contra el objetivo obtiene un bonificador de +5. Una tirada de ataque puede obtener solo un bonificador de un golpe desgarrador. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 20,
      name: 'Rasgo de Subclase',
      level: 14,
      class_id: 5,
      description: 'Elige un rasgo de la senda de Bárbaro que escogiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 21,
      name: 'Furia Persistente',
      level: 15,
      class_id: 5,
      description: 'Cuando tires iniciativa, puedes recuperar todos los usos gastados de la furia. Tras recuperar los usos de la furia de esta manera, no podrás volver a hacerlo hasta que finalices un descanso largo. Además, tu furia es tan intensa que ahora dura 10 minutos sin necesidad de hacer nada para prolongarla de un asalto a otro. Tu furia termina antes si recibes el estado de inconsciente (no solo el de incapacitado) o te pones una armadura pesada. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 22,
      name: 'Mejora de Característica',
      level: 16,
      class_id: 5,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 23,
      name: 'Golpe Brutal Mejorado',
      level: 17,
      class_id: 5,
      description: 'El daño adicional de tu Golpe brutal aumenta a 2d10. Además, puedes utilizar dos efectos diferentes de Golpe brutal siempre que uses tu rasgo Golpe brutal. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 24,
      name: 'Poderío Indómito',
      level: 18,
      class_id: 5,
      description: 'Si tu resultado en una prueba de Fuerza o una tirada de salvación de Fuerza es inferior a tu puntuación de Fuerza, puedes usar esa puntuación en lugar del resultado. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 25,
      name: 'Don Épico',
      level: 19,
      class_id: 5,
      description: 'Obtienes una dote de don épico u otra dote de tu elección para la que cumplas las condiciones. Se recomienda Don del ataque imparable. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 26,
      name: 'Campeón Primordial',
      level: 20,
      class_id: 5,
      description: 'Encarnas un poder primigenio. Tus puntuaciones de Fuerza y Constitución aumentan en 4, hasta un máximo de 25. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 27,
      name: 'Lanzamiento de conjuros (Bardo)',
      level: 1,
      class_id: 12,
      description: 'Has aprendido a lanzar conjuros mediante tus artes bárdicas. La información presentada a continuación detalla cómo usar esas reglas con los conjuros de bardo, que encontrarás más adelante en la lista de conjuros de bardo de la descripción de la clase.\n- Trucos: Conoces dos trucos de tu elección escogidos de entre los de la lista de conjuros de bardo. Se recomiendan burla dañina y luces danzantes. Cada vez que subas un nivel de bardo, puedes sustituir uno de tus trucos por otro truco de tu elección de la lista de conjuros de bardo. Cuando alcances los niveles 4 y 10 de bardo, aprenderás otro truco de tu elección de la lista de conjuros de bardo.\n- Espacios de conjuro: Recuperas todos los espacios utilizados tras finalizar un descanso largo. Conjuros preparados de nivel 1 y superiores. Preparas una serie de conjuros de nivel 1 y superiores, que son los que podrás lanzar con este rasgo. Para empezar, elige cuatro conjuros de nivel 1 de la lista de conjuros de bardo. Se recomiendan Hechizar Persona, Palabra de Curación, Rociada de Color y Susurros Discordantes.\nEl número de conjuros de tu lista aumenta conforme subes de nivel de bardo. Cuando ese número aumente, elige conjuros adicionales de la lista de conjuros de bardo hasta que el número de conjuros de tu lista coincida con el número de conjuros que puedes tener. Estos conjuros deben ser de un nivel para el que tengas espacios de conjuro. Por ejemplo, si eres un bardo de nivel 3, podrías preparar cualquier combinación de seis conjuros de nivel 1 o 2. Si otro rasgo de bardo te proporciona conjuros que siempre tienes preparados, esos conjuros no cuentan para el total que puedes preparar con este rasgo, pero sí que cuentan como conjuros de bardo para ti.\n- Cambiar los conjuros preparados: Cada vez que subas un nivel de bardo, puedes sustituir un conjuro de tu lista por otro conjuro de bardo para el que tengas espacios de conjuro.\n- Aptitud mágica: El Carisma es tu aptitud mágica en lo que respecta a tus conjuros de bardo.\n- Canalizador mágico: Puedes utilizar un instrumento musical como canalizador mágico para tus conjuros de bardo.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 28,
      name: 'Inspiración Bárdica',
      level: 1,
      class_id: 12,
      description: 'Puedes recurrir a tus palabras, música o danza para inspirar de forma sobrenatural a los demás. Esta inspiración se representa con tu dado de Inspiración Bárdica, que es un d6.\n- Utilizar la Inspiración bárdica: Como acción adicional, puedes inspirar a otra criatura que esté a 60 pies o menos de ti y que te pueda ver u oír. Esa criatura obtiene uno de tus dados de Inspiración bárdica. Cada criatura no puede tener más de un dado de Inspiración bárdica. Una sola vez durante la siguiente hora, cuando la criatura falle una prueba con d20, podrá tirar el dado de Inspiración Bárdica y sumar el resultado al 420, lo que podría hacerle superar la prueba. Un dado de Inspiración bárdica se gasta al tirarlo.\n- Número de usos: Puedes conceder un dado de Inspiración bárdica una cantidad de veces igual a tu modificador por Carisma (mínimo una vez) y recuperas todos sus usos tras finalizar un descanso largo.\n- A niveles superiores: Tu dado de Inspiración bárdica cambia cuando alcanzas ciertos niveles de bardo, como se muestra en la columna “Dado bárdico” de la tabla “Rasgos de bardo”. El dado se convierte en un d8 en el nivel 5, un d10 en el nivel 10 y un d12 en el nivel 15. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 29,
      name: 'Aprendiz de Mucho',
      level: 2,
      class_id: 12,
      description: 'Puedes sumar la mitad de tu bonificador por competencia (redondeando hacia abajo) a cualquier prueba de característica que hagas que utilice una habilidad en la que no seas competente y que no use de otro modo tu bonificador por competencia. Por ejemplo, si haces una prueba de Fuerza (Atletismo) y no eres competente en Atletismo, puedes sumar la mitad de tu bonificador por competencia a la prueba. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 30,
      name: 'Pericia',
      level: 2,
      class_id: 12,
      description: 'Ganas pericia en dos de tus competencias en habilidades de tu elección. Se recomiendan Interpretación y Persuasión si eres competente en ellas. En el nivel 9 de bardo ganas pericia en otras dos competencias de tu elección. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 31,
      name: 'Subclase de Bardo',
      level: 3,
      class_id: 12,
      description: 'Consigues una subclase de bardo de tu elección. Las subclases del colegio de la danza, el colegio del conocimiento, el colegio del glamour y el colegio del valor se detallan tras la descripción de esta clase. Una subclase es una especialización que te proporciona rasgos cuando alcanzas ciertos niveles de bardo. De aquí en adelante, obtienes todos los rasgos de tu subclase que sean de tu nivel de bardo e inferiores. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 32,
      name: 'Pericia',
      level: 3,
      class_id: 12,
      description: 'Escoge dos habilidades en las que seas competente. Tu bonificador por competencia se duplica para cualquier prueba de característica que hagas utilizando cualquiera de las dos habilidades elegidas.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 33,
      name: 'Mejora de Característica',
      level: 4,
      class_id: 12,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 34,
      name: 'Fuente de Inspiración',
      level: 5,
      class_id: 12,
      description: 'Ahora recuperas todos los usos de Inspiración Bárdica tras finalizar un descanso corto o largo. Además, puedes gastar un espacio de conjuro (no requiere acción) para recuperar un uso gastado de Inspiración bárdica. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 35,
      name: 'Rasgo de Subclase',
      level: 6,
      class_id: 12,
      description: 'Elige un rasgo del colegio de Bardo que escogiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 36,
      name: 'Contraencantamiento',
      level: 7,
      class_id: 12,
      description: 'Puedes emplear notas musicales o palabras de poder para interrumpir los efectos que afectan a la mente. Si tú o una criatura que esté a 30 pies o menos de ti falláis una tirada de salvación contra un efecto que aplique el estado de asustado o hechizado, puedes llevar a cabo una reacción para que se repita la tirada de salvación, y la nueva tirada tendrá ventaja. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 37,
      name: 'Mejora de Característica',
      level: 8,
      class_id: 12,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 38,
      name: 'Pericia',
      level: 9,
      class_id: 12,
      description: 'Escoge dos habilidades en las que seas competente. Tu bonificador por competencia se duplica para cualquier prueba de característica que hagas utilizando cualquiera de las dos habilidades elegidas.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 39,
      name: 'Secretos Mágicos',
      level: 10,
      class_id: 12,
      description: 'Has aprendido secretos de diversas tradiciones mágicas. Cada vez que alcances un nivel de bardo (incluido este) y aumente la cantidad de conjuros preparados de la tabla “Rasgos de bardo”, podrás elegir cualquiera de los nuevos conjuros preparados de entre las listas de conjuros de bardo, clérigo, druida y mago. Los conjuros elegidos contarán como conjuros de bardo para ti (consulta las listas de conjuros en la sección de la clase correspondiente). Además, cuando sustituyas un conjuro preparado para esta clase, podrás hacerlo con un conjuro de esas listas.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 40,
      name: 'Mejora de Característica',
      level: 12,
      class_id: 12,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 41,
      name: 'Rasgo de Subclase',
      level: 14,
      class_id: 12,
      description: 'Elige un rasgo del colegio de Bardo que escogiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 42,
      name: 'Mejora de Característica',
      level: 16,
      class_id: 12,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 43,
      name: 'Inspiración Superior',
      level: 18,
      class_id: 12,
      description: 'Si cuando tiras iniciativa no te quedan usos de Inspiración Bárdica, recuperas uno de ellos.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 44,
      name: 'Don Épico',
      level: 19,
      class_id: 12,
      description: 'Obtienes una dote de don épico u otra dote de tu elección para la que cumplas las condiciones. Se recomienda Don del recuerdo de conjuros. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 45,
      name: 'Palabras de Creación',
      level: 20,
      class_id: 12,
      description: 'Ahora dominas dos de las palabras de creación: las palabras de la vida y de la muerte. Por tanto, siempre tienes preparados los conjuros palabra de poder: sanar y palabra de poder: matar. Cuando lances uno de estos conjuros, podrás hacer objetivo a una segunda criatura si esta se encuentra a 10 pies o menos del primer objetivo. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 46,
      name: 'Lanzamiento de conjuros (Clérigo)',
      level: 1,
      class_id: 4,
      description: 'Has aprendido a lanzar conjuros gracias a la oración y la meditación.  La información presentada a continuación detalla cómo usar esas reglas con los conjuros de clérigo, que encontrarás más adelante en la lista de conjuros de clérigo de la descripción de la clase.\n- Trucos: Conoces tres trucos de tu elección escogidos de entre los de la lista de conjuros de clérigo. Se recomiendan guía, llama sagrada y taumaturgia. Cada vez que subas un nivel de clérigo, puedes sustituir uno de tus trucos por otro truco de tu elección de la lista de conjuros de clérigo. Cuando alcances los niveles 4 y 10 de clérigo, aprenderás otro truco de tu elección de la lista de conjuros de clérigo, como se muestra en la columna “Trucos” de la tabla “Rasgos de clérigo”.\n- Espacios de conjuro: La tabla “Rasgos de clérigo” muestra cuántos espacios de conjuro tienes para lanzar tus conjuros de nivel 1 y superiores. Recuperas todos los espacios utilizados tras finalizar un descanso largo. Conjuros preparados de nivel 1 y superiores. Preparas una serie de conjuros de nivel 1 y superiores, que son los que podrás lanzar con este rasgo. Para empezar, elige cuatro conjuros de nivel 1 de la lista de conjuros de clérigo. Se recomiendan bendición, curar heridas, escudo de fe y saeta guía. El número de conjuros de tu lista aumenta conforme subes de nivel de clérigo, como se muestra en la columna “Conjuros preparados” de la tabla “Rasgos de clérigo”. Cuando ese número aumente, elige conjuros adicionales de la lista de conjuros de clérigo hasta que el número de conjuros de tu lista coincida con el número de la tabla. Estos conjuros deben ser de un nivel para el que tengas espacios de conjuro. Por ejemplo, si eres una clériga de nivel 3, podrías preparar cualquier combinación de seis conjuros de nivel 1o 2. Si otro rasgo de clérigo te proporciona conjuros que siempre tienes preparados, esos conjuros no cuentan para el total que puedes preparar con este rasgo, pero sí que cuentan como conjuros de clérigo para ti.\n- Cambiar los conjuros preparados. Tras finalizar un descanso largo, puedes cambiar los conjuros que tienes preparados sustituyendo los que quieras por otros conjuros de clérigo para los que tengas espacios de conjuro.\n- Aptitud mágica: La Sabiduría es tu aptitud mágica en lo que respecta a tus conjuros de clérigo.\n- Canalizador mágico: Puedes utilizar un símbolo sagrado como canalizador mágico para tus conjuros de clérigo. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 47,
      name: 'Orden divina',
      level: 1,
      class_id: 4,
      description: 'Te has consagrado a una de las siguientes funciones sacras, a tu elección.\n- Protector: Te has entrenado para el combate y ganas competencia con armas marciales y entrenamiento con armaduras pesadas.\n- Taumaturgo: Conoces un truco adicional de la lista de conjuros de clérigo. Además, tu conexión mística con lo divino te proporciona un bonificador a tus pruebas de Inteligencia (Conocimiento arcano y Religión). El bonificador es igual a tu modificador por Sabiduría (mínimo de +1). ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 48,
      name: 'Canalizar divinidad',
      level: 2,
      class_id: 4,
      description: 'Puedes canalizar energía divina directamente de los Planos Exteriores para alimentar varios efectos mágicos. Empiezas con dos de estos efectos: Chispa divina y Expulsar muertos vivientes, que se describen a continuación. Cada vez que utilices el rasgo Canalizar divinidad de esta clase, elige qué efecto de esta clase creas. En niveles superiores de clérigo recibes opciones adicionales. Puedes usar el rasgo Canalizar divinidad dos veces. Recuperas uno de los usos gastados tras finalizar un descanso corto y todos tras finalizar un descanso largo. Obtienes usos adicionales cuando alcanzas ciertos niveles de clérigo, como se muestra en la columna “Canalizar divinidad” de la tabla “Rasgos de clérigo”. Si un efecto de Canalizar divinidad requiere una tirada de salvación, la CD será igual a la CD de salvación de conjuros del rasgo Lanzamiento de conjuros de esta clase.\n- Chispa divina: Como acción de magia, diriges tu símbolo sagrado hacia otra criatura que puedas ver a 9 m o menos de ti y concentras energía divina en ella. Tira 1d8 y suma tu modificador por Sabiduría. Puedes hacer que la criatura recupere una cantidad de puntos de golpe igual al resultado u obligar a la criatura a hacer una tirada de salvación de Constitución. Si la falla, sufrirá una cantidad de daño necrótico o radiante (a tu elección) igual a ese resultado. Si la supera, sufrirá la mitad de daño (redondeando hacia abajo). Tira 1d8 adicional cuando alcances los niveles 7 (2d8), 13 (3d8) y 18 (4d8) de clérigo.\n- Expulsar muertos vivientes: Como acción de magia, muestras tu símbolo sagrado y rechazas a los muertos vivientes. Cada muerto viviente de tu elección a 15 pies o menos de ti deberá hacer una tirada de salvación de\nSabiduría. Si la falla, tendrá los estados de asustado e incapacitado durante 1 minuto. Durante ese tiempo, tratará de alejarse de ti todo lo que pueda en sus turnos. Este efecto termina antes de tiempo si la criatura sufre daño, si tienes el estado de incapacitado o si mueres.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 49,
      name: 'Subclase de Clérigo',
      level: 3,
      class_id: 4,
      description: 'Consigues una subclase de clérigo de tu elección. Las subclases del dominio de la guerra, el dominio de la luz, el dominio de la vida y el dominio del engaño se detallan tras la descripción de esta clase. Una subclase es una especialización que te proporciona rasgos cuando alcanzas ciertos niveles de clérigo. De aquí en adelante, obtienes todos los rasgos de tu subclase que sean de tu nivel de clérigo e inferiores. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 50,
      name: 'Mejora de Característica',
      level: 4,
      class_id: 4,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 51,
      name: 'Abrasar Muertos Vivientes',
      level: 5,
      class_id: 4,
      description: 'Cuando utilices Expulsar muertos vivientes, puedes tirar una cantidad de d8 igual a tu modificador por Sabiduría (mínimo 1d8) y sumar los resultados. Todos los muertos vivientes que fallen su tirada de salvación contra ese uso de Expulsar muertos vivientes sufrirán una cantidad de daño radiante igual al resultado total de las tiradas. Este daño no pone fin al efecto de expulsión.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 52,
      name: 'Rasgo de Subclase',
      level: 6,
      class_id: 4,
      description: 'Elige un rasgo del dominio divino de Clérigo que escogiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 53,
      name: 'Golpes Benditos',
      level: 7,
      class_id: 4,
      description: 'Te imbuyes de poder divino en la batalla. Obtienes una de las siguientes opciones, a tu elección (si obtienes cualquiera de ellas por una subclase de clérigo de un libro antiguo, utiliza solo la opción que escojas para este rasgo).\n- Golpe divino: Una vez en cada uno de tus turnos, cuando aciertes a una criatura con una tirada de ataque usando un arma, podrás hacer que el objetivo sufra 1d8 de daño necrótico o radiante adicional (a tu elección).\n- Lanzamiento potente: Sumas tu modificador por Sabiduría al daño que causas con cualquier truco de clérigo.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 54,
      name: 'Mejora de Característica',
      level: 8,
      class_id: 4,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 55,
      name: 'Intercesión Divina',
      level: 10,
      class_id: 4,
      description: 'Puedes recurrir a tu deidad o panteón para que intervenga en tu nombre. Como acción de magia, elige cualquier conjuro de clérigo de nivel 5 o inferior que no requiera una reacción para lanzarlo. Como parte de la misma acción, lanzas ese conjuro sin gastar un espacio de conjuro o sin necesidad de componentes materiales. No podrás volver a utilizar este rasgo hasta que finalices un descanso largo. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 56,
      name: 'Mejora de Característica',
      level: 12,
      class_id: 4,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 57,
      name: 'Golpes Benditos Mejorados',
      level: 14,
      class_id: 4,
      description: 'La opción elegida para Golpes benditos se vuelve más poderosa.\n- Golpe divino: El daño adicional de tu Golpe divino aumenta a 2d8.\n- Lanzamiento potente: Cuando lances un truco de clérigo y causes daño a una criatura con él, podrás transmitir vitalidad a tio a otra criatura que esté a 18 m o menos de ti; se concederá una cantidad de puntos de golpe temporales igual al doble de tu modificador por Sabiduría. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 58,
      name: 'Mejora de Característica',
      level: 16,
      class_id: 4,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 59,
      name: 'Rasgo de Subclase',
      level: 17,
      class_id: 4,
      description: 'Elige un rasgo del dominio divino de Clérigo que escogiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 60,
      name: 'Don Épico',
      level: 19,
      class_id: 4,
      description: 'Obtienes una dote de don épico u otra dote de tu elección para la que cumplas las condiciones. Se recomienda Don del destino. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 61,
      name: 'Intercesión Divina Mayor',
      level: 20,
      class_id: 4,
      description: 'Puedes solicitar una intercesión divina todavía más poderosa. Cuando uses tu rasgo Intercesión divina, puedes elegir deseo al seleccionar un conjuro. Si lo haces, no podrás volver a usar Intercesión divina hasta que finalices 2d4 descansos largos. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 62,
      name: 'Lanzamiento de Conjuros (Druida)',
      level: 1,
      class_id: 10,
      description: 'Has aprendido a lanzar conjuros estudiando las fuerzas místicas de la naturaleza. La información presentada a continuación detalla cómo usar esas reglas con los conjuros de druida, que encontrarás más adelante en la lista de conjuros de druida de la descripción de la clase.\n- Trucos. Conoces dos trucos de tu elección escogidos de entre los de la lista de conjuros de druida. Se recomiendan crear llama y saber druídico. Cada vez que subas un nivel de druida, puedes sustituir uno de tus trucos por otro truco de tu elección de la lista de conjuros de druida. Cuando alcances los niveles 4 y 10 de druida, aprenderás otro truco de tu elección de la lista de conjuros de druida, como se muestra en la columna “Trucos” de la tabla “Rasgos de druida”.\n- Espacios de conjuro: La tabla “Rasgos de druida” muestra cuántos espacios de conjuro tienes para lanzar tus conjuros de nivel 1 y superiores. Recuperas todos los espacios utilizados tras finalizar un descanso largo. Conjuros preparados de nivel 1 y superiores. Preparas una serie de conjuros de nivel 1 y superiores, que son los que podrás lanzar con este rasgo. Para empezar, elige cuatro conjuros de nivel 1 de la lista de conjuros de druida. Se recomiendan curar heridas, encantar animal, fuego feérico y ola atronadora. El número de conjuros de tu lista aumenta conforme subes de nivel de druida, como se muestra en la columna “Conjuros preparados” de la tabla “Rasgos de druida”. Cuando ese número aumente, elige conjuros adicionales de la lista de conjuros de druida hasta que el número de conjuros de tu lista coincida con el número de la tabla. Estos conjuros deben ser de un nivel para el que tengas espacios de conjuro. Por ejemplo, si eres un druida de nivel 3, podrías preparar cualquier combinación de seis conjuros de nivel 1 o 2. Si otro rasgo de druida te proporciona conjuros que siempre tienes preparados, esos conjuros no cuentan para el total que puedes preparar con este rasgo, pero sí que cuentan como conjuros de druida para ti.\n- Cambiar los conjuros preparados: Tras finalizar un descanso largo, puedes cambiar los conjuros que tienes preparados sustituyendo los que quieras por otros conjuros de druida para los que tengas espacios de conjuro.\n- Aptitud mágica: La Sabiduría es tu aptitud mágica en lo que respecta a tus conjuros de druida.\n- Canalizador mágico. Puedes utilizar un canalizador druídico como canalizador mágico para tus conjuros de druida. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 63,
      name: 'Druídico',
      level: 1,
      class_id: 10,
      description: 'Sabes druídico, el idioma secreto de los druidas. Mientras aprendías esta lengua antigua, accediste a la magia para comunicarte con los animales, por lo que siempre tienes el conjuro hablar con los animales preparado. Puedes utilizar el druídico para dejar mensajes ocultos. Tanto tú como cualquiera que conozca este idioma os percataréis de inmediato de la presencia de estos mensajes. Los demás deberán superar una prueba de Inteligencia (Investigación) con CD 15 para detectarlos, pero no podrán descifrarlos sin recurrir a la magia. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 64,
      name: 'Orden Primigenia',
      level: 1,
      class_id: 10,
      description: 'Te has consagrado a una de las siguientes funciones sacras, a tu elección.\n- Guardián: Te has entrenado para el combate y ganas competencia con armas marciales y entrenamiento con armaduras medias.\n- Naturalista: Conoces un truco adicional de la lista de conjuros de druida. Además, tu conexión mística con la naturaleza te proporciona un bonificador a tus pruebas de Inteligencia (Conocimiento arcano y Naturaleza). El bonificador es igual a tu modificador por Sabiduría (mínimo de +1). ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 65,
      name: 'Forma Salvaje',
      level: 2,
      class_id: 10,
      description: 'El poder de la naturaleza te permite transformarte en un animal. Como acción adicional, adoptas la forma de una bestia que hayas aprendido para este rasgo (consulta “Formas conocidas” a continuación). Conservas esa forma durante una cantidad de horas igual a la mitad de tu nivel de druida o hasta que vuelvas a utilizar Forma salvaje, tengas el estado de incapacitado o mueras. También puedes abandonar la forma antes de tiempo como acción adicional.\n- Número de usos: Puedes utilizar el rasgo Forma salvaje dos veces. Recuperas uno de los usos gastados tras finalizar un descanso corto y todos tras finalizar un descanso largo. Obtienes usos adicionales cuando alcanzas ciertos niveles de druida, como se muestra en la columna “Forma salvaje” de la tabla “Rasgos de druida”.\n- Formas conocidas: Conoces cuatro formas de bestia para este rasgo, escogidas de entre los perfiles de criaturas de tipo “bestia” que tengan un valor de desafío máximo de 1/4 y que no tengan una velocidad volando (consulta las opciones de perfiles en el apéndice B). Se recomiendan las siguientes bestias: araña, caballo de monta, lobo y rata. Tras finalizar un descanso largo, podrás reemplazar una de tus formas conocidas por otra que cumpla los requisitos. Cuando alcances determinados niveles de druida, la cantidad de formas conocidas y el valor de desafío máximo de estas formas aumentan, como se muestra en la tabla “Formas de bestia”. Además, a partir del nivel 8 podrás adoptar una forma que tenga una velocidad volando. Al escoger las formas conocidas, puedes consultar el Manual de monstruos u otros libros para buscar más bestias si tu Dungeon Master te lo permite.\n- Reglas con forma de bestia: Mientras tengas la forma de una bestia, conservas tu personalidad, recuerdos y capacidad de hablar, y se aplican las siguientes normas:\n* Puntos de golpe temporales: Cuando te transformas usando Forma salvaje, obtienes una cantidad de puntos de golpe temporales igual a tu nivel de druida.\n* Perfil: Tu perfil se sustituye por el perfil de la bestia, pero conservas tu tipo de criatura, puntos de golpe, dados de puntos de golpe, puntuaciones de Inteligencia, Sabiduría y Carisma, rasgos de clase, idiomas y dotes. También\nconservas tus competencias en habilidades y tiradas de salvación y utilizas tu bonificador por competencia con ellas, además de obtener las competencias de la criatura. Si el modificador de una habilidad o tirada de salvación\ndel perfil de la bestia es superior al tuyo, usa el de la bestia.\n* Sin lanzamiento de conjuros. No puedes lanzar conjuros, pero cambiar de forma no te hace perder la concentración ni interfiere de ningún otro modo con un conjuro que ya hayas lanzado.\n* Objetos: Tu capacidad de manejar objetos depende de las extremidades de la bestia cuya forma hayas adoptado. Además, eliges si tu equipo cae en tu espacio, se funde con la nueva forma o lo sigues llevando puesto. El equipo que lleves puesto funcionará con normalidad, pero tu DM determinará si es factible que la nueva forma pueda llevar un objeto de equipo concreto, en función del tamaño y la forma de la criatura. Tu equipo no cambia\nde forma o tamaño para adaptarse a la nueva forma y cualquier objeto que esta no pueda llevar puesto deberá caer al suelo o fundirse con la nueva forma. El equipo que se funde con la forma no tendrá efecto mientras conserves esa forma. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 66,
      name: 'Compañero Salvaje',
      level: 2,
      class_id: 10,
      description: 'Puedes invocar un espíritu de la naturaleza que adopta la forma de un animal para ayudarte. Como acción de magia, puedes gastar un espacio de conjuro o un uso de tu rasgo Forma salvaje para lanzar el conjuro encontrar familiar sin necesidad de componentes materiales. Cuando lances el conjuro de esta forma, el familiar será un feérico y desaparecerá tras finalizar un descanso largo. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 67,
      name: 'Subclase de Druida',
      level: 3,
      class_id: 10,
      description: 'Consigues una subclase de druida de tu elección. Las subclases del círculo de la luna, el círculo de la tierra, el círculo de las estrellas y el círculo del mar se detallan tras la descripción de esta clase. Una subclase es una especialización que te proporciona rasgos cuando alcanzas ciertos niveles de druida. De aquí en adelante, obtienes todos los rasgos de tu subclase que sean de tu nivel de druida e inferiores. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 68,
      name: 'Mejora de Característica',
      level: 4,
      class_id: 10,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 69,
      name: 'Resurgimiento Salvaje',
      level: 5,
      class_id: 10,
      description: 'Una vez en cada uno de tus turnos, si no te quedan usos de Forma salvaje, puedes obtener un uso gastando un espacio de conjuro (no requiere acción). Además, puedes gastar un uso de tu rasgo Forma salvaje (no requiere acción) para obtener un espacio de conjuro de nivel 1, pero no podrás volver a hacerlo hasta que finalices un descanso largo. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 70,
      name: 'Rasgo de Subclase',
      level: 6,
      class_id: 10,
      description: 'Elige un rasgo del círculo druídico que escogiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 71,
      name: 'Furia elemental',
      level: 7,
      class_id: 10,
      description: 'El poder de los elementos fluye por ti. Obtienes una de las siguientes opciones, a tu elección.\n- Golpe primordial: Una vez en cada uno de tus turnos, cuando aciertes a una criatura con una tirada de ataque usando un arma o un ataque de una bestia en Forma Salvaje, podrás hacer que el objetivo sufra 1d8 de daño de\nfrío, fuego, relámpago o trueno adicional (elígelo cuando aciertes).\n- Lanzamiento potente: Sumas tu modificador por Sabiduría al daño que causas con cualquier truco de druida. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 72,
      name: 'Mejora de Característica',
      level: 8,
      class_id: 10,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 73,
      name: 'Rasgo de Subclase',
      level: 10,
      class_id: 10,
      description: 'Elige un rasgo del círculo druídico que escogiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 74,
      name: 'Mejora de Característica',
      level: 12,
      class_id: 10,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 75,
      name: 'Rasgo de Subclase',
      level: 14,
      class_id: 10,
      description: 'Elige un rasgo del círculo druídico que escogiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 76,
      name: 'Furia Elemental Mejorada',
      level: 15,
      class_id: 10,
      description: 'La opción elegida para Furia elemental se vuelve más poderosa, como se detalla a continuación.\n- Golpe primordial: El daño adicional de tu Golpe primordial aumenta a 2d8.\n- Lanzamiento potente: Cuando lances un truco de druida con un alcance de 10 pies o más, el alcance del conjuro aumentará en 300 pies. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 77,
      name: 'Mejora de Característica',
      level: 16,
      class_id: 10,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 78,
      name: 'Conjurar como Bestia',
      level: 18,
      class_id: 10,
      description: 'Mientras utilices Forma salvaje, podrás lanzar conjuros en forma de bestia, salvo cualquier conjuro que tenga un componente material que tenga un coste especificado O que se consuma como parte del conjuro. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 79,
      name: 'Don Épico',
      level: 19,
      class_id: 10,
      description: 'Obtienes una dote de don épico u otra dote de tu elección para la que cumplas las condiciones. Se recomienda Don del viaje dimensional.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 80,
      name: 'Archidruida',
      level: 20,
      class_id: 10,
      description: 'La vitalidad de la naturaleza florece en ti de manera constante, lo que te otorga los siguientes beneficios.\n- Forma salvaje perenne: Cuando tires iniciativa y no te queden usos de Forma salvaje, recuperas uno de los usos gastados.\n- Mago de la naturaleza: Puedes convertir los usos de Forma salvaje en un espacio de conjuro (no requiere acción). Elige una cantidad de usos no gastados de Forma salvaje para convertirlos en un único espacio de conjuro. Cada uso aporta 2 niveles de conjuro. Por ejemplo, si conviertes dos usos de Forma salvaje, produces un espacio de conjuro de nivel 4. Cuando uses este beneficio, no podrás volver a hacerlo hasta que finalices un descanso largo.\n- Longevidad: La magia primigenia que dominas ralentiza tu envejecimiento. Por cada diez años que pasen, tu cuerpo envejece solo uno. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 81,
      name: 'Lanzamiento de Conjuros (Explorador)',
      level: 1,
      class_id: 6,
      description: 'Has aprendido a canalizar la esencia mágica de la naturaleza para lanzar conjuros. La información presentada a continuación detalla cómo usar esas reglas con los conjuros de explorador, que encontrarás más adelante en la lista de conjuros de explorador de la descripción de la clase.\n- Espacios de conjuro: La tabla “Rasgos de explorador” muestra cuántos espacios de conjuro tienes para lanzar tus conjuros de nivel 1 y superiores. Recuperas todos los espacios utilizados tras finalizar un descanso largo.\n- Conjuros preparados de nivel 1 y superiores: Preparas una serie de conjuros de nivel 1 y superiores, que son los que podrás lanzar con este rasgo. Para empezar, elige dos conjuros de explorador de nivel 1. Se recomiendan curar heridas y golpe apresador.\nEl número de conjuros de tu lista aumenta conforme subes de nivel de explorador, como se muestra en la columna “Conjuros preparados” de la tabla “Rasgos de explorador”. Cuando ese número aumente, elige conjuros de explorador adicionales hasta que el número de conjuros de tu lista coincida con el número de la tabla “Rasgos de explorador”. Estos conjuros deben ser de un nivel para el que tengas espacios de conjuro. Por ejemplo, si eres un explorador de nivel 5, podrías preparar cualquier combinación de seis conjuros de explorador de nivel 1 o 2. Si otro rasgo de explorador te proporciona conjuros que siempre tienes preparados, esos conjuros no cuentan para el total que puedes preparar con este rasgo, pero sí que cuentan como conjuros de explorador para ti.\n- Cambiar los conjuros preparados: Tras finalizar un descanso largo, puedes sustituir un conjuro de tu lista por otro conjuro de explorador para el que tengas espacios de conjuro.\n- Aptitud mágica: La Sabiduría es tu aptitud mágica en lo que respecta a tus conjuros de explorador.\n- Canalizador mágico: Puedes utilizar un canalizador druídico como canalizador mágico para tus conjuros de explorador. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 82,
      name: 'Enemigo Predilecto',
      level: 1,
      class_id: 6,
      description: 'Siempre tienes el conjuro marca del cazador preparado. Puedes lanzarlo dos veces sin gastar un espacio de conjuro y recuperas todos los usos de esta capacidad tras finalizar un descanso largo. La cantidad de veces que puedes lanzar el conjuro sin gastar un espacio aumenta según alcanzas ciertos niveles de explorador, como se muestra en la columna “Enemigo predilecto” de la tabla “Rasgos de explorador”.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 83,
      name: 'Maestría con Armas',
      level: 1,
      class_id: 6,
      description: 'Tu entrenamiento con armas te permite utilizar las propiedades de maestría con dos tipos de armas de tu elección con las que tengas competencia, como arcos largos y espadas cortas. Tras finalizar un descanso largo, puedes cambiar los tipos de armas elegidas. Por ejemplo, podrías pasar a utilizar las propiedades de maestría con cimitarras y espadas largas. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 84,
      name: 'Estilo de combate',
      level: 2,
      class_id: 6,
      description: 'Obtienes una dote de estilo de combate de tu elección. En lugar de elegir una de esas dotes, puedes elegir la opción presentada a continuación.\n- Guerrero druídico. Aprendes dos trucos de druida de tu elección (consulta la sección de la clase druida para ver la lista de conjuros de druida). Se recomiendan guía y voluta estelar, Los trucos elegidos cuentan como conjuros de explorador para ti y la Sabiduría es tu aptitud mágica para lanzarlos. Cada vez que subas un nivel de explorador, puedes sustituir uno de estos trucos por otro truco de druida. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 85,
      name: 'Explorador hábil',
      level: 2,
      class_id: 6,
      description: 'Tus viajes te proporcionan los siguientes beneficios.\n- Idiomas: Conoces dos idiomas de tu elección.\n- Pericia: Escoge una de tus competencias en habilidades con las que no tengas pericia. Ganas pericia en esa habilidad. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 86,
      name: 'Subclase de Explorador',
      level: 3,
      class_id: 6,
      description: 'Consigues una subclase de explorador de tu elección. Las subclases de acechador en la penumbra, cazador, errante feérico y señor de las bestias se detallan tras la descripción de esta clase. Una subclase es una especialización que te proporciona rasgos cuando alcanzas ciertos niveles de explorador. De aquí en adelante, obtienes todos los rasgos de tu subclase que sean de tu nivel de explorador e inferiores. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 87,
      name: 'Mejora de Característica',
      level: 4,
      class_id: 6,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 88,
      name: 'Ataque Adicional',
      level: 5,
      class_id: 6,
      description: 'Cuando lleves a cabo la acción de atacar en tu turno, podrás hacer dos ataques en lugar de uno. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 89,
      name: 'Errante',
      level: 6,
      class_id: 6,
      description: 'Tu velocidad aumenta en 10 pies si no llevas armadura pesada. También tienes una velocidad nadando y una velocidad trepando iguales a tu velocidad. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 90,
      name: 'Rasgo de Subclase',
      level: 7,
      class_id: 6,
      description: 'Obtienes un rasgo del arquetipo de explorador que escogiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 91,
      name: 'Mejora de Característica',
      level: 8,
      class_id: 6,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 92,
      name: 'Pericia',
      level: 9,
      class_id: 6,
      description: 'Escoge dos de tus competencias en habilidades con las que no tengas pericia. Ganas pericia en esas habilidades. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 93,
      name: 'Infatigable',
      level: 10,
      class_id: 6,
      description: 'Las fuerzas primigenias te ayudan ahora en tus viajes, lo que te otorga los siguientes beneficios.\n- Puntos de golpe temporales. Como acción de magia, puedes concederte una cantidad de puntos de golpe temporales igual a 1d8 más tu modificador por Sabiduría (mínimo de 1). Puedes usar esta acción una cantidad de\nveces igual a tu modificador por Sabiduría (mínimo una vez) y recuperas todos los usos tras finalizar un descanso largo.\n- Disminuir cansancio. Tras finalizar un descanso corto,tu nivel de cansancio, si lo tienes, se reduce en 1. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 94,
      name: 'Rasgo de Subclase',
      level: 11,
      class_id: 6,
      description: 'Obtienes un rasgo del arquetipo de explorador que escogiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 95,
      name: 'Mejora de Característica',
      level: 12,
      class_id: 6,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 96,
      name: 'Cazador Persistente',
      level: 13,
      class_id: 6,
      description: 'Sufrir daño no rompe tu concentración de marca del cazador. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 97,
      name: 'Velo de la Naturaleza',
      level: 14,
      class_id: 6,
      description: 'Invocas espíritus de la naturaleza para esconderte mágicamente. Como acción adicional, puedes otorgarte el estado de invisible hasta el final de tu siguiente turno. Puedes usar este rasgo una cantidad de veces igual a tu modificador por Sabiduría (mínimo una vez) y recuperas todos los usos tras finalizar un descanso largo.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 98,
      name: 'Rasgo de Subclase',
      level: 15,
      class_id: 6,
      description: 'Obtienes un rasgo del arquetipo de explorador que escogiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 99,
      name: 'Mejora de Característica',
      level: 16,
      class_id: 6,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 100,
      name: 'Cazador Preciso',
      level: 17,
      class_id: 6,
      description: 'Tienes ventaja en las tiradas de ataque contra la criatura que tenga tu marca del cazador sobre ella. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 101,
      name: 'Sentidos Salvajes',
      level: 18,
      class_id: 6,
      description: 'Tu conexión con las fuerzas de la naturaleza te otorga visión ciega hasta 30 pies. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 102,
      name: 'Don Épico',
      level: 19,
      class_id: 6,
      description: 'Obtienes una dote de don épico u otra dote de tu elección para la que cumplas las condiciones. Se recomienda Don del viaje dimensional. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 103,
      name: 'Azote de Enemigos',
      level: 20,
      class_id: 6,
      description: 'El dado de daño de tu marca del cazador es un d10 en lugar de un d6. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 104,
      name: 'Estilo de combate',
      level: 1,
      class_id: 1,
      description: 'Has pulido tu destreza marcial y obtienes una dote de estilo de combate de tu elección. Se recomienda Defensa. Cada vez que subas un nivel de guerrero, puedes sustituir la dote que hayas elegido por otra dote de estilo de combate. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 105,
      name: 'Tomar aliento',
      level: 1,
      class_id: 1,
      description: 'Posees una pequeña reserva de resistencia física y mental a la que puedes recurrir. Como acción adicional, puedes usarla para recuperar una cantidad de puntos de golpe igual a 1d10 más tu nivel de guerrero. Puedes usar este rasgo dos veces. Recuperas uno de los usos gastados tras finalizar un descanso corto y todos tras finalizar un descanso largo. Obtienes usos adicionales cuando alcanzas ciertos niveles de guerrero, como se muestra en la columna “Tomar aliento” de la tabla “Rasgos de guerrero”. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 106,
      name: 'Maestría con Armas',
      level: 1,
      class_id: 1,
      description: 'Tu entrenamiento con armas te permite utilizar las propiedades de maestría con tres tipos de armas sencillas o marciales de tu elección. Tras finalizar un descanso largo, puedes llevar a cabo ejercicios con armas y cambiar una de dichas elecciones. Cuando alcances ciertos niveles de guerrero, adquirirás la capacidad de usar las propiedades de maestría con más tipos de armas, como se muestra en la columna “Maestría con armas” de la tabla “Rasgos de guerrero”. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 107,
      name: 'Acción súbita',
      level: 2,
      class_id: 1,
      description: 'Puedes superar tus límites normales durante un instante. En tu turno, puedes llevar a cabo una acción más, salvo la acción de magia. Cuando uses este rasgo, no podrás volver a hacerlo hasta que finalices un descanso corto o largo. A partir del nivel 17, podrás usarlo dos veces antes de descansar, pero solo una vez por turno. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 108,
      name: 'Mente táctica',
      level: 2,
      class_id: 1,
      description: 'Tienes facilidad para la estrategia dentro y fuera del campo de batalla. Cuando falles una prueba de característica, podrás gastar un uso de tu rasgo Tomar aliento para esforzarte por superarla. En vez de recuperar puntos de golpe, tiras 1d10 y sumas el resultado a la prueba de característica, lo que podría convertir el fallo en un éxito. Si sigues sin superar la prueba, este uso de Tomar aliento no se gasta.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 109,
      name: 'Subclase de Guerrero',
      level: 3,
      class_id: 1,
      description: 'Consigues una subclase de guerrero de tu elección. Las subclases de caballero arcano, campeón, guerrero psiónico y maestro del combate se detallan tras la descripción de esta clase. Una subclase es una especialización que te proporciona rasgos cuando alcanzas ciertos niveles de guerrero. De aquí en adelante, obtienes todos los rasgos de tu subclase que sean de tu nivel de guerrero e inferiores. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 110,
      name: 'Mejora de Característica',
      level: 4,
      class_id: 1,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 111,
      name: 'Ataque Adicional',
      level: 5,
      class_id: 1,
      description: 'Cuando lleves a cabo la acción de atacar en tu turno, podrás hacer dos ataques en lugar de uno. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 112,
      name: 'Desplazamiento Táctico',
      level: 5,
      class_id: 1,
      description: 'Cuando uses tu rasgo Tomar aliento con una acción adicional, podrás moverte hasta la mitad de tu velocidad sin provocar ataques de oportunidad. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 113,
      name: 'Mejora de Característica',
      level: 6,
      class_id: 1,
      description: 'Podrás escoger una puntuación de característica y aumentarla en 2 o dos puntuaciones de característica y aumentarlas en 1 cada una. Como es habitual, no puedes aumentar una puntuación de característica por encima de 20.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 114,
      name: 'Arquetipos Marciales',
      level: 7,
      class_id: 1,
      description: 'Elige un rasgo del Arquetipo Marcial que escogiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 115,
      name: 'Mejora de característica',
      level: 8,
      class_id: 1,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 116,
      name: 'Indómito (un uso)',
      level: 9,
      class_id: 1,
      description: 'Si fallas una tirada de salvación, puedes repetirla con un bonificador igual a tu nivel de guerrero. Deberás quedarte con el nuevo resultado y no podrás volver a utilizar este rasgo hasta que finalices un descanso largo. Puedes usar este rasgo dos veces entre descansos largos a partir del nivel 13 y tres veces entre descansos largos a partir del nivel 17. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 117,
      name: 'Maestro Táctico',
      level: 9,
      class_id: 1,
      description: 'Cuando ataques usando un arma con la que puedas utilizar su propiedad de maestría, puedes sustituir la propiedad para ese ataque por la de debilitar, empujar o ralentizar. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 118,
      name: 'Rasgo de Subclase',
      level: 10,
      class_id: 1,
      description: 'Elige un rasgo del Arquetipo Marcial que escogiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 119,
      name: 'Dos Ataques Adicionales',
      level: 11,
      class_id: 1,
      description: 'Cuando lleves a cabo la acción de atacar en tu turno, podrás hacer tres ataques en lugar de uno. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 120,
      name: 'Mejora de Característica',
      level: 12,
      class_id: 1,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 121,
      name: 'Indómito (dos usos)',
      level: 13,
      class_id: 1,
      description: 'Si fallas una tirada de salvación, puedes repetirla con un bonificador igual a tu nivel de guerrero. Deberás quedarte con el nuevo resultado y no podrás volver a utilizar este rasgo hasta que finalices un descanso largo. Puedes usar este rasgo dos veces entre descansos largos a partir del nivel 13 y tres veces entre descansos largos a partir del nivel 17. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 122,
      name: 'Ataques Estudiados',
      level: 13,
      class_id: 1,
      description: 'Estudias a tus adversarios y aprendes con cada ataque que realizas. Si haces una tirada de ataque contra una criatura y fallas, tendrás ventaja en tu siguiente tirada de ataque contra esa criatura antes del final de tu siguiente turno. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 123,
      name: 'Mejora de Característica',
      level: 14,
      class_id: 1,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 124,
      name: 'Rasgo de Subclase',
      level: 15,
      class_id: 1,
      description: 'Elige un rasgo del Arquetipo Marcial que escogiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 125,
      name: 'Mejora de Característica',
      level: 16,
      class_id: 1,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 126,
      name: 'Acción Súbita (dos usos)',
      level: 17,
      class_id: 1,
      description: 'Puedes superar tus límites normales durante un instante. En tu turno, puedes llevar a cabo una acción más, salvo la acción de magia. Cuando uses este rasgo, no podrás volver a hacerlo hasta que finalices un descanso corto o largo. A partir del nivel 17, podrás usarlo dos veces antes de descansar, pero solo una vez por turno. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 127,
      name: 'Indómito (tres usos)',
      level: 17,
      class_id: 1,
      description: 'Si fallas una tirada de salvación, puedes repetirla con un bonificador igual a tu nivel de guerrero. Deberás quedarte con el nuevo resultado y no podrás volver a utilizar este rasgo hasta que finalices un descanso largo. Puedes usar este rasgo dos veces entre descansos largos a partir del nivel 13 y tres veces entre descansos largos a partir del nivel 17. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 128,
      name: 'Rasgo de Subclase',
      level: 18,
      class_id: 1,
      description: 'Elige un rasgo del Arquetipo Marcial que escogiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 129,
      name: 'Don Épico',
      level: 19,
      class_id: 1,
      description: 'Obtienes una dote de don épico u otra dote de tu elección para la que cumplas las condiciones. Se recomienda Don de la pericia en combate. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 130,
      name: 'Tres Ataques Adicionales',
      level: 20,
      class_id: 1,
      description: 'Cuando lleves a cabo la acción de atacar en tu turno, podrás hacer cuatro ataques en lugar de uno. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 131,
      name: 'Defensa sin Armadura',
      level: 1,
      class_id: 8,
      description: 'Mientras no lleves armadura ni portes un escudo, tu clase de armadura base será igual a 10 más tus modificadores por Destreza y Sabiduría. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 132,
      name: 'Artes Marciales',
      level: 1,
      class_id: 8,
      description: 'La práctica de las artes marciales te ha otorgado un dominio de los estilos de combate que emplean ataques sin armas y armas de monje, que son las siguientes:\n- armas cuerpo a cuerpo sencillas;\n- armas cuerpo a cuerpo marciales que tengan lapropiedad “ligera”.\nObtienes los siguientes beneficios mientras no lleves armadura ni portes un escudo y estés desarmado o empuñes únicamente armas de monje:\n- Ataque sin armas adicional: Puedes hacer un ataque sin armas como acción adicional.\n- Dado de Artes marciales: Puedes tirar 1d6 en lugar del daño normal de tus ataques sin armas o tus armas de monje. Este dado cambia según subes niveles como monje, como se muestra en la columna “Artes marciales” de la tabla “Rasgos de monje”.\n- Ataques diestros: Puedes usar tu modificador por Destreza en lugar de tu modificador por Fuerza para las tiradas de ataque y de daño de tus ataques sin armas y tus armas de monje. Además, cuando uses las opciones de agarre o empujón de tu ataque sin armas, puedes usar tu modificador por Destreza en lugar de tu modificador por Fuerza para determinar la CD de salvación. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 133,
      name: 'Concentración de Monje',
      level: 2,
      class_id: 8,
      description: 'Tu concentración y tu entrenamiento marcial te permiten utilizar una reserva interna de energía extraordinaria. Esta energía se representa mediante los puntos de concentración. Tu nivel de monje determina cuántos de estos puntos posees, como se muestra en la columna “Puntos de concentración” de la tabla “Rasgos de monje”. Puedes gastar estos puntos para mejorar o alimentar determinados rasgos de monje. Empiezas con tres de estos rasgos: Defensa paciente, Paso del viento y Ráfaga de golpes, que se detallan a continuación. Cuando gastes un punto de concentración, no estará disponible hasta que finalices un descanso corto o largo, tras el cual recuperarás todos los puntos gastados. Algunos rasgos que usan puntos de concentración requieren que tu objetivo haga una tirada de salvación. La CD de salvación es igual a 8 más tu modificador por Sabiduría y tu bonificador por competencia.\n- Defensa paciente: Puedes llevar a cabo la acción de destrabarse como acción adicional. De manera alternativa, puedes gastar 1 punto de concentración para llevar a cabo tanto la acción de destrabarse como la de esquivar como acción adicional.\n- Paso del viento: Puedes llevar a cabo la acción de correr como acción adicional. De manera alternativa, puedes gastar 1 punto de concentración para llevar a cabo tanto la acción de destrabarse como la de correr como acción adicional, y tu distancia de salto se duplicará durante el turno.\n- Ráfaga de golpes: Puedes gastar 1 punto de concentración para hacer dos ataques sin armas como acción adicional. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 134,
      name: 'Movimiento sin Armadura',
      level: 2,
      class_id: 8,
      description: 'Tu velocidad aumenta en 10 pies si no llevas armadura ni portas un escudo. Esta bonificación aumenta cuando alcanzas ciertos niveles de monje, como se muestra en la tabla “Rasgos de monje”. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 135,
      name: 'Metabolismo Asombroso',
      level: 2,
      class_id: 8,
      description: 'Cuando tires iniciativa, puedes recuperar todos los puntos de concentración gastados. Cuando lo hagas, tira tu dado de Artes marciales y recupera una cantidad de puntos de golpe igual a tu nivel de monje más el resultado obtenido. Cuando uses este rasgo, no podrás volver a hacerlo hasta que finalices un descanso largo. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 136,
      name: 'Desviar Ataques',
      level: 3,
      class_id: 8,
      description: 'Cuando una tirada de ataque te acierte y su daño incluya los tipos contundente, cortante o perforante, puedes llevar a cabo una reacción para reducir el daño total que sufras del ataque. Se reducirá en 1d10 más tu modificador por Destreza y nivel de monje. Si reduces el daño a 0, puedes gastar 1 punto de concentración para redirigir una parte de la fuerza del ataque. Si lo haces, elige una criatura que puedas ver a 5 pies o menos de ti si el ataque fue cuerpo a cuerpo o una criatura que puedas ver a 60 pies o menos de ti que no esté tras cobertura completa si el ataque fue a distancia. La criatura deberá superar una tirada de salvación de Destreza o sufrirá una cantidad de daño igual al resultado de dos tiradas de tu dado de Artes marciales más tu modificador por Destreza. El daño será del mismo tipo que inflija el ataque. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 137,
      name: 'Subclase de Monje',
      level: 3,
      class_id: 8,
      description: 'Consigues una subclase de monje de tu elección. Las subclases de guerrero de la mano abierta, guerrero de la misericordia, guerrero de la sombra y guerrero de los elementos se detallan tras la descripción de esta clase. Una subclase es una especialización que te proporciona rasgos cuando alcanzas ciertos niveles de monje. De aquí en adelante, obtienes todos los rasgos de tu subclase que sean de tu nivel de monje e inferiores. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 138,
      name: 'Mejora de Característica',
      level: 4,
      class_id: 8,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 139,
      name: 'Caída Lenta',
      level: 4,
      class_id: 8,
      description: 'Puedes llevar a cabo una reacción cuando caigas para reducir cualquier daño que sufras de la caída en una cantidad igual a cinco veces tu nivel de monje. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 140,
      name: 'Ataque Adicional',
      level: 5,
      class_id: 8,
      description: 'Cuando lleves a cabo la acción de atacar en tu turno, podrás hacer dos ataques en lugar de uno. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 141,
      name: 'Golpe Aturdidor',
      level: 5,
      class_id: 8,
      description: 'Una vez por turno cuando aciertes a una criatura con un arma de monje o un ataque sin armas, puedes gastar 1 punto de concentración para intentar propinar un golpe aturdidor. El objetivo deberá hacer una tirada de salvación de Constitución. Si la falla, tendrá el estado de aturdido hasta el principio de tu siguiente turno. Si la supera, su velocidad se reducirá a la mitad hasta el principio de tu siguiente turno y la siguiente tirada de ataque realizada contra él antes de ese momento tendrá ventaja. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 142,
      name: 'Golpes Potenciados con Ki',
      level: 6,
      class_id: 8,
      description: 'Siempre que inflijas daño con tu ataque sin armas, puedes elegir entre causar daño de fuerza o su tipo de daño normal. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 143,
      name: 'Rasgo de Subclase',
      level: 6,
      class_id: 8,
      description: 'Elige un rasgo de guerrero que elegiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 144,
      name: 'Evasión',
      level: 7,
      class_id: 8,
      description: 'Cuando sufras un efecto que te permita hacer una tirada de salvación de Destreza para sufrir solo la mitad de daño, no recibes daño alguno si la superas y solo sufres la mitad si la fallas. No te beneficias de este rasgo si tienes el estado de incapacitado. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 145,
      name: 'Mejora de Característica',
      level: 8,
      class_id: 8,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 146,
      name: 'Movimiento Acrobático',
      level: 9,
      class_id: 8,
      description: 'Mientras no lleves armadura ni portes un escudo, obtienes la capacidad de moverte por superficies verticales y sobre líquidos sin caerte.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 147,
      name: 'Autorrestablecimiento',
      level: 10,
      class_id: 8,
      description: 'Por pura fuerza de voluntad, puedes eliminar uno de los siguientes estados que te afecten al final de cada uno de tus turnos: asustado, envenenado o hechizado. Además, privarte de comida y bebida no te aplica niveles de cansancio. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 148,
      name: 'Concentración Agudizada',
      level: 10,
      class_id: 8,
      description: 'Tus rasgos Defensa paciente, Paso del viento y Ráfaga de golpes obtienen los siguientes beneficios:\n- Defensa paciente: Cuando gastes un punto de concentración para usar Defensa paciente, obtienes una cantidad de puntos de golpe temporales igual al resultado de dos tiradas de tu dado de Artes marciales.\n- Paso del viento. Cuando gastes un punto de concentración para usar Paso del viento, puedes elegir una criatura voluntaria Grande o más pequeña que esté a 5 pies o menos de ti. Moverás a la criatura contigo hasta el final de tu turno. El movimiento de la criatura no provoca ataques de oportunidad.\n- Ráfaga de golpes. Puedes gastar 1 punto de concentración para usar Ráfaga de golpes y hacer tres ataques sin armas en lugar de dos. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 149,
      name: 'Rasgo de Subclase',
      level: 11,
      class_id: 8,
      description: 'Elige un rasgo de guerrero que elegiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 150,
      name: 'Mejora de Característica',
      level: 12,
      class_id: 8,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 151,
      name: 'Desviar Energía',
      level: 13,
      class_id: 8,
      description: 'Ahora puedes usar tu rasgo Desviar ataques contra ataques que causen cualquier tipo de daño, no solo contundente, cortante o perforante. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 152,
      name: 'Sobreviviente Disciplinado',
      level: 14,
      class_id: 8,
      description: 'Tu disciplina física y mental te otorga competencia en todas las tiradas de salvación. Además, cuando hagas una tirada de salvación y falles, puedes gastar 1 punto de concentración para repetirla, pero deberás utilizar el nuevo resultado.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 153,
      name: 'Concentración Perfecta',
      level: 15,
      class_id: 8,
      description: 'Cuando tires iniciativa y no utilices Metabolismo asombroso, recuperas los puntos de concentración gastados hasta que tengas 4 si te quedan 3 o menos. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 154,
      name: 'Mejora de Característica',
      level: 16,
      class_id: 8,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 155,
      name: 'Rasgo de Subclase',
      level: 17,
      class_id: 8,
      description: 'Elige un rasgo de guerrero que elegiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 156,
      name: 'Defensa Superior',
      level: 18,
      class_id: 8,
      description: 'Al principio de tu turno, puedes gastar 3 puntos de concentración para protegerte del daño durante 1 minuto o hasta que tengas el estado de incapacitado. Durante ese tiempo, tendrás resistencia a todo el daño excepto al de fuerza.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 157,
      name: 'Don Épico',
      level: 19,
      class_id: 8,
      description: 'Obtienes una dote de don épico u otra dote de tu elección para la que cumplas las condiciones. Se recomienda Don del ataque imparable.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 158,
      name: 'Cuerpo y Mente',
      level: 20,
      class_id: 8,
      description: 'Has llevado tu cuerpo y mente a otro nivel. Tus puntuaciones de Destreza y Sabiduría aumentan en 4, hasta un máximo de 25. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 159,
      name: 'Imponer las Manos',
      level: 1,
      class_id: 9,
      description: 'Tu toque bendito puede curar heridas. Tienes una reserva de poder de curación que se rellena tras finalizar un descanso largo. Puedes recurrir a esta reserva para restaurar tantos puntos de golpe como cinco veces tu nivel de paladín. Como acción adicional, puedes tocar a una criatura (que puedes ser tú) y extraer energía de la reserva de curación para hacer que esa criatura recupere una cantidad de puntos de golpe, que como máximo será la cantidad que te quede en dicha reserva. También puedes gastar 5 puntos de golpe de la reserva para eliminar el estado de envenenada de la criatura, pero esos puntos gastados no restaurarán puntos de golpe.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 160,
      name: 'Lanzamiento de Conjuros (Paladín)',
      level: 1,
      class_id: 9,
      description: 'Has aprendido a lanzar conjuros gracias a la oración y la meditación.  La información presentada a continuación detalla cómo usar esas reglas con los conjuros de paladín, que encontrarás más adelante en la lista de conjuros de paladín de la descripción de la clase.\n- Espacios de conjuro: La tabla “Rasgos de paladín” muestra cuántos espacios de conjuro tienes para lanzar tus conjuros de nivel 1 y superiores. Recuperas todos los espacios utilizados tras finalizar un descanso largo.\n- Conjuros preparados de nivel 1 y superiores: Preparas una serie de conjuros de nivel 1 y superiores, que son los que podrás lanzar con este rasgo. Para empezar, elige dos conjuros de paladín de nivel 1. Se recomiendan castigo abrasador y heroísmo. El número de conjuros de tu lista aumenta conforme subes de nivel de paladín, como se muestra en la columna “Conjuros preparados” de la tabla “Rasgos de paladín”. Cuando ese número aumente, elige conjuros de paladín adicionales hasta que el número de conjuros de tu lista coincida con el número de la tabla “Rasgos de paladín”. Estos conjuros deben ser de un nivel para el que tengas espacios de conjuro. Por ejemplo, si eres un paladín de nivel 5, podrías preparar cualquier combinación de seis conjuros de paladín de nivel 1 o 2. Si otro rasgo de paladín te proporciona conjuros que siempre tienes preparados, esos conjuros no cuentan para el total que puedes preparar con este rasgo, pero sí que cuentan como conjuros de paladín para ti.\n- Cambiar los conjuros preparados: Tras finalizar un descanso largo, puedes sustituir un conjuro de tu lista por otro conjuro de paladín para el que tengas espacios de conjuro.\n- Aptitud mágica: El Carisma es tu aptitud mágica en lo que respecta a tus conjuros de paladín.\n- Canalizador mágico: Puedes utilizar un símbolo sagrado como canalizador mágico para tus conjuros de paladín.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 161,
      name: 'Maestría con Armas',
      level: 1,
      class_id: 9,
      description: 'Tu entrenamiento con armas te permite utilizar las propiedades de maestría con dos tipos de armas de tu elección con las que tengas competencia, como espadas largas y jabalinas. Tras finalizar un descanso largo, puedes cambiar los tipos de armas elegidas. Por ejemplo, podrías pasar a utilizar las propiedades de maestría con alabardas y manguales. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 162,
      name: 'Estilo de combate',
      level: 2,
      class_id: 9,
      description: 'Obtienes una dote de estilo de combate de tu elección. En lugar de elegir una de esas dotes, puedes elegir la opción presentada a continuación.\n- Guerrero bendito: Aprendes dos trucos de clérigo de tu elección (consulta la sección de la clase clérigo para ver la lista de conjuros de clérigo). Se recomiendan guía y llama sagrada. Los trucos elegidos cuentan como conjuros de paladín para ti y el Carisma es tu aptitud mágica para lanzarlos. Cada vez que subas un nivel de paladín, puedes sustituir uno de estos trucos por otro truco de clérigo.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 163,
      name: 'Castigo de Paladín',
      level: 2,
      class_id: 9,
      description: 'Siempre tienes el conjuro castigo divino preparado. Además, puedes lanzarlo sin gastar un espacio de conjuro, pero debes finalizar un descanso largo antes de poder volver a lanzarlo de este modo. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 164,
      name: 'Canalizar Divinidad',
      level: 3,
      class_id: 9,
      description: 'Puedes canalizar energía divina directamente de los Planos Exteriores para alimentar varios efectos mágicos. Empiezas con uno de esos efectos: Sentidos divinos, que se describe a continuación. Otros rasgos de paladín ofrecen opciones adicionales como efectos de Canalizar divinidad. Cada vez que utilices el rasgo Canalizar divinidad de esta clase, elige qué efecto de esta clase creas. Puedes usar el rasgo Canalizar divinidad dos veces. Recuperas uno de los usos gastados tras finalizar un descanso corto y todos tras finalizar un descanso largo. Obtienes un uso adicional cuando alcances el nivel 11 de paladín. Si un efecto de Canalizar divinidad requiere una tirada de salvación, la CD será igual a la CD de salvación de conjuros del rasgo Lanzamiento de conjuros de esta clase.\n- Sentidos divinos: Como acción adicional, puedes expandir tu percepción para detectar celestiales, infernales y muertos vivientes. Durante los siguientes 10 minutos o hasta que tengas el estado de incapacitado, conoces la ubicación de cualquier criatura de esos tipos que se encuentre a 60 pies o menos de ti y su tipo de criatura. En el mismo radio, también detectarás la presencia de cualquier lugar u objeto que haya sido consagrado o profanado, como con el conjuro consagrar.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 165,
      name: 'Subclase de Paladín',
      level: 3,
      class_id: 9,
      description: 'Consigues una subclase de paladín de tu elección. Las subclases del juramento de entrega, el juramento de gloria, el juramento de los antiguos y el juramento de venganza se detallan tras la descripción de esta clase. Una subclase es una especialización que te proporciona rasgos cuando alcanzas ciertos niveles de paladín. De aquí en adelante, obtienes todos los rasgos de tu subclase que sean de tu nivel de paladín e inferiores.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 166,
      name: 'Mejora de Característica',
      level: 4,
      class_id: 9,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 167,
      name: 'Ataque Adicional',
      level: 5,
      class_id: 9,
      description: 'Cuando lleves a cabo la acción de atacar en tu turno, podrás hacer dos ataques en lugar de uno.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 168,
      name: 'Corcel Fiel',
      level: 5,
      class_id: 9,
      description: 'Puedes invocar la ayuda de un corcel sobrenatural. Siempre tienes el conjuro hallar corcel preparado. También puedes lanzarlo una vez sin gastar un espacio de conjuro y recuperas la capacidad de hacerlo tras finalizar un descanso largo.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 169,
      name: 'Aura de Protección',
      level: 6,
      class_id: 9,
      description: 'Irradias un aura protectora e invisible en una emanación de 3 m que se origina de ti. El aura estará inactiva mientras tengas el estado de incapacitado. Tus aliados dentro del aura y tú obtenéis un bonificador a las tiradas de salvación igual a tu modificador por Carisma (mínimo de +1). Si hay otro paladín presente, una criatura solo puede beneficiarse de un Aura de protección a la vez; esa criatura elegirá cuál de ellas mientras esté dentro de ambas.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 170,
      name: 'Rasgo de Subclase',
      level: 7,
      class_id: 9,
      description: 'Elige un rasgo del juramento que elegiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 171,
      name: 'Mejora de Característica',
      level: 8,
      class_id: 9,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 172,
      name: 'Abjurar de los Enemigos',
      level: 9,
      class_id: 9,
      description: 'Como acción de magia, puedes gastar uno de los usos de Canalizar divinidad de esta clase para sobrecoger a tus enemigos. Mientras muestras tu símbolo sagrado o arma, puedes hacer objetivo a una cantidad de criaturas que puedas ver a 60 pies o menos de ti igual a tu modificador por Carisma (mínimo una criatura). Cada objetivo deberá superar una tirada de salvación de Sabiduría o tendrá el estado de asustado durante 1 minuto o hasta recibir daño. Mientras esté asustado de esta forma, un objetivo solo podrá hacer una de estas opciones en sus turnos: moverse, realizar una acción o realizar una acción adicional. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 173,
      name: 'Aura de Coraje',
      level: 10,
      class_id: 9,
      description: 'Tus aliados y tú tenéis inmunidad al estado de asustados mientras estéis dentro de tu Aura de protección. Si un aliado asustado entra en el aura, ese estado no tendrá efecto en él mientras esté dentro.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 174,
      name: 'Golpes Radiantes',
      level: 11,
      class_id: 9,
      description: 'Ahora, tus golpes tienen un poder sobrenatural. Cuando aciertes a un objetivo con una tirada de ataque usando un arma cuerpo a cuerpo o un ataque sin armas, el objetivo recibirá 1d8 de daño radiante adicional.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 175,
      name: 'Mejora de Característica',
      level: 12,
      class_id: 9,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 176,
      name: 'Toque Reparador',
      level: 14,
      class_id: 9,
      description: 'Cuando uses Imponer las manos sobre una criatura, también podrás eliminar uno o más de los siguientes estados que la afecten: asustado, aturdido, cegado, ensordecido, hechizado o paralizado. Deberás gastar 5 puntos de golpe de la reserva de curación de Imponer las manos por cada uno de los estados que elimines, pero esos puntos gastados no restaurarán puntos de golpe.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 177,
      name: 'Rasgo de Subclase',
      level: 15,
      class_id: 9,
      description: 'Elige un rasgo del juramento que elegiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 178,
      name: 'Mejora de Característica',
      level: 16,
      class_id: 9,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 179,
      name: 'Expansión de Aura',
      level: 18,
      class_id: 9,
      description: 'Tu Aura de protección ahora es una emanación de 30 pies.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 180,
      name: 'Don Épico',
      level: 19,
      class_id: 9,
      description: 'Obtienes una dote de don épico u otra dote de tu elección para la que cumplas lascondiciones. Se recomienda Don de la visión verdadera.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 181,
      name: 'Rasgo de Subclase',
      level: 20,
      class_id: 9,
      description: 'Elige un rasgo del juramento que elegiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 182,
      name: 'Ataque Furtivo',
      level: 1,
      class_id: 2,
      description: 'Sabes cómo atacar sutilmente y aprovecharte de un enemigo distraído. Una vez por turno, puedes infligir 1d6 de daño adicional a una criatura a la que aciertes con una tirada de ataque si tienes ventaja en la tirada y si ha sido utilizando un arma sutil o a distancia. El daño adicional es del mismo tipo que el del arma. No necesitas tener ventaja en la tirada de ataque si al menos uno de tus aliados está a 5 pies o menos del objetivo, dicho aliado no tiene el estado de incapacitado y no sufres desventaja en la tirada de ataque. El daño adicional aumenta conforme subes de nivel de pícaro, como se muestra en la columna “Ataque furtivo” de la tabla “Rasgos de pícaro”.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 183,
      name: 'Jerga de Ladrones',
      level: 1,
      class_id: 2,
      description: 'Has aprendido varios idiomas en las comunidades donde empleabas tus talentos de pícaro. Conoces la jerga de ladrones y otro idioma de tu elección.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 184,
      name: 'Maestría con Armas',
      level: 1,
      class_id: 2,
      description: 'Tu entrenamiento con armas te permite utilizar las propiedades de maestría con dos tipos de armas de tu elección con las que tengas competencia, como dagas y arcos cortos. Tras finalizar un descanso largo, puedes cambiar los tipos de armas elegidas. Por ejemplo, podrías pasar a utilizar las propiedades de maestría con cimitarras y espadas cortas.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 185,
      name: 'Pericia',
      level: 1,
      class_id: 2,
      description: 'Ganas pericia en dos de tus competencias en habilidades de tu elección. Se recomiendan Juego de manos y Sigilo si eres competente en ellas. En el nivel 6 de pícaro ganas pericia en otras dos competencias en habilidades de tu elección.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 186,
      name: 'Acción Astuta',
      level: 2,
      class_id: 2,
      description: 'Tu agilidad mental y tu rapidez te permiten moverte y actuar con presteza. En tu turno, puedes llevar a cabo una de las siguientes acciones como acción adicional: correr, destrabarse o esconderse.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 187,
      name: 'Puntería Certera',
      level: 3,
      class_id: 2,
      description: 'Como acción adicional, te concedes ventaja en tu siguiente tirada de ataque del turno actual. Solo puedes usar este rasgo si no te has movido durante este turno y, después de usarlo, tu velocidad es 0 hasta el final del turno.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 188,
      name: 'Subclase de Pícaro',
      level: 3,
      class_id: 2,
      description: 'Consigues una subclase de pícaro de tu elección. Las subclases de asesino, embaucador arcano, ladrón y rebanaalmas se detallan tras la descripción de esta clase. Una subclase es una especialización que te proporciona rasgos cuando alcanzas ciertos niveles de pícaro. De aquí en adelante, obtienes todos los rasgos de tu subclase que sean de tu nivel de pícaro e inferiores.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 189,
      name: 'Mejora de Característica',
      level: 4,
      class_id: 2,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 190,
      name: 'Esquiva Asombrosa',
      level: 5,
      class_id: 2,
      description: 'Cuando un atacante que puedas ver te acierte con una tirada de ataque, puedes usar una reacción para reducir a la mitad el daño que te causa dicho ataque (redondeando hacia abajo).',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 191,
      name: 'Golpe Astuto',
      level: 5,
      class_id: 2,
      description: 'Has desarrollado formas astutas de usar tu Ataque furtivo. Cuando infliges daño de Ataque furtivo, puedes añadir uno de los siguientes efectos de Golpe astuto. Cada uno tiene un coste en dados que es la cantidad de dados de daño de Ataque furtivo a los que debes renunciar para añadir el efecto. Retiras la cantidad de dados antes de tirar y el efecto se produce inmediatamente después de que se cause el daño del ataque. Por ejemplo, si añades el efecto de veneno, quita 1d6 del daño de Ataque furtivo antes de tirar. Si un efecto de Golpe astuto requiere una tirada de salvación, la CD es igual a 8 más tu modificador por Destreza y tu bonificador por competencia.\n- Retirada (coste: 1d6). Justo después del ataque, te mueves hasta la mitad de tu velocidad sin provocar ataques de oportunidad.\n- Tropiezo (coste: 1d6). Si el objetivo es Grande o más pequeño, deberá superar una tirada de salvación de Destreza o tendrá el estado de derribado.\n- Veneno (coste: 146). Añades una toxina a tu golpe, lo que obliga al objetivo a hacer una tirada de salvación de Constitución. Si la falla, tendrá el estado de envenenado durante 1 minuto. Al final de cada uno de sus turnos, el objetivo envenenado repetirá la tirada de salvación y, si tiene éxito, se librará del efecto. Para usar este efecto, debes llevar contigo unos útiles de envenenador. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 192,
      name: 'Pericia',
      level: 6,
      class_id: 2,
      description: 'Ganas pericia en dos de tus competencias en habilidades de tu elección. Se recomiendan Juego de manos y Sigilo si eres competente en ellas. En el nivel 6 de pícaro ganas pericia en otras dos competencias en habilidades de tu elección.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 193,
      name: 'Evasión',
      level: 7,
      class_id: 2,
      description: 'Puedes esquivar con agilidad ciertos peligros. Cuando sufras un efecto que te permita hacer una tirada de salvación de Destreza para sufrir solo la mitad de daño, no recibes daño alguno si la superas y solo sufres la mitad si la fallas. No puedes usar este rasgo si tienes el estado de incapacitado.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 194,
      name: 'Talentos Fiables',
      level: 7,
      class_id: 2,
      description: 'Cuando hagas una prueba de característica que utilice una de tus competencias en habilidades o con herramientas, puedes sustituir un resultado de 9 o menos en el d20 por un 10.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 195,
      name: 'Mejora de Característica',
      level: 8,
      class_id: 2,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 196,
      name: 'Rasgo de Subclase',
      level: 9,
      class_id: 2,
      description: 'Elige un rasgo de la subclase de Pícaro que elegiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 197,
      name: 'Mejora de Característica',
      level: 10,
      class_id: 2,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 198,
      name: 'Golpe Astuto Mejorado',
      level: 11,
      class_id: 2,
      description: 'Puedes usar hasta dos efectos de Golpe astuto cuando inflijas daño de Ataque furtivo pagando el coste en dados por cada efecto.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 199,
      name: 'Mejora de Característica',
      level: 12,
      class_id: 2,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 200,
      name: 'Rasgo de Subclase',
      level: 13,
      class_id: 2,
      description: 'Elige un rasgo de la subclase de Pícaro que elegiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 201,
      name: 'Golpes Taimados',
      level: 14,
      class_id: 2,
      description: 'Has practicado nuevas formas de usar tu Ataque furtivo de forma artera. Entre las opciones de Golpe astuto se encuentran ahora los siguientes efectos.\n- Confundir (coste: 2d6). El objetivo deberá superar una tirada de salvación de Constitución. Si no lo hace, en su próximo turno solo podrá moverse, realizar una acción o realizar una acción adicional.\n- Noquear (coste: 6d6). El objetivo deberá superar una tirada de salvación de Constitución o tendrá el estado de inconsciente durante 1 minuto o hasta recibir daño. El objetivo inconsciente repetirá la tirada de salvación al final de cada uno de sus turnos y, si tiene éxito, se librará del efecto.\n- Ofuscar (coste: 3d6). El objetivo deberá superar una tirada de salvación de Destreza o tendrá el estado de cegado hasta el final de su siguiente turno. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 202,
      name: 'Mente Escurridiza',
      level: 15,
      class_id: 2,
      description: 'Tu mente astuta es excepcionalmente difícil de controlar. Ganas competencia en las tiradas de salvación de Sabiduría y Carisma.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 203,
      name: 'Mejora de Característica',
      level: 16,
      class_id: 2,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 204,
      name: 'Rasgo de Subclase',
      level: 17,
      class_id: 2,
      description: 'Elige un rasgo de la subclase de Pícaro que elegiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 205,
      name: 'Elusivo',
      level: 18,
      class_id: 2,
      description: 'Eres tan escurridizo que será raro que un atacante pueda golpearte con facilidad. Ninguna tirada de ataque contra ti tendrá ventaja a menos que tengas el estado de incapacitado.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 206,
      name: 'Don Épico',
      level: 19,
      class_id: 2,
      description: 'Obtienes una dote de don épico u otra dote de tu elección para la que cumplas las condiciones. Se recomienda Don del espíritu de la noche.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 207,
      name: 'Golpe de Suerte',
      level: 20,
      class_id: 2,
      description: 'Has desarrollado una capacidad asombrosa para tener éxito justo cuando lo necesitas. Si fallas una prueba con d20, puedes convertir el resultado de la tirada en un 20. Cuando uses este rasgo, no podrás volver a hacerlo hasta que finalices un descanso corto o largo.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 208,
      name: 'Lanzamiento de Conjuros (Mago)',
      level: 1,
      class_id: 3,
      description: 'Como estudiante de magia arcana que eres, has aprendido a lanzar conjuros. La información presentada a continuación detalla cómo usar esas reglas con los conjuros de mago, que encontrarás más adelante en la lista de conjuros de mago de la descripción de la clase.\n- Trucos: Conoces tres trucos de mago de tu elección. Se recomiendan luz, mano de mago y rayo de escarcha. Tras finalizar un descanso largo, puedes sustituir uno de tus trucos de este rasgo por otro truco de mago de tu elección. Cuando alcanzas los niveles 4 y 10 de mago, aprendes otro truco de mago de tu elección, como se muestra en la columna “Trucos” de la tabla “Rasgos de mago”.\n- Libro de conjuros: Tu aprendizaje de mago culminó con la creación de un libro único: tu libro de conjuros. Es un objeto Diminuto que pesa 3 lb, contiene 100 páginas y solo podéis leerlo tú o alguien que lance identificar. Tú decides la apariencia y los materiales del libro; por ejemplo, puede ser un volumen con los cantos cubiertos de pan de oro o páginas de vitela cosidas con bramante. El libro contiene los conjuros de nivel 1 y superiores que conoces. Empiezas con seis conjuros de mago de nivel 1 de tu elección. Se recomiendan armadura de mago, caída de pluma, detectar magia, dormir, ola atronadora y proyectil mágico. Siempre que subas un nivel de mago después del 1, añade dos conjuros de mago de tu elección a tu libro de conjuros. Estos conjuros deben ser de un nivel para el que tengas espacios de conjuro, como se indica en la tabla “Rasgos de mago”. Los conjuros son el resultado de la investigación arcana que llevas a cabo de forma habitual.\n- Espacios de conjuro: La tabla “Rasgos de mago” muestra cuántos espacios de conjuro tienes para lanzar tus conjuros de nivel 1 y superiores. Recuperas todos los espacios utilizados tras finalizar un descanso largo.\n- Conjuros preparados de nivel 1 y superiores. Preparas una serie de conjuros de nivel 1 y superiores, que son los que podrás lanzar con este rasgo. Para ello, elige cuatro conjuros de tu libro de conjuros. Estos conjuros deben ser de un nivel para el que tengas espacios de conjuro. El número de conjuros de tu lista aumenta conforme subes de nivel de mago, como se muestra en la columna “Conjuros preparados” de la tabla “Rasgos de mago”. Cuando ese número aumente, elige conjuros de mago adicionales hasta que el número de conjuros de tu lista coincida con el número de la tabla. Estos conjuros deben ser de un nivel para el que tengas espacios de conjuro. Por ejemplo, si eres un mago de nivel 3, podrías preparar cualquier combinación de seis conjuros de nivel 1 o 2 de tu libro de conjuros. Si otro rasgo de mago te proporciona conjuros que siempre tienes preparados, esos conjuros no cuentan para el total que puedes preparar con este rasgo, pero sí que cuentan como conjuros de mago para ti.\n- Cambiar los conjuros preparados: Tras finalizar un descanso largo, puedes cambiar los conjuros que tienes preparados sustituyendo los que quieras por otros de tu libro de conjuros.\n- Aptitud mágica: La Inteligencia es tu aptitud mágica en lo que respecta a tus conjuros de mago.\n- Canalizador mágico: Puedes utilizar un canalizador arcano o tu libro de conjuros como canalizador mágico para tus conjuros de mago.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 209,
      name: 'Adepto en Rituales',
      level: 1,
      class_id: 3,
      description: 'Puedes lanzar de forma ritual cualquier conjuro de mago que figure en tu libro de conjuros y esté marcado como “ritual”. No necesitas tenerlo preparado, pero debes leerlo del libro para lanzarlo de esta forma.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 210,
      name: 'Recuperación Arcana',
      level: 1,
      class_id: 3,
      description: 'Puedes recuperar parte de tu energía mágica estudiando tu libro de conjuros. Tras finalizar un descanso corto, puedes elegir espacios de conjuro gastados y recuperarlos. La suma de niveles de estos espacios de conjuro debe ser igual o inferior a la mitad de tu nivel de mago (redondeando hacia arriba) y ninguno de los espacios puede ser de nivel 6 o más. Por ejemplo, si eres un mago de nivel 4, podrás recuperar hasta dos niveles en espacios de conjuro, ya sea un espacio de conjuro de nivel 2 o dos espacios de nivel 1. Cuando uses este rasgo, no podrás volver a hacerlo hasta que finalices un descanso largo.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 211,
      name: 'Académico',
      level: 2,
      class_id: 3,
      description: 'Mientras estudiabas magia, también te especializaste en otro campo. Elige una de las siguientes habilidades en la que tengas competencia: Conocimiento arcano, Historia, Investigación, Medicina, Naturaleza o Religión. Ganas pericia en la habilidad elegida.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 212,
      name: 'Subclase de Mago',
      level: 3,
      class_id: 3,
      description: 'Consigues una subclase de mago de tu elección. Las subclases de abjurador, adivino, evocador e ilusionista se detallan tras la descripción de esta clase. Una subclase es una especialización que te proporciona rasgos cuando alcanzas ciertos niveles de mago. De aquí en adelante, obtienes todos los rasgos de tu subclase que sean de tu nivel de mago e inferiores.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 213,
      name: 'Mejora de Característica',
      level: 4,
      class_id: 3,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 214,
      name: 'Memorizar Conjuro',
      level: 5,
      class_id: 3,
      description: 'Tras finalizar un descanso corto, puedes estudiar tu libro de conjuros y sustituir un conjuro de mago de nivel 1 o superior que tengas preparado con tu rasgo Lanzamiento de conjuros por otro de nivel 1 o superior del libro.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 215,
      name: 'Rasgo de Subclase',
      level: 6,
      class_id: 3,
      description: 'Elige un rasgo de la subclase de Mago que elegiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 216,
      name: 'Mejora de Característica',
      level: 8,
      class_id: 3,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 217,
      name: 'Rasgo de Subclase',
      level: 10,
      class_id: 3,
      description: 'Elige un rasgo de la subclase de Mago que elegiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 218,
      name: 'Mejora de Característica',
      level: 12,
      class_id: 3,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 219,
      name: 'Rasgo de Subclase',
      level: 14,
      class_id: 3,
      description: 'Elige un rasgo de la subclase de Mago que elegiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 220,
      name: 'Mejora de Característica',
      level: 16,
      class_id: 3,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 221,
      name: 'Maestría sobre Conjuros',
      level: 18,
      class_id: 3,
      description: 'Has alcanzado tal maestría sobre ciertos conjuros que puedes lanzarlos a voluntad. Elige un conjuro de nivel 1 y otro de nivel 2 de tu libro de conjuros con un tiempo de lanzamiento de una acción. Siempre tienes esos conjuros preparados y puedes lanzarlos a su nivel más bajo sin gastar un espacio de conjuro. Para lanzar cualquiera de ellos a un nivel superior, deberás gastar un espacio de conjuro. Tras finalizar un descanso largo, puedes estudiar tu\nlibro de conjuros y sustituir uno de los conjuros por otro del libro del mismo nivel que cumpla los requisitos. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 222,
      name: 'Don Épico',
      level: 19,
      class_id: 3,
      description: 'Obtienes una dote de don épico u otra dote de tu elección para la que cumplas las condiciones. Se recomienda Don del recuerdo de conjuros.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 223,
      name: 'Conjuros Característicos',
      level: 20,
      class_id: 3,
      description: 'Escoge dos conjuros de nivel 3 que figuren en tu libro de conjuros como conjuros característicos. Siempre tienes esos conjuros preparados y puedes lanzar cada uno de ellos una vez a nivel 3 sin gastar un espacio de conjuro. Una vez que los lances, no podrás volver a hacerlo de este modo hasta que finalices un descanso corto o largo. Para lanzar cualquiera de ellos a un nivel superior, deberás gastar un espacio de conjuro.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 224,
      name: 'Lanzamiento de Conjuros (Hechicero)',
      level: 1,
      class_id: 7,
      description: 'Recurres a tu magia innata, lo que te permite lanzar conjuros. Consulta el capítulo 7 para ver las reglas sobre el lanzamiento de conjuros. La información presentada a continuación detalla cómo usar esas reglas con los conjuros de hechicero, que encontrarás más adelante en la lista de conjuros de hechicero de la descripción de la clase.\n- Trucos: Conoces cuatro trucos de hechicero de tu elección. Se recomiendan agarre electrizante, estallido mágico, luz y prestidigitación. Cada vez que subas un nivel de hechicero, puedes sustituir uno de tus trucos de este rasgo por otro truco de hechicero de tu elección. Cuando alcanzas los niveles 4 y 10 de hechicero, aprendes otro truco de hechicero de tu elección, como se muestra en la columna “Trucos” de la tabla “Rasgos de hechicero”.\n- Espacios de conjuro: La tabla “Rasgos de hechicero” muestra cuántos espacios de conjuro tienes para lanzar tus conjuros de nivel 1 y superiores. Recuperas todos los espacios utilizados tras finalizar un descanso largo. \n- Conjuros preparados de nivel 1 y superiores. Preparas una serie de conjuros de nivel 1 y superiores, que son los que podrás lanzar con este rasgo. Para empezar, elige dos conjuros de hechicero de nivel 1. Se recomiendan detectar magia y manos ardientes. El número de conjuros de tu lista aumenta conforme subes de nivel de hechicero, como se muestra en la columna “Conjuros preparados” de la tabla “Rasgos de hechicero”. Cuando ese número aumente, elige conjuros de hechicero adicionales hasta que el número de conjuros de tu lista coincida con el número de la tabla “Rasgos de hechicero”. Estos conjuros deben ser de un nivel para el que tengas espacios de conjuro. Por ejemplo, si eres un hechicero de nivel 3, podrías preparar cualquier combinación de seis conjuros de hechicero de nivel 1o 2. Si otro rasgo de hechicero te proporciona conjuros que siempre tienes preparados, esos conjuros no cuentan para el total que puedes preparar con este rasgo, pero sí que cuentan como conjuros de hechicero para ti.\n- Cambiar los conjuros preparados: Cada vez que subas un nivel de hechicero, puedes sustituir un conjuro de tu lista por otro conjuro de hechicero para el que tengas espacios de conjuro.\n- Aptitud mágica: El Carisma es tu aptitud mágica en lo que respecta a tus conjuros de Hechicero.\n- Canalizador Mágico: Puedes utilizar un canalizador arcano como canalizador mágico para tus conjuros de hechicero.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 225,
      name: 'Hechicería Innata',
      level: 1,
      class_id: 7,
      description: 'Un suceso de tu pasado dejó una marca indeleble en ti, llenándote de magia latente. Como acción adicional, puedes desatar esa magia durante 1 minuto, durante el cual obtienes los siguientes beneficios:\n- La CD de salvación de tus conjuros de hechicero aumenta en 1.\n- Tienes ventaja en las tiradas de ataque de los conjuros de hechicero que lances.\nPuedes usar este rasgo dos veces y recuperas todos los usos tras finalizar un Descanso Largo.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 226,
      name: 'Fuente de Magia',
      level: 2,
      class_id: 7,
      description: 'Puedes acceder a una abundante fuente de magia que nace de tu interior. Esta fuente se representa mediante una serie de puntos de hechicería, que te permiten crear una gran variedad de efectos mágicos. Posees 2 puntos de hechicería, pero obtendrás más conforme subas de nivel en esta clase, como se muestra en la columna “Puntos de hechicería” de la tabla “Rasgos de hechicero”. No puedes tener más puntos de hechicería que la cantidad indicada en la tabla para tu nivel. Recuperas todos los puntos de hechicería gastados tras finalizar un Descanso Largo. Puedes emplear tus puntos de hechicería en las opciones presentadas a continuación y en otros rasgos que usan dichos puntos, como el de metamagia.\n- Convertir espacios de conjuro en puntos de hechicería: Puedes gastar un espacio de conjuro para obtener tantos puntos de hechicería como el nivel del espacio\n(no requiere acción).\n- Crear espacios de conjuro. Como acción adicional, puedes transformar puntos de hechicería que no hayas gastado aún en un espacio de conjuro. La tabla “Crear espacios de conjuro” indica el coste de crear un espacio de conjuro de un nivel determinado y el nivel mínimo de hechicero que debes tener para crear un espacio. Puedes crear espacios de conjuro de nivel 5 como máximo. Cualquier espacio creado mediante este rasgo se desvanece tras finalizar un descanso largo. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 227,
      name: 'Metamagia',
      level: 2,
      class_id: 7,
      description: 'Como la magia fluye desde tu interior, puedes alterar tus conjuros y adaptarlos a conveniencia. Consigues dos de las opciones de metamagia de tu elección del apartado “Opciones de metamagia” que aparece más adelante en la descripción de esta clase. Usarás las opciones elegidas para modificar temporalmente los conjuros que lances. Para usar una, deberás gastar la cantidad de puntos de hechicería que cueste. Solo puedes usar una opción de metamagia en un conjuro cuando lo lanzas, a menos que se especifique otra cosa en las opciones. Cada vez que subas un nivel de hechicero, puedes sustituir una de las opciones de metamagia por otra que no conozcas. Obtienes dos opciones más en el nivel 10 de hechicero y otras dos más en el nivel 17.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 228,
      name: 'Subclase de Hechicero',
      level: 3,
      class_id: 7,
      description: 'Consigues una subclase de hechicero de tu elección. Las subclases de hechicería aberrante, hechicería de magia salvaje, hechicería dracónica y hechicería mecánica se detallan tras la descripción de esta clase. Una subclase es una especialización que te proporciona rasgos cuando alcanzas ciertos niveles de hechicero. De aquí en adelante, obtienes todos los rasgos de tu subclase que sean de tu nivel de hechicero e inferiores.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 229,
      name: 'Mejora de Característica',
      level: 4,
      class_id: 7,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 230,
      name: 'Recuperación Mágica',
      level: 5,
      class_id: 7,
      description: 'Tras finalizar un descanso corto, puedes recuperar una cantidad de puntos de hechicería igual o inferior a la mitad de tu nivel de hechicero (redondeando hacia abajo). Cuando uses este rasgo, no podrás volver a hacerlo hasta que finalices un descanso largo.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 231,
      name: 'Rasgo de Subclase',
      level: 6,
      class_id: 7,
      description: 'Elige un rasgo de la subclase de Hechicero que elegiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 232,
      name: 'Encarnación Mágica',
      level: 7,
      class_id: 7,
      description: 'Si no te quedan usos del rasgo Hechicería innata, puedes usarlo si gastas 2 puntos de hechicería cuando empleas la acción adicional para activarlo. Además, mientras tengas activo el rasgo Hechicería innata, puedes usar hasta dos de tus opciones de metamagia en cada conjuro que lances.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 233,
      name: 'Mejora de Característica',
      level: 8,
      class_id: 7,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 234,
      name: 'Metamagia',
      level: 10,
      class_id: 7,
      description: 'Como la magia fluye desde tu interior, puedes alterar tus conjuros y adaptarlos a conveniencia. Consigues dos de las opciones de metamagia de tu elección del apartado “Opciones de metamagia” que aparece más adelante en la descripción de esta clase. Usarás las opciones elegidas para modificar temporalmente los conjuros que lances. Para usar una, deberás gastar la cantidad de puntos de hechicería que cueste. Solo puedes usar una opción de metamagia en un conjuro cuando lo lanzas, a menos que se especifique otra cosa en las opciones. Cada vez que subas un nivel de hechicero, puedes sustituir una de las opciones de metamagia por otra que no conozcas. Obtienes dos opciones más en el nivel 10 de hechicero y otras dos más en el nivel 17.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 235,
      name: 'Mejora de Característica',
      level: 12,
      class_id: 7,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 236,
      name: 'Rasgo de Subclase',
      level: 14,
      class_id: 7,
      description: 'Elige un rasgo de la subclase de Hechicero que elegiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 237,
      name: 'Mejora de Característica',
      level: 16,
      class_id: 7,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 238,
      name: 'Metamagia',
      level: 17,
      class_id: 7,
      description: 'Como la magia fluye desde tu interior, puedes alterar tus conjuros y adaptarlos a conveniencia. Consigues dos de las opciones de metamagia de tu elección del apartado “Opciones de metamagia” que aparece más adelante en la descripción de esta clase. Usarás las opciones elegidas para modificar temporalmente los conjuros que lances. Para usar una, deberás gastar la cantidad de puntos de hechicería que cueste. Solo puedes usar una opción de metamagia en un conjuro cuando lo lanzas, a menos que se especifique otra cosa en las opciones. Cada vez que subas un nivel de hechicero, puedes sustituir una de las opciones de metamagia por otra que no conozcas. Obtienes dos opciones más en el nivel 10 de hechicero y otras dos más en el nivel 17.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 239,
      name: 'Rasgo de Subclase',
      level: 18,
      class_id: 7,
      description: 'Elige un rasgo de la subclase de Hechicero que elegiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 240,
      name: 'Don Épico',
      level: 19,
      class_id: 7,
      description: 'Obtienes una dote de don épico u otra dote de tu elección para la que cumplas las condiciones. Se recomienda Don del viaje dimensional.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 241,
      name: 'Apoteosis Arcana',
      level: 20,
      class_id: 7,
      description: 'Mientras tengas activo el rasgo Hechicería innata, puedes usar una opción de metamagia en cada uno de tus turnos sin gastar puntos de hechicería.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 242,
      name: 'Invocaciones Sobrenaturales',
      level: 1,
      class_id: 11,
      description: 'Has desenterrado invocaciones sobrenaturales, fragmentos de conocimiento prohibido que te imbuyen de una capacidad mágica perpetua o de otros saberes. Obtienes una invocación de tu elección, como Pacto del grimorio. Las invocaciones se detallan más adelante en la descripción de esta clase, en el apartado “Opciones de invocación sobrenatural”.\n- Requisitos: Si una invocación tiene un requisito, debes cumplirlo para poder aprenderla. Por ejemplo, si una invocación te pide un nivel 5 o superior de brujo, podrás seleccionar esa invocación cuando alcances ese nivel de brujo.\n- Sustituir y conseguir invocaciones. Cada vez que subas un nivel de brujo, puedes sustituir una de tus invocaciones por otra para la que cumplas las condiciones. No puedes sustituir una invocación si es un requisito de otra invocación que tengas. Obtienes más invocaciones de tu elección cuando alcanzas ciertos niveles de brujo, como se muestra en la columna “Invocaciones” de la tabla “Rasgos de brujo”. No puedes elegir la misma invocación más de una vez salvo que la descripción indique algo diferente.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 243,
      name: 'Magia del Pacto',
      level: 1,
      class_id: 11,
      description: 'Has sellado un pacto con una entidad misteriosa mediante una ceremonia ocultista para obtener poderes mágicos. Ese ente es una voz en las sombras y no tienes clara su identidad, pero el don que te ofrece sí que lo conoces: te ha dado la capacidad de lanzar conjuros. La información presentada a continuación detalla cómo usar esas reglas con los conjuros de brujo, que encontrarás más adelante en la lista de conjuros de brujo de la descripción de la clase.\n- Trucos: Conoces dos trucos de brujo de tu elección. Se recomiendan descarga sobrenatural y prestidigitación. Cada vez que subas un nivel de brujo, puedes sustituir uno de tus trucos de este rasgo por otro truco de brujo de tu elección. Cuando alcanzas los niveles 4 y 10 de brujo, aprendes otro truco de brujo de tu elección, como se muestra en la columna “Trucos” de la tabla “Rasgos de brujo”.\n- Espacios de conjuro: La tabla “Rasgos de brujo” muestra cuántos espacios de conjuro tienes para lanzar tus conjuros de brujo de los niveles 1 a 5. La tabla también te indica de qué nivel son dichos espacios, todos los cuales son del mismo nivel. Recuperas todos los espacios utilizados de Magia del pacto tras finalizar un descanso corto o largo. Por ejemplo, en el nivel 5 de brujo tienes dos espacios de conjuro de nivel 3. Para lanzar el conjuro de nivel 1 rayo de hechicería, deberás gastar uno de esos espacios y lo lanzarás como un conjuro de nivel 3.\n- Conjuros preparados de nivel 1 y superiores: Preparas una serie de conjuros de nivel 1 y superiores, que son los que podrás lanzar con este rasgo. Para empezar, elige dos conjuros de brujo de nivel 1. Se recomiendan hechizar persona y maleficio. El número de conjuros de tu lista aumenta conforme subes de nivel de brujo, como se muestra en la columna “Conjuros preparados” de la tabla “Rasgos de brujo”. Cuando ese número aumente, elige conjuros de brujo adicionales hasta que el número de conjuros de tu lista coincida con el número de la tabla. Los conjuros que elijas deben ser de un nivel igual o inferior al que aparece en la columna “Nivel de los espacios” para tu nivel. Cuando alcanzas el nivel 6, por ejemplo, aprendes un nuevo conjuro de brujo que puede ser de los niveles 1 a 3. Si otro rasgo de brujo te proporciona conjuros que siempre tienes preparados, esos conjuros no cuentan para el total que puedes preparar con este rasgo, pero sí que cuentan como conjuros de brujo para ti.\n- Cambiar los conjuros preparados: Cada vez que subas un nivel de brujo, puedes sustituir un conjuro de tu lista por otro conjuro de brujo de un nivel adecuado.\n- Aptitud mágica. El Carisma es tu aptitud mágica en lo que respecta a tus conjuros de brujo.\n- Canalizador mágico. Puedes utilizar un canalizador arcano como canalizador mágico para tus conjuros de brujo. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 244,
      name: 'Astucia Mágica',
      level: 2,
      class_id: 11,
      description: 'Puedes llevar a cabo un rito esotérico durante 1 minuto. Al terminarlo, recuperas una cantidad de espacios de conjuro utilizados de Magia del pacto igual o inferior a la mitad de tu máximo (redondeando hacia arriba). Cuando uses este rasgo, no podrás volver a hacerlo hasta que finalices un descanso largo.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 245,
      name: 'Subclase de Brujo',
      level: 3,
      class_id: 11,
      description: 'Consigues una subclase de brujo de tu elección. Las subclases del patrón celestial, el patrón feérico, el patrón infernal y el patrón primigenio se detallan tras la descripción de esta clase. Una subclase es una especialización que te proporciona rasgos cuando alcanzas ciertos niveles de brujo. De aquí en adelante, obtienes todos los rasgos de tu subclase que sean de tu nivel de brujo e inferiores.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 246,
      name: 'Mejora de Característica',
      level: 4,
      class_id: 11,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 247,
      name: 'Rasgo de Subclase',
      level: 6,
      class_id: 11,
      description: 'Elige un rasgo de la subclase de Brujo que elegiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 248,
      name: 'Mejora de Característica',
      level: 8,
      class_id: 11,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 249,
      name: 'Contactar Patrón',
      level: 9,
      class_id: 11,
      description: 'Antes solías ponerte en contacto con tu patrón a través de intermediarios. Ahora puedes comunicarte directamente, ya que siempre tienes el conjuro contactar con otro plano preparado. Con este rasgo, puedes lanzar el conjuro sin gastar un espacio de conjuro para contactar con tu patrón y superas automáticamente la tirada de salvación del conjuro. Cuando lances el conjuro con este rasgo, no podrás volver a hacerlo de esta forma hasta que finalices un descanso largo.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 250,
      name: 'Rasgo de Subclase',
      level: 10,
      class_id: 11,
      description: 'Elige un rasgo de la subclase de Brujo que elegiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 251,
      name: 'Arcanum Místico (conjuro de nivel 6)',
      level: 11,
      class_id: 11,
      description: 'Tu patrón te recompensa con un secreto mágico denominado arcanum. Escoge uno de los conjuros de brujo de nivel 6 como este arcanum. Puedes lanzar tu conjuro de arcanum una vez sin gastar un espacio de conjuro y debes finalizar un descanso largo antes de poder volver a lanzarlo de este modo. Obtendrás más conjuros de brujo de tu elección que podrás lanzar de esta forma cuando alcances los niveles 13 (conjuro de nivel 7), 15 (conjuro de nivel 8) y 17 (conjuro de nivel 9) de brujo, como se muestra en la tabla “Rasgos de brujo”. Recuperas todos los usos de tu Arcanum místico tras finalizar un descanso largo. Siempre que subas un nivel de brujo, puedes sustituir uno de tus conjuros de arcanum por otro conjuro de brujo del mismo nivel.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 252,
      name: 'Mejora de Característica',
      level: 12,
      class_id: 11,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 253,
      name: 'Arcanum Místico (conjuro de nivel 7)',
      level: 13,
      class_id: 11,
      description: 'Tu patrón te recompensa con un secreto mágico denominado arcanum. Escoge uno de los conjuros de brujo de nivel 6 como este arcanum. Puedes lanzar tu conjuro de arcanum una vez sin gastar un espacio de conjuro y debes finalizar un descanso largo antes de poder volver a lanzarlo de este modo. Obtendrás más conjuros de brujo de tu elección que podrás lanzar de esta forma cuando alcances los niveles 13 (conjuro de nivel 7), 15 (conjuro de nivel 8) y 17 (conjuro de nivel 9) de brujo, como se muestra en la tabla “Rasgos de brujo”. Recuperas todos los usos de tu Arcanum místico tras finalizar un descanso largo. Siempre que subas un nivel de brujo, puedes sustituir uno de tus conjuros de arcanum por otro conjuro de brujo del mismo nivel.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 254,
      name: 'Rasgo de Subclase',
      level: 14,
      class_id: 11,
      description: 'Elige un rasgo de la subclase de Brujo que elegiste.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 255,
      name: 'Arcanum Místico (conjuro de nivel 8)',
      level: 15,
      class_id: 11,
      description: 'Tu patrón te recompensa con un secreto mágico denominado arcanum. Escoge uno de los conjuros de brujo de nivel 6 como este arcanum. Puedes lanzar tu conjuro de arcanum una vez sin gastar un espacio de conjuro y debes finalizar un descanso largo antes de poder volver a lanzarlo de este modo. Obtendrás más conjuros de brujo de tu elección que podrás lanzar de esta forma cuando alcances los niveles 13 (conjuro de nivel 7), 15 (conjuro de nivel 8) y 17 (conjuro de nivel 9) de brujo, como se muestra en la tabla “Rasgos de brujo”. Recuperas todos los usos de tu Arcanum místico tras finalizar un descanso largo. Siempre que subas un nivel de brujo, puedes sustituir uno de tus conjuros de arcanum por otro conjuro de brujo del mismo nivel.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 256,
      name: 'Mejora de Característica',
      level: 16,
      class_id: 11,
      description: 'Obtienes la dote Mejora de Característica u otra dote de tu elección para la que cumplas las condiciones.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 257,
      name: 'Arcanum Místico (conjuro de nivel 9)',
      level: 17,
      class_id: 11,
      description: 'Tu patrón te recompensa con un secreto mágico denominado arcanum. Escoge uno de los conjuros de brujo de nivel 6 como este arcanum. Puedes lanzar tu conjuro de arcanum una vez sin gastar un espacio de conjuro y debes finalizar un descanso largo antes de poder volver a lanzarlo de este modo. Obtendrás más conjuros de brujo de tu elección que podrás lanzar de esta forma cuando alcances los niveles 13 (conjuro de nivel 7), 15 (conjuro de nivel 8) y 17 (conjuro de nivel 9) de brujo, como se muestra en la tabla “Rasgos de brujo”. Recuperas todos los usos de tu Arcanum místico tras finalizar un descanso largo. Siempre que subas un nivel de brujo, puedes sustituir uno de tus conjuros de arcanum por otro conjuro de brujo del mismo nivel.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 258,
      name: 'Don Épico',
      level: 19,
      class_id: 11,
      description: 'Obtienes una dote de don épico u otra dote de tu elección para la que cumplas las condiciones. Se recomienda Don del destino.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 259,
      name: 'Maestro Sobrenatural',
      level: 20,
      class_id: 11,
      description: 'Cuando empleas tu rasgo Astucia mágica, recuperas todos los espacios de conjuro utilizados de Magia del pacto.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Features', null, {});
  }
};
