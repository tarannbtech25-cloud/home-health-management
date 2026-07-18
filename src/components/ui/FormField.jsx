import './FormField.css';

export default function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  options,
  required = false,
  rows = 4,
}) {
  const id = `field-${name}`;

  return (
    <div className={`form-field ${error ? 'form-field--error' : ''}`}>
      {label && (
        <label htmlFor={id} className="form-field__label">
          {label}
          {required && <span className="form-field__required">*</span>}
        </label>
      )}
      {type === 'select' ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="form-field__input form-field__select"
        >
          <option value="">Select...</option>
          {options?.map((opt) => (
            <option key={typeof opt === 'string' ? opt : opt.value} value={typeof opt === 'string' ? opt : opt.value}>
              {typeof opt === 'string' ? opt : opt.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="form-field__input form-field__textarea"
          rows={rows}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="form-field__input"
        />
      )}
      {error && <span className="form-field__error">{error}</span>}
    </div>
  );
}
