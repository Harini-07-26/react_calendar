import React, { useState } from "react";
import dayjs from "dayjs";
import { generateDate, months, selectClass } from "../util/CalendarDays";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import './Calendar.css';

const Calendar = (selectedDate) => {
	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(selectedDate);
	
	return (
		<Card className="calendar">
			<CardContent>
				<div className="container">
					<div style={{ width: '28rem', height: '24rem' }} >
						<div className="calender-header">
							<h1 className="month-year">
								{months[today.month()]}, {today.year()}
							</h1>
							<div className="calender-header">
								<BsArrowLeftCircleFill
									className="arrow"
									onClick={() => {
										setToday(today.month(today.month() - 1));
									}}
								/>
								<BsArrowRightCircleFill
									className="arrow"
									onClick={() => {
										setToday(today.month(today.month() + 1));
									}}
								/>
							</div>
						</div>
						<div className="grid">
							{days.map((day, index) => {
								return (
									<h1
										key={index}
										className="grid-days"
									>
										{day}
									</h1>
								);
							})}
						</div>

						<div className="grid">
							{generateDate(today.month(), today.year()).map(
								({ date, currentMonth, today }, index) => {
									return (
										<div
											key={index}
											className="grid-cell">
											<h1
												className={selectClass(
													currentMonth ? "" : "text-gray-400",
													selectedDate === date
														? "bg-green-600 text-white"
														: "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
												)}
												onClick={() => {
													setSelectDate(selectedDate);
												}}
											>
												{date.date()}
											</h1>
										</div>
									);
								}
							)}
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
export default Calendar;
