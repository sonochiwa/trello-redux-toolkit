import styled from 'styled-components';
import { Input, Button } from '../global-style'
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../hook';
import { login } from '../store/board-slice';

interface ILogin {
  username: string;
  data: object;
};

const Name: React.FC = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<ILogin>();
  const username = useAppSelector(state => state.board.username);

  const onSubmit = (data: ILogin) => {
    dispatch(login(data))
  };

  if (username) {
    return null;
  }

  return (
    <Overlay>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("username")}
          placeholder="enter username"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.4);
  z-index: 999;
`;

const Form = styled.form`
  display: flex;
  margin: 200px auto 0;
  padding: 8px;
  width: 400px;
  border-radius: 3px;
  background-color: white;
  grid-gap: 10px;
`;

export default Name;