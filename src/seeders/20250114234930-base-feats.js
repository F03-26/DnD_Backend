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
    },
   {
      id: 2,
      name: 'Artesano',
      category: 'Origen',
      prerequisite: null,
      benefits: 'Competencia en herramientas: Ganas competencia en tres herramientas de artesano a tu elección.;Descuento: Cuando compres un objeto no mágico, recibes un descuento del 20%.;Fabricación rápida: Cuando termines un Descanso Largo, puedes fabricar un objeto de equipo, siempre que tengas la herramienta de artesano asociada al objeto y la competencia para utilizar la herramienta. El objeto dura hasta la próxima vez que termines otro Descanso Largo, luego el objeto se destruye.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 3,
      name: 'Sanador',
      category: 'Origen',
      prerequisite: null,
      benefits: 'Médico en batalla: Si tienes útiles de sanador, puedes gastar un uso de ellos para aplicárselo a una criatura a 5 pies de ti como una Acción. Esa criatura puede usar un Dado de Golpe, y tú tiras el dado. La criatura recuupera puntos de golpe iguales a lo que obtengas en el dado más tu bonificador por competencia.;Volver a tirar curación: Cuando tires un dado para determinar el número de puntos de golpe que recuperas con un Conjuro o con el beneficio de Médico en batalla de esta dote, puedes volver a tirar el  dado si sale 1, y debes usar el nuevo tiro.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 4,
      name: 'Afortunado',
      category: 'Origen',
      prerequisite: null,
      benefits: 'Puntos de suerte: Tienes un número de Puntos de suerte igual a tu bonificador por competencia y puedes usar los puntos en los otros beneficios. Recuperas tus Puntos de suerte usados cuando terminas un Descanso Largo.;Ventaja: Cuando tiras un d20 por una prueba, puedes usar 1 Punto de suerte para darte Ventaja en el tiro.;Desventaja: Cuando una criatura tira un d20 para una tirada de ataque contra ti, puedes usar 1 Punto de suerte para imponer desventaja en la tirada.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 5,
      name: 'Iniciado en la magia',
      category: 'Origen',
      prerequisite: null,
      benefits: 'Dos trucos: Puedes aprender dos Trucos a tu elección de la lista de Conjuros del Clérigo, Druida o Mago. Tu habilidad para lanzar conjuros para los conjuros de esta dote es Inteligencia, Sabiduría o Carisma (lo eliges cuando selecciones esta dote).;Conjuro nivel 1: Escoge un conjuro de nivel 1 de la misma lista de la cual seleccionaste los trucos para esta dote.  Siempre tendrás este conjuro preparado. Puedes lanzarlo una vez sin tener un espacio de conjuro, y recuperas la habilidad de lanzarlo de esta forma una vez que terminas un Descanso Largo. También puedes lanzar el conjuro usando cualquier espacio de conjuro que tengas.;Cambio de conjuro: Cuando subes de nivel, puedes reemplazar uno de tus conjuros a tu elección para esta dote con un conjuro diferente del mismo nivel de la lista de conjuros elegida.;Repetible: Puedes tomar esta dote más de una vez, pero debes elegir una lista de conjuros distinta cada vez.',
      repeatable: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 6,
      name: 'Músico',
      category: 'Origen',
      prerequisite: null,
      benefits: 'Entrenamiento en instrumentos: Obtienes competencia en 3 instrumentos a tu elección.;Canción alentadora: Cuando terminas un Descanso Corto o Largo, puedes tocar instrumento musical con el que tengas competencia y darle Inspiración heróica a los aliados que escuchen la canción. El número de aliados que pueden ser afectados por este efecto equivale a tu bonificador por competencia.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 7,
      name: 'Atacante salvaje',
      category: 'Origen',
      prerequisite: null,
      benefits: 'Has entrenado para dar golpes particularmente dañinos. Una vez por turno, cuando golpeas a un blanco con un arma, puedes tirar el dado de daño del arma dos veces y usar cualquier tiro contra el blanco.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 8,
      name: 'Habilidoso',
      category: 'Origen',
      prerequisite: null,
      benefits: 'Obtienes competencia en cualquier combinación de tres habilidades o herramientas a tu elección.;Repetible: Puedes tomar esta dote más de una vez.',
      repeatable: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 9,
      name: 'Luchador de taberna',
      category: 'Origen',
      prerequisite: null,
      benefits: 'Golpe desarmado mejorado: Cuando golpeas en un ataque desarmado y haces daño, puedes hacer daño Contundente igual a 1d4 más tu modificador de Fuerza en lugar de hacer el daño normal de un ataque desarmado.;Volver a tirar daño: Cuando tires un dado por un ataque desarmado, puedes volver a tirar el dado si sacas un 1, y debes usar este nuevo tiro.;Armamento improvisado: Tienes competencia en armas improvisadas.;Empuje: Cuando golpeas a una criatura con un ataque desarmado como parte de una acción de ataque en tu turno, puedes hacer daño a tu objetivo y además empujarlo a 5 pies más lejos de ti. Puedes usar este beneficio sólo 1 vez por turno.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 10,
      name: 'Duro',
      category: 'Origen',
      prerequisite: null,
      benefits: 'Tus puntos de golpe máximos incrementan por una cantidad igual al doble de tu nivel de personaje cuando obtienes esta dote. Luego, cada vez que subes de nivel, tus puntos de golpe máximos incrementan en 2 puntos adicionales.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 11,
      name: 'Afortunado',
      category: 'Origen',
      prerequisite: null,
      benefits: 'Puntos de suerte: Tienes una cantidad de puntos de suerte igual a tu bonificador por competencia y puedes gastarlos en los siguientes beneficios. Recuperas los puntos de suerte gastados tras finalizar un descanso largo.; Ventaja: Cuando tires 1420 para realizar una prueba con d20, puedes gastar 1 punto de suerte para otorgarte ventaja en la tirada.; Desventaja: Cuando una criatura tire 1420 en una tirada de ataque contra ti, puedes gastar 1 punto de suerte para imponerle desventaja en esa tirada.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 12,
      name: 'Fabricante',
      category: 'Origen',
      prerequisite: null,
      benefits: 'Competencia con herramientas: Ganas competencia con tres herramientas de artesano que elijas de la tabla “Fabricación rápida”.;Descuento: Cuando compres un objeto no mágico, conseguirás un 20 % de descuento.;  Fabricación rápida: Tras finalizar un descanso largo, puedes fabricar un objeto de la tabla “Fabricación rápida” si posees las herramientas de artesano asociadas a ese objeto y tienes competencia con ellas. El objeto durará hasta que acabes otro descanso largo; en ese momento, se deshará.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 13,
      name: 'Matón de taberna',
      category: 'Origen',
      prerequisite: null,
      benefits: 'Ataque sin armas mejorado: Cuando aciertes con tu ataque sin armas y causes daño, puedes infligir una cantidad de daño contundente igual a 1d4 más tu modificador por Fuerza en lugar del daño habitual de un ataque sin armas.;Repetir tiradas de daño: Siempre que tires un dado de daño para un ataque sin armas, podrás volver a tirarlo si sacas un 1 y deberás utilizar el nuevo resultado.;Armas improvisadas: Tienes competencia con las armas improvisadas.;Empujar: Cuando aciertes a una criatura con un ataque sin armas como parte de la acción de atacar en tu turno, causarás daño al objetivo y también podrás empujarlo 1,5 m respecto a ti. Solo puedes usar este beneficio una vez por turno.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 14,
      name: 'Acechador',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Destreza 13 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Destreza en 1, hasta un máximo de 20.;Visión ciega: Tienes visión ciega hasta 3 m.;Niebla de guerra: Aprovechas las distracciones de la batalla, lo que te da ventaja en las pruebas de Destreza (Sigilo) que hagas como parte de la acción de esconderse durante el combate.;En la sombra: Si haces una tirada de ataque mientras estás escondido y no acierta, la tirada no revelará tu ubicación.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 15,
      name: 'Actor',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Carisma 13 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Carisma en 1, hasta un máximo de 20.;Suplantación: Mientras te disfrases de alguien real o ficticio, tendrás ventaja en las pruebas de Carisma (Engaño o Interpretación) para convencer a los demás de que eres esa persona.;Imitación: Puedes imitar el sonido de otras criaturas, incluida el habla. Una criatura que escuche la imitación deberá superar una prueba de Sabiduría (Perspicacia) para darse cuenta de que es una farsa (CD 8 más tu modificador por Carisma y tu bonificador por competencia).',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 16,
      name: 'Apresador',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Fuerza o Destreza 13 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Fuerza o Destreza en 1, hasta un máximo de 20.;Golpear y agarrar: Cuando aciertes a una criatura con un ataque sin armas como parte de la acción de atacar en tu turno, puedes utilizar las opciones de daño y agarre. Solo puedes usar este beneficio una vez por turno.;Ventaja al atacar: Tienes ventaja en las tiradas de ataque contra una criatura a la que estés agarrando.;Luchador rápido: No tienes que invertir movimiento adicional para mover a una criatura a la que estés agarrando si la criatura es de tu tamaño o más pequeña.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 17,
      name: 'Atacante a la carga',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Fuerza o Destreza 13 o más',
      benefits: 'Mejora de característica. Aumenta tu puntuación de Fuerza o Destreza en 1, hasta un máximo de 20.;Carrera mejorada: Cuando realizas la acción de correr, tu velocidad aumenta 3 m para esa acción.;Ataque con carga: Si te mueves al menos 3 m en línea recta hacia un objetivo justo antes de acertarle con una tirada de ataque cuerpo a cuerpo como parte de la acción de atacar, elige uno de los siguientes efectos: consigues un 1d8 adicional en la tirada de daño del ataque o empujas al objetivo hasta 3 m si su tamaño está, como mucho, una categoría por encima de la tuya. Puedes usar este beneficio solo una vez en cada uno de tus turnos.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 18,
      name: 'Atleta',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Fuerza o Destreza 13 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Fuerza o Destreza en 1, hasta un máximo de 20.;Velocidad trepando: Obtienes una velocidad trepando igual a tu velocidad.;Levantarse de un salto: Si tienes el estado de derribado, puedes ponerte de pie con solo 1,5 m de movimiento.;Saltar: Puedes hacer un salto de longitud o de altura con carrerilla tras moverte solo 1,5 m.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 19,
      name: 'Azote de magos',
      category: 'General',
      prerequisite: 'Nivel 4 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Fuerza o Destreza en 1, hasta un máximo de 20.;Anticoncentración: Cuando dañes a una criatura que se esté concentrando, tendrá desventaja en la tirada de salvación que haga para mantener la concentración.;Mente robusta: Si fallas una tirada de salvación de Inteligencia, Sabiduría o Carisma, puedes hacer que la superes. Cuando uses este beneficio, no podrás volver a hacerlo hasta que finalices un descanso corto o largo.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 20,
      name: 'Centinela',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Fuerza o Destreza 13 o más',
      benefits: 'Mejora de característica.;Aumenta tu puntuación de Fuerza o Destreza en 1, hasta un máximo de 20.;Guardián: Inmediatamente después de que una criatura que esté a 1,5 m o menos de ti realice la acción de destrabarse o acierte a un objetivo que no seas tú con un ataque, podrás hacer un ataque de oportunidad contra a esa criatura.;Detener: Cuando aciertes a una criatura con un ataque de oportunidad, su velocidad pasará a ser 0 para el resto del turno actual.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 21,
      name: 'Chef',
      category: 'General',
      prerequisite: 'Nivel 4 o más',
      benefits: 'Mejora de característica. Aumenta tu puntuación de Constitución o Sabiduría en 1, hasta un máximo de 20.;Útiles de cocinero: También obtienes competencia con útiles de cocinero si aún no la tienes.;Comida reconstituyente: Como parte de un descanso corto, puedes preparar una comida especial, siempre que tengas a mano los ingredientes y útiles de cocinero. Puedes preparar suficiente de esta comida como para una cantidad de criaturas igual a 4 más tu bonificador por competencia. Al final del descanso corto, cualquier criatura que coma la comida y gaste uno o más dados de golpe para recuperar puntos de golpe recuperará 1d8 puntos de golpe adicionales.;Tentempiés tonificantes: Con 1 hora de trabajo o tras finalizar un descanso largo, puedes preparar una cantidad de tentempiés igual a tu bonificador por competencia si tienes ingredientes y útiles de cocinero a mano. Estos aperitivos especiales duran 8 horas una vez preparados. Una criatura puede usar una acción adicional para comerse uno de estos refrigerios y obtener una cantidad de puntos de golpe temporales igual a tu bonificador por competencia. ',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 22,
      name: 'Combatiente con dos armas',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Fuerza o Destreza 13 o más',
      benefits: 'Manejo doble mejorado: Cuando lleves a cabo la acción de atacar en tu turno y ataques con un arma que tenga la propiedad “ligera”, podrás realizar un ataque extra como acción adicional más adelante en el mismo turno con un arma distinta, que deberá ser un arma cuerpo a cuerpo sin la propiedad “a dos manos”. No sumarás tu modificador por característica al daño del ataque extra salvo que el modificador sea negativo.;Desenvainar rápido: Desenvainas o envainas dos armas sin la propiedad “a dos manos” cuando normalmente solo podrías desenvainar o envainar una.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 23,
      name: 'Combatiente montado',
      category: 'General',
      prerequisite: 'Nivel 4 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Fuerza, Destreza o Sabiduría en 1, hasta un máximo de 20.;Golpe montado: Mientras estés montando, tienes ventaja en las tiradas de ataque contra las criaturas que no estén montando situadas a 1,5 m o menos de tu montura si su tamaño es, al menos, una categoría inferior al de la montura.;Esquivar de un salto: Si tu montura sufre un efecto que le permita hacer una tirada de salvación de Destreza para sufrir solo la mitad de daño, no recibe ningún daño si la supera y solo sufre la mitad si la falla. Para que la montura consiga este beneficio, debes estar montándola y ninguno de los dos puede tener el estado de incapacitado.;Girar bruscamente: Mientras estés montando, puedes hacer que un ataque que acierte a tu montura te acierte a ti en su lugar si no tienes el estado de incapacitado.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 24,
      name: 'Duelista defensivo',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Destreza 13 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Destreza en 1, hasta un máximo de 20.;Parada: Si empuñas un arma sutil y otra criatura te acierta con un ataque cuerpo a cuerpo, puedes llevar a cabo una reacción para sumar tu bonificador por competencia a tu clase de armadura, lo que podría hacer que el ataque falle. Ganas este bonificador a tu CA contra los ataques cuerpo a cuerpo hasta el principio de tu siguiente turno.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 25,
      name: 'Entrenamiento con armas marciales',
      category: 'General',
      prerequisite: 'Nivel 4 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Fuerza o Destreza en 1, hasta un máximo de 20.;Competencia con armas: Obtienes competencia con armas marciales.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 26,
      name: 'Envenenador',
      category: 'General',
      prerequisite: 'Nivel 4 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Destreza o Inteligencia en 1, hasta un máximo de 20.;Veneno potente: Cuando hagas una tirada de daño que cause daño de veneno, esta ignorará la resistencia a ese daño.;Preparar veneno: Ganas competencia con los útiles de envenenador. Con 1 hora de trabajo usando los útiles y gastando materiales por un valor de 50 po, puedes crear una cantidad de dosis de veneno igual a tu bonificador por competencia. Como acción adicional, puedes aplicar una dosis de veneno en un arma o unidad de munición. Una vez aplicado el veneno, este conserva su potencia durante 1 minuto o hasta que inflijas daño con el objeto envenenado, lo que suceda antes. Cuando una criatura reciba daño del objeto envenenado, deberá superar una tirada de salvación de Constitución (CD 8 más el modificador de la característica aumentada por esta dote y tu bonificador por competencia) o recibirá 2d8 de daño de veneno y tendrá el estado de envenenada hasta el final de tu siguiente turno.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 27,
      name: 'Experto en ballestas',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Destreza 13 o más',
      benefits: '',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 28,
      name: 'Experto en habilidades',
      category: 'General',
      prerequisite: 'Nivel 4 o más',
      benefits: 'Mejora de característica: Aumenta una puntuación de característica de tu elección en 1, hasta un máximo de 20.;Competencia en una habilidad: Ganas competencia en una habilidad de tu elección.;Pericia: Elige una habilidad en la que tengas competencia pero te falte pericia. Ganas pericia en dicha habilidad.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 29,
      name: 'Influencia feérica',
      category: 'General',
      prerequisite: 'Nivel 4 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Inteligencia, Sabiduría o Carisma en 1, hasta un máximo de 20.;Magia feérica: Elige un conjuro de nivel 1 de las escuelas mágicas de adivinación o encantamiento. Siempre tendrás ese conjuro y el conjuro paso brumoso preparados. Puedes lanzar cada uno de estos conjuros sin gastar un espacio de conjuro. Cuando lances cualquiera de esos conjuros de esta forma, no podrás volver a lanzar ese conjuro de este modo hasta que finalices un descanso largo. También puedes lanzar estos conjuros usando espacios de conjuro que tengas del nivel apropiado. La aptitud mágica de los conjuros es la característica aumentada por esta dote.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 30,
      name: 'Influencia sombría',
      category: 'General',
      prerequisite: 'Nivel 4 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Inteligencia, Sabiduría o Carisma en 1, hasta un máximo de 20.;Magia de las sombras: Elige un conjuro de nivel 1 de las escuelas mágicas de ilusionismo o nigromancia. Siempre tendrás ese conjuro y el conjuro invisibilidad preparados. Puedes lanzar cada uno de estos conjuros sin gastar un espacio de conjuro. Cuando lances cualquiera de esos conjuros de esta forma, no podrás volver a lanzar ese conjuro de este modo hasta que finalices un descanso largo. También puedes lanzar estos conjuros usando espacios de conjuro que tengas del nivel apropiado, La aptitud mágica de los conjuros es la característica aumentada por esta dote.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 31,
      name: 'Lanzador en combate',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Rasgo Lanzamiento de conjuros o Magia del pacto',
      benefits: 'Mejora de característica. Aumenta tu puntuación de Inteligencia, Sabiduría o Carisma en 1, hasta un máximo de 20.;Concentración: Tienes ventaja en las tiradas de salvación de Constitución que realices para mantener la concentración.;Conjuro reactivo: Cuando una criatura provoque un ataque de oportunidad al salir de tu alcance, puedes llevar a cabo una reacción para lanzar un conjuro sobre la criatura en lugar de hacer un ataque de oportunidad. El conjuro debe tener un tiempo de lanzamiento de una acción y solo puede hacer objetivo a esa criatura.;Componentes somáticos: Puedes ejecutar los componentes somáticos de los conjuros incluso aunque tengas armas o un escudo en una o ambas manos.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 32,
      name: 'Lanzador preciso',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Rasgo Lanzamiento de conjuros o Magia del pacto',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Inteligencia, Sabiduría o Carisma en 1, hasta un máximo de 20.;Sortear la cobertura: Tus tiradas de ataque con conjuros ignoran las coberturas media y tres cuartos.;Lanzar conjuros cuerpo a cuerpo: Estar a 1,5 m o menos de un enemigo no impone desventaja en tus tiradas de ataque con conjuros.;Alcance aumentado: Cuando lances un conjuro que tenga un alcance de al menos 3 m y requiera una tirada de ataque, puedes aumentar el alcance del conjuro en 18 m.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 33,
      name: 'Lanzador ritual',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Inteligencia, Sabiduría o Carisma 13 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Inteligencia, Sabiduría o Carisma en 1, hasta un máximo de 20.;Conjuros rituales: Elige una cantidad de conjuros igual a tu bonificador por competencia. Deben ser de nivel 1 y estar marcados como “ritual”. Siempre tendrás esos conjuros preparados y podrás lanzarlos con cualquier espacio de conjuro que tengas. La aptitud mágica de los conjuros es la característica aumentada por esta dote. Siempre que tu bonificador por competencia aumente, puedes añadir otro conjuro de nivel 1 marcado como “ritual” a los conjuros que siempre tienes preparados con este rasgo.;Ritual rápido: Con este beneficio, puedes lanzar un conjuro ritual que tengas preparado usando su tiempo de lanzamiento habitual en lugar del plazo más largo para un ritual. Hacer esto no requiere un espacio de conjuro. Cuando lances el conjuro de esta forma, no podrás volver a utilizar este beneficio hasta que finalices un descanso largo.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 34,
      name: 'Líder inspirador',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Sabiduría o Carisma 13',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Sabiduría o Carisma en 1, hasta un máximo de 20.;Interpretación fortalecedora: Tras finalizar un descanso corto o largo, puedes hacer una interpretación inspiradora: un discurso, una canción o un baile. Cuando lo hagas, elige hasta seis aliados (entre los que puedes estar tú) que estén a 9 m o menos de ti y que hayan presenciado la interpretación. Las criaturas elegidas ganan una cantidad de puntos de golpe temporales igual a tu nivel de personaje más el modificador de la característica que has aumentado con esta dote.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 35,
      name: 'Ligeramente acorazado',
      category: 'General',
      prerequisite: 'Nivel 4 o más',
      benefits: 'Mejora de característica. Aumenta tu puntuación de Fuerza o Destreza en 1, hasta un máximo de 20.;Entrenamiento con armaduras: Obtienes entrenamiento con armaduras ligeras y escudos.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 36,
      name: 'Maestro de armas',
      category: 'General',
      prerequisite: 'Nivel 4 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Fuerza o Destreza en 1, hasta un máximo de 20.;Propiedad de maestría: Tu entrenamiento con armas te permite utilizar la propiedad de maestría con un tipo de arma sencilla o marcial de tu elección, siempre que tengas competencia con ella. Tras finalizar un descanso largo, puedes cambiar el tipo de arma elegida por otra que cumpla el requisito.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 37,
      name: 'Maestro en armaduras medias',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Entrenamiento en armaduras medias',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Fuerza o Destreza en 1, hasta un máximo de 20.;Portador diestro: Mientras lleves puesta una armadura media, puedes sumar 3 en lugar de 2 atu CA si tu puntuación de Destreza es de 16 o más.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 38,
      name: 'Maestro en armaduras pesadas',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Entrenamiento en armaduras pesadas',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Constitución o Fuerza en 1, hasta un máximo de 20.;Reducción de daño: Cuando te acierte un ataque mientras lleves puesta una armadura pesada, cualquier daño contundente, cortante y perforante que recibas se reducirá en una cantidad igual a tu bonificador por competencia.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 39,
      name: 'Maestro en armas de asta',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Fuerza o Destreza 13 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Destreza o Fuerza en 1, hasta un máximo de 20.;Golpe con asta: Inmediatamente después de que realices la acción de atacar con un bastón, una lanza o un arma que tenga las propiedades “gran alcance” y “pesada”, puedes usar una acción adicional para hacer un ataque cuerpo a cuerpo con el otro extremo del arma. El arma causa daño contundente y su dado de daño para este ataque es un d4.;Golpe reactivo: Mientras empuñes un bastón, una lanza o un arma que tenga las propiedades “gran alcance” y “pesada”, podrás llevar a cabo una reacción para hacer un ataque cuerpo a cuerpo contra una criatura que entre dentro del alcance que tengas con esa arma.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 40,
      name: 'Maestro en armas pesadas',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Fuerza 13 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Fuerza en 1, hasta un máximo de 20.;Maestría con armas pesadas: Cuando golpeas a una criatura con un arma que tenga la propiedad “pesada” como parte de la acción de atacar en tu turno, puedes hacer que el arma cause daño adicional al objetivo. Este daño adicional es igual a tu bonificador por competencia.;Avasallar: Inmediatamente después de causar un crítico con un arma cuerpo a cuerpo o de reducir a una criatura a 0 puntos de golpe con una, puedes hacer un ataque con el mismo arma como acción adicional.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 41,
      name: 'Maestro en escudos',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Entrenamiento con escudos',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Fuerza en 1, hasta un máximo de 20.;Golpe con escudo: Si atacas a una criatura que esté a 1,5 m o menos de ti como parte de la acción de atacar y le aciertas con un arma cuerpo a cuerpo, inmediatamente podrás golpearla con tu escudo si lo llevas equipado y obligarla a realizar una tirada de salvación de Fuerza (CD 8 más tu modificador por Fuerza y tu bonificador por competencia). Si la falla, podrás empujar al objetivo 1,5 m respecto a ti o hacer que tenga el estado de derribado (a tu elección). Puedes usar este beneficio solo una vez en cada uno de tus turnos.;Interponer escudo: Si sufres un efecto que te permita hacer una tirada de salvación de Destreza para sufrir solo la mitad de daño, podrás llevar a cabo una reacción para no recibir daño alguno si la superas y estás embrazando un escudo.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 42,
      name: 'Mejora de características',
      category: 'General',
      prerequisite: 'Nivel 4 o más',
      benefits: 'Aumenta en 2 una puntuación de característica que elijas o aumenta dos en 1 cada una. Esta dote no puede aumentar una puntuación de característica por encima de 20.',
      repeatable: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 43,
      name: 'Mente aguda',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Inteligencia 13 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Inteligencia en 1, hasta un máximo de 20.;Sabiduría popular: Elige una de las siguientes habilidades, Conocimiento arcano, Historia, Investigación, Naturaleza o Religión. Si no tienes competencia en la habilidad elegida, la consigues, y si ya la tienes, ganas pericia en ella.;Estudio rápido: Puedes llevar a cabo la acción de estudiar como acción adicional.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 44,
      name: 'Moderadamente acorazado',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Entrenamiento con armaduras ligeras',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Fuerza o Destreza en 1, hasta un máximo de 20.;Entrenamiento con armaduras: Obtienes entrenamiento con armaduras medias.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 45,
      name: 'Muy acorazado',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Entrenamiento en armaduras medias',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Constitución o Fuerza en 1, hasta un máximo de 20.;Entrenamiento con armaduras: Obtienes entrenamiento con armaduras pesadas.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 46,
      name: 'Observador',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Inteligencia o Sabiduría 13 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Inteligencia o Sabiduría en 1, hasta un máximo de 20.;Observador perspicaz: Elige una de las siguientes habilidades, Investigación, Percepción o Perspicacia. Si no tienes competencia en la habilidad elegida, la consigues, y si ya la tienes, ganas pericia en ella.;Búsqueda rápida: Puedes llevar a cabo la acción de buscar como acción adicional.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 47,
      name: 'Perforador',
      category: 'General',
      prerequisite: 'Nivel 4 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Fuerza o Destreza en 1, hasta un máximo de 20.;Horadar: Una vez por turno, cuando aciertes a una criatura con un ataque que cause daño perforante, podrás volver a tirar uno de los dados de daño del ataque y deberás utilizar el nuevo resultado.;Crítico potenciado: Cuando causes un crítico que inflija daño perforante a una criatura, podrás tirar un dado de daño más al determinar el daño perforante adicional que recibe el objetivo.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 48,
      name: 'Rebanador',
      category: 'General',
      prerequisite: 'Nivel 4 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Fuerza o Destreza en 1, hasta un máximo de 20.;Lacerar: Una vez por turno, cuando aciertes a una criatura con un ataque que cause daño cortante, podrás reducir la velocidad del objetivo en 3 m hasta el principio de tu siguiente turno.;Crítico potenciado: Cuando causes un crítico que haga daño cortante a una criatura, esta tendrá desventaja en las tiradas de ataque hasta el principio de tu siguiente turno.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 49,
      name: 'Resiliente',
      category: 'General',
      prerequisite: 'Nivel 4 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Constitución en 1, hasta un máximo de 20.;Desafiar a la muerte: Tienes ventaja en las tiradas de salvación contra muerte.;Recuperación rápida: Como acción adicional, puedes gastar uno de tus dados de puntos de golpe, tirarlo y recuperar una cantidad de puntos de golpe igual al resultado.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 50,
      name: 'Telepático',
      category: 'General',
      prerequisite: 'Nivel 4 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Inteligencia, Sabiduría o Carisma en 1, hasta un máximo de 20.;Habla telepática: Puedes hablarle telepáticamente a cualquier criatura que puedas ver a 18 m o menos de ti. Hablas telepáticamente en un idioma que conoces y la criatura solo te entiende si también conoce dicho idioma. Tu comunicación no concede a la criatura la capacidad de responder telepáticamente.;Detectar pensamientos: Siempre tienes el conjuro detectar pensamientos preparado. Puedes lanzarlo sin gastar un espacio de conjuro ni componentes y debes finalizar un descanso largo antes de poder volver a lanzarlo de este modo. También puedes lanzarlo usando espacios de conjuro que tengas del nivel apropiado. La aptitud mágica del conjuro es la característica aumentada por esta dote.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 51,
      name: 'Telequinético',
      category: 'General',
      prerequisite: 'Nivel 4 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Inteligencia, Sabiduría o Carisma en 1, hasta un máximo de 20.;Telequinesis menor: Aprendes el conjuro mano de mago. Puedes lanzarlo sin componentes verbales o somáticos, puedes hacer que la mano espectral sea invisible y su alcance y la distancia a la que puede estar de ti aumentan en 9 m cuando lo lances. La aptitud mágica del conjuro es la característica aumentada por esta dote.;Empellón telequinético: Como acción adicional, puedes empujar telepáticamente a una criatura que puedas ver a 9 m o menos de ti. Si lo haces, el objetivo deberá superar una tirada de salvación de Fuerza (CD 8 más tu modificador por característica de la puntuación aumentada por esta dota y tu bonificador por competencia) o se moverá 1,5 m hacia ti o lejos de ti.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 52,
      name: 'Tirador de primera',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Destreza 13 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Destreza en 1, hasta un máximo de 20.;Sortear la cobertura: Tus ataques a distancia con armas ignoran las coberturas media y tres cuartos.;Disparar cuerpo a cuerpo: Estar a 1,5 m o menos de un enemigo no impone desventaja en tus tiradas de ataque con armas a distancia.;Tiros lejanos: Al atacar con alcance largo, tus tiradas de ataque no tendrán desventaja con las armas a distancia.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 53,
      name: 'Triturador',
      category: 'General',
      prerequisite: 'Nivel 4 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Fuerza o Constitución en 1, hasta un máximo de 20.;Empujar: Una vez por turno, cuando aciertes a una criatura con un ataque que cause daño contundente, podrás moverla 1,5 m a un espacio sin ocupar, siempre que el tamaño del objetivo esté, como mucho, una categoría por encima de la tuya.;Crítico potenciado: Cuando causes un crítico que inflija daño contundente a una criatura, las tiradas de ataque contra esa criatura tendrán ventaja hasta el principio de tu siguiente turno.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 54,
      name: 'Veloz',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Destreza o Constitución 13 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Destreza o Constitución en 1, hasta un máximo de 20.;Aumento de velocidad: Tu velocidad aumenta en 3 m.;Correr por terreno difícil: Cuando realizas la acción de correr en tu turno, el terreno difícil no te cuesta movimiento adicional durante el resto de ese turno.;Movimiento ágil: Los ataques de oportunidad tienen desventaja contra ti.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 55,
      name: 'Versado en un elemento',
      category: 'General',
      prerequisite: 'Nivel 4 o más, Rasgo Lanzamiento de conjuros o Magia del pacto',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Inteligencia, Sabiduría o Carisma en 1, hasta un máximo de 20.;Dominio de la energía: Elige uno de los siguientes tipos de daño, ácido, frío, fuego, relámpago o trueno. Los conjuros que lances ignoran la resistencia al daño del tipo que elijas. Además, cuando tires el daño de un conjuro que hayas lanzado y cause daño de ese tipo, podrás tratar cualquier 1 en los dados de daño como un 2.',
      repeatable: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 56,
      name: 'Combate con armas a dos manos',
      category: 'Estilo de combate',
      prerequisite: 'Rasgo Estilo de combate',
      benefits: 'Cuando tires el daño para un ataque hecho con un arma cuerpo a cuerpo que empuñas con ambas manos, puedes tratar cualquier 1 o 2 en los dados de daño como un 3. Para obtener este beneficio, el arma debe poseer la propiedad “a dos manos” o “versátil”.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 57,
      name: 'Combate con armas arrojadizas',
      category: 'Estilo de combate',
      prerequisite: 'Rasgo Estilo de combate',
      benefits: 'Cuando aciertas con una tirada de ataque a distancia con un arma que tenga la propiedad “arrojadiza”, obtienes un bonificador de +2 a la tirada de daño.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 58,
      name: 'Combate con dos armas',
      category: 'Estilo de combate',
      prerequisite: 'Rasgo Estilo de combate',
      benefits: 'Cuando haces un ataque extra como resultado de utilizar un arma con la propiedad “ligera”, puedes sumar tu modificador por característica al daño de ese ataque si no lo estás sumando ya al daño.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 59,
      name: 'Combate sin armas',
      category: 'Estilo de combate',
      prerequisite: 'Rasgo Estilo de combate',
      benefits: 'Cuando aciertes con tu ataque sin armas y causes daño, puedes infligir una cantidad de daño contundente igual a 1d6 más tu modificador por Fuerza en lugar del daño habitual de un ataque sin armas. Si no estás empuñando armas ni embrazando un escudo al hacer la tirada de ataque, el d6 se convierte en un d8. Al principio de cada uno de tus turnos, puedes infligir 1d4 de daño contundente a una criatura a la que tengas agarrada.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 60,
      name: 'Defensa',
      category: 'Estilo de combate',
      prerequisite: 'Rasgo Estilo de combate',
      benefits: 'Mientras lleves puesta una armadura ligera, media o pesada, recibes un bonificador de +1 a la clase de armadura.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 61,
      name: 'Duelo',
      category: 'Estilo de combate',
      prerequisite: 'Rasgo Estilo de combate',
      benefits: 'Cuando empuñes un arma cuerpo a cuerpo con una mano y ninguna en la otra, recibes un bonificador de +2 a tus tiradas de daño con esa arma.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 62,
      name: 'Intercepción',
      category: 'Estilo de combate',
      prerequisite: 'Rasgo Estilo de combate',
      benefits: 'Cuando una criatura que puedas ver acierte a otra criatura que esté a 1,5 m o menos de ti con una tirada de ataque, puedes llevar a cabo una reacción para reducir el daño causado al objetivo en 1d10 más tu bonificador por competencia. Para usar esta reacción, debes estar embrazando un escudo o empuñando un arma sencilla o marcial.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 63,
      name: 'Lucha a ciegas',
      category: 'Estilo de combate',
      prerequisite: 'Rasgo Estilo de combate',
      benefits: 'Tienes visión ciega hasta 3 m.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 64,
      name: 'Protección',
      category: 'Estilo de combate',
      prerequisite: 'Rasgo Estilo de combate',
      benefits: 'Cuando una criatura que puedas ver ataque a un objetivo que no seas tú y esté a 1,5 m o menos de ti, puedes llevar a cabo una reacción para interponer tu escudo si estás embrazando uno. Impones desventaja a la tirada de ataque ala que reaccionas y al resto de tiradas de ataque contra el objetivo hasta el principio de tu siguiente turno si permaneces a 1,5 m o menos del objetivo.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 65,
      name: 'Tiro con arco',
      category: 'Estilo de combate',
      prerequisite: 'Rasgo Estilo de combate',
      benefits: 'Recibes un bonificador de +2 a las tiradas de ataque con armas a distancia.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 66,
      name: 'Don de la fortaleza',
      category: 'Don épico',
      prerequisite: 'Nivel 19 o más',
      benefits: 'Mejora de característica: Aumenta una puntuación de característica de tu elección en 1, hasta un máximo de 30.;Salud fortalecida: Tus puntos de golpe máximos aumentan en 40. Además, cada vez que recuperes puntos de golpe, podrás recuperar una cantidad de puntos de golpe adicionales igual a tu modificador por Constitución. Cuando hayas recuperado esos puntos de golpe adicionales, no podrás volver a hacerlo hasta el principio de tu siguiente turno.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 67,
      name: 'Don de la habilidad',
      category: 'Don épico',
      prerequisite: 'Nivel 19 o más',
      benefits: 'Mejora de característica: Aumenta una puntuación de característica de tu elección en 1, hasta un máximo de 30.;Experto polifacético: Ganas competencia en todas las habilidades.;Pericia: Elige una habilidad en la que no tengas pericia. Ganas pericia en esa habilidad.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 68,
      name: 'Don de la pericia en combate',
      category: 'Don épico',
      prerequisite: 'Nivel 19 o más',
      benefits: 'Mejora de característica: Aumenta una puntuación de característica de tu elección en 1, hasta un máximo de 30.;Precisión sin igual: Cuando falles con una tirada de ataque, puedes acertarla. Cuando uses este beneficio, no podrás volver a hacerlo hasta el principio de tu siguiente turno.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 69,
      name: 'Don de la recuperación',
      category: 'Don épico',
      prerequisite: 'Nivel 19 o más',
      benefits: 'Mejora de característica: Aumenta una puntuación de característica de tu elección en 1, hasta un máximo de 30.;Última defensa: Cuando tus puntos de golpe fueran a reducirse a O, puedes quedarte con 1 punto de golpe y recuperar una cantidad de puntos de golpe igual a la mitad de tus puntos de golpe máximos. Cuando uses este beneficio, no podrás volver a hacerlo hasta que finalices un descanso largo.;Recuperar vitalidad: Tienes una reserva de 10d10. Como acción adicional, puedes gastar dados de la reserva, tirarlos y recuperar una cantidad de puntos de golpe igual al resultado total de la tirada. Recuperas todos los dados gastados tras finalizar un descanso largo.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 70,
      name: 'Don de la resistencia a energías',
      category: 'Don épico',
      prerequisite: 'Nivel 19 o más',
      benefits: 'Mejora de característica: Aumenta una puntuación de característica de tu elección en 1, hasta un máximo de 30.;Resistencias a energías: Ganas resistencia a dos de los siguientes tipos de daño, a tu elección, ácido, frío, fuego, necrótico, psíquico, radiante, relámpago, trueno o veneno. Tras finalizar un descanso largo, puedes cambiar de opciones.;Redirigir la energía: Cuando recibas daño de uno de los tipos elegidos con el beneficio de resistencias a energías, puedes llevar a cabo una reacción para dirigir un daño del mismo tipo hacia otra criatura que puedas ver a 18 m o menos de ti que no esté tras cobertura completa. Si lo haces, esa criatura deberá superar una tirada de salvación de Destreza (CD 8 más tu modificador por Constitución y tu bonificador por competencia) o recibirá una cantidad de daño igual a 2d12 más tu modificador por Constitución.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 71,
      name: 'Don de la velocidad',
      category: 'Don épico',
      prerequisite: 'Nivel 19 o más',
      benefits: 'Mejora de característica: Aumenta una puntuación de característica de tu elección en 1, hasta un máximo de 30.;Artista escapista: Como acción adicional, puedes llevar a cabo la acción de destrabarse, lo que también pone fin al estado de agarrado sobre ti.;Celeridad: Tu velocidad aumenta en 9 m.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 72,
      name: 'Don de la visión verdadera',
      category: 'Don épico',
      prerequisite: 'Nivel 19 o más',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Fuerza o Destreza en 1, hasta un máximo de 30.;Superar las defensas: El daño contundente, cortante y perforante que causas siempre ignora la resistencia.;Golpe arrollador: Cuando saques un 20 en el d20 en una tirada de ataque, puedes infligir una cantidad de daño adicional al objetivo igual a la puntuación de característica aumentada con esta dote. El daño adicional es del mismo tipo que el del ataque.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 73,
      name: 'Don del destino',
      category: 'Don épico',
      prerequisite: 'Nivel 19 o más',
      benefits: 'Mejora de característica: Aumenta una puntuación de característica de tu elección en 1, hasta un máximo de 30.;Mejorar el destino: Cuando tú u otra criatura que esté a 18 m o menos de ti superéis o falléis una prueba con d20, puedes tirar 2d4 y aplicar el resultado total como bonificador o penalizador a la tirada del d20. Cuando uses este beneficio, no podrás volver a hacerlo hasta que tires iniciativa o finalices un descanso corto o largo.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 74,
      name: 'Don del espíritu de la noche',
      category: 'Don épico',
      prerequisite: 'Nivel 19 o más',
      benefits: 'Mejora de característica: Aumenta una puntuación de característica de tu elección en 1, hasta un máximo de 30.;Fusionarse con las sombras: Cuando estés en una zona de luz tenue u oscuridad, puedes otorgarte el estado de invisible como acción adicional. El estado finaliza inmediatamente después de que realices una acción, una acción adicional o una reacción.;Forma sombría: Cuando estés en una zona de luz tenue u oscuridad, tienes resistencia a todo el daño excepto al psíquico y al radiante.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 75,
      name: 'Don del recuerdo de conjuros',
      category: 'Don épico',
      prerequisite: 'Nivel 19 o más, Rasgo Lanzamiento de conjuros',
      benefits: 'Mejora de característica: Aumenta tu puntuación de Inteligencia, Sabiduría o Carisma en 1, hasta un máximo de 30.;Lanzamiento gratuito: Cada vez que lances un conjuro con un espacio de conjuro de nivel 1 a 4, tira 1d4. Si el número que sacas es el mismo que el nivel del espacio, este no se gasta.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
      id: 76,
      name: 'Don del viaje dimensional',
      category: 'Don épico',
      prerequisite: 'Nivel 19 o más',
      benefits: 'Mejora de característica: Aumenta una puntuación de característica de tu elección en 1, hasta un máximo de 30.;Pasos desplazadores: Inmediatamente después de que realices la acción de atacar o la de magia, puedes teletransportarte hasta 9 m a un espacio sin ocupar que puedas ver.',
      repeatable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Feats', null, {});
  }
};
