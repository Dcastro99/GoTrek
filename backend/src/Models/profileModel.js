const sequelize = require('sequelize');


function profile(db) {
    return db.define('profile', {
        displayName: sequelize.DataTypes.STRING,
        email: sequelize.DataTypes.STRING,
        bio: sequelize.DataTypes.STRING,
        completedTrails: sequelize.DataTypes.ARRAY,
        photos: sequelize.DataTypes.ARRAY,

    });
}

module.exports = {
    profile,
};