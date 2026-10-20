const { 
    getInitials, 
    createSlug,
    average, 
} = require("./snacks.js");


//  Snack 1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Alexandru Munteanu")).toBe("A.M.");
})




//  Snack 2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("Voglio Che Mi Restituisce Tutto In Maiuscolo")).toBe("voglio-che-mi-restituisce-tutto-in-maiuscolo");
})



//  Snack 3
test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([4, 8, 12])).toBe(8);
})


//  Snack 4
test('La funzione createSlug sostituisce gli spazi con -.', () => {
    expect(createSlug("sostituisce gli spazi con -")).toBe("sostituisce-gli-spazi-con--");
})