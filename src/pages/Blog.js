import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Wrapper } from '../globalStyles';
import BlogData from '../data/blog.json';

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex: 33.3%;
  max-width: 33.3%;
  padding: 3rem 0.5rem;

  @media screen and (max-width: 960px) {
    flex: 50%;
    max-width: 50%;
  }

  @media screen and (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const CardDate = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 10px;
  color: #9a9a9a;
`;

const CardHeading = styled.h1`
  font-size: 1.5rem;
  margin-top: 10px;

  &:hover {
    color: #4b59f7;
    transition: all 0.3 ease-in-out;
  }
`;

const CardDescription = styled.p`
  display: block;
  display: -webkit-box;
  margin-top: 10px;
  font-size: 1rem;
  overflow: hidden;
  line-height: 2rem;
  max-height: 8rem;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Blog = () => {
  return (
    <Wrapper>
      <Container>
        <CardRow>
          {
            BlogData.map((blogDetail, index) => {
              return (
                <Card key={index}>
                  <CardLink to="/">
                    <CardImage src={blogDetail.image} alt="" />
                  </CardLink>
                  <CardDate>{blogDetail.date}</CardDate>
                  <CardLink to="/">
                    <CardHeading>{blogDetail.title}</CardHeading>
                    <CardDescription>{blogDetail.description}</CardDescription>
                  </CardLink>
                </Card>
              )
            })
          }
          
        </CardRow>
      </Container>
    </Wrapper>
  )
}

export default Blog
