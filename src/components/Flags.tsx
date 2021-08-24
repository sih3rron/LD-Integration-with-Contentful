import {useState, useEffect} from 'react';
import { EntityListItem, DropdownList, DropdownListItem, SkeletonContainer, SkeletonDisplayText, SkeletonBodyText } from '@contentful/forma-36-react-components';
import ModalExample from './ModalExample';
import FlagPatch from '../functions/Patch';
export const ldTag = `${process.env.REACT_APP_LDTAG}`;
export const environment = `${process.env.REACT_APP_ENVIRONMENT}`;
export const projKey = `${process.env.REACT_APP_PROJECTKEY}`;
export const apiToken = `${process.env.REACT_APP_APIKEY}`;
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
            
            return flags;

            })
        .catch(error => {
            setLoading(false);
            setFlags(initialFlagState);
            setError("Something went wrong!");
        });
    });

//Needs attn and correcting.
    const entitySkeleton = <SkeletonContainer   
            backgroundColor="#e5ebed"
            foregroundColor="#f7f9fa"
            height="100"
            speed={2}
            width="100%"><SkeletonDisplayText 
            numberOfLines={2} 
        /><SkeletonBodyText
            numberOfLines={2}
            offsetTop={35}
        />
        </SkeletonContainer>
        
    return (
        <div>
            {loading ? entitySkeleton : flags.map((flag: any, i: number) => {
              return (
                <EntityListItem 
                    key={ i }  
                    title={ flag[1].name }
                    description={ flag[1].description }  
                    dropdownListElements={
                        <DropdownList>
                            <DropdownListItem onClick={()=>{FlagPatch(flag[1].name, flag[1].environments.production.on)}}>
                                {flag[1].environments.production.on === true ? "Deactivate" : "Activate"}
                            </DropdownListItem>
                            <ModalExample Name={flag[1].name} On={flag[1].environments.production.on}/>
                        </DropdownList>}
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