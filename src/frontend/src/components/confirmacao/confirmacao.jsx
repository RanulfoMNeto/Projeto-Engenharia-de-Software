import styles from "./confirmacao.module.css"

export default function Confirmacao({ onConfirm, onCancel }) {
    return (
      <div className={styles.container}>
        <div className={styles.confirmacao}>
          <p>Deseja excluir?</p>
          <button onClick={onConfirm}>Sim</button>
          <button onClick={onCancel}>Não</button>
        </div>
      </div>
    );
}
  