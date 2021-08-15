This project was bootstrapped with [Create Contentful App](https://github.com/contentful/create-contentful-app).  



## About the integration.

Installing the LaunchDarkly Flag-Pole integration empowers team members outside of Engineering to interact with LaunchDarkly feature flags. 

Once a flag or flags have been tested, QA'd, and signed off by all of the relevent folks, a distinct [LaunchDarkly 'Tag'](https://docs.launchdarkly.com/home/members/role-concepts#tags) can then be assigned to them - for instance, this could be applied during your deployment pipeline into production - making them available for activation in your Contentful sidebar.


## How does it work?

You will need to do the following:

- Understand the level of access control you want to delegate to Contentful (i.e. Activate flags only, Activate/Deactivate flags, etc.)
- Generate a service token in LaunchDarkly.
- An agreed LaunchDarkly Tag(s) to identify which Flags you want to delegate access to via Contentful.  
----

### Steps to setup the integration.  

1. Create and retrieve a service token in LaunchDarkly. 
2. Install the integration in the 'Manage apps' section of Contentful.
2. Go to the configuration screen and authenticate.
3. Add the service token, Project Key, and Environment Key's for LaunchDarkly.
4. Add the LaunchDarkly Tags used to select which flags are exposed to Contentful.