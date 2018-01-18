import React from 'react'

import { ClearAll, CurrentRefinements, InstantSearch, Hits, Pagination, RefinementList, SearchBox } from 'react-instantsearch/dom'
import algoliaClient from 'algoliasearch/src/browser/builds/algoliasearch'

import Organization from '/imports/new-ui/components/Organizations/Organization'

const WelcomePage = () => {
  return (
    <div>
      <InstantSearch
        indexName="organizations"
      >
        <div className="container">
          <CurrentRefinements/>
          <ClearAll/>
          <SearchBox />
          <RefinementList attributeName="state" />
          <Hits />
          <Pagination />
        </div>
      </InstantSearch>
    </div>
  )
};

const styles = {
  header: {
    fontSize: '76px',
    color: 'white',
    fontFamily: 'Pacifico'
  },
  subheader: {
    marginTop: '32px',
    fontSize: '32px',
    color: 'white',
    fontFamily: 'Itim'
  },
}

export default WelcomePage