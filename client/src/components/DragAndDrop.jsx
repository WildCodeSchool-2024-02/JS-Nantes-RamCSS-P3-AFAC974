import PropTypes from "prop-types";

import "../style/drag-and-drop.css";

function DragAndDrop({ files, setFiles, handleDrop, photoRef }) {
  if (files.length)
    return (
      <section className="uploads">
        <ul>
          <li>{files[0].name}</li>
        </ul>
        <div className="actions">
          <button type="button" onClick={() => setFiles([])}>
            Cancel
          </button>
        </div>
      </section>
    );

  if (!files.length)
    return (
      <section>
        <article>
          <div
            className="drop-zone"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <p>Faite glisser ou sélectionner votre photo</p>
            <input
              type="file"
              onChange={(e) => setFiles(e.target.files)}
              hidden
              ref={photoRef}
            />
            <button type="button" onClick={() => photoRef.current.click()}>
              Select a file
            </button>
          </div>
        </article>
      </section>
    );
}

export default DragAndDrop;
DragAndDrop.propTypes = {
  files: PropTypes.string.isRequired,
  setFiles: PropTypes.string.isRequired,
  handleDrop: PropTypes.string.isRequired,
  photoRef: PropTypes.string.isRequired,
};
