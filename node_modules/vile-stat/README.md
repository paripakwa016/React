# vile-stat [![Circle CI](https://circleci.com/gh/forthright/vile-stat.svg?style=shield&circle-token=4f88501f4048011c21e7c0fd561f82c5651cfd9b)](https://circleci.com/gh/forthright/vile-stat) [![Build status](https://ci.appveyor.com/api/projects/status/sw52hyqmiutcalb6/branch/master?svg=true)](https://ci.appveyor.com/project/brentlintner/vile-stat/branch/master) [![score-badge](https://vile.io/api/v0/projects/vile-stat/badges/score?token=USryyHar5xQs7cBjNUdZ)](https://vile.io/~brentlintner/vile-stat) [![coverage-badge](https://vile.io/api/v0/projects/vile-stat/badges/coverage?token=USryyHar5xQs7cBjNUdZ)](https://vile.io/~brentlintner/vile-stat) [![dependency-badge](https://vile.io/api/v0/projects/vile-stat/badges/dependency?token=USryyHar5xQs7cBjNUdZ)](https://vile.io/~brentlintner/vile-stat)

A [Vile](https://vile.io) plugin for tracking various code statistics
including lines/loc, comments, language, and size.

## Requirements

- [Node.js](http://nodejs.org)

## Installation

This plugin is already packaged with [vile's core lib](https://github.com/forthright/vile),
but you can also install it manually:

    npm i -D vile vile-stat

## Usage

    vile a -p stat

*or*

    vile a -p stat src/foo.js

## Config

```yaml
stat:
  allow:
    - foo/bar
  ignore:
    - baz
```

## Versioning

This project uses [Semver](http://semver.org).

## Vile Types Generated

* [STAT](https://docs.vile.io/interfaces/_src__types_index_d_.vile.stat.html)

## Licensing

This project is licensed under the [MPL-2.0](LICENSE) license.

Any contributions made to this project are made under the current license.

## Contributions

Current list of [Contributors](https://github.com/forthright/vile-stat/graphs/contributors).

Any contributions are welcome and appreciated!

All you need to do is submit a [Pull Request](https://github.com/forthright/vile-stat/pulls).

1. Please consider tests and code quality before submitting.
2. Please try to keep commits clean, atomic and well explained (for others).

### Issues

Current issue tracker is on [GitHub](https://github.com/forthright/vile-stat/issues).

Even if you are uncomfortable with code, an issue or question is welcome.

### Code Of Conduct

By participating in this project you agree to our [Code of Conduct](CODE_OF_CONDUCT.md).

### Maintainers

- Brent Lintner - [@brentlintner](http://github.com/brentlintner)

## Architecture

- `bin` houses any shell based scripts
- `src` is es6+ syntax compiled with [Babel](https://babeljs.io)
- `lib` generated js library

## Developing

    cd vile-stat
    npm install
    gem install stat
    npm run dev
    npm test
