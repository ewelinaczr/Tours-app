import { createContext, useEffect, useState } from "react";

export const TotalPriceContext = createContext({
  // turistsNo: 1,
  // setTuristsNo: () => null,
  // basicPrice: 0,
  // setBasicPrice: () => null,
  // totalPrice: 0,
  // addPrices: () => {},
  // removePrices: () => {},
});

// const addPrice = (totalPrice, priceToAdd) => {
// 	const newPrice = totalPrice + priceToAdd;
// 	return newPrice;
// };

// console.log(addPrice(30, 5));

export const TotalPriceProvider = ({ children }) => {
  const [turistsNo, setTuristsNo] = useState(1);
  const [basePrice, setBasePrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState([]);
  const [prices, setPrices] = useState([]);

  // TURISTS NUMBER
  const increaseGuests = () => {
    if (!(turistsNo >= 8)) setTuristsNo(turistsNo + 1);
  };
  const decreaseGuests = () => {
    if (!(turistsNo <= 1)) setTuristsNo(turistsNo - 1);
  };

  // useEffect(() => {
  //   const newTotal = prices.reduce((total, price) => total + price, 0);
  //   setTotalPrice(newTotal);
  // }, [prices]);

  useEffect(() => {}, []);

  const addPrices = (priceToAdd) => {
    setPrices((prices) => [...prices, priceToAdd]);
  };

  const removePrices = (priceToRemove) => {
    const newPrices = [...prices];
    for (var i = 0; i < newPrices.length; i++) {
      if (newPrices[i] === priceToRemove) {
        newPrices.splice(i, 1);
      }
    }
    setPrices(newPrices);
  };

  // addToCart(20);
  // console.log(totalPrice);

  // const addPriceToCart = (priceToAdd) => {
  // 	prices.push(priceToAdd);
  // };
  // console.log(prices);
  // // console.log(totalPrice);

  useEffect(() => {
    const newSum = prices.reduce((total, price) => total + price, 0) || 0;
    const newTotal = newSum + basePrice * turistsNo;
    setTotalPrice(newTotal);
  }, [prices, basePrice, turistsNo]);

  const value = {
    addPrices,
    removePrices,
    prices,
    basePrice,
    setBasePrice,
    totalPrice,
    turistsNo,
    setTuristsNo,
    increaseGuests,
    decreaseGuests,
    // addPriceToCart,
  };
  return (
    <TotalPriceContext.Provider value={value}>
      {children}
    </TotalPriceContext.Provider>
  );
};
