'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Properties', [
      {
        id: 1,
        name: "A Dos Manos",
        description: "Estas armas requieren el uso de las dos manos.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "Alcance",
        description: "El alcance de un arma a distancia aparece entre paréntesis después de las propiedades “arrojadiza” o “munición”. El alcance muestra dos números: el primero es el alcance normal y el segundo es el alcance largo, ambos indicados en metros. Cuando ataques a un objetivo que esté más allá del alcance normal, tendrás desventaja en la tirada de ataque, y no podrás atacar a un objetivo que esté más allá del alcance largo.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "Arrojadiza",
        description: "Si un arma tiene esta propiedad, puedes lanzarla para realizar un ataque a distancia y puedes desenvainar esa arma como parte del ataque. Si se trata de un arma cuerpo a cuerpo, las tiradas de ataque y de daño usan el mismo modificador por característica que usas para hacer ataques cuerpo a cuerpo con esa arma.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: "Gran Alcance",
        description: "Cuando empleas un arma con esta propiedad, tu alcance aumenta en 1,5 m tanto al atacar como a efectos de determinar tu alcance en los ataques de oportunidad que hagas con ella.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: "Ligera",
        description: "Cuando lleves a cabo la acción de atacar en tu turno y ataques con un arma ligera, podrás hacer un ataque extra como acción adicional más adelante en el mismo turno. Ese ataque extra debe hacerse con otra arma ligera y no sumarás tu modificador por característica al daño del ataque extra salvo que el modificador sea negativo. Por ejemplo, puedes atacar con una espada corta en una mano y una daga en la otra usando la acción de atacar y una acción adicional, pero no sumarás tu modificador por Fuerza o Destreza a la tirada de daño de la acción adicional salvo que el modificador sea negativo.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: "Munición",
        description: "Solo puedes realizar un ataque a distancia usando un arma con esta propiedad si tienes munición para ella. El tipo de munición necesaria se especifica junto con el alcance del arma. Cada ataque gasta una unidad de munición. Extraer la munición forma parte del ataque (necesitas una mano libre para cargar un arma de una mano). Tras un combate, puedes dedicar 1 minuto a recuperar la mitad de la munición (redondeada hacia abajo) que hayas usado en él.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: "Pesada",
        description: "Tendrás desventaja en las tiradas de ataque con un arma pesada si es un arma cuerpo a cuerpo y tu puntuación de Fuerza no llega a 13 o si es un arma a distancia y tu puntuación de Destreza no llega a 13.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: "Recarga",
        description: "Cuando utilices una acción, una acción adicional o una reacción para atacar con un arma con recarga, solo podrás disparar una unidad de munición, incluso aunque normalmente pudieras hacer más de un ataque.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: "Sutil",
        description: "Cuando ataques con un arma sutil, podrás elegir realizar las tiradas de ataque y de daño con el modificador por Fuerza o con el modificador por Destreza. Eso sí, deberás usar el mismo modificador para ambas tiradas.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        name: "Versátil",
        description: "Estas armas pueden utilizarse con una o dos manos. Tras esta propiedad aparece entre paréntesis un valor de daño. El arma causa ese daño cuando se usa a dos manos para hacer un ataque cuerpo a cuerpo.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
   ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Properties', null, {});
  }
};
