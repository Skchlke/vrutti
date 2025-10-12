import React from 'react'
import { SidebarContainer,Icon,CloseIcon ,SidebarWrapper,SidebarLink,SidebarRoute,SidebarMenu} from './SidebarElement'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
       <Icon onClick={toggle}>
            <CloseIcon />
       </Icon>
       <SidebarWrapper>
         <SidebarMenu>
              <SidebarLink to="/"> Home</SidebarLink>
              <SidebarLink to="/dhero">Discover</SidebarLink>
              <SidebarLink to="/dcontact">contact</SidebarLink>
         </SidebarMenu>       
       </SidebarWrapper>
       

    </SidebarContainer>
  )
}

export default Sidebar
