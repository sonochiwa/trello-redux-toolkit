import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Input } from '../global-style';
import { useAppDispatch } from '../hook';
import { removeList, editTitle } from '../store/board-slice';


const Text = styled.div`
  cursor: pointer;
  padding: 0 5px;
  line-height: 30px;
  width: 100%;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  margin-bottom: 10px;
`;

const Delete = styled.div`
  transition: all .3s;
  cursor: pointer;
  color: #d1d1d1;
  line-height: 30px;
  min-height: 30px;
  min-width: 30px;
  width: 30px;
  text-align: center;
  border-radius: 50%;
  &:hover {
    background-color: #d1d1d1;
    color: white;
  };
`;

interface ITitle {
  id: string
  title: string;
}

const Title: React.FC<ITitle> = ({ id, title }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm();

  const handleRemoveList = () => {
    dispatch(removeList(id));
  };

  const onEditTitle = (data: object) => {
    dispatch(editTitle({id, ...data}))
    setOpen(false)
    reset()
  }

  return (
    <Form onBlur={() => setOpen(false)} onSubmit={handleSubmit(onEditTitle)}>
      {open ? (
        <Input autoFocus {...register("title")} placeholder='enter title text' />
      ) : (
        <>
          <Text onClick={() => setOpen(true)}>{title}</Text>
          <Delete onClick={handleRemoveList}>&#10006;</Delete>
        </>
      )
      }
    </Form >
  );
};

export default Title;