# Background

The provider directory helps healthcare providers find and connect with other healthcare providers. It acts as a personal address book of provider email addresses. Specialty is very important when searching as providers often look for available providers within in a particular specialty.

This is a Provider Directory demonstration application using AngularJS, Bootstrap, and Mocha & Chai.

## Getting started

I didn't bother with a whole `gulp`/`grunt` build system for this demo. So either follow the below, or just use the necessary files that were included manually.

* Download the repository
* Optionally, to get a fresh set of everything necessary:
  * `yarn`
  * `yarn global add bower` (if not already installed in your global store)
  * `bower install`
* And/or just rely on the provided `bower_components`, then:
* Open [`index.html`](index.html) in a browser. Enjoy.

## Running the tests

* Follow the Getting Started instructions above
* Open [`test.html`](test.html) in a browser.

(Could have run these with node... But this way it is super easy on the user to setup the environment—all you need is this repository, a basic `npm` install, and a modern browser.)

## Developing

Normally, I would setup a `yeoman` template with `gulp`, `less`, image/css/js minification, probably some TypeScript, webpack, etc. But all that seemed overkill for a code kata.

See the in-production [`ds-hsgc-api-samples/widgets`](https://github.com/jon-adams/ds-hsgc-api-samples/tree/master/widgets) repository that I maintain for a more complete example.

Instead going with a simpler but standard `npm` style (but using the more modern `yarn`) and `bower` for development environment setup. Scripts/styles are injected manually for demonstration purposes only.

## Featuring

* AngularJS directives and controller
* AngularJS markup
* CRUD
  * Read-only display
  * Deletion
  * Creation
* Sorting
* Search
* Mobile-friendly (resize your browser as big and small as you want)

## Original Demo Requirements

* Should load the hard-coded data into the existing data section on page load.
* Should have the ability to create providers that will immediately prepend to the list on submit.
* Should have the ability to remove selected providers from the list.
* Should have the ability to sort the list by any of the fields, both ascending and descending.
* Type ahead searching is a nice to have.
* Should not require a web server, and should be able to run offline.
* Last Name, First Name and Email Address are required fields.
* All data exchanges should be in JSON format.
