/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
    const greatest = Math.max(...candies);
    const result = [];

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= greatest) {
            result.push(true);
        } else {
            result.push(false);
        }
    }

    return result;
}