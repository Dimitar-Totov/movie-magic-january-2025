import Cast from "../models/Cast.js";

const getAll = () => Cast.find();

export default {
    getAll
}