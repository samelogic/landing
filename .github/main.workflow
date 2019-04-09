workflow "Build and deploy on push" {
  on = "push"
  resolves = [
    "NPM Build",
    "Terraform Plan",
  ]
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

action "Terraform Init" {
  uses = "hashicorp/terraform-github-actions/init@v0.2.0"
  secrets = ["GITHUB_TOKEN"]
  env = {
    TF_ACTION_WORKING_DIR = "./terraform"
  }
}

action "Terraform Validate" {
  uses = "hashicorp/terraform-github-actions/validate@v0.2.0"
  needs = "Terraform Init"
  secrets = ["GITHUB_TOKEN"]
  env = {
    TF_ACTION_WORKING_DIR = "./terraform"
  }
}

action "Terraform Plan" {
  uses = "hashicorp/terraform-github-actions/plan@v0.2.0"
  needs = "Terraform Validate"
  secrets = [
    "GITHUB_TOKEN",
    "AWS_ACCESS_KEY_ID",
    "AWS_SECRET_ACCESS_KEY",
  ]
  env = {
    TF_ACTION_WORKING_DIR = "./terraform"
    # If you're using Terraform workspaces, set this to the workspace name.
    TF_ACTION_WORKSPACE = "default"
  }
}
