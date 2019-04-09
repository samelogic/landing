variable "aws_region" {
  default = "us-east-1"
}

variable "deploy_iam_role" {}

variable "service_name" {
  default = "landing-page"
}

variable "bucket_site" {
  default = "www.samelogic.com"
}
