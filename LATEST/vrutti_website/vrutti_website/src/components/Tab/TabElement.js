import styled from 'styled-components';

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`;

export const TabList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const Tab = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-bottom: 2px solid transparent;

  &.react-tabs__tab--selected {
    border-bottom: 2px solid #007bff;
  }
`;

export const TabPanel = styled.div`
  padding: 1rem;
`;