# News

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/News/api](https://m3o.com/News/api).

Endpoints:

## Headlines

Get the latest news headlines

[https://m3o.com/news/api#Headlines](https://m3o.com/news/api#Headlines)

```js
const { NewsService } = require("m3o/news");

const newsService = new NewsService(process.env.M3O_API_TOKEN);

// Get the latest news headlines
async function getNewsHeadlines() {
  const rsp = await newsService.headlines({
    date: "2021-11-24",
    language: "en",
    locale: "us",
  });
  console.log(rsp);
}

getNewsHeadlines();
```
