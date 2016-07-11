var child = require('child_process').exec,
    readline  = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('catListener-> ');
rl.prompt();

rl.on('line', (line) => {
  comando = line.trim();
  terminal = child(comando);
  terminal.stdout.on('data',(data)=>{
    console.log(data);
    rl.prompt();
  });
  terminal.stderr.on('data',(data)=>{
    console.log(data);
    rl.prompt();
  });
});

var server = function(config){
  config = config || {};
  //console.log(config);

  var comando = '';
  for(i in config){
    if(i == 'enviroment'){
      for(s in config[i]){
        comando = comando + ' '+ s+'='+config[i][s];
      }
    }else{    
      var datos = typeof config[i];
      if(config[i] == 'app'){
        comando = comando + " " + config[i];
      }else{
        comando = comando + " " + config[i];
      }
    }
  }
  server = child(comando);
  server.stdout.on('data', (data) => {
    console.log(data);
    rl.prompt();
  });  
  server.stderr.on('data', (data) => {
    console.log(data);
  });
  console.log(comando);
}

var stylus = function(data){
  var commando = 'stylus ';
  for(i in data){
    var dato = typeof data[i];
    if(dato == 'object'){
      for(s in data[i]){
        var opcion = data[i][s];
        switch(opcion){
          case 'compila':
            commando = commando + '-c' + ' ';
            break;            
          case 'escucha':
            commando = commando + '-w' + ' ';
            break;            
          case 'observa':
            commando = commando + '-o' + ' ';
            break;
          case 'compiles': 
            commando = commando + '-c' + ' ';
            break;
          case 'listener':
            commando = commando + '-w' + ' ';
            break;
          case 'watch':
            commando = commando + '-o' + ' ';
            break;
        }
      }
    }else{
      commando = commando + ' ' + data[i];
    }
  }
  stylu = child(commando);
  stylu.stdout.on('data',(data)=>{
    console.log(data);
    rl.prompt();
  });
  stylu.stderr.on('data',(data)=>{
    console.log(data);
  });
  console.log(commando);
}

var broserify = function(config){
  config = config || {};
  comando = 'watchify ';
  for(i in config){
    var dato = typeof config[i];
    if(dato == 'boolean'){
      if(config[i] == true){
        comando = comando + ' -t [ babelify --presets [ es2015 ] ]';
      }
    }else{
      if(i == 'original'){
        comando =  comando + config[i] + ' -o ';
      }else{
        comando =  comando + config[i];
      }
    }
  }
  broseri = child(comando);
  broseri.stdout.on('data', (data)=>{
    console.log(data);
    rl.prompt();
  });
  broseri.stderr.on('data',(data) => {
    console.log(data);
  });
  console.log(comando);
}

var browserify = function(config){
  config = config || {};
  comando = 'watchify ';
  for(i in config){
    var dato = typeof config[i];
    if(dato == 'boolean'){
      if(config[i] == true){
        comando = comando + ' -t [ babelify --presets [ es2015 ] ]';
      }
    }else{
      if(i == 'original'){
        comando =  comando + config[i] + ' -o ';
      }else{
        comando =  comando + config[i];
      }
    }
  }
  browseri = child(comando);
  browseri.stdout.on('data', (data)=>{
    console.log(data);
    rl.prompt();
  });
  browseri.stderr.on('data',(data) => {
    console.log(data);
  });
  console.log(comando);
}

var cat = {
  server: server,
  stylus: stylus,
  broserify: broserify,
  browserify: browserify
}

module.exports = cat;
