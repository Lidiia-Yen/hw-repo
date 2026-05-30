import { GitHubOrg } from './github-interface.ts';


export class OrgSummary {
    public name: string;
    public id: number;
    public profileUrl: string;
    public apiUrl: string;
    public hasDescription: boolean;
    public description: string | null | undefined;
        
    public constructor(org: IGitHubOrg) {
        this.name = org.login;
        this.id = org.id;
        this.profileUrl = org.url;
        this.apiUrl = org.url;
        this.hasDescription = org.description !== null && org.description !== undefined;
        this.description = org.description ?? "(no description)"
    }
}


export class OrgReport extends OrgSummary {
    public organization_summary: OrgSummary;
    public report: string;
    
    public constructor(org: GitHubOrg) {
        super(org); 
        this.organization_summary = new OrgSummary(org);
        this.report = `Report for Organization: ${this.name}\nID: ${this.id}\nURL: ${this.profileUrl}\n${'Description: ' + (this.description ? this.description : 'No description available')}`;
    }

    PrintOrgSummaryById(id: number): string {
        return this.report;
    }
}