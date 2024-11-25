// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 20, 40, 230);
}

function balloon(t,a,b,c){  //(テキスト, rectの座標, rectのy座標, 背景色)
  let w = textWidth(t); 
  let h = textAscent() + textDescent(); 
  let x = a + w*3/4;  // 吹き出しの始点のx座標
  fill(c);  //背景色
  rect(a, b, w+20, h+10, 10); 
  triangle(x, b+(h+10), x-5, b+(h+10)+10, x+5, b+(h+10)); //しっぽ
  fill(0);
  text(t, a+10, b+h);
}
