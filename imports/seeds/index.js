import SeedTags from './seedTags'
import SeedOrganizations from './seedOrganizations'
import SeedPositions from './seedPositions'
import SeedUsers from './seedUsers'

export default () => {
  SeedTags()
  SeedOrganizations()
  SeedPositions()
  SeedUsers()

  // return 'Done!';
}
