const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
    {
        description: String,
        category: String,
        dueDate: Date,
        createdAt: {
            type: Date,
            default: Date.now
        }
    });


module.exports = mongoose.model('Todo', taskSchema);