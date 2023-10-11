This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).



## Getting Started

for mac, 

First step to add ios and android inside folder `apps/nextjs-capacitor`
```bash
npx cap add ios
npx cap add android
```

Sync project
```bash
npx cap sync
```

# Ios

## Needs
- XCODE (via appstore)
- cocoapods
```bash
brew install cocoapods
```

## Troubleshooting
### Fix iOS xcode-select: error
src : https://github.com/nodejs/node-gyp/issues/569
```bash
xcode-select --install # Install Command Line Tools if you haven't already.
sudo xcode-select --switch /Library/Developer/CommandLineTools # Enable command line tools

# Change the path if you installed Xcode somewhere else.
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

### Pods-debug
You can try to delete pods config inside `ios/App` with this tow commands : 
```bash
pod reintegrate
pod install
```


## Learn More
- [Next.js Documentation](https://nextjs.org/docs) 
- [CapacitorJS](https://capacitorjs.com/docs)
