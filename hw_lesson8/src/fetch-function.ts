import { GitHubOrg } from './github-interface';

export async function getResultById(id: number): Promise<GitHubOrg | void> {
    try {
        const response = await fetch('https://api.github.com/users/hadley/orgs');
        const progs = await response.json();
        const prog = progs.find((prog: GitHubOrg) => prog.id === id);
        return prog;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
