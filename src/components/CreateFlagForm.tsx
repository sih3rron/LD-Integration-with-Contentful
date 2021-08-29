import { useState } from 'react';
import { Form, SelectField, Option, Button, Card, Typography, Heading, Paragraph, TextField, Tag, SectionHeading } from '@contentful/forma-36-react-components';
import CreateVariation from './CreateVariation';

const CreateFlagForm = () => {
    const [flagType, setFlagType] = useState("Boolean");

    return (
        <Form 
            onSubmit={()=>{console.log("I dun a thing!")}}
            spacing="condensed"
        >
        <Heading>LaunchDarkly - Flag Pole.</Heading>
        <Paragraph>Welcome to Flag Pole. In order to access your Feature Flags have you completed the following tasks: </Paragraph>
        
        <SelectField
            id="flagTypeSelectionInput"
            formLabelProps={{
                requiredText: 'Required'
            }}
            labelText="What 'Type' of Feature Flag are you trying to create?"
            name="Select your feature flag type."
            selectProps={{
                width: 'full'
            }}
            value="Boolean"
            onChange={(event)=>{
                const typeValue = event.target.value;
                setFlagType(typeValue)
            }}
            
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

        <Card>
        <Typography>
            <SectionHeading element="h4">
                Variation Assignment.
            </SectionHeading>
            <Paragraph>
                Every feature flag always has at least two variations assigned. 
                Each variation requires a name, description, and value.
            </Paragraph>
        </Typography>
        <hr />
        <CreateVariation flagType={flagType}/>
        </Card>

        <Card>
            <Typography>
                <SectionHeading element="h4">
                    Tags
                </SectionHeading>
            </Typography>
            <Tag 
                tagType="primary-filled"
                size="default"
            >Contentful</Tag>
            
        </Card>

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