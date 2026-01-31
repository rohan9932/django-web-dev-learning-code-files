// Closure ->
// A top level entity -> {function + required data (lexical scoping/ surrounding state)}
//JS binds required data's reference to every function it has created

// A closure is created at function creation time, not execution time, and only for the variables that function actually references from outer scopes.

// A closure is not a copy of variables.
// It is a reference to a lexical environment.
// That environment is kept alive only if something still needs it.

//used in debouce, throttle

function outerFunc() {
  let name = "Rohan"; // name is a local variable created by outerFunc
  function innerFunc() {
    // innerFunc() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
    //the required data (here name)'s reference is binded with the inner function
  }
  return innerFunc;
}

let inner = outerFunc();

inner();