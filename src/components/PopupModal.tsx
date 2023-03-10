import { Modal } from 'antd';
import React, { useState } from 'react';
import { NewsType } from '../Models';

type Props = {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  newSearch: NewsType[];
};

const PopupModal: React.FC<Props> = ({ isModalOpen, handleOk, handleCancel, newSearch }) => {
  console.log(newSearch);

  return (
    <div>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {newSearch.map((el) => {
          return (
            <>
              <h2>{el.title}</h2>
              <p>Author - {el.author}</p>
              <p>
                Description : <br />
                {el.description}
              </p>
            </>
          );
        })}
      </Modal>
    </div>
  );
};

export default PopupModal;
