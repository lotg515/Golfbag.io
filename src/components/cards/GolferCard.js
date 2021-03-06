import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {Image} from "@material-ui/icons";
import styled from "styled-components";
import theme from "../../theme/theme";

const GolferCard = (props) => {
  const {firstName, lastName,  image, sponser, rank} = props;
  const StyledCardMedia = styled(CardMedia)`
    height: 100px;
  `;
  const StyledImage = styled.img`
    height: 80px;
    grid-column: 1/2;
    grid-row: 1/4;
    margin-right: 8px;
  `;
  const StyledCard = styled(Card)`
    min-width: 325px;
    && {
      border-radius: 16px;
      background-color: ${theme.palette.background.light};
    }
    @media only screen and (min-width: ${theme.breakpoints.values.lg}px) {
       width: 325px;
    }
    :hover {
      box-shadow: 0 10px 0px 0px #00E55C;
    }
  `;
  const StyledCardContent = styled(CardContent)`
    display:grid;
    grid-template-columns: 108px auto auto;
    grid-template-rows: 22px 38px 20px
  `;
  const StyledFirstName = styled(Typography)`
    grid-row: 1/2;
    grid-column: 2/4;
    text-transform: uppercase;
    && {
      font-size: 18px;
      color: #18BF5B;
      letter-spacing: 0.48px;
      font-family: ${theme.fonts.barlow_condensed};
    }
  `;
  const StyledLastName = styled(Typography)`
    grid-row: 2/3;
    grid-column: 2/4;
    text-transform: uppercase;
    && {
      color: #585858;
      font-size: 32px;
      font-family: ${theme.fonts.barlow_condensed};
    }
  `;
  const StyledSponser = styled(Typography)`
    grid-row: 3/4;
    grid-column: 2/3;
    && {
      color: #585858;
      font-size: 16px;
      font-family: ${theme.fonts.barlow_condensed};
    }
  `;
  const StyledRank = styled(Typography)`
    grid-row: 3/4;
    grid-column: 3/4;
    justify-self: flex-end;
    && {
      color: #585858;
      font-size: 16px;
      font-family: ${theme.fonts.barlow_condensed};
    }
  `;
  return (
  <StyledCard variant="outlined">
    <StyledCardContent>
      <StyledImage src={"https://www.placehold.it/100x100"} />
      <StyledFirstName color="textSecondary" gutterBottom>
        {firstName}
      </StyledFirstName>
      <StyledLastName variant="h5" component="h2">
        {lastName}
      </StyledLastName>
      <StyledSponser color="textSecondary">
        {sponser}
      </StyledSponser>
      <StyledRank variant="body2" component="p">
        Rank: {rank}
      </StyledRank>
    </StyledCardContent>
  </StyledCard>
  )
}; export default GolferCard;