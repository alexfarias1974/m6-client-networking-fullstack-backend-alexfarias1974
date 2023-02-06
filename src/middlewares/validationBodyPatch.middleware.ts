import { Request, Response, NextFunction } from "express";

const validationBodyPatchMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const bodyPatch = req.body;

    const keyArr = Object.keys(bodyPatch)
    
    if(keyArr.includes("isAdm") || keyArr.includes("isActive") || keyArr.includes("id")) {
        return res.status(401).json({
            message: "This paramethers doesn`t could be updated!"
        })
    }

    return next();
};

export default validationBodyPatchMiddleware;