import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"
import Category from "./category";

const productSchema =  mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    desc:{
        type:String,
    },
    image:{
        type:String
    },
    categoryId: {
        type:mongoose.Types.ObjectId,
        ref:"Category"
    }
}
,{
    timestamps:true, versionKey :false
}
)

productSchema.pre("save", async function (next) {
    const product = this;
    try {
        const result = await Category.updateOne({_id: product.categoryId}, {$push: {product: product._id}});
        next();
    } catch (error) {
        next(error)
    }
})

productSchema.plugin(mongoosePaginate)

export default mongoose.model('Product', productSchema)