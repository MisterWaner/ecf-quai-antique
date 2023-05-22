//Import module
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

//Token extraction
let adminAuth = (req, res, next) => {
    
    const token = req.cookies.jwt
    
    if(token) {

        jwt.verify(token, process.env.SECRET_TOKEN, (error, decodedToken) => {
            if(error) {
                return res.status(401).json({message : "Non autorisé"})
            } else {
                if(decodedToken.role !== "admin") {
                    return res.status(401).json({message : "Non autorisé"})
                } else {
                    next()
                }
            } 
        })  
    } else {
        return res.status(401).json({message : "Non autorisé, token non valable"})
    }
}

let clientAuth = (req, res, next) => {
    const token = req.cookies.jwt
    
    if(token) {

        jwt.verify(token, process.env.SECRET_TOKEN, (error, decodedToken) => {
            if(error) {
                return res.status(401).json({message : "Non autorisé"})
            } else {
                if(decodedToken.role !== "client") {
                    return res.status(401).json({message : "Non autorisé"})
                } else {
                    next()
                }
            } 
        })  
    } else {
        return res.status(401).json({message : "Non autorisé, token non valable"})
    }
}



export const auth = {
    adminAuth, clientAuth
};