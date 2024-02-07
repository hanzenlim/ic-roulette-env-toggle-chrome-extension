chrome.action.onClicked.addListener((tab) => {
  let newUrl = tab.url;

  // Check if "staging" is in the URL and replace it with "production"
  if (newUrl.includes("staging")) {
    newUrl = newUrl.replace("staging", "production");
  }
  // Check if "production" is in the URL and replace it with "staging"
  else if (newUrl.includes("production")) {
    newUrl = newUrl.replace("production", "staging");
  }

  else if (newUrl.includes("experiments.instacart.tools")) {
    newUrl = newUrl.replace("experiments.instacart.tools", "web-tux-tools-stg.instacart.team");
  }

  else if (newUrl.includes("web-tux-tools-stg.instacart.team")) {
    newUrl = newUrl.replace("web-tux-tools-stg.instacart.team", "experiments.instacart.tools");
  }

  // Update the tab's URL if it was modified
  if (newUrl !== tab.url) {
    chrome.tabs.update(tab.id, {url: newUrl});
  }
});

