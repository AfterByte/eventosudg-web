import React, { Component, useContext, Children, useEffect } from "react";
import SideBar from "../Components/SideBar";
import EventCard, { Event } from "../Components/EventCard";
import Header from "../Components/Header";
import Taskbar from "../Components/TaskBar";

import { ResponsiveContext, RespContextPayload } from "../Components/Routes";

interface EventProps {
  events: Event[];
}

const UpcomingEvents = ({ events }: EventProps) => {
  const { sidebarHidden } = useContext(ResponsiveContext) as RespContextPayload;
  const eventCards: any = [];
  for (const event of events) {
    eventCards.push(<EventCard event={event} />);
  }
  return (
    <div className="h-full">
      <div className="grid grid-cols-6 h-screen">
        <div
          className={
            !sidebarHidden
              ? "hidden sm:grid sm:col-span-1 sm:fixed sm:h-full sm:z-20 sm:w-1/6"
              : "col-span-6 sm:grid sm:col-span-1 z-20 sm:fixed h-full"
          }
        >
          <SideBar />
        </div>
        {!sidebarHidden ? (
          <div className="fixed z-10 w-full">
            <div className="grid grid-cols-6">
              <div className="col-span-6 sm:col-start-2 sm:col-end-7">
                <Header barTitle={"Próximos Eventos"} />
                <Taskbar />
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden"></div>
        )}

        {!sidebarHidden ? (
          <div className="col-span-6 sm:col-start-2 sm:col-end-7 w-full h-full pt-24 sm:pt-24 z-0 pb-24 sm:pb-12 bg-indigo-500 bg-opacity-50">
            <div className="grid grid-cols-12 mt-12 sm:mt-24 mb-4 sm:mb-8">
              <div className="col-start-2 col-end-12 gap-4 grid sm:grid-cols-12 grid-cols-1 mt-8 pb-1">
                {eventCards}
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden"></div>
        )}
      </div>
    </div>
  );
};
export default UpcomingEvents;
