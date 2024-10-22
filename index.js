function callback(){
}
function receivesAFunction ( fn){
    fn()
}
function returnsANamedFunction(func){
    return function sayHello(){
        const hello = 'hi'
    }
}
function returnsAnAnonymousFunction ( ){
    return ( )=>{
        return 'hello'
    }
}
