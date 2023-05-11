import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});


// Update the `updatedAt` field before saving the document
categorySchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});
const Category = mongoose.model('Category', categorySchema);

export default Category;
