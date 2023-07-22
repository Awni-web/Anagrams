
const anagrams = [
"oz bilal tochberer",
"it's razorbill beachcomber",
"och robe tilblazer",
"bib chorizo cellarmaster",
"thor bble carizole",
"zll borcht aberoie",
"brzl orche atobile",
"dame shelburne characterizing",
"uber englishman characterized",
"agnes rhumbline characterized",
"rehab scrutinized charlemagne",
"dreams zurich interchangeable",
"bam hamster technocratic",
"mechatronic masterbatch",
"bam ratchet mechatronics"
]

function isAnagramInArray(anagram, arr){
    const result = [];
    for (const i in arr) {
        const word = arr[i];
    
        const sorted = word.replace("'", '').split("").sort().join("");
        if (anagram.toLowerCase().split("").sort().join("") == sorted) {
            result.push(arr[i])
        }
    }
    return result;
}

console.log(isAnagramInArray("Bob Ziroll Teacher", anagrams));