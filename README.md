# Overview

Provider Directory demonstration application of AngularJS and Bootstrap.

## Getting started

Open `index.html` in a browser. Enjoy.

## Development

Normally, I would setup a `yeoman` template with `gulp`, `less`, image/css/js minification, probably some TypeScript, etc. But all that seemed overkill for a code kota. Instead going with a simpler but standard `npm` style (but using the more modern `yarn`) and `bower` for development environment setup. Scripts/styles are injected manually for demonstration purposes only.

## To-do/dev plan

* TDD with mocha and chai
* Start with provided data
* Basic HTML layout/style
* AngularJS directives and controller
* AngularJS markup
* CRUD
  * Read-only display
  * Deletion
  * Creation
* Sorting
* Search, if I get the time

## Requirements

* Should load the hard-coded data into the existing data section on page load.
* Should have the ability to create providers that will immediately prepend to the list on submit.
* Should have the ability to remove selected providers from the list.
* Should have the ability to sort the list by any of the fields, both ascending and descending.
* Type ahead searching is a nice to have.
* Should not require a web server, and should be able to run offline.
* Last Name, First Name and Email Address are required fields.
* All data exchanges should be in JSON format.