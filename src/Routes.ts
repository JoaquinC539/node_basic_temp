import { Router } from "express";
import { DummyController } from "./controller/dummyController";
import { PageController } from "./controller/pageController";

export class Routes{
    private routes:Router=Router();
    private dummyController:DummyController=new DummyController();
    private pageController:PageController=new PageController();
    constructor(){
        this.routes.use(this.dummyController.getRoutes())
        this.routes.use(this.pageController.getRoutes())
    }
    public getRoutes():Router{
        
        return this.routes;
    }
}