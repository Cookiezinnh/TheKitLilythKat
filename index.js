//      Informações Basicas:
// -    O Bot Utiliza como Lingaguem de Progamação, JavaScript (".js") ;
// -    Para Ligar o Bot, Basta digitar " Node . " ou " Node index.js " No Terminal ;
// -    Para Desligar o Bot, Basta Apertar " Ctrl + C " no Terminal .

//      Informações sobre a Aplicação:
// -    Token: OTgyOTkzNDIzNzk3NzE5MDkw.GeAgUc.SKQPSScczu91WxFJCoWrDAukU6psGhVDXprm-4 ;
// -    Applicaiton ID: 982993423797719090 ;
// -    Public Key: 35035529dd999f7e5be054c8d082af72c6e911f2475a444cc8829004c7bdc090 ;
// -    Link de Invite: https://discord.com/oauth2/authorize?client_id=982993423797719090&scope=bot&permissions=8 .


//      Chama a Variavel Discord.js para a Aplicação ;
const Discord = require("discord.js")

//      Chama a Variavel DotEnv pra a Aplicação ;
require("dotenv").config()

//      Cria uma Variavel para Armazenar o Token que será usado ;
const Token = "OTgyOTkzNDIzNzk3NzE5MDkw.GeAgUc.SKQPSScczu91WxFJCoWrDAukU6psGhVDXprm-4"

//      Cria uma Variavel para acessar a API do Discord ( aka. BotClient ) ;
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

//      Essa linha de Codigo e Execultada quando a aplicação Realiza o log-in com Exito ;
// -    
client.on("ready", () => {
    console.log(`Log-in da Aplicação Realizado com Sucesso! Usuario: ${client.user.tag}`)
})

//      Realiza o Log-In usando o Token ;
// -    Esta linha de Codigo devera Ficar ao Final da aplicação.
client.login(process.env.Token)