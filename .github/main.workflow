workflow "Build and deploy on push" {
  on = "push"
  resolves = ["NPM Build"]
}

action "NPM Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm install"
}

action "NPM Build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["NPM Install"]
  runs = "npm run build"
}
