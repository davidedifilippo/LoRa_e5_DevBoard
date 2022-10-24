unction Decoder(bytes, port) {
 var result = ""; 
 for (var i = 0; i < bytes.length; i++) { 
   result += String.fromCharCode(parseInt(bytes[i])); 
 } 
 result = result.replace(/\0/g, "");
 var sensors = result.split("-");
 
   return { payload: {"temperature": parseFloat(sensors[0]),"humidity": parseFloat(sensors[1]), }}}
               
