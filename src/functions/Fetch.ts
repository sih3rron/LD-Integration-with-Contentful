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

// eslint-disable-next-line
const FlagFetch = async ()=> {
    try {
        const response = await fetch(uri, getConfig);
        const json = await response.json();
        var flags = json.items;
        return flags;
    }
    catch (error){
        console.log(error)
    }
}

export default FlagFetch;