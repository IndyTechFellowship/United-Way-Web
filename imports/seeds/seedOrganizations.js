import moment from 'moment';

import { Organizations } from '/imports/api/Organizations'
import { Position } from '/imports/api/Positions'
import { Tags } from '/imports/api/Tags'

const run = () => {
  const tags = Tags.find({}).fetch()
  const organizations = [
    {
      avatarUrl: "http://www.growingplacesindy.org/wp-content/uploads/2016/10/xGPI-Logo.png.pagespeed.ic.nKheZHT5bm.png",
      name: "Growing Places Indy",
      tagline: "Grow Well. Eat Well. Live Well. Be Well",
      imageUrls: [
        "http://gpi.bitnamiapp.com/wp-content/uploads/2015/03/15488785180_68d6410deb_o.jpg",
        "http://gpi.bitnamiapp.com/wp-content/uploads/2015/03/9041699103_dd776ee3e5_o.jpg",
        "http://gpi.bitnamiapp.com/wp-content/uploads/2015/03/14910352423_ee4ca89b33_o-1024x683.jpg",
        "http://gpi.bitnamiapp.com/wp-content/uploads/2015/03/20322984212_600b41f410_k-1024x768.jpg"
      ],
      description: "We are a 501c3 non-profit organization. Our mission is to empower people to cultivate personal, family and community wellness through urban agriculture, food access and mind-body education.",
      users: [],
      tags: [
        tags[Math.floor(Math.random() * tags.length)]._id,
        tags[Math.floor(Math.random() * tags.length)]._id,
        tags[Math.floor(Math.random() * tags.length)]._id,
        tags[Math.floor(Math.random() * tags.length)]._id,
        tags[Math.floor(Math.random() * tags.length)]._id
      ],
      positions: [
        Positions.insert({
          name: "Urban Microfarm Committee Member",
          description: "Et decore scribentur eum, usu ludus dicant ex, quot graeci noluisse ne mei. Corpora dissentiet pri an, sumo novum id per. Eam nostrud consulatu ei.",
          positionType: "Agriculture",
          opportunityType: "Committee",
          frequency: "Monthly",
          timeCommitment: "2 hours per week",
          monetaryCommitment: "$1000 per year",
          skills: [
            tags[Math.floor(Math.random() * tags.length)]._id,
            tags[Math.floor(Math.random() * tags.length)]._id,
            tags[Math.floor(Math.random() * tags.length)]._id,
            tags[Math.floor(Math.random() * tags.length)]._id,
            tags[Math.floor(Math.random() * tags.length)]._id,
            tags[Math.floor(Math.random() * tags.length)]._id,
            tags[Math.floor(Math.random() * tags.length)]._id
          ],
          deadline: new Date('2017', '04', '10')
        }),
        Positions.insert({
          name: "Seed Supply Committee Member",
          description: "Et decore scribentur eum, usu ludus dicant ex, quot graeci noluisse ne mei. Corpora dissentiet pri an, sumo novum id per. Eam nostrud consulatu ei.",
          positionType: "Agriculture",
          opportunityType: "Committee",
          frequency: "Monthly",
          timeCommitment: "2 hours per week",
          monetaryCommitment: "$1000 per year",
          skills: [
            tags[Math.floor(Math.random() * tags.length)]._id,
            tags[Math.floor(Math.random() * tags.length)]._id,
            tags[Math.floor(Math.random() * tags.length)]._id,
            tags[Math.floor(Math.random() * tags.length)]._id,
            tags[Math.floor(Math.random() * tags.length)]._id,
            tags[Math.floor(Math.random() * tags.length)]._id,
            tags[Math.floor(Math.random() * tags.length)]._id
          ],
          deadline: new Date('2017', '08', '12')
        })
      ]
    },
    {
      avatarUrl: "https://static1.squarespace.com/static/5331b54de4b0f2d9b1b04153/t/583f238f579fb38f7d9ac0e4/1480532882501/PUP+Catalog+Logo.jpg?format=2500w",
      name: "People For Urban Progress",
      tagline: "Goods For Good",
      imageUrls: [
        "https://static1.squarespace.com/static/5331b54de4b0f2d9b1b04153/54dd0a87e4b0183db7131604/574dc87d7da24f0b913092b1/1464716262545/Seats_From+Behind.jpg?format=2500w"
      ],
      description: "We are an Indianapolis-based not-for-profit. We advance connectivity, environmental responsibility, and good design. We rescue discarded materials, redesigning them for public benefit. Our locally-designed products fund big projects and big ideas that improve Indianapolis’ urban spaces. Simply put, we make GOODS FOR GOOD.",
      users: [],
      tags: [
        tags[Math.floor(Math.random() * tags.length)]._id,
        tags[Math.floor(Math.random() * tags.length)]._id,
        tags[Math.floor(Math.random() * tags.length)]._id,
        tags[Math.floor(Math.random() * tags.length)]._id,
        tags[Math.floor(Math.random() * tags.length)]._id,
        tags[Math.floor(Math.random() * tags.length)]._id,
        tags[Math.floor(Math.random() * tags.length)]._id
      ],
      positions: [
        Positions.insert({
          name: "Treasurer",
          description: "Et decore scribentur eum, usu ludus dicant ex, quot graeci noluisse ne mei. Corpora dissentiet pri an, sumo novum id per. Eam nostrud consulatu ei.",
          positionType: "Finance",
          opportunityType: "Board",
          frequency: "Monthly",
          timeCommitment: "8 hours per week",
          monetaryCommitment: "$5000 per year",
          skills: [
            tags[Math.floor(Math.random() * tags.length)]._id,
            tags[Math.floor(Math.random() * tags.length)]._id,
            tags[Math.floor(Math.random() * tags.length)]._id,
            tags[Math.floor(Math.random() * tags.length)]._id
          ],
          deadline: new Date('2017', '10', '12')
        })
      ]
    }
  ]
  organizations.forEach(function(org) {
    Organizations.insert(org)
  })
}

export default run;
