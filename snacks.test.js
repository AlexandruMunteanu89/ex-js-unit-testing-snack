const { 
    getInitials, 
    createSlug, 
} = require("./snacks.js");


//  Snack 1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Alexandru Munteanu")).toBe("A.M.");
})




//  Snack 2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("Voglio Che Mi Restituisce Tutto In Maiuscolo")).toBe("voglio che mi restituisce tutto in maiuscolo");
})