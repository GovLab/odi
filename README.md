[![Build Status](https://travis-ci.org/GovLab/open-data-impact-case-studies.svg?branch=master)](https://travis-ci.org/GovLab/open-data-impact-case-studies)

This is the Open Data Impact Case Studies website.

## Requirements

* Python 2.7
* [pip and virtualenv](http://stackoverflow.com/q/4324558)
* [SASS](http://sass-lang.com/install) (Optional)

## Quick Start

```
virtualenv venv

# On Windows, replace the following line with 'venv\Scripts\activate'.
source venv/bin/activate

pip install -r requirements.txt
```

To develop the site, run `python build.py runserver` and visit
http://localhost:7000/. All static assets will be rebuilt as
you change them. However, if `sass` isn't on your command-line,
your SASS files won't be rebuilt.

The `site` directory will contain the generated website files.

## Deployment

To deploy the site, run `python build.py deploy`.
