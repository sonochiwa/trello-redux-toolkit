import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { Input, Button } from '../global-style';
import { useAppDispatch } from '../hook';
import { addCard } from '../store/board-slice';
import { IAddCard } from './../store/types';

interface IAddCardComponent {
  id: string;
};

const AddCard: React.FC<IAddCardComponent> = ({ id }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IAddCard>();
  const dispatch = useAppDispatch();

  const AddNewCard = (data: Omit<IAddCard, 'id'>) => {
    dispatch(addCard({ id, ...data }));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(AddNewCard)}>
      <Input
        {...register("title",
          {
            minLength: {
              value: 5,
              message: 'Error! Text len > 5'
            },
            maxLength: {
              value: 20,
              message: 'Error! Text len < 20'
            }
          })}
        maxLength={30}
        name="title"
        placeholder='enter card text'
      />
      <Button type="submit" >add card</Button>
      {errors.title?.message && <p>{errors.title?.message}</p>}
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid gray;
  grid-gap: 8px;
`;

export default AddCard;