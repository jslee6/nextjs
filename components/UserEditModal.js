import React, { useState } from 'react';

const UserEditModal = ({ open, onClose, user, onUpdate }) => {
  const [updatedUser, setUpdatedUser] = useState(user || { firstName: '', lastName: '', email: '', age: '', address: '' });

  const handleInputChange = (e) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    if (!user) return; // 사용자 정보가 없으면 함수 종료

    try {
      const response = await fetch(`/api/user/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });

      if (response.ok) {
        const updatedUserData = await response.json();
        onUpdate(updatedUserData);
        onClose();
      } else {
        console.error('Error updating user:', response.status);
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      {/* 모달 내용 */}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default UserEditModal;
