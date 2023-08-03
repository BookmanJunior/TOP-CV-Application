export default function InputField({
  type = "text",
  title,
  name,
  placeholder,
  onInput,
}) {
  return (
    <label
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      {title}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onInput={onInput}
        required
      />
    </label>
  );
}
