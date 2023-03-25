import React from 'react';
import ModuleCard from '../../components/ModuleCard';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../Pages.styles';
import { IPageRoutes, pageRoutes } from '../../routes';
import { IModule } from './Dashboard.types';
import TodoSvg from '../../assets/svg/todo.svg';

const MODULES: IModule[] = [
  {
    id: 1,
    key: 'todo',
    name: 'Todo List',
    Icon: <img src={TodoSvg} alt='sales processing' />
  }
];

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCardOnClick = (key: keyof IPageRoutes) => {
    navigate(pageRoutes[key]);
  };

  return (
    <PageContainer>
      {MODULES.map((module, idx) => (
        <ModuleCard
          key={idx}
          name={module.name}
          Icon={module.Icon}
          onClick={() => handleCardOnClick(module.key)} />
      ))}
    </PageContainer>
  );
};

export default Dashboard;