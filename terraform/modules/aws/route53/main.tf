resource "aws_route53_record" "a_record_landing" {
  zone_id = "${var.hosted_zone_id}"
  name    = "samelogic.com"
  type    = "A"

  alias = {
    name                   = "${var.cdn_domain_name}"
    zone_id                = "${var.cdn_hosted_zone_id}"
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "a_record_www_landing" {
  zone_id = "${var.hosted_zone_id}"
  name    = "www.samelogic.com"
  type    = "A"

  alias = {
    name                   = "${var.cdn_domain_name}"
    zone_id                = "${var.cdn_hosted_zone_id}"
    evaluate_target_health = false
  }
}
