import EditButton from './EditButton';
import ShowUserInfo from './ShowUserInfo';
import EditUserInfo from './EditUserInfo';
import { IUser } from '../../typescript/interfaces/IUser';
import { useState, useEffect } from 'react';
import { getCurrentUser } from '../fetches/users';

const UserInfoCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    async function fetchData() {
      const user = await getCurrentUser();
      setUser(user);
    }
    fetchData();
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
    console.log('isEditing', isEditing);
  };

  return (
    user && (
      <div
        className='flex gap-4 w-full justify-evenly rounded-tl-3xl transition ease-in-out duration-300'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <EditButton
          className={`absolute top-2 left-1 w-fit h-fit ${isHovered ? 'opacity-100' : 'opacity-0'} transition duration-1000`}
          onClick={handleToggleEdit}
        />
        {isEditing ? (
          <ShowUserInfo user={user} />
        ) : (
          <EditUserInfo
            user={user}
            isEditing={isEditing}
          />
        )}
      </div>
    )
  );
};

export default UserInfoCard;
