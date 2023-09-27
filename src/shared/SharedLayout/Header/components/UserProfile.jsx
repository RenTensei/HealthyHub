import { useSelector } from 'react-redux';

import styles from './UserProfile.module.scss';

import { ReactComponent as ArrowDownSvg } from '@/assets/svg/arrow-down.svg';
import { useModalContext } from '@/hooks/useModalContext';

const UserProfile = () => {
  const { openModal } = useModalContext();

  const userData = useSelector(state => state.auth.user);

  return (
    <div className={styles.header_user_profile_cont}>
      <button
        onClick={() => openModal('ModalUser')}
        className={styles.header_user_profile}
      >
        <p className={styles.header_user_profile_name}>{userData.name}</p>
        <img
          src={userData.avatarURL}
          alt="avatar"
          className={styles.header_user_profile_img}
        />
        <ArrowDownSvg
          width={14}
          height={14}
          stroke={'rgba(227, 255, 168, 1)'}
        />
      </button>
    </div>
  );
};

export default UserProfile;
