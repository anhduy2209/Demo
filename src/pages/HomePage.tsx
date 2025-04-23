
import { Calendar, Flag, Home, Layers, LayoutDashboard, LifeBuoy, Settings, StickyNote } from 'lucide-react';
import { lazy } from 'react';
import FormContract from '../components/FormContract';
import { SidebarItem } from '../components/Sidebar';
// import { ThemeProvider, useTheme } from '../context/ThemeContext';
const Sidebar = lazy(() => import('../components/Sidebar'));
const NavbarItem = lazy(() => import('../components/Navbar'));
// function App() {
//   return (
//     <ThemeProvider> 
//       <HomePage />
//     </ThemeProvider>
//   );
// }

const HomePage = () => {
//   const { theme, setTheme } = useTheme(); 

//   const toggleTheme = () => {
    
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//   };

  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem icon={<Home size={20} />} text="Home" alert />
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />
        <SidebarItem icon={<StickyNote size={20} />} text="Projects" alert />
        <SidebarItem icon={<Calendar size={20} />} text="Calendar" />
        <SidebarItem icon={<Layers size={20} />} text="Tasks" />
        <SidebarItem icon={<Flag size={20} />} text="Reporting" />
        <hr className="my-3 border-[#d3d3d3]" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
      </Sidebar>

      <div className="flex-1 flex flex-col">
        <NavbarItem />
        <main >
          <FormContract />
        </main>
      </div>
    </div>
  );
}

export default HomePage;
