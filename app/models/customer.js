module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
      cid :{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      num: {
        type: Sequelize.INTEGER
      },
    //   total: {
    //     type: Sequelize.INTEGER
    //   },
      // published: {
      //   type: Sequelize.BOOLEAN
      // }
    });
    return Customer;
  };