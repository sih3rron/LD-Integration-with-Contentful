import React from 'react'
import { FieldGroup, Flex, TextInput  } from '@contentful/forma-36-react-components'

interface MvtVariationProps {
    flagType?: string,
    key: number
}

const MvtVariation = (props: MvtVariationProps) => {
    return (
        <>
        <FieldGroup className="assignment">
            <Flex
                alignItems="center"
                flexWrap="wrap"
                htmlTag="article"
                justifyContent="center"
                margin="none"
                marginBottom="none"
            >
            <div style={{
                padding: "5px", 
            }}>
                <TextInput 
                    id="variationNameInput"
                    labelText="Name"
                    name="Variation Name"
                    width="medium"
                    placeholder="Variation name."
                    value=""
                />
            </div>
            <div style={{
                padding: "5px", 
            }}>
                <TextInput 
                    id="variationDescriptionInput"
                    labelText="Description"
                    name="Variation description"
                    width="medium"
                    placeholder="Variation description."
                    value=""
                />
            </div>
            <div style={{
                padding: "5px", 
            }}>
                <TextInput
                    id="variationValueInput"
                    labelText="Value"
                    name="Variation value"
                    width="medium"
                    placeholder="Variation value."
                    value=""
                />
            </div>
            </Flex>
            </FieldGroup>
            </>
    )
};

export default MvtVariation;