export default function InputField({
  type = "text",
  title,
  placeholder,
  value,
  onInput,
}) {
  const name =
    title.split(" ").length >= 2
      ? title.split(" ")[0].toLowerCase() + title.split(" ")[1]
      : title;

  return (
    <label>
      {title}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onInput={onInput}
        required
      />
    </label>
  );
}
