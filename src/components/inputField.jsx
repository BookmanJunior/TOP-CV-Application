import { v4 as uuid } from "uuid";

export default function InputField({
  type = "text",
  title,
  placeholder,
  value,
  infoState,
  setInfoState,
  itemId,
  propToUpdate,
}) {
  const name =
    title.split(" ").length >= 2
      ? title.split(" ")[0].toLowerCase() + title.split(" ")[1]
      : title;

  const newBulletPoint = { id: uuid(), point: "" };
  const parentObject = infoState.filter((item) => item.id === itemId)[0];

  const handleChange = (e, updateProp) => {
    setInfoState(
      infoState.map((item) => {
        if (item.id === itemId) {
          return { ...item, [updateProp]: e.target.value };
        }
        return { ...item };
      })
    );
  };

  const handleBulletPointAdd = () => {
    setInfoState(
      infoState.map((item) => {
        if (item.id === itemId) {
          const updatedDetails = [...item.details, newBulletPoint];
          return { ...item, details: updatedDetails };
        }
        return { ...item };
      })
    );
  };

  const handleBulletPointChange = (e, bulletPointItemId) => {
    const updatedObject = parentObject.details.map((item) => {
      if (item.id === bulletPointItemId) {
        return { ...item, point: e.target.value };
      }
      return { ...item };
    });

    setInfoState(
      infoState.map((item) => {
        if (item.id === itemId) {
          return { ...item, details: updatedObject };
        }
        return { ...item };
      })
    );
  };

  const handleBulletPointDeletion = (bulletPointItemId) => {
    const updatedObject = parentObject.details.filter(
      (item) => item.id !== bulletPointItemId
    );
    setInfoState(
      infoState.map((item) => {
        if (item.id === itemId) {
          return { ...item, details: updatedObject };
        }
        return { ...item };
      })
    );
  };

  // TODO:
  // FigureOut how to simplify the below code

  return title === "Details" ? (
    <label className="bullet-points">
      {title}
      {infoState.map(
        (item) =>
          item.id === itemId &&
          item.details.map((bulletPoint) => (
            <BulletPointInput
              key={bulletPoint.id}
              item={bulletPoint}
              onChange={handleBulletPointChange}
              onDelete={handleBulletPointDeletion}
            />
          ))
      )}
      <button type="button" onClick={handleBulletPointAdd}>
        Add More
      </button>
    </label>
  ) : (
    <label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onInput={(e) => handleChange(e, propToUpdate)}
        required
      />
    </label>
  );
}

function BulletPointInput({ item, onChange, onDelete }) {
  return (
    <>
      <textarea
        value={item.point}
        name={item.id}
        placeholder="Enter details"
        onInput={(e) => onChange(e, item.id)}
      />
      <button type="button" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </>
  );
}
