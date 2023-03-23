const number = (number) => {
  return (x = number * number);
};

console.log(number(5));

const isTodayThursday = () => {
  const date = new Date();
  let day = date.getDay();

  return day === 4;
};

console.log(isTodayThursday());
