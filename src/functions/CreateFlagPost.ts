
const projKey = `${process.env.REACT_APP_PROJECTKEY}`;
const apiToken = `${process.env.REACT_APP_APIKEY}`;
const CreateFlagPatch = (flagData: object)=> {
  let ConfigBool = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json; domain-model=launchdarkly.semanticpatch",
      "authorization": apiToken,
      "LD-API-Version": "beta"
    },
      "body": JSON.stringify({
          "name": flagData.name,
          "key": flagData.key,
          "description": flagData.desc,
          "variations": [
              {
                "value": true,
                "name": flagData.variationName0,
                "description": flagData.variationDescription0
              },
              {
                "value": false,
                "name": flagData.variationName1,
                "description": flagData.variationDescription1
              }
            ],
          "defaults": {
            "onVariation": 1,
            "offVariation": 0
          },
          "includeInSnippet": true,
          "temporary": true,
          "tags": ["Contentful"]
        })
  }

    try {
       fetch(`https://app.launchdarkly.com/api/v2/flags/${projKey}/${flagName}`, ConfigBool)
       .then(response => {response.status === 200 ? console.log("Everything is fine.") : console.log(`We have a ${response.status} status.`)} )
       .catch((error) => {console.log(error)})
    }
    catch (error){
        console.log(error)
    }
}

export default CreateFlagPatch;