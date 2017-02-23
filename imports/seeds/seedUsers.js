import moment from 'moment';

import { Experiences } from '/imports/api/Experiences'
import { Tags } from '/imports/api/Tags';
import { Users } from '/imports/api/Users';

const run = () => {
  const tags = Tags.find({}).fetch()
  const users = [
    {
      profile: {
        avatar: {
          original: "http://www.photopixels.com/portraits/images/Business%20Headshot.jpg"
        },
        firstName: "Rosemary",
        lastName: "Thomas",
        tagline: "Benefits Administrator at Endicott Johnson",
        summary: "Spent the 80's merchandising Roombas in Fort Walton Beach, FL. Spent childhood working with catfish in Hanford, CA. Won several awards for promoting trumpets for fun and profit. Spent high school summers supervising the production of psoriasis in Pensacola, FL. Practiced in the art of buying and selling toy trucks in Jacksonville, FL. Spent a weekend deploying inflatable dolls in Washington, DC.",
        interests: [
          tags[Math.floor(Math.random() * tags.length)]._id,
          tags[Math.floor(Math.random() * tags.length)]._id,
          tags[Math.floor(Math.random() * tags.length)]._id,
          tags[Math.floor(Math.random() * tags.length)]._id,
          tags[Math.floor(Math.random() * tags.length)]._id
        ],
        skills: [
          tags[Math.floor(Math.random() * tags.length)]._id,
          tags[Math.floor(Math.random() * tags.length)]._id,
          tags[Math.floor(Math.random() * tags.length)]._id,
          tags[Math.floor(Math.random() * tags.length)]._id,
          tags[Math.floor(Math.random() * tags.length)]._id,
          tags[Math.floor(Math.random() * tags.length)]._id
        ],
        professionalExperiences: [
          Experiences.insert({
            title: "Benefits Administrator",
            companyName: "Endicott Johnson",
            location: "Endicott, NY",
            startDate: new Date('2012', '01', '05'),
            description: "Lorem ipsum dolor sit amet, eam nisl vero melius id. Harum fuisset epicuri est cu, et prima indoctum eum. Tritani viderer accommodare eu his, quo utamur sensibus consulatu ut, ut eam hinc mnesarchum interpretaris."
          }),
          Experiences.insert({
            title: "Sales Department Clerk",
            companyName: "Mattel",
            location: "Tampa, FL",
            startDate: new Date('2005', '06', '16'),
            endDate: new Date('2012', '01', '05'),
            description: "Lorem ipsum dolor sit amet, eam nisl vero melius id. Harum fuisset epicuri est cu, et prima indoctum eum. Tritani viderer accommodare eu his, quo utamur sensibus consulatu ut, ut eam hinc mnesarchum interpretaris."
          })
        ],
        volunteerExperiences: [
          Experiences.insert({
            title: "Education Committee Member",
            companyName: "United Way of Central Indiana",
            location: "Indianapolis, IN",
            startDate: new Date('2014', '05', '15'),
            endDate: new Date('2017', '02', '10'),
            description: "Lorem ipsum dolor sit amet, eam nisl vero melius id. Harum fuisset epicuri est cu, et prima indoctum eum. Tritani viderer accommodare eu his, quo utamur sensibus consulatu ut, ut eam hinc mnesarchum interpretaris."
          })
        ]
      },
      roles: [],
      savedPositions: []
    },
    {
      profile: {
        avatar: {
          original: "http://2.bp.blogspot.com/-ikS64MpWxHg/TiCzXTILydI/AAAAAAAAAzg/-ICAXPh4BW0/s1600/dallas-headshot-background-good.jpg"
        },
        firstName: "Kenneth",
        lastName: "Tessier",
        tagline: "Head Hunter at Structural",
        summary: "Spent 2001-2005 writing about Elvis Presley for no pay. Set new standards for getting to know UFOs for the underprivileged. Earned praised for my work supervising the production of UFOs in Africa. At the moment I'm managing bullwhips with no outside help. Uniquely-equipped for investing in toy elephants in Naples, FL. Gifted in selling glue in Nigeria.",
        interests: [
          tags[Math.floor(Math.random() * tags.length)]._id,
          tags[Math.floor(Math.random() * tags.length)]._id,
          tags[Math.floor(Math.random() * tags.length)]._id,
          tags[Math.floor(Math.random() * tags.length)]._id
        ],
        skills: [
          tags[Math.floor(Math.random() * tags.length)]._id,
          tags[Math.floor(Math.random() * tags.length)]._id,
          tags[Math.floor(Math.random() * tags.length)]._id,
          tags[Math.floor(Math.random() * tags.length)]._id,
          tags[Math.floor(Math.random() * tags.length)]._id,
          tags[Math.floor(Math.random() * tags.length)]._id
        ],
        professionalExperiences: [
          Experiences.insert({
            title: "Head Hunter",
            companyName: "Structural",
            location: "Indianapolis, IN",
            startDate: new Date('2015', '01', '05'),
            description: "Lorem ipsum dolor sit amet, eam nisl vero melius id. Harum fuisset epicuri est cu, et prima indoctum eum. Tritani viderer accommodare eu his, quo utamur sensibus consulatu ut, ut eam hinc mnesarchum interpretaris."
          }),
        ],
        volunteerExperiences: [
          Experiences.insert({
            title: "Indy Poverty Dance Director",
            companyName: "United Way of Central Indiana",
            location: "Indianapolis, IN",
            startDate: new Date('2005', '02', '13'),
            endDate: new Date('2008', '10', '20'),
            description: "Lorem ipsum dolor sit amet, eam nisl vero melius id. Harum fuisset epicuri est cu, et prima indoctum eum. Tritani viderer accommodare eu his, quo utamur sensibus consulatu ut, ut eam hinc mnesarchum interpretaris."
          }),
          Experiences.insert({
            title: "Walk for Dogs With Only Three Legs Lobbyist",
            companyName: "Dogs of America",
            location: "Washington, D.C.",
            startDate: new Date('2002', '04', '10'),
            endDate: new Date('2003', '11', '02'),
            description: "Lorem ipsum dolor sit amet, eam nisl vero melius id. Harum fuisset epicuri est cu, et prima indoctum eum. Tritani viderer accommodare eu his, quo utamur sensibus consulatu ut, ut eam hinc mnesarchum interpretaris."
          }),
        ]
      },
      roles: [],
      savedPositions: []
    }
  ]
  users.forEach(function(user) {
    Users.insert(user)
  })
}

export default run;
