"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';

const EventContext = createContext();

export const useEventContext = () => useContext(EventContext);

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  // Retrieve events from local storage on component mount
  useEffect(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  const addEvent = (event) => {
    const newEvents = [...events, event];
    setEvents(newEvents);
    localStorage.setItem('events', JSON.stringify(newEvents));
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};
