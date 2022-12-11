# Change Log

All notable changes to this project will be documented in this file.

##[0.2.0] - 2022-10-26
### Added

- We added the basics from feature 4 kickoff
- Added the vendors data to the database
- Added state variables to keep track of the vendors and its data
- Added the pictures for the vendors and logo for SportsLine
- Added the Component tree diagram and the UML diagram
- Added the buy button and quantity to have a certain
  amount of items that we could buy

### Changed

- Removed Vendor state variables since they were not needed
  as the state variables that pertained to items had pointers
  that pointed to the relevant vendors for our case

- Modified the vendor class and added the vendor's website in order to be able to link the user to the vendor if they wish

### Removed

- Removed the buy button since it was causing a lot of bugs, postponed this feature to the next release in order to get it working perfectly

##[0.3.0] - 2022-11-09
###Added

- Authentication and protected routes that allow the user to acces the app only if they have created an account

### Changed

- The Navigation bar now includes a log in and a sign up option in order to authenticate the user

### Removed

- Removed the vendor images in the inventory list. This was due to a bug that we were not able to fix on time

### Changed

- Authentication now works perfectly. The user is able to register, login, and logout.
- Improved the CSS on the webpage.

### Added
- Stripe implementation.
- Add to cart functionality.
- Instant Checkout.
- Filters for buying items