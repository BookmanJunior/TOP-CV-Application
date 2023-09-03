export default function Modal({ isActive, setIsActive, cb }) {
  return (
    <div
      className={`modal-container ${
        isActive ? "modal-active" : "modal-closed"
      }`}
      onClick={(e) => {
        if (e.target.matches(".modal-container")) {
          setIsActive(!isActive);
        }
      }}
    >
      <div className="modal-content">
        <p className="text-bold">Are you sure you want to erase all data?</p>
        <div className="modal-buttons">
          <button className="hover-warning" onClick={cb}>
            Yes
          </button>
          <button
            className="hover-accent"
            onClick={() => setIsActive(!isActive)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
