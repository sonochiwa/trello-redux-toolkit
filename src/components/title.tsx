import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Input } from '../global-style';
import { useAppDispatch } from '../hook';
import { useToggle } from '../lib/hooks';
import { deleteList, updateTitle } from '../store/board-slice';

interface ITitle {
  id: string
  title: string;
};

const Title: React.FC<ITitle> = ({ id, title }) => {
  const dispatch = useAppDispatch();
  const { toggle, setTrue, setFalse } = useToggle(false);
  const { register, handleSubmit, reset } = useForm();

  const handleDeleteList = () => {
    dispatch(deleteList({ id }));
  };

  const onUpdateTitle = (data: object) => {
    dispatch(updateTitle({ id, ...data }));
    setFalse();
    reset();
  };

  return (
    <Wrapper onBlur={() => { setFalse(); reset(); }} onSubmit={handleSubmit(onUpdateTitle)}>
      {toggle ? (
        <Input autoFocus {...register("title")} placeholder='enter title text' />
      ) : (
        <>
          <Text onClick={setTrue}>{title}</Text>
          <Delete onClick={handleDeleteList}>&#10006;</Delete>
        </>
      )}
    </Wrapper>
  );
};

const Text = styled.div`
  cursor: pointer;
  padding: 0 5px;
  line-height: 30px;
  width: 100%;
  font-weight: bold;
`;

const Wrapper = styled.form`
  display: flex;
  margin-bottom: 10px;
`;

const Delete = styled.div`
  cursor: pointer;
  transition: all .3s;
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

export default Title;