Notebook Genie Template for LASA Robotics Notebook
============

This is the template used by LASA Robotics in the Notebook Genie project, which generates a complete engineering notebook from Trello data.

# Installation

To install, first have a running Notebook Genie instance, then add this template to your `templates.yml`.

You'll also need to install a few things for this to install properly - **be sure to have them in your `PATH`**:
- NodeJS, `npm` and `bower`
- `pdftk` (from their website)
- `prince` (from PrinceXML's website)


# Testing

To test this package without Notebook Genie, install all dependencies, then run `install.sh` then `node render.js` to render the page. The output PDF should be in the `dist/` folder and should contain a lot of `{{ }}`, or Mustache tags used to build the notebook in Notebook Genie.

After running the `install.sh` script once, you can run `gulp watch`, which would constantly rebuild the HTML template when you make a change. **Use this method when creating your own template design - this allows you to design the template without the need to rerun the entire Notebook Genie.**

# Template API
To learn how to build a template, see the NotebookGenie project's `templates/readme.md`.
