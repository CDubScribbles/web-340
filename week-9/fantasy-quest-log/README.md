# Fantasy Quest Log

## What the Application Does
The Fantasy Quest Log is a small modular Node.js application that allows 
a user to create and retrieve fantasy game quests stored in a JSON file. 
Quests have a title, class (Warrior, Mage, Rogue), difficulty, and 
completion status.

## How to Run It
1. Install dependencies:
   npm install

2. Run the application:
   node src/quest-manager.js

## How to Run Tests
   npm test

## What Failure Case is Handled
If the quest log file does not exist, the application throws a meaningful 
Error with a descriptive message rather than crashing silently or returning 
inconsistent data. This is tested in the fourth unit test:

   "throws a meaningful error when quest log file does not exist"