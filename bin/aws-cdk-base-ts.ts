import * as cdk from "aws-cdk-lib";
// import { AwsSolutionsChecks } from "cdk-nag";
import { AwsCdkBaseTsStack } from "../lib/stack/aws-cdk-base-ts-stack";

const app = new cdk.App();
new AwsCdkBaseTsStack(app, "AwsCdkBaseTsStack", {});
cdk.Tags.of(app).add("Project", "aws-cdk-base-ts");

// cdk.Aspects.of(app).add(new AwsSolutionsChecks({ verbose: true }));
