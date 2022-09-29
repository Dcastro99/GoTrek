import React from 'react'
import { BrowseContainer, BrowseWrapper, Title, BrowseCard, BrowseImage, BrowseText, Link} from './BrowseCategoryElements';
import backpack from '../../assets/images/browseCategory/backpack.jpg';
import bike from '../../assets/images/browseCategory/bike.jpg';
import hike from '../../assets/images/browseCategory/hike.jpg';
import walk from '../../assets/images/browseCategory/walk.jpg';
import run from '../../assets/images/browseCategory/run.jpg';

function Browse() {
  return (
    <BrowseContainer>
        <Title>
          Browse by Category
        </Title>
        <BrowseWrapper>
            <BrowseCard to='/profile'>
              <Link to='/profile'>
                <BrowseImage src={backpack}/>
                <BrowseText>Backpacking</BrowseText>
              </Link>
            </BrowseCard>
            <BrowseCard>
              <Link to='/hiking'>
                <BrowseImage src={hike}/>
                <BrowseText>
                  Hiking
                </BrowseText>
              </Link>
            </BrowseCard>
            <BrowseCard>
              <Link>
                <BrowseImage src={walk}/>
                <BrowseText>Walking</BrowseText>
              </Link>
            </BrowseCard>
            <BrowseCard>
                <Link>
                <BrowseImage src={run}/>
                <BrowseText>Running</BrowseText>
                </Link>
              </BrowseCard>
            <BrowseCard>
              <Link>
                <BrowseImage src={bike}/>
                <BrowseText>Biking</BrowseText>
              </Link>
            </BrowseCard>
        </BrowseWrapper>
    </BrowseContainer>
  )
}

export default Browse;