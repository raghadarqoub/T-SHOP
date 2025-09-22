import { v2 as cloudinary } from "cloudinary";
import Product from "../models/productModel.js";
const addProduct = async (req, res) => {
try {
    console.log("REQ BODY:", req.body);
console.log("REQ FILES:", req.files);

    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;
    const image1 = req.files.image1 && req.files.image1[0] ;
    const image2 = req.files.image2 && req.files.image2[0]  ;
    const image3 = req.files.image3 && req.files.image3[0] ;
    const image4 = req.files.image4 && req.files.image4[0] ;
    const images = [image1, image2, image3, image4].filter((item => item !== undefined));
    let imagesUrl = await Promise.all(
        images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path ,{resource_type : "image"});
        return result.secure_url
    })       
)

    const productData = new Product ({
        name,
        description,
        category,
        price : Number(price),
        subCategory,
        bestseller: bestseller === "true" ? true : false,
        sizes : JSON.parse(sizes),
        image: imagesUrl,
        date: Date.now(),
    });
    console.log(productData);
    const product = await Product.create(productData);
    await product.save();
    res.json ({success : true , message : "Product added successfully"});
} catch (error) {
    console.error(error);
    res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error.message, 
    });
}
};

const listProucts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({success : true , products});
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message, 
        });
    }
};
const removeProduct = async (req, res) => {
    try {

        await Product.findByIdAndDelete(req.body.id);
        res.json({success : true , message : "Product removed successfully"});
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message, 
        
        });
    }
};

const singleProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.body.id);
        res.json({success : true , product});
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message, 
        });
    }
};

export { listProucts, removeProduct, addProduct, singleProduct };