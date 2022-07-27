import FullCalendar from '@fullcalendar/react';

export default function Calendar() {
	return (
		<FullCalendar
			// plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
			headerToolbar={{
				left: 'prev,next today',
				center: 'title'
				// right: 'dayGridMonth,timeGridWeek,timeGridDay'
			}}
			initialView="dayGridMonth"
			editable
			selectable
			selectMirror
			dayMaxEvents
			// weekends={this.state.weekendsVisible}
			// initialEvents={INITIAL_EVENTS}
			// select={this.handleDateSelect}
			// eventContent={renderEventContent} // custom render function
			// eventClick={this.handleEventClick}
			// eventsSet={this.handleEvents}
		/>
	);
}
