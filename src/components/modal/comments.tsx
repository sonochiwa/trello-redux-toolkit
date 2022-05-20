import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Input } from '../../global-style';
import { useAppDispatch } from '../../hook';
import { useToggle } from '../../lib/hooks';
import { deleteComment, updateComment } from '../../store/board-slice';

interface IComments {
  id: string;
  cardId: string;
  text: string;
};

const Comments: React.FC<IComments> = ({ id, cardId, text }) => {
  const dispatch = useAppDispatch();
  const { toggle, setTrue, setFalse } = useToggle(false);
  const { register, handleSubmit, reset } = useForm();

  const handleDeleteComment = () => {
    dispatch(deleteComment({ id, cardId }));
  };

  const handleUpdateComment = (data: object) => {
    dispatch(updateComment({ id, cardId, ...data }));
    setFalse();
    reset();
  };

  return (
    <Wrapper>
      <Avatar />
      <Container onSubmit={handleSubmit(handleUpdateComment)}>
        {toggle ? (
          <>
            <Input {...register("edited")} placeholder="enter comment" autoFocus />
            <ButtonsWrapper>
              <Button onClick={handleSubmit(handleUpdateComment)}>save</Button>
              <Button onClick={() => { setFalse(); reset() }}>close</Button>
            </ButtonsWrapper>
          </>
        ) : (
          <>
            <Text>{text}</Text>
            <ButtonsWrapper>
              <Button onClick={setTrue}>edit</Button>
              <Button onClick={handleDeleteComment}>delete</Button>
            </ButtonsWrapper>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Avatar = styled.div`
  min-width: 30px;
  max-width: 30px;
  min-height: 30px;
  max-height: 30px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: #aeaeae;
`;

const Button = styled.div`
  cursor: pointer;
  display: inline-block;
  margin-right: 8px;
  font-size: 13px;
  color: #717171;
`;

const Container = styled.form`
  width: 100%;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  text-align: right;
  margin-bottom: 8px;
`;

const Text = styled.div`
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  background-color: #f3f3f3;
  border-radius: 3px;
`;

export default Comments;