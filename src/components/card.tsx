import { Input } from '../global-style';
import styled from 'styled-components';
import { useState } from 'react';
import { deleteCard, updateCard } from '../store/board-slice';
import { useAppDispatch } from '../hook';
import { useForm } from 'react-hook-form';
import Modal from './modal/modal';

const CardWrapper = styled.form`
  position: relative;
`;

const Text = styled.div`
  height: 30px;
  line-height: 30px;
  width: 100%;
  background-color: #252e4c;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  padding: 0 8px;
`;

const EditBtn = styled.div`
  transition: .3s;
  position: absolute;
  top: 0;
  height: 30px;
  line-height: 30px;
  right: 27px;
  text-align: right;
  color: #c3c3c3;
  cursor: pointer;
  &:hover {
      color: #ffffff;
  };
`;

const DelBtn = styled.div`
  transition: .3s;
  position: absolute;
  top: 0;
  right: 6px;
  text-align: right;
  cursor: pointer;
  font-size: 25px;
  color: #c3c3c3;
  &:hover {
      color: red;
  };
`;

interface ICard {
  id: string;
  title: string;
  listTitle: string;
  description: string;
  comments: any;
};

const Card: React.FC<ICard> = ({ id, title, listTitle, description, comments }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm();
  const [toggle, setToggle] = useState(false);

  const onDeleteCard = () => {
    dispatch(deleteCard({ id }));
  };

  const onUpdateCard = (data: object) => {
    dispatch(updateCard({ id, ...data }));
    setOpen(false);
    reset();
  };

  return (
    <>
      <CardWrapper onSubmit={handleSubmit(onUpdateCard)}>
        {open ?
          (
            <Input
              {...register("card")}
              onBlur={() => setOpen(false)}
              autoFocus
              placeholder="enter new card text"
              maxLength={20} />
          )
          :
          (
            <>
              <Text onClick={() => setToggle(true)}>{title}</Text>
              <EditBtn title="edit this card" onClick={() => setOpen(true)}>edit</EditBtn>
              <DelBtn title="delete this card" onClick={onDeleteCard}>&times;</DelBtn>
            </>
          )
        }
      </CardWrapper>
      {toggle && <Modal id={id} title={title} description={description} comments={comments} listTitle={listTitle} handleClose={() => setToggle(false)} />}
    </>
  );
};

export default Card;