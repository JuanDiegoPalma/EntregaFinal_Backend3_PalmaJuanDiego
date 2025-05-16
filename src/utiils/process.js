import { Command } from 'commander';

const program = new Command()

program
    // .option('-p <port>', 'puerto de funcionamiento del servidor', 8080)
    .option('--mode <mode>', 'modo de funcionamiento del servidor', 'production')
    .parse()

// console.log('options: ', program.opts())
// console.log('resto de los argumentos: ', program.args)    

export{
    program
}