const sequelize = require('sequelize');


function review(db) {
    return db.define('review', {
        trailName: sequelize.DataTypes.STRING,
        trailRating: sequelize.DataTypes.NUMBER,
        review: sequelize.DataTypes.STRING,
        author: sequelize.DataTypes.STRING,
        comments: sequelize.DataTypes.OBJECT, //??
    });
}

module.exports = {
    review,
};