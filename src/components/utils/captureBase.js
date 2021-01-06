// 原型继承
export var Extend=function (child,parent){
    child.prototype=new parent({});
    child.prototype.constructor=child;
}