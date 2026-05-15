import { Request, Response } from "express";

export const hallo = (req: Request, res: Response) => {
    return res.send("haloo")
};

export const profile = (req: Request, res: Response) => {
    const { name } = req.params;

    return res.json({
        massage: `halloo ${name}`
    });
};

export const login = (req: Request, res: Response) => {
    const {name, email, password } = req.body;

    return res.status(666).json({
        massage: "login berhasil",
        data: {
            name,
            email,
            password
        }
    });
};
