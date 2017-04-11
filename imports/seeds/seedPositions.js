import moment from 'moment';

import { Positions } from '/imports/api/Positions';

const run = () => {
  console.log('inserting data');

  Positions.insert({
    name: 'Chairman',
    description: 'We need someone to man the chair',
    positionType: 'PosType',
    opportunityType: 'OppType',
    timeCommitment: '24/7',
    monetaryCommitment: 350,
    frequency: 'every night at 11:42pm',
    creator: 'probably a userId?',
    skills: [ 'skillid' ],
    applicants: [ { userId: 'userid', at: moment().subtract(5, 'days').toDate() } ],
    deadline: moment().add(10, 'days').toDate(),
  });

}

export default run;