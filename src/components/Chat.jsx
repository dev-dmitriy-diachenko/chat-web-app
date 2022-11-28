import { useContext } from 'react';
import Cam from '../assets/images/cam.png';
import Add from '../assets/images/add.png';
import More from '../assets/images/more.png';
import { ChatContext } from '../context/ChatContext';
import { Messages } from './Messages';
import { Input } from './Input';

export const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chat-info">
        <span>{data.user?.displayName}</span>

        <div className="chat-icons">
          <img
            src={Cam}
            alt="start video"
          />

          <img
            src={Add}
            alt="add person"
          />

          <img
            src={More}
            alt="additional options"
          />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
