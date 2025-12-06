import "../styles/CallSection.css";
import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay
} from "date-fns";

export default function CallSection() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [timezone, setTimezone] = useState("Asia/Kolkata");

  const timezones = [
    { value: "Asia/Kolkata", label: "India Standard Time (IST)" },
    { value: "America/New_York", label: "Eastern Time (ET)" },
    { value: "America/Los_Angeles", label: "Pacific Time (PT)" },
    { value: "Europe/London", label: "British Time (BST)" },
    { value: "Europe/Paris", label: "Central European Time (CET)" },
    { value: "Australia/Sydney", label: "Australia (AEST)" }
  ];


  const renderHeader = () => (
    <div className="cal-header">
      <button className="cal-nav" onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>←</button>
      <h3 className="cal-month">{format(currentMonth, "MMMM yyyy")}</h3>
      <button className="cal-nav" onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>→</button>
    </div>
  );


  const renderDays = () => {
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div className="cal-days">
        {weekDays.map((day) => (
          <div className="cal-day-name" key={day}>{day}</div>
        ))}
      </div>
    );
  };


  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    let rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;

        days.push(
          <div
            className={`cal-cell ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={() => setSelectedDate(cloneDay)}
          >
            {format(day, "d")}
          </div>
        );

        day = addDays(day, 1);
      }

      rows.push(<div className="cal-row">{days}</div>);
      days = [];
    }

    return <div className="cal-body">{rows}</div>;
  };

  const confirmAppointment = () => {
    if (!selectedTime) {
      alert("Please select a time!");
      return;
    }

    alert(
      `Appointment confirmed: ${format(selectedDate, "yyyy-MM-dd")} at ${selectedTime} (${timezone})`
    );
  };

  return (
    <section id="book-call" className="book-sec">
      <div className="book-wrapper">


        <div className="book-left">
          <h2 className="book-title">Book A Your Free Discovery Call</h2>

          <p className="book-sub">
            Get a personalized strategy to improve your website’s design,
            conversions, and user experience
          </p>

          <ul className="book-list">
            <li>✔ 100% client satisfaction</li>
            <li>✔ 3500+ Projects Delivered</li>
            <li>✔ Trusted by 3500+ brands worldwide</li>
          </ul>

          <div className="author-box">
            <img 
              src="/src/assets/WhatsApp Image 2025-12-06 at 1.15.05 PM.jpeg"
              alt="Shekhar"
              className="author-img"
            />
            <div>
              <h3 className="author-name">Shekhar Hans</h3>
              <p className="author-role">UI/UX Designer / CRO Expert</p>
              <a href="#book-call" className="author-link">Speak with an expert</a>
            </div>
          </div>
        </div>

      
        <div className="book-right">
          <div className="calendar-container">

            {renderHeader()}
            {renderDays()}
            {renderCells()}

        
            <label className="tz-label">Time Zone:</label>
            <select
              className="tz-select"
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
            >
              {timezones.map((tz) => (
                <option key={tz.value} value={tz.value}>{tz.label}</option>
              ))}
            </select>

            {/* TIME */}
            <label className="time-label">Select Time:</label>
            <input
              type="time"
              className="time-input"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            />

            <button className="confirm-btn" onClick={confirmAppointment}>
              Confirm Appointment
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
