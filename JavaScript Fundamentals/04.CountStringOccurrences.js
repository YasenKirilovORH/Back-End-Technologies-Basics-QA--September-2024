function countStringOccurrences(text, wordToCount) 
{
    let counter = 0;
    let words = text.split(' ');

    for (let word of words)
    {
        if (word === wordToCount)
        {
            counter++;
        }
    }

    console.log(counter);
}

countStringOccurrences('This is a word and it also is a sentence', 'is')