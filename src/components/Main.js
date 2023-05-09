import React from "react";
import ReactMarkdown from "react-markdown";

const Main = ({
  activeNote,
  title,
  setTitle,
  content,
  setContent,
  setActiveNote,
  handleUpdate,
}) => {
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setActiveNote({
      ...activeNote,
      title: e.target.value,
      lastModified: Date.now(),
    });
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
    setActiveNote({
      ...activeNote,
      content: e.target.value,
      lastModified: Date.now(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(activeNote.id, title, content);
  };

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="title"
            value={title || activeNote.title}
            onChange={handleTitleChange}
          />
          <textarea
            id="content"
            placeholder="What's NEW?"
            value={content || activeNote.content}
            onChange={handleContentChange}
          />
          <button onClick={(e) => handleSubmit(e)}>Validate</button>
        </form>
      </div>
      <div className="app-name-note-preview">
        <h1 className="preview-title">{title || activeNote.title}</h1>
        <div className="markdown-preview">
          {" "}
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Main;
