# United-Way-Web 

# Setup

- Setup `METEOR_SETTINGS` or `settings.dev.json` by contacting another dev

```
$ meteor npm i
$ meteor
```

# Deploy Setup

- Install the heroku developer tools
- Gain access to the heroku build pipeline by contacting another dev
- Run `git remote add heroku git@heroku.com:united-way-staging.git`

# Each Deploy

1. Commit your changes to your branch
1. `npm run deploy` 
1. Verify correctness at `https://united-way-staging.herokuapp.com/`
1. If it looks good **and** your branch is `master`: `heroku pipelines:promote` or promote on the web interface
1. Verify correctness at `https://united-way-production.herokuapp.com/`

# Deploy Debugging

- `heroku logs` is your friend.
