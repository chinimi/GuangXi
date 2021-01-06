/***
 * 实现寄生式组合继承
 *  @property {Object} 子类的类型
 *  @property {Object} 父类的类型
 * */
export var extendJS = function(child , father){
    function Temp(){}
    Temp.prototype = father.prototype
    let temp = new Temp();
    child.prototype = temp;
    temp.constructor = child;
}

/***
 * 实现openlayers式继承
 *  @property {Object} 子类的类型
 *  @property {Object} 父类的类型
 * */
export var extendEs5 = function(child , father){
    assert(child && father, child + father + "传入参数不能为空")
    child.__proto__ = father
    child.prototype = Object.create( father && father.prototype );
    child.prototype.constructor = child;
}

/**
 * @param {*} assertion Assertion we expected to be truthy.
 * @param {number} errorCode Error code.
 */
export var assert = function(assertion, errorCode) {
    if (!assertion) {
    throw new ol.AssertionError(errorCode);
    }
};
