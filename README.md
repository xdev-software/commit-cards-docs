[![Build](https://img.shields.io/github/actions/workflow/status/xdev-software/commit-cards-docs/deploy-to-pages.yml)](https://github.com/xdev-software/commit-cards-docs/actions/workflows/deploy-to-pages.yml?query=branch%3Amaster)
[![Documentation](https://img.shields.io/badge/docs-latest-blue)](https://commit-cards.xdev.software/)

# commit-cards-docs

This repository contains the **Antora documentation site** for the [**XDEV Commit Cards**](https://xdev.software/commit-cards).
It is the **documentation hub** built and maintained with [Antora](https://antora.org/).

Can be executed with 
```bash
docker run --rm -v ${PWD}:/antora antora/antora antora-playbook.yml
```
NOTE: For Windows you should replace `${PWD}` with `%cd%`

## License

This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.  
See the [LICENSE](LICENSE) file for details.

© 2025 XDEV Software GmbH
