function getInitials(fullName){
    const [nome, cognome] = fullName.split(" ").filter(str => str !== '');
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlug(str){
    if(!str){
        throw new Error('Non è valido');
    }
    return str.toLowerCase().replaceAll(" ", "-");
}


function average(num){
    let somma = 0;
    num.forEach(n => {
        somma += n;
    });
    return somma / num.length;
}


function isPalindrome(parola){
    const parolaInv = parola.split('').reverse().join('');
    return parola === parolaInv;
}

function findPostById(posts, id){
    if(isNaN(id)){
        throw new Error(`"${id}" non è un id`);
    }
    posts.forEach(p => {
        if(
            p.id === undefined ||
            p.title === undefined ||
            p.slug === undefined

        ){
            throw new Error(`L'array posts non è nel formato corretto.`)
        }
    });
    return posts.find(post => post.id === id) || null;
}


module.exports = { getInitials, createSlug, average, isPalindrome, findPostById }