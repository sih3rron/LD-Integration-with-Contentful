let patchConfigOn = {
	"method": "PATCH",
	"headers": {
		"Content-Type": "application/json; domain-model=launchdarkly.semanticpatch",
		"authorization": `${process.env.REACT_APP_APIKEY}`,
		"LD-API-Version": "beta"
	},
    "body": JSON.stringify({
        "environmentKey": `${process.env.REACT_APP_ENVIRONMENT}`,
        "comment": "This flag was switched on via the Contentful integration.",
        "instructions": [{"kind": "turnFlagOn"}]
      })
}

let patchConfigOff = {
	"method": "PATCH",
	"headers": {
		"Content-Type": "application/json; domain-model=launchdarkly.semanticpatch",
		"authorization": `${process.env.REACT_APP_APIKEY}`,
		"LD-API-Version": "beta"
	},
    "body": JSON.stringify({
        "environmentKey": `${process.env.REACT_APP_ENVIRONMENT}`,
        "comment": "This flag was switched off via the Contentful integration.",
        "instructions": [{"kind": "turnFlagOff"}]
      })
}

const FlagPatch = async (flagName: string, currentState: boolean)=> {
    try {
        const response = await fetch(`https://app.launchdarkly.com/api/v2/flags/${process.env.REACT_APP_PROJECTKEY}/${flagName}`, currentState === true ? patchConfigOff : patchConfigOn);
        const json = await response.json();
        console.log(json)
    }
    catch (error){
        console.log(error)
    }
}

export default FlagPatch;