import { insertController } from "./product/insert.controller.js";
import { getAllProductsController } from "./product/getAllProducts.controller.js";
import { getByIdController } from "./product/getById.controller.js";
import { homeController } from "./product/home.controller.js";
export default (dependency)=>{
    return {
        insert:insertController(dependency),
        getAllProduct:getAllProductsController(dependency),
        getById:getByIdController(dependency),
        home:homeController()
    }
}