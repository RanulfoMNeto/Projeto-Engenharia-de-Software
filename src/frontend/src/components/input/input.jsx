import styles from "./input.module.css"

export default function Input ({placeholder,type,onChange}) {
  const handleInputChange = (event) => {
    const value = event.target.value;
    onChange(value);
  }

  return (
    <>
      <div className={styles.labelFloat}>
        <input type={type} placeholder={placeholder} required onChange={handleInputChange}/>
      </div>
    </>
  )
}