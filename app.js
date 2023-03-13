// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
    // 拆成單字
    const result = input.split(" ")
    // 拆成字母
        .map((word) => word.split(""))
    // 算字母分數 並回傳分數跟組成單字
        .map((letter) => {
            return {
                score: letter.reduce((acc, cur) => {
                    return acc + (cur.charCodeAt() - 96) }, 0
                ),
                word: letter.join("")};
        })
    // 依照分數排列 由大到小
        .sort((a, b) => b.score - a.score);

    return result[0].word;
}

console.log(highestScoreWord("lorem ipsum dolor sit amet")) // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")) // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")) // 印出 there