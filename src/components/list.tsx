import styled from 'styled-components';
import AddCard from './add-card';
import Title from './title';
import Card from './card';
import { useAppSelector } from '../hook';

interface IList {
  id: string;
  listTitle: string;
  title: string;
};

const List: React.FC<IList> = ({ id, listTitle, title }) => {
  const { cards = [] } = useAppSelector(state => state.board.lists.find((list) => list.id === id)) || {}

  return (
    <Wrapper>
      <Title id={id} title={title} />
      <CardWrapper>
        {
          cards.map((card) => (<Card key={card.id} listTitle={listTitle} {...card} />))
        }
      </CardWrapper>
      <AddCard id={id} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  min-width: 270px;
  max-width: 270px;
  border-radius: 5px;
  padding: 8px;
  background-color: #eaeaeaa3;
  margin-right: 8px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default List;
