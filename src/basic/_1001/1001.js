
/*
题目： 害死人不偿命的(3n+1)猜想
描述：
卡拉兹(Callatz)猜想：
对任何一个自然数n，如果它是偶数，那么把它砍掉一半；如果它是奇数，那么把(3n+1)砍掉一半。这样一直反复砍下去，最后一定在某一步得到n=1。
卡拉兹在1950年的世界数学家大会上公布了这个猜想，传说当时耶鲁大学师生齐动员，拼命想证明这个貌似很傻很天真的命题，结果闹得学生们无心学业，
一心只证(3n+1)，以至于有人说这是一个阴谋，卡拉兹是在蓄意延缓美国数学界教学与科研的进展……
我们今天的题目不是证明卡拉兹猜想，而是对给定的任一不超过1000的正整数n，简单地数一下，需要多少步（砍几下）才能得到n=1？
输入格式：每个测试输入包含1个测试用例，即给出自然数n的值。
输出格式：输出从n计算到1需要的步数。
输入样例：
3
输出样例：
5
 */
var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(data) {
    // 获取输入
    var inputs = data.trim();

    // 处理
    var result = deal(inputs, 0);

    // 输出结果
    console.log(result);
    rl.close();
});

function deal(inputs, num) {
  if (inputs == 1) {
    return num
  }
  if (inputs % 2 == 0) {
    return deal(inputs/2, num + 1)
  } else {
    return deal((3*inputs + 1)/2, num + 1)
  }
}
