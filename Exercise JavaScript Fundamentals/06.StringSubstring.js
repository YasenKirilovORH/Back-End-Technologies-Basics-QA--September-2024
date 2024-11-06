function stringSubstring(word, text)
{
    let wordToLowerCases = word.toLowerCase();
    let textToLowerCases = text.toLowerCase();

    let wordsArray = textToLowerCases.split(' ');

    if (wordsArray.includes(wordToLowerCases))
    {
        console.log(word);
    }
    else
    {
        console.log(`${word} not found!`)
    }

}
stringSubstring('python',
'JavaScript is the best programming language'
)