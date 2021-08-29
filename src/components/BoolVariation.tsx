import React from 'react'
import { FieldGroup, Flex, TextInput  } from '@contentful/forma-36-react-components'

interface BoolVariationProps {
    flagType?: string,
}

const BoolVariation = (props: BoolVariationProps) => {
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
                    value="True"
                    isReadOnly
                    disabled
                />
            </div>
            </Flex>
            </FieldGroup>
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
                    value="False"
                    isReadOnly
                    disabled
                />
            </div>
            </Flex>
            </FieldGroup>
            </>
    )
};

export default BoolVariation;