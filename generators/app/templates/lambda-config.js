module.exports = {
  //profile: <shared credentials profile name>, // optional for loading AWS credientail from custom profile
  region: 'us-east-1',
  handler: 'index.handler',
  role: 'arn:aws:iam::594833901287:role/lambda_basic_execution',
  functionName: '<%= name %>',
  timeout: 10,
  memorySize: 128/*,
  eventSource: {
    EventSourceArn: <event source such as kinesis ARN>,
    BatchSize: 200,
    StartingPosition: "TRIM_HORIZON"
  }*/
}
