# Sentiment

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Sentiment/api](https://m3o.com/Sentiment/api).

Endpoints:

## Analyze

Analyze and score a piece of text


[https://m3o.com/sentiment/api#Analyze](https://m3o.com/sentiment/api#Analyze)

```js
const { SentimentService } = require('m3o/sentiment');

const sentimentService = new SentimentService(process.env.M3O_API_TOKEN)

// Analyze and score a piece of text
async function analyzeApieceOfText() {
	const rsp = await sentimentService.analyze({
  "text": "this is amazing"
})
	console.log(rsp)
	
}

analyzeApieceOfText()
```
