{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build"
    }
  ],
  "routes": [
    {
      "src": "/(.*\\.(js|css|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico|json))",
      "dest": "/$1"
    },
    {
      "src": "/.*",
      "dest": "/index.html"
    }
  ]
}
