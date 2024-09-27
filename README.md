# Recreation of Red Dead Redemption II's wiki
April 2024 (M1 BI)

## Introduction
The aim of this project was to build a website, comprising several pages, written in `HTML5`, laid out using a `CSS` cascading style sheet and dynamic thanks to the contribution of `JavaScript`. The site was built on `Google Chrome`, so it's possible to observe display errors on other browsers.

## Setup

To install the algorithm and its dependencies, you need to perform the following steps:

### Clone the repository

```bash
git clone https://github.com/gloriabenoit/Wiki-RDR2.git

cd Wiki-RDR2
```

## Usage

Simply open `MainMenu.html` using your favorite search engine.

## Architecture

The website consists of 5 pages:
- **Main Menu**: This is the site's main page, describing the game. Several screenshots of the game scroll by, and there are descriptions of the context of each page, which can be accessed directly.
- **Game progress page** : The progress page allows you to track your progress in the game. You can check off 116 main quest missions, taking into account the start date of the game.
With each new mission, the percentage of game completion is updated. Once all missions have been completed, the end date is saved and the total playing time is displayed.
- **Legendary Animal Map**: This interactive map provides information on the location of each of the game's 16 legendary animals. Clicking on an animal displays its description, photo and the drawing Arthur made of it in his diary. 
- **Character Gallery**: For each of the game's main characters, a description and image are displayed. Selection is made via a reactive carousel, the progress of which is tracked. 
- ***Curriculum Vitae***: My *CV* is not accessible in the banner, but is available at the bottom of the page, at my teacher's request. 
