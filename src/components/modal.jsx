export default function Modal({ isActive, setIsActive, cb, children }) {
  return (
    <div
      className={`modal-container ${
        isActive ? "modal-active" : "modal-closed"
      }`}
    >
      <div className="modal-content">
        {children}
        <div className="modal-buttons">
          <button onClick={cb}>Yes</button>
          <button onClick={() => setIsActive(!isActive)}>No</button>
        </div>
      </div>
    </div>
  );
}
