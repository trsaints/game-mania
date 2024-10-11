# Game Mania

This project simulates a game catalog by consuming
the [RAWG API](https://rawg.io/apidocs) for providing data visualization similar
to how actual game stores do.

## Summary

* [Dependencies](#dependencies)
    - [Production Dependencies](#production-dependencies)
    - [Development Dependencies](#development-dependencies)
* [Design System](#design-system)
    - [Prototyping](#prototyping)
    - [Palette](#palette)
    - [Typography](#typography)
* Project Structure
    - Assets
        - Fonts
    - Data
        - Context
            - [Root Context]
        - Local Storage
            - [Local Db]
        - Requests
            - [Data Request Params]
        - Types
            - [Added By Status]
            - [Data Service Dictionary]
            - [Developer]
            - [Esrb Rating]
            - [Game]
            - [Game Commons]
            - [Games Platform]
            - [Genre]
            - [Image]
            - [index]
            - [Local Db Store]
            - [Parent Platform]
            - [Platform]
            - [Publisher]
            - [Rating]
            - [Recommended]
            - [Screenshots]
            - [Short Screenshot]
            - [Store]
            - [Tag]
    - Middlewares
        - [Api Middleware]
    - Services
        - [Api Service]
        - [Game Service]
        - [Genre Service]
        - [Platform Service]
        - [Publishe Service]
        - [Tag Service]
    - Utils
        - [Local Db Utils]
        - [Parser Utils]
        - [Startup Utils]
        - [Styling Utils]
        - [Type Utils]
    - Views
        - Components
            - [Footer]
            - [Gallery]
            - [Game Card]
            - [Game Panel]
            - [Header]
            - [Image Card]
            - [Search Filter]
            - [Selection]
        - Pages
            - [Error Page]
        - Routes
            - [Game]
            - [Home]
            - [Root]
            - [Search]

## Dependencies

This project relies directly on the following dependencies:

### Production Dependencies

* axios: ^1.7.7
* react: ^18.3.1
* react-dom: ^18.3.1
* react-router-dom: ^6.26.2

### Development Dependencies

* @eslint/js: ^9.9.0
* @types/react: ^18.3.3
* @types/react-dom: ^18.3.0
* @typescript-eslint/eslint-plugin: ^8.7.0
* @typescript-eslint/parser: ^8.7.0
* @vitejs/plugin-react: ^4.3.1
* eslint: ^9.11.1
* eslint-plugin-react-hooks: ^5.1.0-rc.0
* eslint-plugin-react-refresh: ^0.4.9
* globals: ^15.9.0
* sass: ^1.79.3
* typescript: ^5.5.3
* typescript-eslint: ^8.0.1
* vite: ^5.4.1
* vite-tsconfig-paths: ^5.0.1

## Design System

This section provides information regarding the visual aspects of the project's
layout.

### Prototyping

A simple prototype as built using Figma for providing a general look of how the
application should be implemented. It can be found
on [the project's prototype link](https://www.figma.com/design/NuDXuXFtXRA7aBTbMXg4RA/PROT%C3%93TIPO-GAME-MANIA?node-id=0-1&t=w6hP0w9PStL1vvUt-1)

### Palette

Three base colors were chosen for building up the whole user interface. Along
with these base colors, many tones for each one were provided for applying
transitions, animations, gradients and so on. This palette was generated using
the [Coolors](https://coolors.co) utility.

```scss
$white    : hsla(32, 100%, 97%, 1);
$white-d  : hsla(34, 37%, 93%, 1);
$white-d1 : hsla(34, 23%, 88%, 1);
$white-d2 : hsla(34, 17%, 84%, 1);
$white-d3 : hsla(32, 12%, 79%, 1);
$white-d4 : hsla(37, 10%, 74%, 1);
$white-d6 : hsla(35, 8%, 70%, 1);

$cyan     : hsla(179, 78%, 52%, 1);
$cyan-d   : hsla(179, 72%, 49%, 1);
$cyan-d1  : hsla(179, 73%, 47%, 1);
$cyan-d2  : hsla(179, 73%, 45%, 1);
$cyan-d3  : hsla(179, 73%, 42%, 1);
$cyan-d4  : hsla(179, 73%, 40%, 1);
$cyan-d5  : hsla(179, 74%, 37%, 1);

$black    : #221e22ff;
$black-d  : #1d1a1dff;
$black-d1 : #181518ff;
$black-d2 : #131113ff;
$black-d3 : #0d0c0dff;
$black-d4 : #080808ff;
$black-d5 : #030303ff;
```

These colors can be visualized in the pictures below:

#### White

![WHITE.png](public/WHITE.png)

#### Cyan

![CYAN.png](public/CYAN.png)

#### Black

![BLACK.png](public/BLACK.png)

### Typography

The entire project typography relies on
the [RedHat Display Font](https://github.com/RedHatOfficial/RedHatFont) only,
provided under the SIL Open Font license. All rights reserved.

![img.png](public/REDHAT_DISPLAY_FONT.png)

## Project Structure

This section covers the logical aspects and implementations of the project
through its different layers, for making it work as the expected result.

The Game Mania project's file structure is provided as follows:

* [Assets](#assets)
* [Data](#data)
    - [Context](#context)
    - [Local Storage](#local-storage)
    - [Request Parameters](#request-parameters)
    - [Types](#types)
* [Middlewares]()
* [Services]()
* [Utils]()
* [Views]()

### Assets

### Data

#### Context

#### Local Storage

#### Request Parameters

#### Types

### Middlewares

### Services

### Utils

### Views