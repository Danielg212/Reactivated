import { useHistory, useLocation } from 'react-router-dom';
import styles from './NavItem.module.css';

export default function NavItem({ title, Icon, path }) {
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <div
      className={`${styles.item} ${pathname === path && styles.selected}`}
      onClick={() => history.push(path)}>
      <Icon />
      <span>{title}</span>
    </div>
  );
}
