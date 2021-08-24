import { Button } from '@contentful/forma-36-react-components';
import React from 'react'
import Variation from './Variation';

interface CreateVariationProps {
    flagType: string,
}

const CreateVariation = (props: CreateVariationProps) => {
    console.log(props.flagType)
    return ( props.flagType === "Boolean" ? 
        <>
            <Variation flagValue="True" isReadOnly disabled/>
            <Variation flagValue="False" isReadOnly disabled/>
        </>
        : <>
        <Variation flagValue="Variation value" isReadOnly={false} disabled={false}/>
        <Button
            icon="PlusCircle"
            buttonType="positive"
            type="button"
            size="small"
        >
            Add
        </Button>
        </>
    )
};

export default CreateVariation;