import styles from './MainLayout.module.scss';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

export default MainLayout;


