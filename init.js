const Git = require('nodegit')

// Clone a given repository into the `./tmp` folder.
Git.Clone('https://github.com/kichooo/object-stream-tools', './object-stream-tools')
    // Look up a specific file within that commit.
    // .then(commit => commit.getEntry('readme.md'))
    .then(console.log)
    .catch(console.error)
