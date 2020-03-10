import * as express from "express";
import { Request,Response} from 'express';
import * as bp from 'body-parser';
import {RoutesToExpress} from '../Routes/Index';
import { RouteBody } from '../Models/interfaces/RouteBody';
import path = require("path");
import { ejs } from 'ejs';

export class App{
    
    public app:express.Application;
    constructor(){
        this.app = express();
        this.config();
    }

    config(){
        this.app.use(bp.json());
        RoutesToExpress.forEach((route:RouteBody)=>{
            (this.app as express.Application)[route.method](route.url,async(req:Request,res:Response)=>{
                return await (route.controller)[route.target](req,res);
            })
      })
   }
 
   confViews(){
    const appl = express();
    appl.set('view engine','ejs');
    appl.set('views',path.join(__dirname,'views'))
    appl.engine('html', ejs.renderFile);
   }
   
}