import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setbooks] = useState([
    { title: "Aziyade", id: 1 },
    { title: "Sincaplar oteli", id: 2 },
    { title: "Kurkmantolu madonna", id: 3 },
    { title: "İcimizdeki şeytan", id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
