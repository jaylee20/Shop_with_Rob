# Client-Side Documentation - Ratings and Reviews:

---

## Ratings and Reviews Component Information:

- **Purpose:**

  - The Ratings & Reviews component will allow viewing and submission of reviews for the product selected. The functionality contained within this component can be divided into several pieces:

    - Sort Reviews
    - Reviews List
    - Write new review
    - Product Rating
    - Rating Breakdown
    - Product Feature Breakdown
      > The breakdown of the above pieces will be discussed throughout this README.

    This component will extend the ability to write, read, and browse through reviews for the current product.
    All reviews will be saved per product and specific styles will not be accounted for within the review module.

- **Business Design Documentation Reference**:
  - [Ratings and Reviews](https://learn-2.galvanize.com/cohorts/2910/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/reviews.md)

---

## Ratings And Reviews Component Overview:

- **Purpose:**
  - The Ratings & Reviews component will allow viewing and submission of reviews for the product selected.
  <p></p>
- **Component Breakdown:**

  - The following requirements have been specified for the Ratings and Reviews component:

    1. Top left:
       - Display the aggregate product rating.
       - Represent the aggregate product rating with stars.
       - Show the percentage of reviews that recommend the product.
    2. Middle left:
       - Display the breakdown of product ratings.
       - Ensure that each product rating can be used as a filter. (ie when the customer clicks on the 5-Stars label the ratings will be filtered for only 5 star reviews).
    3. Bottom left:
       - View product characteristic(s) breakdown.
    4. Top middle:
       - Display the number of reviews for the product.
       - Filter reviews by relevant, helpful, or newest.
    5. Middle:
       - Display the list of reviews in individual tiles.
    6. Bottom middle:

       - The ability to add additional reviews to the review list, where the additional reviews load two at a time so long as there are more reviews to display.
       - The ability to add a new review for the product, where a customer can only add one review per product.

       <p></p>

    > The above requirements are shown below

![Ratings and Reviews][component]

---

## Individual Review Tiles:

- **Purpose:**
  - The individual review tiles will provide relevant review information for customers so that they can make the most informed product choice.
  <p></p>
- **Component Breakdown:**

  - The following requirements have been specified for the individual review tiles component:

    1. Display all fields specified in the business requirement document.
    2. Let the customer have the ability to mark the review as either helpful or report the review.
    3. Upon clicking a review image, a image modal will appear to show the image in full screen.

    <p></p>

    > The above requirements are shown below

![Individual Tiles][individualtile]

---

## View More Reviews:

- **Purpose:**
  - A customer will have the ability to add additional reviews to the review list, where the additional reviews load two at a time so long as there are more reviews to display. When there are no additional reviews, the button will not appear.
  <p></p>
- **Component Breakdown:**

  - The following requirements have been specified for the more review component:

    1. Add two more reviews to the review list when the "More Review" button is clicked.
    2. If there are no additional reviews hide the button.

    <p></p>

    > The above requirements are shown below

![More Reviews][morereviews]

---

## Add A Review:

- **Purpose:**
  - A customer will have the ability to add a review for a specified product. The same customer cannot write multiple reviews for the same product.
  <p></p>
- **Component Breakdown:**

  - The following requirements have been specified for the add a review component:

    1. Ensure all fields marked as required are filled out before submitting a review.
    2. All fields specified in the business requirement document must be contained in the Add Review modal.
    3. Provide the customer with a counter for the review body to guarantee a minimum of 50 words are used.

    <p></p>

    > The above requirements are shown below

![Add Review][addreview]

[component]: ../images/ComponentOverview.gif
[morereviews]: ../images/MoreReviews.gif
[individualtile]: ../images/IndividualTile.gif
[addreview]: ../images/AddReview.gif

---
