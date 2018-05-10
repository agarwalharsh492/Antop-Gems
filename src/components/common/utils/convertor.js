const convertPriceHeader = price => {
  if (price == null || price == 0) {
    return 0;
  } else {
    let val = 0;
    let price1 = 0;
    if (price === 999999999) {
      price1 = 30000000;
    } else {
      price1 = price;
    }
    if (price1 >= 10000000) {
      val =
        Number(Math.round(price1 / 10000000 + 'e2') + 'e-2').toFixed(2) +
        ' Crores';
    } else if (price1 >= 100000) {
      val =
        Number(Math.round(price1 / 10000000 + 'e2') + 'e-2').toFixed(2) +
        ' Lakhs';
    }
    return val;
  }
};

export const formatDate = date => {
  let today = date;
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  today = `${dd}/${mm}/${yyyy}`;
  return today;
};

export default { convertPriceHeader, formatDate };
