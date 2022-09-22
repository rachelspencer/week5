const vowelsLowercase = ['a', 'e', 'i', 'o', 'u'];

const hasMoreVowels = (word) => {
    const wordLetterArray = word.toLowerCase().split(''); // ['u', 'm', 'b', 'r', 'e', 'l', 'l', 'a']
    const wordVowelArray =  wordLetterArray.filter(l => vowelsLowercase.includes(l)) // ['u', 'e', 'a']
    const wordConsonantLength = wordLetterArray.length - wordVowelArray.length // ['u', 'm', 'b', 'r', 'e', 'l', 'l', 'a'] - ['u', 'e', 'a'] = integar

    if (wordVowelArray.length > wordConsonantLength){
        return true
    }
    return false;
};

console.log('True:', hasMoreVowels('umbRelLA'));
console.log('True:', hasMoreVowels('moose'));
console.log('False:', hasMoreVowels('mice'));
console.log('False:', hasMoreVowels('graph'));
console.log('False:', hasMoreVowels('yay'));
console.log('True:', hasMoreVowels('Aal'));

// const hasMoreVowels = (word) => {
//     const wordLetterArray = word.toLowerCase().split(''); // ['u', 'm', 'b', 'r', 'e', 'l', 'l', 'a']
//     const wordVowelArray =  wordLetterArray.filter(l => vowelsLowercase.includes(l)) // ['u', 'e', 'a']
//     const wordConsonantLength = wordLetterArray.length - wordVowelArray.length // ['u', 'm', 'b', 'r', 'e', 'l', 'l', 'a'] - ['u', 'e', 'a']
//     wordVowelArray.length > wordConsonantLength
// };

//to change an array of capitals to lower case

// const alphabetUppercase = [
//         'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
//        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
//        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
//        'Y', 'Z']

// const alphabetLowercase = alphabetUppercase.map(c => c.toLowerCase());
// console.log(alphabetLowercase);

// const vowels = ['A', 'E', 'I', 'O', 'U'].map(v => v.toLowerCase());

// to take vowels out of the alphabet array
// const lowercaseConsonants = alphabetLowercase.filter(v => !vowels.includes(v));
// console.log('lowercaseConsonants', lowercaseConsonants);