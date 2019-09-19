t=$(mktemp) && bake --source __init__ > "$t" && . "$t" && rm -fr "$t"
#!/usr/bin/env bash
brew-if-install jq docker-compose
