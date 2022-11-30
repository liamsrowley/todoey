import styles from "./Container.module.css";

export const Container = ({ children, bg }) => {
  return (
    <div className={styles.container} style={{ background: bg }}>
      {children}
    </div>
  );
};
