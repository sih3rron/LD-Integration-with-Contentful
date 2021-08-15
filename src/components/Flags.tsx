import {useState, useEffect} from 'react';
import { EntityListItem, DropdownList, DropdownListItem } from '@contentful/forma-36-react-components';
import Patch from '../functions/Patch';
const ldTag = "Contentful";
const environment = "production";
const projKey = "default";
const apiToken = "api-bfb311e8-b47c-4539-980d-f28b92ac8612";
const uri = `https://app.launchdarkly.com/api/v2/flags/${projKey}?env=${environment}&tag=${ldTag}&offset=0&summary=true`;
let getConfig = {
	"method": "GET",
	"headers": {
		"Content-Type": "application/json",
		"authorization": apiToken,
		"LD-API-Version": "beta"
	}
}

export default function Flags(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    let initialFlagState: any[] = [];
    const [flags, setFlags] = useState(initialFlagState);

    useEffect(()=>{
        fetch(uri, getConfig)
        .then(async response => {
            let data = await response.json();
            let subset: any[] = Object.entries(data.items);
            
            setLoading(false);
            setFlags(subset);
            setError("");
        // eslint-disable-next-line 
            return flags;

            })
        .catch(error => {
            setLoading(false);
            setFlags(initialFlagState);
            setError("Something went wrong!");
        });
    });

    return (
        <div>
            {loading ? "Loading" : flags.map((flag: any, i: number) => {
              return (
                <EntityListItem 
                    key={ i }  
                    title={ flag[1].name }
                    description={ flag[1].description }  
                    dropdownListElements={<DropdownList><DropdownListItem onClick={()=>{Patch(flag[1].name, flag[1].environments.production.on)}}>{flag[1].environments.production.on === true ? "Deactivate" : "Activate"}</DropdownListItem></DropdownList>}
                    withThumbnail={ false }
                    thumbnailUrl="https://prismic-io.s3.amazonaws.com/launchdarkly/29b87739-0fa9-489a-bb0f-5aa825a10509_Feature_Flags_Icon.svg"
                    status={ flag[1].environments.production.on === true ? "published" : "draft" }
                />
                )
            })}
            {error ? error : null}
        </div>
        )
}