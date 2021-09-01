import {useState, useEffect} from 'react';
import { EntityListItem, DropdownList, DropdownListItem, SkeletonContainer, SkeletonDisplayText, SkeletonBodyText } from '@contentful/forma-36-react-components';
import FlagPatch from '../functions/FlagPatch';
import ExperimentPatch from '../functions/ExperimentPatch';
const uri = `https://app.launchdarkly.com/api/v2/flags/${process.env.REACT_APP_PROJECTKEY}?env=${process.env.REACT_APP_ENVIRONMENT}&tag=${process.env.REACT_APP_LDTAG}&offset=0&summary=true`;
let getConfig = {
	"method": "GET",
	"headers": {
		"Content-Type": "application/json",
		"authorization": `${process.env.REACT_APP_APIKEY}`,
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

        const isProduction = (elem: string|undefined )=>{
                return elem === 'production';
        }

    return (
        <div>
            { loading ? entitySkeleton : flags.map((flag: any, i: number) => {
                let metricId = flag[1].experiments.items.length;
              return (
                <EntityListItem 
                    key={ i }  
                    title={ flag[1].name }
                    description={ flag[1].description }  
                    dropdownListElements={
                        <DropdownList>
                            <DropdownListItem onClick={()=>{ FlagPatch(flag[1].name, flag[1].environments.production.on) }}>
                                { flag[1].environments.production.on === true ? "Deactivate Flag" : "Activate Flag" }
                            </DropdownListItem>
                                { flag[1].experiments.items[0] ?
                            <DropdownListItem onClick={()=>{ ExperimentPatch(flag[1].name, flag[1].experiments.items[0].environments.find(isProduction) === "production" ? true : false, metricId) }}>
                                { flag[1].experiments.items[0].environments.find(isProduction) === "production" ? "Pause Experiment" : "Start Experiment" }
                            </DropdownListItem> : null
                            }
                        </DropdownList>}
                    withThumbnail={ false }
                    thumbnailUrl="https://prismic-io.s3.amazonaws.com/launchdarkly/29b87739-0fa9-489a-bb0f-5aa825a10509_Feature_Flags_Icon.svg"
                    status={ flag[1].environments.production.on === true ? "published" : "draft" }
                />
                )
            }) }
            { error ? error : null }
        </div>
        )
}