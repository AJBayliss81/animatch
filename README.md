

# [Animatch](https://ajbayliss81.github.io/animatch/)

A memory test game to match a sequence of images.

!["Example responsivity"](assets/images/.png "Example responsivity")

## Table of Contents
1. [**UX**](#ux)
    - [**Project Goals**](#project-goals)
    - [**Player Goals**](#player-goals)
    - [**Developer Goals**](#developer-goals)
    - [**User Stories**](#user-stories)
    - [**Design Choices**](#design-choices)
    - [**Wireframes**](#wireframes)

2. [**Features**](#features)
    - [**Existing Features**](#existing-features)
    - [**Features Left to Implement**](#features-left-to-implement)

3. [**Technologies Used**](#technologies-used)

4. [**Testing**](#testing)
    - [**Tested Devices**](#tested-devices)
    - [**Laptop Testing**](#laptop-testing)
    - [**Smartphone Testing**](#smartphone-testing)
    - [**Validation Services**](#validation-services)
    - [**Bugs Discovered**](#bugs-discovered)

6. [**Deployment**](#deployment)
    - [**How to run this project locally**](#how-to-run-this-project-locally)

7. [**Credits**](#credits)
    - [**Code**](#code)
    - [**Media**](#media)
    - [**Acknowledgments**](#acknowledgments)

8. [**Disclaimer**](#disclaimer)

## UX


### Project Goals  
  
The aim of this project was to create a game that would be enjoyable for people of all ages, but mainly focused towards younger users. The game would test the memory of user by displaying an increasing sequence of images each level for the user to match against.  
  
### Player Goals  
  
Player goals are:  
- Enjoy playing the game.  
- Intuative interface and rules.  
- Start playing quickly and easily.  
- Have feedback from the game as to the progress eg. scores.  
  
[Animatch](https://ajbayliss81.github.io/animatch/) achieves this by:    
- Adopting a colour scheme and use of images that are appealing to all users.  
- Having an intuitive design and layout whereby the user can quickly learn how to play the game. 
- Having instructions to help the user to more quickly learn the game (though this feature is disabled for mobile devices due to screen size). 
- By giving feedback to the player through mouseover events, modal alerts and a scoreboard.  
  
### Developer Goals  
  
- Incorporate JavaScript into a website to make it more responsive.  
- Design something fun and appealing to users. 
- Expand upon previous skills to add increased functionality to website design. 
- Expand portfolio to showcase new skills.
 
### User Stories  
  
Being a player above the age of 3 I want:  
  
1. To be able to quickly understand how the game works, with or without instructions.
2. Something appealing to look at whilst I play.
3. Something that is enjoyable to play, and has lasting appeal.
4. Feedback to show when I am doing something with the game and to see scores so I can attempt to beat them.
5. To be able to reset the game should it become broken or if I choose to start again.
6. To not be able to click buttons at inappropriate times.  
  
### Design Choices  
  
1. **Fonts**  
Fonts were selected from [Google Fonts](https://fonts.google.com/). All were chosen as they paired well together. 
    - _Lora_: The font used for the body text and buttons was chosen as it was quite rounded without being overly difficult to read.  
    - _Raleway_: Was used for the title as the bold options were quite thick and allowed for a nice shadow effect to be used to highlight it.  
    - _Lato_: Was chosen as an additional text for headings as I didn't like some of the styles on the letters with _Raleway_, particularly the W. _Lato_ was cleaner and still maintained the rounded aesthetic.  
  
2. **Buttons**  
Buttons used the majority of [Bootstrap's](https://getbootstrap.com/) styling and functionality with some custom colours added.  
    - _Player Choice Buttons_: Utilised custom icons found at [Flaticon](https://www.flaticon.com/) that were imported into the css folder for use to make them more appealing for the users.
    
  
3. **Colors**  
Pastel colours were chosen for the site to give the cartoonish aesthetic, with the specific colour palette chosen to give a bright woodland feel to tie in with the animal theme. The palette I chose can be found [here](https://coolors.co/b54d40-bdd4e7-68a357-bca371-fbbe4b).
  
4. **Images**  
Images were chosen to fit with the theme of the website. 
    - _Animal Images_: Stock photo images of real animals were chosen as I felt it would present a better quality of image than choosing to use a cartoon version. This was to attempt to eliminate any potential confusion with distinguishing the animals.  
    - _Background Image_: Is that of a woodland, to help tie the themes of the animal images and the use of colours together.  
  
5. **Animated Text**  
The title text is animated with [Textillate](https://textillate.js.org/) and the associated dependencies. This was used to create an eye-catching introduction to the page, tie in with the cartoonish theme and bring an element of fun to the page.
  
7. **Styling**  
The website style is inspired by [Hangaman](https://github.com/Dom-888/Second-Milestone-Project).
    - _Cartoonish Theme_: I enjoyed the cartoonish theme of the page and tried to develop something similar within my game.  
    - _[Textillate](https://textillate.js.org/)_: How animations can be used to liven up the page and make it appear less static. 
    - _Modals_: How modals can be used to limit the amount of information present on the page at one time, making it more responsive friendly. By presenting the information at particular stages of the game allows for better flow without superfluous clutter on the page, and make the presentation of information more engaging.
  
### Wireframes  
  
[Figma](https://www.figma.com/) was utilised to create the wireframes for the project and can be located [here](https://www.figma.com/file/2opWSRmjWoGNrkJ5EK1TKk/MS2-Project-Animatch?node-id=0%3A1).  
  
## Features  
  
The website follows a one page design with accompanying modals to maintain a clutter free environment and guide the flow of the game.
  
### Existing Features  
  
1. **Username Modal**  
Is loaded upon visiting the site.  
    - _Persistance_: Will keep loading until the user enters a name.  
    - _Updates username_: Displays the username in the welcome message at the top of the game window and will persist due to the use of [Web Storage API](https://www.w3schools.com/html/html5_webstorage.asp).  
  
2. **Instructions Modal**  
Shows the modal with the game instructions to aid first-time users of the game to understand how to play.

3. **Scoreboard Modal**  
