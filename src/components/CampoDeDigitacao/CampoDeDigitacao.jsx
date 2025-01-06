
import './CampoDeDigitacao.css';

function CampoDeDigitacao({ id, label, type, value, onChange, placeholder }) {
  return (
    <div className="cadastro__campo">
      <label htmlFor={id} className="cadastro__label">{label}</label>
      <input 
        type={type} 
        id={id} 
        placeholder={placeholder}
        value={value} // Bind the input value
        onChange={onChange} // Attach the change handler
 
      />
    </div>
  );
}

export default CampoDeDigitacao;
