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

---

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

---

## Design System

This section provides information regarding the visual aspects of the project's
layout.

### Prototyping

A simple prototype as built using Figma for providing a general look of how the
application should be implemented. It can be found
on [the project's prototype link](https://www.figma.com/design/NuDXuXFtXRA7aBTbMXg4RA/PROT%C3%93TIPO-GAME-MANIA?node-id=0-1&t=w6hP0w9PStL1vvUt-1)

---

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

---

### Typography

The entire project typography relies on
the [RedHat Display Font](https://github.com/RedHatOfficial/RedHatFont) only,
provided under the SIL Open Font license. All rights reserved.

![img.png](public/REDHAT_DISPLAY_FONT.png)

---

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

Assets are static resources that can be used for multiple purposes within
the project. These may include either images, fonts, source text documents etc.

---

### Data

The `@src/data` namespace is meant for containing pieces of software that are
dominant
in the aspects of working with data. It is the namespace containing either
static data models, like types or interfaces, or data operations such as
context, for
global state management, and database abstractions.

#### Context

The `@data/context` module is responsible for providing global state
managements for data that is shared between various UI components of the
system.

The existing contexts in the project are:

* [Root Context](#root-context)

##### Root Context

The `RootContext` is responsible for providing common state management
across the whole application, providing data that is likely to be used
within any existing UI component, not restricted to a given component or an
application route, page or similar.

The data provided by the `RootContext` is defined within the `IRootContext`
interface:

```typescript
export interface IRootContext {
	games?: Game[]
	genres?: Genre[]
	platforms?: Platform[]
	publishers?: Publisher[]
	selectedGame?: Game
	setGames: Dispatch<SetStateAction<Game[] | undefined>>
	setGenres: Dispatch<SetStateAction<Genre[] | undefined>>
	setPlatforms: Dispatch<SetStateAction<Platform[] | undefined>>
	setPublishers: Dispatch<SetStateAction<Publisher[] | undefined>>
	setSelectedGame: Dispatch<SetStateAction<Game | undefined>>
	setTags: Dispatch<SetStateAction<Tag[] | undefined>>
	tags?: Tag[],
	apiMiddleware?: IApiMiddleware
}
```

---

#### Local Storage

The `@data/local-storage` module is responsible for providing client-side database operations. This module actually relies on the `IndexedDB` API implementation of browsers, and is likely to be described as an abstraction layer for simplifying access to the API.

The main representation of the module is the `LocalDb` class, which is an implementation of the `ILocalDb` interface, providing a set of abstractions for working more effectively with the `IndexedDB` API.

This abstraction was required due to the fact that the `IndexedDB` API was specified within an era where Javascript `Promise`s didn't exist and, due to such context, it relies on many callbacks for each internal request for the database. Dealing with that API directly is not recommended, and may lead to inconsistencies within the application.

The `ILocalDb` interface defines the behaviors implemented by the `LocalDb` class, as follows: 

```typescript
export interface ILocalDb<T> {
	openObjectStore(storageName: string, mode: IDBTransactionMode): Promise<IDBObjectStore>

	create<T extends ApiData[]>(storages: { [K in keyof T]: LocalDbStore<T[K]> }): void

	getObjectById(storageName: string, key: number): Promise<T>

	getAll(storageName: string, params?: DataRequestParams): Promise<T[]>

	addObject(storageName: string, object: T): Promise<boolean>

	addBulk(storageName: string, objects: T[]): Promise<ApiData[]>

	removeObject(storageName: string, key: keyof T): Promise<boolean>

	updateObject(storageName: string, key: keyof T, newObject: T): Promise<boolean>

	isCreated(): boolean

	reset(): void
}
```

##### ILocalDb.openObjectStore

---

##### ILocalDb.create

---

##### ILocalDb.getObjectById

--- 

##### ILocalDb.getAll

---

##### ILocalDb.addObject

---

##### ILocalDb.addBulk

---

##### ILocalDb.removeObject

---

##### ILocalDb.updateObject

---


##### ILocalDb.isCreated

---

##### ILocalDb.reset

---

#### Request Parameters

#### Types

### Middlewares

### Services

### Utils

### Views