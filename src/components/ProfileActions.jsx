import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const ProfileActions = ({ editMode, setEditMode, handleDelete }) => {
  return (
    <div className="buttons" style={{ textAlign: 'center', marginTop: '20px' }}>
      {!editMode && (
        <>
          <button className="button is-link" onClick={() => setEditMode(true)}>
            <FaEdit /> Edit
          </button>
          <button className="button is-danger" onClick={handleDelete}>
            <FaTrashAlt /> Delete
          </button>
        </>
      )}
    </div>
  );
};

export default ProfileActions;
