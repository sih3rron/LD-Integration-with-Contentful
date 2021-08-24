import React, { useState } from "react";
import { Button, DropdownListItem, Modal} from '@contentful/forma-36-react-components';
import FlagPatch from '../functions/Patch';

interface flagProps {
    Name: string;
    On: boolean;
}

export default function ModalExample(props: flagProps) {
    const [isShown, setShown] = useState(false);
    console.log(`Show me ${isShown} v1`);
    return (
      <React.Fragment>
        <DropdownListItem 
            onClick={() => {
                setShown(true) 
                console.log(`Show me ${isShown} v2`)
            }}
        >
                Show centered modal
        </DropdownListItem>
        <Modal 
            title="Centered modal" 
            isShown={isShown} 
            onClose={()=> console.log(`Show me ${isShown} v3`)}
        >
          {() => (
            <React.Fragment>
              <Modal.Header title="Insert Flag Name Here." />
              <Modal.Content>Are you sure you want to activate flag: xyz?</Modal.Content>
              <Modal.Controls>
                <Button buttonType="positive" onClick={() => FlagPatch(props.Name, props.On)}>
                  Confirm
                </Button>
                <Button buttonType="muted" onClick={() => setShown(false)}>
                  Close
                </Button>
              </Modal.Controls>
            </React.Fragment>
          )}
        </Modal>
      </React.Fragment>
    );
  }