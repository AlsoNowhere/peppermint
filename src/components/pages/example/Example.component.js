import template from "./Example.template";

export const Example = function(){
    const Example = function(){};

    Example.prototype = new dill.ComponentPrototype("example",template);

    return Example;
}();
        