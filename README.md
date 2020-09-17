

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
A modal with a table showing the historical high scores. Due to use of [Web Storage API](https://www.w3schools.com/html/html5_webstorage.asp) usernames and scores are persistant, even through browser closure.


4. **Alerts Modal**  
A modal that shows the outcome of the current stage of the game to give feedback for the users' progress.  
    - _Feedback Alerts_: Shows one of two possible messages dependant on the results. If the user has correctly matched the images, progresses the game to the next level and displays according message. If the user was not successful displays consolation message, pushes scores to localStorage and resets the game. 
  
### Features Left to Implement  
  
1. **Image API's**  
Currently the pool of images is 1 per animal. By using an API it would be possible to generate random images and have a wider variety of images to display to the user, to make the game a little more interesting.  
  
2. **Feedback/Collaboration Form**  
I had considered implementing a function where users could email comments and requests through an API service such as [EmailJS](https://www.emailjs.com/). However time constraints meant it didn't make it into the current version.  
  
3. **More Intricate Scoring System**  
Redesigning the scoring system so that points are generating by each correct matching of an individual image rather than a complete sequence. This would allow for a more diverse score to be generated.

4. **Back End Support**  
Using technologies to store username and scores with back end technologies to remove the need to use the [Web Storage API](https://www.w3schools.com/html/html5_webstorage.asp) and allow for persistance of larger quantities of data.

5. **Global Scoreboard**  
This would tie in with the _Back End Support_, by allowing for a global database of scores. This would allow users to compete with people globally and not just those with access to their own devices. 

6. **Sounds**  
I believe that sounds could add another dimension to the game. The sounds most considered would be sounds for button clicks, a celebratory sound for advancing to the next level and a consiliatory sound for an incorrect guess. I would also consider adding some background music that could be muted and the volume adjusted with some additional controls.  

## Technologies Used  
  
- **Languages**  
    - [HTML5](https://devdocs.io/html/)
    - [CSS3](https://devdocs.io/css/) 
    - [JavaScript](https://devdocs.io/javascript/)
  
- **Libraries**  
    - [JQuery](https://jquery.com) - used to simplify DOM manipulation, and make the JavaScript easier to read. 
    - [Google Fonts](https://fonts.google.com/) - provided the fonts for the website to make the text more interesting.  
    - [Animate.css](https://daneden.github.io/animate.css/) - added as a dependency for _Textillate_, though an older version was used as the animations didn't work correctly with the latest version.
  
- **Frameworks**  
    - [Bootstrap](https://getbootstrap.com/) - used to create an easily responsive design for all screen sizes.  
  
- **Plugins**  
    - [Textillate](https://textillate.js.org/) - provided animations for the title.  
    - [Lettering.js](http://letteringjs.com/) - included as a dependency of _Textillate_.
  
- **Toolkits**  
    - [Flaticon](https://www.flaticon.com/) - used for the animal themed icons for the buttons.  
  
- **API**  
    - [Web Storage](https://www.w3schools.com/html/html5_webstorage.asp) - used both sessionStorage and LocalStorage. 
      - **sessionStorage**  - for storing username data that resets on browser closure. To enable users to enter new usernames for different players.
      - **localStorage**  - to store username : score pairs to populate the highscores table.   
  
- **Services**  
    - [GitPod](https://www.gitpod.io/) - the IDE used exclusively to create the website.  
    - [Git](https://git-scm.com/) - for version control.  
    - [GitHub](https://github.com/) - to store the repository online and host the finished website.  
    - [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) - used mainly for checking responsiveness of the website throughout the development process and to address bugs and error messages with code.  
    - [HTML Validator](https://validator.w3.org/) - used to test the final HTML code and address improper syntax.  
    - [CSS Validator](https://jigsaw.w3.org/css-validator/) - used to test the final CSS code and address improper syntax.  
    - [JSHint](https://jshint.com/) - used to test the final JavaScript code and address improper syntax.    
    - [Figma](https://www.figma.com/) was used for wireframing.
    - [Am I Responsive?](http://ami.responsivedesign.is/) - used to provide a [visual representation](#Animatch) of the responsiveness of the game across all platforms. 
  
- **Software**  
    - [Paint.net](https://www.getpaint.net/) - used to crop and resize the original animal images to better fit the image display box. 
  
  
## Testing  
  
### Tested Devices  
The majority of the testing was conducted on the desktop PC via [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools).    
  
```  
| -----------|---------------------------- |------------------------------|  
| Type       | Device                      | Browsers                     |  
| -----------|---------------------------- |------------------------------|  
| Desktop    | Windows 10, 1080p display   | Chrome, Firefox, Edge, Opera |
| Laptop     | Asus X550C                  | Chrome, Firefox, Edge, Opera |  
| Smartphone | Samsung Note 9              | Chrome, Firefox              |  
| Smartphone | Huawei P30 Pro              | Chrome, Firefox              |  
| Smartphone | Samsung Tab E               | Chrome                       |    
| -----------|---------------------------- |------------------------------|  
```  
  
### Testing Process
The following process was conducted for all devices, with the desktop and laptop process repeated twice and higher and lower resolutions.  
  
1. **Username Modal**  
    - Open the website and ensure that the username modal is displayed.  
    - Ensure that the modal will continue to be loaded until a username is entered.  
    - Ensure the modal is displayed in the correct position.  
    - Ensure all text is visible and not overflowing.  
    - Close browser window and open again to ensure the username modal loads again to prompt username input.  
    - (Desktop and laptop only) Hovered the mouse over the button to ensure the animation occured. 
    - Clicked the submit button without inputting text to ensure error message is displayed.
    - Clicked the submit button after inputting text and ensured username in welcome message was updated.  
  
2. **Information Modal**  
    - Ensured the modal is opened on the button click in the center of the screen.
    - Ensured modal is dismissed by: pressing Esc, clicking out of the modal or clicking on the close button.
    - Ensured modal text displays correctly on smaller resolutions (up to 992px max-width).
    
2. **Scoreboard Modal**  
    - Ensured the modal is opened on the button click in the center of the screen.
    - Ensured modal is dismissed by: pressing Esc, clicking out of the modal or clicking on the close button.
    - Ensured modal text displays correctly on smaller resolutions.
    - __*__ Ensured scores are updated and displayed in correct order. 
  
3. **Main Page**  
    - Ensured the main container remains centred at all screen sizes.
    - Ensured the image display box remains centred at all screen sizes. 
    - Ensure the images display correctly within the image box and do not become distorted or indistinguishable.
    - Ensure the mouseover effect for the buttons.  
    - Ensure all the buttons work as intended.  
    - Ensure the alerts modal is called after clicking on the _'check'_ button and the correct alert message is called.
    
4. **Alerts Modal**  
    - Ensured the modal displays at the correct time in the center of the screen.  
    - Ensured the correct alert messages are displayed dependent on the stage of the game.  
    - Ensured the level advances/resets depending on results. 
    - Ensure the mouseover effect for the buttons.   
    
### Validation services  
Upon completion of the project the code was checked using the following resources and the corresponding feedback acted upon where appropriate.  
- [HTML Validator](https://validator.w3.org/) - all errors fixed bar 3. 2 relating to the image box element not having alt or src properties. This was a conscious decision so as not to have a broken link icon displayed in the image box prior to dynamically generating the images.
- [CSS Validator](https://jigsaw.w3.org/css-validator/) - many errors shown, but were relating to the various CDN sources. The single error shown for my own CSS was fixed.
- [JSHint](https://jshint.com/) - checked the javascript and fixed errors accordingly.  
  
### Bugs Discovered  
- There is currently a bug whereby the scoreboard displays after closing the alerts window on small screen sizes whether the game has been completed or not. This was only intended to occur when the game was over, not for when advancing to the next level. Instead of disabling the functionality completely for smaller screens I have decided to leave it as it is for now until a solution can be found. The reasons for this being that users on smaller devices would have no way to see their scores without this function as and additional clickable button would take too much space. One possible solution would be to hide/show buttons on smaller screens dependent on the state of the game, or possibly building a collapseable sidebar for the scoreboard.  
  
## Deployment  
  
[GitPod](https://www.gitpod.io/) was the sole IDE used to deveop this project due to the synergy with [Git](https://git-scm.com/) and [GitHub](https://github.com/) for the hosting of repositories and version control.  
  
Animatch was deployed via GitHub Pages from its [GitHub repository](https://github.com/AJBayliss81/animatch). This can be achieved by:  
1. Logging in to Github.  
2. Selecting the repository for deploying, eg. [Animatch](https://github.com/AJBayliss81/animatch).
3. Clicking the **Settings** option at the end of the menubar below the repository name.  
4. The penultimate section is for GitHub Pages.  
5. Within this section the first options are for the source, with a drop-down box. 
6. Select the _Master_ option from the branch box, the page will reload and a link for the deployed page will show.
  
### How to run this project locally  
  
Should you wish to pull the code to your own repository:  
1. Login to your own Github.  
2. Open the repository you wish to pull. eg. [Animatch](https://github.com/AJBayliss81/animatch).  
3. Just above the file list is a green button `Clone`, click this.  
4. Select from the options to clone via `HTTPS or SVN` using the link, open with `GitHub Destop` if the app is installed, or download as a `.zip` file.  
5. Open Git Bash.  
6. Change the current working directory to the location where you want the cloned directory to be made.  
7. Type `git clone`, and then paste the URL you copied in Step 3.  
8. Press `Enter`. Your local clone will be created.  
  
  
## Credits  
  
### Code  
  
- [StackOverflow](https://stackoverflow.com/) was used extensively to research solutions to problems I was having with getting the desired result from the code when it wasn't behaving as I had intended.  
  
### Media  
  
- The dog/fox/goat icons were made by [Freepik](https://www.flaticon.com/authors/freepik) and found at [Flaticon](https://www.flaticon.com).
- The cat icon was made by [Vitaly Gorbachev](https://www.flaticon.com/free-icon/cat_2325879?term=cat&page=3&position=5) and found at [Flaticon](https://www.flaticon.com).
- The cat image was by [Hang Niu](https://unsplash.com/@niuhang?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) and found at [Unsplash](https://unsplash.com/photos/Tn8DLxwuDMA).
- The dog image was by [Baptist Standaert](https://unsplash.com/@baptiststandaert?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) and found at [Unsplash](https://unsplash.com/photos/mx0DEnfYxic).
- The fox image was by [Sunyu](https://unsplash.com/@sunyu?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) and found at [Unsplash](https://unsplash.com/photos/tIfrzHxhPYQ).
- The goat image was by [Jess Manthey](https://unsplash.com/@jessmanthey) and found at [Unsplash](https://unsplash.com/photos/CiQOc9z4LbY).
- The main background image was by [brgfx](https://www.freepik.com/vectors/tree) and found at [Freepik](https://www.freepik.com).

### Acknowledgments 
  
- [Reuben Ferrante](https://github.com/arex18) for helping me get through some trying times.  
- [Code Institute](https://codeinstitute.net/) tutors.    
- [Hangaman](https://dom-888.github.io/Second-Milestone-Project/) provided inspiration with design and aesthetics.  
  

