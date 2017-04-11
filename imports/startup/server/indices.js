import { Organizations } from '/imports/api/Organizations'
import { Positions } from '/imports/api/Positions'
import { Users } from '/imports/api/Users'

// Here, we create full text search indices on each collection we want 
// searchable. The operator $** means that Mongo will index the entire 
// document for search, not just individual fields. 

Organizations._ensureIndex({ '$**': 'text' })
Positions._ensureIndex({ '$**': 'text' })
Users._ensureIndex({ '$**': 'text' })
