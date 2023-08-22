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

  const handleBulletPointChange = (e, pointItemId) => {
    const infoObject = infoState.filter((item) => item.id === itemId)[0];
    const updatedObject = infoObject.details.map((item) => {
      if (item.id === pointItemId) {
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
    const infoObject = infoState.filter((item) => item.id === itemId)[0];
    const updatedObject = infoObject.details.filter(
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
            item.details.map((point) => (
              <>
                <input
                  key={point.id}
                  type={type}
                  name={name}
                  value={value}
                  placeholder={placeholder}
                  onInput={(e) => handleBulletPointChange(e, point.id)}
                />
                <button type="button" onClick={() => handleDelete(point.id)}>
                  Delete
                </button>
              </>
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
