function hello(nome = "World") {
    if (typeof nome !== "string") {
        nome = "World";
    }

    return "Hello, " + nome + "!";
}