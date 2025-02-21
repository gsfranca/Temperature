const TEMPERATURAS = 
{
    Sao_Paulo: [29, 28, 20, 19, 30, 22],
    Rio_de_Janeiro: [31, 30, 40, 24, 27, 28],
    Parana: [20, 18, 3, 5, 15, 12],
}

let MEDIA = 0
let MEDIAS = []
let SOMA = 0
Object.entries(TEMPERATURAS).forEach(([CIDADE, TEMPERATURAS_CIDADE]) => 
{
    TEMPERATURAS_CIDADE.forEach(TEMPERATURA => 
    {
        MEDIA += TEMPERATURA
    })

    MEDIA = MEDIA/6
    MEDIAS.push(MEDIA)

});

for (let i = 0; i < MEDIAS.length; i++) {
    if (MEDIAS[i] < 20) 
    {
        console.log(`\nA cidade ${Object.entries(TEMPERATURAS)[i][0]} esta fria, use casaco`)
    }
    else
    {
        console.log(`\nA cidade ${Object.entries(TEMPERATURAS)[i][0]} esta quente, use regata`)
    }
}