# AWS Connect APIs

A middleware platform developed to provide connectivity with the AWS Connect calling services.

## Deployment
Use the following command to install all the relevant dependencies:
```
npm install
```

Use the following command to deploy your changes to AWS Lambda via serverless

```
serverless deploy -v
```

## Usage

Use the following commands to execute the respective endpoints:
#### 1. getPhoneNumbersList
```
curl https://d37i22w4b8.execute-api.eu-west-2.amazonaws.com/dev/getPhoneNumbersList
```

#### 2. connectCall
```
curl -H "Content-Type: application/json" -X POST -d '{"source":"<source number in E.164 format>", "destination":"<source number in E.164 format>"}' https://d37i22w4b8.execute-api.eu-west-2.amazonaws.com/dev/connectCall
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)