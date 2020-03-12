import { peppermintModule } from "./module/peppermint.module";

import { path } from "../lib/thyme";

const Data = function(){
    this.oninit = function() {
        setTimeout(()=>{
            this.pages = window.pptdata.map(x=>({
                content: x.join("\n")
            }));
            if (path.path.length === 0) {
                path.path = ["1"];
                this.page = 1;
            }
            dill.change();
        },0);
    }
    this.page = path.path[0];
    this.pages = [];
    this.results = [];
    this.currentContent = function(){
        return `<section>${this.pages[this.page-1] ? this.pages[this.page-1].content : ""}</section>`;
    }
    this.nosubmit = event => event.preventDefault();
    this.goLeft = function(){
        this.page > 1 && (this.page--);
        path.path = [this.page];
    }
    this.goRight = function(){
        this.page < this.pages.length && (this.page++);
        path.path = [this.page];
    }
    this.goHome = function(){
        if (this.page === 1) {
            return false;
        }
        this.page = 1;
        path.path = [this.page]
    }
};

const data = dill.create(peppermintModule,Data,document.body);

window.addEventListener("keyup",event => {
    const key = event.which;
    if (key !== 37 && key !== 39 && key !== 38) {
        return;
    }
    if (key === 37) {
        data.goLeft();
    }
    else if (key === 39) {
        data.goRight();
    }
    else if (key) {
        data.goHome();
    }
    dill.change();
});
