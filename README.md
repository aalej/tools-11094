# Repro for issue 11094

## Versions

firebase-tools: v15.30.1
```
$ npm ls
functions@ /Users/PATH/firebase-tools/issues/11094/functions
├── firebase-admin@13.10.0
├── firebase-functions-test@3.5.0
└── firebase-functions@7.4.0
```

## Steps to reproduce

1. Install dependencies
2. Run `firebase emulators:start --project demo-project`
3. Open http://localhost:5000 in your browser
4. Create a user using the form
5. Check the terminal output for the `console.log('user created:', event.data.uid);`
   - No logs indicating functions `testOnUserCreatedv2` was created
```
$ firebase emulators:start --project demo-project
i  emulators: Starting emulators: auth, functions, hosting, extensions
i  emulators: Detected demo project ID "demo-project", emulated services will use a demo configuration and attempts to access non-emulated services for this project will fail.
⚠  functions: Application Default Credentials detected. Non-emulated services will access production using these credentials. Be careful!
i  hosting[demo-project]: Serving hosting files from: public
✔  hosting[demo-project]: Local server: http://127.0.0.1:5000
i  functions: Watching "/Users/PATH/Desktop/firebase-tools/issues/11094/functions" for Cloud Functions...
✔  functions: Using node@24 from host.
Serving at port 8051

⚠  functions: Application Default Credentials detected. Non-emulated services will access production using these credentials. Be careful!
✔  functions: Loaded functions definitions from source: .

┌─────────────────────────────────────────────────────────────┐
│ ✔  All emulators ready! It is now safe to connect your app. │
│ i  View Emulator UI at http://127.0.0.1:4000/               │
└─────────────────────────────────────────────────────────────┘

┌────────────────┬────────────────┬──────────────────────────────────┐
│ Emulator       │ Host:Port      │ View in Emulator UI              │
├────────────────┼────────────────┼──────────────────────────────────┤
│ Authentication │ 127.0.0.1:9099 │ http://127.0.0.1:4000/auth       │
├────────────────┼────────────────┼──────────────────────────────────┤
│ Functions      │ 127.0.0.1:5001 │ http://127.0.0.1:4000/functions  │
├────────────────┼────────────────┼──────────────────────────────────┤
│ Hosting        │ 127.0.0.1:5000 │ n/a                              │
├────────────────┼────────────────┼──────────────────────────────────┤
│ Extensions     │ 127.0.0.1:5001 │ http://127.0.0.1:4000/extensions │
└────────────────┴────────────────┴──────────────────────────────────┘
  Emulator Hub host: 127.0.0.1 port: 4400
  Other reserved ports: 4500
┌─────────────────────────┬───────────────┬─────────────────────┐
│ Extension Instance Name │ Extension Ref │ View in Emulator UI │
└─────────────────────────┴───────────────┴─────────────────────┘
Issues? Report them at https://github.com/firebase/firebase-tools/issues and attach the *-debug.log files.
 
i  hosting: 127.0.0.1 - - [17/Sep/2026:16:58:21 +0000] "GET / HTTP/1.1" 200 - "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36"
i  hosting: 127.0.0.1 - - [17/Sep/2026:16:58:21 +0000] "GET /__/firebase/init.js?useEmulator=true HTTP/1.1" 200 - "http://localhost:5000/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36"
i  hosting: 127.0.0.1 - - [17/Sep/2026:16:58:21 +0000] "GET /__/firebase/12.19.0/firebase-auth-compat.js HTTP/1.1" 200 40467 "http://localhost:5000/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36"
i  hosting: 127.0.0.1 - - [17/Sep/2026:16:58:21 +0000] "GET /__/firebase/12.19.0/firebase-functions-compat.js HTTP/1.1" 200 4234 "http://localhost:5000/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36"
i  hosting: 127.0.0.1 - - [17/Sep/2026:16:58:21 +0000] "GET /__/firebase/12.19.0/firebase-app-compat.js HTTP/1.1" 200 10262 "http://localhost:5000/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36"
i  hosting: 127.0.0.1 - - [17/Sep/2026:16:58:21 +0000] "GET /favicon.ico HTTP/1.1" 404 - "http://localhost:5000/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36"

```


## Notes

It works fine in production, issue only seems to occur on the emulators