const environment = `${process.env.REACT_APP_ENVIRONMENT}`;
const projKey = `${process.env.REACT_APP_PROJECTKEY}`;
const apiToken = `${process.env.REACT_APP_APIKEY}`;

let patchConfigOn = {
	"method": "PATCH",
	"headers": {
		"Content-Type": "application/json; domain-model=launchdarkly.semanticpatch",
		"authorization": apiToken,
		"LD-API-Version": "beta"
	},
    "body": JSON.stringify({
        "environmentKey": environment,
        "comment": "This flag was switched off via the Contentful integration.",
        "instructions": [{"kind": "turnFlagOn"}]
      })
}

let patchConfigOff = {
	"method": "PATCH",
	"headers": {
		"Content-Type": "application/json; domain-model=launchdarkly.semanticpatch",
		"authorization": apiToken,
		"LD-API-Version": "beta"
	},
    "body": JSON.stringify({
        "environmentKey": environment,
        "comment": "This flag was switched off via the Contentful integration.",
        "instructions": [{"kind": "turnFlagOff"}]
      })
}

const FlagPatch = async (flagName: string, currentState: boolean)=> {
    try {
        const response = await fetch(`https://app.launchdarkly.com/api/v2/flags/${projKey}/${flagName}`, currentState === true ? patchConfigOff : patchConfigOn);
        const json = await response.json();
        console.log(json)
    }
    catch (error){
        console.log(error)
    }
}

export default FlagPatch;