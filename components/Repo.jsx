import React from 'react'

async function fetchRepos(name) {
    const response = await fetch(`https://api.github.com/users/repos/BryteLitty/${name}`);
    const repo = await response.json();
    return repo;
}

const Repo = async ({ name }) => {
    const repo = await fetchRepos(name);
    console.log(repo)

    return (
        <div>Repo</div>
    )
}

export default Repo