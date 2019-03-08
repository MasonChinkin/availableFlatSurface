# AvailableFlatSurface

Hello! Thanks for checking out this project.

[AvailableFlatSurface](https://available-flat-surface.herokuapp.com/ "AvailableFlatSurface") is a clone of [AvailableFlatSurface](opentable.com "OpenTable") using a react/redux front end calling to a rails backend hosted on Heroku. 

# 

# Code Highlights

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
