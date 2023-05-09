import React from 'react';

const Main = ({activeNote}) => {
    return (
        <div className='app-main'>
            <div className="app-main-note-edit">
                <input type="text" id="title" autofocus/>
                <textarea id="body" placeholder='Whats NEW ?'></textarea>
            </div>
            <div className="app-name-note-preview">
                <h1 className='preview-title'>{activeNote.title}</h1>
                <div className="markdown-preview">
                {activeNote.content}
                </div>

            </div>
            
        </div>
    );
};

export default Main;