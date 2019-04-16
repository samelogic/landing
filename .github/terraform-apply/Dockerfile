FROM hashicorp/terraform:0.11.13

LABEL "com.github.actions.name"="terraform apply"
LABEL "com.github.actions.description"="Run Terraform Apply"
LABEL "com.github.actions.icon"="upload"
LABEL "com.github.actions.color"="purple"

LABEL "repository"="https://github.com/hashicorp/terraform-github-actions"
LABEL "homepage"="http://github.com/hashicorp/terraform-github-actions"
LABEL "maintainer"="HashiCorp Terraform Team <terraform@hashicorp.com>"

RUN apk --no-cache add jq

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
