interface ParcelCheckbox {
  value: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
}
export const ParcelCheckbox = ({
  value,
  handleChange,
  name,
  label,
}: ParcelCheckbox) => {
  return (
    <label style={{ marginRight: "1rem" }} key={name}>
      <input
        style={{ marginRight: ".5rem" }}
        type="checkbox"
        name={name}
        checked={value}
        onChange={handleChange}
      />
      {label}
    </label>
  );
};
