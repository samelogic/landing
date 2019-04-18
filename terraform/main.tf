provider "aws" {
  region = "${var.aws_region}"

  assume_role {
    role_arn = "${var.deploy_iam_role}"
  }
}

module "site_asset_storage" {
  source = "./modules/aws/s3"

  bucket_site  = "${var.bucket_site}"
  service_name = "${var.service_name}"
}

module "cdn" {
  source = "./modules/aws/cdn"

  s3_bucket_regional_domain_name = "${module.site_asset_storage.bucket_regional_domain_name}"
  service_name                   = "${var.service_name}"
}
