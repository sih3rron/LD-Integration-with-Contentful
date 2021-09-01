let addBody: Array<any> = [];
let removeBody: Array<any>  = [];

const ExperimentPatch = async (flagName: string, currentState: boolean, metricId: number) => {
    console.log(`This is flag: ${flagName} with a Metric no of ${metricId}`)
    for(let i = 0; i<= metricId-1; ++i){

        if(currentState === false){
            addBody.push({
                "op": "add",
                "path": `/experiments/items/${i}/environments/0`,
                "value": `${process.env.REACT_APP_ENVIRONMENT}`
            })
            console.log(`This is flag: ${flagName}`)
            console.log(addBody)
        }
        if(currentState === true){
            removeBody.push({
                "op": "remove",
                "path": `/experiments/items/${i}/environments/0`
            })
            console.log(`This is flag: ${flagName}`)
            console.log(removeBody)
        }

    }

    let patchConfigOn = {
        "method": "PATCH",
        "headers": {
            "Content-Type": "application/json",
            "authorization": `${process.env.REACT_APP_APIKEY}`,
            "LD-API-Version": "beta"
        },
        "body": JSON.stringify(addBody)
    }
    
    let patchConfigOff = {
        "method": "PATCH",
        "headers": {
            "Content-Type": "application/json",
            "authorization": `${process.env.REACT_APP_APIKEY}`,
            "LD-API-Version": "beta"
        },
        "body": JSON.stringify(removeBody)
    }

    try {
        const response = await fetch(`https://app.launchdarkly.com/api/v2/flags/${process.env.REACT_APP_PROJECTKEY}/${flagName}`, currentState === true ? patchConfigOff : patchConfigOn);
        const json = await response.json();
        console.log(json)
    }
    catch (error){
        console.log(error)
    }
}

export default ExperimentPatch;