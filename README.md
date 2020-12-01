![GitHub Workflow Status](https://img.shields.io/github/workflow/status/NimbleWing/fetch-github-repo/CI?style=plastic)
![NPM](https://img.shields.io/npm/l/@nwing/fetch-github-repo?style=plastic)
![npm (scoped)](https://img.shields.io/npm/v/@nwing/fetch-github-repo)
# Fetch Github Repo
Download and extract a GitHub repository from node.

# Installation

```shell
$ npm @nwing/fetch-github-repo
```

# Usage
```javascript
import fetchGithubRepo from '@nwing/fetch-github-repo';

(async ()=> {
  await fetchGithubRepo('NimbleWing/fetch-github-repo', '.');
})();
```

# License

MIT
