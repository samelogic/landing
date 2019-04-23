variable "aws_region" {
  default = "us-east-1"
}

variable "deploy_iam_role" {}

variable "service_name" {
  default = "landing-page"
}

variable "bucket_site" {
  default = "samelogic.com"
}

// Default prod hosted zone id.
variable "hosted_zone_id" {
  default = "Z2EOQAX8P26CF"
}
