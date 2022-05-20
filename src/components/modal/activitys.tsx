import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Input } from '../../global-style';
import { useAppDispatch } from '../../hook';
import { addComment } from '../../store/board-slice';

interface IActivitys {
  cardId: string;
}

const Activitys: React.FC<IActivitys> = ({ cardId }) => {
  const { handleSubmit, reset, register } = useForm();
  const dispatch = useAppDispatch();

  const handleAddComment = (data: object) => {
    dispatch(addComment({ cardId, ...data }))
    reset()
  };

  return (
    <Activity onSubmit={handleSubmit(handleAddComment)}>
      Activity
      <CommentWrapper>
        <Avatar />
        <Input
          {...register("activitys")}
          autoFocus
          placeholder="Write a comment"
        />
        <Button type="submit">Send</Button>
      </CommentWrapper>
      <Hr />
    </Activity>
  );
};

const Activity = styled.form`
  margin-top: 18px;
  margin-bottom: 18px;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  color: #3d3d3d;
`;

const CommentWrapper = styled.div`
  display: flex;
  margin-top: 8px;
`;

const Avatar = styled.img`
  min-width: 30px;
  max-width: 30px;
  min-height: 30px;
  max-height: 30px;
  border-radius: 50%;
  background-color: #aeaeae;
  margin-right: 8px;
`;

const Button = styled.button`
  cursor: pointer;
  color: white;
  background-color: #7649bb;
  font-weight: bold;
  border-radius: 5px;
  padding: 0 30px;
  line-height: 30px;
  height: 30px;
  border: none;
  margin-left: 8px;
  &:hover {
    background-color: #57299c;
  };
`;

const Hr = styled.div`
  height: 1px;
  width: 100%;
  background-color: #dddddd;
  margin-top: 18px;
`;

export default Activitys;

