import express from 'express';
import mongoose from 'mongoose';

import Location from '../models/location.js';

const router = express.Router();

export const register = async (req, res) => {
    const {distance , city } = req.body;
    
    try {
        // console.log(req.body)
        let price = 0;
        const location = await Location.findOne({cityname :city }) // Checking the amount per km for the respective city
        price = distance * location.amountperkm;


        let noemail = ["london","paris"];
        console.log(distance,city,price);
        let flag = false;

        if((distance < 1000 && distance > 30) && price < 50){

            if(city!="" && !noemail.includes(city)){
                flag = true;
            }else{
                flag = false;
            }
            
        }else if(distance >= 1000){
           res.json({message : "Too far to ride"});
           return;
          
        }else{
            flag = false;
        }

        res.json({registrationneeded : flag});

        
      
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const addlocation = async (req, res) => {
    
    // console.log("hello");
    const location= req.body;
        console.log(location);
      
        try {
            let newlocation ;
            location.map(async (locate)=>{
                newlocation = new Location(locate);  //  saving each city in database for admin and conodition checking
                await newlocation.save();
            })
            
    
            res.status(201).json({message : "Successfully added"});
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
   
}

export default router;