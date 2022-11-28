import { Navbar } from './Navbar';
import { Search } from './Search';
import { Chats } from './Chats';

export const Sidebar = () => (
  <div className="sidebar">
    <Navbar />
    <Search />
    <Chats />
  </div>
);
