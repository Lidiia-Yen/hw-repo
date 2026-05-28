import { IGitHubOrg } from './github_interface';

export async function getResultById(id: number): Promise<IGitHubOrg | void> {
    try {
        const response = await fetch('https://api.github.com/users/hadley/orgs');
        const progs = await response.json();
        const prog = progs.find((prog: IGitHubOrg) => prog.id === id);
        return prog;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
