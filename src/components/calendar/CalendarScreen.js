import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar.-messages';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('es');

const localizer = momentLocalizer(moment);

const events = [{
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add( 2, 'hours' ).toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar el pastel',
    user: {
        _id: '432423',
        name: 'Gerardo'
    }
}]

export const CalendarScreen = () => {

    //Hook para obneter cual es la seccion en la que se encontraba
    const [ lastView, setlastView ] = useState( localStorage.getItem('lastView') || 'month' );
    
    const onSelectEvent = (e) => {
        console.log(e)
    }
    
    const onDoubleClick = (e) => {
        console.log(e)
    }
    
    const onViewChange = (e) => {
        setlastView(e)
        localStorage.setItem('lastView', e);
    }

    const eventStyleGetter = ( event, start, end, isSelected ) => {

        const style = {
            backgroundColor: '#367CF7',
            borderRadiuss: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    };

    return (
        <div className="calendar-screen">
            <Navbar/>

            <Calendar
                localizer={ localizer }
                events={ events }
                startAccessor="start"
                endAccessor="end"
                messages={ messages }
                eventPropGetter= { eventStyleGetter }
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={onSelectEvent}
                onView={ onViewChange }
                view={ lastView }
                components= {{
                    event: CalendarEvent
                }}
            />

            <CalendarModal />
        </div>
    )
}
