const { 
    getInitials, 
    createSlug,
    average,
    isPalindrome,
    findPostById 
} = require("./snacks.js");


describe('Manipolazione di Stringhe', () => {

    //  Snack 1
    test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
        expect(getInitials("Alexandru Munteanu")).toBe("A.M.");
    });

    //  Snack 5
    test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
        expect(isPalindrome("otto")).toBeTruthy();
        expect(isPalindrome("boolean")).toBeFalsy();
    });
});

describe('Operazioni su Array', () => {
    //  Snack 3
    test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
        expect(average([4, 8, 12])).toBe(8);
    });
    
    
const posts = [
    { id: 1, title: "Introduzione a JavaScript", slug: "introduzione-a-javascript" },
    { id: 2, title: "React Hooks", slug: "react-hooks" }
    ];
    //Snack 7
    test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
        expect(findPostById(posts, 2)).toEqual({ id: 2, title: "React Hooks", slug: "react-hooks" });
        expect(findPostById(posts, 4)).toBe(null);
        expect(() => findPostById(posts, "ciao")).toThrow('"ciao" non è un id');
        expect(() => findPostById([{id: 4, title: 67}], 2)).toThrow('L\'array posts non è nel formato corretto.');
    });

});

describe('Generazione di Slug', () => {
    //  Snack 2
    test('La funzione createSlug restituisce una stringa in lowercase.', () => {
        expect(createSlug("Voglio Che Mi Restituisce Tutto In Maiuscolo")).toBe("voglio-che-mi-restituisce-tutto-in-maiuscolo");
    });


    //  Snack 4
    test('La funzione createSlug sostituisce gli spazi con -.', () => {
        expect(createSlug("sostituisce gli spazi con -")).toBe("sostituisce-gli-spazi-con--");
    });

    //  Snack 6
    test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
        expect(() => createSlug("")).toThrow('Non è valido');
        expect(() => createSlug(null)).toThrow('Non è valido');
    });

});






















