//変数(num)が3の倍数の場合： “3の倍数です”
//変数(num)が5の倍数の場合： “5の倍数です”
//変数(num)が3と5の倍数の場合： “3と5の倍数です”
//それ以外の場合： 変数(num)を出力する


let num = Math.floor(Math.random() * 15) + 1;
  console.log(num);   //変数numの値を出力する（確認用）
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
} else if (num % 3 === 0) {
  console.log('3の倍数です');
} else if (num % 5 === 0) {
  console.log('5の倍数です');
} else {
  console.log(num);
}