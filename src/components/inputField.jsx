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

  const handleMoreBulletPoints = () => {
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

  const handleDelete = (bulletPointItemId) => {
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

  return (
    <label>
      {title}
      {title === "Details" ? (
        infoState.map(
          (item) =>
            item.details &&
            item.details.map((bulletPoint) => (
              <BulletPointInput
                key={bulletPoint.id}
                item={bulletPoint}
                onChange={handleBulletPointChange}
                onDelete={handleDelete}
              />
            ))
        )
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onInput={(e) => handleChange(e, propToUpdate)}
          required
        />
      )}
      {title === "Details" && (
        <button type="button" onClick={handleMoreBulletPoints}>
          Add More
        </button>
      )}
    </label>
  );
}

function BulletPointInput({ item, onChange, onDelete }) {
  return (
    <>
      <input
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
