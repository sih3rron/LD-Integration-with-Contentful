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
        "instructions": [{"kind": "turnFlagOff"}]
      })
}

const FlagPatch = async (flagName: string, currentState: boolean)=> {
    try {
        const response = await fetch(`https://app.launchdarkly.com/api/v2/flags/${projKey}/${flagName}`, currentState === true ? patchConfigOff : patchConfigOn);
        const json = await response.json();
        json.status === 200 ? console.log("\x1b[32m","PATCH: Fine.") : console.log("\x1b[31m",`PATCH Fail: We have a ${json.status}`);
    }
    catch (error){
        console.log(error)
    }
}

export default FlagPatch;