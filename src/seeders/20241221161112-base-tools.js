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

    await queryInterface.bulkInsert('Tools', [{
      id: 1,
      name: "Chirimía",
      ability_id: 6,
      utilize: "Tocar una melodía conocida (DC 10) o improvisar una canción (DC 15)",
      craft: null,
      weight: 1,
      cost: "2 GP",
      profesion: "Instrumento",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: "Cuerno",
      ability_id: 6,
      utilize: "Tocar una melodía conocida (DC 10) o improvisar una canción (DC 15)",
      craft: null,
      weight: 2,
      cost: "3 GP",
      profesion: "Instrumento",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: "Dulcémele",
      ability_id: 6,
      utilize: "Tocar una melodía conocida (DC 10) o improvisar una canción (DC 15)",
      craft: null,
      weight: 10,
      cost: "25 GP",
      profesion: "Instrumento",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      name: "Flauta",
      ability_id: 6,
      utilize: "Tocar una melodía conocida (DC 10) o improvisar una canción (DC 15)",
      craft: null,
      weight: 1,
      cost: "2 GP",
      profesion: "Instrumento",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      name: "Flauta de pan",
      ability_id: 6,
      utilize: "Tocar una melodía conocida (DC 10) o improvisar una canción (DC 15)",
      craft: null,
      weight: 2,
      cost: "12 GP",
      profesion: "Instrumento",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      name: "Gaita",
      ability_id: 6,
      utilize: "Tocar una melodía conocida (DC 10) o improvisar una canción (DC 15)",
      craft: null,
      weight: 6,
      cost: "30 GP",
      profesion: "Instrumento",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      name: "Laúd",
      ability_id: 6,
      utilize: "Tocar una melodía conocida (DC 10) o improvisar una canción (DC 15)",
      craft: null,
      weight: 2,
      cost: "35 GP",
      profesion: "Instrumento",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      name: "Lira",
      ability_id: 6,
      utilize: "Tocar una melodía conocida (DC 10) o improvisar una canción (DC 15)",
      craft: null,
      weight: 2,
      cost: "30 GP",
      profesion: "Instrumento",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      name: "Tambor",
      ability_id: 6,
      utilize: "Tocar una melodía conocida (DC 10) o improvisar una canción (DC 15)",
      craft: null,
      weight: 3,
      cost: "6 GP",
      profesion: "Instrumento",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 10,
      name: "Viola",
      ability_id: 6,
      utilize: "Tocar una melodía conocida (DC 10) o improvisar una canción (DC 15)",
      craft: null,
      weight: 1,
      cost: "30 GP",
      profesion: "Instrumento",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 11,
      name: "Herramientas de albañil",
      ability_id: 1,
      utilize: "Cincelar un símbolo o agujero en piedra. (DC 10)",
      craft: "Aparejo de poleas",
      weight: 8,
      cost: "10 GP",
      profesion: "Artesano",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 12,
      name: "Herramientas de alfarero",
      ability_id: 4,
      utilize: "Percibir lo que contuvo un objeto de cerámica en las últimas 24 horas. (DC 15)",
      craft: "Jarra,Lámpara",
      weight: 3,
      cost: "10 GP",
      profesion: "Artesano",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 13,
      name: "Herramientas de carpintero",
      ability_id: 1,
      utilize: "Sellar o abrir con fuerza una puerta o contenedor. (DC 20)",
      craft: "Garrote,Garrote grande,Bastón,Barril,Cofre,Escalera,Vara,Ariete portátil,Antorcha",
      weight: 6,
      cost: "8 GP",
      profesion: "Artesano",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 14,
      name: "Herramientas de cartógrafo",
      ability_id: 5,
      utilize: "Hacer un bosquejo de un área pequeña. (DC 15)",
      craft: "Mapa",
      weight: 6,
      cost: "15 GP",
      profesion: "Artesano",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 15,
      name: "Herramientas de curtidor",
      ability_id: 2,
      utilize: "Añadir un diseño a un objeto de cuero. (DC 10)",
      craft: "Honda,Látigo,Armadura de pieles,Armadura de cuero,Armadura de cuero tachonado,Mochila,Estuche para virotes de ballesta,Estuche para mapa o pergamino,Pergamino,Bolsa,Carcaj,Cantimplora",
      weight: 5,
      cost: "5 GP",
      profesion: "Artesano",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 16,
      name: "Herramientas de ebanista",
      ability_id: 2,
      utilize: "Labrar un patrón en madera (DC 10)",
      craft: "Garrote,Garrote grande,Bastón,Canalizador arcano,Flechas,Virotes,Canalizador Druídico,Pluma,Aguja",
      weight: 5,
      cost: "1 GP",
      profesion: "Artesano",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 17,
      name: "Herramientas de herrero",
      ability_id: 1,
      utilize: "Abrir con fuerza una puerta o contenedor. (DC 20)",
      craft: "Armas cuerpo a cuerpo,Armadura media,Bolas de metal,Cubo,Abrojos,Cadena,Palanqueta,Balas (armas de fuego),Garfio de escalada,Olla de hierro,Pinchos de hierro,Balas (honda)",
      weight: 8,
      cost: "20 GP",
      profesion: "Artesano",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 18,
      name: "Herramientas de joyero",
      ability_id: 4,
      utilize: "Reconocer el valor de una gema. (DC 15)",
      craft: "Canalizador arcano,Símbolo sagrado",
      weight: 2,
      cost: "25 GP",
      profesion: "Artesano",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 19,
      name: "Herramientas de manitas",
      ability_id: 2,
      utilize: "Crear un objeto pequeño a partir de chatarra que se desarma en 1 minuto. (DC 20)",
      craft: "Mosquete,Pistola,Campana,Linterna de ojo de buey,Frasco,Linterna sorda,Trampa para cazar,Cerradura,Esposas,Espejito de acero,Pala,Silbato de supervivencia,Yesquero",
      weight: 10,
      cost: "50 GP",
      profesion: "Artesano",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 20,
      name: "Herramientas de soplador de vidrio",
      ability_id: 4,
      utilize: "Percibir lo que contuvo un objeto de vidrio en las últimas 24 horas (DC 15)",
      craft: "Botella de cristal,Lupa,Catalejo,Vial",
      weight: 5,
      cost: "30 GP",
      profesion: "Artesano",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 21,
      name: "Herramientas de tejedor",
      ability_id: 2,
      utilize: "Reparar un desgarro en ropa (DC 10) o tejer un diseño pequeño. (DC 10)",
      craft: "Armadura acolchada,Cesta,Petate,Manta,Ropas de calidad,Red,Túnica,Cuerda de cáñamo,Saco,Tienda para dos personas,Ropas de viaje",
      weight: 5,
      cost: "1 GP",
      profesion: "Artesano",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 22,
      name: "Herramientas de zapatero",
      ability_id: 2,
      utilize: "Modificar zapatos para dar ventaja en la siguiente tirada de destreza (acrobacias) del que los tenga puestos. (DC 10)",
      craft: "Útiles de escalada",
      weight: 5,
      cost: "5 GP",
      profesion: "Artesano",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 23,
      name: "Herramientas de alquimista",
      ability_id: 4,
      utilize: "Identificar una sustancia (DC 15) o encender una llama. (DC 15)",
      craft: "Ácido,Fuego de alquimista,Saquito de componentes,Aceite,Papel,Perfume",
      weight: 8,
      cost: "50 GP",
      profesion: "Artesano",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 24,
      name: "Suministros de calígrafo",
      ability_id: 2,
      utilize: "Escribir texto con impresionantes detalles que lo protegen de falsificación. (DC 15)",
      craft: "Tinta,Pregamino de conjuro",
      weight: 5,
      cost: "10 GP",
      profesion: "Artesano",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 25,
      name: "Suministros de cervecero",
      ability_id: 4,
      utilize: "Detectar si un líquido está envenenado (DC 15) o detectar alcohol. (DC 10)",
      craft: "Antitoxina",
      weight: 9,
      cost: "20 GP",
      profesion: "Artesano",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 26,
      name: "Suministros de pintor",
      ability_id: 5,
      utilize: "Dibujar o pintar una imagen reconocible de algo que hayas visto. (DC 10)",
      craft: "Canalizador druídico,Símbolo sagrado",
      weight: 5,
      cost: "10 GP",
      profesion: "Artesano",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 27,
      name: "Útiles de cocinero",
      ability_id: 5,
      utilize: "Mejorar el sabor de la comida (DC 10) o detectar comida podrida o envenada. (DC 15)",
      craft: "Raciones",
      weight: 8,
      cost: "1 GP",
      profesion: "Artesano",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 28,
      name: "Herramientas de ladrón",
      ability_id: 2,
      utilize: "Forzar una cerradura (DC 15) o desarmar una trampa. (DC 15)",
      craft: null,
      weight: 1,
      cost: "25 GP",
      profesion: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 29,
      name: "Útiles de herborista",
      ability_id: 4,
      utilize: "Identificar una planta. (DC 10)",
      craft: "Antitoxina,Vela,Útiles de sanador,Poción de curación",
      weight: 3,
      cost: "5 GP",
      profesion: null,
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

    await queryInterface.bulkDelete('Tools', null, {});
  }
};
