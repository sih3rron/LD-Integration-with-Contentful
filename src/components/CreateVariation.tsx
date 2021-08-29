import { useState } from 'react'
import { Button, Flex } from '@contentful/forma-36-react-components';
import BoolVariation from './BoolVariation';
import MvtVariation from './MvtVariation';

interface CreateVariationProps {
    flagType: string,
}

const CreateVariation = (props: CreateVariationProps) => {
    const [ variation, setVariation] = useState([0])

    const handleAddVariant = () => {
        setVariation([...variation, variation.length +1]);
        console.log(variation)
    }

    const handleRemoveVariant = () => {
        let lastIndex = variation.length
        setVariation(variation.splice(0, 1))
        console.log(variation)

    }

    return ( props.flagType === "Boolean" ? 
        <BoolVariation />
        : 
        <>
        {variation.map((variant, i) => (
            <div key={i}><MvtVariation key={i}/></div>
        ))}
        <Flex>
            <div style={{
                    padding: "5px", 
                }}>
                <Button
                    icon="Plus"
                    buttonType="positive"
                    type="button"
                    size="small"
                    className="addVariation"
                    onClick={()=>(handleAddVariant())}
                >
                    Add
                </Button>
            </div>
            <div style={{
                    padding: "5px", 
                }}>
                <Button
                    icon="Minus"
                    buttonType="negative"
                    className="removeVariation"
                    type="button"
                    size="small"
                    onClick={()=>(handleRemoveVariant())}
                >
                    Remove
                </Button>
            </div>
        </Flex>
        </>
    )
};

export default CreateVariation;