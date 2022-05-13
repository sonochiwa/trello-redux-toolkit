import styled from 'styled-components';
import Activitys from './activitys';
import Comments from './comments';
import Descripton from './description';
import './modal.css';
import { useContext } from "react";
import { useAppSelector } from '../../hook';
import initialState from '../../store/initial-state';

// import AppContext from "../../state/app-context";
// import ActionTypes from "../../state/action-types";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0, .4);
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const Content = styled.div`
  margin: 50px auto 0;
  width: 600px;
  background-color: white;
  border-radius: 5px;
  padding: 18px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
`;

const Close = styled.div`
  cursor: pointer;
  font-size: 20px;
`;

const Main = styled.div`
  margin-top: 30px;
`;

const Subtitle = styled.div`
  font-size: 14px;
  color: #686868;
  font-weight: lighter;
`;

const Author = styled.div`
  text-align: right;
  font-size: 14px;
  color: #686868;
`;

interface IModal {
  id: string;
  listId: string;
  title: string;
  listTitle: string;
  handleClose: any;
  description: string;
}

interface Modal {
  id: string;
  title: string;
  listId: string;
  listTitle: string;
  handleClose: any;
  comments: any;
};

const Modal = ({ id, title, listId, listTitle, handleClose, description, comments }: any) => {

  const state = useAppSelector(state => state.board);
  const closeModal = (e: any) => {
    if (e.key === 'Escape') {
      handleClose();
    };
  };

  return (
    <Wrapper onKeyDown={closeModal} >
      <Content>
        <Header>
          <Title>
            {title}
            <Subtitle>in {listTitle}</Subtitle>
          </Title>
          <Close onClick={handleClose}>&#10006;</Close>
        </Header>
        <Main>
          <Author>author: {state.username}</Author>
          <Descripton description={description} id={id} />
          <Activitys listId={listId} cardId={id} />
          {comments.map((comment: any) => <Comments key={comment.id} id={comment.id} text={comment.text} listId={listId} cardId={id} />)}
        </Main>
      </Content>
    </Wrapper>
  );
};

export default Modal;