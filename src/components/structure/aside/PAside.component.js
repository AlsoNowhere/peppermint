import template from "./PAside.template";
import { path } from "../../../../lib/thyme";

export const PAside = function(){
    this.hasResults = function(){return this.results.length>0;};
    this.goToPage = function(){
        this.page = this.targetPage;
        path.path = [this.page];
    }
};

PAside.component = new dill.Component("p-aside",template);
