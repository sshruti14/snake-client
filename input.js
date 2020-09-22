/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

 let connection;

const setupInput = function(conn) {
  connection = conn ;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = function(data){
  if (data === '\u0003') {
    process.exit();
  } 
  if(data === "w"){
    connection.write('Move: up')
  }
  if(data === "s"){
    connection.write('Move: down')
  }
  if(data === "d"){
    connection.write('Move: left')
  }
  if(data === "a"){
    connection.write('Move: right')
  }
  if (data === 'H' || data === 'h') {
    /* H, h ====> Hi there */
    connection.write('Say: Hi there');
    console.log('Said: Hi there');
  } 
}


  module.exports ={setupInput};
  