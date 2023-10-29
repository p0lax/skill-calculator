# Skill Calculator task

## Technical stack

Project build with React + TS + MobX and Vite as a build tool.
For testing, I used vitest and react-testing-library

**Technical stack is selected with the assumption we don't need to use solution with canvas**

## How to run?

- `npm run dev` starts the project
- `npm run lint` runs linter job
- `npm run test` run test in watch mode
- `npm run test:coverage` calculates test coverage for the project

## Architecture of the project

The application is implemented with a simple modules architecture, where every domain has a separate folder on every layer of the app
The layers are:

- `features`(can be named differently, for example, `domains`) here we place all the components related to the specific feature.
- `stores` all the business logic of the app should be placed here
- `api` layer is missing because we don't have any integration with the backend

I've considered the calculator as one of many potential modules of the app because many other similar build calculators usually use more screens for presenting information, so in the real situation it would make sense.

### Additional information about project structure

- `Components` that are common for several modules should be placed in the common components folder in src. In the future components folder could be split into `UI` and `business` components. In the scope of the current task, I didn't find components that deserve placing to this common folder.

- `Types` can have subfolders by domain, but in the first phase I get used to making just files for types with proper names

## Solution description

The main logic of the app is placed at the `store` level and `view`(components) layer is pretty thin and simple.

For the implementation, I've used the following data structures:

- simple map for storing skill trees
- double linked list for each tree, with "links"(represented by id, so it's not not real linked list) to prev and next items.
- map for quick access to the skill, this way I can effectively get full info about the skill by id
- Set for storing selected skills by compound key(from skill tree and skill id), which allows us not to check if the item is unique every time and we can theoretically use skill in both trees if we want.

## Solution limitations

- selected data structure covers all the requirements in case the skill tree has only one connection per skill. In case we would like to implement a more complex structure of the skill tree we should consider a different way of storing data. I've considered other options but decided not to overengineer the simple task with cumbersome data structures for all the cases.
- sizes of some items(and some colors) are different compared to the example because I didn't have the possibility to measure it precisely.
- I didn't have time to all the code quality tools setup, so the project doesn't have a prettier and full set of linter rules
- I covered only basic scenarios and stores with tests, because of the lack of time
- tool is not tested with other tree configuration, so increasing amount of skills per tree will break the layout
