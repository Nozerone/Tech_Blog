
const User = require('./User');
const Posts = require('./Posts');

// User.hasOne(Form, {
//     foreignKey: "userForm",
//     onDelete: "CASCADE",
//     onUpdate: "CASCADE"

// });

Post.belongsTo(User, {               // Define many-to-one relationship: Many Forms belong to one User
    foreignKey: "userPost",          // Use "userForm" as foreign key
});


User.hasMany(Post, {
    foreignKey: 'review_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Post.belongsTo(User, {
    foreignKey: 'post_id'
})


module.exports = { User, Post};
