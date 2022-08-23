const year = 2000;

function leapYear(year) {
  let isLeap = false;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    isLeap = true;
  } else isLeap = false;
  return isLeap;
}

const res = leapYear(year);

if (res == true) {
  console.log(`${year} Leap Year`);
} else {
  console.log(`${year} Not a leap year`);
}
