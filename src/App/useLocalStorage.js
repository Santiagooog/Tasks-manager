import React from "react";
export function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageTodos = localStorage.getItem(itemName);//nombre de local
        let parsedItem;
    
        if (!localStorageTodos) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));//se parsea
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageTodos);
          setItem(parsedItem)

        }
        setLoading(false)
        }catch(error){
          setLoading(false)
          setError(true)
        }
    },2000)
  },[]);

  const safeItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return {
    item,
    setItem, 
    safeItem, 
    loading, 
    error};
}
