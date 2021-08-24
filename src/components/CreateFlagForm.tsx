import React from 'react';
import { Form, SelectField, Option, TextField, Button, FieldGroup } from '@contentful/forma-36-react-components';

const CreateFlagForm = () => {
    return (
        <Form 
            onSubmit={()=>{console.log("I dun a thing!")}}
            spacing="condensed"
        >
        <SelectField
            id="flagTypeSelectionInput"
            formLabelProps={{
                requiredText: 'Required Text'
            }}
            labelText="What 'Type' of Feature Flag are you trying to create?"
            name="Select your feature flag type."
            selectProps={{
                width: 'full'
            }}
            value="optionOne"
        >
            <Option value="Boolean">
                Boolean: True or False.
            </Option>
            <Option value="Multivariate">
                Multiple Variation.
            </Option>
        </SelectField>
        <TextField 
            required
            id="flagNameInput"
            name="flagNameInput"
            labelText="Feature Flag Name."
            countCharacters
            textInputProps={{
                maxLength: 50,
                placeholder: 'Give your flag a meaningful name to help others understand it\'s core function.',
            }}
            value=""
        />
        <TextField
            required
            id="flagDescriptionInput"
            name="Feature Flag description."
            labelText="Feature Flag description."
            countCharacters
            textInputProps={{
                maxLength: 250,
                placeholder: 'Describe what this flag does in 250 characters.'
            }}
            textarea
        />
        <FieldGroup>
            <TextField 
                id="variationNameInput"
                labelText="Flag Variation Name"
                name="Variation Name"
                width="medium"
            />
            <TextField 
                id="variationDescriptionInput"
                labelText="Flag Variation Description"
                name="Variation Description"
                width="medium"
            />
            <TextField
                id="variationValueInput"
                labelText="Flag Variation Value"
                name="Variation Value"
                width="medium"
            />

        </FieldGroup>
        <Button
            type="submit"
            size="medium"
        >
            Submit
        </Button>
        </Form>
    )
};

export default CreateFlagForm;