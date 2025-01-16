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
   await queryInterface.bulkInsert('Gears', [{
      id: 1,
      name: 'Ábaco',
      description: 'Una herramienta estándar usada para hacer cálculos.',
      weight: 2,
      cost: '2 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'Abrojos (bolsa de 20)',
      description: 'Puedes usar tu acción para esparcir una bolsa de abrojos sobre una superficie, cubriendo un cuadrado de 5 pies de lado. Una criatura que entre en la zona afectada deberá superar una tirada de salvación de Destreza CD 15 o no podrá moverse más este turno y sufrirá 1 de daño perforante. De recibir este daño, la velocidad caminando de la criatura se reducirá en 10 pies hasta que esta recupere al menos 1 punto de golpe. Sin embargo, si una criatura se desplaza por la zona a la mitad de su velocidad, no tendrá que superar la tirada de salvación.',
      weight: 2,
      cost: '1 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: 'Aceite (frasco)',
      description: 'El aceite suele venir en frascos de arcilla con capacidad para 1 pinta (0,45 l). Como acción, puedes esparcir el aceite de este frasco sobre una criatura que se encuentre a un máximo de 5 pies o lanzarlo hasta a 20 pies, rompiendo el frasco con el impacto. En ambos casos, haz un ataque a distancia contra la criatura o el objeto, tratando el aceite como un arma improvisada: si tienes éxito, quedará cubierto de aceite. Si el objetivo recibe daño de fuego antes de que el aceite se seque (tras 1 minuto), sufrirá 5 de daño de fuego adicional debido al aceite a rdiendo. También puedes derramar el aceite sobre e l suelo, cubriendo un área de 5 pies cuadrados, siempre y cuando la superficie esté nivelada. Si se prende, el aceite arderá durante dos asaltos y causará 5 de daño de fuego a cualquier criatura que entre en la zona o acabe su turno en ella . Una criatura solo puede recibir daño de esta forma una vez por turno.',
      weight: 2,
      cost: '1 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      name: 'Ácido (vial)',
      description: 'Como acción, puedes esparcir el contenido de este vial sobre una criatura que se encuentre a un máximo de 5 pies o la nza rlo hasta a 20 pies, rompiéndose el vial con el impacto. En ambos casos, haz un ataque a distancia contra la criatura o el objeto, tratando el ácido como un arma improvisada: si tienes éxito, e l objetivo recibirá 2d6 de daño de ácido.',
      weight: 1,
      cost: '25 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      name: 'Agua bendita (frasco)',
      description: 'Como acción, puedes esparcir el contenido de este frasco sobre una criatura que se encuentre a un máximo de 5 pies o lanzarlo hasta a 20 pies, rompiéndose el frasco con el impacto. En ambos casos, haz un ataque a distancia contra la criatura, tratando el agua bendita como un arma improvisada: si el objetivo es un infernal o un muerto viviente, sufrirá 2d6 de daño radiante. Los clérigos y paladines pueden crear agua bendita ejecutando un ritual especial. Este ritual lleva 1 hora, consume 25 GP en polvo y obliga al lanzador a gastar un espacio de conjuro de nivel 1.',
      weight: 1,
      cost: '25 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      name: 'Aljaba',
      description: 'Una aljaba puede contener hasta 20 flechas.',
      weight: 1,
      cost: '1 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      name: 'Anillo de sellar',
      description: 'Cada anillo de sellar tiene un diseño distintivo tallado en él. Cuando presionas este anillo sobre lacre caliente, dejas una marca distintiva.',
      weight: 0,
      cost: '5 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      name: 'Antitoxina (vial)',
      description: 'La criatura que beba el contenido de este vial obtendrá ventaja en las tiradas de salvación contra veneno durante 1 hora. No obstante, no tendrá efecto en muertos vivientes o autómatas.',
      weight: 0,
      cost: '50 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      name: 'Antorcha',
      description: 'Arde durante 1 hora emitiendo luz brillante en un radio de 20 pies y luz tenue 20 pies más allá. Si haces un ataque cuerpo a cuerpo con una antorcha encendida e impactas, causarás 1 de daño de fuego.',
      weight: 0,
      cost: '50 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 10,
      name: 'Ariete portátil',
      description: 'Puedes usar este ariete portátil para echar puertas abajo. Te proporcionará un bonificador de +4 a tus pruebas de Fuerza dedicadas a este fin. Además, si otro personaje te ayuda a usar el ariete tendrás ventaja en estas pruebas.',
      weight: 35,
      cost: '4 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 11,
      name: 'Balanza de mercader',
      description: 'Esta balanza incluye bandejas para depositar objetos y un juego de pesas que llega hasta las 5 libras. Puedes utilizarla para calcular el peso exacto de objetos pequeños, como pueden ser metales preciosos o mercancías, para así poder determinar su valor.',
      weight: 2,
      cost: '5 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 12,
      name: 'Barril',
      description: 'Puede guardar 40 galones de líquido, 4 pies cúbicos de sólido.',
      weight: 70,
      cost: '2 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 13,
      name: 'Bolas de metal',
      description: 'Puedes usar tu acción para esparcir estas pequeñas esferas metálicas, que vienen en una bolsita, sobre una superficie nivelada, cubriendo un cuadrado de 10 pies de lado. Las criaturas que se muevan a través de la zona afectada deberán superar una tirada de salvación de Destreza CD 10 o serán derribadas. Sin embargo, si una criatura se desplaza por la zona a la mitad de su velocidad, no tendrá que superar la tirada de salvación.',
      weight: 2,
      cost: '1 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 14,
      name: 'Bolsa',
      description: 'Una bolsita de cuero o tela que puede contener hasta 20 balas de honda o 50 dardos de cerbatana, entre otras cosas. Las bolsas con compartimentos para componentes de conjuros reciben el nombre de "saquitos de componentes" y se describen un poco más adelante en esta misma sección.',
      weight: 1,
      cost: '5 SP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 15,
      name: 'Botella de cristal',
      description: 'Puede guardar 1 y media pintas de líquido.',
      weight: 2,
      cost: '2 SP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 16,
      name: 'Cadena (10 pies)',
      description: 'Una cadena tiene 10 puntos de golpe y es necesario tener éxito e n una prueba de Fuerza CD 20 para romperla.',
      weight: 10,
      cost: '5 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 17,
      name: 'Campana',
      description: 'Cuando se hace sonar como acción, una campana produce un sonido que se  puede escuchar hasta 60 pies de distancia.',
      weight: 0,
      cost: '1 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 18,
      name: 'Canalizador arcano',
      description: 'Un canalizador arcano es un objeto especial, diseñado para conducir el poder de los conjuros arcanos. Toma la forma de un orbe, un cristal, una vara, un bastón fabricado específicamente con este fin, un trozo de madera con forma de varita o cualquier otra forma similar. Los brujos, hechiceros y magos pueden utilizar este objeto como canalizador mágico.',
      weight: 0,
      cost: '0',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 19,
      name: 'Cristal',
      description: 'Canalizador arcano.',
      weight: 0,
      cost: '0',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 20,
      name: 'Bastón',
      description: 'Canalizador arcano.',
      weight: 0,
      cost: '0',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 21,
      name: 'Orbe',
      description: 'Canalizador arcano.',
      weight: 0,
      cost: '0',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 22,
      name: 'Vara',
      description: 'Canalizador arcano.',
      weight: 0,
      cost: '0',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 23,
      name: 'Varita',
      description: 'Canalizador arcano.',
      weight: 0,
      cost: '0',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 24,
      name: 'Canalizador druídico',
      description: 'Canalizador arcano.',
      weight: 0,
      cost: '0',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 25,
      name: 'Bastón de madera',
      description: 'Canalizador druídico.',
      weight: 0,
      cost: '0',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 26,
      name: 'Rama de muérdago',
      description: 'Canalizador druídico.',
      weight: 0,
      cost: '0',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 27,
      name: 'Tótem',
      description: 'Canalizador druídico.',
      weight: 0,
      cost: '0',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 28,
      name: 'Varita de tejo',
      description: 'Canalizador druídico.',
      weight: 0,
      cost: '0',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 29,
      name: 'Cantimplora',
      description: 'Puede guardar 4 pintas de líquido.',
      weight: 5,
      cost: '2 SP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 30,
      name: 'Caña de pescar',
      description: 'La caña viene acompañada de un sedal, corchos de pesca, anzuelos de acero, plomos, cebos de terciopelo y una sacadera.',
      weight: 4,
      cost: '1 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 31,
      name: 'Catalejo',
      description: 'Los objetos observados a través de un catalejo se ven al doble de su tamaño real.',
      weight: 1,
      cost: '1000 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 32,
      name: 'Cerradura',
      description: 'La cerradura viene acompañada de una llave. Si no se dispone de ella, una criatura competente con herramientas de ladrón puede forzar la cerradura superando una prueba de Destreza CD 15. Tu DM podría decidir que hay cerraduras mejores disponibles, pero serán más caras.',
      weight: 1,
      cost: '10 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 33,
      name: 'Cesta',
      description: 'Puede contener 2 pies cúbicos o 40 lb de equipo.',
      weight: 2,
      cost: '4 SP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 34,
      name: 'Cofre',
      description: 'Puede contener 12 pies cúbicos o 300 lb de equipo.',
      weight: 25,
      cost: '5 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 35,
      name: 'Cuerda de cáñamo (50 pies)',
      description: 'La cuerda, ya esté hecha de cáñamo o de seda, tiene 2 puntos de golpe y para romperla es necesaria una prueba de Fuerza CD 17.',
      weight: 5,
      cost: '10 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 36,
      name: 'Cuerda de seda (50 pies)',
      description: 'La cuerda, ya esté hecha de cáñamo o de seda, tiene 2 puntos de golpe y para romperla es necesaria una prueba de Fuerza CD 17.',
      weight: 5,
      cost: '10 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 37,
      name: 'Cubo',
      description: 'Puede guardar 3 galones de líquido o 1/2 pie cúbico de sólido.',
      weight: 2,
      cost: '5 CP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 38,
      name: 'Escalera (10 pies)',
      description: 'Se debe escalar para moverse hacia arriba o hacia abajo.',
      weight: 25,
      cost: '1 SP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 39,
      name: 'Espejito de acero',
      description: 'Se debe escalar para moverse hacia arriba o hacia abajo.',
      weight: 25,
      cost: '1 SP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 40,
      name: 'Esposas',
      description: 'Estos grilletes de metal pueden sujetar a una criatura Pequeña o Mediana. Para escapar de ellos es necesaria una prueba de Destreza CD 20 y para romperlos una de Fuerza CD 20. Las esposas vienen con una llave. Si no se dispone de ella, una criatura competente con herramientas de ladrón puede forzar la cerradura superando una prueba de Destreza CD 15. Los grilletes tienen 15 puntos de golpe.',
      weight: 6,
      cost: '2 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 41,
      name: 'Estuche para mapa o pergamino',
      description: 'Esta caja de cuero cilíndrica puede contener hasta diez hojas de papel o cinco hojas de pergamino, enrolladas en ambos casos.',
      weight: 1,
      cost: '1 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 42,
      name: 'Estuche para virotes de ballesta',
      description: 'Esta caja de madera tiene capacidad para albergar hasta veinte virotes de ballesta.',
      weight: 1,
      cost: '1 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 43,
      name: 'Frasco',
      description: 'Puede guardar 1 pinta de líquido.',
      weight: 1,
      cost: '2 CP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 44,
      name: 'Fuego de alquimista (frasco)',
      description: 'Este fluido pegajoso y adherente prende al entrar en contacto con el aire. Como acción, puedes lanzar este frasco hasta a 20 pies, rompiéndose con el impacto. Haz un ataque a distancia contra la criatura o el objeto, tratando el fuego de alquimista como un arma improvisada: si tienes éxito, el objetivo recibirá 1d4 de daño de fuego al comienzo de cada uno de sus turnos. Una criatura puede utilizar su acción para extinguir las llamas y evitar que se siga produciendo este daño. Deberá superar una prueba de Destreza CD 10 para lograrlo.',
      weight: 1,
      cost: '50 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 45,
      name: 'Garfio de escalada',
      description: 'Utilizado como acción, puedes lanzar el garfio a una barandilla,  un borde o cualquier lugar donde agarre a 50 pies de ti, y el garfio se agarrará si tienes éxito en una tirada de Destreza DC 13 (Acrobacias). Si hay una cuerda atada al garfio, puedes escalarla.',
      weight: 4,
      cost: '2 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 46,
      name: 'Jabón',
      description: 'Un producto usado para el baño.',
      weight: 0,
      cost: '2 CP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 47,
      name: 'Jarro',
      description: 'Puede guardar 1 galón de líquido.',
      weight: 4,
      cost: '2 CP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 48,
      name: 'Lacre',
      description: 'Cuando presionas un anillo de sellar en lacre caliente, dejas una marca distintiva.',
      weight: 0,
      cost: '5 CP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 49,
      name: 'Lámpara',
      description: 'Esta lámpara emite luz brillante en un radio de 15 pies y luz tenue 30 pies más allá. Puede estar encendida hasta 6 horas con un frasco (1 pinta, 0,45 I) de aceite.',
      weight: 1,
      cost: '5 CP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 50,
      name: 'Libro',
      description: 'Un libro podría contener poemas, registros históricos, información específica a un área de conocimiento concreta, diagramas y notas sobre artilugios gnomos o prácticamente cualquier cosa que sea susceptible de ser representada usando texto o dibujos. Un libro que contenga conjuros recibe el nombre de "libro de conjuros" y se describe justo a continuación.',
      weight: 5,
      cost: '25 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 51,
      name: 'Libro de conjuros',
      description: 'Indispensable para los magos, un libro de conjuros es un tomo encuadernado en cuero con cien páginas de vitela en blanco, preparadas para poder escribir conjuros en ellas.',
      weight: 3,
      cost: '50 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 52,
      name: 'Linterna de ojo de buey',
      description: 'Esta linterna emite luz brillante en un cono de 60 pies y luz tenue 60 pies más allá. Puede estar encendida hasta 6 horas con un frasco (1 pinta, 0,45 l) de aceite.',
      weight: 2,
      cost: '10 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 53,
      name: 'Linterna sorda',
      description: 'Esta linterna emite luz brillante en un radio de 30 pies y luz tenue 30 pies más allá. Puede estar encendida hasta 6 horas con un frasco (1 pinta, 0,45 l) de aceite. Como acción, puedes cubrir la abertura con una tapa haciendo que la linterna solo emita luz tenue en un radio de 5 pies.',
      weight: 2,
      cost: '5 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 54,
      name: 'Lupa',
      description: 'Esta lente te permite observar con más detalle objetos pequeños. También puede servir como sustituto del chispero y pedernal para realizar fuego. Para hacer esto es necesario disponer de una luz tan brillante como la del sol, y así poder enfocarla, además de yesca que quemar y 5 minutos de tiempo. Igualmente, la lupa te da ventaja en las pruebas de característica para tasar o inspeccionar un objeto pequeño o muy detallado.',
      weight: 0,
      cost: '100 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 55,
      name: 'Manta',
      description: 'Cuando estás cubierto por una manta, tienes Ventaja en tiradas de salvación contra el frío extremo.',
      weight: 3,
      cost: '5 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 56,
      name: 'Martillo',
      description: 'Este martillo de una mano con cabeza de hierro es útil para empujar pitones de escalada hacia una pared.',
      weight: 3,
      cost: '1 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 57,
      name: 'Mazo',
      description: '',
      weight: 10,
      cost: '2 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 58,
      name: 'Mochila',
      description: 'Puede guardar 1 pie cúbico o 30 lb de equipo.',
      weight: 5,
      cost: '2 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 59,
      name: 'Munición',
      description: 'La munición es requerida por armas que tengan la propiedad de Munición. La descripción del arma indica el tipo de munición que usa.',
      weight: 0,
      cost: '0',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 60,
      name: 'Balas de honda (20)',
      description: 'Munición.',
      weight: 1.5,
      cost: '4 CP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 61,
      name: 'Dardos de cerbatana (50)',
      description: 'Munición.',
      weight: 1,
      cost: '1 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 62,
      name: 'Flechas (20)',
      description: 'Munición.',
      weight: 1,
      cost: '1 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 63,
      name: 'Virotes de ballesta (20)',
      description: 'Munición.',
      weight: 1.5,
      cost: '1 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 64,
      name: 'Balas de arma de fuego (10)',
      description: 'Munición.',
      weight: 2,
      cost: '3 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 65,
      name: 'Agujas (50)',
      description: 'Munición.',
      weight: 1,
      cost: '1 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 66,
      name: 'Olla de hierro',
      description: 'Puede guardar 1 galón de líquido',
      weight: 10,
      cost: '2 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 67,
      name: 'Pala',
      description: 'Durante 1 hora, puedes usar una pala para cavar un agujero de 5 pies de diámetro y profundidad en la tierra u otro material similar.',
      weight: 5,
      cost: '2 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 68,
      name: 'Palanqueta',
      description: 'Una palanqueta te da ventaja en aquellas pruebas de Fuerza en las que hacer palanca sea útil.',
      weight: 5,
      cost: '2 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 69,
      name: 'Papel (una hoja)',
      description: 'Una hoja de papel puede contener alrededor de 250 palabras escritas a mano.',
      weight: 0,
      cost: '2 SP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 70,
      name: 'Perfume (vial)',
      description: 'Por 1 hora luego de usar el perfume en ti mismo, tienes ventaja en tiradas de Carisma (Persuación) hechas para influenciar a un humanoide indiferente a 5 pies de ti.',
      weight: 0,
      cost: '5 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 71,
      name: 'Pergamino (una hoja)',
      description: 'Una hoja de pergamino puede contener alrededor de 250 palabras escritas a mano.',
      weight: 0,
      cost: '1 SP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 72,
      name: 'Petate',
      description: 'Un petate permite dormir a una criatura Pequeña o Mediana. Mientras estás en un petate, tienes éxito en tiradas de salvación contra el frío extremo automáticamente.',
      weight: 7,
      cost: '1 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 73,
      name: 'Pico de minero',
      description: 'Un pico de minero está diseñado para concentrar la fuerza de un golpe en un área pequeña.',
      weight: 10,
      cost: '2 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 74,
      name: 'Piedra de afilar',
      description: 'Una piedra de afilar estándar usada para afilar hojas.',
      weight: 1,
      cost: '1 CP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 75,
      name: 'Pinchos de hierro (10)',
      description: 'Como acción, puedes usar un objeto sin filo como un martillo ligero para martillar un pincho en madera, tierra, o un material similar. Puedes hacerlo para bloquear una puerta o para atar cuerda o cadenas al pincho.',
      weight: 5,
      cost: '1 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 76,
      name: 'Pitón',
      description: 'Cuando una pared no ofrece puntos de apoyo para escalarla, puedes crearlos por tu cuenta. Un pitón es una pica de hierro con un agujero para poder atar una cuerda a través de él.',
      weight: 0.25,
      cost: '5 CP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 77,
      name: 'Pluma (para escribir)',
      description: 'Una pluma para escribir es un palito de madera con una punta especial. La punta absorbe tinta cuando se sumerge en un vial y deja un rastro de tinta cuando se arrastra sobre una superficie.',
      weight: 0,
      cost: '2 CP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 78,
      name: 'Poción de curación',
      description: 'Un personaje que se beba el mágico fluido rojo de este vial recuperará 2d4 + 2 puntos de golpe. Tanto beber como administrar la poción a otro requiere una acción.',
      weight: 0.5,
      cost: '50 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 79,
      name: 'Polipasto',
      description: 'Un conjunto de poleas recorridas por un cable que termina en un gancho, que se puede fijar a un objeto. Un polipasto te permite alzar cuatro veces el peso que podrías levantar en condiciones normal.',
      weight: 5,
      cost: '1 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 80,
      name: 'Raciones (1 día)',
      description: 'Raciones compactas y secas que resisten viajes largos. Incluyen cecina, fruta deshidratada, galletas y nueces.',
      weight: 2,
      cost: '5 SP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 81,
      name: 'Reloj de arena',
      description: 'Un reloj de arena estándar usado para medir el paso del tiempo.',
      weight: 1,
      cost: '25 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 82,
      name: 'Ropas comunes',
      description: 'Un set de ropa que consiste en una polera suelta con pantalones holgados, o una polera suelta y una falda o sobrevestido.',
      weight: 3,
      cost: '5 SP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 83,
      name: 'Ropas de calidad',
      description: 'Las ropas de calidad están hechas de telas costosas y están adornadas con detalles confeccionados profesionalmente. Algunos eventos y locaciones admiten solo a personas que lleven este tipo de ropas.',
      weight: 6,
      cost: '15 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 84,
      name: 'Ropas de viaje',
      description: 'Las ropas de viaje son ropas resistentes diseñadas para viajar a través de varios ambientes.',
      weight: 4,
      cost: '2 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 85,
      name: 'Ropas, disfraz',
      description: 'Este set de ropas está diseñado para representar un disfraz particular, típicamente usado para entretener.',
      weight: 4,
      cost: '5 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 86,
      name: 'Saco',
      description: 'Puede guardar 1 pie cúbico o 30 lb de equipo.',
      weight: 0.5,
      cost: '1 CP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 87,
      name: 'Saquito de componentes',
      description: 'Un saquito de componentes es una pequeña bolsa de cuero para el cinturón con bolsillos en los que contener todos los componentes materiales y otros objetos especiales necesarios para lanzar conjuros. No incluye los componentes que tienen un coste específico (estos se indican en la descripción de cada conjuro).',
      weight: 2,
      cost: '25 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 88,
      name: 'Silbato de supervivencia',
      description: 'Un saquito de componentes es una pequeña bolsa de cuero para el cinturón con bolsillos en los que contener todos los componentes materiales y otros objetos especiales necesarios para lanzar conjuros. No incluye los componentes que tienen un coste específico (estos se indican en la descripción de cada conjuro).',
      weight: 0,
      cost: '5 CP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 89,
      name: 'Símbolo sagrado',
      description: 'Un símbolo sagrado es la representación de un dios o panteón. Se usa para canalizar magia divina. Un clérigo o paladín puede usar un símbolo sagrado como Canalizador arcano.',
      weight: 0,
      cost: '0',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 90,
      name: 'Amuleto',
      description: 'Símbolo sagrado.',
      weight: 1,
      cost: '5 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 91,
      name: 'Emblema',
      description: 'Símbolo sagrado.',
      weight: 0,
      cost: '5 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 92,
      name: 'Relicario',
      description: 'Símbolo sagrado.',
      weight: 2,
      cost: '5 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 93,
      name: 'Tienda para dos personas',
      description: 'Una lona bajo la que guarecerse, sencilla y transportable, en la que pueden dormir dos personas.',
      weight: 20,
      cost: '2 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 94,
      name: 'Tinta (botella de 1 onza)',
      description: 'Provee de tinta suficiente para escribir 500 páginas.',
      weight: 0,
      cost: '10 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 95,
      name: 'Tiza (1 trozo)',
      description: 'Un trozo de tiza se usa para escribir y marcar sobre varias superficies.',
      weight: 0,
      cost: '1 CP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 96,
      name: 'Trampa para cazar',
      description: 'Puedes usar tu acción para preparar esta trampa: un anillo de afilados dientes de acero que se cierra cuando una criatura pisa la placa de presión que está en su centro. La trampa está fijada mediante una pesada cadena a cualquier objeto inmóvil, como un árbol o una estaca clavada en el suelo. Si una criatura pisa la placa deberá superar una tirada de salvación de Destreza CD 13 o su movimiento terminará y sufrirá 1d4 de daño perforante. A partir de ese momento, y hasta que la criatura se libre de la trampa, su movimiento se verá limitado por la longitud de la cadena (normalmente 3 pies). Una criatura puede invertir su acción en hacer una prueba de Fuerza CD 13, logrando liberarse a sí misma o a otra criatura dentro de su alcance si tiene éxito. Cada prueba fallida causa 1 de daño perforante a la criatura atrapada.',
      weight: 25,
      cost: '5 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 97,
      name: 'Túnica',
      description: 'Una túnica tiene significancia ceremonial o vocacional. Algunos eventos y locaciones admiten sólo a personas que vistan una túnica que tenga ciertos colores o símbolos.',
      weight: 4,
      cost: '1 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 98,
      name: 'Utensilios de cocina',
      description: 'Esta lata contiene una copa y cubiertos sencillos. Se cierra al unirse dos mitades, una de las cuales puede utilizarse como sartén y la otra hacer las veces de un plato o un cuenco poco profundo.',
      weight: 1,
      cost: '2 SP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 99,
      name: 'Útiles de escalada',
      description: 'Entre estos útiles se incluyen pitones especiales, puntas para las botas y un arnés. Puedes invertir una acción para anclarte empleando estos útiles. Una vez hecho esto, no podrás caer más de 25 pies desde el punto en el que te anclaste, pero tampoco podrás subir más de 25 pies sin deshacer el anclaje.',
      weight: 12,
      cost: '25 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 100,
      name: 'Útiles de sanador',
      description: 'Este saquito de cuero contiene vendas, ungüentos y tablillas. Puedes utilizarlo diez veces. Como acción, puedes gastar uno de estos diez usos para estabilizar a una criatura que tenga 0 puntos de golpe, sin necesidad de hacer una prueba de Sabiduría (Medicina).',
      weight: 3,
      cost: '5 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 101,
      name: 'Vara (10 pies)',
      description: 'Puedes usarlo para tocar algo a 10 pies de distancia. Si debes hacer una tirada de Fuerza (Atletismo) como parte de un Salto Alto o Largo, puedes usar la vara para propulsarte, dándote Ventaja en la tirada.',
      weight: 7,
      cost: '5 CP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 102,
      name: 'Vela',
      description: 'Puedes usarlo para tocar algo a 10 pies de distancia. Si debes hacer una tirada de Fuerza (Atletismo) como parte de un Salto Alto o Largo, puedes usar la vara para propulsarte, dándote Ventaja en la tirada.',
      weight: 7,
      cost: '5 CP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 103,
      name: 'Veneno básico (vial)',
      description: 'Puedes usar el veneno contenido en este vial para untar un arma cortante o perforante o hasta tres unidades de munición. Para hacer esto deberás invertir una acción. Cualquier criatura impactada por el arma o munición envenenadas deberá superar una tirada de salvación de Constitución CD 10 o sufrirá 1d4 de daño de veneno. Una vez aplicado al arma o munición, el veneno mantendrá su efectividad durante 1 minuto, tras el cual se habrá secado.',
      weight: 0,
      cost: '100 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 104,
      name: 'Vial',
      description: 'Puede almacenar 4 onzas de líquido.',
      weight: 0,
      cost: '1 G  P',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 105,
      name: 'Yesquero',
      description: 'Esta pequeña caja contiene pedernal, chispero y yescas (norma lmente ropa seca untada en aceite); todo lo necesario pa ra encender fuego. Puedes utilizarla para prender una antorcha (o alguna otra cosa altamente inflamable) gastando una acción. Se tarda 1 minuto en encender cualquier otro tipo de fuego.',
      weight: 1,
      cost: '5 SP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 106,
      name: 'Paquete de artista',
      description: 'Incluye una mochila, un petate, 2 disfraces, 5 velas, raciones para 5 días, una cantimplora y útiles para disfrazarse.',
      weight: 58.5,
      cost: '40 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 107,
      name: 'Paquete de diplomático',
      description: 'Incluye un cofre, 2 estuches para mapas o pergaminos, una muda de ropas de calidad, una botella de tinta, una pluma, 2 frascos de aceite, 5 hojas de papel, un vial de perfume, lacre y un jabón.',
      weight: 39,
      cost: '39 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 108,
      name: 'Paquete de erudito',
      description: 'Incluye una mochila, un libro de algún saber concreto, una botella de tinta, una pluma, 10 hojas de pergamino, una bolsita con arena y un cuchillo pequeño.',
      weight: 22,
      cost: '40 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 109,
      name: 'Paquete de explorador',
      description: 'Incluye una mochila, un petate, utensilios de cocina, un yesquero, 10 antorchas, raciones para 10 días y una cantimplora. Además, este paquete también tiene una cuerda de cáñamo de 50 pies enganchada en uno de sus lados.',
      weight: 55,
      cost: '10 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 110,
      name: 'Paquete de explorador de mazmorras',
      description: 'Incluye una mochila, una palanqueta, un martillo, 10 pitones, 10 antorchas, un yesquero, raciones para 10 días y una cantimplora. Además, este paquete también tiene una cuerda de cáñamo de 50 pies enganchada en uno de sus lados.',
      weight: 55,
      cost: '12 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 111,
      name: 'Paquete de ladrón',
      description: 'Incluye una mochila, una bolsa con 1.000 bolas de metal, 10 pies de cordel, una campana, 5 velas, una palanqueta, un martillo, 10 pitones, una linterna sorda, 2 frascos de aceite, raciones para 5 días, un yesquero y una cantimplora. Además, este paquete también tiene una cuerda de cáñamo de 50 pies enganchada en uno de sus lados.',
      weight: 42,
      cost: '16 GP',
      base: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 112,
      name: 'Paquete de sacerdote',
      description: 'Incluye una mochila, una manta, 10 velas, un yesquero, una caja para limosnas, 2 barras de incienso, un incensario, vestiduras, raciones para 2 días y una cantimplora.',
      weight: 29,
      cost: '19 GP',
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
    await queryInterface.bulkDelete('Gears', null, {});
  }
};
