import mongoose from 'mongoose';

export default async function mongooseSetup(app){
    try{
        await mongoose.connect('mongodb://127.0.0.1/JavaScriptBack-End');
        console.log('Successfully connected');
    } catch(err){
        console.log(err.message);
    }
}