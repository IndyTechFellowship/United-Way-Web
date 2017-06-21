# United-Way-Web 

# Setup

- Setup `METEOR_SETTINGS` or `settings.dev.json` by contacting another dev

```
$ meteor npm i
$ meteor
```

# Deploy

- Any merges to master will trigger a deploy to staging. 
- Once staging is verified as working, you can promote to prod on the heroku website or using `heroku pipelines:promote`

# Deploy Debugging

- `heroku logs` is your friend.