const _ = require('lodash')
const git = require('nodegit')
const inquirer = require('inquirer')
const pronunciation = require('natural').SoundEx
const game = '.git'
const branch = 'develop'
const authors = new Set()

inquirer.prompt([{
    type: 'input',
    name: 'branch',
    message: 'Which branch you wanna play on?',
    default: 'master'
}, {
    type: 'input',
    name: 'gitDir',
    message: 'Which directory of git to play on?',
    default: '.git'
}])
    .then(({ branch, gitDir }) => ({
        repo: git.Repository.open(gitDir),
        branch
    }))
    .then(({ branch, repo }) =>
        // Open branch, default to master.
        repo.then(repo => repo.getBranchCommit(branch)))
    // Display information about commits on master.
    .then(firstCommit => {
        // Create a new history event emitter.
        const history = firstCommit.history()

        // Listen for commit events from the history.
        history.on('commit', commit => {
            const author = commit.author()
            // Can also use author.email()
            authors.add({ hacker: author.name(), time: commit.date(), unix: commit.timeMs() })
        })

        history.on('end', () => printResults([...authors]))

        // Start emitting events.
        history.start()
    })
    .catch(console.error)

function printResults(commits) {
    // Get times between commits.
    commits.reduce((acc, curr) => {
        if (curr.hacker === acc[acc.length - 1].hacker) {
            return acc
        }
        acc.push({
            hacker: curr.hacker,
            unix: curr.unix - acc[acc.length - 1].unix
        })
        return acc
    }, [{ hacker: '', unix: 0 }])

    // Calc derivative.
    commits.reduce((a, b) => {
        b.delta = a.unix - b.unix
        return b
    })

    const agregated = commits.reduce((acc, curr) => {
        acc[curr.hacker] ?
            acc[curr.hacker] += curr.delta :
            acc[curr.hacker] = curr.delta || 0
        return acc
    }, {})

    const grupped = _.toPairs(agregated)
    const total = grupped.reduce((acc, curr) => acc + curr[1], 0)
    const possession = grupped.map(e => ({ name: e[0], possession: Number((e[1] / total).toFixed(2)) * 100 }))
        .filter(e => e.possession)

    const merged = possession
        // Sort hackers by name
        .sort((a, b) => b.name - a.name)
        // Merge hackers that have similar names ex: ć, ń => c, n
        .reduce((acc, curr) => {
            if (acc[acc.length - 1] && pronunciation.compare(acc[acc.length - 1].name, curr.name)) {
                acc[acc.length - 1].possession += curr.possession
                return acc
            }
            acc.push(curr)
            return acc
        }, [])
        // Order hackers by a head possession
        .sort((a, b) => b.possession - a.possession)

    const results = _.extend({ players: merged.slice(0, 2) }, { name: `${game}:${branch}` })
    console.log(JSON.stringify(results))
}
