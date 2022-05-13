import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Input } from '../../global-style';
import { useAppDispatch } from '../../hook';
import { deleteComment, editComment } from '../../store/board-slice';

const Wrapper = styled.div`
  display: flex;
`;

const Avatar = styled.img`
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

interface IComments {
  id: string;
  text: string;
  listId: string;
  cardId: string;
}

const Comments: React.FC<IComments> = ({ listId, cardId, id, text }: any) => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm();

  const handleDeleteComment = (data: object) => {
    dispatch(deleteComment({ id, cardId }))
  }

  const handleEditComment = (data: object) => {
    dispatch(editComment({ id, cardId, ...data }))
    setToggle(false)
    reset()
  }

  return (
    <Wrapper>
      <Avatar />
      <Container onSubmit={handleSubmit(handleEditComment)}>
        {toggle ? (
          <>
            <Input {...register("edited")} placeholder="enter comment" autoFocus />
            <ButtonsWrapper>
              <Button onClick={handleSubmit(handleEditComment)}>save</Button>
              <Button onClick={() => { setToggle(false); reset() }}>close</Button>
            </ButtonsWrapper>
          </>
        ) : (
          <>
            <Text>{text}</Text>
            <ButtonsWrapper>
              <Button onClick={() => setToggle(true)}>edit</Button>
              <Button onClick={handleDeleteComment}>delete</Button>
            </ButtonsWrapper>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default Comments;