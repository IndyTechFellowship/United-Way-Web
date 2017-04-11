import './searchPublications'

// This is a fake collection. No data will actually ever be 
// inserted into it on the backend. 
// It is used as a bucket for the frontend to collect 
// search results using real time meteor publications.
//
// To use:
//   Meteor.subscribe('Search.fullText.all', 'hi!')
//   SearchResults.find().fetch()
// The documents returned will have the following fields, in addition to the fields you'd
// expect from the database
//   {
//     type: "Organizations",
//     score: 0.57412123
//   }
// Where `type` is the collection is came from and `score` is the search ranking.
const SearchResults = new Meteor.Collection('SearchResults')

export { SearchResults }