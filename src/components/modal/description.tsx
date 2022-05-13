import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useAppDispatch } from '../../hook';
import { editDescription } from '../../store/board-slice';

const Description = styled.form`
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  color: #3d3d3d;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: normal;
  color: black;
  margin-top: 10px;
`;

const Textarea = styled.textarea`
  margin-top: 5px;
  width: 100%;
  height: 100px;
  padding: 5px;
  resize: vertical;
  border-radius: 5px;
  outline: 0;
  &:active{
    outline: 0;
  };
`;

const Button = styled.button`
  color: white;
  background-color: #7649bb;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  padding: 0 30px;
  line-height: 30px;
  height: 30px;
  border: none;
  margin-right: 8px;
  &:hover {
    background-color: #57299c;
  };
`;

interface IDescription {
  id: string;
  description: string;
};

const Descripton: React.FC<IDescription> = ({ id, description }) => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useAppDispatch();

  const handleEditDescription = (data: object) => {
    dispatch(editDescription({ id, ...data }));
    setOpen(false);
    reset();
  }

  return (
    <Description onSubmit={handleSubmit(handleEditDescription)}>
      Description
      {open ? (
        <>
          <Textarea
            {...register("description")}
            autoFocus
            placeholder="Add a more detailed description..."
          />
          <>
            <Button type="submit">Save</Button>
            <Button onClick={() => { setOpen(false); reset() }}>Close</Button>
          </>
        </>
      ) : (
        <Text onClick={() => setOpen(true)}>
          {description || "Add a more detailed description..."}
        </Text>
      )
      }
    </Description >
  );
};

export default Descripton;
