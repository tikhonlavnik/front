let getDayInfo = (date) => {
  let day = date.substr(0,2),
      month = date.substr(3,2),
      year = date.substr(6,4),
      week,
      months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
      days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  date = year + "-" + month + "-" + day;
  date = new Date(date);
  let weekDay = days[date.getDay()];
  month = months[month-1];
  if (day <= 7) {
    week = 1;
  } else if (day <= 14) {
    week = 2;
  } else if (day <= 21) {
    week = 3;
  } else if (day <= 28) {
    week = 4;
  } else {
    week = 5;
  }

  console.log(`${weekDay}, ${week} неделя ${month} ${year} года`);
}

getDayInfo("01.01.2022");
getDayInfo("15.12.2021");