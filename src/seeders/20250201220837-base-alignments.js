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
    await queryInterface.bulkInsert('Alignments', [{
      id: 1,
      name: 'Legal bueno',
      description: 'Las criaturas legales buenas (LB) realizarán lo que la sociedad considera como correcto. Los dragones de oro, los paladines y la mayoría de los enanos son legales buenos.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'Neutral bueno',
      description: 'Las personas neutrales buenas (NB) harán lo que esté en su mano para ayudar a los demás de acuerdo a sus necesidades. Muchos celestiales, algunos gigantes de las nubes y la mayoría de gnomos son neutrales buenos.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: 'Caótico bueno',
      description: 'Las criaturas caóticas buenas (CB) actúan siguiendo los dictados de sus conciencias, sin preocuparles lo que otros esperan de ellas. Los dragones de cobre, muchos elfos y los unicornios son caóticos buenos.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      name: 'Legal neutral',
      description: 'Los individuos legales neutrales (LN) se comportan de acuerdo con la ley, la tradición o sus códigos de conducta personales. Muchos monjes y algunos magos son legales neutrales.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      name: 'Neutral',
      description: 'Neutral (N) es el alineamiento de aquellos que prefieren evitar las cuestiones éticas y no toman partido, haciendo lo que les parece mejor en cada momento. Los hombres lagarto, muchos druidas y la mayoría de humanos son neutrales.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      name: 'Caótico neutral',
      description: 'Las criaturas caóticas neutrales (CN) persiguen sus caprichos, valorando su libertad como individuos por encima de cualquier otra cosa. Muchos bárbaros y pícaros, así como algunos bardos, son caóticos neutrales.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      name: 'Legal malvado',
      description: 'Los seres legales malvados (LM) toman lo que les viene en gana, pero siempre de forma metódica y dentro de los límites que marca una tradición, una organización o su lealtad. Los diablos, los dragones azules y los hobgoblins son legales malvados.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      name: 'Neutral malvado',
      description: 'Neutral malvado (NM) es el alineamiento de los que se salen con la suya siempre que se presenta la oportunidad, sin compasión o remordimiento alguno. Muchos drows, algunos gigantes de las nubes y los yugoloths son neutrales malvados.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      name: 'Caótico malvado',
      description: 'Las criaturas caóticas malvadas (CM) recurren a la violencia arbitrariamente, movidos por la codicia, el odio o el ansia de sangre. Los demonios, los dragones rojos y los orcos son caóticos malvados.',
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
    await queryInterface.bulkDelete('Alignments', null, {});
  }
};
