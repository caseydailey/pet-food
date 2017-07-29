let words = [

    "aword",
    "bword",
    "aword",
    "bword",
    "aword",
    "bword",
    "cword",
    "bword",
    "cword",
    "bword",
    "cword",
]

let alpha = words.reduce((a,word)=>{
    if (!a[word[0]]) {a[word[0]] = [word]}
        else{ a[word[0]].push(word)};
    return a;
}, {} );

console.log("alpha:", alpha);