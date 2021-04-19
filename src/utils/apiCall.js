const apiCall = async (url, dataSetter) => {
  //loadedSetter(false);
  const data = await fetch(url);
  const returnedData = await data.json();
  dataSetter(returnedData.results);
  // loadedSetter(true);
};

export default apiCall;
