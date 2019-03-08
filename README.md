# AvailableFlatSurface

[Live Demo](https://available-flat-surface.herokuapp.com/ "AvailableFlatSurface")

Hello! Thanks for checking out this project.

AvailableFlatSurface is a clone of [OpenTable](opentable.com "OpenTable") using a react/redux front end calling to a rails/PostgreSQL backend hosted on Heroku. 

I designed and built this app in 10 days and plan on implementing the remaining features once I graduate App Academy (early April)

## Features

* Secure frontend to backend user authentication using BCrypt.
* User can search restaurants and see restaurant details on their show pages.
* User can make reservations and see them in their profile page
* Secure AWS photo hosting with Rails Active Storage
* Styled VERY closely to opentable.com (see examples below)

* Planned- User can make/edit/delete reviews
* Planned- User can save/unsave restaurants

## Highlights

### Making Reservations with redux

One of the biggest functional challenges was gathering all necessary data to make a reservation upon clicking the time buttons on the search page. Hello redux! I tracked the party size and date of a reservation using the ui slice of state.

[](/app/assets/images/readme/resbutton.png?raw=true)

```javascript

// CONTAINER
const mapStateToProps = ({ ui, session }, ownProps) => ({
  searchedDateTime: ui.reservationForm.resDateTime || null,
  numPeople: ui.reservationForm.numPeople,
  userId: (session.currentUser === null) ? null : session.currentUser.id,
});

// COMPONENT
handleReservation(e) {
  e.preventDefault();

  if (this.props.userId === null) return this.props.history.push(`/search/signin`);

  let reservation = {
    reservation: (this.props.searchedDateTime.getTime()) / 1000, // divide by 1000 for rails
    num_people: this.props.numPeople,
    user_id: this.props.userId,
    restaurant_id: this.props.restaurantId // threaded in from above
  };

  this.props.makeReservation(reservation)
    .then(this.props.history.push(`/profile/${this.props.userId}/reservations#new-reservation`));
}

// BUTTON RENDER
<Link onClick={this.handleReservation}
  key={i}
  className="submit-button res-submit-button"
  to={`/profile/${this.props.userId}/reservations`}>{buttonTime}
</Link>
```

### Dynamic icons with react

Early in the project, when I was thinking about how to implement OpenTable's heavy use of icons in a clean, dynamic way, I had one of those Beautiful Mind/orchestral background music moments when React really started to make sense to me. Below are screenshots comparing my site to OpenTable, and then my code.

AvailableFlatSurface            |  OpenTable
:-------------------------:|:-------------------------:
![](/app/assets/images/readme/myShowDetails.png?raw=true) | ![](/app/assets/images/readme/openTableShowDetails.png?raw=true)

```javascript
sidebarDataArr(rest) {
  let details = {
    'Address': [rest.address, 'fas fa-map-marker-alt'],
    'Cross Street': [rest.crossStreet, 'fas fa-car-alt'],
    'Neighborhood': [rest.neighborhood, 'far fa-building'],
    'Hours': [rest.hours, 'far fa-clock'],
    'Cuisine': [rest.cuisine, 'fas fa-utensils'],
    'Dress Code': [rest.dressCode, 'fas fa-tshirt'],
    'Parking Details': [rest.parkingDetails, 'fas fa-parking'],
    'Payment Options': [rest.paymentOptions, 'fas fa-credit-card'],
    'Phone Number': [rest.phone, 'fas fa-phone'],
    'Website': [rest.website, 'far fa-share-square'],
  }

  return Object.entries(details);
}

const sidebarDetails = sidebarDataArr.map((detail, i) => {
  if (detail[1]) {
    let label = detail[0];
    let val = detail[1][0] || 'N/A';
    let icon = detail[1][1];

    val = (label === 'Website' && val !== 'N/A') ? <a href={val}>{val}</a> : val
    return (
      <li key={i}>
        <i className={icon} />
        <div>
          <label>{label}</label>
          <p>{val}</p>
        </div>
      </li>
    )
  }
})
  
  
```
