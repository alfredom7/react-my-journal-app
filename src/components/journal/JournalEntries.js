import React from 'react'
import { JournalEntry } from './JournalEntry';
import { useSelector } from 'react-redux';

export const JournalEntries = () => {

    const { notes } = useSelector( state => state.notes );
    const entries = notes;


    return (
        <div className="journal__entries">
            
            {
                entries.map( note => (
                    <JournalEntry 
                        key={ note.id }
                        { ...note } 
                    />
                ))
            }

        </div>
    )
}
