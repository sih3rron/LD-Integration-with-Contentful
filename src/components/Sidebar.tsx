import React from 'react';
import { EntityList } from '@contentful/forma-36-react-components';
import { SidebarExtensionSDK } from '@contentful/app-sdk';
import Flags from './Flags';

interface SidebarProps {
  sdk: SidebarExtensionSDK;
}

const Sidebar = (props: SidebarProps) => {
  return (
    <EntityList>
      <Flags />
    </EntityList>
)   
};

export default Sidebar;
