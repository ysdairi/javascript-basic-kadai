// HTMLから要素を取得
const btn = document.getElementById('btn'); // ボタン要素
const text = document.getElementById('text'); // テキストを表示する要素

btn.addEventListener('click', () => {
  // textのコンテンツを直接変更します
  text.textContent = 'ボタンをクリックしました';
});
