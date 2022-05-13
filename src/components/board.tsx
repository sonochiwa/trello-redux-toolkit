import styled from 'styled-components';
import AddList from './add-list';
import List from './list';
import { useAppSelector } from '../hook'

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  width: 100%;
  height: 100%;
`;

const Board = () => {
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

export default Board;