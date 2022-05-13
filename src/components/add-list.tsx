import styled from 'styled-components';
import { useAppDispatch } from '../hook';
import { addList } from '../store/board-slice';
import { Button } from '../global-style';

const Wrapper = styled.div`
  min-width: 254px;
  max-width: 254px;
  padding-right: 10px;
`;

const AddList = () => {
  const dispatch = useAppDispatch();

  const handleAddList = () => {
    dispatch(addList({title: '[Title]'}));
  };

  return (
    <Wrapper>
      <Button onClick={handleAddList}>add list</Button>
    </Wrapper>
  );
};

export default AddList;