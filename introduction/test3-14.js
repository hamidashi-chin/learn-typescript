var dayOfWeek = 3;
var dayName;
switch (dayOfWeek) {
    case 0:
        dayName = '日曜日';
        break;
    case 1:
        dayName = '月曜日';
        break;
    case 2:
        dayName = '火曜日';
        break;
    case 3:
        dayName = '水曜日';
        break;
    // 他の曜日のケースも同様に追加可能
    default:
        dayName = ' 不明 ';
        break;
}
console.log(" \u4ECA\u65E5\u306F ".concat(dayName, " \u3067\u3059 "));
