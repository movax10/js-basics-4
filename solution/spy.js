var slice = Function.call.bind(Array.prototype.slice);

function Spy(target, method) {
  // Spy function takes an object and a method and starts spying on method calls.
  // It knows how many times it was called and with what arguments.
  // So Spy function returns an object with two methods: count and args.
  //
  // * count returns number of method calls
  // * args returns an array of arrays of arguments
  var origFunction = target[method],
      spier = {count : 0, args : []};
	  
  target[method] = function(){
    spier.args.push(slice(arguments));
    spier.count++;
    return origFunction.apply(this, arguments);
  }
  return spier;
}

module.exports = Spy
