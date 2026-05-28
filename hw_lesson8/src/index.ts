import { getResultById } from './fetch_function.ts';
import { OrgReport } from './classes_org_summary.ts';
import {ActiveDogs, LazyDogs} from './abstraction.ts'; 
import { IGitHubOrg } from './github_interface.ts';

console.log('----------> HW Task 1-6');
const id = 34165516;
const org_data = await getResultById(id);
const Test = new OrgReport(org_data as IGitHubOrg);
console.log(Test.PrintOrgSummaryById(id));

console.log('----------> HW Task 7-8');
const Shepard = new ActiveDogs("Lucy", "German Shepherd", 5);
Shepard.getMainInfo();
Shepard.basicBark();
Shepard.runALot();
Shepard.knowTricks();

const Pug = new LazyDogs("Fluffy", "Pug", 4, 'male', 'short');
Pug.getMainInfo();
Pug.basicBark();
Pug.sleepALot();
Pug.lazyBark();