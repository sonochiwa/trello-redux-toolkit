import styled from 'styled-components';
import AddList from './add-list';
import List from './list';
import { useAppSelector } from '../hook';

const Board: React.FC = () => {
  const lists = useAppSelector(state => state.board.lists);

  return (
    <Wrapper>
      {
        lists.map((list) => (<List key={list.id} listTitle={list.title} {...list} /> ))
      }
      <AddList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  height: 100%;
`;

export default Board;