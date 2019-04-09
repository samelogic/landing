provider "aws" {
  region = "${var.aws_region}"

  assume_role {
    role_arn = "${var.deploy_iam_role}"
  }
}

module "site_asset_storage" {
  source = "./modules/aws/s3"

  service_name = "${var.service_name}"
}
