#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { ReportsStack } from "../lib/reports-stack";

const app = new cdk.App();

new ReportsStack(app, "AdmfReportsStack", {
  env: {
    account: "381492234121",
    region: "us-east-1",
  },
});
