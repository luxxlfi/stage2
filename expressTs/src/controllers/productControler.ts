import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, price, description, stock } = req.body;
        const newProduct = await prisma.product.create({
            data: {
                name: name,
                price: Number(price),
                stock: Number(stock),
                description: description,
            }
        });

        return res.status(200).json({
            massage: "production created!",
            data: newProduct
        });

    } catch (error) {
        return res.status(500).json({
            massage: "failed create!",
            error: error
        });
    }
};

export const getAllproduct = async (req: Request, res: Response) => {
    try {
        const products = await prisma.product.findMany();

        return res.status(200).json({
            massage: "production fetched!",
            data: products
        });

    } catch (error) {
        return res.status(500).json({
            massage: "failed fetch!",
            error: error
        });
    }
}

export const getProductbyId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await prisma.product.findUnique({
            where: {
                id: Number(id)
            }
        });

        if (!product) {
            return res.status(404).json({ masssage: "product not found" });
        }
        return res.status(200).json({
            massage: "product fatched",
            data: product
        });

    } catch (error) {
        return res.status(500).json({
            massage: "failed fetch product",
            error: error
        });
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, price, description, stock } = req.body;

        const updatedProduct = await prisma.product.update({
            where: {
                id: Number(id)
            },
            data: {
                name,
                price: Number(price),
                stock: Number(stock),
                description
            }
        });

        return res.status(200).json({
            masssage: "product updated",
            data: updatedProduct
        })
    } catch (error) {
        return res.status(500).json({
            massage: "failed updated product",
            error: error
        });
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await prisma.product.delete({
            where: {
                id: Number(id)
            }
        });

        return res.status(200).json({
            massage: "product deleted"
        });

    } catch (error) {
        return res.status(500).json({
            massage: "failed deledete product",
            error: error
        });
    }
}
