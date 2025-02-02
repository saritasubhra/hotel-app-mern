import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

function BookingProvider({ children }) {
  const [guests, setGuests] = useState();
  const [dates, setDates] = useState({
    from: null,
    to: null,
  });

  return (
    <BookingContext.Provider value={{ dates, setDates, guests, setGuests }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) throw new Error("Context used outside of provider");
  return context;
}

export default BookingProvider;
