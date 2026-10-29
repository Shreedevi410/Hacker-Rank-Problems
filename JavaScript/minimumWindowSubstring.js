// Find the shortest substring containing every target character, including duplicates.
function minimumWindowSubstring(source, target) {
    const sourceCharacters = Array.from(source);
    const targetCharacters = Array.from(target);

    if (targetCharacters.length === 0 || sourceCharacters.length < targetCharacters.length) {
        return '';
    }

    const requiredCounts = new Map();
    for (const character of targetCharacters) {
        requiredCounts.set(character, (requiredCounts.get(character) || 0) + 1);
    }

    let missingCharacters = targetCharacters.length;
    let left = 0;
    let bestStart = 0;
    let bestLength = Infinity;

    for (let right = 0; right < sourceCharacters.length; right++) {
        const rightCharacter = sourceCharacters[right];
        const neededCount = requiredCounts.get(rightCharacter);

        if (neededCount !== undefined) {
            if (neededCount > 0) {
                missingCharacters--;
            }
            requiredCounts.set(rightCharacter, neededCount - 1);
        }

        while (missingCharacters === 0) {
            const windowLength = right - left + 1;
            if (windowLength < bestLength) {
                bestStart = left;
                bestLength = windowLength;
            }

            const leftCharacter = sourceCharacters[left];
            const leftCount = requiredCounts.get(leftCharacter);
            if (leftCount !== undefined) {
                requiredCounts.set(leftCharacter, leftCount + 1);
                if (leftCount === 0) {
                    missingCharacters++;
                }
            }
            left++;
        }
    }

    return bestLength === Infinity
        ? ''
        : sourceCharacters.slice(bestStart, bestStart + bestLength).join('');
}

console.log(minimumWindowSubstring('ADOBECODEBANC', 'ABC'));
// Output: 'BANC'
// Time complexity: O(n + m); space complexity: O(k).
