import template from "./PFooter.template";

let timeout;

export const PFooter = function(){
    this.search = null;
    this.updateSearch = function() {
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            const query = this.search.value.toLowerCase();
            this.results = query === "" ? [] : [].map((x,i)=>({label:x,targetPage:i+1})).filter(x=>x.label.toLowerCase().indexOf(query)>-1);
            dill.change();
        },300);
    }
};

PFooter.component = new dill.Component("p-footer",template);
