# private-npm-publish [![Build Status](https://travis-ci.org/dwango-js/private-npm-publish.svg)](https://travis-ci.org/dwango-js/private-npm-publish)

A command line tool to prevent accidental `npm publish` for [scoped packages](https://docs.npmjs.com/misc/scope "Scoped packages").

This command is wrapper of `npm publish`.

Just a simple tool: 

1. Check the validity of scoped packages?
2. Run `npm publish` => to your private registry!

## Installation

    npm install -g private-npm-publish

## Usage

    $ private-npm-publish
    # == Check the package and `npm publish`

## Tests

    # npm test

## FAQ

### Why wrapper command?
   
npm command doesn't provide global hook for `npm publish`.   

### I don't know what to do.

Workflow: Create npm package -> publish private.

```sh
# the safety way for creating scoped packages
npm login —registry=http://example.com —scope=@myorg
npm config set @myorg:registry: http://example.com
npm init mypackage —scope=myorg
# the safety way for publishing scoped packages
npm install -g private-npm-publish
private-npm-publish
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT