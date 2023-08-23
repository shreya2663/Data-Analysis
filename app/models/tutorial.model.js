module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
      oid :{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      cid:{
        type: Sequelize.INTEGER,
        foreignKey:true
      },
      item: {
        type: Sequelize.STRING
      },
      qty: {
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.INTEGER
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
    return Order;
  };