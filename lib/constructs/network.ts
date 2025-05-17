import type * as cdk from "aws-cdk-lib";
import { Tags } from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";

export interface NetworkConstructProps extends cdk.StackProps {}

export class NetworkConstruct extends Construct {
  public readonly vpc: ec2.Vpc;
  constructor(scope: Construct, id: string, props: NetworkConstructProps) {
    super(scope, id);

    this.vpc = new ec2.Vpc(this, "base-vpc", {
      vpcName: "base-vpc",
      ipAddresses: ec2.IpAddresses.cidr("10.0.0.0/16"),
      maxAzs: 2,
      enableDnsSupport: true,
      enableDnsHostnames: true,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: ec2.SubnetType.PUBLIC,
          subnetType: ec2.SubnetType.PUBLIC,
        },
        {
          cidrMask: 24,
          name: ec2.SubnetType.PRIVATE_ISOLATED,
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
        },
      ],
    });
    Tags.of(this.vpc).add("Name", "base-vpc");
  }
}
