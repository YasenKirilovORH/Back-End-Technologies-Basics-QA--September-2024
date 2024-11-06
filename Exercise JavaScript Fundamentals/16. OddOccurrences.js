function oddOccurrences(input)
{
    let words = input.toLowerCase().split(' ');
    let wordsCount = {};

    words.forEach(word => {
        if (wordsCount[word])
        {
            wordsCount[word]++;
        }
        else
        {
            wordsCount[word] = 1;
        }
    });

    let result = [];

    input.split(' ').forEach(word => {
        if (wordsCount[word.toLowerCase()] % 2 !== 0 && !result.includes(word.toLowerCase()))
        {
            result.push(word.toLowerCase());
        }
    });

    console.log(result.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')