import "./Form.css";

export const Input = ({ label, handleChange, type, name, required }) => {
  return (
    <div className='form-group'>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        onChange={handleChange}
      />
    </div>
  );
};
