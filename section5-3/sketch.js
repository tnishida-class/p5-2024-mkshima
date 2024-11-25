// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }

    let diy = daysInYear(i)
    console.log(i + "年は" + diy + "日間")
    
  }

  let w = dayOfWeek(2018, 3, 8);
  let p = dayOfWeekAsString(w);
  console.log(p);

}

function calendar(y, m){
  // let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  // BLANK[1]
  return isLeapYear(y) ? 366:365;
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

//その年のうちの何日目かを数える関数
function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  // BLANK[2]
  let count1 = 0;
  for(let i = 1990; i < y; i++){
    count1 += daysInYear(i);
  }
  let count2 = 0;
  for(let i = 1; i < m; i++){
    count2 += daysInMonth(y, i);
  }
  let count3 = 0;
  for(let i = 1; i <= d; i++){
    count3 += 1;
  }
  
  // console.log(count1, count2, count3);
  
  let countsum = count1 + count2 + count3
  
  // console.log(countsum);

  let n = countsum % 7;

  return n;
}





function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
