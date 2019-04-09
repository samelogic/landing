terraform {
  required_version = "> 0.11.0"

  backend "s3" {
    region               = "us-east-1"
    bucket               = "samelogic-terraform-root"
    key                  = "landing/terraform.tfstate"
    dynamodb_table       = "samelogic-terraform-root"
    workspace_key_prefix = "landing-env:"
  }
}
