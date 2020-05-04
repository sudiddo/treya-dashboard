// const ghpages = require("gh-pages")
import ghpages from "gh-pages"

// replace with your repo url
ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/sudiddo/treya-dashboard.git",
  },
  () => {
    console.log("Deploy Complete!")
  }
)
