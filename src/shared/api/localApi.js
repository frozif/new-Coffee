function LocalApi() {
  return {
    addReserve: (reserveInfo) => {
      const reserves =
        JSON.parse(localStorage.getItem('reserve')) || [];

      reserves.push(reserveInfo);

      localStorage.setItem('reserve', JSON.stringify(reserves));


        return Promise.resolve({
        reserveInfo
      });
    }
  };
}


export default LocalApi