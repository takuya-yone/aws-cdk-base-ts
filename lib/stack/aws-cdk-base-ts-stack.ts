import * as cdk from "aws-cdk-lib";
import type { Construct } from "constructs";
import { NetworkConstruct } from "../constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsCdkBaseTsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const networkConstruct = new NetworkConstruct(this, "NetworkConstruct", {});
  }
}
