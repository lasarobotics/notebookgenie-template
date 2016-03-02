Notebook Genie Template for LASA Robotics Notebook
============

This is the template used by LASA Robotics in the Notebook Genie project, which generates a complete engineering notebook from Trello data.

# Installation

To install, first have a running Notebook Genie instance, then add this template to your `templates.yml`.

You'll also need to run a few things for this to install properly:

# Testing

To test this package without Notebook Genie, install the following

- NodeJS, `npm` and `bower`
- `pdftk` (from their website)

and then run the following script:

``` shell
npm install
bower install
rm -rf dist
gulp build
```

# Template API
To learn how to build a template, see the NotebookGenie project's `templates/readme.md`.

[t2l-logo]: https://raw.githubusercontent.com/smo-key/trello2latex/master/img/trello2latex-rgb-96.png
