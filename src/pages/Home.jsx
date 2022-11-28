import { Sidebar } from '../components/Sidebar';
import { Chat } from '../components/Chat';

export const Home = () => (
  <div className="home">
    <div className="container">
      <Sidebar />
      <Chat />
    </div>
  </div>
);
