const projKey = "default";
const environment = "production";
const flagName = "";
const apiToken = "api-bfb311e8-b47c-4539-980d-f28b92ac8612";
const uri = `https://app.launchdarkly.com/api/v2/flags/${projKey}/${flagName}`;

let patchConfig = {
	"method": "Patch",
	"headers": {
		"Content-Type": "application/json",
		"authorization": apiToken,
		"LD-API-Version": "beta"
	},
    "body": JSON.stringify({
        "environmentKey": environment,
        "instructions": [{"kind": "turnFlagOn"}]
      })
}

// eslint-disable-next-line
const FlagPatch = async ()=> {
    try {
        const response = await fetch(uri, patchConfig);
        const json = await response.json();
        json.status === 200 ? console.log("\x1b[32m","PATCH: Fine.") : console.log("\x1b[31m",`PATCH Fail: We have a ${json.status}`);
    }
    catch (error){
        console.log(error)
    }
}

export default FlagPatch;