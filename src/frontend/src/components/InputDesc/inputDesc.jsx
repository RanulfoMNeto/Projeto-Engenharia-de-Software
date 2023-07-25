import styles from "./inputDesc.module.css"

export default function InputDesc ({placeholder,type,onChange}) {
  const handleInputChange = (event) => {
    const value = event.target.value;
    onChange(value);
  }

  return (
    <>
      <div className={styles.labelFloat}>
        <textarea type={type} placeholder={placeholder} required onChange={handleInputChange}/>
      </div>
    </>
  )
}