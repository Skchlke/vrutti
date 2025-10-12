import React from "react";
import styled from "styled-components";

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TabHeader = styled.div`
  display: flex;
  border-bottom: 2px solid #ddd;
  margin-bottom: 20px;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 10px 20px;
  font-size: 16px;
  background: ${({ isActive }) => (isActive ? "#007bff" : "#f9f9f9")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#333")};
  border: none;
  border-radius: ${({ isActive }) => (isActive ? "5px 5px 0 0" : "0")};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ isActive }) => (isActive ? "#0056b3" : "#e0e0e0")};
  }
`;

const TabContent = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const TabElement = ({ tabs, activeTabIndex, onTabChange }) => {
  return (
    <TabContainer>
      <TabHeader>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            isActive={activeTabIndex === index}
            onClick={() => onTabChange(index)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabHeader>
      <TabContent>{tabs[activeTabIndex].content}</TabContent>
    </TabContainer>
  );
};

export default TabElement;