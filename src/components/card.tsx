import { Input } from '../global-style';
import styled from 'styled-components';
import { deleteCard, updateCard } from '../store/board-slice';
import { useAppDispatch } from '../hook';
import { useForm } from 'react-hook-form';
import { useToggle } from '../lib/hooks';
import Modal from './modal/modal';

interface ICard {
  id: string;
  title: string;
  listTitle: string;
  description: string;
  comments: any;
};

const Card: React.FC<ICard> = ({ id, title, listTitle, description, comments }) => {
  const dispatch = useAppDispatch();
  const editor = useToggle(false);
  const { toggle, setTrue, setFalse } = useToggle(false);
  const { register, handleSubmit, reset } = useForm();

  const onDeleteCard = () => {
    dispatch(deleteCard({ id }));
  };

  const onUpdateCard = (data: object) => {
    dispatch(updateCard({ id, ...data }));
    editor.setFalse();
    reset();
  };

  return (
    <>
      <CardWrapper onSubmit={handleSubmit(onUpdateCard)}>
        {editor.toggle ?
          (
            <Input
              {...register("card")}
              onBlur={editor.setFalse}
              autoFocus
              placeholder="enter new card text"
              maxLength={20}
            />
          )
          :
          (
            <>
              <Text onClick={setTrue}>{title}</Text>
              <EditBtn title="edit this card" onClick={editor.setTrue}>edit</EditBtn>
              <DelBtn title="delete this card" onClick={onDeleteCard}>&times;</DelBtn>
            </>
          )
        }
      </CardWrapper>
      {
        toggle && (
          <Modal
            id={id}
            title={title}
            description={description}
            comments={comments}
            listTitle={listTitle}
            handleClose={setFalse}
          />
        )
      }
    </>
  );
};

const CardWrapper = styled.form`
  position: relative;
`;

const Text = styled.div`
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  width: 100%;
  background-color: #252e4c;
  border-radius: 5px;
  color: white;
  padding: 0 8px;
`;

const EditBtn = styled.div`
  cursor: pointer;
  transition: .3s;
  position: absolute;
  top: 0;
  height: 30px;
  line-height: 30px;
  right: 27px;
  text-align: right;
  color: #c3c3c3;
  &:hover {
      color: #ffffff;
  };
`;

const DelBtn = styled.div`
  cursor: pointer;
  transition: .3s;
  position: absolute;
  top: 0;
  right: 6px;
  text-align: right;
  font-size: 25px;
  color: #c3c3c3;
  &:hover {
      color: red;
  };
`;

export default Card;