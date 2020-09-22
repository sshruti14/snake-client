const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

   conn.on('connect',function(){
    console.log("Successfully connected to game server");
    conn.write("SHR");
    // setTimeout(()=>{
    //   conn.write("Move: up");
    // },500)
    
    // // conn.write("Move: down");
    // setTimeout(()=>{
    //   conn.write("Move: left");
    // },500)
    
   
    // conn.write("Move: right");
  })


  conn.on('data',function(data){
    console.log(data);
  })

 
  return conn;
}


module.exports = {connect};