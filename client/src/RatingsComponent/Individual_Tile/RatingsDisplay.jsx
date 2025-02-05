/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import React, { useState, useEffect, useContext } from 'react';
import { FaCheck, FaRegGem } from 'react-icons/fa';
import RatingsStarDisplay from '../RatingsStarDisplay.jsx';
import { ProductContext } from '../../contexts/ProductContext.jsx';
import * as RIT from './IndividualTileStyledComponent.jsx';
import RatingsImageModal from './RatingsImageModal.jsx';

const getBodyText = (text, onSeeMore = false) => {
  let bodyData = {};
  const bodyWords = text.split(' ');
  const wordLimit = 250;

  if (bodyWords.length <= wordLimit || onSeeMore) {
    bodyData = {
      isSeeMore: false,
      bodyText: text,
    };
    return bodyData;
  }

  if (bodyWords.length > wordLimit && !onSeeMore) {
    bodyData = {
      isSeeMore: true,
      bodyText: bodyWords.slice(0, wordLimit).join(' '),
    };
    return bodyData;
  }

  if (bodyWords.length > wordLimit && onSeeMore) {
    bodyData = {
      isSeeMore: false,
      bodyText: text,
    };
    return bodyData;
  }

  return bodyData;
};

const RatingsDisplay = ({ ratingList, onUpdateReview, starKey }) => {
  const {
    review_id, rating, reviewer_name,
    summary, body, helpfulness, recommend, response, photos,
  } = ratingList;
  const { productID, loaded } = useContext(ProductContext);

  const [seeMore, setSeeMore] = useState(false);
  const [fullBody, setFullBody] = useState('');
  const [imageShow, setImageShow] = useState(false);
  const [currentPhoto, setPhoto] = useState('');
  const [isReported, setIsReported] = useState(false);
  const [isHelpful, setIsHelpful] = useState(false);

  useEffect(() => {
    const { isSeeMore, bodyText } = getBodyText(body);
    setSeeMore(isSeeMore);
    setFullBody(bodyText);
  }, [productID]);

  const onUserUpdate = (action) => {
    onUpdateReview(review_id, action);
    if (action === 'helpful') {
      setIsHelpful(true);
    } else if (action === 'report') {
      setIsReported(true);
    }
  };

  const onSeeMore = () => {
    const { isSeeMore, bodyText } = getBodyText(body, true);
    setSeeMore(isSeeMore);
    setFullBody(bodyText);
  };

  return (
    <>
      <RIT.IndividualTileContainer>
        <RIT.Stars>
          <RatingsStarDisplay stars={{ width: '15', height: '15' }} id={starKey} starRatings={rating} />
        </RIT.Stars>
        <RIT.Username>
          <FaRegGem />
          <RIT.UsernameText>
            {reviewer_name}
          </RIT.UsernameText>
        </RIT.Username>
        <RIT.Summary>
          {summary}
        </RIT.Summary>
        <RIT.Body>
          {fullBody}
          {seeMore
            ? (
              <RIT.SeeMoreBodyText
                onClick={() => onSeeMore()}
              >
                ...Read More
              </RIT.SeeMoreBodyText>
            )
            : null }
        </RIT.Body>
        { recommend ? (
          <RIT.Recommend>
            <FaCheck
              style={{ fill: 'green', paddingRight: '10px' }}
            />
            <RIT.RecommendText>
              I recommend this product
            </RIT.RecommendText>
          </RIT.Recommend>
        ) : null }
        {!response ? null : (
          <RIT.Response>
            <RIT.ResponseText>
              Response:
            </RIT.ResponseText>
            <RIT.ResponseText>
              {response}
            </RIT.ResponseText>
          </RIT.Response>
        )}
        {photos.length !== 0
          ? (
            <RIT.ImageContainer>
              {
                photos.map(
                  (photo) => (
                    <>
                      <RIT.Image
                        alt={photo.id}
                        key={starKey.concat(photo.id)}
                        src={photo.url}
                        onClick={() => {
                          setImageShow(true);
                          setPhoto(photo.url);
                        }}
                      />
                      <RatingsImageModal
                        key={starKey.split('').reverse().join('').concat(photo.id)}
                        onSubmit={() => setImageShow(false)}
                        url={currentPhoto}
                        imageShow={imageShow}
                      />
                    </>
                  ),
                )
              }
            </RIT.ImageContainer>
          )
          : null}
        <RIT.Helpful>
          Helpful?
          {isHelpful
            ? (
              <RIT.HelpfulText>
                Yes
              </RIT.HelpfulText>
            )
            : (
              <RIT.HelpfulTextAction
                onClick={() => onUserUpdate('helpful')}
              >
                Yes
              </RIT.HelpfulTextAction>
            )}
          (
          {helpfulness}
          )
          <RIT.HelpfulText>
            |
          </RIT.HelpfulText>
          {isReported
            ? (
              <RIT.HelpfulText>
                Report
              </RIT.HelpfulText>
            )
            : (
              <RIT.HelpfulTextAction
                onClick={() => onUserUpdate('report')}
              >
                Report
              </RIT.HelpfulTextAction>
            )}
        </RIT.Helpful>
      </RIT.IndividualTileContainer>
    </>
  );
};

export default RatingsDisplay;
