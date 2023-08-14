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

  return (
    <label>
      {title}
      {type !== "textarea" ? (
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onInput={(e) => handleChange(e, propToUpdate)}
          required
        />
      ) : (
        <textarea
          name={name}
          value={value}
          placeholder={placeholder}
          onInput={(e) => handleChange(e, propToUpdate)}
          required
        />
      )}
    </label>
  );
}
