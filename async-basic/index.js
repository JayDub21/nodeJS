console.log('Before');
getUser(1, (user) => {
    // console.log('User', user);
    getRepositories(user.gitHubUsername, (repos) => {
        console.log(user.gitHubUsername + ':');
        console.log('Repositories', repos);
    })
});

console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a User from a database...');
        callback({id: id, gitHubUsername: 'JayDub21'});
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling GitHub API...');
       callback(['repo1','repo2','repo3']);
    }, 2000);
}