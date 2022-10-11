const question = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido hoje? O que eu posso fazer para melhorar?",
    "Eu ajudei alguem?",
    "O que me deixou feliz?"
];

const ask = ( index = 0) => {
    process.stdout.write("\n" + question[index] + " > ")
}

ask();

const ansewrs = []
process.stdin.on("data", data => {
    ansewrs.push( data.toString().trim());
    if(ansewrs.length < question.length) {
        ask(ansewrs.length);
    } else {
        process.exit();
    }
});

process.on("exit", () => {
    console.log(`
    Bacana Valnei

    O que aprendi hoje?
    ${ansewrs[0]}

    O que me deixou aborrecido hoje? O que eu posso fazer para melhorar?
    ${ansewrs[1]}

    Eu ajudei alguem?
    ${ansewrs[2]}

    O que me deixou feliz?
    ${ansewrs[3]}
    `)
})