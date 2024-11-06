function revealWords(words, text)
{
    let wordsList = words.split(', ');

    wordsList.forEach(word => {
        let template = '*'.repeat(word.length);
        text = text.replace(template, word);
    });


    return text;
}

console.log(revealWords('great',
'softuni is ***** place for learning new programming languages'
))