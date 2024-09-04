// HTMLから要素を取得
const btn = document.getElementById('btn'); // ボタン要素
const text = document.getElementById('text'); // テキストを表示する要素


btn.addEventListener('click', () => {
  // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
  // textのコンテンツを直接変更します
setTimeout(() => {
  text.textContent = 'ボタンをクリックしました';
}, 2000);
});

