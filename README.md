# react-table
Generates table from external API data.
## setup
```
npm start
```

## run tests
```
npm run test
```
### bugs
There are issues with passing down props in async queries. Example: when sorting data then passing it down to a component on the client side, the props points to both empty object and stateful object. Check out the 'poof' console log.