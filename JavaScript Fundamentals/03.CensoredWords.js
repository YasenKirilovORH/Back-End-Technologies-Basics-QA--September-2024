function censoredWords(text, censoredWord)
{
    let resultText = text.replace(censoredWord, '*'.repeat(censoredWord.length));

    while (resultText.includes(censoredWord))
    {
        resultText = resultText.replace(censoredWord, '*'.repeat(censoredWord.length))
    }
    console.log(resultText);
}

censoredWords('Find the hidden word', 'hidden')