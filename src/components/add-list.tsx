import styled from 'styled-components';
import { useAppDispatch } from '../hook';
import { addList } from '../store/board-slice';
import { Button } from '../global-style';

const AddList: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleAddList = () => {
    dispatch(addList({ title: 'title' }));
  };

  return (
    <Wrapper>
      <Button onClick={handleAddList}>add list</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 254px;
  max-width: 254px;
  padding-right: 10px;
`;

export default AddList;